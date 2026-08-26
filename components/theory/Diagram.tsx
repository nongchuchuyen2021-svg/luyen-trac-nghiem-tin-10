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

// ── Bài 18: input() luôn trả về xâu — kể cả khi gõ toàn chữ số ──────────────
function InputLuonLaXau() {
  return (
    <Frame viewBox="0 0 640 300">
      <rect x="15" y="15" width="300" height="270" rx="16" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="36" rx="16" fill={C.grape} fillOpacity="0.12" />
      <Lines x={165} y={38} lines={["⌨️ input() luôn trả về xâu"]} size={12} fill={C.grapeDeep} weight={700} />

      <rect x="35" y="65" width="90" height="46" rx="10" fill={C.white} stroke={C.inkSoft} strokeWidth="1.5" />
      <Lines x={80} y={93} lines={["Gõ: 3"]} size={13} fill={C.ink} weight={700} />

      <path d="M130,88 L165,88" stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />

      <rect x="170" y="65" width="110" height="46" rx="10" fill={C.grape} fillOpacity="0.15" stroke={C.grape} strokeWidth="1.5" />
      <text x="225" y="93" fontSize="12" fill={C.grapeDeep} fontFamily="monospace" fontWeight={700} textAnchor="middle">
        input()
      </text>

      <path d="M225,116 L225,140" stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />

      <rect x="155" y="145" width="140" height="46" rx="23" fill={C.bubble} fillOpacity="0.18" stroke={C.bubbleDeep} strokeWidth="2" />
      <text x="225" y="174" fontSize="16" fill={C.bubbleDeep} fontFamily="monospace" fontWeight={700} textAnchor="middle">
        &quot;3&quot;
      </text>

      <Lines x={165} y={215} lines={["Có dấu nháy bao quanh"]} size={10.5} fill={C.bubbleDeep} weight={700} />
      <Lines x={165} y={231} lines={["→ đây là XÂU KÍ TỰ (str)"]} size={10.5} fill={C.bubbleDeep} weight={700} />
      <Lines x={165} y={253} lines={["chứ không phải con số 3 thật sự!"]} size={10} fill={C.inkSoft} weight={500} />

      <rect x="325" y="15" width="300" height="270" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="36" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={475} y={38} lines={["❌ Xâu không nhân được với xâu"]} size={12} fill={C.bubbleDeep} weight={700} />

      <rect x="340" y="80" width="100" height="42" rx="10" fill={C.bubble} fillOpacity="0.15" stroke={C.bubbleDeep} strokeWidth="1.5" />
      <text x="390" y="106" fontSize="11.5" fill={C.bubbleDeep} fontFamily="monospace" fontWeight={700} textAnchor="middle">
        &quot;15000&quot;
      </text>
      <Lines x={462} y={106} lines={["×"]} size={20} fill={C.ink} weight={700} />
      <rect x="480" y="80" width="70" height="42" rx="10" fill={C.bubble} fillOpacity="0.15" stroke={C.bubbleDeep} strokeWidth="1.5" />
      <text x="515" y="106" fontSize="11.5" fill={C.bubbleDeep} fontFamily="monospace" fontWeight={700} textAnchor="middle">
        &quot;3&quot;
      </text>

      <path d="M475,130 L475,155" stroke={C.bubbleDeep} strokeWidth="2.5" markerEnd="url(#arrow-bubble)" />

      <rect x="380" y="160" width="190" height="60" rx="10" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.8" />
      <Lines x={475} y={182} lines={["🚫 TypeError"]} size={13} fill="#B91C1C" weight={700} />
      <Lines x={475} y={202} lines={["không nhân được xâu với xâu"]} size={9.5} fill="#B91C1C" weight={600} />

      <Lines x={475} y={245} lines={["Muốn tính toán, phải chuyển đổi xâu"]} size={10} fill={C.inkSoft} weight={500} />
      <Lines x={475} y={261} lines={["sang số bằng int() hoặc float() trước"]} size={10} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 18: Máy chuyển đổi kiểu dữ liệu int() / float() ─────────────────────
function ChuyenDoiKieu() {
  return (
    <Frame viewBox="0 0 640 300">
      <Lines x={320} y={30} lines={["🔧 \"Máy\" chuyển đổi kiểu dữ liệu"]} size={13} fill={C.grapeDeep} weight={700} />

      {/* Hàng 1: int() thành công */}
      <rect x="30" y="55" width="90" height="42" rx="21" fill={C.bubble} fillOpacity="0.15" stroke={C.bubbleDeep} strokeWidth="1.5" />
      <text x="75" y="81" fontSize="14" fill={C.bubbleDeep} fontFamily="monospace" fontWeight={700} textAnchor="middle">&quot;3&quot;</text>
      <Lines x={75} y={112} lines={["xâu (str)"]} size={9.5} fill={C.inkSoft} weight={500} />

      <path d="M128,76 L182,76" stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />
      <rect x="188" y="55" width="90" height="42" rx="10" fill={C.grape} fillOpacity="0.18" stroke={C.grape} strokeWidth="1.5" />
      <text x="233" y="81" fontSize="12" fill={C.grapeDeep} fontFamily="monospace" fontWeight={700} textAnchor="middle">int()</text>

      <path d="M286,76 L340,76" stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />
      <rect x="346" y="55" width="80" height="42" rx="8" fill={C.mint} fillOpacity="0.2" stroke={C.mintDeep} strokeWidth="1.5" />
      <text x="386" y="81" fontSize="16" fill={C.mintDeep} fontWeight={700} textAnchor="middle">3</text>
      <Lines x={386} y={112} lines={["số nguyên (int)"]} size={9.5} fill={C.inkSoft} weight={500} />

      <Lines x={540} y={82} lines={["Không dấu nháy —", "giờ tính toán được!"]} size={10} fill={C.mintDeep} weight={600} gap={14} anchor="start" />

      {/* Hàng 2: float() thành công */}
      <rect x="30" y="135" width="90" height="42" rx="21" fill={C.bubble} fillOpacity="0.15" stroke={C.bubbleDeep} strokeWidth="1.5" />
      <text x="75" y="161" fontSize="13" fill={C.bubbleDeep} fontFamily="monospace" fontWeight={700} textAnchor="middle">&quot;3.5&quot;</text>

      <path d="M128,156 L182,156" stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />
      <rect x="188" y="135" width="90" height="42" rx="10" fill={C.grape} fillOpacity="0.18" stroke={C.grape} strokeWidth="1.5" />
      <text x="233" y="161" fontSize="11.5" fill={C.grapeDeep} fontFamily="monospace" fontWeight={700} textAnchor="middle">float()</text>

      <path d="M286,156 L340,156" stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />
      <rect x="346" y="135" width="80" height="42" rx="8" fill={C.mint} fillOpacity="0.2" stroke={C.mintDeep} strokeWidth="1.5" />
      <text x="386" y="161" fontSize="15" fill={C.mintDeep} fontWeight={700} textAnchor="middle">3.5</text>
      <Lines x={540} y={162} lines={["Dùng khi cần phần", "thập phân"]} size={10} fill={C.mintDeep} weight={600} gap={14} anchor="start" />

      {/* Hàng 3: int() thất bại */}
      <rect x="30" y="215" width="90" height="42" rx="21" fill={C.bubble} fillOpacity="0.15" stroke={C.bubbleDeep} strokeWidth="1.5" />
      <text x="75" y="241" fontSize="14" fill={C.bubbleDeep} fontFamily="monospace" fontWeight={700} textAnchor="middle">&quot;ba&quot;</text>

      <path d="M128,236 L182,236" stroke="#B91C1C" strokeWidth="2.5" markerEnd="url(#arrow)" />
      <rect x="188" y="215" width="90" height="42" rx="10" fill={C.grape} fillOpacity="0.18" stroke={C.grape} strokeWidth="1.5" />
      <text x="233" y="241" fontSize="12" fill={C.grapeDeep} fontFamily="monospace" fontWeight={700} textAnchor="middle">int()</text>

      <path d="M286,236 L340,236" stroke="#B91C1C" strokeWidth="2.5" markerEnd="url(#arrow)" />
      <rect x="346" y="215" width="150" height="42" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.6" />
      <Lines x={421} y={241} lines={["🚫 ValueError"]} size={12} fill="#B91C1C" weight={700} />

      <Lines x={320} y={280} lines={["\"ba\" không phải chữ số nên máy không đổi được sang số nguyên"]} size={10.5} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 18: print() với nhiều giá trị — sep và end ──────────────────────────
function PrintNangCao() {
  const cases = [
    {
      title: "Mặc định (sep = dấu cách)",
      code: 'print(ten, "mua", so_luong, "ly")',
      out: "Hạ mua 3 ly",
      x: 15,
      color: C.grape,
      deep: C.grapeDeep,
    },
    {
      title: "sep = \", \"",
      code: 'print(mon1, mon2, mon3, sep=", ")',
      out: "Trà sữa, Trân châu, Thạch",
      x: 225,
      color: C.mint,
      deep: C.mintDeep,
    },
    {
      title: "end = \"\" (nối cùng dòng)",
      code: 'print("Tổng: ", end="")\nprint(tong, "đồng")',
      out: "Tổng: 45000 đồng",
      x: 435,
      color: C.bubble,
      deep: C.bubbleDeep,
    },
  ];

  return (
    <Frame viewBox="0 0 640 260">
      {cases.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="15" width="190" height="225" rx="14" fill={C.white} stroke={c.color} strokeWidth="2" />
          <rect x={c.x} y="15" width="190" height="40" rx="14" fill={c.color} fillOpacity="0.12" />
          <Lines x={c.x + 95} y={40} lines={[c.title]} size={10.5} fill={c.deep} weight={700} />

          <rect x={c.x + 10} y="65" width="170" height="55" rx="6" fill={C.ink} />
          <text x={c.x + 95} y="87" fontSize="8.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
            <tspan x={c.x + 95} dy="0">{c.code.split("\n")[0]}</tspan>
            {c.code.split("\n")[1] && <tspan x={c.x + 95} dy="14">{c.code.split("\n")[1]}</tspan>}
          </text>

          <path d={`M${c.x + 95},130 L${c.x + 95},150`} stroke={c.deep} strokeWidth="2" markerEnd="url(#arrow)" />

          <Lines x={c.x + 95} y={168} lines={["Kết quả hiển thị"]} size={9.5} fill={c.deep} weight={700} />
          <rect x={c.x + 10} y="178" width="170" height="45" rx="8" fill={c.color} fillOpacity="0.12" stroke={c.color} strokeWidth="1.3" />
          <Lines x={c.x + 95} y={205} lines={[c.out]} size={10.5} fill={C.ink} weight={700} />
        </g>
      ))}
    </Frame>
  );
}

// ── Bài 18: Hoá đơn trà sữa — thành phẩm cuối cùng của cả bài ───────────────
function HoaDonTraSua() {
  const lines = [
    "QUÁN TRÀ SỮA 10A2",
    "------------------------",
    "Khách: Hạ",
    "Trà sữa   x 3 ly",
    "Đơn giá: 15.000 đ",
    "------------------------",
    "TỔNG: 45.000 đồng",
    "",
    "Cảm ơn quý khách! 🧋",
  ];

  return (
    <Frame viewBox="0 0 400 340">
      {Array.from({ length: 10 }).map((_, i) => (
        <circle key={`l${i}`} cx="18" cy={20 + i * 32} r="4" fill={C.line} />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <circle key={`r${i}`} cx="382" cy={20 + i * 32} r="4" fill={C.line} />
      ))}

      <rect x="35" y="10" width="330" height="320" rx="4" fill={C.white} stroke={C.inkSoft} strokeWidth="1.5" strokeDasharray="6 4" />

      {lines.map((l, i) => (
        <text
          key={i}
          x="200"
          y={55 + i * 28}
          fontSize={i === 0 ? 15 : i === 6 ? 15 : 12.5}
          fill={i === 0 || i === 6 ? C.grapeDeep : C.ink}
          fontWeight={i === 0 || i === 6 ? 700 : 500}
          fontFamily="monospace"
          textAnchor="middle"
        >
          {l}
        </text>
      ))}
    </Frame>
  );
}

// ── Bài 19: Lưu đồ if đơn — cổng kiểm tra chiều cao tàu lượn ─────────────────
function IfDonLuuDo() {
  return (
    <Frame viewBox="0 0 640 320">
      {/* Cột trái: lưu đồ */}
      <rect x="55" y="12" width="190" height="36" rx="18" fill={C.grape} fillOpacity="0.15" stroke={C.grape} strokeWidth="1.5" />
      <Lines x={150} y={35} lines={["🎫 Đến cổng tàu lượn"]} size={11} fill={C.grapeDeep} weight={700} />

      <path d="M150,48 L150,68" stroke={C.inkSoft} strokeWidth="2" markerEnd="url(#arrow-soft)" />

      <polygon points="150,68 248,112 150,156 52,112" fill={C.sun} fillOpacity="0.18" stroke={C.sunDeep} strokeWidth="2" />
      <Lines x={150} y={106} lines={["chiều cao"]} size={10.5} fill={C.sunDeep} weight={700} />
      <Lines x={150} y={122} lines={["≥ 140cm ?"]} size={10.5} fill={C.sunDeep} weight={700} />

      <path d="M150,156 L150,186" stroke={C.mintDeep} strokeWidth="2.2" markerEnd="url(#arrow)" />
      <Lines x={172} y={175} lines={["Đúng"]} size={10} fill={C.mintDeep} weight={700} anchor="start" />

      <rect x="55" y="192" width="190" height="46" rx="10" fill={C.mint} fillOpacity="0.18" stroke={C.mintDeep} strokeWidth="1.8" />
      <Lines x={150} y={220} lines={["🎢 Được lên tàu lượn!"]} size={11} fill={C.mintDeep} weight={700} />

      <path d="M248,112 L300,112 L300,270 L150,270" fill="none" stroke="#B91C1C" strokeWidth="2" markerEnd="url(#arrow)" />
      <Lines x={280} y={104} lines={["Sai"]} size={10} fill="#B91C1C" weight={700} />

      <path d="M150,238 L150,262" stroke={C.inkSoft} strokeWidth="2" markerEnd="url(#arrow-soft)" />

      <rect x="80" y="272" width="140" height="34" rx="17" fill={C.line} fillOpacity="0.5" stroke={C.inkSoft} strokeWidth="1.3" />
      <Lines x={150} y={293} lines={["Kết thúc"]} size={10.5} fill={C.ink} weight={600} />

      {/* Cột phải: mã lệnh tương ứng */}
      <rect x="340" y="20" width="280" height="180" rx="12" fill={C.ink} />
      <text x="358" y="50" fontSize="11.5" fill="#8CF29B" fontFamily="monospace">
        chieu_cao = float(input())
      </text>
      <text x="358" y="76" fontSize="11.5" fill="#FBBF24" fontFamily="monospace">
        if chieu_cao &gt;= 140<tspan fill="#FF6B9D">:</tspan>
      </text>
      <text x="378" y="102" fontSize="11.5" fill="#8CF29B" fontFamily="monospace">
        print(&quot;🎢 Được lên...&quot;)
      </text>

      <path d="M362,86 L362,102" stroke="#FF6B9D" strokeWidth="1.5" />
      <path d="M362,102 L374,102" stroke="#FF6B9D" strokeWidth="1.5" />
      <text x="358" y="128" fontSize="9" fill="#FF6B9D" fontFamily="monospace">
        ↑ thụt lề 4 dấu cách = thuộc khối lệnh if
      </text>

      <Lines x={480} y={155} lines={["Dấu hai chấm ':' và thụt lề"]} size={10} fill={C.inkSoft} weight={600} />
      <Lines x={480} y={172} lines={["là bắt buộc trong Python"]} size={10} fill={C.inkSoft} weight={600} />

      <rect x="340" y="215" width="280" height="90" rx="12" fill={C.grape} fillOpacity="0.07" stroke={C.grape} strokeWidth="1.3" />
      <Lines x={480} y={240} lines={["📌 Nếu chiều cao không đủ 140cm"]} size={10.5} fill={C.grapeDeep} weight={700} />
      <Lines x={480} y={260} lines={["(điều kiện Sai), khối lệnh trong if"]} size={10} fill={C.inkSoft} weight={500} />
      <Lines x={480} y={278} lines={["bị bỏ qua — chương trình kết thúc"]} size={10} fill={C.inkSoft} weight={500} />
      <Lines x={480} y={295} lines={["mà không in gì cả"]} size={10} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 19: Lưu đồ if-elif-else — ba mức chiều cao ba khu trò chơi ──────────
function IfElifElseLuuDo() {
  return (
    <Frame viewBox="0 0 640 410">
      <rect x="220" y="10" width="200" height="32" rx="16" fill={C.grape} fillOpacity="0.15" stroke={C.grape} strokeWidth="1.5" />
      <Lines x={320} y={30} lines={["🎡 Đến khu Đu quay Ngựa gỗ"]} size={10.5} fill={C.grapeDeep} weight={700} />

      <path d="M320,42 L320,58" stroke={C.inkSoft} strokeWidth="2" markerEnd="url(#arrow-soft)" />

      {/* Kim cương 1 */}
      <polygon points="320,58 400,93 320,128 240,93" fill={C.sun} fillOpacity="0.18" stroke={C.sunDeep} strokeWidth="2" />
      <Lines x={320} y={89} lines={["chiều cao"]} size={9.5} fill={C.sunDeep} weight={700} />
      <Lines x={320} y={103} lines={["< 120cm ?"]} size={9.5} fill={C.sunDeep} weight={700} />

      {/* Đúng → không được chơi (rẽ trái) */}
      <path d="M240,93 L210,93" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <Lines x={225} y={82} lines={["Đúng"]} size={9} fill={C.mintDeep} weight={700} />
      <rect x="30" y="73" width="180" height="40" rx="10" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.6" />
      <Lines x={120} y={97} lines={["🚫 Không được chơi"]} size={10} fill="#B91C1C" weight={700} />

      {/* Sai → xuống kim cương 2 */}
      <path d="M320,128 L320,168" stroke="#B91C1C" strokeWidth="2" markerEnd="url(#arrow)" />
      <Lines x={342} y={152} lines={["Sai"]} size={9} fill="#B91C1C" weight={700} anchor="start" />

      <polygon points="320,168 400,203 320,238 240,203" fill={C.sun} fillOpacity="0.18" stroke={C.sunDeep} strokeWidth="2" />
      <Lines x={320} y={199} lines={["chiều cao"]} size={9.5} fill={C.sunDeep} weight={700} />
      <Lines x={320} y={213} lines={["< 140cm ?"]} size={9.5} fill={C.sunDeep} weight={700} />

      {/* Đúng → đi cùng người lớn (rẽ trái) */}
      <path d="M240,203 L210,203" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <Lines x={225} y={192} lines={["Đúng"]} size={9} fill={C.mintDeep} weight={700} />
      <rect x="20" y="183" width="200" height="40" rx="10" fill={C.sun} fillOpacity="0.2" stroke={C.sunDeep} strokeWidth="1.6" />
      <Lines x={120} y={207} lines={["👨‍👩‍👧 Đi cùng người lớn"]} size={9.5} fill={C.sunDeep} weight={700} />

      {/* Sai → chơi tự do (xuống) */}
      <path d="M320,238 L320,275" stroke="#B91C1C" strokeWidth="2" markerEnd="url(#arrow)" />
      <Lines x={342} y={260} lines={["Sai"]} size={9} fill="#B91C1C" weight={700} anchor="start" />

      <rect x="230" y="280" width="180" height="40" rx="10" fill={C.mint} fillOpacity="0.2" stroke={C.mintDeep} strokeWidth="1.6" />
      <Lines x={320} y={304} lines={["✅ Được chơi tự do"]} size={10} fill={C.mintDeep} weight={700} />

      <rect x="60" y="345" width="520" height="55" rx="10" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={366} lines={["Chỉ MỘT nhánh chạy! Máy kiểm tra từng điều kiện từ trên xuống,"]} size={10.5} fill={C.ink} weight={700} />
      <Lines x={320} y={384} lines={["gặp Đúng đầu tiên là dừng lại — các elif/else phía sau không được xét nữa"]} size={9.5} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 19: and giống cổng nối tiếp — or giống cổng song song ───────────────
function AndOrGates() {
  return (
    <Frame viewBox="0 0 640 300">
      {/* Panel AND */}
      <rect x="15" y="15" width="300" height="270" rx="16" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="36" rx="16" fill={C.grape} fillOpacity="0.12" />
      <Lines x={165} y={38} lines={["🔒 and — như hai cổng NỐI TIẾP"]} size={11} fill={C.grapeDeep} weight={700} />

      <Lines x={45} y={82} lines={["🧍"]} size={18} />
      <path d="M60,75 L88,75" stroke={C.inkSoft} strokeWidth="2" markerEnd="url(#arrow-soft)" />
      <rect x="92" y="57" width="150" height="36" rx="6" fill={C.mint} fillOpacity="0.2" stroke={C.mintDeep} strokeWidth="1.5" />
      <Lines x={167} y={79} lines={["Đủ chiều cao?"]} size={10} fill={C.mintDeep} weight={700} />

      <path d="M167,93 L167,113" stroke={C.inkSoft} strokeWidth="2" markerEnd="url(#arrow-soft)" />
      <rect x="92" y="117" width="150" height="36" rx="6" fill={C.mint} fillOpacity="0.2" stroke={C.mintDeep} strokeWidth="1.5" />
      <Lines x={167} y={139} lines={["Đủ cân nặng?"]} size={10} fill={C.mintDeep} weight={700} />

      <path d="M167,153 L167,173" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="122" y="177" width="90" height="36" rx="8" fill={C.mint} fillOpacity="0.3" stroke={C.mintDeep} strokeWidth="1.8" />
      <Lines x={167} y={199} lines={["✅ Được chơi"]} size={10} fill={C.mintDeep} weight={700} />

      <rect x="30" y="225" width="270" height="55" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={165} y={244} lines={["Phải qua CẢ HAI cổng mới đi tiếp được"]} size={9.5} fill={C.ink} weight={700} />
      <Lines x={165} y={262} lines={["— một cổng Sai là bị chặn ngay, giống hệt and"]} size={9} fill={C.inkSoft} weight={500} />

      {/* Panel OR */}
      <rect x="325" y="15" width="300" height="270" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="36" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={38} lines={["🔓 or — như hai cổng SONG SONG"]} size={11} fill={C.mintDeep} weight={700} />

      <Lines x={355} y={100} lines={["🧍"]} size={18} />
      <path d="M370,93 L370,75 L398,75" fill="none" stroke={C.inkSoft} strokeWidth="2" />
      <path d="M398,75 L420,75" stroke={C.inkSoft} strokeWidth="2" markerEnd="url(#arrow-soft)" />
      <rect x="424" y="57" width="150" height="36" rx="6" fill={C.bubble} fillOpacity="0.18" stroke={C.bubbleDeep} strokeWidth="1.5" />
      <Lines x={499} y={79} lines={["Có thẻ thành viên?"]} size={9.5} fill={C.bubbleDeep} weight={700} />

      <path d="M370,107 L370,125 L398,125" fill="none" stroke={C.inkSoft} strokeWidth="2" />
      <path d="M398,125 L420,125" stroke={C.inkSoft} strokeWidth="2" markerEnd="url(#arrow-soft)" />
      <rect x="424" y="107" width="150" height="36" rx="6" fill={C.bubble} fillOpacity="0.18" stroke={C.bubbleDeep} strokeWidth="1.5" />
      <Lines x={499} y={129} lines={["Là ngày sinh nhật?"]} size={9.5} fill={C.bubbleDeep} weight={700} />

      <path d="M576,75 L598,75 L598,125 L576,125" fill="none" stroke={C.bubbleDeep} strokeWidth="2" />
      <path d="M598,100 L598,173" stroke={C.bubbleDeep} strokeWidth="2" markerEnd="url(#arrow)" />

      <rect x="553" y="177" width="90" height="36" rx="8" fill={C.bubble} fillOpacity="0.3" stroke={C.bubbleDeep} strokeWidth="1.8" />
      <Lines x={598} y={199} lines={["✅ Miễn phí vé"]} size={9.5} fill={C.bubbleDeep} weight={700} />

      <rect x="340" y="225" width="270" height="55" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={475} y={244} lines={["Chỉ cần MỘT trong hai cổng mở là qua được"]} size={9.5} fill={C.ink} weight={700} />
      <Lines x={475} y={262} lines={["— cả hai cùng đóng mới bị chặn, giống hệt or"]} size={9} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 20: range(n) và range(a,b) trên trục số — bẫy "hụt" giá trị cuối ────
function RangeSoLine() {
  const dots1 = [0, 1, 2, 3, 4];
  const dots2 = [1, 2, 3, 4, 5];

  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="610" height="105" rx="14" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <Lines x={320} y={40} lines={["range(5) → chỉ gồm 0, 1, 2, 3, 4 — KHÔNG có số 5"]} size={12} fill={C.mintDeep} weight={700} />
      {dots1.map((n, i) => (
        <g key={n}>
          <circle cx={90 + i * 80} cy="80" r="20" fill={C.mint} fillOpacity="0.25" stroke={C.mintDeep} strokeWidth="2" />
          <Lines x={90 + i * 80} y={85} lines={[String(n)]} size={14} fill={C.mintDeep} weight={700} />
        </g>
      ))}
      <circle cx="490" cy="80" r="20" fill={C.white} stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" />
      <Lines x={490} y={85} lines={["5"]} size={14} fill="#DC2626" weight={700} />
      <Lines x={490} y={112} lines={["bị loại!"]} size={9} fill="#DC2626" weight={700} />

      <rect x="15" y="140" width="610" height="105" rx="14" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <Lines x={320} y={165} lines={["range(1, 6) → chỉ gồm 1, 2, 3, 4, 5 — KHÔNG có số 6"]} size={12} fill={C.grapeDeep} weight={700} />
      {dots2.map((n, i) => (
        <g key={n}>
          <circle cx={90 + i * 80} cy="205" r="20" fill={C.grape} fillOpacity="0.2" stroke={C.grapeDeep} strokeWidth="2" />
          <Lines x={90 + i * 80} y={210} lines={[String(n)]} size={14} fill={C.grapeDeep} weight={700} />
        </g>
      ))}
      <circle cx="490" cy="205" r="20" fill={C.white} stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" />
      <Lines x={490} y={210} lines={["6"]} size={14} fill="#DC2626" weight={700} />
      <Lines x={490} y={237} lines={["bị loại!"]} size={9} fill="#DC2626" weight={700} />
    </Frame>
  );
}

// ── Bài 20: Vòng lặp for chạy qua từng "khung hình" theo thời gian ──────────
function VongLapFilmstrip() {
  const frames = [0, 1, 2, 3, 4];
  return (
    <Frame viewBox="0 0 640 220">
      <Lines x={320} y={26} lines={["for i in range(5): 🔔 — cùng một lệnh, chạy lại 5 lần với i khác nhau"]} size={11.5} fill={C.grapeDeep} weight={700} />

      {frames.map((i, idx) => (
        <g key={i}>
          <rect x={20 + idx * 122} y="45" width="102" height="120" rx="10" fill={C.white} stroke={C.grape} strokeWidth="1.8" />
          <rect x={20 + idx * 122} y="45" width="102" height="30" rx="10" fill={C.grape} fillOpacity="0.15" />
          <Lines x={71 + idx * 122} y={65} lines={[`Vòng ${idx + 1}`]} size={10} fill={C.grapeDeep} weight={700} />
          <Lines x={71 + idx * 122} y={100} lines={[`i = ${i}`]} size={16} fill={C.ink} weight={700} />
          <Lines x={71 + idx * 122} y={130} lines={["🔔"]} size={22} />
          <Lines x={71 + idx * 122} y={155} lines={["Rung chuông!"]} size={8.5} fill={C.inkSoft} weight={600} />
          {idx < 4 && (
            <path d={`M${122 + idx * 122},105 L${142 + idx * 122},105`} stroke={C.grapeDeep} strokeWidth="2" markerEnd="url(#arrow)" />
          )}
        </g>
      ))}

      <Lines x={320} y={195} lines={["Hết 5 vòng, i không còn tồn tại — chương trình chạy tiếp lệnh phía sau for"]} size={10} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 20: Biến cộng dồn — khởi tạo trước vòng lặp mới đúng ─────────────────
function BienCongDon() {
  const steps = [
    { i: 1, s: 1 },
    { i: 2, s: 3 },
    { i: 3, s: 6 },
    { i: 4, s: 10 },
    { i: 5, s: 15 },
  ];

  return (
    <Frame viewBox="0 0 640 300">
      <rect x="15" y="15" width="300" height="270" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["✅ ĐÚNG: s = 0 đặt TRƯỚC vòng lặp"]} size={10.5} fill={C.mintDeep} weight={700} />

      {steps.map((st, i) => (
        <g key={i}>
          <rect x={35 + i * 53} y={70 + (15 - st.s) * 3} width="40" height={st.s * 3 + 30} rx="6" fill={C.mint} fillOpacity="0.55" stroke={C.mintDeep} strokeWidth="1.3" />
          <Lines x={55 + i * 53} y={260} lines={[`i=${st.i}`]} size={9} fill={C.inkSoft} weight={600} />
          <Lines x={55 + i * 53} y={62 + (15 - st.s) * 3} lines={[`s=${st.s}`]} size={9.5} fill={C.mintDeep} weight={700} />
        </g>
      ))}
      <Lines x={165} y={280} lines={["Bể \"s\" đầy dần lên — kết quả cuối: 15 quyển sách"]} size={9.5} fill={C.inkSoft} weight={500} />

      <rect x="325" y="15" width="300" height="270" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["❌ SAI: s = 0 đặt TRONG vòng lặp"]} size={10.5} fill={C.bubbleDeep} weight={700} />

      {steps.map((st, i) => (
        <g key={i}>
          <rect x={345 + i * 53} y={70 + (15 - st.i) * 3} width="40" height={st.i * 3 + 30} rx="6" fill={C.bubble} fillOpacity="0.4" stroke={C.bubbleDeep} strokeWidth="1.3" />
          <Lines x={365 + i * 53} y={260} lines={[`i=${st.i}`]} size={9} fill={C.inkSoft} weight={600} />
          <Lines x={365 + i * 53} y={62 + (15 - st.i) * 3} lines={[`s=${st.i}`]} size={9.5} fill={C.bubbleDeep} weight={700} />
        </g>
      ))}
      <Lines x={475} y={280} lines={["Bể \"s\" bị đổ lại mỗi vòng — kết quả cuối chỉ còn 5, sai hoàn toàn"]} size={9.5} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 20: for lồng nhau — sơ đồ ghế ngồi rạp chiếu phim ───────────────────
function GheRapChieuPhim() {
  const rows = [1, 2, 3];
  const seats = [1, 2, 3, 4, 5];

  return (
    <Frame viewBox="0 0 640 280">
      <Lines x={320} y={26} lines={["🎬 Màn hình"]} size={11} fill={C.inkSoft} weight={700} />
      <rect x="180" y="34" width="280" height="10" rx="5" fill={C.line} />

      {rows.map((r, ri) => (
        <g key={r}>
          <Lines x={70} y={95 + ri * 55} lines={[`Hàng ${r}`]} size={10.5} fill={C.grapeDeep} weight={700} />
          {seats.map((s, si) => (
            <g key={s}>
              <rect
                x={135 + si * 75}
                y={72 + ri * 55}
                width="60"
                height="40"
                rx="8"
                fill={C.grape}
                fillOpacity="0.15"
                stroke={C.grape}
                strokeWidth="1.5"
              />
              <Lines x={165 + si * 75} y={97 + ri * 55} lines={[`H${r}-G${s}`]} size={10} fill={C.grapeDeep} weight={700} />
            </g>
          ))}
        </g>
      ))}

      <rect x="60" y="245" width="520" height="28" rx="8" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={263} lines={["Vòng ngoài chạy qua 3 hàng — mỗi hàng, vòng trong chạy qua 5 ghế → in đủ 15 nhãn ghế"]} size={9.5} fill={C.ink} weight={600} />
    </Frame>
  );
}

// ── Bài 21: for (biết trước số lần) và while (không biết trước) ────────────
function ForVsWhileSoSanh() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="36" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={165} y={38} lines={["🔒 for — biết trước SỐ LẦN lặp"]} size={11.5} fill={C.mintDeep} weight={700} />

      <rect x="45" y="60" width="240" height="60" rx="10" fill={C.mint} fillOpacity="0.12" stroke={C.mintDeep} strokeWidth="1.5" />
      <Lines x={165} y={84} lines={["\"Rung chuông đúng 5 lần\""]} size={11} fill={C.mintDeep} weight={700} />
      <Lines x={165} y={104} lines={["Biết chắc: 5 lần, không hơn không kém"]} size={9.5} fill={C.inkSoft} weight={500} />

      <Lines x={165} y={140} lines={["for i in range(5):"]} size={11} fill={C.ink} weight={600} />
      <Lines x={165} y={158} lines={["    🔔"]} size={11} fill={C.ink} weight={600} />

      <rect x="45" y="180" width="240" height="50" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={165} y={200} lines={["Dùng khi: số vòng cố định ngay"]} size={9.5} fill={C.ink} weight={600} />
      <Lines x={165} y={216} lines={["từ lúc viết chương trình"]} size={9.5} fill={C.ink} weight={600} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="36" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={475} y={38} lines={["🔓 while — CHƯA BIẾT trước số lần"]} size={11.5} fill={C.bubbleDeep} weight={700} />

      <rect x="355" y="60" width="240" height="60" rx="10" fill={C.bubble} fillOpacity="0.12" stroke={C.bubbleDeep} strokeWidth="1.5" />
      <Lines x={475} y={84} lines={["\"Đoán mật khẩu đến khi đúng\""]} size={11} fill={C.bubbleDeep} weight={700} />
      <Lines x={475} y={104} lines={["Không ai biết trước: 1 lần? 10 lần?"]} size={9.5} fill={C.inkSoft} weight={500} />

      <Lines x={475} y={140} lines={["while mk != \"bimat\":"]} size={11} fill={C.ink} weight={600} />
      <Lines x={475} y={158} lines={["    mk = input()"]} size={11} fill={C.ink} weight={600} />

      <rect x="355" y="180" width="240" height="50" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={475} y={200} lines={["Dùng khi: số vòng phụ thuộc"]} size={9.5} fill={C.ink} weight={600} />
      <Lines x={475} y={216} lines={["kết quả lúc chương trình đang chạy"]} size={9.5} fill={C.ink} weight={600} />
    </Frame>
  );
}

// ── Bài 21: while kiểm tra điều kiện TRƯỚC mỗi vòng — có thể chạy 0 lần ─────
function WhileKiemTraTruoc() {
  return (
    <Frame viewBox="0 0 640 300">
      <rect x="220" y="10" width="200" height="32" rx="16" fill={C.grape} fillOpacity="0.15" stroke={C.grape} strokeWidth="1.5" />
      <Lines x={320} y={31} lines={["🔑 mk = input(\"Mật khẩu: \")"]} size={10.5} fill={C.grapeDeep} weight={700} />

      <path d="M320,42 L320,60" stroke={C.inkSoft} strokeWidth="2" markerEnd="url(#arrow-soft)" />

      <polygon points="320,60 415,100 320,140 225,100" fill={C.sun} fillOpacity="0.18" stroke={C.sunDeep} strokeWidth="2" />
      <Lines x={320} y={95} lines={["mk khác"]} size={10} fill={C.sunDeep} weight={700} />
      <Lines x={320} y={110} lines={["\"bimat\" ?"]} size={10} fill={C.sunDeep} weight={700} />

      {/* Đúng -> chạy thân lặp rồi quay lại kiểm tra */}
      <path d="M225,100 L165,100" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <Lines x={195} y={90} lines={["Đúng"]} size={9} fill={C.mintDeep} weight={700} />
      <rect x="30" y="80" width="135" height="40" rx="8" fill={C.mint} fillOpacity="0.2" stroke={C.mintDeep} strokeWidth="1.5" />
      <Lines x={97} y={104} lines={["Nhập lại mk"]} size={10} fill={C.mintDeep} weight={700} />
      <path d="M97,80 L97,20 L300,20" fill="none" stroke={C.mintDeep} strokeWidth="1.8" markerEnd="url(#arrow)" />
      <Lines x={150} y={13} lines={["quay lại kiểm tra"]} size={9} fill={C.mintDeep} weight={600} />

      {/* Sai -> thoát */}
      <path d="M415,100 L470,100" stroke="#B91C1C" strokeWidth="2" markerEnd="url(#arrow)" />
      <Lines x={442} y={90} lines={["Sai"]} size={9} fill="#B91C1C" weight={700} />
      <rect x="475" y="80" width="140" height="40" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.6" />
      <Lines x={545} y={104} lines={["🎉 Chúc mừng!"]} size={10} fill="#B91C1C" weight={700} />

      <rect x="60" y="185" width="520" height="95" rx="12" fill={C.line} fillOpacity="0.3" />
      <Lines x={320} y={210} lines={["⚡ Nếu gõ ĐÚNG ngay từ lần đầu tiên:"]} size={11} fill={C.ink} weight={700} />
      <Lines x={320} y={232} lines={["điều kiện \"mk khác bimat\" đã SAI trước khi vào vòng lặp,"]} size={10} fill={C.inkSoft} weight={500} />
      <Lines x={320} y={250} lines={["nên thân lặp (nhập lại) không chạy lần nào cả —"]} size={10} fill={C.inkSoft} weight={500} />
      <Lines x={320} y={268} lines={["while có thể chạy đúng 0 lần, khác hẳn với for"]} size={10} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 21: Bẫy lặp vô hạn — quên cập nhật biến điều khiển ──────────────────
function BayLapVoHan() {
  return (
    <Frame viewBox="0 0 640 300">
      <rect x="15" y="15" width="300" height="270" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["✅ ĐÚNG: có cập nhật dem"]} size={11} fill={C.mintDeep} weight={700} />

      <rect x="40" y="55" width="250" height="80" rx="8" fill={C.ink} />
      <text x="60" y="75" fontSize="10.5" fill="#8CF29B" fontFamily="monospace">dem = 5</text>
      <text x="60" y="93" fontSize="10.5" fill="#8CF29B" fontFamily="monospace">while dem &gt; 0:</text>
      <text x="80" y="111" fontSize="10.5" fill="#8CF29B" fontFamily="monospace">print(dem)</text>
      <text x="80" y="127" fontSize="10.5" fill="#FBBF24" fontFamily="monospace">dem = dem - 1</text>

      {[5, 4, 3, 2, 1].map((n, i) => (
        <circle key={n} cx={55 + i * 45} cy="165" r="16" fill={C.mint} fillOpacity="0.3" stroke={C.mintDeep} strokeWidth="1.5" />
      ))}
      {[5, 4, 3, 2, 1].map((n, i) => (
        <Lines key={n} x={55 + i * 45} y={170} lines={[String(n)]} size={11} fill={C.mintDeep} weight={700} />
      ))}
      <path d="M280,165 L300,165" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />

      <rect x="35" y="195" width="250" height="36" rx="8" fill={C.mint} fillOpacity="0.15" stroke={C.mintDeep} strokeWidth="1.3" />
      <Lines x={160} y={218} lines={["dem về 0 → điều kiện Sai → dừng lại"]} size={9.5} fill={C.mintDeep} weight={700} />

      <Lines x={165} y={255} lines={["Mỗi vòng dem giảm 1, sớm muộn"]} size={10} fill={C.inkSoft} weight={500} />
      <Lines x={165} y={271} lines={["cũng chạm điều kiện dừng"]} size={10} fill={C.inkSoft} weight={500} />

      <rect x="325" y="15" width="300" height="270" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["❌ SAI: quên cập nhật dem"]} size={11} fill={C.bubbleDeep} weight={700} />

      <rect x="350" y="55" width="250" height="80" rx="8" fill={C.ink} />
      <text x="370" y="75" fontSize="10.5" fill="#8CF29B" fontFamily="monospace">dem = 5</text>
      <text x="370" y="93" fontSize="10.5" fill="#8CF29B" fontFamily="monospace">while dem &gt; 0:</text>
      <text x="390" y="111" fontSize="10.5" fill="#8CF29B" fontFamily="monospace">print(dem)</text>
      <text x="390" y="127" fontSize="10" fill="#EF4444" fontFamily="monospace">  # thiếu dem = dem - 1</text>

      <circle cx="475" cy="180" r="34" fill="none" stroke="#DC2626" strokeWidth="3" strokeDasharray="6 4" />
      <path d="M475,146 A34,34 0 1,1 474,146" fill="none" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />
      <Lines x={475} y={185} lines={["5, 5, 5..."]} size={13} fill="#B91C1C" weight={700} />

      <rect x="350" y="225" width="250" height="42" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.4" />
      <Lines x={475} y={244} lines={["🚨 Lặp vô hạn — dem luôn = 5"]} size={9.5} fill="#B91C1C" weight={700} />
      <Lines x={475} y={260} lines={["Thoát khẩn cấp: nhấn Ctrl+C"]} size={9} fill="#B91C1C" weight={600} />
    </Frame>
  );
}

// ── Bài 21: Gấp giấy tăng dần đến khi vượt ngưỡng — while tích luỹ ──────────
function GapGiayToiNguong() {
  const steps = [0.1, 0.2, 0.4, 0.8, 1.6, 3.2, 6.4, 12.8, 25.6, 51.2];
  return (
    <Frame viewBox="0 0 640 280">
      <Lines x={320} y={26} lines={["📄 Gấp đôi một tờ giấy — độ dày tăng gấp đôi mỗi lần gấp"]} size={12} fill={C.grapeDeep} weight={700} />

      <line x1="40" y1="220" x2="620" y2="220" stroke={C.inkSoft} strokeWidth="1.5" />
      {steps.map((d, i) => {
        const h = Math.min(d * 3, 170);
        return (
          <g key={i}>
            <rect x={45 + i * 57} y={220 - h} width="42" height={h} rx="4" fill={C.grape} fillOpacity={0.25 + i * 0.06} stroke={C.grapeDeep} strokeWidth="1.2" />
            <Lines x={66 + i * 57} y={235} lines={[`${i + 1}`]} size={9} fill={C.inkSoft} weight={600} />
          </g>
        );
      })}
      <Lines x={66} y={205} lines={["0.1mm"]} size={8} fill={C.grapeDeep} weight={700} />
      <Lines x={66 + 9 * 57} y={55} lines={["51.2mm"]} size={9} fill={C.grapeDeep} weight={700} />

      <rect x="60" y="248" width="520" height="26" rx="8" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={266} lines={["while do_day <= 1000: do_day = do_day * 2; lan_gap = lan_gap + 1 — dừng khi vượt 1000mm"]} size={9.5} fill={C.ink} weight={600} />
    </Frame>
  );
}

// ── Bài 22: Danh sách là dãy ô đánh số — chỉ số bắt đầu từ 0 ────────────────
function DayHopDanhSo() {
  const items = ["Lều", "Bóng đá", "Nước", "Bánh mì"];
  return (
    <Frame viewBox="0 0 640 260">
      <Lines x={320} y={26} lines={["do_da_ngoai = [\"Lều\", \"Bóng đá\", \"Nước\", \"Bánh mì\"]"]} size={11.5} fill={C.grapeDeep} weight={700} />

      {items.map((it, i) => (
        <g key={i}>
          <rect x={70 + i * 130} y="55" width="110" height="70" rx="10" fill={C.grape} fillOpacity="0.15" stroke={C.grape} strokeWidth="2" />
          <Lines x={125 + i * 130} y={96} lines={[it]} size={12} fill={C.grapeDeep} weight={700} />
        </g>
      ))}

      {items.map((_, i) => (
        <g key={`idx${i}`}>
          <circle cx={125 + i * 130} cy="150" r="16" fill={C.mint} fillOpacity="0.25" stroke={C.mintDeep} strokeWidth="1.8" />
          <Lines x={125 + i * 130} y={155} lines={[String(i)]} size={13} fill={C.mintDeep} weight={700} />
        </g>
      ))}
      <Lines x={320} y={183} lines={["👆 chỉ số (index) — LUÔN bắt đầu từ 0"]} size={10.5} fill={C.mintDeep} weight={700} />

      {items.map((_, i) => (
        <Lines key={`ord${i}`} x={125 + i * 130} y={210} lines={[`đồ thứ ${i + 1}`]} size={9.5} fill={C.inkSoft} weight={500} />
      ))}
      <Lines x={320} y={236} lines={["😵 Cách nói tự nhiên \"thứ mấy\" (bắt đầu từ 1) lệch với chỉ số 1 đơn vị!"]} size={10} fill="#B91C1C" weight={700} />
    </Frame>
  );
}

// ── Bài 22: append() thêm vào cuối — gán chỉ số sửa đúng một ô ──────────────
function GanLaiVaAppend() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["➕ append(): thêm vào CUỐI"]} size={11.5} fill={C.mintDeep} weight={700} />

      {["Lều", "Bóng", "Nước"].map((it, i) => (
        <rect key={i} x={35 + i * 62} y="65" width="55" height="55" rx="8" fill={C.mint} fillOpacity="0.15" stroke={C.mintDeep} strokeWidth="1.5" />
      ))}
      {["Lều", "Bóng", "Nước"].map((it, i) => (
        <Lines key={`t${i}`} x={62 + i * 62} y={97} lines={[it]} size={10} fill={C.mintDeep} weight={700} />
      ))}
      <path d="M225,92 L245,92" stroke={C.mintDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />
      <rect x="222" y="65" width="55" height="55" rx="8" fill={C.sun} fillOpacity="0.25" stroke={C.sunDeep} strokeWidth="2" strokeDasharray="4 3" />
      <Lines x={250} y={97} lines={["Áo mưa"]} size={9.5} fill={C.sunDeep} weight={700} />
      <Lines x={165} y={143} lines={["do.append(\"Áo mưa\")"]} size={10.5} fill={C.ink} weight={600} />
      <Lines x={165} y={162} lines={["Danh sách dài thêm 1 ô ở cuối"]} size={9.5} fill={C.inkSoft} weight={500} />

      <rect x="30" y="190" width="270" height="45" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={165} y={210} lines={["Không cần biết vị trí — luôn"]} size={9.5} fill={C.ink} weight={600} />
      <Lines x={165} y={225} lines={["chèn vào ngay sau ô cuối cùng"]} size={9.5} fill={C.ink} weight={600} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["✏️ do[2] = ...: SỬA đúng một ô"]} size={11.5} fill={C.bubbleDeep} weight={700} />

      {["Lều", "Bóng", "Nước"].map((it, i) => (
        <rect
          key={i}
          x={345 + i * 62}
          y="65"
          width="55"
          height="55"
          rx="8"
          fill={i === 2 ? C.bubble : C.bubble}
          fillOpacity={i === 2 ? 0.3 : 0.12}
          stroke={i === 2 ? C.bubbleDeep : C.bubbleDeep}
          strokeWidth={i === 2 ? 2.5 : 1.3}
        />
      ))}
      {["Lều", "Bóng", "Nước suối"].map((it, i) => (
        <Lines key={`t${i}`} x={372 + i * 62} y={97} lines={[it]} size={i === 2 ? 8.5 : 10} fill={C.bubbleDeep} weight={700} />
      ))}
      <path d="M532,60 L532,45 L500,45" fill="none" stroke={C.bubbleDeep} strokeWidth="1.5" markerEnd="url(#arrow)" />
      <Lines x={475} y={143} lines={["do[2] = \"Nước suối\""]} size={10.5} fill={C.ink} weight={600} />
      <Lines x={475} y={162} lines={["Chỉ đúng ô chỉ số 2 bị đổi"]} size={9.5} fill={C.inkSoft} weight={500} />

      <rect x="340" y="190" width="270" height="45" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={475} y={210} lines={["Danh sách SỬA ĐƯỢC từng phần tử"]} size={9.5} fill={C.ink} weight={600} />
      <Lines x={475} y={225} lines={["(khác với xâu kí tự — không sửa được)"]} size={9.5} fill={C.ink} weight={600} />
    </Frame>
  );
}

// ── Bài 22: Duyệt lấy GIÁ TRỊ (for x in a) và duyệt lấy VỊ TRÍ (range(len)) ──
function DuyetGiaTriVsChiSo() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["for x in do: — chỉ cần GIÁ TRỊ"]} size={10.5} fill={C.mintDeep} weight={700} />

      {["Lều", "Bóng", "Nước"].map((it, i) => (
        <g key={i}>
          <rect x={35 + i * 82} y="60" width="70" height="42" rx="8" fill={C.mint} fillOpacity="0.18" stroke={C.mintDeep} strokeWidth="1.5" />
          <Lines x={70 + i * 82} y={85} lines={[it]} size={10.5} fill={C.mintDeep} weight={700} />
          {i < 2 && <path d={`M${105 + i * 82},81 L${117 + i * 82},81`} stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />}
        </g>
      ))}

      <rect x="35" y="120" width="245" height="50" rx="8" fill={C.ink} />
      <text x="47" y="140" fontSize="10" fill="#8CF29B" fontFamily="monospace">for x in do:</text>
      <text x="60" y="158" fontSize="10" fill="#8CF29B" fontFamily="monospace">print(x)</text>

      <rect x="30" y="185" width="255" height="50" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={157} y={204} lines={["Dùng khi chỉ cần đọc nội dung,"]} size={9.5} fill={C.ink} weight={600} />
      <Lines x={157} y={220} lines={["không cần biết đang ở ô số mấy"]} size={9.5} fill={C.ink} weight={600} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["for i in range(len(do)): — cần CẢ VỊ TRÍ"]} size={9.5} fill={C.bubbleDeep} weight={700} />

      {["Lều", "Bóng", "Nước"].map((it, i) => (
        <g key={i}>
          <rect x={345 + i * 82} y="60" width="70" height="42" rx="8" fill={C.bubble} fillOpacity="0.18" stroke={C.bubbleDeep} strokeWidth="1.5" />
          <Lines x={380 + i * 82} y={78} lines={[`i=${i}`]} size={9} fill={C.bubbleDeep} weight={700} />
          <Lines x={380 + i * 82} y={94} lines={[it]} size={9.5} fill={C.bubbleDeep} weight={700} />
        </g>
      ))}

      <rect x="345" y="120" width="255" height="50" rx="8" fill={C.ink} />
      <text x="357" y="140" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">for i in range(len(do)):</text>
      <text x="370" y="158" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">print(i + 1, do[i])</text>

      <rect x="340" y="185" width="255" height="50" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={467} y={204} lines={["Dùng khi cần đánh số thứ tự,"]} size={9.5} fill={C.ink} weight={600} />
      <Lines x={467} y={220} lines={["so sánh vị trí, hoặc SỬA phần tử"]} size={9.5} fill={C.ink} weight={600} />
    </Frame>
  );
}

// ── Bài 23: remove() tìm theo GIÁ TRỊ — del xoá theo VỊ TRÍ ─────────────────
function RemoveVsDel() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["🔍 remove(\"Bóng đá\") — tìm theo GIÁ TRỊ"]} size={10} fill={C.mintDeep} weight={700} />

      {["Lều", "Bóng đá", "Nước", "Bánh mì"].map((it, i) => (
        <rect
          key={i}
          x={35 + i * 62}
          y="65"
          width="55"
          height="50"
          rx="8"
          fill={it === "Bóng đá" ? C.bubble : C.mint}
          fillOpacity={it === "Bóng đá" ? 0.25 : 0.12}
          stroke={it === "Bóng đá" ? C.bubbleDeep : C.mintDeep}
          strokeWidth={it === "Bóng đá" ? 2.2 : 1.3}
        />
      ))}
      {["Lều", "Bóng đá", "Nước", "Bánh mì"].map((it, i) => (
        <Lines key={`t${i}`} x={62 + i * 62} y={93} lines={[it]} size={9} fill={it === "Bóng đá" ? C.bubbleDeep : C.mintDeep} weight={700} />
      ))}
      <Lines x={92} y={58} lines={["🔎 đi tìm..."]} size={9} fill={C.bubbleDeep} weight={700} />

      <path d="M165,120 L165,145" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="45" y="150" width="240" height="42" rx="8" fill={C.mint} fillOpacity="0.15" stroke={C.mintDeep} strokeWidth="1.5" />
      <Lines x={165} y={175} lines={["Xoá đúng ô chứa \"Bóng đá\", dù nó ở đâu"]} size={9.5} fill={C.mintDeep} weight={700} />

      <rect x="30" y="200" width="270" height="40" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={165} y={218} lines={["Không cần biết vị trí — chỉ cần biết"]} size={9} fill={C.ink} weight={600} />
      <Lines x={165} y={232} lines={["TÊN món đồ muốn bỏ"]} size={9} fill={C.ink} weight={600} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["👉 del do[1] — xoá theo VỊ TRÍ"]} size={10.5} fill={C.bubbleDeep} weight={700} />

      {["Lều", "Bóng đá", "Nước", "Bánh mì"].map((it, i) => (
        <rect
          key={i}
          x={345 + i * 62}
          y="65"
          width="55"
          height="50"
          rx="8"
          fill={i === 1 ? C.bubble : C.mint}
          fillOpacity={i === 1 ? 0.25 : 0.12}
          stroke={i === 1 ? C.bubbleDeep : C.mintDeep}
          strokeWidth={i === 1 ? 2.2 : 1.3}
        />
      ))}
      {["Lều", "Bóng đá", "Nước", "Bánh mì"].map((it, i) => (
        <Lines key={`t${i}`} x={372 + i * 62} y={93} lines={[it]} size={9} fill={i === 1 ? C.bubbleDeep : C.mintDeep} weight={700} />
      ))}
      <path d="M402,55 L402,63" stroke={C.bubbleDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <Lines x={402} y={49} lines={["👉 chỉ số 1"]} size={9} fill={C.bubbleDeep} weight={700} />

      <path d="M475,120 L475,145" stroke={C.bubbleDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="355" y="150" width="240" height="42" rx="8" fill={C.bubble} fillOpacity="0.15" stroke={C.bubbleDeep} strokeWidth="1.5" />
      <Lines x={475} y={175} lines={["Xoá bất kì thứ gì đang ở chỉ số 1"]} size={9.5} fill={C.bubbleDeep} weight={700} />

      <rect x="340" y="200" width="270" height="40" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={475} y={218} lines={["Không quan tâm giá trị — chỉ cần biết"]} size={9} fill={C.ink} weight={600} />
      <Lines x={475} y={232} lines={["VỊ TRÍ cần bỏ"]} size={9} fill={C.ink} weight={600} />
    </Frame>
  );
}

// ── Bài 23: sort() sắp xếp TẠI CHỖ — và cái bẫy a = a.sort() ────────────────
function SortTaiChoVaBay() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["✅ do.sort() — sắp xếp TẠI CHỖ"]} size={11} fill={C.mintDeep} weight={700} />

      {[3, 1, 2].map((n, i) => (
        <g key={i}>
          <rect x={50 + i * 70} y="60" width="55" height="40" rx="8" fill={C.mint} fillOpacity="0.18" stroke={C.mintDeep} strokeWidth="1.5" />
          <Lines x={77 + i * 70} y={84} lines={[String(n)]} size={14} fill={C.mintDeep} weight={700} />
        </g>
      ))}
      <path d="M165,108 L165,128" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      {[1, 2, 3].map((n, i) => (
        <g key={i}>
          <rect x={50 + i * 70} y="133" width="55" height="40" rx="8" fill={C.mint} fillOpacity="0.3" stroke={C.mintDeep} strokeWidth="1.8" />
          <Lines x={77 + i * 70} y={157} lines={[String(n)]} size={14} fill={C.mintDeep} weight={700} />
        </g>
      ))}

      <rect x="30" y="185" width="270" height="50" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={165} y={205} lines={["Danh sách GỐC bị sắp xếp lại luôn,"]} size={9.5} fill={C.ink} weight={600} />
      <Lines x={165} y={221} lines={["không tạo danh sách mới"]} size={9.5} fill={C.ink} weight={600} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke="#DC2626" strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill="#FEE2E2" />
      <Lines x={475} y={37} lines={["❌ Bẫy: do = do.sort()"]} size={11} fill="#B91C1C" weight={700} />

      <rect x="355" y="60" width="240" height="34" rx="6" fill={C.ink} />
      <text x="475" y="82" fontSize="10.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        do = do.sort()
      </text>

      <path d="M475,98 L475,118" stroke="#B91C1C" strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="420" y="123" width="110" height="40" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.8" />
      <Lines x={475} y={148} lines={["None"]} size={16} fill="#B91C1C" weight={700} />

      <rect x="340" y="180" width="270" height="55" rx="8" fill="#FEE2E2" fillOpacity="0.6" />
      <Lines x={475} y={200} lines={["sort() không TRẢ VỀ danh sách mới"]} size={9.5} fill="#B91C1C" weight={700} />
      <Lines x={475} y={216} lines={["mà trả về None — gán lại sẽ xoá sạch dữ liệu!"]} size={9} fill="#B91C1C" weight={600} />
    </Frame>
  );
}

// ── Bài 23: append() thêm nguyên 1 phần tử — extend() nối rời từng phần tử ──
function AppendVsExtend() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["📦 append([\"Đèn pin\", \"Diêm\"])"]} size={10.5} fill={C.bubbleDeep} weight={700} />

      {["Lều", "Nước"].map((it, i) => (
        <rect key={i} x={40 + i * 65} y="60" width="55" height="40" rx="8" fill={C.mint} fillOpacity="0.15" stroke={C.mintDeep} strokeWidth="1.3" />
      ))}
      {["Lều", "Nước"].map((it, i) => (
        <Lines key={`t${i}`} x={67 + i * 65} y={84} lines={[it]} size={9.5} fill={C.mintDeep} weight={700} />
      ))}
      <rect x="175" y="60" width="110" height="40" rx="8" fill={C.bubble} fillOpacity="0.3" stroke={C.bubbleDeep} strokeWidth="2" strokeDasharray="4 3" />
      <Lines x={230} y={78} lines={["[\"Đèn pin\","]} size={8.5} fill={C.bubbleDeep} weight={700} />
      <Lines x={230} y={92} lines={["\"Diêm\"]"]} size={8.5} fill={C.bubbleDeep} weight={700} />

      <rect x="30" y="115" width="255" height="50" rx="8" fill={C.bubble} fillOpacity="0.1" stroke={C.bubbleDeep} strokeWidth="1.3" />
      <Lines x={157} y={135} lines={["Cả danh sách con [\"Đèn pin\", \"Diêm\"]"]} size={9.5} fill={C.bubbleDeep} weight={700} />
      <Lines x={157} y={152} lines={["trở thành MỘT phần tử duy nhất, lồng bên trong!"]} size={9} fill={C.bubbleDeep} weight={600} />

      <rect x="30" y="175" width="255" height="55" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={157} y={196} lines={["❗ Danh sách giờ có 3 phần tử:"]} size={9.5} fill={C.ink} weight={700} />
      <Lines x={157} y={212} lines={["\"Lều\", \"Nước\", [\"Đèn pin\", \"Diêm\"]"]} size={9} fill={C.ink} weight={600} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["🧩 extend([\"Đèn pin\", \"Diêm\"])"]} size={10.5} fill={C.mintDeep} weight={700} />

      {["Lều", "Nước", "Đèn pin", "Diêm"].map((it, i) => (
        <rect
          key={i}
          x={345 + i * 62}
          y="60"
          width="55"
          height="40"
          rx="8"
          fill={i < 2 ? C.mint : C.mint}
          fillOpacity={i < 2 ? 0.15 : 0.3}
          stroke={C.mintDeep}
          strokeWidth={i < 2 ? 1.3 : 1.8}
        />
      ))}
      {["Lều", "Nước", "Đèn pin", "Diêm"].map((it, i) => (
        <Lines key={`t${i}`} x={372 + i * 62} y={82} lines={[it]} size={8.5} fill={C.mintDeep} weight={700} />
      ))}

      <rect x="340" y="115" width="255" height="50" rx="8" fill={C.mint} fillOpacity="0.1" stroke={C.mintDeep} strokeWidth="1.3" />
      <Lines x={467} y={135} lines={["Từng phần tử của danh sách con được"]} size={9.5} fill={C.mintDeep} weight={700} />
      <Lines x={467} y={152} lines={["tách rời và nối thẳng vào cuối"]} size={9} fill={C.mintDeep} weight={600} />

      <rect x="340" y="175" width="255" height="55" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={467} y={196} lines={["✅ Danh sách giờ có 4 phần tử:"]} size={9.5} fill={C.ink} weight={700} />
      <Lines x={467} y={212} lines={["\"Lều\", \"Nước\", \"Đèn pin\", \"Diêm\""]} size={9} fill={C.ink} weight={600} />
    </Frame>
  );
}

// ── Bài 23: Tìm vị trí max TRƯỚC khi sort — sort xong chỉ số đổi ý nghĩa ────
function ThuTuTruocSauSort() {
  return (
    <Frame viewBox="0 0 640 260">
      <Lines x={320} y={26} lines={["a = [7, 2, 9, 4] — tìm chỉ số của phần tử lớn nhất"]} size={11.5} fill={C.grapeDeep} weight={700} />

      <rect x="15" y="45" width="300" height="180" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <Lines x={165} y={68} lines={["1️⃣ Tìm chỉ số TRƯỚC khi sort"]} size={10.5} fill={C.mintDeep} weight={700} />
      {[7, 2, 9, 4].map((n, i) => (
        <g key={i}>
          <rect x={45 + i * 55} y="80" width="45" height="42" rx="8" fill={n === 9 ? C.mint : C.mint} fillOpacity={n === 9 ? 0.35 : 0.12} stroke={C.mintDeep} strokeWidth={n === 9 ? 2 : 1.2} />
          <Lines x={67 + i * 55} y={105} lines={[String(n)]} size={13} fill={C.mintDeep} weight={700} />
          <Lines x={67 + i * 55} y={135} lines={[`[${i}]`]} size={9} fill={C.inkSoft} weight={600} />
        </g>
      ))}
      <rect x="35" y="150" width="245" height="60" rx="8" fill={C.mint} fillOpacity="0.12" />
      <Lines x={157} y={170} lines={["a.index(max(a)) → 2"]} size={10.5} fill={C.mintDeep} weight={700} />
      <Lines x={157} y={190} lines={["✅ Đúng: giá trị lớn nhất (9) ở chỉ số 2"]} size={9.5} fill={C.mintDeep} weight={600} />

      <rect x="325" y="45" width="300" height="180" rx="16" fill={C.white} stroke="#DC2626" strokeWidth="2" />
      <Lines x={475} y={68} lines={["2️⃣ Nếu tìm SAU khi đã sort()"]} size={10.5} fill="#B91C1C" weight={700} />
      {[2, 4, 7, 9].map((n, i) => (
        <g key={i}>
          <rect x={355 + i * 55} y="80" width="45" height="42" rx="8" fill={i === 2 ? "#FEE2E2" : C.line} fillOpacity={i === 2 ? 1 : 0.4} stroke={i === 2 ? "#DC2626" : C.inkSoft} strokeWidth={i === 2 ? 2 : 1.2} />
          <Lines x={377 + i * 55} y={105} lines={[String(n)]} size={13} fill={i === 2 ? "#B91C1C" : C.ink} weight={700} />
          <Lines x={377 + i * 55} y={135} lines={[`[${i}]`]} size={9} fill={C.inkSoft} weight={600} />
        </g>
      ))}
      <rect x="345" y="150" width="245" height="60" rx="8" fill="#FEE2E2" />
      <Lines x={467} y={170} lines={["a.index(max(a)) → 3, không phải 2!"]} size={10} fill="#B91C1C" weight={700} />
      <Lines x={467} y={190} lines={["❌ Vị trí đã đổi vì sort xếp lại cả dãy"]} size={9.5} fill="#B91C1C" weight={600} />
    </Frame>
  );
}

// ── Bài 24: Danh sách SỬA được từng phần tử — xâu thì KHÔNG ─────────────────
function XauBatBien() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["✅ Danh sách: ten[0] = \"B\" — OK"]} size={10.5} fill={C.mintDeep} weight={700} />

      {["V", "y"].map((ch, i) => (
        <rect key={i} x={130 + i * 50} y="65" width="42" height="42" rx="8" fill={C.mint} fillOpacity="0.18" stroke={C.mintDeep} strokeWidth="1.5" />
      ))}
      <Lines x={151} y={91} lines={["V"]} size={16} fill={C.mintDeep} weight={700} />
      <Lines x={201} y={91} lines={["y"]} size={16} fill={C.mintDeep} weight={700} />
      <path d="M165,115 L165,135" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      {["B", "y"].map((ch, i) => (
        <rect key={i} x={130 + i * 50} y="140" width="42" height="42" rx="8" fill={C.mint} fillOpacity="0.3" stroke={C.mintDeep} strokeWidth="2" />
      ))}
      <Lines x={151} y={166} lines={["B"]} size={16} fill={C.mintDeep} weight={700} />
      <Lines x={201} y={166} lines={["y"]} size={16} fill={C.mintDeep} weight={700} />

      <rect x="30" y="195" width="270" height="42" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={165} y={212} lines={["Danh sách ['V','y'] là kiểu MUTABLE"]} size={9.5} fill={C.ink} weight={600} />
      <Lines x={165} y={227} lines={["— sửa trực tiếp từng ô được"]} size={9.5} fill={C.ink} weight={600} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke="#DC2626" strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill="#FEE2E2" />
      <Lines x={475} y={37} lines={["❌ Xâu: ten[0] = \"B\" — LỖI"]} size={10.5} fill="#B91C1C" weight={700} />

      {["V", "y"].map((ch, i) => (
        <rect key={i} x={440 + i * 50} y="65" width="42" height="42" rx="8" fill={C.bubble} fillOpacity="0.18" stroke={C.bubbleDeep} strokeWidth="1.5" />
      ))}
      <Lines x={461} y={91} lines={["V"]} size={16} fill={C.bubbleDeep} weight={700} />
      <Lines x={511} y={91} lines={["y"]} size={16} fill={C.bubbleDeep} weight={700} />
      <path d="M475,115 L475,135" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="415" y="140" width="120" height="42" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.8" />
      <Lines x={475} y={166} lines={["TypeError"]} size={13} fill="#B91C1C" weight={700} />

      <rect x="340" y="195" width="270" height="42" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={475} y={212} lines={["Xâu \"Vy\" là kiểu IMMUTABLE — muốn"]} size={9.5} fill={C.ink} weight={600} />
      <Lines x={475} y={227} lines={["\"sửa\", phải TẠO XÂU MỚI hoàn toàn"]} size={9.5} fill={C.ink} weight={600} />
    </Frame>
  );
}

// ── Bài 24: Ghép nối (+), lặp (nhân với số) và lát cắt s[a:b] ───────────────
function GhepNoiVaLatCat() {
  return (
    <Frame viewBox="0 0 640 280">
      <rect x="15" y="15" width="610" height="110" rx="16" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <Lines x={320} y={38} lines={["Ghép nối bằng + — KHÔNG tự thêm dấu cách!"]} size={11.5} fill={C.grapeDeep} weight={700} />

      <rect x="60" y="55" width="130" height="38" rx="8" fill={C.grape} fillOpacity="0.15" stroke={C.grapeDeep} strokeWidth="1.5" />
      <Lines x={125} y={79} lines={["\"Xin chào, \""]} size={10} fill={C.grapeDeep} weight={700} />
      <Lines x={205} y={79} lines={["+"]} size={16} fill={C.ink} weight={700} />
      <rect x="225" y="55" width="60" height="38" rx="8" fill={C.mint} fillOpacity="0.2" stroke={C.mintDeep} strokeWidth="1.5" />
      <Lines x={255} y={79} lines={["\"Vy\""]} size={10} fill={C.mintDeep} weight={700} />
      <path d="M290,74 L320,74" stroke={C.ink} strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="325" y="55" width="200" height="38" rx="8" fill={C.line} fillOpacity="0.4" />
      <Lines x={425} y={79} lines={["\"Xin chào, Vy\" — liền một mạch"]} size={10} fill={C.ink} weight={700} />

      <Lines x={320} y={112} lines={["Quên khoảng trắng trong xâu đầu → dính chữ luôn, Python không tự sửa giúp"]} size={9.5} fill="#B91C1C" weight={600} />

      <Lines x={320} y={148} lines={["Lát cắt s[0:3] — lấy từ chỉ số 0 đến TRƯỚC 3 (giống range())"]} size={11.5} fill={C.bubbleDeep} weight={700} />
      {["P", "y", "t", "h", "o", "n"].map((ch, i) => (
        <g key={i}>
          <rect
            x={220 + i * 40}
            y="165"
            width="35"
            height="40"
            rx="6"
            fill={i < 3 ? C.bubble : C.line}
            fillOpacity={i < 3 ? 0.3 : 0.3}
            stroke={i < 3 ? C.bubbleDeep : C.inkSoft}
            strokeWidth={i < 3 ? 2 : 1.2}
          />
          <Lines x={237 + i * 40} y={190} lines={[ch]} size={15} fill={i < 3 ? C.bubbleDeep : C.inkSoft} weight={700} />
          <Lines x={237 + i * 40} y={220} lines={[String(i)]} size={9} fill={C.inkSoft} weight={600} />
        </g>
      ))}
      <rect x="180" y="235" width="280" height="34" rx="8" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={320} y={257} lines={["s[0:3] → \"Pyt\" — chỉ số 3 (\"h\") KHÔNG được lấy"]} size={10} fill={C.bubbleDeep} weight={700} />
    </Frame>
  );
}

// ── Bài 24: So sánh xâu theo thứ tự từ điển — từng kí tự một, không theo độ dài ─
function SoSanhXau() {
  return (
    <Frame viewBox="0 0 640 220">
      <Lines x={320} y={28} lines={["\"an\" < \"b\" → True — so sánh từng kí tự, KHÔNG so theo độ dài"]} size={12} fill={C.grapeDeep} weight={700} />

      <rect x="60" y="55" width="220" height="90" rx="14" fill={C.mint} fillOpacity="0.12" stroke={C.mintDeep} strokeWidth="1.8" />
      {["a", "n"].map((ch, i) => (
        <g key={i}>
          <rect x={110 + i * 55} y="80" width="45" height="42" rx="8" fill={C.mint} fillOpacity="0.3" stroke={C.mintDeep} strokeWidth="1.8" />
          <Lines x={132 + i * 55} y={106} lines={[ch]} size={17} fill={C.mintDeep} weight={700} />
        </g>
      ))}
      <Lines x={170} y={70} lines={["\"an\""]} size={11} fill={C.mintDeep} weight={700} />

      <rect x="360" y="55" width="220" height="90" rx="14" fill={C.bubble} fillOpacity="0.12" stroke={C.bubbleDeep} strokeWidth="1.8" />
      <rect x={438} y="80" width="45" height="42" rx="8" fill={C.bubble} fillOpacity="0.3" stroke={C.bubbleDeep} strokeWidth="1.8" />
      <Lines x={460} y={106} lines={["b"]} size={17} fill={C.bubbleDeep} weight={700} />
      <Lines x={460} y={70} lines={["\"b\""]} size={11} fill={C.bubbleDeep} weight={700} />

      <path d="M155,101 L438,101" fill="none" stroke={C.grapeDeep} strokeWidth="2" strokeDasharray="5 4" />
      <Lines x={297} y={90} lines={["so \"a\" với \"b\" trước tiên"]} size={10} fill={C.grapeDeep} weight={700} />

      <rect x="150" y="165" width="340" height="45" rx="10" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={185} lines={["\"a\" đứng trước \"b\" trong bảng chữ cái → \"an\" nhỏ hơn"]} size={10.5} fill={C.ink} weight={700} />
      <Lines x={320} y={200} lines={["→ dừng so sánh ngay, không cần xét tới kí tự \"n\" hay độ dài"]} size={9.5} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 25: find() trả về -1 an toàn — index() của danh sách báo lỗi ────────
function FindVsIndex() {
  return (
    <Frame viewBox="0 0 640 240">
      <rect x="15" y="15" width="300" height="210" rx="16" fill={C.white} stroke="#DC2626" strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill="#FEE2E2" />
      <Lines x={165} y={37} lines={["📋 ds.index(\"Khang\") — không có trong danh sách"]} size={9.5} fill="#B91C1C" weight={700} />

      <rect x="40" y="60" width="240" height="34" rx="6" fill={C.ink} />
      <text x="160" y="82" fontSize="10.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        ds = [&quot;An&quot;, &quot;Bình&quot;, &quot;Chi&quot;]
      </text>
      <path d="M160,98 L160,118" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="90" y="123" width="140" height="42" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.8" />
      <Lines x={160} y={150} lines={["🚫 ValueError"]} size={13} fill="#B91C1C" weight={700} />

      <rect x="30" y="175" width="260" height="42" rx="8" fill="#FEE2E2" fillOpacity="0.6" />
      <Lines x={160} y={193} lines={["Chương trình DỪNG LẠI ngay lập tức"]} size={9.5} fill="#B91C1C" weight={700} />
      <Lines x={160} y={209} lines={["nếu không kiểm tra trước bằng \"in\""]} size={9} fill="#B91C1C" weight={600} />

      <rect x="325" y="15" width="300" height="210" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["📝 dk.find(\"Khang\") — không có trong xâu"]} size={9.5} fill={C.mintDeep} weight={700} />

      <rect x="350" y="60" width="240" height="34" rx="6" fill={C.ink} />
      <text x="470" y="82" fontSize="10.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        dk = &quot;An, Bình, Chi&quot;
      </text>
      <path d="M470,98 L470,118" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="410" y="123" width="120" height="42" rx="8" fill={C.mint} fillOpacity="0.2" stroke={C.mintDeep} strokeWidth="1.8" />
      <Lines x={470} y={150} lines={["-1"]} size={16} fill={C.mintDeep} weight={700} />

      <rect x="340" y="175" width="260" height="42" rx="8" fill={C.mint} fillOpacity="0.1" />
      <Lines x={470} y={193} lines={["Chương trình VẪN CHẠY TIẾP bình thường"]} size={9.5} fill={C.mintDeep} weight={700} />
      <Lines x={470} y={209} lines={["-1 nghĩa là \"không tìm thấy\", không phải lỗi"]} size={9} fill={C.mintDeep} weight={600} />
    </Frame>
  );
}

// ── Bài 25: split() tách thành danh sách — join() ghép ngược trở lại ────────
function SplitVaJoin() {
  return (
    <Frame viewBox="0 0 640 260">
      <Lines x={320} y={26} lines={["split() và join() — hai phép biến đổi ngược chiều nhau"]} size={12.5} fill={C.grapeDeep} weight={700} />

      <rect x="40" y="55" width="220" height="42" rx="8" fill={C.mint} fillOpacity="0.15" stroke={C.mintDeep} strokeWidth="1.5" />
      <Lines x={150} y={80} lines={["\"An, Bình, Chi\""]} size={12} fill={C.mintDeep} weight={700} />

      <path d="M150,100 L150,125" stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />
      <Lines x={200} y={116} lines={[".split(\", \")"]} size={10} fill={C.grapeDeep} weight={700} anchor="start" />

      {["An", "Bình", "Chi"].map((it, i) => (
        <rect key={i} x={60 + i * 65} y="130" width="55" height="36" rx="6" fill={C.mint} fillOpacity="0.25" stroke={C.mintDeep} strokeWidth="1.5" />
      ))}
      {["An", "Bình", "Chi"].map((it, i) => (
        <Lines key={`t${i}`} x={87 + i * 65} y={152} lines={[it]} size={10} fill={C.mintDeep} weight={700} />
      ))}
      <Lines x={150} y={182} lines={["→ một DANH SÁCH 3 phần tử"]} size={9.5} fill={C.inkSoft} weight={600} />

      <path d="M420,150 L370,150" stroke={C.bubbleDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />
      <Lines x={395} y={135} lines={["\", \".join(...)"]} size={10} fill={C.bubbleDeep} weight={700} />

      {["An", "Bình", "Chi"].map((it, i) => (
        <rect key={i} x={430 + i * 65} y="130" width="55" height="36" rx="6" fill={C.bubble} fillOpacity="0.2" stroke={C.bubbleDeep} strokeWidth="1.5" />
      ))}
      {["An", "Bình", "Chi"].map((it, i) => (
        <Lines key={`t${i}`} x={457 + i * 65} y={152} lines={[it]} size={10} fill={C.bubbleDeep} weight={700} />
      ))}

      <path d="M550,125 L550,100" stroke={C.bubbleDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />
      <rect x="440" y="55" width="220" height="42" rx="8" fill={C.bubble} fillOpacity="0.15" stroke={C.bubbleDeep} strokeWidth="1.5" />
      <Lines x={550} y={80} lines={["\"An, Bình, Chi\""]} size={12} fill={C.bubbleDeep} weight={700} />

      <rect x="60" y="205" width="520" height="42" rx="10" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={224} lines={["split() luôn trả về DANH SÁCH — join() cần một xâu nối đứng trước dấu chấm"]} size={10} fill={C.ink} weight={700} />
      <Lines x={320} y={240} lines={["ví dụ \", \".join(danh_sach), không phải danh_sach.join(...)"]} size={9.5} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 25: strip() chỉ cắt HAI ĐẦU — giữa xâu không đụng tới ───────────────
function StripChiHaiDau() {
  return (
    <Frame viewBox="0 0 640 220">
      <Lines x={320} y={26} lines={["\"   Vy   Anh   \".strip() — chỉ dọn khoảng trắng ở HAI ĐẦU"]} size={11.5} fill={C.grapeDeep} weight={700} />

      <rect x="60" y="55" width="60" height="40" rx="6" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 2" />
      <Lines x={90} y={78} lines={["␣␣␣"]} size={11} fill="#B91C1C" weight={700} />
      <rect x="120" y="55" width="60" height="40" rx="6" fill={C.mint} fillOpacity="0.2" stroke={C.mintDeep} strokeWidth="1.5" />
      <Lines x={150} y={78} lines={["Vy"]} size={13} fill={C.mintDeep} weight={700} />
      <rect x="180" y="55" width="70" height="40" rx="6" fill={C.sun} fillOpacity="0.2" stroke={C.sunDeep} strokeWidth="1.5" />
      <Lines x={215} y={78} lines={["␣␣␣"]} size={11} fill={C.sunDeep} weight={700} />
      <rect x="250" y="55" width="70" height="40" rx="6" fill={C.mint} fillOpacity="0.2" stroke={C.mintDeep} strokeWidth="1.5" />
      <Lines x={285} y={78} lines={["Anh"]} size={13} fill={C.mintDeep} weight={700} />
      <rect x="320" y="55" width="60" height="40" rx="6" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 2" />
      <Lines x={350} y={78} lines={["␣␣␣"]} size={11} fill="#B91C1C" weight={700} />

      <Lines x={90} y={112} lines={["❌ bị cắt"]} size={9} fill="#B91C1C" weight={700} />
      <Lines x={215} y={112} lines={["✅ vẫn giữ nguyên!"]} size={9} fill={C.sunDeep} weight={700} />
      <Lines x={350} y={112} lines={["❌ bị cắt"]} size={9} fill="#B91C1C" weight={700} />

      <path d="M215,130 L215,150" stroke={C.grapeDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="150" y="155" width="130" height="40" rx="6" fill={C.mint} fillOpacity="0.15" stroke={C.mintDeep} strokeWidth="1.5" />
      <Lines x={215} y={180} lines={["\"Vy   Anh\""]} size={12} fill={C.mintDeep} weight={700} />

      <rect x="360" y="60" width="260" height="140" rx="10" fill={C.line} fillOpacity="0.3" />
      <Lines x={490} y={85} lines={["📌 strip() chỉ đụng tới"]} size={10.5} fill={C.ink} weight={700} />
      <Lines x={490} y={103} lines={["khoảng trắng ở ĐẦU và CUỐI"]} size={10.5} fill={C.ink} weight={700} />
      <Lines x={490} y={128} lines={["Khoảng trắng THỪA ở giữa"]} size={9.5} fill={C.inkSoft} weight={500} />
      <Lines x={490} y={144} lines={["(như giữa \"Vy\" và \"Anh\")"]} size={9.5} fill={C.inkSoft} weight={500} />
      <Lines x={490} y={160} lines={["vẫn còn nguyên sau strip()"]} size={9.5} fill={C.inkSoft} weight={500} />
      <Lines x={490} y={182} lines={["Muốn dọn cả giữa, dùng replace"]} size={9} fill={C.grapeDeep} weight={600} />
    </Frame>
  );
}

// ── Bài 25: Chuẩn hoá dữ liệu đăng kí — kết hợp strip + title + replace ─────
function ChuanHoaDuLieu() {
  const steps = [
    { code: 'ten = "   nguyễn  văn A  "', out: "   nguyễn  văn A  ", label: "Dữ liệu gõ vội, lộn xộn" },
    { code: "ten = ten.strip()", out: "nguyễn  văn A", label: "Cắt khoảng trắng 2 đầu" },
    { code: "ten = ten.title()", out: "Nguyễn  Văn A", label: "Viết hoa đầu mỗi từ" },
  ];
  return (
    <Frame viewBox="0 0 640 260">
      <Lines x={320} y={26} lines={["🧹 Ba bước làm sạch một phiếu đăng kí lộn xộn"]} size={12.5} fill={C.grapeDeep} weight={700} />

      {steps.map((s, i) => (
        <g key={i}>
          <rect x={20 + i * 210} y="50" width="190" height="150" rx="12" fill={C.white} stroke={C.grape} strokeWidth="1.6" />
          <Lines x={115 + i * 210} y={72} lines={[`Bước ${i + 1}`]} size={10} fill={C.grapeDeep} weight={700} />
          <rect x={32 + i * 210} y="82" width="156" height="30" rx="6" fill={C.ink} />
          <text x={110 + i * 210} y="101" fontSize="8.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
            {s.code}
          </text>
          <rect x={32 + i * 210} y="122" width="156" height="46" rx="8" fill={C.mint} fillOpacity="0.15" stroke={C.mintDeep} strokeWidth="1.3" />
          <text x={110 + i * 210} y="150" fontSize="10" fill={C.mintDeep} fontFamily="monospace" textAnchor="middle">
            &quot;{s.out}&quot;
          </text>
          <Lines x={115 + i * 210} y={185} lines={[s.label]} size={8.5} fill={C.inkSoft} weight={500} />
          {i < 2 && <path d={`M${212 + i * 210},125 L${228 + i * 210},125`} stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />}
        </g>
      ))}

      <rect x="60" y="215" width="520" height="35" rx="8" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={237} lines={["Mỗi bước đều phải GÁN LẠI (ten = ten...) vì xâu là kiểu bất biến"]} size={10} fill={C.ink} weight={700} />
    </Frame>
  );
}

// ── Bài 26: def chỉ VIẾT công thức — gọi hàm mới thực sự THỰC THI ───────────
function DinhNghiaVsGoiHam() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.grape} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["📜 def tinh_tien(...): — chỉ VIẾT công thức"]} size={9.5} fill={C.grapeDeep} weight={700} />

      <rect x="45" y="60" width="240" height="90" rx="10" fill={C.white} stroke={C.grape} strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="60" y="82" fontSize="10" fill={C.grapeDeep} fontFamily="monospace">def tinh_tien(sl, dg):</text>
      <text x="75" y="100" fontSize="10" fill={C.grapeDeep} fontFamily="monospace">return sl * dg</text>
      <Lines x={165} y={130} lines={["📋 Một tấm \"công thức\" treo sẵn"]} size={9.5} fill={C.inkSoft} weight={600} />

      <rect x="45" y="160" width="240" height="65" rx="8" fill={C.line} fillOpacity="0.3" />
      <Lines x={165} y={182} lines={["Chưa hề tính toán gì cả —"]} size={9.5} fill={C.ink} weight={700} />
      <Lines x={165} y={198} lines={["chỉ đang \"đăng kí\" tên và các bước"]} size={9.5} fill={C.ink} weight={600} />
      <Lines x={165} y={213} lines={["làm để dành, chờ khi nào cần"]} size={9.5} fill={C.ink} weight={600} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["🍳 tinh_tien(3, 5000) — GỌI mới THỰC THI"]} size={9.5} fill={C.mintDeep} weight={700} />

      <rect x="360" y="60" width="230" height="42" rx="8" fill={C.ink} />
      <text x="475" y="86" fontSize="10.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        tinh_tien(3, 5000)
      </text>
      <path d="M475,102 L475,122" stroke={C.mintDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />
      <rect x="425" y="127" width="100" height="40" rx="8" fill={C.mint} fillOpacity="0.25" stroke={C.mintDeep} strokeWidth="1.8" />
      <Lines x={475} y={152} lines={["15000"]} size={14} fill={C.mintDeep} weight={700} />

      <rect x="345" y="180" width="260" height="50" rx="8" fill={C.mint} fillOpacity="0.1" />
      <Lines x={475} y={200} lines={["Đúng lúc này thân hàm mới thực sự"]} size={9.5} fill={C.mintDeep} weight={700} />
      <Lines x={475} y={216} lines={["chạy: sl × dg = 3 × 5000 = 15000"]} size={9.5} fill={C.mintDeep} weight={600} />
    </Frame>
  );
}

// ── Bài 26: print() chỉ hiện lên màn hình — return đưa giá trị VỀ để dùng tiếp ──
function ReturnVsPrint() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["🖨️ print(x * 2) — CHỈ hiện lên màn hình"]} size={9.5} fill={C.bubbleDeep} weight={700} />

      <rect x="45" y="62" width="240" height="40" rx="8" fill={C.ink} />
      <text x="165" y="86" fontSize="10.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        def cach1(x): print(x * 2)
      </text>
      <path d="M165,106 L165,126" stroke={C.bubbleDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="120" y="131" width="90" height="36" rx="18" fill={C.bubble} fillOpacity="0.2" stroke={C.bubbleDeep} strokeWidth="1.5" />
      <Lines x={165} y={153} lines={["📺 màn hình"]} size={9.5} fill={C.bubbleDeep} weight={700} />
      <Lines x={165} y={180} lines={["Điểm DỪNG — giá trị hiện ra rồi"]} size={9.5} fill="#B91C1C" weight={700} />
      <Lines x={165} y={196} lines={["biến mất, không lấy lại được"]} size={9.5} fill="#B91C1C" weight={600} />

      <rect x="45" y="205" width="240" height="30" rx="6" fill="#FEE2E2" />
      <Lines x={165} y={224} lines={["kq = cach1(5) → kq nhận None!"]} size={9.5} fill="#B91C1C" weight={700} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["↩️ return x * 2 — đưa giá trị VỀ"]} size={10} fill={C.mintDeep} weight={700} />

      <rect x="355" y="62" width="240" height="40" rx="8" fill={C.ink} />
      <text x="475" y="86" fontSize="10.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        def cach2(x): return x * 2
      </text>
      <path d="M475,106 L475,126" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="430" y="131" width="90" height="36" rx="8" fill={C.mint} fillOpacity="0.25" stroke={C.mintDeep} strokeWidth="1.8" />
      <Lines x={475} y={153} lines={["kq = 10"]} size={11} fill={C.mintDeep} weight={700} />

      <Lines x={475} y={180} lines={["Giá trị bay THẲNG về nơi gọi —"]} size={9.5} fill={C.mintDeep} weight={700} />
      <Lines x={475} y={196} lines={["dùng tiếp được trong biểu thức khác"]} size={9.5} fill={C.mintDeep} weight={600} />

      <rect x="355" y="205" width="240" height="30" rx="6" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={224} lines={["print(kq + 10) → in ra 20 ✅"]} size={9.5} fill={C.mintDeep} weight={700} />
    </Frame>
  );
}

// ── Bài 26: return kết thúc hàm ngay — lệnh phía sau không bao giờ chạy ─────
function ReturnKetThucHam() {
  return (
    <Frame viewBox="0 0 640 240">
      <Lines x={320} y={26} lines={["def binh_phuong(x): — lệnh nào sau return sẽ KHÔNG BAO GIỜ chạy"]} size={11.5} fill={C.grapeDeep} weight={700} />

      <rect x="120" y="50" width="400" height="46" rx="8" fill={C.ink} />
      <text x="140" y="78" fontSize="11" fill="#8CF29B" fontFamily="monospace">return x * x</text>
      <Lines x={480} y={78} lines={["← 🛑 hàm DỪNG ở đây, trả 25 về ngay"]} size={9.5} fill={C.mintDeep} weight={700} anchor="start" />

      <path d="M320,96 L320,116" stroke="#B91C1C" strokeWidth="2.5" strokeDasharray="4 3" />
      <rect x="120" y="120" width="400" height="46" rx="8" fill="#FEE2E2" fillOpacity="0.6" />
      <text x="140" y="148" fontSize="11" fill="#B91C1C" fontFamily="monospace" opacity="0.5">print(&quot;Tính xong&quot;)</text>
      <Lines x={480} y={148} lines={["← ❌ không bao giờ được thực hiện"]} size={9.5} fill="#B91C1C" weight={700} anchor="start" />

      <rect x="120" y="180" width="400" height="45" rx="10" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={200} lines={["print(binh_phuong(5)) chỉ in ra 25 — dòng \"Tính xong\""]} size={10} fill={C.ink} weight={700} />
      <Lines x={320} y={216} lines={["là \"code chết\", muốn chạy phải đặt TRƯỚC return"]} size={9.5} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 27: Tham số (ô trống trong công thức) và đối số (giá trị điền vào) ──
function ThamSoVsDoiSo() {
  return (
    <Frame viewBox="0 0 640 240">
      <rect x="15" y="15" width="300" height="210" rx="16" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.grape} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["📐 THAM SỐ — ô trống trong định nghĩa"]} size={9.5} fill={C.grapeDeep} weight={700} />

      <rect x="40" y="65" width="240" height="40" rx="8" fill={C.ink} />
      <text x="160" y="90" fontSize="10.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        def tinh_tien(sl, dg):
      </text>
      <rect x="107" y="70" width="24" height="20" rx="4" fill={C.grape} fillOpacity="0.4" stroke={C.grapeDeep} strokeWidth="1.3" />
      <rect x="140" y="70" width="24" height="20" rx="4" fill={C.grape} fillOpacity="0.4" stroke={C.grapeDeep} strokeWidth="1.3" />

      <rect x="40" y="120" width="240" height="80" rx="8" fill={C.grape} fillOpacity="0.08" />
      <Lines x={160} y={142} lines={["sl, dg chỉ là hai cái TÊN đại diện"]} size={9.5} fill={C.grapeDeep} weight={700} />
      <Lines x={160} y={160} lines={["— giống hai ô trống chờ được điền"]} size={9.5} fill={C.inkSoft} weight={600} />
      <Lines x={160} y={178} lines={["giá trị mỗi khi hàm được gọi"]} size={9.5} fill={C.inkSoft} weight={600} />

      <rect x="325" y="15" width="300" height="210" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["🔢 ĐỐI SỐ — giá trị thật khi gọi"]} size={9.5} fill={C.mintDeep} weight={700} />

      <rect x="350" y="65" width="240" height="40" rx="8" fill={C.ink} />
      <text x="470" y="90" fontSize="10.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        tinh_tien(3, 5000)
      </text>
      <rect x="417" y="70" width="16" height="20" rx="4" fill={C.mint} fillOpacity="0.5" stroke={C.mintDeep} strokeWidth="1.3" />
      <rect x="445" y="70" width="36" height="20" rx="4" fill={C.mint} fillOpacity="0.5" stroke={C.mintDeep} strokeWidth="1.3" />

      <rect x="350" y="120" width="240" height="80" rx="8" fill={C.mint} fillOpacity="0.1" />
      <Lines x={470} y={142} lines={["3 và 5000 là dữ liệu CỤ THỂ"]} size={9.5} fill={C.mintDeep} weight={700} />
      <Lines x={470} y={160} lines={["— điền vào đúng thứ tự: sl = 3,"]} size={9.5} fill={C.inkSoft} weight={600} />
      <Lines x={470} y={178} lines={["dg = 5000 (theo vị trí, không theo tên)"]} size={9.5} fill={C.inkSoft} weight={600} />
    </Frame>
  );
}

// ── Bài 27: Đổi thứ tự đối số — kết quả sai mà KHÔNG hề báo lỗi ─────────────
function ThuTuDoiSoQuanTrong() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["✅ con_lai(tong_quy, da_chi) — đúng thứ tự"]} size={9} fill={C.mintDeep} weight={700} />

      <rect x="35" y="60" width="260" height="34" rx="6" fill={C.ink} />
      <text x="165" y="82" fontSize="10" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        con_lai(500000, 200000)
      </text>
      <path d="M165,98 L165,118" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="115" y="123" width="100" height="38" rx="8" fill={C.mint} fillOpacity="0.25" stroke={C.mintDeep} strokeWidth="1.8" />
      <Lines x={165} y={147} lines={["300000"]} size={13} fill={C.mintDeep} weight={700} />

      <rect x="30" y="175" width="270" height="55" rx="8" fill={C.mint} fillOpacity="0.1" />
      <Lines x={165} y={195} lines={["tong_quy = 500000, da_chi = 200000"]} size={9} fill={C.mintDeep} weight={700} />
      <Lines x={165} y={212} lines={["→ quỹ còn dư 300000, hợp lí!"]} size={9} fill={C.mintDeep} weight={600} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke="#DC2626" strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill="#FEE2E2" />
      <Lines x={475} y={37} lines={["❌ con_lai(da_chi, tong_quy) — lỡ đảo chỗ"]} size={9} fill="#B91C1C" weight={700} />

      <rect x="345" y="60" width="260" height="34" rx="6" fill={C.ink} />
      <text x="475" y="82" fontSize="10" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        con_lai(200000, 500000)
      </text>
      <path d="M475,98 L475,118" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="415" y="123" width="120" height="38" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.8" />
      <Lines x={475} y={147} lines={["-300000"]} size={13} fill="#B91C1C" weight={700} />

      <rect x="340" y="175" width="270" height="55" rx="8" fill="#FEE2E2" fillOpacity="0.6" />
      <Lines x={475} y={195} lines={["Không hề có lỗi cú pháp nào —"]} size={9} fill="#B91C1C" weight={700} />
      <Lines x={475} y={212} lines={["chỉ ra một con số ÂM vô lí, dễ bỏ sót!"]} size={9} fill="#B91C1C" weight={600} />
    </Frame>
  );
}

// ── Bài 27: Trả về nhiều giá trị cùng lúc — và lời gọi hàm lồng nhau ────────
function NhieuGiaTriTraVeVaLongNhau() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.grape} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.grape} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["🎁 return a, b — trả về HAI giá trị"]} size={10} fill={C.grapeDeep} weight={700} />

      <rect x="35" y="60" width="260" height="34" rx="6" fill={C.ink} />
      <text x="165" y="82" fontSize="9.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        return tong, con_lai
      </text>
      <path d="M120,98 L100,118" stroke={C.grapeDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M210,98 L230,118" stroke={C.grapeDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="55" y="123" width="90" height="36" rx="8" fill={C.grape} fillOpacity="0.2" stroke={C.grapeDeep} strokeWidth="1.5" />
      <Lines x={100} y={146} lines={["t = 500000"]} size={9} fill={C.grapeDeep} weight={700} />
      <rect x="185" y="123" width="90" height="36" rx="8" fill={C.grape} fillOpacity="0.2" stroke={C.grapeDeep} strokeWidth="1.5" />
      <Lines x={230} y={146} lines={["h = 300000"]} size={9} fill={C.grapeDeep} weight={700} />

      <rect x="30" y="175" width="270" height="55" rx="8" fill={C.line} fillOpacity="0.35" />
      <Lines x={165} y={195} lines={["t, h = quy_va_con_lai(...)"]} size={9.5} fill={C.ink} weight={700} />
      <Lines x={165} y={212} lines={["nhận đủ 2 giá trị vào 2 biến cùng lúc"]} size={9} fill={C.inkSoft} weight={500} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["🪆 f(f(3)) — gọi hàm lồng nhau"]} size={10} fill={C.bubbleDeep} weight={700} />

      <rect x="400" y="60" width="150" height="32" rx="16" fill={C.bubble} fillOpacity="0.15" stroke={C.bubbleDeep} strokeWidth="1.5" />
      <Lines x={475} y={81} lines={["f(3)"]} size={11} fill={C.bubbleDeep} weight={700} />
      <path d="M475,92 L475,110" stroke={C.bubbleDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <Lines x={510} y={104} lines={["tính trước"]} size={8.5} fill={C.bubbleDeep} weight={600} anchor="start" />
      <rect x="415" y="115" width="120" height="32" rx="16" fill={C.bubble} fillOpacity="0.3" stroke={C.bubbleDeep} strokeWidth="1.8" />
      <Lines x={475} y={136} lines={["kết quả = 6"]} size={10} fill={C.bubbleDeep} weight={700} />
      <path d="M475,147 L475,165" stroke={C.bubbleDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <Lines x={520} y={159} lines={["rồi tính f(6)"]} size={8.5} fill={C.bubbleDeep} weight={600} anchor="start" />
      <rect x="430" y="170" width="90" height="34" rx="8" fill={C.bubble} fillOpacity="0.4" stroke={C.bubbleDeep} strokeWidth="2" />
      <Lines x={475} y={192} lines={["f(f(3)) = 12"]} size={10} fill={C.bubbleDeep} weight={700} />

      <rect x="340" y="212" width="270" height="20" rx="6" fill={C.line} fillOpacity="0.35" />
      <Lines x={475} y={226} lines={["Hàm bên trong luôn được tính XONG trước"]} size={8.5} fill={C.ink} weight={600} />
    </Frame>
  );
}

// ── Bài 28: Biến cục bộ — sinh ra và mất đi cùng "phòng riêng" của hàm ──────
function BienCucBoPhongRieng() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" strokeDasharray="6 4" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["🚪 Trong hàm dien_tich(r) — phòng riêng"]} size={9.5} fill={C.mintDeep} weight={700} />

      <rect x="45" y="60" width="240" height="34" rx="6" fill={C.ink} />
      <text x="165" y="82" fontSize="10" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        dt = 3.14 * r * r
      </text>
      <path d="M165,98 L165,118" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="120" y="123" width="90" height="36" rx="8" fill={C.mint} fillOpacity="0.25" stroke={C.mintDeep} strokeWidth="1.8" />
      <Lines x={165} y={146} lines={["dt"]} size={13} fill={C.mintDeep} weight={700} />

      <rect x="30" y="175" width="270" height="60" rx="8" fill={C.mint} fillOpacity="0.1" />
      <Lines x={165} y={195} lines={["Hàm kết thúc → \"phòng\" đóng lại"]} size={9.5} fill={C.mintDeep} weight={700} />
      <Lines x={165} y={212} lines={["— biến dt biến mất hoàn toàn,"]} size={9} fill={C.inkSoft} weight={500} />
      <Lines x={165} y={227} lines={["không còn tồn tại ở đâu nữa"]} size={9} fill={C.inkSoft} weight={500} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke="#DC2626" strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill="#FEE2E2" />
      <Lines x={475} y={37} lines={["❌ Ngoài hàm — không thấy \"phòng riêng\""]} size={9} fill="#B91C1C" weight={700} />

      <rect x="355" y="60" width="240" height="34" rx="6" fill={C.ink} />
      <text x="475" y="82" fontSize="10.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        print(dt)
      </text>
      <path d="M475,98 L475,118" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="415" y="123" width="120" height="40" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.8" />
      <Lines x={475} y={148} lines={["🚫 NameError"]} size={12} fill="#B91C1C" weight={700} />

      <rect x="340" y="175" width="270" height="60" rx="8" fill="#FEE2E2" fillOpacity="0.6" />
      <Lines x={475} y={195} lines={["dt chỉ tồn tại BÊN TRONG hàm"]} size={9.5} fill="#B91C1C" weight={700} />
      <Lines x={475} y={212} lines={["dien_tich — ở ngoài, cái tên này"]} size={9} fill="#B91C1C" weight={600} />
      <Lines x={475} y={227} lines={["chưa từng được định nghĩa"]} size={9} fill="#B91C1C" weight={600} />
    </Frame>
  );
}

// ── Bài 28: Gán trong hàm tạo biến cục bộ MỚI — không đụng tới biến toàn cục ──
function BayCheBienToanCuc() {
  return (
    <Frame viewBox="0 0 640 300">
      <rect x="220" y="10" width="200" height="34" rx="10" fill={C.grape} fillOpacity="0.15" stroke={C.grape} strokeWidth="1.8" />
      <Lines x={320} y={32} lines={["🌍 Khu vực chung: quy = 500000"]} size={10.5} fill={C.grapeDeep} weight={700} />

      <rect x="15" y="60" width="300" height="230" rx="16" fill={C.white} stroke="#DC2626" strokeWidth="2" strokeDasharray="6 4" />
      <rect x="15" y="60" width="300" height="32" rx="16" fill="#FEE2E2" />
      <Lines x={165} y={81} lines={["❌ Thiếu global — bị \"che\""]} size={10} fill="#B91C1C" weight={700} />

      <rect x="40" y="100" width="250" height="34" rx="6" fill={C.ink} />
      <text x="165" y="122" fontSize="9.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        quy = quy - 100000
      </text>
      <path d="M165,138 L165,155" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
      <rect x="90" y="160" width="150" height="36" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.6" />
      <Lines x={165} y={183} lines={["quy (cục bộ, MỚI)"]} size={9} fill="#B91C1C" weight={700} />

      <path d="M165,196 L165,215" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="180" y="210" fontSize="14" fill="#DC2626">🧱</text>
      <Lines x={165} y={230} lines={["Bức tường — không liên quan gì"]} size={8.5} fill="#B91C1C" weight={600} />
      <Lines x={165} y={244} lines={["tới quy toàn cục ở trên!"]} size={8.5} fill="#B91C1C" weight={600} />

      <rect x="30" y="255" width="270" height="26" rx="6" fill="#FEE2E2" fillOpacity="0.7" />
      <Lines x={165} y={272} lines={["Ra ngoài: quy toàn cục vẫn là 500000"]} size={9} fill="#B91C1C" weight={700} />

      <rect x="325" y="60" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="60" width="300" height="32" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={81} lines={["✅ Có global quy — thông cửa"]} size={10} fill={C.mintDeep} weight={700} />

      <rect x="350" y="100" width="250" height="34" rx="6" fill={C.ink} />
      <text x="475" y="122" fontSize="9.5" fill="#8CF29B" fontFamily="monospace" textAnchor="middle">
        global quy; quy -= 100000
      </text>
      <path d="M475,138 L475,155" stroke={C.mintDeep} strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M475,158 L320,30" fill="none" stroke={C.mintDeep} strokeWidth="1.8" strokeDasharray="4 3" markerEnd="url(#arrow)" />
      <Lines x={475} y={175} lines={["🚪 cửa mở thẳng tới"]} size={9} fill={C.mintDeep} weight={700} />
      <Lines x={475} y={190} lines={["biến quy toàn cục ở trên"]} size={9} fill={C.mintDeep} weight={700} />

      <rect x="340" y="255" width="270" height="26" rx="6" fill={C.mint} fillOpacity="0.15" />
      <Lines x={475} y={272} lines={["Ra ngoài: quy toàn cục đổi thành 400000"]} size={9} fill={C.mintDeep} weight={700} />
    </Frame>
  );
}

// ── Bài 28: Mỗi hàm là một "phòng" độc lập — trùng tên biến vẫn an toàn ─────
function DocLapGiuaCacHam() {
  return (
    <Frame viewBox="0 0 640 240">
      <rect x="15" y="15" width="290" height="180" rx="16" fill={C.white} stroke={C.grape} strokeWidth="2" strokeDasharray="6 4" />
      <rect x="15" y="15" width="290" height="32" rx="16" fill={C.grape} fillOpacity="0.12" />
      <Lines x={160} y={36} lines={["🚪 Phòng của dem_chan(a)"]} size={10.5} fill={C.grapeDeep} weight={700} />
      <rect x="120" y="70" width="80" height="60" rx="8" fill={C.grape} fillOpacity="0.2" stroke={C.grapeDeep} strokeWidth="1.8" />
      <Lines x={160} y={95} lines={["i"]} size={22} fill={C.grapeDeep} weight={700} />
      <Lines x={160} y={118} lines={["(biến vòng lặp)"]} size={8} fill={C.grapeDeep} weight={600} />
      <Lines x={160} y={165} lines={["Chỉ dem_chan nhìn thấy i này"]} size={9} fill={C.inkSoft} weight={500} />

      <rect x="290" y="70" width="12" height="90" fill={C.line} />
      <text x="296" y="122" fontSize="16" textAnchor="middle">🧱</text>

      <rect x="335" y="15" width="290" height="180" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" strokeDasharray="6 4" />
      <rect x="335" y="15" width="290" height="32" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={480} y={36} lines={["🚪 Phòng của tinh_tong(a)"]} size={10.5} fill={C.bubbleDeep} weight={700} />
      <rect x="440" y="70" width="80" height="60" rx="8" fill={C.bubble} fillOpacity="0.2" stroke={C.bubbleDeep} strokeWidth="1.8" />
      <Lines x={480} y={95} lines={["i"]} size={22} fill={C.bubbleDeep} weight={700} />
      <Lines x={480} y={118} lines={["(biến vòng lặp)"]} size={8} fill={C.bubbleDeep} weight={600} />
      <Lines x={480} y={165} lines={["Chỉ tinh_tong nhìn thấy i này"]} size={9} fill={C.inkSoft} weight={500} />

      <rect x="60" y="205" width="520" height="28" rx="8" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={223} lines={["Hai biến i hoàn toàn độc lập — không hề \"đụng\" nhau, dù trùng tên"]} size={10} fill={C.ink} weight={700} />
    </Frame>
  );
}

// ── Bài 29: Lỗi cú pháp — xe chưa hề lăn bánh đã bị chặn ngay vạch xuất phát ─
function LoiCuPhapKhongChay() {
  return (
    <Frame viewBox="0 0 640 240">
      <Lines x={320} y={26} lines={["🏁 Lỗi cú pháp (SyntaxError) — bị chặn NGAY TỪ ĐẦU, chưa chạy dòng nào"]} size={11.5} fill={C.grapeDeep} weight={700} />

      <line x1="60" y1="130" x2="580" y2="130" stroke={C.line} strokeWidth="10" />
      <line x1="60" y1="130" x2="580" y2="130" stroke={C.inkSoft} strokeWidth="1" strokeDasharray="10 8" />

      <text x="75" y="140" fontSize="22">🚦</text>
      <text x="115" y="140" fontSize="26">🏎️</text>
      <rect x="150" y="105" width="14" height="55" fill="#DC2626" />
      <text x="145" y="98" fontSize="20">🚫</text>
      <text x="560" y="140" fontSize="22">🏁</text>

      <rect x="60" y="55" width="240" height="42" rx="6" fill={C.ink} />
      <text x="75" y="80" fontSize="10" fill="#FF6B9D" fontFamily="monospace">
        if diem &gt; 5
      </text>
      <text x="205" y="80" fontSize="14" fill="#FF6B9D">❓</text>

      <rect x="340" y="55" width="260" height="42" rx="6" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
      <Lines x={470} y={72} lines={["SyntaxError: expected ':'"]} size={9.5} fill="#B91C1C" weight={700} />
      <Lines x={470} y={88} lines={["thiếu dấu hai chấm sau if"]} size={8.5} fill="#B91C1C" weight={600} />

      <rect x="80" y="175" width="480" height="50" rx="10" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={195} lines={["Python đọc thấy sai NGỮ PHÁP trước khi chạy bất kì dòng nào"]} size={10} fill={C.ink} weight={700} />
      <Lines x={320} y={212} lines={["— toàn bộ chương trình đứng yên tại vạch xuất phát"]} size={9.5} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 29: Lỗi ngoại lệ — xe chạy được rồi chết máy giữa đường ─────────────
function LoiNgoaiLeDungGiuaChuong() {
  const loai = [
    { ten: "ZeroDivisionError", nguyen_nhan: "chia cho số 0" },
    { ten: "ValueError", nguyen_nhan: "đổi kiểu dữ liệu không hợp lệ" },
    { ten: "IndexError", nguyen_nhan: "chỉ số vượt phạm vi danh sách" },
    { ten: "NameError", nguyen_nhan: "dùng biến chưa được gán" },
    { ten: "TypeError", nguyen_nhan: "trộn lẫn kiểu dữ liệu sai cách" },
  ];
  return (
    <Frame viewBox="0 0 640 300">
      <Lines x={320} y={24} lines={["🚧 Lỗi ngoại lệ (Exception) — chạy được một đoạn rồi DỪNG đột ngột"]} size={11} fill={C.bubbleDeep} weight={700} />

      <line x1="50" y1="90" x2="590" y2="90" stroke={C.line} strokeWidth="10" />
      <text x="60" y="98" fontSize="20">🏁</text>
      <text x="330" y="98" fontSize="26">🏎️</text>
      <text x="300" y="65" fontSize="20">💥</text>
      <text x="570" y="98" fontSize="20">🏁</text>

      <rect x="255" y="105" width="220" height="55" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.6" />
      <Lines x={365} y={125} lines={["Traceback (dòng 4)"]} size={9.5} fill="#B91C1C" weight={700} />
      <Lines x={365} y={142} lines={["ZeroDivisionError:"]} size={9.5} fill="#B91C1C" weight={700} />
      <Lines x={365} y={155} lines={["division by zero"]} size={9} fill="#B91C1C" weight={600} />

      <rect x="30" y="175" width="580" height="115" rx="10" fill={C.white} stroke={C.bubble} strokeWidth="1.5" />
      <Lines x={320} y={195} lines={["📋 Vài lỗi ngoại lệ thường gặp"]} size={10.5} fill={C.bubbleDeep} weight={700} />
      {loai.map((l, i) => (
        <g key={i}>
          <text x={50} y={216 + i * 15} fontSize="10" fill={C.bubbleDeep} fontFamily="monospace" fontWeight={700}>
            {l.ten}
          </text>
          <text x={220} y={216 + i * 15} fontSize="9.5" fill={C.inkSoft}>
            — {l.nguyen_nhan}
          </text>
        </g>
      ))}
    </Frame>
  );
}

// ── Bài 29: Lỗi lôgic — xe chạy êm ru nhưng tới SAI địa điểm, không báo gì ──
function LoiLogicDenSaiDich() {
  return (
    <Frame viewBox="0 0 640 260">
      <Lines x={320} y={24} lines={["🎯 Lỗi lôgic — chạy êm ru, KHÔNG báo gì cả, chỉ là đến sai đích"]} size={11.5} fill={C.grapeDeep} weight={700} />

      <line x1="50" y1="110" x2="590" y2="110" stroke={C.line} strokeWidth="10" />
      <text x="60" y="118" fontSize="20">🏁</text>
      <text x="560" y="118" fontSize="26">🏎️</text>
      <text x="555" y="80" fontSize="14" fill={C.inkSoft}>không đèn báo nào!</text>

      <rect x="460" y="130" width="150" height="42" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.6" />
      <Lines x={535} y={148} lines={["📍 Đích thực tế: 11"]} size={10} fill="#B91C1C" weight={700} />
      <Lines x={535} y={163} lines={["(a + b/2, sai thứ tự)"]} size={8.5} fill="#B91C1C" weight={600} />

      <rect x="270" y="130" width="150" height="42" rx="8" fill={C.mint} fillOpacity="0.15" stroke={C.mintDeep} strokeWidth="1.6" strokeDasharray="4 3" />
      <Lines x={345} y={148} lines={["🎯 Đích mong muốn: 7"]} size={10} fill={C.mintDeep} weight={700} />
      <Lines x={345} y={163} lines={["((a + b)/2, đúng ý)"]} size={8.5} fill={C.mintDeep} weight={600} />

      <rect x="70" y="190" width="500" height="55" rx="10" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={210} lines={["Chương trình chạy hết, không một dòng lỗi màu đỏ nào xuất hiện"]} size={10} fill={C.ink} weight={700} />
      <Lines x={320} y={227} lines={["— chỉ tự kiểm thử, đối chiếu kết quả đúng mới phát hiện ra được"]} size={9.5} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 30: Một lần chạy đúng chưa đủ — phải thử qua nhiều "cung đường" ─────
function KiemThuNhieuTruongHop() {
  const cases = [
    { icon: "🛣️", label: "Đường thường", note: "diem = 7,0 → \"Khá\"", color: C.mint, deep: C.mintDeep },
    { icon: "⛰️", label: "Đúng ranh giới", note: "diem = 8,0 → \"Giỏi\"?", color: C.sun, deep: C.sunDeep },
    { icon: "🚧", label: "Ngoài phạm vi", note: "diem = 11 → hợp lệ?", color: C.bubble, deep: C.bubbleDeep },
  ];
  return (
    <Frame viewBox="0 0 640 260">
      <Lines x={320} y={26} lines={["Chỉ chạy thử ĐÚNG MỘT trường hợp không đủ để khẳng định chương trình đúng"]} size={11} fill={C.grapeDeep} weight={700} />

      {cases.map((c, i) => (
        <g key={i}>
          <rect x={20 + i * 205} y="50" width="185" height="150" rx="14" fill={C.white} stroke={c.color} strokeWidth="2" />
          <rect x={20 + i * 205} y="50" width="185" height="36" rx="14" fill={c.color} fillOpacity="0.15" />
          <Lines x={112 + i * 205} y={73} lines={[c.label]} size={11} fill={c.deep} weight={700} />
          <text x={112 + i * 205} y={125} fontSize="34" textAnchor="middle">{c.icon}</text>
          <rect x={35 + i * 205} y="150" width="155" height="36" rx="8" fill={c.color} fillOpacity="0.12" />
          <Lines x={112 + i * 205} y={172} lines={[c.note]} size={9.5} fill={c.deep} weight={700} />
        </g>
      ))}

      <rect x="60" y="215" width="520" height="35" rx="8" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={237} lines={["Xe chạy êm trên đường thường không có nghĩa là chạy tốt trên MỌI cung đường"]} size={10} fill={C.ink} weight={700} />
    </Frame>
  );
}

// ── Bài 30: Điểm biên và dữ liệu không hợp lệ — nơi lỗi hay ẩn náu ──────────
function DiemBienVaDuLieuKhongHopLe() {
  const points = [
    { v: "-2", x: 55, ok: false },
    { v: "0", x: 130, ok: true },
    { v: "5,0", x: 230, ok: true, bien: true },
    { v: "6,5", x: 330, ok: true, bien: true },
    { v: "8,0", x: 430, ok: true, bien: true },
    { v: "10", x: 530, ok: true },
    { v: "11", x: 600, ok: false },
  ];
  return (
    <Frame viewBox="0 0 640 220">
      <Lines x={320} y={24} lines={["Thang điểm 0–10: kiểm thử đúng tại các RANH GIỚI và cả giá trị NGOÀI phạm vi"]} size={10.5} fill={C.grapeDeep} weight={700} />

      <line x1="40" y1="120" x2="620" y2="120" stroke={C.inkSoft} strokeWidth="2" />
      {points.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x}
            cy="120"
            r={p.bien ? 12 : 9}
            fill={p.ok ? (p.bien ? C.sun : C.mint) : "#FEE2E2"}
            fillOpacity={p.ok ? 0.7 : 1}
            stroke={p.ok ? (p.bien ? C.sunDeep : C.mintDeep) : "#DC2626"}
            strokeWidth="2"
          />
          <Lines x={p.x} y={125} lines={[p.v]} size={9} fill={p.ok ? C.ink : "#B91C1C"} weight={700} />
          <Lines x={p.x} y={p.bien ? 150 : 145} lines={[p.bien ? "biên!" : p.ok ? "" : "❌ không hợp lệ"]} size={8} fill={p.ok ? C.sunDeep : "#B91C1C"} weight={700} />
        </g>
      ))}

      <rect x="60" y="170" width="520" height="42" rx="10" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={188} lines={["Lỗi hay nằm ở dấu >= hay > tại ranh giới, và ở dữ liệu vượt ngoài 0–10"]} size={10} fill={C.ink} weight={700} />
      <Lines x={320} y={203} lines={["Kiểm thử đúng những điểm này mới thực sự yên tâm"]} size={9} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 30: Quy trình gỡ lỗi có phương pháp — một vòng lặp không bỏ sót ─────
function QuyTrinhGoLoi() {
  const steps = [
    { n: "1", t: "Khoanh vùng nghi vấn", icon: "🔍" },
    { n: "2", t: "In giá trị biến ra xem", icon: "🖨️" },
    { n: "3", t: "Tìm đúng nguyên nhân", icon: "💡" },
    { n: "4", t: "Sửa lại chỗ sai", icon: "🔧" },
    { n: "5", t: "Thử lại TOÀN BỘ", icon: "✅" },
  ];
  return (
    <Frame viewBox="0 0 640 280">
      <Lines x={320} y={26} lines={["🔁 Quy trình gỡ lỗi — một vòng khép kín, không dừng ở bước 4"]} size={12} fill={C.grapeDeep} weight={700} />

      {steps.map((s, i) => {
        const cx = 90 + i * 115;
        return (
          <g key={i}>
            <circle cx={cx} cy="110" r="38" fill={C.grape} fillOpacity="0.12" stroke={C.grapeDeep} strokeWidth="2" />
            <text x={cx} y="102" fontSize="20" textAnchor="middle">{s.icon}</text>
            <Lines x={cx} y={128} lines={[`Bước ${s.n}`]} size={9} fill={C.grapeDeep} weight={700} />
            {i < 4 && <path d={`M${cx + 40},110 L${cx + 75},110`} stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />}
          </g>
        );
      })}
      {steps.map((s, i) => (
        <Lines key={`t${i}`} x={90 + i * 115} y={168} lines={s.t.split(" ").length > 2 ? [s.t.split(" ").slice(0, 2).join(" "), s.t.split(" ").slice(2).join(" ")] : [s.t]} size={9} fill={C.ink} weight={600} />
      ))}

      <path d="M550,148 L550,210 L90,210 L90,150" fill="none" stroke="#B91C1C" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#arrow)" />
      <Lines x={320} y={225} lines={["Nếu vẫn còn sai ở bộ thử nào đó → quay lại bước 1, KHÔNG bỏ cuộc giữa chừng"]} size={10} fill="#B91C1C" weight={700} />

      <rect x="60" y="240" width="520" height="30" rx="8" fill={C.line} fillOpacity="0.35" />
      <Lines x={320} y={259} lines={["Bước 5 luôn chạy lại TẤT CẢ bộ thử — sửa chỗ này có thể làm hỏng chỗ khác"]} size={9.5} fill={C.ink} weight={700} />
    </Frame>
  );
}

// ── Bài 31: Quy trình 4 bước giải bài toán bằng lập trình ───────────────────
function QuyTrinh4BuocLapTrinh() {
  const steps = [
    { n: "1", t: "Xác định bài toán", d: "INPUT là gì? OUTPUT là gì?", icon: "🎯", color: C.grape, deep: C.grapeDeep },
    { n: "2", t: "Thiết kế thuật toán", d: "Mô tả cách giải bằng lời/sơ đồ", icon: "🧩", color: C.sun, deep: C.sunDeep },
    { n: "3", t: "Viết chương trình", d: "Chuyển thuật toán thành mã Python", icon: "⌨️", color: C.mint, deep: C.mintDeep },
    { n: "4", t: "Kiểm thử", d: "Chạy thử, đối chiếu kết quả đúng", icon: "🧪", color: C.bubble, deep: C.bubbleDeep },
  ];
  return (
    <Frame viewBox="0 0 640 280">
      <Lines x={320} y={24} lines={["🛤️ Bốn bước giải một bài toán bằng chương trình"]} size={12.5} fill={C.grapeDeep} weight={700} />

      {steps.map((s, i) => (
        <g key={i}>
          <rect x={20 + i * 155} y="50" width="135" height="140" rx="14" fill={C.white} stroke={s.color} strokeWidth="2" />
          <rect x={20 + i * 155} y="50" width="135" height="34" rx="14" fill={s.color} fillOpacity="0.15" />
          <Lines x={87 + i * 155} y={71} lines={[`Bước ${s.n}`]} size={10.5} fill={s.deep} weight={700} />
          <text x={87 + i * 155} y="112" fontSize="26" textAnchor="middle">{s.icon}</text>
          <Lines x={87 + i * 155} y={135} lines={[s.t]} size={9.5} fill={s.deep} weight={700} />
          <Lines x={87 + i * 155} y={160} lines={s.d.split(" ").length > 3 ? [s.d.split(" ").slice(0, 3).join(" "), s.d.split(" ").slice(3).join(" ")] : [s.d]} size={8} fill={C.inkSoft} weight={500} gap={11} />
          {i < 3 && <path d={`M${155 + i * 155},120 L${175 + i * 155},120`} stroke={C.grapeDeep} strokeWidth="2.5" markerEnd="url(#arrow)" />}
        </g>
      ))}

      <path d="M600,190 L600,225 L20,225 L20,192" fill="none" stroke="#B91C1C" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#arrow)" />
      <Lines x={320} y={245} lines={["Kiểm thử phát hiện sai → quay lại bước 2 hoặc 3 để sửa, không phải viết lại từ đầu"]} size={10} fill="#B91C1C" weight={700} />

      <rect x="60" y="255" width="520" height="20" rx="6" fill={C.line} fillOpacity="0.3" />
    </Frame>
  );
}

// ── Bài 31: Hai khuôn mẫu code kinh điển — đếm theo điều kiện và tìm max ────
function HaiKhuonMauCode() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={165} y={37} lines={["🔢 Khuôn mẫu: duyệt và đếm theo điều kiện"]} size={9.5} fill={C.mintDeep} weight={700} />

      <rect x="40" y="58" width="250" height="80" rx="8" fill={C.ink} />
      <text x="55" y="78" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">dem = 0</text>
      <text x="55" y="94" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">for x in chi_tieu:</text>
      <text x="70" y="110" fontSize="9.5" fill="#FBBF24" fontFamily="monospace">if x &gt; tb:</text>
      <text x="85" y="126" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">dem = dem + 1</text>

      <rect x="35" y="150" width="260" height="80" rx="8" fill={C.mint} fillOpacity="0.1" />
      <Lines x={165} y={170} lines={["Đi qua từng phần tử, hễ THOẢ điều kiện"]} size={9} fill={C.mintDeep} weight={700} />
      <Lines x={165} y={187} lines={["thì cộng thêm 1 vào bộ đếm"]} size={9} fill={C.mintDeep} weight={600} />
      <Lines x={165} y={210} lines={["Áp dụng: đếm ngày chi vượt mức trung bình"]} size={8.5} fill={C.inkSoft} weight={500} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.bubble} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.bubble} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["📈 Khuôn mẫu: tìm giá trị lớn nhất"]} size={9.5} fill={C.bubbleDeep} weight={700} />

      <rect x="350" y="58" width="250" height="80" rx="8" fill={C.ink} />
      <text x="365" y="78" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">ln = chi_tieu[0]</text>
      <text x="365" y="94" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">for x in chi_tieu:</text>
      <text x="380" y="110" fontSize="9.5" fill="#FBBF24" fontFamily="monospace">if x &gt; ln:</text>
      <text x="395" y="126" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">ln = x</text>

      <rect x="345" y="150" width="260" height="80" rx="8" fill={C.bubble} fillOpacity="0.1" />
      <Lines x={475} y={170} lines={["Khởi tạo bằng phần tử ĐẦU TIÊN, gặp"]} size={9} fill={C.bubbleDeep} weight={700} />
      <Lines x={475} y={187} lines={["phần tử LỚN HƠN thì cập nhật ngay"]} size={9} fill={C.bubbleDeep} weight={600} />
      <Lines x={475} y={210} lines={["Áp dụng: tìm ngày chi tiêu nhiều nhất"]} size={8.5} fill={C.inkSoft} weight={500} />
    </Frame>
  );
}

// ── Bài 31: Code dễ đọc và code khó đọc — cùng chạy đúng, chất lượng khác hẳn ──
function CodeDeDocVsKhoDoc() {
  return (
    <Frame viewBox="0 0 640 260">
      <rect x="15" y="15" width="300" height="230" rx="16" fill={C.white} stroke="#DC2626" strokeWidth="2" />
      <rect x="15" y="15" width="300" height="34" rx="16" fill="#FEE2E2" />
      <Lines x={165} y={37} lines={["😵 Khó đọc — vẫn chạy đúng, nhưng..."]} size={10} fill="#B91C1C" weight={700} />

      <rect x="35" y="58" width="260" height="95" rx="8" fill={C.ink} />
      <text x="50" y="78" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">a = float(input())</text>
      <text x="50" y="94" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">b = float(input())</text>
      <text x="50" y="110" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">c = a * b</text>
      <text x="50" y="126" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">if a &gt;= 20:</text>
      <text x="65" y="142" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">c = c * 0.95</text>

      <rect x="30" y="165" width="270" height="65" rx="8" fill="#FEE2E2" fillOpacity="0.6" />
      <Lines x={165} y={185} lines={["Tên a, b, c không nói lên ý nghĩa gì,"]} size={9} fill="#B91C1C" weight={700} />
      <Lines x={165} y={202} lines={["không lời nhắc, không chú thích"]} size={9} fill="#B91C1C" weight={600} />
      <Lines x={165} y={219} lines={["→ người khác đọc lại rất khó hiểu"]} size={9} fill="#B91C1C" weight={600} />

      <rect x="325" y="15" width="300" height="230" rx="16" fill={C.white} stroke={C.mint} strokeWidth="2" />
      <rect x="325" y="15" width="300" height="34" rx="16" fill={C.mint} fillOpacity="0.12" />
      <Lines x={475} y={37} lines={["✅ Dễ đọc — cùng logic, khác chất lượng"]} size={10} fill={C.mintDeep} weight={700} />

      <rect x="345" y="58" width="260" height="95" rx="8" fill={C.ink} />
      <text x="358" y="74" fontSize="8.5" fill="#8CF29B" fontFamily="monospace">kg = float(input("Số kg: "))</text>
      <text x="358" y="88" fontSize="8.5" fill="#8CF29B" fontFamily="monospace">gia = float(input("Đơn giá: "))</text>
      <text x="358" y="102" fontSize="8.5" fill="#FF6B9D" fontFamily="monospace"># Tính thành tiền</text>
      <text x="358" y="116" fontSize="8.5" fill="#8CF29B" fontFamily="monospace">tien = kg * gia</text>
      <text x="358" y="130" fontSize="8.5" fill="#8CF29B" fontFamily="monospace">if kg &gt;= 20:  # giảm giá sỉ</text>
      <text x="370" y="144" fontSize="8.5" fill="#8CF29B" fontFamily="monospace">tien = tien * 0.95</text>

      <rect x="340" y="165" width="270" height="65" rx="8" fill={C.mint} fillOpacity="0.1" />
      <Lines x={475} y={185} lines={["Tên biến gợi nghĩa, có lời nhắc nhập,"]} size={9} fill={C.mintDeep} weight={700} />
      <Lines x={475} y={202} lines={["có chú thích ngắn ở chỗ cần giải thích"]} size={9} fill={C.mintDeep} weight={600} />
      <Lines x={475} y={219} lines={["→ ai đọc lại cũng hiểu ngay"]} size={9} fill={C.mintDeep} weight={600} />
    </Frame>
  );
}

// ── Bài 32: Sáu mảnh ghép dựng nên một chương trình Python ──────────────────
function BanDo6ManhGhep() {
  const items = [
    { icon: "🔢", t: "Biến & phép toán", d: "Lưu và tính toán dữ liệu", color: C.grape, deep: C.grapeDeep },
    { icon: "🔀", t: "Rẽ nhánh if", d: "Quyết định theo điều kiện", color: C.sun, deep: C.sunDeep },
    { icon: "🔁", t: "Vòng lặp for / while", d: "Lặp lại, tránh viết lại", color: C.mint, deep: C.mintDeep },
    { icon: "📋", t: "Danh sách", d: "Gom nhiều giá trị, có chỉ số", color: C.bubble, deep: C.bubbleDeep },
    { icon: "🔤", t: "Xâu kí tự", d: "Xử lí văn bản, bất biến", color: C.sun, deep: C.sunDeep },
    { icon: "🧰", t: "Hàm", d: "Đóng gói việc, gọi lại nhiều lần", color: C.mint, deep: C.mintDeep },
  ];
  return (
    <Frame viewBox="0 0 640 300">
      <Lines x={320} y={22} lines={["🗺️ Sáu mảnh ghép — kết hợp lại thành một chương trình hoàn chỉnh"]} size={12} fill={C.grapeDeep} weight={700} />
      {items.map((it, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 20 + col * 205;
        const y = 45 + row * 122;
        return (
          <g key={i}>
            <rect x={x} y={y} width="190" height="105" rx="14" fill={C.white} stroke={it.color} strokeWidth="2" />
            <rect x={x} y={y} width="190" height="30" rx="14" fill={it.color} fillOpacity="0.15" />
            <text x={x + 95} y={y + 21} fontSize="15" textAnchor="middle">{it.icon} {it.t}</text>
            <Lines x={x + 95} y={y + 55} lines={it.d.split(" ").length > 3 ? [it.d.split(" ").slice(0, 3).join(" "), it.d.split(" ").slice(3).join(" ")] : [it.d]} size={9.5} fill={it.deep} weight={600} gap={14} />
          </g>
        );
      })}
      <Lines x={320} y={288} lines={["Đề tổng hợp thường trộn 2-3 mảnh ghép trong cùng một đoạn chương trình"]} size={9.5} fill={C.inkSoft} weight={600} />
    </Frame>
  );
}

// ── Bài 32: Dò biến từng bước — kĩ năng đọc hiểu code ────────────────────────
function BangDoBienTungBuoc() {
  const rows = [
    { i: "1", cond: "Đúng", s: "0 + 1 = 1" },
    { i: "2", cond: "Sai", s: "giữ nguyên 1" },
    { i: "3", cond: "Đúng", s: "1 + 3 = 4" },
    { i: "4", cond: "Sai", s: "giữ nguyên 4" },
    { i: "5", cond: "Đúng", s: "4 + 5 = 9" },
  ];
  return (
    <Frame viewBox="0 0 640 300">
      <Lines x={320} y={22} lines={["🔍 Dò biến từng bước với: s = 0; for i in range(1,6): if i%2==1: s = s+i"]} size={10.5} fill={C.grapeDeep} weight={700} />

      <rect x="15" y="40" width="180" height="230" rx="10" fill={C.ink} />
      <text x="30" y="65" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">s = 0</text>
      <text x="30" y="83" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">for i in range(1,6):</text>
      <text x="45" y="101" fontSize="9.5" fill="#FBBF24" fontFamily="monospace">if i % 2 == 1:</text>
      <text x="60" y="119" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">s = s + i</text>
      <text x="30" y="140" fontSize="9.5" fill="#8CF29B" fontFamily="monospace">print(s)</text>
      <Lines x={105} y={175} lines={["Đọc từng vòng lặp,", "hỏi: điều kiện đúng", "hay sai? s đổi thế nào?"]} size={8.5} fill={C.white} weight={500} gap={13} />

      <rect x="210" y="40" width="415" height="26" rx="6" fill={C.grape} fillOpacity="0.15" />
      <text x="230" y="58" fontSize="10" fill={C.grapeDeep} fontWeight="700">i</text>
      <text x="330" y="58" fontSize="10" fill={C.grapeDeep} fontWeight="700">i % 2 == 1 ?</text>
      <text x="480" y="58" fontSize="10" fill={C.grapeDeep} fontWeight="700">s sau dòng if</text>

      {rows.map((r, idx) => (
        <g key={idx}>
          <rect x="210" y={66 + idx * 36} width="415" height="34" fill={idx % 2 === 0 ? C.white : C.bubble} fillOpacity={idx % 2 === 0 ? "1" : "0.08"} stroke={C.line} strokeWidth="1" />
          <text x="230" y={88 + idx * 36} fontSize="10.5" fill={C.ink} fontFamily="monospace">{r.i}</text>
          <text x="330" y={88 + idx * 36} fontSize="10.5" fill={r.cond === "Đúng" ? C.mintDeep : C.inkSoft} fontFamily="monospace">{r.cond}</text>
          <text x="480" y={88 + idx * 36} fontSize="10.5" fill={C.ink} fontFamily="monospace">{r.s}</text>
        </g>
      ))}

      <rect x="210" y="248" width="415" height="30" rx="6" fill={C.mint} fillOpacity="0.18" />
      <Lines x={417} y={267} lines={["Hết vòng lặp → print(s) in ra 9"]} size={10} fill={C.mintDeep} weight={700} />
    </Frame>
  );
}

// ── Bài 32: Bốn bẫy kinh điển khi nhiều mảnh ghép trộn lẫn ───────────────────
function BonBayTongHop() {
  const traps = [
    { icon: "📑", t: "sort() rồi append()", d1: "a=[5,1,4]; a.sort(); a.append(2)", d2: "→ [1,4,5,2] — 2 nằm CUỐI, không tự xếp lại" },
    { icon: "🔤", t: "Xâu bất biến", d1: 's.upper() trả xâu MỚI', d2: "→ biến s gốc không hề thay đổi" },
    { icon: "📦", t: "Biến cục bộ trong hàm", d1: "biến d khai báo trong hàm", d2: "→ dùng ngoài hàm là lỗi, đã hết phạm vi" },
    { icon: "🚫", t: "Thiếu đối số bắt buộc", d1: "gọi hàm thiếu tham số", d2: "→ Python báo lỗi TypeError, không tự đoán" },
  ];
  return (
    <Frame viewBox="0 0 640 300">
      <Lines x={320} y={20} lines={["⚠️ Bẫy tổng hợp — khi hai mảnh ghép gặp nhau, dễ đoán nhầm"]} size={11} fill="#B91C1C" weight={700} />
      {traps.map((tr, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 20 + col * 310;
        const y = 40 + row * 125;
        return (
          <g key={i}>
            <rect x={x} y={y} width="295" height="110" rx="12" fill="#FEF2F2" stroke="#DC2626" strokeWidth="1.5" />
            <text x={x + 16} y={y + 26} fontSize="13" fontWeight="700" fill="#B91C1C">{tr.icon} {tr.t}</text>
            <text x={x + 16} y={y + 52} fontSize="9" fill={C.ink} fontFamily="monospace">{tr.d1}</text>
            <Lines x={x + 148} y={y + 80} lines={tr.d2.length > 34 ? [tr.d2.slice(0, 34), tr.d2.slice(34)] : [tr.d2]} size={9} fill="#B91C1C" weight={600} gap={13} />
          </g>
        );
      })}
    </Frame>
  );
}

// ── Bài 33: Một ngày làm việc của nhà thiết kế đồ hoạ (vòng lặp công việc) ──
function MotNgayCuaNhaThietKe() {
  const nodes = [
    { x: 320, y: 40, icon: "🗣️", t: "Gặp khách hàng" },
    { x: 443.6, y: 129.8, icon: "✏️", t: "Phác thảo ý tưởng" },
    { x: 396.4, y: 275.2, icon: "💻", t: "Dựng trên phần mềm" },
    { x: 243.6, y: 275.2, icon: "📤", t: "Gửi phương án" },
    { x: 196.4, y: 129.8, icon: "💬", t: "Nhận góp ý" },
  ];
  return (
    <Frame viewBox="0 0 640 340">
      <Lines x={320} y={20} lines={["🔄 Một ngày làm việc của nhà thiết kế — theo lời kể của chị Hoa"]} size={11.5} fill={C.grapeDeep} weight={700} />

      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length];
        return <path key={`l${i}`} d={`M${n.x},${n.y} L${next.x},${next.y}`} stroke={C.grapeDeep} strokeWidth="2" fill="none" markerEnd="url(#arrow)" />;
      })}

      <path d="M196.4,145 C150,210 260,290 380,283" stroke="#B91C1C" strokeWidth="2" strokeDasharray="5 4" fill="none" markerEnd="url(#arrow)" />
      <Lines x={230} y={225} lines={["chưa ưng ý", "→ chỉnh sửa"]} size={8.5} fill="#B91C1C" weight={700} gap={11} />

      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="42" fill={C.white} stroke={C.grape} strokeWidth="2" />
          <text x={n.x} y={n.y - 4} fontSize="18" textAnchor="middle">{n.icon}</text>
          <Lines x={n.x} y={n.y + 16} lines={n.t.split(" ").length > 2 ? [n.t.split(" ").slice(0, 2).join(" "), n.t.split(" ").slice(2).join(" ")] : [n.t]} size={7.8} fill={C.grapeDeep} weight={700} gap={10} />
        </g>
      ))}

      <Lines x={320} y={325} lines={["Thiết kế không chỉ là ngồi vẽ — phần lớn thời gian là giao tiếp và chỉnh sửa theo phản hồi"]} size={9.5} fill={C.inkSoft} weight={600} />
    </Frame>
  );
}

// ── Bài 33: Từ kiến thức lớp 10 đến công cụ nghề nghiệp thật ────────────────
function TuKienThucDenCongCu() {
  const pairs = [
    { l: "📐 Vector và Bitmap (Bài 12)", r: "🎯 Vẽ logo, icon bằng Inkscape/Illustrator — cần vector co giãn không vỡ nét" },
    { l: "🖌️ Thực hành Inkscape (Bài 13-15)", r: "🖼️ Chỉnh sửa, ghép ảnh chụp bằng GIMP/Photoshop — xử lí ảnh bitmap" },
    { l: "🌐 Khai thác Internet & bản quyền (Bài 10-11)", r: "⚖️ Tìm tư liệu tham khảo đúng cách, tôn trọng bản quyền khi thiết kế" },
  ];
  return (
    <Frame viewBox="0 0 640 300">
      <Lines x={320} y={22} lines={["🔗 Những gì đã học ở lớp 10 chính là bước đầu của nghề thiết kế"]} size={11} fill={C.grapeDeep} weight={700} />
      <Lines x={140} y={46} lines={["Kiến thức đã học"]} size={10} fill={C.mintDeep} weight={700} />
      <Lines x={500} y={46} lines={["Ứng dụng trong nghề"]} size={10} fill={C.bubbleDeep} weight={700} />

      {pairs.map((p, i) => {
        const y = 60 + i * 78;
        return (
          <g key={i}>
            <rect x="15" y={y} width="255" height="62" rx="10" fill={C.mint} fillOpacity="0.12" stroke={C.mint} strokeWidth="1.5" />
            <Lines x={142} y={y + 26} lines={p.l.length > 26 ? [p.l.slice(0, 26), p.l.slice(26)] : [p.l]} size={9} fill={C.mintDeep} weight={700} gap={13} anchor="middle" />

            <path d={`M275,${y + 31} L365,${y + 31}`} stroke={C.grapeDeep} strokeWidth="2" markerEnd="url(#arrow)" />

            <rect x="370" y={y} width="255" height="62" rx="10" fill={C.bubble} fillOpacity="0.12" stroke={C.bubble} strokeWidth="1.5" />
            <Lines x={497} y={y + 20} lines={[p.r.slice(0, 30), p.r.slice(30, 60), p.r.slice(60)].filter(Boolean)} size={8} fill={C.bubbleDeep} weight={600} gap={11} anchor="middle" />
          </g>
        );
      })}
    </Frame>
  );
}

// ── Bài 33: Ba điều cần rèn luyện từ bây giờ ─────────────────────────────────
function BaDieuRenLuyen() {
  const items = [
    { icon: "👁️", t: "Con mắt thẩm mĩ", d: "Quan sát, học hỏi từ những thiết kế đẹp mỗi ngày", color: C.grape, deep: C.grapeDeep },
    { icon: "🖱️", t: "Tay nghề phần mềm", d: "Luyện tập bằng các bài nhỏ: thiệp, logo lớp, poster", color: C.mint, deep: C.mintDeep },
    { icon: "⚖️", t: "Ý thức bản quyền", d: "Không sao chép, luôn ghi nguồn tư liệu tham khảo", color: C.bubble, deep: C.bubbleDeep },
  ];
  return (
    <Frame viewBox="0 0 640 260">
      <Lines x={320} y={22} lines={["🌱 Ba điều chị Hoa nhắn nhủ — rèn luyện được ngay từ lớp 10"]} size={11.5} fill={C.grapeDeep} weight={700} />

      {items.map((it, i) => (
        <g key={i}>
          <rect x={20 + i * 205} y="45" width="190" height="130" rx="14" fill={C.white} stroke={it.color} strokeWidth="2" />
          <rect x={20 + i * 205} y="45" width="190" height="34" rx="14" fill={it.color} fillOpacity="0.15" />
          <text x={115 + i * 205} y="98" fontSize="26" textAnchor="middle">{it.icon}</text>
          <Lines x={115 + i * 205} y={68} lines={[it.t]} size={10.5} fill={it.deep} weight={700} />
          <Lines x={115 + i * 205} y={130} lines={it.d.split(" ").length > 4 ? [it.d.split(" ").slice(0, 4).join(" "), it.d.split(" ").slice(4).join(" ")] : [it.d]} size={8.3} fill={C.inkSoft} weight={500} gap={12} />
        </g>
      ))}

      <rect x="20" y="195" width="600" height="46" rx="10" fill={C.sun} fillOpacity="0.15" stroke={C.sunDeep} strokeWidth="1.5" />
      <Lines x={320} y={222} lines={["🤖 AI chỉ là công cụ hỗ trợ — không thay được người biết đặt câu hỏi đúng cho khách hàng"]} size={9.5} fill={C.sunDeep} weight={700} />
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
  "input-luon-la-xau": InputLuonLaXau,
  "chuyen-doi-kieu": ChuyenDoiKieu,
  "print-nang-cao": PrintNangCao,
  "hoa-don-tra-sua": HoaDonTraSua,
  "if-don-luu-do": IfDonLuuDo,
  "if-elif-else-luu-do": IfElifElseLuuDo,
  "and-or-gates": AndOrGates,
  "range-so-line": RangeSoLine,
  "vong-lap-filmstrip": VongLapFilmstrip,
  "bien-cong-don": BienCongDon,
  "ghe-rap-chieu-phim": GheRapChieuPhim,
  "for-vs-while-so-sanh": ForVsWhileSoSanh,
  "while-kiem-tra-truoc": WhileKiemTraTruoc,
  "bay-lap-vo-han": BayLapVoHan,
  "gap-giay-toi-nguong": GapGiayToiNguong,
  "day-hop-danh-so": DayHopDanhSo,
  "gan-lai-va-append": GanLaiVaAppend,
  "duyet-gia-tri-vs-chi-so": DuyetGiaTriVsChiSo,
  "remove-vs-del": RemoveVsDel,
  "sort-tai-cho-va-bay": SortTaiChoVaBay,
  "append-vs-extend": AppendVsExtend,
  "thu-tu-truoc-sau-sort": ThuTuTruocSauSort,
  "xau-bat-bien": XauBatBien,
  "ghep-noi-va-lat-cat": GhepNoiVaLatCat,
  "so-sanh-xau": SoSanhXau,
  "find-vs-index": FindVsIndex,
  "split-va-join": SplitVaJoin,
  "strip-chi-hai-dau": StripChiHaiDau,
  "chuan-hoa-du-lieu": ChuanHoaDuLieu,
  "dinh-nghia-vs-goi-ham": DinhNghiaVsGoiHam,
  "return-vs-print": ReturnVsPrint,
  "return-ket-thuc-ham": ReturnKetThucHam,
  "tham-so-vs-doi-so": ThamSoVsDoiSo,
  "thu-tu-doi-so-quan-trong": ThuTuDoiSoQuanTrong,
  "nhieu-gia-tri-tra-ve-va-long-nhau": NhieuGiaTriTraVeVaLongNhau,
  "bien-cuc-bo-phong-rieng": BienCucBoPhongRieng,
  "bay-che-bien-toan-cuc": BayCheBienToanCuc,
  "doc-lap-giua-cac-ham": DocLapGiuaCacHam,
  "loi-cu-phap-khong-chay": LoiCuPhapKhongChay,
  "loi-ngoai-le-dung-giua-chung": LoiNgoaiLeDungGiuaChuong,
  "loi-logic-den-sai-dich": LoiLogicDenSaiDich,
  "kiem-thu-nhieu-truong-hop": KiemThuNhieuTruongHop,
  "diem-bien-va-du-lieu-khong-hop-le": DiemBienVaDuLieuKhongHopLe,
  "quy-trinh-go-loi": QuyTrinhGoLoi,
  "quy-trinh-4-buoc-lap-trinh": QuyTrinh4BuocLapTrinh,
  "hai-khuon-mau-code": HaiKhuonMauCode,
  "code-de-doc-vs-kho-doc": CodeDeDocVsKhoDoc,
  "ban-do-6-manh-ghep": BanDo6ManhGhep,
  "bang-do-bien-tung-buoc": BangDoBienTungBuoc,
  "bon-bay-tong-hop": BonBayTongHop,
  "mot-ngay-cua-nha-thiet-ke": MotNgayCuaNhaThietKe,
  "tu-kien-thuc-den-cong-cu": TuKienThucDenCongCu,
  "ba-dieu-ren-luyen": BaDieuRenLuyen,
};

export default function Diagram({ name }: { name: string }) {
  const D = DIAGRAMS[name];
  if (!D) return null;
  return <D />;
}
