import type { LessonGame, MatchGame, SortGame } from "@/lib/types";

// Game 1: Phân loại "Trợ thủ số cá nhân" (PDA) — Bài 7, mục 1.
// Định nghĩa SGK: PDA (Personal Digital Assistant — Trợ thủ số CÁ NHÂN) là
// thiết bị số tích hợp nhiều chức năng và phần mềm ứng dụng, với đặc điểm
// quan trọng là NHỎ GỌN, có khả năng KẾT NỐI MẠNG, mang theo người.
const sortGamePDA: SortGame = {
  kind: "sort",
  id: "pda-hay-khong",
  title: "Thiết bị nào là PDA?",
  emoji: "📟",
  instructions:
    "Kéo (hoặc bấm nút) từng thẻ sang đúng khay: PDA phải vừa nhỏ gọn, đa chức năng, vừa kết nối mạng được và là thiết bị CÁ NHÂN mang theo người.",
  matchLabel: "Là PDA",
  matchEmoji: "✅",
  noMatchLabel: "Không phải",
  noMatchEmoji: "❌",
  items: [
    {
      id: "dienthoai-thongminh",
      emoji: "📱",
      label: "Điện thoại thông minh",
      isMatch: true,
      explain: "PDA phổ biến nhất — nhỏ gọn, đa chức năng, chạy iOS/Android, kết nối mạng liên tục.",
    },
    {
      id: "may-tinh-bang",
      emoji: "📱",
      label: "Máy tính bảng",
      isMatch: true,
      explain: "Cùng giao diện và cách dùng như điện thoại thông minh, chỉ khác màn hình lớn hơn.",
    },
    {
      id: "dongho-thongminh",
      emoji: "⌚",
      label: "Đồng hồ thông minh",
      isMatch: true,
      explain: "Đeo trên tay, tích hợp theo dõi sức khoẻ, thông báo, kết nối với điện thoại.",
    },
    {
      id: "may-doc-sach",
      emoji: "📖",
      label: "Máy đọc sách điện tử (Kindle…)",
      isMatch: true,
      explain: "Thiết bị số cá nhân chuyên đọc sách điện tử, có thể kết nối wifi để tải sách mới.",
    },
    {
      id: "tai-nghe-thongminh",
      emoji: "🎧",
      label: "Tai nghe có trợ lí ảo, kết nối Internet",
      isMatch: true,
      explain: "Nhỏ gọn, mang theo người, tích hợp nhiều chức năng (nghe nhạc, trợ lí ảo, dịch giọng nói) và tự kết nối mạng.",
    },
    {
      id: "kinh-thongminh",
      emoji: "🥽",
      label: "Kính thông minh có màn hình hiển thị",
      isMatch: true,
      explain: "Thiết bị cá nhân đeo được, tích hợp nhiều chức năng và kết nối wifi/bluetooth với điện thoại.",
    },
    {
      id: "may-tinh-de-ban",
      emoji: "🖥️",
      label: "Máy tính để bàn (Desktop PC)",
      isMatch: false,
      explain: "Không nhỏ gọn, không phải thiết bị cá nhân mang theo người được — đặt cố định một chỗ.",
    },
    {
      id: "may-tinh-bo-tui",
      emoji: "🖩",
      label: "Máy tính bỏ túi (Casio)",
      isMatch: false,
      explain: "Chỉ có đúng 1 chức năng tính toán, không cài thêm được ứng dụng, không kết nối mạng.",
    },
    {
      id: "dongho-co",
      emoji: "🕰️",
      label: "Đồng hồ đeo tay cơ học thường",
      isMatch: false,
      explain: "Chỉ xem giờ, không tích hợp chức năng nào khác, không có khả năng kết nối mạng.",
    },
    {
      id: "may-anh-compact",
      emoji: "📷",
      label: "Máy ảnh compact không wifi",
      isMatch: false,
      explain: "Chỉ chụp ảnh, không kết nối mạng, không cài thêm được phần mềm ứng dụng.",
    },
    {
      id: "radio-cu",
      emoji: "📻",
      label: "Radio FM cầm tay đời cũ",
      isMatch: false,
      explain: "Chỉ nghe đài, không đa chức năng, không có khả năng kết nối mạng.",
    },
    {
      id: "smart-tv",
      emoji: "📺",
      label: "Ti vi thông minh (Smart TV)",
      isMatch: false,
      explain: "Tuy \"thông minh\" và kết nối mạng được, nhưng đặt cố định trong nhà — không phải thiết bị CÁ NHÂN nhỏ gọn mang theo người như 4 loại PDA phổ biến (điện thoại, máy tính bảng, đồng hồ, máy đọc sách).",
    },
  ],
};

// Game 2: Phân loại ứng dụng "Có sẵn trên máy" hay "Cần cài thêm" — Bài 7, mục 3.
const sortGameApps: SortGame = {
  kind: "sort",
  id: "co-san-hay-cai-them",
  title: "Ứng dụng có sẵn hay cần cài thêm?",
  emoji: "🧩",
  instructions:
    "Kéo (hoặc bấm nút) từng ứng dụng vào đúng khay: ứng dụng đó CÓ SẴN ngay khi mua máy mới, hay phải vào chợ phần mềm CÀI THÊM?",
  matchLabel: "Cần cài thêm",
  matchEmoji: "⬇️",
  noMatchLabel: "Có sẵn trên máy",
  noMatchEmoji: "📦",
  items: [
    {
      id: "goi-dien",
      emoji: "☎️",
      label: "Gọi điện, Nhắn tin, Danh bạ",
      isMatch: false,
      explain: "Chức năng thiết yếu, có sẵn ngay trên mọi điện thoại thông minh.",
    },
    {
      id: "chup-anh",
      emoji: "📷",
      label: "Chụp ảnh và quản lí kho ảnh",
      isMatch: false,
      explain: "Ứng dụng Camera và Thư viện ảnh được cài sẵn từ nhà sản xuất.",
    },
    {
      id: "trinh-duyet",
      emoji: "🌐",
      label: "Trình duyệt web",
      isMatch: false,
      explain: "Chrome, Safari,… có sẵn để duyệt Internet ngay khi mở máy lần đầu.",
    },
    {
      id: "email",
      emoji: "📧",
      label: "Email",
      isMatch: false,
      explain: "Ứng dụng thư điện tử mặc định có sẵn trên máy.",
    },
    {
      id: "may-tinh-app",
      emoji: "🧮",
      label: "Máy tính (Calculator)",
      isMatch: false,
      explain: "Ứng dụng tính toán cơ bản được cài sẵn.",
    },
    {
      id: "lich",
      emoji: "📅",
      label: "Lịch, Hẹn giờ, Báo thức",
      isMatch: false,
      explain: "Các ứng dụng tiện ích cơ bản có sẵn ngay khi mua máy.",
    },
    {
      id: "cho-phan-mem",
      emoji: "🏪",
      label: "Chợ phần mềm (App Store/Google Play)",
      isMatch: false,
      explain: "Chính ứng dụng này có sẵn để từ đó tải các ứng dụng khác về máy.",
    },
    {
      id: "zoom",
      emoji: "🎥",
      label: "Zoom",
      isMatch: true,
      explain: "Phải cài thêm từ chợ phần mềm để tham gia học/họp trực tuyến.",
    },
    {
      id: "teams",
      emoji: "👥",
      label: "Microsoft Teams",
      isMatch: true,
      explain: "Ứng dụng học/họp trực tuyến, cần tải thêm từ App Store hoặc Google Play.",
    },
    {
      id: "meet",
      emoji: "📹",
      label: "Google Meet",
      isMatch: true,
      explain: "Cần cài thêm để tham gia các buổi học trực tuyến qua Google Meet.",
    },
    {
      id: "onedrive",
      emoji: "☁️",
      label: "OneDrive",
      isMatch: true,
      explain: "Dịch vụ lưu trữ đám mây, phải cài thêm từ chợ phần mềm.",
    },
    {
      id: "google-drive",
      emoji: "☁️",
      label: "Google Drive",
      isMatch: true,
      explain: "Dịch vụ lưu trữ và đồng bộ dữ liệu qua Internet, cần cài đặt thêm.",
    },
  ],
};

// Game 3: Lật thẻ ghép đôi — nút bấm, màn hình và quản lí tệp trên điện thoại
// thông minh (Bài 7, mục 2 và 4) — phần lý thuyết chưa được 2 game trên khai thác.
const matchGamePhone: MatchGame = {
  kind: "match",
  id: "ghep-doi-man-hinh-tep",
  title: "Lật thẻ ghép đôi: Màn hình & Quản lí tệp",
  emoji: "🃏",
  instructions:
    "Chạm để lật 2 thẻ bất kì. Khớp đúng cặp (thuật ngữ ↔ mô tả) thì thẻ được giữ nguyên; sai thì hai thẻ úp lại. Ghép đủ tất cả các cặp với càng ít lượt lật càng được điểm cao!",
  pairs: [
    {
      id: "nut-khoa",
      emoji: "🔘",
      term: "Nút khoá (Power)",
      clue: "Dùng để bật máy hoặc tắt/mở màn hình",
    },
    {
      id: "nut-quay-lai",
      emoji: "◀️",
      term: "Nút Quay lại (Back)",
      clue: "Đưa màn hình trở về trang vừa xem trước đó",
    },
    {
      id: "nut-tong-quan",
      emoji: "🗂️",
      term: "Nút Tổng quan (Overview)",
      clue: "Hiện danh sách tất cả ứng dụng đang chạy",
    },
    {
      id: "thanh-trang-thai",
      emoji: "🔔",
      term: "Thanh trạng thái",
      clue: "Hiển thị tình trạng kết nối, giờ hiện tại, % pin còn lại",
    },
    {
      id: "thanh-truy-cap-nhanh",
      emoji: "⭐",
      term: "Thanh truy cập nhanh",
      clue: "Chứa ứng dụng hay dùng, lặp lại ở mọi trang màn hình chính",
    },
    {
      id: "ung-dung-quan-li-tep",
      emoji: "🗃️",
      term: "Ứng dụng quản lí tệp (File Manager)",
      clue: "Mở, sao chép, di chuyển, chia sẻ, xoá tệp trên điện thoại",
    },
    {
      id: "thu-muc-dcim",
      emoji: "📸",
      term: "Thư mục DCIM → Camera",
      clue: "Nơi lưu ảnh vừa chụp bằng camera của máy",
    },
    {
      id: "cham-giu-tep",
      emoji: "🤏",
      term: "Chạm và giữ lâu vào một tệp",
      clue: "Hiện các nút Di chuyển, Sao chép, Chia sẻ, Xoá",
    },
  ],
};

const games: LessonGame[] = [sortGamePDA, sortGameApps, matchGamePhone];

export default games;
