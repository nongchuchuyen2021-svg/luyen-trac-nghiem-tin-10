"use client";

import { useEffect, useRef, useState } from "react";
import type { ArenaGame, ArenaThreat } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";
import { sound } from "@/lib/sound";

type PowerUpKey = "shield" | "scan" | "twoFa" | "freeze";

interface PowerUpState {
  available: boolean;
  active: boolean;
}

function shuffleThreat(t: ArenaThreat): ArenaThreat {
  const indices = t.options.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    ...t,
    options: indices.map((i) => t.options[i]),
    answer: indices.indexOf(t.answer),
  };
}

function buildPreparedThreats(game: ArenaGame) {
  const list: ArenaThreat[] = [];
  const wMap: number[] = [];
  game.waves.forEach((w, wIdx) => {
    w.threats.forEach((t) => {
      list.push(shuffleThreat(t));
      wMap.push(wIdx);
    });
  });
  return { list, wMap };
}

export default function CyberArenaGame({
  lessonId,
  game,
  onBack,
}: {
  lessonId: string;
  game: ArenaGame;
  onBack?: () => void;
}) {
  const [preparedThreats, setPreparedThreats] = useState(() => buildPreparedThreats(game));

  const setupThreats = () => {
    setPreparedThreats(buildPreparedThreats(game));
  };

  useEffect(() => {
    setupThreats();
  }, [game]);

  const currentThreatList = preparedThreats.list;
  const totalThreats = currentThreatList.length;

  // Game state
  const [currentIdx, setCurrentIdx] = useState(0);
  const [firewallHp, setFirewallHp] = useState(100);
  const [bossHp, setBossHp] = useState(game.bossHp);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Timer
  const QUESTION_TIME = 20; // 20 giây mỗi câu
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [isFrozen, setIsFrozen] = useState(false);

  // Power-ups (Mỗi loại dùng 1 lần trong cả trận)
  const [powerUps, setPowerUps] = useState<Record<PowerUpKey, PowerUpState>>({
    shield: { available: true, active: false },
    scan: { available: true, active: false },
    twoFa: { available: true, active: false },
    freeze: { available: true, active: false },
  });
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);

  // Tương tác câu hiện tại
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answeredState, setAnsweredState] = useState<{
    correct: boolean;
    hpDelta: number;
    scoreDelta: number;
    explain: string;
    shieldBlocked?: boolean;
  } | null>(null);

  // Trạng thái trận đấu
  const [gameState, setGameState] = useState<"intro" | "playing" | "victory" | "defeat">("intro");
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [screenShake, setScreenShake] = useState(false);

  const currentThreat = currentThreatList[currentIdx];
  const currentWaveIdx = preparedThreats.wMap[currentIdx] ?? 0;
  const currentWave = game.waves[currentWaveIdx] ?? game.waves[0];

  // Khởi tạo điểm cao
  useEffect(() => {
    const p = getLessonProgress(`${lessonId}:arena:${game.id}`);
    if (p && p.best) {
      setBestScore(p.best);
    }
  }, [lessonId, game.id]);

  // Đồng bộ trạng thái âm thanh
  useEffect(() => {
    sound.enabled = soundEnabled;
  }, [soundEnabled]);

  // Đếm ngược thời gian
  useEffect(() => {
    if (gameState !== "playing" || answeredState !== null || isFrozen) return;

    if (timeLeft <= 0) {
      // Hết giờ coi như bị xuyên thủng!
      handleTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 5 && t > 1) {
          sound.tick();
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, answeredState, timeLeft, isFrozen]);

  // Kích hoạt rung màn hình khi dính đòn
  function triggerShake() {
    setScreenShake(true);
    setTimeout(() => setScreenShake(false), 450);
  }

  // Khi hết giờ
  function handleTimeOut() {
    if (!currentThreat || answeredState) return;

    const damage = currentThreat.damage;
    let effectiveDamage = damage;
    let blocked = false;

    if (powerUps.shield.active) {
      effectiveDamage = 0;
      blocked = true;
      setPowerUps((prev) => ({ ...prev, shield: { available: false, active: false } }));
    }

    sound.damage();
    triggerShake();

    const newHp = Math.max(0, firewallHp - effectiveDamage);
    setFirewallHp(newHp);
    setCombo(0);

    setAnsweredState({
      correct: false,
      hpDelta: -effectiveDamage,
      scoreDelta: 0,
      explain: `⏰ HẾT THỜI GIAN PHẢN ỨNG! Mã độc đã kịp xâm nhập hệ thống. ${currentThreat.explain}`,
      shieldBlocked: blocked,
    });

    if (newHp <= 0) {
      sound.defeat();
      setTimeout(() => setGameState("defeat"), 1200);
    }
  }

  // Chọn đáp án
  function handlePickOption(optionIdx: number) {
    if (answeredState !== null || !currentThreat) return;

    sound.click();
    setSelectedOption(optionIdx);

    const isCorrect = optionIdx === currentThreat.answer;

    if (isCorrect) {
      // Xử lý đúng
      sound.laser();
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);
      if (newCombo > 1) sound.combo(newCombo);

      // Điểm số: Điểm gốc + Thưởng tốc độ + Combo + 2FA
      const speedBonus = timeLeft > 10 ? 50 : timeLeft > 5 ? 25 : 0;
      const comboBonus = (newCombo - 1) * 30;
      let totalGained = currentThreat.score + speedBonus + comboBonus;

      if (powerUps.twoFa.active) {
        totalGained *= 2;
        setPowerUps((prev) => ({ ...prev, twoFa: { available: false, active: false } }));
      }

      setScore((s) => s + totalGained);

      // Trừ máu Boss
      const bossDamage = Math.round(game.bossHp / totalThreats) + 15;
      const newBossHp = Math.max(0, bossHp - bossDamage);
      setBossHp(newBossHp);

      setAnsweredState({
        correct: true,
        hpDelta: 0,
        scoreDelta: totalGained,
        explain: currentThreat.explain,
      });
    } else {
      // Xử lý sai
      let damage = currentThreat.damage;
      let blocked = false;

      if (powerUps.shield.active) {
        damage = 0;
        blocked = true;
        setPowerUps((prev) => ({ ...prev, shield: { available: false, active: false } }));
      }

      sound.damage();
      triggerShake();

      const newHp = Math.max(0, firewallHp - damage);
      setFirewallHp(newHp);
      setCombo(0);

      setAnsweredState({
        correct: false,
        hpDelta: -damage,
        scoreDelta: 0,
        explain: currentThreat.explain,
        shieldBlocked: blocked,
      });

      if (newHp <= 0) {
        sound.defeat();
        setTimeout(() => setGameState("defeat"), 1200);
      }
    }
  }

  // Chuyển sang tình huống kế tiếp
  function handleNextThreat() {
    if (firewallHp <= 0) {
      setGameState("defeat");
      return;
    }

    const nextIdx = currentIdx + 1;
    if (nextIdx >= totalThreats) {
      // Chiến thắng toàn diện!
      sound.victory();
      setGameState("victory");
      saveAttempt(`${lessonId}:arena:${game.id}`, score);
      return;
    }

    setCurrentIdx(nextIdx);
    setSelectedOption(null);
    setAnsweredState(null);
    setTimeLeft(QUESTION_TIME);
    setIsFrozen(false);
    setEliminatedOptions([]);
  }

  // Sử dụng Power-up
  function activatePowerUp(key: PowerUpKey) {
    if (!powerUps[key].available || answeredState !== null) return;

    if (key === "shield") {
      sound.shield();
      setPowerUps((prev) => ({ ...prev, shield: { available: false, active: true } }));
    } else if (key === "scan") {
      sound.scan();
      // Loại 2 đáp án sai ngẫu nhiên
      if (!currentThreat) return;
      const wrongIndices = [0, 1, 2, 3].filter((i) => i !== currentThreat.answer);
      const shuffled = [...wrongIndices].sort(() => Math.random() - 0.5);
      setEliminatedOptions(shuffled.slice(0, 2));
      setPowerUps((prev) => ({ ...prev, scan: { available: false, active: false } }));
    } else if (key === "twoFa") {
      sound.shield();
      setPowerUps((prev) => ({ ...prev, twoFa: { available: false, active: true } }));
    } else if (key === "freeze") {
      sound.freeze();
      setIsFrozen(true);
      setTimeLeft((t) => t + 10);
      setPowerUps((prev) => ({ ...prev, freeze: { available: false, active: false } }));
    }
  }

  // Khởi động lại trận
  function handleRestart() {
    setupThreats();
    setCurrentIdx(0);
    setFirewallHp(100);
    setBossHp(game.bossHp);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setTimeLeft(QUESTION_TIME);
    setIsFrozen(false);
    setSelectedOption(null);
    setAnsweredState(null);
    setEliminatedOptions([]);
    setPowerUps({
      shield: { available: true, active: false },
      scan: { available: true, active: false },
      twoFa: { available: true, active: false },
      freeze: { available: true, active: false },
    });
    setGameState("playing");
  }

  // Danh hiệu an ninh mạng
  function getRank(finalScore: number) {
    if (finalScore >= 2500) {
      return {
        title: "ĐẠI KIỆN TƯỚNG AN NINH MẠNG",
        badge: "👑",
        color: "text-amber-300",
        desc: "Bậc thầy phản gián, tiêu diệt trùm hacker, bảo vệ toàn vẹn không gian mạng học đường!",
      };
    }
    if (finalScore >= 1800) {
      return {
        title: "CHỈ HUY TÁC CHIẾN SOC CAO CẤP",
        badge: "⚡",
        color: "text-purple-300",
        desc: "Nắm vững mọi thủ đoạn lừa đảo và chủng mã độc, xử lý nhanh như chớp!",
      };
    }
    if (finalScore >= 1000) {
      return {
        title: "VỆ SĨ KHÔNG GIAN MẠNG",
        badge: "🛡️",
        color: "text-emerald-300",
        desc: "Kĩ năng phòng thủ kiên cường, nhận diện tốt các bẫy phishing và virus.",
      };
    }
    return {
      title: "HỌC VIÊN AN TOÀN SỐ",
      badge: "🔰",
      color: "text-blue-300",
      desc: "Đã hoàn thành khóa huấn luyện, cần cẩn trọng hơn trước các chiêu trò tinh vi.",
    };
  }

  // ──────────────────────────────────────────
  // MÀN HÌNH GIỚI THIỆU (INTRO)
  // ──────────────────────────────────────────
  if (gameState === "intro") {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6">
        <div className="mx-auto max-w-2xl">
          {onBack && (
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3.5 py-1.5 font-mono text-xs text-slate-300 backdrop-blur transition hover:border-purple-500 hover:text-white"
            >
              ← Quay lại danh sách game
            </button>
          )}

          <div className="mt-6 overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-b from-purple-950/40 via-slate-900/90 to-slate-950 p-6 shadow-2xl backdrop-blur sm:p-8">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 font-mono text-xs font-semibold text-purple-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                CYBER DEFENSE ARENA · THPT NA RÌ
              </span>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300 hover:text-white"
                title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
              >
                {soundEnabled ? "🔊 Âm thanh: BẬT" : "🔇 Âm thanh: TẮT"}
              </button>
            </div>

            <div className="mt-5 text-center">
              <span className="text-6xl sm:text-7xl">⚔️</span>
              <h1 className="mt-3 font-display text-2xl font-black tracking-tight text-white sm:text-3xl">
                {game.title}
              </h1>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
                {game.instructions}
              </p>
            </div>

            {/* Bối cảnh nhiệm vụ */}
            <div className="mt-6 rounded-2xl border border-rose-500/20 bg-rose-950/20 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚨</span>
                <div>
                  <h3 className="font-display text-sm font-bold text-rose-300">
                    BÁO ĐỘNG ĐỎ: TẬP KÍCH MÃ ĐỘC DIỆN RỘNG!
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Máy chủ trường học đang bị thế lực Hacker ngầm{" "}
                    <span className="font-semibold text-rose-400">"{game.bossName}"</span> tung ra 5 đợt tấn công:
                    Lừa đảo Phishing, Sâu mạng Worm, Trojan gián điệp và Ransomware tống tiền. Em hãy vào vai{" "}
                    <strong>Chuyên viên Tác chiến An ninh mạng (SOC)</strong>, vận dụng kiến thức Bài 9 để kích hoạt Tường lửa,
                    phản công và bảo vệ hệ thống mạng an toàn tuyệt đối!
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Vũ khí an ninh mạng */}
            <div className="mt-6">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-purple-300">
                🛠️ 4 Trang bị Kỹ năng An ninh mạng (Power-ups):
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-2.5 text-xs sm:grid-cols-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <div className="text-lg">🛡️</div>
                  <div className="mt-1 font-bold text-slate-200">Khiên Tường lửa</div>
                  <div className="text-[11px] text-slate-400">Miễn nhiễm 1 đòn sai</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <div className="text-lg">🔍</div>
                  <div className="mt-1 font-bold text-slate-200">Quét Defender</div>
                  <div className="text-[11px] text-slate-400">Loại bỏ 2 phương án sai</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <div className="text-lg">⚡</div>
                  <div className="mt-1 font-bold text-slate-200">Xác thực 2FA</div>
                  <div className="text-[11px] text-slate-400">Nhân 2 điểm câu này</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <div className="text-lg">⏱️</div>
                  <div className="mt-1 font-bold text-slate-200">Đóng băng mạng</div>
                  <div className="text-[11px] text-slate-400">+10s thời gian suy nghĩ</div>
                </div>
              </div>
            </div>

            {bestScore !== null && (
              <div className="mt-5 text-center font-mono text-xs text-amber-300">
                🏆 Điểm kỷ lục của em: <span className="font-bold">{bestScore} điểm</span>
              </div>
            )}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => {
                  sound.click();
                  setGameState("playing");
                }}
                className="flex-1 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 py-3.5 font-display text-base font-bold text-white shadow-lg shadow-purple-900/40 transition hover:brightness-110 active:scale-[0.98]"
              >
                ⚔️ BẮT ĐẦU VÀO ĐẤU TRƯỜNG →
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ──────────────────────────────────────────
  // MÀN HÌNH CHIẾN THẮNG (VICTORY)
  // ──────────────────────────────────────────
  if (gameState === "victory") {
    const rank = getRank(score);
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-950 p-6 shadow-2xl sm:p-8">
            <span className="text-7xl animate-bounce">🏆</span>
            <span className="mt-2 inline-block rounded-full bg-emerald-500/20 px-3.5 py-1 font-mono text-xs font-bold text-emerald-300">
              MISSION ACCOMPLISHED · KHÔNG GIAN MẠNG AN TOÀN!
            </span>
            <h1 className="mt-3 font-display text-2xl font-black text-white sm:text-3xl">
              HẠ GỤC TRÙM HACKER THÀNH CÔNG!
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Em đã xuất sắc đẩy lùi toàn bộ {totalThreats} đợt tấn công mã độc và vô hiệu hóa hoàn toàn máy chủ của{" "}
              <strong>{game.bossName}</strong>!
            </p>

            {/* Rank Card */}
            <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-950/20 p-5 text-center">
              <div className="text-4xl">{rank.badge}</div>
              <div className={`mt-1 font-display text-lg font-black uppercase ${rank.color}`}>
                {rank.title}
              </div>
              <p className="mt-1 text-xs text-slate-300">{rank.desc}</p>
            </div>

            {/* Thống kê trận đấu */}
            <div className="mt-5 grid grid-cols-3 gap-3 font-mono text-xs">
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                <div className="text-slate-400">Tổng điểm</div>
                <div className="mt-1 text-lg font-bold text-amber-300">{score}</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                <div className="text-slate-400">Tường lửa còn</div>
                <div className="mt-1 text-lg font-bold text-emerald-400">{firewallHp}%</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                <div className="text-slate-400">Chuỗi Combo max</div>
                <div className="mt-1 text-lg font-bold text-purple-400">{maxCombo}x 🔥</div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleRestart}
                className="flex-1 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 font-display text-sm font-bold text-white shadow-lg transition hover:brightness-110"
              >
                🔄 Đấu lại trận mới
              </button>
              {onBack && (
                <button
                  onClick={onBack}
                  className="rounded-2xl border border-slate-700 bg-slate-800/80 px-5 py-3 font-display text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
                >
                  ← Về danh sách game
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ──────────────────────────────────────────
  // MÀN HÌNH THẤT THỦ (DEFEAT)
  // ──────────────────────────────────────────
  if (gameState === "defeat") {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="overflow-hidden rounded-3xl border border-rose-500/40 bg-gradient-to-b from-rose-950/50 via-slate-900 to-slate-950 p-6 shadow-2xl sm:p-8">
            <span className="text-7xl">💀</span>
            <span className="mt-2 inline-block rounded-full bg-rose-500/20 px-3.5 py-1 font-mono text-xs font-bold text-rose-300">
              SYSTEM BREACH DETECTED · TƯỜNG LỬA SẬP!
            </span>
            <h1 className="mt-3 font-display text-2xl font-black text-rose-400 sm:text-3xl">
              HỆ THỐNG ĐÃ BỊ MÃ ĐỘC XÂM NHẬP!
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Tường lửa đã bị thủng hoàn toàn do thiếu cảnh giác trước các thủ đoạn tinh vi của hacker. Đừng nản lòng,
              hãy rút kinh nghiệm và tái khởi động phòng tuyến ngay!
            </p>

            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-left text-xs leading-relaxed text-slate-300">
              <span className="font-bold text-purple-300">💡 Lời khuyên tác chiến cho em:</span>
              <ul className="mt-2 list-inside list-disc space-y-1 text-slate-400">
                <li>Phân biệt rõ: Virus cần vật chủ (tệp), Sâu Worm tự lây qua mạng, Trojan nguỵ trang phần mềm crack.</li>
                <li>Đừng bao giờ bấm vào link giục gấp hoặc chia sẻ mã OTP/mật khẩu cho bất cứ ai.</li>
                <li>Tận dụng 4 kỹ năng bổ trợ (Khiên Tường lửa, Quét Defender, 2FA, Đóng băng thời gian) khi gặp câu hỏi khó!</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleRestart}
                className="flex-1 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 py-3 font-display text-sm font-bold text-white shadow-lg transition hover:brightness-110"
              >
                🔄 Tái thiết Tường lửa & Thử lại ngay
              </button>
              {onBack && (
                <button
                  onClick={onBack}
                  className="rounded-2xl border border-slate-700 bg-slate-800/80 px-5 py-3 font-display text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
                >
                  ← Về danh sách game
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ──────────────────────────────────────────
  // MÀN HÌNH TÁC CHIẾN ĐẤU TRƯỜNG (PLAYING)
  // ──────────────────────────────────────────
  const hpPercent = Math.max(0, Math.min(100, firewallHp));
  const hpColor =
    hpPercent > 50
      ? "bg-gradient-to-r from-emerald-500 to-teal-400"
      : hpPercent > 25
        ? "bg-gradient-to-r from-amber-500 to-yellow-400"
        : "bg-gradient-to-r from-rose-600 to-red-500 animate-pulse";

  const bossHpPercent = Math.max(0, Math.min(100, Math.round((bossHp / game.bossHp) * 100)));

  return (
    <main
      className={`min-h-screen bg-slate-950 pb-16 pt-5 text-slate-100 transition-transform duration-100 ${
        screenShake ? "translate-x-1.5 -translate-y-1.5" : ""
      }`}
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          {onBack && (
            <button
              onClick={onBack}
              className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 font-mono text-xs text-slate-400 hover:text-slate-200"
            >
              ← Rời đấu trường
            </button>
          )}
          <div className="flex items-center gap-3">
            {combo > 1 && (
              <span className="rounded-full bg-gradient-to-r from-amber-500 to-rose-500 px-2.5 py-0.5 font-mono text-xs font-bold text-white shadow-lg animate-bounce">
                🔥 COMBO {combo}x
              </span>
            )}
            <span className="font-mono text-xs font-bold text-amber-300">
              💎 {score} <span className="text-[10px] text-slate-400">điểm</span>
            </span>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="text-sm text-slate-400 hover:text-white"
              title="Bật/Tắt âm thanh"
            >
              {soundEnabled ? "🔊" : "🔇"}
            </button>
          </div>
        </div>

        {/* HUD DUAL BARS: TƯỜNG LỬA VS BOSS HACKER */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {/* Cột Tường Lửa Phe Ta */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3 shadow-md">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1 font-bold text-emerald-400">
                <span>🛡️</span> TƯỜNG LỬA
              </span>
              <span className="font-mono font-bold text-slate-200">{hpPercent}%</span>
            </div>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full transition-all duration-300 ${hpColor}`}
                style={{ width: `${hpPercent}%` }}
              />
            </div>
          </div>

          {/* Cột Boss Hacker */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3 shadow-md">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1 font-bold text-rose-400">
                <span>{game.bossEmoji}</span> {game.bossName}
              </span>
              <span className="font-mono font-bold text-slate-200">{bossHpPercent}%</span>
            </div>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full bg-gradient-to-r from-rose-500 to-purple-500 transition-all duration-300"
                style={{ width: `${bossHpPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* THANH KỸ NĂNG AN NINH (POWER-UPS) */}
        <div className="mt-3 flex items-center justify-between rounded-xl border border-purple-500/20 bg-purple-950/20 px-3 py-2 text-xs">
          <span className="font-mono text-[11px] font-semibold text-purple-300">
            TRỢ THỦ SOC:
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => activatePowerUp("shield")}
              disabled={!powerUps.shield.available || answeredState !== null}
              className={`flex items-center gap-1 rounded-lg px-2 py-1 transition ${
                powerUps.shield.active
                  ? "border border-emerald-400 bg-emerald-500/20 text-emerald-300"
                  : powerUps.shield.available && !answeredState
                    ? "border border-slate-700 bg-slate-800 hover:border-emerald-500 hover:text-emerald-300"
                    : "opacity-30 cursor-not-allowed border border-slate-800 bg-slate-900"
              }`}
              title="Khiên Tường lửa: miễn nhiễm 1 đòn nếu trả lời sai"
            >
              <span>🛡️</span>
              <span className="hidden sm:inline">Khiên</span>
            </button>

            <button
              onClick={() => activatePowerUp("scan")}
              disabled={!powerUps.scan.available || answeredState !== null}
              className={`flex items-center gap-1 rounded-lg px-2 py-1 transition ${
                powerUps.scan.available && !answeredState
                  ? "border border-slate-700 bg-slate-800 hover:border-cyan-500 hover:text-cyan-300"
                  : "opacity-30 cursor-not-allowed border border-slate-800 bg-slate-900"
              }`}
              title="Quét Defender: Loại bỏ 2 phương án sai (50:50)"
            >
              <span>🔍</span>
              <span className="hidden sm:inline">Quét 50:50</span>
            </button>

            <button
              onClick={() => activatePowerUp("twoFa")}
              disabled={!powerUps.twoFa.available || answeredState !== null}
              className={`flex items-center gap-1 rounded-lg px-2 py-1 transition ${
                powerUps.twoFa.active
                  ? "border border-amber-400 bg-amber-500/20 text-amber-300"
                  : powerUps.twoFa.available && !answeredState
                    ? "border border-slate-700 bg-slate-800 hover:border-amber-500 hover:text-amber-300"
                    : "opacity-30 cursor-not-allowed border border-slate-800 bg-slate-900"
              }`}
              title="2FA: Nhân đôi điểm số cho câu này"
            >
              <span>⚡</span>
              <span className="hidden sm:inline">x2 Điểm</span>
            </button>

            <button
              onClick={() => activatePowerUp("freeze")}
              disabled={!powerUps.freeze.available || answeredState !== null}
              className={`flex items-center gap-1 rounded-lg px-2 py-1 transition ${
                isFrozen
                  ? "border border-blue-400 bg-blue-500/20 text-blue-300"
                  : powerUps.freeze.available && !answeredState
                    ? "border border-slate-700 bg-slate-800 hover:border-blue-500 hover:text-blue-300"
                    : "opacity-30 cursor-not-allowed border border-slate-800 bg-slate-900"
              }`}
              title="Đóng băng mạng: Thêm +10s thời gian"
            >
              <span>⏱️</span>
              <span className="hidden sm:inline">+10s</span>
            </button>
          </div>
        </div>

        {/* THẺ TÌNH HUỐNG TẤN CÔNG (THREAT BRIEFING CARD) */}
        {currentThreat && (
          <div className="mt-4 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/95 shadow-xl">
            {/* Header thẻ: Tên đợt & Bộ đếm thời gian */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/60 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{currentWave.emoji}</span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-purple-400">
                    ĐỢT {currentWave.waveNumber}/5 · CÂU {currentIdx + 1}/{totalThreats}
                  </div>
                  <div className="font-display text-xs font-bold text-slate-200">
                    {currentWave.name}
                  </div>
                </div>
              </div>

              {/* Đồng hồ đếm ngược */}
              <div
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-bold ${
                  timeLeft <= 5
                    ? "bg-rose-500/20 text-rose-400 animate-pulse border border-rose-500/40"
                    : isFrozen
                      ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                      : "bg-slate-800 text-slate-300"
                }`}
              >
                <span>{isFrozen ? "❄️" : "⏱️"}</span>
                <span>{timeLeft}s</span>
              </div>
            </div>

            {/* Nội dung tình huống tấn công */}
            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="text-3xl">{currentThreat.threatEmoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-rose-400">
                      [{currentThreat.threatType}]
                    </span>
                    <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                      Kẻ phát tán: {currentThreat.attackerTag}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold text-white sm:text-lg">
                    {currentThreat.threatName}
                  </h3>
                </div>
              </div>

              {/* Khung mô tả tình huống thực tế */}
              <div className="mt-3.5 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                <div className="font-mono text-[11px] font-bold text-purple-300 mb-1">
                  📡 TÌNH HUỐNG GHI NHẬN TỪ HỆ THỐNG:
                </div>
                {currentThreat.situation}
              </div>

              {/* Câu hỏi phản công */}
              <p className="mt-4 font-display text-sm font-semibold text-white sm:text-base">
                🎯 {currentThreat.q}
              </p>

              {/* 4 Lựa chọn phương án */}
              <div className="mt-4 space-y-2.5">
                {currentThreat.options.map((opt, optIdx) => {
                  const isEliminated = eliminatedOptions.includes(optIdx);
                  const isPicked = selectedOption === optIdx;
                  const isCorrectAnswer = optIdx === currentThreat.answer;

                  let btnStyle =
                    "border-slate-800 bg-slate-950/40 hover:border-purple-500 hover:bg-purple-950/20 text-slate-200";

                  if (answeredState !== null) {
                    if (isCorrectAnswer) {
                      btnStyle = "border-emerald-500 bg-emerald-950/40 text-emerald-300 font-semibold";
                    } else if (isPicked && !isCorrectAnswer) {
                      btnStyle = "border-rose-500 bg-rose-950/40 text-rose-300 font-semibold";
                    } else {
                      btnStyle = "opacity-40 border-slate-800 bg-slate-950/20 text-slate-500";
                    }
                  } else if (isEliminated) {
                    btnStyle = "opacity-25 line-through border-slate-800 bg-slate-950 cursor-not-allowed text-slate-600";
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isEliminated || answeredState !== null}
                      onClick={() => handlePickOption(optIdx)}
                      className={`group flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left text-xs transition sm:text-sm ${btnStyle}`}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 font-mono text-xs text-slate-300 group-hover:border-purple-400 group-hover:text-white">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1 leading-snug">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* BẢN TIN PHÂN TÍCH ĐIỀU TRA (FORENSIC REPORT) KHI ĐÃ TRẢ LỜI */}
              {answeredState && (
                <div
                  className={`mt-5 rounded-2xl border p-4 text-xs leading-relaxed animate-pop-in sm:text-sm ${
                    answeredState.correct
                      ? "border-emerald-500/40 bg-emerald-950/30 text-emerald-200"
                      : "border-rose-500/40 bg-rose-950/30 text-rose-200"
                  }`}
                >
                  <div className="flex items-center justify-between font-display text-sm font-bold">
                    <span>
                      {answeredState.correct
                        ? "🛡️ ĐÃ ĐẨY LÙI MÃ ĐỘC THÀNH CÔNG!"
                        : answeredState.shieldBlocked
                          ? "🛡️ KHIÊN TƯỜNG LỬA ĐÃ CHẶN ĐÒN TẤN CÔNG!"
                          : "⚠️ TƯỜNG LỬA BỊ XUYÊN THỦNG!"}
                    </span>
                    <span className="font-mono text-xs">
                      {answeredState.correct
                        ? `+${answeredState.scoreDelta} điểm`
                        : `${answeredState.hpDelta} HP`}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                    {answeredState.explain}
                  </p>

                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={handleNextThreat}
                      className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 font-display text-xs font-bold text-white shadow-md transition hover:brightness-110 sm:text-sm"
                    >
                      Tiếp tục phản công →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
