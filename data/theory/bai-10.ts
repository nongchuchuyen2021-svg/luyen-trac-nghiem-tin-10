import type { LessonTheory } from "@/lib/types";

// Bài 10. Thực hành khai thác tài nguyên trên Internet
// SGK trang 50–54, Chủ đề 2: Mạng máy tính và Internet
const theory: LessonTheory = {
  intro:
    "Internet là một kho báu tri thức khổng lồ nếu ta biết cách khai thác. Bài này rèn luyện cho em **kĩ năng tìm kiếm nâng cao với Google**, làm chủ **phần mềm dịch đa ngữ Google Translate** để học ngoại ngữ, và tự tin **khai thác kho học liệu mở igiaoduc.vn** của Bộ Giáo dục & Đào tạo.",
  minutes: 8,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "tim-kiem-nang-cao",
      emoji: "🔍",
      heading: "Kĩ năng tìm kiếm nâng cao trên Internet",
      blocks: [
        {
          kind: "text",
          text: "**Máy tìm kiếm (Search Engine)** như Google, Bing lập chỉ mục hàng tỉ trang web. Nếu chỉ gõ từ khoá chung chung, ta sẽ bị ngập trong hàng triệu kết quả rác. Sử dụng các **toán tử tìm kiếm** sẽ giúp ta lọc chính xác tài liệu cần tìm chỉ trong tích tắc.",
        },
        {
          kind: "figure",
          diagram: "cu-phap-tim-kiem-nang-cao",
          caption: "Hình 10.1. Bốn cú pháp toán tử tìm kiếm nâng cao cực kì hiệu quả",
        },
        {
          kind: "cards",
          tone: "grape",
          items: [
            {
              emoji: "🎯",
              title: '"cụm từ khoá"',
              text: 'Bọc từ khoá trong dấu ngoặc kép để tìm **chính xác nguyên cụm** theo đúng thứ tự (ví dụ: `"chiến dịch Điện Biên Phủ"`).',
            },
            {
              emoji: "🌐",
              title: "site:tenmien",
              text: "Giới hạn phạm vi tìm kiếm trong **một website cụ thể** hoặc cơ quan chính thống (ví dụ: `site:moet.gov.vn`).",
            },
            {
              emoji: "📑",
              title: "filetype:dinhdang",
              text: "Tìm đích danh **loại tệp tài liệu** cần dùng như bài thuyết trình `.pptx`, văn bản `.docx` hoặc tài liệu đọc `.pdf`.",
            },
            {
              emoji: "➖",
              title: "từ_khóa -từ_bỏ",
              text: "Đặt dấu trừ `-` sát trước từ cần **loại trừ** để lọc bỏ các kết quả gây nhiễu đối với những từ mang nhiều nghĩa.",
            },
          ],
        },
        {
          kind: "compare",
          left: {
            title: "Tìm kiếm sơ sài (kết quả rác)",
            emoji: "⚠️",
            items: [
              "Gõ từ khoá chung chung: `điện biên`",
              "Ra hàng chục triệu kết quả: giá vé máy bay, khách sạn, tour du lịch...",
              "Mất nhiều thời gian lướt từng trang để tìm tài liệu lịch sử",
            ],
          },
          right: {
            title: "Tìm kiếm chuyên gia (chính xác ngay)",
            emoji: "✨",
            items: [
              'Gõ cú pháp: `"chiến dịch Điện Biên Phủ" 1954 site:baotanglichsu.vn`',
              "Kết quả thu gọn, toàn bộ là tư liệu lịch sử chính thống",
              "Lấy được ngay thông tin chuẩn xác chỉ sau 1 lần bấm Enter",
            ],
          },
        },
        {
          kind: "example",
          title: "Mẹo thực tế: Tìm bài thuyết trình PowerPoint mẫu",
          text: "Khi cần làm bài thuyết trình môn Tin học về an toàn mạng, thay vì tải ảnh trên mạng rồi chèn thủ công, em có thể gõ vào Google: `\"an toàn trên không gian mạng\" filetype:pptx`. Google sẽ liệt kê ngay các tệp bài giảng PowerPoint có sẵn để em tham khảo và tải về!",
        },
        {
          kind: "note",
          text: "Khi khai thác thông tin trên Internet, luôn ưu tiên các nguồn tin chính thống (.gov, .edu, các viện nghiên cứu/bảo tàng), kiểm tra tác giả và ngày xuất bản. Tránh xa các bài viết giật gân, câu view không rõ nguồn gốc.",
        },
        {
          kind: "check",
          q: "Khi tìm kiếm tài liệu trên Google, việc đặt từ khoá trong dấu ngoặc kép mang lại tác dụng gì?",
          options: [
            "Yêu cầu kết quả phải chứa chính xác nguyên cụm từ đó theo đúng thứ tự các từ",
            "Tự động dịch cụm từ đó sang tiếng Anh rồi mới tiến hành tìm kiếm trên toàn cầu",
            "Loại bỏ toàn bộ các trang web có chứa cụm từ đó ra khỏi danh sách kết quả tìm",
            "Chỉ tìm kiếm các hình ảnh và video có liên quan trực tiếp đến cụm từ khoá đó",
          ],
          answer: 0,
          explain:
            "Đặt trong dấu ngoặc kép giúp máy tìm kiếm hiểu đây là một cụm từ cố định, không tách rời từng từ đơn lẻ, giúp loại bỏ các kết quả tản mạn.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "google-translate",
      emoji: "🌐",
      heading: "Sử dụng phần mềm dịch đa ngữ Google Translate",
      blocks: [
        {
          kind: "text",
          text: "**Google Translate (Google Dịch)** tại địa chỉ `translate.google.com` là công cụ dịch thuật đa ngữ thông minh, hỗ trợ hơn 100 ngôn ngữ trên thế giới. Đây là trợ thủ đắc lực giúp học sinh tự học ngoại ngữ và tra cứu tài liệu quốc tế.",
        },
        {
          kind: "figure",
          diagram: "google-translate-tinh-nang",
          caption: "Hình 10.2. Giao diện làm việc và các phương thức nhập liệu của Google Translate",
        },
        {
          kind: "cards",
          tone: "bubble",
          items: [
            {
              emoji: "⌨️",
              title: "1. Nhập văn bản trực tiếp",
              text: "Gõ hoặc dán đoạn văn bản cần dịch vào khung bên trái; khung bên phải sẽ tự động hiển thị kết quả dịch tức thời.",
            },
            {
              emoji: "🎙️",
              title: "2. Nhập bằng giọng nói (Micro)",
              text: "Bấm vào biểu tượng Micro để đọc văn bản — máy tự nhận diện tiếng nói và chuyển thành chữ rồi dịch ngay.",
            },
            {
              emoji: "📄",
              title: "3. Dịch nguyên tệp tài liệu",
              text: "Tải trực tiếp tệp Word (.docx), Excel (.xlsx), PowerPoint (.pptx) hoặc PDF lên để dịch mà vẫn giữ nguyên bố cục và bảng biểu.",
            },
          ],
        },
        {
          kind: "steps",
          items: [
            {
              label: "Kĩ năng 1",
              title: "Luyện phát âm & Luyện nghe",
              text: "Bấm vào biểu tượng loa 🔊 ở khung ngôn ngữ để nghe máy phát âm. Nháy chuột lần thứ nhất máy đọc tốc độ bình thường; nháy chuột lần thứ hai máy sẽ đọc chậm lại từng từ.",
            },
            {
              label: "Kĩ năng 2",
              title: "Đảo chiều dịch thuật (⇆)",
              text: "Bấm nút mũi tên 2 chiều để hoán đổi ngôn ngữ nguồn và ngôn ngữ đích, giúp em kiểm tra đối chiếu ngược lại xem câu dịch có tự nhiên không.",
            },
            {
              label: "Kĩ năng 3",
              title: "Sao chép kết quả",
              text: "Chọn đoạn văn bản đã dịch và nhấn Ctrl+C (sao chép), sau đó mở tệp văn bản bài tập và nhấn Ctrl+V (dán).",
            },
          ],
        },
        {
          kind: "example",
          title: "Ví dụ dịch thuật: Trích đoạn 'Thép đã tôi thế đấy'",
          text: "Nhập câu tiếng Việt: *\"Cái quý giá nhất của con người là cuộc sống.\"* ➜ Chọn ngôn ngữ đích là tiếng Nga ➜ Kết quả dịch ra: *\"Самое дорогое у человека — это жизнь.\"* (đúng như bản gốc của nhà văn Ostrovski). Bấm loa 🔊 để nghe phát âm tiếng Nga chuẩn xác.",
        },
        {
          kind: "note",
          text: "Google Translate có thể dịch văn bản, giọng nói và cả tệp tài liệu nguyên vẹn. Lưu ý: Bản dịch của máy chỉ mang tính trợ giúp, học sinh cần đọc lại và chỉnh sửa câu từ cho phù hợp với ngữ cảnh thực tế.",
        },
        {
          kind: "check",
          q: "Khi muốn dịch nguyên một bảng tính Excel từ tiếng Anh sang tiếng Việt bằng Google Translate, em thực hiện như thế nào?",
          options: [
            "Chọn thẻ 'Tài liệu', tải tệp bảng tính lên rồi bấm nút 'Dịch'",
            "Phải chuyển đổi bảng tính thành ảnh chụp rồi mới đưa vào dịch",
            "Bắt buộc phải copy từng ô trong bảng tính rồi dán vào khung dịch",
            "Chỉ dịch được tệp Word, Google Translate không hỗ trợ tệp Excel",
          ],
          answer: 0,
          explain:
            "Google Translate hỗ trợ thẻ 'Tài liệu' cho phép tải trực tiếp các tệp Word, Excel, PowerPoint và PDF để dịch tự động toàn bộ nội dung mà giữ nguyên cấu trúc bảng biểu.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "kho-hoc-lieu-mo",
      emoji: "📚",
      heading: "Khai thác kho học liệu mở (OER)",
      blocks: [
        {
          kind: "text",
          text: "**Học liệu mở (Open Educational Resources — OER)** là các tài nguyên giảng dạy, học tập và nghiên cứu được phát hành công khai miễn phí. Khái niệm này khởi nguồn từ năm 2002 khi Học viện Công nghệ Massachusetts (MIT) đưa toàn bộ bài giảng lên Internet cho toàn thế giới truy cập tự do.",
        },
        {
          kind: "figure",
          diagram: "kho-hoc-lieu-mo",
          caption: "Hình 10.3. Cấu trúc danh mục đa cấp trên cổng học liệu số igiaoduc.vn",
        },
        {
          kind: "cards",
          tone: "mint",
          items: [
            {
              emoji: "🎓",
              title: "Cổng học liệu số igiaoduc.vn",
              text: "Kho học liệu số chính thức của Bộ Giáo dục & Đào tạo Việt Nam với hàng vạn bài giảng trực tuyến, sách giáo khoa điện tử và tài liệu tham khảo chuẩn.",
            },
            {
              emoji: "🌳",
              title: "Cây thư mục phân cấp rõ ràng",
              text: "Sắp xếp khoa học theo 3 cấp: Cấp 1 (Học liệu số, Sách giáo khoa, Dư địa chí) ➜ Cấp 2 (Khối lớp từ Mầm non đến Lớp 12) ➜ Cấp 3 (Từng môn học cụ thể).",
            },
            {
              emoji: "📺",
              title: "Bài giảng video & Slide đa dạng",
              text: "Gồm các video quay bài giảng của giáo viên giỏi trên truyền hình (VTV7, Hà Nội TV) và các bài giảng điện tử tương tác e-Learning.",
            },
          ],
        },
        {
          kind: "steps",
          items: [
            {
              label: "Bước 1",
              title: "Truy cập cổng học liệu",
              text: "Mở trình duyệt web và nhập địa chỉ: `https://igiaoduc.vn`",
            },
            {
              label: "Bước 2",
              title: "Chọn Môn học & Khối lớp",
              text: "Trên cây thư mục bên trái: Chọn 'Học liệu số' ➜ Chọn 'Lớp 10' ➜ Chọn môn 'Tin học' (hoặc môn Toán, Lý, Hoá, Ngữ văn...).",
            },
            {
              label: "Bước 3",
              title: "Xem bài giảng trực tuyến",
              text: "Nháy chuột vào bài giảng cần học ➜ Xem thông tin tác giả, bài học ➜ Bấm nút 'Học trực tuyến' màu đỏ để xem video và tải tài liệu.",
            },
          ],
        },
        {
          kind: "note",
          text: "Khai thác kho học liệu mở giúp học sinh chủ động tự học mọi lúc mọi nơi, tiếp cận nguồn tri thức chuẩn xác và phong phú hoàn toàn miễn phí.",
        },
        {
          kind: "check",
          q: "Cấu trúc danh mục cấp 1 trên trang học liệu số igiaoduc.vn của Bộ Giáo dục & Đào tạo bao gồm các mục nào?",
          options: [
            "Học liệu số, Sách giáo khoa và Dư địa chí",
            "Mầm non, Tiểu học, Trung học cơ sở và Trung học phổ thông",
            "Đại số, Hình học, Vật lí, Hoá học, Ngữ văn và Tin học",
            "Bài giảng điện tử, Video thí nghiệm và Đề thi học kì",
          ],
          answer: 0,
          explain:
            "Theo SGK Tin học 10, danh mục cấp 1 trên cây thư mục trang chủ igiaoduc.vn gồm 3 loại: Học liệu số, Sách giáo khoa và Dư địa chí. Khối lớp thuộc cấp 2 và môn học thuộc cấp 3.",
        },
      ],
    },
  ],

  summary: [
    "Sử dụng toán tử tìm kiếm Google giúp tìm kiếm chuẩn xác: **ngoặc kép \"...\"** (tìm chính xác nguyên cụm), **site:** (giới hạn trang web), **filetype:** (tìm tệp tài liệu cụ thể), **dấu trừ -** (loại trừ từ gây nhiễu).",
    "Luôn kiểm tra **tính chính thống, độ tin cậy và nguồn gốc** của tài liệu trước khi sử dụng.",
    "**Google Translate (translate.google.com)** hỗ trợ dịch văn bản, giọng nói qua Micro và dịch nguyên tệp tài liệu (Word, Excel, PowerPoint, PDF). Bấm loa 🔊 để luyện nghe/phát âm.",
    "**Học liệu mở (OER)** cung cấp tri thức miễn phí cho mọi người. Cổng **igiaoduc.vn** của Bộ GD&ĐT cung cấp hàng vạn bài giảng video, SGK điện tử sắp xếp theo cây thư mục phân cấp khoa học.",
  ],
};

export default theory;
