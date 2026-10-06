"use client";

import { useEffect, useMemo, useState } from "react";
import type { SearchChallenge, SearchGame } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";
import { sound } from "@/lib/sound";

// Xáo trộn mảng ngẫu nhiên
function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function SearchGameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: SearchGame;
  onBack?: () => void;
}) {
  const challenges = game.challenges;
  const total = challenges.length;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [errorReason, setErrorReason] = useState<string | null>(null);
  const [shake, setShake] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Thống kê điểm & chuỗi
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);

  const challenge = challenges[currentIdx];

  // Khởi tạo điểm cao từ localStorage
  useEffect(() => {
    const p = getLessonProgress(`${lessonId}:game:${game.id}`);
    if (p && p.best !== undefined) {
      setBestScore(p.best);
    }
  }, [lessonId, game.id]);

  // Đồng bộ âm thanh
  useEffect(() => {
    sound.enabled = soundEnabled;
  }, [soundEnabled]);

  // Danh sách các mảnh ghép của vòng hiện tại (được xáo trộn)
  const availableTokens = useMemo(() => {
    if (!challenge) return [];
    return shuffleArray([...challenge.correctTokens, ...challenge.distractorTokens]);
  }, [challenge]);

  // Đặt lại trạng thái khi đổi câu
  const handleResetChallenge = () => {
    setSelectedTokens([]);
    setSubmitted(false);
    setIsCorrect(false);
    setErrorReason(null);
    setShowHint(false);
  };

  // Chọn thêm 1 mảnh vào ô tìm kiếm
  const handleAddToken = (token: string) => {
    if (submitted && isCorrect) return;
    if (selectedTokens.includes(token)) return;
    sound.click();
    setSelectedTokens((prev) => [...prev, token]);
    setErrorReason(null);
  };

  // Gỡ 1 mảnh khỏi ô tìm kiếm
  const handleRemoveToken = (token: string) => {
    if (submitted && isCorrect) return;
    sound.click();
    setSelectedTokens((prev) => prev.filter((t) => t !== token));
    setErrorReason(null);
  };

  // Xoá toàn bộ ô tìm kiếm
  const handleClearAll = () => {
    if (submitted && isCorrect) return;
    sound.click();
    setSelectedTokens([]);
    setErrorReason(null);
  };

  // Kiểm tra đáp án tìm kiếm
  const handleSearchSubmit = () => {
    if (selectedTokens.length === 0) {
      setErrorReason("Hãy nhấp chọn ít nhất một mảnh ghép cú pháp để đưa vào thanh tìm kiếm!");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    // 1. Kiểm tra có mảnh distractor nào bị chọn không
    const pickedDistractors = selectedTokens.filter((t) => challenge.distractorTokens.includes(t));
    if (pickedDistractors.length > 0) {
      sound.damage();
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setErrorReason(
        `Cú pháp chứa mảnh bẫy/sai quy chuẩn: ${pickedDistractors.map((d) => `"${d}"`).join(", ")}. Hãy gỡ bỏ mảnh này!`
      );
      setStreak(0);
      return;
    }

    // 2. Kiểm tra có đủ toàn bộ correctTokens không
    const missingTokens = challenge.correctTokens.filter((t) => !selectedTokens.includes(t));
    if (missingTokens.length > 0) {
      sound.damage();
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setErrorReason(`Chưa đủ điều kiện tìm kiếm của nhiệm vụ. Còn thiếu: ${missingTokens.length} toán tử!`);
      setStreak(0);
      return;
    }

    // ĐÚNG HOÀN TOÀN!
    const newStreak = streak + 1;
    setStreak(newStreak);
    setCorrectCount((prev) => prev + 1);

    const bonus = newStreak > 1 ? newStreak * 20 : 0;
    const gained = 100 + bonus;
    setScore((prev) => prev + gained);

    if (newStreak > 1) {
      sound.combo(newStreak);
    } else {
      sound.laser();
    }

    setIsCorrect(true);
    setSubmitted(true);
    setErrorReason(null);
  };

  // Qua câu tiếp theo
  const handleNextChallenge = () => {
    sound.click();
    if (currentIdx + 1 < total) {
      setCurrentIdx((prev) => prev + 1);
      handleResetChallenge();
    } else {
      // Kết thúc game
      sound.victory();
      setIsFinished(true);
      const finalPercent = Math.round(((correctCount + 1) / total) * 100);
      saveAttempt(`${lessonId}:game:${game.id}`, finalPercent);
    }
  };

  // Chơi lại từ đầu
  const handleRestart = () => {
    sound.click();
    setCurrentIdx(0);
    setScore(0);
    setStreak(0);
    setCorrectCount(0);
    setIsFinished(false);
    handleResetChallenge();
  };

  // Màn hình kết thúc game
  if (isFinished) {
    const finalPercent = Math.round((correctCount / total) * 100);
    const isMaster = finalPercent >= 80;

    return (
      <main className="playground min-h-screen px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-card sm:p-10">
            <span className="text-6xl animate-bounce inline-block">
              {isMaster ? "🏆" : "🎉"}
            </span>
            <h1 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
              {isMaster ? "Xuất sắc! Bậc thầy tìm kiếm Google" : "Hoàn thành nhiệm vụ tìm kiếm!"}
            </h1>
            <p className="mt-2 text-sm text-ink-soft">
              {isMaster
                ? "Em đã làm chủ trọn vẹn các toán tử site:, filetype:, dấu ngoặc kép và toán tử loại trừ!"
                : "Em đã hoàn thành các bài toán tìm kiếm nâng cao, hãy tiếp tục luyện tập để đạt 100% sao nhé!"}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-sand-light p-4 text-center">
              <div>
                <p className="font-mono text-xs text-ink-soft">Chính xác</p>
                <p className="mt-1 font-display text-xl font-bold text-ink">
                  {correctCount}/{total}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-ink-soft">Tỉ lệ</p>
                <p className="mt-1 font-display text-xl font-bold text-grape-deep">
                  {finalPercent}%
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-ink-soft">Tổng điểm</p>
                <p className="mt-1 font-display text-xl font-bold text-mint">
                  {score}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleRestart}
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-grape to-bubble px-6 py-2.5 font-display text-sm font-semibold text-white shadow-card transition hover:opacity-95"
              >
                🔄 Chơi lại lượt mới
              </button>
              {onBack && (
                <button
                  onClick={onBack}
                  className="w-full sm:w-auto rounded-full border border-ink/15 bg-white px-6 py-2.5 font-display text-sm font-medium text-ink transition hover:border-grape/40"
                >
                  ← Về danh sách Game
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="playground min-h-screen px-4 pb-16 pt-6 sm:px-6">
      <div className="mx-auto max-w-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          {onBack && (
            <button
              onClick={onBack}
              className="rounded-full border border-ink/10 bg-white px-3 py-1.5 font-mono text-xs text-ink-soft transition hover:border-grape/40 hover:text-grape-deep"
            >
              ← Quay lại
            </button>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSoundEnabled((v) => !v)}
              className="rounded-full border border-ink/10 bg-white px-2.5 py-1 font-mono text-xs text-ink-soft hover:border-grape/40"
              title="Bật/Tắt âm thanh"
            >
              {soundEnabled ? "🔊 Bật" : "🔇 Tắt"}
            </button>
            {bestScore !== null && (
              <span className="rounded-full bg-sand-light px-3 py-1 font-mono text-xs font-semibold text-ink-soft">
                Kỉ lục: {bestScore}%
              </span>
            )}
          </div>
        </div>

        {/* Header & Stats */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-ink/5 bg-white p-4 shadow-card">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{game.emoji}</span>
              <h1 className="font-display text-lg font-bold text-ink sm:text-xl">{game.title}</h1>
            </div>
            <p className="mt-0.5 text-xs text-ink-soft">
              Nhiệm vụ {currentIdx + 1}/{total} · {challenge.title}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {streak > 1 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-1 font-mono text-xs font-bold text-amber-700 animate-pulse">
                🔥 x{streak} Combo
              </span>
            )}
            <span className="rounded-full bg-grape/10 px-3 py-1 font-mono text-sm font-bold text-grape-deep">
              ⭐ {score} điểm
            </span>
          </div>
        </div>

        {/* Thanh tiến trình */}
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-ink/5">
          <div
            className="h-full bg-gradient-to-r from-grape to-bubble transition-all duration-300"
            style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
          />
        </div>

        {/* Khung Tình huống & Nhiệm vụ */}
        <div className="mt-5 rounded-2xl border border-blue-500/20 bg-blue-50/50 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-base text-white shadow-sm">
              🎯
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-blue-900">
                Nhiệm vụ tìm kiếm
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-blue-950 sm:text-base">
                {challenge.scenario}
              </p>
              <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-blue-300 bg-white px-2.5 py-1 text-xs font-medium text-blue-800 shadow-xs">
                <span>📌 Mục tiêu:</span>
                <span className="font-bold">{challenge.targetSnippet}</span>
              </div>
            </div>
          </div>
        </div>

        {/* THANH TÌM KIẾM GOOGLE MÔ PHỎNG */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between px-1">
            <label className="font-display text-xs font-bold uppercase tracking-wider text-ink-soft">
              Thanh tìm kiếm Google (Google Search Box)
            </label>
            {selectedTokens.length > 0 && !submitted && (
              <button
                onClick={handleClearAll}
                className="font-mono text-xs text-tomato hover:underline"
              >
                ✕ Xoá trắng
              </button>
            )}
          </div>

          <div
            className={`relative min-h-[76px] rounded-3xl border-2 bg-white p-3.5 shadow-md transition-all duration-200 ${
              shake
                ? "border-tomato animate-[shake_0.4s_ease-in-out]"
                : isCorrect
                  ? "border-mint shadow-mint/20 ring-4 ring-mint/10"
                  : errorReason
                    ? "border-tomato/80 shadow-tomato/10"
                    : "border-ink/15 hover:border-grape/40 focus-within:border-grape"
            }`}
          >
            <div className="flex items-start gap-2.5">
              {/* Google G icon */}
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-sm">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-amber-500">o</span>
              </div>

              {/* Danh sách Token đã chọn */}
              <div className="flex min-h-[32px] flex-1 flex-wrap items-center gap-2">
                {selectedTokens.length === 0 ? (
                  <span className="py-1 text-xs italic text-ink-soft/60 sm:text-sm">
                    Nhấp vào các mảnh ghép bên dưới để lắp ráp cú pháp tìm kiếm...
                  </span>
                ) : (
                  selectedTokens.map((tok) => {
                    const isSite = tok.startsWith("site:");
                    const isFiletype = tok.startsWith("filetype:");
                    const isQuote = tok.startsWith('"');
                    const isMinus = tok.startsWith("-");

                    return (
                      <button
                        key={tok}
                        type="button"
                        onClick={() => handleRemoveToken(tok)}
                        disabled={submitted && isCorrect}
                        className={`group inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-semibold shadow-xs transition hover:scale-105 active:scale-95 ${
                          isSite
                            ? "bg-blue-100 text-blue-800 border border-blue-300"
                            : isFiletype
                              ? "bg-purple-100 text-purple-800 border border-purple-300"
                              : isQuote
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                : isMinus
                                  ? "bg-rose-100 text-rose-800 border border-rose-300"
                                  : "bg-slate-100 text-slate-800 border border-slate-300"
                        }`}
                      >
                        <span>{tok}</span>
                        {!submitted && (
                          <span className="text-[10px] text-ink-soft group-hover:text-tomato">✕</span>
                        )}
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Nút hành động tìm kiếm */}
            {!submitted && (
              <div className="mt-3 flex items-center justify-end gap-2 border-t border-ink/5 pt-2.5">
                <button
                  type="button"
                  onClick={() => setShowHint((v) => !v)}
                  className="rounded-full border border-ink/10 bg-sand-light px-3 py-1 font-mono text-xs text-ink-soft transition hover:border-grape/40 hover:text-grape-deep"
                >
                  💡 {showHint ? "Ẩn gợi ý" : "Xem gợi ý"}
                </button>

                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-grape to-bubble px-5 py-1.5 font-display text-xs font-bold text-white shadow-card transition hover:opacity-95 active:scale-95"
                >
                  <span>🔍</span>
                  <span>Tìm kiếm Google</span>
                </button>
              </div>
            )}
          </div>

          {/* Gợi ý nếu bật */}
          {showHint && !submitted && (
            <div className="mt-2.5 rounded-xl border border-amber-300 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
              <span className="font-bold">💡 Gợi ý SGK:</span> {challenge.explain}
            </div>
          )}

          {/* Cảnh báo lỗi cú pháp */}
          {errorReason && !submitted && (
            <div className="mt-2.5 flex items-center gap-2 rounded-xl border border-tomato/30 bg-tomato/10 p-3 text-xs text-tomato">
              <span>⚠️</span>
              <span>{errorReason}</span>
            </div>
          )}
        </div>

        {/* KHO MẢNH GHÉP (TOKEN PALETTE) */}
        {!submitted && (
          <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-5 shadow-card">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-sm font-bold text-ink">
                🧩 Kho mảnh ghép cú pháp
              </h3>
              <span className="font-mono text-xs text-ink-soft">
                Chạm để lắp vào thanh tìm kiếm
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {availableTokens.map((tok) => {
                const isSelected = selectedTokens.includes(tok);
                const isSite = tok.startsWith("site:");
                const isFiletype = tok.startsWith("filetype:");
                const isQuote = tok.startsWith('"');
                const isMinus = tok.startsWith("-");

                return (
                  <button
                    key={tok}
                    type="button"
                    onClick={() => handleAddToken(tok)}
                    disabled={isSelected}
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 font-mono text-xs font-semibold transition-all duration-150 ${
                      isSelected
                        ? "border-dashed border-ink/20 bg-ink/5 text-ink-soft/40 cursor-not-allowed scale-95 opacity-50"
                        : isSite
                          ? "border-blue-300 bg-blue-50/80 text-blue-900 hover:border-blue-500 hover:bg-blue-100 hover:-translate-y-0.5 shadow-xs"
                          : isFiletype
                            ? "border-purple-300 bg-purple-50/80 text-purple-900 hover:border-purple-500 hover:bg-purple-100 hover:-translate-y-0.5 shadow-xs"
                            : isQuote
                              ? "border-emerald-300 bg-emerald-50/80 text-emerald-900 hover:border-emerald-500 hover:bg-emerald-100 hover:-translate-y-0.5 shadow-xs"
                              : isMinus
                                ? "border-rose-300 bg-rose-50/80 text-rose-900 hover:border-rose-500 hover:bg-rose-100 hover:-translate-y-0.5 shadow-xs"
                                : "border-ink/15 bg-white text-ink hover:border-grape/40 hover:bg-sand-light hover:-translate-y-0.5 shadow-xs"
                    }`}
                  >
                    <span>+</span>
                    <span>{tok}</span>
                  </button>
                );
              })}
            </div>

            <p className="mt-4 border-t border-ink/5 pt-3 text-[11px] leading-relaxed text-ink-soft/70">
              * Mẹo: Cẩn thận với các mảnh bẫy sai cú pháp như <code>format:</code>, <code>type:</code>, <code>web:</code> hoặc viết thiếu dấu ngoặc kép!
            </p>
          </div>
        )}

        {/* KẾT QUẢ TÌM KIẾM MÔ PHỎNG (KHI ĐÚNG) */}
        {submitted && isCorrect && (
          <div className="mt-6 space-y-4 animate-[fadeIn_0.3s_ease-out]">
            {/* Banner chúc mừng */}
            <div className="flex items-center gap-3 rounded-2xl border border-mint/30 bg-mint/10 p-4 text-mint">
              <span className="text-2xl">✨</span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-bold">Cú pháp chính xác tuyệt đối!</p>
                <p className="text-xs text-mint/90">
                  Google đã thu hẹp hàng triệu kết quả và tìm thấy đúng tài liệu chuẩn.
                </p>
              </div>
              <span className="rounded-full bg-mint/20 px-3 py-1 font-mono text-xs font-bold text-mint">
                +100 điểm
              </span>
            </div>

            {/* Mô phỏng khung kết quả Google */}
            <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-card">
              <div className="flex items-center gap-2 text-xs font-mono text-ink-soft border-b border-ink/5 pb-2.5">
                <span>🌐 Kết quả tìm kiếm thực tế trên Google:</span>
              </div>

              <div className="mt-3.5">
                <p className="font-mono text-xs text-emerald-700 truncate">
                  {challenge.simulatedResult.breadcrumb}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  {challenge.simulatedResult.fileBadge && (
                    <span className="rounded bg-rose-600 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-white shadow-xs">
                      [{challenge.simulatedResult.fileBadge}]
                    </span>
                  )}
                  <h4 className="font-display text-base font-semibold text-blue-700 hover:underline cursor-pointer">
                    {challenge.simulatedResult.title}
                  </h4>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                  {challenge.simulatedResult.snippet}
                </p>
              </div>

              {/* Giải thích kiến thức SGK */}
              <div className="mt-4 rounded-xl bg-sand-light p-3.5 text-xs leading-relaxed text-ink">
                <span className="font-bold text-grape-deep">📖 Phân tích kiến thức SGK Tin 10: </span>
                {challenge.explain}
              </div>

              {/* Nút tiếp tục */}
              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextChallenge}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-grape to-bubble px-6 py-2.5 font-display text-sm font-bold text-white shadow-card transition hover:opacity-95 active:scale-95"
                >
                  <span>{currentIdx + 1 < total ? "Nhiệm vụ tiếp theo" : "Xem tổng kết"}</span>
                  <span>➜</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
