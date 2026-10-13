"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { SortGame, SortGameItem } from "@/lib/types";
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

const SWIPE_THRESHOLD = 90; // px kéo ngang tối thiểu để tính là 1 lượt trả lời

export default function SortGameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: SortGame;
  onBack?: () => void;
}) {
  const progressKey = `${lessonId}:game:${game.id}`;
  const [deck, setDeck] = useState<SortGameItem[]>(() => shuffle(game.items));
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState<null | { picked: boolean; correct: boolean }>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongItems, setWrongItems] = useState<SortGameItem[]>([]);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Trạng thái kéo thẻ
  const [dragX, setDragX] = useState(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDeck(shuffle(game.items));
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }, [game, progressKey]);

  const item = deck[current];
  const scorePercent = deck.length ? Math.round((correctCount / deck.length) * 100) : 0;

  function commit(pickedMatch: boolean) {
    if (answered || !item) return;
    const correct = pickedMatch === item.isMatch;
    setAnswered({ picked: pickedMatch, correct });

    if (correct) {
      setCorrectCount((c) => c + 1);
      sound.correct();
    } else {
      setWrongItems((list) => [...list, item]);
      sound.wrong();
    }
    setDragX(pickedMatch ? 260 : -260);
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
      setDragX(0);
    }
  }

  function restart() {
    sound.click();
    setDeck(shuffle(game.items));
    setCurrent(0);
    setAnswered(null);
    setCorrectCount(0);
    setWrongItems([]);
    setFinished(false);
    setDragX(0);
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }

  // ── Kéo thẻ bằng Pointer Events ──
  function onPointerDown(e: React.PointerEvent) {
    if (answered) return;
    draggingRef.current = true;
    startXRef.current = e.clientX - dragX;
    cardRef.current?.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!draggingRef.current || answered) return;
    const newX = e.clientX - startXRef.current;
    setDragX(newX);
  }

  function onPointerUp() {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (answered) return;

    if (dragX > SWIPE_THRESHOLD) {
      sound.swipe();
      commit(true);
    } else if (dragX < -SWIPE_THRESHOLD) {
      sound.swipe();
      commit(false);
    } else {
      setDragX(0);
    }
  }

  const rotate = (dragX / 300) * 12;
  const leanRight = dragX > 35;
  const leanLeft = dragX < -35;
  const progressPercent = deck.length ? Math.round(((current + (answered ? 1 : 0)) / deck.length) * 100) : 0;
  const wrongList = useMemo(() => wrongItems, [wrongItems]);

  if (deck.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070b14] text-white">
        <p className="font-mono text-sm text-slate-400">Đang khởi tạo game…</p>
      </main>
    );
  }

  // ===== Màn hình kết quả =====
  if (finished) {
    const isSuccess = scorePercent >= 80;
    const emoji = isSuccess ? "🏆" : scorePercent >= 50 ? "⚡" : "📖";
    const message =
      scorePercent >= 80
        ? "Xuất sắc! Em phân loại chính xác tuyệt đối các kiến thức SGK."
        : scorePercent >= 50
          ? "Khá lắm! Hãy ôn lại các thẻ chưa chuẩn và làm lại để đạt điểm tuyệt đối nhé."
          : "Chưa đạt yêu cầu! Hãy xem kỹ lời giải thích và thử sức lại nhé.";

    return (
      <main className="relative min-h-screen bg-[#070b14] pb-16 text-white">
        <Confetti trigger={isSuccess} />
        <div className="mx-auto max-w-2xl px-5 pt-12 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 text-center shadow-2xl backdrop-blur">
            <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
            <p className="relative text-7xl">{emoji}</p>
            <span className="relative mt-3 inline-block rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-emerald-300">
              KẾT QUẢ PHÂN LOẠI
            </span>
            <h1 className="relative mt-2 font-display text-3xl font-extrabold text-white">
              {correctCount}/{deck.length} thẻ đúng · {scorePercent}%
            </h1>
            <p className="relative mt-2 text-sm text-slate-300">{message}</p>

            {best !== null && scorePercent > best && (
              <p className="relative mt-3 font-mono text-sm font-semibold text-emerald-400">
                🚀 Kỉ lục cá nhân mới! (Trước đó: {best}%)
              </p>
            )}

            <div className="relative mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={restart}
                className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2.5 font-display text-sm font-bold text-white shadow-lg shadow-emerald-900/40 transition hover:opacity-90 hover:scale-105 active:scale-95"
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
                ⚠️ Cần ôn lại {wrongList.length} thẻ chưa chính xác:
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
                      ✔ Phải thuộc nhóm: <strong>{w.isMatch ? game.matchLabel : game.noMatchLabel}</strong>
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

  // ===== Giao diện chơi game =====
  return (
    <main className="min-h-screen bg-[#070b14] pb-16 text-white selection:bg-emerald-500 selection:text-black">
      <div className="mx-auto max-w-xl px-4 pt-6 sm:px-6">
        <header>
          <div className="flex items-center justify-between gap-3">
            {onBack ? (
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-slate-300 transition hover:border-emerald-500/50 hover:text-white"
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
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-xs text-slate-300 transition hover:border-emerald-400 hover:text-white"
                title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
              >
                {soundEnabled ? "🔊" : "🔇"}
              </button>

              <div className="rounded-full border border-slate-800 bg-slate-900/90 px-3 py-1 font-mono text-xs text-slate-400">
                Thẻ <span className="font-bold text-emerald-400">{current + 1}</span>/{deck.length}
                {best !== null && ` · Kỉ lục: ${best}%`}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              ARCADE PHÂN LOẠI 2 NHÓM
            </div>
            <h1 className="mt-1.5 font-display text-xl font-bold leading-snug text-white">
              {game.emoji} {game.title}
            </h1>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">{game.instructions}</p>
          </div>

          {/* Thanh tiến độ */}
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 shadow-sm shadow-emerald-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </header>

        {/* Khay 2 bên hiển thị trực quan */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {/* Khay KHÔNG PHẢI / TRÁI */}
          <div
            className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-3 text-center transition-all duration-200 ${
              leanLeft
                ? "scale-[1.03] border-rose-400 bg-rose-950/50 text-rose-200 shadow-lg shadow-rose-900/30"
                : "border-slate-800 bg-slate-900/40 text-slate-400"
            }`}
          >
            <span className="text-2xl">{game.noMatchEmoji}</span>
            <span className="mt-1 font-display text-xs font-bold uppercase tracking-wide">
              {game.noMatchLabel}
            </span>
          </div>

          {/* Khay ĐÚNG / PHẢI */}
          <div
            className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-3 text-center transition-all duration-200 ${
              leanRight
                ? "scale-[1.03] border-emerald-400 bg-emerald-950/50 text-emerald-200 shadow-lg shadow-emerald-900/30"
                : "border-slate-800 bg-slate-900/40 text-slate-400"
            }`}
          >
            <span className="text-2xl">{game.matchEmoji}</span>
            <span className="mt-1 font-display text-xs font-bold uppercase tracking-wide">
              {game.matchLabel}
            </span>
          </div>
        </div>

        {/* Thẻ đang quẹt */}
        <div className="relative mt-5 h-64 select-none">
          <div
            key={item.id}
            ref={cardRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            style={{
              transform: `translateX(${dragX}px) rotate(${rotate}deg)`,
              transition: draggingRef.current ? "none" : "transform 0.35s cubic-bezier(0.18, 0.89, 0.32, 1.28)",
              touchAction: "pan-y",
            }}
            className={`absolute inset-0 flex cursor-grab flex-col items-center justify-center gap-3 rounded-3xl border-2 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6 text-center shadow-2xl active:cursor-grabbing ${
              answered
                ? answered.correct
                  ? "border-emerald-400 shadow-emerald-500/20"
                  : "border-rose-500 shadow-rose-500/20 animate-wiggle"
                : dragX > 35
                  ? "border-emerald-400/80 shadow-emerald-500/30"
                  : dragX < -35
                    ? "border-rose-500/80 shadow-rose-500/30"
                    : "border-slate-800"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-emerald-500/10 blur-xl" />
              <span className="relative text-6xl drop-shadow-md">{item.emoji}</span>
            </div>
            <p className="font-display text-lg font-bold text-white">{item.label}</p>
            {!answered && (
              <p className="font-mono text-[11px] text-slate-400">
                ← Kéo sang trái hoặc phải để phân loại →
              </p>
            )}
          </div>
        </div>

        {/* Nút bấm cảm ứng / phím bấm thay thế */}
        {!answered ? (
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                sound.swipe();
                commit(false);
              }}
              className="flex items-center justify-center gap-2 rounded-2xl border border-rose-500/40 bg-gradient-to-b from-rose-950/40 to-slate-900 p-3.5 font-display text-sm font-bold text-rose-300 shadow-lg transition hover:border-rose-400 hover:bg-rose-900/40 active:scale-95"
            >
              <span>{game.noMatchEmoji}</span>
              <span>{game.noMatchLabel}</span>
            </button>
            <button
              onClick={() => {
                sound.swipe();
                commit(true);
              }}
              className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/40 to-slate-900 p-3.5 font-display text-sm font-bold text-emerald-300 shadow-lg transition hover:border-emerald-400 hover:bg-emerald-900/40 active:scale-95"
            >
              <span>{game.matchEmoji}</span>
              <span>{game.matchLabel}</span>
            </button>
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
              Đáp án: <strong className="text-emerald-300">{item.isMatch ? game.matchLabel : game.noMatchLabel}</strong> — {item.explain}
            </p>
            <button
              onClick={next}
              className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-2.5 font-display text-xs font-bold text-white shadow-lg shadow-emerald-950 transition hover:opacity-90 active:scale-95"
            >
              <span>{current + 1 >= deck.length ? "Xem tổng kết điểm số 🏁" : "Tiếp tục thẻ kế tiếp →"}</span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
