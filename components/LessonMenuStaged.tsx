"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Key = "theory" | "slides" | "sgk" | "mcq" | "tf" | "essay" | "games" | "review";

export type StagedOption = { key: Key; emoji: string; name: string; best: number | null };

type Stage = {
  id: "learn" | "practice" | "play" | "review";
  step: number;
  emoji: string;
  title: string;
  subtitle: string;
  keys: Key[];
};

const STAGES: Stage[] = [
  { id: "learn", step: 1, emoji: "📖", title: "Học", subtitle: "Đọc hiểu kiến thức bài", keys: ["theory", "slides", "sgk"] },
  { id: "practice", step: 2, emoji: "🎯", title: "Luyện", subtitle: "Làm câu hỏi, chấm ngay", keys: ["mcq", "tf", "essay"] },
  { id: "play", step: 3, emoji: "🎮", title: "Chơi", subtitle: "Trò chơi củng cố kiến thức", keys: ["games"] },
  { id: "review", step: 4, emoji: "📋", title: "Ôn lại", subtitle: "Tổng kết trước khi kiểm tra", keys: ["review"] },
];

function scoreChip(best: number | null) {
  if (best === null) return null;
  const cls = best >= 80 ? "bg-mint/15 text-mint" : best >= 50 ? "bg-sun/15 text-sun" : "bg-tomato/10 text-tomato";
  return (
    <span className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[11px] font-medium ${cls}`}>
      {best >= 80 ? "⭐ " : ""}
      {best}%
    </span>
  );
}

export default function LessonMenuStaged({
  lessonTitle,
  topicName,
  options,
  short,
  theoryRead,
  onSelect,
}: {
  lessonTitle: string;
  topicName: string;
  options: StagedOption[];
  short: Partial<Record<Key, string>>; // mô tả một dòng cho từng mục
  theoryRead: boolean;
  onSelect: (key: Key) => void;
}) {
  const byKey = useMemo(() => new Map(options.map((o) => [o.key, o])), [options]);
  const has = (k: Key) => byKey.has(k);
  const best = (k: Key) => byKey.get(k)?.best ?? null;

  // Gợi ý bước tiếp theo theo tiến độ của học sinh
  const next: { key: Key; label: string; hint: string } = useMemo(() => {
    if (has("theory") && !theoryRead) return { key: "theory", label: "Bắt đầu: đọc lý thuyết", hint: short.theory ?? "" };
    if (has("mcq") && best("mcq") === null) return { key: "mcq", label: "Tiếp theo: làm trắc nghiệm", hint: short.mcq ?? "" };
    if (has("mcq") && (best("mcq") ?? 0) < 80)
      return { key: "mcq", label: "Luyện lại trắc nghiệm", hint: `Kỉ lục ${best("mcq")}% — đạt 80% để nhận ⭐` };
    if (has("tf") && best("tf") === null) return { key: "tf", label: "Tiếp theo: làm Đúng / Sai", hint: short.tf ?? "" };
    if (has("games")) return { key: "games", label: "Chơi game củng cố", hint: short.games ?? "" };
    return { key: has("mcq") ? "mcq" : options[0].key, label: "Ôn lại bài", hint: "" };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, theoryRead, short]);

  const stages = STAGES.map((s) => ({ ...s, items: s.keys.filter(has).map((k) => byKey.get(k)!) })).filter(
    (s) => s.items.length > 0,
  );
  const nextStage = stages.find((s) => s.items.some((i) => i.key === next.key))?.id;
  const [open, setOpen] = useState<string | null>(nextStage ?? null);
  const nextOption = byKey.get(next.key);

  function stageStatus(id: Stage["id"]): string | null {
    if (id === "learn") return theoryRead ? "✓ Đã đọc" : null;
    if (id === "practice") {
      const m = best("mcq");
      return m !== null ? `Trắc nghiệm ${m}%` : null;
    }
    if (id === "play") {
      const g = best("games");
      return g !== null ? `Cao nhất ${g}%` : null;
    }
    return null;
  }

  return (
    <main className="playground min-h-screen pb-16">
      <div className="mx-auto max-w-2xl px-3 pt-6 sm:px-8 sm:pt-10">
        <Link
          href="/"
          className="rounded-full border border-ink/10 bg-white px-3 py-1.5 font-mono text-xs text-ink-soft transition hover:border-grape/40 hover:text-grape-deep"
        >
          ← Trang chủ
        </Link>
        <h1 className="mt-4 font-display text-xl font-bold leading-snug text-ink sm:mt-5 sm:text-2xl">{lessonTitle}</h1>
        <p className="mt-1 font-mono text-xs text-ink-soft/60">{topicName}</p>

        {/* Bước tiếp theo */}
        {nextOption && (
          <button
            onClick={() => onSelect(next.key)}
            className="group mt-5 flex w-full items-center gap-3 rounded-2xl bg-gradient-to-r from-grape to-bubble p-4 text-left text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover active:scale-[0.99] sm:gap-4 sm:p-5"
          >
            <span className="text-3xl sm:text-4xl">{nextOption.emoji}</span>
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[11px] font-bold uppercase tracking-wider text-white/80">
                Bước tiếp theo
              </span>
              <span className="mt-0.5 block font-display text-base font-bold leading-snug sm:text-lg">{next.label}</span>
              {next.hint && <span className="mt-0.5 block text-xs text-white/85 sm:text-sm">{next.hint}</span>}
            </span>
            <span className="shrink-0 text-xl transition group-hover:translate-x-1">→</span>
          </button>
        )}

        {/* Các chặng */}
        <div className="mt-5 space-y-2.5">
          {stages.map((s) => {
            const isOpen = open === s.id;
            const status = stageStatus(s.id);
            return (
              <section key={s.id} className="overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-card">
                <button
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-3 p-3.5 text-left sm:p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-grape/10 font-display text-sm font-bold text-grape-deep">
                    {s.step}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-base font-semibold text-ink">
                      {s.emoji} {s.title}
                    </span>
                    <span className="block truncate text-xs text-ink-soft">{s.subtitle}</span>
                  </span>
                  {status && (
                    <span className="shrink-0 rounded-full bg-mint/15 px-2 py-0.5 font-mono text-[11px] font-medium text-mint">
                      {status}
                    </span>
                  )}
                  <span className={`shrink-0 text-ink-soft/50 transition ${isOpen ? "rotate-90" : ""}`}>›</span>
                </button>
                {isOpen && (
                  <ul className="space-y-1.5 border-t border-ink/5 bg-cream/60 p-2 sm:p-3">
                    {s.items.map((o) => (
                      <li key={o.key}>
                        <button
                          onClick={() => onSelect(o.key)}
                          className="flex w-full items-center gap-3 rounded-xl bg-white p-3 text-left transition hover:bg-grape/5 active:scale-[0.99]"
                        >
                          <span className="text-2xl">{o.emoji}</span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold text-ink">{o.name}</span>
                            {short[o.key] && <span className="block text-xs text-ink-soft">{short[o.key]}</span>}
                          </span>
                          {scoreChip(o.best)}
                          <span className="shrink-0 text-ink-soft/40">→</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
