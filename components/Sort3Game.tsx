"use client";

import { useEffect, useMemo, useState } from "react";
import type { Sort3Game, Sort3Item } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Sort3Game({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: Sort3Game;
  onBack?: () => void;
}) {
  const progressKey = `${lessonId}:game:${game.id}`;

  const [deck, setDeck] = useState<Sort3Item[]>([]);
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState<null | { picked: 0 | 1 | 2; correct: boolean }>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongItems, setWrongItems] = useState<Sort3Item[]>([]);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);

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

  function commit(picked: 0 | 1 | 2) {
    if (answered || !item) return;
    const correct = picked === item.group;
    setAnswered({ picked, correct });
    if (correct) {
      setCorrectCount((c) => c + 1);
    } else {
      setWrongItems((list) => [...list, item]);
    }
  }

  function next() {
    if (current + 1 >= deck.length) {
      saveAttempt(progressKey, scorePercent);
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setAnswered(null);
    }
  }

  const wrongList = useMemo(() => wrongItems, [wrongItems]);

  if (deck.length === 0) {
    return (
      <main className="playground flex min-h-screen items-center justify-center">
        <p className="font-mono text-sm text-ink-soft">Đang chuẩn bị game…</p>
      </main>
    );
  }

  // ===== Màn hình kết quả =====
  if (finished) {
    const emoji = scorePercent >= 80 ? "🎉" : scorePercent >= 50 ? "💪" : "📖";
    const message =
      scorePercent >= 80
        ? "Xuất sắc! Em phân biệt 3 nhóm rất chuẩn."
        : scorePercent >= 50
          ? "Khá lắm! Xem lại các thẻ sai rồi chơi lại nhé."
          : "Đừng nản! Đọc lại phần lý thuyết rồi chơi lại nhé.";

    return (
      <main className="playground min-h-screen pb-16">
        <div className="mx-auto max-w-2xl px-5 pt-12 sm:px-8">
          <div className="animate-pop-in rounded-2xl border border-ink/5 bg-white p-8 text-center shadow-card">
            <p className="text-6xl">{emoji}</p>
            <h1 className="mt-3 font-display text-2xl font-bold text-ink">
              {correctCount}/{deck.length} thẻ đúng · {scorePercent}%
            </h1>
            <p className="mt-2 text-ink-soft">{message}</p>
            {best !== null && scorePercent > best && (
              <p className="mt-2 font-mono text-sm font-medium text-mint">
                🚀 Kỉ lục mới! (trước đó: {best}%)
              </p>
            )}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={setup}
                className="rounded-full bg-gradient-to-r from-grape to-bubble px-6 py-2.5 font-medium text-white shadow-card transition hover:opacity-90"
              >
                Chơi lại (xáo thẻ mới)
              </button>
              {onBack && (
                <button
                  onClick={onBack}
                  className="rounded-full border border-ink/10 bg-white px-6 py-2.5 font-medium text-ink-soft transition hover:border-grape/40 hover:text-grape-deep"
                >
                  ← Chọn phần khác
                </button>
              )}
            </div>
          </div>

          {wrongList.length > 0 && (
            <section className="mt-8">
              <h2 className="font-display text-lg font-semibold text-ink">
                📌 Xem lại {wrongList.length} thẻ sai
              </h2>
              <ul className="mt-3 space-y-3">
                {wrongList.map((w) => (
                  <li key={w.id} className="rounded-xl border border-tomato/20 bg-white p-4 shadow-card">
                    <p className="text-sm font-medium text-ink">
                      {w.emoji} {w.label}
                    </p>
                    <p className="mt-1 text-sm text-mint">
                      ✔ {game.groups[w.group].emoji} {game.groups[w.group].label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{w.explain}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
    );
  }

  // ===== Màn hình chơi =====
  const progressPercent = Math.round((current / deck.length) * 100);

  return (
    <main className="playground min-h-screen pb-16">
      <div className="mx-auto max-w-2xl px-5 pt-8 sm:px-8">
        <header>
          <div className="flex items-center justify-between gap-3">
            {onBack ? (
              <button
                onClick={onBack}
                className="rounded-full border border-ink/10 bg-white px-3 py-1.5 font-mono text-xs text-ink-soft transition hover:border-grape/40 hover:text-grape-deep"
              >
                ← Quay lại
              </button>
            ) : (
              <span />
            )}
            <p className="font-mono text-xs text-ink-soft">
              Thẻ {current + 1}/{deck.length}
              {best !== null && ` · kỉ lục ${best}%`}
            </p>
          </div>
          <h1 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
            {game.emoji} {game.title}
          </h1>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{game.instructions}</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-grape to-bubble transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </header>

        {/* Thẻ tình huống */}
        <div className="mt-6 flex min-h-[180px] flex-col items-center justify-center gap-3 rounded-3xl border-2 border-ink/10 bg-white p-6 text-center shadow-card">
          <span className="text-5xl">{item.emoji}</span>
          <p className="font-display text-base font-semibold leading-snug text-ink">{item.label}</p>
        </div>

        {/* 3 nút chọn nhóm */}
        {!answered ? (
          <div className="mt-5 grid grid-cols-3 gap-2.5">
            {game.groups.map((g, i) => (
              <button
                key={i}
                onClick={() => commit(i as 0 | 1 | 2)}
                className="flex flex-col items-center gap-1.5 rounded-2xl border-2 border-grape/25 bg-grape/5 py-3.5 font-display text-xs font-semibold text-grape-deep transition hover:bg-grape/10"
              >
                <span className="text-xl">{g.emoji}</span>
                {g.label}
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-5 animate-pop-in space-y-3">
            <div className="grid grid-cols-3 gap-2.5">
              {game.groups.map((g, i) => {
                const isPicked = answered.picked === i;
                const isTruth = item.group === i;
                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center gap-1.5 rounded-2xl border-2 py-3.5 font-display text-xs font-semibold ${
                      isTruth
                        ? "border-mint bg-mint/10 text-mint-deep"
                        : isPicked
                          ? "border-tomato bg-tomato/10 text-tomato-deep animate-wiggle"
                          : "border-ink/10 text-ink-soft/50"
                    }`}
                  >
                    <span className="text-xl">{g.emoji}</span>
                    {g.label}
                  </div>
                );
              })}
            </div>
            <div className="rounded-xl border border-ink/5 bg-white p-4 shadow-card">
              <p className={`font-display text-sm font-semibold ${answered.correct ? "text-mint" : "text-tomato"}`}>
                {answered.correct ? "🎯 Chính xác!" : "😅 Chưa đúng rồi"}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                Đáp án: <strong>{game.groups[item.group].label}</strong> — {item.explain}
              </p>
              <button
                onClick={next}
                className="mt-3 w-full rounded-full bg-gradient-to-r from-grape to-bubble px-5 py-2.5 font-medium text-white transition hover:opacity-90"
              >
                {current + 1 >= deck.length ? "Xem kết quả 🏁" : "Thẻ tiếp theo →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
