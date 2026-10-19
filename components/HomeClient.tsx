"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CURRICULUM } from "@/data/curriculum";
import { getProgress } from "@/lib/progress";
import type { LessonCounts, ProgressMap } from "@/lib/types";

function ScoreBadge({ best }: { best: number }) {
  if (best >= 80) {
    return (
      <span className="rounded-full bg-mint/15 px-2.5 py-1 font-mono text-xs font-medium text-mint">
        ⭐ {best}%
      </span>
    );
  }
  if (best >= 50) {
    return (
      <span className="rounded-full bg-sun/15 px-2.5 py-1 font-mono text-xs font-medium text-sun">
        {best}%
      </span>
    );
  }
  return (
    <span className="rounded-full bg-tomato/10 px-2.5 py-1 font-mono text-xs font-medium text-tomato">
      {best}%
    </span>
  );
}

export default function HomeClient({ counts }: { counts: Record<string, LessonCounts> }) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProgress(getProgress());
    setLoaded(true);
  }, []);

  const availableLessons = CURRICULUM.flatMap((t) => t.lessons).filter((l) => l.available);
  const doneCount = availableLessons.filter((l) => (progress[l.id]?.best ?? 0) >= 80).length;

  return (
    <main className="playground min-h-screen pb-16">
      <div className="mx-auto max-w-3xl px-5 pt-12 sm:px-8">
        <header className="text-center">
          <p className="inline-block rounded-full bg-gradient-to-r from-grape to-bubble px-5 py-2 font-display text-base font-semibold text-white shadow-card sm:px-6 sm:py-2.5 sm:text-xl">
            🏫 Trường THPT Na Rì - Tỉnh Thái Nguyên
          </p>
          <p className="mt-5 text-5xl">📚✨</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Luyện trắc nghiệm{" "}
            <span className="bg-gradient-to-r from-grape to-bubble bg-clip-text text-transparent">
              Tin học 10
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">
            Chọn bài để luyện — làm đến đâu chấm đến đó, có giải thích từng câu. Đạt
            từ 80% trở lên sẽ nhận sao ⭐. Tiến độ được lưu ngay trên máy của em.
          </p>
          {loaded && (
            <p className="mt-4 inline-block rounded-full border border-grape/20 bg-white px-4 py-1.5 font-mono text-sm text-grape-deep shadow-card">
              🏆 Đã chinh phục {doneCount}/{availableLessons.length} bài
            </p>
          )}
        </header>

        <Link href="/on-tap/bai-1-2-7-8-9-10-11" className="mt-8 flex items-center justify-between gap-4 rounded-2xl border-2 border-grape/30 bg-white p-5 shadow-card sm:p-6">
          <div><p className="font-display text-lg font-bold text-ink">📚 Đề cương ôn tập — Bài 1, 2, 7–11</p><p className="mt-1 text-sm text-ink-soft">60 TNKQ · 12 đúng–sai · 7 tự luận · Tự luyện và lưu kết quả</p></div>
          <span className="shrink-0 rounded-full bg-grape-deep px-4 py-2 text-sm font-semibold text-white">Ôn tập →</span>
        </Link>

        {/* BANNER NỔI BẬT: ĐỀ KIỂM TRA THƯỜNG XUYÊN 2 (BÀI 1, 2, 7, 8, 9) */}
        <div className="mt-8">
          <Link
            href="/kiem-tra/thuong-xuyen-2"
            className="group relative block overflow-hidden rounded-3xl border-2 border-grape/30 bg-gradient-to-r from-grape/10 via-purple-50/80 to-bubble/10 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-grape hover:shadow-card-hover"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-grape to-bubble text-3xl text-white shadow-md">
                  📝
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-grape/15 px-3 py-0.5 font-mono text-[11px] font-bold text-grape-deep">
                      ĐỀ THI MỚI · ĐÁNH GIÁ THƯỜNG XUYÊN 2
                    </span>
                    <span className="rounded-full bg-mint/15 px-2.5 py-0.5 font-mono text-[11px] font-bold text-mint-deep">
                      📊 LƯU GOOGLE SHEET
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink group-hover:text-grape-deep sm:text-xl">
                    Đề Kiểm Tra Thường Xuyên 2 (Bài 1, 2, 7, 8, 9)
                  </h3>
                  <p className="mt-1 text-xs text-ink-soft leading-relaxed sm:text-sm">
                    15 câu theo mức độ nhận biết, thông hiểu, vận dụng · 16 phút · Bấm giờ tự động, chấm điểm và lưu kết quả vào Google Sheet của thầy cô.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2 rounded-2xl bg-gradient-to-r from-grape to-bubble px-5 py-3 font-display text-sm font-bold text-white shadow-md transition group-hover:scale-105">
                <span>Vào làm bài ngay</span>
                <span className="font-mono text-base">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* 2 BANNER TÍNH NĂNG ĐỘT PHÁ SO VỚI TIN 12 */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* BANNER 1: PHÒNG KIỂM TRA ĐỊNH KỲ */}
          <Link
            href="/kiem-tra"
            className="group flex flex-col justify-between rounded-2xl border-2 border-coral/30 bg-gradient-to-br from-coral/10 via-white to-amber-500/10 p-5 shadow-card transition hover:-translate-y-0.5 hover:border-coral hover:shadow-card-hover"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-coral/15 text-2xl">
                  🎯
                </span>
                <span className="rounded-full bg-coral/15 px-2.5 py-0.5 font-mono text-[11px] font-bold text-coral">
                  CHẾ ĐỘ THI THẬT
                </span>
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-ink group-hover:text-coral sm:text-lg">
                Phòng Kiểm Tra Định Kỳ 10
              </h3>
              <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                Đánh giá 15 phút, 45 phút Giữa kì & Học kì. Bấm giờ thật, trộn đề 34 bài, chấm điểm tự động chuẩn GDPT 2018.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between pt-2 border-t border-ink/5">
              <span className="font-mono text-xs font-semibold text-coral">Vào phòng kiểm tra</span>
              <span className="font-mono text-xs font-bold text-coral">→</span>
            </div>
          </Link>

          {/* BANNER 2: ĐẤU TRƯỜNG TRỰC TUYẾN MÃ PIN */}
          <Link
            href="/dau-truong"
            className="group flex flex-col justify-between rounded-2xl border-2 border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 text-white shadow-xl transition hover:-translate-y-0.5 hover:border-cyan-400 hover:shadow-cyan-500/20"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20 text-2xl border border-cyan-400/30">
                  🌐
                </span>
                <span className="rounded-full bg-cyan-400/20 border border-cyan-400/40 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-300">
                  MÃ PIN PHÒNG
                </span>
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-white group-hover:text-cyan-300 sm:text-lg">
                Đấu Trường Nhiều Máy Tính
              </h3>
              <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                Thầy cô làm Host trên máy chiếu · Các máy học sinh nhập mã PIN đấu Summit Battle thời gian thực.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between pt-2 border-t border-white/10">
              <span className="font-mono text-xs font-semibold text-cyan-300">Vào phòng đấu</span>
              <span className="font-mono text-xs font-bold text-cyan-300">→</span>
            </div>
          </Link>
        </div>

        <div className="mt-8 space-y-8">
          {CURRICULUM.map((topic) => {
            const hasAvailable = topic.lessons.some((l) => l.available);
            return (
              <section key={topic.id}>
                <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                  <span>{topic.emoji}</span> {topic.name}
                </h2>
                <ul className="mt-3 space-y-2">
                  {topic.lessons.map((lesson) => {
                    const p = progress[lesson.id];
                    if (!lesson.available) {
                      return (
                        <li
                          key={lesson.id}
                          className="flex items-center justify-between rounded-xl border border-dashed border-ink/10 bg-white/40 px-4 py-3 text-sm text-ink-soft/50"
                        >
                          <span>{lesson.title}</span>
                          <span className="shrink-0 font-mono text-xs">sắp có</span>
                        </li>
                      );
                    }
                    const c = counts[lesson.id];
                    const meta = [
                      c ? `${c.mcq} trắc nghiệm` : "",
                      c && c.tf > 0 ? `${c.tf} đúng/sai` : "",
                      c && c.essay > 0 ? `${c.essay} tự luận` : "",
                      c && c.theory ? "📖 có lý thuyết" : "",
                      c && c.hasSlide ? "📽️ có slide" : "",
                      c && c.hasSgk ? "📘 có SGK" : "",
                      c?.gameBadge || (c?.games && c.games > 0 ? `🎮 ${c.games} trò chơi` : ""),
                      p ? `đã làm ${p.attempts} lần` : "",
                    ]
                      .filter(Boolean)
                      .join(" · ");
                    return (
                      <li key={lesson.id}>
                        <Link
                          href={`/luyen/${lesson.id}`}
                          className="group flex items-center justify-between gap-3 rounded-xl border border-ink/5 bg-white px-4 py-3 shadow-card transition hover:-translate-y-0.5 hover:border-grape/30 hover:shadow-card-hover"
                        >
                          <div className="min-w-0">
                            <p className="text-sm font-medium leading-snug text-ink group-hover:text-grape-deep">
                              {lesson.title}
                            </p>
                            <p className="mt-0.5 font-mono text-xs leading-relaxed text-ink-soft/70">
                              {meta}
                            </p>
                          </div>
                          <div className="flex shrink-0 items-center gap-2">
                            {loaded && p && <ScoreBadge best={p.best} />}
                            <span className="text-ink-soft/40 transition group-hover:translate-x-0.5 group-hover:text-grape">
                              →
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {!hasAvailable && null}
              </section>
            );
          })}
        </div>

        <footer className="mt-12 space-y-1 text-center font-mono text-xs text-ink-soft/50">
          <p>Tổ Tin học — Trường THPT Na Rì, tỉnh Thái Nguyên</p>
          <p>SGK Kết nối tri thức với cuộc sống · Tiến độ lưu trên trình duyệt của bạn</p>
        </footer>
      </div>
    </main>
  );
}
