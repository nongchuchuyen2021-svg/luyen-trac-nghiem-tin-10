"use client";

import { useEffect, useMemo, useState } from "react";
import type { Sort3Game, Sort3Item } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";
import { sound } from "@/lib/sound";
import Confetti from "@/components/Confetti";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Sort3GameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: Sort3Game;
  onBack?: () => void;
}) {
  const progressKey = `${lessonId}:game:${game.id}`;

  const [deck, setDeck] = useState<Sort3Item[]>(() => shuffle(game.items));
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState<null | { picked: 0 | 1 | 2; correct: boolean }>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongItems, setWrongItems] = useState<Sort3Item[]>([]);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  function setup() {
    setDeck(shuffle(game.items));
    setCurrent(0);
    setAnswered(null);
    setCorrectCount(0);
    setWrongItems([]);
    setFinished(false);
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }

  useEffect(() => {
    setup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game, lessonId]);

  const item = deck[current];
  const scorePercent = deck.length ? Math.round((correctCount / deck.length) * 100) : 0;
  const progressPercent = deck.length ? Math.round(((current + (answered ? 1 : 0)) / deck.length) * 100) : 0;

  function commit(picked: 0 | 1 | 2) {
    if (answered || !item) return;
    const correct = picked === item.group;
    setAnswered({ picked, correct });
    if (correct) {
      setCorrectCount((c) => c + 1);
      sound.correct();
    } else {
      setWrongItems((list) => [...list, item]);
      sound.wrong();
    }
  }

  function next() {
    sound.click();
    if (current + 1 >= deck.length) {
      const finalScore = Math.round((correctCount / deck.length) * 100);
      saveAttempt(progressKey, finalScore);
      setFinished(true);
      if (finalScore >= 80) {
        sound.victory();
      } else {
        sound.defeat();
      }
    } else {
      setCurrent((c) => c + 1);
      setAnswered(null);
    }
  }

  const wrongList = useMemo(() => wrongItems, [wrongItems]);

  if (deck.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070b14] text-white">
        <p className="font-mono text-sm text-slate-400">Đang chuẩn bị game…</p>
      </main>
    );
  }

  // ===== Màn hình kết quả =====
  if (finished) {
    const isSuccess = scorePercent >= 80;
    const emoji = isSuccess ? "🏆" : scorePercent >= 50 ? "⚡" : "📖";
    const message =
      scorePercent >= 80
        ? "Xuất sắc! Em phân biệt 3 mô hình/nhóm kiến thức rất chuẩn xác."
        : scorePercent >= 50
          ? "Khá lắm! Hãy ôn lại các thẻ chưa đúng rồi thử sức lại nhé."
          : "Đừng nản! Đọc lại phần kiến thức SGK rồi chơi lại để nâng cao điểm số.";

    return (
      <main className="relative min-h-screen bg-[#070b14] pb-16 text-white">
        <Confetti trigger={isSuccess} />
        <div className="mx-auto max-w-2xl px-5 pt-12 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 text-center shadow-2xl backdrop-blur">
            <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-rose-500/10 blur-3xl" />
            <p className="relative text-7xl">{emoji}</p>
            <span className="relative mt-3 inline-block rounded-full border border-rose-500/40 bg-rose-500/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-rose-300">
              KẾT QUẢ PHÂN LOẠI 3 NHÓM
            </span>
            <h1 className="relative mt-2 font-display text-3xl font-extrabold text-white">
              {correctCount}/{deck.length} thẻ đúng · {scorePercent}%
            </h1>
            <p className="relative mt-2 text-sm text-slate-300">{message}</p>

            {best !== null && scorePercent > best && (
              <p className="relative mt-3 font-mono text-sm font-semibold text-rose-400">
                🚀 Kỉ lục mới! (Trước đó: {best}%)
              </p>
            )}

            <div className="relative mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={setup}
                className="rounded-full bg-gradient-to-r from-rose-500 to-purple-600 px-6 py-2.5 font-display text-sm font-bold text-white shadow-lg shadow-rose-900/40 transition hover:opacity-90 hover:scale-105 active:scale-95"
              >
                🔄 Chơi lại (Xáo thẻ mới)
              </button>
              {onBack && (
                <button
                  onClick={onBack}
                  className="rounded-full border border-slate-700 bg-slate-800/80 px-6 py-2.5 font-display text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
                >
                  ← Trở về Hub
                </button>
              )}
            </div>
          </div>

          {wrongList.length > 0 && (
            <section className="mt-8">
              <h2 className="font-display text-lg font-bold text-rose-300">
                ⚠️ Xem lại {wrongList.length} thẻ chưa chính xác:
              </h2>
              <ul className="mt-3 space-y-3">
                {wrongList.map((w) => (
                  <li
                    key={w.id}
                    className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-4 text-left shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{w.emoji}</span>
                      <p className="font-display font-semibold text-white">{w.label}</p>
                    </div>
                    <p className="mt-1.5 text-xs font-semibold text-emerald-400">
                      ✔ Nhóm đúng: <strong>{game.groups[w.group].emoji} {game.groups[w.group].label}</strong>
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">{w.explain}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
    );
  }

  // Bảng màu 3 nhóm neon
  const groupColors = [
    {
      border: "border-cyan-500/40 hover:border-cyan-400",
      bg: "bg-cyan-950/30 hover:bg-cyan-900/40",
      text: "text-cyan-200",
      glow: "shadow-cyan-950/50",
    },
    {
      border: "border-purple-500/40 hover:border-purple-400",
      bg: "bg-purple-950/30 hover:bg-purple-900/40",
      text: "text-purple-200",
      glow: "shadow-purple-950/50",
    },
    {
      border: "border-amber-500/40 hover:border-amber-400",
      bg: "bg-amber-950/30 hover:bg-amber-900/40",
      text: "text-amber-200",
      glow: "shadow-amber-950/50",
    },
  ];

  // ===== Giao diện chơi =====
  return (
    <main className="min-h-screen bg-[#070b14] pb-16 text-white selection:bg-rose-500 selection:text-black">
      <div className="mx-auto max-w-xl px-4 pt-6 sm:px-6">
        <header>
          <div className="flex items-center justify-between gap-3">
            {onBack ? (
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-slate-300 transition hover:border-rose-500/50 hover:text-white"
              >
                ← Quay lại
              </button>
            ) : (
              <span />
            )}

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const state = sound.toggle();
                  setSoundEnabled(state);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-xs text-slate-300 transition hover:border-rose-400 hover:text-white"
                title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
              >
                {soundEnabled ? "🔊" : "🔇"}
              </button>

              <div className="rounded-full border border-slate-800 bg-slate-900/90 px-3 py-1 font-mono text-xs text-slate-400">
                Thẻ <span className="font-bold text-rose-400">{current + 1}</span>/{deck.length}
                {best !== null && ` · Kỉ lục: ${best}%`}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-rose-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
              PHÂN LOẠI ĐA CHIỀU 3 NHÓM
            </div>
            <h1 className="mt-1.5 font-display text-xl font-bold leading-snug text-white">
              {game.emoji} {game.title}
            </h1>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">{game.instructions}</p>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-400 transition-all duration-300 shadow-sm shadow-rose-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </header>

        {/* Thẻ hiển thị trung tâm */}
        <div className="relative mt-6 select-none">
          <div
            className={`flex flex-col items-center justify-center gap-3 rounded-3xl border-2 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6 text-center shadow-2xl transition-all ${
              answered
                ? answered.correct
                  ? "border-emerald-400 shadow-emerald-500/20"
                  : "border-rose-500 shadow-rose-500/20 animate-wiggle"
                : "border-slate-800"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-rose-500/10 blur-xl" />
              <span className="relative text-6xl drop-shadow-md">{item.emoji}</span>
            </div>
            <p className="font-display text-lg font-bold text-white">{item.label}</p>
            {!answered && (
              <p className="font-mono text-[11px] text-slate-400">
                Hãy chọn 1 trong 3 nhóm bên dưới:
              </p>
            )}
          </div>
        </div>

        {/* 3 Lựa chọn nhóm */}
        {!answered ? (
          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {game.groups.map((g, idx) => {
              const c = groupColors[idx] || groupColors[0];
              return (
                <button
                  key={idx}
                  onClick={() => commit(idx as 0 | 1 | 2)}
                  className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center shadow-lg transition active:scale-95 ${c.border} ${c.bg} ${c.text}`}
                >
                  <span className="text-2xl">{g.emoji}</span>
                  <span className="mt-1.5 font-display text-xs font-bold uppercase tracking-wide">
                    {g.label}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-5 animate-pop-in rounded-2xl border border-slate-800 bg-slate-900/95 p-4 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="text-xl">{answered.correct ? "🎯" : "😅"}</span>
              <p className={`font-display text-sm font-bold ${answered.correct ? "text-emerald-400" : "text-rose-400"}`}>
                {answered.correct ? "Chính xác tuyệt đối!" : "Chưa chính xác rồi!"}
              </p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Đáp án:{" "}
              <strong className="text-emerald-300">
                {game.groups[item.group].emoji} {game.groups[item.group].label}
              </strong>{" "}
              — {item.explain}
            </p>
            <button
              onClick={next}
              className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 py-2.5 font-display text-xs font-bold text-white shadow-lg shadow-rose-950 transition hover:opacity-90 active:scale-95"
            >
              <span>{current + 1 >= deck.length ? "Xem tổng kết điểm số 🏁" : "Tiếp tục thẻ kế tiếp →"}</span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
