"use client";

import { useEffect, useState } from "react";
import type { NetworkGame, NetworkMission, NetworkTopologyNode } from "@/lib/types";
import { saveAttempt } from "@/lib/progress";
import { sound } from "@/lib/sound";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function NetworkGameClient({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: NetworkGame;
  onBack?: () => void;
}) {
  const [missions, setMissions] = useState<NetworkMission[]>(() =>
    game.missions.map((m) => ({
      ...m,
      options: shuffle(m.options),
    }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState<Record<string, { isCorrect: boolean; selectedId: string }>>({});
  const [gameOver, setGameOver] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [animatingPacket, setAnimatingPacket] = useState(false);
  const [activePacketStep, setActivePacketStep] = useState<number>(0);

  useEffect(() => {
    setMissions(
      game.missions.map((m) => ({
        ...m,
        options: shuffle(m.options),
      }))
    );
  }, [game]);

  const mission = missions[currentIndex] ?? game.missions[0];
  const totalMissions = missions.length || game.missions.length;

  // Cập nhật âm thanh
  useEffect(() => {
    sound.enabled = soundEnabled;
  }, [soundEnabled]);

  // Hiệu ứng hoạt họa truyền gói tin khi trả lời đúng
  const triggerPacketAnimation = (correctPath?: string[]) => {
    if (!correctPath || correctPath.length < 2) return;
    setAnimatingPacket(true);
    setActivePacketStep(0);

    const stepInterval = 400; // ms mỗi chặng
    correctPath.forEach((_, idx) => {
      setTimeout(() => {
        setActivePacketStep(idx);
        if (idx === correctPath.length - 1) {
          sound.routerRoute();
        } else {
          sound.packetPing();
        }
      }, idx * stepInterval);
    });

    setTimeout(() => {
      setAnimatingPacket(false);
    }, correctPath.length * stepInterval + 300);
  };

  const handleSelect = (optionId: string) => {
    if (isConfirmed) return;
    sound.click();
    setSelectedOptionId(optionId);
  };

  const handleConfirm = () => {
    if (!selectedOptionId || isConfirmed) return;

    const opt = mission.options.find((o) => o.id === selectedOptionId);
    if (!opt) return;

    setIsConfirmed(true);

    if (opt.isCorrect) {
      sound.laser();
      setScore((s) => s + 100);
      setHistory((prev) => ({
        ...prev,
        [mission.id]: { isCorrect: true, selectedId: selectedOptionId },
      }));
      // Kích hoạt hoạt họa gói tin
      triggerPacketAnimation(mission.diagram?.activePacket?.correctPath);
    } else {
      sound.damage();
      setHistory((prev) => ({
        ...prev,
        [mission.id]: { isCorrect: false, selectedId: selectedOptionId },
      }));
    }
  };

  const handleNext = () => {
    sound.click();
    if (currentIndex + 1 < totalMissions) {
      setCurrentIndex((i) => i + 1);
      setSelectedOptionId(null);
      setIsConfirmed(false);
      setAnimatingPacket(false);
    } else {
      // Kết thúc game
      const finalScore = score + (mission.options.find((o) => o.id === selectedOptionId)?.isCorrect ? 0 : 0);
      const percentage = Math.round((finalScore / (totalMissions * 100)) * 100);
      saveAttempt(`${lessonId}:game:${game.id}`, percentage);
      if (percentage >= 80) sound.victory();
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    sound.click();
    setMissions(
      game.missions.map((m) => ({
        ...m,
        options: shuffle(m.options),
      }))
    );
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsConfirmed(false);
    setScore(0);
    setHistory({});
    setGameOver(false);
    setAnimatingPacket(false);
  };

  // MÀN HÌNH TỔNG KẾT
  if (gameOver) {
    const percentage = Math.round((score / (totalMissions * 100)) * 100);
    const isMaster = percentage >= 85;
    const isGood = percentage >= 60;

    return (
      <main className="min-h-screen bg-[#070b14] px-4 py-10 text-slate-100 sm:px-6">
        <div className="mx-auto max-w-2xl rounded-3xl border border-sky-500/20 bg-[#0d1527]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
          <div className="text-center">
            <span className="inline-block animate-bounce text-6xl">
              {isMaster ? "🏆" : isGood ? "🥈" : "🥉"}
            </span>
            <h1 className="mt-4 font-display text-2xl font-black text-white sm:text-3xl">
              {isMaster
                ? "KỸ SƯ TRƯỞNG MẠNG & ĐÁM MÂY XUẤT SẮC!"
                : isGood
                  ? "CHUYÊN VIÊN QUẢN TRỊ MẠNG ĐẠT CHUẨN"
                  : "KỸ THUẬT VIÊN CẦN ÔN TẬP THÊM"}
            </h1>
            <p className="mt-2 text-sm text-sky-200/70">
              Hoàn thành {totalMissions} nhiệm vụ điều phối gói tin, chẩn đoán mạng, đám mây & IoT.
            </p>

            <div className="mt-8 flex justify-center gap-6">
              <div className="rounded-2xl border border-sky-500/30 bg-sky-950/40 px-6 py-4">
                <div className="font-mono text-3xl font-black text-sky-400">{score}</div>
                <div className="text-xs uppercase tracking-wider text-sky-300/70">Tổng điểm</div>
              </div>
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/40 px-6 py-4">
                <div className="font-mono text-3xl font-black text-emerald-400">{percentage}%</div>
                <div className="text-xs uppercase tracking-wider text-emerald-300/70">Độ chính xác</div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-5 text-left text-xs leading-relaxed text-slate-300">
              <div className="font-semibold text-white">📋 Tóm lược kiến thức cốt lõi Bài 8 đã chinh phục:</div>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-slate-400">
                <li><strong className="text-sky-300">Switch:</strong> Chuyển tiếp dữ liệu trong nội bộ mạng LAN qua địa chỉ MAC; không đưa gói tin ra ngoài.</li>
                <li><strong className="text-sky-300">Router:</strong> Định tuyến gói tin giữa các mạng khác nhau, kết nối mạng LAN với Internet toàn cầu.</li>
                <li><strong className="text-sky-300">Modem:</strong> Chuyển đổi tín hiệu số (digital) và tín hiệu tương tự (analog/quang) từ nhà cung cấp ISP.</li>
                <li><strong className="text-sky-300">SaaS / PaaS / IaaS:</strong> Mô hình dịch vụ đám mây từ thuê phần mềm, nền tảng đến toàn bộ hạ tầng phần cứng ảo hoá.</li>
                <li><strong className="text-sky-300">IoT:</strong> Chuỗi cảm biến thu thập dữ liệu tự động, liên kết qua mạng để ra quyết định và điều khiển thông minh.</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={handleRestart}
                className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-95"
              >
                🔄 Thử thách lại
              </button>
              {onBack && (
                <button
                  onClick={onBack}
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-slate-300 transition hover:bg-white/10 active:scale-95"
                >
                  ← Về Trung tâm Game
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }

  const selectedOpt = mission.options.find((o) => o.id === selectedOptionId);

  return (
    <main className="min-h-screen bg-[#060a12] px-3 py-6 text-slate-100 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-4xl">
        {/* THANH ĐIỀU HƯỚNG & TIÊU ĐỀ */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-500/20 pb-4">
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="rounded-full border border-sky-500/30 bg-sky-950/40 px-3 py-1.5 font-mono text-xs text-sky-300 transition hover:bg-sky-900/60"
              >
                ← Thoát
              </button>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🌐</span>
                <h1 className="font-display text-lg font-bold text-white sm:text-xl">
                  {game.title}
                </h1>
              </div>
              <p className="text-xs text-sky-300/70">Mô phỏng kiến trúc mạng, định tuyến gói tin & đám mây (SGK Bài 8)</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Điểm số */}
            <div className="rounded-full border border-sky-500/30 bg-sky-950/50 px-3.5 py-1 font-mono text-xs font-semibold text-sky-400">
              ⚡ Điểm: {score}
            </div>

            {/* Bật/tắt âm */}
            <button
              onClick={() => setSoundEnabled((v) => !v)}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 transition hover:bg-white/10"
              title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
            >
              {soundEnabled ? "🔊" : "🔇"}
            </button>
          </div>
        </div>

        {/* TIẾN TRÌNH NHIỆM VỤ */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono text-sky-400">
            Nhiệm vụ {currentIndex + 1} / {totalMissions}
          </span>
          <span className="rounded-full bg-sky-500/10 px-2.5 py-0.5 font-medium text-sky-300 border border-sky-500/20">
            {mission.badge}
          </span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 transition-all duration-300"
            style={{ width: `${((currentIndex + (isConfirmed ? 1 : 0)) / totalMissions) * 100}%` }}
          />
        </div>

        {/* KHUNG TỔNG THỂ NHIỆM VỤ */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* CỘT TRÁI: SƠ ĐỒ MẠNG TRỰC QUAN (NẾU CÓ) HOẶC HÌNH MINH HOẠ */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-sky-500/20 bg-[#0c1424] p-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-sky-500/15 pb-2 text-xs">
                <span className="font-semibold text-sky-300">🛰️ Sơ đồ Tô-pô & Trạng thái Mạng</span>
                <span className="font-mono text-[11px] text-emerald-400">● LIVE MONITOR</span>
              </div>

              {/* KHUNG VẼ SƠ ĐỒ SVG ĐỘNG */}
              {mission.diagram ? (
                <div className="relative mt-3 h-64 w-full overflow-hidden rounded-xl bg-[#060a14] border border-white/5 p-2">
                  <svg className="absolute inset-0 h-full w-full pointer-events-none">
                    {/* Đường liên kết mạng */}
                    {mission.diagram.links.map((link, idx) => {
                      const fromNode = mission.diagram?.nodes.find((n) => n.id === link.from);
                      const toNode = mission.diagram?.nodes.find((n) => n.id === link.to);
                      if (!fromNode || !toNode) return null;

                      const isLinkActive =
                        animatingPacket &&
                        mission.diagram?.activePacket?.correctPath &&
                        mission.diagram.activePacket.correctPath.includes(link.from) &&
                        mission.diagram.activePacket.correctPath.includes(link.to);

                      return (
                        <g key={idx}>
                          <line
                            x1={`${fromNode.x}%`}
                            y1={`${fromNode.y}%`}
                            x2={`${toNode.x}%`}
                            y2={`${toNode.y}%`}
                            stroke={isLinkActive ? "#38bdf8" : link.type === "wifi" ? "#6366f1" : "#1e293b"}
                            strokeWidth={isLinkActive ? "3" : "1.5"}
                            strokeDasharray={link.type === "wifi" ? "4,4" : undefined}
                            className={isLinkActive ? "animate-pulse" : ""}
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {/* CÁC THIẾT BỊ NÚT MẠNG */}
                  {mission.diagram.nodes.map((node) => {
                    const isSource = mission.diagram?.activePacket?.sourceId === node.id;
                    const isTarget = mission.diagram?.activePacket?.targetId === node.id;
                    const isInCorrectPath = mission.diagram?.activePacket?.correctPath.includes(node.id);
                    const isCurrentlyActiveStep =
                      animatingPacket &&
                      mission.diagram?.activePacket?.correctPath &&
                      mission.diagram.activePacket.correctPath[activePacketStep] === node.id;

                    return (
                      <div
                        key={node.id}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-transform duration-300 ${
                          isCurrentlyActiveStep ? "scale-125 z-20" : "scale-100 z-10"
                        }`}
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg shadow-md transition-all ${
                            isCurrentlyActiveStep
                              ? "border-amber-400 bg-amber-500/30 ring-4 ring-amber-400/50"
                              : isSource
                                ? "border-sky-400 bg-sky-950/80 ring-2 ring-sky-400/40"
                                : isTarget
                                  ? "border-emerald-400 bg-emerald-950/80 ring-2 ring-emerald-400/40"
                                  : isInCorrectPath && isConfirmed
                                    ? "border-blue-400/80 bg-blue-950/60"
                                    : "border-slate-700 bg-slate-900/80 text-slate-400"
                          }`}
                        >
                          {node.emoji}
                        </div>
                        <span className="mt-1 max-w-[70px] truncate text-center font-mono text-[9px] font-semibold text-slate-300">
                          {node.name}
                        </span>
                        {node.ip && (
                          <span className="font-mono text-[8px] text-slate-400">
                            {node.ip}
                          </span>
                        )}
                      </div>
                    );
                  })}

                  {/* THÔNG BÁO HOẠT HỌA TRUYỀN GÓI TIN */}
                  {animatingPacket && (
                    <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-sky-950/90 border border-sky-400/40 p-2 text-center text-[11px] text-sky-200 animate-pulse">
                      ⚡ Đang truyền gói tin:{" "}
                      <strong>{mission.diagram.activePacket?.packetLabel}</strong>...
                    </div>
                  )}
                </div>
              ) : (
                <div className="mt-3 flex h-64 flex-col items-center justify-center rounded-xl border border-white/5 bg-[#060a14] p-4 text-center">
                  <span className="text-5xl">☁️📡</span>
                  <div className="mt-3 font-semibold text-sky-300">{mission.badge}</div>
                  <p className="mt-1 text-xs text-slate-400">Mô hình kiến trúc dịch vụ điện toán & cảm biến vạn vật</p>
                </div>
              )}

              {/* MẸO THỰC TẾ CỦA KỸ SƯ */}
              {mission.practicalTip && (
                <div className="mt-3 rounded-xl border border-amber-500/20 bg-amber-950/20 p-3 text-xs text-amber-200/90">
                  <span className="font-bold text-amber-300">💡 Lưu ý thực chiến: </span>
                  {mission.practicalTip}
                </div>
              )}
            </div>
          </div>

          {/* CỘT PHẢI: TÌNH HUỐNG & BẢNG LỰA CHỌN */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="rounded-2xl border border-sky-500/20 bg-[#0c1424] p-5 shadow-xl sm:p-6">
              {/* Tên nhiệm vụ */}
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400">
                Thử thách #{mission.missionNumber}
              </div>
              <h2 className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
                {mission.title}
              </h2>

              {/* Bối cảnh thực tế */}
              <div className="mt-3 rounded-xl border border-white/5 bg-slate-900/60 p-4 text-sm leading-relaxed text-slate-300">
                <p>{mission.scenario}</p>
              </div>

              {/* Câu hỏi tác chiến */}
              <div className="mt-4 font-semibold text-sky-200 text-sm">
                ❓ {mission.taskQuestion}
              </div>

              {/* CÁC PHƯƠNG ÁN LỰA CHỌN */}
              <div className="mt-4 space-y-2.5">
                {mission.options.map((opt, optIdx) => {
                  const isSelected = selectedOptionId === opt.id;
                  let styleClass = "border-slate-700/80 bg-slate-900/50 hover:border-sky-500/50 hover:bg-slate-800/60 text-slate-200";

                  if (isConfirmed) {
                    if (opt.isCorrect) {
                      styleClass = "border-emerald-500 bg-emerald-950/50 text-emerald-200 ring-2 ring-emerald-500/30";
                    } else if (isSelected && !opt.isCorrect) {
                      styleClass = "border-rose-500 bg-rose-950/50 text-rose-200 ring-2 ring-rose-500/30";
                    } else {
                      styleClass = "border-slate-800 bg-slate-950/30 text-slate-500 opacity-60";
                    }
                  } else if (isSelected) {
                    styleClass = "border-sky-400 bg-sky-950/60 text-sky-100 ring-2 ring-sky-400/40";
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(opt.id)}
                      disabled={isConfirmed}
                      className={`w-full rounded-xl border p-3.5 text-left transition-all ${styleClass} flex items-start gap-3`}
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-xs font-mono font-bold">
                        {isConfirmed && opt.isCorrect ? "✓" : isConfirmed && isSelected ? "✗" : String.fromCharCode(65 + optIdx)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium leading-snug">{opt.text}</div>
                        {opt.detail && (
                          <div className="mt-0.5 text-xs text-slate-400 leading-normal">{opt.detail}</div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* KHUNG GIẢI THÍCH CHI TIẾT SAU KHI XÁC NHẬN */}
              {isConfirmed && selectedOpt && (
                <div
                  className={`mt-4 rounded-xl border p-4 text-xs leading-relaxed ${
                    selectedOpt.isCorrect
                      ? "border-emerald-500/30 bg-emerald-950/30 text-emerald-200"
                      : "border-rose-500/30 bg-rose-950/30 text-rose-200"
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5 text-sm mb-1">
                    {selectedOpt.isCorrect ? "✅ CHÍNH XÁC!" : "❌ CHƯA CHUẨN XÁC!"}
                  </div>
                  <div>{selectedOpt.explain}</div>
                </div>
              )}
            </div>

            {/* NÚT THAO TÁC XÁC NHẬN / TIẾP THEO */}
            <div className="mt-4 flex justify-end">
              {!isConfirmed ? (
                <button
                  onClick={handleConfirm}
                  disabled={!selectedOptionId}
                  className={`rounded-full px-7 py-3 font-semibold text-sm shadow-lg transition-all ${
                    selectedOptionId
                      ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:brightness-110 active:scale-95"
                      : "cursor-not-allowed border border-white/5 bg-slate-800 text-slate-500"
                  }`}
                >
                  ⚡ Xác nhận giải pháp
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-7 py-3 font-semibold text-sm text-white shadow-lg transition hover:brightness-110 active:scale-95"
                >
                  {currentIndex + 1 < totalMissions ? "Tiếp tục nhiệm vụ →" : "Xem tổng kết & Xếp hạng 🏆"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
