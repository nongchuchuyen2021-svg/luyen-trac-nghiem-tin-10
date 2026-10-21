"use client";


import { useCallback, useEffect, useRef, useState } from "react";
import { MIDTERM_CLASSES, type ExamAnswers, type StudentView } from "@/lib/midterm-types";

const api = "/api/giua-ki-1";
const empty = (): ExamAnswers => ({ mc: Array(16).fill(null), tf: Array.from({ length: 3 }, () => Array(4).fill(null)), essays: ["", ""] });
const time = (v: number | string | null) => v ? new Date(v).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh", hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" }) : "Chưa đặt lịch";
type PublicRoom = { id: string; status: string; opensAt: string; closesAt: string; duration: number };

export default function MidtermStudent() {
  const [rooms, setRooms] = useState<PublicRoom[]>([]), [roomId, setRoomId] = useState<string>("10A1");
  const [studentName, setStudentName] = useState(""), [code, setCode] = useState("");
  const [view, setView] = useState<StudentView | null>(null), [answers, setAnswers] = useState<ExamAnswers>(empty);
  const [notice, setNotice] = useState(""), [saveNote, setSaveNote] = useState("Chưa có thay đổi."), [busy, setBusy] = useState(false), [booting, setBooting] = useState(true);
  const [sessionLost, setSessionLost] = useState(false);
  const [now, setNow] = useState(Date.now()), [offset, setOffset] = useState(0), [kind, setKind] = useState<"mc" | "tf" | "essays">("mc"), [index, setIndex] = useState(0), [confirm, setConfirm] = useState(false);
  const local = useRef({ answers: empty(), revision: 0, savedRevision: 0, attemptId: "" });
  const current = useRef<StudentView | null>(null), flight = useRef<Promise<void> | null>(null), mounted = useRef(true);
  const apply = useCallback((next: StudentView) => {
    if (!mounted.current) return;
    if (local.current.attemptId !== next.attempt.id) {
      let restored: { answers: ExamAnswers; revision: number } | null = null;
      try { const raw = localStorage.getItem("midterm:" + next.attempt.id); if (raw) { const saved = JSON.parse(raw); if (Number.isSafeInteger(saved.revision) && saved.revision > next.attempt.revision && saved.answers?.mc?.length === 16 && saved.answers?.tf?.length === 3 && saved.answers?.essays?.length === 2) restored = saved; } } catch { /* Server copy remains authoritative if local storage is unavailable. */ }
      local.current = { attemptId: next.attempt.id, answers: restored?.answers ?? next.attempt.answers, revision: restored?.revision ?? next.attempt.revision, savedRevision: next.attempt.revision };
      setAnswers(local.current.answers);
      setSaveNote(restored ? "Đang gửi lại bản nháp trên máy…" : "Đã khôi phục bản lưu trên máy chủ.");
    }
    if (next.attempt.submittedAt !== null) { try { localStorage.removeItem("midterm:" + next.attempt.id); } catch {} }
    current.current = next; setView(next); setOffset(next.now - Date.now()); setSessionLost(false);
  }, []);
  const refresh = useCallback(async () => {
    try { const r = await fetch(api + "?action=status", { cache: "no-store" }); const data = await r.json() as StudentView & { error: string; configured?: boolean; rooms: PublicRoom[] }; if (r.ok) apply(data); else if (r.status === 401 && current.current) { setNotice(data.error); setSessionLost(true); } else if (r.status !== 401) setNotice(data.error); }
    catch { if (current.current) setNotice("Mất kết nối máy chủ. Giữ trang này; bản nháp trên máy sẽ được gửi lại khi có mạng. Chỉ bài đã tới máy chủ trước hết giờ mới được chấm."); }
  }, [apply]);
  useEffect(() => {
    mounted.current = true;
    void (async () => { try { const r = await fetch(api, { cache: "no-store" }); const data = await r.json() as StudentView & { error: string; configured?: boolean; rooms: PublicRoom[] }; if (r.ok) { setRooms(data.rooms); if (!data.configured) setNotice("Thầy đang chuẩn bị hệ thống. Em quay lại sau nhé."); } else setNotice(data.error); await refresh(); } catch { setNotice("Chưa kết nối được phòng kiểm tra."); } finally { setBooting(false); } })();
    const poll = setInterval(() => void refresh(), 4000), tick = setInterval(() => setNow(Date.now()), 1000);
    const online = () => { setNotice("Đã có mạng. Đang kiểm tra bản lưu…"); void refresh(); };
    window.addEventListener("online", online);
    const leave = (e: BeforeUnloadEvent) => { if (current.current?.room.status === "running" && !current.current.attempt.submittedAt && local.current.revision > local.current.savedRevision) { e.preventDefault(); e.returnValue = ""; } };
    window.addEventListener("beforeunload", leave);
    return () => { mounted.current = false; clearInterval(poll); clearInterval(tick); window.removeEventListener("online", online); window.removeEventListener("beforeunload", leave); };
  }, [refresh]);
  async function send(submitting = false): Promise<void> {
    if (flight.current) { if (submitting) { await flight.current; return send(true); } return; }
    const snapshot = current.current;
    if (!snapshot || snapshot.room.status !== "running" || snapshot.attempt.submittedAt !== null) return;
    if (!submitting && local.current.revision <= local.current.savedRevision) return;
    if (submitting && local.current.revision === 0) local.current.revision = 1;
    const revision = local.current.revision, body = { action: submitting ? "submit" : "save", revision, answers: local.current.answers };
    const task = (async () => {
      setSaveNote(submitting ? "Đang nộp bài…" : "Đang lưu lên máy chủ…");
      try {
        const r = await fetch(api, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), signal: AbortSignal.timeout(15000) });
        const data = await r.json() as StudentView & { error: string; configured?: boolean; rooms: PublicRoom[] }; if (!r.ok) throw Error(data.error);
        local.current.savedRevision = Math.max(local.current.savedRevision, revision);
        apply(data); setSaveNote(data.attempt.submittedAt ? "Đã nộp bài thành công." : "Đã lưu máy chủ lúc " + time(data.attempt.savedAt)); setNotice("");
      } catch (e) { setSaveNote("Chưa lưu được máy chủ. Bản nháp vẫn trên máy này."); setNotice(e instanceof Error ? e.message : "Chưa lưu được bài. Em thử lại nhé."); }
    })();
    flight.current = task;
    try { await task; } finally { flight.current = null; }
  }
  useEffect(() => { const timer = setInterval(() => void send(), 2000); return () => clearInterval(timer); });
  function change(next: ExamAnswers) {
    local.current.answers = next; local.current.revision++; setAnswers(next); setSaveNote("Có thay đổi — đang chờ lưu…");
    try { localStorage.setItem("midterm:" + local.current.attemptId, JSON.stringify({ revision: local.current.revision, answers: next })); }
    catch { setNotice("Trình duyệt không lưu được bản nháp trên máy. Cần giữ mạng và theo dõi thông báo lưu máy chủ."); }
  }
  async function join(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setNotice("");
    try { const r = await fetch(api, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "join", roomId, name: studentName, code }), signal: AbortSignal.timeout(15000) }); const data = await r.json() as StudentView & { error: string; configured?: boolean; rooms: PublicRoom[] }; if (!r.ok) throw Error(data.error); apply(data); setCode(""); }
    catch (e) { setNotice(e instanceof Error ? e.message : "Chưa vào được phòng."); } finally { setBusy(false); }
  }
  async function leaveSubmitted() {
    if(busy)return;setBusy(true);setNotice('');
    try {const r=await fetch(api,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'student-logout'}),signal:AbortSignal.timeout(15000)});const data=await r.json() as {error?:string};if(!r.ok)throw Error(data.error||'Chưa thoát được phiên kiểm tra.');try{if(view)localStorage.removeItem('midterm:'+view.attempt.id);}catch{}window.location.replace('/giua-ki-1');}
    catch(error){setNotice(error instanceof Error?error.message:'Chưa thoát được. Em thử lại.');setBusy(false);}
  }
  const remaining = view?.room.endsAt ? Math.max(0, Math.ceil((view.room.endsAt - now - offset) / 1000)) : 0;
  const paper = view?.attempt.paper, active = !!paper && !sessionLost && view?.room.status === "running" && view.attempt.submittedAt === null && remaining > 0;
  const completed = answers.mc.filter(v => v !== null).length + answers.tf.filter(row => row.every(v => v !== null)).length + answers.essays.filter(v => v.trim().length > 0).length;
  const total = kind === "mc" ? 16 : kind === "tf" ? 3 : 2;
  function tab(next: typeof kind) { setKind(next); setIndex(0); }
  const room = rooms.find(r => r.id === roomId);
  return <main className="midterm min-h-screen bg-[#f4f6fa] text-slate-900 pb-16">
    <div className="mx-auto max-w-6xl px-4 py-7 sm:px-7">
      <nav className="flex items-center justify-between gap-4 text-sm"><a href="/" className="font-semibold text-slate-600">← Tin học 10 · THPT Na Rì</a><a href="/giua-ki-1/giao-vien" className="font-semibold text-indigo-700">Dành cho giáo viên →</a></nav>
      <header className="mt-7 rounded-3xl bg-[#172b4d] p-7 text-white sm:p-10"><div className="flex flex-wrap items-start justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-sky-200">Tin học 10 · Kết nối tri thức</p><h1 className="mt-4 text-3xl font-bold sm:text-4xl">Kiểm tra giữa học kì I</h1><p className="mt-3 max-w-2xl text-slate-200">Bài 1, 2, 7–11 · Làm bài trong phòng kiểm tra do thầy mở.</p></div><div className="rounded-2xl border border-white/20 px-5 py-4"><p className="text-xs text-sky-200">CẤU TRÚC BÀI KIỂM TRA</p><p className="mt-2 text-xl font-bold">16 TNKQ · 3 đúng–sai · 2 tự luận</p><p className="mt-1 text-sm text-slate-200">4 điểm + 3 điểm + 3 điểm</p></div></div></header>
      {notice && (view || booting) && <p role="alert" className="mt-5 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">{notice}</p>}
      {sessionLost && <button className="mt-secondary mt-4" onClick={() => { if (view) setRoomId(view.room.id); current.current = null; local.current.attemptId = ""; setView(null); setSessionLost(false); }}>Nhập lại mã phòng sau khi thầy mở phiên</button>}
      {booting ? <p className="mt-8" role="status">Đang kết nối phòng kiểm tra…</p> : !view ? <div className="mt-7 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-widest text-indigo-600">Bước 1 / Vào phòng</p><h2 className="mt-3 text-2xl font-bold">Sẵn sàng cho bài kiểm tra</h2><p className="mt-3 text-sm leading-6 text-slate-600">Chọn đúng lớp, nhập đầy đủ họ và tên của em và mã phòng do thầy cung cấp. Em sẽ chờ đến khi thầy nhấn bắt đầu.</p><form onSubmit={join} className="mt-6 space-y-4"><label className="block text-sm font-semibold">Lớp<select className="mt-input mt-2" value={roomId} onChange={e => setRoomId(e.target.value)}>{MIDTERM_CLASSES.map(id => <option key={id}>{id}</option>)}</select></label><label className="block text-sm font-semibold">Họ và tên<input className="mt-input mt-2" required minLength={3} maxLength={80} autoComplete="name" value={studentName} onChange={e => setStudentName(e.target.value)} placeholder="Ví dụ: Nguyễn Văn An" /></label><label className="block text-sm font-semibold">Mã vào phòng<input className="mt-input mt-2" required type="password" maxLength={100} autoComplete="off" value={code} onChange={e => setCode(e.target.value)} /></label>{notice && <p role="alert" className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">{notice}</p>}<button className="mt-primary w-full" disabled={busy}>{busy ? "Đang vào phòng…" : "Vào phòng chờ →"}</button></form></section>
        <aside className="space-y-5"><section className="rounded-3xl border bg-white p-6"><h2 className="text-lg font-bold">Lịch của lớp {roomId}</h2><p className="mt-4 text-sm text-slate-600">Vào phòng từ</p><p className="mt-1 font-semibold">{time(room?.opensAt ?? null)}</p><p className="mt-4 text-sm text-slate-600">Đóng khung giờ</p><p className="mt-1 font-semibold">{time(room?.closesAt ?? null)}</p><p className="mt-4 text-sm">Thời lượng: <strong>{room?.duration ?? 45} phút</strong> · Giờ Việt Nam</p></section><section className="rounded-3xl bg-indigo-50 p-6 text-sm leading-7"><h2 className="font-bold">Trước khi vào phòng</h2><ul className="mt-3 list-disc space-y-2 pl-5"><li>Nhập đúng họ tên và chọn đúng lớp.</li><li>Giữ mạng ổn định để bài được lưu lên máy chủ.</li><li>Hết giờ, hệ thống nộp phần đã lưu.</li><li>Đáp án và điểm chưa công bố trong các ca thi.</li></ul></section></aside>
      </div> : view.attempt.submittedAt !== null ? <section className="mx-auto mt-8 max-w-2xl rounded-3xl border border-emerald-200 bg-white p-8 text-center"><span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700">✓</span><h2 className="mt-5 text-2xl font-bold">Đã nhận bài kiểm tra</h2><p className="mt-4">{view.attempt.name} · {view.room.id}</p><p className="mt-2 text-sm text-slate-600">Nộp lúc {time(view.attempt.submittedAt)}. Phần TNKQ và đúng–sai đã được hệ thống tự chấm. Thầy sẽ chấm 2 câu tự luận và thông báo kết quả sau.</p><button className="mt-primary mt-6" disabled={busy} onClick={()=>void leaveSubmitted()}>{busy?"Đang thoát…":"Thoát bài kiểm tra"}</button></section> : !active ? <section className="mx-auto mt-8 max-w-2xl rounded-3xl border bg-white p-8 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-2xl">◷</div><p className="mt-5 text-xs font-bold uppercase tracking-widest text-indigo-600">Phòng {view.room.id}</p><h2 className="mt-3 text-2xl font-bold">{view.room.status === "waiting" ? "Em đã vào phòng chờ" : "Đang xác nhận kết thúc bài"}</h2><p className="mt-4 font-semibold">{view.attempt.name}</p><p className="mt-4 text-slate-600">{view.room.status === "waiting" ? "Đề sẽ tự mở khi thầy nhấn Bắt đầu. Em giữ trang này và chờ hướng dẫn." : "Máy chủ đang xác nhận bài đã lưu. Em giữ trang và chờ thông báo nhận bài."}</p><p className="mt-5 text-sm text-slate-500">{view.room.duration} phút · 21 câu · Thang điểm 10</p><button className="mt-secondary mt-6" onClick={() => void refresh()}>Kiểm tra trạng thái</button></section> : <>
        <section className="sticky top-0 z-10 mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border bg-white/95 p-4 shadow-sm backdrop-blur"><div><p className="font-bold">{view.attempt.name} <span className="font-normal text-slate-500">· {view.room.id}</span></p><p role="status" className="mt-1 text-xs text-slate-600">{saveNote}</p></div><div className="flex items-center gap-4"><div className={"text-right font-mono text-2xl font-bold " + (remaining < 300 ? "text-red-700" : "text-indigo-800")} aria-label="Thời gian còn lại">{Math.floor(remaining / 60).toString().padStart(2, "0")}:{(remaining % 60).toString().padStart(2, "0")}</div><button className="mt-primary" disabled={busy} onClick={() => setConfirm(true)}>Nộp bài</button></div></section>
        <div className="mt-6 grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]"><aside className="self-start rounded-2xl border bg-white p-5"><h2 className="font-bold">Tiến độ bài làm</h2><p className="mt-2 text-sm text-slate-600">Đã trả lời {completed}/21 câu</p><div className="mt-4 h-2 rounded-full bg-slate-100"><div className="h-full rounded-full bg-indigo-600" style={{ width: completed / 21 * 100 + "%" }} /></div><div className="mt-6 space-y-2">{([["mc", "I. Trắc nghiệm", 16], ["tf", "II. Đúng–sai", 3], ["essays", "III. Tự luận", 2]] as const).map(([id, label, n]) => <button key={id} aria-pressed={kind === id} className={"w-full rounded-xl p-3 text-left text-sm font-semibold " + (kind === id ? "bg-indigo-100 text-indigo-900" : "bg-slate-50 text-slate-700")} onClick={() => tab(id)}>{label}<span className="float-right">{n}</span></button>)}</div><p className="mt-6 text-xs leading-6 text-slate-500">Đúng–sai: đúng 1 / 2 / 3 / 4 ý được 0,1 / 0,25 / 0,5 / 1 điểm. Mỗi câu tự luận tối đa 1,5 điểm.</p><button className="mt-secondary mt-4 w-full text-sm" onClick={() => void send()}>Lưu bài ngay</button></aside>
        <section className="min-w-0"><div className="rounded-2xl border bg-white p-6 sm:p-8"><div className="flex justify-between text-xs font-bold uppercase tracking-widest text-indigo-600"><span>{kind === "mc" ? "Phần I · 0,25 điểm / câu" : kind === "tf" ? "Phần II · 1 điểm / câu" : "Phần III · 1,5 điểm / câu"}</span><span>Câu {index + 1}/{total}</span></div>
          {kind === "mc" && <><h2 className="mt-6 whitespace-pre-wrap text-lg font-semibold leading-8">{paper.mc[index].q}</h2>{paper.mc[index].code && <pre className="mt-4 overflow-auto rounded-xl bg-slate-900 p-4 text-white">{paper.mc[index].code}</pre>}<div className="mt-6 space-y-3">{paper.mc[index].options.map((option, i) => <label key={i} className={"flex cursor-pointer gap-3 rounded-xl border p-4 leading-7 " + (answers.mc[index] === i ? "border-indigo-600 bg-indigo-50" : "border-slate-200")}><input type="radio" name={"mc" + index} className="mt-2 shrink-0" checked={answers.mc[index] === i} disabled={busy} onChange={() => { const mc = [...answers.mc]; mc[index] = i; change({ ...answers, mc }); }} /><span><strong>{String.fromCharCode(65 + i)}.</strong> {option}</span></label>)}</div></>}
          {kind === "tf" && <><h2 className="mt-6 whitespace-pre-wrap text-lg font-semibold leading-8">{paper.tf[index].context}</h2>{paper.tf[index].code && <pre className="mt-4 overflow-auto rounded-xl bg-slate-900 p-4 text-white">{paper.tf[index].code}</pre>}<div className="mt-5 space-y-4">{paper.tf[index].statements.map((s, i) => <fieldset key={i} className="rounded-xl border p-4"><legend className="px-2 text-sm font-bold">Ý {String.fromCharCode(97 + i)}</legend><p className="leading-7">{s.text}</p><div className="mt-3 flex gap-7">{[true, false].map(v => <label key={String(v)} className="flex cursor-pointer items-center gap-2"><input type="radio" name={"tf" + index + "-" + i} checked={answers.tf[index][i] === v} disabled={busy} onChange={() => { const tf = answers.tf.map(row => [...row]); tf[index][i] = v; change({ ...answers, tf }); }} />{v ? "Đúng" : "Sai"}</label>)}</div></fieldset>)}</div></>}
          {kind === "essays" && <><h2 className="mt-6 whitespace-pre-wrap text-lg font-semibold leading-8">{paper.essays[index].q}</h2>{paper.essays[index].code && <pre className="mt-4 overflow-auto rounded-xl bg-slate-900 p-4 text-white">{paper.essays[index].code}</pre>}<label className="mt-6 block text-sm font-semibold">Bài làm của em<textarea className="mt-input mt-3 min-h-[320px] font-sans leading-7" maxLength={10000} value={answers.essays[index]} disabled={busy} onChange={e => { const essays = [...answers.essays]; essays[index] = e.target.value; change({ ...answers, essays }); }} /></label><p className="mt-2 text-right text-xs text-slate-500">{answers.essays[index].length}/10.000 ký tự</p></>}
          <nav className="mt-8 flex justify-between gap-3"><button className="mt-secondary" disabled={index === 0} onClick={() => setIndex(i => i - 1)}>← Câu trước</button><button className="mt-primary" onClick={() => { if (index < total - 1) setIndex(i => i + 1); else if (kind !== "essays") tab(kind === "mc" ? "tf" : "essays"); else setConfirm(true); }}>{index === total - 1 ? kind === "essays" ? "Xem và nộp bài" : "Phần tiếp →" : "Câu tiếp →"}</button></nav>
        </div><div aria-label="Danh sách câu" className="mt-4 flex flex-wrap gap-2">{Array.from({ length: total }, (_, i) => { const done = kind === "mc" ? answers.mc[i] !== null : kind === "tf" ? answers.tf[i].every(v => v !== null) : !!answers.essays[i].trim(); return <button key={i} aria-label={"Câu " + (i + 1) + (done ? ", đã trả lời" : ", chưa trả lời")} aria-current={index === i ? "true" : undefined} className={"h-11 min-w-11 rounded-xl border font-semibold " + (i === index ? "bg-indigo-700 text-white" : done ? "border-emerald-400 bg-emerald-50 text-emerald-800" : "bg-white")} onClick={() => setIndex(i)}>{i + 1}{done ? " ✓" : ""}</button>; })}</div></section></div>
      </>}
      {confirm && active && <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-950/50 p-4"><section role="dialog" aria-modal="true" aria-labelledby="submit-title" className="w-full max-w-md rounded-3xl bg-white p-7"><h2 id="submit-title" className="text-2xl font-bold">Nộp bài kiểm tra?</h2><p className="mt-4 leading-7">Em đã trả lời {completed}/21 câu. {completed < 21 && "Còn câu chưa trả lời hoặc chưa đủ 4 ý."} Sau khi nộp, em không thể sửa bài.</p><div className="mt-6 flex gap-3"><button className="mt-secondary flex-1" disabled={busy} onClick={() => setConfirm(false)}>Làm tiếp</button><button className="mt-primary flex-1" disabled={busy} onClick={async () => { setBusy(true); try { await send(true); } finally { setBusy(false); setConfirm(false); } }}>{busy ? "Đang nộp…" : "Xác nhận nộp"}</button></div></section></div>}
    </div>
  </main>;
}



