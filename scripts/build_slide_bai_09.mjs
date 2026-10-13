import fs from 'node:fs';
import path from 'node:path';

// Trình biên soạn Slide bài giảng điện tử Bài 9: An toàn trên không gian mạng
// SGK Tin học 10 (Chủ đề 2: Mạng máy tính và Internet - Kết nối tri thức, trang 44–49).
// Tích hợp:
// - Khởi động tình huống thực tế bẫy mạo danh vay tiền
// - 5 Nguy cơ trên không gian mạng tương tác đa tầng
// - Đấu trường phân loại Hành vi nguy hiểm vs Kỹ năng số thông minh
// - Tam giác mã độc: Virus ký sinh vs Worm tự lây qua mạng vs Trojan nguỵ trang
// - Mô phỏng động Virus vs Worm lây nhiễm
// - Phòng thí nghiệm Keylogger gõ phím bắt trộm mật khẩu thời gian thực
// - Dòng thời gian đại dịch Melissa, Code Red, WannaCry
// - Phòng thực hành mô phỏng Windows Security / Defender quét virus
// - Bảng đối chiếu bẫy thi trắc nghiệm
// - Mini Quiz 5 câu trắc nghiệm chấm điểm trực tiếp
// - Sơ đồ tư duy Mindmap tương tác
// - Âm thanh Web Audio API & Pháo hoa ăn mừng

const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bài 9: An toàn trên không gian mạng — Tin học 10</title>
  <style>
    /* ─── RESET & HỆ THỐNG BIẾN MÀU SẮC CHUẨN CYBERSECURITY 2026 ─── */
    :root {
      --bg: #060D17;
      --bg-card: rgba(11, 20, 34, 0.95);
      --border-card: rgba(56, 225, 240, 0.22);
      --ink: #FFFFFF;
      --ink-soft: #94A3B8;
      --cyan: #38E1F0;
      --cyan-glow: rgba(56, 225, 240, 0.4);
      --blue: #3B82F6;
      --green: #10B981;
      --green-light: #34D399;
      --amber: #F5A623;
      --amber-light: #FCD34D;
      --red: #EF4444;
      --red-light: #F87171;
      --purple: #8B5CF6;
      --purple-light: #C4B5FD;
      --font-main: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      --font-mono: 'Consolas', 'Fira Code', 'Courier New', monospace;
      --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: var(--font-main);
      background: var(--bg);
      color: var(--ink);
      overflow: hidden;
      width: 100vw; height: 100vh;
      user-select: none;
      -webkit-font-smoothing: antialiased;
    }

    /* ─── HIỆU ỨNG NỀN MẠNG LƯỚI KHÔNG GIAN SỐ & RADAR ─── */
    .bg-mesh {
      position: fixed; inset: 0;
      background:
        radial-gradient(circle at 15% 15%, rgba(13, 124, 134, 0.35) 0, transparent 45%),
        radial-gradient(circle at 85% 85%, rgba(59, 130, 246, 0.28) 0, transparent 45%),
        radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.16) 0, transparent 60%);
      animation: meshPulse 14s ease-in-out infinite alternate;
      pointer-events: none; z-index: 0;
    }
    @keyframes meshPulse {
      0%   { transform: scale(1) translate(0, 0); opacity: 0.9; }
      100% { transform: scale(1.05) translate(-10px, 10px); opacity: 1; }
    }

    /* Lưới toạ độ số an ninh */
    .cyber-grid {
      position: fixed; inset: 0;
      background-image: 
        linear-gradient(rgba(56, 225, 240, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(56, 225, 240, 0.04) 1px, transparent 1px);
      background-size: 44px 44px;
      pointer-events: none; z-index: 1;
    }

    /* Ký hiệu bảo mật trôi nổi */
    .float-layer { position: fixed; inset: 0; pointer-events: none; z-index: 1; overflow: hidden; }
    .float-tag {
      position: absolute;
      font-family: var(--font-mono); font-size: 13px; font-weight: 700;
      color: rgba(56, 225, 240, 0.18);
      border: 1px solid rgba(56, 225, 240, 0.12);
      padding: 4px 10px; border-radius: 8px;
      background: rgba(13, 124, 134, 0.05);
      animation: floatUp 24s linear infinite;
    }
    @keyframes floatUp {
      0%   { transform: translateY(108vh) rotate(0deg); opacity: 0; }
      10%  { opacity: 0.4; }
      90%  { opacity: 0.4; }
      100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
    }

    /* ─── DECK CONTAINER ─── */
    .deck-container {
      position: relative; width: 100vw; height: 100vh;
      display: flex; justify-content: center; align-items: center; z-index: 2;
    }

    /* ─── SLIDE FRAME ─── */
    .slide {
      position: absolute;
      width: 95vw; max-width: 1380px;
      height: 88vh; max-height: 870px;
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 24px;
      backdrop-filter: blur(28px);
      box-shadow: 0 38px 85px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.12);
      padding: 26px 42px;
      display: flex; flex-direction: column;
      opacity: 0; pointer-events: none;
      transform: translateX(70px) scale(0.96);
      transition: opacity 0.5s var(--ease-spring), transform 0.55s var(--ease-spring);
    }
    .slide.active {
      opacity: 1; pointer-events: auto;
      transform: translateX(0) scale(1);
    }
    .slide.prev {
      opacity: 0; pointer-events: none;
      transform: translateX(-70px) scale(0.96);
    }

    /* Header của Slide */
    .slide-header {
      display: flex; justify-content: space-between; align-items: center;
      padding-bottom: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.09);
      margin-bottom: 18px; flex-shrink: 0;
    }
    .slide-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 4px 14px; border-radius: 999px;
      font-size: 12px; font-weight: 700; font-family: var(--font-mono);
      letter-spacing: 0.5px; text-transform: uppercase;
      background: rgba(56, 225, 240, 0.12);
      color: var(--cyan);
      border: 1px solid rgba(56, 225, 240, 0.28);
    }
    .slide-title-wrap { display: flex; flex-direction: column; gap: 4px; }
    .slide-title {
      font-size: 24px; font-weight: 800; color: #FFF;
      display: flex; align-items: center; gap: 10px;
      letter-spacing: -0.3px;
    }
    .slide-subtitle { font-size: 13px; color: var(--ink-soft); }

    /* Nội dung Slide có thể cuộn nhẹ nếu màn hình nhỏ */
    .slide-body {
      flex: 1; overflow-y: auto; overflow-x: hidden;
      display: flex; flex-direction: column; gap: 18px;
      padding-right: 6px;
      padding-bottom: 54px;
    }
    .slide-body::-webkit-scrollbar { width: 6px; }
    .slide-body::-webkit-scrollbar-thumb { background: rgba(56, 225, 240, 0.25); border-radius: 4px; }

    /* ─── HỆ THỐNG THẺ & KHỐI TƯƠNG TÁC ─── */
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    .grid-5 { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }

    .card {
      background: rgba(16, 29, 48, 0.82);
      border: 1px solid rgba(56, 225, 240, 0.15);
      border-radius: 18px; padding: 20px;
      transition: all 0.28s ease;
      position: relative; overflow: hidden;
    }
    .card:hover {
      border-color: rgba(56, 225, 240, 0.45);
      transform: translateY(-3px);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
    }
    .card-title {
      font-size: 16px; font-weight: 700; color: #FFF;
      margin-bottom: 8px; display: flex; align-items: center; gap: 8px;
    }
    .card-desc { font-size: 13.5px; color: var(--ink-soft); line-height: 1.6; }

    /* ─── THANH ĐIỀU KHIỂN DƯỚI ĐÁY ─── */
    .control-bar {
      position: fixed; bottom: 18px; left: 50%; transform: translateX(-50%);
      background: rgba(11, 20, 34, 0.92);
      border: 1px solid rgba(56, 225, 240, 0.28);
      border-radius: 999px;
      padding: 8px 22px;
      display: flex; align-items: center; gap: 16px;
      backdrop-filter: blur(20px);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.65);
      z-index: 100;
    }
    .nav-btn {
      width: 40px; height: 40px; border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #FFF; font-size: 16px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.2s ease;
    }
    .nav-btn:hover {
      background: var(--cyan); color: #060D17;
      border-color: var(--cyan);
      transform: scale(1.08);
      box-shadow: 0 0 16px var(--cyan-glow);
    }
    .slide-indicator {
      font-family: var(--font-mono); font-size: 13px; font-weight: 700;
      color: var(--cyan); min-width: 65px; text-align: center;
    }
    .progress-bar-wrap {
      width: 180px; height: 6px; background: rgba(255, 255, 255, 0.12);
      border-radius: 3px; overflow: hidden; cursor: pointer;
    }
    .progress-bar-fill {
      height: 100%; width: 6.66%; background: linear-gradient(90deg, var(--cyan), #3B82F6);
      transition: width 0.3s ease;
    }
    .icon-action-btn {
      background: none; border: none; color: var(--ink-soft);
      font-size: 18px; cursor: pointer; padding: 4px;
      transition: color 0.2s, transform 0.2s;
    }
    .icon-action-btn:hover { color: var(--cyan); transform: scale(1.15); }

    /* ─── MODAL MỤC LỤC & PHÍM TẮT ─── */
    .toc-modal {
      position: fixed; inset: 0; background: rgba(0, 0, 0, 0.78);
      backdrop-filter: blur(12px);
      display: none; align-items: center; justify-content: center;
      z-index: 200;
    }
    .toc-modal.open { display: flex; }
    .toc-content {
      width: 90vw; max-width: 780px; max-height: 85vh;
      background: #0B1422; border: 1px solid var(--border-card);
      border-radius: 20px; padding: 26px 32px;
      display: flex; flex-direction: column; gap: 16px;
      box-shadow: 0 30px 70px rgba(0, 0, 0, 0.9);
    }
    .toc-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
      overflow-y: auto; max-height: 60vh; padding-right: 6px;
    }
    .toc-item {
      padding: 10px 14px; border-radius: 10px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      cursor: pointer; display: flex; align-items: center; gap: 10px;
      font-size: 13.5px; transition: all 0.2s;
    }
    .toc-item:hover, .toc-item.active {
      background: rgba(56, 225, 240, 0.12);
      border-color: var(--cyan); color: var(--cyan);
    }

    /* ─── PHONG CÁCH CHO CÁC TIỆN ÍCH TƯƠNG TÁC ĐẶC BIỆT ─── */
    /* 1. Tin nhắn chat lừa đảo */
    .chat-mock {
      background: #0F172A; border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 18px; padding: 18px; max-width: 520px; margin: 0 auto;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .chat-bubble {
      padding: 12px 16px; border-radius: 16px; font-size: 14px; line-height: 1.5;
      margin-bottom: 12px; position: relative;
    }
    .chat-bubble.other {
      background: #1E293B; color: #F1F5F9; border-bottom-left-radius: 4px;
    }
    .chat-choice-btn {
      width: 100%; text-align: left; padding: 12px 16px; border-radius: 12px;
      background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12);
      color: #FFF; font-size: 13.5px; cursor: pointer; transition: all 0.2s;
      display: flex; align-items: center; justify-content: space-between;
    }
    .chat-choice-btn:hover {
      background: rgba(56, 225, 240, 0.12); border-color: var(--cyan);
    }

    /* 2. Keylogger Lab */
    .keylogger-screen {
      background: #020617; border: 1px solid #1E293B; border-radius: 14px;
      padding: 16px; font-family: var(--font-mono); font-size: 14px; color: #22C55E;
      min-height: 120px; box-shadow: inset 0 2px 10px rgba(0,0,0,0.8);
    }

    /* 3. Windows Security Simulator */
    .win-sec-box {
      background: #181E29; border: 1px solid #2D3748; border-radius: 16px;
      padding: 24px; box-shadow: 0 16px 40px rgba(0,0,0,0.6);
    }
    .scan-mode-btn {
      display: flex; align-items: center; gap: 12px; padding: 14px 18px;
      border-radius: 12px; background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08); cursor: pointer;
      color: #FFF; text-align: left; transition: all 0.2s;
    }
    .scan-mode-btn.selected, .scan-mode-btn:hover {
      background: rgba(56, 225, 240, 0.12); border-color: var(--cyan);
    }

    /* 4. Mini Quiz */
    .quiz-card {
      background: rgba(16, 29, 48, 0.9); border: 1px solid rgba(56, 225, 240, 0.2);
      border-radius: 20px; padding: 24px; display: flex; flex-direction: column; gap: 16px;
    }
    .quiz-opt {
      padding: 13px 18px; border-radius: 12px;
      background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12);
      color: #FFF; cursor: pointer; font-size: 14px; transition: all 0.2s;
      display: flex; align-items: center; gap: 12px;
    }
    .quiz-opt:hover {
      background: rgba(56, 225, 240, 0.12); border-color: var(--cyan);
    }
    .quiz-opt.correct {
      background: rgba(16, 185, 129, 0.25) !important;
      border-color: #10B981 !important; color: #34D399;
    }
    .quiz-opt.wrong {
      background: rgba(239, 68, 68, 0.25) !important;
      border-color: #EF4444 !important; color: #F87171;
    }

    /* 5. Pháo hoa canvas */
    #confetti-canvas {
      position: fixed; inset: 0; pointer-events: none; z-index: 999;
    }
  </style>
</head>
<body>

  <div class="bg-mesh"></div>
  <div class="cyber-grid"></div>
  <canvas id="confetti-canvas"></canvas>

  <!-- Ký hiệu an ninh mạng trôi nổi -->
  <div class="float-layer">
    <div class="float-tag" style="left:8%; animation-delay:0s;">🛡️ Windows Defender</div>
    <div class="float-tag" style="left:24%; animation-delay:5s;">🦠 Virus != Worm</div>
    <div class="float-tag" style="left:45%; animation-delay:2s;">🔒 Ransomware: WannaCry</div>
    <div class="float-tag" style="left:68%; animation-delay:7s;">🎣 Phishing Alert</div>
    <div class="float-tag" style="left:86%; animation-delay:3s;">🔑 2FA Security</div>
    <div class="float-tag" style="left:38%; animation-delay:12s;">🐴 Trojan Horse</div>
    <div class="float-tag" style="left:76%; animation-delay:16s;">⌨️ Keylogger Trap</div>
  </div>

  <div class="deck-container">

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 1: TRANG BÌA BÀI HỌC
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide active" id="slide-1">
      <div class="slide-header">
        <span class="slide-badge">🏫 TRƯỜNG THPT NA RÌ</span>
        <div style="font-size:13px; color:var(--ink-soft); font-family:var(--font-mono); display:flex; align-items:center; gap:8px;">
          <span>CHỦ ĐỀ 2: MẠNG MÁY TÍNH & INTERNET</span>
          <span>·</span>
          <span>SGK KẾT NỐI TRI THỨC</span>
        </div>
      </div>
      <div class="slide-body" style="justify-content:center; align-items:center; text-align:center; padding-bottom:14px;">
        <div style="max-width:960px;">
          <div style="display:inline-flex; align-items:center; gap:8px; padding:5px 16px; border-radius:999px; background:rgba(56,225,240,0.12); border:1px solid rgba(56,225,240,0.3); color:var(--cyan); font-weight:700; font-size:12px; margin-bottom:12px;">
            <span>🛡️ BÀI HỌC SỐ 09 · TIN HỌC LỚP 10</span>
          </div>

          <h1 style="font-size:36px; font-weight:900; letter-spacing:-0.5px; margin-bottom:10px; background:linear-gradient(135deg, #FFFFFF 25%, #38E1F0 70%, #EF4444 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">
            AN TOÀN TRÊN KHÔNG GIAN MẠNG
          </h1>

          <p style="font-size:15px; color:var(--ink-soft); line-height:1.5; max-width:800px; margin:0 auto 18px;">
            Nhận diện 5 nguy cơ tiềm ẩn · Phân biệt bản chất Virus, Sâu máy tính (Worm), Trojan · Thiết lập 4 lá chắn phòng vệ và làm chủ công cụ Windows Defender.
          </p>

          <!-- 3 Trụ cột bài học -->
          <div class="grid-3" style="text-align:left; margin-bottom:20px;">
            <div class="card" style="border-top:3px solid var(--red); padding:14px 16px;">
              <div style="font-size:24px; margin-bottom:6px;">⚠️</div>
              <div style="font-weight:800; font-size:15px; color:#FFF; margin-bottom:4px;">1. Năm Nguy Cơ Tiềm Ẩn</div>
              <div style="font-size:12.5px; color:var(--ink-soft); line-height:1.45;">Tin giả, lừa đảo tài chính, lộ lọt dữ liệu cá nhân, bắt nạt mạng và nghiện Internet.</div>
            </div>

            <div class="card" style="border-top:3px solid var(--amber); padding:14px 16px;">
              <div style="font-size:24px; margin-bottom:6px;">🦠</div>
              <div style="font-weight:800; font-size:15px; color:#FFF; margin-bottom:4px;">2. Tam Giác Mã Độc</div>
              <div style="font-size:12.5px; color:var(--ink-soft); line-height:1.45;">Virus ký sinh tệp chủ, Sâu Worm tự lây qua mạng, Trojan nguỵ trang, Spyware & Ransomware.</div>
            </div>

            <div class="card" style="border-top:3px solid var(--cyan); padding:14px 16px;">
              <div style="font-size:24px; margin-bottom:6px;">🛡️</div>
              <div style="font-weight:800; font-size:15px; color:#FFF; margin-bottom:4px;">3. Bốn Lá Chắn Phòng Vệ</div>
              <div style="font-size:12.5px; color:var(--ink-soft); line-height:1.45;">Nguyên tắc vàng, bảo mật 2FA và mô phỏng 4 chế độ quét diệt của Windows Defender.</div>
            </div>
          </div>

          <div style="display:flex; justify-content:center; gap:14px; align-items:center;">
            <button onclick="goToSlide(2)" class="nav-btn" style="width:auto; padding:10px 28px; font-size:14px; background:var(--cyan); color:#060D17; font-weight:700; gap:8px;">
              <span>Bắt đầu bài học</span>
              <span>→</span>
            </button>
            <button onclick="openTOC()" class="nav-btn" style="width:auto; padding:10px 22px; font-size:13.5px; gap:8px;">
              <span>📑 Mục lục bài học (15 slide)</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 2: KHỞI ĐỘNG - TÌNH HUỐNG THỰC TẾ
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-2">
      <div class="slide-header">
        <span class="slide-badge">⚡ KHỞI ĐỘNG · TÌNH HUỐNG ĐỜI THƯỜNG</span>
        <div class="slide-title-wrap">
          <div class="slide-title">Bẫy Mạo Danh Vay Tiền Gấp Qua Mạng Xã Hội</div>
          <div class="slide-subtitle">Nếu em nhận được tin nhắn này từ nick bạn thân vào tối Chủ nhật, em sẽ làm gì?</div>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2" style="align-items:center;">
          <!-- Mockup Messenger -->
          <div class="chat-mock">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px; padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1);">
              <div style="width:36px; height:36px; border-radius:50%; background:#38E1F0; display:flex; align-items:center; justify-content:center; color:#060D17; font-weight:800;">X</div>
              <div>
                <div style="font-weight:700; font-size:14px;">Xuân Mai (Bạn thân)</div>
                <div style="font-size:11px; color:#22C55E;">● Đang hoạt động</div>
              </div>
            </div>

            <div class="chat-bubble other">
              "Cậu ơi, tớ đang kẹt tiền nộp học phí gấp quá, chuyển giúp tớ 500k vào số tài khoản <strong>987654321 - MBBank</strong> này nhé! Mai lên lớp tớ gửi lại tiền mặt liền nha!"
            </div>
            <div style="font-size:11px; color:var(--ink-soft); margin-bottom:16px; text-align:right;">21:45 · Đã xem</div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <button class="chat-choice-btn" onclick="checkChatChoice(1)">
                <span>1. Chuyển khoản ngay vì xưng hô thân mật đúng như ngày thường</span>
                <span>👉</span>
              </button>
              <button class="chat-choice-btn" onclick="checkChatChoice(2)">
                <span>2. Nhắn tin hỏi lại trên chính nick đó xem có đúng bạn không</span>
                <span>👉</span>
              </button>
              <button class="chat-choice-btn" onclick="checkChatChoice(3)">
                <span>3. Gọi điện thoại trực tiếp hoặc gặp mặt để xác minh trước</span>
                <span>👉</span>
              </button>
            </div>
          </div>

          <!-- Lời giải & Phản hồi tương tác -->
          <div class="card" id="chat-feedback-box" style="min-height:300px; display:flex; flex-direction:column; justify-content:center;">
            <div style="text-align:center; color:var(--ink-soft);">
              <div style="font-size:48px; margin-bottom:12px;">🤔</div>
              <h3 style="color:#FFF; font-size:18px; margin-bottom:8px;">Hãy chọn 1 trong 3 hành động bên trái</h3>
              <p style="font-size:13.5px; line-height:1.6;">Xem phản ứng an toàn số của em ở mức nào!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 3: MỤC TIÊU BÀI HỌC (3 TRỤ CỘT TRI THỨC)
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-3">
      <div class="slide-header">
        <span class="slide-badge">🎯 MỤC TIÊU BÀI HỌC</span>
        <div class="slide-title-wrap">
          <div class="slide-title">3 Trụ Cột Tri Thức Cần Đạt Trong Bài 9</div>
          <div class="slide-subtitle">SGK Tin học 10 (Kết nối tri thức, trang 44)</div>
        </div>
      </div>
      <div class="slide-body" style="justify-content:center;">
        <div class="grid-3">
          <div class="card" style="border-top:4px solid var(--amber);">
            <div style="font-size:36px; margin-bottom:12px;">🚨</div>
            <div class="card-title" style="color:var(--amber);">1. Nhận diện 5 Nguy cơ</div>
            <p class="card-desc">
              Biết và phân tích được <strong>5 nguy cơ chính</strong> khi tham gia Internet: Tin giả, Lừa đảo, Lộ thông tin cá nhân, Bắt nạt mạng và Nghiện mạng.
            </p>
            <div style="margin-top:16px; padding:8px 12px; border-radius:8px; background:rgba(245,166,35,0.1); font-size:12px; color:var(--amber);">
              📌 Giúp tự bảo vệ mình và bạn bè
            </div>
          </div>

          <div class="card" style="border-top:4px solid var(--red);">
            <div style="font-size:36px; margin-bottom:12px;">🦠</div>
            <div class="card-title" style="color:var(--red-light);">2. Phân biệt Malware</div>
            <p class="card-desc">
              Hiểu bản chất phần mềm độc hại (Malware). Phân biệt rạch ròi cơ chế lây lan giữa <strong>Virus (cần tệp chủ)</strong>, <strong>Worm (tự lây qua mạng)</strong> và <strong>Trojan (nguỵ trang)</strong>.
            </p>
            <div style="margin-top:16px; padding:8px 12px; border-radius:8px; background:rgba(239,68,68,0.1); font-size:12px; color:var(--red-light);">
              📌 Trọng tâm các câu hỏi thi trắc nghiệm
            </div>
          </div>

          <div class="card" style="border-top:4px solid var(--green);">
            <div style="font-size:36px; margin-bottom:12px;">🛡️</div>
            <div class="card-title" style="color:var(--green-light);">3. Kỹ năng Phòng thủ</div>
            <p class="card-desc">
              Nắm vững <strong>4 nguyên tắc vàng</strong> bảo vệ dữ liệu, sao lưu định kỳ, bật tường lửa và thực hành thành thạo <strong>Windows Security (Defender)</strong>.
            </p>
            <div style="margin-top:16px; padding:8px 12px; border-radius:8px; background:rgba(16,185,129,0.1); font-size:12px; color:var(--green-light);">
              📌 Ứng dụng ngay trên máy tính cá nhân
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 4: MỤC 1 - NĂM NGUY CƠ TIỀM ẨN TRÊN MẠNG
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-4">
      <div class="slide-header">
        <span class="slide-badge">🚨 MỤC 1 · NGUY CƠ TRÊN KHÔNG GIAN MẠNG</span>
        <div class="slide-title-wrap">
          <div class="slide-title">Năm Cạm Bẫy Hàng Đầu Khi Tham Gia Internet</div>
          <div class="slide-subtitle">Bấm vào từng thẻ nguy cơ để xem chi tiết biểu hiện và biện pháp phòng tránh</div>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-5" id="risk-cards-grid">
          <div class="card" onclick="showRiskDetail(0)" style="cursor:pointer; text-align:center;">
            <div style="font-size:32px; margin-bottom:8px;">📰</div>
            <div style="font-weight:700; font-size:14px; color:#FFF; margin-bottom:6px;">1. Tin giả & Phản văn hoá</div>
            <div style="font-size:12px; color:var(--ink-soft);">Bịa đặt, kích động bạo lực</div>
          </div>
          <div class="card" onclick="showRiskDetail(1)" style="cursor:pointer; text-align:center;">
            <div style="font-size:32px; margin-bottom:8px;">🎣</div>
            <div style="font-weight:700; font-size:14px; color:#FFF; margin-bottom:6px;">2. Lừa đảo trực tuyến</div>
            <div style="font-size:12px; color:var(--ink-soft);">Phishing, web giả mạo</div>
          </div>
          <div class="card" onclick="showRiskDetail(2)" style="cursor:pointer; text-align:center;">
            <div style="font-size:32px; margin-bottom:8px;">🔓</div>
            <div style="font-weight:700; font-size:14px; color:#FFF; margin-bottom:6px;">3. Lộ thông tin cá nhân</div>
            <div style="font-size:12px; color:var(--ink-soft);">CCCD, mật khẩu, tài khoản</div>
          </div>
          <div class="card" onclick="showRiskDetail(3)" style="cursor:pointer; text-align:center;">
            <div style="font-size:32px; margin-bottom:8px;">⚠️</div>
            <div style="font-weight:700; font-size:14px; color:#FFF; margin-bottom:6px;">4. Bắt nạt qua mạng</div>
            <div style="font-size:12px; color:var(--ink-soft);">Cyberbullying, bêu xấu</div>
          </div>
          <div class="card" onclick="showRiskDetail(4)" style="cursor:pointer; text-align:center;">
            <div style="font-size:32px; margin-bottom:8px;">🎮</div>
            <div style="font-weight:700; font-size:14px; color:#FFF; margin-bottom:6px;">5. Nghiện mạng & Game</div>
            <div style="font-size:12px; color:var(--ink-soft);">Kiệt quệ sức khoẻ, sa sút</div>
          </div>
        </div>

        <div class="card" id="risk-detail-display" style="background:rgba(13,23,37,0.9); border-color:var(--cyan); padding:22px;">
          <!-- Chi tiết mặc định -->
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <h3 style="color:var(--cyan); font-size:18px; margin-bottom:8px;" id="risk-det-title">📰 1. Tin giả và thông tin phản văn hoá</h3>
              <p style="font-size:14px; color:#F1F5F9; line-height:1.6;" id="risk-det-desc">
                Thông tin bịa đặt, bóp méo sự thật, mê tín dị đoan, kích động bạo lực hoặc hình ảnh phản cảm. Tiếp nhận tin giả khiến học sinh có nhận thức sai lệch, hoang mang, thậm chí vi phạm pháp luật (Luật An ninh mạng).
              </p>
            </div>
            <div style="background:rgba(56,225,240,0.1); border:1px solid rgba(56,225,240,0.3); border-radius:12px; padding:10px 16px; font-size:13px; color:var(--cyan); min-width:260px;" id="risk-det-tip">
              🛡️ <strong>Kỹ năng phòng ngừa:</strong> Kiểm tra nguồn tin chính thống (báo đài trung ương, cổng thông tin chính phủ), không chia sẻ tin giật gân khi chưa xác thực.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 5: ĐẤU TRƯỜNG PHÂN LOẠI - HÀNH VI NGUY HIỂM VS KỸ NĂNG THÔNG MINH
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-5">
      <div class="slide-header">
        <span class="slide-badge">⚖️ TƯƠNG TÁC THỰC HÀNH · PHÂN LOẠI HÀNH VI</span>
        <div class="slide-title-wrap">
          <div class="slide-title">Hành Vi Nguy Hiểm ❌ Hay Kỹ Năng Số Thông Minh 🛡️?</div>
          <div class="slide-subtitle">Bấm vào từng hành vi để xếp vào cột tương ứng và kiểm tra điểm số</div>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2">
          <!-- Cột Nguy hiểm -->
          <div class="card" style="border-color:rgba(239,68,68,0.3); background:rgba(239,68,68,0.04);">
            <h3 style="color:var(--red-light); font-size:16px; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
              ❌ HÀNH VI NGUY HIỂM (DỄ MẮC BẪY)
            </h3>
            <div id="col-danger" style="display:flex; flex-direction:column; gap:8px; min-height:220px;">
              <!-- Thẻ đã phân vào đây -->
            </div>
          </div>

          <!-- Cột Kỹ năng thông minh -->
          <div class="card" style="border-color:rgba(16,185,129,0.3); background:rgba(16,185,129,0.04);">
            <h3 style="color:var(--green-light); font-size:16px; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
              🛡️ KỸ NĂNG SỐ THÔNG MINH (AN TOÀN)
            </h3>
            <div id="col-safe" style="display:flex; flex-direction:column; gap:8px; min-height:220px;">
              <!-- Thẻ đã phân vào đây -->
            </div>
          </div>
        </div>

        <!-- Hàng các thẻ hành vi chờ phân loại -->
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:12px 18px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span style="font-size:13px; font-weight:700; color:var(--cyan);">HÀNH VI CHƯA PHÂN LOẠI (Nhấp để chọn cột):</span>
            <button onclick="resetSortLab()" style="background:rgba(255,255,255,0.08); border:none; color:var(--ink-soft); padding:4px 12px; border-radius:6px; font-size:12px; cursor:pointer;">
              🔄 Làm lại
            </button>
          </div>
          <div id="sort-items-pool" style="display:flex; flex-wrap:wrap; gap:8px;">
            <!-- Render bằng JavaScript -->
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 6: MỤC 2 - MALWARE LÀ GÌ?
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-6">
      <div class="slide-header">
        <span class="slide-badge">🦠 MỤC 2 · PHẦN MỀM ĐỘC HẠI (MALWARE)</span>
        <div class="slide-title-wrap">
          <div class="slide-title">Malware Là Gì? Bản Chất & Cây Phả Hệ Mã Độc</div>
          <div class="slide-subtitle">Malware = Malicious Software (Phần mềm độc hại)</div>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2" style="align-items:stretch;">
          <!-- Khái niệm cốt lõi -->
          <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div class="card-title" style="color:var(--cyan); font-size:18px;">
                🔑 Khái Niệm Quyết Định Chuẩn SGK
              </div>
              <p style="font-size:14.5px; color:#F1F5F9; line-height:1.7; margin-top:10px;">
                <strong>Phần mềm độc hại (Malware)</strong> là các phần mềm được viết ra với 
                <span style="color:#EF4444; font-weight:800; background:rgba(239,68,68,0.15); padding:2px 6px; border-radius:4px;">Ý ĐỒ XẤU</span>, 
                nhằm gây hại cho người dùng, chiếm quyền điều khiển hoặc phá hoại hệ thống máy tính.
              </p>

              <div style="margin-top:18px; padding:14px; border-radius:12px; background:rgba(245,166,35,0.1); border-left:4px solid var(--amber);">
                <strong style="color:var(--amber);">⚠️ Điểm mấu chốt:</strong>
                <p style="font-size:13px; color:var(--ink-soft); margin-top:4px;">
                  Điều quyết định một phần mềm có phải là mã độc hay không chính là <strong>mục đích của người tạo ra nó</strong>, không phụ thuộc vào kích thước hay giao diện của phần mềm!
                </p>
              </div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:18px;">
              <div style="background:rgba(255,255,255,0.03); padding:10px; border-radius:10px; font-size:12.5px;">
                💥 <strong>Phá hoại:</strong> Xóa file, làm hỏng hệ điều hành, chậm máy.
              </div>
              <div style="background:rgba(255,255,255,0.03); padding:10px; border-radius:10px; font-size:12.5px;">
                🕵️ <strong>Đánh cắp:</strong> Trộm tài khoản, mật khẩu, thẻ ngân hàng.
              </div>
            </div>
          </div>

          <!-- Cây phân nhánh Malware -->
          <div class="card" style="background:#09121E;">
            <div class="card-title" style="color:var(--purple-light);">
              🌳 Cây Phả Hệ Các Loại Mã Độc Phổ Biến
            </div>
            <div style="display:flex; flex-direction:column; gap:10px; margin-top:12px;">
              <div style="background:rgba(239,68,68,0.12); border:1px solid rgba(239,68,68,0.3); border-radius:10px; padding:12px; display:flex; align-items:center; gap:12px;">
                <span style="font-size:24px;">🦠</span>
                <div>
                  <strong style="color:#F87171;">Virus máy tính:</strong>
                  <span style="font-size:13px; color:var(--ink-soft);"> Ký sinh bắt buộc vào tệp chủ (.exe, .docx).</span>
                </div>
              </div>

              <div style="background:rgba(59,130,246,0.12); border:1px solid rgba(59,130,246,0.3); border-radius:10px; padding:12px; display:flex; align-items:center; gap:12px;">
                <span style="font-size:24px;">🐛</span>
                <div>
                  <strong style="color:#60A5FA;">Worm (Sâu máy tính):</strong>
                  <span style="font-size:13px; color:var(--ink-soft);"> Phần mềm hoàn chỉnh, tự nhân bản lây qua Internet.</span>
                </div>
              </div>

              <div style="background:rgba(245,166,35,0.12); border:1px solid rgba(245,166,35,0.3); border-radius:10px; padding:12px; display:flex; align-items:center; gap:12px;">
                <span style="font-size:24px;">🐴</span>
                <div>
                  <strong style="color:var(--amber);">Trojan (Ngựa thành Troa):</strong>
                  <span style="font-size:13px; color:var(--ink-soft);"> Nguỵ trang phần mềm hữu ích lừa người dùng cài.</span>
                </div>
              </div>

              <div style="background:rgba(139,92,246,0.12); border:1px solid rgba(139,92,246,0.3); border-radius:10px; padding:12px; display:flex; align-items:center; gap:12px;">
                <span style="font-size:24px;">🔒</span>
                <div>
                  <strong style="color:var(--purple-light);">Biến thể nguy hiểm:</strong>
                  <span style="font-size:13px; color:var(--ink-soft);"> Spyware, Keylogger, Ransomware (tống tiền), Backdoor.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 7: TAM GIÁC MÃ ĐỘC - VIRUS VS WORM VS TROJAN
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-7">
      <div class="slide-header">
        <span class="slide-badge">⚡ TRỌNG TÂM · SO SÁNH 3 LOẠI MÃ ĐỘC</span>
        <div class="slide-title-wrap">
          <div class="slide-title">Tam Giác Mã Độc: Virus vs Worm (Sâu) vs Trojan</div>
          <div class="slide-subtitle">Nắm chắc 3 đặc điểm phân biệt then chốt không bao giờ bị bẫy đề thi</div>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-3">
          <!-- Cột 1: Virus -->
          <div class="card" style="border-color:rgba(239,68,68,0.35);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <span style="font-size:32px;">🦠</span>
              <span style="font-size:11px; font-family:var(--font-mono); color:#F87171; background:rgba(239,68,68,0.15); padding:3px 8px; border-radius:6px;">CẦN VẬT CHỦ</span>
            </div>
            <h3 style="color:#F87171; font-size:17px; margin-bottom:8px;">Virus Máy Tính</h3>
            <ul style="font-size:13px; color:var(--ink-soft); line-height:1.7; padding-left:18px;">
              <li><strong>Không phải</strong> phần mềm hoàn chỉnh, chỉ là đoạn mã độc.</li>
              <li><strong>Bắt buộc ký sinh</strong> vào tệp chủ (.exe, .docx macro).</li>
              <li>Chỉ lây lan <strong>khi tệp chủ được người dùng mở/chạy</strong>.</li>
              <li>Lây qua sao chép tệp (USB, gửi file, tải về).</li>
            </ul>
          </div>

          <!-- Cột 2: Worm -->
          <div class="card" style="border-color:rgba(59,130,246,0.35);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <span style="font-size:32px;">🐛</span>
              <span style="font-size:11px; font-family:var(--font-mono); color:#60A5FA; background:rgba(59,130,246,0.15); padding:3px 8px; border-radius:6px;">TỰ NHÂN BẢN</span>
            </div>
            <h3 style="color:#60A5FA; font-size:17px; margin-bottom:8px;">Sâu Máy Tính (Worm)</h3>
            <ul style="font-size:13px; color:var(--ink-soft); line-height:1.7; padding-left:18px;">
              <li><strong>Là phần mềm hoàn chỉnh</strong>, độc lập.</li>
              <li><strong>Không cần tệp chủ</strong>, tự nhân bản chính nó.</li>
              <li>Tự động khai thác lỗ hổng mạng để <strong>tự lây lan qua Internet/Email</strong>.</li>
              <li>Tốc độ lây nhiễm chóng mặt <strong>không cần người dùng mở file</strong>.</li>
            </ul>
          </div>

          <!-- Cột 3: Trojan -->
          <div class="card" style="border-color:rgba(245,166,35,0.35);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <span style="font-size:32px;">🐴</span>
              <span style="font-size:11px; font-family:var(--font-mono); color:var(--amber); background:rgba(245,166,35,0.15); padding:3px 8px; border-radius:6px;">NGUỴ TRANG</span>
            </div>
            <h3 style="color:var(--amber); font-size:17px; margin-bottom:8px;">Trojan Horse</h3>
            <ul style="font-size:13px; color:var(--ink-soft); line-height:1.7; padding-left:18px;">
              <li>Lấy cảm hứng từ <strong>thần thoại Hy Lạp</strong>.</li>
              <li><strong>Nguỵ trang</strong> vỏ bọc phần mềm hữu ích (game crack, tiện ích).</li>
              <li>Lừa người dùng <strong>tự tay tải về và cài đặt</strong>.</li>
              <li><strong>KHÔNG tự nhân bản</strong>; mở cửa sau (backdoor) trộm mật khẩu.</li>
            </ul>
          </div>
        </div>

        <!-- Khung mô phỏng chuyển động trực quan -->
        <div class="card" style="background:#09121E; padding:16px 20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span style="font-size:13.5px; font-weight:700; color:var(--cyan);">🎬 PHÒNG THÍ NGHIỆM MÔ PHỎNG CƠ CHẾ LÂY LAN:</span>
            <div style="display:flex; gap:10px;">
              <button onclick="runVirusSim()" class="nav-btn" style="width:auto; height:32px; font-size:12px; padding:0 14px; border-radius:8px;">
                Mô phỏng Virus 🦠
              </button>
              <button onclick="runWormSim()" class="nav-btn" style="width:auto; height:32px; font-size:12px; padding:0 14px; border-radius:8px;">
                Mô phỏng Sâu Worm 🐛
              </button>
            </div>
          </div>
          <div id="sim-canvas-box" style="height:90px; background:rgba(0,0,0,0.4); border-radius:10px; display:flex; align-items:center; justify-content:center; color:var(--ink-soft); font-size:13px; font-family:var(--font-mono);">
            Nhấn vào nút bên trên để xem mô phỏng hoạt họa trực quan!
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 8: CÁC BIẾN THỂ MÃ ĐỘC NGUY HIỂM & KEYLOGGER LAB
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-8">
      <div class="slide-header">
        <span class="slide-badge">⚠️ BIẾN THỂ NGUY HIỂM · THỰC HÀNH ẢO</span>
        <div class="slide-title-wrap">
          <div class="slide-title">Spyware, Keylogger & Ransomware (Mã Độc Tống Tiền)</div>
          <div class="slide-subtitle">Trải nghiệm gõ phím bắt trộm mật khẩu thời gian thực trong phòng thí nghiệm Keylogger</div>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2">
          <!-- 4 Biến thể -->
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div class="card" style="padding:14px;">
              <div class="card-title" style="color:#60A5FA; font-size:15px;">🕵️ Spyware (Phần mềm gián điệp)</div>
              <p class="card-desc" style="font-size:13px;">Âm thầm theo dõi hành vi lướt web, lục lọi tài liệu, hình ảnh riêng tư và gửi dữ liệu đánh cắp được ra máy chủ kẻ tấn công.</p>
            </div>
            <div class="card" style="padding:14px;">
              <div class="card-title" style="color:#F87171; font-size:15px;">⌨️ Keylogger (Phần mềm ghi phím)</div>
              <p class="card-desc" style="font-size:13px;">Ghi lại toàn bộ thao tác bàn phím và chuột nhằm đánh cắp mật khẩu đăng nhập, mã OTP, số thẻ tín dụng.</p>
            </div>
            <div class="card" style="padding:14px;">
              <div class="card-title" style="color:var(--amber); font-size:15px;">🔒 Ransomware (Mã độc tống tiền)</div>
              <p class="card-desc" style="font-size:13px;">Mã hoá toàn bộ dữ liệu trên ổ cứng, đổi đuôi tệp thành .locked và đòi tiền chuộc bằng tiền điện tử (Bitcoin).</p>
            </div>
          </div>

          <!-- Keylogger Live Lab -->
          <div class="card" style="background:#09121E; border-color:var(--red);">
            <div class="card-title" style="color:#F87171; justify-content:space-between;">
              <span>💀 PHÒNG THÍ NGHIỆM KEYLOGGER ẢO</span>
              <span style="font-size:11px; font-family:var(--font-mono); color:var(--red-light);">[HACKER TERMINAL]</span>
            </div>
            <p style="font-size:13px; color:var(--ink-soft); margin-bottom:12px;">
              Hãy gõ thử bất kỳ mật khẩu nào vào ô của người dùng dưới đây:
            </p>

            <div style="margin-bottom:12px;">
              <label style="font-size:12px; color:var(--cyan); display:block; margin-bottom:4px;">Ô nhập mật khẩu của người dùng (ẩn dấu chấm •••):</label>
              <input type="password" id="user-pw-input" placeholder="Nhập thử mật khẩu vào đây..." oninput="onKeyloggerType(this.value)"
                     style="width:100%; padding:10px 14px; border-radius:8px; background:#1E293B; border:1px solid #334155; color:#FFF; font-family:var(--font-mono); font-size:15px; outline:none;">
            </div>

            <label style="font-size:12px; color:#F87171; display:block; margin-bottom:4px;">Màn hình Hacker nhận được trong thời gian thực:</label>
            <div class="keylogger-screen" id="hacker-log-display">
              > [Keylogger Active - Listening keystrokes...]<br>
              > Đang chờ người dùng gõ phím...
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 9: DÒNG THỜI GIAN ĐẠI DỊCH SÂU MÁY TÍNH
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-9">
      <div class="slide-header">
        <span class="slide-badge">⏳ LỊCH SỬ · ĐẠI DỊCH MÃ ĐỘC TOÀN CẦU</span>
        <div class="slide-title-wrap">
          <div class="slide-title">Ba Đại Dịch Sâu Máy Tính Đi Vào Lịch Sử Internet</div>
          <div class="slide-subtitle">SGK Tin học 10 (Mục Em có biết?, trang 47)</div>
        </div>
      </div>
      <div class="slide-body" style="justify-content:center;">
        <div class="grid-3">
          <!-- 1999: Melissa -->
          <div class="card" style="border-top:4px solid #38E1F0;">
            <div style="font-size:13px; font-family:var(--font-mono); color:var(--cyan); font-weight:700; margin-bottom:6px;">NĂM 1999</div>
            <div class="card-title" style="color:#FFF;">Sâu Melissa (Lây qua Email)</div>
            <div style="font-size:40px; margin:10px 0;">📧</div>
            <p class="card-desc">
              Ngụy trang dưới dạng tệp văn bản Word đính kèm trong thư điện tử. Khi mở ra, nó tự động gửi thư tới <strong>50 địa chỉ đầu tiên</strong> trong danh bạ Outlook. Thiệt hại toàn cầu ước tính hơn <strong>1 tỉ USD</strong>.
            </p>
          </div>

          <!-- 2001: Code Red -->
          <div class="card" style="border-top:4px solid #F5A623;">
            <div style="font-size:13px; font-family:var(--font-mono); color:var(--amber); font-weight:700; margin-bottom:6px;">NĂM 2001</div>
            <div class="card-title" style="color:#FFF;">Sâu Code Red (Tấn công Server)</div>
            <div style="font-size:40px; margin:10px 0;">🌐</div>
            <p class="card-desc">
              Lợi dụng lỗ hổng bảo mật của Windows IIS để chiếm quyền điều khiển các máy chủ web toàn cầu. Gây nghẽn mạng Internet diện rộng và thiệt hại khoảng <strong>2 tỉ USD chỉ trong 10 ngày</strong>.
            </p>
          </div>

          <!-- 2017: WannaCry -->
          <div class="card" style="border-top:4px solid #EF4444;">
            <div style="font-size:13px; font-family:var(--font-mono); color:#F87171; font-weight:700; margin-bottom:6px;">NĂM 2017</div>
            <div class="card-title" style="color:#FFF;">Sâu WannaCry (Ransomware)</div>
            <div style="font-size:40px; margin:10px 0;">💰</div>
            <p class="card-desc">
              Tự quét qua mạng để lây nhiễm hàng trăm nghìn máy tính ở <strong>150 quốc gia</strong>. Tự động mã hoá toàn bộ ổ cứng và đòi tiền chuộc bằng <strong>Bitcoin</strong>. Làm tê liệt hàng loạt bệnh viện tại Anh.
            </p>
          </div>
        </div>

        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:12px 18px; text-align:center; font-size:13px; color:var(--ink-soft);">
          💡 <strong>Bài học rút ra:</strong> Tốc độ lây lan của Worm (Sâu) hoàn toàn độc lập và tự động qua mạng — Cần luôn cập nhật bản vá hệ điều hành!
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 10: MỤC 3 - BỐN NGUYÊN TẮC VÀNG PHÒNG CHỐNG
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-10">
      <div class="slide-header">
        <span class="slide-badge">🛡️ MỤC 3 · PHÒNG CHỐNG MÃ ĐỘC</span>
        <div class="slide-title-wrap">
          <div class="slide-title">Bốn Lá Chắn Thép Bảo Vệ An Toàn Số</div>
          <div class="slide-subtitle">SGK Tin học 10 (Trang 48)</div>
        </div>
      </div>
      <div class="slide-body" style="justify-content:center;">
        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:16px;">
          <!-- 1. Phần mềm bản quyền -->
          <div class="card" style="display:flex; gap:16px; align-items:flex-start;">
            <div style="font-size:36px; padding:8px; border-radius:12px; background:rgba(239,68,68,0.12);">🚫</div>
            <div>
              <div class="card-title" style="color:#F87171;">1. Nói Không Với Phần Mềm Lậu (Crack)</div>
              <p class="card-desc">Tuyệt đối không tải các bản bẻ khoá, keygen từ trang web lạ. Hầu hết các bản bẻ khoá đều bị kẻ xấu nhúng sẵn Trojan hoặc mã độc gián điệp.</p>
            </div>
          </div>

          <!-- 2. Windows Update -->
          <div class="card" style="display:flex; gap:16px; align-items:flex-start;">
            <div style="font-size:36px; padding:8px; border-radius:12px; background:rgba(59,130,246,0.12);">🔄</div>
            <div>
              <div class="card-title" style="color:#60A5FA;">2. Cập Nhật Hệ Điều Hành Thường Xuyên</div>
              <p class="card-desc">Luôn bật tính năng tự động cập nhật (Windows Update) để nhận các bản vá lỗ hổng bảo mật, ngăn chặn sâu máy tính (Worm) tự xâm nhập qua mạng.</p>
            </div>
          </div>

          <!-- 3. Sao lưu đa tầng -->
          <div class="card" style="display:flex; gap:16px; align-items:flex-start;">
            <div style="font-size:36px; padding:8px; border-radius:12px; background:rgba(245,166,35,0.12);">💾</div>
            <div>
              <div class="card-title" style="color:var(--amber);">3. Sao Lưu Dữ Liệu Định Kỳ (Backup)</div>
              <p class="card-desc">Lưu trữ bản sao dữ liệu quan trọng lên đám mây (Google Drive, OneDrive) hoặc ổ cứng ngoài để không bao giờ sợ bị tống tiền (Ransomware).</p>
            </div>
          </div>

          <!-- 4. Antivirus & Firewall -->
          <div class="card" style="display:flex; gap:16px; align-items:flex-start;">
            <div style="font-size:36px; padding:8px; border-radius:12px; background:rgba(16,185,129,0.12);">🛡️</div>
            <div>
              <div class="card-title" style="color:var(--green-light);">4. Bật Tường Lửa (Firewall) & Antivirus</div>
              <p class="card-desc">Sử dụng phần mềm phòng chống mã độc như Windows Defender, Kaspersky, BKAV... và luôn bật tường lửa để lọc luồng dữ liệu độc hại.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 11: PHÒNG THÍ NGHIỆM ẢO WINDOWS DEFENDER
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-11">
      <div class="slide-header">
        <span class="slide-badge">🖥️ THỰC HÀNH · WINDOWS SECURITY (DEFENDER)</span>
        <div class="slide-title-wrap">
          <div class="slide-title">Mô Phỏng 4 Chế Độ Quét Của Windows Defender</div>
          <div class="slide-subtitle">SGK Tin học 10 (Trang 48–49)</div>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2">
          <!-- Bảng chọn chế độ -->
          <div class="win-sec-box">
            <h3 style="color:#FFF; font-size:16px; margin-bottom:14px; display:flex; align-items:center; gap:8px;">
              🛡️ Windows Security · Scan Options
            </h3>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <div class="scan-mode-btn selected" id="opt-quick" onclick="selectScanMode('quick')">
                <input type="radio" name="scan-opt" checked>
                <div>
                  <div style="font-weight:700; font-size:13.5px;">Quick scan (Quét nhanh)</div>
                  <div style="font-size:11.5px; color:var(--ink-soft);">Quét các thư mục hệ thống xung yếu hay bị mã độc nhắm tới.</div>
                </div>
              </div>

              <div class="scan-mode-btn" id="opt-full" onclick="selectScanMode('full')">
                <input type="radio" name="scan-opt">
                <div>
                  <div style="font-weight:700; font-size:13.5px;">Full scan (Quét toàn bộ)</div>
                  <div style="font-size:11.5px; color:var(--ink-soft);">Quét toàn bộ tệp tin và tiến trình trên tất cả ổ đĩa (mất nhiều thời gian).</div>
                </div>
              </div>

              <div class="scan-mode-btn" id="opt-custom" onclick="selectScanMode('custom')">
                <input type="radio" name="scan-opt">
                <div>
                  <div style="font-weight:700; font-size:13.5px;">Custom scan (Quét tuỳ chọn)</div>
                  <div style="font-size:11.5px; color:var(--ink-soft);">Chỉ định chính xác một thư mục hoặc ổ đĩa USB cần kiểm tra.</div>
                </div>
              </div>

              <div class="scan-mode-btn" id="opt-offline" onclick="selectScanMode('offline')">
                <input type="radio" name="scan-opt">
                <div>
                  <div style="font-weight:700; font-size:13.5px;">Microsoft Defender Offline scan</div>
                  <div style="font-size:11.5px; color:var(--ink-soft);">Khởi động lại máy để diệt tận gốc các rootkit cứng đầu.</div>
                </div>
              </div>
            </div>

            <button onclick="startDefenderScan()" id="btn-start-scan" class="nav-btn" style="width:100%; height:42px; border-radius:10px; margin-top:14px; background:var(--cyan); color:#060D17; font-weight:700; font-size:14px;">
              Bắt đầu quét ngay (Scan now) 🔍
            </button>
          </div>

          <!-- Màn hình trạng thái quét -->
          <div class="win-sec-box" style="display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
            <div id="scan-radar-icon" style="font-size:56px; margin-bottom:12px;">🛡️</div>
            <h3 id="scan-status-text" style="color:#FFF; font-size:18px; margin-bottom:8px;">Trạng thái: Sẵn sàng quét</h3>
            <p id="scan-status-sub" style="font-size:13px; color:var(--ink-soft); max-width:320px; line-height:1.5;">
              Chọn chế độ quét bên trái và nhấn Scan now để kiểm tra an ninh hệ thống.
            </p>

            <div id="scan-progress-wrap" style="width:80%; height:8px; background:rgba(255,255,255,0.1); border-radius:4px; margin-top:16px; overflow:hidden; display:none;">
              <div id="scan-progress-bar" style="height:100%; width:0%; background:linear-gradient(90deg, var(--cyan), #22C55E); transition:width 0.2s;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 12: CẢNH BÁO BẪY THI & MẸO NHỚ NHANH
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-12">
      <div class="slide-header">
        <span class="slide-badge">💡 MẸO NHỚ & CẢNH BÁO BẪY ĐỀ THI</span>
        <div class="slide-title-wrap">
          <div class="slide-title">4 Bẫy Trắc Nghiệm Học Sinh Rất Dễ Nhầm Lẫn</div>
          <div class="slide-subtitle">Tránh mất điểm oan trong các bài kiểm tra định kỳ và tốt nghiệp</div>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2">
          <!-- Bẫy 1 -->
          <div class="card" style="border-left:4px solid #EF4444;">
            <div style="font-size:12px; font-weight:700; color:#F87171; margin-bottom:4px;">⚠️ BẪY 1: KHẢ NĂNG TỰ LÂY QUA MẠNG</div>
            <div style="font-size:13.5px; color:#F1F5F9; line-height:1.6;">
              <span style="color:#EF4444; font-weight:700;">❌ Học sinh hay nghĩ:</span> "Virus có thể tự bò qua mạng Internet sang máy khác mà không cần ai mở file."<br>
              <span style="color:#34D399; font-weight:700;">✅ Bản chất đúng:</span> <strong>SAI!</strong> Đó là <strong>Worm (Sâu)</strong>. Virus BẮT BUỘC phải có tệp chủ và chỉ lây khi tệp chủ được kích hoạt!
            </div>
          </div>

          <!-- Bẫy 2 -->
          <div class="card" style="border-left:4px solid #F5A623;">
            <div style="font-size:12px; font-weight:700; color:var(--amber); margin-bottom:4px;">⚠️ BẪY 2: TROJAN CÓ TỰ NHÂN BẢN KHÔNG?</div>
            <div style="font-size:13.5px; color:#F1F5F9; line-height:1.6;">
              <span style="color:#EF4444; font-weight:700;">❌ Học sinh hay nghĩ:</span> "Trojan tự sao chép nhân bản ra hàng loạt file trên ổ cứng."<br>
              <span style="color:#34D399; font-weight:700;">✅ Bản chất đúng:</span> <strong>Trojan KHÔNG tự nhân bản</strong>. Nó chỉ nguỵ trang để lừa người dùng tự cài đặt và mở cửa sau (backdoor)!
            </div>
          </div>

          <!-- Bẫy 3 -->
          <div class="card" style="border-left:4px solid #3B82F6;">
            <div style="font-size:12px; font-weight:700; color:#60A5FA; margin-bottom:4px;">⚠️ BẪY 3: PHẦN MỀM DIỆT VIRUS BẢO VỆ 100%?</div>
            <div style="font-size:13.5px; color:#F1F5F9; line-height:1.6;">
              <span style="color:#EF4444; font-weight:700;">❌ Học sinh hay nghĩ:</span> "Cứ cài phần mềm diệt virus là thỏa sức bấm vào mọi đường link lạ."<br>
              <span style="color:#34D399; font-weight:700;">✅ Bản chất đúng:</span> Phần mềm chỉ bảo vệ được các mẫu độc hại đã biết. <strong>Ý thức cảnh giác</strong> của con người mới là lá chắn tối quan trọng!
            </div>
          </div>

          <!-- Bẫy 4 -->
          <div class="card" style="border-left:4px solid #10B981;">
            <div style="font-size:12px; font-weight:700; color:var(--green-light); margin-bottom:4px;">⚠️ BẪY 4: CẮM USB CHỌN QUÉT GÌ?</div>
            <div style="font-size:13.5px; color:#F1F5F9; line-height:1.6;">
              <span style="color:#EF4444; font-weight:700;">❌ Đề hỏi:</span> "Mượn USB của bạn cắm vào máy tính, muốn quét riêng USB chọn chế độ nào?"<br>
              <span style="color:#34D399; font-weight:700;">✅ Đáp án chuẩn:</span> Phải chọn <strong>Custom scan (Quét tuỳ chọn)</strong> để chỉ định ổ đĩa USB, không chọn Full scan!
            </div>
          </div>
        </div>

        <!-- Khẩu quyết ghi nhớ -->
        <div style="background:rgba(56,225,240,0.08); border:1px solid rgba(56,225,240,0.25); border-radius:12px; padding:12px 20px; text-align:center;">
          <span style="font-size:15px; font-weight:800; color:var(--cyan);">
            📢 KHẨU QUYẾT: "Virus ký sinh tệp chủ · Sâu bò độc lập qua mạng · Trojan lừa gạt áo mới!"
          </span>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 13: ĐẤU TRƯỜNG CHINH PHỤC MINI QUIZ (5 CÂU)
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-13">
      <div class="slide-header">
        <span class="slide-badge">🏆 ĐẤU TRƯỜNG MINI QUIZ · 5 CÂU HỎI NHANH</span>
        <div class="slide-title-wrap">
          <div class="slide-title" id="quiz-question-title">Câu 1/5: Khái niệm phân biệt Virus & Worm</div>
          <div class="slide-subtitle">Bấm vào phương án em chọn để kiểm tra độ chính xác</div>
        </div>
      </div>
      <div class="slide-body">
        <div class="quiz-card">
          <div id="quiz-question-text" style="font-size:16px; font-weight:700; color:#FFF; line-height:1.6;">
            Đang tải câu hỏi...
          </div>

          <div id="quiz-options-box" style="display:flex; flex-direction:column; gap:10px;">
            <!-- Options được render bằng JS -->
          </div>

          <div id="quiz-feedback-box" style="display:none; padding:12px 16px; border-radius:10px; font-size:13.5px; line-height:1.6;">
            <!-- Lời giải -->
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
            <span style="font-family:var(--font-mono); font-size:13px; color:var(--cyan);" id="quiz-score-badge">Điểm số: 0 / 5</span>
            <button id="btn-next-quiz" onclick="nextQuizQuestion()" class="nav-btn" style="width:auto; height:36px; padding:0 20px; border-radius:8px; display:none; background:var(--cyan); color:#060D17; font-weight:700; font-size:13px;">
              Câu tiếp theo ➜
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 14: SƠ ĐỒ TƯ DUY TỔNG KẾT TOÀN BÀI
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-14">
      <div class="slide-header">
        <span class="slide-badge">🗺️ SƠ ĐỒ TƯ DUY (MINDMAP)</span>
        <div class="slide-title-wrap">
          <div class="slide-title">Bản Đồ Kiến Thức Tổng Thể Bài 9</div>
          <div class="slide-subtitle">Hệ thống hóa toàn bộ kiến thức theo 3 nhánh trực quan</div>
        </div>
      </div>
      <div class="slide-body" style="justify-content:center;">
        <div style="display:grid; grid-template-columns:1.2fr 1.5fr 1.3fr; gap:16px;">
          <!-- Nhánh 1 -->
          <div class="card" style="border-top:4px solid var(--amber);">
            <div style="font-weight:800; font-size:15px; color:var(--amber); margin-bottom:10px;">
              🚨 5 NGUY CƠ TRÊN MẠNG
            </div>
            <ul style="font-size:13px; color:var(--ink-soft); line-height:1.8; padding-left:18px;">
              <li>1. Tin giả & phản văn hoá</li>
              <li>2. Lừa đảo trực tuyến (Phishing)</li>
              <li>3. Lộ thông tin cá nhân/CCCD</li>
              <li>4. Bắt nạt mạng (Cyberbullying)</li>
              <li>5. Nghiện mạng & trò chơi</li>
            </ul>
          </div>

          <!-- Nhánh 2 -->
          <div class="card" style="border-top:4px solid var(--red);">
            <div style="font-weight:800; font-size:15px; color:var(--red-light); margin-bottom:10px;">
              🦠 MALWARE (PHẦN MỀM ĐỘC HẠI)
            </div>
            <ul style="font-size:13px; color:var(--ink-soft); line-height:1.8; padding-left:18px;">
              <li><strong>Virus:</strong> Ký sinh tệp chủ, lây khi chạy</li>
              <li><strong>Worm:</strong> Độc lập, tự nhân bản qua mạng</li>
              <li><strong>Trojan:</strong> Nguỵ trang phần mềm có ích</li>
              <li><strong>Biến thể:</strong> Spyware, Keylogger, Ransomware</li>
            </ul>
          </div>

          <!-- Nhánh 3 -->
          <div class="card" style="border-top:4px solid var(--green);">
            <div style="font-weight:800; font-size:15px; color:var(--green-light); margin-bottom:10px;">
              🛡️ BIỆN PHÁP BẢO VỆ
            </div>
            <ul style="font-size:13px; color:var(--ink-soft); line-height:1.8; padding-left:18px;">
              <li>Không dùng phần mềm lậu (crack)</li>
              <li>Cập nhật hệ điều hành (Update)</li>
              <li>Sao lưu dữ liệu định kỳ (Cloud/USB)</li>
              <li><strong>Windows Defender:</strong> Quick, Full, Custom scan</li>
            </ul>
          </div>
        </div>

        <div style="text-align:center; margin-top:8px;">
          <div style="display:inline-block; padding:10px 24px; border-radius:999px; background:rgba(56,225,240,0.12); border:1px solid rgba(56,225,240,0.3); font-size:14px; color:var(--cyan); font-weight:700;">
            🔑 CÔNG THỨC VÀNG: "5 NGUY CƠ — 3 LOẠI MÃ ĐỘC — 4 LÁ CHẮN BẢO VỆ"
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════════════════════════════════
         SLIDE 15: TỔNG KẾT & NHIỆM VỤ VỀ NHÀ
         ══════════════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-15">
      <div class="slide-header">
        <span class="slide-badge">🎉 KẾT THÚC BÀI HỌC</span>
        <div class="slide-title-wrap">
          <div class="slide-title">Chúc Mừng Em Đã Hoàn Thành Bài 9!</div>
          <div class="slide-subtitle">Trở thành công dân số thông thái, an toàn và có trách nhiệm</div>
        </div>
      </div>
      <div class="slide-body" style="justify-content:center; align-items:center; text-align:center; gap:20px;">
        <div style="font-size:64px; animation:bounce 2s infinite;">🛡️✨</div>

        <h2 style="font-size:28px; font-weight:900; color:#FFF;">
          HÃY LÀ NGƯỜI SỬ DỤNG MẠNG THÔNG MINH & TỈNH TÁO!
        </h2>

        <div class="card" style="max-width:680px; text-align:left; background:rgba(16,29,48,0.8);">
          <div class="card-title" style="color:var(--cyan);">📝 NHIỆM VỤ THỰC HÀNH VỀ NHÀ:</div>
          <ol style="font-size:14px; color:var(--ink-soft); line-height:1.8; padding-left:22px;">
            <li>Mở ứng dụng <strong>Windows Security</strong> trên máy tính của em hoặc gia đình.</li>
            <li>Thực hiện một lần quét nhanh (<strong>Quick scan</strong>) và ghi lại số lượng tệp đã quét.</li>
            <li>Bật xác thực hai bước (<strong>2FA</strong>) cho tài khoản mạng xã hội hoặc email cá nhân.</li>
            <li>Vào phần <strong>Luyện trắc nghiệm Bài 9</strong> trên trang web để củng cố 100% kiến thức!</li>
          </ol>
        </div>

        <div style="display:flex; gap:16px; justify-content:center;">
          <button onclick="goToSlide(1)" class="nav-btn" style="width:auto; padding:12px 26px; border-radius:999px; gap:8px;">
            ↺ Xem lại từ đầu
          </button>
          <button onclick="launchConfetti()" class="nav-btn" style="width:auto; padding:12px 28px; border-radius:999px; background:var(--cyan); color:#060D17; font-weight:700; gap:8px;">
            🎉 Pháo hoa chúc mừng
          </button>
        </div>
      </div>
    </section>

  </div>

  <!-- ─── THANH ĐIỀU KHIỂN DƯỚI ĐÁY ─── -->
  <div class="control-bar">
    <button class="nav-btn" onclick="prevSlide()" title="Slide trước (←)">←</button>
    
    <div class="slide-indicator" id="slide-num-indicator">1 / 15</div>

    <div class="progress-bar-wrap" onclick="seekSlide(event)" title="Chuyển nhanh slide">
      <div class="progress-bar-fill" id="slide-progress-fill"></div>
    </div>

    <button class="nav-btn" onclick="nextSlide()" title="Slide tiếp (→)">→</button>

    <div style="width:1px; height:20px; background:rgba(255,255,255,0.15);"></div>

    <button class="icon-action-btn" onclick="openTOC()" title="Mục lục bài giảng (T)">📑</button>
    <button class="icon-action-btn" onclick="toggleAudio()" id="btn-audio-toggle" title="Bật/Tắt âm thanh (M)">🔊</button>
    <button class="icon-action-btn" onclick="toggleFullScreen()" title="Toàn màn hình (F)">⛶</button>
  </div>

  <!-- ─── MODAL MỤC LỤC ─── -->
  <div class="toc-modal" id="toc-modal" onclick="closeTOC(event)">
    <div class="toc-content" onclick="event.stopPropagation()">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3 style="color:var(--cyan); font-size:18px; font-weight:800;">📑 MỤC LỤC BÀI GIẢNG ĐIỆN TỬ BÀI 9</h3>
        <button onclick="closeTOC()" style="background:none; border:none; color:var(--ink-soft); font-size:22px; cursor:pointer;">✕</button>
      </div>
      <div class="toc-grid" id="toc-grid-container">
        <!-- Render bằng JavaScript -->
      </div>
    </div>
  </div>

  <script>
    /* ─── HỆ THỐNG ÂM THANH WEB AUDIO TỰ TẠO SỐNG ĐỘNG ─── */
    let audioCtx = null;
    let isSoundOn = true;

    function getAudio() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    function playSound(type) {
      if (!isSoundOn) return;
      try {
        const ctx = getAudio();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        const t = ctx.currentTime;

        if (type === 'slide') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(320, t);
          osc.frequency.exponentialRampToValueAtTime(540, t + 0.12);
          gain.gain.setValueAtTime(0.08, t);
          gain.gain.linearRampToValueAtTime(0, t + 0.12);
          osc.start(t); osc.stop(t + 0.12);
        } else if (type === 'correct') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(523.25, t); // C5
          osc.frequency.setValueAtTime(659.25, t + 0.08); // E5
          osc.frequency.setValueAtTime(783.99, t + 0.16); // G5
          gain.gain.setValueAtTime(0.18, t);
          gain.gain.linearRampToValueAtTime(0, t + 0.35);
          osc.start(t); osc.stop(t + 0.35);
        } else if (type === 'wrong') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(220, t);
          osc.frequency.linearRampToValueAtTime(140, t + 0.25);
          gain.gain.setValueAtTime(0.15, t);
          gain.gain.linearRampToValueAtTime(0, t + 0.25);
          osc.start(t); osc.stop(t + 0.25);
        } else if (type === 'radar') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(800, t);
          osc.frequency.exponentialRampToValueAtTime(300, t + 0.18);
          gain.gain.setValueAtTime(0.1, t);
          gain.gain.linearRampToValueAtTime(0, t + 0.18);
          osc.start(t); osc.stop(t + 0.18);
        } else if (type === 'key') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(450 + Math.random() * 100, t);
          gain.gain.setValueAtTime(0.04, t);
          gain.gain.linearRampToValueAtTime(0, t + 0.04);
          osc.start(t); osc.stop(t + 0.04);
        }
      } catch (e) {}
    }

    function toggleAudio() {
      isSoundOn = !isSoundOn;
      document.getElementById('btn-audio-toggle').innerText = isSoundOn ? '🔊' : '🔇';
    }

    /* ─── QUẢN LÝ CHUYỂN SLIDE ─── */
    const totalSlides = 15;
    let currentSlide = 1;

    const slideTitles = [
      "1. Trang bìa bài giảng",
      "2. Khởi động · Bẫy vay tiền",
      "3. Mục tiêu bài học",
      "4. Mục 1: 5 Nguy cơ trên mạng",
      "5. Đấu trường phân loại hành vi",
      "6. Mục 2: Khái niệm Malware",
      "7. Tam giác: Virus - Worm - Trojan",
      "8. Biến thể & Keylogger Lab",
      "9. Dòng thời gian 3 đại dịch sâu",
      "10. Mục 3: 4 Nguyên tắc phòng thủ",
      "11. Thực hành Windows Defender",
      "12. Mẹo nhớ & Bẫy thi trắc nghiệm",
      "13. Đấu trường Mini Quiz 5 câu",
      "14. Sơ đồ tư duy (Mindmap)",
      "15. Tổng kết & Nhiệm vụ về nhà"
    ];

    function updateSlideUI() {
      for (let i = 1; i <= totalSlides; i++) {
        const el = document.getElementById('slide-' + i);
        if (!el) continue;
        el.classList.remove('active', 'prev');
        if (i === currentSlide) {
          el.classList.add('active');
        } else if (i < currentSlide) {
          el.classList.add('prev');
        }
      }

      document.getElementById('slide-num-indicator').innerText = currentSlide + ' / ' + totalSlides;
      const pct = (currentSlide / totalSlides) * 100;
      document.getElementById('slide-progress-fill').style.width = pct + '%';
    }

    function goToSlide(n) {
      if (n < 1 || n > totalSlides || n === currentSlide) return;
      currentSlide = n;
      playSound('slide');
      updateSlideUI();
    }

    function nextSlide() {
      if (currentSlide < totalSlides) {
        goToSlide(currentSlide + 1);
      }
    }

    function prevSlide() {
      if (currentSlide > 1) {
        goToSlide(currentSlide - 1);
      }
    }

    function seekSlide(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = clickX / rect.width;
      const target = Math.max(1, Math.min(totalSlides, Math.ceil(ratio * totalSlides)));
      goToSlide(target);
    }

    /* Bàn phím điều khiển */
    window.addEventListener('keydown', (e) => {
      if (['ArrowRight', 'Space', 'PageDown'].includes(e.code)) {
        e.preventDefault(); nextSlide();
      } else if (['ArrowLeft', 'PageUp'].includes(e.code)) {
        e.preventDefault(); prevSlide();
      } else if (e.code === 'KeyF') {
        toggleFullScreen();
      } else if (e.code === 'KeyM') {
        toggleAudio();
      } else if (e.code === 'KeyT') {
        openTOC();
      }
    });

    function toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }

    /* ─── MỤC LỤC MODAL ─── */
    function openTOC() {
      const container = document.getElementById('toc-grid-container');
      container.innerHTML = slideTitles.map((t, idx) => {
        const n = idx + 1;
        const active = n === currentSlide ? 'active' : '';
        return \`<div class="toc-item \${active}" onclick="goToSlide(\${n}); closeTOC();">
          <span style="font-family:var(--font-mono); font-weight:700;">\${n < 10 ? '0' + n : n}.</span>
          <span>\${t.split('. ')[1] || t}</span>
        </div>\`;
      }).join('');
      document.getElementById('toc-modal').classList.add('open');
    }
    function closeTOC() {
      document.getElementById('toc-modal').classList.remove('open');
    }

    /* ─── SLIDE 2: PHẢN HỒI CHAT TÌNH HUỐNG ─── */
    function checkChatChoice(choice) {
      const box = document.getElementById('chat-feedback-box');
      if (choice === 1) {
        playSound('wrong');
        box.innerHTML = \`
          <div style="text-align:center;">
            <div style="font-size:48px; margin-bottom:8px;">❌</div>
            <h3 style="color:#EF4444; font-size:18px; margin-bottom:8px;">BẠN ĐÃ SẬP BẪY LỪA ĐẢO!</h3>
            <p style="font-size:13.5px; color:#F1F5F9; line-height:1.6; margin-bottom:12px;">
              Kẻ xấu khi chiếm đoạt tài khoản đã đọc toàn bộ tin nhắn cũ để bắt chước chuẩn xác cách xưng hô thân mật. Chuyển tiền ngay sẽ khiến em mất trắng 500.000đ!
            </p>
            <div style="font-size:12px; color:var(--amber); background:rgba(245,166,35,0.1); padding:8px; border-radius:8px;">
              ⚠️ Luôn cảnh giác với bất kỳ yêu cầu chuyển tiền gấp nào trên mạng!
            </div>
          </div>\`;
      } else if (choice === 2) {
        playSound('wrong');
        box.innerHTML = \`
          <div style="text-align:center;">
            <div style="font-size:48px; margin-bottom:8px;">⚠️</div>
            <h3 style="color:var(--amber); font-size:18px; margin-bottom:8px;">VẪN CHƯA THỰC SỰ AN TOÀN!</h3>
            <p style="font-size:13.5px; color:#F1F5F9; line-height:1.6; margin-bottom:12px;">
              Kẻ lừa đảo hiện đang nắm quyền điều khiển nick Facebook/Zalo đó. Khi em nhắn hỏi lại, chính kẻ lừa đảo sẽ trả lời khẳng định "Đúng là tớ đây mà!" để tiếp tục giăng bẫy em!
            </p>
            <div style="font-size:12px; color:var(--cyan); background:rgba(56,225,240,0.1); padding:8px; border-radius:8px;">
              👉 Cần liên hệ qua một kênh độc lập khác ngoài tin nhắn chat!
            </div>
          </div>\`;
      } else if (choice === 3) {
        playSound('correct');
        launchConfetti();
        box.innerHTML = \`
          <div style="text-align:center;">
            <div style="font-size:48px; margin-bottom:8px;">🎉🛡️</div>
            <h3 style="color:#10B981; font-size:18px; margin-bottom:8px;">CHÍNH XÁC TUYỆT ĐỐI!</h3>
            <p style="font-size:13.5px; color:#F1F5F9; line-height:1.6; margin-bottom:12px;">
              Khi gọi điện thoại trực tiếp, bạn của em sẽ ngớ người: <em>"Tớ có mượn tiền đâu, nick của tớ vừa bị hack mất rồi!"</em>. Nhờ sự tỉnh táo kiểm chứng qua kênh độc lập, em đã bảo vệ an toàn túi tiền của mình!
            </p>
            <div style="font-size:12px; color:#34D399; background:rgba(16,185,129,0.1); padding:8px; border-radius:8px;">
              🏆 Em xứng đáng nhận danh hiệu: "Hiệp sĩ An toàn số"!
            </div>
          </div>\`;
      }
    }

    /* ─── SLIDE 4: CHI TIẾT 5 NGUY CƠ ─── */
    const riskData = [
      {
        title: "📰 1. Tin giả và thông tin phản văn hoá",
        desc: "Thông tin bịa đặt, bóp méo sự thật, mê tín dị đoan, kích động bạo lực hoặc hình ảnh phản cảm. Tiếp nhận tin giả khiến học sinh có nhận thức sai lệch, hoang mang, thậm chí vi phạm pháp luật (Luật An ninh mạng).",
        tip: "🛡️ Kỹ năng phòng ngừa: Kiểm tra nguồn tin chính thống (báo đài trung ương, cổng thông tin chính phủ), không like/share tin giật gân khi chưa kiểm chứng."
      },
      {
        title: "🎣 2. Lừa đảo trực tuyến (Phishing)",
        desc: "Kẻ xấu tạo trang web mạo danh ngân hàng/trường học, gửi link thông báo 'nhận học bổng', 'trúng iPhone', hoặc mượn nick người quen nhờ chuyển tiền nhằm chiếm đoạt tài sản.",
        tip: "🛡️ Kỹ năng phòng ngừa: Không nhập mật khẩu/mã OTP vào các đường link lạ gửi qua Messenger, Zalo hay Email."
      },
      {
        title: "🔓 3. Lộ thông tin cá nhân",
        desc: "Lộ họ tên đầy đủ, ngày sinh, số CCCD, thẻ học sinh, địa chỉ nhà, vị trí thời gian thực. Kẻ xấu có thể dùng để mạo danh vay tiền tín dụng đen hoặc tống tiền đe dọa.",
        tip: "🛡️ Kỹ năng phòng ngừa: Tuyệt đối không chụp ảnh CCCD, vé máy bay/tàu xe lên mạng xã hội; cài đặt chế độ bạn bè thay vì công khai."
      },
      {
        title: "⚠️ 4. Bắt nạt trên mạng (Cyberbullying)",
        desc: "Xỉ vả, bêu xấu, cô lập nhóm, ghép ảnh xúc phạm danh dự, đe doạ tung ảnh riêng tư gây khủng hoảng tâm lý trầm trọng cho nạn nhân.",
        tip: "🛡️ Kỹ năng phòng ngừa: Không đôi co với kẻ khiêu khích; chụp ảnh màn hình lưu bằng chứng và báo ngay với cha mẹ, thầy cô giáo."
      },
      {
        title: "🎮 5. Nghiện mạng & trò chơi trực tuyến",
        desc: "Dành quá nhiều thời gian chơi game, lướt mạng xã hội; dẫn đến xao nhãng học tập, mất ngủ, kiệt quệ sức khoẻ thể chất và tinh thần.",
        tip: "🛡️ Kỹ năng phòng ngừa: Giới hạn thời gian dùng máy tính dưới 2 tiếng/ngày, tích cực tham gia các hoạt động thể thao ngoài trời."
      }
    ];

    function showRiskDetail(idx) {
      playSound('slide');
      const d = riskData[idx];
      document.getElementById('risk-det-title').innerText = d.title;
      document.getElementById('risk-det-desc').innerText = d.desc;
      document.getElementById('risk-det-tip').innerText = d.tip;
    }

    /* ─── SLIDE 5: ĐẤU TRƯỜNG PHÂN LOẠI HÀNH VI ─── */
    const sortItems = [
      { id: 1, text: "Bấm vào link giục 'Đổi mật khẩu gấp' gửi từ email lạ", type: "danger" },
      { id: 2, text: "Bật xác thực 2 bước (2FA) cho toàn bộ tài khoản email & mạng xã hội", type: "safe" },
      { id: 3, text: "Công khai số CCCD và vé máy bay/tàu xe lên Facebook", type: "danger" },
      { id: 4, text: "Gọi điện thoại trực tiếp xác minh khi bạn nhắn mượn tiền", type: "safe" },
      { id: 5, text: "Chụp màn hình lưu bằng chứng & báo thầy cô/cha mẹ khi bị đe doạ", type: "safe" },
      { id: 6, text: "Tranh cãi gay gắt, chửi nhau với kẻ khiêu khích trên mạng", type: "danger" }
    ];
    let currentPool = [...sortItems];

    function renderSortLab() {
      const pool = document.getElementById('sort-items-pool');
      if (currentPool.length === 0) {
        pool.innerHTML = '<span style="color:#34D399; font-weight:700;">🎉 ĐÃ PHÂN LOẠI XONG TOÀN BỘ 6 HÀNH VI!</span>';
        playSound('correct');
        launchConfetti();
        return;
      }
      pool.innerHTML = currentPool.map(item => \`
        <div style="background:#1E293B; border:1px solid #334155; padding:8px 14px; border-radius:10px; font-size:13px; color:#FFF; display:flex; align-items:center; gap:10px;">
          <span>\${item.text}</span>
          <button onclick="assignSortItem(\${item.id}, 'danger')" style="background:rgba(239,68,68,0.2); border:1px solid #EF4444; color:#F87171; border-radius:6px; padding:3px 8px; cursor:pointer; font-size:11px;">❌ Xếp Nguy hiểm</button>
          <button onclick="assignSortItem(\${item.id}, 'safe')" style="background:rgba(16,185,129,0.2); border:1px solid #10B981; color:#34D399; border-radius:6px; padding:3px 8px; cursor:pointer; font-size:11px;">🛡️ Xếp An toàn</button>
        </div>
      \`).join('');
    }

    function assignSortItem(id, target) {
      const item = currentPool.find(x => x.id === id);
      if (!item) return;

      if (item.type === target) {
        playSound('correct');
        currentPool = currentPool.filter(x => x.id !== id);
        const col = document.getElementById(target === 'danger' ? 'col-danger' : 'col-safe');
        const badge = document.createElement('div');
        badge.style = "background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); padding:8px 12px; border-radius:8px; font-size:12.5px; color:#F1F5F9;";
        badge.innerText = item.text;
        col.appendChild(badge);
        renderSortLab();
      } else {
        playSound('wrong');
        alert("⚠️ Chưa chính xác! Hãy đọc kỹ tính chất của hành vi này nhé.");
      }
    }

    function resetSortLab() {
      currentPool = [...sortItems];
      document.getElementById('col-danger').innerHTML = '';
      document.getElementById('col-safe').innerHTML = '';
      renderSortLab();
    }

    /* ─── SLIDE 7: MÔ PHỎNG HOẠT HOẠ VIRUS & WORM ─── */
    function runVirusSim() {
      playSound('slide');
      const box = document.getElementById('sim-canvas-box');
      box.innerHTML = \`
        <div style="display:flex; align-items:center; gap:14px; animation:fadeIn 0.4s;">
          <div style="border:1px solid #EF4444; background:rgba(239,68,68,0.15); padding:6px 12px; border-radius:8px;">
            📄 Tai_Lieu.docx <span style="color:#F87171;">[Có mã Virus bám ngủ đông 💤]</span>
          </div>
          <span style="font-size:20px;">➜</span>
          <div style="color:var(--amber);">Người dùng nháy đúp mở file 🖱️</div>
          <span style="font-size:20px;">➜</span>
          <div style="border:1px solid #EF4444; background:#EF4444; color:#000; font-weight:800; padding:6px 12px; border-radius:8px; animation:pulse 0.5s infinite;">
            ⚠️ Virus kích hoạt & lây sang file .exe khác!
          </div>
        </div>\`;
    }

    function runWormSim() {
      playSound('slide');
      const box = document.getElementById('sim-canvas-box');
      box.innerHTML = \`
        <div style="display:flex; align-items:center; gap:12px; animation:fadeIn 0.4s;">
          <div style="border:1px solid #60A5FA; background:rgba(59,130,246,0.15); padding:6px 12px; border-radius:8px;">
            💻 Máy A [Bị nhiễm Sâu]
          </div>
          <span style="color:#60A5FA; font-weight:700;">══ Tự quét mạng Internet ══►</span>
          <div style="border:1px solid #60A5FA; background:rgba(59,130,246,0.15); padding:6px 12px; border-radius:8px;">
            🖥️ Máy B [Lây nhiễm tự động!]
          </div>
          <span style="color:#60A5FA; font-weight:700;">══►</span>
          <div style="border:1px solid #60A5FA; background:rgba(59,130,246,0.15); padding:6px 12px; border-radius:8px;">
            🏢 Máy C, D, E... [Không cần ai mở file]
          </div>
        </div>\`;
    }

    /* ─── SLIDE 8: KEYLOGGER LAB ─── */
    function onKeyloggerType(val) {
      playSound('key');
      const screen = document.getElementById('hacker-log-display');
      if (!val) {
        screen.innerHTML = "> [Keylogger Active - Listening keystrokes...]<br>> Đang chờ người dùng gõ phím...";
      } else {
        screen.innerHTML = \`
          > [KEYSTROKE CAPTURED]: <span style="color:#FFF; background:#DC2626; padding:2px 6px; border-radius:4px; font-weight:800;">"\${val}"</span><br>
          > Độ dài: \${val.length} ký tự<br>
          > Trạng thái: Đã gửi gói tin giải mã về IP: 194.26.29.112 (Server Hacker) 🚨
        \`;
      }
    }

    /* ─── SLIDE 11: WINDOWS DEFENDER SIMULATOR ─── */
    let selectedMode = 'quick';
    function selectScanMode(mode) {
      playSound('slide');
      selectedMode = mode;
      document.querySelectorAll('.scan-mode-btn').forEach(btn => btn.classList.remove('selected'));
      document.getElementById('opt-' + mode).classList.add('selected');
    }

    function startDefenderScan() {
      const radar = document.getElementById('scan-radar-icon');
      const text = document.getElementById('scan-status-text');
      const sub = document.getElementById('scan-status-sub');
      const wrap = document.getElementById('scan-progress-wrap');
      const bar = document.getElementById('scan-progress-bar');
      const btn = document.getElementById('btn-start-scan');

      btn.disabled = true;
      btn.innerText = "Đang tiến hành quét...";
      radar.innerText = "🔄";
      text.innerText = "Đang quét hệ thống (" + selectedMode.toUpperCase() + " SCAN)...";
      sub.innerText = "Đang kiểm tra các tệp tin hệ thống và tiến trình bộ nhớ...";
      wrap.style.display = "block";
      bar.style.width = "0%";

      let p = 0;
      playSound('radar');
      const interval = setInterval(() => {
        p += 20;
        bar.style.width = p + '%';
        if (p % 40 === 0) playSound('radar');

        if (p >= 100) {
          clearInterval(interval);
          btn.disabled = false;
          btn.innerText = "Quét lại 🔍";
          radar.innerText = "✅";
          text.innerText = "Quét hoàn tất: Không tìm thấy mối đe doạ!";
          sub.innerText = "Đã quét 42.850 tệp tin. Máy tính của bạn đang được bảo vệ an toàn tối đa.";
          playSound('correct');
          launchConfetti();
        }
      }, 350);
    }

    /* ─── SLIDE 13: MINI QUIZ 5 CÂU ─── */
    const quizList = [
      {
        q: "Đặc điểm nào sau đây phân biệt CHÍNH XÁC nhất giữa Virus và Worm (Sâu máy tính)?",
        opts: [
          "A. Virus chỉ hoạt động trên máy tính, còn Worm chỉ chạy trên điện thoại",
          "B. Virus lây lan tự động qua mạng, còn Worm bắt buộc phải cắm USB mới lây",
          "C. Virus cần gắn vào tệp chủ để lây nhiễm, còn Worm tự nhân bản lây qua mạng",
          "D. Virus là phần mềm độc lập hoàn chỉnh, còn Worm chỉ là đoạn mã ngắn"
        ],
        ans: 2,
        exp: "Chính xác! Virus bắt buộc phải ký sinh vào tệp chủ (.exe, .docx) và chỉ lây khi mở file; trong khi Worm là phần mềm hoàn chỉnh tự lây lan độc lập qua Internet."
      },
      {
        q: "Phần mềm độc hại Trojan lấy tên từ thần thoại nào và có phương thức hoạt động đặc trưng là gì?",
        opts: [
          "A. Thần thoại Bắc Âu; đóng băng toàn bộ màn hình máy tính",
          "B. Thần thoại Hy Lạp; nguỵ trang dưới vỏ bọc phần mềm hữu ích để lừa người dùng cài đặt",
          "C. Thần thoại La Mã; tự sao chép nhân bản ra hàng ngàn bản copy",
          "D. Thần thoại Ai Cập; xoá sạch hệ điều hành ngay khi cắm chuột"
        ],
        ans: 1,
        exp: "Chính xác! Lấy cảm hứng từ 'Ngựa gỗ thành Troa' của Hy Lạp, Trojan nguỵ trang phần mềm có ích (game crack, app xem phim) để người dùng tự cài đặt vào máy."
      },
      {
        q: "Đại dịch sâu WannaCry năm 2017 lây nhiễm 150 quốc gia thuộc loại mã độc nào sau đây?",
        opts: [
          "A. Adware (phần mềm quảng cáo)",
          "B. Ransomware (mã độc tống tiền đòi Bitcoin)",
          "C. Spyware chỉ theo dõi lịch sử lướt web",
          "D. Phần mềm diệt virus giả mạo"
        ],
        ans: 1,
        exp: "Chính xác! WannaCry là sâu máy tính mang mã độc tống tiền (Ransomware), tự mã hoá toàn bộ ổ cứng và đòi tiền chuộc bằng Bitcoin."
      },
      {
        q: "Khi bạn vừa cắm một chiếc USB mượn vào máy tính, chế độ quét nào trong Windows Defender là phù hợp và tiết kiệm thời gian nhất?",
        opts: [
          "A. Quick scan (Quét nhanh)",
          "B. Full scan (Quét toàn bộ ổ cứng)",
          "C. Custom scan (Quét tuỳ chọn ổ đĩa USB)",
          "D. Microsoft Defender Offline scan"
        ],
        ans: 2,
        exp: "Chính xác! Custom scan cho phép chỉ định chính xác ổ đĩa USB cần kiểm tra mà không tốn công quét lại toàn bộ ổ cứng của máy."
      },
      {
        q: "Khi tài khoản mạng xã hội của bạn thân nhắn tin mượn 500k gấp, hành vi nào sau đây là AN TOÀN NHẤT?",
        opts: [
          "A. Chuyển tiền ngay vì có cách xưng hô thân mật đúng ngày thường",
          "B. Nhắn tin hỏi lại trên chính nick đó xem có đúng bạn không",
          "C. Gọi điện thoại trực tiếp hoặc gặp mặt để xác minh trước khi chuyển",
          "D. Gửi mật khẩu tài khoản ngân hàng của mình cho bạn tự vào rút"
        ],
        ans: 2,
        exp: "Chính xác! Kẻ lừa đảo có thể đã chiếm đoạt nick; chỉ có liên hệ qua kênh độc lập (gọi điện thoại trực tiếp hoặc gặp mặt) mới là cách xác minh an toàn nhất!"
      }
    ];

    let currentQuizIdx = 0;
    let quizScore = 0;
    let answeredCurrent = false;

    function renderQuiz() {
      const q = quizList[currentQuizIdx];
      answeredCurrent = false;
      document.getElementById('quiz-question-title').innerText = \`Câu \${currentQuizIdx + 1}/5: \${q.q.substring(0, 38)}...\`;
      document.getElementById('quiz-question-text').innerText = \`Câu \${currentQuizIdx + 1}: \${q.q}\`;
      document.getElementById('quiz-feedback-box').style.display = 'none';
      document.getElementById('btn-next-quiz').style.display = 'none';

      const optBox = document.getElementById('quiz-options-box');
      optBox.innerHTML = q.opts.map((opt, i) => \`
        <div class="quiz-opt" onclick="chooseQuizAnswer(\${i})">
          <span style="font-weight:700; font-family:var(--font-mono);">\${String.fromCharCode(65 + i)}.</span>
          <span>\${opt.substring(3)}</span>
        </div>
      \`).join('');
    }

    function chooseQuizAnswer(idx) {
      if (answeredCurrent) return;
      answeredCurrent = true;
      const q = quizList[currentQuizIdx];
      const optEls = document.querySelectorAll('.quiz-opt');

      if (idx === q.ans) {
        playSound('correct');
        quizScore++;
        optEls[idx].classList.add('correct');
      } else {
        playSound('wrong');
        optEls[idx].classList.add('wrong');
        optEls[q.ans].classList.add('correct');
      }

      document.getElementById('quiz-score-badge').innerText = \`Điểm số: \${quizScore} / 5\`;
      const fb = document.getElementById('quiz-feedback-box');
      fb.style.display = 'block';
      fb.style.background = idx === q.ans ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)';
      fb.style.border = idx === q.ans ? '1px solid #10B981' : '1px solid #EF4444';
      fb.style.color = idx === q.ans ? '#34D399' : '#F87171';
      fb.innerHTML = (idx === q.ans ? '🎉 <strong>ĐÚNG RỒI!</strong> ' : '❌ <strong>CHƯA CHÍNH XÁC!</strong> ') + q.exp;

      const nextBtn = document.getElementById('btn-next-quiz');
      nextBtn.style.display = 'block';
      if (currentQuizIdx === quizList.length - 1) {
        nextBtn.innerText = 'Xem tổng kết 🎉';
      }
    }

    function nextQuizQuestion() {
      if (currentQuizIdx < quizList.length - 1) {
        currentQuizIdx++;
        renderQuiz();
      } else {
        playSound('correct');
        launchConfetti();
        alert(\`Chúc mừng em đã hoàn thành Mini Quiz với kết quả: \${quizScore}/5 câu đúng! \${quizScore >= 4 ? 'Xuất sắc đạt danh hiệu Hiệp sĩ An toàn số!' : 'Hãy xem lại bài giảng để đạt 5/5 nhé!'}\`);
        goToSlide(14);
      }
    }

    /* ─── PHÁO HOA ĂN MỪNG CANVAS CONFETTI ─── */
    function launchConfetti() {
      const canvas = document.getElementById('confetti-canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const colors = ['#38E1F0', '#10B981', '#F5A623', '#EF4444', '#8B5CF6', '#FFFFFF'];

      for (let i = 0; i < 90; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height * 0.45,
          vx: (Math.random() - 0.5) * 14,
          vy: (Math.random() - 0.7) * 14,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          vrot: (Math.random() - 0.5) * 10,
          alpha: 1
        });
      }

      function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.25; // Trọng lực
          p.rotation += p.vrot;
          p.alpha -= 0.012;
          if (p.alpha > 0) {
            alive = true;
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
          }
        });
        if (alive) {
          requestAnimationFrame(render);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
      render();
    }

    // Khởi tạo các bài thực hành
    window.addEventListener('DOMContentLoaded', () => {
      renderSortLab();
      renderQuiz();
    });
  </script>
</body>
</html>
`;

// Đảm bảo thư mục lưu trữ tồn tại
const publicDir = path.resolve('public');
const scriptsDir = path.resolve('scripts');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(scriptsDir)) fs.mkdirSync(scriptsDir, { recursive: true });

// Ghi file ra cả public/ và root/
const publicPath = path.join(publicDir, 'bai-09-trinh-chieu.html');
const rootPath = path.resolve('bai-09-trinh-chieu.html');

fs.writeFileSync(publicPath, htmlContent, 'utf-8');
fs.writeFileSync(rootPath, htmlContent, 'utf-8');

console.log('✅ Đã tạo thành công Slide Trình Chiếu Bài 9:');
console.log(' - ' + publicPath);
console.log(' - ' + rootPath);
