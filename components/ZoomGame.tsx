"use client";

import { useEffect, useRef, useState } from "react";
import type { ZoomGame, ZoomRound, ZoomShapeId } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";
import { sound } from "@/lib/sound";
import { DesignHeader, ResultScreen } from "@/components/design/DesignShell";

function starPath(cx: number, cy: number, outer: number, inner: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return `M${pts.join("L")}Z`;
}

// Hình vẽ trong khung 100x100; focus = điểm nằm trên đường viền để kính lúp soi vào
const SHAPES: Record<ZoomShapeId, { d: string; focus: [number, number] }> = {
  circle: { d: "M12 50a38 38 0 1 0 76 0a38 38 0 1 0 -76 0Z", focus: [76.9, 23.1] },
  star: { d: starPath(50, 54, 42, 17), focus: [50, 12] },
  heart: { d: "M50 88C10 58 6 30 28 20C40 15 48 22 50 30C52 22 60 15 72 20C94 30 90 58 50 88Z", focus: [50, 30] },
  bolt: { d: "M58 8L22 56H46L38 92L78 40H54Z", focus: [40, 32] },
  leaf: { d: "M20 80C20 30 50 12 82 18C88 52 66 84 20 80Z", focus: [26, 56] },
  flag: { d: "M20 12H26V90H20ZM26 14H78L66 34L78 54H26Z", focus: [72, 44] },
};

const BG = "#f1f5f9";

// Giữ khung nhìn nằm trong ảnh: ×1 luôn thấy trọn ảnh, phóng càng lớn càng được lệch tâm
function clampCenter(c: [number, number], zoom: number): [number, number] {
  const lo = 0.5 / zoom;
  const hi = 1 - 0.5 / zoom;
  return [Math.min(hi, Math.max(lo, c[0])), Math.min(hi, Math.max(lo, c[1]))];
}

function Artwork({ round, zoom, center: rawCenter }: { round: ZoomRound; zoom: number; center: [number, number] }) {
  const center = clampCenter(rawCenter, zoom);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shape = SHAPES[round.shape];

  useEffect(() => {
    if (round.kind !== "bitmap") return;
    const canvas = canvasRef.current;
    const res = round.res ?? 32;
    if (!canvas) return;
    canvas.width = res;
    canvas.height = res;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, res, res);
    ctx.scale(res / 100, res / 100);
    ctx.fillStyle = round.color;
    ctx.fill(new Path2D(shape.d));
  }, [round, shape.d]);

  if (round.kind === "bitmap") {
    // Bitmap: phóng to bằng cách kéo giãn lưới điểm ảnh cố định (đúng bản chất bitmap)
    const transform = `translate(${(0.5 - center[0] * zoom) * 100}%, ${(0.5 - center[1] * zoom) * 100}%) scale(${zoom})`;
    return (
      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 block h-full w-full origin-top-left"
        style={{ imageRendering: round.smooth ? "auto" : "pixelated", transform }}
        aria-label="Hình ảnh bí ẩn"
      />
    );
  }
  // Vector: vẽ lại từ công thức ở đúng khung nhìn nên luôn sắc nét
  const size = 100 / zoom;
  const vx = center[0] * 100 - size / 2;
  const vy = center[1] * 100 - size / 2;
  return (
    <svg
      viewBox={`${vx} ${vy} ${size} ${size}`}
      className="absolute left-0 top-0 block h-full w-full"
      aria-label="Hình ảnh bí ẩn"
    >
      <rect x="-1000" y="-1000" width="2100" height="2100" fill={BG} />
      <path d={shape.d} fill={round.color} />
    </svg>
  );
}

const LEVEL_NAME = { 1: "Màn 1 · Khởi động", 2: "Màn 2 · Thử thách", 3: "Màn 3 · Cực khó" } as const;
const MAX_HEARTS = 3;
const MAX_ZOOM = 8;

export default function ZoomGameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: ZoomGame;
  onBack?: () => void;
}) {
  const progressKey = `${lessonId}:game:${game.id}`;
  const [idx, setIdx] = useState(0);
  const [hearts, setHearts] = useState(MAX_HEARTS);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState<null | { pick: "bitmap" | "vector"; ok: boolean }>(null);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);
  const [wrongRounds, setWrongRounds] = useState<ZoomRound[]>([]);

  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>([0.5, 0.5]);
  const lensRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; cx: number; cy: number; moved: boolean } | null>(null);

  const round = game.rounds[idx];
  const total = game.rounds.length;
  const percent = Math.round((correct / total) * 100);

  useEffect(() => {
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }, [progressKey]);

  // Mỗi vòng mới: đặt kính lúp về tâm cạnh viền của hình, độ phóng đại ×1
  useEffect(() => {
    if (!round) return;
    const [fx, fy] = SHAPES[round.shape].focus;
    setCenter([fx / 100, fy / 100]);
    setZoom(1);
  }, [round]);


  function restart() {
    setIdx(0);
    setHearts(MAX_HEARTS);
    setCorrect(0);
    setAnswered(null);
    setFinished(false);
    setWrongRounds([]);
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }

  function finish(finalCorrect: number) {
    const pct = Math.round((finalCorrect / total) * 100);
    saveAttempt(progressKey, pct);
    setFinished(true);
    if (pct >= 80) sound.victory();
    else sound.defeat();
  }

  function answer(pick: "bitmap" | "vector") {
    if (answered || !round) return;
    const ok = pick === round.kind;
    setAnswered({ pick, ok });
    if (ok) {
      setCorrect((c) => c + 1);
      sound.correct();
    } else {
      setHearts((h) => h - 1);
      setWrongRounds((w) => [...w, round]);
      sound.wrong();
    }
    // Lộ đáp án: phóng tối đa để học sinh nhìn thấy bằng chứng
    setZoom(round.kind === "bitmap" && (round.res ?? 32) <= 32 ? 4 : MAX_ZOOM);
  }

  function next() {
    sound.click();
    const outOfHearts = hearts <= 0;
    if (outOfHearts || idx + 1 >= total) {
      finish(correct);
    } else {
      setIdx((i) => i + 1);
      setAnswered(null);
    }
  }

  function onPointerDown(e: React.PointerEvent) {
    const c = clampCenter(center, zoom);
    drag.current = { x: e.clientX, y: e.clientY, cx: c[0], cy: c[1], moved: false };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      /* không bắt buộc */
    }
  }
  function onPointerMove(e: React.PointerEvent) {
    const d = drag.current;
    const el = lensRef.current;
    if (!d || !el) return;
    const size = el.getBoundingClientRect().width;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true;
    if (!d.moved) return;
    const clamp = (v: number) => Math.min(1, Math.max(0, v));
    setCenter([clamp(d.cx - dx / (size * zoom)), clamp(d.cy - dy / (size * zoom))]);
  }
  function onPointerUp(e: React.PointerEvent) {
    const d = drag.current;
    const el = lensRef.current;
    drag.current = null;
    if (!d || d.moved || !el) return;
    // Chạm không kéo: đưa điểm vừa chạm về giữa kính lúp
    const rect = el.getBoundingClientRect();
    const c = clampCenter(center, zoom);
    const px = (e.clientX - rect.left - (rect.width / 2 - c[0] * rect.width * zoom)) / (rect.width * zoom);
    const py = (e.clientY - rect.top - (rect.height / 2 - c[1] * rect.height * zoom)) / (rect.height * zoom);
    setCenter([Math.min(1, Math.max(0, px)), Math.min(1, Math.max(0, py))]);
  }

  if (!round && !finished) return null;

  if (finished) {
    return (
      <ResultScreen
        badge="KẾT QUẢ SOI PIXEL"
        percent={percent}
        headline={`${correct}/${total} ảnh đoán đúng · ${percent}%`}
        messages={[
          "Mắt thám tử đồ hoạ! Em phân biệt Bitmap và Vector cực chuẩn.",
          "Khá lắm! Xem lại các ảnh đoán sai rồi thử lần nữa nhé.",
          "Đừng nản! Nhớ: phóng to mà lộ ô vuông hoặc nhoè là bitmap, vẫn nét là vector.",
        ]}
        best={best}
        onRetry={restart}
        onBack={onBack}
      >
        {hearts <= 0 && (
          <p className="mt-4 text-center font-mono text-sm text-rose-300">💔 Em đã hết mạng ở ảnh số {idx + 1}.</p>
        )}
        {wrongRounds.length > 0 && (
          <section className="mt-8">
            <h2 className="font-display text-lg font-bold text-rose-300">⚠️ Xem lại {wrongRounds.length} ảnh sai:</h2>
            <ul className="mt-3 space-y-3">
              {wrongRounds.map((w) => (
                <li key={w.id} className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-4">
                  <p className="text-xs font-semibold text-emerald-400">
                    ✔ Đáp án: {w.kind === "bitmap" ? "Bitmap (điểm ảnh)" : "Vector"}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">{w.explain}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </ResultScreen>
    );
  }

  const isLast = idx + 1 >= total || hearts <= 0;

  return (
    <main className="min-h-screen bg-[#070b14] pb-16 text-white selection:bg-cyan-500 selection:text-black">
      <div className="mx-auto max-w-xl px-4 pt-6 sm:px-6">
        <DesignHeader
          onBack={onBack}
          badge="KÍNH LÚP ĐỒ HOẠ"
          title={game.title}
          emoji={game.emoji}
          instructions={game.instructions}
          progress={((idx + (answered ? 1 : 0)) / total) * 100}
          right={
            <div className="rounded-full border border-slate-800 bg-slate-900/90 px-3 py-1 font-mono text-xs text-slate-400">
              {Array.from({ length: MAX_HEARTS }, (_, i) => (i < hearts ? "❤️" : "🖤")).join("")} · {idx + 1}/{total}
            </div>
          }
        />

        <div className="mt-4 flex items-center justify-between">
          <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 font-mono text-[11px] font-bold text-purple-300">
            {LEVEL_NAME[round.level]}
          </span>
          {best !== null && <span className="font-mono text-[11px] text-slate-500">Kỉ lục {best}%</span>}
        </div>

        {round.clue && (
          <p className="mt-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-200">
            🕵️ Manh mối: {round.clue}
          </p>
        )}

        {/* Kính lúp */}
        <div className="mt-4">
          <div
            ref={lensRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            className="relative mx-auto aspect-square w-full max-w-[340px] cursor-grab touch-none select-none overflow-hidden rounded-3xl border-2 border-cyan-500/40 bg-slate-100 shadow-2xl shadow-cyan-950/50 active:cursor-grabbing"
          >
            <Artwork round={round} zoom={zoom} center={center} />
            <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/70 px-2.5 py-1 font-mono text-xs font-bold text-cyan-300">
              ×{zoom.toFixed(zoom % 1 ? 1 : 0)}
            </span>
            <span className="pointer-events-none absolute bottom-2 left-2 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[10px] text-slate-200">
              Kéo để di chuyển · chạm để căn giữa
            </span>
          </div>

          <div className="mx-auto mt-3 flex max-w-[340px] items-center gap-3">
            <button
              onClick={() => setZoom((z) => Math.max(1, z / 2))}
              className="h-9 w-9 shrink-0 rounded-full border border-slate-700 bg-slate-900 text-lg font-bold text-slate-200 transition hover:border-cyan-400 active:scale-90"
              aria-label="Thu nhỏ"
            >
              −
            </button>
            <input
              type="range"
              min={1}
              max={MAX_ZOOM}
              step={0.5}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="h-2 w-full cursor-pointer accent-cyan-400"
              aria-label="Độ phóng đại"
            />
            <button
              onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z * 2))}
              className="h-9 w-9 shrink-0 rounded-full border border-slate-700 bg-slate-900 text-lg font-bold text-slate-200 transition hover:border-cyan-400 active:scale-90"
              aria-label="Phóng to"
            >
              +
            </button>
          </div>
        </div>

        {!answered ? (
          <div className="mt-5">
            <p className="text-center font-mono text-[11px] text-slate-400">Soi kĩ viền hình rồi kết luận:</p>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <button
                onClick={() => answer("bitmap")}
                className="rounded-2xl border border-orange-500/40 bg-orange-950/30 p-4 text-center shadow-lg transition hover:bg-orange-900/40 active:scale-95"
              >
                <span className="text-2xl">🧩</span>
                <span className="mt-1 block font-display text-sm font-bold text-orange-200">BITMAP</span>
                <span className="block text-[10px] text-orange-200/70">điểm ảnh</span>
              </button>
              <button
                onClick={() => answer("vector")}
                className="rounded-2xl border border-cyan-500/40 bg-cyan-950/30 p-4 text-center shadow-lg transition hover:bg-cyan-900/40 active:scale-95"
              >
                <span className="text-2xl">📐</span>
                <span className="mt-1 block font-display text-sm font-bold text-cyan-200">VECTOR</span>
                <span className="block text-[10px] text-cyan-200/70">công thức toán</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-5 animate-pop-in rounded-2xl border border-slate-800 bg-slate-900/95 p-4 shadow-2xl">
            <p className={`font-display text-sm font-bold ${answered.ok ? "text-emerald-400" : "text-rose-400"}`}>
              {answered.ok ? "🎯 Chính xác!" : "💔 Chưa đúng rồi!"} Đây là{" "}
              <span className="text-white">{round.kind === "bitmap" ? "BITMAP" : "VECTOR"}</span>
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">{round.explain}</p>
            <button
              onClick={next}
              className="mt-3.5 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-2.5 font-display text-xs font-bold text-white shadow-lg transition hover:opacity-90 active:scale-95"
            >
              {isLast ? "Xem tổng kết 🏁" : "Ảnh kế tiếp →"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
