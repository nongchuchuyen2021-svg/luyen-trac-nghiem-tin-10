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
};

export default function Diagram({ name }: { name: string }) {
  const D = DIAGRAMS[name];
  if (!D) return null;
  return <D />;
}
