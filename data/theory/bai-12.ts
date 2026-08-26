import type { LessonTheory } from "@/lib/types";

// Bài 12. Phần mềm thiết kế đồ hoạ
// SGK trang 62–66, Chủ đề 4: Ứng dụng tin học
const theory: LessonTheory = {
  intro:
    "Từ logo trường, poster hội trại đến ảnh kỉ yếu — tất cả đều là **sản phẩm đồ hoạ**. Bài này giúp em phân biệt tận gốc **hai cách máy tính \"vẽ\" nên một hình ảnh** (điểm ảnh và vector), làm quen với bộ đôi phần mềm **miễn phí GIMP & Inkscape**, và biết cách chọn đúng công cụ cho đúng việc để không bao giờ phải ôm một tấm poster vỡ hạt lên sân khấu nữa.",
  minutes: 9,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "bitmap-va-vector",
      emoji: "🖼️",
      heading: "Hai thế giới của đồ hoạ máy tính: Điểm ảnh và Vector",
      blocks: [
        {
          kind: "text",
          text: "Mọi hình ảnh hiển thị trên máy tính đều được tạo ra theo một trong hai cách hoàn toàn khác nhau. **Đồ hoạ điểm ảnh (bitmap/raster)** ghi lại màu của **từng ô điểm ảnh (pixel)** xếp thành lưới — giống như một bức tranh ghép từ hàng triệu viên gạch màu nhỏ xíu. **Đồ hoạ vector** thì không lưu điểm ảnh nào cả, mà lưu lại **công thức toán học** mô tả các đường, hình và màu sắc — giống như một bản vẽ kĩ thuật ghi \"vẽ một hình tròn tâm A, bán kính 5cm, tô màu đỏ\" chứ không tô từng ô vuông.",
        },
        {
          kind: "figure",
          diagram: "bitmap-vs-vector",
          caption: "Hình 12.1. Phóng to một hình tròn: Bitmap vỡ hạt, Vector luôn mượt",
        },
        {
          kind: "compare",
          left: {
            title: "Đồ hoạ điểm ảnh (Bitmap)",
            emoji: "🧩",
            items: [
              "Lưu màu của **từng pixel** trong một lưới cố định",
              "**Phóng to quá cỡ gốc** sẽ hiện răng cưa, vỡ hạt",
              "Dung lượng tệp tỉ lệ thuận với **số lượng điểm ảnh**",
              "Là định dạng của **mọi ảnh chụp**: JPG, PNG, GIF, BMP",
            ],
          },
          right: {
            title: "Đồ hoạ vector",
            emoji: "📐",
            items: [
              "Lưu **toạ độ và công thức** của đường, hình, màu sắc",
              "**Phóng to bao nhiêu cũng nét** vì máy vẽ lại từ công thức",
              "Thường **nhẹ hơn nhiều** với hình vẽ đơn giản (logo, biểu tượng)",
              "Định dạng chuẩn cho web và thiết kế: SVG, AI, EPS",
            ],
          },
        },
        {
          kind: "example",
          title: "Tình huống: Cờ lớp bị vỡ hạt ngay trước ngày hội thao",
          text: "Chuẩn bị Hội khoẻ Phù Đổng, bạn Kiên lấy luôn một tấm ảnh chụp logo lớp trên điện thoại rồi phóng to gấp 10 lần để in cờ khổ A1. Ra hàng in, tấm cờ hiện lên đầy vết răng cưa lởm chởm, nhìn xa như bị nhoè. Trong khi đó, bạn Vy ngồi vẽ lại đúng logo ấy bằng Inkscape chỉ với vài hình khối và đường cong đơn giản — file của Vy phóng lên cỡ nào in ra cũng sắc nét như nhau. Bài học: ảnh chụp (bitmap) không phải lựa chọn tốt để phóng to quá nhiều lần; hình vẽ cần co giãn nhiều cỡ nên dùng vector ngay từ đầu.",
        },
        {
          kind: "note",
          text: "Đồ hoạ điểm ảnh phù hợp để lưu ảnh chụp, tranh vẽ nhiều màu sắc, chi tiết phức tạp — nhưng vỡ hạt khi phóng to quá kích thước gốc. Đồ hoạ vector phù hợp để vẽ logo, biểu tượng, chữ nghệ thuật, sơ đồ, bản vẽ kĩ thuật — những sản phẩm cần in ở nhiều kích cỡ khác nhau mà vẫn giữ được độ sắc nét.",
        },
        {
          kind: "check",
          q: "Vì sao một bức ảnh chụp bằng điện thoại khi phóng to quá lớn lại bị vỡ hạt, còn một logo vẽ bằng Inkscape thì không?",
          options: [
            "Vì ảnh chụp là bitmap lưu màu từng pixel cố định, còn logo vector được máy vẽ lại bằng công thức toán học ở mọi kích cỡ",
            "Vì ảnh chụp có dung lượng nhỏ hơn nên chất lượng kém hơn logo vector có dung lượng lớn",
            "Vì điện thoại chụp ảnh với độ phân giải thấp hơn màn hình máy tính dùng để vẽ logo",
            "Vì logo vector thực chất cũng là ảnh bitmap nhưng được nén lại trước khi lưu",
          ],
          answer: 0,
          explain:
            "Bitmap lưu cố định số lượng điểm ảnh nên phóng to vượt quá số điểm đó sẽ lộ từng ô vuông (vỡ hạt); vector lưu công thức nên ở bất kì tỉ lệ nào máy cũng vẽ lại đường nét mượt mà, không phụ thuộc số điểm ảnh.",
        },
        {
          kind: "check",
          q: "Trường hợp nào sau đây NÊN chọn đồ hoạ vector thay vì bitmap?",
          options: [
            "Thiết kế logo trường cần in từ danh thiếp nhỏ đến phông sân khấu lớn",
            "Lưu lại một bức ảnh chụp phong cảnh để đăng lên trang cá nhân",
            "Lưu ảnh chụp màn hình một trò chơi điện tử để làm ảnh nền máy tính",
            "Quét lại một trang tài liệu giấy cũ để lưu trữ như ảnh gốc",
          ],
          answer: 0,
          explain:
            "Logo cần co giãn ở rất nhiều kích thước khác nhau mà vẫn sắc nét — đây chính là thế mạnh của vector. Ảnh chụp, ảnh chụp màn hình và tài liệu quét đều vốn dĩ là dữ liệu điểm ảnh (bitmap), không thể và không cần chuyển sang vector.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "phan-mem-do-hoa",
      emoji: "🧰",
      heading: "Bộ đôi phần mềm đồ hoạ miễn phí: GIMP và Inkscape",
      blocks: [
        {
          kind: "text",
          text: "Ngành thiết kế chuyên nghiệp dùng những phần mềm trả phí nổi tiếng như Adobe Photoshop, Adobe Illustrator hay CorelDRAW. Nhưng học sinh hoàn toàn có thể luyện tập bằng hai phần mềm **mã nguồn mở, miễn phí 100%** với đầy đủ tính năng cốt lõi: **GIMP** (xử lí ảnh bitmap) và **Inkscape** (vẽ đồ hoạ vector).",
        },
        {
          kind: "figure",
          diagram: "gimp-vs-inkscape",
          caption: "Hình 12.2. GIMP xử lí ảnh điểm ảnh — Inkscape vẽ đồ hoạ vector",
        },
        {
          kind: "cards",
          tone: "grape",
          items: [
            {
              emoji: "🖼️",
              title: "GIMP (GNU Image Manipulation Program)",
              text: "Cắt ghép, xoá phông, chỉnh sáng/tối, phục chế ảnh cũ, ghép nhiều lớp (layer) ảnh chồng lên nhau — mọi thao tác đều diễn ra trên nền bitmap, giống hệt cách Photoshop hoạt động.",
            },
            {
              emoji: "🖌️",
              title: "Inkscape",
              text: "Vẽ hình khối, đường cong Bézier, chữ nghệ thuật; mỗi đối tượng có hai thuộc tính màu tách biệt là **màu tô (fill)** và **màu nét (stroke)**. Lưu trực tiếp ở định dạng **SVG** — chuẩn vector mở dùng phổ biến trên web.",
            },
            {
              emoji: "🎨",
              title: "Các phần mềm chuyên nghiệp cùng nhóm",
              text: "Bitmap: Adobe Photoshop, Photopea (chạy ngay trên trình duyệt). Vector: Adobe Illustrator, CorelDRAW, Figma (thiên về thiết kế giao diện, chạy trên web và có thể cộng tác nhiều người cùng lúc).",
            },
          ],
        },
        {
          kind: "example",
          title: "Tình huống: Ban tổ chức hội trại và hai đơn hàng thiết kế",
          text: "Ban tổ chức hội trại 26/3 giao hai việc: (1) làm tấm banner cổng trại với tên trại, khối hình học và mũi tên chỉ lối — in khổ 3×2 mét; (2) ghép 40 tấm ảnh chụp hoạt động của các lớp thành một bức ảnh kỉ niệm chung, kèm chỉnh sáng cho đều. Việc (1) chọn **Inkscape** vì banner toàn hình khối và chữ, cần phóng to khổ lớn không vỡ. Việc (2) chọn **GIMP** vì đang thao tác trên hàng chục tấm ảnh chụp thật (bitmap), cần ghép lớp và chỉnh màu — đúng sở trường của phần mềm xử lí ảnh.",
        },
        {
          kind: "note",
          text: "GIMP và Inkscape đều là phần mềm nguồn mở, miễn phí hoàn toàn, không cần mua bản quyền. Chọn phần mềm dựa trên bản chất của sản phẩm cần làm: thao tác trên ảnh chụp có sẵn → GIMP (bitmap); vẽ mới hình khối, chữ, biểu tượng cần co giãn nhiều cỡ → Inkscape (vector).",
        },
        {
          kind: "check",
          q: "GIMP và Inkscape khác nhau cơ bản ở điểm nào?",
          options: [
            "GIMP xử lí đồ hoạ bitmap (ảnh chụp), còn Inkscape vẽ đồ hoạ vector (hình khối, logo)",
            "GIMP dùng để xem video, còn Inkscape dùng để nghe nhạc trên máy tính",
            "GIMP là phần mềm trả phí, còn Inkscape hoàn toàn miễn phí không giới hạn",
            "GIMP chỉ chạy trên điện thoại, còn Inkscape chỉ chạy trên máy tính để bàn",
          ],
          answer: 0,
          explain:
            "GIMP tương ứng với Photoshop (xử lí ảnh điểm ảnh), Inkscape tương ứng với Illustrator (vẽ đồ hoạ vector). Cả hai đều miễn phí và đều chạy đa nền tảng trên máy tính.",
        },
        {
          kind: "check",
          q: "Ban tổ chức cần ghép 40 ảnh chụp hoạt động các lớp thành một ảnh kỉ niệm chung và chỉnh sáng cho đều màu. Nên dùng phần mềm nào?",
          options: [
            "GIMP, vì đây là thao tác ghép lớp và chỉnh màu trên ảnh bitmap",
            "Inkscape, vì ảnh kỉ niệm cần phóng to không vỡ hạt",
            "Cả hai đều không phù hợp, phải dùng phần mềm dựng video",
            "Bất kì phần mềm nào cũng được vì bitmap và vector là như nhau",
          ],
          answer: 0,
          explain:
            "Ảnh chụp vốn là dữ liệu bitmap; ghép lớp và chỉnh màu trên nhiều tấm ảnh chụp là công việc sở trường của GIMP, không phải của phần mềm vector như Inkscape.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "lam-quen-inkscape",
      emoji: "🖌️",
      heading: "Làm quen với giao diện Inkscape",
      blocks: [
        {
          kind: "text",
          text: "Mở Inkscape lần đầu, em sẽ thấy bốn khu vực chính: **Toolbox** (hộp công cụ) là dải icon dọc bên trái để chọn công cụ vẽ; **Canvas** (trang vẽ) là vùng trắng ở giữa — nơi mọi đối tượng đồ hoạ được tạo ra; **Palette** (bảng màu) là dải màu nằm dưới đáy màn hình để tô nhanh; và thanh thuộc tính công cụ phía trên canvas hiển thị các tuỳ chọn của công cụ đang chọn.",
        },
        {
          kind: "figure",
          diagram: "inkscape-giao-dien",
          caption: "Hình 12.3. Toolbox – Canvas – Palette trong cửa sổ làm việc Inkscape",
        },
        {
          kind: "list",
          items: [
            "**Công cụ Chọn (↖)**: chọn, di chuyển, xoay, đổi kích thước một đối tượng đã vẽ",
            "**Công cụ Hình chữ nhật (▭) / Hình elip (◯) / Ngôi sao (★)**: vẽ nhanh các hình khối cơ bản bằng cách kéo chuột trên canvas",
            "**Công cụ Bézier (✎)**: vẽ đường và hình tự do bằng cách đặt từng điểm neo (anchor point)",
            "**Công cụ Văn bản (T)**: gõ chữ trực tiếp lên trang vẽ, chỉnh được phông chữ và cỡ chữ như phần mềm soạn thảo",
          ],
        },
        {
          kind: "steps",
          items: [
            {
              label: "B1",
              title: "Chọn công cụ trên Toolbox",
              text: "Nháy vào icon hình khối cần vẽ (ví dụ Hình elip ◯) ở dải công cụ bên trái.",
            },
            {
              label: "B2",
              title: "Kéo chuột trên Canvas",
              text: "Giữ và kéo chuột trên trang vẽ để tạo hình với kích thước mong muốn — thả chuột để hoàn tất.",
            },
            {
              label: "B3",
              title: "Tô màu bằng Palette",
              text: "Với hình đang được chọn: nháy trái vào một ô màu trong Palette để đặt **màu tô (fill)**; giữ Shift rồi nháy trái để đặt **màu nét (stroke)**.",
            },
            {
              label: "B4",
              title: "Lưu tệp .svg",
              text: "Vào File ➜ Save (hoặc Ctrl+S). Inkscape lưu trực tiếp ở định dạng SVG — vừa là tệp dự án, vừa là ảnh vector dùng ngay được trên web.",
            },
          ],
        },
        {
          kind: "example",
          title: "Tình huống: Vẽ nhãn dán tên lớp cho buổi dã ngoại",
          text: "Bạn Nhung mở Inkscape để vẽ nhãn dán \"Lớp 10A3\" dán lên áo cho buổi dã ngoại. Nhung dùng công cụ Hình elip vẽ một khung tròn, tô màu tím nhạt (fill) và viền tím đậm (stroke) lấy từ Palette, sau đó dùng công cụ Văn bản (T) gõ chữ \"10A3\" ở giữa. Vì mỗi bạn cần một nhãn cỡ khác nhau — người dán lên áo nhỏ, người phóng to dán lên cặp — Nhung chỉ cần kéo giãn khung hình, chữ và hình tròn vẫn sắc nét ở mọi kích cỡ nhờ là đối tượng vector.",
        },
        {
          kind: "note",
          text: "Fill (màu tô) và stroke (màu nét) là hai thuộc tính màu độc lập của một đối tượng vector, có thể chỉnh riêng biệt. Canvas là nơi vẽ, Toolbox là nơi chọn công cụ, Palette là nơi chọn màu nhanh. Tệp làm việc của Inkscape lưu trực tiếp ở định dạng SVG.",
        },
        {
          kind: "check",
          q: "Trong Inkscape, muốn đổi màu viền (đường bao quanh) của một hình đã vẽ mà không làm thay đổi màu bên trong hình, em cần chỉnh thuộc tính nào?",
          options: [
            "Stroke (màu nét)",
            "Fill (màu tô)",
            "Canvas (trang vẽ)",
            "Palette (bảng màu)",
          ],
          answer: 0,
          explain:
            "Stroke là màu và độ dày của đường viền, tách biệt hoàn toàn với Fill là màu bên trong hình — chỉnh cái này không ảnh hưởng tới cái kia.",
        },
        {
          kind: "check",
          q: "Tệp làm việc mặc định khi lưu một bản vẽ trong Inkscape có định dạng gì?",
          options: [".svg", ".gimp", ".docx", ".mp4"],
          answer: 0,
          explain:
            "Inkscape lưu trực tiếp ở định dạng SVG (Scalable Vector Graphics) — chuẩn vector mở mà trình duyệt web hiển thị được ngay mà không cần chuyển đổi.",
        },
      ],
    },
  ],

  summary: [
    "**Bitmap (điểm ảnh)** lưu màu từng pixel — phóng to quá cỡ gốc sẽ vỡ hạt; dùng cho ảnh chụp, tranh nhiều chi tiết. **Vector** lưu công thức toán học — phóng to bao nhiêu vẫn mượt; dùng cho logo, biểu tượng, sơ đồ.",
    "**GIMP** là phần mềm miễn phí xử lí ảnh bitmap (giống Photoshop). **Inkscape** là phần mềm miễn phí vẽ đồ hoạ vector (giống Illustrator/CorelDRAW), lưu tệp gốc dạng **.svg**.",
    "Giao diện Inkscape gồm **Toolbox** (chọn công cụ), **Canvas** (trang vẽ) và **Palette** (bảng màu). Mỗi đối tượng vector có hai thuộc tính màu tách biệt: **Fill** (màu tô) và **Stroke** (màu nét).",
    "Chọn đúng phần mềm theo bản chất sản phẩm: thao tác trên ảnh chụp có sẵn → GIMP; vẽ mới hình khối/chữ cần co giãn nhiều cỡ → Inkscape.",
  ],
};

export default theory;
