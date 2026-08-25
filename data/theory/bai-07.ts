import type { LessonTheory } from "@/lib/types";

// Bài 7. Thực hành sử dụng thiết bị số thông dụng
// SGK trang 33–37, Chủ đề 1: Máy tính và xã hội tri thức
const theory: LessonTheory = {
  intro:
    "Bài này giúp em biết **trợ thủ số cá nhân (PDA)** là gì, và làm quen với các nút bấm, màn hình chính, ứng dụng cùng cách **quản lí tệp** trên điện thoại thông minh, máy tính bảng.",
  minutes: 7,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "tro-thu-so-ca-nhan",
      emoji: "📟",
      heading: "Trợ thủ số cá nhân (PDA)",
      blocks: [
        {
          kind: "text",
          text: "Sự phát triển của công nghệ thông tin và vi điện tử đã dẫn tới sự ra đời của hàng loạt thiết bị số hỗ trợ cá nhân, gọi là **trợ thủ số cá nhân (Personal Digital Assistant — PDA)**. Ban đầu, PDA chỉ có một số chức năng cơ bản: sổ lịch ghi lịch công tác, đồng hồ xem giờ/đặt báo thức, sổ danh bạ ghi địa chỉ và số điện thoại, sổ ghi nhớ (notes), máy tính bỏ túi,…",
        },
        {
          kind: "text",
          text: "Ngày nay, PDA đã tích hợp thêm nhiều chức năng hữu ích khác như nghe nhạc, ghi âm, xem phim, gọi điện thoại, chụp ảnh, quay phim, tìm đường, điều khiển thiết bị điện tử từ xa, và có các cổng giao tiếp như USB, khe cắm thẻ nhớ, kết nối bluetooth, kết nối wifi.",
        },
        {
          kind: "cards",
          tone: "grape",
          items: [
            { emoji: "📱", title: "Điện thoại thông minh", text: "PDA phổ biến nhất, chạy chủ yếu trên hai hệ điều hành iOS (Apple) và Android (Google)." },
            { emoji: "📱", title: "Máy tính bảng", text: "Màn hình lớn hơn điện thoại, cùng giao diện và cách sử dụng tương tự điện thoại thông minh." },
            { emoji: "⌚", title: "Đồng hồ thông minh", text: "Đeo trên tay, tích hợp các chức năng theo dõi sức khoẻ, thông báo, kết nối với điện thoại." },
            { emoji: "📖", title: "Máy đọc sách", text: "Chuyên dùng để đọc sách điện tử, màn hình được tối ưu để đọc lâu không mỏi mắt." },
          ],
        },
        {
          kind: "note",
          text: "**Trợ thủ số cá nhân (PDA)** là thiết bị số tích hợp nhiều chức năng và phần mềm ứng dụng hữu ích cho người dùng, với đặc điểm quan trọng là **nhỏ gọn, có khả năng kết nối mạng**.",
        },
        {
          kind: "check",
          q: "Kết nối nào sau đây KHÔNG phải là kết nối phổ biến trên các PDA hiện nay?",
          options: ["Hồng ngoại", "Wifi", "Bluetooth", "USB"],
          answer: 0,
          explain:
            "SGK liệt kê các cổng/kết nối phổ biến của PDA hiện nay là USB, thẻ nhớ, bluetooth, wifi. Hồng ngoại là công nghệ kết nối cũ, không còn phổ biến trên thiết bị hiện nay.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "man-hinh-va-nut-bam",
      emoji: "📲",
      heading: "Nút bấm và màn hình chính của điện thoại thông minh",
      blocks: [
        {
          kind: "text",
          text: "Về cơ bản, điện thoại thông minh và máy tính bảng có giao diện và cách thức sử dụng tương tự nhau. Phía hai bên thân máy thường có một số **nút bấm vật lí**: nút khoá (dùng để bật máy hoặc tắt màn hình) và nút tăng/giảm âm lượng — bấm nút khoá để khởi động điện thoại.",
        },
        {
          kind: "figure",
          diagram: "man-hinh-dien-thoai-thong-minh",
          caption: "Các nút bấm và các vùng trên màn hình chính (theo Hình 7.4, 7.5 SGK)",
        },
        {
          kind: "list",
          items: [
            "**Thanh trạng thái**: hiển thị tình trạng kết nối, thời gian hiện tại, tỉ lệ % pin còn lại,…",
            "**Các biểu tượng ứng dụng** (application, gọi tắt app): các ứng dụng cài trên máy, do nhà sản xuất cài sẵn hoặc do người dùng cài thêm.",
            "**Thanh truy cập nhanh**: chứa các ứng dụng hay dùng, được lặp lại ở cuối tất cả các trang của màn hình chính.",
            "**Thanh điều hướng** (navigation bar): hầu hết thiết bị Android không có nút Home vật lí, thay vào đó là thanh điều hướng với các nút ảo — quan trọng nhất là nút **Quay lại** (Back) và nút **Tổng quan** (Overview, hiện danh sách ứng dụng đang chạy).",
          ],
        },
        {
          kind: "check",
          q: "Trên điện thoại thông minh dùng hệ điều hành Android, nút nào dùng để hiện danh sách tất cả các ứng dụng đang chạy?",
          options: ["Nút Tổng quan (Overview)", "Nút Quay lại (Back)", "Nút tăng âm lượng", "Nút khoá màn hình"],
          answer: 0,
          explain:
            "Thanh điều hướng có hai nút ảo quan trọng: nút Quay lại (Back) để trở về màn hình trước, và nút Tổng quan (Overview) để hiện danh sách tất cả các ứng dụng đang chạy.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "ung-dung-tren-dien-thoai",
      emoji: "🧩",
      heading: "Ứng dụng trên điện thoại thông minh",
      blocks: [
        {
          kind: "text",
          text: "Một số chức năng thiết yếu của điện thoại là **Gọi điện, Nhắn tin, Quản lí danh bạ**. Ngoài ra, điện thoại thường có sẵn nhiều ứng dụng khác phục vụ đời sống hằng ngày.",
        },
        {
          kind: "cards",
          tone: "bubble",
          items: [
            { emoji: "📷", title: "Có sẵn trên máy", text: "Chụp ảnh và quản lí kho ảnh, Trình duyệt, Email, Máy tính, Lịch, Hẹn giờ, Báo thức, Chợ phần mềm,…" },
            { emoji: "💻", title: "Hỗ trợ học tập trực tuyến", text: "Cài thêm từ chợ phần mềm: Zoom, MS Teams, Google Meet,… để tham gia lớp học trực tuyến." },
            { emoji: "☁️", title: "Lưu trữ đám mây", text: "Cài thêm dịch vụ như OneDrive, Google Drive,… để lưu và đồng bộ dữ liệu qua Internet." },
          ],
        },
        {
          kind: "example",
          title: "Cài thêm ứng dụng từ chợ phần mềm",
          text: "Người dùng có thể tải thêm các ứng dụng khác từ chợ phần mềm (App Store trên iOS, Google Play trên Android) — ví dụ cài Zoom để học trực tuyến, hoặc cài Google Drive để lưu ảnh lên đám mây thay vì chỉ lưu trong máy.",
        },
        {
          kind: "check",
          q: "Ứng dụng nào sau đây thường được dùng để tham gia học trực tuyến với thầy/cô giáo?",
          options: ["Zoom hoặc Google Meet", "Ứng dụng Máy tính (Calculator)", "Ứng dụng Lịch (Calendar)", "Ứng dụng Chợ phần mềm"],
          answer: 0,
          explain:
            "Zoom, MS Teams, Google Meet,… là các ứng dụng hỗ trợ học tập trực tuyến, được cài thêm từ chợ phần mềm để tham gia các buổi học do thầy/cô giáo thiết lập.",
        },
      ],
    },

    // ───────────────────────── MỤC 4 ─────────────────────────
    {
      id: "quan-li-tep",
      emoji: "🗂️",
      heading: "Quản lí tệp trên điện thoại thông minh",
      blocks: [
        {
          kind: "text",
          text: "Mỗi dòng điện thoại thường có sẵn một ứng dụng quản lí tệp với tên như File Manager, My Files, Files, File Master, File Explorer, File Browser hoặc tương tự. Hệ thống tệp trên điện thoại được tổ chức **theo cấu trúc phân cấp tương tự như trên máy tính**.",
        },
        {
          kind: "compare",
          left: {
            title: "Trên máy tính",
            emoji: "🖥️",
            items: ["Các ổ đĩa (C:, D:,…)", "Thư mục gốc → thư mục con → tệp"],
          },
          right: {
            title: "Trên điện thoại",
            emoji: "📱",
            items: ["Bộ nhớ trong, thẻ nhớ SD, dịch vụ lưu trữ đám mây", "Thư mục gốc → thư mục con → tệp, cùng cấu trúc phân cấp"],
          },
        },
        {
          kind: "steps",
          items: [
            { label: "B1", title: "Mở ứng dụng quản lí tệp", text: "Ví dụ File Manager, My Files,… tìm trên màn hình chính hoặc trong danh sách ứng dụng." },
            { label: "B2", title: "Vào đúng thư mục chứa ảnh", text: "Thường là Bộ nhớ trong → DCIM → Camera — nơi lưu ảnh vừa chụp bằng camera máy." },
            { label: "B3", title: "Chọn tệp cần thao tác", text: "Mở để xem ảnh; hoặc chạm và giữ lâu một chút để hiện các nút Di chuyển, Sao chép, Chia sẻ, Xoá." },
          ],
        },
        {
          kind: "note",
          text: "Ứng dụng quản lí tệp cho phép mở, chọn, xem, sao chép, di chuyển, chia sẻ và xoá các tệp tin trên điện thoại — thao tác tương tự như quản lí tệp trên máy tính, chỉ khác về giao diện chạm trực tiếp trên màn hình.",
        },
        {
          kind: "check",
          q: "Trong ứng dụng quản lí tệp trên điện thoại, muốn hiện các nút Di chuyển, Sao chép, Chia sẻ, Xoá của một tệp, em cần làm gì?",
          options: [
            "Chạm và giữ lâu một chút vào tệp đó",
            "Chạm nhẹ một lần rồi bỏ tay ngay",
            "Lắc điện thoại thật mạnh",
            "Tắt nguồn rồi bật lại điện thoại",
          ],
          answer: 0,
          explain:
            "Theo SGK: nếu chọn thư mục hay tệp bằng cách chạm và giữ lâu một chút, sẽ xuất hiện các nút điều khiển để di chuyển, sao chép, chia sẻ hoặc xoá thư mục hay tệp.",
        },
        {
          kind: "check",
          q: "Theo em, điện thoại thông minh khác với điện thoại thường ở điểm nào?",
          options: [
            "Có thể cài phần mềm ứng dụng, truy cập Internet, hiển thị dữ liệu đa phương tiện",
            "Chỉ khác nhau ở kiểu dáng và màu sắc bên ngoài, còn lại hoàn toàn giống nhau",
            "Điện thoại thường luôn có nhiều chức năng hơn hẳn điện thoại thông minh",
            "Chỉ khác nhau về giá bán ra thị trường, không khác gì về chức năng sử dụng",
          ],
          answer: 0,
          explain:
            "SGK nêu: điện thoại thông minh khác điện thoại thường ở khả năng thực hiện tính toán phức tạp, cài đặt phần mềm ứng dụng để truy cập Internet và hiển thị dữ liệu đa phương tiện — tức là có các tính năng \"thông minh\" hơn nhờ hệ điều hành.",
        },
      ],
    },
  ],

  summary: [
    "**Trợ thủ số cá nhân (PDA)** là thiết bị số nhỏ gọn, tích hợp nhiều chức năng và có khả năng kết nối mạng — như điện thoại thông minh, máy tính bảng, đồng hồ thông minh, máy đọc sách.",
    "Màn hình chính điện thoại gồm: **thanh trạng thái, biểu tượng ứng dụng, thanh truy cập nhanh, thanh điều hướng** (Quay lại, Tổng quan).",
    "Điện thoại có sẵn nhiều ứng dụng (gọi điện, nhắn tin, chụp ảnh, trình duyệt,…) và có thể **cài thêm** ứng dụng học trực tuyến, lưu trữ đám mây từ chợ phần mềm.",
    "Quản lí tệp trên điện thoại theo **cấu trúc phân cấp** giống máy tính; chạm giữ vào tệp để **di chuyển, sao chép, chia sẻ, xoá**.",
  ],
};

export default theory;
