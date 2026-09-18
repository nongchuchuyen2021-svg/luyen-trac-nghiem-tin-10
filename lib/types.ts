export type Question = {
  id: string;
  q: string;
  // Đoạn code minh hoạ (hiển thị khối chữ mono riêng dưới câu hỏi), nếu có
  code?: string;
  options: [string, string, string, string];
  // Chỉ số đáp án đúng trong mảng options (0-3). Khi luyện, thứ tự phương án
  // được trộn ngẫu nhiên — xem QuizClient.
  answer: 0 | 1 | 2 | 3;
  explain: string;
};

// Câu trắc nghiệm đúng/sai 4 mệnh đề (dạng D2 đề thi tốt nghiệp THPT từ 2025):
// một lời dẫn tình huống + 4 ý a/b/c/d, đánh giá đúng/sai từng ý độc lập.
export type TFStatement = {
  text: string;
  answer: boolean; // true = Đúng, false = Sai
  explain: string;
};

export type TFQuestion = {
  id: string;
  context: string; // lời dẫn tình huống (3 dòng trở lên, có ngữ cảnh sinh động)
  code?: string;
  statements: TFStatement[]; // luôn 4 ý
};

// Câu tự luận: đề bài + gợi ý trả lời để học sinh tự đối chiếu
export type EssayQuestion = {
  id: string;
  q: string;
  code?: string;
  answer: string; // gợi ý đáp án, xuống dòng bằng \n
};

// Bộ câu hỏi bổ sung của một bài (ngoài trắc nghiệm 4 phương án)
export type LessonExtra = {
  tf: TFQuestion[];
  essay: EssayQuestion[];
};

export type Lesson = {
  id: string; // slug dùng trong URL, vd "bai-01"
  title: string; // vd "Bài 1. Thông tin và xử lí thông tin"
  available: boolean; // false = chưa có câu hỏi, hiện mờ trên trang chủ
};

// Một thẻ trong game kéo-thả phân loại 2 nhóm (đúng/sai, có/không,...)
export type SortGameItem = {
  id: string;
  emoji: string;
  label: string;
  isMatch: boolean; // true = thuộc nhóm bên phải (label "match"), false = nhóm bên trái
  explain: string;
};

// Game kéo-thả phân loại 2 nhóm, vd "Thiết bị nào là thông minh?"
export type SortGame = {
  kind: "sort";
  id: string; // slug duy nhất trong 1 bài, dùng làm key khi chọn game
  title: string;
  emoji: string;
  instructions: string; // hướng dẫn ngắn hiển thị đầu game
  matchLabel: string; // nhãn khay bên phải, vd "Thông minh"
  matchEmoji: string;
  noMatchLabel: string; // nhãn khay bên trái, vd "Không phải"
  noMatchEmoji: string;
  items: SortGameItem[];
};

// Một thẻ trong game phân loại 3 nhóm — vd "SaaS, PaaS hay IaaS?"
export type Sort3Item = {
  id: string;
  emoji: string;
  label: string;
  group: 0 | 1 | 2; // chỉ số nhóm đúng trong mảng groups của Sort3Game
  explain: string;
};

// Game chọn 1 trong 3 nhóm cho mỗi thẻ (khi 2 nhóm không đủ diễn tả nội dung,
// vd 3 loại hình dịch vụ đám mây SaaS/PaaS/IaaS) — chạm nút nhóm để trả lời.
export type Sort3Game = {
  kind: "sort3";
  id: string;
  title: string;
  emoji: string;
  instructions: string;
  groups: [{ label: string; emoji: string }, { label: string; emoji: string }, { label: string; emoji: string }];
  items: Sort3Item[];
};

// Một mốc trong game sắp xếp dòng thời gian — thứ tự đúng chính là thứ tự
// xuất hiện trong mảng `items` của TimelineGame (không cần trường "order" riêng).
export type TimelineItem = {
  id: string;
  emoji: string;
  label: string;
  year: string; // hiển thị sau khi kiểm tra, vd "1957"
  explain: string;
};

// Game kéo-thả (hoặc chạm) sắp xếp các mốc theo đúng trình tự thời gian
export type TimelineGame = {
  kind: "timeline";
  id: string;
  title: string;
  emoji: string;
  instructions: string;
  items: TimelineItem[]; // đã đúng thứ tự thời gian sẵn trong data — game sẽ tự xáo khi chơi
};

export type LessonGame = SortGame | TimelineGame | Sort3Game;

export type Topic = {
  id: string;
  name: string;
  emoji: string;
  lessons: Lesson[];
};

export type LessonProgress = {
  best: number; // điểm cao nhất, phần trăm 0-100
  attempts: number;
  lastAt: string; // ISO date
};

export type ProgressMap = Record<string, LessonProgress>;

export type LessonCounts = {
  mcq: number;
  tf: number;
  essay: number;
  theory: boolean;
};

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
  // Hộp "Cập nhật 2026": chỗ SGK đã lạc hậu so với thực tế
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

// ─── Ôn tập tổng kết ─────────────────────────────────────────────────────────
// Trang ôn nhanh trước khi kiểm tra: thẻ lật ghi nhớ, lỗi hay gặp, mẹo nhớ và
// một checklist tự đánh giá. Khác với Lý thuyết (đọc hiểu lần đầu), trang này
// dành cho lúc đã học xong, chỉ cần ôn lại nhanh những điểm cốt lõi.
export type ReviewFlashcard = {
  front: string; // mặt trước: câu hỏi hoặc khái niệm
  back: string; // mặt sau: câu trả lời ngắn gọn
};

export type ReviewMistake = {
  mistake: string; // lỗi/nhầm lẫn hay gặp
  fix: string; // cách hiểu/sửa đúng
};

export type LessonReview = {
  summary: string; // 1-2 câu tổng kết cả bài
  keyPoints: string[]; // ý cốt lõi, 4-6 gạch đầu dòng
  commonMistakes: ReviewMistake[];
  tips: string[]; // mẹo ghi nhớ nhanh
  flashcards: ReviewFlashcard[];
  checklist: string[]; // học sinh tự tick "tôi đã..."
  diagram?: string; // khoá tra trong components/theory/Diagram.tsx, hình tổng kết (nếu có)
};
