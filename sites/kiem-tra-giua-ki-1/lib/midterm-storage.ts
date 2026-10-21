import { env } from "cloudflare:workers";
import { fail, initialState, settle } from "./midterm-server";
import type { MidtermState } from "./midterm-types";

// D1 batches are atomic. A revision/token compare-and-swap prevents lost writes
// between independent Workers; each attempt is a separate bounded document.
export async function transaction<T>(work: (state: MidtermState) => T | Promise<T>): Promise<T> {
  if (!env.DB) fail("Chưa kết nối được cơ sở dữ liệu phòng thi.", 503);
  const db = env.DB!.withSession("first-primary");
  await db.prepare("INSERT OR IGNORE INTO exam_meta (id, revision, token, audit) VALUES ('main', 0, '', '[]')").run();
  for (let attempt = 0; attempt < 12; attempt++) {
    const loaded = await db.batch([
      db.prepare("SELECT revision, audit FROM exam_meta WHERE id = 'main'"),
      db.prepare("SELECT key, payload FROM exam_documents"),
    ]);
    const meta = loaded[0].results[0] as { revision: number; audit: string };
    const docs = new Map((loaded[1].results as { key: string; payload: string }[]).map(d => [d.key, d.payload]));
    const state = initialState();
    state.rooms = state.rooms.map(r => docs.has("room:" + r.id) ? JSON.parse(docs.get("room:" + r.id)!) : r);
    state.attempts = [...docs].filter(([key]) => key.startsWith("attempt:")).map(([, value]) => JSON.parse(value));
    state.audit = JSON.parse(meta.audit);
    state.security = docs.has('security:admin') ? JSON.parse(docs.get('security:admin')!) : undefined;
    settle(state);
    const result = await work(state);
    state.audit = state.audit.slice(-2000);
    const changed = [...state.rooms.map(r => ({ key: "room:" + r.id, payload: JSON.stringify(r) })), ...state.attempts.map(a => ({ key: "attempt:" + a.id, payload: JSON.stringify(a) })), ...(state.security?[{key:'security:admin',payload:JSON.stringify(state.security)}]:[])].filter(d => docs.get(d.key) !== d.payload);
    const attemptKeys = new Set(state.attempts.map(a => 'attempt:' + a.id));
    const removed = [...docs.keys()].filter(key => key.startsWith('attempt:') && !attemptKeys.has(key));
    const audit = JSON.stringify(state.audit);
    if (!changed.length && !removed.length && audit === meta.audit) return result;
    const token = crypto.randomUUID();
    const batch = [db.prepare("UPDATE exam_meta SET revision = revision + 1, token = ?, audit = ? WHERE id = 'main' AND revision = ?").bind(token, audit, meta.revision), ...changed.map(d => db.prepare("INSERT INTO exam_documents (key, payload) SELECT ?, ? WHERE EXISTS (SELECT 1 FROM exam_meta WHERE id = 'main' AND token = ?) ON CONFLICT(key) DO UPDATE SET payload = excluded.payload").bind(d.key, d.payload, token))];
    batch.push(...removed.map(key => db.prepare("DELETE FROM exam_documents WHERE key = ? AND EXISTS (SELECT 1 FROM exam_meta WHERE id = 'main' AND token = ?)").bind(key, token)));
    const written = await db.batch(batch);
    if (written[0].meta.changes === 1) return result;
    await new Promise(resolve => setTimeout(resolve, 10 + attempt * 10));
  }
  return fail("Có nhiều bài đang được lưu. Giữ trang, hệ thống sẽ thử gửi lại.", 503);
}
