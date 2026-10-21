import { NextRequest, NextResponse } from "next/server";
import { authenticateStudent, audit, checkCode, configured, createPaper, ExamError, fail, findRoom, hashCode, issueStudentSession, newAttempt, readSession, resetSession, same, signSession, studentView, submit, transaction, validateAnswers } from "@/lib/midterm-server";
import type { MidtermState } from "@/lib/midterm-types";
import { passwordMatches, prepareRoster, studentByName } from '@/lib/midterm-server';
import { scoreObjective } from '@/lib/midterm-scoring';

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const ADMIN_COOKIE = "midterm_admin";
const STUDENT_COOKIE = "midterm_student";
const buckets = new Map<string, { count: number; until: number }>();
function rate(req: NextRequest, action: string, maximum: number) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const key = ip + ":" + action, now = Date.now();
  buckets.forEach((entry, key) => { if (entry.until < now) buckets.delete(key); });
  const entry = buckets.get(key) ?? { count: 0, until: now + 600000 };
  entry.count++; buckets.set(key, entry);
  if (entry.count > maximum) fail("Đã thử quá nhiều lần. Vui lòng đợi 10 phút.", 429);
}
function cookie(req: NextRequest, name: string) { return readSession(req.cookies.get(name)?.value); }
function admin(req: NextRequest, state?:MidtermState) { const session=cookie(req,ADMIN_COOKIE);if(session?.role!=="admin")fail("Thầy cần đăng nhập quản lí.",401);if(state&&(session?.sessionVersion??0)!==(state.security?.adminSessionVersion??0))fail('Mật khẩu đã thay đổi. Thầy đăng nhập lại bằng mật khẩu mới.',401); }
function json(data: unknown, status = 200) { return NextResponse.json(data, { status, headers: { "Cache-Control": "no-store" } }); }
function withCookie(response: NextResponse, name: string, value: string) { response.cookies.set(name, value, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", maxAge: 43200, path: "/" }); return response; }
function clearCookie(response:NextResponse,name:string) { response.cookies.set(name,'',{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/',maxAge:0,expires:new Date(0)});return response; }
function error(e: unknown) { if (e instanceof ExamError) return json({ error: e.message }, e.status); console.error("Midterm request failed", e instanceof Error ? e.message : "unknown"); return json({ error: "Chưa lưu được dữ liệu. Giữ trang và thử lại; nếu kéo dài hãy báo thầy." }, 503); }
function adminView(s: MidtermState) {
  return { now: Date.now(), rooms: s.rooms.map(({ codeHash: _code, ...r }) => r), attempts: s.attempts.map(({ tokenHash: _token, paper, answers, ...a }) => ({ ...a, objectiveBreakdown:a.submittedAt!==null&&paper?scoreObjective(paper,answers):null, answeredCount: answers.mc.filter(v => v !== null).length + answers.tf.filter(row => row.every(v => v !== null)).length + answers.essays.filter(v => v.trim()).length })), audit: s.audit.slice(-100).reverse() };
}
export async function GET(req: NextRequest) {
  try {
    const action = req.nextUrl.searchParams.get("action");
    if (action === "admin" || action === "export" || action === "detail") {
      admin(req);
      return await transaction(async s => {
        admin(req,s);
        if (action === "admin") return json(adminView(s));
        if (action === "detail") { const a = s.attempts.find(a => a.id === req.nextUrl.searchParams.get("attemptId")) ?? fail("Không tìm thấy bài.", 404); const { tokenHash: _token, ...detail } = a; return json(detail); }
        const csv = (value: unknown) => { const v = String(value ?? ""); return '"' + (/^[=+\-@\t\r]/.test(v) ? "'" + v : v).replace(/"/g, '""') + '"'; };
        const rows = [["Lớp", "Mã học sinh", "Họ tên", "Nộp lúc", "TNKQ /4", "Đúng–sai /3", "Khách quan /7", "Tự luận 1 /1.5", "Tự luận 2 /1.5", "Tổng /10", "Nhận xét", "Bài tự luận 1", "Bài tự luận 2"], ...s.attempts.map(a => [a.roomId, a.studentId, a.name, a.submittedAt ? new Date(a.submittedAt).toISOString() : "Chưa nộp", a.submittedAt!==null&&a.paper?scoreObjective(a.paper,a.answers).mc:"", a.submittedAt!==null&&a.paper?scoreObjective(a.paper,a.answers).tf:"", a.objectiveScore, ...a.essayScores, a.objectiveScore !== null && a.essayScores.every(v => v !== null) ? Math.round((a.objectiveScore + a.essayScores.reduce<number>((n, v) => n + (v ?? 0), 0)) * 100) / 100 : "Chưa chấm đủ", a.feedback, ...a.answers.essays])];
        return new NextResponse("\uFEFF" + rows.map(row => row.map(csv).join(",")).join("\r\n"), { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": 'attachment; filename="giua-ki-1-tin-10.csv"', "Cache-Control": "no-store" } });
      });
    }
    if (action === "status") return await transaction(s => json(studentView(s, authenticateStudent(s, cookie(req, STUDENT_COOKIE)))));
    return await transaction(s => json({ configured: configured(), now: Date.now(), rooms: s.rooms.map(r => ({ id: r.id, status: r.status, opensAt: r.opensAt, closesAt: r.closesAt, duration: r.duration })) }));
  } catch (e) { return error(e); }
}
export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin");
    if (!origin || new URL(origin).origin !== req.nextUrl.origin) fail("Nguồn thao tác không hợp lệ. Mở lại từ trang kiểm tra.", 403);
    const raw = await req.text(); if (raw.length > 100000) fail("Nội dung gửi quá dài.", 413);
    let b: Record<string, unknown>; try { b = JSON.parse(raw); } catch { return json({ error: "Dữ liệu không hợp lệ." }, 400); }
    if (!b || typeof b !== "object" || Array.isArray(b)) fail("Dữ liệu không hợp lệ.");
    const action = b.action;
    if (!configured()) fail("Phòng thi chưa được cấu hình tài khoản quản lí và khóa bảo vệ.", 503);
    if (action === "login") {
      rate(req, "login", 15);
      if(typeof b.password!=='string'||b.password.length>128)fail('Mật khẩu quản lí chưa đúng.',401);
      return await transaction(async s=>{if(!await passwordMatches(s,b.password as string))fail('Mật khẩu quản lí chưa đúng.',401);return withCookie(json({ok:true}),ADMIN_COOKIE,signSession({role:'admin',sessionVersion:s.security?.adminSessionVersion??0}));});
    }
    if (action === "logout") return clearCookie(json({ ok: true }), ADMIN_COOKIE);
    if(action==='student-logout')return await transaction(s=>{let a;try{a=authenticateStudent(s,cookie(req,STUDENT_COOKIE));}catch(e){if(e instanceof ExamError&&e.status===401)return clearCookie(json({ok:true}),STUDENT_COOKIE);throw e;}if(a.submittedAt===null)fail('Em cần nộp bài và nhận xác nhận trước khi thoát.',409);resetSession(a);return clearCookie(json({ok:true}),STUDENT_COOKIE);});
    if (action === "join") {
      rate(req, "join", 200);
      return await transaction(async s => {
        const room = findRoom(s, b.roomId);
        if(room.status==='draft')fail('Thầy chưa mở phòng chờ cho lớp này. Em chờ thầy lưu lịch và mở phòng rồi vào lại.',403);
        if (typeof b.code !== "string" || b.code.length > 100 || !await checkCode(b.code.trim(), room.codeHash)) fail("Mã vào phòng chưa đúng.", 403);
        const id = b.name !== undefined ? studentByName(room,b.name).id : typeof b.studentId === "string" ? b.studentId.trim().toUpperCase() : "";
        const existing = s.attempts.find(a => a.roomId === room.id && a.studentId === id);
        const session = cookie(req, STUDENT_COOKIE);
        if (existing?.tokenHash && session?.id === existing.id) {
          authenticateStudent(s, session);
          return json(studentView(s, existing));
        }
        if (existing?.submittedAt) fail("Học sinh này đã nộp bài. Hãy liên hệ thầy nếu có nhầm lẫn.", 409);
        if (existing?.tokenHash) fail("Học sinh này đã vào trên một phiên khác. Thầy có thể mở lại phiên nếu đổi máy.", 409);
        const now = Date.now();
        if (room.status !== "waiting" && room.status !== "running") fail("Lớp chưa mở phòng hoặc đã kết thúc.", 403);
        if (now < Date.parse(room.opensAt) || now >= Date.parse(room.closesAt)) fail("Hiện tại ngoài khung giờ của lớp.", 403);
        if (room.status === "running" && !room.allowLate && !existing) fail("Đã bắt đầu kiểm tra. Thầy cần cho phép vào muộn.", 403);
        if (existing) {
          const token = issueStudentSession(existing);
          audit(s, room.id, "Khôi phục phiên: " + id);
          return withCookie(json(studentView(s, existing)), STUDENT_COOKIE, token);
        }
        const { attempt, token } = newAttempt(room, id); s.attempts.push(attempt);
        audit(s, room.id, "Vào phòng: " + id);
        return withCookie(json(studentView(s, attempt)), STUDENT_COOKIE, signSession({ role: "student", id: attempt.id, token }));
      });
    }
    if (action === "save" || action === "submit") {
      return await transaction(async s => {
        const a = authenticateStudent(s, cookie(req, STUDENT_COOKIE)), room = findRoom(s, a.roomId);
        if (a.submittedAt !== null) return json(studentView(s, a));
        if (room.status !== "running" || !room.endsAt || Date.now() >= room.endsAt || !a.paper) fail("Bài kiểm tra chưa bắt đầu hoặc đã hết giờ.", 409);
        if (!Number.isSafeInteger(b.revision) || (b.revision as number) < 1) fail("Phiên bản lưu không hợp lệ.");
        const incoming = validateAnswers(b.answers);
        if (b.revision === a.revision && JSON.stringify(incoming) !== JSON.stringify(a.answers)) fail("Có hai tab đang ghi bài cùng lúc. Giữ một tab và tải lại từ bản máy chủ.", 409);
        if ((b.revision as number) > a.revision) { a.answers = incoming; a.revision = b.revision as number; a.savedAt = Date.now(); }
        if (action === "submit") { if (b.revision !== a.revision) fail("Có bản lưu mới hơn. Em tải lại bài trước khi nộp.", 409); submit(a); audit(s, room.id, "Nộp bài: " + a.studentId); }
        return json(studentView(s, a));
      });
    }
    admin(req);
    return await transaction(async s => {
      admin(req,s);
      if(action==='change-password') {
        rate(req,'change-password',10);
        if(typeof b.currentPassword!=='string'||b.currentPassword.length>128||!await passwordMatches(s,b.currentPassword))fail('Mật khẩu hiện tại chưa đúng.',403);
        if(typeof b.newPassword!=='string'||b.newPassword.length<8||b.newPassword.length>128||!b.newPassword.trim())fail('Mật khẩu mới cần từ 8 đến 128 ký tự và không được để trống.');
        if(b.confirmPassword!==b.newPassword)fail('Hai lần nhập mật khẩu mới chưa khớp.');
        if(same(b.currentPassword,b.newPassword))fail('Mật khẩu mới cần khác mật khẩu hiện tại.');
        const sessionVersion=(s.security?.adminSessionVersion??0)+1;
        s.security={adminPasswordHash:await hashCode(b.newPassword),adminSessionVersion:sessionVersion,changedAt:Date.now()};
        audit(s,'admin','Đổi mật khẩu quản lí');
        return withCookie(json({ok:true}),ADMIN_COOKIE,signSession({role:'admin',sessionVersion}));
      }
      const room = findRoom(s, b.roomId);
      if (action === "configure") {
        if (room.startedAt !== null) fail("Lớp đã bắt đầu; chỉ có thể gia hạn hoặc kết thúc.", 409);
        const opens = typeof b.opensAt === "string" ? Date.parse(b.opensAt) : NaN, closes = typeof b.closesAt === "string" ? Date.parse(b.closesAt) : NaN;
        if (!Number.isFinite(opens) || !Number.isFinite(closes) || closes <= opens || closes - opens > 86400000) fail("Khung giờ chưa hợp lệ (tối đa 24 giờ).");
        if (typeof b.duration !== "number" || !Number.isInteger(b.duration) || b.duration < 10 || b.duration > 180 || closes - opens < b.duration * 60000) fail("Thời lượng từ 10–180 phút và phải nằm trong khung giờ.");
        const roster = prepareRoster(room,b.roster);
        for (const a of s.attempts.filter(a => a.roomId === room.id)) if (!roster.some(v => v.id === a.studentId && v.name === a.name)) fail("Không được xóa/đổi danh tính học sinh đã vào phòng.");
        if (b.code !== "" && b.code !== undefined) { if (typeof b.code !== "string" || b.code.trim().length < 6 || b.code.length > 100) fail("Mã phòng cần ít nhất 6 ký tự."); room.codeHash = await hashCode(b.code.trim()); }
        if (!room.codeHash) fail("Thầy cần đặt mã phòng.");
        room.opensAt = new Date(opens).toISOString(); room.closesAt = new Date(closes).toISOString(); room.duration = b.duration; room.roster = roster; room.allowLate = b.allowLate === true; room.status = "waiting";
      } else if (action === "start") {
        if (room.status !== "waiting" || room.startedAt !== null) fail("Chỉ bắt đầu được một lần từ phòng chờ.", 409);
        const now = Date.now();
        if (now < Date.parse(room.opensAt) || now + room.duration * 60000 > Date.parse(room.closesAt)) fail("Chưa đến giờ hoặc khung giờ còn lại không đủ thời lượng kiểm tra.", 409);
        if (!s.attempts.some(a => a.roomId === room.id)) fail("Chưa có học sinh nào vào phòng.");
        room.startedAt = now; room.endsAt = now + room.duration * 60000; room.status = "running";
        for (const a of s.attempts.filter(a => a.roomId === room.id)) a.paper = createPaper();
      } else if (action === "close") {
        if (room.status !== "running") fail("Phòng chưa trong giờ làm bài.", 409);
        room.status = "closed"; room.endsAt = Date.now(); for (const a of s.attempts.filter(a => a.roomId === room.id)) submit(a);
      } else if (action === "extend") {
        if (room.status !== "running" || !room.endsAt || typeof b.minutes !== "number" || !Number.isInteger(b.minutes) || b.minutes < 1 || b.minutes > 30) fail("Chỉ gia hạn 1–30 phút khi đang kiểm tra.");
        room.endsAt += b.minutes * 60000; room.closesAt = new Date(Math.max(Date.parse(room.closesAt), room.endsAt)).toISOString();
      } else if (action === "late") {
        if (room.status !== "running") fail("Chỉ đổi quyền vào muộn khi đang kiểm tra."); room.allowLate = b.allowLate === true;
      } else if (action === "reset-session") {
        const a = s.attempts.find(a => a.id === b.attemptId && a.roomId === room.id) ?? fail("Không tìm thấy học sinh.");
        if (a.submittedAt !== null || room.status === "closed") fail("Không mở lại phiên của bài đã nộp."); resetSession(a);
      } else if (action === "grade") {
        const a = s.attempts.find(a => a.id === b.attemptId && a.roomId === room.id) ?? fail("Không tìm thấy bài làm.");
        if (a.submittedAt === null) fail("Học sinh chưa nộp bài.");
        if (!Array.isArray(b.scores) || b.scores.length !== 2 || b.scores.some(v => typeof v !== "number" || !Number.isFinite(v) || v < 0 || v > 1.5)) fail("Mỗi câu tự luận cần điểm từ 0 đến 1,5.");
        if (typeof b.feedback !== "string" || b.feedback.length > 2000) fail("Nhận xét tối đa 2.000 ký tự.");
        a.essayScores = b.scores.map(v => Math.round(v * 100) / 100); a.feedback = b.feedback;
      } else fail("Thao tác không hợp lệ.");
      audit(s, room.id, String(action));
      return json(adminView(s));
    });
  } catch (e) { return error(e); }
}
