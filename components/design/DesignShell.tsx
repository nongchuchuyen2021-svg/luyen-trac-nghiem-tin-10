"use client";

import { useState, type ReactNode } from "react";
import { sound } from "@/lib/sound";
import Confetti from "@/components/Confetti";

// Khung dùng chung cho các game đồ hoạ Bài 12 (nền tối neon như các game khác)
export function DesignHeader({
  onBack,
  badge,
  title,
  emoji,
  instructions,
  progress,
  right,
}: {
  onBack?: () => void;
  badge: string;
  title: string;
  emoji: string;
  instructions: string;
  progress: number;
  right?: ReactNode;
}) {
  const [soundOn, setSoundOn] = useState(sound.enabled);
  return (
    <header>
      <div className="flex items-center justify-between gap-3">
        {onBack ? (
          <button
            onClick={() => {
              sound.click();
              onBack();
            }}
            className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-slate-300 transition hover:border-cyan-500/50 hover:text-white"
          >
            ← Quay lại
          </button>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundOn(sound.toggle())}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-xs text-slate-300 transition hover:border-cyan-400 hover:text-white"
            title={soundOn ? "Tắt âm thanh" : "Bật âm thanh"}
            aria-label={soundOn ? "Tắt âm thanh" : "Bật âm thanh"}
          >
            {soundOn ? "🔊" : "🔇"}
          </button>
          {right}
        </div>
      </div>
      <div className="mt-4">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
          {badge}
        </div>
        <h1 className="mt-1.5 font-display text-xl font-bold leading-snug text-white">
          {emoji} {title}
        </h1>
        <p className="mt-1 text-xs leading-relaxed text-slate-400">{instructions}</p>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </header>
  );
}

export function ResultScreen({
  badge,
  percent,
  headline,
  messages,
  best,
  onRetry,
  onBack,
  children,
}: {
  badge: string;
  percent: number;
  headline: string;
  messages: [string, string, string]; // >=80, >=50, còn lại
  best: number | null;
  onRetry: () => void;
  onBack?: () => void;
  children?: ReactNode;
}) {
  const success = percent >= 80;
  const emoji = success ? "🏆" : percent >= 50 ? "⚡" : "📖";
  const message = success ? messages[0] : percent >= 50 ? messages[1] : messages[2];
  return (
    <main className="relative min-h-screen bg-[#070b14] pb-16 text-white">
      <Confetti trigger={success} />
      <div className="mx-auto max-w-2xl px-5 pt-12 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950 p-8 text-center shadow-2xl">
          <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
          <p className="relative text-7xl">{emoji}</p>
          <span className="relative mt-3 inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
            {badge}
          </span>
          <h1 className="relative mt-2 font-display text-3xl font-extrabold text-white">{headline}</h1>
          <p className="relative mt-2 text-sm text-slate-300">{message}</p>
          {best !== null && percent > best && (
            <p className="relative mt-3 font-mono text-sm font-semibold text-cyan-300">
              🚀 Kỉ lục mới! (Trước đó: {best}%)
            </p>
          )}
          <div className="relative mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                sound.click();
                onRetry();
              }}
              className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2.5 font-display text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:opacity-90 active:scale-95"
            >
              🔄 Chơi lại
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
        {children}
      </div>
    </main>
  );
}
