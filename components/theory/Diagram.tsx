// Kho hình vẽ minh hoạ cho phần Lý thuyết.
//
// Tất cả đều là SVG viết tay, nhúng thẳng vào trang — không tải ảnh từ ngoài
// nên không phụ thuộc mạng, phóng to không vỡ, và màu ăn theo bảng màu lớp 10.
// Khối { kind: "figure", diagram: "<khoá>" } trong data/theory/* tra vào đây.
//
// Thêm hình mới: viết một component rồi khai báo thêm một dòng trong DIAGRAMS.

const C = {
  ink: "#1E2438",
  inkSoft: "#4A5370",
  grape: "#7C3AED",
  grapeDeep: "#5B21B6",
  bubble: "#EC4899",
  bubbleDeep: "#C8156E",
  mint: "#10B981",
  mintDeep: "#0A7753",
  sun: "#F59E0B",
  sunDeep: "#915E06",
  line: "#E4D9F9",
  white: "#FFFFFF",
};

// SVG không tự xuống dòng — mỗi phần tử của mảng là một dòng.
function Lines({
  x, y, lines, size = 13, fill = C.inkSoft, weight = 400, gap = 17,
  anchor = "middle",
}: {
  x: number; y: number; lines: string[]; size?: number; fill?: string;
  weight?: number; gap?: number; anchor?: "start" | "middle" | "end";
}) {
  return (
    <text x={x} y={y} fontSize={size} fill={fill} fontWeight={weight} textAnchor={anchor}>
      {lines.map((l, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : gap}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

function Frame({ viewBox, children }: { viewBox: string; children: React.ReactNode }) {
  return (
    <svg viewBox={viewBox} className="h-auto w-full" role="img" style={{ fontFamily: "var(--font-body)" }}>
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill={C.grape} />
        </marker>
        <marker id="arrow-soft" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill={C.line} />
        </marker>
        <marker id="arrow-bubble" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill={C.bubble} />
        </marker>
      </defs>
      {children}
    </svg>
  );
}

// ── Bài 1: Quá trình xử lí thông tin (Hình 1.1 SGK) ────────────────────────
function QuaTrinhXuLiThongTin() {
  return (
    <Frame viewBox="0 0 640 200">
      {/* Nền */}
      <rect x="10" y="10" width="620" height="180" rx="16" fill={C.grape} fillOpacity="0.05" stroke={C.line} strokeWidth="1.5" />

      {/* Hộp 1: Tiếp nhận dữ liệu */}
      <rect x="40" y="55" width="140" height="90" rx="14" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <Lines x={110} y={85} lines={["📥", "Tiếp nhận", "dữ liệu"]} size={14} fill={C.grapeDeep} weight={600} gap={18} />

      {/* Mũi tên 1→2 */}
      <line x1="185" y1="100" x2="230" y2="100" stroke={C.grape} strokeWidth="2" markerEnd="url(#arrow)" />
      <Lines x={207} y={82} lines={["B1"]} size={12} fill={C.inkSoft} weight={700} />

      {/* Hộp 2: Xử lí dữ liệu */}
      <rect x="240" y="55" width="140" height="90" rx="14" fill={C.grape} fillOpacity="0.12" stroke={C.grape} strokeWidth="2" />
      <Lines x={310} y={85} lines={["⚙️", "Xử lí", "dữ liệu"]} size={14} fill={C.grapeDeep} weight={600} gap={18} />

      {/* Mũi tên 2→3 */}
      <line x1="385" y1="100" x2="430" y2="100" stroke={C.grape} strokeWidth="2" markerEnd="url(#arrow)" />
      <Lines x={407} y={82} lines={["B2"]} size={12} fill={C.inkSoft} weight={700} />

      {/* Hộp 3: Đưa ra kết quả */}
      <rect x="440" y="55" width="160" height="90" rx="14" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <Lines x={520} y={85} lines={["📤", "Đưa ra", "kết quả"]} size={14} fill={C.mintDeep} weight={600} gap={18} />

      {/* Nhãn phía trên */}
      <Lines x={320} y={30} lines={["Quá trình xử lí thông tin bằng máy tính"]} size={14} fill={C.ink} weight={700} />
    </Frame>
  );
}

// ── Bài 1: Bảng đơn vị lưu trữ dữ liệu ────────────────────────────────────
function DonViLuuTru() {
  const units = [
    { name: "bit", sym: "bit", val: "1 bit" },
    { name: "Byte", sym: "B", val: "8 bit" },
    { name: "Kilobyte", sym: "KB", val: "2¹⁰ B = 1 024 B" },
    { name: "Megabyte", sym: "MB", val: "2¹⁰ KB" },
    { name: "Gigabyte", sym: "GB", val: "2¹⁰ MB" },
    { name: "Terabyte", sym: "TB", val: "2¹⁰ GB" },
  ];
  const rowH = 32;
  const startY = 65;
  const h = startY + units.length * rowH + 20;

  return (
    <Frame viewBox={`0 0 640 ${h}`}>
      {/* Nền */}
      <rect x="10" y="10" width="620" height={h - 20} rx="16" fill={C.grape} fillOpacity="0.04" stroke={C.line} strokeWidth="1.5" />

      {/* Header */}
      <Lines x={320} y={35} lines={["Các đơn vị lưu trữ dữ liệu"]} size={15} fill={C.ink} weight={700} />

      {/* Cột header */}
      <line x1="40" y1={startY - 5} x2="600" y2={startY - 5} stroke={C.line} strokeWidth="1.5" />
      <Lines x={120} y={startY - 12} lines={["Đơn vị"]} size={13} fill={C.grapeDeep} weight={700} />
      <Lines x={280} y={startY - 12} lines={["Kí hiệu"]} size={13} fill={C.grapeDeep} weight={700} />
      <Lines x={480} y={startY - 12} lines={["Lượng dữ liệu"]} size={13} fill={C.grapeDeep} weight={700} />

      {/* Các dòng */}
      {units.map((u, i) => {
        const y = startY + i * rowH + 20;
        const bg = i % 2 === 0 ? C.grape : "transparent";
        return (
          <g key={i}>
            <rect x="40" y={y - 18} width="560" height={rowH} rx="6" fill={bg} fillOpacity="0.06" />
            <Lines x={120} y={y} lines={[u.name]} size={13} fill={C.ink} weight={500} />
            <Lines x={280} y={y} lines={[u.sym]} size={13} fill={C.bubbleDeep} weight={600} />
            <Lines x={480} y={y} lines={[u.val]} size={13} fill={C.inkSoft} weight={400} />
          </g>
        );
      })}

      {/* Ghi chú */}
      <Lines
        x={320}
        y={h - 18}
        lines={["Mỗi đơn vị hơn kém nhau 2¹⁰ = 1 024 lần"]}
        size={12}
        fill={C.sunDeep}
        weight={600}
      />
    </Frame>
  );
}

// ── Bài 2: Kết nối IoT giữa các thiết bị thông minh ─────────────────────────
function IoTKetNoi() {
  const nodes = [
    { x: 40, y: 20, icon: "📱", lines: ["Điện thoại", "thông minh"] },
    { x: 450, y: 20, icon: "📷", lines: ["Camera", "kết nối"] },
    { x: 40, y: 196, icon: "⌚", lines: ["Đồng hồ", "thông minh"] },
    { x: 450, y: 196, icon: "🌡️", lines: ["Cảm biến", "IoT"] },
  ];
  const hub = { cx: 320, cy: 148 };
  const nodeW = 150;
  const nodeH = 64;

  return (
    <Frame viewBox="0 0 640 280">
      <rect x="10" y="10" width="620" height="260" rx="16" fill={C.grape} fillOpacity="0.04" stroke={C.line} strokeWidth="1.5" />

      {/* Đường nối từ mỗi thiết bị tới trung tâm, có nhãn 2 chiều */}
      {nodes.map((n, i) => {
        const nx = n.x + nodeW / 2;
        const ny = n.y + nodeH / 2;
        const mx = (nx + hub.cx) / 2;
        const my = (ny + hub.cy) / 2;
        return (
          <g key={i}>
            <line x1={nx} y1={ny} x2={hub.cx} y2={hub.cy} stroke={C.grape} strokeWidth="1.5" strokeDasharray="5 4" />
            <circle cx={mx} cy={my} r="11" fill={C.white} stroke={C.grape} strokeWidth="1.2" />
            <Lines x={mx} y={my + 4} lines={["↔"]} size={13} fill={C.grapeDeep} weight={700} />
          </g>
        );
      })}

      {/* Trung tâm: Internet / đám mây */}
      <circle cx={hub.cx} cy={hub.cy} r="56" fill={C.white} stroke={C.grape} strokeWidth="2.5" />
      <Lines x={hub.cx} y={hub.cy - 8} lines={["☁️"]} size={22} />
      <Lines x={hub.cx} y={hub.cy + 16} lines={["Internet", "(đám mây)"]} size={12} fill={C.grapeDeep} weight={700} gap={15} />

      {/* Bốn thiết bị thông minh quanh trung tâm */}
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x} y={n.y} width={nodeW} height={nodeH} rx="14" fill={C.white} stroke={C.bubble} strokeWidth="2" />
          <Lines x={n.x + nodeW / 2} y={n.y + 24} lines={[n.icon]} size={18} />
          <Lines x={n.x + nodeW / 2} y={n.y + 46} lines={n.lines} size={12} fill={C.bubbleDeep} weight={600} gap={14} />
        </g>
      ))}

      <Lines x={320} y={272} lines={["Các thiết bị thông minh tự động trao đổi dữ liệu qua mạng không dây, không cần con người can thiệp"]} size={12} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 7: Các nút bấm và màn hình chính của điện thoại thông minh (Hình 7.4, 7.5) ──
function ManHinhDienThoai() {
  const px = 60, py = 20, pw = 150, ph = 300;
  const ix = px + 8, iw = pw - 16, iyTop = py + 8;
  const bands = { status: 28, icons: 152, dock: 42, nav: 62 };
  const yStatus0 = iyTop;
  const yIcons0 = yStatus0 + bands.status;
  const yDock0 = yIcons0 + bands.icons;
  const yNav0 = yDock0 + bands.dock;
  const yNav1 = yNav0 + bands.nav;

  const labels = [
    { yFrom: yStatus0, yTo: yStatus0 + bands.status, lines: ["Thanh trạng thái", "giờ · pin · kết nối"] },
    { yFrom: yIcons0, yTo: yIcons0 + bands.icons, lines: ["Các biểu tượng", "ứng dụng đã cài"] },
    { yFrom: yDock0, yTo: yDock0 + bands.dock, lines: ["Thanh truy cập nhanh", "ứng dụng hay dùng"] },
    { yFrom: yNav0, yTo: yNav1, lines: ["Thanh điều hướng", "◁ Quay lại · ○ Home · ▢ Tổng quan"] },
  ];

  return (
    <Frame viewBox="0 0 640 370">
      {/* Vỏ điện thoại */}
      <rect x={px} y={py} width={pw} height={ph} rx="24" fill={C.white} stroke={C.ink} strokeWidth="2.5" />
      {/* Nút khoá + nút âm lượng bên trái */}
      <rect x={px - 6} y="70" width="6" height="22" rx="2" fill={C.ink} />
      <rect x={px - 6} y="110" width="6" height="50" rx="2" fill={C.ink} />
      <Lines x={320} y={py + ph + 22} lines={["🔒 Nút khoá  ·  🔊 Nút tăng/giảm âm lượng", "(hai bên thân máy)"]} size={12} fill={C.inkSoft} weight={500} gap={16} />

      {/* Màn hình: 4 vùng */}
      <rect x={ix} y={yStatus0} width={iw} height={bands.status} fill={C.bubble} fillOpacity="0.12" />
      <rect x={ix} y={yIcons0} width={iw} height={bands.icons} fill={C.grape} fillOpacity="0.05" />
      <rect x={ix} y={yDock0} width={iw} height={bands.dock} fill={C.mint} fillOpacity="0.12" />
      <rect x={ix} y={yNav0} width={iw} height={bands.nav} fill={C.sun} fillOpacity="0.12" />
      <rect x={ix} y={yStatus0} width={iw} height={yNav1 - yStatus0} rx="16" fill="none" stroke={C.ink} strokeWidth="1" strokeOpacity="0.15" />

      {/* Nội dung minh hoạ trong từng vùng */}
      <Lines x={ix + iw / 2} y={yStatus0 + 18} lines={["16:10  📶 🔋92%"]} size={12} fill={C.inkSoft} weight={600} />
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={ix + 24 + col * 56}
            y={yIcons0 + 24 + row * 46}
            width="26"
            height="26"
            rx="7"
            fill={[C.grape, C.bubble, C.mint][(row + col) % 3]}
            fillOpacity="0.75"
          />
        )),
      )}
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={ix + 22 + i * 30} cy={yDock0 + bands.dock / 2} r="10" fill={C.mintDeep} />
      ))}
      <Lines x={ix + iw / 2} y={yNav0 + bands.nav / 2 + 5} lines={["◁   ○   ▢"]} size={16} fill={C.sunDeep} weight={700} />

      {/* Nhãn chú thích bên phải, có mũi tên trỏ vào từng vùng */}
      {labels.map((l, i) => {
        const yMid = (l.yFrom + l.yTo) / 2;
        return (
          <g key={i}>
            <line x1={ix + iw} y1={yMid} x2="248" y2={yMid} stroke={C.line} strokeWidth="1.5" markerEnd="url(#arrow-soft)" />
            <Lines x={254} y={yMid - 4} lines={l.lines} size={13} fill={C.inkSoft} weight={500} anchor="start" gap={15} />
          </g>
        );
      })}
    </Frame>
  );
}

const DIAGRAMS: Record<string, () => JSX.Element> = {
  "qua-trinh-xu-li-thong-tin": QuaTrinhXuLiThongTin,
  "don-vi-luu-tru": DonViLuuTru,
  "iot-ket-noi-thiet-bi": IoTKetNoi,
  "man-hinh-dien-thoai-thong-minh": ManHinhDienThoai,
};

export default function Diagram({ name }: { name: string }) {
  const D = DIAGRAMS[name];
  if (!D) return null;
  return <D />;
}
