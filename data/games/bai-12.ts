import type {
  BriefGame,
  LessonGame,
  Sort3Game,
  SortGame,
  StudioGame,
  TimelineGame,
  ZoomGame,
} from "@/lib/types";

// =====================================================================
// BÀI 12. PHẦN MỀM THIẾT KẾ ĐỒ HOẠ — 6 trò chơi, độ khó tăng dần
// =====================================================================

// ---------------------------------------------------------------------
// GAME 1: SOI PIXEL — phóng to ảnh bí ẩn, đoán Bitmap hay Vector (3 màn)
// ---------------------------------------------------------------------
const zoomGame: ZoomGame = {
  kind: "zoom",
  id: "soi-pixel",
  title: "Soi Pixel: Bitmap hay Vector?",
  emoji: "🔬",
  instructions:
    "Kéo thanh phóng đại (hoặc chạm vào hình để đổi tâm kính lúp) rồi kết luận: ảnh bí ẩn là Bitmap hay Vector. Có 3 màn, mỗi màn khó hơn; em có 3 mạng ❤️ — đoán sai mất 1 mạng!",
  rounds: [
    // ----- Màn 1: dễ — bitmap độ phân giải thấp, lộ ô vuông rõ -----
    {
      id: "z1",
      level: 1,
      shape: "circle",
      color: "#ef4444",
      kind: "bitmap",
      res: 24,
      explain:
        "Phóng to lên là thấy từng ô vuông màu — đây là ảnh bitmap, lưu màu của từng điểm ảnh (pixel). Lưới điểm ảnh càng thưa thì càng lộ răng cưa sớm.",
    },
    {
      id: "z2",
      level: 1,
      shape: "star",
      color: "#facc15",
      kind: "vector",
      explain:
        "Phóng to 8 lần mà cạnh ngôi sao vẫn sắc nét, không có ô vuông nào — vector được máy vẽ lại bằng công thức nên luôn mượt.",
    },
    {
      id: "z3",
      level: 1,
      shape: "heart",
      color: "#ec4899",
      kind: "bitmap",
      res: 32,
      explain: "Viền trái tim vỡ thành bậc thang răng cưa khi phóng to: đặc trưng của bitmap.",
    },
    {
      id: "z4",
      level: 1,
      shape: "bolt",
      color: "#3b82f6",
      kind: "vector",
      explain: "Đường chéo của tia sét vẫn thẳng và sắc ở mọi mức phóng đại — đó là vector.",
    },
    // ----- Màn 2: vừa — độ phân giải cao hơn + có gợi ý tên tệp -----
    {
      id: "z5",
      level: 2,
      shape: "leaf",
      color: "#22c55e",
      kind: "bitmap",
      res: 64,
      clue: "Tệp: la-cay.jpg",
      explain:
        "Ở mức phóng nhỏ trông rất mịn, nhưng phóng đủ lớn vẫn lộ ô điểm ảnh. Tệp .jpg luôn là ảnh bitmap.",
    },
    {
      id: "z6",
      level: 2,
      shape: "flag",
      color: "#ef4444",
      kind: "vector",
      clue: "Tệp: co-lop.svg",
      explain: "Tệp .svg (Scalable Vector Graphics) là định dạng vector: phóng to bao nhiêu cũng nét.",
    },
    {
      id: "z7",
      level: 2,
      shape: "star",
      color: "#8b5cf6",
      kind: "bitmap",
      res: 80,
      smooth: true,
      explain:
        "Ảnh này bị nhoè mờ khi phóng to thay vì lộ ô vuông — vì phần mềm làm mịn (nội suy) giữa các điểm ảnh. Mờ nhoè khi phóng to vẫn là dấu hiệu của bitmap, vector thì không bao giờ mờ.",
    },
    {
      id: "z8",
      level: 2,
      shape: "heart",
      color: "#f97316",
      kind: "vector",
      clue: "Tệp: tim.svg",
      explain: "Viền trái tim mượt tuyệt đối ở độ phóng lớn nhất — vector.",
    },
    // ----- Màn 3: khó — bẫy tên tệp và ảnh xuất từ vector -----
    {
      id: "z9",
      level: 3,
      shape: "bolt",
      color: "#facc15",
      kind: "bitmap",
      res: 96,
      clue: "Logo vẽ bằng Inkscape → xuất ra logo.png",
      explain:
        "Logo gốc là vector, nhưng khi xuất ra tệp .png thì nó trở thành lưới điểm ảnh cố định. Phóng to bản PNG vẫn lộ ô vuông. Muốn giữ độ nét phải giữ tệp .svg gốc.",
    },
    {
      id: "z10",
      level: 3,
      shape: "circle",
      color: "#06b6d4",
      kind: "vector",
      clue: "Ảnh trông rất giống ảnh chụp màn hình",
      explain:
        "Bẫy đây! Dù nhìn giống một ảnh chụp, hình này phóng 8 lần vẫn nét căng nên là vector. Phải soi bằng kính lúp chứ không đoán theo cảm giác.",
    },
    {
      id: "z11",
      level: 3,
      shape: "leaf",
      color: "#10b981",
      kind: "bitmap",
      res: 128,
      smooth: true,
      clue: "Ảnh chụp màn hình (screenshot) một hình vẽ",
      explain:
        "Ảnh chụp màn hình luôn là bitmap — kể cả khi thứ được chụp là một hình vector. Độ phân giải cao khiến phải phóng đến mức tối đa mới thấy nhoè.",
    },
    {
      id: "z12",
      level: 3,
      shape: "flag",
      color: "#3b82f6",
      kind: "vector",
      clue: "Tệp: bieu-trung.svg · dung lượng 2 KB",
      explain:
        "Dung lượng nhỏ xíu (vài KB) và nét ở mọi mức phóng — vector chỉ lưu công thức hình học chứ không lưu hàng nghìn điểm ảnh.",
    },
  ],
};

// ---------------------------------------------------------------------
// GAME 2: BITMAP HAY VECTOR? — thẻ quẹt phân loại 2 nhóm
// ---------------------------------------------------------------------
const sortBitmapVector: SortGame = {
  kind: "sort",
  id: "bitmap-hay-vector",
  title: "Bitmap hay Vector? (Thẻ tốc độ)",
  emoji: "🖼️",
  instructions:
    "Mỗi thẻ là một sản phẩm hoặc đặc điểm của đồ hoạ máy tính. Phân loại nhanh: Đồ hoạ điểm ảnh (Bitmap) hay Đồ hoạ vector?",
  matchLabel: "Đồ hoạ Vector",
  matchEmoji: "📐",
  noMatchLabel: "Điểm ảnh (Bitmap)",
  noMatchEmoji: "🧩",
  items: [
    { id: "s1", emoji: "📷", label: "Ảnh chân dung chụp bằng điện thoại", isMatch: false, explain: "Ảnh chụp luôn là bitmap — mỗi điểm ảnh lưu một màu do cảm biến ghi lại." },
    { id: "s2", emoji: "🏷️", label: "Logo trường lưu ở tệp .svg", isMatch: true, explain: "SVG là định dạng vector chuẩn mở, dùng phổ biến trên web." },
    { id: "s3", emoji: "🔍", label: "Phóng to gấp 10 lần vẫn không bị răng cưa", isMatch: true, explain: "Vector được máy vẽ lại bằng công thức ở mọi tỉ lệ nên luôn sắc nét." },
    { id: "s4", emoji: "🔲", label: "Phóng to quá cỡ gốc sẽ lộ từng ô vuông", isMatch: false, explain: "Đó là đặc trưng của bitmap: số điểm ảnh cố định, phóng to chỉ làm điểm ảnh to lên." },
    { id: "s5", emoji: "📄", label: "Tệp .jpg", isMatch: false, explain: "JPG là định dạng bitmap quen thuộc của ảnh chụp." },
    { id: "s6", emoji: "🎞️", label: "Ảnh động .gif", isMatch: false, explain: "GIF là bitmap — gồm nhiều khung hình điểm ảnh nối tiếp nhau." },
    { id: "s7", emoji: "✒️", label: "Tệp .ai của Adobe Illustrator", isMatch: true, explain: "AI là định dạng vector của Illustrator." },
    { id: "s8", emoji: "🧮", label: "Lưu toạ độ và công thức của đường, hình, màu sắc", isMatch: true, explain: "Đây chính là cách vector mô tả hình ảnh — không lưu từng điểm ảnh." },
    { id: "s9", emoji: "🧱", label: "Lưu màu của từng ô điểm ảnh xếp thành lưới", isMatch: false, explain: "Đây là cách bitmap lưu ảnh — như bức tranh ghép từ hàng triệu viên gạch màu." },
    { id: "s10", emoji: "📸", label: "Ảnh chụp màn hình trò chơi (PNG)", isMatch: false, explain: "Ảnh chụp màn hình là bitmap, dù nội dung được chụp có thể là hình vẽ vector." },
    { id: "s11", emoji: "📊", label: "Biểu tượng (icon) cần hiển thị nét trên mọi cỡ màn hình", isMatch: true, explain: "Icon cần co giãn nhiều kích thước nên thường được vẽ dạng vector." },
    { id: "s12", emoji: "🗺️", label: "Bản vẽ kĩ thuật, sơ đồ phòng máy", isMatch: true, explain: "Sơ đồ gồm đường thẳng, hình khối chính xác — thế mạnh của vector." },
    { id: "s13", emoji: "🌅", label: "Tranh phong cảnh nhiều sắc độ, chi tiết phức tạp", isMatch: false, explain: "Màu sắc chuyển dần và chi tiết tinh vi hợp với bitmap hơn vector." },
    { id: "s14", emoji: "🪶", label: "Hình đơn giản nhưng dung lượng tệp rất nhẹ (vài KB)", isMatch: true, explain: "Vector chỉ lưu công thức nên hình đơn giản rất nhẹ; bitmap thì tỉ lệ thuận với số điểm ảnh." },
    { id: "s15", emoji: "🖨️", label: "Bản quét (scan) trang tài liệu giấy", isMatch: false, explain: "Máy quét tạo ra dữ liệu điểm ảnh nên bản scan là bitmap." },
    { id: "s16", emoji: "🔤", label: "Chữ nghệ thuật cần in từ danh thiếp đến băng rôn", isMatch: true, explain: "Chữ nghệ thuật cần in nhiều kích cỡ mà vẫn nét — nên dùng vector." },
  ],
};

// ---------------------------------------------------------------------
// GAME 3: GIMP, INKSCAPE HAY KHÔNG PHẢI? — phân loại 3 nhóm
// ---------------------------------------------------------------------
const sort3Software: Sort3Game = {
  kind: "sort3",
  id: "gimp-inkscape-khac",
  title: "GIMP, Inkscape hay phần mềm khác?",
  emoji: "🧰",
  instructions:
    "Mỗi thẻ là một công việc hoặc một khái niệm. Chọn công cụ phù hợp nhất: GIMP (xử lí ảnh bitmap), Inkscape (vẽ vector) hay phần mềm khác không phải bộ đôi này?",
  groups: [
    { label: "GIMP", emoji: "🖼️" },
    { label: "Inkscape", emoji: "🖌️" },
    { label: "Phần mềm khác", emoji: "🧩" },
  ],
  items: [
    { id: "t1", emoji: "✂️", label: "Xoá phông, cắt ghép nhân vật từ ảnh chụp", group: 0, explain: "Cắt ghép trên ảnh chụp là thế mạnh của GIMP — phần mềm xử lí ảnh bitmap." },
    { id: "t2", emoji: "🏫", label: "Vẽ logo lớp từ các hình khối và đường cong", group: 1, explain: "Vẽ mới hình khối cần co giãn nhiều cỡ → Inkscape." },
    { id: "t3", emoji: "📝", label: "Soạn bài văn nộp thầy cô", group: 2, explain: "Soạn thảo văn bản dùng phần mềm xử lí văn bản như Word, không phải phần mềm đồ hoạ." },
    { id: "t4", emoji: "🌞", label: "Chỉnh sáng/tối, phục chế tấm ảnh cũ bị ố", group: 0, explain: "Chỉnh sửa màu và phục chế ảnh chụp là việc của GIMP." },
    { id: "t5", emoji: "⭐", label: "Công cụ Ngôi sao, Elip, Hình chữ nhật trên Toolbox", group: 1, explain: "Toolbox với các công cụ hình khối cơ bản là giao diện của Inkscape." },
    { id: "t6", emoji: "🎬", label: "Dựng video clip có hiệu ứng chuyển cảnh", group: 2, explain: "Dựng video cần phần mềm biên tập video, không phải GIMP hay Inkscape." },
    { id: "t7", emoji: "📚", label: "Ghép nhiều lớp (layer) ảnh chồng lên nhau", group: 0, explain: "Làm việc với nhiều lớp ảnh bitmap giống Photoshop là sở trường của GIMP." },
    { id: "t8", emoji: "🎨", label: "Tô màu bằng Fill và đặt viền bằng Stroke", group: 1, explain: "Fill (màu tô) và Stroke (màu nét) là hai thuộc tính của đối tượng vector trong Inkscape." },
    { id: "t9", emoji: "💾", label: "Lưu tệp gốc ở định dạng .svg", group: 1, explain: "Inkscape lưu trực tiếp ở SVG — chuẩn vector mở dùng ngay được trên web." },
    { id: "t10", emoji: "📊", label: "Tính điểm trung bình cho cả lớp", group: 2, explain: "Tính toán dữ liệu dùng phần mềm bảng tính như Excel, không phải phần mềm đồ hoạ." },
    { id: "t11", emoji: "🧼", label: "Làm mịn da, xoá mụn trên ảnh chân dung", group: 0, explain: "Retouch ảnh chân dung là xử lí bitmap → GIMP." },
    { id: "t12", emoji: "🔤", label: "Thiết kế chữ nghệ thuật cho băng rôn khổ lớn", group: 1, explain: "Chữ cần phóng to không vỡ nét nên dùng vector → Inkscape." },
    { id: "t13", emoji: "🌐", label: "Chỉnh sửa ảnh ngay trên trình duyệt (Photopea)", group: 2, explain: "Photopea là công cụ khác, chạy trên web. GIMP và Inkscape là phần mềm cài trên máy." },
    { id: "t14", emoji: "🧭", label: "Vẽ bản đồ lối đi, sơ đồ phòng máy chính xác", group: 1, explain: "Sơ đồ gồm đường và hình khối chuẩn xác, cần co giãn khi in → vector, Inkscape." },
    { id: "t15", emoji: "🪄", label: "Photoshop, một phần mềm thương mại nổi tiếng", group: 2, explain: "Photoshop tương tự GIMP nhưng là phần mềm trả phí của Adobe, không phải GIMP." },
  ],
};

// ---------------------------------------------------------------------
// GAME 4: HỌA SĨ INKSCAPE — mô phỏng giao diện, vẽ theo yêu cầu (6 nhiệm vụ)
// ---------------------------------------------------------------------
const studioGame: StudioGame = {
  kind: "studio",
  id: "hoa-si-inkscape",
  title: "Họa sĩ Inkscape: Vẽ theo đơn đặt hàng",
  emoji: "🖌️",
  instructions:
    "Chọn công cụ trong Toolbox, kéo chuột trên Canvas để vẽ, chọn Tô (Fill) hoặc Nét (Stroke) rồi chạm Palette để tô màu. Xong thì bấm Lưu .svg để nộp. Có 6 đơn hàng từ dễ đến khó!",
  missions: [
    {
      id: "m1",
      level: 1,
      title: "Đơn 1: Mặt trời đỏ",
      brief: "Vẽ MỘT hình elip (hình tròn), tô màu Đỏ, không có viền.",
      hint: "Chọn công cụ ◯ → kéo chuột trên Canvas → ở chế độ Tô (Fill) chạm màu Đỏ.",
      targets: [{ type: "ellipse", fill: "do", stroke: "none" }],
      explain: "Fill là màu bên trong hình. Hình mới vẽ chưa có viền (stroke) nên chỉ cần đổi Fill.",
    },
    {
      id: "m2",
      level: 1,
      title: "Đơn 2: Ô vuông xanh viền đen",
      brief: "Vẽ MỘT hình chữ nhật, tô Xanh dương và viền (stroke) màu Đen.",
      hint: "Chọn ▭ → kéo vẽ → Tô: Xanh dương → bấm sang chế độ Nét (Stroke) → chạm Đen.",
      targets: [{ type: "rect", fill: "xanh-duong", stroke: "den" }],
      explain: "Fill và Stroke là hai thuộc tính độc lập: đổi nét không làm thay đổi màu tô bên trong.",
    },
    {
      id: "m3",
      level: 2,
      title: "Đơn 3: Cờ đỏ sao vàng",
      brief: "Vẽ một hình chữ nhật tô Đỏ và một ngôi sao tô Vàng. Cả hai đều không có viền.",
      hint: "Vẽ chữ nhật tô Đỏ trước, sau đó chọn ★ vẽ ngôi sao đặt lên trên rồi tô Vàng.",
      targets: [
        { type: "rect", fill: "do", stroke: "none" },
        { type: "star", fill: "vang", stroke: "none" },
      ],
      explain: "Một bản vẽ vector gồm nhiều đối tượng độc lập chồng lên nhau, mỗi đối tượng có Fill/Stroke riêng.",
    },
    {
      id: "m4",
      level: 2,
      title: "Đơn 4: Nhãn dán tên lớp 10A3",
      brief:
        "Vẽ một hình elip tô Tím nhạt, viền Tím đậm, rồi dùng công cụ Văn bản (T) gõ nhãn có chữ 10A3 đặt lên trên.",
      hint: "Elip: Tô Tím nhạt, Nét Tím đậm. Sau đó chọn T, nhập 10A3 vào ô nội dung và nháy lên Canvas.",
      targets: [
        { type: "ellipse", fill: "tim-nhat", stroke: "tim-dam" },
        { type: "text", text: "10A3" },
      ],
      textDefault: "Lớp 10A3",
      explain: "Đây chính là tình huống nhãn dán trong bài: Fill tím nhạt, Stroke tím đậm, thêm chữ bằng công cụ Văn bản.",
    },
    {
      id: "m5",
      level: 3,
      title: "Đơn 5: Sửa lỗi bản vẽ mặt trời",
      brief:
        "Bản vẽ có sẵn bị khách chê: mặt trời đang tô Xanh lá viền Đỏ, lại còn thừa một hình chữ nhật. Hãy sửa thành tô Vàng, viền Cam và xoá hình thừa.",
      hint: "Chọn ↖ rồi nháy vào hình, đổi Tô và Nét; chọn hình chữ nhật rồi bấm 🗑 Xoá.",
      preset: [
        { type: "ellipse", x: 120, y: 60, w: 150, h: 150, fill: "xanh-la", stroke: "do" },
        { type: "rect", x: 20, y: 215, w: 120, h: 55, fill: "den", stroke: "none" },
      ],
      targets: [{ type: "ellipse", fill: "vang", stroke: "cam" }],
      explain: "Muốn sửa một đối tượng vector, chọn nó bằng công cụ Chọn rồi chỉnh lại Fill/Stroke mà không cần vẽ lại.",
    },
    {
      id: "m6",
      level: 3,
      title: "Đơn 6: Logo Câu lạc bộ Tin học",
      brief:
        "Vẽ logo gồm: một elip tô Đen viền Xanh dương, một ngôi sao tô Vàng không viền và dòng chữ TIN (công cụ Văn bản). Đúng 3 đối tượng, không thừa!",
      hint: "Elip: Tô Đen, Nét Xanh dương. Ngôi sao: Tô Vàng (Nét: Không màu ✕). Chữ: nhập TIN.",
      textDefault: "TIN",
      targets: [
        { type: "ellipse", fill: "den", stroke: "xanh-duong" },
        { type: "star", fill: "vang", stroke: "none" },
        { type: "text", text: "TIN" },
      ],
      explain:
        "Logo kết hợp nhiều đối tượng vector. Vì mọi thứ đều là vector nên logo này in được từ tem nhỏ đến phông sân khấu mà không vỡ nét.",
    },
  ],
};

// ---------------------------------------------------------------------
// GAME 5: KHÁCH HÀNG GIAO VIỆC — chọn loại đồ hoạ, phần mềm, định dạng
// ---------------------------------------------------------------------
const briefGame: BriefGame = {
  kind: "brief",
  id: "khach-hang-giao-viec",
  title: "Khách hàng giao việc (Studio thiết kế)",
  emoji: "💼",
  instructions:
    "Mỗi khách hàng gửi một yêu cầu. Em là nhà thiết kế: chọn loại đồ hoạ phù hợp, phần mềm thực hiện và định dạng tệp giao hàng. Đúng cả 3 mục mới được trọn điểm — càng về sau khách càng khó tính!",
  scenarios: [
    {
      id: "b1",
      level: 1,
      emoji: "🏫",
      client: "Ban cán sự lớp 10A1",
      request: "Thiết kế logo lớp để in lên áo, cờ và băng rôn Hội khoẻ Phù Đổng.",
      needs: ["In nhiều kích cỡ", "Luôn sắc nét"],
      type: "vector",
      software: "inkscape",
      format: "SVG",
      formats: ["SVG", "JPG", "BMP", "GIF"],
      explain: "Logo cần co giãn nhiều cỡ mà vẫn nét → vector, vẽ bằng Inkscape, lưu .svg.",
    },
    {
      id: "b2",
      level: 1,
      emoji: "📸",
      client: "Cô chủ nhiệm",
      request: "Ảnh kỉ yếu chụp ngược sáng, hơi tối. Hãy chỉnh sáng và màu cho đẹp hơn.",
      needs: ["Ảnh chụp thật", "Chỉnh màu sắc"],
      type: "bitmap",
      software: "gimp",
      format: "JPG",
      formats: ["SVG", "JPG", "AI", "EPS"],
      explain: "Ảnh chụp là bitmap, chỉnh sáng/màu trên bitmap là việc của GIMP; ảnh chụp lưu thông dụng ở JPG.",
    },
    {
      id: "b3",
      level: 2,
      emoji: "🎭",
      client: "Đội văn nghệ",
      request: "Phông sân khấu rộng 6 mét cần dùng lại logo trường vẽ từ trước.",
      needs: ["Phóng to rất lớn", "Không được vỡ hạt"],
      type: "vector",
      software: "inkscape",
      format: "SVG",
      formats: ["PNG", "GIF", "SVG", "JPG"],
      explain: "Phóng từ danh thiếp lên 6 mét mà vẫn nét chỉ có thể là vector (SVG).",
    },
    {
      id: "b4",
      level: 2,
      emoji: "🪪",
      client: "Phòng Đoàn trường",
      request: "Tách nhân vật khỏi nền trong ảnh chụp để ghép sang phông xanh mới.",
      needs: ["Cắt ghép ảnh chụp", "Xoá phông"],
      type: "bitmap",
      software: "gimp",
      format: "PNG",
      formats: ["SVG", "PNG", "EPS", "AI"],
      explain: "Cắt ghép ảnh chụp là bitmap → GIMP. PNG giữ được nền trong suốt sau khi xoá phông.",
    },
    {
      id: "b5",
      level: 2,
      emoji: "🧭",
      client: "Thầy phụ trách phòng máy",
      request: "Vẽ sơ đồ bố trí 40 máy tính, in khổ nhỏ A4 và cả khổ lớn A0 treo tường.",
      needs: ["Đường nét chính xác", "In hai cỡ khác nhau"],
      type: "vector",
      software: "inkscape",
      format: "SVG",
      formats: ["JPG", "SVG", "GIF", "BMP"],
      explain: "Sơ đồ gồm hình khối chính xác và cần in nhiều khổ → vector bằng Inkscape.",
    },
    {
      id: "b6",
      level: 3,
      emoji: "📜",
      client: "Thư viện trường",
      request: "Phục chế một tấm ảnh chụp từ thập niên 80: bị ố vàng, xước nhiều.",
      needs: ["Ảnh cũ đã quét", "Sửa vết xước, cân màu"],
      type: "bitmap",
      software: "gimp",
      format: "JPG",
      formats: ["AI", "JPG", "SVG", "EPS"],
      explain: "Ảnh quét là bitmap; phục chế bằng GIMP. JPG là định dạng thích hợp cho ảnh chụp.",
    },
    {
      id: "b7",
      level: 3,
      emoji: "🌐",
      client: "Câu lạc bộ lập trình web",
      request:
        "Thiết kế bộ biểu tượng (icon) cho website: phải nét trên cả màn hình điện thoại lẫn màn hình 4K, và tải thật nhanh.",
      needs: ["Nét ở mọi độ phân giải", "Dung lượng cực nhẹ"],
      type: "vector",
      software: "inkscape",
      format: "SVG",
      formats: ["BMP", "SVG", "JPG", "GIF"],
      explain: "Icon nét ở mọi màn hình và nhẹ → vector SVG vẽ bằng Inkscape, trình duyệt hiển thị trực tiếp.",
    },
    {
      id: "b8",
      level: 3,
      emoji: "🎨",
      client: "Cô giáo Mĩ thuật",
      request:
        "Chỉnh màu và ghép 3 ảnh chụp sự kiện thành một tấm ảnh nghệ thuật, làm thành các lớp (layer) chồng nhau.",
      needs: ["Nhiều lớp ảnh chụp", "Hiệu ứng màu sắc"],
      type: "bitmap",
      software: "gimp",
      format: "PNG",
      formats: ["PNG", "SVG", "AI", "EPS"],
      explain: "Ghép lớp trên ảnh chụp là bitmap → GIMP. PNG giữ chất lượng tốt khi xuất ảnh cuối.",
    },
    {
      id: "b9",
      level: 3,
      emoji: "🧩",
      client: "Khách khó tính",
      request:
        "Có logo công ty đã vẽ sẵn bằng vector. Khách muốn sau này in cả bảng hiệu lớn nên cần giữ bản gốc nét nhất, đừng làm hỏng!",
      needs: ["Giữ bản gốc", "Còn in lớn trong tương lai"],
      type: "vector",
      software: "inkscape",
      format: "SVG",
      formats: ["JPG", "PNG", "SVG", "GIF"],
      explain:
        "Xuất ra JPG/PNG/GIF sẽ biến logo thành bitmap cố định. Muốn giữ bản gốc nét mãi mãi phải giữ tệp vector (SVG).",
    },
  ],
};

// ---------------------------------------------------------------------
// GAME 6: QUY TRÌNH VẼ NHÃN DÁN — sắp xếp các bước trong Inkscape
// ---------------------------------------------------------------------
const timelineInkscape: TimelineGame = {
  kind: "timeline",
  id: "quy-trinh-ve-nhan-dan",
  title: "Quy trình vẽ nhãn dán bằng Inkscape",
  emoji: "🪜",
  instructions:
    "Sắp xếp các thao tác vẽ nhãn dán lớp bằng Inkscape theo đúng trình tự, từ lúc mở phần mềm đến khi lưu tệp.",
  items: [
    { id: "q1", emoji: "🚀", label: "Mở Inkscape và quan sát Toolbox, Canvas, Palette", year: "Bước 1", explain: "Làm quen với giao diện ba khu vực chính trước khi vẽ." },
    { id: "q2", emoji: "🛠️", label: "Chọn công cụ Hình elip (◯) trên Toolbox", year: "Bước 2", explain: "Phải chọn công cụ trước rồi mới vẽ được hình tương ứng." },
    { id: "q3", emoji: "🖱️", label: "Giữ và kéo chuột trên Canvas để tạo hình", year: "Bước 3", explain: "Kéo chuột trên trang vẽ, thả ra để hoàn tất hình." },
    { id: "q4", emoji: "🎨", label: "Nháy ô màu trên Palette để đặt màu tô (Fill)", year: "Bước 4", explain: "Khi hình đang được chọn, nháy trái vào ô màu để đặt Fill." },
    { id: "q5", emoji: "🖍️", label: "Giữ Shift và nháy ô màu để đặt màu nét (Stroke)", year: "Bước 5", explain: "Shift + nháy trái đặt màu viền, tách biệt với màu tô." },
    { id: "q6", emoji: "💾", label: "Chọn File ➜ Save (Ctrl+S) để lưu thành tệp .svg", year: "Bước 6", explain: "Lưu cuối cùng: Inkscape lưu trực tiếp định dạng SVG." },
  ],
};

const games: LessonGame[] = [
  zoomGame,
  studioGame,
  briefGame,
  sortBitmapVector,
  sort3Software,
  timelineInkscape,
];

export default games;
