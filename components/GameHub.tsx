"use client";

import { useEffect, useState } from "react";
import type { LessonGame } from "@/lib/types";
import { getLessonProgress } from "@/lib/progress";
import SortGameClient from "@/components/SortGame";
import TimelineGameClient from "@/components/TimelineGame";
import Sort3GameClient from "@/components/Sort3Game";
import CyberArenaGame from "@/components/CyberArenaGame";
import SearchGameClient from "@/components/SearchGame";
import CourtGameClient from "@/components/CourtGame";
import NetworkGameClient from "@/components/NetworkGame";

export default function GameHub({
  lessonId,
  games,
  onBack,
}: {
  lessonId: string;
  games: LessonGame[];
  onBack?: () => void;
}) {
  const [active, setActive] = useState<LessonGame | null>(games.length === 1 ? games[0] : null);
  const [bestByGame, setBestByGame] = useState<Record<string, number | null>>({});

  useEffect(() => {
    if (active) return;
    const map: Record<string, number | null> = {};
    for (const g of games) {
      if (g.kind === "arena") {
        map[g.id] = getLessonProgress(`${lessonId}:arena:${g.id}`)?.best ?? null;
      } else {
        map[g.id] = getLessonProgress(`${lessonId}:game:${g.id}`)?.best ?? null;
      }
    }
    setBestByGame(map);
  }, [active, games, lessonId]);

  if (active) {
    const handleBack = games.length === 1 ? onBack : () => setActive(null);
    if (active.kind === "network") {
      return <NetworkGameClient lessonId={lessonId} game={active} onBack={handleBack} />;
    }
    if (active.kind === "sort") {
      return <SortGameClient lessonId={lessonId} game={active} onBack={handleBack} />;
    }
    if (active.kind === "timeline") {
      return <TimelineGameClient lessonId={lessonId} game={active} onBack={handleBack} />;
    }
    if (active.kind === "arena") {
      return <CyberArenaGame lessonId={lessonId} game={active} onBack={handleBack} />;
    }
    if (active.kind === "search") {
      return <SearchGameClient lessonId={lessonId} game={active} onBack={handleBack} />;
    }
    if (active.kind === "court") {
      return <CourtGameClient lessonId={lessonId} game={active} onBack={handleBack} />;
    }
    return <Sort3GameClient lessonId={lessonId} game={active} onBack={handleBack} />;
  }

  return (
    <main className="playground min-h-screen pb-16">
      <div className="mx-auto max-w-2xl px-5 pt-10 sm:px-8">
        {onBack && (
          <button
            onClick={onBack}
            className="rounded-full border border-ink/10 bg-white px-3 py-1.5 font-mono text-xs text-ink-soft transition hover:border-grape/40 hover:text-grape-deep"
          >
            ← Quay lại
          </button>
        )}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-ink">🎮 Trung tâm Game & Thử thách</h1>
            <p className="mt-1 text-sm text-ink-soft">Chọn trò chơi để vừa học vừa ôn luyện kiến thức bài học.</p>
          </div>
        </div>

        <div className="mt-6 space-y-3.5">
          {games.map((g) => {
            const isArena = g.kind === "arena";
            const isSearch = g.kind === "search";
            const isCourt = g.kind === "court";
            const isNetwork = g.kind === "network";
            const desc =
              g.kind === "sort"
                ? `${g.items.length} thẻ · kéo hoặc bấm để phân loại`
                : g.kind === "timeline"
                  ? `${g.items.length} mốc · kéo hoặc chạm để sắp xếp`
                  : g.kind === "arena"
                    ? `${g.waves.length} đợt tấn công · Tường lửa 100 HP · Diệt trùm ${g.bossName}`
                    : g.kind === "search"
                      ? `${g.challenges.length} thử thách · ghép toán tử site:, filetype:, \"\", -`
                      : g.kind === "court"
                        ? `${g.cases.length} vụ án · Thẩm phán gõ búa tuyên án theo SGK & Luật SHTT`
                        : g.kind === "network"
                          ? `${g.missions.length} nhiệm vụ · Điều phối gói tin Switch/Router, cứu hộ mạng, Đám mây & IoT`
                          : `${g.items.length} thẻ · chọn đúng 1 trong 3 nhóm`;

            const best = bestByGame[g.id] ?? null;

            if (isNetwork) {
              return (
                <button
                  key={g.id}
                  onClick={() => setActive(g)}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-sky-500/40 bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 p-5 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-900/40"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-sky-600/20 blur-2xl transition group-hover:bg-sky-600/30" />
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-500/30 bg-sky-900/40 text-3xl shadow-inner">
                    {g.emoji}
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/40 bg-sky-500/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
                      MÔ PHỎNG MẠNG & ĐÁM MÂY
                    </span>
                    <span className="mt-1 block font-display text-lg font-bold text-white group-hover:text-sky-200">
                      {g.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-300">
                      {desc}
                    </span>
                  </span>
                  {best !== null ? (
                    <span className="relative shrink-0 rounded-full border border-sky-500/30 bg-sky-500/20 px-3 py-1 font-mono text-xs font-bold text-sky-300">
                      🌐 {best}%
                    </span>
                  ) : (
                    <span className="relative shrink-0 rounded-full border border-sky-500/30 bg-sky-500/20 px-3 py-1 font-mono text-xs font-bold text-sky-300 transition group-hover:scale-105">
                      ĐIỀU PHỐI 🌐
                    </span>
                  )}
                </button>
              );
            }

            if (isArena) {
              return (
                <button
                  key={g.id}
                  onClick={() => setActive(g)}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-purple-500/40 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-900 p-5 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-900/40"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-purple-600/20 blur-2xl transition group-hover:bg-purple-600/30" />
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-900/40 text-3xl shadow-inner">
                    {g.emoji}
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-purple-500/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-purple-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
                      ĐẤU TRƯỜNG ĐẶC BIỆT
                    </span>
                    <span className="mt-1 block font-display text-lg font-bold text-white group-hover:text-purple-200">
                      {g.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-300">
                      {desc}
                    </span>
                  </span>
                  {best !== null ? (
                    <span className="relative shrink-0 rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1 font-mono text-xs font-bold text-amber-300">
                      🏆 {best}đ
                    </span>
                  ) : (
                    <span className="relative shrink-0 rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 font-mono text-xs font-bold text-purple-300 transition group-hover:scale-105">
                      VÀO ĐẤU ⚔️
                    </span>
                  )}
                </button>
              );
            }

            if (isSearch) {
              return (
                <button
                  key={g.id}
                  onClick={() => setActive(g)}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-5 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/40"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-600/20 blur-2xl transition group-hover:bg-blue-600/30" />
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-900/40 text-3xl shadow-inner">
                    {g.emoji}
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/40 bg-blue-500/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-blue-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                      THỢ SĂN TÌM KIẾM GOOGLE
                    </span>
                    <span className="mt-1 block font-display text-lg font-bold text-white group-hover:text-blue-200">
                      {g.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-300">
                      {desc}
                    </span>
                  </span>
                  {best !== null ? (
                    <span className="relative shrink-0 rounded-full border border-mint/30 bg-mint/20 px-3 py-1 font-mono text-xs font-bold text-mint">
                      ⭐ {best}%
                    </span>
                  ) : (
                    <span className="relative shrink-0 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 font-mono text-xs font-bold text-blue-300 transition group-hover:scale-105">
                      BẮT ĐẦU 🔍
                    </span>
                  )}
                </button>
              );
            }

            if (isCourt) {
              return (
                <button
                  key={g.id}
                  onClick={() => setActive(g)}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-amber-500/40 bg-gradient-to-r from-slate-950 via-stone-900 to-amber-950/70 p-5 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-900/40"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-amber-600/20 blur-2xl transition group-hover:bg-amber-600/30" />
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-900/40 text-3xl shadow-inner">
                    {g.emoji}
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                      TÒA ÁN CÔNG LÝ SỐ
                    </span>
                    <span className="mt-1 block font-display text-lg font-bold text-white group-hover:text-amber-200">
                      {g.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-300">
                      {desc}
                    </span>
                  </span>
                  {best !== null ? (
                    <span className="relative shrink-0 rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1 font-mono text-xs font-bold text-amber-300">
                      ⚖️ {best}%
                    </span>
                  ) : (
                    <span className="relative shrink-0 rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1 font-mono text-xs font-bold text-amber-300 transition group-hover:scale-105">
                      XÉT XỬ ⚖️
                    </span>
                  )}
                </button>
              );
            }

            return (
              <button
                key={g.id}
                onClick={() => setActive(g)}
                className="group flex w-full items-center gap-4 rounded-2xl border border-ink/5 bg-white p-5 text-left shadow-card transition hover:-translate-y-0.5 hover:border-grape/30 hover:shadow-card-hover"
              >
                <span className="text-3xl">{g.emoji}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-base font-semibold text-ink group-hover:text-grape-deep">
                    {g.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-soft">{desc}</span>
                </span>
                {best !== null && (
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-xs font-medium ${
                      best >= 80 ? "bg-mint/15 text-mint" : best >= 50 ? "bg-sun/15 text-sun" : "bg-tomato/10 text-tomato"
                    }`}
                  >
                    {best >= 80 ? "⭐ " : ""}
                    {best}%
                  </span>
                )}
                <span className="shrink-0 text-ink-soft/40 transition group-hover:translate-x-0.5 group-hover:text-grape">
                  →
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
