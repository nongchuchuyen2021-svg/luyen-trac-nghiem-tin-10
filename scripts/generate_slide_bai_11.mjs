import fs from 'node:fs';
import path from 'node:path';

const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bài 11: Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền — Tin học 10 · THPT Na Rì</title>
  <style>
    /* ─── RESET & HỆ THỐNG BIẾN MÀU SẮC CHUẨN TIN 12 (THEME PHÁP LUẬT & ĐẠO ĐỨC SỐ) ─── */
    :root {
      --bg: #070B18;
      --bg-card: rgba(13, 20, 42, 0.94);
      --border-card: rgba(139, 92, 246, 0.22);
      --ink: #FFFFFF;
      --ink-soft: #94A3B8;
      --purple: #8B5CF6;
      --purple-light: #C4B5FD;
      --purple-glow: rgba(139, 92, 246, 0.38);
      --cyan: #38BDF8;
      --cyan-light: #7DD3FC;
      --cyan-glow: rgba(56, 189, 248, 0.35);
      --amber: #F59E0B;
      --amber-light: #FCD34D;
      --emerald: #10B981;
      --emerald-light: #6EE7B7;
      --rose: #EF4444;
      --rose-light: #FCA5A5;
      --blue: #3B82F6;
      --radius-lg: 24px;
      --radius-md: 16px;
      --radius-sm: 10px;
      --font-main: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      --font-mono: 'Consolas', 'Fira Code', 'Courier New', monospace;
      --transition-slide: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: var(--font-main);
      background-color: var(--bg);
      color: var(--ink);
      overflow: hidden;
      width: 100vw;
      height: 100vh;
      user-select: none;
      -webkit-font-smoothing: antialiased;
    }

    /* ─── NỀN GRADIENT VŨ TRỤ SỐ ĐỘNG VỚI HẠT TRÔI NỔI ─── */
    .bg-mesh {
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: radial-gradient(circle at 18% 22%, rgba(139, 92, 246, 0.3) 0%, transparent 45%),
                  radial-gradient(circle at 82% 78%, rgba(56, 189, 248, 0.22) 0%, transparent 45%),
                  radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.16) 0%, transparent 60%),
                  radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.16) 0%, transparent 40%);
      z-index: 0;
      pointer-events: none;
      animation: meshPulse 14s ease-in-out infinite alternate;
    }

    @keyframes meshPulse {
      0% { transform: scale(1) translate(0, 0); opacity: 0.9; }
      100% { transform: scale(1.06) translate(-10px, 10px); opacity: 1; }
    }

    /* Lưới toạ độ số */
    .cyber-grid {
      position: fixed; inset: 0;
      background-image: 
        linear-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px);
      background-size: 44px 44px;
      pointer-events: none; z-index: 1;
    }

    /* Ký hiệu Pháp luật & Bản quyền trôi lơ lửng */
    .floating-symbols {
      position: fixed; inset: 0;
      pointer-events: none; z-index: 1;
      overflow: hidden;
    }
    .float-tag {
      position: absolute;
      font-family: var(--font-mono); font-size: 13px; font-weight: 700;
      color: rgba(196, 181, 253, 0.24);
      border: 1px solid rgba(139, 92, 246, 0.18);
      padding: 4px 12px; border-radius: 999px;
      background: rgba(20, 15, 45, 0.4);
      animation: floatUp 22s linear infinite;
    }
    @keyframes floatUp {
      0%   { transform: translateY(105vh) rotate(0deg); opacity: 0; }
      10%  { opacity: 0.5; }
      90%  { opacity: 0.5; }
      100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
    }

    /* ─── CONTAINER TRÌNH CHIẾU ─── */
    .deck-container {
      position: relative; width: 100vw; height: 100vh;
      display: flex; justify-content: center; align-items: center; z-index: 2;
    }

    /* ─── KHUNG MỖI SLIDE (CĂN VỪA VẶN 88VH KHÔNG TRÀN CHUẨN TIN 12) ─── */
    .slide {
      position: absolute;
      width: 95vw; max-width: 1360px;
      height: 88vh; max-height: 860px;
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: var(--radius-lg);
      backdrop-filter: blur(28px);
      -webkit-backdrop-filter: blur(28px);
      box-shadow: 0 35px 80px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.12);
      padding: 24px 38px 28px 38px;
      display: flex; flex-direction: column;
      opacity: 0; pointer-events: none;
      transform: translateX(70px) scale(0.96);
      transition: var(--transition-slide);
      overflow-y: auto;
    }
    .slide::-webkit-scrollbar { width: 6px; }
    .slide::-webkit-scrollbar-thumb { background: rgba(139, 92, 246, 0.28); border-radius: 4px; }
    .slide.active { opacity: 1; pointer-events: auto; transform: translateX(0) scale(1); z-index: 3; }
    .slide.prev   { opacity: 0; pointer-events: none; transform: translateX(-70px) scale(0.96); }

    /* ─── HEADER MỖI SLIDE ─── */
    .slide-header {
      display: flex; justify-content: space-between; align-items: flex-start;
      margin-bottom: 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 10px; flex-shrink: 0;
    }
    .slide-badge {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 4px 13px; border-radius: 20px;
      font-size: 12px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
      background: rgba(139, 92, 246, 0.2); color: var(--purple-light);
      border: 1px solid rgba(139, 92, 246, 0.35); margin-bottom: 5px;
    }
    .slide-badge.cyan   { background: rgba(56, 189, 248, 0.2);  color: var(--cyan); border-color: rgba(56, 189, 248, 0.35); }
    .slide-badge.amber  { background: rgba(245, 158, 11, 0.22); color: var(--amber-light); border-color: rgba(245, 158, 11, 0.35); }
    .slide-badge.emerald{ background: rgba(16, 185, 129, 0.22); color: var(--emerald-light); border-color: rgba(16, 185, 129, 0.35); }
    .slide-badge.rose   { background: rgba(239, 68, 68, 0.22);  color: var(--rose-light); border-color: rgba(239, 68, 68, 0.35); }

    .slide-title {
      font-size: 26px; font-weight: 800; letter-spacing: -0.4px; line-height: 1.25;
      background: linear-gradient(135deg, #FFFFFF 40%, #DDD6FE 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .slide-subtitle { font-size: 13.5px; color: var(--ink-soft); margin-top: 2px; }

    .slide-body {
      flex: 1; display: flex; flex-direction: column;
      justify-content: center; gap: 14px; position: relative;
    }

    /* ─── BỘ ĐIỀU KHIỂN HIỆU ỨNG TỪNG BƯỚC (REVEAL CONTROLLER) CHUẨN TIN 12 ─── */
    .reveal-controller {
      display: flex; align-items: center; gap: 8px;
      background: rgba(0, 0, 0, 0.38); padding: 5px 13px;
      border-radius: 30px; border: 1px solid rgba(255, 255, 255, 0.1); font-size: 12.5px;
    }
    .reveal-status { font-weight: 800; color: var(--purple-light); font-family: var(--font-mono); }
    .reveal-btn {
      background: linear-gradient(135deg, #7C3AED, #A855F7); color: white; border: none;
      padding: 4px 11px; border-radius: 16px; font-size: 11.5px; font-weight: 700;
      cursor: pointer; transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      display: inline-flex; align-items: center; gap: 4px;
    }
    .reveal-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 14px rgba(139, 92, 246, 0.45); }

    /* ─── CÁC PHẦN TỬ HIỂN THỊ TỪNG BƯỚC (REVEAL ITEM) ─── */
    .reveal-item {
      opacity: 0; transform: translateY(20px) scale(0.97);
      transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s;
      will-change: opacity, transform;
    }
    .slide.active .reveal-item.visible { opacity: 1; transform: translateY(0) scale(1); }
    .reveal-item.just-revealed {
      box-shadow: 0 0 25px rgba(139, 92, 246, 0.45), inset 0 0 15px rgba(139, 92, 246, 0.18);
      border-color: var(--purple-light) !important;
    }

    /* ─── HỆ THỐNG THẺ CARD & LAYOUT ─── */
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
    .grid-5 { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
    .card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.09);
      border-radius: var(--radius-md); padding: 16px 20px;
      position: relative; overflow: hidden;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s;
    }
    .card:hover { transform: translateY(-3px); border-color: rgba(139, 92, 246, 0.4); }
    .card.active-card {
      border-color: var(--purple-light); background: rgba(30, 20, 60, 0.85);
      box-shadow: 0 0 24px rgba(139, 92, 246, 0.28);
    }
    .card-title {
      font-size: 15.5px; font-weight: 700; color: #FFFFFF;
      margin-bottom: 6px; display: flex; align-items: center; gap: 8px;
    }

    /* Pills */
    .pill {
      display: inline-flex; align-items: center; gap: 5px;
      padding: 3px 10px; border-radius: 8px;
      font-size: 11px; font-weight: 700; font-family: var(--font-mono);
    }
    .pill-purple { background: rgba(139, 92, 246, 0.18); color: var(--purple-light); border: 1px solid rgba(139, 92, 246, 0.35); }
    .pill-cyan   { background: rgba(56, 189, 248, 0.16); color: var(--cyan); border: 1px solid rgba(56, 189, 248, 0.35); }
    .pill-amber  { background: rgba(245, 158, 11, 0.16); color: var(--amber-light); border: 1px solid rgba(245, 158, 11, 0.35); }
    .pill-green  { background: rgba(16, 185, 129, 0.16); color: var(--emerald-light); border: 1px solid rgba(16, 185, 129, 0.35); }
    .pill-red    { background: rgba(239, 68, 68, 0.16); color: var(--rose-light); border: 1px solid rgba(239, 68, 68, 0.35); }

    /* Buttons */
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      border: none; border-radius: 12px; cursor: pointer;
      font-weight: 700; font-size: 13.5px; padding: 9px 18px;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-primary {
      background: linear-gradient(135deg, #7C3AED, #A855F7); color: #FFF;
      box-shadow: 0 4px 16px rgba(139, 92, 246, 0.35);
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(139, 92, 246, 0.5); }
    .btn-outline {
      background: rgba(255, 255, 255, 0.05); color: #FFF;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
    .btn-outline:hover { background: rgba(139, 92, 246, 0.15); border-color: var(--purple); color: #FFF; }
    .btn-amber {
      background: linear-gradient(135deg, #D97706, #F59E0B); color: #FFF;
      box-shadow: 0 4px 16px rgba(245, 158, 11, 0.35);
    }
    .btn-amber:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(245, 158, 11, 0.5); }

    /* Code & Law Box */
    .law-box {
      background: #050814; border: 1px solid rgba(139, 92, 246, 0.25);
      border-radius: 12px; padding: 12px 16px;
      font-size: 13px; color: #E2E8F0; line-height: 1.55;
    }
    .law-box .title { color: var(--purple-light); font-weight: 800; font-family: var(--font-mono); }
    .law-box .penalty { color: var(--amber-light); font-weight: 700; }

    /* Simulator interactive boxes */
    .sim-card {
      background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 14px; padding: 14px 18px; cursor: pointer; transition: all 0.2s;
    }
    .sim-card:hover { border-color: var(--purple-light); background: rgba(139, 92, 246, 0.1); transform: translateX(3px); }
    .sim-card.active { border-color: var(--purple-light); background: rgba(124, 58, 237, 0.25); font-weight: 700; }

    /* ─── THANH ĐIỀU HƯỚNG DƯỚI CÙNG (.DECK-NAV) CHUẨN TIN 12 ─── */
    .deck-nav {
      position: fixed; bottom: 13px; left: 50%; transform: translateX(-50%);
      background: rgba(8, 15, 24, 0.92); border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 40px; padding: 6px 16px;
      display: flex; align-items: center; gap: 12px;
      backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); z-index: 100;
      box-shadow: 0 10px 32px rgba(0, 0, 0, 0.65);
    }
    .nav-btn {
      background: transparent; border: none; color: #E2E8F0; font-size: 18px;
      cursor: pointer; padding: 3px 9px; border-radius: 20px;
      transition: all 0.2s; display: flex; align-items: center; justify-content: center;
    }
    .nav-btn:hover { color: var(--purple-light); background: rgba(255, 255, 255, 0.1); transform: scale(1.12); }
    .deck-progress {
      width: 220px; height: 6px; background: rgba(255, 255, 255, 0.14);
      border-radius: 3px; overflow: hidden; cursor: pointer;
    }
    .deck-progress-bar {
      height: 100%; width: 6.66%;
      background: linear-gradient(90deg, #7C3AED, #A855F7, #38BDF8);
      transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .deck-counter {
      font-size: 13px; font-weight: 700; color: #94A3B8;
      font-family: var(--font-mono); min-width: 60px; text-align: center;
    }

    /* Modal Mục lục */
    .toc-modal {
      position: fixed; inset: 0; background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(10px); z-index: 200;
      display: none; align-items: center; justify-content: center;
    }
    .toc-modal.open { display: flex; }
    .toc-card {
      background: #0E132A; border: 1px solid rgba(139, 92, 246, 0.35);
      border-radius: 20px; width: 90vw; max-width: 860px; max-height: 85vh;
      padding: 24px 28px; overflow-y: auto; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9);
    }
    .toc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 16px; }
    .toc-item {
      padding: 10px 14px; border-radius: 10px; background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08); cursor: pointer;
      display: flex; align-items: center; gap: 10px; font-size: 13px; transition: all 0.2s;
    }
    .toc-item:hover { background: rgba(139, 92, 246, 0.2); border-color: var(--purple); transform: translateX(3px); }
    .toc-item.active { background: rgba(124, 58, 237, 0.35); border-color: var(--purple-light); color: #FFF; font-weight: 700; }

    #confettiCanvas { position: fixed; inset: 0; pointer-events: none; z-index: 999; }
  </style>
</head>
<body>

  <!-- Nền Gradient Vũ trụ & Lưới toạ độ số -->
  <div class="bg-mesh"></div>
  <div class="cyber-grid"></div>

  <!-- Ký hiệu Đạo đức, Pháp luật & Bản quyền lơ lửng -->
  <div class="floating-symbols">
    <div class="float-tag" style="left: 6%; animation-delay: 0s;">⚖️ Luật An ninh mạng 2018</div>
    <div class="float-tag" style="left: 20%; animation-delay: 4s;">©️ Quyền Tác giả (Copyright)</div>
    <div class="float-tag" style="left: 36%; animation-delay: 9s;">🚫 Dừng Cyberbullying!</div>
    <div class="float-tag" style="left: 50%; animation-delay: 2s;">📜 Nghị định 15/2020 (10–20 triệu)</div>
    <div class="float-tag" style="left: 64%; animation-delay: 7s;">👤 Quyền Nhân thân (Bất biến)</div>
    <div class="float-tag" style="left: 77%; animation-delay: 12s;">💰 Quyền Tài sản (Chuyển giao)</div>
    <div class="float-tag" style="left: 88%; animation-delay: 15s;">🔓 Tẩy chay phần mềm Crack!</div>
    <div class="float-tag" style="left: 94%; animation-delay: 18s;">🌐 Creative Commons CC-BY</div>
  </div>

  <canvas id="confettiCanvas"></canvas>

  <div class="deck-container">

    <!-- ══ SLIDE 1: TRANG BÌA ════════════════════════════════════════════════ -->
    <section class="slide active" id="slide-1" data-total-reveal="3">
      <div class="slide-header">
        <div>
          <span class="slide-badge">🏫 TRƯỜNG THPT NA RÌ · TIN HỌC 10 · KẾT NỐI TRI THỨC</span>
          <div class="slide-title">CHỦ ĐỀ 3: ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ TRONG MÔI TRƯỜNG SỐ</div>
          <div class="slide-subtitle">Bài học số hoá tương tác bám sát Chương trình GDPT 2018 (SGK trang 55–61)</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-1-status">0 / 3</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body" style="justify-content:center; align-items:center; text-align:center;">
        <div style="max-width:980px;">
          <div style="display:inline-flex; align-items:center; gap:8px; padding:5px 16px; border-radius:999px; background:rgba(139,92,246,0.18); border:1px solid rgba(139,92,246,0.35); color:var(--purple-light); font-weight:700; font-size:13px; margin-bottom:14px;">
            <span>⚖️ BÀI HỌC SỐ 11 · TIN HỌC LỚP 10</span>
          </div>

          <h1 style="font-size:38px; font-weight:900; letter-spacing:-0.5px; margin-bottom:14px; background:linear-gradient(135deg, #FFFFFF 25%, #C4B5FD 70%, #38BDF8 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">
            ỨNG XỬ TRÊN MÔI TRƯỜNG SỐ.<br/>NGHĨA VỤ TÔN TRỌNG BẢN QUYỀN
          </h1>

          <p style="font-size:15.5px; color:var(--ink-soft); line-height:1.6; max-width:840px; margin:0 auto 24px;">
            Mỗi cú nhấp chuột hay bình luận đều để lại <strong>"dấu chân số"</strong> vĩnh viễn. Hãy hiểu rõ <strong>chuẩn mực đạo đức, ranh giới pháp luật</strong> và xây dựng ý thức <strong>tôn trọng bản quyền tác giả</strong> khi hoạt động trên mạng.
          </p>

          <!-- 3 Trụ cột bài học -->
          <div class="grid-3" style="text-align:left; margin-bottom:26px;">
            <div class="card reveal-item" style="border-top:3px solid var(--purple);">
              <div style="font-size:26px; margin-bottom:6px;">🤝</div>
              <div style="font-weight:800; font-size:15px; color:#FFF; margin-bottom:4px;">1. Đạo đức & Văn hoá số</div>
              <div style="font-size:12.5px; color:var(--ink-soft); line-height:1.45;">Tránh 5 hành vi lệch chuẩn: tin giả, lộ thông tin cá nhân, thư rác, bắt nạt mạng và nói tục chửi bới.</div>
            </div>

            <div class="card reveal-item" style="border-top:3px solid var(--cyan);">
              <div style="font-size:26px; margin-bottom:6px;">⚖️</div>
              <div style="font-weight:800; font-size:15px; color:#FFF; margin-bottom:4px;">2. Ranh giới Pháp lý</div>
              <div style="font-size:12.5px; color:var(--ink-soft); line-height:1.45;">Luật An ninh mạng 2018 & Nghị định 15/2020: Mức phạt từ 10–20 triệu đồng khi phát tán tin giả.</div>
            </div>

            <div class="card reveal-item" style="border-top:3px solid var(--amber);">
              <div style="font-size:26px; margin-bottom:6px;">📜</div>
              <div style="font-weight:800; font-size:15px; color:#FFF; margin-bottom:4px;">3. Quyền tác giả & Bản quyền</div>
              <div style="font-size:12.5px; color:var(--ink-soft); line-height:1.45;">Phân biệt Quyền nhân thân vs Quyền tài sản; phân biệt Mua bản quyền vs Mua Licence quyền sử dụng.</div>
            </div>
          </div>

          <div style="display:flex; justify-content:center; gap:12px; align-items:center;">
            <button class="btn btn-primary" onclick="nextSlide()" style="padding:10px 28px; font-size:14.5px;">
              <span>Bắt đầu bài học →</span>
            </button>
            <button class="btn btn-outline" onclick="openTOC()" style="padding:10px 20px; font-size:13.5px;">
              <span>📑 Mục lục bài học (15 slide)</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 2: KHỞI ĐỘNG ═══════════════════════════════════════════════ -->
    <section class="slide" id="slide-2" data-total-reveal="2">
      <div class="slide-header">
        <div>
          <span class="slide-badge amber">⚡ KHỞI ĐỘNG · TÌNH HUỐNG THỰC TẾ</span>
          <div class="slide-title">Hậu Quả Cay Đắng Của Trò Đùa "Câu Like" Trên Mạng</div>
          <div class="slide-subtitle">Nếu thấy bạn mình bị chế giễu và công kích hội đồng, em sẽ làm gì? (SGK trang 55)</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-2-status">0 / 2</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2" style="align-items:center;">
          <!-- Tình huống của Tráng -->
          <div class="card reveal-item" style="border-left:4px solid var(--amber);">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
              <div style="width:42px; height:42px; border-radius:50%; background:#F59E0B; display:flex; align-items:center; justify-content:center; font-size:20px;">⚽</div>
              <div>
                <div style="font-weight:800; font-size:15.5px;">Tình huống giải bóng đá trường THPT</div>
                <div style="font-size:12px; color:var(--ink-soft);">Hành vi quay lén & phát tán video lên mạng xã hội</div>
              </div>
            </div>

            <div style="background:rgba(0,0,0,0.3); border-radius:12px; padding:12px; margin-bottom:12px; font-size:13.5px; line-height:1.55; color:#E2E8F0;">
              "Trong trận bóng đá khối 10, bạn Tráng lỡ chân đá phản lưới nhà. Một bạn đứng ngoài dùng điện thoại quay lại rồi đăng lên Facebook/TikTok với dòng chữ giễu cợt: <em>'Thánh bóp team của năm!'</em>."
            </div>

            <div style="background:#090B18; border:1px solid rgba(239,68,68,0.3); border-radius:12px; padding:12px;">
              <div style="color:var(--rose); font-weight:700; font-size:12.5px; margin-bottom:6px;">⚠️ HẬU QUẢ BÙNG PHÁT TRÊN MẠNG:</div>
              <div style="font-family:var(--font-mono); font-size:12px; color:#FCA5A5; line-height:1.5;">
                • Video đạt hơn 50.000 lượt xem trong 1 đêm.<br/>
                • Hàng trăm bình luận chê bai, miệt thị ngoại hình và xúc phạm Tráng.<br/>
                • Tráng suy sụp tinh thần, xấu hổ không dám đến trường học.<br/>
                ❌ <em>Đây chính là hành vi <strong>Bắt nạt qua mạng (Cyberbullying)</strong> vi phạm nghiêm trọng cả đạo đức và quyền hình ảnh cá nhân!</em>
              </div>
            </div>
          </div>

          <!-- Câu hỏi tương tác -->
          <div class="reveal-item">
            <div style="font-weight:800; font-size:16px; margin-bottom:12px; color:var(--purple-light);">
              🎯 Đứng trước tình huống trên, hành động nào thể hiện đúng phẩm chất công dân số văn minh?
            </div>

            <div style="display:flex; flex-direction:column; gap:10px;" id="s2-options">
              <button class="card" onclick="checkS2(1)" style="text-align:left; cursor:pointer; padding:12px 16px;" id="s2-opt-1">
                <div style="font-weight:700; font-size:13.5px; color:#FFF;">A. Hùa vào thả biểu tượng 'Haha' và bình luận thêm để góp vui</div>
                <div style="font-size:12px; color:var(--ink-soft); margin-top:3px;">Trở thành kẻ tiếp tay cho bạo lực mạng, gây thêm tổn thương sâu sắc cho bạn.</div>
              </button>

              <button class="card" onclick="checkS2(2)" style="text-align:left; cursor:pointer; padding:12px 16px;" id="s2-opt-2">
                <div style="font-weight:700; font-size:13.5px; color:#FFF;">B. Nhắn riêng khuyên người đăng gỡ bài, an ủi Tráng và báo cáo nếu vi phạm tiếp diễn</div>
                <div style="font-size:12px; color:var(--ink-soft); margin-top:3px;">Hành vi dũng cảm, nhân văn, ngăn chặn kịp thời hậu quả xấu xảy ra.</div>
              </button>

              <button class="card" onclick="checkS2(3)" style="text-align:left; cursor:pointer; padding:12px 16px;" id="s2-opt-3">
                <div style="font-weight:700; font-size:13.5px; color:#FFF;">C. Lập tài khoản ảo (clone) để chửi bới người đăng video cho bõ tức</div>
                <div style="font-size:12px; color:var(--ink-soft); margin-top:3px;">Sai lầm! Biến bản thân thành người vi phạm văn hoá ứng xử mạng tiếp theo.</div>
              </button>
            </div>

            <div id="s2-feedback" style="margin-top:12px; display:none; padding:12px; border-radius:12px; font-size:13px; line-height:1.5;"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 3: MỤC TIÊU BÀI HỌC ═════════════════════════════════════════ -->
    <section class="slide" id="slide-3" data-total-reveal="3">
      <div class="slide-header">
        <div>
          <span class="slide-badge emerald">🎯 MỤC TIÊU CẦN ĐẠT · CHUẨN GDPT 2018</span>
          <div class="slide-title">Ba Trụ Cột Năng Lực Ứng Xử Số & Bản Quyền</div>
          <div class="slide-subtitle">Yêu cầu cần đạt sau khi học xong Tin học 10 Bài 11</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-3-status">0 / 3</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-3" style="height:100%; align-items:stretch;">
          <!-- Trụ cột 1 -->
          <div class="card reveal-item" style="display:flex; flex-direction:column; justify-content:space-between; border-top:4px solid var(--purple);">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span class="pill pill-purple">NĂNG LỰC NLa</span>
                <span style="font-size:24px;">🤝</span>
              </div>
              <h3 style="font-size:17px; font-weight:800; color:#FFF; margin-bottom:8px;">Văn hoá & Đạo đức Mạng</h3>
              <ul style="font-size:13px; color:#CBD5E1; line-height:1.55; padding-left:18px; display:flex; flex-direction:column; gap:6px;">
                <li>Nhận diện và tránh xa 5 hành vi lệch chuẩn trong giao tiếp số.</li>
                <li>Biết cách ứng phó và bảo vệ bản thân, bạn bè trước bắt nạt mạng (Cyberbullying).</li>
                <li>Tôn trọng quyền riêng tư, danh dự và hình ảnh của người khác.</li>
                <li>Ý thức rằng không gian mạng **không phải là nơi ẩn danh hoàn toàn**.</li>
              </ul>
            </div>
            <div style="background:rgba(139,92,246,0.1); border-radius:10px; padding:10px; margin-top:12px; font-size:12px; color:var(--purple-light);">
              ✨ Đạt được: Tư duy ứng xử chuẩn mực, văn minh, có trách nhiệm với cộng đồng.
            </div>
          </div>

          <!-- Trụ cột 2 -->
          <div class="card reveal-item" style="display:flex; flex-direction:column; justify-content:space-between; border-top:4px solid var(--cyan);">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span class="pill pill-cyan">NĂNG LỰC NLc</span>
                <span style="font-size:24px;">⚖️</span>
              </div>
              <h3 style="font-size:17px; font-weight:800; color:#FFF; margin-bottom:8px;">Hiểu biết Pháp luật An ninh mạng</h3>
              <ul style="font-size:13px; color:#CBD5E1; line-height:1.55; padding-left:18px; display:flex; flex-direction:column; gap:6px;">
                <li>Nắm rõ 4 điều cấm cơ bản trong Luật An ninh mạng 2018.</li>
                <li>Hiểu rõ chế tài xử phạt hành chính theo Nghị định 15/2020/NĐ-CP (10–20 triệu đồng).</li>
                <li>Nhận thức sâu sắc: **"Chia sẻ tin sai sự thật cũng là vi phạm pháp luật"**.</li>
                <li>Nắm được quy trình kiểm chứng nguồn tin trước khi chia sẻ.</li>
              </ul>
            </div>
            <div style="background:rgba(56,189,248,0.1); border-radius:10px; padding:10px; margin-top:12px; font-size:12px; color:var(--cyan);">
              ✨ Đạt được: Thượng tôn pháp luật, tự tin bảo vệ mình trước rủi ro pháp lý mạng.
            </div>
          </div>

          <!-- Trụ cột 3 -->
          <div class="card reveal-item" style="display:flex; flex-direction:column; justify-content:space-between; border-top:4px solid var(--amber);">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span class="pill pill-amber">NĂNG LỰC NLe</span>
                <span style="font-size:24px;">📜</span>
              </div>
              <h3 style="font-size:17px; font-weight:800; color:#FFF; margin-bottom:8px;">Tôn trọng Quyền tác giả</h3>
              <ul style="font-size:13px; color:#CBD5E1; line-height:1.55; padding-left:18px; display:flex; flex-direction:column; gap:6px;">
                <li>Phân biệt chính xác **Quyền nhân thân** và **Quyền tài sản**.</li>
                <li>Phân biệt giữa **Mua bản quyền** và **Mua Licence quyền sử dụng**.</li>
                <li>Nhận diện tác hại của việc dùng phần mềm bẻ khoá (crack) và đạo văn số.</li>
                <li>Biết cách khai thác tài nguyên mã nguồn mở và ghi trích dẫn nguồn đúng quy chuẩn.</li>
              </ul>
            </div>
            <div style="background:rgba(245,158,11,0.1); border-radius:10px; padding:10px; margin-top:12px; font-size:12px; color:var(--amber-light);">
              ✨ Đạt được: Liêm chính học thuật, tôn trọng công sức sáng tạo của tác giả.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 4: MỤC 1 - NĂM VẤN ĐỀ ĐẠO ĐỨC & VĂN HOÁ ═════════════════════ -->
    <section class="slide" id="slide-4" data-total-reveal="5">
      <div class="slide-header">
        <div>
          <span class="slide-badge">🤝 MỤC 1 · ĐẠO ĐỨC & VĂN HOÁ MẠNG</span>
          <div class="slide-title">Năm Hành Vi Lệch Chuẩn Phổ Biến Trên Không Gian Mạng</div>
          <div class="slide-subtitle">SGK Tin học 10, trang 55–56 · Nhấp vào từng hành vi để xem chi tiết tác hại</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-4-status">0 / 5</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-5" style="margin-bottom:14px;">
          <!-- 1 -->
          <div class="card active-card reveal-item" onclick="showEthicDetail(1)" id="ethic-card-1" style="cursor:pointer; padding:12px;">
            <div style="font-size:22px; margin-bottom:4px;">📢</div>
            <div style="font-weight:800; font-size:13.5px; color:var(--purple-light);">1. Tin sai sự thật</div>
            <div style="font-size:11.5px; color:var(--ink-soft); margin-top:4px;">Bịa đặt, lan truyền tin đồn gây hoang mang dư luận.</div>
          </div>

          <!-- 2 -->
          <div class="card reveal-item" onclick="showEthicDetail(2)" id="ethic-card-2" style="cursor:pointer; padding:12px;">
            <div style="font-size:22px; margin-bottom:4px;">🔓</div>
            <div style="font-weight:800; font-size:13.5px; color:var(--cyan);">2. Lộ info cá nhân</div>
            <div style="font-size:11.5px; color:var(--ink-soft); margin-top:4px;">Đăng ảnh, số điện thoại, điểm số khi chưa cho phép.</div>
          </div>

          <!-- 3 -->
          <div class="card reveal-item" onclick="showEthicDetail(3)" id="ethic-card-3" style="cursor:pointer; padding:12px;">
            <div style="font-size:22px; margin-bottom:4px;">📨</div>
            <div style="font-weight:800; font-size:13.5px; color:var(--amber-light);">3. Thư rác / Spam</div>
            <div style="font-size:11.5px; color:var(--ink-soft); margin-top:4px;">Gửi quảng cáo hàng loạt, tag bạn bè vô tội vạ.</div>
          </div>

          <!-- 4 -->
          <div class="card reveal-item" onclick="showEthicDetail(4)" id="ethic-card-4" style="cursor:pointer; padding:12px;">
            <div style="font-size:22px; margin-bottom:4px;">⚠️</div>
            <div style="font-weight:800; font-size:13.5px; color:var(--rose-light);">4. Bắt nạt mạng</div>
            <div style="font-size:11.5px; color:var(--ink-soft); margin-top:4px;">Hùa nhau cô lập, chế giễu ngoại hình, tẩy chay.</div>
          </div>

          <!-- 5 -->
          <div class="card reveal-item" onclick="showEthicDetail(5)" id="ethic-card-5" style="cursor:pointer; padding:12px;">
            <div style="font-size:22px; margin-bottom:4px;">💬</div>
            <div style="font-weight:800; font-size:13.5px; color:var(--emerald-light);">5. Nói tục chửi bậy</div>
            <div style="font-size:11.5px; color:var(--ink-soft); margin-top:4px;">Dùng từ ngữ thô tục, miệt thị vùng miền trên mạng.</div>
          </div>
        </div>

        <!-- Chi tiết giải thích tương tác -->
        <div class="card" id="ethic-detail-box" style="flex:1; background:rgba(15,18,36,0.9); border:1px solid rgba(139,92,246,0.3); display:flex; flex-direction:column; justify-content:center;">
          <!-- Render động từ JS -->
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 5: ĐẤU TRƯỜNG LAB 1 - BỘ LỌC CÔNG DÂN SỐ ══════════════════════ -->
    <section class="slide" id="slide-5" data-total-reveal="2">
      <div class="slide-header">
        <div>
          <span class="slide-badge cyan">🎮 THỰC HÀNH TƯƠNG TÁC · CITIZEN FILTER LAB</span>
          <div class="slide-title">Đấu Trường Lab: Bộ Lọc Công Dân Số Văn Minh</div>
          <div class="slide-subtitle">Đọc kịch bản tình huống thực tế và bấm phân loại "Chuẩn mực văn minh ✨" hoặc "Lệch chuẩn vi phạm ⚠️"</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-5-status">0 / 2</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2">
          <!-- Bảng tình huống hiện tại -->
          <div class="reveal-item">
            <div class="card" style="border-left:4px solid var(--purple); padding:16px; margin-bottom:12px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <span class="pill pill-purple" id="sim1-scenario-num">KỊCH BẢN 1 / 4</span>
                <span style="font-size:12px; color:var(--ink-soft);" id="sim1-progress-score">Điểm: 0 / 4</span>
              </div>
              <div style="font-size:15px; font-weight:700; color:#FFF; line-height:1.55; margin-bottom:12px;" id="sim1-scenario-text">
                "Thấy một bài đăng giật gân trên Facebook nói về dịch bệnh lạ tại địa phương nhưng chưa có báo chính thống nào đưa tin, em bấm 'Chia sẻ' ngay để bạn bè phòng tránh."
              </div>

              <!-- 2 Nút lựa chọn -->
              <div style="display:flex; gap:12px;">
                <button class="btn btn-primary" onclick="answerFilterSim(false)" style="flex:1; background:linear-gradient(135deg,#DC2626,#EF4444);">
                  <span>⚠️ Lệch chuẩn / Vi phạm</span>
                </button>
                <button class="btn btn-primary" onclick="answerFilterSim(true)" style="flex:1; background:linear-gradient(135deg,#059669,#10B981);">
                  <span>✨ Chuẩn mực văn minh</span>
                </button>
              </div>
            </div>

            <div id="sim1-feedback-box" style="display:none; padding:12px 16px; border-radius:12px; font-size:13px; line-height:1.5;"></div>
          </div>

          <!-- Khung tổng kết điểm và nguyên tắc -->
          <div class="card reveal-item" style="background:#0A0F24; border:1px solid rgba(139,92,246,0.3); padding:18px;">
            <div style="font-weight:800; font-size:15px; color:var(--purple-light); margin-bottom:10px;">
              🛡️ QUY TẮC VÀNG BẢO VỆ "DẤU CHÂN SỐ" CỦA BẢN THÂN:
            </div>

            <div style="display:flex; flex-direction:column; gap:10px; font-size:12.5px; color:#CBD5E1; line-height:1.5;">
              <div style="display:flex; gap:8px;">
                <span style="color:var(--emerald);">[1]</span>
                <span><strong>Chậm lại 3 giây:</strong> Trước khi nhấn nút Chia sẻ hoặc Gửi bình luận, tự hỏi: <em>Thông tin này đã được kiểm chứng chưa? Có xúc phạm ai không?</em></span>
              </div>
              <div style="display:flex; gap:8px;">
                <span style="color:var(--cyan);">[2]</span>
                <span><strong>Nguyên tắc tôn trọng riêng tư:</strong> Không bao giờ công khai tin nhắn riêng, ảnh chụp trộm hoặc thông tin cá nhân của bạn bè.</span>
              </div>
              <div style="display:flex; gap:8px;">
                <span style="color:var(--amber);">[3]</span>
                <span><strong>Lưu bằng chứng & báo cáo:</strong> Nếu là nạn nhân của bắt nạt mạng, hãy chụp màn hình lưu bằng chứng, chặn tài khoản quấy rối và chia sẻ với thầy cô, cha mẹ.</span>
              </div>
            </div>

            <div style="margin-top:16px; padding:10px; border-radius:10px; background:rgba(139,92,246,0.15); font-size:12px; color:var(--purple-light); text-align:center;">
              💡 <em>"Mọi hành vi trên mạng đều có thể truy vết địa chỉ IP và lưu vết nhật ký máy chủ!"</em>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 6: ĐỐI CHIẾU BEFORE / AFTER ═══════════════════════════════════ -->
    <section class="slide" id="slide-6" data-total-reveal="2">
      <div class="slide-header">
        <div>
          <span class="slide-badge amber">⚖️ BẢNG ĐỐI CHIẾU THỰC CHIẾN</span>
          <div class="slide-title">So Sánh: Netizen Cẩu Thả vs Công Dân Số Có Trách Nhiệm</div>
          <div class="slide-subtitle">Sự khác biệt giữa việc tạo nghiệp số và xây dựng uy tín cá nhân vững vàng</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-6-status">0 / 2</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2" style="height:100%; align-items:stretch;">
          <!-- Cột 1 -->
          <div class="card reveal-item" style="border-top:4px solid var(--rose); background:rgba(30,12,20,0.6);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <span class="pill pill-red">NETIZEN CẨU THẢ (THÓI QUEN XẤU)</span>
              <span style="font-size:26px;">🤦‍♂️</span>
            </div>

            <ul style="font-size:13px; color:#FCA5A5; line-height:1.6; padding-left:18px; display:flex; flex-direction:column; gap:8px;">
              <li><strong>Thấy tin giật gân là share ngay:</strong> Tiếp tay phát tán tin giả, gây hoang mang cộng đồng.</li>
              <li><strong>Lập nick clone để chửi bới:</strong> Ảo tưởng mình vô hình, xúc phạm và thêu dệt chuyện xấu về bạn bè.</li>
              <li><strong>Quay lén đăng mạng câu like:</strong> Xâm phạm nghiêm trọng quyền hình ảnh và đời tư cá nhân.</li>
              <li><strong>Dùng phần mềm crack, đạo văn:</strong> Tải phần mềm bẻ khoá chứa mã độc, lấy cắp slide của người khác nhận là của mình.</li>
            </ul>

            <div style="margin-top:16px; padding:10px; border-radius:10px; background:rgba(239,68,68,0.15); font-size:12px; color:#F87171;">
              ❌ Hậu quả: Bị cộng đồng tẩy chay, đối mặt xử phạt 10–20 triệu đồng hoặc mất an toàn dữ liệu cá nhân.
            </div>
          </div>

          <!-- Cột 2 -->
          <div class="card reveal-item" style="border-top:4px solid var(--emerald); background:rgba(10,32,25,0.6);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <span class="pill pill-green">CÔNG DÂN SỐ VĂN MINH THPT NA RÌ</span>
              <span style="font-size:26px;">🌟</span>
            </div>

            <ul style="font-size:13px; color:#A7F3D0; line-height:1.6; padding-left:18px; display:flex; flex-direction:column; gap:8px;">
              <li><strong>Kiểm chứng nguồn tin:</strong> Chỉ chia sẻ thông tin từ báo chí chính thống hoặc cổng thông tin nhà nước.</li>
              <li><strong>Tranh luận văn minh:</strong> Dùng lý lẽ lịch sự, tôn trọng sự khác biệt, không công kích cá nhân.</li>
              <li><strong>Tôn trọng riêng tư:</strong> Luôn hỏi ý kiến bạn bè trước khi chụp hoặc đăng ảnh tập thể lên mạng.</li>
              <li><strong>Tôn trọng bản quyền trí tuệ:</strong> Dùng phần mềm có bản quyền/mã nguồn mở và luôn ghi rõ nguồn tác giả.</li>
            </ul>

            <div style="margin-top:16px; padding:10px; border-radius:10px; background:rgba(16,185,129,0.15); font-size:12px; color:#34D399;">
              ✅ Kết quả: Xây dựng dấu chân số uy tín, an toàn tuyệt đối trước pháp luật, được bạn bè tin cậy.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 7: MỤC 2 - QUY ĐỊNH PHÁP LÝ & BỐN ĐIỀU CẤM ═══════════════════ -->
    <section class="slide" id="slide-7" data-total-reveal="4">
      <div class="slide-header">
        <div>
          <span class="slide-badge cyan">⚖️ MỤC 2 · RANH GIỚI PHÁP LÝ</span>
          <div class="slide-title">Hệ Thống Pháp Luật Việt Nam & Bốn Điều Cấm Trên Mạng</div>
          <div class="slide-subtitle">SGK Tin học 10, trang 57–58 · Luật An ninh mạng 2018 & Nghị định 15/2020/NĐ-CP</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-7-status">0 / 4</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-4" style="margin-bottom:14px;">
          <!-- Cấm 1 -->
          <div class="card reveal-item" style="border-top:3px solid var(--rose);">
            <div style="font-size:26px; margin-bottom:8px;">🚫</div>
            <div style="font-weight:800; font-size:14px; color:#FFF; margin-bottom:4px;">1. Xuyên tạc lịch sử & chủ quyền</div>
            <div style="font-size:12.5px; color:var(--ink-soft); line-height:1.5;">
              Cấm phủ nhận thành tựu cách mạng, xuyên tạc lịch sử dân tộc, đăng bản đồ Việt Nam thiếu Trường Sa, Hoàng Sa.
            </div>
          </div>

          <!-- Cấm 2 -->
          <div class="card reveal-item" style="border-top:3px solid var(--rose);">
            <div style="font-size:26px; margin-bottom:8px;">🚫</div>
            <div style="font-weight:800; font-size:14px; color:#FFF; margin-bottom:4px;">2. Tung tin giả & vu khống</div>
            <div style="font-size:12.5px; color:var(--ink-soft); line-height:1.5;">
              Cấm bịa đặt, chia sẻ thông tin sai sự thật nhằm xúc phạm danh dự của cơ quan, tổ chức hoặc bôi nhọ người khác.
            </div>
          </div>

          <!-- Cấm 3 -->
          <div class="card reveal-item" style="border-top:3px solid var(--rose);">
            <div style="font-size:26px; margin-bottom:8px;">🚫</div>
            <div style="font-weight:800; font-size:14px; color:#FFF; margin-bottom:4px;">3. Kích động bạo lực & tệ nạn</div>
            <div style="font-size:12.5px; color:var(--ink-soft); line-height:1.5;">
              Cấm cổ suý các hủ tục, mê tín dị đoan, đồi truỵ, mô tả cảnh bạo lực rùng rợn hoặc kích động đánh nhau.
            </div>
          </div>

          <!-- Cấm 4 -->
          <div class="card reveal-item" style="border-top:3px solid var(--rose);">
            <div style="font-size:26px; margin-bottom:8px;">🚫</div>
            <div style="font-weight:800; font-size:14px; color:#FFF; margin-bottom:4px;">4. Xâm phạm bí mật đời tư</div>
            <div style="font-size:12.5px; color:var(--ink-soft); line-height:1.5;">
              Cấm tiết lộ bí mật nhà nước, bí mật kinh doanh và phát tán thông tin, hình ảnh riêng tư khi chưa được phép.
            </div>
          </div>
        </div>

        <!-- Khung Luật An ninh mạng & Nghị định 15 -->
        <div class="law-box reveal-item">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span class="title">📜 NGHỊ ĐỊNH 15/2020/NĐ-CP (ĐIỀU 101) — XỬ PHẠT VI PHẠM TRÊN MẠNG XÃ HỘI</span>
            <span class="pill pill-red">CHẾ TÀI PHÁP LÝ BẮT BUỘC</span>
          </div>
          <div style="font-size:13px; line-height:1.6; color:#E2E8F0;">
            Hành vi cung cấp, chia sẻ thông tin giả mạo, thông tin sai sự thật, xúc phạm danh dự uy tín cá nhân trên mạng xã hội sẽ bị:
            <span class="penalty">PHẠT TIỀN TỪ 10.000.000 ĐỒNG ĐẾN 20.000.000 ĐỒNG</span>.<br/>
            Nếu hành vi gây thiệt hại nghiêm trọng (ảnh hưởng tính mạng, an ninh quốc gia), người vi phạm sẽ bị **truy cứu trách nhiệm hình sự** theo Bộ luật Hình sự!
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 8: TÒA ÁN PHÁP LÝ SỐ SIMULATOR ═══════════════════════════════ -->
    <section class="slide" id="slide-8" data-total-reveal="2">
      <div class="slide-header">
        <div>
          <span class="slide-badge purple">🧪 THỰC HÀNH TƯƠNG TÁC · CYBER COURT</span>
          <div class="slide-title">Mô Phỏng Trực Tiếp: Tòa Án Pháp Lý Số</div>
          <div class="slide-subtitle">Nhấp chọn các vụ án vi phạm mạng phổ biến để mở hồ sơ thụ lý và xem phán quyết của pháp luật</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-8-status">0 / 2</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2">
          <!-- 3 Vụ án để chọn -->
          <div class="reveal-item" style="display:flex; flex-direction:column; gap:10px;">
            <div class="sim-card active" onclick="loadCaseCourt(1)" id="court-tab-1">
              <div style="font-weight:700; font-size:14px; color:#FFF;">⚖️ Vụ án 1: Tung tin đồn vỡ đập thuỷ điện câu view</div>
              <div style="font-size:12px; color:var(--ink-soft); margin-top:2px;">Chia sẻ video cắt ghép gây hoang mang hàng chục ngàn người dân.</div>
            </div>

            <div class="sim-card" onclick="loadCaseCourt(2)" id="court-tab-2">
              <div style="font-weight:700; font-size:14px; color:#FFF;">⚖️ Vụ án 2: Lập nhóm bôi nhọ, bắt nạt bạn học</div>
              <div style="font-size:12px; color:var(--ink-soft); margin-top:2px;">Chế ảnh xúc phạm danh dự khiến nạn nhân trầm cảm nghỉ học.</div>
            </div>

            <div class="sim-card" onclick="loadCaseCourt(3)" id="court-tab-3">
              <div style="font-weight:700; font-size:14px; color:#FFF;">⚖️ Vụ án 3: Bẻ khoá (crack) phần mềm rồi bán lại</div>
              <div style="font-size:12px; color:var(--ink-soft); margin-top:2px;">Kinh doanh bản lậu phần mềm đồ hoạ thu lợi bất chính hàng chục triệu.</div>
            </div>
          </div>

          <!-- Màn hình phán quyết của toà -->
          <div class="card reveal-item" id="court-judgment-box" style="background:#080C1E; border:1px solid rgba(139,92,246,0.35); padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
            <!-- Render động từ JS -->
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 9: DÒNG THỜI GIAN PHÁP LÝ & VĂN HOÁ SỐ ═══════════════════════ -->
    <section class="slide" id="slide-9" data-total-reveal="3">
      <div class="slide-header">
        <div>
          <span class="slide-badge purple">📜 DÒNG THỜI GIAN PHÁP LÝ · CYBER LAW TIMELINE</span>
          <div class="slide-title">Các Mốc Trọng Yếu Trong Luật Không Gian Mạng Việt Nam</div>
          <div class="slide-subtitle">SGK trang 57 · Sự hoàn thiện từng bước của hành lang pháp lý bảo vệ công dân số</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-9-status">0 / 3</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2" style="align-items:center;">
          <!-- Cột Dòng thời gian -->
          <div class="reveal-item" style="display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; gap:12px; align-items:flex-start;">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(139,92,246,0.25); border:1px solid var(--purple); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:12px; color:var(--purple-light); flex-shrink:0;">2005</div>
              <div>
                <div style="font-weight:700; font-size:13.5px; color:#FFF;">Luật Giao dịch điện tử (2005)</div>
                <div style="font-size:12px; color:var(--ink-soft); line-height:1.45;">Đặt nền móng pháp lý đầu tiên cho chữ ký số và giao dịch trên mạng tại Việt Nam.</div>
              </div>
            </div>

            <div style="display:flex; gap:12px; align-items:flex-start;">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(56,189,248,0.25); border:1px solid var(--cyan); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:12px; color:var(--cyan); flex-shrink:0;">2006</div>
              <div>
                <div style="font-weight:700; font-size:13.5px; color:#FFF;">Luật Công nghệ thông tin (2006)</div>
                <div style="font-size:12px; color:var(--ink-soft); line-height:1.45;">Quy định quyền và nghĩa vụ của tổ chức, cá nhân tham gia ứng dụng và phát triển CNTT.</div>
              </div>
            </div>

            <div style="display:flex; gap:12px; align-items:flex-start;">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(245,158,11,0.25); border:1px solid var(--amber); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:12px; color:var(--amber-light); flex-shrink:0;">2018</div>
              <div>
                <div style="font-weight:700; font-size:13.5px; color:#FFF;">Luật An ninh mạng (2018)</div>
                <div style="font-size:12px; color:var(--ink-soft); line-height:1.45;">Văn bản luật mang tính bước ngoặt, bảo vệ an ninh quốc gia và trật tự an toàn xã hội trên không gian mạng.</div>
              </div>
            </div>

            <div style="display:flex; gap:12px; align-items:flex-start;">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(16,185,129,0.25); border:1px solid var(--emerald); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:12px; color:var(--emerald-light); flex-shrink:0;">2021</div>
              <div>
                <div style="font-weight:700; font-size:13.5px; color:#FFF;">Bộ Quy tắc ứng xử trên MXH (2021)</div>
                <div style="font-size:12px; color:var(--ink-soft); line-height:1.45;">Bộ TT&TT ban hành chuẩn mực đạo đức hướng tới xây dựng môi trường mạng an toàn, lành mạnh.</div>
              </div>
            </div>
          </div>

          <!-- Infographic Thông điệp -->
          <div class="card reveal-item" style="background:#0B1026; border:1px solid rgba(139,92,246,0.3); padding:18px;">
            <div style="font-weight:800; font-size:15px; color:#FFF; margin-bottom:12px; text-align:center;">
              ⚖️ NGUYÊN TẮC: MẠNG LÀ ẢO — TRÁCH NHIỆM LÀ THẬT!
            </div>

            <div style="display:flex; flex-direction:column; gap:10px;">
              <div style="padding:10px 12px; border-radius:10px; background:rgba(239,68,68,0.1); border-left:3px solid var(--rose);">
                <div style="font-size:12.5px; font-weight:700; color:#FCA5A5;">Nhận thức sai lầm tai hại:</div>
                <div style="font-size:12px; color:var(--ink-soft); margin-top:2px;">
                  Nghĩ rằng dùng nick ẩn danh thì cơ quan công an không tìm ra được, tha hồ chửi bới và bịa chuyện.
                </div>
              </div>

              <div style="padding:10px 12px; border-radius:10px; background:rgba(16,185,129,0.1); border-left:3px solid var(--emerald);">
                <div style="font-size:12.5px; font-weight:700; color:var(--emerald-light);">Sự thật công nghệ & pháp lý:</div>
                <div style="font-size:12px; color:var(--ink-soft); margin-top:2px;">
                  Mỗi thiết bị truy cập mạng đều có địa chỉ IP và để lại dấu vết số tại nhà mạng viễn thông. Cơ quan an ninh mạng có thể xác định danh tính chỉ trong thời gian rất ngắn!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 10: MỤC 3 - CẤU TRÚC QUYỀN TÁC GIẢ ════════════════════════════ -->
    <section class="slide" id="slide-10" data-total-reveal="4">
      <div class="slide-header">
        <div>
          <span class="slide-badge amber">📜 MỤC 3 · QUYỀN TÁC GIẢ & BẢN QUYỀN</span>
          <div class="slide-title">Hai Trụ Cột Cơ Bản Của Quyền Tác Giả (Copyright)</div>
          <div class="slide-subtitle">SGK Tin học 10, trang 58–59 · Luật Sở hữu trí tuệ Việt Nam</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-10-status">0 / 4</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2" style="margin-bottom:12px;">
          <!-- Nhánh 1: Quyền nhân thân -->
          <div class="card reveal-item" style="border-top:4px solid var(--purple);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="pill pill-purple">NHÁNH 1: QUYỀN NHÂN THÂN</span>
              <span style="font-size:24px;">👤</span>
            </div>
            <div style="font-size:15px; font-weight:800; color:#FFF; margin-bottom:6px;">Gắn liền với Tác giả (Không thể bán):</div>
            <ul style="font-size:12.5px; color:#CBD5E1; line-height:1.6; padding-left:18px;">
              <li><strong>Đặt tên cho tác phẩm</strong> của mình.</li>
              <li><strong>Đứng tên thật hoặc bút danh</strong> trên tác phẩm.</li>
              <li>Được nêu tên khi tác phẩm được phổ biến, sử dụng.</li>
              <li><strong>Bảo vệ sự toàn vẹn của tác phẩm:</strong> Cấm người khác tự ý cắt xén, xuyên tạc làm tổn hại uy tín tác giả.</li>
            </ul>
            <div style="margin-top:10px; padding:8px; border-radius:8px; background:rgba(139,92,246,0.15); font-size:11.5px; color:var(--purple-light);">
              🔒 <em>Đặc điểm: Tồn tại vĩnh viễn, không thể chuyển giao hay mua bán!</em>
            </div>
          </div>

          <!-- Nhánh 2: Quyền tài sản -->
          <div class="card reveal-item" style="border-top:4px solid var(--amber);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="pill pill-amber">NHÁNH 2: QUYỀN TÀI SẢN</span>
              <span style="font-size:24px;">💰</span>
            </div>
            <div style="font-size:15px; font-weight:800; color:#FFF; margin-bottom:6px;">Lợi ích Kinh tế (Có thể chuyển giao):</div>
            <ul style="font-size:12.5px; color:#CBD5E1; line-height:1.6; padding-left:18px;">
              <li><strong>Làm tác phẩm phái sinh</strong> (dịch thuật, phóng tác, chuyển thể).</li>
              <li><strong>Sao chép tác phẩm</strong> (in ấn, sao chép tệp tin số).</li>
              <li><strong>Phân phối, nhập khẩu</strong> bản gốc hoặc bản sao tác phẩm.</li>
              <li><strong>Truyền đạt tác phẩm ra công chúng</strong> bằng phương tiện vô tuyến, hữu tuyến, Internet.</li>
            </ul>
            <div style="margin-top:10px; padding:8px; border-radius:8px; background:rgba(245,158,11,0.15); font-size:11.5px; color:var(--amber-light);">
              💼 <em>Đặc điểm: Có thể bán, cấp phép sử dụng (Licence) hoặc chuyển nhượng!</em>
            </div>
          </div>
        </div>

        <!-- Lưu ý phân biệt -->
        <div class="card reveal-item" style="background:#070E22; border:1px solid rgba(56,189,248,0.25); padding:12px 18px;">
          <div style="font-weight:800; font-size:13.5px; color:var(--cyan); margin-bottom:4px;">
            💡 ĐIỂM CỐT LÕI HỌC SINH CẦN NHỚ TRONG BÀI THI:
          </div>
          <div style="font-size:12.5px; color:#E2E8F0; line-height:1.5;">
            Khi mua một cuốn sách hay một đĩa cài phần mềm, em chỉ mua <strong>quyền sở hữu bản sao vật lý đó</strong>. Em hoàn toàn <strong>không nắm quyền tác giả</strong>; do đó tự ý photocopy hàng loạt để bán lại hoặc đăng mã nguồn lên mạng chia sẻ miễn phí đều là hành vi vi phạm pháp luật!
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 11: PHÒNG LAB 3 - BẢN QUYỀN VS GIẤY PHÉP ══════════════════════ -->
    <section class="slide" id="slide-11" data-total-reveal="2">
      <div class="slide-header">
        <div>
          <span class="slide-badge amber">🧪 THỰC HÀNH TƯƠNG TÁC · LICENCE SIMULATOR</span>
          <div class="slide-title">Mô Phỏng: Mua Bản Quyền vs Giấy Phép Sử Dụng (Licence)</div>
          <div class="slide-subtitle">Nhấp chọn các hình thức sử dụng phần mềm để đối chiếu tính pháp lý và rủi ro an ninh mạng</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-11-status">0 / 2</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2" style="height:100%;">
          <!-- Danh sách lựa chọn -->
          <div class="reveal-item" style="display:flex; flex-direction:column; gap:8px;">
            <div class="sim-card active" onclick="loadLicenceSim(1)" id="lic-card-1">
              <div style="font-weight:700; font-size:13.5px; color:#FFF;">1. Mua Giấy phép phần mềm (Licence 1 máy)</div>
              <div style="font-size:11.5px; color:var(--ink-soft); margin-top:2px;">Ví dụ: Bản quyền Windows 11, Microsoft 365 chính hãng.</div>
            </div>

            <div class="sim-card" onclick="loadLicenceSim(2)" id="lic-card-2">
              <div style="font-weight:700; font-size:13.5px; color:#FFF;">2. Dùng phần mềm bẻ khoá (Crack) tải trên mạng</div>
              <div style="font-size:11.5px; color:var(--ink-soft); margin-top:2px;">Ví dụ: Dùng tệp patch, keygen bẻ khoá Photoshop, Office.</div>
            </div>

            <div class="sim-card" onclick="loadLicenceSim(3)" id="lic-card-3">
              <div style="font-weight:700; font-size:13.5px; color:#FFF;">3. Phần mềm nguồn mở & Miễn phí (FOSS)</div>
              <div style="font-size:11.5px; color:var(--ink-soft); margin-top:2px;">Ví dụ: Bộ gõ UniKey, LibreOffice, GIMP, VS Code, Python.</div>
            </div>

            <div class="sim-card" onclick="loadLicenceSim(4)" id="lic-card-4">
              <div style="font-weight:700; font-size:13.5px; color:#FFF;">4. Sử dụng hình ảnh giấy phép mở Creative Commons</div>
              <div style="font-size:11.5px; color:var(--ink-soft); margin-top:2px;">Ví dụ: Kho ảnh Unsplash, Wikimedia Commons (CC-BY).</div>
            </div>
          </div>

          <!-- Màn hình phân tích tình trạng -->
          <div class="card reveal-item" id="licence-analysis-box" style="background:#090F24; border:1px solid rgba(245,158,11,0.3); padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
            <!-- Render động từ JS -->
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 12: CẢNH BÁO BẪY THI TRẮC NGHIỆM ══════════════════════════════ -->
    <section class="slide" id="slide-12" data-total-reveal="4">
      <div class="slide-header">
        <div>
          <span class="slide-badge rose">⚠️ CẢNH BÁO BẪY THI · MẸO NHỚ SIÊU TỐC</span>
          <div class="slide-title">Các Bẫy Đề Thi Trắc Nghiệm Bài 11 Dễ Bị Mất Điểm</div>
          <div class="slide-subtitle">Tổng hợp 4 bẫy phân loại học sinh khá giỏi môn Tin học 10</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-12-status">0 / 4</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2">
          <!-- Bẫy 1 & 2 -->
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div class="card reveal-item" style="border-left:4px solid var(--rose); padding:13px 16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span class="pill pill-red">BẪY SỐ 1: BÁN QUYỀN NHÂN THÂN</span>
                <span style="font-size:16px;">❌</span>
              </div>
              <div style="font-size:12.5px; color:#CBD5E1; line-height:1.5;">
                <strong style="color:#FFF;">Bẫy đề thi:</strong> <em>"Tác giả có được bán quyền nhân thân để lấy tiền không?"</em><br/>
                🔴 Sai hay chọn: <em>"Được, vì tác phẩm do tác giả làm ra nên bán quyền nào cũng được"</em>.<br/>
                🟢 Đúng: Quyền nhân thân <strong>không thể bán hay chuyển nhượng</strong> dưới mọi hình thức! Chỉ có Quyền tài sản mới được mua bán.
              </div>
            </div>

            <div class="card reveal-item" style="border-left:4px solid var(--amber); padding:13px 16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span class="pill pill-amber">BẪY SỐ 2: CHIA SẺ TRONG NHÓM KÍN</span>
                <span style="font-size:16px;">❌</span>
              </div>
              <div style="font-size:12.5px; color:#CBD5E1; line-height:1.5;">
                <strong style="color:#FFF;">Bẫy đề thi:</strong> <em>"Chia sẻ sách bản quyền vào nhóm chat kín của lớp có vi phạm không?"</em><br/>
                🔴 Sai hay chọn: <em>"Hợp pháp vì chỉ chia sẻ phi thương mại trong nhóm học tập"</em>.<br/>
                🟢 Đúng: Vẫn là hành vi <strong>vi phạm bản quyền</strong> vì phát tán bản sao tác phẩm khi chưa được sự cho phép của chủ sở hữu.
              </div>
            </div>
          </div>

          <!-- Bẫy 3 & 4 -->
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div class="card reveal-item" style="border-left:4px solid var(--purple); padding:13px 16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span class="pill pill-purple">BẪY SỐ 3: SỞ HỮU MÃ NGUỒN WINDOWS</span>
                <span style="font-size:16px;">❌</span>
              </div>
              <div style="font-size:12.5px; color:#CBD5E1; line-height:1.5;">
                <strong style="color:#FFF;">Bẫy đề thi:</strong> <em>"Mua bản quyền Windows giúp người dùng có quyền gì?"</em><br/>
                🔴 Sai hay chọn: <em>"Trở thành chủ sở hữu toàn bộ phần mềm và được quyền bán lại"</em>.<br/>
                🟢 Đúng: Chỉ nhận được <strong>Giấy phép quyền sử dụng (Licence)</strong> để cài đặt trên số lượng máy nhất định.
              </div>
            </div>

            <div class="card reveal-item" style="border-left:4px solid var(--cyan); padding:13px 16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span class="pill pill-cyan">BẪY SỐ 4: TÔI CHỈ CHIA SẺ LẠI (SHARE)</span>
                <span style="font-size:16px;">❌</span>
              </div>
              <div style="font-size:12.5px; color:#CBD5E1; line-height:1.5;">
                <strong style="color:#FFF;">Bẫy đề thi:</strong> <em>"Người chia sẻ tin sai sự thật có bị phạt tiền không?"</em><br/>
                🔴 Sai hay nghĩ: <em>"Không bị phạt vì người viết bài gốc mới là người chịu tội"</em>.<br/>
                🟢 Đúng: <strong>Chia sẻ tin sai sự thật cũng bị phạt từ 10–20 triệu đồng</strong> theo Nghị định 15/2020!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 13: ĐẤU TRƯỜNG MINI QUIZ (5 CÂU) ══════════════════════════════ -->
    <section class="slide" id="slide-13">
      <div class="slide-header">
        <div>
          <span class="slide-badge amber">🏆 ĐẤU TRƯỜNG TRI THỨC · MINI QUIZ</span>
          <div class="slide-title">Thử Thách Chinh Phục: 5 Câu Trắc Nghiệm Bài 11</div>
          <div class="slide-subtitle">Chấm điểm trực tiếp · Chọn đáp án chính xác để nhận điểm 10 tuyệt đối!</div>
        </div>
        <div class="slide-meta" id="quiz-score-indicator" style="color:var(--amber-light); font-weight:700; font-family:var(--font-mono); font-size:14px;">Điểm: 0 / 5</div>
      </div>
      <div class="slide-body">
        <div class="card" style="flex:1; display:flex; flex-direction:column; justify-content:space-between;">
          <!-- Câu hỏi & Tiến độ -->
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <span class="pill pill-purple" id="quiz-q-num">CÂU HỎI 1 / 5</span>
              <span style="font-size:12px; color:var(--ink-soft);" id="quiz-topic-tag">Ứng xử trên môi trường số</span>
            </div>

            <div style="font-size:17px; font-weight:800; color:#FFF; margin-bottom:14px; line-height:1.5;" id="quiz-q-text">
              Hành vi nào sau đây là ứng xử ĐÚNG chuẩn mực trên môi trường số?
            </div>

            <!-- Các lựa chọn A, B, C, D -->
            <div style="display:flex; flex-direction:column; gap:8px;" id="quiz-options-container">
              <!-- Render động bằng JS -->
            </div>
          </div>

          <!-- Giải thích & Nút câu tiếp -->
          <div style="margin-top:12px;">
            <div id="quiz-explain-box" style="display:none; padding:10px 14px; border-radius:12px; font-size:12.5px; line-height:1.5; margin-bottom:10px;"></div>

            <div style="display:flex; justify-content:flex-end;">
              <button class="btn btn-primary" id="btn-next-quiz" onclick="nextQuizQuestion()" style="display:none; padding:8px 18px;">
                <span>Câu tiếp theo →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 14: SƠ ĐỒ TƯ DUY MINDMAP ═════════════════════════════════════ -->
    <section class="slide" id="slide-14" data-total-reveal="3">
      <div class="slide-header">
        <div>
          <span class="slide-badge purple">🧠 SƠ ĐỒ TƯ DUY · MINDMAP TƯƠNG TÁC</span>
          <div class="slide-title">Bản Đồ Tri Thức: Bài 11 - Ứng Xử Số & Bản Quyền</div>
          <div class="slide-subtitle">Nhấp vào từng nhánh để làm nổi bật (highlight) và xem tổng quan kiến thức trọng tâm</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-14-status">0 / 3</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-3" style="height:100%; align-items:stretch;">
          <!-- Nhánh 1 -->
          <div class="card active-card reveal-item" id="mm-branch-1" onclick="focusMindmap(1)" style="cursor:pointer; border-top:4px solid var(--purple);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <span class="pill pill-purple">NHÁNH 1</span>
              <span style="font-size:24px;">🤝</span>
            </div>
            <h3 style="font-size:16px; font-weight:800; color:#FFF; margin-bottom:8px;">Đạo đức & Văn hoá số</h3>
            <div style="display:flex; flex-direction:column; gap:6px; font-size:12.5px; color:#CBD5E1; line-height:1.5;">
              <div>• Không đưa tin giả, tin bịa đặt</div>
              <div>• Không tiết lộ thông tin riêng tư (Doxxing)</div>
              <div>• Không phát tán thư rác, spam tag</div>
              <div>• Ngăn chặn bắt nạt mạng (Cyberbullying)</div>
              <div>• Tranh luận lịch sự, tôn trọng sự khác biệt</div>
            </div>
          </div>

          <!-- Nhánh 2 -->
          <div class="card reveal-item" id="mm-branch-2" onclick="focusMindmap(2)" style="cursor:pointer; border-top:4px solid var(--cyan);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <span class="pill pill-cyan">NHÁNH 2</span>
              <span style="font-size:24px;">⚖️</span>
            </div>
            <h3 style="font-size:16px; font-weight:800; color:#FFF; margin-bottom:8px;">Pháp luật An ninh mạng</h3>
            <div style="display:flex; flex-direction:column; gap:6px; font-size:12.5px; color:#CBD5E1; line-height:1.5;">
              <div>• Luật An ninh mạng 2018 (4 điều cấm)</div>
              <div>• Nghị định 15/2020: Phạt 10–20 triệu đồng</div>
              <div>• Chia sẻ tin sai cũng bị phạt theo luật</div>
              <div>• Mạng là ảo, trách nhiệm pháp lý là thật!</div>
              <div>• Truy vết IP nhật ký máy chủ chính xác</div>
            </div>
          </div>

          <!-- Nhánh 3 -->
          <div class="card reveal-item" id="mm-branch-3" onclick="focusMindmap(3)" style="cursor:pointer; border-top:4px solid var(--amber);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <span class="pill pill-amber">NHÁNH 3</span>
              <span style="font-size:24px;">📜</span>
            </div>
            <h3 style="font-size:16px; font-weight:800; color:#FFF; margin-bottom:8px;">Quyền tác giả & Bản quyền</h3>
            <div style="display:flex; flex-direction:column; gap:6px; font-size:12.5px; color:#CBD5E1; line-height:1.5;">
              <div>• Quyền nhân thân: Gắn liền, không thể bán</div>
              <div>• Quyền tài sản: Có thể chuyển giao, cấp phép</div>
              <div>• Mua bản quyền ≠ Mua Licence quyền sử dụng</div>
              <div>• Tẩy chay phần mềm crack / đạo nhái số</div>
              <div>• Tôn trọng nguồn mở & ghi nguồn đầy đủ</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ SLIDE 15: TỔNG KẾT & NHIỆM VỤ ═════════════════════════════════════ -->
    <section class="slide" id="slide-15" data-total-reveal="2">
      <div class="slide-header">
        <div>
          <span class="slide-badge emerald">🏁 TỔNG KẾT BÀI HỌC · NHIỆM VỤ VỀ NHÀ</span>
          <div class="slide-title">Chúc Mừng Em Đã Hoàn Thành Bài 11!</div>
          <div class="slide-subtitle">Sẵn sàng bước vào Chủ đề 4: Ứng dụng tin học — Phần mềm thiết kế đồ hoạ Inkscape</div>
        </div>
        <div class="reveal-controller">
          <span>🎯 Hiệu ứng:</span>
          <span class="reveal-status" id="slide-15-status">0 / 2</span>
          <button class="reveal-btn" onclick="revealNextInCurrentSlide();">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" style="background: rgba(255,255,255,0.15);" onclick="revealAllInCurrentSlide();">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2" style="align-items:center;">
          <!-- 3 Thông điệp vàng -->
          <div class="reveal-item">
            <div style="font-size:19px; font-weight:800; color:#FFF; margin-bottom:14px;">
              🌟 3 THÔNG ĐIỆP VÀNG KHẮC GHI:
            </div>

            <div style="display:flex; flex-direction:column; gap:10px;">
              <div class="card" style="border-left:4px solid var(--purple); padding:12px 14px;">
                <div style="font-weight:700; font-size:14px; color:var(--purple-light);">1. Giữ gìn "Dấu chân số" trong sạch</div>
                <div style="font-size:12.5px; color:var(--ink-soft); margin-top:2px;">
                  Mỗi dòng bình luận, mỗi bài chia sẻ là bộ mặt nhân cách của chính em trên không gian mạng.
                </div>
              </div>

              <div class="card" style="border-left:4px solid var(--cyan); padding:12px 14px;">
                <div style="font-weight:700; font-size:14px; color:var(--cyan);">2. Thượng tôn pháp luật an ninh mạng</div>
                <div style="font-size:12.5px; color:var(--ink-soft); margin-top:2px;">
                  Tuyệt đối không lan truyền tin giả, tin vu khống; luôn kiểm chứng thông tin từ cơ quan nhà nước và báo chí chính thống.
                </div>
              </div>

              <div class="card" style="border-left:4px solid var(--amber); padding:12px 14px;">
                <div style="font-weight:700; font-size:14px; color:var(--amber-light);">3. Tôn trọng quyền tác giả và liêm chính số</div>
                <div style="font-size:12.5px; color:var(--ink-soft); margin-top:2px;">
                  Nói không với phần mềm bẻ khoá (crack), tôn trọng tài sản trí tuệ và phát triển văn hoá số văn minh tại Trường THPT Na Rì.
                </div>
              </div>
            </div>
          </div>

          <!-- Nhiệm vụ về nhà -->
          <div class="card reveal-item" style="background:#090F24; border:1px solid rgba(139,92,246,0.3); padding:20px;">
            <div style="font-size:16px; font-weight:800; color:#FFF; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
              <span>📝</span>
              <span>NHIỆM VỤ THỰC HÀNH TẠI NHÀ:</span>
            </div>

            <div style="display:flex; flex-direction:column; gap:10px; font-size:12.5px; color:#E2E8F0; line-height:1.55;">
              <div style="display:flex; gap:8px;">
                <span style="color:var(--purple-light); font-weight:800;">[1]</span>
                <span>Rà soát lại trang mạng xã hội cá nhân (Facebook, Zalo, TikTok): Xoá các bài chia sẻ tin chưa kiểm chứng hoặc các ảnh chụp bạn bè khi chưa hỏi ý kiến.</span>
              </div>

              <div style="display:flex; gap:8px;">
                <span style="color:var(--cyan); font-weight:800;">[2]</span>
                <span>Kiểm tra máy tính gia đình: Tìm các phần mềm crack và thử thay thế bằng các phần mềm mã nguồn mở miễn phí hợp pháp (như LibreOffice, GIMP, 7-Zip).</span>
              </div>

              <div style="display:flex; gap:8px;">
                <span style="color:var(--amber-light); font-weight:800;">[3]</span>
                <span>Cùng các bạn trong tổ thảo luận và ký <strong>"Cam kết ứng xử số văn minh & Tôn trọng bản quyền"</strong> của học sinh Trường THPT Na Rì.</span>
              </div>
            </div>

            <div style="margin-top:18px; display:flex; gap:10px;">
              <button class="btn btn-primary" onclick="goToSlide(1)" style="flex:1;">
                <span>🔄 Xem lại từ đầu</span>
              </button>
              <button class="btn btn-amber" onclick="triggerFireworks()">
                <span>🎉 Pháo hoa chúc mừng</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div><!-- /deck-container -->

  <!-- ─── THANH ĐIỀU HƯỚNG DƯỚI CÙNG (.DECK-NAV) CHUẨN TIN 12 ─── -->
  <div class="deck-nav">
    <button class="nav-btn" onclick="prevSlide();" title="Slide trước (← Phím Mũi tên trái)">‹</button>
    <div class="deck-progress" onclick="seekSlide(event)" title="Nhấp chuột để tua nhanh slide">
      <div class="deck-progress-bar" id="progressBar"></div>
    </div>
    <div class="deck-counter" id="slideCounter">01 / 15</div>
    <button class="nav-btn" onclick="nextSlide();" title="Slide tiếp (→ Phím Mũi tên phải hoặc Space)">›</button>
    <button class="nav-btn" onclick="openTOC();" title="Mục lục bài học (T)">📑</button>
    <button class="nav-btn" onclick="toggleMute();" id="muteBtn" title="Bật/Tắt âm thanh (M)">🔊</button>
    <button class="nav-btn" onclick="toggleFullScreen();" title="Toàn màn hình (F)">⛶</button>
  </div>

  <!-- ─── MODAL MỤC LỤC ─── -->
  <div class="toc-modal" id="toc-modal" onclick="closeTOC(event)">
    <div class="toc-card" onclick="event.stopPropagation()">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h2 style="font-size:18px; font-weight:800; color:#FFF;">📑 Mục Lục Bài 11: Ứng Xử Số & Bản Quyền</h2>
          <div style="font-size:12px; color:var(--ink-soft); margin-top:2px;">Chọn nhanh slide bất kì để chuyển đến (Phím T)</div>
        </div>
        <button class="ctrl-btn" onclick="closeTOC()">✕</button>
      </div>
      <div class="toc-grid" id="toc-grid-container"></div>
    </div>
  </div>

  <script>
    let currentSlide = 1;
    const totalSlides = 15;
    let isMuted = false;

    const slideTitles = [
      "1. Trang bìa bài giảng",
      "2. Khởi động · Trò đùa câu like",
      "3. Mục tiêu 3 trụ cột GDPT 2018",
      "4. Mục 1: 5 Hành vi lệch chuẩn",
      "5. Bộ lọc Công dân số Lab",
      "6. Đối chiếu: Netizen vs Công dân số",
      "7. Mục 2: Ranh giới Pháp lý mạng",
      "8. Tòa án Pháp lý số (Cyber Court)",
      "9. Dòng thời gian Luật An ninh mạng",
      "10. Mục 3: Cấu trúc Quyền tác giả",
      "11. Bản quyền vs Giấy phép Licence Lab",
      "12. Cảnh báo bẫy thi trắc nghiệm",
      "13. Đấu trường Mini Quiz 5 câu",
      "14. Sơ đồ tư duy (Mindmap)",
      "15. Tổng kết & Nhiệm vụ về nhà"
    ];

    /* ─── BỘ TỔNG HỢP ÂM THANH WEB AUDIO API (KHÔNG CẦN TỆP NGOÀI) ─── */
    const audioCtx = (typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext))
      ? new (window.AudioContext || window.webkitAudioContext)() : null;

    function playSound(type) {
      if (isMuted || !audioCtx) return;
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'click') {
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.05);
        osc.start(now); osc.stop(now + 0.05);
      } else if (type === 'reveal') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.12);
        osc.start(now); osc.stop(now + 0.12);
      } else if (type === 'success' || type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.08);
        osc.frequency.setValueAtTime(783.99, now + 0.16);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
        osc.start(now); osc.stop(now + 0.35);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(150, now + 0.2);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
        osc.start(now); osc.stop(now + 0.2);
      }
    }

    function toggleMute() {
      isMuted = !isMuted;
      document.getElementById('muteBtn').innerText = isMuted ? '🔇' : '🔊';
    }

    /* ─── QUẢN LÝ REVEAL TỪNG BƯỚC CHUẨN TIN 12 ─── */
    function getActiveSlideElement() {
      return document.getElementById('slide-' + currentSlide);
    }

    function updateRevealStatus() {
      const slide = getActiveSlideElement();
      if (!slide) return;
      const items = slide.querySelectorAll('.reveal-item');
      const visibleCount = slide.querySelectorAll('.reveal-item.visible').length;
      const statusEl = document.getElementById('slide-' + currentSlide + '-status');
      if (statusEl) {
        statusEl.innerText = visibleCount + ' / ' + items.length;
      }
    }

    function revealNextInCurrentSlide() {
      const slide = getActiveSlideElement();
      if (!slide) return false;
      const hiddenItems = Array.from(slide.querySelectorAll('.reveal-item:not(.visible)'));
      if (hiddenItems.length > 0) {
        const nextItem = hiddenItems[0];
        nextItem.classList.add('visible', 'just-revealed');
        playSound('reveal');
        setTimeout(() => nextItem.classList.remove('just-revealed'), 700);
        updateRevealStatus();
        return true;
      }
      return false;
    }

    function revealAllInCurrentSlide() {
      const slide = getActiveSlideElement();
      if (!slide) return;
      slide.querySelectorAll('.reveal-item').forEach(item => {
        item.classList.add('visible');
      });
      playSound('click');
      updateRevealStatus();
    }

    function autoStaggerReveal(slide) {
      const items = slide.querySelectorAll('.reveal-item');
      if (items.length === 0) return;
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('visible');
          updateRevealStatus();
        }, (index + 1) * 160);
      });
    }

    /* ─── ĐIỀU HƯỚNG SLIDE ─── */
    function updateSlide() {
      document.querySelectorAll('.slide').forEach((s, idx) => {
        const slideIndex = idx + 1;
        s.classList.remove('active', 'prev');
        if (slideIndex === currentSlide) {
          s.classList.add('active');
          s.querySelectorAll('.reveal-item').forEach(el => el.classList.remove('visible'));
          autoStaggerReveal(s);
        } else if (slideIndex < currentSlide) {
          s.classList.add('prev');
        }
      });

      const progress = (currentSlide / totalSlides) * 100;
      document.getElementById('progressBar').style.width = progress + '%';
      document.getElementById('slideCounter').innerText =
        String(currentSlide).padStart(2, '0') + ' / ' + String(totalSlides).padStart(2, '0');

      if (currentSlide === 13) renderQuiz();
    }

    function nextSlide() {
      if (currentSlide < totalSlides) {
        currentSlide++;
        playSound('click');
        updateSlide();
      }
    }

    function prevSlide() {
      if (currentSlide > 1) {
        currentSlide--;
        playSound('click');
        updateSlide();
      }
    }

    function goToSlide(n) {
      if (n >= 1 && n <= totalSlides && n !== currentSlide) {
        currentSlide = n;
        playSound('click');
        updateSlide();
      }
    }

    function seekSlide(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = clickX / rect.width;
      const target = Math.max(1, Math.min(totalSlides, Math.ceil(ratio * totalSlides)));
      goToSlide(target);
    }

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
        return '<div class="toc-item ' + active + '" onclick="goToSlide(' + n + '); closeTOC();">' +
          '<span style="font-family:var(--font-mono); font-weight:700; color:var(--purple-light);">' + (n < 10 ? '0' + n : n) + '.</span>' +
          '<span>' + (t.split('. ')[1] || t) + '</span>' +
        '</div>';
      }).join('');
      document.getElementById('toc-modal').classList.add('open');
    }

    function closeTOC(e) {
      document.getElementById('toc-modal').classList.remove('open');
    }

    /* ─── PHÍM TẮT ĐIỀU KHIỂN CHUẨN TIN 12 ─── */
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault(); nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault(); prevSlide();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault(); revealNextInCurrentSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault(); toggleFullScreen();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault(); toggleMute();
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        const m = document.getElementById('toc-modal');
        if (m.classList.contains('open')) closeTOC(); else openTOC();
      } else if (e.key === 'Home') {
        goToSlide(1);
      } else if (e.key === 'End') {
        goToSlide(totalSlides);
      }
    });

    /* ─── SLIDE 2: TÌNH HUỐNG KHỞI ĐỘNG ─── */
    function checkS2(opt) {
      const fb = document.getElementById('s2-feedback');
      fb.style.display = 'block';
      if (opt === 2) {
        playSound('correct');
        fb.style.background = 'rgba(16,185,129,0.15)';
        fb.style.border = '1px solid var(--emerald)';
        fb.style.color = '#34D399';
        fb.innerHTML = '🎉 <strong>XỬ LÝ RẤT CHÍNH XÁC & VĂN MINH!</strong> Em đã biết bảo vệ danh dự của bạn bè, ngăn chặn bắt nạt mạng (Cyberbullying) và không đẩy mâu thuẫn leo thang!';
      } else {
        playSound('wrong');
        fb.style.background = 'rgba(239,68,68,0.15)';
        fb.style.border = '1px solid var(--rose)';
        fb.style.color = '#F87171';
        fb.innerHTML = '⚠️ <strong>Hành vi chưa đúng mực!</strong> Tham gia hùa theo hoặc dùng bạo lực mạng đáp trả đều khiến sự việc tồi tệ hơn và vi phạm pháp luật. Hãy chọn phương án B!';
      }
    }

    /* ─── SLIDE 4: CHI TIẾT 5 VẤN ĐỀ ĐẠO ĐỨC MẠNG ─── */
    const ethicDetails = [
      null,
      {
        title: '📢 1. Đưa tin sai sự thật (Fake News) & Giật tít câu view',
        explain: 'Đăng tải hoặc bấm chia sẻ các bài viết bịa đặt, cắt ghép video không có thật nhằm kích thích trí tò mò để tăng lượt theo dõi. Hậu quả gây hoang mang dư luận xã hội, làm thiệt hại kinh tế và xúc phạm danh dự người vô tội.',
        rule: 'Quy tắc: Luôn đối chiếu với các nguồn tin chính thống (Cổng thông tin Chính phủ, Báo Nhân Dân, Đài THVN...) trước khi bấm nút Chia sẻ.'
      },
      {
        title: '🔓 2. Tiết lộ thông tin cá nhân & Đời tư (Doxxing)',
        explain: 'Đăng tải số điện thoại, địa chỉ nhà, bảng điểm, tin nhắn riêng tư hoặc ảnh chụp trộm khoảnh khắc nhạy cảm của bạn bè lên mạng xã hội khi chưa được sự đồng ý của họ.',
        rule: 'Quy tắc: Quyền riêng tư và hình ảnh là bất khả xâm phạm. Tôn trọng bí mật cá nhân của người khác cũng chính là bảo vệ an toàn cho chính mình.'
      },
      {
        title: '📨 3. Phát tán thư rác (Spam) & Tin nhắn quấy nhiễu',
        explain: 'Gửi tin nhắn quảng cáo hàng loạt, tag tên bạn bè liên tục vào các bài bán hàng online, bài viết độc hại hoặc gửi liên kết lạ nhờ bình chọn/nhận quà.',
        rule: 'Quy tắc: Không tag vô tội vạ, không tiếp tay phát tán link rác làm phiền và gây mất an toàn thông tin cho bạn bè.'
      },
      {
        title: '⚠️ 4. Bắt nạt qua mạng (Cyberbullying)',
        explain: 'Sử dụng các hội nhóm, trang mạng xã hội để công kích ngoại hình, chế giễu sai lầm, thêu dệt tin đồn ác ý nhằm tẩy chay và làm nhục một cá nhân. Gây tổn thương tâm lý nghiêm trọng, trầm cảm cho nạn nhân.',
        rule: 'Quy tắc: Dũng cảm lên tiếng bảo vệ người yếu thế; nói không với tâm lý đám đông; lưu bằng chứng và báo cáo người lớn khi phát hiện bắt nạt mạng.'
      },
      {
        title: '💬 5. Ứng xử thiếu văn hoá, xúc phạm danh dự',
        explain: 'Sử dụng ngôn từ tục tĩu, chửi bới, miệt thị vùng miền, phân biệt đối xử khi bình luận hoặc tranh luận trên không gian mạng.',
        rule: 'Quy tắc: "Mạng là ảo nhưng nhân cách là thật". Luôn giữ thái độ lịch sự, tôn trọng sự khác biệt và tranh luận trên tinh thần xây dựng.'
      }
    ];

    function showEthicDetail(idx) {
      playSound('click');
      for (let i = 1; i <= 5; i++) {
        document.getElementById('ethic-card-' + i).classList.remove('active-card');
      }
      document.getElementById('ethic-card-' + idx).classList.add('active-card');

      const data = ethicDetails[idx];
      document.getElementById('ethic-detail-box').innerHTML = \`
        <div style="font-size:16px; font-weight:800; color:#FFF; margin-bottom:8px;">\${data.title}</div>
        <p style="font-size:13.5px; color:#E2E8F0; line-height:1.55; margin-bottom:10px;">\${data.explain}</p>
        <div style="font-size:12.5px; color:var(--purple-light); background:rgba(139,92,246,0.12); border-radius:8px; padding:8px 12px; border:1px solid rgba(139,92,246,0.25);">
          🛡️ \${data.rule}
        </div>
      \`;
    }

    showEthicDetail(1);

    /* ─── SLIDE 5: ĐẤU TRƯỜNG LAB 1 - BỘ LỌC CÔNG DÂN SỐ ─── */
    const filterScenarios = [
      {
        text: "Thấy một bài đăng giật gân trên Facebook nói về dịch bệnh lạ tại địa phương nhưng chưa có cơ quan y tế nào công bố, em bấm 'Chia sẻ' ngay để mọi người cùng biết.",
        isCivilized: false,
        exp: "Lệch chuẩn! Đây là hành vi lan truyền thông tin chưa kiểm chứng, có thể gây hoang mang dư luận và vi phạm Nghị định 15/2020."
      },
      {
        text: "Bạn cùng lớp có hoàn cảnh khó khăn và bị điểm kém, em nhắn tin riêng động viên và giúp bạn ôn tập, tuyệt đối không mang chuyện này ra nói trong nhóm chat chung.",
        isCivilized: true,
        exp: "Rất chuẩn mực văn minh! Thể hiện sự tinh tế, tôn trọng quyền riêng tư và giúp đỡ bạn bè đúng đắn."
      },
      {
        text: "Thấy hai bạn trong trường to tiếng xích mích, em dùng điện thoại quay video rồi đăng lên TikTok kèm chú thích thách đố để câu view.",
        isCivilized: false,
        exp: "Lệch chuẩn nghiêm trọng! Đây là hành vi kích động bạo lực và xâm phạm hình ảnh cá nhân, tiếp tay cho bạo lực học đường."
      },
      {
        text: "Khi làm bài thuyết trình môn Sinh học, em tìm ảnh trên kho ảnh mở Creative Commons và ghi chú thích rõ ràng: 'Ảnh từ Unsplash - Tác giả John Doe'.",
        isCivilized: true,
        exp: "Rất chuẩn mực! Em đã thể hiện sự liêm chính học thuật và tôn trọng quyền tác giả của người sáng tạo."
      }
    ];

    let currentFilterIdx = 0;
    let filterScore = 0;

    function renderFilterSim() {
      const sc = filterScenarios[currentFilterIdx];
      document.getElementById('sim1-scenario-num').innerText = 'KỊCH BẢN ' + (currentFilterIdx + 1) + ' / 4';
      document.getElementById('sim1-progress-score').innerText = 'Điểm: ' + filterScore + ' / 4';
      document.getElementById('sim1-scenario-text').innerText = '"' + sc.text + '"';
      document.getElementById('sim1-feedback-box').style.display = 'none';
    }

    function answerFilterSim(chosenCivilized) {
      const sc = filterScenarios[currentFilterIdx];
      const isCorrect = (chosenCivilized === sc.isCivilized);
      const fb = document.getElementById('sim1-feedback-box');
      fb.style.display = 'block';

      if (isCorrect) {
        playSound('correct');
        filterScore++;
        fb.style.background = 'rgba(16,185,129,0.15)';
        fb.style.border = '1px solid var(--emerald)';
        fb.style.color = '#34D399';
        fb.innerHTML = '🎉 <strong>ĐÁNH GIÁ CHÍNH XÁC!</strong> ' + sc.exp;
      } else {
        playSound('wrong');
        fb.style.background = 'rgba(239,68,68,0.15)';
        fb.style.border = '1px solid var(--rose)';
        fb.style.color = '#F87171';
        fb.innerHTML = '⚠️ <strong>CHƯA ĐÚNG!</strong> ' + sc.exp;
      }

      document.getElementById('sim1-progress-score').innerText = 'Điểm: ' + filterScore + ' / 4';

      setTimeout(() => {
        if (currentFilterIdx < filterScenarios.length - 1) {
          currentFilterIdx++;
          renderFilterSim();
        } else {
          triggerFireworks();
          alert("Chúc mừng em đã hoàn thành thử thách Bộ lọc Công dân số với kết quả: " + filterScore + "/4 điểm!");
        }
      }, 1800);
    }

    renderFilterSim();

    /* ─── SLIDE 8: TÒA ÁN PHÁP LÝ SỐ SIMULATOR ─── */
    const courtCases = [
      null,
      {
        title: "Hồ sơ vụ án số 01: Tung tin vỡ đập thuỷ điện",
        subject: "Công dân N.V.A (21 tuổi) lấy video cũ từ nước ngoài, ghép nhạc cảnh báo rồi đăng lên mạng nói rằng đập thuỷ điện địa phương sắp vỡ, kêu gọi người dân sơ tán gấp.",
        violation: "Vi phạm Điều 8 Luật An ninh mạng 2018 và Điều 101 Nghị định 15/2020/NĐ-CP (Cung cấp, chia sẻ thông tin giả mạo, sai sự thật gây hoang mang dư luận).",
        judgment: "PHÁN QUYẾT: Xử phạt vi phạm hành chính 12.500.000 đồng, buộc gỡ bỏ thông tin sai sự thật và công khai xin lỗi nhân dân trên các phương tiện truyền thông!"
      },
      {
        title: "Hồ sơ vụ án số 02: Bắt nạt, lập nhóm bôi nhọ danh dự bạn học",
        subject: "Nhóm 3 học sinh lập trang mạng ẩn danh để chế ảnh đồi truỵ gán ghép cho bạn học cùng lớp, tung tin đồn vu khống khiến nạn nhân sang chấn tâm lý kéo dài.",
        violation: "Vi phạm Luật Trẻ em 2016, Điều 101 Nghị định 15/2020/NĐ-CP và có dấu hiệu cấu thành tội Làm nhục người khác (Điều 155 Bộ luật Hình sự).",
        judgment: "PHÁN QUYẾT: Cơ quan chức năng xử phạt hành chính đối với phụ huynh/người giám hộ; nhà trường kỷ luật đình chỉ học tập; chuyển hồ sơ công an xử lý theo quy định pháp luật!"
      },
      {
        title: "Hồ sơ vụ án số 03: Kinh doanh phần mềm bẻ khoá (Crack)",
        subject: "Đối tượng T.H.M bẻ khoá phần mềm chỉnh sửa ảnh chuyên nghiệp rồi đăng lên website cá nhân bán bản lậu thu lợi bất chính hơn 50.000.000 đồng.",
        violation: "Xâm phạm quyền tác giả theo Luật Sở hữu trí tuệ và có dấu hiệu Tội xâm phạm quyền tác giả, quyền liên quan (Điều 225 Bộ luật Hình sự).",
        judgment: "PHÁN QUYẾT: Tịch thu toàn bộ tang vật và số tiền thu lợi bất chính; xử phạt hành chính 45.000.000 đồng; buộc chấm dứt hoạt động website phát tán bản quyền lậu!"
      }
    ];

    function loadCaseCourt(idx) {
      playSound('click');
      for (let i = 1; i <= 3; i++) {
        document.getElementById('court-tab-' + i).classList.remove('active');
      }
      document.getElementById('court-tab-' + idx).classList.add('active');

      const c = courtCases[idx];
      document.getElementById('court-judgment-box').innerHTML = \`
        <div>
          <div style="font-size:16px; font-weight:800; color:var(--purple-light); margin-bottom:8px;">\${c.title}</div>
          <div style="font-size:13px; color:#E2E8F0; line-height:1.55; margin-bottom:8px;">
            <strong>Hành vi vi phạm:</strong> \${c.subject}
          </div>
          <div style="font-size:12.5px; color:var(--amber-light); background:rgba(245,158,11,0.1); border-radius:8px; padding:8px 12px; margin-bottom:12px; border:1px solid rgba(245,158,11,0.25);">
            📜 <strong>Căn cứ điều luật:</strong> \${c.violation}
          </div>
        </div>
        <div style="background:rgba(239,68,68,0.15); border:1px solid var(--rose); border-radius:10px; padding:12px; font-size:13px; color:#FCA5A5; font-weight:700;">
          ⚖️ \${c.judgment}
        </div>
      \`;
    }

    loadCaseCourt(1);

    /* ─── SLIDE 11: PHÒNG LAB 3 - BẢN QUYỀN VS GIẤY PHÉP LICENCE ─── */
    const licDetails = [
      null,
      {
        title: "1. Giấy phép sử dụng thương mại (Proprietary Licence)",
        status: "✅ HỢP PHÁP & AN TOÀN TUYỆT ĐỐI",
        color: "var(--emerald)",
        exp: "Người dùng mua Giấy phép (Licence) để cài đặt trên số máy quy định. Tác giả giữ toàn bộ bản quyền mã nguồn; người dùng được cập nhật bảo mật liên tục và hỗ trợ kỹ thuật chính hãng.",
        warning: "Lưu ý: Mua Licence không đồng nghĩa với mua quyền sở hữu phần mềm; không được sao chép chia sẻ cho máy khác."
      },
      {
        title: "2. Dùng phần mềm bẻ khoá (Crack / Pirate)",
        status: "❌ HOÀN TOÀN BẤT HỢP PHÁP & CỰC KỲ NGUY HIỂM",
        color: "var(--rose)",
        exp: "Hành vi vô hiệu hoá biện pháp bảo vệ bản quyền để xài chùa. Vi phạm nghiêm trọng Quyền tài sản theo Luật Sở hữu trí tuệ.",
        warning: "Cảnh báo an ninh: 95% tệp crack chứa mã độc ẩn (Trojan, Keylogger, Ransomware) đánh cắp mật khẩu Facebook, ngân hàng của em!"
      },
      {
        title: "3. Phần mềm Mã nguồn mở & Miễn phí (FOSS)",
        status: "✨ KHUYÊN DÙNG TRONG GIÁO DỤC",
        color: "var(--cyan)",
        exp: "Tác giả công bố miễn phí theo các giấy phép tự do (GPL, MIT, Apache). Bất kì ai cũng có thể tải về sử dụng, nghiên cứu và học tập.",
        warning: "Tiêu biểu: Bộ gõ UniKey (Phạm Kim Long), hệ điều hành Linux, bộ văn phòng LibreOffice, ngôn ngữ Python."
      },
      {
        title: "4. Giấy phép Mở Creative Commons (CC)",
        status: "✨ TÀI NGUYÊN SỐ MỞ TIÊU CHUẨN",
        color: "var(--amber-light)",
        exp: "Cho phép công chúng tái sử dụng hình ảnh, âm thanh, bài giảng với điều kiện đơn giản: Phải ghi công tác giả (CC-BY).",
        warning: "Rất phù hợp để học sinh THPT Na Rì tìm hình ảnh làm slide thuyết trình mà không lo vi phạm bản quyền!"
      }
    ];

    function loadLicenceSim(idx) {
      playSound('click');
      for (let i = 1; i <= 4; i++) {
        document.getElementById('lic-card-' + i).classList.remove('active');
      }
      document.getElementById('lic-card-' + idx).classList.add('active');

      const d = licDetails[idx];
      document.getElementById('licence-analysis-box').innerHTML = \`
        <div>
          <div style="font-size:16px; font-weight:800; color:#FFF; margin-bottom:6px;">\${d.title}</div>
          <div style="font-size:13px; font-weight:800; color:\${d.color}; margin-bottom:10px;">\${d.status}</div>
          <p style="font-size:13px; color:#E2E8F0; line-height:1.55; margin-bottom:10px;">\${d.exp}</p>
        </div>
        <div style="background:rgba(255,255,255,0.05); border-radius:10px; padding:10px 14px; border:1px solid rgba(255,255,255,0.1); font-size:12px; color:var(--ink-soft);">
          💡 \${d.warning}
        </div>
      \`;
    }

    loadLicenceSim(1);

    /* ─── SLIDE 13: MINI QUIZ 5 CÂU TRẮC NGHIỆM ─── */
    const quizData = [
      {
        q: "Hành vi nào sau đây thể hiện đúng chuẩn mực văn hoá và đạo đức khi tham gia môi trường số?",
        tag: "Đạo đức & Văn hoá số",
        options: [
          "Đăng ảnh chụp lén khoảnh khắc bạn cùng lớp trớ trêu lên mạng xã hội để mọi người cùng vui",
          "Kiểm chứng tính chính xác của thông tin từ nguồn đáng tin cậy trước khi bấm nút chia sẻ",
          "Chia sẻ ngay các bài viết có tiêu đề giật gân, li kì mà không cần đọc kĩ hay kiểm tra",
          "Tham gia bình luận xúc phạm người khác trên mạng vì cho rằng tài khoản của mình là ẩn danh"
        ],
        answer: 1,
        explain: "Kiểm chứng nguồn tin trước khi chia sẻ là trách nhiệm của mỗi công dân số nhằm ngăn chặn tin giả và bảo vệ cộng đồng mạng."
      },
      {
        q: "Theo Nghị định 15/2020/NĐ-CP của Chính phủ, người có hành vi chia sẻ thông tin sai sự thật trên mạng xã hội có thể bị phạt tiền ở mức nào?",
        tag: "Pháp luật mạng",
        options: [
          "Phạt tiền từ 1.000.000 đồng đến 2.000.000 đồng",
          "Phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng",
          "Phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng",
          "Không bị phạt tiền mà chỉ bị khoá tài khoản mạng xã hội 30 ngày"
        ],
        answer: 2,
        explain: "Theo Điều 101 Nghị định 15/2020/NĐ-CP, hành vi cung cấp, chia sẻ thông tin giả mạo, sai sự thật trên mạng xã hội bị phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng."
      },
      {
        q: "Quyền tác giả bao gồm hai bộ phận cấu thành nào sau đây theo Luật Sở hữu trí tuệ?",
        tag: "Quyền tác giả",
        options: [
          "Quyền nhân thân và Quyền tài sản",
          "Quyền sở hữu và Quyền sử dụng",
          "Quyền kiểm duyệt và Quyền xuất bản",
          "Quyền tác giả và Quyền kinh doanh"
        ],
        answer: 0,
        explain: "Quyền tác giả gồm Quyền nhân thân (gắn liền với tác giả, không thể bán) và Quyền tài sản (lợi ích kinh tế, có thể chuyển giao, bán bản quyền)."
      },
      {
        q: "Khi một người dùng mua bản quyền hệ điều hành Windows hoặc gói Microsoft Office, người đó đã nhận được quyền gì?",
        tag: "Bản quyền vs Licence",
        options: [
          "Được phép tự do bẻ khoá và sao chép phần mềm sang không giới hạn số lượng máy tính",
          "Được phép chỉnh sửa mã nguồn gốc của phần mềm và đổi tên thành sản phẩm của riêng mình",
          "Trở thành chủ sở hữu toàn bộ mã nguồn và nắm toàn quyền kinh doanh bán lại phần mềm",
          "Nhận được Giấy phép quyền sử dụng (Licence) để cài đặt và sử dụng phần mềm trên số lượng máy nhất định"
        ],
        answer: 3,
        explain: "Người dùng chỉ mua Giấy phép quyền sử dụng (Licence) với các điều khoản giới hạn số máy; quyền sở hữu trí tuệ gốc vẫn thuộc về tập đoàn sáng lập."
      },
      {
        q: "Hành vi sử dụng phần mềm bẻ khoá (crack) thay vì mua bản quyền là hành vi:",
        tag: "Ý thức bản quyền",
        options: [
          "Hợp pháp nếu chỉ sử dụng cho mục đích học tập cá nhân phi thương mại",
          "Vi phạm pháp luật về quyền tác giả và tiềm ẩn nguy cơ cao bị lây nhiễm mã độc",
          "Được pháp luật khuyến khích vì giúp tiết kiệm chi phí cho người dùng",
          "Chỉ vi phạm đạo đức ứng xử chứ hoàn toàn không vi phạm pháp luật"
        ],
        answer: 1,
        explain: "Dùng phần mềm crack là hành vi vi phạm pháp luật xâm phạm quyền tài sản của tác giả, đồng thời các công cụ bẻ khoá thường chứa sẵn Trojan, Spyware để đánh cắp dữ liệu."
      }
    ];

    let currentQuizIndex = 0;
    let quizScore = 0;
    let quizAnswered = false;

    function renderQuiz() {
      quizAnswered = false;
      const data = quizData[currentQuizIndex];
      document.getElementById('quiz-q-num').innerText = 'CÂU HỎI ' + (currentQuizIndex + 1) + ' / ' + quizData.length;
      document.getElementById('quiz-topic-tag').innerText = data.tag;
      document.getElementById('quiz-q-text').innerText = data.q;
      document.getElementById('btn-next-quiz').style.display = 'none';

      const exp = document.getElementById('quiz-explain-box');
      exp.style.display = 'none';

      const letters = ['A', 'B', 'C', 'D'];
      const container = document.getElementById('quiz-options-container');
      container.innerHTML = data.options.map(function(opt, idx) {
        return '<button class="card" onclick="selectQuizAnswer(' + idx + ')" id="quiz-opt-' + idx + '" style="text-align:left; cursor:pointer; padding:11px 16px; display:flex; align-items:center; gap:10px;">' +
          '<span style="width:26px; height:26px; border-radius:50%; background:rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:12px; color:#FFF; flex-shrink:0;">' + letters[idx] + '</span>' +
          '<span style="font-size:13px; color:#E2E8F0;">' + opt + '</span>' +
        '</button>';
      }).join('');
    }

    function selectQuizAnswer(idx) {
      if (quizAnswered) return;
      quizAnswered = true;
      const data = quizData[currentQuizIndex];
      const isCorrect = idx === data.answer;

      for (let i = 0; i < data.options.length; i++) {
        const btn = document.getElementById('quiz-opt-' + i);
        btn.style.cursor = 'default';
        if (i === data.answer) {
          btn.style.borderColor = 'var(--emerald)';
          btn.style.background = 'rgba(16,185,129,0.2)';
        } else if (i === idx) {
          btn.style.borderColor = 'var(--rose)';
          btn.style.background = 'rgba(239,68,68,0.2)';
        }
      }

      const exp = document.getElementById('quiz-explain-box');
      exp.style.display = 'block';

      if (isCorrect) {
        playSound('correct');
        quizScore++;
        document.getElementById('quiz-score-indicator').innerText = 'Điểm: ' + quizScore + ' / 5';
        exp.style.background = 'rgba(16,185,129,0.15)';
        exp.style.border = '1px solid var(--emerald)';
        exp.style.color = '#34D399';
        exp.innerHTML = '🎉 <strong>CHÍNH XÁC!</strong> ' + data.explain;
      } else {
        playSound('wrong');
        exp.style.background = 'rgba(239,68,68,0.15)';
        exp.style.border = '1px solid var(--rose)';
        exp.style.color = '#F87171';
        exp.innerHTML = '⚠️ <strong>CHƯA ĐÚNG!</strong> Đáp án đúng là <strong>' + ['A', 'B', 'C', 'D'][data.answer] + '</strong>.<br/>' + data.explain;
      }

      document.getElementById('btn-next-quiz').style.display = 'inline-flex';
      if (currentQuizIndex === quizData.length - 1) {
        document.getElementById('btn-next-quiz').innerHTML = '<span>Xem kết quả chung cuộc 🏆</span>';
      }
    }

    function nextQuizQuestion() {
      playSound('click');
      if (currentQuizIndex < quizData.length - 1) {
        currentQuizIndex++;
        renderQuiz();
      } else {
        triggerFireworks();
        alert('Chúc mừng em đã hoàn thành Mini Quiz Bài 11 với số điểm: ' + quizScore + ' / 5 điểm! ' + (quizScore >= 4 ? 'Xuất sắc đạt danh hiệu Công dân số Văn minh & Tôn trọng bản quyền!' : 'Hãy xem lại bài giảng để đạt 5/5 nhé!'));
        nextSlide();
      }
    }

    /* ─── SLIDE 14: SƠ ĐỒ TƯ DUY (MINDMAP) ─── */
    function focusMindmap(branch) {
      playSound('click');
      for (let i = 1; i <= 3; i++) {
        document.getElementById('mm-branch-' + i).classList.remove('active-card');
      }
      document.getElementById('mm-branch-' + branch).classList.add('active-card');
    }

    /* ─── HIỆU ỨNG PHÁO HOA CANVAS ─── */
    function triggerFireworks() {
      playSound('correct');
      const canvas = document.getElementById('confettiCanvas');
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const colors = ['#8B5CF6', '#C4B5FD', '#38BDF8', '#F59E0B', '#10B981', '#FFFFFF'];

      for (let i = 0; i < 100; i++) {
        particles.push({
          x: canvas.width / 2,
          y: canvas.height * 0.45,
          vx: (Math.random() - 0.5) * 18,
          vy: (Math.random() - 0.65) * 18,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          rot: Math.random() * 360,
          vrot: (Math.random() - 0.5) * 14
        });
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        particles.forEach(function(p) {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.38;
          p.alpha -= 0.013;
          p.rot += p.vrot;
          if (p.alpha > 0) {
            alive = true;
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
          }
        });
        if (alive) requestAnimationFrame(animate);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      animate();
    }

    window.addEventListener('resize', () => {
      const cvs = document.getElementById('confettiCanvas');
      if (cvs) { cvs.width = window.innerWidth; cvs.height = window.innerHeight; }
    });

    window.addEventListener('DOMContentLoaded', () => {
      updateSlide();
    });
  </script>
</body>
</html>
`;

const targetFile = path.resolve('public', 'bai-11-trinh-chieu.html');
fs.writeFileSync(targetFile, htmlContent, 'utf8');
console.log('✅ Đã tạo thành công public/bai-11-trinh-chieu.html chuẩn Tin 12!');
