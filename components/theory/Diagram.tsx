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

const DIAGRAMS: Record<string, () => JSX.Element> = {
  "qua-trinh-xu-li-thong-tin": QuaTrinhXuLiThongTin,
  "don-vi-luu-tru": DonViLuuTru,
};

export default function Diagram({ name }: { name: string }) {
  const D = DIAGRAMS[name];
  if (!D) return null;
  return <D />;
}
