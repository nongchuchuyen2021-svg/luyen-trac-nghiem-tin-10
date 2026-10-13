import fs from 'node:fs';
import path from 'node:path';

const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bài 12: Phần mềm thiết kế đồ hoạ — Tin học 10 · THPT Na Rì</title>
  <style>
    /* ─── RESET & HỆ THỐNG BIẾN MÀU SẮC CHUẨN TIN 12 (THEME GRAPHIC DESIGN & VECTOR STUDIO) ─── */
    :root {
      --bg: #060914;
      --bg-card: rgba(11, 18, 38, 0.94);
      --border-card: rgba(6, 182, 212, 0.22);
      --ink: #FFFFFF;
      --ink-soft: #94A3B8;
      --cyan: #06B6D4;
      --cyan-light: #67E8F9;
      --cyan-glow: rgba(6, 182, 212, 0.4);
      --purple: #8B5CF6;
      --purple-light: #C4B5FD;
      --purple-glow: rgba(139, 92, 246, 0.38);
      --pink: #EC4899;
      --pink-light: #F472B6;
      --pink-glow: rgba(236, 72, 153, 0.4);
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

    /* ─── NỀN GRADIENT VECTOR & MESH CỰC ĐẸP ─── */
    .bg-mesh {
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: radial-gradient(circle at 15% 20%, rgba(6, 182, 212, 0.28) 0%, transparent 45%),
                  radial-gradient(circle at 85% 80%, rgba(236, 72, 153, 0.22) 0%, transparent 45%),
                  radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.18) 0%, transparent 60%),
                  radial-gradient(circle at 75% 25%, rgba(16, 185, 129, 0.16) 0%, transparent 40%);
      z-index: 0;
      pointer-events: none;
      animation: meshPulse 16s ease-in-out infinite alternate;
    }

    @keyframes meshPulse {
      0% { transform: scale(1) translate(0, 0); opacity: 0.9; }
      100% { transform: scale(1.08) translate(-15px, 12px); opacity: 1; }
    }

    /* Lưới toạ độ đồ hoạ & Vector Paths động */
    .cyber-grid {
      position: fixed; inset: 0;
      background-image: 
        linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none; z-index: 1;
    }

    /* Ký hiệu Đồ hoạ trôi lơ lửng */
    .floating-symbols {
      position: fixed; inset: 0;
      pointer-events: none; z-index: 1;
      overflow: hidden;
    }
    .float-tag {
      position: absolute;
      font-family: var(--font-mono); font-size: 13px; font-weight: 700;
      color: rgba(103, 232, 249, 0.25);
      border: 1px solid rgba(6, 182, 212, 0.2);
      padding: 4px 12px; border-radius: 999px;
      background: rgba(11, 18, 38, 0.45);
      animation: floatUp 24s linear infinite;
    }
    @keyframes floatUp {
      0%   { transform: translateY(105vh) rotate(0deg); opacity: 0; }
      10%  { opacity: 0.55; }
      90%  { opacity: 0.55; }
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
      box-shadow: 0 35px 80px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.12);
      padding: 22px 36px 26px 36px;
      display: flex; flex-direction: column;
      opacity: 0; pointer-events: none;
      transform: translateX(70px) scale(0.96);
      transition: var(--transition-slide);
      overflow-y: auto;
    }
    .slide::-webkit-scrollbar { width: 6px; }
    .slide::-webkit-scrollbar-thumb { background: rgba(6, 182, 212, 0.3); border-radius: 4px; }
    .slide.active { opacity: 1; pointer-events: auto; transform: translateX(0) scale(1); z-index: 3; }
    .slide.prev   { opacity: 0; pointer-events: none; transform: translateX(-70px) scale(0.96); }

    /* ─── HEADER MỖI SLIDE ─── */
    .slide-header {
      display: flex; justify-content: space-between; align-items: flex-start;
      margin-bottom: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 8px; flex-shrink: 0;
    }
    .slide-badge {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 4px 13px; border-radius: 20px;
      font-size: 11.5px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
      background: rgba(6, 182, 212, 0.2); color: var(--cyan-light);
      border: 1px solid rgba(6, 182, 212, 0.35); margin-bottom: 4px;
    }
    .slide-badge.purple  { background: rgba(139, 92, 246, 0.2);  color: var(--purple-light); border-color: rgba(139, 92, 246, 0.35); }
    .slide-badge.pink    { background: rgba(236, 72, 153, 0.2);  color: var(--pink-light);   border-color: rgba(236, 72, 153, 0.35); }
    .slide-badge.amber   { background: rgba(245, 158, 11, 0.22); color: var(--amber-light);  border-color: rgba(245, 158, 11, 0.35); }
    .slide-badge.emerald { background: rgba(16, 185, 129, 0.22); color: var(--emerald-light);border-color: rgba(16, 185, 129, 0.35); }
    .slide-badge.rose    { background: rgba(239, 68, 68, 0.22);  color: var(--rose-light);   border-color: rgba(239, 68, 68, 0.35); }

    .slide-title {
      font-size: 25px; font-weight: 800; letter-spacing: -0.4px; line-height: 1.25;
      background: linear-gradient(135deg, #FFFFFF 30%, #CFFAFE 70%, #F472B6 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .slide-subtitle {
      font-size: 13.5px; color: var(--ink-soft); margin-top: 2px;
    }

    /* ─── THANH ĐIỀU KHIỂN HIỆN TỪNG Ý (PROGRESSIVE REVEAL) ─── */
    .reveal-toolbar {
      display: flex; align-items: center; gap: 8px; flex-shrink: 0;
    }
    .reveal-btn {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.16);
      color: var(--ink); border-radius: 8px;
      padding: 5px 12px; font-size: 12px; font-weight: 600; cursor: pointer;
      display: inline-flex; align-items: center; gap: 6px;
      transition: all 0.2s ease;
    }
    .reveal-btn:hover {
      background: rgba(6, 182, 212, 0.25);
      border-color: var(--cyan);
      transform: translateY(-1px);
    }
    .reveal-btn.primary {
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.35), rgba(139, 92, 246, 0.35));
      border-color: rgba(6, 182, 212, 0.5);
      color: #FFFFFF;
    }
    .reveal-status {
      font-size: 11.5px; color: var(--ink-soft); font-family: var(--font-mono);
      padding: 4px 8px; background: rgba(0, 0, 0, 0.25); border-radius: 6px;
    }

    /* ─── PHẦN THÂN NỘI DUNG SLIDE ─── */
    .slide-body {
      flex: 1; display: flex; flex-direction: column; justify-content: center;
      gap: 14px; position: relative; min-height: 0;
    }

    /* ─── KHỐI HIỆN TỪNG BƯỚC (.reveal-item) ─── */
    .reveal-item {
      opacity: 0.12; filter: blur(1.5px);
      transform: translateY(10px);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      pointer-events: none;
    }
    .reveal-item.revealed {
      opacity: 1; filter: blur(0);
      transform: translateY(0);
      pointer-events: auto;
    }

    /* ─── CÁC THÀNH PHẦN GIAO DIỆN CHUẨN ─── */
    .glass-card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-md);
      padding: 16px 20px;
      transition: all 0.25s ease;
      position: relative; overflow: hidden;
    }
    .glass-card:hover {
      border-color: rgba(6, 182, 212, 0.4);
      background: rgba(255, 255, 255, 0.06);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }
    .glass-card.highlight {
      border-color: rgba(6, 182, 212, 0.5);
      background: linear-gradient(145deg, rgba(6, 182, 212, 0.12), rgba(139, 92, 246, 0.08));
    }
    .glass-card.purple-glow {
      border-color: rgba(139, 92, 246, 0.45);
      background: linear-gradient(145deg, rgba(139, 92, 246, 0.12), rgba(236, 72, 153, 0.08));
    }
    .glass-card.pink-glow {
      border-color: rgba(236, 72, 153, 0.45);
      background: linear-gradient(145deg, rgba(236, 72, 153, 0.12), rgba(245, 158, 11, 0.08));
    }

    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
    .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }

    /* ─── THANH ĐIỀU HƯỚNG CỐ ĐỊNH PHÍA ĐÁY (.deck-nav) ─── */
    .deck-nav {
      position: fixed; bottom: 14px; left: 50%;
      transform: translateX(-50%);
      display: flex; align-items: center; gap: 12px;
      padding: 8px 18px;
      background: rgba(11, 18, 38, 0.88);
      border: 1px solid rgba(6, 182, 212, 0.3);
      border-radius: 999px;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.65), 0 0 20px rgba(6, 182, 212, 0.2);
      z-index: 100;
    }
    .nav-btn {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #FFFFFF; width: 36px; height: 36px;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      cursor: pointer; font-size: 16px; transition: all 0.2s ease;
    }
    .nav-btn:hover {
      background: var(--cyan); color: #060914;
      border-color: var(--cyan); transform: scale(1.1);
      box-shadow: 0 0 15px var(--cyan-glow);
    }
    .nav-counter {
      font-family: var(--font-mono); font-size: 13px; font-weight: 700;
      color: var(--cyan-light); min-width: 60px; text-align: center;
    }
    .seek-container {
      width: 220px; height: 8px; background: rgba(255, 255, 255, 0.12);
      border-radius: 4px; overflow: hidden; cursor: pointer; position: relative;
    }
    .seek-bar {
      height: 100%; width: 6.66%;
      background: linear-gradient(90deg, var(--cyan), var(--pink));
      border-radius: 4px; transition: width 0.3s ease;
    }

    /* ─── MODAL MỤC LỤC TỔNG (TOC) ─── */
    .toc-modal {
      position: fixed; inset: 0; background: rgba(6, 9, 20, 0.85);
      backdrop-filter: blur(24px); z-index: 200;
      display: flex; align-items: center; justify-content: center;
      opacity: 0; pointer-events: none; transition: all 0.3s ease;
    }
    .toc-modal.open { opacity: 1; pointer-events: auto; }
    .toc-box {
      width: 90vw; max-width: 960px; max-height: 82vh;
      background: rgba(11, 18, 38, 0.95);
      border: 1px solid rgba(6, 182, 212, 0.4);
      border-radius: var(--radius-lg); padding: 28px 34px;
      box-shadow: 0 30px 70px rgba(0, 0, 0, 0.8), 0 0 30px rgba(6, 182, 212, 0.25);
      display: flex; flex-direction: column; gap: 18px;
    }
    .toc-header {
      display: flex; justify-content: space-between; align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 12px;
    }
    .toc-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
      overflow-y: auto; max-height: 60vh; padding-right: 6px;
    }
    .toc-item {
      padding: 12px 14px; background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm);
      cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; gap: 10px;
    }
    .toc-item:hover, .toc-item.current {
      background: rgba(6, 182, 212, 0.18);
      border-color: var(--cyan); transform: translateX(3px);
    }
    .toc-item-num {
      font-family: var(--font-mono); font-size: 13px; font-weight: 800;
      color: var(--cyan); min-width: 28px;
    }
    .toc-item-title { font-size: 13px; font-weight: 600; line-height: 1.3; }

    /* ─── CANVAS CONFETTI PHÁO HOA TOÀN MÀN HÌNH ─── */
    #confettiCanvas {
      position: fixed; inset: 0; pointer-events: none; z-index: 999;
    }

    /* ═════════════════════════════════════════════════════════════
       STYLING CHO CÁC PHẦN TỬ ĐẶC BIỆT CỦA BÀI 12
    ═════════════════════════════════════════════════════════════ */

    /* Slide 1: Bìa */
    .hero-container {
      display: flex; align-items: center; justify-content: space-between; gap: 30px; height: 100%;
    }
    .hero-left { flex: 1.1; display: flex; flex-direction: column; gap: 18px; }
    .hero-right {
      flex: 0.9; display: flex; align-items: center; justify-content: center;
      position: relative;
    }
    .studio-orb {
      width: 320px; height: 320px; border-radius: 50%;
      background: radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(236, 72, 153, 0.2) 60%, transparent 80%);
      position: absolute; filter: blur(35px); z-index: 0;
      animation: pulseOrb 6s ease-in-out infinite alternate;
    }
    @keyframes pulseOrb {
      0% { transform: scale(0.9); opacity: 0.6; }
      100% { transform: scale(1.15); opacity: 0.95; }
    }
    .studio-svg-preview {
      position: relative; z-index: 1;
      width: 330px; height: 330px;
      background: rgba(11, 18, 38, 0.8);
      border: 2px solid rgba(6, 182, 212, 0.4);
      border-radius: 24px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
      display: flex; align-items: center; justify-content: center;
      backdrop-filter: blur(10px);
    }

    /* Slide 2: Interactive Before/After Split Slider */
    .split-slider-box {
      position: relative; width: 100%; height: 340px;
      border-radius: var(--radius-md); overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
    }
    .split-layer {
      position: absolute; inset: 0; width: 100%; height: 100%;
      display: flex; align-items: center; justify-content: center;
    }
    .split-layer.bitmap {
      background: #0f172a;
      background-image: radial-gradient(#1e293b 1px, transparent 1px);
      background-size: 16px 16px;
    }
    .split-layer.vector {
      background: #090d1e;
      clip-path: inset(0 0 0 50%);
    }
    .split-handle {
      position: absolute; top: 0; bottom: 0; left: 50%; width: 4px;
      background: #FFFFFF; cursor: ew-resize; z-index: 10;
      box-shadow: 0 0 15px var(--cyan);
    }
    .split-handle-btn {
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 38px; height: 38px; border-radius: 50%;
      background: var(--cyan); color: #060914;
      display: flex; align-items: center; justify-content: center;
      font-size: 16px; font-weight: 900; box-shadow: 0 0 20px var(--cyan-glow);
    }

    /* Slide 4: Interactive Pixel Drawing Grid */
    .pixel-grid-studio {
      display: grid; grid-template-columns: repeat(12, 1fr); gap: 2px;
      background: rgba(0, 0, 0, 0.4); padding: 8px; border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.1); width: 260px; height: 260px;
    }
    .pixel-cell {
      background: #1e293b; border-radius: 2px; cursor: pointer;
      transition: background-color 0.15s ease;
    }
    .pixel-cell.active { background: #06B6D4; box-shadow: 0 0 6px var(--cyan); }
    .pixel-cell.pink { background: #EC4899; box-shadow: 0 0 6px var(--pink); }

    /* Slide 5: LAB 1 - Pixel Zoom & Matrix Inspector */
    .zoom-lab-container {
      display: grid; grid-template-columns: 1fr 1fr; gap: 20px; height: 360px;
    }
    .zoom-viewer {
      position: relative; height: 100%; border-radius: var(--radius-md);
      background: #050814; border: 1px solid rgba(6, 182, 212, 0.25);
      overflow: hidden; display: flex; flex-direction: column;
    }
    .zoom-canvas-area {
      flex: 1; display: flex; align-items: center; justify-content: center;
      overflow: hidden; position: relative;
    }
    .pixel-grid-overlay {
      position: absolute; inset: 0; pointer-events: none; opacity: 0;
      background-size: 16px 16px;
      background-image: 
        linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px);
      transition: opacity 0.3s ease;
    }

    /* Slide 6: LAB 2 - Bézier Curve Interactive Simulator */
    .bezier-lab-box {
      width: 100%; height: 320px; background: #080d21;
      border-radius: var(--radius-md); border: 1px solid rgba(139, 92, 246, 0.3);
      position: relative; overflow: hidden;
    }
    .bezier-svg { width: 100%; height: 100%; cursor: crosshair; }
    .bezier-point {
      cursor: grab; fill: #FFFFFF; stroke: var(--pink); stroke-width: 3px;
      transition: r 0.2s ease;
    }
    .bezier-point:hover { r: 9; fill: var(--cyan); }
    .bezier-point:active { cursor: grabbing; r: 10; }

    /* Slide 9: LAB 3 - Smart Design Classifier */
    .classifier-card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-md); padding: 14px 18px;
      display: flex; align-items: center; justify-content: space-between;
      transition: all 0.25s ease;
    }
    .classifier-card:hover {
      background: rgba(255, 255, 255, 0.07);
      border-color: rgba(6, 182, 212, 0.3);
    }
    .classifier-choice-btn {
      padding: 6px 14px; border-radius: 8px; font-size: 12.5px; font-weight: 700;
      border: 1px solid rgba(255, 255, 255, 0.18); cursor: pointer;
      background: rgba(255, 255, 255, 0.08); color: #FFFFFF;
      transition: all 0.2s ease; display: inline-flex; align-items: center; gap: 5px;
    }
    .classifier-choice-btn:hover {
      transform: translateY(-2px); border-color: var(--cyan);
      background: rgba(6, 182, 212, 0.25);
    }
    .classifier-choice-btn.gimp:hover {
      border-color: var(--purple); background: rgba(139, 92, 246, 0.25);
    }

    /* Slide 10: Sơ đồ giải phẫu Inkscape tương tác */
    .inkscape-ui-anatomy {
      display: grid; grid-template-columns: 80px 1fr 220px;
      grid-template-rows: 40px 1fr 46px;
      gap: 8px; width: 100%; height: 350px;
      background: #090e23; border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-md); padding: 8px;
    }
    .ui-zone {
      border: 1px dashed rgba(255, 255, 255, 0.15); border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-size: 12px; font-weight: 700; color: var(--ink-soft);
      cursor: pointer; transition: all 0.25s ease; text-align: center;
      padding: 6px;
    }
    .ui-zone:hover, .ui-zone.active {
      border-color: var(--cyan); color: #FFFFFF;
      background: rgba(6, 182, 212, 0.15);
      box-shadow: 0 0 15px rgba(6, 182, 212, 0.25);
    }
    .ui-zone.toolbox { grid-row: 2; grid-column: 1; }
    .ui-zone.controls { grid-row: 1; grid-column: 1 / 3; }
    .ui-zone.canvas { grid-row: 2; grid-column: 2; background: #040714; }
    .ui-zone.palette { grid-row: 3; grid-column: 1 / 3; }
    .ui-zone.inspector { grid-row: 1 / 4; grid-column: 3; background: rgba(255, 255, 255, 0.02); }

    /* Slide 11: LAB 4 - Inkscape Virtual Studio */
    .studio-wrapper {
      display: grid; grid-template-columns: 75px 1fr 280px;
      grid-template-rows: 1fr 48px; gap: 8px; height: 380px;
      background: #070c20; border-radius: var(--radius-md);
      border: 1px solid rgba(6, 182, 212, 0.3); padding: 8px;
    }
    .studio-toolbox {
      grid-column: 1; grid-row: 1; display: flex; flex-direction: column;
      gap: 6px; background: rgba(0, 0, 0, 0.35); padding: 6px; border-radius: 8px;
    }
    .tool-btn {
      width: 100%; height: 42px; border-radius: 8px;
      background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.1);
      color: #FFFFFF; display: flex; flex-direction: column; align-items: center;
      justify-content: center; font-size: 14px; cursor: pointer; transition: all 0.2s ease;
      font-weight: 700;
    }
    .tool-btn span { font-size: 9.5px; font-weight: 500; color: var(--ink-soft); }
    .tool-btn:hover, .tool-btn.active {
      background: var(--cyan); color: #060914; border-color: var(--cyan);
      box-shadow: 0 0 12px var(--cyan-glow);
    }
    .tool-btn:hover span, .tool-btn.active span { color: #060914; }
    .studio-canvas-container {
      grid-column: 2; grid-row: 1; position: relative;
      background: #020510; border-radius: 8px; overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.08); cursor: crosshair;
    }
    .studio-palette-bar {
      grid-column: 1 / 3; grid-row: 2;
      display: flex; align-items: center; gap: 6px;
      background: rgba(0, 0, 0, 0.4); padding: 6px 10px; border-radius: 8px;
      overflow-x: auto;
    }
    .color-swatch {
      min-width: 28px; height: 28px; border-radius: 6px;
      border: 2px solid rgba(255, 255, 255, 0.3); cursor: pointer;
      transition: all 0.2s ease; flex-shrink: 0;
    }
    .color-swatch:hover {
      transform: scale(1.2); border-color: #FFFFFF; box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
    .studio-sidebar {
      grid-column: 3; grid-row: 1 / 3;
      background: rgba(0, 0, 0, 0.35); border-radius: 8px; padding: 12px;
      display: flex; flex-direction: column; gap: 10px;
    }

    /* Slide 13: Quiz Arena */
    .quiz-card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: var(--radius-md); padding: 14px 20px;
      cursor: pointer; transition: all 0.2s ease;
      display: flex; align-items: center; gap: 14px;
    }
    .quiz-card:hover {
      background: rgba(6, 182, 212, 0.15);
      border-color: var(--cyan); transform: translateX(4px);
    }
    .quiz-card.correct {
      background: rgba(16, 185, 129, 0.25) !important;
      border-color: var(--emerald) !important; color: #FFFFFF;
    }
    .quiz-card.wrong {
      background: rgba(239, 68, 68, 0.25) !important;
      border-color: var(--rose) !important;
    }
    .quiz-opt-letter {
      width: 32px; height: 32px; border-radius: 50%;
      background: rgba(255, 255, 255, 0.1); display: flex; align-items: center;
      justify-content: center; font-weight: 800; font-size: 14px;
    }

    /* Slide 14: Mindmap */
    .mindmap-node {
      background: rgba(11, 18, 38, 0.85);
      border: 1.5px solid rgba(6, 182, 212, 0.3);
      border-radius: var(--radius-md); padding: 14px;
      cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .mindmap-node:hover, .mindmap-node.expanded {
      border-color: var(--cyan);
      box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
      background: rgba(6, 182, 212, 0.12);
      transform: translateY(-3px);
    }
  </style>
</head>
<body>

  <!-- NỀN HIỆU ỨNG PHÒNG THIẾT KẾ ĐỒ HOẠ SỐ -->
  <div class="bg-mesh"></div>
  <div class="cyber-grid"></div>

  <!-- CÁC BIỂU TƯỢNG ĐỒ HOẠ TRÔI LƠ LỬNG -->
  <div class="floating-symbols">
    <div class="float-tag" style="left: 6%; animation-delay: 0s;">&lt;svg&gt;</div>
    <div class="float-tag" style="left: 20%; animation-delay: 7s;">d="M 10 80 C 40 10..."</div>
    <div class="float-tag" style="left: 38%; animation-delay: 14s;">Pixel Grid: 1920×1080</div>
    <div class="float-tag" style="left: 55%; animation-delay: 3s;">GIMP · Bitmap Layer</div>
    <div class="float-tag" style="left: 72%; animation-delay: 10s;">Inkscape · Bézier ✎</div>
    <div class="float-tag" style="left: 88%; animation-delay: 18s;">Fill: #06B6D4 | Stroke: #EC4899</div>
  </div>

  <!-- CANVAS CONFETTI PHÁO HOA KHI CHIẾN THẮNG -->
  <canvas id="confettiCanvas"></canvas>

  <!-- DECK CONTAINER CHÍNH -->
  <div class="deck-container">

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 1: BÌA BÀI GIẢNG ĐIỆN TỬ TƯƠNG TÁC
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide active" id="slide-1" data-slide="1">
      <div class="slide-header">
        <div>
          <div class="slide-badge purple">Chủ đề 4 · Ứng dụng tin học · Bài 12</div>
          <h1 class="slide-title">PHẦN MỀM THIẾT KẾ ĐỒ HOẠ</h1>
          <p class="slide-subtitle">Tin học 10 · SGK Kết nối tri thức với cuộc sống · Trường THPT Na Rì</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-1-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-1" onclick="revealNext(1)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(1)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="hero-container">
          <div class="hero-left">
            <div class="glass-card highlight reveal-item revealed" data-step="1">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <span style="font-size: 26px;">🎨</span>
                <span style="font-size: 16px; font-weight: 800; color: var(--cyan-light);">HAI THẾ GIỚI ĐỒ HOẠ MÁY TÍNH</span>
              </div>
              <p style="font-size: 14.5px; line-height: 1.6; color: #E2E8F0;">
                Mọi hình ảnh trên máy tính được sinh ra từ đâu? Khám phá sự đối lập giữa <strong style="color: var(--pink-light);">Đồ hoạ điểm ảnh (Bitmap)</strong> tạo từ hàng triệu viên gạch màu và <strong style="color: var(--cyan-light);">Đồ hoạ Vector</strong> vẽ bằng công thức toán học sắc nét vĩnh cửu.
              </p>
            </div>

            <div class="grid-2 reveal-item" data-step="2">
              <div class="glass-card purple-glow" style="padding: 14px 16px;">
                <div style="font-size: 13px; font-weight: 700; color: var(--purple-light); margin-bottom: 4px;">🖼️ GIMP (GNU Image)</div>
                <div style="font-size: 12.5px; color: var(--ink-soft); line-height: 1.4;">Phần mềm nguồn mở xử lý ảnh Bitmap, cắt ghép, chỉnh sáng, lớp ảnh (tương đương Photoshop).</div>
              </div>
              <div class="glass-card pink-glow" style="padding: 14px 16px;">
                <div style="font-size: 13px; font-weight: 700; color: var(--pink-light); margin-bottom: 4px;">🖌️ Inkscape (Vector Studio)</div>
                <div style="font-size: 12.5px; color: var(--ink-soft); line-height: 1.4;">Phần mềm nguồn mở vẽ hình học, logo, đường cong Bézier, lưu chuẩn mở SVG (tương đương Illustrator).</div>
              </div>
            </div>

            <div class="glass-card reveal-item" data-step="3" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.3);">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="font-size: 13px; font-weight: 800; color: var(--emerald-light);">🎯 4 VÙNG LÀM VIỆC & BỘ ĐÔI MÀU SẮC</div>
                  <div style="font-size: 12px; color: var(--ink-soft); margin-top: 2px;">Làm chủ Toolbox, Canvas, Palette và 2 thuộc tính tách biệt: Màu tô (Fill) & Màu viền (Stroke).</div>
                </div>
                <span style="font-size: 22px;">📐</span>
              </div>
            </div>
          </div>

          <div class="hero-right">
            <div class="studio-orb"></div>
            <div class="studio-svg-preview">
              <svg width="280" height="280" viewBox="0 0 280 280" style="filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));">
                <!-- Vòng tròn nền toạ độ -->
                <circle cx="140" cy="140" r="120" fill="none" stroke="rgba(6, 182, 212, 0.25)" stroke-width="1.5" stroke-dasharray="6 4" />
                <circle cx="140" cy="140" r="85" fill="none" stroke="rgba(236, 72, 153, 0.25)" stroke-width="1" />
                
                <!-- Hình minh hoạ Vector: Đa giác + Đường Bézier cong mềm -->
                <polygon points="140,40 220,180 60,180" fill="rgba(6, 182, 212, 0.15)" stroke="#06B6D4" stroke-width="2.5" />
                <path d="M 60,180 Q 140,80 220,180" fill="none" stroke="#EC4899" stroke-width="3.5" />
                <circle cx="140" cy="130" r="32" fill="#8B5CF6" fill-opacity="0.6" stroke="#C4B5FD" stroke-width="2" />
                
                <!-- Điểm neo toạ độ Anchor points -->
                <rect x="135" y="35" width="10" height="10" fill="#FFFFFF" stroke="#06B6D4" stroke-width="2" />
                <rect x="55" y="175" width="10" height="10" fill="#FFFFFF" stroke="#06B6D4" stroke-width="2" />
                <rect x="215" y="175" width="10" height="10" fill="#FFFFFF" stroke="#06B6D4" stroke-width="2" />
                
                <!-- Nhãn trung tâm -->
                <text x="140" y="235" text-anchor="middle" fill="#67E8F9" font-size="13" font-weight="700" font-family="system-ui">VECTOR ENGINE · 100% CRISP</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 2: KHỞI ĐỘNG - THẢM HOẠ IN CỜ HỘI THAO THPT NA RÌ
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-2" data-slide="2">
      <div class="slide-header">
        <div>
          <div class="slide-badge amber">Tình huống thực tế · Hội khoẻ Phù Đổng</div>
          <h1 class="slide-title">NGHỊCH LÝ IN CỜ HỘI THAO: VÌ SAO BỊ VỠ HẠT?</h1>
          <p class="slide-subtitle">Trải nghiệm tương tác kéo rèm: So sánh trực tiếp Bitmap chụp ảnh vs Vector Inkscape</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-2-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-2" onclick="revealNext(2)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(2)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2" style="margin-bottom: 10px;">
          <div class="glass-card reveal-item revealed" data-step="1" style="border-left: 4px solid var(--rose);">
            <div style="font-size: 13px; font-weight: 800; color: var(--rose-light); margin-bottom: 4px;">📸 BẠN KIÊN · DÙNG ẢNH CHỤP ĐIỆN THOẠI</div>
            <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.5;">
              Kiên lấy ảnh chụp logo lớp trên điện thoại (định dạng JPG) rồi phóng to gấp 10 lần để in cờ khổ lớn A1. Kết quả: viền răng cưa lởm chởm, mờ nhoè, vỡ hạt nhức mắt!
            </p>
          </div>
          <div class="glass-card reveal-item revealed" data-step="1" style="border-left: 4px solid var(--emerald);">
            <div style="font-size: 13px; font-weight: 800; color: var(--emerald-light); margin-bottom: 4px;">🖌️ BẠN VY · VẼ LẠI BẰNG INKSCAPE</div>
            <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.5;">
              Vy dùng Inkscape vẽ lại logo bằng các đường elip và chữ nghệ thuật (định dạng SVG). Dù phóng to in phông bạt sân khấu 10 mét, đường nét vẫn sắc lẹm, mịn màng!
            </p>
          </div>
        </div>

        <!-- BỘ KÉO RÈM SO SÁNH TRỰC QUAN BEFORE / AFTER -->
        <div class="split-slider-box reveal-item" data-step="2" id="splitSliderBox">
          <!-- Layer 1: Bitmap (Vỡ hạt răng cưa) -->
          <div class="split-layer bitmap">
            <div style="text-align: center;">
              <!-- Vẽ Logo mô phỏng vỡ hạt pixelation -->
              <svg width="240" height="240" viewBox="0 0 60 60" style="image-rendering: pixelated; width: 220px; height: 220px;">
                <!-- Giả lập các ô pixel thô to -->
                <rect x="20" y="8" width="20" height="8" fill="#FCA5A5" />
                <rect x="12" y="16" width="36" height="8" fill="#EF4444" />
                <rect x="8" y="24" width="44" height="12" fill="#DC2626" />
                <rect x="12" y="36" width="36" height="8" fill="#B91C1C" />
                <rect x="20" y="44" width="20" height="8" fill="#991B1B" />
                <text x="30" y="32" font-size="7" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="monospace">10A3</text>
              </svg>
              <div style="margin-top: 6px; font-size: 13px; font-weight: 800; color: var(--rose-light);">
                ⚠️ ẢNH CHỤP BITMAP (PHÓNG TO 10X ➔ VỠ HẠT PIXEL)
              </div>
            </div>
          </div>

          <!-- Layer 2: Vector (Nét căng mịn) -->
          <div class="split-layer vector" id="vectorLayer">
            <div style="text-align: center;">
              <svg width="220" height="220" viewBox="0 0 220 220">
                <defs>
                  <linearGradient id="gradLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#06B6D4" />
                    <stop offset="100%" stop-color="#EC4899" />
                  </linearGradient>
                </defs>
                <circle cx="110" cy="110" r="90" fill="url(#gradLogo)" stroke="#FFFFFF" stroke-width="4" />
                <circle cx="110" cy="110" r="70" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="5 5" />
                <text x="110" y="118" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="system-ui">10A3</text>
                <text x="110" y="142" font-size="11" font-weight="700" fill="#E0F2FE" text-anchor="middle">THPT NA RÌ</text>
              </svg>
              <div style="margin-top: 6px; font-size: 13px; font-weight: 800; color: var(--cyan-light);">
                ✨ ĐỒ HOẠ VECTOR (PHÓNG TO 1000X ➔ VẪN SẮC NÉT HOÀN HẢO)
              </div>
            </div>
          </div>

          <!-- Handle thanh trượt kéo rèm -->
          <div class="split-handle" id="splitHandle">
            <div class="split-handle-btn">⬌</div>
          </div>
        </div>

        <div class="glass-card reveal-item" data-step="3" style="padding: 10px 18px; background: rgba(6, 182, 212, 0.08); border-color: rgba(6, 182, 212, 0.3);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 13px; color: #FFFFFF;">
              💡 <strong>Gợi mở cốt lõi:</strong> Kéo chuột qua lại thanh trượt trên để thấy: máy tính có 2 cơ chế tạo hình ảnh hoàn toàn khác nhau về bản chất toán học!
            </div>
            <button class="reveal-btn primary" onclick="setSplitPosition(20)">Xem Vector</button>
            <button class="reveal-btn" onclick="setSplitPosition(80)">Xem Bitmap</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 3: MỤC TIÊU BÀI HỌC (3 CHUẨN NĂNG LỰC SỐ GDPT 2018)
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-3" data-slide="3">
      <div class="slide-header">
        <div>
          <div class="slide-badge cyan">Chuẩn năng lực Tin học 10</div>
          <h1 class="slide-title">3 TRỤ CỘT MỤC TIÊU BÀI HỌC</h1>
          <p class="slide-subtitle">Yêu cầu cần đạt theo chương trình GDPT 2018 môn Tin học</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-3-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-3" onclick="revealNext(3)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(3)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-3">
          <!-- Trụ cột 1 -->
          <div class="glass-card highlight reveal-item revealed" data-step="1" style="display: flex; flex-direction: column; justify-content: space-between; height: 380px;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                <span style="font-size: 32px;">🧩</span>
                <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 800; color: var(--cyan); background: rgba(6, 182, 212, 0.2); padding: 3px 8px; border-radius: 6px;">MỤC TIÊU 1</span>
              </div>
              <h3 style="font-size: 18px; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">PHÂN BIỆT BẢN CHẤT</h3>
              <p style="font-size: 13.5px; color: var(--ink-soft); line-height: 1.5; margin-bottom: 12px;">
                Hiểu rõ cơ chế biểu diễn của <strong>Đồ hoạ điểm ảnh (Bitmap)</strong> và <strong>Đồ hoạ vector</strong>.
              </p>
              <ul style="font-size: 12.5px; color: #E2E8F0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px;">
                <li>Bitmap: Lưới pixel cố định, phóng to vỡ hạt.</li>
                <li>Vector: Công thức toán, phóng to vô hạn không vỡ.</li>
                <li>Chọn đúng loại đồ hoạ cho từng bài toán thực tế.</li>
              </ul>
            </div>
            <div style="padding-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.1); font-size: 12px; color: var(--cyan-light); font-weight: 700;">
              ✓ Trọng tâm câu hỏi nhận biết & thông hiểu
            </div>
          </div>

          <!-- Trụ cột 2 -->
          <div class="glass-card purple-glow reveal-item" data-step="2" style="display: flex; flex-direction: column; justify-content: space-between; height: 380px;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                <span style="font-size: 32px;">🧰</span>
                <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 800; color: var(--purple-light); background: rgba(139, 92, 246, 0.2); padding: 3px 8px; border-radius: 6px;">MỤC TIÊU 2</span>
              </div>
              <h3 style="font-size: 18px; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">BỘ ĐÔI GIMP & INKSCAPE</h3>
              <p style="font-size: 13.5px; color: var(--ink-soft); line-height: 1.5; margin-bottom: 12px;">
                Nắm vững chức năng và phạm vi sử dụng của hai phần mềm mã nguồn mở miễn phí hàng đầu.
              </p>
              <ul style="font-size: 12.5px; color: #E2E8F0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px;">
                <li><strong>GIMP</strong>: Xử lý ảnh chụp bitmap (Photoshop mã nguồn mở).</li>
                <li><strong>Inkscape</strong>: Vẽ đồ hoạ vector chuẩn SVG (Illustrator mã nguồn mở).</li>
                <li>Định dạng chuẩn tệp lưu dự án .SVG.</li>
              </ul>
            </div>
            <div style="padding-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.1); font-size: 12px; color: var(--purple-light); font-weight: 700;">
              ✓ Phân loại công cụ thông minh không tốn phí
            </div>
          </div>

          <!-- Trụ cột 3 -->
          <div class="glass-card pink-glow reveal-item" data-step="3" style="display: flex; flex-direction: column; justify-content: space-between; height: 380px;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                <span style="font-size: 32px;">🖌️</span>
                <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 800; color: var(--pink-light); background: rgba(236, 72, 153, 0.2); padding: 3px 8px; border-radius: 6px;">MỤC TIÊU 3</span>
              </div>
              <h3 style="font-size: 18px; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">THÀNH THẠO INKSCAPE</h3>
              <p style="font-size: 13.5px; color: var(--ink-soft); line-height: 1.5; margin-bottom: 12px;">
                Làm quen giao diện và thực hành các thao tác cơ bản vẽ hình học vector.
              </p>
              <ul style="font-size: 12.5px; color: #E2E8F0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px;">
                <li>4 Vùng giao diện: Toolbox, Canvas, Palette, Thanh điều khiển.</li>
                <li>Phân biệt màu tô <strong>Fill</strong> và màu nét <strong>Stroke</strong>.</li>
                <li>Vẽ hình khối, gõ chữ nghệ thuật và lưu tệp .svg.</li>
              </ul>
            </div>
            <div style="padding-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.1); font-size: 12px; color: var(--pink-light); font-weight: 700;">
              ✓ Nền tảng thực hành vẽ logo & poster
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 4: MỤC 1 - KHÁM PHÁ ĐỒ HOẠ ĐIỂM ẢNH (BITMAP / RASTER)
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-4" data-slide="4">
      <div class="slide-header">
        <div>
          <div class="slide-badge rose">Mục 1 · Bản chất đồ hoạ máy tính</div>
          <h1 class="slide-title">ĐỒ HOẠ ĐIỂM ẢNH (BITMAP / RASTER)</h1>
          <p class="slide-subtitle">Bức tranh ghép từ hàng triệu viên gạch màu: Cơ chế lưu trữ & Nguyên nhân vỡ hạt</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-4-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-4" onclick="revealNext(4)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(4)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2">
          <!-- Bên trái: Lý thuyết & Cơ chế -->
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div class="glass-card reveal-item revealed" data-step="1">
              <div style="font-size: 14.5px; font-weight: 800; color: var(--rose-light); margin-bottom: 6px;">
                🧩 ĐỊNH NGHĨA & CƠ CHẾ MA TRẬN ĐIỂM ẢNH
              </div>
              <p style="font-size: 13.5px; color: #E2E8F0; line-height: 1.55;">
                Hình ảnh được chia thành một <strong>lưới ô vuông cố định (Pixel Grid)</strong>. Mỗi ô vuông (pixel) lưu một mã màu cụ thể (ví dụ: Đỏ, Xanh, Vàng theo hệ RGB).
              </p>
            </div>

            <div class="glass-card reveal-item" data-step="2">
              <div style="font-size: 14px; font-weight: 800; color: var(--amber-light); margin-bottom: 6px;">
                ⚠️ VÌ SAO PHÓNG TO LẠI BỊ RĂNG CƯA / VỠ HẠT?
              </div>
              <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.5;">
                Khi phóng to vượt kích thước gốc, máy tính buộc phải kéo giãn các ô pixel ra to hơn hoặc nội suy thêm pixel, khiến mắt người nhìn thấy rõ từng khối vuông thô ráp lởm chởm.
              </p>
            </div>

            <div class="glass-card reveal-item" data-step="3" style="background: rgba(255, 255, 255, 0.03);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-size: 13px; font-weight: 700; color: #FFFFFF;">📁 Định dạng tệp phổ biến:</div>
                  <div style="font-size: 12px; color: var(--cyan); font-family: var(--font-mono); margin-top: 2px;">
                    .JPG (nén ảnh chụp), .PNG (nền trong suốt), .GIF (ảnh động), .BMP
                  </div>
                </div>
                <div style="text-align: right;">
                  <div style="font-size: 13px; font-weight: 700; color: #FFFFFF;">📸 Ứng dụng số 1:</div>
                  <div style="font-size: 12px; color: var(--emerald-light);">Ảnh chụp điện thoại & máy ảnh số</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bên phải: Pixel Grid Studio tương tác -->
          <div class="glass-card" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; background: #070B18;">
            <div style="font-size: 13px; font-weight: 700; color: var(--cyan-light);">
              🖱️ THỬ NGHIỆM: CLICK VÀO CÁC Ô ĐỂ TÔ MÀU TỪNG PIXEL
            </div>
            
            <div class="pixel-grid-studio" id="pixelCanvas">
              <!-- JS sinh tự động 144 ô pixel -->
            </div>

            <div style="display: flex; align-items: center; gap: 12px;">
              <span id="pixelStats" style="font-size: 12px; font-family: var(--font-mono); color: var(--ink-soft);">
                Đã tô: 0/144 pixel · Dung lượng: ~432 Bytes
              </span>
              <button class="reveal-btn" onclick="drawPixelHeart()">Vẽ hình trái tim</button>
              <button class="reveal-btn" onclick="clearPixelGrid()">Xoá trắng</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 5: LAB SIÊU TƯƠNG TÁC 1 - PIXEL ZOOM & MATRIX INSPECTOR
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-5" data-slide="5">
      <div class="slide-header">
        <div>
          <div class="slide-badge emerald">Phòng thí nghiệm đồ hoạ số · Lab 1</div>
          <h1 class="slide-title">KÍNH HIỂN VI QUANG HỌC: ĐO ĐỘ VỠ HẠT</h1>
          <p class="slide-subtitle">Kéo thanh trượt Zoom từ 100% lên 1600%: So sánh trực tiếp Bitmap vs Vector theo thời gian thực</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-5-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-5" onclick="revealNext(5)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(5)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <!-- Thanh điều khiển Zoom & Tùy chọn mẫu vật -->
        <div class="glass-card" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 18px;">
          <div style="display: flex; align-items: center; gap: 14px;">
            <span style="font-size: 13px; font-weight: 800; color: var(--cyan-light);">🔍 ĐỘ PHÓNG ĐẠI:</span>
            <input type="range" id="zoomSlider" min="100" max="1600" step="50" value="100" style="width: 200px; cursor: pointer;" oninput="updateZoom(this.value)">
            <span id="zoomLabel" style="font-family: var(--font-mono); font-size: 15px; font-weight: 800; color: var(--amber-light); min-width: 60px;">100%</span>
          </div>

          <div style="display: flex; align-items: center; gap: 10px;">
            <button class="reveal-btn primary" onclick="setSample('circle')">Mẫu 1: Vòng tròn</button>
            <button class="reveal-btn" onclick="setSample('letter')">Mẫu 2: Chữ A</button>
            <button class="reveal-btn" onclick="setSample('logo')">Mẫu 3: Logo Na Rì</button>
            <button class="reveal-btn" id="toggleGridBtn" onclick="togglePixelGrid()">Bật lưới Pixel</button>
          </div>
        </div>

        <!-- Khung hiển thị song song 2 bên -->
        <div class="zoom-lab-container">
          <!-- Bên trái: Bitmap -->
          <div class="zoom-viewer" style="border-color: rgba(239, 68, 68, 0.4);">
            <div style="background: rgba(239, 68, 68, 0.15); padding: 6px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(239, 68, 68, 0.3);">
              <span style="font-size: 13px; font-weight: 800; color: var(--rose-light);">🖼️ ĐỒ HOẠ BITMAP (ĐIỂM ẢNH)</span>
              <span id="bitmapStatus" style="font-size: 11px; font-family: var(--font-mono); color: var(--rose-light);">Răng cưa: Bình thường</span>
            </div>
            <div class="zoom-canvas-area" id="bitmapArea">
              <div class="pixel-grid-overlay" id="pixelGridOverlay"></div>
              <div id="bitmapTarget" style="transition: transform 0.1s ease; transform-origin: center center;">
                <!-- Nội dung hình vẽ Bitmap mô phỏng -->
                <svg width="140" height="140" viewBox="0 0 70 70" id="bitmapSvg" style="image-rendering: pixelated; width: 140px; height: 140px;">
                  <circle cx="35" cy="35" r="28" fill="#EF4444" />
                </svg>
              </div>
            </div>
            <div style="padding: 8px 12px; background: rgba(0,0,0,0.4); font-size: 11.5px; color: var(--ink-soft); display: flex; justify-content: space-between;">
              <span>Cơ chế: Lưới ô vuông pixel cố định</span>
              <span style="color: var(--rose-light);">Phóng to càng cao ➔ Lộ ô vuông răng cưa</span>
            </div>
          </div>

          <!-- Bên phải: Vector -->
          <div class="zoom-viewer" style="border-color: rgba(6, 182, 212, 0.4);">
            <div style="background: rgba(6, 182, 212, 0.15); padding: 6px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(6, 182, 212, 0.3);">
              <span style="font-size: 13px; font-weight: 800; color: var(--cyan-light);">📐 ĐỒ HOẠ VECTOR (TOÁN HỌC)</span>
              <span style="font-size: 11px; font-family: var(--font-mono); color: var(--cyan-light);">Độ nét: 100% Cực đại</span>
            </div>
            <div class="zoom-canvas-area" id="vectorArea">
              <div id="vectorTarget" style="transition: transform 0.1s ease; transform-origin: center center;">
                <!-- Nội dung hình vẽ Vector mượt -->
                <svg width="140" height="140" viewBox="0 0 140 140" id="vectorSvg">
                  <circle cx="70" cy="70" r="56" fill="#06B6D4" stroke="#67E8F9" stroke-width="2" />
                </svg>
              </div>
            </div>
            <div style="padding: 8px 12px; background: rgba(0,0,0,0.4); font-size: 11.5px; color: var(--ink-soft); display: flex; justify-content: space-between;">
              <span>Cơ chế: Máy tính tính lại toạ độ toán học</span>
              <span style="color: var(--cyan-light);">Phóng to 1600% ➔ Vẫn cong tròn tuyệt đối</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 6: MỤC 1 - ĐỒ HOẠ VECTOR & ĐƯỜNG CONG BÉZIER KỲ DIỆU
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-6" data-slide="6">
      <div class="slide-header">
        <div>
          <div class="slide-badge purple">Mục 1 · Bản chất đồ hoạ máy tính</div>
          <h1 class="slide-title">KỲ DIỆU CỦA ĐỒ HOẠ VECTOR & ĐƯỜNG CONG BÉZIER</h1>
          <p class="slide-subtitle">Không lưu từng điểm ảnh: Máy tính lưu công thức toán học và toạ độ điểm neo</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-6-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-6" onclick="revealNext(6)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(6)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2">
          <!-- Lý thuyết bên trái -->
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div class="glass-card highlight reveal-item revealed" data-step="1">
              <div style="font-size: 14px; font-weight: 800; color: var(--cyan-light); margin-bottom: 6px;">
                📐 LƯU CÔNG THỨC TOÁN HỌC, KHÔNG LƯU ĐIỂM ẢNH
              </div>
              <p style="font-size: 13.5px; color: #E2E8F0; line-height: 1.55;">
                Vector lưu mô tả: <em>"Vẽ đường cong từ điểm A(40,200) đến D(360,200) với 2 tiếp tuyến uốn lượn tại B và C, màu viền Cyan"</em>. Khi ta phóng to, máy chỉ việc nhân toạ độ với tỉ lệ phóng rồi vẽ lại tức thì!
              </p>
            </div>

            <div class="glass-card reveal-item" data-step="2">
              <div style="font-size: 14px; font-weight: 800; color: var(--pink-light); margin-bottom: 6px;">
                ⚡ VÌ SAO TỆP VECTOR LẠI NHẸ HƠN RẤT NHIỀU?
              </div>
              <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.5;">
                Một logo đơn giản dạng Bitmap kích thước 4K cần lưu hàng triệu ô màu pixel (vài Megabyte). Nhưng cùng logo đó dạng Vector chỉ cần vài dòng lệnh văn bản toán học (chỉ vài Kilobyte)!
              </p>
            </div>

            <div class="glass-card reveal-item" data-step="3" style="font-family: var(--font-mono); font-size: 12px; background: rgba(0, 0, 0, 0.4);">
              <div style="color: var(--amber-light); font-weight: 700; margin-bottom: 4px;">💻 Mã nguồn Vector SVG trực tiếp:</div>
              <div id="liveBezierSvgCode" style="color: #67E8F9; word-break: break-all;">
                &lt;path d="M 40 200 C 100 40, 300 40, 360 200" stroke="#EC4899" stroke-width="4" /&gt;
              </div>
            </div>
          </div>

          <!-- Sandbox kéo thả điểm Bézier tương tác bên phải -->
          <div class="glass-card" style="display: flex; flex-direction: column; gap: 10px; background: #070B18;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 13px; font-weight: 700; color: var(--purple-light);">
                🖱️ KÉO THẢ 4 ĐIỂM NEO TRÊN MÀN HÌNH ĐỂ UỐN CONG:
              </span>
              <button class="reveal-btn" onclick="resetBezier()">Đặt lại đường cong</button>
            </div>

            <div class="bezier-lab-box">
              <svg class="bezier-svg" id="bezierSvg" viewBox="0 0 400 280">
                <!-- Đường tiếp tuyến phụ -->
                <line id="lineP0P1" x1="40" y1="200" x2="100" y2="40" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-dasharray="4 4" />
                <line id="lineP3P2" x1="360" y1="200" x2="300" y2="40" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-dasharray="4 4" />

                <!-- Đường cong Bézier chính -->
                <path id="bezierCurve" d="M 40 200 C 100 40, 300 40, 360 200" fill="none" stroke="#EC4899" stroke-width="4" />

                <!-- 4 Điểm điều khiển neo (Anchor Points) có thể kéo thả -->
                <circle class="bezier-point" id="ptP0" cx="40" cy="200" r="7" data-pt="0" />
                <circle class="bezier-point" id="ptP1" cx="100" cy="40" r="6" data-pt="1" style="fill: #06B6D4; stroke: #FFFFFF;" />
                <circle class="bezier-point" id="ptP2" cx="300" cy="40" r="6" data-pt="2" style="fill: #06B6D4; stroke: #FFFFFF;" />
                <circle class="bezier-point" id="ptP3" cx="360" cy="200" r="7" data-pt="3" />

                <!-- Nhãn toạ độ -->
                <text id="lblP0" x="25" y="225" fill="#C4B5FD" font-size="11" font-family="monospace">P0 (Gốc)</text>
                <text id="lblP1" x="90" y="25" fill="#67E8F9" font-size="11" font-family="monospace">P1 (Tay đòn)</text>
                <text id="lblP2" x="290" y="25" fill="#67E8F9" font-size="11" font-family="monospace">P2 (Tay đòn)</text>
                <text id="lblP3" x="350" y="225" fill="#C4B5FD" font-size="11" font-family="monospace">P3 (Đích)</text>
              </svg>
            </div>
            <div style="font-size: 11.5px; color: var(--ink-soft); text-align: center;">
              💡 Công cụ bút vẽ <strong>Bézier (✎)</strong> trong Inkscape hoạt động chính xác theo nguyên lý toán học này!
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 7: BẢNG ĐỌ SỨC TOÀN DIỆN BITMAP VS VECTOR
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-7" data-slide="7">
      <div class="slide-header">
        <div>
          <div class="slide-badge amber">So sánh đối đầu · Showdown</div>
          <h1 class="slide-title">ĐẠI CHIẾN ĐỒ HOẠ: BITMAP ĐỐI ĐẦU VECTOR</h1>
          <p class="slide-subtitle">Bảng đối chiếu 5 tiêu chí sinh tử — Chìa khóa vàng giải quyết mọi bài thi trắc nghiệm</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-7-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-7" onclick="revealNext(7)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(7)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: separate; border-spacing: 0 8px; font-size: 13.5px;">
            <thead>
              <tr style="color: var(--ink-soft); font-size: 12.5px; text-transform: uppercase;">
                <th style="padding: 10px 16px; text-align: left; width: 22%;">Tiêu chí so sánh</th>
                <th style="padding: 10px 16px; text-align: left; width: 39%; color: var(--rose-light);">🖼️ Đồ hoạ điểm ảnh (Bitmap)</th>
                <th style="padding: 10px 16px; text-align: left; width: 39%; color: var(--cyan-light);">📐 Đồ hoạ Vector</th>
              </tr>
            </thead>
            <tbody>
              <tr class="reveal-item revealed" data-step="1" style="background: rgba(255, 255, 255, 0.04); border-radius: 8px;">
                <td style="padding: 12px 16px; font-weight: 700; color: #FFFFFF;">1. Bản chất cấu tạo</td>
                <td style="padding: 12px 16px; color: #FCA5A5;">Gồm các <strong>điểm ảnh (pixel)</strong> xếp thành lưới vuông cố định.</td>
                <td style="padding: 12px 16px; color: #7DD3FC;">Gồm các <strong>công thức toán học</strong> mô tả điểm, đường, màu sắc.</td>
              </tr>
              <tr class="reveal-item" data-step="2" style="background: rgba(255, 255, 255, 0.04); border-radius: 8px;">
                <td style="padding: 12px 16px; font-weight: 700; color: #FFFFFF;">2. Khi phóng to cỡ lớn</td>
                <td style="padding: 12px 16px; color: #FCA5A5;"><strong>Bị vỡ hạt, răng cưa</strong>, chất lượng giảm sút rõ rệt.</td>
                <td style="padding: 12px 16px; color: #7DD3FC;"><strong>Luôn sắc nét</strong> ở mọi tỉ lệ vì máy tính vẽ lại từ công thức.</td>
              </tr>
              <tr class="reveal-item" data-step="2" style="background: rgba(255, 255, 255, 0.04); border-radius: 8px;">
                <td style="padding: 12px 16px; font-weight: 700; color: #FFFFFF;">3. Dung lượng tệp</td>
                <td style="padding: 12px 16px; color: #FCA5A5;">Tỉ lệ thuận với số pixel (ảnh độ phân giải cao rất nặng).</td>
                <td style="padding: 12px 16px; color: #7DD3FC;">Thường <strong>rất nhẹ</strong> với hình vẽ đơn giản, logo, biểu tượng.</td>
              </tr>
              <tr class="reveal-item" data-step="3" style="background: rgba(255, 255, 255, 0.04); border-radius: 8px;">
                <td style="padding: 12px 16px; font-weight: 700; color: #FFFFFF;">4. Ứng dụng phù hợp nhất</td>
                <td style="padding: 12px 16px; color: #FCA5A5;">Ảnh chụp chân dung, phong cảnh, tranh vẽ phức tạp nhiều dải màu.</td>
                <td style="padding: 12px 16px; color: #7DD3FC;">Logo, biểu tượng (icon), huy hiệu, sơ đồ kĩ thuật, chữ nghệ thuật.</td>
              </tr>
              <tr class="reveal-item" data-step="3" style="background: rgba(255, 255, 255, 0.04); border-radius: 8px;">
                <td style="padding: 12px 16px; font-weight: 700; color: #FFFFFF;">5. Định dạng & Phần mềm</td>
                <td style="padding: 12px 16px; color: #FCA5A5;">.JPG, .PNG, .GIF · <strong>GIMP</strong>, Photoshop, Photopea.</td>
                <td style="padding: 12px 16px; color: #7DD3FC;">.SVG, .AI, .EPS · <strong>Inkscape</strong>, Illustrator, CorelDRAW.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 8: MỤC 2 - BỘ ĐÔI NGUỒN MỞ MIỄN PHÍ: GIMP & INKSCAPE
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-8" data-slide="8">
      <div class="slide-header">
        <div>
          <div class="slide-badge purple">Mục 2 · Phần mềm đồ hoạ nguồn mở</div>
          <h1 class="slide-title">BỘ ĐÔI MIỄN PHÍ: GIMP VÀ INKSCAPE</h1>
          <p class="slide-subtitle">Không cần crack bẻ khóa bản quyền: Hai phần mềm nguồn mở 100% miễn phí đẳng cấp quốc tế</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-8-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-8" onclick="revealNext(8)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(8)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2">
          <!-- GIMP Card -->
          <div class="glass-card purple-glow reveal-item revealed" data-step="1" style="height: 380px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 32px;">🦊</span>
                  <div>
                    <h3 style="font-size: 19px; font-weight: 800; color: var(--purple-light);">GIMP</h3>
                    <div style="font-size: 11px; color: var(--ink-soft); font-family: var(--font-mono);">GNU Image Manipulation Program</div>
                  </div>
                </div>
                <span class="slide-badge purple">XỬ LÝ BITMAP</span>
              </div>

              <div style="font-size: 13.5px; color: #E2E8F0; line-height: 1.5; margin-bottom: 14px;">
                Chuyên xử lý ảnh điểm ảnh chụp bằng máy ảnh hoặc điện thoại. Chức năng tương đương Adobe Photoshop thương mại.
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="background: rgba(255,255,255,0.05); padding: 8px 12px; border-radius: 8px; font-size: 12.5px;">
                  ✂️ <strong>Cắt ghép & Phục chế:</strong> Tách nền, xoá vật thể thừa, chỉnh da mặt, ghép ảnh.
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 8px 12px; border-radius: 8px; font-size: 12.5px;">
                  🌈 <strong>Cân chỉnh màu:</strong> Độ sáng, độ tương phản, cân bằng trắng, bộ lọc màu nghệ thuật.
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 8px 12px; border-radius: 8px; font-size: 12.5px;">
                  📑 <strong>Xếp lớp (Layers):</strong> Quản lý nhiều lớp ảnh chồng lên nhau một cách chuyên nghiệp.
                </div>
              </div>
            </div>

            <div style="font-size: 12px; color: var(--purple-light); font-weight: 700; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px;">
              💡 Tình huống: Chỉnh ảnh kỷ yếu lớp 10, ghép ảnh lưu niệm hội trại.
            </div>
          </div>

          <!-- Inkscape Card -->
          <div class="glass-card highlight reveal-item" data-step="2" style="height: 380px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 32px;">🖌️</span>
                  <div>
                    <h3 style="font-size: 19px; font-weight: 800; color: var(--cyan-light);">INKSCAPE</h3>
                    <div style="font-size: 11px; color: var(--ink-soft); font-family: var(--font-mono);">Scalable Vector Graphics Editor</div>
                  </div>
                </div>
                <span class="slide-badge cyan">VẼ VECTOR</span>
              </div>

              <div style="font-size: 13.5px; color: #E2E8F0; line-height: 1.5; margin-bottom: 14px;">
                Chuyên tạo hình ảnh vector mới từ hình khối và đường cong. Chức năng tương đương Adobe Illustrator và CorelDRAW.
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="background: rgba(255,255,255,0.05); padding: 8px 12px; border-radius: 8px; font-size: 12.5px;">
                  📐 <strong>Hình khối & Bézier:</strong> Vẽ chữ nhật, elip, ngôi sao, đường cong uốn lượn tự do.
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 8px 12px; border-radius: 8px; font-size: 12.5px;">
                  🎨 <strong>Màu Tô & Viền:</strong> Tuỳ chỉnh độc lập Fill (tô bên trong) và Stroke (viền bao).
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 8px 12px; border-radius: 8px; font-size: 12.5px;">
                  🌐 <strong>Chuẩn mở SVG:</strong> Định dạng gốc lưu tệp .svg hiển thị trực tiếp trên mọi trang web.
                </div>
              </div>
            </div>

            <div style="font-size: 12px; color: var(--cyan-light); font-weight: 700; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px;">
              💡 Tình huống: Thiết kế logo trường, băng rôn khẩu hiệu, biểu tượng icon.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 9: LAB SIÊU TƯƠNG TÁC 2 - SMART DESIGN CLASSIFIER
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-9" data-slide="9">
      <div class="slide-header">
        <div>
          <div class="slide-badge emerald">Phòng thí nghiệm đồ hoạ số · Lab 2</div>
          <h1 class="slide-title">BỘ ĐIỀU HƯỚNG PHẦN MỀM THIẾT KẾ</h1>
          <p class="slide-subtitle">Thử thách phân loại 6 dự án thực tế tại THPT Na Rì: Chọn GIMP hay chọn Inkscape?</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-9-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-9" onclick="revealNext(9)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(9)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <!-- Điểm số và hướng dẫn -->
        <div class="glass-card" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 18px;">
          <div>
            <span style="font-size: 13.5px; font-weight: 800; color: #FFFFFF;">🎯 THỬ THÁCH NHÀ THIẾT KẾ:</span>
            <span style="font-size: 13px; color: var(--ink-soft); margin-left: 8px;">Nhấp chọn [GIMP] hoặc [Inkscape] tương ứng cho từng nhiệm vụ bên dưới.</span>
          </div>
          <div style="display: flex; align-items: center; gap: 14px;">
            <span style="font-size: 13px; font-weight: 700; color: var(--amber-light);">Điểm số: <strong id="classifierScore" style="font-size: 18px; color: #FFFFFF;">0</strong> / 6</span>
            <button class="reveal-btn" onclick="resetClassifier()">Làm lại</button>
          </div>
        </div>

        <!-- 6 Kịch bản phân loại -->
        <div class="grid-2" style="gap: 10px;">
          <!-- Kịch bản 1 -->
          <div class="classifier-card" id="task-1">
            <div style="flex: 1; padding-right: 12px;">
              <div style="font-size: 13px; font-weight: 700; color: #FFFFFF;">1. Xoá mụn, chỉnh da mặt bức ảnh kỷ yếu lớp 10</div>
              <div class="task-explain" style="font-size: 11.5px; color: var(--ink-soft); display: none; margin-top: 2px;"></div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="classifier-choice-btn gimp" onclick="checkClassifier(1, 'gimp')">GIMP 🖼️</button>
              <button class="classifier-choice-btn" onclick="checkClassifier(1, 'inkscape')">Inkscape 🖌️</button>
            </div>
          </div>

          <!-- Kịch bản 2 -->
          <div class="classifier-card" id="task-2">
            <div style="flex: 1; padding-right: 12px;">
              <div style="font-size: 13px; font-weight: 700; color: #FFFFFF;">2. Vẽ logo Đoàn trường in lên áo và băng rôn 6m</div>
              <div class="task-explain" style="font-size: 11.5px; color: var(--ink-soft); display: none; margin-top: 2px;"></div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="classifier-choice-btn gimp" onclick="checkClassifier(2, 'gimp')">GIMP 🖼️</button>
              <button class="classifier-choice-btn" onclick="checkClassifier(2, 'inkscape')">Inkscape 🖌️</button>
            </div>
          </div>

          <!-- Kịch bản 3 -->
          <div class="classifier-card" id="task-3">
            <div style="flex: 1; padding-right: 12px;">
              <div style="font-size: 13px; font-weight: 700; color: #FFFFFF;">3. Tách nền ảnh thẻ 3x4 để làm thẻ học sinh</div>
              <div class="task-explain" style="font-size: 11.5px; color: var(--ink-soft); display: none; margin-top: 2px;"></div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="classifier-choice-btn gimp" onclick="checkClassifier(3, 'gimp')">GIMP 🖼️</button>
              <button class="classifier-choice-btn" onclick="checkClassifier(3, 'inkscape')">Inkscape 🖌️</button>
            </div>
          </div>

          <!-- Kịch bản 4 -->
          <div class="classifier-card" id="task-4">
            <div style="flex: 1; padding-right: 12px;">
              <div style="font-size: 13px; font-weight: 700; color: #FFFFFF;">4. Thiết kế bộ icon biểu tượng và sơ đồ tổ chức dạng SVG</div>
              <div class="task-explain" style="font-size: 11.5px; color: var(--ink-soft); display: none; margin-top: 2px;"></div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="classifier-choice-btn gimp" onclick="checkClassifier(4, 'gimp')">GIMP 🖼️</button>
              <button class="classifier-choice-btn" onclick="checkClassifier(4, 'inkscape')">Inkscape 🖌️</button>
            </div>
          </div>

          <!-- Kịch bản 5 -->
          <div class="classifier-card" id="task-5">
            <div style="flex: 1; padding-right: 12px;">
              <div style="font-size: 13px; font-weight: 700; color: #FFFFFF;">5. Ghép ảnh hoàng hôn Đèo Gió Na Rì vào ảnh tập thể</div>
              <div class="task-explain" style="font-size: 11.5px; color: var(--ink-soft); display: none; margin-top: 2px;"></div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="classifier-choice-btn gimp" onclick="checkClassifier(5, 'gimp')">GIMP 🖼️</button>
              <button class="classifier-choice-btn" onclick="checkClassifier(5, 'inkscape')">Inkscape 🖌️</button>
            </div>
          </div>

          <!-- Kịch bản 6 -->
          <div class="classifier-card" id="task-6">
            <div style="flex: 1; padding-right: 12px;">
              <div style="font-size: 13px; font-weight: 700; color: #FFFFFF;">6. Tạo chữ nghệ thuật uốn cong làm tiêu đề tập san 20/11</div>
              <div class="task-explain" style="font-size: 11.5px; color: var(--ink-soft); display: none; margin-top: 2px;"></div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="classifier-choice-btn gimp" onclick="checkClassifier(6, 'gimp')">GIMP 🖼️</button>
              <button class="classifier-choice-btn" onclick="checkClassifier(6, 'inkscape')">Inkscape 🖌️</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 10: MỤC 3 - GIẢI PHẪU GIAO DIỆN INKSCAPE TƯƠNG TÁC
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-10" data-slide="10">
      <div class="slide-header">
        <div>
          <div class="slide-badge cyan">Mục 3 · Làm quen Inkscape</div>
          <h1 class="slide-title">GIẢI PHẪU GIAO DIỆN LÀM VIỆC CỦA INKSCAPE</h1>
          <p class="slide-subtitle">Nhấp chuột vào từng vùng giao diện để khám phá công năng chi tiết</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-10-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-10" onclick="revealNext(10)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(10)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2" style="align-items: center;">
          <!-- Bản đồ giải phẫu UI -->
          <div class="inkscape-ui-anatomy">
            <!-- Thanh thuộc tính -->
            <div class="ui-zone controls" onclick="selectAnatomyZone('controls')">
              ⚙️ Tool Controls Bar (Thanh thuộc tính công cụ)
            </div>

            <!-- Hộp công cụ dọc bên trái -->
            <div class="ui-zone toolbox" onclick="selectAnatomyZone('toolbox')">
              🧰<br>Toolbox<br>(Hộp công cụ)
            </div>

            <!-- Trang vẽ trung tâm -->
            <div class="ui-zone canvas active" onclick="selectAnatomyZone('canvas')">
              📄 CANVAS (Trang vẽ trung tâm)<br>
              <span style="font-size: 10px; color: var(--cyan); font-weight: 500;">Nơi mọi đối tượng hình học ra đời</span>
            </div>

            <!-- Bảng màu dưới đáy -->
            <div class="ui-zone palette" onclick="selectAnatomyZone('palette')">
              🎨 PALETTE (Bảng màu đáy màn hình)
            </div>

            <!-- Bảng thanh tra bên phải -->
            <div class="ui-zone inspector" onclick="selectAnatomyZone('inspector')">
              📊 Panels &amp; Dock<br>(Bảng Layer, Căn chỉnh Align &amp; Fill/Stroke)
            </div>
          </div>

          <!-- Bảng thông tin chi tiết vùng được chọn -->
          <div class="glass-card highlight" id="anatomyDetails" style="min-height: 330px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <span id="zoneEmoji" style="font-size: 28px;">📄</span>
                <div>
                  <h3 id="zoneTitle" style="font-size: 18px; font-weight: 800; color: var(--cyan-light);">CANVAS (TRANG VẼ CHÍNH)</h3>
                  <div id="zoneSubtitle" style="font-size: 11.5px; color: var(--ink-soft);">Vùng làm việc trung tâm</div>
                </div>
              </div>

              <p id="zoneDesc" style="font-size: 13.5px; color: #E2E8F0; line-height: 1.6; margin-top: 10px;">
                Canvas là vùng màu trắng nằm chính giữa màn hình Inkscape. Đây là không gian bạn vẽ các hình chữ nhật, hình tròn, đường cong Bézier và gõ văn bản nghệ thuật. Toạ độ của mọi hình vẽ được tính toán chính xác trên canvas này.
              </p>

              <div id="zoneTips" style="margin-top: 14px; background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 8px; font-size: 12.5px; color: var(--amber-light);">
                💡 <strong>Mẹo hay:</strong> Giữ phím <strong>Ctrl</strong> và lăn bánh xe chuột để phóng to / thu nhỏ canvas mượt mà!
              </div>
            </div>

            <div style="font-size: 12px; color: var(--ink-soft); border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px;">
              Nhấp vào các ô bên trái để kiểm tra 4 khu vực còn lại.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 11: LAB SIÊU TƯƠNG TÁC 3 - INKSCAPE VIRTUAL STUDIO
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-11" data-slide="11">
      <div class="slide-header">
        <div>
          <div class="slide-badge pink">Phòng thí nghiệm đồ hoạ số · Lab 3</div>
          <h1 class="slide-title">XƯỞNG THIẾT KẾ ẢO: INKSCAPE MINI STUDIO</h1>
          <p class="slide-subtitle">Trực tiếp vẽ hình, đổi Fill / Stroke bằng Palette và xem mã nguồn SVG tự sinh theo thời gian thực</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-11-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-11" onclick="revealNext(11)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(11)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="studio-wrapper">
          <!-- Toolbox bên trái -->
          <div class="studio-toolbox">
            <button class="tool-btn active" id="toolSelect" onclick="setStudioTool('select')">
              ↖<span>Chọn</span>
            </button>
            <button class="tool-btn" id="toolRect" onclick="setStudioTool('rect')">
              ▭<span>Vuông</span>
            </button>
            <button class="tool-btn" id="toolCircle" onclick="setStudioTool('circle')">
              ◯<span>Tròn</span>
            </button>
            <button class="tool-btn" id="toolStar" onclick="setStudioTool('star')">
              ★<span>Sao</span>
            </button>
            <button class="tool-btn" id="toolText" onclick="setStudioTool('text')">
              T<span>Chữ</span>
            </button>
          </div>

          <!-- Canvas trung tâm -->
          <div class="studio-canvas-container" id="studioCanvasContainer">
            <svg id="studioSvg" width="100%" height="100%" style="overflow: visible;">
              <!-- Lưới canvas mờ -->
              <defs>
                <pattern id="studioGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#studioGrid)" />
              <!-- Các hình vẽ sẽ được JS render tại đây -->
            </svg>
          </div>

          <!-- Bảng màu Palette phía đáy -->
          <div class="studio-palette-bar">
            <span style="font-size: 11px; font-weight: 700; color: var(--ink-soft); margin-right: 4px;">PALETTE:</span>
            <div class="color-swatch" style="background: #FFFFFF;" onclick="applyColor('#FFFFFF')"></div>
            <div class="color-swatch" style="background: #06B6D4;" onclick="applyColor('#06B6D4')"></div>
            <div class="color-swatch" style="background: #8B5CF6;" onclick="applyColor('#8B5CF6')"></div>
            <div class="color-swatch" style="background: #EC4899;" onclick="applyColor('#EC4899')"></div>
            <div class="color-swatch" style="background: #EF4444;" onclick="applyColor('#EF4444')"></div>
            <div class="color-swatch" style="background: #F59E0B;" onclick="applyColor('#F59E0B')"></div>
            <div class="color-swatch" style="background: #10B981;" onclick="applyColor('#10B981')"></div>
            <div class="color-swatch" style="background: #3B82F6;" onclick="applyColor('#3B82F6')"></div>
            <div class="color-swatch" style="background: #1E293B;" onclick="applyColor('#1E293B')"></div>
            <div class="color-swatch" style="background: transparent; border: 2px dashed #EF4444;" title="Không màu (None)" onclick="applyColor('none')"></div>
          </div>

          <!-- Sidebar thông số & SVG Code Inspector -->
          <div class="studio-sidebar">
            <div style="font-size: 13px; font-weight: 800; color: var(--cyan-light);">THUỘC TÍNH MÀU SẮC</div>
            
            <div style="display: flex; gap: 8px;">
              <button class="reveal-btn primary" id="colorModeFill" onclick="setColorTarget('fill')" style="flex: 1; font-size: 11px;">
                Tô (Fill)
              </button>
              <button class="reveal-btn" id="colorModeStroke" onclick="setColorTarget('stroke')" style="flex: 1; font-size: 11px;">
                Nét (Stroke)
              </button>
            </div>

            <div style="font-size: 11.5px; color: var(--ink-soft);">
              Độ dày nét viền: <strong id="strokeWidthVal" style="color: #FFFFFF;">3px</strong>
              <input type="range" min="1" max="12" value="3" style="width: 100%; margin-top: 4px;" oninput="updateStudioStrokeWidth(this.value)">
            </div>

            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px; overflow: hidden;">
              <div style="font-size: 11px; font-weight: 700; color: var(--amber-light);">MÃ NGUỒN SVG SINH RA:</div>
              <pre id="studioSvgCode" style="flex: 1; background: #030612; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 6px; font-family: monospace; font-size: 10.5px; color: #67E8F9; overflow: auto; white-space: pre-wrap;">&lt;!-- Chọn công cụ và kéo chuột trên Canvas để vẽ --&gt;</pre>
            </div>

            <div style="display: flex; gap: 6px;">
              <button class="reveal-btn" onclick="clearStudioCanvas()" style="flex: 1; font-size: 11px;">Xoá canvas</button>
              <button class="reveal-btn primary" onclick="downloadStudioSvg()" style="flex: 1; font-size: 11px;">Tải file .svg</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 12: 4 CẠM BẪY THI TRẮC NGHIỆM HỌC SINH HAY MẤT ĐIỂM
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-12" data-slide="12">
      <div class="slide-header">
        <div>
          <div class="slide-badge rose">Cảnh báo điểm liệt · Thi trắc nghiệm</div>
          <h1 class="slide-title">4 BẪY TRẮC NGHIỆM HỌC SINH HAY MẤT ĐIỂM OAN</h1>
          <p class="slide-subtitle">Nhấp vào từng thẻ để lật xem bí kíp phá bẫy điểm 10 môn Tin học</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-12-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-12" onclick="revealNext(12)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(12)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2">
          <!-- Bẫy 1 -->
          <div class="glass-card reveal-item revealed" data-step="1" style="border-left: 4px solid var(--rose);">
            <div style="font-size: 14px; font-weight: 800; color: var(--rose-light); margin-bottom: 6px;">
              🪤 BẪY 1: NHẦM LẪN GIMP VÀ INKSCAPE
            </div>
            <p style="font-size: 13px; color: #CBD5E1; line-height: 1.5;">
              <strong style="color: var(--rose);">Sai lầm phổ biến:</strong> Nghĩ GIMP là phần mềm vẽ logo vector, còn Inkscape là phần mềm sửa ảnh chụp chân dung.
            </p>
            <div style="margin-top: 8px; background: rgba(16, 185, 129, 0.1); border-left: 2px solid var(--emerald); padding: 6px 10px; font-size: 12px; color: var(--emerald-light);">
              ✓ <strong>Bí kíp:</strong> <strong>GIMP = Photoshop</strong> (xử lý ảnh bitmap). <strong>Inkscape = Illustrator</strong> (vẽ logo vector).
            </div>
          </div>

          <!-- Bẫy 2 -->
          <div class="glass-card reveal-item revealed" data-step="1" style="border-left: 4px solid var(--amber);">
            <div style="font-size: 14px; font-weight: 800; color: var(--amber-light); margin-bottom: 6px;">
              🪤 BẪY 2: TƯỞNG ẢNH ĐIỆN THOẠI LÀ ĐỒ HOẠ VECTOR
            </div>
            <p style="font-size: 13px; color: #CBD5E1; line-height: 1.5;">
              <strong style="color: var(--amber);">Sai lầm phổ biến:</strong> Cho rằng ảnh chụp điện thoại độ nét cực cao thì phóng to in băng rôn sẽ không bao giờ vỡ hạt.
            </p>
            <div style="margin-top: 8px; background: rgba(16, 185, 129, 0.1); border-left: 2px solid var(--emerald); padding: 6px 10px; font-size: 12px; color: var(--emerald-light);">
              ✓ <strong>Bí kíp:</strong> Mọi cảm biến máy ảnh chỉ thu điểm ảnh (Pixel) ➔ 100% ảnh chụp là <strong>Bitmap</strong>!
            </div>
          </div>

          <!-- Bẫy 3 -->
          <div class="glass-card reveal-item" data-step="2" style="border-left: 4px solid var(--purple);">
            <div style="font-size: 14px; font-weight: 800; color: var(--purple-light); margin-bottom: 6px;">
              🪤 BẪY 3: NHẦM THUỘC TÍNH FILL VÀ STROKE
            </div>
            <p style="font-size: 13px; color: #CBD5E1; line-height: 1.5;">
              <strong style="color: var(--purple-light);">Sai lầm phổ biến:</strong> Nghĩ rằng đổi màu trên Palette thì cả màu bên trong lẫn màu viền cùng đổi theo một lúc.
            </p>
            <div style="margin-top: 8px; background: rgba(16, 185, 129, 0.1); border-left: 2px solid var(--emerald); padding: 6px 10px; font-size: 12px; color: var(--emerald-light);">
              ✓ <strong>Bí kíp:</strong> <strong>Fill</strong> (màu tô bên trong) và <strong>Stroke</strong> (màu viền ngoài) là 2 thuộc tính độc lập. Nhấp thường = Fill; Shift + Nhấp = Stroke!
            </div>
          </div>

          <!-- Bẫy 4 -->
          <div class="glass-card reveal-item" data-step="2" style="border-left: 4px solid var(--cyan);">
            <div style="font-size: 14px; font-weight: 800; color: var(--cyan-light); margin-bottom: 6px;">
              🪤 BẪY 4: NHẦM ĐUÔI TỆP .SVG VỚI .DOCX HOẶC .EXE
            </div>
            <p style="font-size: 13px; color: #CBD5E1; line-height: 1.5;">
              <strong style="color: var(--cyan);">Sai lầm phổ biến:</strong> Không nhớ định dạng làm việc mặc định của Inkscape khi lưu dự án.
            </p>
            <div style="margin-top: 8px; background: rgba(16, 185, 129, 0.1); border-left: 2px solid var(--emerald); padding: 6px 10px; font-size: 12px; color: var(--emerald-light);">
              ✓ <strong>Bí kíp:</strong> Inkscape dùng chuẩn quốc tế <strong>.SVG</strong> (Scalable Vector Graphics) — vừa là tệp gốc vừa là định dạng hiển thị web.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 13: ĐẤU TRƯỜNG MINI QUIZ (5 CÂU TRẮC NGHIỆM CHỌN LỌC)
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-13" data-slide="13">
      <div class="slide-header">
        <div>
          <div class="slide-badge emerald">Củng cố kiến thức · Arena</div>
          <h1 class="slide-title">ĐẤU TRƯỜNG TRẮC NGHIỆM: THỬ TÀI ĐỒ HOẠ</h1>
          <p class="slide-subtitle">5 câu hỏi then chốt chuẩn đề thi SGK Tin học 10 · Tự động chấm điểm & Pháo hoa</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-13-status">Câu 1/5</span>
          <button class="reveal-btn primary" onclick="resetQuiz()">Làm lại Quiz</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="glass-card" style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; padding: 10px 18px;">
          <div style="font-size: 14px; font-weight: 800; color: #FFFFFF;" id="quizProgressText">Câu hỏi 1 / 5</div>
          <div style="display: flex; align-items: center; gap: 16px;">
            <span style="font-size: 13px; font-weight: 700; color: var(--cyan-light);">Chuỗi thắng (Streak): <strong id="quizStreak" style="color: var(--amber);">0</strong> 🔥</span>
            <span style="font-size: 13px; font-weight: 700; color: var(--emerald-light);">Điểm: <strong id="quizScore">0</strong> / 5</span>
          </div>
        </div>

        <!-- Khung câu hỏi hiện tại -->
        <div class="glass-card highlight" style="min-height: 280px; display: flex; flex-direction: column; justify-content: space-between; padding: 20px;">
          <div>
            <div id="quizQuestion" style="font-size: 16.5px; font-weight: 800; color: #FFFFFF; line-height: 1.45; margin-bottom: 16px;">
              Câu 1: Đồ hoạ vector khác biệt căn bản với đồ hoạ điểm ảnh (bitmap) ở điểm nào sau đây?
            </div>

            <div id="quizOptions" style="display: flex; flex-direction: column; gap: 8px;">
              <!-- 4 lựa chọn sinh qua JS -->
            </div>
          </div>

          <div id="quizFeedback" style="margin-top: 14px; padding: 10px 14px; border-radius: 8px; font-size: 13px; display: none;"></div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 14: SƠ ĐỒ TƯ DUY MINDMAP TƯƠNG TÁC TOÀN BÀI
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-14" data-slide="14">
      <div class="slide-header">
        <div>
          <div class="slide-badge purple">Tổng kết trực quan · Mindmap</div>
          <h1 class="slide-title">SƠ ĐỒ TƯ DUY KIẾN THỨC BÀI 12</h1>
          <p class="slide-subtitle">Nhấp vào từng nhánh sơ đồ để mở rộng chi tiết và lắng nghe âm thanh tương tác</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-14-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-14" onclick="revealNext(14)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(14)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-3" style="align-items: stretch; height: 380px;">
          <!-- Nhánh 1 -->
          <div class="mindmap-node reveal-item revealed" data-step="1" onclick="toggleMindmapNode(this)">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
              <span style="font-size: 28px;">🧩</span>
              <span class="slide-badge cyan">NHÁNH 1</span>
            </div>
            <h3 style="font-size: 16.5px; font-weight: 800; color: var(--cyan-light); margin-bottom: 8px;">HAI THẾ GIỚI ĐỒ HOẠ</h3>
            <div style="font-size: 13px; color: var(--ink-soft); line-height: 1.5; display: flex; flex-direction: column; gap: 6px;">
              <div>• <strong>Bitmap</strong>: Ma trận pixel, ảnh chụp JPG/PNG, phóng to bị vỡ hạt.</div>
              <div>• <strong>Vector</strong>: Công thức toán học, toạ độ Bézier, phóng to vô hạn không vỡ.</div>
              <div>• <strong>Dung lượng</strong>: Vector siêu nhẹ cho logo và hình vẽ hình học.</div>
            </div>
          </div>

          <!-- Nhánh 2 -->
          <div class="mindmap-node reveal-item" data-step="2" onclick="toggleMindmapNode(this)">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
              <span style="font-size: 28px;">🧰</span>
              <span class="slide-badge purple">NHÁNH 2</span>
            </div>
            <h3 style="font-size: 16.5px; font-weight: 800; color: var(--purple-light); margin-bottom: 8px;">BỘ ĐÔI PHẦN MỀM</h3>
            <div style="font-size: 13px; color: var(--ink-soft); line-height: 1.5; display: flex; flex-direction: column; gap: 6px;">
              <div>• <strong>GIMP</strong>: Xử lý ảnh chụp điểm ảnh, cắt ghép, chỉnh sáng, lớp ảnh.</div>
              <div>• <strong>Inkscape</strong>: Vẽ hình học vector, logo, banner, chữ nghệ thuật.</div>
              <div>• <strong>Chuẩn mở .SVG</strong>: Lưu dự án và hiển thị trực tiếp trên web.</div>
            </div>
          </div>

          <!-- Nhánh 3 -->
          <div class="mindmap-node reveal-item" data-step="3" onclick="toggleMindmapNode(this)">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
              <span style="font-size: 28px;">🎨</span>
              <span class="slide-badge pink">NHÁNH 3</span>
            </div>
            <h3 style="font-size: 16.5px; font-weight: 800; color: var(--pink-light); margin-bottom: 8px;">THAO TÁC INKSCAPE</h3>
            <div style="font-size: 13px; color: var(--ink-soft); line-height: 1.5; display: flex; flex-direction: column; gap: 6px;">
              <div>• <strong>4 Vùng UI</strong>: Toolbox, Canvas, Palette, Controls Bar.</div>
              <div>• <strong>Fill vs Stroke</strong>: Màu tô bên trong vs Màu nét viền ngoài.</div>
              <div>• <strong>Quy trình 4 bước</strong>: Chọn công cụ ➔ Kéo vẽ ➔ Tô màu ➔ Lưu .svg.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═════════════════════════════════════════════════════════════
         SLIDE 15: TỔNG KẾT & NHIỆM VỤ THỰC HÀNH THPT NA RÌ
    ═════════════════════════════════════════════════════════════ -->
    <section class="slide" id="slide-15" data-slide="15">
      <div class="slide-header">
        <div>
          <div class="slide-badge emerald">Tổng kết bài học · Hành động</div>
          <h1 class="slide-title">THÔNG ĐIỆP VÀNG & NHIỆM VỤ PHÒNG MÁY NA RÌ</h1>
          <p class="slide-subtitle">Tin học 10 · Bài 12 · Trường THPT Na Rì</p>
        </div>
        <div class="reveal-toolbar">
          <span class="reveal-status" id="slide-15-status">Đang xem 1/3 ý</span>
          <button class="reveal-btn primary" id="revealBtn-15" onclick="revealNext(15)">👉 Hiện ý (↓)</button>
          <button class="reveal-btn" onclick="revealAll(15)">Hiện hết</button>
        </div>
      </div>
      <div class="slide-body">
        <div class="grid-2">
          <!-- 3 Thông điệp vàng -->
          <div class="glass-card highlight reveal-item revealed" data-step="1" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="font-size: 15px; font-weight: 800; color: var(--cyan-light); margin-bottom: 10px;">
                🌟 3 NGUYÊN TẮC VÀNG CỦA NHÀ THIẾT KẾ ĐỒ HOẠ
              </div>
              <div style="display: flex; flex-direction: column; gap: 10px;">
                <div style="background: rgba(255,255,255,0.04); padding: 10px 14px; border-radius: 8px;">
                  <strong style="color: #FFFFFF;">1. Đúng việc - Đúng công cụ:</strong>
                  <div style="font-size: 12.5px; color: var(--ink-soft); margin-top: 2px;">
                    Sửa ảnh chụp thực tế ➔ Chọn GIMP (Bitmap). Vẽ logo, icon, banner phóng to ➔ Chọn Inkscape (Vector).
                  </div>
                </div>

                <div style="background: rgba(255,255,255,0.04); padding: 10px 14px; border-radius: 8px;">
                  <strong style="color: #FFFFFF;">2. Tôn trọng bản quyền nguồn mở:</strong>
                  <div style="font-size: 12.5px; color: var(--ink-soft); margin-top: 2px;">
                    Ưu tiên sử dụng phần mềm miễn phí GIMP & Inkscape, nói KHÔNG với phần mềm lậu bẻ khóa crack.
                  </div>
                </div>

                <div style="background: rgba(255,255,255,0.04); padding: 10px 14px; border-radius: 8px;">
                  <strong style="color: #FFFFFF;">3. Luôn lưu giữ tệp gốc .SVG:</strong>
                  <div style="font-size: 12.5px; color: var(--ink-soft); margin-top: 2px;">
                    Giữ file gốc SVG để sẵn sàng phóng to in ấn ở bất kỳ kích cỡ nào mà không bao giờ lo vỡ nét.
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-top: 12px; display: flex; align-items: center; justify-content: space-between;">
              <button class="reveal-btn primary" onclick="triggerCelebration()">🎉 Nổ pháo hoa chúc mừng</button>
              <span style="font-size: 12px; color: var(--cyan-light); font-weight: 700;">THPT Na Rì · Khối 10</span>
            </div>
          </div>

          <!-- 3 Nhiệm vụ phòng máy Na Rì -->
          <div class="glass-card pink-glow reveal-item" data-step="2" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="font-size: 15px; font-weight: 800; color: var(--pink-light); margin-bottom: 10px;">
                💻 3 NHIỆM VỤ THỰC HÀNH TẠI PHÒNG MÁY TIN HỌC
              </div>
              <div style="display: flex; flex-direction: column; gap: 10px;">
                <div style="background: rgba(255,255,255,0.04); padding: 10px 14px; border-radius: 8px;">
                  <strong style="color: #FFFFFF;">Nhiệm vụ 1: Khởi động Inkscape</strong>
                  <div style="font-size: 12.5px; color: var(--ink-soft); margin-top: 2px;">
                    Nhận diện 4 vùng giao diện: Hộp công cụ, Canvas, Bảng màu Palette, Thanh điều khiển.
                  </div>
                </div>

                <div style="background: rgba(255,255,255,0.04); padding: 10px 14px; border-radius: 8px;">
                  <strong style="color: #FFFFFF;">Nhiệm vụ 2: Vẽ huy hiệu lớp 10</strong>
                  <div style="font-size: 12.5px; color: var(--ink-soft); margin-top: 2px;">
                    Sử dụng công cụ Elip vẽ khung tròn, Ngôi sao 5 cánh và Văn bản nghệ thuật gõ tên lớp.
                  </div>
                </div>

                <div style="background: rgba(255,255,255,0.04); padding: 10px 14px; border-radius: 8px;">
                  <strong style="color: #FFFFFF;">Nhiệm vụ 3: Tuỳ biến Fill / Stroke & Lưu tệp</strong>
                  <div style="font-size: 12.5px; color: var(--ink-soft); margin-top: 2px;">
                    Tô màu nền (Fill) và viền (Stroke) độc lập từ Palette; Lưu tệp định dạng <code>huy-hieu-10.svg</code>.
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-top: 12px; text-align: center; font-size: 12.5px; color: var(--ink-soft);">
              Chúc các em học sinh THPT Na Rì sáng tạo nên những tác phẩm đồ hoạ xuất sắc! 🚀
            </div>
          </div>
        </div>
      </div>
    </section>

  </div> <!-- /deck-container -->

  <!-- ═════════════════════════════════════════════════════════════
       THANH ĐIỀU HƯỚNG CỐ ĐỊNH PHÍA ĐÁY (.deck-nav)
  ═════════════════════════════════════════════════════════════ -->
  <nav class="deck-nav">
    <button class="nav-btn" id="prevBtn" onclick="prevSlide()" title="Slide trước (←)">‹</button>
    <div class="seek-container" onclick="seekSlide(event)" title="Nhấp chuột để tua nhanh slide">
      <div class="seek-bar" id="seekBar"></div>
    </div>
    <span class="nav-counter" id="navCounter">01 / 15</span>
    <button class="nav-btn" id="nextBtn" onclick="nextSlide()" title="Slide sau (→)">›</button>
    <button class="nav-btn" onclick="toggleToc()" title="Mục lục bài giảng (T)">📑</button>
    <button class="nav-btn" id="muteBtn" onclick="toggleMute()" title="Bật/Tắt âm thanh (M)">🔊</button>
    <button class="nav-btn" onclick="toggleFullscreen()" title="Toàn màn hình (F)">⛶</button>
  </nav>

  <!-- ═════════════════════════════════════════════════════════════
       MODAL MỤC LỤC TỔNG (TOC)
  ═════════════════════════════════════════════════════════════ -->
  <div class="toc-modal" id="tocModal" onclick="closeTocOnBg(event)">
    <div class="toc-box">
      <div class="toc-header">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">📑</span>
          <div>
            <h2 style="font-size: 18px; font-weight: 800; color: #FFFFFF;">MỤC LỤC BÀI 12: PHẦN MỀM THIẾT KẾ ĐỒ HOẠ</h2>
            <p style="font-size: 12px; color: var(--ink-soft);">Tin học 10 · Kết nối tri thức · Trường THPT Na Rì</p>
          </div>
        </div>
        <button class="reveal-btn" onclick="toggleToc()">✕ Đóng</button>
      </div>
      <div class="toc-grid" id="tocGrid">
        <!-- JS sinh tự động 15 slide -->
      </div>
    </div>
  </div>

  <!-- ═════════════════════════════════════════════════════════════
       JAVASCRIPT TƯƠNG TÁC CAO CẤP & WEB AUDIO API
  ═════════════════════════════════════════════════════════════ -->
  <script>
    /* ─── 1. BỘ TẠO ÂM THANH WEB AUDIO API (KHÔNG CẦN FILE NGOÀI) ─── */
    let audioCtx = null;
    let isMuted = false;

    function initAudio() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    }

    function playTone(freq, type = 'sine', duration = 0.12, gainVal = 0.15) {
      if (isMuted) return;
      try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
      } catch (e) {}
    }

    function playChime() {
      if (isMuted) return;
      playTone(523.25, 'triangle', 0.1, 0.12);
      setTimeout(() => playTone(659.25, 'triangle', 0.12, 0.12), 80);
      setTimeout(() => playTone(783.99, 'triangle', 0.22, 0.14), 160);
    }

    function playBuzzer() {
      if (isMuted) return;
      playTone(180, 'sawtooth', 0.2, 0.18);
      setTimeout(() => playTone(140, 'sawtooth', 0.25, 0.18), 120);
    }

    function playClick() {
      playTone(480, 'sine', 0.05, 0.08);
    }

    function playTick() {
      playTone(700, 'sine', 0.03, 0.05);
    }

    function playVictory() {
      if (isMuted) return;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        setTimeout(() => playTone(freq, 'triangle', 0.25, 0.16), i * 110);
      });
    }

    function toggleMute() {
      isMuted = !isMuted;
      const btn = document.getElementById('muteBtn');
      btn.textContent = isMuted ? '🔇' : '🔊';
      if (!isMuted) playClick();
    }

    /* ─── 2. HỆ THỐNG PHÁO HOA CANVAS CONFETTI ─── */
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    let confettiParticles = [];
    let confettiActive = false;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function triggerCelebration() {
      confettiParticles = [];
      const colors = ['#06B6D4', '#EC4899', '#8B5CF6', '#F59E0B', '#10B981', '#FFFFFF'];
      for (let i = 0; i < 140; i++) {
        confettiParticles.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          vx: (Math.random() - 0.5) * 16,
          vy: (Math.random() - 0.8) * 16,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          rot: Math.random() * 360,
          dRot: (Math.random() - 0.5) * 10
        });
      }
      confettiActive = true;
      playVictory();
    }

    function renderConfetti() {
      if (!confettiActive) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      confettiParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // trọng lực
        p.alpha -= 0.012;
        p.rot += p.dRot;
        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot * Math.PI / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
          ctx.restore();
        }
      });
      if (!alive) confettiActive = false;
      requestAnimationFrame(renderConfetti);
    }
    setInterval(() => { if (confettiActive) renderConfetti(); }, 16);

    /* ─── 3. ĐIỀU HƯỚNG SLIDE CHÍNH & PROGRESSIVE REVEAL ─── */
    const totalSlides = 15;
    let currentSlide = 1;
    const slides = document.querySelectorAll('.slide');

    // Dữ liệu số lượng bước reveal cho từng slide
    const slideSteps = {
      1: 3, 2: 3, 3: 3, 4: 3, 5: 3,
      6: 3, 7: 3, 8: 3, 9: 3, 10: 3,
      11: 3, 12: 3, 13: 1, 14: 3, 15: 3
    };
    let currentSteps = {};
    for (let i = 1; i <= totalSlides; i++) currentSteps[i] = 1;

    function updateSlideView() {
      slides.forEach((s, idx) => {
        const slideNum = idx + 1;
        s.classList.remove('active', 'prev');
        if (slideNum === currentSlide) {
          s.classList.add('active');
        } else if (slideNum < currentSlide) {
          s.classList.add('prev');
        }
      });

      // Cập nhật số trang & seekbar
      document.getElementById('navCounter').textContent = 
        String(currentSlide).padStart(2, '0') + ' / ' + String(totalSlides).padStart(2, '0');
      document.getElementById('seekBar').style.width = ((currentSlide / totalSlides) * 100) + '%';

      updateTocActive();
      playClick();
    }

    function goToSlide(num) {
      if (num < 1 || num > totalSlides) return;
      currentSlide = num;
      updateSlideView();
    }

    function nextSlide() {
      if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlideView();
      }
    }

    function prevSlide() {
      if (currentSlide > 1) {
        currentSlide--;
        updateSlideView();
      }
    }

    function seekSlide(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = clickX / rect.width;
      const target = Math.max(1, Math.min(totalSlides, Math.ceil(pct * totalSlides)));
      goToSlide(target);
    }

    /* Progressive Reveal Logic */
    function revealNext(slideNum) {
      const max = slideSteps[slideNum] || 3;
      if (currentSteps[slideNum] < max) {
        currentSteps[slideNum]++;
        applyReveal(slideNum);
        playChime();
      }
    }

    function revealAll(slideNum) {
      const max = slideSteps[slideNum] || 3;
      currentSteps[slideNum] = max;
      applyReveal(slideNum);
      playChime();
    }

    function applyReveal(slideNum) {
      const s = document.getElementById('slide-' + slideNum);
      if (!s) return;
      const step = currentSteps[slideNum];
      const max = slideSteps[slideNum] || 3;

      const items = s.querySelectorAll('.reveal-item');
      items.forEach(it => {
        const itStep = parseInt(it.dataset.step || '1', 10);
        if (itStep <= step) {
          it.classList.add('revealed');
        } else {
          it.classList.remove('revealed');
        }
      });

      const statusEl = document.getElementById('slide-' + slideNum + '-status');
      if (statusEl) {
        statusEl.textContent = 'Đang xem ' + step + '/' + max + ' ý';
      }
    }

    /* ─── 4. MỤC LỤC TỔNG (TOC) GENERATOR ─── */
    const tocTitles = [
      "Bìa bài giảng điện tử",
      "Khởi động: Thảm hoạ in cờ",
      "3 Trụ cột chuẩn năng lực",
      "Khám phá Đồ hoạ Bitmap",
      "Lab 1: Kính hiển vi đo vỡ hạt",
      "Đồ hoạ Vector & Bézier",
      "Đại chiến: Bitmap vs Vector",
      "Bộ đôi nguồn mở GIMP & Inkscape",
      "Lab 2: Bộ điều hướng phần mềm",
      "Giải phẫu giao diện Inkscape",
      "Lab 3: Inkscape Mini Studio",
      "4 Cạm bẫy thi trắc nghiệm",
      "Đấu trường Mini Quiz 5 câu",
      "Sơ đồ tư duy Mindmap",
      "Tổng kết & Nhiệm vụ Na Rì"
    ];

    function initToc() {
      const grid = document.getElementById('tocGrid');
      grid.innerHTML = '';
      tocTitles.forEach((t, i) => {
        const num = i + 1;
        const item = document.createElement('div');
        item.className = 'toc-item' + (num === currentSlide ? ' current' : '');
        item.onclick = () => { goToSlide(num); toggleToc(); };
        item.innerHTML = \`
          <span class="toc-item-num">\${String(num).padStart(2, '0')}</span>
          <span class="toc-item-title">\${t}</span>
        \`;
        grid.appendChild(item);
      });
    }

    function updateTocActive() {
      const items = document.querySelectorAll('.toc-item');
      items.forEach((it, i) => {
        if (i + 1 === currentSlide) it.classList.add('current');
        else it.classList.remove('current');
      });
    }

    function toggleToc() {
      const modal = document.getElementById('tocModal');
      modal.classList.toggle('open');
      playClick();
    }

    function closeTocOnBg(e) {
      if (e.target.id === 'tocModal') toggleToc();
    }

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }

    /* ─── 5. TƯƠNG TÁC SLIDE 2: KÉO RÈM SO SÁNH TRỰC QUAN ─── */
    let isDraggingSplit = false;
    const splitSlider = document.getElementById('splitSliderBox');
    const vectorLayer = document.getElementById('vectorLayer');
    const splitHandle = document.getElementById('splitHandle');

    function setSplitPosition(pct) {
      const clamped = Math.max(5, Math.min(95, pct));
      if (vectorLayer && splitHandle) {
        vectorLayer.style.clipPath = \`inset(0 0 0 \${clamped}%)\`;
        splitHandle.style.left = clamped + '%';
      }
    }

    if (splitSlider) {
      splitSlider.addEventListener('mousedown', (e) => {
        isDraggingSplit = true;
        updateSplitOnMove(e);
      });
      window.addEventListener('mousemove', (e) => {
        if (!isDraggingSplit) return;
        updateSplitOnMove(e);
      });
      window.addEventListener('mouseup', () => { isDraggingSplit = false; });

      function updateSplitOnMove(e) {
        const rect = splitSlider.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const pct = (x / rect.width) * 100;
        setSplitPosition(pct);
      }
    }

    /* ─── 6. TƯƠNG TÁC SLIDE 4: PIXEL GRID STUDIO ─── */
    const pixelCanvas = document.getElementById('pixelCanvas');
    const pixelColors = ['#1e293b', '#06B6D4', '#EC4899', '#F59E0B', '#10B981'];
    let coloredPixelsCount = 0;

    function initPixelGrid() {
      if (!pixelCanvas) return;
      pixelCanvas.innerHTML = '';
      for (let i = 0; i < 144; i++) {
        const cell = document.createElement('div');
        cell.className = 'pixel-cell';
        cell.dataset.color = '0';
        cell.onclick = () => {
          let c = parseInt(cell.dataset.color || '0', 10);
          c = (c + 1) % pixelColors.length;
          cell.dataset.color = c;
          cell.style.backgroundColor = pixelColors[c];
          playTone(300 + (i % 12) * 40, 'sine', 0.04, 0.06);
          updatePixelStats();
        };
        pixelCanvas.appendChild(cell);
      }
    }

    function updatePixelStats() {
      const cells = document.querySelectorAll('.pixel-cell');
      let filled = 0;
      cells.forEach(c => { if (c.dataset.color !== '0') filled++; });
      coloredPixelsCount = filled;
      const stats = document.getElementById('pixelStats');
      if (stats) {
        stats.textContent = \`Đã tô: \${filled}/144 pixel · Dung lượng: ~\${filled * 3} Bytes RGB\`;
      }
    }

    function clearPixelGrid() {
      const cells = document.querySelectorAll('.pixel-cell');
      cells.forEach(c => {
        c.dataset.color = '0';
        c.style.backgroundColor = '#1e293b';
      });
      updatePixelStats();
      playClick();
    }

    function drawPixelHeart() {
      clearPixelGrid();
      const heartIndices = [
        15, 16, 19, 20,
        26, 27, 28, 29, 31, 32, 33, 34,
        38, 39, 40, 41, 42, 43, 44, 45,
        50, 51, 52, 53, 54, 55, 56, 57,
        63, 64, 65, 66, 67, 68,
        76, 77, 78, 79,
        89, 90
      ];
      const cells = document.querySelectorAll('.pixel-cell');
      heartIndices.forEach(idx => {
        if (cells[idx]) {
          cells[idx].dataset.color = '2';
          cells[idx].style.backgroundColor = '#EC4899';
        }
      });
      updatePixelStats();
      playChime();
    }

    /* ─── 7. TƯƠNG TÁC SLIDE 5: LAB 1 - PIXEL ZOOM INSPECTOR ─── */
    let currentZoom = 100;
    let isGridOn = false;

    function updateZoom(val) {
      currentZoom = parseInt(val, 10);
      document.getElementById('zoomLabel').textContent = currentZoom + '%';
      const scale = currentZoom / 100;

      const bmpTarget = document.getElementById('bitmapTarget');
      const vecTarget = document.getElementById('vectorTarget');
      if (bmpTarget) bmpTarget.style.transform = \`scale(\${scale})\`;
      if (vecTarget) vecTarget.style.transform = \`scale(\${scale})\`;

      const bmpStatus = document.getElementById('bitmapStatus');
      if (bmpStatus) {
        if (currentZoom >= 800) {
          bmpStatus.textContent = 'Răng cưa: CỰC KỲ NẶNG (Vỡ hạt 100%)';
          bmpStatus.style.color = '#EF4444';
        } else if (currentZoom >= 400) {
          bmpStatus.textContent = 'Răng cưa: Rõ rệt';
          bmpStatus.style.color = '#F59E0B';
        } else {
          bmpStatus.textContent = 'Răng cưa: Bình thường';
          bmpStatus.style.color = '#94A3B8';
        }
      }
      playTick();
    }

    function togglePixelGrid() {
      isGridOn = !isGridOn;
      const overlay = document.getElementById('pixelGridOverlay');
      const btn = document.getElementById('toggleGridBtn');
      if (overlay) overlay.style.opacity = isGridOn ? '1' : '0';
      if (btn) btn.textContent = isGridOn ? 'Tắt lưới Pixel' : 'Bật lưới Pixel';
      playClick();
    }

    function setSample(sample) {
      const bmpSvg = document.getElementById('bitmapSvg');
      const vecSvg = document.getElementById('vectorSvg');
      if (sample === 'circle') {
        bmpSvg.innerHTML = '<circle cx="35" cy="35" r="28" fill="#EF4444" />';
        vecSvg.innerHTML = '<circle cx="70" cy="70" r="56" fill="#06B6D4" stroke="#67E8F9" stroke-width="2" />';
      } else if (sample === 'letter') {
        bmpSvg.innerHTML = '<text x="35" y="50" font-size="44" font-weight="900" fill="#EF4444" text-anchor="middle" font-family="monospace">A</text>';
        vecSvg.innerHTML = '<text x="70" y="100" font-size="88" font-weight="900" fill="#06B6D4" text-anchor="middle" font-family="system-ui">A</text>';
      } else if (sample === 'logo') {
        bmpSvg.innerHTML = \`
          <rect x="15" y="15" width="40" height="40" fill="#DC2626" />
          <polygon points="35,20 48,48 22,48" fill="#FCD34D" />
        \`;
        vecSvg.innerHTML = \`
          <rect x="30" y="30" width="80" height="80" rx="12" fill="#06B6D4" stroke="#67E8F9" stroke-width="3" />
          <polygon points="70,40 96,96 44,96" fill="#FCD34D" stroke="#FFFFFF" stroke-width="2" />
        \`;
      }
      playChime();
    }

    /* ─── 8. TƯƠNG TÁC SLIDE 6: LAB 2 - BÉZIER CURVE PLAYGROUND ─── */
    const bezierPoints = [
      { x: 40, y: 200 },
      { x: 100, y: 40 },
      { x: 300, y: 40 },
      { x: 360, y: 200 }
    ];
    let draggedBezierPt = null;

    function initBezierLab() {
      const svg = document.getElementById('bezierSvg');
      if (!svg) return;

      const pts = svg.querySelectorAll('.bezier-point');
      pts.forEach(pt => {
        pt.addEventListener('mousedown', (e) => {
          draggedBezierPt = parseInt(e.target.dataset.pt, 10);
        });
      });

      svg.addEventListener('mousemove', (e) => {
        if (draggedBezierPt === null) return;
        const rect = svg.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);
        bezierPoints[draggedBezierPt] = {
          x: Math.max(10, Math.min(390, x)),
          y: Math.max(10, Math.min(270, y))
        };
        updateBezierView();
      });

      window.addEventListener('mouseup', () => { draggedBezierPt = null; });
    }

    function updateBezierView() {
      const p0 = bezierPoints[0];
      const p1 = bezierPoints[1];
      const p2 = bezierPoints[2];
      const p3 = bezierPoints[3];

      // Update circle centers
      const ptEls = [
        document.getElementById('ptP0'),
        document.getElementById('ptP1'),
        document.getElementById('ptP2'),
        document.getElementById('ptP3')
      ];
      ptEls.forEach((el, i) => {
        if (el) {
          el.setAttribute('cx', bezierPoints[i].x);
          el.setAttribute('cy', bezierPoints[i].y);
        }
      });

      // Update guidelines
      const l1 = document.getElementById('lineP0P1');
      if (l1) {
        l1.setAttribute('x1', p0.x); l1.setAttribute('y1', p0.y);
        l1.setAttribute('x2', p1.x); l1.setAttribute('y2', p1.y);
      }
      const l2 = document.getElementById('lineP3P2');
      if (l2) {
        l2.setAttribute('x1', p3.x); l2.setAttribute('y1', p3.y);
        l2.setAttribute('x2', p2.x); l2.setAttribute('y2', p2.y);
      }

      // Update curve path
      const pathD = \`M \${p0.x} \${p0.y} C \${p1.x} \${p1.y}, \${p2.x} \${p2.y}, \${p3.x} \${p3.y}\`;
      const curve = document.getElementById('bezierCurve');
      if (curve) curve.setAttribute('d', pathD);

      // Update code snippet
      const code = document.getElementById('liveBezierSvgCode');
      if (code) {
        code.textContent = \`<path d="\${pathD}" stroke="#EC4899" stroke-width="4" />\`;
      }
    }

    function resetBezier() {
      bezierPoints[0] = { x: 40, y: 200 };
      bezierPoints[1] = { x: 100, y: 40 };
      bezierPoints[2] = { x: 300, y: 40 };
      bezierPoints[3] = { x: 360, y: 200 };
      updateBezierView();
      playChime();
    }

    /* ─── 9. TƯƠNG TÁC SLIDE 9: LAB 2 - SMART DESIGN CLASSIFIER ─── */
    const classifierAnswers = {
      1: { ans: 'gimp', exp: '✓ CHÍNH XÁC: Ảnh chụp kỷ yếu là dữ liệu Bitmap ➔ Dùng GIMP để chỉnh da mặt và cắt ghép ảnh.' },
      2: { ans: 'inkscape', exp: '✓ CHÍNH XÁC: Logo Đoàn trường cần phóng to 6m không được vỡ hạt ➔ Bắt buộc dùng Inkscape (Vector).' },
      3: { ans: 'gimp', exp: '✓ CHÍNH XÁC: Tách nền ảnh thẻ chân dung là xử lý lớp điểm ảnh (Bitmap) ➔ GIMP là công cụ tối ưu.' },
      4: { ans: 'inkscape', exp: '✓ CHÍNH XÁC: Sơ đồ tổ chức và bộ icon chuẩn web SVG là thế mạnh độc tôn của Inkscape.' },
      5: { ans: 'gimp', exp: '✓ CHÍNH XÁC: Ghép ảnh phong cảnh thực tế vào ảnh tập thể ➔ Xử lý đa lớp trên GIMP.' },
      6: { ans: 'inkscape', exp: '✓ CHÍNH XÁC: Chữ nghệ thuật uốn lượn Bézier cần in ấn sắc nét khổ A3/A0 ➔ Vẽ bằng Inkscape.' }
    };
    let classifierScore = 0;
    const completedTasks = new Set();

    function checkClassifier(taskId, choice) {
      if (completedTasks.has(taskId)) return;
      const card = document.getElementById('task-' + taskId);
      const expDiv = card.querySelector('.task-explain');
      const correct = classifierAnswers[taskId].ans === choice;

      expDiv.style.display = 'block';
      if (correct) {
        card.style.borderColor = 'var(--emerald)';
        card.style.background = 'rgba(16, 185, 129, 0.15)';
        expDiv.textContent = classifierAnswers[taskId].exp;
        expDiv.style.color = 'var(--emerald-light)';
        classifierScore++;
        playChime();
      } else {
        card.style.borderColor = 'var(--rose)';
        card.style.background = 'rgba(239, 68, 68, 0.15)';
        expDiv.textContent = '✗ CHƯA ĐÚNG: ' + (classifierAnswers[taskId].ans === 'gimp' ? 'Đây là ảnh chụp (Bitmap) ➔ nên dùng GIMP!' : 'Đây là hình cần phóng to không vỡ ➔ nên dùng Inkscape!');
        expDiv.style.color = 'var(--rose-light)';
        playBuzzer();
      }

      completedTasks.add(taskId);
      document.getElementById('classifierScore').textContent = classifierScore;
      if (classifierScore === 6) {
        triggerCelebration();
      }
    }

    function resetClassifier() {
      classifierScore = 0;
      completedTasks.clear();
      document.getElementById('classifierScore').textContent = '0';
      for (let i = 1; i <= 6; i++) {
        const card = document.getElementById('task-' + i);
        if (card) {
          card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          card.style.background = 'rgba(255, 255, 255, 0.04)';
          const expDiv = card.querySelector('.task-explain');
          if (expDiv) expDiv.style.display = 'none';
        }
      }
      playClick();
    }

    /* ─── 10. TƯƠNG TÁC SLIDE 10: GIẢI PHẪU GIAO DIỆN INKSCAPE ─── */
    const anatomyData = {
      canvas: {
        emoji: '📄',
        title: 'CANVAS (TRANG VẼ CHÍNH)',
        sub: 'Vùng làm việc trung tâm',
        desc: 'Canvas là vùng màu trắng nằm chính giữa màn hình Inkscape. Đây là không gian bạn vẽ các hình chữ nhật, hình tròn, đường cong Bézier và gõ văn bản nghệ thuật. Toạ độ của mọi hình vẽ được tính toán chính xác trên canvas này.',
        tips: '💡 Mẹo hay: Giữ phím Ctrl và lăn bánh xe chuột để phóng to / thu nhỏ canvas mượt mà!'
      },
      toolbox: {
        emoji: '🧰',
        title: 'TOOLBOX (HỘP CÔNG CỤ DỌC)',
        sub: 'Thanh công cụ bên trái',
        desc: 'Toolbox chứa toàn bộ biểu tượng các công cụ vẽ và chỉnh sửa: Con trỏ chọn đối tượng (↖), Bút vẽ hình chữ nhật (▭), Hình elip/tròn (◯), Ngôi sao/đa giác (★), Bút vẽ Bézier (✎) và Công cụ gõ chữ (T).',
        tips: '💡 Mẹo hay: Phím tắt S (Chọn), R (Chữ nhật), E (Elip), B (Bézier), T (Văn bản).'
      },
      palette: {
        emoji: '🎨',
        title: 'PALETTE (BẢNG MÀU DƯỚI ĐÁY)',
        sub: 'Dải màu chọn nhanh',
        desc: 'Palette nằm sát mép dưới màn hình, hiển thị hàng chục ô màu chuẩn. Khi đang chọn một hình trên canvas: nhấp chuột trái vào màu để đổi Màu tô (Fill); giữ Shift rồi nhấp chuột trái để đổi Màu nét viền (Stroke).',
        tips: '💡 Mẹo hay: Ô có dấu X đỏ ở đầu dải màu dùng để xoá bỏ màu tô hoặc màu viền.'
      },
      controls: {
        emoji: '⚙️',
        title: 'TOOL CONTROLS BAR',
        sub: 'Thanh thuộc tính công cụ trên cùng',
        desc: 'Nằm ngay phía trên Canvas, thanh này tự động thay đổi các nút bấm tuỳ theo công cụ bạn đang chọn ở Toolbox. Ví dụ: khi chọn hình chữ nhật sẽ hiện ô chỉnh bo góc rx, ry; khi chọn văn bản sẽ hiện font chữ.',
        tips: '💡 Mẹo hay: Nơi điều chỉnh toạ độ X, Y, chiều rộng W, chiều cao H chính xác từng milimét!'
      },
      inspector: {
        emoji: '📊',
        title: 'PANELS & DOCK INSPECTOR',
        sub: 'Bảng điều khiển nâng cao bên phải',
        desc: 'Khu vực gắn các bảng điều khiển chuyên sâu như: Bảng Fill & Stroke (chỉnh gradient mượt mà, độ mờ đục Opacity), Bảng Align & Distribute (căn thẳng hàng đối tượng) và Bảng Quản lý các lớp vẽ (Layers).',
        tips: '💡 Mẹo hay: Nhấn Ctrl + Shift + F để mở ngay bảng điều khiển Fill and Stroke.'
      }
    };

    function selectAnatomyZone(zoneKey) {
      const d = anatomyData[zoneKey];
      if (!d) return;

      document.querySelectorAll('.ui-zone').forEach(z => z.classList.remove('active'));
      const activeZone = document.querySelector('.ui-zone.' + zoneKey);
      if (activeZone) activeZone.classList.add('active');

      document.getElementById('zoneEmoji').textContent = d.emoji;
      document.getElementById('zoneTitle').textContent = d.title;
      document.getElementById('zoneSubtitle').textContent = d.sub;
      document.getElementById('zoneDesc').textContent = d.desc;
      document.getElementById('zoneTips').innerHTML = d.tips;
      playTone(440, 'sine', 0.08, 0.1);
    }

    /* ─── 11. TƯƠNG TÁC SLIDE 11: LAB 3 - INKSCAPE MINI STUDIO ─── */
    let currentStudioTool = 'select';
    let currentColorTarget = 'fill'; // 'fill' or 'stroke'
    let activeStudioFill = '#06B6D4';
    let activeStudioStroke = '#EC4899';
    let activeStudioStrokeWidth = 3;
    let studioShapes = [];
    let isDrawingShape = false;
    let drawStartX = 0, drawStartY = 0;
    let currentDrawingEl = null;

    function setStudioTool(tool) {
      currentStudioTool = tool;
      document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
      const btn = document.getElementById('tool' + tool.charAt(0).toUpperCase() + tool.slice(1));
      if (btn) btn.classList.add('active');
      playClick();
    }

    function setColorTarget(target) {
      currentColorTarget = target;
      document.getElementById('colorModeFill').classList.toggle('primary', target === 'fill');
      document.getElementById('colorModeStroke').classList.toggle('primary', target === 'stroke');
      playClick();
    }

    function applyColor(hex) {
      if (currentColorTarget === 'fill') {
        activeStudioFill = hex;
      } else {
        activeStudioStroke = hex;
      }
      playTone(550, 'triangle', 0.08, 0.1);
      updateStudioSvgCode();
    }

    function updateStudioStrokeWidth(val) {
      activeStudioStrokeWidth = parseInt(val, 10);
      document.getElementById('strokeWidthVal').textContent = val + 'px';
      updateStudioSvgCode();
    }

    function initStudioCanvas() {
      const container = document.getElementById('studioCanvasContainer');
      const svg = document.getElementById('studioSvg');
      if (!container || !svg) return;

      container.addEventListener('mousedown', (e) => {
        if (currentStudioTool === 'select') return;
        const rect = container.getBoundingClientRect();
        drawStartX = e.clientX - rect.left;
        drawStartY = e.clientY - rect.top;
        isDrawingShape = true;

        if (currentStudioTool === 'rect') {
          currentDrawingEl = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          currentDrawingEl.setAttribute('x', drawStartX);
          currentDrawingEl.setAttribute('y', drawStartY);
          currentDrawingEl.setAttribute('width', 0);
          currentDrawingEl.setAttribute('height', 0);
        } else if (currentStudioTool === 'circle') {
          currentDrawingEl = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
          currentDrawingEl.setAttribute('cx', drawStartX);
          currentDrawingEl.setAttribute('cy', drawStartY);
          currentDrawingEl.setAttribute('rx', 0);
          currentDrawingEl.setAttribute('ry', 0);
        } else if (currentStudioTool === 'star') {
          currentDrawingEl = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        } else if (currentStudioTool === 'text') {
          currentDrawingEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          currentDrawingEl.setAttribute('x', drawStartX);
          currentDrawingEl.setAttribute('y', drawStartY);
          currentDrawingEl.setAttribute('font-size', '20');
          currentDrawingEl.setAttribute('font-weight', '800');
          currentDrawingEl.setAttribute('font-family', 'system-ui');
          currentDrawingEl.textContent = 'THPT Na Rì';
        }

        if (currentDrawingEl) {
          currentDrawingEl.setAttribute('fill', activeStudioFill);
          currentDrawingEl.setAttribute('stroke', activeStudioStroke);
          currentDrawingEl.setAttribute('stroke-width', activeStudioStrokeWidth);
          svg.appendChild(currentDrawingEl);
        }
      });

      container.addEventListener('mousemove', (e) => {
        if (!isDrawingShape || !currentDrawingEl) return;
        const rect = container.getBoundingClientRect();
        const curX = e.clientX - rect.left;
        const curY = e.clientY - rect.top;
        const w = curX - drawStartX;
        const h = curY - drawStartY;

        if (currentStudioTool === 'rect') {
          currentDrawingEl.setAttribute('x', Math.min(drawStartX, curX));
          currentDrawingEl.setAttribute('y', Math.min(drawStartY, curY));
          currentDrawingEl.setAttribute('width', Math.abs(w));
          currentDrawingEl.setAttribute('height', Math.abs(h));
        } else if (currentStudioTool === 'circle') {
          currentDrawingEl.setAttribute('rx', Math.abs(w) / 2);
          currentDrawingEl.setAttribute('ry', Math.abs(h) / 2);
          currentDrawingEl.setAttribute('cx', drawStartX + w / 2);
          currentDrawingEl.setAttribute('cy', drawStartY + h / 2);
        } else if (currentStudioTool === 'star') {
          const r = Math.hypot(w, h);
          const pts = [];
          for (let i = 0; i < 10; i++) {
            const rad = (i * 36 - 90) * Math.PI / 180;
            const dist = (i % 2 === 0) ? r : r * 0.45;
            pts.push(\`\${drawStartX + dist * Math.cos(rad)},\${drawStartY + dist * Math.sin(rad)}\`);
          }
          currentDrawingEl.setAttribute('points', pts.join(' '));
        }
      });

      window.addEventListener('mouseup', () => {
        if (isDrawingShape && currentDrawingEl) {
          studioShapes.push(currentDrawingEl);
          isDrawingShape = false;
          currentDrawingEl = null;
          updateStudioSvgCode();
          playChime();
        }
      });
    }

    function updateStudioSvgCode() {
      const svg = document.getElementById('studioSvg');
      const codeBlock = document.getElementById('studioSvgCode');
      if (!svg || !codeBlock) return;

      let code = \`<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">\\n\`;
      studioShapes.forEach(shape => {
        code += '  ' + shape.outerHTML + '\\n';
      });
      code += \`</svg>\`;
      codeBlock.textContent = code;
    }

    function clearStudioCanvas() {
      const svg = document.getElementById('studioSvg');
      studioShapes.forEach(s => s.remove());
      studioShapes = [];
      updateStudioSvgCode();
      playClick();
    }

    function downloadStudioSvg() {
      const code = document.getElementById('studioSvgCode').textContent;
      const blob = new Blob([code], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'thiet-ke-thpt-na-ri.svg';
      a.click();
      URL.revokeObjectURL(url);
      triggerCelebration();
    }

    /* ─── 12. TƯƠNG TÁC SLIDE 13: ĐẤU TRƯỜNG MINI QUIZ ─── */
    const quizData = [
      {
        q: "Câu 1: Đồ hoạ điểm ảnh (bitmap) khác đồ hoạ vector ở điểm căn bản nào?",
        opts: [
          "A. Bitmap lưu màu từng ô pixel cố định, phóng to sẽ vỡ hạt; Vector lưu công thức toán",
          "B. Bitmap phóng to bao nhiêu cũng không vỡ, còn Vector thì bị răng cưa",
          "C. Bitmap chỉ lưu được ảnh đen trắng, còn Vector lưu được ảnh màu tự nhiên",
          "D. Bitmap có dung lượng luôn nhẹ hơn Vector trong mọi trường hợp"
        ],
        ans: 0,
        exp: "Chính xác! Bitmap lưu lưới điểm ảnh (pixel grid) nên phóng to vượt kích thước gốc sẽ lộ răng cưa. Vector lưu công thức toán học nên phóng to vô hạn vẫn sắc nét."
      },
      {
        q: "Câu 2: Phần mềm nào sau đây là phần mềm thiết kế đồ hoạ VECTOR mã nguồn mở miễn phí?",
        opts: [
          "A. GIMP",
          "B. Inkscape",
          "C. Adobe Photoshop",
          "D. Windows Paint"
        ],
        ans: 1,
        exp: "Chính xác! Inkscape là phần mềm đồ hoạ vector miễn phí hàng đầu. GIMP là phần mềm xử lý ảnh bitmap."
      },
      {
        q: "Câu 3: Trong Inkscape, muốn đổi màu nét viền (đường bao quanh) của đối tượng mà không đổi màu tô bên trong, ta thực hiện:",
        opts: [
          "A. Nhấp chuột trái vào một ô màu trong Palette",
          "B. Giữ phím Ctrl và nhấp chuột trái vào ô màu",
          "C. Giữ phím Shift và nhấp chuột trái vào ô màu trong Palette",
          "D. Nhấp đúp chuột phải vào ô màu trong Palette"
        ],
        ans: 2,
        exp: "Chính xác! Thao tác chuẩn Inkscape: Nhấp chuột thường = đổi Fill (màu tô); Giữ Shift + Nhấp chuột = đổi Stroke (màu viền nét)."
      },
      {
        q: "Câu 4: Tệp dự án mặc định của phần mềm Inkscape được lưu dưới định dạng nào?",
        opts: [
          "A. .DOCX",
          "B. .JPG",
          "C. .SVG",
          "D. .MP4"
        ],
        ans: 2,
        exp: "Chính xác! Inkscape lưu trực tiếp dạng .SVG (Scalable Vector Graphics) — chuẩn vector mở quốc tế hiển thị được ngay trên trình duyệt web."
      },
      {
        q: "Câu 5: Trường hợp nào sau đây NÊN sử dụng đồ hoạ Vector thay vì Bitmap?",
        opts: [
          "A. Chỉnh sửa làn da trong bức ảnh kỷ yếu chụp bằng điện thoại",
          "B. Thiết kế logo trường cần in từ danh thiếp nhỏ đến phông bạt sân khấu lớn",
          "C. Ghép cảnh hoàng hôn vào ảnh phong cảnh chụp tại Na Rì",
          "D. Quét (scan) lại một bức ảnh gia đình cũ để lưu giữ kỷ niệm"
        ],
        ans: 1,
        exp: "Chính xác! Logo cần co giãn ở rất nhiều kích cỡ khác nhau mà không được giảm chất lượng — đây chính là thế mạnh tuyệt đối của đồ hoạ vector."
      }
    ];

    let currentQuizIndex = 0;
    let quizScore = 0;
    let quizStreak = 0;

    function renderQuizQuestion() {
      const q = quizData[currentQuizIndex];
      document.getElementById('quizProgressText').textContent = \`Câu hỏi \${currentQuizIndex + 1} / \${quizData.length}\`;
      document.getElementById('quizQuestion').textContent = q.q;

      const optsContainer = document.getElementById('quizOptions');
      optsContainer.innerHTML = '';
      const feedback = document.getElementById('quizFeedback');
      feedback.style.display = 'none';

      q.opts.forEach((opt, idx) => {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.innerHTML = \`
          <div class="quiz-opt-letter">\${String.fromCharCode(65 + idx)}</div>
          <div style="font-size: 14px; font-weight: 600; line-height: 1.4;">\${opt}</div>
        \`;
        card.onclick = () => handleQuizAnswer(idx, card);
        optsContainer.appendChild(card);
      });
    }

    function handleQuizAnswer(chosenIdx, cardEl) {
      const q = quizData[currentQuizIndex];
      const allCards = document.querySelectorAll('.quiz-card');
      allCards.forEach(c => c.style.pointerEvents = 'none');

      const feedback = document.getElementById('quizFeedback');
      feedback.style.display = 'block';

      if (chosenIdx === q.ans) {
        cardEl.classList.add('correct');
        quizScore++;
        quizStreak++;
        feedback.style.background = 'rgba(16, 185, 129, 0.2)';
        feedback.style.border = '1px solid var(--emerald)';
        feedback.style.color = 'var(--emerald-light)';
        feedback.textContent = '🎉 ' + q.exp;
        playChime();
      } else {
        cardEl.classList.add('wrong');
        quizStreak = 0;
        allCards[q.ans].classList.add('correct');
        feedback.style.background = 'rgba(239, 68, 68, 0.2)';
        feedback.style.border = '1px solid var(--rose)';
        feedback.style.color = 'var(--rose-light)';
        feedback.textContent = '⚠️ ' + q.exp;
        playBuzzer();
      }

      document.getElementById('quizScore').textContent = quizScore;
      document.getElementById('quizStreak').textContent = quizStreak;

      setTimeout(() => {
        if (currentQuizIndex < quizData.length - 1) {
          currentQuizIndex++;
          renderQuizQuestion();
        } else {
          showQuizSummary();
        }
      }, 2400);
    }

    function showQuizSummary() {
      const optsContainer = document.getElementById('quizOptions');
      document.getElementById('quizQuestion').textContent = \`KẾT QUẢ ĐẤU TRƯỜNG: \${quizScore} / \${quizData.length} ĐIỂM!\`;
      optsContainer.innerHTML = \`
        <div class="glass-card" style="text-align: center; padding: 20px;">
          <div style="font-size: 38px; margin-bottom: 8px;">\${quizScore >= 4 ? '🏆' : '📚'}</div>
          <div style="font-size: 16px; font-weight: 800; color: #FFFFFF;">
            \${quizScore >= 4 ? 'Xuất sắc! Em đã nắm trọn bản chất đồ hoạ máy tính!' : 'Cố gắng lên! Hãy xem lại các slide lý thuyết để đạt điểm 10 nhé!'}
          </div>
          <button class="reveal-btn primary" onclick="resetQuiz()" style="margin-top: 14px;">Làm lại Đấu trường</button>
        </div>
      \`;
      if (quizScore >= 4) triggerCelebration();
    }

    function resetQuiz() {
      currentQuizIndex = 0;
      quizScore = 0;
      quizStreak = 0;
      document.getElementById('quizScore').textContent = '0';
      document.getElementById('quizStreak').textContent = '0';
      renderQuizQuestion();
      playClick();
    }

    /* ─── 13. TƯƠNG TÁC SLIDE 14: SƠ ĐỒ TƯ DUY MINDMAP ─── */
    function toggleMindmapNode(nodeEl) {
      nodeEl.classList.toggle('expanded');
      playTone(520, 'sine', 0.08, 0.12);
    }

    /* ─── 14. PHÍM TẮT BÀN PHÍM CHUẨN TRÌNH CHIẾU ─── */
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      } else if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        revealNext(currentSlide);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      } else if (e.key === 't' || e.key === 'T') {
        toggleToc();
      }
    });

    /* ─── KHỞI TẠO TẤT CẢ MODULE KHI TẢI TRANG ─── */
    window.addEventListener('DOMContentLoaded', () => {
      initToc();
      initPixelGrid();
      initBezierLab();
      initStudioCanvas();
      renderQuizQuestion();
      updateSlideView();
    });
  </script>
</body>
</html>
`;

// Ghi file ra 2 vị trí: public/ và root
const publicPath = path.resolve('public', 'bai-12-trinh-chieu.html');
const rootPath = path.resolve('bai-12-trinh-chieu.html');

fs.writeFileSync(publicPath, htmlContent, 'utf-8');
console.log('✓ Đã tạo thành công: ' + publicPath);

fs.writeFileSync(rootPath, htmlContent, 'utf-8');
console.log('✓ Đã đồng bộ sang root: ' + rootPath);
