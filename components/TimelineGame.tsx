"use client";

import { useEffect, useState } from "react";
import type { TimelineGame, TimelineItem } from "@/lib/types";
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

type SlotState = (TimelineItem | null)[];

export default function TimelineGameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: TimelineGame;
  onBack?: () => void;
}) {
  const progressKey = `${lessonId}:game:${game.id}`;
  const n = game.items.length;

  const [pool, setPool] = useState<TimelineItem[]>([]);
  const [slots, setSlots] = useState<SlotState>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [best, setBest] = useState<number | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  function setup() {
    setPool(shuffle(game.items));
    setSlots(new Array(n).fill(null));
    setSelectedId(null);
    setChecked(false);
  }

  useEffect(() => {
    setup();
    setBest(getLessonProgress(progressKey)?.best ?? null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game, lessonId]);

  const allFilled = slots.every((s) => s !== null);
  const correctCount = checked
    ? slots.reduce((acc, s, i) => acc + (s && s.id === game.items[i].id ? 1 : 0), 0)
    : 0;
  const scorePercent = Math.round((correctCount / n) * 100);

  function placeInSlot(item: TimelineItem, slotIdx: number) {
    if (checked || slots[slotIdx] !== null) return;
    sound.place();
    setSlots((prev) => {
      const next = [...prev];
      next[slotIdx] = item;
      return next;
    });
    setPool((prev) => prev.filter((p) => p.id !== item.id));
    setSelectedId(null);
  }

  function returnToPool(slotIdx: number) {
    if (checked) return;
    const item = slots[slotIdx];
    if (!item) return;
    sound.click();
    setSlots((prev) => {
      const next = [...prev];
      next[slotIdx] = null;
      return next;
    });
    setPool((prev) => [...prev, item]);
  }

  function onCardTap(item: TimelineItem) {
    if (checked) return;
    sound.click();
    setSelectedId((id) => (id === item.id ? null : item.id));
  }

  function onSlotTap(idx: number) {
    if (checked) return;
    if (slots[idx]) {
      returnToPool(idx);
      return;
    }
    const item = pool.find((p) => p.id === selectedId);
    if (item) placeInSlot(item, idx);
  }

  function check() {
    if (!allFilled) return;
    setChecked(true);
    const correct = slots.reduce((acc, s, i) => acc + (s && s.id === game.items[i].id ? 1 : 0), 0);
    const percent = Math.round((correct / n) * 100);
    saveAttempt(progressKey, percent);

    if (percent >= 80) {
      sound.victory();
    } else {
      sound.defeat();
    }
  }

  const selectedItem = pool.find((p) => p.id === selectedId);

  return (
    <main className="min-h-screen bg-[#070b14] pb-20 text-white selection:bg-amber-500 selection:text-black">
      <Confetti trigger={checked && scorePercent >= 80} />

      <div className="mx-auto max-w-2xl px-4 pt-6 sm:px-6">
        <header>
          <div className="flex items-center justify-between gap-3">
            {onBack ? (
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-slate-300 transition hover:border-amber-500/50 hover:text-white"
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
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-xs text-slate-300 transition hover:border-amber-400 hover:text-white"
                title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
              >
                {soundEnabled ? "🔊" : "🔇"}
              </button>

              {best !== null && (
                <div className="rounded-full border border-slate-800 bg-slate-900/90 px-3 py-1 font-mono text-xs text-slate-400">
                  Kỉ lục: <span className="font-bold text-amber-400">{best}%</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
              TRỤC DÒNG THỜI GIAN LỊCH SỬ
            </div>
            <h1 className="mt-1.5 font-display text-xl font-bold leading-snug text-white">
              {game.emoji} {game.title}
            </h1>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">{game.instructions}</p>
          </div>
        </header>

        {/* Hướng thời gian: Sớm nhất -> Gần đây nhất */}
        <div className="mt-5 flex items-center justify-between font-mono text-[11px] text-amber-400/80">
          <span className="flex items-center gap-1">
            <span>⏮</span> SỚM NHẤT TRONG LỊCH SỬ
          </span>
          <span className="flex items-center gap-1">
            GẦN ĐÂY NHẤT <span>⏭</span>
          </span>
        </div>

        {/* Danh sách các Trạm mốc thời gian */}
        <div className="mt-3 space-y-3">
          {slots.map((item, idx) => {
            const isCorrect = checked && item && item.id === game.items[idx].id;
            const isWrong = checked && item && item.id !== game.items[idx].id;
            const expected = game.items[idx];

            return (
              <div
                key={idx}
                onClick={() => onSlotTap(idx)}
                className={`relative flex items-center gap-3.5 rounded-2xl border-2 p-3.5 transition-all ${
                  checked
                    ? isCorrect
                      ? "border-emerald-500/60 bg-emerald-950/30 shadow-lg shadow-emerald-950/40"
                      : "border-rose-500/60 bg-rose-950/30 shadow-lg shadow-rose-950/40"
                    : item
                      ? "cursor-pointer border-amber-500/40 bg-slate-900/90 hover:border-amber-400"
                      : selectedItem
                        ? "cursor-pointer border-dashed border-amber-400/70 bg-amber-950/20 animate-pulse"
                        : "border-dashed border-slate-800 bg-slate-900/40"
                }`}
              >
                {/* Số thứ tự trạm */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold ${
                    checked
                      ? isCorrect
                        ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/40"
                        : "bg-rose-500 text-white shadow-md shadow-rose-500/40"
                      : item
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                        : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {checked ? (isCorrect ? "✔" : "✘") : idx + 1}
                </div>

                {/* Nội dung slot */}
                <div className="min-w-0 flex-1">
                  {item ? (
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{item.emoji}</span>
                        <p className="font-display text-sm font-semibold text-white">{item.label}</p>
                      </div>

                      {/* Khi đã kiểm tra: hiện năm và giải thích */}
                      {checked && (
                        <div className="mt-1.5 pt-1.5 border-t border-slate-700/50">
                          <span className="inline-block rounded-md bg-amber-500/20 px-2 py-0.5 font-mono text-xs font-bold text-amber-300">
                            Năm: {item.year}
                          </span>
                          {isWrong && (
                            <p className="mt-1 text-xs text-rose-300 font-semibold">
                              ✘ Sai vị trí! Đúng phải là: {expected.emoji} {expected.label} ({expected.year})
                            </p>
                          )}
                          <p className="mt-1 text-xs leading-relaxed text-slate-300">{item.explain}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="font-mono text-xs text-slate-400">
                      {selectedItem
                        ? `👉 Chạm vào đây để đặt thẻ vào Vị trí số ${idx + 1}`
                        : `Ô số ${idx + 1} (Trống — chạm chọn thẻ bên dưới để đặt)`}
                    </p>
                  )}
                </div>

                {/* Nút xoá thẻ khỏi ô nếu chưa chấm */}
                {!checked && item && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      returnToPool(idx);
                    }}
                    className="shrink-0 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-400 transition hover:border-rose-400 hover:text-rose-300"
                    title="Gỡ thẻ về kho"
                  >
                    Gỡ
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Kho thẻ chưa đặt */}
        {!checked && pool.length > 0 && (
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                📦 Kho thẻ sự kiện ({pool.length} thẻ còn lại)
              </h2>
              <span className="font-mono text-[10px] text-slate-400">
                Chạm thẻ rồi chạm ô để đặt
              </span>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-2.5">
              {pool.map((p) => {
                const isSelected = selectedId === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => onCardTap(p)}
                    className={`flex items-center gap-3 rounded-xl border p-3 text-left transition active:scale-95 ${
                      isSelected
                        ? "border-amber-400 bg-amber-950/40 text-amber-200 shadow-lg shadow-amber-950/50 scale-[1.02]"
                        : "border-slate-800 bg-slate-950/80 text-slate-200 hover:border-slate-700 hover:bg-slate-900"
                    }`}
                  >
                    <span className="text-2xl">{p.emoji}</span>
                    <span className="min-w-0 flex-1 font-display text-xs font-semibold leading-snug">
                      {p.label}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] font-bold ${
                        isSelected
                          ? "bg-amber-400 text-black"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {isSelected ? "ĐANG CHỌN" : "CHỌN"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Nút hành động */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {!checked ? (
            <button
              onClick={check}
              disabled={!allFilled}
              className={`rounded-full px-8 py-3 font-display text-sm font-bold shadow-lg transition active:scale-95 ${
                allFilled
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-amber-950 hover:opacity-90"
                  : "cursor-not-allowed border border-slate-800 bg-slate-900 text-slate-400 opacity-60"
              }`}
            >
              {allFilled ? "KIỂM TRA DÒNG THỜI GIAN 🚀" : `Hãy đặt đủ ${n} sự kiện vào các ô`}
            </button>
          ) : (
            <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 text-center shadow-2xl backdrop-blur">
              <p className="font-display text-xl font-extrabold text-white">
                {scorePercent >= 80 ? "🎉 Tuyệt vời!" : "📖 Cố gắng lên!"} Bạn xếp đúng {correctCount}/{n} mốc ({scorePercent}%)
              </p>
              {best !== null && scorePercent > best && (
                <p className="font-mono text-xs font-bold text-emerald-400">
                  🚀 Kỉ lục mới: {scorePercent}%
                </p>
              )}
              <div className="mt-2 flex gap-3">
                <button
                  onClick={setup}
                  className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-2.5 font-display text-sm font-bold text-black shadow-lg transition hover:opacity-90 active:scale-95"
                >
                  🔄 Sắp xếp lại (Xáo đề mới)
                </button>
                {onBack && (
                  <button
                    onClick={onBack}
                    className="rounded-full border border-slate-700 bg-slate-800 px-6 py-2.5 font-display text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
                  >
                    ← Trở về Hub
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
