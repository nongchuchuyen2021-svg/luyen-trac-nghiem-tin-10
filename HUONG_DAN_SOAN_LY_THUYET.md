# Hướng dẫn soạn phần "Lý thuyết tự học" cho web Tin 10

Tài liệu này đúc kết từ việc xây phần Lý thuyết cho web Tin 12 (14 bài đã
soạn tính đến 2026-08-07). Viết ra để khi chuyển sang làm web Tin 10 — hiện
**chưa có bất kỳ hạ tầng Lý thuyết nào**, chỉ có 3 dạng luyện tập (Trắc
nghiệm / Đúng-Sai / Tự luận) — không phải dò lại từ đầu những bẫy đã vấp,
và giữ được các thủ pháp làm bài hay đã được kiểm chứng.

Một phiên Claude Code mới mở trong thư mục `luyen-trac-nghiem-tin-10` có thể
đọc thẳng tài liệu này mà không cần biết gì về phiên làm việc bên Tin 12.

---

## 0. Khác biệt cần biết trước khi bắt đầu

- **Bảng màu khác hẳn.** Tin 12 dùng `sea/coral/leaf/gold/berry`. Tin 10 dùng
  `grape/bubble/mint/sun/tomato` (xem `tailwind.config.ts`). Mọi đoạn mã dán
  từ tài liệu này phải đổi tên màu — mục 2 có bảng đối chiếu và **giá trị màu
  "-deep" đã tính sẵn, đạt chuẩn tương phản ≥5,5:1**, không phải đoán.
- **Chưa có script đo độ dài đáp án** (`do_dai.py`) — mục 8 có bản hoàn
  chỉnh để chép sang.
- **Chưa có quy trình render trang SGK** ra ảnh để đọc — mục 3 có sẵn script.
- Cấu trúc `Question`, `TFQuestion`, `EssayQuestion` trong `lib/types.ts` của
  Tin 10 **giống hệt** Tin 12, chỉ thiếu phần `LessonTheory`. Không phải sửa
  gì ở phần câu hỏi đã có.

---

## 1. Kiến trúc — một bài lý thuyết đi qua những đâu

```
data/theory/bai-XX.ts   (nội dung — export default một LessonTheory)
        │  import + khai báo 1 dòng
        ▼
lib/theory.ts           (THEORY_BANK, hàm getTheory(id))
        │  gọi trong app/luyen/[baiId]/page.tsx
        ▼
LessonClient.tsx         (hiện thẻ "Lý thuyết" nếu theory != null)
        │  khi bấm vào
        ▼
TheoryViewer.tsx          (render từng khối theo "kind")
        │  khối kind:"figure" gọi
        ▼
components/theory/Diagram.tsx   (tra tên hình trong DIAGRAMS, vẽ SVG)
```

Soạn một bài KHÔNG cần đụng vào `TheoryViewer.tsx` hay routing — chỉ cần:
viết `data/theory/bai-XX.ts`, thêm 1 hình mới vào `Diagram.tsx` nếu cần, và
thêm 2 dòng (import + khai báo) trong `lib/theory.ts`.

---

## 2. Dựng hạ tầng — làm một lần duy nhất

### 2.1. Thêm kiểu dữ liệu vào `lib/types.ts`

Thêm nguyên khối sau vào cuối file (không đổi gì các type đã có):

```ts
// ─── Lý thuyết tự học ────────────────────────────────────────────────────────
// Bài lí thuyết được ghép từ các "khối" (block) thay vì một đoạn văn dài, để
// mỗi ý đứng riêng trong một hình thức trực quan phù hợp: thẻ màu, bảng so
// sánh, dòng thời gian, hình vẽ SVG… Học sinh lướt tới đâu hiểu tới đó.

// Màu nền của thẻ/hộp — dùng tên màu trong tailwind.config.ts.
export type Tone = "grape" | "bubble" | "mint" | "sun" | "tomato";

export type TheoryCard = {
  emoji: string;
  title: string;
  text: string;
};

export type TheoryBlock =
  // Đoạn văn thường. Bọc **…** để in đậm một cụm từ khoá.
  | { kind: "text"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  // Lưới thẻ có emoji — dùng cho các nhóm ngang hàng (đặc trưng, lĩnh vực…)
  | { kind: "cards"; tone?: Tone; items: TheoryCard[] }
  // Bảng so sánh hai cột, kiểu "cái này khác cái kia chỗ nào"
  | {
      kind: "compare";
      left: { title: string; emoji: string; items: string[] };
      right: { title: string; emoji: string; items: string[] };
    }
  // Dòng thời gian / quy trình các bước
  | { kind: "steps"; items: { label: string; title: string; text: string }[] }
  // Hình vẽ SVG, khoá tra trong components/theory/Diagram.tsx
  | { kind: "figure"; diagram: string; caption: string }
  // Khối mã HTML/CSS. preview = true thì hiện thêm khung "kết quả trên trình
  // duyệt". tall = true thì khung xem trước cao gấp đôi (340px thay vì 180px)
  // — dành cho nội dung dài như biểu mẫu, bảng.
  | { kind: "code"; code: string; caption?: string; preview?: boolean; tall?: boolean }
  // Hộp ví dụ đời thường, nền ấm nhạt
  | { kind: "example"; title: string; text: string }
  // Hộp ghi nhớ, nền vàng/ấm — lấy đúng kết luận đóng khung trong SGK
  | { kind: "note"; text: string }
  // Hộp "Cập nhật 2026": chỗ SGK đã lạc hậu so với thực tế, kiến thức mới
  // xuất hiện sau khi sách in, HOẶC mã trong sách gõ vào máy không chạy đúng
  // như mô tả. CỐ Ý để màu và viền khác hẳn mọi hộp khác, kèm nhãn "đề thi
  // không hỏi phần này" — đề thi tốt nghiệp bám SGK, học sinh phải phân biệt
  // được đâu là phần thi, đâu là phần biết thêm.
  | { kind: "update"; title: string; text: string; items?: TheoryCard[] }
  // Câu hỏi kiểm tra nhanh xen giữa bài, trả lời xong hiện giải thích ngay
  | { kind: "check"; q: string; options: string[]; answer: number; explain: string };

export type TheorySection = {
  id: string;
  emoji: string;
  heading: string;
  blocks: TheoryBlock[];
};

export type LessonTheory = {
  intro: string; // 1-2 câu dẫn nhập, nói bài này học gì
  minutes: number; // ước lượng thời gian đọc
  sections: TheorySection[];
  summary: string[]; // "Ghi nhớ nhanh" cuối bài, 3-5 gạch đầu dòng
};
```

*Nếu muốn trang chủ hiện huy hiệu "có lý thuyết" như Tin 12 đang làm, thêm
`theory: boolean` vào kiểu đếm số câu ở trang chủ — không bắt buộc, có thể
làm sau.*

### 2.2. Đổi bảng màu — bắt buộc làm trước khi copy `Diagram.tsx`/`TheoryViewer.tsx`

Tin 12 quy định: **màu nhạt dùng làm nền, bản "-deep" dùng cho chữ** — không
bao giờ dùng màu gốc cho chữ cỡ nhỏ vì tương phản dưới chuẩn 4,5:1 (lỗi này
**chính web Tin 10 đang mắc** ở một số huy hiệu, có chỗ chỉ 2,12:1 — xem đây
là dịp sửa luôn nếu tiện).

`tailwind.config.ts` của Tin 10 hiện có `grape` + `grape-deep` (đã đạt
8,98:1) nhưng **`bubble`, `mint`, `sun`, `tomato` chưa có bản "-deep"**. Đã
tính sẵn bằng công thức WCAG (không đoán), tất cả đạt 5,5:1 trở lên:

```ts
// Thêm vào theme.extend.colors trong tailwind.config.ts
"bubble-deep": "#C8156E",  // tương phản 5,54:1 trên nền trắng
"mint-deep": "#0A7753",    // tương phản 5,56:1
"sun-deep": "#915E06",     // tương phản 5,52:1
"tomato-deep": "#D01212",  // tương phản 5,56:1
```

Bảng đối chiếu vai trò màu khi chuyển đoạn mã từ Tin 12 sang Tin 10 — **thay
thế toàn bộ theo bảng này**, không chỉ đổi tên suông:

| Vai trò trong `Diagram.tsx` / `TheoryViewer.tsx` | Tin 12 | Tin 10 |
|---|---|---|
| Màu chủ đạo (nền nhạt, đường kẻ, nút chính) | `sea` / `sea-deep` | `grape` / `grape-deep` |
| Màu nhấn ấm (ví dụ, cảnh báo nhẹ, đường viền nổi bật) | `coral` | `bubble` / `bubble-deep` |
| Màu tích cực (đúng, thành công) | `leaf` / `leaf-deep` | `mint` / `mint-deep` |
| Màu ghi nhớ/cảnh báo | `gold` / `gold-deep` | `sun` / `sun-deep` |
| Màu lỗi/sai | `berry` | `tomato` / `tomato-deep` |
| Chữ chính / chữ phụ / nền kem | `ink` / `ink-soft` / `cream` | **giữ nguyên** — Tin 10 đã có sẵn 3 màu này |

### 2.3. Tạo `components/theory/Diagram.tsx`

Đây là kho hình SVG viết tay. Khung sườn tối thiểu — copy nguyên, chỉ đổi
đúng 5 dòng màu trong `C` theo bảng ở mục 2.2:

```tsx
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
  line: "#E4D9F9", // đường kẻ nhạt — nên lấy tông tím rất nhạt cho ăn với grape
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
        <tspan key={i} x={x} dy={i === 0 ? 0 : gap}>{l}</tspan>
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

// ── Ví dụ một hình đơn giản, xoá đi khi có hình thật ────────────────────────
function ViDuMau() {
  return (
    <Frame viewBox="0 0 640 200">
      <rect x="20" y="20" width="600" height="160" rx="16" fill={C.grape} fillOpacity="0.08" stroke={C.grape} strokeWidth="2" />
      <Lines x={320} y={110} lines={["Xoá component này khi có hình thật"]} size={14} weight={700} fill={C.grapeDeep} />
    </Frame>
  );
}

const DIAGRAMS: Record<string, () => JSX.Element> = {
  "vi-du-mau": ViDuMau,
};

export default function Diagram({ name }: { name: string }) {
  const D = DIAGRAMS[name];
  if (!D) return null;
  return <D />;
}
```

**Quy tắc bắt buộc khi vẽ hình** (xem mục 5): cỡ chữ nhỏ nhất trong SVG phải
**≥ 12** đơn vị SVG.

### 2.4. Tạo `components/TheoryViewer.tsx`

File này **chép gần như nguyên xi** từ Tin 12, chỉ đổi tên class Tailwind
theo bảng màu mục 2.2 (ví dụ `border-sea/25` → `border-grape/25`,
`text-coral` → `text-bubble`, v.v.) — không đổi logic hay cấu trúc.

Ba điểm **bắt buộc giữ nguyên logic**, đừng đơn giản hoá khi chép, vì đây là
chỗ đã vá lỗi thật (xem mục 6 để hiểu vì sao):

```tsx
// Trong CodeBlock, đúng dòng srcDoc này — KHÔNG được rút gọn:
srcDoc={`<base href="about:srcdoc"><style>a:not([href^="#"]){pointer-events:none}</style>${code}`}
className={`w-full border-0 bg-white ${tall ? "h-[340px]" : "h-[180px]"}`}

// Trong case "figure", đúng cấu trúc bọc cuộn ngang này:
<div className="-mx-1 overflow-x-auto px-1">
  <div className="min-w-[600px] sm:min-w-0">
    <Diagram name={block.diagram} />
  </div>
</div>
```

Xin file đầy đủ nếu cần: có thể mở trực tiếp
`E:\du-an\luyen-trac-nghiem-tin-12\components\TheoryViewer.tsx` để copy rồi
đổi màu, hoặc nhờ Claude Code đọc và chuyển màu giúp.

### 2.5. Tạo `lib/theory.ts`

```ts
import type { LessonTheory } from "@/lib/types";

// Import từng bài đã soạn — thêm 1 dòng mỗi khi soạn xong 1 bài
// import bai01 from "@/data/theory/bai-01";

export const THEORY_BANK: Record<string, LessonTheory> = {
  // "bai-01": bai01,
};

export function getTheory(lessonId: string): LessonTheory | null {
  return THEORY_BANK[lessonId] ?? null;
}

export function hasTheory(lessonId: string): boolean {
  return lessonId in THEORY_BANK;
}
```

### 2.6. Nối vào trang bài học

Trong `app/luyen/[baiId]/page.tsx`, import `getTheory` và truyền
`theory={getTheory(params.baiId)}` xuống `LessonClient`.

Trong `LessonClient.tsx`: thêm `"theory"` vào kiểu `Mode`, nhận prop
`theory: LessonTheory | null`, và khi `mode === "theory" && theory` thì
render `<TheoryViewer lessonId=... lessonTitle=... topicName=... theory={theory}
onBack={...} onGoQuiz={...} />`. Thêm một thẻ/nút "📖 Lý thuyết" ở màn hình
chọn chế độ, chỉ hiện khi `theory != null`.

---

## 3. Đọc SGK trước khi soạn — không đoán, không nhớ mang máng

`SGK Tin10 Ket noi tri thuc va cuoc song.pdf` ở gốc dự án là **bản scan,
không có lớp văn bản** — không grep được. Phải render trang ra ảnh rồi đọc
bằng mắt. Tạo file `tai-lieu/render_sgk.py`:

```python
"""Render một khoảng trang của SGK (bản scan) ra ảnh PNG để đọc.

    python tai-lieu/render_sgk.py <trang_pdf_dau> <trang_pdf_cuoi>

Nhớ quy đổi: trang PDF thường lệch với số trang in trên sách (do có trang
bìa/mục lục không đánh số) — mở thử vài trang đầu để xác định độ lệch trước
khi tạo bản đồ trang.
"""
import os, sys
import fitz

PDF = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                    "SGK Tin10 Ket noi tri thuc va cuoc song.pdf")
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "sgk-pages")

def main():
    if len(sys.argv) != 3:
        print(__doc__); sys.exit(1)
    dau, cuoi = int(sys.argv[1]), int(sys.argv[2])
    os.makedirs(OUT, exist_ok=True)
    doc = fitz.open(PDF)
    for i in range(dau - 1, min(cuoi, doc.page_count)):
        f = os.path.join(OUT, f"p{i+1:03d}.png")
        doc[i].get_pixmap(dpi=110).save(f)
        print(f"{f}  (trang PDF {i+1})")

if __name__ == "__main__":
    main()
```

Thêm `tai-lieu/sgk-pages/` vào `.gitignore` (ảnh render ra không commit).
Cần cài `pip install pymupdf` nếu máy chưa có.

**Quy trình:** render 4-6 trang của bài cần soạn → dùng công cụ Read đọc
từng ảnh → chép **đúng thuật ngữ, đúng câu chốt đóng khung** của sách, không
diễn giải lại theo trí nhớ chung về chủ đề đó.

---

## 4. Các loại khối nội dung — dùng khi nào

| Khối | Dùng khi | Ví dụ |
|---|---|---|
| `text` | Đoạn văn thường, giải thích khái niệm | Định nghĩa, mô tả |
| `list` | Liệt kê nhiều ý ngang hàng, có/không thứ tự | Các bước, đặc điểm |
| `cards` | 3-6 mục ngang hàng, mỗi mục có emoji riêng | Các loại thuộc tính, thiết bị |
| `compare` | Đối chiếu 2 khái niệm hay nhầm lẫn | "A khác B chỗ nào" |
| `steps` | Quy trình có thứ tự, các bước thực hành | Hướng dẫn 3 bước của SGK |
| `figure` | Cơ chế trừu tượng khó hình dung bằng chữ | Sơ đồ, cấu trúc dữ liệu |
| `code` (preview) | Có cú pháp HTML/CSS chạy được | Bài về web (chủ đề 4) |
| `example` | Ví dụ đời thường làm rõ một ý | "Vì sao cần X?" |
| `note` | Kết luận đóng khung **nguyên văn SGK** | Khung vàng cuối mục |
| `update` | SGK sai/lạc hậu — **phải kiểm chứng trước** | Xem mục 7 |
| `check` | Câu hỏi củng cố ngay sau một ý vừa học | 1-2 câu mỗi mục |

Một bài trung bình: 4-6 mục, mỗi mục 5-10 khối, 1-3 hình `figure`, 1-2 câu
`check` mỗi mục.

---

## 5. Vẽ hình SVG minh hoạ

- Dùng `Frame` (bọc `<svg viewBox="0 0 640 H">`) và `Lines` (chữ nhiều dòng)
  làm nền, viết tay từng `<rect>`/`<path>`/`<circle>` — không dùng ảnh ngoài.
- **Cỡ chữ nhỏ nhất trong SVG phải ≥ 12** (đơn vị SVG). Lý do: trên điện
  thoại, khối `figure` ép hình giữ bề ngang tối thiểu 600px rồi cho vuốt
  ngang (đã code sẵn trong `TheoryViewer.tsx`, không cần tự lo phần này) —
  nhưng scale hiển thị thực tế ở màn 375px chỉ còn ~0,94 lần, nên cỡ chữ
  SVG 12 mới còn đọc được ở khoảng 11px thật.
- Vẽ hình cho **đúng chỗ SGK không có hình mà lại khó hình dung nhất bằng
  chữ** — không phải minh hoạ lại những gì chữ đã nói rõ.
- Kiểm tra sau khi vẽ: dùng trình duyệt đo `getBBox()` của từng `<text>` xem
  có tràn khỏi `viewBox` không (xem mục 9, có sẵn đoạn mã kiểm mẫu).

---

## 6. Khung xem trước "chạy thật" (`code` với `preview: true`)

Cơ chế: khối mã được nhúng vào một `<iframe sandbox="" srcDoc={...}>`. Vì
`sandbox=""` (rỗng) nên khung **không chạy JavaScript, không điều hướng được
trang cha** — an toàn dù nội dung mã lạ.

`TheoryViewer.tsx` đã tự động thêm 2 thứ vào mọi khung xem trước — **không
cần code trong `data/theory/*` phải lo việc này**:

1. `<base href="about:srcdoc">` — nếu không có dòng này, `href="#id"` trong
   khung sẽ bị hiểu thành liên kết tới **trang bài học đang mở**, bấm vào là
   cả bài học chui vào khung 180px; còn `href="tep.html"` sẽ thành đường dẫn
   thật trên site (`/luyen/tep.html`) và ra trang 404.
2. Một dòng CSS khoá `pointer-events` cho mọi liên kết **không** bắt đầu
   bằng `#` — vì bấm liên kết `http://` thật sẽ kéo cả trang ngoài vào khung
   180px, mà trang đó thường chỉ hiện lỗi "cần bật JavaScript" (do sandbox
   chặn), lấp mất khung xem trước.

**Hệ quả khi soạn:** trong khung xem trước, chỉ liên kết `href="#id"` là bấm
được thật. Muốn học sinh bấm thử một liên kết, trỏ nó tới một mục ngay trong
cùng đoạn mã demo (như ví dụ `#phan-cuoi` ở Tin 12 Bài 10), và ghi chú rằng
ngoài thực tế `href` thường là tên tệp khác.

Dùng `tall: true` khi nội dung cần hiển thị cao hơn 180px (biểu mẫu nhiều
dòng, bảng dài) — khung sẽ cao 340px.

---

## 7. Thủ pháp làm bài "hay hơn" — đã kiểm chứng ở Tin 12

### 7.1. Cặp demo trước/sau khi SGK lập luận bằng lời

Nhiều bài SGK chỉ giải thích lợi ích bằng câu chữ ("nhanh hơn, tiện hơn").
Học sinh không tin bằng đọc — cho họ **nhìn thấy**: dựng hai khung xem trước
cùng nội dung, một bản "chưa có kỹ thuật mới", một bản "có" — để sự khác
biệt tự nói thay lời giảng. Áp dụng tốt cho các bài CSS (Tin 12 Bài 13, 14).

### 7.2. Hộp `update` — CHỈ viết sau khi kiểm chứng bằng trình duyệt

SGK có thể sai (lỗi in, thuật ngữ cũ) hoặc lạc hậu (công nghệ đổi sau khi
sách in). Cả hai trường hợp đều **phải xác minh bằng công cụ thật trước khi
viết**, không suy đoán từ hiểu biết chung:

- Lỗi cú pháp/hành vi trình duyệt: dựng lại đúng đoạn mã sách đưa ra trong
  một `<iframe>` tạm, đọc `getComputedStyle()` xem kết quả thật là gì.
- Công nghệ lạc hậu (ví dụ một định dạng ảnh không còn được hỗ trợ): tra cứu
  qua công cụ tìm kiếm, tránh nhầm giữa các định dạng có tên gần giống nhau.

Giữ nguyên phần lý thuyết chính theo đúng SGK (đề thi bám sách), hộp `update`
chỉ để "biết thêm", có nhãn rõ **"ngoài SGK · đề thi không hỏi phần này"**.

### 7.3. Vẽ hình cho đúng chỗ sách không có hình mà khó nhất

Trước khi vẽ, tự hỏi: "phần này SGK có hình chưa, nếu có thì mình có vẽ lại
y hệt không (thường không cần), nếu không có thì đây có phải chỗ học sinh
dễ hiểu sai nhất không?" Ưu tiên vẽ đúng những chỗ khó, đừng minh hoạ lại
những gì chữ đã rất rõ.

### 7.4. SGK tự mâu thuẫn hoặc lỗi in nhỏ — giữ theo sách, chú thích một câu

Nếu phát hiện một chi tiết nhỏ sách viết không nhất quán (ví dụ liệt kê cả
hai cách viết một thẻ HTML, một cách đã lỗi thời), **không tự ý sửa nội
dung chính** — đề thi bám sách. Viết đúng theo sách, thêm một câu ngắn dạng
*"Đối chiếu với sách: …"* để học sinh không hoang mang khi so hai chỗ.

---

## 8. Kiểm chứng trên trình duyệt — bắt buộc, không đoán

Sau khi soạn xong một bài, **luôn** mở bằng công cụ trình duyệt (Browser
pane trong Claude Code) và kiểm — đừng chỉ đọc lại code rồi coi là xong:

1. Mở trang bài học, bấm vào thẻ "Lý thuyết", đọc lướt nội dung hiển thị có
   khớp ý đã viết không.
2. Với mọi khối `figure`: đo bằng `javascript_tool` xem có `<text>` nào
   tràn khỏi `viewBox` không, cỡ chữ nhỏ nhất có ≥12 không:

   ```js
   document.querySelectorAll('figure svg').forEach((svg, i) => {
     const vb = svg.viewBox.baseVal;
     let minFs = Infinity; const tran = [];
     svg.querySelectorAll('text').forEach(t => {
       const fs = parseFloat(getComputedStyle(t).fontSize || '0');
       if (fs > 0) minFs = Math.min(minFs, fs);
       const b = t.getBBox();
       if (b.x < 0 || b.y < 0 || b.x+b.width > vb.width || b.y+b.height > vb.height)
         tran.push(t.textContent.slice(0, 40));
     });
     console.log(i, {cyNhoNhat: minFs, tranMep: tran});
   });
   ```
3. Với mọi khối `code` có `preview: true`: dựng lại `srcdoc` đó trong một
   `<iframe sandbox="allow-same-origin">` **tạm, không phải khung thật** rồi
   đọc `getComputedStyle` để xác nhận kết quả hiển thị đúng ý định — khung
   thật trong trang bị `sandbox=""` chặn nên không đọc `contentDocument` từ
   ngoài được.
4. Thu nhỏ về `resize_window preset:"mobile"` (375px), kiểm lại bước 2.
5. Kiểm `preview_logs` / `read_console_messages` không có lỗi.
6. Nếu có câu hỏi `check`: bấm thử đáp án đúng bằng `javascript_tool`, xác
   nhận giải thích hiện ra khớp nội dung.

---

## 9. Cân bằng độ dài đáp án — `do_dai.py`

Web Tin 10 hiện **chưa có** script này. Tạo `do_dai.py` ở gốc dự án — bản đã
hoàn thiện sau khi rà lỗi ở Tin 12 (đọc được cả chuỗi nháy đơn lẫn nháy kép,
không đếm nhầm dấu `\`, quét cả ngân hàng câu hỏi lẫn câu `check` trong phần
lý thuyết):

```python
# do_dai.py — đếm số câu có đáp án đúng dài hơn hẳn phương án nhiễu.
# Mục tiêu: 0 câu ở mọi bài. Chạy ngay sau khi soạn xong mỗi bài.
import glob, io, os, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
NGUONG = 10
obj = re.compile(r"options:\s*\[(.*?)\]\s*,\s*answer:\s*(\d)", re.S)


def cac_chuoi(body):
    out, i, n = [], 0, len(body)
    while i < n:
        ch = body[i]
        if ch in "\"'":
            quote, i, buf = ch, i + 1, []
            while i < n:
                if body[i] == "\\":
                    buf.append(body[i + 1]); i += 2; continue
                if body[i] == quote:
                    i += 1; break
                buf.append(body[i]); i += 1
            out.append("".join(buf))
        else:
            i += 1
    return out


def quet(mau, ten_nhom):
    tong = hon = 0
    theo_bai = {}
    tong_dung = tong_nhieu = 0
    for f in sorted(glob.glob(mau)):
        s = open(f, encoding="utf-8").read()
        n = h = 0
        for m in obj.finditer(s):
            o = cac_chuoi(m.group(1))
            if len(o) != 4:
                continue
            i = int(m.group(2))
            L = [len(x) for x in o]
            nhieu = [l for j, l in enumerate(L) if j != i]
            tong += 1; n += 1
            tong_dung += L[i]; tong_nhieu += sum(nhieu) / 3
            if L[i] - max(nhieu) >= NGUONG:
                hon += 1; h += 1
                print(f"  ⚠ {os.path.basename(f)[:-3]} câu {n}: đúng {L[i]} kí tự, nhiễu dài nhất {max(nhieu)}")
        if n:
            theo_bai[os.path.basename(f)[:-3]] = (h, n)
    print(f"\n── {ten_nhom} ──")
    if not tong:
        print("  (chưa có câu nào)")
        return 0, 0
    print(f"{hon}/{tong} câu có đáp án đúng dài hơn hẳn ({hon * 100 // tong}%)")
    print(f"Độ dài trung bình: đáp án đúng {tong_dung / tong:.0f} kí tự, nhiễu {tong_nhieu / tong:.0f} kí tự")
    for t, (h, n) in sorted(theo_bai.items()):
        print(f"  {t}: {h}/{n} lỗi")
    return hon, tong


h1, t1 = quet("data/questions/bai-*.ts", "Ngân hàng câu hỏi (data/questions)")
h2, t2 = quet("data/theory/bai-*.ts", "Câu kiểm tra nhanh trong lí thuyết (data/theory)")

print(f"\n═══ TỔNG CỘNG: {h1 + h2}/{t1 + t2} câu cần sửa ═══")
sys.exit(1 if h1 + h2 else 0)
```

Chạy `python do_dai.py` sau mỗi bài. Ngưỡng: đáp án đúng dài hơn nhiễu ≥10
kí tự là bị gắn cờ — học sinh không được đoán mò bằng mẹo "chọn câu dài
nhất". Mục tiêu 0 câu.

---

## 10. Quy trình soạn một bài — 8 bước

1. **Xác định trang SGK** (bài mấy, trang bao nhiêu) → render ảnh bằng
   `render_sgk.py` → đọc kỹ từng trang bằng mắt, không đoán từ trí nhớ.
2. **Phác khung bài**: chia thành 4-6 mục theo đúng cấu trúc SGK, mỗi mục
   dự kiến dùng những loại khối nào (mục 4).
3. **Viết nội dung**: bám sát thuật ngữ SGK, chép nguyên văn câu kết luận
   đóng khung vào khối `note`. Với bài có mã HTML/CSS, ưu tiên khối `code`
   `preview: true` thay vì tả bằng lời.
4. **Vẽ 1-3 hình `figure`** cho chỗ khó hình dung nhất (mục 5, 7.3).
5. **Viết câu `check`** — 1-2 câu mỗi mục, xen ngay sau ý vừa học. Kiểm độ
   dài đáp án ngay lúc viết, đừng để dồn cuối bài.
6. **Wiring**: thêm file `data/theory/bai-XX.ts`, import + khai báo trong
   `lib/theory.ts`.
7. **Kiểm chứng trên trình duyệt** — làm đủ 6 bước ở mục 8, đặc biệt là các
   khẳng định trong hộp `update` (mục 7.2) và mọi hình `figure`.
8. **Chạy `python do_dai.py`**, sửa hết câu bị gắn cờ → `npm run build` xem
   có lỗi kiểu không (nhớ dừng `npm run dev` trước khi build, hai tiến trình
   cùng ghi vào `.next` sẽ làm hỏng cache) → commit & push.

---

## 11. Bẫy đã gặp — đọc trước khi soạn bài đầu tiên

- **PDF là bản scan, không grep được.** Phải render ảnh rồi đọc bằng mắt,
  không đoán nội dung từ tên bài.
- **Đừng chạy `npm run build` khi `npm run dev` đang chạy** — hỏng cache
  `.next`, dev server báo lỗi `Cannot find module`. Dừng dev server trước.
- **Cỡ chữ SVG dưới 12 sẽ vỡ trên điện thoại** — khung `figure` co về
  min-width 600px rồi cho vuốt ngang, scale thật ~0,94 lần.
- **`element.click()` bằng JavaScript KHÔNG phản ánh đúng `pointer-events:
  none`** — muốn kiểm một liên kết có bấm được thật hay không, dùng
  `elementFromPoint()` tại toạ độ giữa phần tử (đúng cơ chế trình duyệt
  dùng để xác định chuột bấm trúng gì), hoặc bấm thật bằng công cụ
  `computer` của Browser pane.
- **SGK có thể sai hoặc lạc hậu** — không viết hộp `update` từ suy đoán,
  luôn kiểm bằng `getComputedStyle` hay tra cứu trước (mục 7.2).
- **Đề thi tốt nghiệp bám sách** — kể cả khi phát hiện sách sai, phần lý
  thuyết chính và câu hỏi `check` vẫn phải theo đúng SGK, chỉ ghi chú thêm.

---

## 12. Việc cần làm trước khi coi một bài là xong

- [ ] Đọc đủ số trang SGK liên quan, không bỏ sót phần nào của bài
- [ ] Mọi thuật ngữ, câu kết luận đóng khung đúng nguyên văn sách
- [ ] Có ít nhất 1 hình `figure` cho chỗ khó nhất của bài
- [ ] Mọi khối `code preview:true` đã kiểm bằng `getComputedStyle`, không
      chỉ đọc code rồi tin là đúng
- [ ] Hộp `update` (nếu có) đã kiểm chứng, không suy đoán
- [ ] `python do_dai.py` báo 0 lỗi cho bài vừa soạn
- [ ] Hình `figure` không tràn chữ, cỡ nhỏ nhất ≥12, đã thử ở màn 375px
- [ ] `npm run build` sạch, không lỗi TypeScript
- [ ] Không có lỗi console khi mở trang bài học
