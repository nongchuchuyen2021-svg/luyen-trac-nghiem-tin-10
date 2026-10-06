"use client";

import { useEffect, useState } from "react";
import type { CourtCase, CourtGame, CourtOption } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";
import { sound } from "@/lib/sound";

export default function CourtGameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: CourtGame;
  onBack?: () => void;
}) {
  const cases = game.cases;
  const total = cases.length;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<CourtOption | null>(null);
  const [isJudged, setIsJudged] = useState(false);
  const [gavelStriking, setGavelStriking] = useState(false);

  // Thống kê điểm số & công lý
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(null);

  const currentCase: CourtCase = cases[currentIdx];

  // Khởi tạo điểm cao
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

  // Hành động gõ búa tuyên án
  const handleSelectVerdict = (option: CourtOption) => {
    if (isJudged) return;

    setSelectedOption(option);
    setIsJudged(true);
    setGavelStriking(true);

    // Kích hoạt tiếng búa gõ thẩm phán
    sound.gavel();

    setTimeout(() => {
      setGavelStriking(false);
      if (option.isCorrect) {
        const nextStreak = streak + 1;
        setStreak(nextStreak);
        setCorrectCount((prev) => prev + 1);
        if (nextStreak > 1) {
          sound.combo(nextStreak);
        } else {
          sound.laser();
        }
      } else {
        setStreak(0);
        sound.damage();
      }
    }, 350);
  };

  // Qua vụ án tiếp theo
  const handleNextCase = () => {
    sound.click();
    if (currentIdx + 1 < total) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsJudged(false);
    } else {
      sound.victory();
      setIsFinished(true);
      const finalPercent = Math.round(((correctCount + (selectedOption?.isCorrect ? 0 : 0)) / total) * 100);
      saveAttempt(`${lessonId}:game:${game.id}`, finalPercent);
    }
  };

  // Xét xử lại từ đầu
  const handleRestart = () => {
    sound.click();
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsJudged(false);
    setCorrectCount(0);
    setStreak(0);
    setIsFinished(false);
  };

  // Màn hình Tổng kết phiên toà
  if (isFinished) {
    const finalPercent = Math.round((correctCount / total) * 100);
    const isHighRank = finalPercent >= 80;

    return (
      <main className="playground min-h-screen px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-b from-slate-900 via-slate-950 to-stone-900 p-8 text-white shadow-2xl sm:p-10">
            <span className="inline-block text-6xl animate-bounce">
              {finalPercent === 100 ? "👑" : isHighRank ? "⚖️" : "📜"}
            </span>

            <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl text-amber-200">
              {finalPercent === 100
                ? "Đại Thẩm phán Công lý Tối cao!"
                : isHighRank
                  ? "Thẩm phán Số Xuất sắc!"
                  : "Hoàn tất Phiên toà Xét xử!"}
            </h1>

            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {isHighRank
                ? "Em đã nắm vững chuẩn mực đạo đức, ranh giới pháp luật mạng và phân định sắc bén Quyền tác giả!"
                : "Em đã hoàn thành thụ lý các vụ án. Hãy ôn luyện lại để nâng cao chỉ số Công lý đạt mức tối đa nhé!"}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-amber-500/20 bg-slate-900/80 p-4 text-center">
              <div>
                <p className="font-mono text-xs text-slate-400">Vụ án chuẩn</p>
                <p className="mt-1 font-display text-xl font-bold text-emerald-400">
                  {correctCount}/{total}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-slate-400">Độ chính xác</p>
                <p className="mt-1 font-display text-xl font-bold text-amber-400">
                  {finalPercent}%
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-slate-400">Danh hiệu</p>
                <p className="mt-1 font-display text-sm font-bold text-purple-300">
                  {isHighRank ? "Chính trực ⭐" : "Thực tập sinh"}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleRestart}
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2.5 font-display text-sm font-bold text-slate-950 shadow-lg transition hover:brightness-110 active:scale-95"
              >
                🔄 Mở phiên toà mới
              </button>
              {onBack && (
                <button
                  onClick={onBack}
                  className="w-full sm:w-auto rounded-full border border-slate-700 bg-slate-800/80 px-6 py-2.5 font-display text-sm font-medium text-slate-200 transition hover:bg-slate-700"
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

  const justiceRate = Math.round(((currentIdx + (selectedOption?.isCorrect ? 1 : 0)) / total) * 100);

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

        {/* Header & Thẩm phán Status */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-500/20 bg-slate-900 p-4 text-white shadow-card">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-2xl shadow-inner">
              {game.emoji}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-lg font-bold text-amber-200 sm:text-xl">
                  {game.title}
                </h1>
              </div>
              <p className="mt-0.5 text-xs text-slate-300">
                Thụ lý Vụ án {currentIdx + 1}/{total} · {currentCase.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {streak > 1 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2.5 py-1 font-mono text-xs font-bold text-amber-300 animate-pulse">
                🔥 x{streak} Phán quyết chuẩn
              </span>
            )}
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-bold text-amber-200">
              ⚖️ Thước đo: {justiceRate}%
            </span>
          </div>
        </div>

        {/* Thanh tiến trình */}
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-ink/5">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300"
            style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
          />
        </div>

        {/* HỒ SƠ VỤ ÁN (CASE DOSSIER) */}
        <div className="mt-5 rounded-3xl border border-amber-500/30 bg-white p-5 shadow-lg sm:p-6">
          {/* Top Dossier Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-3.5">
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-amber-100 px-2.5 py-1 font-mono text-xs font-bold text-amber-900">
                HỒ SƠ {currentCase.caseNumber}
              </span>
              <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-xs font-medium text-slate-700">
                {currentCase.category}
              </span>
            </div>
            <span className="font-mono text-xs text-ink-soft">
              Bị đơn: <strong className="text-ink">{currentCase.defendant}</strong>
            </span>
          </div>

          {/* Tiêu đề vụ án */}
          <h2 className="mt-3.5 font-display text-lg font-bold text-ink sm:text-xl">
            {currentCase.title}
          </h2>

          {/* Diễn biến vụ việc */}
          <div className="mt-3 rounded-2xl bg-sand-light p-4 text-sm leading-relaxed text-ink">
            <p className="font-semibold text-grape-deep">📜 Diễn biến tình huống:</p>
            <p className="mt-1">{currentCase.situation}</p>
          </div>

          {/* Bằng chứng thu thập & Hành vi bị tố giác */}
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-3 text-rose-950">
              <p className="font-bold text-rose-800">⚠️ Hành vi bị tố giác:</p>
              <p className="mt-0.5 leading-relaxed">{currentCase.charge}</p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3 text-blue-950">
              <p className="font-bold text-blue-800">🔍 Chứng cứ số thu thập:</p>
              <p className="mt-0.5 leading-relaxed">{currentCase.evidence}</p>
            </div>
          </div>
        </div>

        {/* KHU VỰC TUYÊN ÁN (VERDICT SECTION) */}
        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between px-1">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-soft flex items-center gap-1.5">
              <span>🔨</span>
              <span>Lựa chọn Phán quyết của Thẩm phán:</span>
            </h3>
            {gavelStriking && (
              <span className="font-mono text-xs font-bold text-amber-600 animate-bounce">
                🔨 ĐANG GÕ BÚA TUYÊN ÁN...
              </span>
            )}
          </div>

          <div className="space-y-3">
            {currentCase.options.map((opt, idx) => {
              const isSelected = selectedOption?.id === opt.id;
              const showResult = isJudged;

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectVerdict(opt)}
                  disabled={isJudged}
                  className={`group relative flex w-full flex-col rounded-2xl border-2 p-4 text-left transition-all duration-200 ${
                    showResult
                      ? opt.isCorrect
                        ? "border-emerald-500 bg-emerald-50/90 shadow-md ring-2 ring-emerald-400/20"
                        : isSelected
                          ? "border-rose-500 bg-rose-50/90 shadow-md"
                          : "border-ink/10 bg-white opacity-50 cursor-not-allowed"
                      : "border-ink/10 bg-white hover:-translate-y-0.5 hover:border-amber-500 hover:shadow-card-hover"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold transition ${
                        showResult
                          ? opt.isCorrect
                            ? "bg-emerald-600 text-white"
                            : isSelected
                              ? "bg-rose-600 text-white"
                              : "bg-slate-200 text-slate-600"
                          : "bg-amber-100 text-amber-900 group-hover:bg-amber-500 group-hover:text-white"
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-sm font-semibold leading-snug sm:text-base ${
                          showResult
                            ? opt.isCorrect
                              ? "text-emerald-950"
                              : isSelected
                                ? "text-rose-950"
                                : "text-ink"
                            : "text-ink group-hover:text-amber-900"
                        }`}
                      >
                        {opt.verdict}
                      </p>

                      {opt.subVerdict && (
                        <p className="mt-1 text-xs text-ink-soft leading-relaxed">
                          ↳ {opt.subVerdict}
                        </p>
                      )}
                    </div>

                    {showResult && (
                      <span className="shrink-0 text-xl">
                        {opt.isCorrect ? "✅" : isSelected ? "❌" : ""}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* KẾT QUẢ PHÁN QUYẾT & PHÂN TÍCH ĐIỀU LUẬT */}
        {isJudged && selectedOption && (
          <div className="mt-6 space-y-4 animate-[fadeIn_0.3s_ease-out]">
            {/* Banner kết quả */}
            <div
              className={`flex items-center gap-3 rounded-2xl border p-4 ${
                selectedOption.isCorrect
                  ? "border-emerald-500/30 bg-emerald-50 text-emerald-900"
                  : "border-rose-500/30 bg-rose-50 text-rose-900"
              }`}
            >
              <span className="text-3xl">
                {selectedOption.isCorrect ? "⚖️" : "⚠️"}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-base font-bold">
                  {selectedOption.isCorrect
                    ? "Tuyên án chuẩn xác — Hợp hiến & Thượng tôn pháp luật!"
                    : "Phán quyết chưa chuẩn xác với quy định pháp luật!"}
                </p>
                <p className="mt-0.5 text-xs">
                  {selectedOption.isCorrect
                    ? "Thẩm phán đã bảo vệ đúng tinh thần công lý và bản quyền số."
                    : "Cần phân biệt rõ bản chất quyền nhân thân, quyền tài sản và chuẩn mực an ninh mạng."}
                </p>
              </div>
            </div>

            {/* Chi tiết căn cứ pháp lý */}
            <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-card">
              <h4 className="font-display text-sm font-bold text-grape-deep flex items-center gap-2">
                <span>📖</span>
                <span>Căn cứ pháp lý & Kiến thức SGK Tin 10:</span>
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-ink sm:text-sm">
                {selectedOption.explain}
              </p>

              <div className="mt-3.5 rounded-xl bg-amber-50 p-3 text-xs text-amber-900 border border-amber-200">
                <span className="font-bold">⚖️ Điều luật áp dụng: </span>
                <span>{currentCase.statute}</span>
              </div>

              {/* Nút tiếp tục */}
              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextCase}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2.5 font-display text-sm font-bold text-slate-950 shadow-md transition hover:brightness-110 active:scale-95"
                >
                  <span>{currentIdx + 1 < total ? "Thụ lý vụ án tiếp theo" : "Xem tổng kết phiên toà"}</span>
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
