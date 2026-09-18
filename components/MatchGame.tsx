"use client";

import { useEffect, useState } from "react";
import type { MatchGame, MatchPair } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";

type Card = {
  uid: string;
  pairId: string;
  side: "term" | "clue";
  emoji: string;
  label: string;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(pairs: MatchPair[]): Card[] {
  const cards: Card[] = [];
  for (const p of pairs) {
    cards.push({ uid: `${p.id}-term`, pairId: p.id, side: "term", emoji: p.emoji, label: p.term });
    cards.push({ uid: `${p.id}-clue`, pairId: p.id, side: "clue", emoji: p.emoji, label: p.clue });
  }
  return shuffle(cards);
}

export default function MatchGame({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: MatchGame;
  onBack?: () => void;
}) {
  const progressKey = `${lessonId}:game:${game.id}`;
  const total = game.pairs.length;

  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [mismatch, setMismatch] = useState<string[]>([]);
  const [matchedPairIds, setMatchedPairIds] = useState<Set<string>>(new Set());
  const [moves, setMoves] = useState(0);
  const [lock, setLock] = useState(false);
  const [finished, setFinished] = useState(false);
  const [scorePercent, setScorePercent] = useState(0);
  const [best, setBest] = useState<number | null>(null);

  function setup() {
    setCards(buildDeck(game.pairs));
    setFlipped([]);
    setMismatch([]);
    setMatchedPairIds(new Set());
    setMoves(0);
    setLock(false);
    setFinished(false);
    setScorePercent(0);
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }

  useEffect(() => {
    setup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game, lessonId]);

  useEffect(() => {
    if (cards.length && matchedPairIds.size === total && !finished) {
      const percent = Math.min(100, Math.round((total / moves) * 100));
      saveAttempt(progressKey, percent);
      setScorePercent(percent);
      setFinished(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchedPairIds]);

  function flip(card: Card) {
    if (lock || finished) return;
    if (matchedPairIds.has(card.pairId)) return;
    if (flipped.includes(card.uid)) return;

    if (flipped.length === 0) {
      setFlipped([card.uid]);
      return;
    }

    const firstUid = flipped[0];
    const firstCard = cards.find((c) => c.uid === firstUid);
    if (!firstCard) return;

    setFlipped([firstUid, card.uid]);
    setMoves((m) => m + 1);

    if (firstCard.pairId === card.pairId) {
      setLock(true);
      setTimeout(() => {
        setMatchedPairIds((prev) => new Set(prev).add(card.pairId));
        setFlipped([]);
        setLock(false);
      }, 500);
    } else {
      setMismatch([firstUid, card.uid]);
      setLock(true);
      setTimeout(() => {
        setFlipped([]);
        setMismatch([]);
        setLock(false);
      }, 800);
    }
  }

  if (cards.length === 0) {
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
        ? "Trí nhớ đỉnh cao! Ghép cặp rất ít lượt lật thừa."
        : scorePercent >= 50
          ? "Khá lắm! Chơi lại để rút ngắn số lượt lật nhé."
          : "Đừng nản! Đọc lại lý thuyết rồi chơi lại để nhớ cặp nhanh hơn.";

    return (
      <main className="playground min-h-screen pb-16">
        <div className="mx-auto max-w-2xl px-5 pt-12 sm:px-8">
          <div className="animate-pop-in rounded-2xl border border-ink/5 bg-white p-8 text-center shadow-card">
            <p className="text-6xl">{emoji}</p>
            <h1 className="mt-3 font-display text-2xl font-bold text-ink">
              {total}/{total} cặp · {moves} lượt lật · {scorePercent}%
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

          <section className="mt-8">
            <h2 className="font-display text-lg font-semibold text-ink">📌 Ôn lại tất cả các cặp</h2>
            <ul className="mt-3 space-y-3">
              {game.pairs.map((p) => (
                <li key={p.id} className="rounded-xl border border-ink/5 bg-white p-4 shadow-card">
                  <p className="text-sm font-medium text-ink">
                    {p.emoji} {p.term}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">↔ {p.clue}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    );
  }

  // ===== Màn hình chơi =====
  const progressPercent = Math.round((matchedPairIds.size / total) * 100);

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
              Lượt lật: {moves} · {matchedPairIds.size}/{total} cặp
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

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cards.map((card) => {
            const isMatched = matchedPairIds.has(card.pairId);
            const isFlipped = isMatched || flipped.includes(card.uid);
            const isMismatch = mismatch.includes(card.uid);

            return (
              <button
                key={card.uid}
                onClick={() => flip(card)}
                disabled={lock || isFlipped}
                className="group relative aspect-[4/3] w-full [perspective:1000px] disabled:cursor-default"
              >
                <div
                  className={`relative h-full w-full transition-transform duration-300 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* Mặt úp */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-ink/10 bg-gradient-to-br from-grape to-bubble text-2xl text-white shadow-card [backface-visibility:hidden] group-enabled:group-hover:brightness-110">
                    ❔
                  </div>
                  {/* Mặt lật */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-2xl border-2 p-2 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ${
                      isMatched
                        ? "border-mint bg-mint/10"
                        : isMismatch
                          ? "border-tomato bg-tomato/10 animate-wiggle"
                          : "border-grape/40 bg-white"
                    }`}
                  >
                    <span className="text-xl">{card.emoji}</span>
                    <span className="text-[11px] font-medium leading-snug text-ink">{card.label}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
