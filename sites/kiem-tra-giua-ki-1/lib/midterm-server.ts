import crypto from "node:crypto";
import { scoreObjective } from './midterm-scoring';
import { env } from "cloudflare:workers";
const settings = env as unknown as Record<string, string | undefined>;
import { REVIEW_MC, REVIEW_TF, REVIEW_ESSAYS } from "@/data/review-10";
import { tronPhuongAn } from "@/lib/tron-phuong-an";
import { MIDTERM_CLASSES, type Attempt, type ExamAnswers, type MidtermState, type Paper, type PublicPaper, type Room, type StudentView } from "./midterm-types";

export class ExamError extends Error {
  constructor(message: string, public status = 400) { super(message); }
}
export function fail(message: string, status = 400): never { throw new ExamError(message, status); }
const digest = (text: string) => crypto.createHash("sha256").update(text).digest("hex");
export function same(a: string, b: string) { return crypto.timingSafeEqual(Buffer.from(digest(a)), Buffer.from(digest(b))); }
async function derive(code: string, salt: string) {
 const key = await crypto.webcrypto.subtle.importKey("raw", new TextEncoder().encode(code), "PBKDF2", false, ["deriveBits"]);
 const bits = await crypto.webcrypto.subtle.deriveBits({name:"PBKDF2", hash:"SHA-256", salt:new TextEncoder().encode(salt), iterations:100000}, key, 256);
 return Buffer.from(bits).toString("hex");
}
export async function hashCode(code: string) { const salt=crypto.randomBytes(16).toString("hex");return salt+":"+await derive(code,salt); }
export async function checkCode(code: string, stored: string) { const [salt,hash]=stored.split(":");return !!salt&&!!hash&&same(await derive(code,salt),hash); }
export function passwordMatches(state:MidtermState,password:string) { return state.security?.adminPasswordHash ? checkCode(password,state.security.adminPasswordHash) : Promise.resolve(same(password,settings.MIDTERM_ADMIN_PASSWORD||'')); }
function secret() {
  const s = settings.MIDTERM_SESSION_SECRET;
  if (!s || s.length < 32) fail("Chưa cấu hình khóa bảo vệ phòng thi (MIDTERM_SESSION_SECRET).", 503);
  return s!;
}
export function configured() { return !!settings.MIDTERM_ADMIN_PASSWORD && (settings.MIDTERM_SESSION_SECRET?.length ?? 0) >= 32; }
export function signSession(payload: Record<string, unknown>) {
  const body = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + 12 * 60 * 60 * 1000 })).toString("base64url");
  return body + "." + crypto.createHmac("sha256", secret()).update(body).digest("base64url");
}
export function readSession(token: string | undefined): Record<string, unknown> | null {
  if (!token) return null;
  try {
    const [body, signature, extra] = token.split(".");
    if (extra || !signature || !same(signature, crypto.createHmac("sha256", secret()).update(body).digest("base64url"))) return null;
    const data = JSON.parse(Buffer.from(body, "base64url").toString());
    return typeof data.exp === "number" && data.exp > Date.now() ? data : null;
  } catch { return null; }
}
export function initialState(): MidtermState {
  return { version: 1, rooms: MIDTERM_CLASSES.map(id => ({ id, opensAt: "", closesAt: "", duration: 45, status: "draft", codeHash: "", startedAt: null, endsAt: null, allowLate: false, roster: [] })), attempts: [], audit: [] };
}
export { transaction } from "./midterm-storage";
export function audit(state: MidtermState, roomId: string, action: string) { state.audit.push({ at: Date.now(), roomId, action }); }
export function findRoom(s: MidtermState, id: unknown) { return s.rooms.find(r => r.id === id) ?? fail("Lớp không hợp lệ."); }
export function nameKey(name: string) { return name.normalize('NFKC').trim().replace(/\s+/g,' ').toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d'); }
export function prepareRoster(room: Room, input: unknown): Room['roster'] {
  if(!Array.isArray(input)||!input.length||input.length>100)fail('Nhập danh sách từ 1 đến 100 học sinh, mỗi dòng một họ tên.');
  const roster=input.map((value:unknown)=>{
    const entry=value&&typeof value==='object'&&!Array.isArray(value)?value as {id?:unknown;name?:unknown}:null;
    const name=typeof value==='string'?value:entry?.name;
    if(typeof name!=='string'||name.trim().length<3||name.length>80)fail('Mỗi dòng cần đầy đủ họ và tên, từ 3 đến 80 ký tự.');
    const cleaned=(name as string).trim().replace(/\s+/g,' ');
    const existing=room.roster.find(s=>nameKey(s.name)===nameKey(cleaned));
    const provided=entry?.id;
    if(provided!==undefined&&provided!==''&&(typeof provided!=='string'||!/^[A-Za-z0-9_-]{1,30}$/.test(provided)))fail('Thông tin danh sách không hợp lệ. Thầy tải lại trang và nhập mỗi dòng một họ tên.');
    const id=existing?.id||(typeof provided==='string'&&provided?provided.toUpperCase():'HS'+crypto.randomUUID().replace(/-/g,'').slice(0,24).toUpperCase());
    return {id,name:cleaned};
  });
  if(new Set(roster.map(s=>s.id)).size!==roster.length)fail('Danh sách có học sinh bị trùng.');
  if(new Set(roster.map(s=>nameKey(s.name))).size!==roster.length)fail('Danh sách có họ tên trùng nhau. Thầy thêm dấu hiệu phân biệt vào tên để học sinh nhập đúng tên riêng của mình.');
  return roster;
}
export function studentByName(room: Room, name: unknown) {
  if(typeof name!=='string'||name.trim().length<3||name.length>80)fail('Em nhập đầy đủ họ và tên từ 3 đến 80 ký tự.');
  const matches=room.roster.filter(s=>nameKey(s.name)===nameKey(name as string));
  if(!matches.length){
    if(room.roster.length>=100)fail('Phòng đã đủ 100 học sinh. Em liên hệ thầy.',403);
    const student={id:'HS'+crypto.randomUUID().replace(/-/g,'').slice(0,24).toUpperCase(),name:(name as string).normalize('NFKC').trim().replace(/\s+/g,' ')};
    room.roster.push(student);return student;
  }
  if(matches.length>1)fail('Có học sinh trùng họ tên trong lớp. Em báo thầy để xác nhận danh sách.',409);
  return matches[0];
}
export function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) { const j = crypto.randomInt(i + 1); [out[i], out[j]] = [out[j], out[i]]; }
  return out;
}
export function createPaper(): Paper {
  const quotas = [["nhan-biet", 6], ["thong-hieu", 5], ["van-dung", 3], ["van-dung-cao", 2]] as const;
  let selected: typeof REVIEW_MC = [];
  for (let i = 0; i < 500; i++) {
    selected = quotas.flatMap(([level, count]) => shuffle(REVIEW_MC.filter(q => q.level === level)).slice(0, count));
    if (new Set(selected.map(q => q.lesson)).size === 7) break;
  }
  if (new Set(selected.map(q => q.lesson)).size !== 7) fail("Không tạo được đề đủ phạm vi, vui lòng thử lại.", 503);
  const tf = [shuffle(REVIEW_TF.filter(q => q.level === "nhan-biet"))[0], shuffle(REVIEW_TF.filter(q => q.level === "thong-hieu"))[0], shuffle(REVIEW_TF.filter(q => q.level === "van-dung" || q.level === "van-dung-cao"))[0]];
  // Both essay groups and their maximum score are the same for every student.
  const essays = [shuffle(REVIEW_ESSAYS.filter(q => q.level === "nhan-biet" || q.level === "thong-hieu"))[0], shuffle(REVIEW_ESSAYS.filter(q => q.level === "van-dung" || q.level === "van-dung-cao"))[0]];
  return {
    mc: shuffle(selected).map(q => { const mixed = tronPhuongAn(q, () => crypto.randomInt(0x1000000) / 0x1000000); return { id: q.id, lesson: q.lesson, level: q.level, q: q.q, code: q.code, options: mixed.shuffledOptions, answer: mixed.correctIndex }; }),
    tf: shuffle(tf).map(q => ({ id: q.id, lesson: q.lesson, level: q.level, context: q.context, code: q.code, statements: q.statements.map(s => ({ text: s.text, answer: s.answer })) })),
    essays: shuffle(essays).map(q => ({ id: q.id, lesson: q.lesson, level: q.level, q: q.q, code: q.code, answer: q.answer, rubric: q.rubric })),
  };
}
export function publicPaper(p: Paper): PublicPaper {
  return { mc: p.mc.map(({ answer: _a, ...q }) => q), tf: p.tf.map(({ statements, ...q }) => ({ ...q, statements: statements.map(({ text }) => ({ text })) })), essays: p.essays.map(({ answer: _a, rubric: _r, ...q }) => q) };
}
export function emptyAnswers(): ExamAnswers { return { mc: Array(16).fill(null), tf: Array.from({ length: 3 }, () => Array(4).fill(null)), essays: ["", ""] }; }
export function validateAnswers(input: unknown): ExamAnswers {
  if (!input || typeof input !== "object") fail("Bài làm không hợp lệ.");
  const a = input as ExamAnswers;
  if (!Array.isArray(a.mc) || a.mc.length !== 16 || a.mc.some(v => v !== null && (!Number.isInteger(v) || v < 0 || v > 3)) || !Array.isArray(a.tf) || a.tf.length !== 3 || a.tf.some(row => !Array.isArray(row) || row.length !== 4 || row.some(v => v !== null && typeof v !== "boolean")) || !Array.isArray(a.essays) || a.essays.length !== 2 || a.essays.some(v => typeof v !== "string" || v.length > 10000)) fail("Bài làm sai cấu trúc hoặc tự luận quá 10.000 ký tự.");
  return { mc: [...a.mc], tf: a.tf.map(row => [...row]), essays: [...a.essays] };
}
export function objectiveScore(p: Paper, a: ExamAnswers) {
  return scoreObjective(p,a).total;
}
export function submit(a: Attempt, at = Date.now()) {
  if (a.submittedAt !== null || !a.paper) return;
  a.submittedAt = at; a.objectiveScore = objectiveScore(a.paper, a.answers);
}
export function settle(state: MidtermState, now = Date.now()) {
  for (const room of state.rooms) {
    if (room.status === "running" && room.endsAt && now >= room.endsAt) {
      room.status = "closed";
      for (const a of state.attempts.filter(a => a.roomId === room.id)) submit(a, room.endsAt);
      audit(state, room.id, "Hết giờ: tự động nộp phần bài đã lưu.");
    }
  }
}
export function studentView(state: MidtermState, a: Attempt): StudentView {
  const room = findRoom(state, a.roomId);
  if (Date.now() - a.lastSeen > 10000) a.lastSeen = Date.now();
  return { now: Date.now(), room: { id: room.id, status: room.status, opensAt: room.opensAt, closesAt: room.closesAt, duration: room.duration, endsAt: room.endsAt }, attempt: { id: a.id, name: a.name, studentId: a.studentId, revision: a.revision, savedAt: a.savedAt, submittedAt: a.submittedAt, answers: a.answers, paper: room.status === "running" && a.submittedAt === null && a.paper ? publicPaper(a.paper) : null } };
}
export function authenticateStudent(s: MidtermState, session: Record<string, unknown> | null): Attempt {
  if (!session || session.role !== "student" || typeof session.token !== "string") fail("Em cần vào lại phòng kiểm tra.", 401);
  const a = s.attempts.find(a => a.id === session!.id);
  if (!a || !same(a.tokenHash, digest(session!.token as string))) fail("Phiên làm bài đã đổi. Hãy liên hệ thầy để mở lại.", 401);
  return a!;
}
export function newAttempt(room: Room, studentId: string) {
  const student = room.roster.find(s => s.id === studentId) ?? fail("Mã học sinh chưa có trong danh sách lớp.", 403);
  const token = crypto.randomBytes(32).toString("hex");
  const attempt: Attempt = { id: crypto.randomUUID(), roomId: room.id, studentId, name: student.name, tokenHash: digest(token), joinedAt: Date.now(), lastSeen: Date.now(), paper: room.status === "running" ? createPaper() : null, answers: emptyAnswers(), revision: 0, savedAt: null, submittedAt: null, objectiveScore: null, essayScores: [null, null], feedback: "" };
  return { attempt, token };
}
export function resetSession(a: Attempt) { a.tokenHash = ""; }
export function issueStudentSession(a: Attempt) { const token = crypto.randomBytes(32).toString("hex"); a.tokenHash = digest(token); return signSession({ role: "student", id: a.id, token }); }
