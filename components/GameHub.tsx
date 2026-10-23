"use client";

import { useEffect, useState } from "react";
import type { LessonGame } from "@/lib/types";
import { getLessonProgress } from "@/lib/progress";
import { sound } from "@/lib/sound";
import SortGameClient from "@/components/SortGame";
import TimelineGameClient from "@/components/TimelineGame";
import Sort3GameClient from "@/components/Sort3Game";
import CyberArenaGame from "@/components/CyberArenaGame";
import SearchGameClient from "@/components/SearchGame";
import CourtGameClient from "@/components/CourtGame";
import NetworkGameClient from "@/components/NetworkGame";
import ZoomGameClient from "@/components/ZoomGame";
import StudioGameClient from "@/components/StudioGame";
import BriefGameClient from "@/components/BriefGame";

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
        const score =
          getLessonProgress(`${lessonId}:arena:${g.id}`)?.best ??
          getLessonProgress(`${lessonId}:game:${g.id}`)?.best ??
          null;
        map[g.id] = score;
      } else {
        map[g.id] = getLessonProgress(`${lessonId}:game:${g.id}`)?.best ?? null;
      }
    }
    setBestByGame(map);
  }, [active, games, lessonId]);

  function handleSelectGame(g: LessonGame) {
    sound.click();
    setActive(g);
  }

  if (active) {
    const handleBack = games.length === 1 ? onBack : () => setActive(null);
    if (active.kind === "zoom") {
      return <ZoomGameClient lessonId={lessonId} game={active} onBack={handleBack} />;
    }
    if (active.kind === "studio") {
      return <StudioGameClient lessonId={lessonId} game={active} onBack={handleBack} />;
    }
    if (active.kind === "brief") {
      return <BriefGameClient lessonId={lessonId} game={active} onBack={handleBack} />;
    }
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
    <main className="min-h-screen bg-[#070b14] pb-20 text-white selection:bg-cyan-500 selection:text-black">
      <div className="mx-auto max-w-2xl px-5 pt-8 sm:px-8">
        {onBack && (
          <button
            onClick={() => {
              sound.click();
              onBack();
            }}
            className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3.5 py-1.5 font-mono text-xs text-slate-300 transition hover:border-cyan-400 hover:text-white active:scale-95"
          >
            ← Quay lại bài học
          </button>
        )}

        <div className="mt-5 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              ĐẤU TRƯỜNG GAME & THỬ THÁCH SỐ
            </div>
            <h1 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
              🎮 Trung Tâm Trò Chơi Ôn Luyện
            </h1>
            <p className="mt-1 text-xs leading-relaxed text-slate-300 sm:text-sm">
              Chọn trò chơi tương tác để biến lý thuyết khô khan thành trải nghiệm học tập cuốn hút.
            </p>
          </div>
        </div>

        {/* Danh sách thẻ game chuẩn hoá Dark/Neon */}
        <div className="mt-6 space-y-4">
          {games.map((g) => {
            const best = bestByGame[g.id] ?? null;

            // 1. GAME MẠNG & CLOUD
            if (g.kind === "network") {
              const desc = `${g.missions.length} nhiệm vụ · Điều phối gói tin Switch/Router, cứu hộ mạng & Đám mây`;
              return (
                <button
                  key={g.id}
                  onClick={() => handleSelectGame(g)}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-sky-500/40 bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 p-5 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-900/40 active:scale-[0.99]"
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
                    <span className="mt-1 block font-display text-base font-bold text-white group-hover:text-sky-200 sm:text-lg">
                      {g.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-300">
                      {desc}
                    </span>
                  </span>
                  {best !== null ? (
                    <span className="relative shrink-0 rounded-full border border-sky-500/40 bg-sky-500/20 px-3 py-1 font-mono text-xs font-bold text-sky-300 shadow-sm">
                      ⭐ {best}%
                    </span>
                  ) : (
                    <span className="relative shrink-0 rounded-full border border-sky-500/30 bg-sky-500/20 px-3 py-1 font-mono text-xs font-bold text-sky-300 transition group-hover:scale-105">
                      ĐIỀU PHỐI 🌐
                    </span>
                  )}
                </button>
              );
            }

            // 2. GAME ĐẤU TRƯỜNG CYBER ARENA
            if (g.kind === "arena") {
              const desc = `${g.waves.length} đợt tấn công · Tường lửa 100 HP · Diệt trùm ${g.bossName}`;
              return (
                <button
                  key={g.id}
                  onClick={() => handleSelectGame(g)}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-purple-500/40 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-900 p-5 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-900/40 active:scale-[0.99]"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-purple-600/20 blur-2xl transition group-hover:bg-purple-600/30" />
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-900/40 text-3xl shadow-inner">
                    {g.emoji}
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-purple-500/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-purple-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
                      ĐẤU TRƯỜNG PHÒNG THỦ
                    </span>
                    <span className="mt-1 block font-display text-base font-bold text-white group-hover:text-purple-200 sm:text-lg">
                      {g.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-300">
                      {desc}
                    </span>
                  </span>
                  {best !== null ? (
                    <span className="relative shrink-0 rounded-full border border-amber-500/40 bg-amber-500/20 px-3 py-1 font-mono text-xs font-bold text-amber-300 shadow-sm">
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

            // 3. GAME THỢ SĂN TÌM KIẾM GOOGLE
            if (g.kind === "search") {
              const desc = `${g.challenges.length} thử thách · Ghép toán tử site:, filetype:, \"\", -`;
              return (
                <button
                  key={g.id}
                  onClick={() => handleSelectGame(g)}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-5 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/40 active:scale-[0.99]"
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
                    <span className="mt-1 block font-display text-base font-bold text-white group-hover:text-blue-200 sm:text-lg">
                      {g.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-300">
                      {desc}
                    </span>
                  </span>
                  {best !== null ? (
                    <span className="relative shrink-0 rounded-full border border-cyan-500/40 bg-cyan-500/20 px-3 py-1 font-mono text-xs font-bold text-cyan-300 shadow-sm">
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

            // 4. GAME TÒA ÁN CÔNG LÝ SỐ
            if (g.kind === "court") {
              const desc = `${g.cases.length} vụ án · Thẩm phán tuyên án theo SGK & Luật SHTT`;
              return (
                <button
                  key={g.id}
                  onClick={() => handleSelectGame(g)}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-amber-500/40 bg-gradient-to-r from-slate-950 via-stone-900 to-amber-950/70 p-5 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-900/40 active:scale-[0.99]"
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
                    <span className="mt-1 block font-display text-base font-bold text-white group-hover:text-amber-200 sm:text-lg">
                      {g.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-300">
                      {desc}
                    </span>
                  </span>
                  {best !== null ? (
                    <span className="relative shrink-0 rounded-full border border-amber-500/40 bg-amber-500/20 px-3 py-1 font-mono text-xs font-bold text-amber-300 shadow-sm">
                      ⭐ {best}%
                    </span>
                  ) : (
                    <span className="relative shrink-0 rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1 font-mono text-xs font-bold text-amber-300 transition group-hover:scale-105">
                      XÉT XỬ ⚖️
                    </span>
                  )}
                </button>
              );
            }

            // 5. GAME PHÂN LOẠI 2 NHÓM (SORT)
            if (g.kind === "sort") {
              const desc = `${g.items.length} thẻ · Kéo quẹt hoặc chạm nút để phân loại`;
              return (
                <button
                  key={g.id}
                  onClick={() => handleSelectGame(g)}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-900 p-5 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-900/40 active:scale-[0.99]"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-emerald-600/20 blur-2xl transition group-hover:bg-emerald-600/30" />
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-900/40 text-3xl shadow-inner">
                    {g.emoji}
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      ARCADE PHÂN LOẠI 2 NHÓM
                    </span>
                    <span className="mt-1 block font-display text-base font-bold text-white group-hover:text-emerald-200 sm:text-lg">
                      {g.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-300">
                      {desc}
                    </span>
                  </span>
                  {best !== null ? (
                    <span className="relative shrink-0 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-3 py-1 font-mono text-xs font-bold text-emerald-300 shadow-sm">
                      ⭐ {best}%
                    </span>
                  ) : (
                    <span className="relative shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 font-mono text-xs font-bold text-emerald-300 transition group-hover:scale-105">
                      PHÂN LOẠI 🔀
                    </span>
                  )}
                </button>
              );
            }

            // 6. GAME PHÂN LOẠI 3 NHÓM (SORT3)
            if (g.kind === "sort3") {
              const desc = `${g.items.length} thẻ · Chọn đúng 1 trong 3 nhóm đa chiều`;
              return (
                <button
                  key={g.id}
                  onClick={() => handleSelectGame(g)}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-rose-500/40 bg-gradient-to-r from-slate-950 via-rose-950 to-slate-900 p-5 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-rose-400 hover:shadow-2xl hover:shadow-rose-900/40 active:scale-[0.99]"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-rose-600/20 blur-2xl transition group-hover:bg-rose-600/30" />
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-rose-500/30 bg-rose-900/40 text-3xl shadow-inner">
                    {g.emoji}
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/40 bg-rose-500/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-rose-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
                      PHÂN LOẠI ĐA CHIỀU 3 NHÓM
                    </span>
                    <span className="mt-1 block font-display text-base font-bold text-white group-hover:text-rose-200 sm:text-lg">
                      {g.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-300">
                      {desc}
                    </span>
                  </span>
                  {best !== null ? (
                    <span className="relative shrink-0 rounded-full border border-rose-500/40 bg-rose-500/20 px-3 py-1 font-mono text-xs font-bold text-rose-300 shadow-sm">
                      ⭐ {best}%
                    </span>
                  ) : (
                    <span className="relative shrink-0 rounded-full border border-rose-500/30 bg-rose-500/20 px-3 py-1 font-mono text-xs font-bold text-rose-300 transition group-hover:scale-105">
                      CHỌN NHÓM 🧩
                    </span>
                  )}
                </button>
              );
            }

            // 6b. GAME ĐỒ HOẠ BÀI 12 (SOI PIXEL / HỌA SĨ INKSCAPE / KHÁCH HÀNG GIAO VIỆC)
            if (g.kind === "zoom" || g.kind === "studio" || g.kind === "brief") {
              const meta =
                g.kind === "zoom"
                  ? { tag: "KÍNH LÚP ĐỒ HOẠ", desc: `${g.rounds.length} ảnh · 3 màn · 3 mạng ❤️ · Phóng to soi pixel`, cta: "SOI NGAY 🔬" }
                  : g.kind === "studio"
                    ? { tag: "MÔ PHỎNG INKSCAPE", desc: `${g.missions.length} đơn hàng · Tự vẽ, tô Fill/Stroke, lưu .svg`, cta: "VẼ NGAY 🖌️" }
                    : { tag: "STUDIO THIẾT KẾ", desc: `${g.scenarios.length} khách hàng · Chọn loại đồ hoạ, phần mềm, định dạng`, cta: "NHẬN VIỆC 💼" };
              return (
                <button
                  key={g.id}
                  onClick={() => handleSelectGame(g)}
                  className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-fuchsia-500/40 bg-gradient-to-r from-slate-950 via-fuchsia-950 to-slate-900 p-5 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400 hover:shadow-2xl hover:shadow-fuchsia-900/40 active:scale-[0.99]"
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-fuchsia-600/20 blur-2xl transition group-hover:bg-fuchsia-600/30" />
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-fuchsia-500/30 bg-fuchsia-900/40 text-3xl shadow-inner">
                    {g.emoji}
                  </span>
                  <span className="relative min-w-0 flex-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-fuchsia-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" />
                      {meta.tag}
                    </span>
                    <span className="mt-1 block font-display text-base font-bold text-white group-hover:text-fuchsia-200 sm:text-lg">
                      {g.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-300">{meta.desc}</span>
                  </span>
                  {best !== null ? (
                    <span className="relative shrink-0 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/20 px-3 py-1 font-mono text-xs font-bold text-fuchsia-300 shadow-sm">
                      ⭐ {best}%
                    </span>
                  ) : (
                    <span className="relative shrink-0 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/20 px-3 py-1 font-mono text-xs font-bold text-fuchsia-300 transition group-hover:scale-105">
                      {meta.cta}
                    </span>
                  )}
                </button>
              );
            }

            // 7. GAME DÒNG THỜI GIAN LỊCH SỬ (TIMELINE)
            const desc = `${g.items.length} mốc lịch sử · Sắp xếp theo trục thời gian`;
            return (
              <button
                key={g.id}
                onClick={() => handleSelectGame(g)}
                className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-orange-500/40 bg-gradient-to-r from-slate-950 via-orange-950 to-slate-900 p-5 text-left text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-900/40 active:scale-[0.99]"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-600/20 blur-2xl transition group-hover:bg-orange-600/30" />
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-900/40 text-3xl shadow-inner">
                  {g.emoji}
                </span>
                <span className="relative min-w-0 flex-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/40 bg-orange-500/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-orange-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
                    TRỤC DÒNG THỜI GIAN LỊCH SỬ
                  </span>
                  <span className="mt-1 block font-display text-base font-bold text-white group-hover:text-orange-200 sm:text-lg">
                    {g.title}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-slate-300">
                    {desc}
                  </span>
                </span>
                {best !== null ? (
                  <span className="relative shrink-0 rounded-full border border-orange-500/40 bg-orange-500/20 px-3 py-1 font-mono text-xs font-bold text-orange-300 shadow-sm">
                    ⭐ {best}%
                  </span>
                ) : (
                  <span className="relative shrink-0 rounded-full border border-orange-500/30 bg-orange-500/20 px-3 py-1 font-mono text-xs font-bold text-orange-300 transition group-hover:scale-105">
                    SẮP XẾP ⏳
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
