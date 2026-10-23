"use client";

import { useEffect, useMemo, useState } from "react";
import type { BriefGame, BriefScenario } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";
import { sound } from "@/lib/sound";
import { DesignHeader, ResultScreen } from "@/components/design/DesignShell";

type Picks = { type: "" | "bitmap" | "vector"; software: "" | "gimp" | "inkscape"; format: string };
const EMPTY: Picks = { type: "", software: "", format: "" };

const LEVEL = {
  1: { label: "⭐ Khách dễ tính", cls: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300" },
  2: { label: "⭐⭐ Khách kĩ tính", cls: "border-amber-500/40 bg-amber-500/10 text-amber-300" },
  3: { label: "⭐⭐⭐ Khách khó tính", cls: "border-rose-500/40 bg-rose-500/10 text-rose-300" },
} as const;

function shuffleWithinLevel(list: BriefScenario[]): BriefScenario[] {
  const out: BriefScenario[] = [];
  for (const lv of [1, 2, 3] as const) {
    const group = list.filter((s) => s.level === lv);
    for (let i = group.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [group[i], group[j]] = [group[j], group[i]];
    }
    out.push(...group);
  }
  return out;
}

function Row<T extends string>({
  title,
  options,
  value,
  onPick,
  disabled,
  correct,
}: {
  title: string;
  options: { id: T; label: string; emoji?: string }[];
  value: string;
  onPick: (v: T) => void;
  disabled: boolean;
  correct?: string; // hiện đáp án đúng sau khi chốt
}) {
  return (
    <div>
      <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">{title}</p>
      <div className="mt-1.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {options.map((o) => {
          const picked = value === o.id;
          let cls = picked
            ? "border-cyan-400 bg-cyan-500/20 text-cyan-100"
            : "border-slate-700 bg-slate-900/80 text-slate-300 hover:border-slate-500";
          if (correct !== undefined) {
            if (o.id === correct) cls = "border-emerald-400 bg-emerald-500/20 text-emerald-200";
            else if (picked) cls = "border-rose-500 bg-rose-500/20 text-rose-200";
            else cls = "border-slate-800 bg-slate-900/50 text-slate-500";
          }
          return (
            <button
              key={o.id}
              disabled={disabled}
              onClick={() => {
                sound.click();
                onPick(o.id);
              }}
              className={`rounded-xl border px-2 py-2.5 text-center text-xs font-semibold transition active:scale-95 ${cls}`}
            >
              {o.emoji && <span className="mr-1">{o.emoji}</span>}
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BriefGameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: BriefGame;
  onBack?: () => void;
}) {
  const progressKey = `${lessonId}:game:${game.id}`;
  const [deck, setDeck] = useState<BriefScenario[]>(() => game.scenarios);
  const [idx, setIdx] = useState(0);
  const [picks, setPicks] = useState<Picks>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [points, setPoints] = useState(0);
  const [missed, setMissed] = useState<BriefScenario[]>([]);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);

  useEffect(() => {
    setDeck(shuffleWithinLevel(game.scenarios));
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }, [game, progressKey]);

  const s = deck[idx];
  const maxPoints = deck.length * 3;
  const percent = Math.round((points / maxPoints) * 100);

  // Thứ tự định dạng trộn riêng cho từng tình huống
  const formatOptions = useMemo(() => {
    if (!s) return [];
    return [...s.formats].sort((a, b) => a.localeCompare(b));
  }, [s]);

  function restart() {
    setDeck(shuffleWithinLevel(game.scenarios));
    setIdx(0);
    setPicks(EMPTY);
    setSubmitted(false);
    setPoints(0);
    setMissed([]);
    setFinished(false);
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }

  const complete = picks.type !== "" && picks.software !== "" && picks.format !== "";
  const got = s
    ? [picks.type === s.type, picks.software === s.software, picks.format === s.format].filter(Boolean).length
    : 0;

  function submit() {
    if (!complete || submitted || !s) return;
    setSubmitted(true);
    setPoints((p) => p + got);
    if (got === 3) sound.correct();
    else {
      setMissed((m) => [...m, s]);
      sound.wrong();
    }
  }

  function next() {
    sound.click();
    if (idx + 1 >= deck.length) {
      const pct = Math.round((points / maxPoints) * 100);
      saveAttempt(progressKey, pct);
      setFinished(true);
      if (pct >= 80) sound.victory();
      else sound.defeat();
    } else {
      setIdx((i) => i + 1);
      setPicks(EMPTY);
      setSubmitted(false);
    }
  }

  if (!s && !finished) return null;

  if (finished) {
    return (
      <ResultScreen
        badge="KẾT QUẢ STUDIO THIẾT KẾ"
        percent={percent}
        headline={`${points}/${maxPoints} lựa chọn đúng · ${percent}%`}
        messages={[
          "Nhà thiết kế chuyên nghiệp! Khách nào em cũng chọn đúng công cụ.",
          "Khá lắm! Xem lại các đơn chưa trọn điểm rồi thử lại nhé.",
          "Đừng nản! Nhớ: ảnh chụp → bitmap → GIMP; logo/biểu tượng → vector → Inkscape (SVG).",
        ]}
        best={best}
        onRetry={restart}
        onBack={onBack}
      >
        {missed.length > 0 && (
          <section className="mt-8">
            <h2 className="font-display text-lg font-bold text-rose-300">⚠️ Xem lại {missed.length} đơn chưa trọn điểm:</h2>
            <ul className="mt-3 space-y-3">
              {missed.map((m) => (
                <li key={m.id} className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-4">
                  <p className="font-display text-sm font-semibold text-white">
                    {m.emoji} {m.client}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-emerald-400">
                    ✔ {m.type === "bitmap" ? "Bitmap" : "Vector"} · {m.software === "gimp" ? "GIMP" : "Inkscape"} · {m.format}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">{m.explain}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </ResultScreen>
    );
  }

  const lv = LEVEL[s.level];

  return (
    <main className="min-h-screen bg-[#070b14] pb-16 text-white selection:bg-cyan-500 selection:text-black">
      <div className="mx-auto max-w-xl px-4 pt-6 sm:px-6">
        <DesignHeader
          onBack={onBack}
          badge="STUDIO THIẾT KẾ"
          title={game.title}
          emoji={game.emoji}
          instructions={game.instructions}
          progress={((idx + (submitted ? 1 : 0)) / deck.length) * 100}
          right={
            <div className="rounded-full border border-slate-800 bg-slate-900/90 px-3 py-1 font-mono text-xs text-slate-400">
              Đơn <span className="font-bold text-cyan-300">{idx + 1}</span>/{deck.length}
              {best !== null && ` · Kỉ lục ${best}%`}
            </div>
          }
        />

        <section className="mt-5 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-2xl">
          <div className="flex items-center justify-between gap-2">
            <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold ${lv.cls}`}>{lv.label}</span>
            <span className="font-mono text-[11px] text-slate-500">
              +{got > 0 && submitted ? got : 0}/3 điểm
            </span>
          </div>
          <div className="mt-3 flex items-start gap-3">
            <span className="text-4xl">{s.emoji}</span>
            <div>
              <p className="font-display text-sm font-bold text-cyan-200">{s.client}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-100">“{s.request}”</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {s.needs.map((n) => (
              <span key={n} className="rounded-full border border-slate-700 bg-slate-800/70 px-2.5 py-0.5 text-[11px] text-slate-300">
                {n}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-5 space-y-4">
          <Row
            title="1 · Loại đồ hoạ nên dùng"
            value={picks.type}
            disabled={submitted}
            correct={submitted ? s.type : undefined}
            onPick={(v) => setPicks((p) => ({ ...p, type: v }))}
            options={[
              { id: "bitmap", label: "Bitmap (điểm ảnh)", emoji: "🧩" },
              { id: "vector", label: "Vector", emoji: "📐" },
            ]}
          />
          <Row
            title="2 · Phần mềm thực hiện"
            value={picks.software}
            disabled={submitted}
            correct={submitted ? s.software : undefined}
            onPick={(v) => setPicks((p) => ({ ...p, software: v }))}
            options={[
              { id: "gimp", label: "GIMP", emoji: "🖼️" },
              { id: "inkscape", label: "Inkscape", emoji: "🖌️" },
            ]}
          />
          <Row
            title="3 · Định dạng tệp giao khách"
            value={picks.format}
            disabled={submitted}
            correct={submitted ? s.format : undefined}
            onPick={(v) => setPicks((p) => ({ ...p, format: v }))}
            options={formatOptions.map((f) => ({ id: f, label: `.${f.toLowerCase()}` }))}
          />
        </div>

        {!submitted ? (
          <button
            onClick={submit}
            disabled={!complete}
            className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-3 font-display text-sm font-bold text-white shadow-lg transition enabled:hover:opacity-90 enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {complete ? "📤 Giao hàng cho khách" : "Chọn đủ 3 mục để giao hàng"}
          </button>
        ) : (
          <div className="mt-5 animate-pop-in rounded-2xl border border-slate-800 bg-slate-900/95 p-4 shadow-2xl">
            <p className={`font-display text-sm font-bold ${got === 3 ? "text-emerald-400" : got >= 1 ? "text-amber-300" : "text-rose-400"}`}>
              {got === 3 ? "🎉 Khách rất hài lòng! 3/3" : `😐 Đúng ${got}/3 mục`}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">{s.explain}</p>
            <button
              onClick={next}
              className="mt-3.5 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-2.5 font-display text-xs font-bold text-white shadow-lg transition hover:opacity-90 active:scale-95"
            >
              {idx + 1 >= deck.length ? "Xem tổng kết 🏁" : "Khách kế tiếp →"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
