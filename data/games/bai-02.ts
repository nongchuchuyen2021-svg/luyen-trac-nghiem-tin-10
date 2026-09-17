import type { LessonGame, SortGame, TimelineGame } from "@/lib/types";

// Game kéo-thả: phân loại thiết bị thông minh (Bài 2, mục 1).
// Định nghĩa SGK: thiết bị thông minh = hoạt động TỰ CHỦ theo phần mềm cài sẵn
// VÀ tự động KẾT NỐI/TRAO ĐỔI DỮ LIỆU với thiết bị khác qua mạng không dây.
// Thiếu 1 trong 2 điều kiện đó thì KHÔNG phải thiết bị thông minh.
const sortGame: SortGame = {
  kind: "sort",
  id: "thiet-bi-thong-minh",
  title: "Thiết bị nào là thông minh?",
  emoji: "📱",
  instructions:
    "Kéo (hoặc bấm nút) từng thẻ sang đúng khay: thiết bị vừa hoạt động tự chủ vừa tự động kết nối trao đổi dữ liệu với thiết bị khác mới là THÔNG MINH.",
  matchLabel: "Thông minh",
  matchEmoji: "✅",
  noMatchLabel: "Không phải",
  noMatchEmoji: "❌",
  items: [
    {
      id: "dienthoai",
      emoji: "📱",
      label: "Điện thoại thông minh",
      isMatch: true,
      explain: "Tự động đồng bộ ảnh, tin nhắn lên đám mây qua wifi mà không cần bấm nút.",
    },
    {
      id: "dongho-bluetooth",
      emoji: "⌚",
      label: "Đồng hồ đeo tay kết nối bluetooth",
      isMatch: true,
      explain: "Tự đo nhịp tim rồi tự động gửi dữ liệu sang điện thoại qua bluetooth.",
    },
    {
      id: "camera-internet",
      emoji: "📷",
      label: "Camera an ninh kết nối Internet",
      isMatch: true,
      explain: "Tự phát hiện chuyển động, quay lại và gửi cảnh báo về điện thoại chủ nhà.",
    },
    {
      id: "loa-thongminh",
      emoji: "🔊",
      label: "Loa thông minh (Google Home, Alexa…)",
      isMatch: true,
      explain: "Nghe lệnh giọng nói rồi tự kết nối Internet để tìm câu trả lời.",
    },
    {
      id: "robot-hutbui",
      emoji: "🧹",
      label: "Robot hút bụi tự động",
      isMatch: true,
      explain: "Tự lập bản đồ nhà, tự tránh vật cản và tự quay về sạc khi hết pin.",
    },
    {
      id: "bongden-thongminh",
      emoji: "💡",
      label: "Bóng đèn thông minh",
      isMatch: true,
      explain: "Tự bật/tắt theo lịch hẹn giờ, điều khiển từ xa qua app trên điện thoại.",
    },
    {
      id: "dieuhoa-thongminh",
      emoji: "❄️",
      label: "Điều hoà thông minh",
      isMatch: true,
      explain: "Tự điều chỉnh nhiệt độ theo cảm biến, tự bật trước giờ chủ nhà về qua app.",
    },
    {
      id: "oto-tulai",
      emoji: "🚗",
      label: "Ô tô có tính năng hỗ trợ tự lái",
      isMatch: true,
      explain: "Tự phát hiện chướng ngại vật phía trước để tự phanh, tránh va chạm.",
    },
    {
      id: "dongho-vanniean",
      emoji: "🕰️",
      label: "Đồng hồ lịch vạn niên để bàn",
      isMatch: false,
      explain: "Chỉ hiển thị giờ, ngày cố định; không có khả năng kết nối với thiết bị nào.",
    },
    {
      id: "may-anh-thuong",
      emoji: "📸",
      label: "Máy ảnh số thường (không wifi)",
      isMatch: false,
      explain: "Chỉ chụp khi người dùng bấm nút, không tự động kết nối truyền ảnh đi đâu.",
    },
    {
      id: "can-dien-tu",
      emoji: "⚖️",
      label: "Cân sức khoẻ điện tử thường",
      isMatch: false,
      explain: "Chỉ hiện số cân tại chỗ trên màn hình, không lưu hay gửi dữ liệu đi đâu cả.",
    },
    {
      id: "may-tinh-casio",
      emoji: "🖩",
      label: "Máy tính cầm tay Casio",
      isMatch: false,
      explain: "Chỉ tính toán theo phép bấm của người dùng, không tự động kết nối mạng.",
    },
    {
      id: "quat-co",
      emoji: "🌀",
      label: "Quạt điện cơ (nút bấm)",
      isMatch: false,
      explain: "Chỉ chạy khi người bấm nút chỉnh số, không tự thích ứng hay kết nối gì cả.",
    },
    {
      id: "tivi-thuong",
      emoji: "📺",
      label: "Ti vi thường (không Smart TV)",
      isMatch: false,
      explain: "Chỉ nhận tín hiệu từ ăng-ten/đầu thu, không tự động kết nối Internet.",
    },
    {
      id: "bep-thuong",
      emoji: "🔥",
      label: "Bếp ga / bếp từ thường",
      isMatch: false,
      explain: "Hoạt động theo núm vặn tay của người dùng, không có cảm biến hay kết nối tự động.",
    },
    {
      id: "radio-fm",
      emoji: "📻",
      label: "Radio FM thường",
      isMatch: false,
      explain: "Chỉ dò và phát sóng đài theo tay chỉnh của người nghe, không kết nối trao đổi dữ liệu.",
    },
  ],
};

// Game sắp xếp dòng thời gian: 5 thành tựu phát triển của Tin học (Bài 2, mục 4).
// Thứ tự trong mảng dưới đây CHÍNH LÀ thứ tự thời gian đúng — game sẽ tự xáo
// ngẫu nhiên khi hiển thị và so sánh lại với thứ tự này lúc chấm điểm.
const timelineGame: TimelineGame = {
  kind: "timeline",
  id: "thanh-tuu-tin-hoc",
  title: "Dòng thời gian Tin học",
  emoji: "🕓",
  instructions:
    "Kéo (hoặc chạm chọn rồi đặt) 5 thành tựu sau vào đúng 5 ô theo thứ tự thời gian, từ SỚM NHẤT đến GẦN ĐÂY NHẤT.",
  items: [
    {
      id: "fortran",
      emoji: "📝",
      label: "FORTRAN ra đời — ngôn ngữ lập trình bậc cao đầu tiên",
      year: "1957",
      explain: "Giúp người lập trình chỉ cần thể hiện cách giải quyết vấn đề, không cần biết đến mã máy.",
    },
    {
      id: "os360",
      emoji: "🖥️",
      label: "OS/360 ra đời — hệ điều hành đầu tiên",
      year: "1964",
      explain: "Chạy trên máy IBM/360, mở đường cho các hệ điều hành hiện đại như Windows, macOS, Android, iOS.",
    },
    {
      id: "hqtcsdl",
      emoji: "🗄️",
      label: "Hệ quản trị cơ sở dữ liệu đầu tiên xuất hiện",
      year: "Cuối 1960s",
      explain: "Mở đầu giai đoạn phát triển mạnh của các HQT CSDL sau 1970 như DB2, Oracle, MySQL.",
    },
    {
      id: "tcpip",
      emoji: "🌐",
      label: "Giao thức TCP/IP được áp dụng",
      year: "1983",
      explain: "Giúp kết nối các mạng máy tính riêng lẻ thành Internet toàn cầu như ngày nay.",
    },
    {
      id: "www",
      emoji: "🕸️",
      label: "World Wide Web (WWW) ra đời",
      year: "1992",
      explain: "Tạo ra phương tiện truy cập Internet dễ dàng, nhất quán, giúp Internet được phổ cập rộng rãi.",
    },
  ],
};

const games: LessonGame[] = [sortGame, timelineGame];

export default games;
