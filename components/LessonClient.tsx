"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { EssayQuestion, LessonGame, LessonReview, LessonTheory, Question, TFQuestion } from "@/lib/types";
import { getLessonProgress } from "@/lib/progress";
import QuizClient from "@/components/QuizClient";
import TrueFalseQuiz from "@/components/TrueFalseQuiz";
import EssayViewer from "@/components/EssayViewer";
import TheoryViewer from "@/components/TheoryViewer";
import GameHub from "@/components/GameHub";
import ReviewViewer from "@/components/ReviewViewer";
import LessonMenuStaged from "@/components/LessonMenuStaged";

type Mode = "menu" | "mcq" | "tf" | "essay" | "theory" | "sgk" | "games" | "review" | "slides";

export default function LessonClient({
  lessonId,
  lessonTitle,
  topicName,
  mcq,
  tf,
  essay,
  theory,
  sgkUrl,
  games,
  review,
  slideUrl,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  mcq: Question[];
  tf: TFQuestion[];
  essay: EssayQuestion[];
  theory: LessonTheory | null;
  sgkUrl?: string | null;
  games?: LessonGame[];
  review?: LessonReview | null;
  slideUrl?: string | null;
}) {
  const [mode, setMode] = useState<Mode>("menu");
  const [bestMcq, setBestMcq] = useState<number | null>(null);
  const [bestTf, setBestTf] = useState<number | null>(null);
  const [bestGame, setBestGame] = useState<number | null>(null);
  const [theoryRead, setTheoryRead] = useState(false);

  useEffect(() => {
    if (mode === "menu") {
      try {
        setTheoryRead(!!localStorage.getItem(`ltn10:theory:${lessonId}`));
      } catch {
        setTheoryRead(false);
      }
      setBestMcq(getLessonProgress(lessonId)?.best ?? null);
      setBestTf(getLessonProgress(`${lessonId}:ds`)?.best ?? null);
      if (games && games.length > 0) {
        let maxGame: number | null = null;
        for (const g of games) {
          const score =
            getLessonProgress(`${lessonId}:game:${g.id}`)?.best ??
            getLessonProgress(`${lessonId}:arena:${g.id}`)?.best ??
            null;
          if (score !== null && (maxGame === null || score > maxGame)) {
            maxGame = score;
          }
        }
        setBestGame(maxGame);
      }
    }
  }, [mode, lessonId, games]);

  if (mode === "sgk" && sgkUrl) {
    return (
      <div className="fixed inset-0 z-50 bg-[#05070b]">
        <div className="fixed left-3 top-3 z-10 flex gap-2">
          <button
            onClick={() => setMode("menu")}
            className="rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 font-mono text-xs text-white backdrop-blur transition hover:border-white/40 hover:bg-black/90"
          >
            ← Quay lại bài học
          </button>
          <a
            href={sgkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-500/40 bg-cyan-600/80 px-3.5 py-1.5 font-mono text-xs text-white backdrop-blur transition hover:bg-cyan-500"
          >
            ↗ Mở toàn màn hình tab mới
          </a>
        </div>
        <iframe
          src={sgkUrl}
          title={`SGK · ${lessonTitle}`}
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  if (mode === "slides" && slideUrl) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0B131A]">
        <div className="fixed left-3 top-3 z-10 flex gap-2">
          <button
            onClick={() => setMode("menu")}
            className="rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 font-mono text-xs text-white backdrop-blur transition hover:border-white/40 hover:bg-black/90"
          >
            ← Quay lại bài học
          </button>
          <a
            href={slideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-teal-500/40 bg-teal-600/80 px-3.5 py-1.5 font-mono text-xs text-white backdrop-blur transition hover:bg-teal-500"
          >
            ↗ Mở toàn màn hình tab mới
          </a>
        </div>
        <iframe
          src={slideUrl}
          title={`Trình chiếu · ${lessonTitle}`}
          className="h-full w-full border-0"
        />
      </div>
    );
  }

  if (mode === "theory" && theory) {
    return (
      <main className="playground min-h-screen pb-16">
        <TheoryViewer
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          topicName={topicName}
          theory={theory}
          onBack={() => setMode("menu")}
          onGoQuiz={() => setMode("mcq")}
        />
      </main>
    );
  }

  if (mode === "mcq") {
    return (
      <QuizClient
        lessonId={lessonId}
        lessonTitle={lessonTitle}
        topicName={topicName}
        questions={mcq}
        onBack={() => setMode("menu")}
      />
    );
  }

  if (mode === "tf") {
    return (
      <main className="playground min-h-screen pb-16">
        <TrueFalseQuiz
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          questions={tf}
          onBack={() => setMode("menu")}
        />
      </main>
    );
  }

  if (mode === "games" && games && games.length > 0) {
    return <GameHub lessonId={lessonId} games={games} onBack={() => setMode("menu")} />;
  }

  if (mode === "review" && review) {
    return <ReviewViewer lessonTitle={lessonTitle} review={review} onBack={() => setMode("menu")} />;
  }

  if (mode === "essay") {
    return (
      <main className="playground min-h-screen pb-16">
        <EssayViewer
          lessonTitle={lessonTitle}
          questions={essay}
          onBack={() => setMode("menu")}
        />
      </main>
    );
  }

  const options = [
    ...(theory
      ? [
          {
            key: "theory" as Mode,
            emoji: "📖",
            name: "Lý thuyết",
            desc: `~${theory.minutes} phút đọc · tóm tắt kiến thức bài học kèm hình minh hoạ`,
            best: null,
            enabled: true,
          },
        ]
      : []),
    ...(slideUrl
      ? [
          {
            key: "slides" as Mode,
            emoji: "📽️",
            name: "Slide Trình chiếu",
            desc:
              lessonId === "bai-09"
                ? "15 slide tương tác · mô phỏng an ninh mạng, diệt virus & đố vui"
                : lessonId === "bai-10"
                  ? "15 slide tương tác · toán tử Google, Google Translate AI & kho số igiaoduc.vn"
                  : lessonId === "bai-11"
                    ? "15 slide tương tác · văn hoá số, toà án an ninh mạng & quyền tác giả"
                    : lessonId === "bai-12"
                      ? "15 slide tương tác · so sánh Bitmap/Vector, studio Inkscape ảo & phân loại GIMP"
                      : "Slide bài giảng điện tử tương tác · sơ đồ động & đố vui củng cố",
            best: null,
            enabled: true,
          },
        ]
      : []),
    ...(games && games.length > 0
      ? (() => {
          const hasNet = games.some((g) => g.kind === "network");
          const hasAr = games.some((g) => g.kind === "arena");
          const hasSrch = games.some((g) => g.kind === "search");
          const hasCrt = games.some((g) => g.kind === "court");
          const hasTl = games.some((g) => g.kind === "timeline");
          const hasS3 = games.some((g) => g.kind === "sort3");
          const hasS = games.some((g) => g.kind === "sort");
          const hasDes = games.some((g) => g.kind === "zoom" || g.kind === "studio" || g.kind === "brief");

          const emoji = hasDes ? "🎨" : hasNet ? "🌐" : hasAr ? "⚔️" : hasSrch ? "🔍" : hasCrt ? "⚖️" : hasTl ? "⏳" : hasS3 ? "🧩" : "🎮";
          const name = hasDes
            ? "Studio Đồ hoạ"
            : hasNet
            ? "Kỹ sư Mạng & Đám mây"
            : hasAr
              ? "Đấu trường An ninh mạng"
              : hasSrch
                ? "Thợ săn Tìm kiếm Google"
                : hasCrt
                  ? "Tòa án Công lý Số"
                  : hasTl && hasS
                    ? "Đấu trường Game (Phân loại & Lịch sử)"
                    : hasTl
                      ? "Dòng thời gian Lịch sử"
                      : hasS3
                        ? "Phân loại Đa chiều 3 nhóm"
                        : games.length === 1
                          ? games[0].title
                          : "Đấu trường Mini Game";

          const desc = hasDes
          ? `${games.length} trò chơi · Soi pixel, vẽ như Inkscape, nhận đơn khách hàng & phân loại phần mềm`
          : hasNet
            ? `${games.length} trò chơi · Mô phỏng sơ đồ mạng, điều phối gói tin Switch/Router & Đám mây`
            : hasAr
              ? `${games.length} trò chơi · Đấu trường diệt Boss hacker & phòng thủ Tường lửa 100 HP`
              : hasSrch
                ? `${games.length} trò chơi · Lắp ráp toán tử Google & phân loại tài nguyên số`
                : hasCrt
                  ? `${games.length} trò chơi · Thẩm phán xét xử 8 vụ án số & phân loại quyền tác giả`
                  : hasTl && hasS
                    ? `${games.length} trò chơi · Quẹt thẻ Arcade và Trục dòng thời gian lịch sử`
                    : hasTl
                      ? `${games.length} trò chơi · Sắp xếp các mốc phát triển theo đúng trục thời gian`
                      : hasS3
                        ? `${games.length} trò chơi · Thử thách phân biệt 3 mô hình dịch vụ`
                        : `${games.length} trò chơi · Quẹt thẻ bài Arcade phân biệt đúng sai SGK`;

          return [
            {
              key: "games" as Mode,
              emoji,
              name,
              desc,
              best: bestGame,
              enabled: true,
            },
          ];
        })()
      : []),
    ...(sgkUrl
      ? [
          {
            key: "sgk" as Mode,
            emoji: "📘",
            name: "SGK Điện tử",
            desc:
              lessonId === "bai-09"
                ? "SGK điện tử tương tác · mục lục dính, giả lập Windows Defender & ghi nhớ cốt lõi"
                : ["bai-10", "bai-11", "bai-12", "bai-13"].includes(lessonId)
                  ? "Biên soạn theo SGK · minh hoạ, thực hành và tự kiểm tra"
                  : "Sách điện tử — đọc nguyên văn SGK với mục lục và điều chỉnh cỡ chữ",
            best: null,
            enabled: true,
          },
        ]
      : []),
    {
      key: "mcq" as Mode,
      emoji: "🎯",
      name: "Trắc nghiệm",
      desc: `${mcq.length} câu · chọn 1 trong 4 phương án, chấm ngay từng câu`,
      best: bestMcq,
      enabled: mcq.length > 0,
    },
    {
      key: "tf" as Mode,
      emoji: "⚖️",
      name: "Đúng / Sai",
      desc: `${tf.length} câu tình huống · mỗi câu 4 ý, chấm điểm như thi tốt nghiệp`,
      best: bestTf,
      enabled: tf.length > 0,
    },
    {
      key: "essay" as Mode,
      emoji: "✍️",
      name: "Tự luận",
      desc: `${essay.length} câu · tự trả lời rồi đối chiếu gợi ý đáp án`,
      best: null,
      enabled: essay.length > 0,
    },
    ...(review
      ? [
          {
            key: "review" as Mode,
            emoji: "📋",
            name: "Ôn tập tổng kết",
            desc: "Thẻ ghi nhớ, lỗi hay gặp, mẹo nhớ nhanh trước khi kiểm tra",
            best: null,
            enabled: true,
          },
        ]
      : []),
  ];

  // Bài đã thiết kế lại menu theo 4 chặng Học → Luyện → Chơi → Ôn lại
  if (lessonId === "bai-12") {
    return (
      <LessonMenuStaged
        lessonTitle={lessonTitle}
        topicName={topicName}
        theoryRead={theoryRead}
        onSelect={(key) => setMode(key)}
        options={options
          .filter((o) => o.enabled && o.key !== "menu")
          .map((o) => ({ key: o.key as Exclude<Mode, "menu">, emoji: o.emoji, name: o.name, best: o.best }))}
        short={{
          theory: theory ? `~${theory.minutes} phút đọc, có hình minh hoạ` : undefined,
          slides: "15 slide tương tác",
          sgk: "Sách điện tử, thực hành và tự kiểm tra",
          mcq: `${mcq.length} câu · chấm ngay từng câu`,
          tf: `${tf.length} câu tình huống · 4 ý mỗi câu`,
          essay: `${essay.length} câu · tự viết rồi đối chiếu`,
          games: `${games?.length ?? 0} trò chơi tương tác`,
          review: "Thẻ ghi nhớ và mẹo nhớ nhanh",
        }}
      />
    );
  }

  return (
    <main className="playground min-h-screen pb-16">
      <div className="mx-auto max-w-2xl px-5 pt-10 sm:px-8">
        <Link
          href="/"
          className="rounded-full border border-ink/10 bg-white px-3 py-1.5 font-mono text-xs text-ink-soft transition hover:border-grape/40 hover:text-grape-deep"
        >
          ← Trang chủ
        </Link>
        <h1 className="mt-5 font-display text-2xl font-bold leading-snug text-ink">
          {lessonTitle}
        </h1>
        <p className="mt-1 font-mono text-xs text-ink-soft/60">{topicName}</p>

        <div className="mt-6 space-y-3">
          {options
            .filter((o) => o.enabled)
            .map((o) => (
              <button
                key={o.key}
                onClick={() => setMode(o.key)}
                className="group flex w-full items-center gap-4 rounded-2xl border border-ink/5 bg-white p-5 text-left shadow-card transition hover:-translate-y-0.5 hover:border-grape/30 hover:shadow-card-hover"
              >
                <span className="text-3xl">{o.emoji}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-base font-semibold text-ink group-hover:text-grape-deep">
                    {o.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-soft">{o.desc}</span>
                </span>
                {o.best !== null && (
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-xs font-medium ${
                      o.best >= 80
                        ? "bg-mint/15 text-mint"
                        : o.best >= 50
                          ? "bg-sun/15 text-sun"
                          : "bg-tomato/10 text-tomato"
                    }`}
                  >
                    {o.best >= 80 ? "⭐ " : ""}
                    {o.best}%
                  </span>
                )}
                <span className="shrink-0 text-ink-soft/40 transition group-hover:translate-x-0.5 group-hover:text-grape">
                  →
                </span>
              </button>
            ))}
        </div>
      </div>
    </main>
  );
}
