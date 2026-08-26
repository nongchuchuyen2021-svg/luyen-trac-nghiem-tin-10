import type { LessonTheory } from "@/lib/types";

// Bài 13. Bổ sung các đối tượng đồ hoạ
// SGK trang 67–71, Chủ đề 4: Ứng dụng tin học
const theory: LessonTheory = {
  intro:
    "Ở bài 12, em đã làm quen với Toolbox, Canvas và Palette của Inkscape. Bài này đưa em vào đúng công việc của một nhà thiết kế thực thụ: **vẽ hình bằng 4 công cụ cơ bản**, hiểu vì sao hình cứ \"biến mất\" khi vẽ chồng lên nhau, **nhân bản** hàng loạt đối tượng giống nhau chỉ trong một nốt nhạc, và **căn chỉnh chuẩn xác đến từng pixel** thay vì kéo bằng mắt.",
  minutes: 9,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "cong-cu-ve-hinh",
      emoji: "✏️",
      heading: "Bốn công cụ vẽ hình cơ bản",
      blocks: [
        {
          kind: "text",
          text: "Ngay trên Toolbox có bốn công cụ vẽ hình nền tảng, mỗi công cụ có một **phím tắt** riêng — gõ đúng phím là công cụ được chọn ngay, không cần rời tay khỏi bàn phím để với chuột: **Rectangle (R)** vẽ hình chữ nhật, **Ellipse (E)** vẽ hình elip, **Star/Polygon** vẽ ngôi sao hoặc đa giác đều, và **Bezier (B)** vẽ đường và hình tự do bằng cách đặt từng điểm neo (anchor point) nối tiếp nhau.",
        },
        {
          kind: "figure",
          diagram: "cong-cu-ve-hinh-inkscape",
          caption: "Hình 13.1. Bốn công cụ vẽ hình cơ bản và hình dạng chúng tạo ra",
        },
        {
          kind: "list",
          items: [
            "**Rectangle (R)**: kéo chuột để vẽ hình chữ nhật với kích thước tuỳ ý",
            "**Ellipse (E)**: kéo chuột để vẽ hình elip với độ dẹt tuỳ ý",
            "**Star/Polygon**: vẽ ngôi sao hoặc đa giác đều — đổi số cánh/số cạnh ngay trên thanh thuộc tính phía trên canvas",
            "**Bezier (B)**: nháy chuột để đặt từng điểm neo, nháy đúp hoặc nhấn Enter để kết thúc đường vẽ",
            "**Mẹo vàng**: giữ phím **Ctrl** trong lúc kéo chuột — chữ nhật thành **hình vuông**, elip thành **hình tròn** tuyệt đối",
          ],
        },
        {
          kind: "example",
          title: "Tình huống: Poster đêm quan sát sao của CLB Thiên văn",
          text: "CLB Thiên văn nhờ bạn Đông thiết kế poster mời tham gia đêm quan sát sao. Đông cần: một vầng trăng tròn xoe (dùng Ellipse, giữ Ctrl để tròn tuyệt đối, không bị méo thành quả trứng), một ô cửa kính viễn vọng hình vuông chuẩn (Rectangle, giữ Ctrl), rắc thêm vài chục ngôi sao nhỏ lấp lánh quanh poster (Star/Polygon) và vẽ một đường quỹ đạo sao chổi cong lượn duyên dáng (Bezier, đặt từng điểm neo dọc theo đường bay). Chỉ với 4 công cụ, poster đã có đủ mặt trăng, cửa sổ, sao và quỹ đạo.",
        },
        {
          kind: "note",
          text: "Bốn công cụ vẽ cơ bản trong Inkscape: Rectangle (R), Ellipse (E), Star/Polygon và Bezier (B). Giữ phím Ctrl trong lúc kéo chuột với Rectangle hoặc Ellipse để được hình vuông/hình tròn chuẩn xác thay vì hình bị méo lệch.",
        },
        {
          kind: "check",
          q: "Muốn vẽ một hình vuông chuẩn xác (bốn cạnh bằng nhau tuyệt đối) trong Inkscape, em thao tác thế nào?",
          options: [
            "Chọn công cụ Rectangle, giữ phím Ctrl trong lúc kéo chuột",
            "Chọn công cụ Ellipse, kéo chuột mà không giữ phím nào",
            "Chọn công cụ Bezier rồi nối 4 điểm neo bất kì trên canvas",
            "Chọn công cụ Star/Polygon rồi đặt số cánh bằng 4",
          ],
          answer: 0,
          explain:
            "Rectangle vẽ hình chữ nhật; giữ Ctrl trong lúc kéo khoá tỉ lệ 1:1 nên chữ nhật trở thành hình vuông chuẩn. Ellipse tạo hình tròn/elip chứ không phải hình vuông; Bezier và Star/Polygon không phải công cụ chuẩn để vẽ hình vuông.",
        },
        {
          kind: "check",
          q: "Công cụ nào phù hợp nhất để vẽ một đường quỹ đạo cong lượn tự do của ngôi sao chổi trên poster?",
          options: ["Bezier", "Rectangle", "Ellipse", "Star/Polygon"],
          answer: 0,
          explain:
            "Bezier cho phép đặt từng điểm neo dọc theo đường bay mong muốn, tạo ra đường cong tự do bất kì hình dạng — Rectangle, Ellipse và Star/Polygon chỉ vẽ được các hình có sẵn khuôn dạng cố định.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "xep-lop-nhan-doi",
      emoji: "🗂️",
      heading: "Thứ tự xếp lớp (Z-order) và nhân đôi đối tượng",
      blocks: [
        {
          kind: "text",
          text: "Khi nhiều hình chồng lên nhau, hình nào hiện ra trên cùng do **thứ tự xếp lớp (Z-order)** quyết định — không phụ thuộc kích thước hay màu sắc đậm nhạt. Quy tắc mặc định: **hình vẽ sau nằm trên** hình vẽ trước, giống như xếp chồng từng tờ giấy lên bàn — tờ đặt sau cùng sẽ che khuất các tờ đặt trước.",
        },
        {
          kind: "figure",
          diagram: "thu-tu-xep-lop",
          caption: "Hình 13.2. Ba lớp xếp chồng và kết quả hiển thị cuối cùng trên Canvas",
        },
        {
          kind: "list",
          items: [
            "**Raise** (phím Page Up): đưa đối tượng đang chọn nhích lên **một bậc**",
            "**Lower** (phím Page Down): đưa đối tượng đang chọn nhích xuống **một bậc**",
            "**Raise to Top** (phím Home): đưa đối tượng lên **hẳn trên cùng**",
            "**Lower to Bottom** (phím End): đưa đối tượng xuống **hẳn dưới cùng**",
          ],
        },
        {
          kind: "example",
          title: "Tình huống: Nền che mất logo trên banner CLB Thiên văn",
          text: "Bạn Đông vẽ xong logo mặt trăng và kính viễn vọng cho banner, sau đó vẽ thêm một hình chữ nhật màu xanh đen làm nền bầu trời đêm phủ kín cả trang. Ngay lập tức, toàn bộ logo biến mất tăm — vì hình nền vẽ sau nên mặc định nằm trên, che khuất mọi thứ vẽ trước đó. Đông không cần xoá đi vẽ lại: chỉ cần chọn hình nền rồi nhấn phím **End (Lower to Bottom)**, nền lập tức tụt xuống dưới cùng và logo hiện ra trở lại nguyên vẹn.",
        },
        {
          kind: "text",
          text: "Một thao tác cũng cực kì hữu ích khi làm việc với nhiều đối tượng giống nhau là **nhân đôi (Duplicate)** bằng phím tắt **Ctrl+D**: tạo ngay một bản sao chồng khít lên đối tượng gốc, chỉ việc kéo bản sao ra vị trí mới, co giãn to nhỏ hoặc xoay theo ý muốn — nhanh hơn rất nhiều so với vẽ lại từ đầu.",
        },
        {
          kind: "note",
          text: "Z-order quyết định hình nào che hình nào khi chồng lên nhau; hình vẽ sau mặc định nằm trên. Có thể đổi thứ tự bất cứ lúc nào bằng Raise/Lower (Page Up/Down) hoặc Raise to Top/Lower to Bottom (Home/End) — không cần xoá vẽ lại. Ctrl+D nhân đôi đối tượng đang chọn ngay tại chỗ, tiện lợi khi cần nhiều bản sao giống nhau (như rắc nhiều ngôi sao trên nền trời).",
        },
        {
          kind: "check",
          q: "Sau khi vẽ xong logo, bạn Đông vẽ thêm hình nền to phủ kín trang khiến logo bị che mất hoàn toàn. Cách xử lí nhanh và đúng nhất là gì?",
          options: [
            "Chọn hình nền, nhấn phím End (Lower to Bottom) để đưa nó xuống dưới cùng",
            "Xoá hình nền rồi vẽ lại nền trước, vẽ logo sau",
            "Chọn logo rồi xoá bỏ vì nó không còn hiển thị được nữa",
            "Phóng to logo lên gấp nhiều lần cho nó hiện ra trên nền",
          ],
          answer: 0,
          explain:
            "Vấn đề chỉ là thứ tự xếp lớp chứ không phải kích thước hay nội dung. Chọn hình nền và đưa nó xuống dưới cùng (End / Lower to Bottom) là cách nhanh nhất, không cần vẽ lại bất cứ thứ gì.",
        },
        {
          kind: "check",
          q: "Phím tắt Ctrl+D trong Inkscape dùng để làm gì?",
          options: [
            "Nhân đôi (Duplicate) đối tượng đang chọn ngay tại chỗ",
            "Nhóm nhiều đối tượng đang chọn lại thành một khối",
            "Xoá hẳn đối tượng đang chọn khỏi trang vẽ",
            "Đưa đối tượng đang chọn lên hẳn trên cùng",
          ],
          answer: 0,
          explain:
            "Ctrl+D tạo ngay một bản sao chồng khít lên đối tượng gốc để kéo ra vị trí mới. Nhóm đối tượng là Ctrl+G, xoá là phím Delete, đưa lên trên cùng là phím Home.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "nhom-can-chinh",
      emoji: "📐",
      heading: "Nhóm đối tượng, căn chỉnh chính xác và độ trong suốt",
      blocks: [
        {
          kind: "text",
          text: "Khi một sản phẩm gồm nhiều đối tượng nhỏ ghép lại (ví dụ một bông hoa gồm 4 cánh + 1 nhuỵ), ta có thể **nhóm (Group — Ctrl+G)** chúng thành một khối để di chuyển, xoay, co giãn đồng bộ như một đối tượng duy nhất — mà các hình bên trong vẫn nguyên vẹn, sửa riêng được sau khi **tách nhóm (Ungroup — Ctrl+Shift+G)**. Còn khi cần nhiều đối tượng thẳng hàng tăm tắp và cách đều nhau, đừng bao giờ kéo bằng mắt — hộp thoại **Align & Distribute** (Shift+Ctrl+A) làm việc đó chuẩn xác đến từng pixel chỉ trong một cú nhấp.",
        },
        {
          kind: "figure",
          diagram: "align-distribute",
          caption: "Hình 13.3. Căn chỉnh (Align) và phân bố đều (Distribute) — trước và sau",
        },
        {
          kind: "steps",
          items: [
            {
              label: "B1",
              title: "Chọn tất cả đối tượng cần căn",
              text: "Giữ Shift rồi lần lượt nháy chuột vào từng khung, hoặc kéo một vùng chọn bao trọn tất cả.",
            },
            {
              label: "B2",
              title: "Mở Align & Distribute",
              text: "Nhấn Shift+Ctrl+A hoặc vào menu Object ➜ Align and Distribute.",
            },
            {
              label: "B3",
              title: "Chọn kiểu căn (Align)",
              text: "Ví dụ 'Align top edges' để các khung có cùng mép trên, thẳng hàng ngang tuyệt đối.",
            },
            {
              label: "B4",
              title: "Chọn kiểu phân bố (Distribute)",
              text: "Ví dụ 'Make horizontal gaps equal' để khoảng cách giữa các khung bằng nhau răm rắp.",
            },
          ],
        },
        {
          kind: "example",
          title: "Tình huống: Bảng thông tin 5 CLB trong ngày hội trường",
          text: "Nhóm bạn Trà thiết kế bảng giới thiệu 5 câu lạc bộ cho ngày hội trường: mỗi CLB một khung chữ nhật bo góc chứa logo và tên. Vẽ xong, 5 khung nằm lệch lạc — cái cao cái thấp, khoảng cách chỗ thưa chỗ mau. Trà định kéo tay chỉnh từng khung thì bạn Kỳ ngăn lại: \"Chọn cả 5 khung, mở Align & Distribute, bấm căn theo mép trên rồi chia đều khoảng cách ngang — một giây là thẳng tắp, không cần kéo bằng mắt!\". Quả nhiên chỉ vài cú nhấp, cả dãy khung đã thẳng hàng và cách đều nhau hoàn hảo.",
        },
        {
          kind: "text",
          text: "Ngoài vị trí, mỗi đối tượng còn có thuộc tính **Opacity (độ mờ/trong suốt)**: 100% là đặc hoàn toàn, giảm dần sẽ nhìn xuyên qua được lớp bên dưới — thường dùng tạo hiệu ứng lớp mờ ảo, watermark hoặc hiệu ứng ánh sáng nhẹ. Và nếu lỡ thao tác nhầm ở bất kì bước nào, phím **Ctrl+Z (Undo)** luôn sẵn sàng đưa mọi thứ về lại như cũ.",
        },
        {
          kind: "note",
          text: "Group (Ctrl+G) gộp nhiều đối tượng thành một khối để thao tác đồng bộ; Ungroup (Ctrl+Shift+G) tách trở lại. Align & Distribute (Shift+Ctrl+A) căn thẳng hàng và chia đều khoảng cách chính xác hơn hẳn căn bằng mắt. Opacity điều chỉnh độ trong suốt của đối tượng. Ctrl+Z hoàn tác thao tác vừa làm.",
        },
        {
          kind: "check",
          q: "Muốn 5 khung thông tin thẳng hàng và cách đều nhau thật chuẩn xác thay vì kéo bằng mắt, em nên dùng chức năng nào?",
          options: [
            "Align & Distribute (Căn chỉnh và phân bố)",
            "Fill & Stroke (Màu tô và màu nét)",
            "Object Properties (Thuộc tính đối tượng)",
            "Bezier (Công cụ vẽ đường tự do)",
          ],
          answer: 0,
          explain:
            "Align & Distribute căn các đối tượng theo một chuẩn chung (trái/phải/giữa/trên/dưới) và chia đều khoảng cách giữa chúng — chính xác tuyệt đối theo toạ độ, vượt xa khả năng căn bằng mắt.",
        },
        {
          kind: "check",
          q: "Sau khi đã nhóm (Group) một bông hoa gồm 4 cánh và 1 nhuỵ thành một khối, muốn sửa lại riêng màu của một cánh hoa, em cần làm gì trước tiên?",
          options: [
            "Tách nhóm bằng Ungroup (Ctrl+Shift+G) để chọn riêng từng cánh hoa",
            "Xoá cả bông hoa và vẽ lại từ đầu",
            "Nhân đôi cả nhóm bằng Ctrl+D rồi sửa bản sao",
            "Không thể sửa được nữa vì nhóm đã bị khoá vĩnh viễn",
          ],
          answer: 0,
          explain:
            "Group chỉ gộp tạm để thao tác đồng bộ, không hề khoá cứng — Ungroup (Ctrl+Shift+G) tách nhóm trở lại các đối tượng rời để chỉnh sửa riêng từng phần bất cứ lúc nào.",
        },
        {
          kind: "check",
          q: "Thuộc tính nào cho phép làm một hình trở nên trong suốt một phần, nhìn xuyên thấy được lớp phía dưới nó?",
          options: ["Opacity (độ mờ)", "Stroke (màu nét)", "Canvas (trang vẽ)", "Align (căn chỉnh)"],
          answer: 0,
          explain:
            "Opacity 100% là đặc hoàn toàn; giảm phần trăm Opacity sẽ khiến đối tượng mờ dần, nhìn xuyên qua được — Stroke chỉ liên quan tới màu viền, không liên quan tới độ trong suốt.",
        },
      ],
    },
  ],

  summary: [
    "Bốn công cụ vẽ cơ bản: **Rectangle (R)**, **Ellipse (E)**, **Star/Polygon**, **Bezier (B)**. Giữ **Ctrl** khi kéo Rectangle/Ellipse để được hình vuông/tròn chuẩn xác.",
    "**Z-order**: hình vẽ sau mặc định nằm trên. Đổi thứ tự bằng **Raise/Lower** (Page Up/Down) hoặc **Raise to Top/Lower to Bottom** (Home/End). **Ctrl+D** nhân đôi đối tượng đang chọn.",
    "**Group** (Ctrl+G) gộp nhiều đối tượng thành khối; **Ungroup** (Ctrl+Shift+G) tách trở lại. **Align & Distribute** (Shift+Ctrl+A) căn thẳng hàng và chia đều khoảng cách chuẩn xác hơn căn bằng mắt.",
    "**Opacity** chỉnh độ trong suốt của đối tượng. **Ctrl+Z** hoàn tác thao tác vừa làm khi lỡ tay.",
  ],
};

export default theory;
