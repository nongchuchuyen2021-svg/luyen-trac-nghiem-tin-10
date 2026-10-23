"use client";

import { useEffect, useRef, useState } from "react";
import type { StudioGame, StudioMission, StudioShapeType, StudioTarget } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";
import { sound } from "@/lib/sound";
import { DesignHeader, ResultScreen } from "@/components/design/DesignShell";

type Shape = {
  id: number;
  type: StudioShapeType;
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  stroke: string;
  text?: string;
};

type Tool = "select" | StudioShapeType;

const COLORS: { id: string; name: string; hex: string }[] = [
  { id: "do", name: "Đỏ", hex: "#ef4444" },
  { id: "cam", name: "Cam", hex: "#f97316" },
  { id: "vang", name: "Vàng", hex: "#facc15" },
  { id: "xanh-la", name: "Xanh lá", hex: "#22c55e" },
  { id: "xanh-duong", name: "Xanh dương", hex: "#3b82f6" },
  { id: "tim-nhat", name: "Tím nhạt", hex: "#c4b5fd" },
  { id: "tim-dam", name: "Tím đậm", hex: "#5b21b6" },
  { id: "hong", name: "Hồng", hex: "#ec4899" },
  { id: "den", name: "Đen", hex: "#111827" },
  { id: "trang", name: "Trắng", hex: "#ffffff" },
  { id: "xam", name: "Xám", hex: "#94a3b8" },
];

const hexOf = (id: string) => COLORS.find((c) => c.id === id)?.hex ?? "none";
const nameOf = (id: string) => (id === "none" ? "Không màu" : COLORS.find((c) => c.id === id)?.name ?? id);

const SHAPE_NAME: Record<StudioShapeType, string> = {
  rect: "hình chữ nhật",
  ellipse: "hình elip",
  star: "ngôi sao",
  text: "văn bản",
};

const TOOLS: { id: Tool; icon: string; label: string }[] = [
  { id: "select", icon: "↖", label: "Chọn" },
  { id: "rect", icon: "▭", label: "Chữ nhật" },
  { id: "ellipse", icon: "◯", label: "Elip" },
  { id: "star", icon: "★", label: "Ngôi sao" },
  { id: "text", icon: "T", label: "Văn bản" },
];

const W = 400;
const H = 300;

function starPoints(s: Shape): string {
  const cx = s.x + s.w / 2;
  const cy = s.y + s.h / 2;
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const k = i % 2 === 0 ? 1 : 0.42;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    pts.push(`${(cx + (s.w / 2) * k * Math.cos(a)).toFixed(1)},${(cy + (s.h / 2) * k * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

function bbox(s: Shape) {
  if (s.type === "text") {
    const w = Math.max(30, (s.text?.length ?? 1) * 17);
    return { x: s.x, y: s.y - 28, w, h: 36 };
  }
  return { x: s.x, y: s.y, w: s.w, h: s.h };
}

function evaluate(shapes: Shape[], targets: StudioTarget[]): { ok: boolean; problems: string[] } {
  const used = new Set<number>();
  const problems: string[] = [];
  for (const t of targets) {
    const full = shapes.find(
      (s) =>
        !used.has(s.id) &&
        s.type === t.type &&
        (t.fill === undefined || s.fill === t.fill) &&
        (t.stroke === undefined || s.stroke === t.stroke) &&
        (t.text === undefined || (s.text ?? "").toLowerCase().includes(t.text.toLowerCase())),
    );
    if (full) {
      used.add(full.id);
      continue;
    }
    const partial = shapes.find((s) => !used.has(s.id) && s.type === t.type);
    if (!partial) {
      problems.push(`Chưa có ${SHAPE_NAME[t.type]}${t.text ? ` ghi "${t.text}"` : ""}.`);
      continue;
    }
    used.add(partial.id);
    if (t.fill !== undefined && partial.fill !== t.fill) {
      problems.push(`Màu tô (Fill) của ${SHAPE_NAME[t.type]} chưa đúng — cần ${nameOf(t.fill)}.`);
    }
    if (t.stroke !== undefined && partial.stroke !== t.stroke) {
      problems.push(`Màu nét (Stroke) của ${SHAPE_NAME[t.type]} chưa đúng — cần ${nameOf(t.stroke)}.`);
    }
    if (t.text !== undefined && !(partial.text ?? "").toLowerCase().includes(t.text.toLowerCase())) {
      problems.push(`Dòng chữ cần chứa "${t.text}".`);
    }
  }
  if (shapes.length > targets.length) {
    problems.push(`Còn thừa ${shapes.length - targets.length} đối tượng — hãy chọn rồi bấm 🗑 Xoá.`);
  }
  return { ok: problems.length === 0, problems };
}

function missionShapes(m: StudioMission): Shape[] {
  return (m.preset ?? []).map((p, i) => ({ id: i + 1, ...p }));
}

// Một số trình duyệt ném lỗi khi không giữ được con trỏ — bỏ qua, kéo thả vẫn chạy
function capture(el: Element, pointerId: number) {
  try {
    el.setPointerCapture(pointerId);
  } catch {
    /* không bắt buộc */
  }
}

const LEVEL_LABEL = { 1: "Dễ", 2: "Vừa", 3: "Khó" } as const;

export default function StudioGameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: StudioGame;
  onBack?: () => void;
}) {
  const progressKey = `${lessonId}:game:${game.id}`;
  const [mIdx, setMIdx] = useState(0);
  const mission = game.missions[mIdx];

  const [shapes, setShapes] = useState<Shape[]>(() => missionShapes(game.missions[0]));
  const [selected, setSelected] = useState<number | null>(null);
  const [tool, setTool] = useState<Tool>("select");
  const [paintMode, setPaintMode] = useState<"fill" | "stroke">("fill");
  const [textValue, setTextValue] = useState(game.missions[0].textDefault ?? "Lớp 10A3");
  const [attempts, setAttempts] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [problems, setProblems] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [scores, setScores] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);
  const [toast, setToast] = useState("");

  const svgRef = useRef<SVGSVGElement>(null);
  const idCounter = useRef(100);
  const drag = useRef<
    | { mode: "draw"; id: number; sx: number; sy: number }
    | { mode: "move"; id: number; ox: number; oy: number; px: number; py: number }
    | null
  >(null);

  useEffect(() => {
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }, [progressKey]);

  function loadMission(index: number) {
    const m = game.missions[index];
    setShapes(missionShapes(m));
    setSelected(null);
    setTool("select");
    setPaintMode("fill");
    setTextValue(m.textDefault ?? "Lớp 10A3");
    setAttempts(0);
    setHintUsed(false);
    setProblems([]);
    setDone(false);
  }

  function restart() {
    setMIdx(0);
    setScores([]);
    setFinished(false);
    loadMission(0);
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }

  function flash(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(""), 1800);
  }

  function pointOf(e: React.PointerEvent): { x: number; y: number } {
    const rect = svgRef.current!.getBoundingClientRect();
    return {
      x: Math.min(W, Math.max(0, ((e.clientX - rect.left) / rect.width) * W)),
      y: Math.min(H, Math.max(0, ((e.clientY - rect.top) / rect.height) * H)),
    };
  }

  function onCanvasDown(e: React.PointerEvent) {
    if (tool === "select") {
      setSelected(null);
      return;
    }
    const p = pointOf(e);
    const id = ++idCounter.current;
    if (tool === "text") {
      const text = textValue.trim() || "Abc";
      setShapes((l) => [...l, { id, type: "text", x: p.x, y: p.y, w: 0, h: 0, fill: "den", stroke: "none", text }]);
      setSelected(id);
      sound.place();
      return;
    }
    capture(e.currentTarget as Element, e.pointerId);
    drag.current = { mode: "draw", id, sx: p.x, sy: p.y };
    setShapes((l) => [...l, { id, type: tool, x: p.x, y: p.y, w: 0, h: 0, fill: "xam", stroke: "none" }]);
    setSelected(id);
  }

  function onShapeDown(e: React.PointerEvent, s: Shape) {
    if (tool !== "select") return; // các công cụ vẽ để sự kiện rơi xuống canvas
    e.stopPropagation();
    setSelected(s.id);
    sound.click();
    const p = pointOf(e);
    capture(svgRef.current as Element, e.pointerId);
    drag.current = { mode: "move", id: s.id, ox: s.x, oy: s.y, px: p.x, py: p.y };
  }

  function onMove(e: React.PointerEvent) {
    const d = drag.current;
    if (!d) return;
    const p = pointOf(e);
    if (d.mode === "draw") {
      setShapes((l) =>
        l.map((s) =>
          s.id === d.id
            ? { ...s, x: Math.min(d.sx, p.x), y: Math.min(d.sy, p.y), w: Math.abs(p.x - d.sx), h: Math.abs(p.y - d.sy) }
            : s,
        ),
      );
    } else {
      setShapes((l) => l.map((s) => (s.id === d.id ? { ...s, x: d.ox + (p.x - d.px), y: d.oy + (p.y - d.py) } : s)));
    }
  }

  function onUp() {
    const d = drag.current;
    drag.current = null;
    if (d?.mode === "draw") {
      const s = shapes.find((x) => x.id === d.id);
      if (s && (s.w < 10 || s.h < 10)) {
        setShapes((l) => l.filter((x) => x.id !== d.id));
        setSelected(null);
      } else {
        sound.place();
      }
    }
  }

  function paint(colorId: string, forceStroke = false) {
    if (selected === null) {
      flash("👆 Hãy chọn một hình bằng công cụ ↖ trước khi tô màu");
      sound.wrong();
      return;
    }
    const target = forceStroke ? "stroke" : paintMode;
    setShapes((l) => l.map((s) => (s.id === selected ? { ...s, [target]: colorId } : s)));
    sound.click();
  }

  function removeSelected() {
    if (selected === null) {
      flash("Chưa chọn hình nào để xoá");
      return;
    }
    setShapes((l) => l.filter((s) => s.id !== selected));
    setSelected(null);
    sound.swipe();
  }

  function save() {
    sound.click();
    const result = evaluate(shapes, mission.targets);
    if (result.ok) {
      const base = attempts === 0 ? 100 : attempts === 1 ? 70 : 40;
      const pts = Math.max(20, base - (hintUsed ? 20 : 0));
      setScores((sc) => [...sc, pts]);
      setProblems([]);
      setDone(true);
      sound.victory();
    } else {
      setAttempts((a) => a + 1);
      setProblems(result.problems);
      sound.wrong();
    }
  }

  function skip() {
    setScores((sc) => [...sc, 0]);
    advance(0);
  }

  function advance(extra?: number) {
    sound.click();
    const finalScores = extra === undefined ? scores : [...scores, extra];
    if (mIdx + 1 >= game.missions.length) {
      const pct = Math.round(finalScores.reduce((a, b) => a + b, 0) / game.missions.length);
      saveAttempt(progressKey, pct);
      setFinished(true);
    } else {
      setMIdx(mIdx + 1);
      loadMission(mIdx + 1);
    }
  }

  const percent = scores.length
    ? Math.round(scores.reduce((a, b) => a + b, 0) / game.missions.length)
    : 0;

  if (finished) {
    return (
      <ResultScreen
        badge="KẾT QUẢ HỌA SĨ INKSCAPE"
        percent={percent}
        headline={`${percent} điểm · ${game.missions.length} đơn hàng`}
        messages={[
          "Bàn tay vàng! Em thao tác Inkscape rất thành thạo.",
          "Khá lắm! Hãy luyện thêm cách phân biệt Fill và Stroke nhé.",
          "Đừng nản! Đọc lại phần giao diện Inkscape rồi vẽ lại các đơn hàng.",
        ]}
        best={best}
        onRetry={restart}
        onBack={onBack}
      />
    );
  }

  const sel = shapes.find((s) => s.id === selected) ?? null;
  const needHelp = attempts >= 2 && !done;

  return (
    <main className="min-h-screen bg-[#070b14] pb-16 text-white selection:bg-cyan-500 selection:text-black">
      <div className="mx-auto max-w-xl px-4 pt-6 sm:px-6">
        <DesignHeader
          onBack={onBack}
          badge="MÔ PHỎNG INKSCAPE"
          title={game.title}
          emoji={game.emoji}
          instructions={game.instructions}
          progress={(scores.length / game.missions.length) * 100}
          right={
            <div className="rounded-full border border-slate-800 bg-slate-900/90 px-3 py-1 font-mono text-xs text-slate-400">
              Đơn {mIdx + 1}/{game.missions.length}
              {best !== null && ` · Kỉ lục ${best}%`}
            </div>
          }
        />

        {/* Đơn hàng */}
        <section className="mt-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="font-display text-sm font-bold text-amber-200">📋 {mission.title}</p>
            <span className="rounded-full border border-amber-400/40 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-300">
              {LEVEL_LABEL[mission.level]}
            </span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-amber-50/90">{mission.brief}</p>
          <button
            onClick={() => setHintUsed(true)}
            className="mt-2 font-mono text-[11px] text-amber-300 underline decoration-dotted underline-offset-2"
          >
            {hintUsed ? `💡 ${mission.hint}` : "💡 Cần gợi ý? (trừ 20 điểm)"}
          </button>
        </section>

        {/* Toolbox */}
        <div className="mt-4">
          <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Toolbox — hộp công cụ
          </p>
          <div className="grid grid-cols-5 gap-2">
            {TOOLS.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  sound.click();
                  setTool(t.id);
                }}
                className={`rounded-xl border px-1 py-2 text-center transition active:scale-95 ${
                  tool === t.id
                    ? "border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-md shadow-cyan-900/50"
                    : "border-slate-700 bg-slate-900/80 text-slate-300 hover:border-slate-500"
                }`}
              >
                <span className="block text-xl leading-none">{t.icon}</span>
                <span className="mt-1 block text-[10px]">{t.label}</span>
              </button>
            ))}
          </div>
          {tool === "text" && (
            <label className="mt-2 flex items-center gap-2 text-xs text-slate-300">
              Nội dung chữ:
              <input
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                maxLength={14}
                className="min-w-0 flex-1 rounded-lg border border-slate-600 bg-slate-900 px-2 py-1.5 text-sm text-white outline-none focus:border-cyan-400"
              />
            </label>
          )}
        </div>

        {/* Canvas */}
        <div className="mt-3">
          <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Canvas — trang vẽ
          </p>
          <div className="relative overflow-hidden rounded-2xl border-2 border-slate-700 bg-white shadow-2xl">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              className="block w-full touch-none select-none"
              style={{ cursor: tool === "select" ? "default" : "crosshair" }}
              onPointerDown={onCanvasDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerCancel={onUp}
            >
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0H0V20" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width={W} height={H} fill="url(#grid)" />
              {shapes.map((s) => {
                const common = {
                  fill: hexOf(s.fill),
                  stroke: s.stroke === "none" ? "none" : hexOf(s.stroke),
                  strokeWidth: s.stroke === "none" ? 0 : 5,
                  onPointerDown: (e: React.PointerEvent) => onShapeDown(e, s),
                  style: { cursor: tool === "select" ? "move" : "crosshair" } as React.CSSProperties,
                };
                if (s.type === "rect") return <rect key={s.id} x={s.x} y={s.y} width={s.w} height={s.h} {...common} />;
                if (s.type === "ellipse")
                  return <ellipse key={s.id} cx={s.x + s.w / 2} cy={s.y + s.h / 2} rx={s.w / 2} ry={s.h / 2} {...common} />;
                if (s.type === "star") return <polygon key={s.id} points={starPoints(s)} strokeLinejoin="round" {...common} />;
                return (
                  <text
                    key={s.id}
                    x={s.x}
                    y={s.y}
                    fontSize="30"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    {...common}
                    strokeWidth={s.stroke === "none" ? 0 : 1.5}
                  >
                    {s.text}
                  </text>
                );
              })}
              {sel && (() => {
                const b = bbox(sel);
                return (
                  <rect
                    x={b.x - 4}
                    y={b.y - 4}
                    width={b.w + 8}
                    height={b.h + 8}
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="1.5"
                    strokeDasharray="5 4"
                    pointerEvents="none"
                  />
                );
              })()}
            </svg>
            {toast && (
              <div className="absolute inset-x-3 bottom-3 animate-pop-in rounded-xl bg-black/80 px-3 py-2 text-center text-xs text-white">
                {toast}
              </div>
            )}
          </div>
        </div>

        {/* Palette */}
        <div className="mt-3">
          <div className="mb-1 flex items-center justify-between">
            <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Palette — bảng màu
            </p>
            <button
              onClick={removeSelected}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 font-mono text-[11px] text-slate-300 transition hover:border-rose-400 hover:text-rose-300 active:scale-95"
            >
              🗑 Xoá hình
            </button>
          </div>
          <div className="mb-2 grid grid-cols-2 gap-2">
            {(
              [
                ["fill", "🪣 Tô (Fill)", sel ? hexOf(sel.fill) : "#475569"],
                ["stroke", "🖊️ Nét (Stroke)", sel && sel.stroke !== "none" ? hexOf(sel.stroke) : "transparent"],
              ] as const
            ).map(([mode, label, swatch]) => (
              <button
                key={mode}
                onClick={() => {
                  sound.click();
                  setPaintMode(mode);
                }}
                className={`flex items-center justify-center gap-2 rounded-xl border px-2 py-2 text-xs font-semibold transition active:scale-95 ${
                  paintMode === mode
                    ? "border-cyan-400 bg-cyan-500/20 text-cyan-100"
                    : "border-slate-700 bg-slate-900/80 text-slate-300"
                }`}
              >
                <span
                  className="inline-block h-4 w-4 rounded border border-white/40"
                  style={{ background: swatch }}
                />
                {label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-2 sm:grid-cols-12">
            {COLORS.map((c) => (
              <button
                key={c.id}
                onClick={(e) => paint(c.id, e.shiftKey)}
                title={c.name}
                aria-label={c.name}
                className="aspect-square rounded-lg border-2 border-slate-600 transition hover:scale-110 hover:border-white active:scale-90"
                style={{ background: c.hex }}
              />
            ))}
            <button
              onClick={(e) => paint("none", e.shiftKey)}
              title="Không màu"
              aria-label="Không màu"
              className="aspect-square rounded-lg border-2 border-slate-600 bg-slate-900 text-sm font-bold text-rose-400 transition hover:scale-110 hover:border-white active:scale-90"
            >
              ✕
            </button>
          </div>
          <p className="mt-1.5 text-[10px] text-slate-500">
            Mẹo: giống Inkscape thật, giữ <kbd className="rounded bg-slate-800 px-1">Shift</kbd> khi chạm ô màu để đặt màu nét.
            {sel && ` Đang chọn: ${SHAPE_NAME[sel.type]} · Tô ${nameOf(sel.fill)} · Nét ${nameOf(sel.stroke)}.`}
          </p>
        </div>

        {/* Nộp bài */}
        {!done ? (
          <div className="mt-5">
            {problems.length > 0 && (
              <ul className="mb-3 animate-pop-in space-y-1 rounded-2xl border border-rose-500/40 bg-rose-950/30 p-3 text-xs text-rose-200">
                <li className="font-semibold">Khách chưa hài lòng:</li>
                {problems.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            )}
            <div className="flex gap-2">
              <button
                onClick={save}
                className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-3 font-display text-sm font-bold text-white shadow-lg transition hover:opacity-90 active:scale-95"
              >
                💾 Lưu .svg &amp; giao hàng
              </button>
              {needHelp && (
                <button
                  onClick={skip}
                  className="rounded-xl border border-slate-600 px-4 py-3 font-mono text-xs text-slate-300 transition hover:border-slate-400 active:scale-95"
                >
                  Bỏ qua
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-5 animate-pop-in rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-4">
            <p className="font-display text-sm font-bold text-emerald-300">
              ✅ Khách hài lòng! +{scores[scores.length - 1]} điểm
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{mission.explain}</p>
            <button
              onClick={() => advance()}
              className="mt-3 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 py-2.5 font-display text-xs font-bold text-white shadow-lg transition hover:opacity-90 active:scale-95"
            >
              {mIdx + 1 >= game.missions.length ? "Xem tổng kết 🏁" : "Đơn hàng kế tiếp →"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
