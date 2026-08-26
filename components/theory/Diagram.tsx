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

// ── Bài 8: Mô hình LAN kết nối qua Internet (Hình 8.2 SGK) ──────────────────
function LanQuaInternet() {
  function LanCluster({ x, flip, label }: { x: number; flip: boolean; label: string }) {
    const iconsX = flip ? x + 20 : x;
    const swX = flip ? x + 60 : x + 20;
    const rtX = flip ? x + 20 : x + 60;
    return (
      <g>
        <rect x={x - 10} y="30" width="150" height="230" rx="16" fill={C.grape} fillOpacity="0.04" stroke={C.line} strokeWidth="1.5" strokeDasharray="4 4" />
        <Lines x={x + 65} y={48} lines={[label]} size={13} fill={C.grapeDeep} weight={700} />
        {["💻", "🖥️", "🖨️"].map((ic, i) => (
          <Lines key={i} x={iconsX + i * 30} y={80} lines={[ic]} size={16} />
        ))}
        <line x1={iconsX + 30} y1="88" x2={swX + 30} y2="118" stroke={C.grape} strokeWidth="1.5" />
        <rect x={swX} y="118" width="60" height="30" rx="8" fill={C.white} stroke={C.grape} strokeWidth="2" />
        <Lines x={swX + 30} y={137} lines={["Switch"]} size={12} fill={C.grapeDeep} weight={600} />
        <line x1={swX + 30} y1="148" x2={rtX + 30} y2="178" stroke={C.grape} strokeWidth="1.5" />
        <rect x={rtX} y="178" width="60" height="30" rx="8" fill={C.bubble} fillOpacity="0.12" stroke={C.bubble} strokeWidth="2" />
        <Lines x={rtX + 30} y={197} lines={["Router"]} size={12} fill={C.bubbleDeep} weight={600} />
        <Lines x={x + 65} y={225} lines={["LAN"]} size={12} fill={C.inkSoft} weight={500} />
      </g>
    );
  }

  return (
    <Frame viewBox="0 0 640 300">
      <LanCluster x={20} flip={false} label="Cơ quan A" />
      <LanCluster x={470} flip={true} label="Cơ quan B" />

      <line x1="200" y1="193" x2="255" y2="160" stroke={C.bubble} strokeWidth="2" markerEnd="url(#arrow-bubble)" />
      <line x1="440" y1="193" x2="385" y2="160" stroke={C.bubble} strokeWidth="2" markerEnd="url(#arrow-bubble)" />

      <circle cx="320" cy="150" r="58" fill={C.white} stroke={C.bubble} strokeWidth="2.5" />
      <Lines x={320} y={142} lines={["☁️"]} size={22} />
      <Lines x={320} y={168} lines={["INTERNET"]} size={13} fill={C.bubbleDeep} weight={700} />

      <Lines x={320} y={280} lines={["Router kết nối mỗi LAN với Internet; Switch chỉ chuyển tiếp dữ liệu trong nội bộ LAN"]} size={12} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 9: 5 Nguy cơ trên không gian mạng ────────────────────────────────────
function NguyCoKhongGianMang() {
  const threats = [
    { emoji: "📰", title: "Tin giả, phản văn hoá", desc: "Tin bịa đặt, kích động, độc hại", x: 130, y: 55, color: "#EF4444", deep: "#B91C1C" },
    { emoji: "🎣", title: "Lừa đảo trực tuyến", desc: "Mạo danh vay tiền, web giả", x: 510, y: 55, color: C.sun, deep: C.sunDeep },
    { emoji: "🔓", title: "Lộ thông tin cá nhân", desc: "Mật khẩu, CCCD, thẻ ngân hàng", x: 100, y: 225, color: C.grape, deep: C.grapeDeep },
    { emoji: "⚠️", title: "Bắt nạt qua mạng", desc: "Xỉ vả, bêu xấu, đe dọa ẩn danh", x: 540, y: 225, color: C.bubble, deep: C.bubbleDeep },
    { emoji: "🎮", title: "Nghiện mạng & game", desc: "Mất thời gian, hại sức khoẻ", x: 320, y: 290, color: C.mint, deep: C.mintDeep },
  ];

  return (
    <Frame viewBox="0 0 640 370">
      {/* Vòng tròn trung tâm: Môi trường Internet */}
      <circle cx="320" cy="150" r="52" fill={C.white} stroke={C.grape} strokeWidth="2.5" />
      <Lines x={320} y={140} lines={["🌐"]} size={26} />
      <Lines x={320} y={166} lines={["KHÔNG GIAN", "MẠNG"]} size={11} fill={C.grapeDeep} weight={700} gap={13} />

      {/* Đường nối và các hộp nguy cơ */}
      {threats.map((t, i) => (
        <g key={i}>
          <line x1="320" y1="150" x2={t.x} y2={t.y + 20} stroke={C.line} strokeWidth="2" strokeDasharray="4 4" />
          <rect
            x={t.x - 90}
            y={t.y - 10}
            width="180"
            height="62"
            rx="12"
            fill={C.white}
            stroke={t.color}
            strokeWidth="2"
          />
          <Lines x={t.x - 70} y={t.y + 25} lines={[t.emoji]} size={20} />
          <Lines x={t.x - 45} y={t.y + 14} lines={[t.title]} size={12} fill={t.deep} weight={700} anchor="start" />
          <Lines x={t.x - 45} y={t.y + 32} lines={[t.desc]} size={10.5} fill={C.inkSoft} weight={500} anchor="start" />
        </g>
      ))}

      <Lines
        x={320}
        y={355}
        lines={["Mạng Internet rất mở và tiện lợi, nhưng luôn tiềm ẩn các cạm bẫy cần nhận biết để phòng vệ"]}
        size={11.5}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 9: Phân biệt 3 loại mã độc (Virus vs Worm vs Trojan) ─────────────────
function PhanBietMalware() {
  const cards = [
    {
      type: "VIRUS",
      emoji: "🦠",
      color: "#EF4444",
      deep: "#B91C1C",
      x: 20,
      tags: ["Không hoàn chỉnh", "Ký sinh trong tệp chủ"],
      desc: ["Chỉ là đoạn mã độc, phải", "gắn vào 1 tệp/chương trình", "để lây khi tệp đó chạy."],
      example: "File .exe, Word macro nhiễm virus",
    },
    {
      type: "WORM (Sâu)",
      emoji: "🐛",
      color: C.sun,
      deep: C.sunDeep,
      x: 225,
      tags: ["Phần mềm hoàn chỉnh", "Tự lây lan độc lập"],
      desc: ["Tự nhân bản, tự tìm lỗ hổng", "mạng để bò sang máy khác mà", "không cần người dùng mở tệp."],
      example: "Sâu WannaCry, sâu Melissa",
    },
    {
      type: "TROJAN (Ngựa Troa)",
      emoji: "🐴",
      color: C.grape,
      deep: C.grapeDeep,
      x: 430,
      tags: ["Phần mềm nội gián", "Nguỵ trang có ích"],
      desc: ["Đội lốt game crack, app hay", "lừa người dùng tự cài, sau", "đó mở cửa sau (backdoor/spy)."],
      example: "App lậu, game crack, keygen",
    },
  ];

  return (
    <Frame viewBox="0 0 640 310">
      {cards.map((c, i) => (
        <g key={i}>
          {/* Khung thẻ */}
          <rect x={c.x} y="15" width="190" height="255" rx="14" fill={C.white} stroke={c.color} strokeWidth="2" />
          <rect x={c.x} y="15" width="190" height="42" rx="14" fill={c.color} fillOpacity="0.12" />

          {/* Tiêu đề & Icon */}
          <Lines x={c.x + 24} y={42} lines={[c.emoji]} size={20} />
          <Lines x={c.x + 50} y={40} lines={[c.type]} size={13} fill={c.deep} weight={700} anchor="start" />

          {/* Tags đặc trưng */}
          <rect x={c.x + 12} y="68" width="166" height="22" rx="6" fill={C.line} fillOpacity="0.4" />
          <Lines x={c.x + 95} y={83} lines={[c.tags[0]]} size={10.5} fill={c.deep} weight={600} />

          <rect x={c.x + 12} y="96" width="166" height="22" rx="6" fill={c.color} fillOpacity="0.08" />
          <Lines x={c.x + 95} y={111} lines={[c.tags[1]]} size={10.5} fill={c.deep} weight={600} />

          {/* Mô tả chi tiết */}
          <Lines
            x={c.x + 15}
            y={136}
            lines={c.desc}
            size={11}
            fill={C.inkSoft}
            weight={400}
            anchor="start"
            gap={15}
          />

          {/* Hộp ví dụ */}
          <rect x={c.x + 10} y="200" width="170" height="58" rx="8" fill={C.line} fillOpacity="0.25" />
          <Lines x={c.x + 16} y={218} lines={["💡 Ví dụ thực tế:"]} size={10.5} fill={c.deep} weight={700} anchor="start" />
          <Lines x={c.x + 16} y={236} lines={[c.example]} size={10.5} fill={C.ink} weight={500} anchor="start" />
        </g>
      ))}

      <Lines
        x={320}
        y={295}
        lines={["Hiểu đúng cơ chế của từng loại giúp ta chọn cách phòng ngừa và bảo vệ dữ liệu hiệu quả"]}
        size={11.5}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 9: Các chế độ quét trong Windows Defender ────────────────────────────
function CheDoQuetDefender() {
  const modes = [
    {
      name: "1. Quick scan (Quét nhanh)",
      icon: "⚡",
      color: C.mint,
      deep: C.mintDeep,
      focus: ["Quét các thư mục trọng yếu", "& vị trí mã độc hay trú ngụ"],
      time: "Vài phút",
      usage: ["Nên dùng hàng ngày hoặc khi", "thấy máy chậm bất thường"],
      x: 20,
    },
    {
      name: "2. Full scan (Quét toàn bộ)",
      icon: "🛡️",
      color: C.bubble,
      deep: C.bubbleDeep,
      focus: ["Quét triệt để tất cả ổ đĩa,", "tệp tin và tiến trình bộ nhớ"],
      time: "1 – vài giờ",
      usage: ["Nên chạy định kì (1–2 tuần/lần)", "hoặc sau khi vừa xử lí mã độc"],
      x: 225,
    },
    {
      name: "3. Custom scan (Quét tuỳ chọn)",
      icon: "🎯",
      color: C.grape,
      deep: C.grapeDeep,
      focus: ["Chỉ quét một thư mục, tệp hoặc", "ổ USB cắm ngoài chỉ định"],
      time: "Tuỳ dung lượng",
      usage: ["Dùng trước khi mở tệp tải từ", "mạng hoặc vừa cắm USB lạ"],
      x: 430,
    },
  ];

  return (
    <Frame viewBox="0 0 640 280">
      {modes.map((m, i) => (
        <g key={i}>
          <rect x={m.x} y="20" width="190" height="230" rx="14" fill={C.white} stroke={m.color} strokeWidth="2" />
          <rect x={m.x} y="20" width="190" height="40" rx="14" fill={m.color} fillOpacity="0.12" />

          <Lines x={m.x + 22} y={45} lines={[m.icon]} size={18} />
          <Lines x={m.x + 44} y={44} lines={[m.name]} size={11} fill={m.deep} weight={700} anchor="start" />

          {/* Phạm vi quét */}
          <Lines x={m.x + 14} y={80} lines={["Phạm vi quét:"]} size={11} fill={m.deep} weight={700} anchor="start" />
          <Lines
            x={m.x + 14}
            y={98}
            lines={m.focus}
            size={11}
            fill={C.inkSoft}
            weight={400}
            anchor="start"
            gap={14}
          />

          {/* Thời gian */}
          <Lines x={m.x + 14} y={142} lines={["⏱️ Thời gian: " + m.time]} size={11} fill={C.ink} weight={600} anchor="start" />

          {/* Khi nào nên dùng */}
          <rect x={m.x + 10} y="160" width="170" height="78" rx="8" fill={C.line} fillOpacity="0.25" />
          <Lines x={m.x + 16} y={178} lines={["📌 Khi nào nên dùng?"]} size={10.5} fill={m.deep} weight={700} anchor="start" />
          <Lines
            x={m.x + 16}
            y={196}
            lines={m.usage}
            size={10}
            fill={C.inkSoft}
            weight={500}
            anchor="start"
            gap={13}
          />
        </g>
      ))}

      <Lines
        x={320}
        y={268}
        lines={["Có thể nháy chuột phải vào một thư mục bất kì ➜ chọn 'Scan with Microsoft Defender' để quét nhanh"]}
        size={11}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 10: 4 Cú pháp tìm kiếm Google thần thánh ─────────────────────────────
function CuPhapTimKiem() {
  const items = [
    {
      syntax: '"cụm từ khóa"',
      emoji: '🎯',
      name: "Tìm chính xác nguyên cụm",
      desc: "Chỉ hiện kết quả chứa đúng cụm từ theo đúng thứ tự, lọc kết quả rời rạc.",
      example: '"chiến dịch Điện Biên Phủ"',
      color: C.grape,
      deep: C.grapeDeep,
      x: 20,
      y: 20,
    },
    {
      syntax: "site:tenmien.vn",
      emoji: '🌐',
      name: "Giới hạn trong 1 website",
      desc: "Thu hẹp phạm vi tìm kiếm trong một trang web hoặc đuôi tên miền uy tín (.gov, .edu).",
      example: "lịch thi tốt nghiệp site:moet.gov.vn",
      color: C.mint,
      deep: C.mintDeep,
      x: 330,
      y: 20,
    },
    {
      syntax: "filetype:dinhdang",
      emoji: '📑',
      name: "Tìm tệp tài liệu cụ thể",
      desc: "Chỉ tải các tệp định dạng yêu cầu (pdf, pptx, docx, xlsx) để làm bài tập/thuyết trình.",
      example: "tin học 10 bài 10 filetype:pptx",
      color: C.bubble,
      deep: C.bubbleDeep,
      x: 20,
      y: 155,
    },
    {
      syntax: "từ_khóa -từ_loại_trừ",
      emoji: '➖',
      name: "Loại trừ kết quả gây nhiễu",
      desc: "Loại bỏ các trang chứa từ khoá không mong muốn, cực kì hữu ích với từ đa nghĩa.",
      example: "lập trình python -rắn",
      color: C.sun,
      deep: C.sunDeep,
      x: 330,
      y: 155,
    },
  ];

  return (
    <Frame viewBox="0 0 640 310">
      {items.map((it, i) => (
        <g key={i}>
          <rect x={it.x} y={it.y} width="290" height="120" rx="12" fill={C.white} stroke={it.color} strokeWidth="2" />
          <rect x={it.x} y={it.y} width="290" height="32" rx="12" fill={it.color} fillOpacity="0.12" />

          <Lines x={it.x + 18} y={it.y + 22} lines={[it.emoji]} size={16} />
          <Lines x={it.x + 42} y={it.y + 21} lines={[it.syntax]} size={12.5} fill={it.deep} weight={700} anchor="start" />

          <Lines x={it.x + 14} y={it.y + 52} lines={[it.name]} size={11.5} fill={it.deep} weight={600} anchor="start" />
          <Lines
            x={it.x + 14}
            y={it.y + 68}
            lines={[it.desc.slice(0, 42), it.desc.slice(42)].filter(Boolean)}
            size={10.5}
            fill={C.inkSoft}
            weight={400}
            anchor="start"
            gap={13}
          />

          <rect x={it.x + 10} y={it.y + 92} width="270" height="22" rx="6" fill={C.line} fillOpacity="0.3" />
          <Lines x={it.x + 16} y={it.y + 107} lines={["Ví dụ: " + it.example]} size={10} fill={C.ink} weight={600} anchor="start" />
        </g>
      ))}

      <Lines
        x={320}
        y={295}
        lines={["Kết hợp linh hoạt các toán tử trên sẽ giúp tìm đúng thông tin cần thiết chỉ sau vài giây"]}
        size={11}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 10: Giao diện & 3 chế độ dịch của Google Translate ──────────────────
function GoogleTranslateDiagram() {
  return (
    <Frame viewBox="0 0 640 280">
      {/* Khung giao diện dịch */}
      <rect x="20" y="20" width="600" height="235" rx="14" fill={C.white} stroke={C.grape} strokeWidth="2" />
      
      {/* Thanh tab chế độ */}
      <rect x="20" y="20" width="600" height="40" rx="14" fill={C.grape} fillOpacity="0.08" />
      <rect x="35" y="28" width="105" height="24" rx="6" fill={C.grape} />
      <Lines x={87} y={44} lines={["✍️ Văn bản"]} size={11} fill={C.white} weight={600} />
      
      <rect x="150" y="28" width="105" height="24" rx="6" fill={C.white} stroke={C.line} strokeWidth="1" />
      <Lines x={202} y={44} lines={["📄 Tài liệu (tệp)"]} size={11} fill={C.inkSoft} weight={600} />

      <rect x="265" y="28" width="105" height="24" rx="6" fill={C.white} stroke={C.line} strokeWidth="1" />
      <Lines x={317} y={44} lines={["🖼️ Hình ảnh"]} size={11} fill={C.inkSoft} weight={600} />

      {/* Thanh chọn ngôn ngữ nguồn & đích */}
      <rect x="35" y="70" width="260" height="30" rx="6" fill={C.line} fillOpacity="0.3" />
      <Lines x={45} y={89} lines={["Phát hiện ngôn ngữ | TIẾNG VIỆT ▾"]} size={11} fill={C.grapeDeep} weight={600} anchor="start" />

      {/* Nút đảo chiều */}
      <circle cx="320" cy="85" r="14" fill={C.bubble} fillOpacity="0.15" stroke={C.bubble} strokeWidth="1.5" />
      <Lines x={320} y={90} lines={["⇆"]} size={15} fill={C.bubbleDeep} weight={700} />

      <rect x="345" y="70" width="260" height="30" rx="6" fill={C.line} fillOpacity="0.3" />
      <Lines x={355} y={89} lines={["TIẾNG ANH ▾ | TIẾNG PHÁP | KHÁC..."]} size={11} fill={C.grapeDeep} weight={600} anchor="start" />

      {/* Khung nội dung 2 cột */}
      <rect x="35" y="110" width="260" height="110" rx="8" fill={C.white} stroke={C.line} strokeWidth="1.5" />
      <Lines x={48} y={135} lines={["Cái quý giá nhất của con", "người là cuộc sống."]} size={12} fill={C.ink} weight={500} anchor="start" gap={16} />
      {/* Icon micro & loa bên nguồn */}
      <Lines x={50} y={205} lines={["🎙️ Nói để nhập"]} size={11} fill={C.bubbleDeep} weight={600} anchor="start" />
      <Lines x={160} y={205} lines={["🔊 Nghe đọc"]} size={11} fill={C.grapeDeep} weight={600} anchor="start" />

      <rect x="345" y="110" width="260" height="110" rx="8" fill={C.mint} fillOpacity="0.06" stroke={C.mint} strokeWidth="1.5" />
      <Lines x={358} y={135} lines={["The most precious thing in", "life is life itself."]} size={12} fill={C.mintDeep} weight={600} anchor="start" gap={16} />
      {/* Icon loa bên đích */}
      <Lines x={358} y={205} lines={["🔊 Nghe phát âm (nhấp 2 lần để đọc chậm)"]} size={10.5} fill={C.mintDeep} weight={600} anchor="start" />

      <Lines
        x={320}
        y={270}
        lines={["Google Dịch hỗ trợ dịch cả tệp Word, Excel, PowerPoint, PDF mà vẫn giữ nguyên bố cục bảng biểu"]}
        size={11}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 10: Cây thư mục Kho học liệu số igiaoduc.vn ──────────────────────────
function KhoHocLieuDiagram() {
  return (
    <Frame viewBox="0 0 640 270">
      {/* Cột 1: Cấp 1 */}
      <rect x="20" y="25" width="170" height="200" rx="12" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <rect x="20" y="25" width="170" height="34" rx="12" fill={C.grape} fillOpacity="0.12" />
      <Lines x={105} y={47} lines={["📁 CẤP 1: Danh mục"]} size={11.5} fill={C.grapeDeep} weight={700} />
      
      <rect x="30" y="68" width="150" height="28" rx="6" fill={C.grape} />
      <Lines x={40} y={86} lines={["📚 Học liệu số  ›"]} size={11} fill={C.white} weight={600} anchor="start" />
      <rect x="30" y="102" width="150" height="28" rx="6" fill={C.line} fillOpacity="0.3" />
      <Lines x={40} y={120} lines={["📖 Sách giáo khoa"]} size={11} fill={C.inkSoft} weight={500} anchor="start" />
      <rect x="30" y="136" width="150" height="28" rx="6" fill={C.line} fillOpacity="0.3" />
      <Lines x={40} y={154} lines={["🗺️ Dư địa chí"]} size={11} fill={C.inkSoft} weight={500} anchor="start" />

      {/* Mũi tên sang cấp 2 */}
      <line x1="190" y1="82" x2="225" y2="82" stroke={C.grape} strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Cột 2: Cấp 2 */}
      <rect x="235" y="25" width="170" height="200" rx="12" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="235" y="25" width="170" height="34" rx="12" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={320} y={47} lines={["🏫 CẤP 2: Khối lớp"]} size={11.5} fill={C.bubbleDeep} weight={700} />
      
      <rect x="245" y="68" width="150" height="26" rx="6" fill={C.line} fillOpacity="0.3" />
      <Lines x={255} y={85} lines={["Mầm non, Tiểu học"]} size={10.5} fill={C.inkSoft} weight={500} anchor="start" />
      <rect x="245" y="98" width="150" height="26" rx="6" fill={C.line} fillOpacity="0.3" />
      <Lines x={255} y={115} lines={["THCS (Lớp 6–9)"]} size={10.5} fill={C.inkSoft} weight={500} anchor="start" />
      <rect x="245" y="128" width="150" height="26" rx="6" fill={C.bubble} />
      <Lines x={255} y={145} lines={["🎓 Lớp 10  ›"]} size={11} fill={C.white} weight={600} anchor="start" />
      <rect x="245" y="158" width="150" height="26" rx="6" fill={C.line} fillOpacity="0.3" />
      <Lines x={255} y={175} lines={["Lớp 11 & Lớp 12"]} size={10.5} fill={C.inkSoft} weight={500} anchor="start" />

      {/* Mũi tên sang cấp 3 */}
      <line x1="405" y1="141" x2="440" y2="141" stroke={C.bubble} strokeWidth="2" markerEnd="url(#arrow-bubble)" />

      {/* Cột 3: Cấp 3 */}
      <rect x="450" y="25" width="170" height="200" rx="12" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="450" y="25" width="170" height="34" rx="12" fill={C.mint} fillOpacity="0.12" />
      <Lines x={535} y={47} lines={["💻 CẤP 3: Môn học"]} size={11.5} fill={C.mintDeep} weight={700} />
      
      <rect x="460" y="68" width="150" height="26" rx="6" fill={C.mint} />
      <Lines x={470} y={85} lines={["💻 Tin học 10 (367)"]} size={11} fill={C.white} weight={600} anchor="start" />
      <rect x="460" y="98" width="150" height="26" rx="6" fill={C.line} fillOpacity="0.3" />
      <Lines x={470} y={115} lines={["📐 Đại số 10 (15)"]} size={10.5} fill={C.inkSoft} weight={500} anchor="start" />
      <rect x="460" y="128" width="150" height="26" rx="6" fill={C.line} fillOpacity="0.3" />
      <Lines x={470} y={145} lines={["🧪 Hóa học 10 (38)"]} size={10.5} fill={C.inkSoft} weight={500} anchor="start" />
      <rect x="460" y="158" width="150" height="26" rx="6" fill={C.line} fillOpacity="0.3" />
      <Lines x={470} y={175} lines={["🌐 Ngoại ngữ (62)"]} size={10.5} fill={C.inkSoft} weight={500} anchor="start" />

      <Lines
        x={320}
        y={252}
        lines={["Kho igiaoduc.vn do Bộ GD&ĐT xây dựng cung cấp hàng vạn bài giảng video và tài liệu số chuẩn"]}
        size={11}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 11: 3 Trụ cột ứng xử trong môi trường số ───────────────────────────
function VanHoaVaPhapLuat() {
  const pillars = [
    {
      title: "1. ĐẠO ĐỨC",
      emoji: "❤️",
      color: C.bubble,
      deep: C.bubbleDeep,
      desc: ["Chuẩn mực tự giác", "Lương tâm & trách nhiệm", "Không làm tổn thương người khác"],
      x: 20,
    },
    {
      title: "2. VĂN HOÁ",
      emoji: "🤝",
      color: C.mint,
      deep: C.mintDeep,
      desc: ["Lịch sự, tôn trọng người nghe", "Không văng tục, xúc phạm", "Chia sẻ năng lượng tích cực"],
      x: 225,
    },
    {
      title: "3. PHÁP LUẬT",
      emoji: "⚖️",
      color: C.grape,
      deep: C.grapeDeep,
      desc: ["Quy định bắt buộc thi hành", "Chế tài xử phạt vi phạm", "Bảo vệ an ninh & quyền con người"],
      x: 430,
    },
  ];

  return (
    <Frame viewBox="0 0 640 260">
      {pillars.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y="20" width="190" height="200" rx="14" fill={C.white} stroke={p.color} strokeWidth="2" />
          <rect x={p.x} y="20" width="190" height="42" rx="14" fill={p.color} fillOpacity="0.12" />

          <Lines x={p.x + 24} y={48} lines={[p.emoji]} size={18} />
          <Lines x={p.x + 50} y={46} lines={[p.title]} size={12} fill={p.deep} weight={700} anchor="start" />

          <ul className="space-y-1">
            {p.desc.map((d, j) => (
              <g key={j}>
                <circle cx={p.x + 22} cy={90 + j * 38} r="3" fill={p.deep} />
                <Lines x={p.x + 32} y={94 + j * 38} lines={[d]} size={11} fill={C.inkSoft} weight={500} anchor="start" />
              </g>
            ))}
          </ul>
        </g>
      ))}

      <Lines
        x={320}
        y={245}
        lines={["Hành vi trên mạng dù ẩn danh vẫn phải chịu trách nhiệm đạo đức và xử lí theo pháp luật"]}
        size={11}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 11: Cấu trúc Quyền tác giả (Quyền nhân thân vs Quyền tài sản) ────────
function QuyenTacGiaDiagram() {
  return (
    <Frame viewBox="0 0 640 280">
      {/* Hộp gốc trung tâm */}
      <rect x="220" y="15" width="200" height="45" rx="10" fill={C.grape} />
      <Lines x={320} y={35} lines={["📜 QUYỀN TÁC GIẢ"]} size={13} fill={C.white} weight={700} />
      <Lines x={320} y={50} lines={["(Luật Sở hữu trí tuệ)"]} size={10} fill={C.line} weight={500} />

      {/* Đường rẽ nhánh */}
      <line x1="280" y1="60" x2="160" y2="90" stroke={C.grape} strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="360" y1="60" x2="480" y2="90" stroke={C.grape} strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Nhánh 1: Quyền nhân thân */}
      <rect x="20" y="90" width="280" height="155" rx="12" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="20" y="90" width="280" height="34" rx="12" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={160} y={112} lines={["👤 QUYỀN NHÂN THÂN (Gắn với tác giả)"]} size={11.5} fill={C.bubbleDeep} weight={700} />

      <Lines
        x={35}
        y={145}
        lines={[
          "• Đặt tên cho tác phẩm do mình sáng tạo",
          "• Đứng tên thật hoặc bút danh trên tác phẩm",
          "• Được nêu tên khi tác phẩm được công bố, sử dụng",
          "• Bảo vệ sự toàn vẹn của tác phẩm (cấm cắt xén, xuyên tạc)",
        ]}
        size={11}
        fill={C.inkSoft}
        weight={500}
        anchor="start"
        gap={22}
      />

      {/* Nhánh 2: Quyền tài sản */}
      <rect x="340" y="90" width="280" height="155" rx="12" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="340" y="90" width="280" height="34" rx="12" fill={C.mint} fillOpacity="0.12" />
      <Lines x={480} y={112} lines={["💰 QUYỀN TÀI SẢN (Khai thác kinh tế)"]} size={11.5} fill={C.mintDeep} weight={700} />

      <Lines
        x={355}
        y={145}
        lines={[
          "• Quyền làm tác phẩm phái sinh (chuyển thể, dịch)",
          "• Quyền sao chép, in ấn tác phẩm số lượng lớn",
          "• Quyền phân phối, bán, cho thuê bản gốc/bản sao",
          "• Quyền truyền đạt tác phẩm đến công chúng qua mạng",
        ]}
        size={11}
        fill={C.inkSoft}
        weight={500}
        anchor="start"
        gap={22}
      />

      <Lines
        x={320}
        y={265}
        lines={["Quyền nhân thân không thể chuyển nhượng; quyền tài sản có thể chuyển giao, cấp phép"]}
        size={11}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 11: Mua bản quyền vs Mua quyền sử dụng (Licence) ─────────────────────
function BanQuyenVsGiayPhep() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="20" y="20" width="285" height="205" rx="14" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <rect x="20" y="20" width="285" height="40" rx="14" fill={C.grape} fillOpacity="0.1" />
      <Lines x={162} y={45} lines={["👑 MUA BẢN QUYỀN (Ownership)"]} size={12} fill={C.grapeDeep} weight={700} />

      <Lines
        x={35}
        y={80}
        lines={[
          "• Người mua trở thành CHỦ SỞ HỮU tác phẩm",
          "• Có toàn quyền kinh doanh, sửa đổi, chuyển nhượng",
          "• Thường áp dụng trong các thương vụ mua lại công ty",
        ]}
        size={11}
        fill={C.inkSoft}
        weight={500}
        anchor="start"
        gap={20}
      />
      <rect x="35" y="160" width="255" height="50" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={45} y={180} lines={["💡 Ví dụ: Google mua lại YouTube"]} size={11} fill={C.grapeDeep} weight={700} anchor="start" />
      <Lines x={45} y={198} lines={["Google nắm toàn quyền bản quyền YouTube"]} size={10} fill={C.inkSoft} weight={500} anchor="start" />

      <rect x="335" y="20" width="285" height="205" rx="14" fill={C.white} stroke={C.sun} strokeWidth="2" />
      <rect x="335" y="20" width="285" height="40" rx="14" fill={C.sun} fillOpacity="0.15" />
      <Lines x={477} y={45} lines={["🔑 MUA QUYỀN SỬ DỤNG (Licence)"]} size={12} fill={C.sunDeep} weight={700} />

      <Lines
        x={350}
        y={80}
        lines={[
          "• Chỉ được phép CÀI ĐẶT & DÙNG trên số máy nhất định",
          "• Bản quyền vẫn thuộc về công ty sản xuất",
          "• Cấm sao chép, bẻ khoá (crack) chia sẻ cho người khác",
        ]}
        size={11}
        fill={C.inkSoft}
        weight={500}
        anchor="start"
        gap={20}
      />
      <rect x="350" y="160" width="255" height="50" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={360} y={180} lines={["💡 Ví dụ: Mua bản quyền Windows, Office 365"]} size={11} fill={C.sunDeep} weight={700} anchor="start" />
      <Lines x={360} y={198} lines={["Bản quyền vẫn thuộc về công ty Microsoft"]} size={10} fill={C.inkSoft} weight={500} anchor="start" />

      <Lines
        x={320}
        y={245}
        lines={["Người dùng cá nhân chủ yếu mua Giấy phép sử dụng (Licence) chứ không sở hữu bản quyền gốc"]}
        size={11}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 12: Bitmap phóng to vỡ hạt vs Vector phóng to vẫn mượt ───────────────
function BitmapVsVector() {
  // Lưới 8x8 xấp xỉ hình tròn — "1" là ô được tô màu.
  const pattern = [
    "00111100",
    "01111110",
    "11111111",
    "11111111",
    "11111111",
    "11111111",
    "01111110",
    "00111100",
  ];

  function grid(cx: number, cy: number, cell: number, color: string) {
    const half = (pattern.length * cell) / 2;
    const originX = cx - half;
    const originY = cy - half;
    const cells: JSX.Element[] = [];
    pattern.forEach((row, ry) => {
      row.split("").forEach((v, rx) => {
        if (v === "1") {
          cells.push(
            <rect
              key={`${ry}-${rx}`}
              x={originX + rx * cell}
              y={originY + ry * cell}
              width={cell}
              height={cell}
              fill={color}
              stroke={C.white}
              strokeWidth={cell > 15 ? 1.5 : 0.6}
            />
          );
        }
      });
    });
    return cells;
  }

  function anchors(cx: number, cy: number, r: number, color: string) {
    const pts: [number, number][] = [
      [cx, cy - r],
      [cx + r, cy],
      [cx, cy + r],
      [cx - r, cy],
    ];
    return pts.map(([ax, ay], i) => (
      <circle key={i} cx={ax} cy={ay} r={r > 40 ? 5 : 3.5} fill={C.white} stroke={color} strokeWidth="2" />
    ));
  }

  return (
    <Frame viewBox="0 0 640 420">
      {/* Panel Bitmap */}
      <rect x="15" y="15" width="300" height="365" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="40" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={165} y={40} lines={["🖼️ BITMAP — lưới điểm ảnh"]} size={12.5} fill={C.bubbleDeep} weight={700} />

      <Lines x={165} y={78} lines={["Kích thước gốc (100%)"]} size={11} fill={C.inkSoft} weight={600} />
      {grid(165, 126, 9, C.bubble)}

      <path d="M165,178 L165,208" stroke={C.inkSoft} strokeWidth="2" markerEnd="url(#arrow-soft)" />
      <Lines x={200} y={197} lines={["phóng to 400%"]} size={10} fill={C.inkSoft} weight={500} anchor="start" />

      <Lines x={165} y={230} lines={["→ Vỡ hạt, răng cưa!"]} size={11.5} fill={C.bubbleDeep} weight={700} />
      {grid(165, 314, 19, C.bubble)}

      {/* Panel Vector */}
      <rect x="325" y="15" width="300" height="365" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="40" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={40} lines={["📐 VECTOR — công thức toán học"]} size={12.5} fill={C.mintDeep} weight={700} />

      <Lines x={475} y={78} lines={["Kích thước gốc (100%)"]} size={11} fill={C.inkSoft} weight={600} />
      <circle cx="475" cy="126" r="28" fill={C.mint} fillOpacity="0.85" />
      {anchors(475, 126, 28, C.mintDeep)}

      <path d="M475,178 L475,208" stroke={C.inkSoft} strokeWidth="2" markerEnd="url(#arrow-soft)" />
      <Lines x={510} y={197} lines={["phóng to 400%"]} size={10} fill={C.inkSoft} weight={500} anchor="start" />

      <Lines x={475} y={230} lines={["→ Vẫn mượt, sắc nét!"]} size={11.5} fill={C.mintDeep} weight={700} />
      <circle cx="475" cy="314" r="76" fill={C.mint} fillOpacity="0.85" />
      {anchors(475, 314, 76, C.mintDeep)}

      <Lines
        x={320}
        y={402}
        lines={["Bitmap lưu sẵn màu từng ô điểm ảnh — Vector lưu công thức, máy vẽ lại được ở bất kì tỉ lệ nào"]}
        size={11}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 12: So sánh GIMP (bitmap) và Inkscape (vector) ───────────────────────
function GimpVsInkscape() {
  const apps = [
    {
      name: "GIMP",
      full: "GNU Image Manipulation Program",
      icon: "🖼️",
      color: C.bubble,
      deep: C.bubbleDeep,
      x: 20,
      tag: "Trình chỉnh sửa ẢNH BITMAP",
      desc: ["Cắt ghép, xoá phông, chỉnh màu,", "phục chế ảnh cũ, ghép nhiều lớp ảnh."],
      like: "Giống Adobe Photoshop",
      use: "Dùng khi: xử lí ảnh chụp, ảnh kỉ yếu",
    },
    {
      name: "Inkscape",
      full: "Trình vẽ đồ hoạ vector nguồn mở",
      icon: "🖌️",
      color: C.mint,
      deep: C.mintDeep,
      x: 330,
      tag: "Trình vẽ đồ hoạ VECTOR",
      desc: ["Vẽ logo, biểu tượng, sơ đồ, chữ", "nghệ thuật bằng đường nét hình học."],
      like: "Giống Adobe Illustrator, CorelDRAW",
      use: "Dùng khi: thiết kế logo, poster, banner",
    },
  ];

  return (
    <Frame viewBox="0 0 640 300">
      {apps.map((a, i) => (
        <g key={i}>
          <rect x={a.x} y="15" width="290" height="255" rx="14" fill={C.white} stroke={a.color} strokeWidth="2" />
          <rect x={a.x} y="15" width="290" height="46" rx="14" fill={a.color} fillOpacity="0.12" />
          <Lines x={a.x + 30} y={44} lines={[a.icon]} size={22} />
          <Lines x={a.x + 60} y={38} lines={[a.name]} size={14} fill={a.deep} weight={700} anchor="start" />
          <Lines x={a.x + 60} y={54} lines={[a.full]} size={9.5} fill={C.inkSoft} weight={500} anchor="start" />

          <rect x={a.x + 14} y="74" width="262" height="24" rx="7" fill={a.color} fillOpacity="0.1" />
          <Lines x={a.x + 145} y={90} lines={[a.tag]} size={11} fill={a.deep} weight={700} />

          <Lines
            x={a.x + 20}
            y={122}
            lines={a.desc}
            size={11}
            fill={C.inkSoft}
            weight={400}
            anchor="start"
            gap={16}
          />

          <rect x={a.x + 14} y="170" width="262" height="42" rx="8" fill={C.line} fillOpacity="0.3" />
          <Lines x={a.x + 26} y={195} lines={["💡 " + a.like]} size={10.5} fill={a.deep} weight={700} anchor="start" />

          <rect x={a.x + 14} y="220" width="262" height="38" rx="8" fill={a.color} fillOpacity="0.08" />
          <Lines x={a.x + 26} y={244} lines={[a.use]} size={10.5} fill={C.ink} weight={600} anchor="start" />
        </g>
      ))}

      <Lines
        x={320}
        y={285}
        lines={["Cả hai đều miễn phí, mã nguồn mở — dùng đúng phần mềm cho đúng loại đồ hoạ"]}
        size={11}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 12: Giao diện làm việc của Inkscape ──────────────────────────────────
function InkscapeGiaoDien() {
  const swatches = [C.grape, C.bubble, C.mint, C.sun, "#3B82F6", "#EF4444", "#111827", C.white, C.line, C.grapeDeep];

  return (
    <Frame viewBox="0 0 640 360">
      {/* Cửa sổ ứng dụng */}
      <rect x="20" y="15" width="600" height="320" rx="12" fill={C.white} stroke={C.line} strokeWidth="2" />
      <rect x="20" y="15" width="600" height="30" rx="12" fill={C.ink} />
      <Lines x={40} y={35} lines={["🗔  Inkscape — thiepchucmung.svg"]} size={11} fill={C.white} weight={600} anchor="start" />

      {/* Thanh menu */}
      <Lines
        x={40}
        y={62}
        lines={["File   Edit   View   Object   Path   Text   Help"]}
        size={9.5}
        fill={C.inkSoft}
        weight={500}
        anchor="start"
      />
      <line x1="20" y1="72" x2="620" y2="72" stroke={C.line} strokeWidth="1.5" />

      {/* Hộp công cụ bên trái */}
      <rect x="20" y="72" width="46" height="238" fill={C.line} fillOpacity="0.25" />
      {[
        { icon: "↖", label: "Chọn" },
        { icon: "▭", label: "" },
        { icon: "◯", label: "" },
        { icon: "★", label: "" },
        { icon: "✎", label: "" },
        { icon: "T", label: "" },
      ].map((t, i) => (
        <g key={i}>
          <rect
            x="28"
            y={82 + i * 36}
            width="30"
            height="30"
            rx="7"
            fill={i === 0 ? C.grape : C.white}
            fillOpacity={i === 0 ? 0.15 : 1}
            stroke={i === 0 ? C.grape : C.line}
            strokeWidth={i === 0 ? 2 : 1.2}
          />
          <Lines x={43} y={82 + i * 36 + 20} lines={[t.icon]} size={14} fill={i === 0 ? C.grapeDeep : C.inkSoft} weight={700} />
        </g>
      ))}

      {/* Canvas trung tâm */}
      <rect x="70" y="80" width="440" height="222" fill={C.white} stroke={C.line} strokeWidth="1.5" strokeDasharray="4 3" />
      <Lines x={290} y={98} lines={["Canvas (trang vẽ)"]} size={10} fill={C.inkSoft} weight={600} />

      {/* Bông hoa ví dụ: fill hồng, stroke đỏ */}
      {[[-24, -8], [24, -8], [0, 20], [0, -30]].map(([dx, dy], i) => (
        <circle key={i} cx={230 + dx} cy={175 + dy} r="20" fill={C.bubble} fillOpacity="0.55" stroke="#EF4444" strokeWidth="2.5" />
      ))}
      <circle cx="230" cy="175" r="12" fill={C.sun} stroke="#EF4444" strokeWidth="2" />
      <Lines x={230} y={245} lines={["Chúc mừng 20/11 🌸"]} size={12} fill={C.ink} weight={700} />

      {/* Callout Fill / Stroke */}
      <path d="M255,160 L340,120" stroke={C.inkSoft} strokeWidth="1.3" strokeDasharray="3 2" />
      <Lines x={342} y={116} lines={["Fill (màu tô): hồng"]} size={10} fill={C.bubbleDeep} weight={700} anchor="start" />
      <path d="M248,195 L340,225" stroke={C.inkSoft} strokeWidth="1.3" strokeDasharray="3 2" />
      <Lines x={342} y={229} lines={["Stroke (màu nét): đỏ"]} size={10} fill="#B91C1C" weight={700} anchor="start" />

      {/* Bảng màu dưới đáy canvas */}
      {swatches.map((s, i) => (
        <rect key={i} x={78 + i * 25} y="288" width="21" height="12" fill={s} stroke={C.inkSoft} strokeWidth="0.6" />
      ))}
      <Lines x={91} y={280} lines={["Palette (bảng màu)"]} size={9.5} fill={C.inkSoft} weight={600} anchor="start" />

      <Lines
        x={320}
        y={344}
        lines={["Chọn công cụ ở Toolbox ➜ vẽ trên Canvas ➜ chọn màu tô/viền ở Palette ➜ lưu ra tệp .svg"]}
        size={10.5}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 13: Bốn công cụ vẽ hình cơ bản trong Inkscape ────────────────────────
function CongCuVeHinh() {
  const tools = [
    { name: "Rectangle", key: "R", color: C.grape, deep: C.grapeDeep, x: 12, desc: ["Vẽ hình chữ nhật.", "Giữ Ctrl → hình vuông."], ex: "Khung ảnh, banner nền" },
    { name: "Ellipse", key: "E", color: C.bubble, deep: C.bubbleDeep, x: 169, desc: ["Vẽ hình elip.", "Giữ Ctrl → hình tròn."], ex: "Mặt trăng, huy hiệu tròn" },
    { name: "Star/Polygon", key: "*", color: C.sun, deep: C.sunDeep, x: 326, desc: ["Vẽ sao/đa giác đều.", "Đổi số cánh trên thanh thuộc tính."], ex: "Ngôi sao, huy hiệu trang trí" },
    { name: "Bezier", key: "B", color: C.mint, deep: C.mintDeep, x: 483, desc: ["Vẽ đường/hình tự do.", "Nháy từng điểm neo rồi nối lại."], ex: "Đường quỹ đạo, chữ kí" },
  ];

  return (
    <Frame viewBox="0 0 640 300">
      {tools.map((t, i) => {
        const cx = t.x + 72.5;
        return (
          <g key={i}>
            <rect x={t.x} y="15" width="145" height="255" rx="14" fill={C.white} stroke={t.color} strokeWidth="2" />
            <rect x={t.x} y="15" width="145" height="36" rx="14" fill={t.color} fillOpacity="0.12" />
            <Lines x={cx} y={38} lines={[t.name]} size={11.5} fill={t.deep} weight={700} />
            <circle cx={t.x + 20} cy="97" r="13" fill={t.color} fillOpacity="0.15" stroke={t.color} strokeWidth="1.2" />
            <Lines x={t.x + 20} y={101} lines={[t.key]} size={12} fill={t.deep} weight={700} />

            {/* Hình xem trước từng công cụ */}
            {i === 0 && <rect x={cx - 24} y="80" width="48" height="34" rx="4" fill={t.color} fillOpacity="0.7" />}
            {i === 1 && <ellipse cx={cx} cy="97" rx="26" ry="17" fill={t.color} fillOpacity="0.7" />}
            {i === 2 && (
              <polygon
                points="0,-22 5,-7 21,-7 9,3 13,18 0,9 -13,18 -9,3 -21,-7 -5,-7"
                transform={`translate(${cx},97)`}
                fill={t.color}
                fillOpacity="0.75"
              />
            )}
            {i === 3 && (
              <path
                d={`M${cx - 26},108 C${cx - 14},76 ${cx + 14},118 ${cx + 26},86`}
                fill="none"
                stroke={t.color}
                strokeWidth="3"
                strokeLinecap="round"
              />
            )}

            <Lines
              x={t.x + 14}
              y={140}
              lines={t.desc}
              size={10}
              fill={C.inkSoft}
              weight={500}
              anchor="start"
              gap={15}
            />

            <rect x={t.x + 10} y="215" width="125" height="42" rx="8" fill={C.line} fillOpacity="0.3" />
            <Lines x={t.x + 20} y={233} lines={["💡 Ví dụ:"]} size={9.5} fill={t.deep} weight={700} anchor="start" />
            <Lines x={t.x + 20} y={248} lines={[t.ex]} size={9.5} fill={C.ink} weight={500} anchor="start" />
          </g>
        );
      })}
      <Lines
        x={320}
        y={286}
        lines={["Gõ đúng phím tắt (R, E, B…) để chọn nhanh công cụ mà không cần rời tay khỏi bàn phím"]}
        size={10.5}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 13: Thứ tự xếp lớp (Z-order) và kết quả hiển thị ────────────────────
function ThuTuXepLop() {
  return (
    <Frame viewBox="0 0 640 340">
      {/* Panel trái: chồng lớp */}
      <rect x="15" y="15" width="300" height="310" rx="16" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="38" rx="16" fill={C.grape} fillOpacity="0.12" />
      <Lines x={165} y={39} lines={["🗂️ Thứ tự xếp lớp (Z-order)"]} size={12.5} fill={C.grapeDeep} weight={700} />

      <rect x="70" y="228" width="180" height="48" rx="10" fill={C.line} fillOpacity="0.6" stroke={C.inkSoft} strokeWidth="1.2" />
      <Lines x={160} y={247} lines={["Lớp 1 — Nền"]} size={11} fill={C.ink} weight={700} />
      <Lines x={160} y={263} lines={["(vẽ đầu tiên, dưới cùng)"]} size={9} fill={C.inkSoft} weight={500} />

      <rect x="90" y="184" width="180" height="48" rx="10" fill={C.bubble} fillOpacity="0.18" stroke={C.bubbleDeep} strokeWidth="1.2" />
      <Lines x={180} y={203} lines={["Lớp 2 — Hoa trang trí"]} size={11} fill={C.bubbleDeep} weight={700} />
      <Lines x={180} y={219} lines={["(vẽ sau, nằm giữa)"]} size={9} fill={C.inkSoft} weight={500} />

      <rect x="110" y="140" width="180" height="48" rx="10" fill={C.mint} fillOpacity="0.2" stroke={C.mintDeep} strokeWidth="1.2" />
      <Lines x={200} y={159} lines={["Lớp 3 — Chữ"]} size={11} fill={C.mintDeep} weight={700} />
      <Lines x={200} y={175} lines={["(vẽ sau cùng, trên hết)"]} size={9} fill={C.inkSoft} weight={500} />

      <Lines x={165} y={298} lines={["Home = Lower to Bottom · End = Raise to Top"]} size={10} fill={C.inkSoft} weight={600} />
      <Lines x={165} y={314} lines={["Page Up / Page Down: nhích lên / xuống 1 bậc"]} size={10} fill={C.inkSoft} weight={600} />

      {/* Panel phải: kết quả hiển thị */}
      <rect x="325" y="15" width="300" height="310" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="38" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={39} lines={["👁️ Kết quả trên Canvas"]} size={12.5} fill={C.mintDeep} weight={700} />

      <rect x="355" y="68" width="240" height="200" rx="14" fill={C.grape} fillOpacity="0.15" stroke={C.grape} strokeWidth="1.5" />
      {[[-22, -6], [22, -6], [0, 18], [0, -28]].map(([dx, dy], i) => (
        <circle key={i} cx={475 + dx} cy={162 + dy} r="18" fill={C.bubble} fillOpacity="0.6" stroke={C.bubbleDeep} strokeWidth="2" />
      ))}
      <circle cx="475" cy="162" r="10" fill={C.sun} stroke={C.bubbleDeep} strokeWidth="1.5" />
      <Lines x={475} y={240} lines={["Chúc mừng 20/11 🌸"]} size={13} fill={C.ink} weight={700} />

      <Lines x={475} y={290} lines={["Nền dưới cùng → Hoa ở giữa → Chữ trên hết mới đọc được"]} size={10} fill={C.inkSoft} weight={500} />
      <Lines x={475} y={306} lines={["Vẽ sau mặc định nằm trên — đổi lại được bằng Raise/Lower"]} size={10} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 13: Align & Distribute — trước và sau khi căn chỉnh ─────────────────
function AlignDistribute() {
  const before: [number, number][] = [[25, 70], [70, 118], [160, 45], [190, 138], [255, 95]];
  const after: [number, number][] = [[25, 100], [88, 100], [151, 100], [214, 100], [277, 100]];
  const colors = [C.grape, C.bubble, C.mint, C.sun, "#3B82F6"];

  return (
    <Frame viewBox="0 0 640 300">
      {/* Trước */}
      <rect x="15" y="15" width="290" height="255" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="15" y="15" width="290" height="36" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={160} y={38} lines={["😵 Trước: lệch lạc, thưa mau"]} size={12} fill={C.bubbleDeep} weight={700} />
      {before.map(([bx, by], i) => (
        <rect key={i} x={30 + bx} y={30 + by} width="34" height="30" rx="6" fill={colors[i]} fillOpacity="0.7" />
      ))}
      <Lines x={160} y={252} lines={["Căn bằng mắt: cái cao cái thấp, khoảng cách không đều"]} size={10} fill={C.inkSoft} weight={500} />

      {/* Mũi tên giữa */}
      <path d="M312,142 L328,142" stroke={C.grape} strokeWidth="3" markerEnd="url(#arrow)" />
      <Lines x={320} y={125} lines={["Align &"]} size={10} fill={C.grapeDeep} weight={700} />
      <Lines x={320} y={165} lines={["Distribute"]} size={10} fill={C.grapeDeep} weight={700} />

      {/* Sau */}
      <rect x="335" y="15" width="290" height="255" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="335" y="15" width="290" height="36" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={480} y={38} lines={["✨ Sau: thẳng hàng, đều khoảng"]} size={12} fill={C.mintDeep} weight={700} />
      {after.map(([ax, ay], i) => (
        <rect key={i} x={350 + ax} y={30 + ay} width="34" height="30" rx="6" fill={colors[i]} fillOpacity="0.7" />
      ))}
      <line x1="365" y1="145" x2="605" y2="145" stroke={C.mint} strokeWidth="1" strokeDasharray="3 3" />
      <Lines x={480} y={252} lines={["Align: cùng một mép trên · Distribute: khoảng cách bằng nhau"]} size={10} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 14: Điểm neo Góc (Corner) và Trơn (Smooth) trên một Path ─────────────
function DuongVaDiemNeo() {
  return (
    <Frame viewBox="0 0 640 300">
      {/* Panel Corner */}
      <rect x="15" y="15" width="300" height="255" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="38" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={165} y={39} lines={["📐 Điểm neo GÓC (Corner)"]} size={12.5} fill={C.bubbleDeep} weight={700} />

      <path d="M60,220 L165,90 L270,220" fill="none" stroke={C.inkSoft} strokeWidth="2.5" />
      <circle cx="60" cy="220" r="5" fill={C.white} stroke={C.bubbleDeep} strokeWidth="2" />
      <circle cx="270" cy="220" r="5" fill={C.white} stroke={C.bubbleDeep} strokeWidth="2" />
      <rect x="159" y="84" width="12" height="12" fill={C.bubble} stroke={C.bubbleDeep} strokeWidth="1.5" />
      <Lines x={165} y={70} lines={["nút góc: gãy khúc rõ rệt"]} size={10} fill={C.bubbleDeep} weight={700} />
      <Lines x={165} y={244} lines={["Hai đoạn hai bên nút độc lập, không cần thẳng hàng"]} size={10} fill={C.inkSoft} weight={500} />

      {/* Panel Smooth */}
      <rect x="325" y="15" width="300" height="255" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="38" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={39} lines={["🌊 Điểm neo TRƠN (Smooth)"]} size={12.5} fill={C.mintDeep} weight={700} />

      <path d="M370,220 C420,90 530,90 580,220" fill="none" stroke={C.inkSoft} strokeWidth="2.5" />
      <line x1="410" y1="112" x2="540" y2="112" stroke={C.mintDeep} strokeWidth="1.3" strokeDasharray="3 2" />
      <circle cx="370" cy="220" r="5" fill={C.white} stroke={C.mintDeep} strokeWidth="2" />
      <circle cx="580" cy="220" r="5" fill={C.white} stroke={C.mintDeep} strokeWidth="2" />
      <circle cx="475" cy="112" r="6" fill={C.mint} stroke={C.mintDeep} strokeWidth="2" />
      <circle cx="410" cy="112" r="3.5" fill={C.white} stroke={C.mintDeep} strokeWidth="1.5" />
      <circle cx="540" cy="112" r="3.5" fill={C.white} stroke={C.mintDeep} strokeWidth="1.5" />
      <Lines x={475} y={95} lines={["nút trơn: 2 tay nắm thẳng hàng"]} size={10} fill={C.mintDeep} weight={700} />
      <Lines x={475} y={244} lines={["Kéo một tay nắm, đường cong đổi mượt cả hai phía"]} size={10} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 14: Object to Path và công cụ Node nắn hình ──────────────────────────
function CongCuNode() {
  return (
    <Frame viewBox="0 0 640 320">
      {/* Panel: Object to Path */}
      <rect x="15" y="15" width="300" height="275" rx="16" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="38" rx="16" fill={C.grape} fillOpacity="0.12" />
      <Lines x={165} y={39} lines={["🔁 Object to Path"]} size={12.5} fill={C.grapeDeep} weight={700} />

      <rect x="55" y="90" width="110" height="90" rx="6" fill={C.grape} fillOpacity="0.15" stroke={C.grape} strokeWidth="1.5" />
      <Lines x={110} y={200} lines={["Hình cơ bản", "(chỉ chỉnh qua tham số)"]} size={9.5} fill={C.inkSoft} weight={500} gap={13} />

      <path d="M180,135 L210,135" stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />

      <rect x="220" y="90" width="80" height="90" rx="6" fill={C.white} stroke={C.grape} strokeWidth="1.5" strokeDasharray="3 2" />
      {[[220, 90], [300, 90], [300, 180], [220, 180]].map(([px, py], i) => (
        <rect key={i} x={px - 5} y={py - 5} width="10" height="10" fill={C.grape} stroke={C.grapeDeep} strokeWidth="1.5" />
      ))}
      <Lines x={260} y={200} lines={["Path — 4 điểm neo", "kéo tự do từng nút"]} size={9.5} fill={C.grapeDeep} weight={600} gap={13} />

      <Lines x={165} y={265} lines={["Muốn nắn từng góc riêng lẻ, phải chuyển hình cơ bản thành path trước"]} size={10} fill={C.inkSoft} weight={500} />

      {/* Panel: Node tool nắn hình lá cây */}
      <rect x="325" y="15" width="300" height="275" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="38" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={39} lines={["🍃 Công cụ Node nắn hình"]} size={12.5} fill={C.mintDeep} weight={700} />

      <Lines x={400} y={70} lines={["Trước: cạnh thẳng"]} size={10} fill={C.inkSoft} weight={600} />
      <polygon points="400,140 380,95 415,75 440,100 420,135" fill={C.mint} fillOpacity="0.35" stroke={C.mintDeep} strokeWidth="1.5" />

      <path d="M455,105 L480,105" stroke={C.mintDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />

      <Lines x={555} y={70} lines={["Sau: mềm mại tự nhiên"]} size={10} fill={C.mintDeep} weight={700} />
      <path
        d="M555,140 C535,120 540,85 565,72 C585,62 600,85 590,105 C605,120 585,140 555,140 Z"
        fill={C.mint}
        fillOpacity="0.55"
        stroke={C.mintDeep}
        strokeWidth="1.8"
      />

      <Lines x={475} y={190} lines={["Kéo điểm neo và tay nắm bằng công cụ Node để bo cong từng cạnh"]} size={10} fill={C.inkSoft} weight={500} />
      <Lines x={475} y={265} lines={["Mọi hình phức tạp đều bắt đầu từ một hình đơn giản rồi tinh chỉnh dần"]} size={10} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 14: Văn bản thẳng và Text on Path (chữ chạy theo đường) ─────────────
function TextOnPathDiagram() {
  return (
    <Frame viewBox="0 0 640 300">
      {/* Panel: text thẳng */}
      <rect x="15" y="15" width="300" height="255" rx="16" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="38" rx="16" fill={C.grape} fillOpacity="0.12" />
      <Lines x={165} y={39} lines={["🔤 Văn bản thông thường"]} size={12.5} fill={C.grapeDeep} weight={700} />

      <line x1="55" y1="150" x2="275" y2="150" stroke={C.line} strokeWidth="1.5" strokeDasharray="3 3" />
      <Lines x={165} y={150} lines={["MẦM XANH"]} size={26} fill={C.grapeDeep} weight={700} />
      <Lines x={165} y={230} lines={["Chữ nằm thẳng trên một đường cơ sở nằm ngang"]} size={10} fill={C.inkSoft} weight={500} />

      {/* Panel: Text on Path */}
      <rect x="325" y="15" width="300" height="255" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="38" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={39} lines={["🌈 Text on Path"]} size={12.5} fill={C.mintDeep} weight={700} />

      <defs>
        <path id="curve14" d="M355,220 C400,90 550,90 595,220" />
      </defs>
      <path d="M355,220 C400,90 550,90 595,220" fill="none" stroke={C.line} strokeWidth="1.5" strokeDasharray="3 3" />
      <text fontSize="15" fill={C.mintDeep} fontWeight={700}>
        <textPath href="#curve14" startOffset="50%" textAnchor="middle">
          Tập san chào mừng 26/3
        </textPath>
      </text>
      <Lines x={475} y={245} lines={["Chọn chữ + đường ➜ Text ➜ Put on Path — chữ uốn theo hình dạng đường"]} size={10} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 15: Ba phép ghép hình Union / Difference / Intersection ─────────────
function PhepGhepHinh() {
  const ops = [
    { name: "Union (Hợp)", key: "Ctrl++", color: C.mint, deep: C.mintDeep, x: 20, ex: "Ghép nhiều hình tròn thành đám mây" },
    { name: "Difference (Hiệu)", key: "Ctrl+-", color: C.bubble, deep: C.bubbleDeep, x: 225, ex: "Khoét vết cắn tạo logo quả táo" },
    { name: "Intersection (Giao)", key: "Ctrl+*", color: C.grape, deep: C.grapeDeep, x: 430, ex: "Cắt ảnh vuông gọn theo khung tròn" },
  ];

  return (
    <Frame viewBox="0 0 640 300">
      {ops.map((o, i) => (
        <g key={i}>
          <rect x={o.x} y="15" width="190" height="255" rx="14" fill={C.white} stroke={o.color} strokeWidth="2" />
          <rect x={o.x} y="15" width="190" height="38" rx="14" fill={o.color} fillOpacity="0.12" />
          <Lines x={o.x + 95} y={34} lines={[o.name]} size={11.5} fill={o.deep} weight={700} />
          <Lines x={o.x + 95} y={49} lines={[`Menu Path — ${o.key}`]} size={9} fill={C.inkSoft} weight={500} />

          <Lines x={o.x + 45} y={78} lines={["Trước"]} size={9.5} fill={C.inkSoft} weight={600} />
          {i === 0 && (
            <>
              <circle cx={o.x + 32} cy="100" r="16" fill="none" stroke={o.color} strokeWidth="1.5" />
              <circle cx={o.x + 58} cy="100" r="16" fill="none" stroke={o.color} strokeWidth="1.5" />
            </>
          )}
          {i === 1 && (
            <>
              <circle cx={o.x + 40} cy="100" r="18" fill="none" stroke={o.color} strokeWidth="1.5" />
              <circle cx={o.x + 62} cy="100" r="12" fill="none" stroke={o.color} strokeWidth="1.5" />
            </>
          )}
          {i === 2 && (
            <>
              <circle cx={o.x + 32} cy="100" r="16" fill="none" stroke={o.color} strokeWidth="1.5" strokeDasharray="2 2" />
              <circle cx={o.x + 58} cy="100" r="16" fill="none" stroke={o.color} strokeWidth="1.5" strokeDasharray="2 2" />
            </>
          )}

          <path d={`M${o.x + 95},100 L${o.x + 115},100`} stroke={o.deep} strokeWidth="2" markerEnd="url(#arrow)" />

          <Lines x={o.x + 145} y={78} lines={["Sau"]} size={9.5} fill={o.deep} weight={700} />
          {i === 0 && (
            <>
              <circle cx={o.x + 132} cy="100" r="16" fill={o.color} fillOpacity="0.65" />
              <circle cx={o.x + 158} cy="100" r="16" fill={o.color} fillOpacity="0.65" />
            </>
          )}
          {i === 1 && (
            <>
              <circle cx={o.x + 140} cy="100" r="18" fill={o.color} fillOpacity="0.65" />
              <circle cx={o.x + 162} cy="100" r="12" fill={C.white} />
            </>
          )}
          {i === 2 && (
            <ellipse cx={o.x + 145} cy="100" rx="10" ry="15" fill={o.color} fillOpacity="0.7" transform={`rotate(20 ${o.x + 145} 100)`} />
          )}

          <Lines
            x={o.x + 14}
            y={150}
            lines={
              i === 0
                ? ["Gộp tất cả phần của các hình", "đã chọn thành một khối duy nhất"]
                : i === 1
                ? ["Hình dưới bị hình trên 'đục'", "mất đúng phần chồng lấn"]
                : ["Chỉ giữ lại đúng phần", "chồng lấn chung của cả hai"]
            }
            size={10}
            fill={C.inkSoft}
            weight={500}
            anchor="start"
            gap={15}
          />

          <rect x={o.x + 10} y="200" width="170" height="55" rx="8" fill={C.line} fillOpacity="0.3" />
          <Lines x={o.x + 20} y={219} lines={["💡 Ví dụ:"]} size={9.5} fill={o.deep} weight={700} anchor="start" />
          <Lines x={o.x + 20} y={236} lines={[o.ex]} size={9.5} fill={C.ink} weight={500} anchor="start" gap={13} />
        </g>
      ))}
      <Lines
        x={320}
        y={288}
        lines={["Lưu ý: các phép ghép hình 'tiêu hao' hình gốc — nhân đôi (Ctrl+D) trước nếu muốn giữ lại"]}
        size={10}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 15: Giữ tệp SVG gốc — xuất PNG theo đúng mục đích ────────────────────
function XuatBanVe() {
  return (
    <Frame viewBox="0 0 640 300">
      <rect x="15" y="15" width="270" height="255" rx="16" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <rect x="15" y="15" width="270" height="38" rx="16" fill={C.grape} fillOpacity="0.12" />
      <Lines x={150} y={39} lines={["📁 Tệp gốc .svg"]} size={12.5} fill={C.grapeDeep} weight={700} />

      <rect x="90" y="80" width="120" height="90" rx="10" fill={C.grape} fillOpacity="0.15" stroke={C.grape} strokeWidth="1.5" strokeDasharray="4 3" />
      {[[90, 80], [210, 80], [210, 170], [90, 170]].map(([px, py], i) => (
        <rect key={i} x={px - 5} y={py - 5} width="10" height="10" fill={C.grape} stroke={C.grapeDeep} strokeWidth="1.5" />
      ))}
      <circle cx="150" cy="125" r="22" fill={C.bubble} fillOpacity="0.6" stroke={C.bubbleDeep} strokeWidth="1.5" />

      <Lines x={150} y={195} lines={["Từng đối tượng vẫn tách rời"]} size={10} fill={C.inkSoft} weight={600} />
      <Lines x={150} y={211} lines={["— sửa lại chữ, màu, hình bất cứ lúc nào"]} size={10} fill={C.inkSoft} weight={500} />
      <Lines x={150} y={240} lines={["✅ Luôn giữ lại tệp này để chỉnh sửa về sau"]} size={10.5} fill={C.grapeDeep} weight={700} />

      <rect x="300" y="15" width="325" height="120" rx="14" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="300" y="15" width="325" height="32" rx="14" fill={C.mint} fillOpacity="0.12" />
      <Lines x={462} y={36} lines={["🌐 Xuất PNG nhỏ — đăng mạng xã hội"]} size={11} fill={C.mintDeep} weight={700} />
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={i} x={330 + i * 12} y="70" width="10" height="10" fill={C.mint} fillOpacity="0.7" />
      ))}
      <Lines x={462} y={110} lines={["Độ phân giải thấp, kích thước tệp nhẹ — vừa đủ hiển thị màn hình"]} size={9.5} fill={C.inkSoft} weight={500} />

      <rect x="300" y="150" width="325" height="120" rx="14" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="300" y="150" width="325" height="32" rx="14" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={462} y={171} lines={["🖨️ Xuất PNG lớn — gửi xưởng in"]} size={11} fill={C.bubbleDeep} weight={700} />
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x={318 + i * 6} y="205" width="5" height="5" fill={C.bubble} fillOpacity="0.7" />
      ))}
      <Lines x={462} y={245} lines={["Độ phân giải (DPI) cao, tệp nặng hơn — cần thiết khi in khổ lớn"]} size={9.5} fill={C.inkSoft} weight={500} />

      <Lines
        x={320}
        y={288}
        lines={["PNG là ảnh đã 'phẳng' thành điểm ảnh — muốn sửa lại phải quay về tệp SVG nguồn"]}
        size={10}
        fill={C.inkSoft}
        weight={500}
      />
    </Frame>
  );
}

// ── Bài 15: Gradient tuyến tính (Linear) và toả tròn (Radial) ────────────────
function GradientChuyenSac() {
  return (
    <Frame viewBox="0 0 640 260">
      <defs>
        <linearGradient id="g15-linear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={C.grape} />
          <stop offset="100%" stopColor={C.bubble} />
        </linearGradient>
        <radialGradient id="g15-radial" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFF3C4" />
          <stop offset="55%" stopColor={C.sun} />
          <stop offset="100%" stopColor={C.sunDeep} />
        </radialGradient>
      </defs>

      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="36" rx="16" fill={C.grape} fillOpacity="0.12" />
      <Lines x={165} y={38} lines={["📏 Gradient tuyến tính (Linear)"]} size={12} fill={C.grapeDeep} weight={700} />
      <rect x="65" y="70" width="200" height="110" rx="12" fill="url(#g15-linear)" />
      <Lines x={165} y={210} lines={["Màu chuyển dần theo một đường thẳng — hợp làm nền trời, banner"]} size={10} fill={C.inkSoft} weight={500} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.sun} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="36" rx="16" fill={C.sun} fillOpacity="0.15" />
      <Lines x={475} y={38} lines={["☀️ Gradient toả tròn (Radial)"]} size={12} fill={C.sunDeep} weight={700} />
      <circle cx="475" cy="128" r="58" fill="url(#g15-radial)" />
      <Lines x={475} y={210} lines={["Màu toả từ tâm ra ngoài — hợp làm mặt trời, ánh sáng, khối cầu"]} size={10} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 16: Ngôn ngữ máy và ngôn ngữ lập trình bậc cao ───────────────────────
function NgonNguMayVsBacCao() {
  const bits =
    "01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100";

  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="270" height="230" rx="16" fill={C.white} stroke={C.inkSoft} strokeWidth="2" />
      <rect x="15" y="15" width="270" height="38" rx="16" fill={C.inkSoft} fillOpacity="0.15" />
      <Lines x={150} y={39} lines={["⚙️ Ngôn ngữ máy"]} size={12.5} fill={C.ink} weight={700} />

      <rect x="35" y="70" width="230" height="90" rx="8" fill={C.ink} />
      <text x="150" y="105" fontSize="9" fill="#8CF29B" fontWeight={600} textAnchor="middle" fontFamily="monospace">
        <tspan x="150" dy="0">{bits.slice(0, 36)}</tspan>
        <tspan x="150" dy="16">{bits.slice(36, 72)}</tspan>
        <tspan x="150" dy="16">{bits.slice(72)}</tspan>
      </text>
      <Lines x={150} y={190} lines={["Dãy bit 0/1 — bộ xử lí (CPU)"]} size={10} fill={C.inkSoft} weight={600} />
      <Lines x={150} y={206} lines={["thực hiện được trực tiếp"]} size={10} fill={C.inkSoft} weight={600} />
      <Lines x={150} y={226} lines={["Con người rất khó viết, khó đọc"]} size={9.5} fill={C.inkSoft} weight={500} />

      <path d="M292,130 L348,130" stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />
      <Lines x={320} y={112} lines={["🔁 Trình dịch /"]} size={9.5} fill={C.grapeDeep} weight={700} />
      <Lines x={320} y={150} lines={["Thông dịch"]} size={9.5} fill={C.grapeDeep} weight={700} />

      <rect x="355" y="15" width="270" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="355" y="15" width="270" height="38" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={490} y={39} lines={["🐍 Ngôn ngữ bậc cao (Python)"]} size={12.5} fill={C.mintDeep} weight={700} />

      <rect x="375" y="70" width="230" height="90" rx="8" fill={C.ink} />
      <text x="490" y="120" fontSize="13" fill="#8CF29B" fontWeight={600} textAnchor="middle" fontFamily="monospace">
        print(&quot;Hello World&quot;)
      </text>
      <Lines x={490} y={190} lines={["Câu lệnh gần ngôn ngữ tự nhiên"]} size={10} fill={C.inkSoft} weight={600} />
      <Lines x={490} y={206} lines={["Con người viết và đọc dễ dàng"]} size={10} fill={C.inkSoft} weight={600} />
      <Lines x={490} y={226} lines={["Không phụ thuộc loại máy cụ thể"]} size={9.5} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 16: Ba môi trường lập trình Python phổ biến ──────────────────────────
function MoiTruongPython() {
  const envs = [
    { name: "IDLE", color: C.grape, deep: C.grapeDeep, x: 20, desc: ["Đi kèm sẵn khi cài Python.", "Vừa gõ tương tác vừa soạn tệp."], who: "Bắt đầu học, thử lệnh nhanh" },
    { name: "Thonny", color: C.mint, deep: C.mintDeep, x: 225, desc: ["Giao diện đơn giản, có khung", "biến số trực quan khi debug."], who: "Học sinh mới làm quen" },
    { name: "PyCharm / VS Code", color: C.bubble, deep: C.bubbleDeep, x: 430, desc: ["Nhiều tiện ích mạnh: gợi ý code,", "quản lí dự án nhiều tệp."], who: "Dự án lớn, chuyên nghiệp" },
  ];

  return (
    <Frame viewBox="0 0 640 300">
      {envs.map((e, i) => (
        <g key={i}>
          <rect x={e.x} y="15" width="190" height="205" rx="14" fill={C.white} stroke={e.color} strokeWidth="2" />
          <rect x={e.x} y="15" width="190" height="38" rx="14" fill={e.color} fillOpacity="0.12" />
          <Lines x={e.x + 95} y={39} lines={[e.name]} size={12} fill={e.deep} weight={700} />

          <Lines x={e.x + 14} y={72} lines={e.desc} size={10} fill={C.inkSoft} weight={500} anchor="start" gap={16} />

          <rect x={e.x + 10} y="150" width="170" height="55" rx="8" fill={C.line} fillOpacity="0.3" />
          <Lines x={e.x + 20} y={169} lines={["👤 Phù hợp:"]} size={9.5} fill={e.deep} weight={700} anchor="start" />
          <Lines x={e.x + 20} y={186} lines={[e.who]} size={9.5} fill={C.ink} weight={500} anchor="start" gap={13} />
        </g>
      ))}

      <rect x="120" y="235" width="400" height="50" rx="10" fill={C.ink} />
      <text x="140" y="266" fontSize="13" fill="#8CF29B" fontFamily="monospace" textAnchor="start">
        &gt;&gt;&gt; chương_trình.py
      </text>
      <Lines x={320} y={297} lines={["Dấu nhắc >>> chạy lệnh ngay; chương trình dài lưu trong tệp .py"]} size={10} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 16: print() với xâu kí tự và biểu thức số học ───────────────────────
function PrintVaBieuThuc() {
  const cases = [
    { code: 'print("5 + 3")', out: "5 + 3", note: "Xâu kí tự — in nguyên văn", x: 15, color: C.bubble, deep: C.bubbleDeep },
    { code: "print(5 + 3)", out: "8", note: "Biểu thức số học — tính rồi in", x: 225, color: C.mint, deep: C.mintDeep },
    { code: "print(10 / 4)", out: "2.5", note: "Phép / luôn trả số thực", x: 435, color: C.grape, deep: C.grapeDeep },
  ];

  return (
    <Frame viewBox="0 0 640 260">
      {cases.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="15" width="190" height="225" rx="14" fill={C.white} stroke={c.color} strokeWidth="2" />
          <rect x={c.x} y="15" width="190" height="34" rx="14" fill={c.color} fillOpacity="0.12" />
          <Lines x={c.x + 95} y={37} lines={["Lệnh gõ vào"]} size={10.5} fill={c.deep} weight={700} />

          <rect x={c.x + 14} y="58" width="162" height="34" rx="6" fill={C.ink} />
          <text x={c.x + 95} y="80" fontSize="10.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
            {c.code}
          </text>

          <path d={`M${c.x + 95},100 L${c.x + 95},122`} stroke={c.deep} strokeWidth="2" markerEnd="url(#arrow)" />

          <Lines x={c.x + 95} y={140} lines={["Kết quả hiển thị"]} size={10.5} fill={c.deep} weight={700} />
          <rect x={c.x + 30} y="150" width="130" height="40" rx="8" fill={c.color} fillOpacity="0.15" stroke={c.color} strokeWidth="1.5" />
          <Lines x={c.x + 95} y={175} lines={[c.out]} size={15} fill={c.deep} weight={700} />

          <Lines x={c.x + 95} y={212} lines={[c.note]} size={9.5} fill={C.inkSoft} weight={500} />
        </g>
      ))}
    </Frame>
  );
}

// ── Bài 17: Biến thay đổi giá trị theo lệnh gán — không phải phương trình ────
function BienVaGan() {
  const steps = [
    { label: "Trước", val: "0", x: 20 },
    { label: "Sau tong = tong + 5200", val: "5200", x: 235 },
    { label: "Sau tong = tong + 6800", val: "12000", x: 450 },
  ];

  return (
    <Frame viewBox="0 0 640 320">
      <Lines x={320} y={30} lines={["📦 Biến \"tong\" đổi giá trị qua từng lệnh gán"]} size={13} fill={C.grapeDeep} weight={700} />

      {steps.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y="55" width="170" height="95" rx="12" fill={C.white} stroke={C.grape} strokeWidth="2" />
          <rect x={s.x} y="55" width="170" height="28" rx="12" fill={C.grape} fillOpacity="0.12" />
          <Lines x={s.x + 85} y={73} lines={["tong"]} size={11} fill={C.grapeDeep} weight={700} />
          <Lines x={s.x + 85} y={115} lines={[s.val]} size={22} fill={C.ink} weight={700} />
          <Lines x={s.x + 85} y={168} lines={[s.label]} size={9.5} fill={C.inkSoft} weight={600} />
          {i < 2 && <path d={`M${s.x + 175},100 L${s.x + 210},100`} stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />}
        </g>
      ))}

      <Lines x={320} y={205} lines={["Dấu = không phải \"bằng nhau\" như toán học — máy tính giá trị VẾ PHẢI trước,"]} size={11} fill={C.inkSoft} weight={500} />
      <Lines x={320} y={222} lines={["rồi mới lưu KẾT QUẢ vào biến ở vế trái"]} size={11} fill={C.inkSoft} weight={500} />

      <rect x="70" y="248" width="220" height="58" rx="10" fill={C.mint} fillOpacity="0.12" stroke={C.mint} strokeWidth="1.5" />
      <Lines x={180} y={268} lines={["vi = 200000"]} size={11} fill={C.mintDeep} weight={700} />
      <Lines x={180} y={286} lines={["ban_dau = vi   → ban_dau cũng = 200000"]} size={10} fill={C.inkSoft} weight={500} />

      <rect x="350" y="248" width="220" height="58" rx="10" fill={C.bubble} fillOpacity="0.12" stroke={C.bubble} strokeWidth="1.5" />
      <Lines x={460} y={268} lines={["vi = vi - 50000  → vi = 150000"]} size={10.5} fill={C.bubbleDeep} weight={700} />
      <Lines x={460} y={286} lines={["ban_dau vẫn giữ 200000 — không đổi theo"]} size={10} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 17: Quy tắc đặt tên biến & gán đồng thời / hoán đổi giá trị ─────────
function QuyTacDatTen() {
  const valid = ["diem_toan", "tong", "banKinh2"];
  const invalid = [
    { name: "2diem", why: "bắt đầu bằng chữ số" },
    { name: '"diem toan"', why: "chứa dấu cách" },
    { name: "class", why: "trùng từ khoá Python" },
  ];

  return (
    <Frame viewBox="0 0 640 300">
      <rect x="15" y="15" width="300" height="180" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["✅ Tên biến hợp lệ"]} size={12.5} fill={C.mintDeep} weight={700} />
      {valid.map((v, i) => (
        <g key={i}>
          <rect x="35" y={60 + i * 42} width="260" height="32" rx="8" fill={C.mint} fillOpacity="0.1" />
          <text x="50" y={81 + i * 42} fontSize="12" fill={C.ink} fontFamily="monospace" fontWeight={600}>
            {v}
          </text>
        </g>
      ))}

      <rect x="325" y="15" width="300" height="180" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["❌ Tên biến KHÔNG hợp lệ"]} size={12.5} fill={C.bubbleDeep} weight={700} />
      {invalid.map((v, i) => (
        <g key={i}>
          <rect x="345" y={60 + i * 42} width="260" height="32" rx="8" fill={C.bubble} fillOpacity="0.1" />
          <text x="360" y={81 + i * 42} fontSize="12" fill={C.ink} fontFamily="monospace" fontWeight={600}>
            {v.name}
          </text>
          <text x="480" y={81 + i * 42} fontSize="9.5" fill={C.bubbleDeep} fontWeight={600} textAnchor="end">
            {v.why}
          </text>
        </g>
      ))}

      <rect x="70" y="215" width="500" height="70" rx="12" fill={C.grape} fillOpacity="0.08" stroke={C.grape} strokeWidth="1.5" />
      <Lines x={320} y={238} lines={["🔄 Hoán đổi giá trị chỉ trong một dòng: a, b = b, a"]} size={12} fill={C.grapeDeep} weight={700} />
      <text x="180" y="266" fontSize="12" fill={C.ink} fontFamily="monospace" textAnchor="middle">a = 3, b = 7</text>
      <path d="M280,260 L360,260" stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />
      <text x="460" y="266" fontSize="12" fill={C.ink} fontFamily="monospace" textAnchor="middle">a = 7, b = 3</text>
    </Frame>
  );
}

// ── Bài 17: Bảy phép toán số học và độ ưu tiên trong Python ─────────────────
function PhepToanPython() {
  const ops = [
    { sym: "+", name: "Cộng", ex: "5 + 3", res: "8" },
    { sym: "-", name: "Trừ", ex: "5 - 3", res: "2" },
    { sym: "*", name: "Nhân", ex: "5 * 3", res: "15" },
    { sym: "/", name: "Chia (số thực)", ex: "5 / 2", res: "2.5" },
    { sym: "//", name: "Chia lấy nguyên", ex: "5 // 2", res: "2" },
    { sym: "%", name: "Chia lấy dư", ex: "5 % 2", res: "1" },
    { sym: "**", name: "Luỹ thừa", ex: "2 ** 3", res: "8" },
  ];
  const grains = [1, 2, 4, 8, 16, 32, 64];

  return (
    <Frame viewBox="0 0 640 340">
      {ops.map((o, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = 20 + col * 155;
        const y = 15 + row * 100;
        return (
          <g key={i}>
            <rect x={x} y={y} width="145" height="88" rx="10" fill={C.white} stroke={C.grape} strokeWidth="1.5" />
            <rect x={x} y={y} width="145" height="28" rx="10" fill={C.grape} fillOpacity="0.12" />
            <text x={x + 72} y={y + 20} fontSize="13" fill={C.grapeDeep} fontWeight={700} textAnchor="middle" fontFamily="monospace">
              {o.sym}  {o.name}
            </text>
            <text x={x + 72} y={y + 48} fontSize="11" fill={C.inkSoft} textAnchor="middle" fontFamily="monospace">
              {o.ex}
            </text>
            <text x={x + 72} y={y + 72} fontSize="15" fill={C.ink} fontWeight={700} textAnchor="middle">
              = {o.res}
            </text>
          </g>
        );
      })}

      <Lines x={320} y={232} lines={["Độ ưu tiên: ** trước → * / // % → + - sau cùng (giống toán học, dùng ngoặc để đổi thứ tự)"]} size={10.5} fill={C.inkSoft} weight={600} />

      <Lines x={320} y={258} lines={["🌾 Luỹ thừa lớn nhanh khủng khiếp: mỗi ô bàn cờ nhân đôi hạt gạo ô trước (2ⁿ)"]} size={11} fill={C.grapeDeep} weight={700} />
      {grains.map((g, i) => (
        <g key={i}>
          <rect x={70 + i * 72} y={330 - g} width="46" height={g} fill={C.sun} fillOpacity="0.8" />
          <Lines x={93 + i * 72} y={330 - g - 8} lines={[String(g)]} size={10} fill={C.sunDeep} weight={700} />
          <Lines x={93 + i * 72} y={338} lines={[`ô ${i + 1}`]} size={9} fill={C.inkSoft} weight={500} />
        </g>
      ))}
    </Frame>
  );
}

const DIAGRAMS: Record<string, () => JSX.Element> = {
  "qua-trinh-xu-li-thong-tin": QuaTrinhXuLiThongTin,
  "don-vi-luu-tru": DonViLuuTru,
  "iot-ket-noi-thiet-bi": IoTKetNoi,
  "man-hinh-dien-thoai-thong-minh": ManHinhDienThoai,
  "lan-qua-internet": LanQuaInternet,
  "nguy-co-khong-gian-mang": NguyCoKhongGianMang,
  "phan-biet-malware": PhanBietMalware,
  "che-do-quet-defender": CheDoQuetDefender,
  "cu-phap-tim-kiem-nang-cao": CuPhapTimKiem,
  "google-translate-tinh-nang": GoogleTranslateDiagram,
  "kho-hoc-lieu-mo": KhoHocLieuDiagram,
  "van-hoa-va-phap-luat-mang": VanHoaVaPhapLuat,
  "quyen-tac-gia-phan-biet": QuyenTacGiaDiagram,
  "ban-quyen-vs-giay-phep": BanQuyenVsGiayPhep,
  "bitmap-vs-vector": BitmapVsVector,
  "gimp-vs-inkscape": GimpVsInkscape,
  "inkscape-giao-dien": InkscapeGiaoDien,
  "cong-cu-ve-hinh-inkscape": CongCuVeHinh,
  "thu-tu-xep-lop": ThuTuXepLop,
  "align-distribute": AlignDistribute,
  "duong-va-diem-neo": DuongVaDiemNeo,
  "cong-cu-node": CongCuNode,
  "text-on-path": TextOnPathDiagram,
  "phep-ghep-hinh": PhepGhepHinh,
  "xuat-ban-ve": XuatBanVe,
  "gradient-chuyen-sac": GradientChuyenSac,
  "ngon-ngu-may-vs-bac-cao": NgonNguMayVsBacCao,
  "moi-truong-python": MoiTruongPython,
  "print-va-bieu-thuc": PrintVaBieuThuc,
  "bien-va-gan": BienVaGan,
  "quy-tac-dat-ten": QuyTacDatTen,
  "phep-toan-python": PhepToanPython,
};

export default function Diagram({ name }: { name: string }) {
  const D = DIAGRAMS[name];
  if (!D) return null;
  return <D />;
}
