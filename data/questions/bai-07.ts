import type { Question } from "@/lib/types";

// Bài 7. Thực hành sử dụng thiết bị số thông dụng
const questions: Question[] = [
  {
    id: "b7-01",
    q: "Điện thoại thông minh về bản chất là gì?",
    options: [
      "Một máy tính thu nhỏ có hệ điều hành, bộ xử lí, bộ nhớ và kết nối mạng",
      "Chỉ là thiết bị nghe gọi",
      "Một chiếc máy ảnh có màn hình",
      "Thiết bị chỉ để giải trí",
    ],
    answer: 0,
    explain:
      "Smartphone có đủ thành phần của máy tính (CPU, RAM, bộ nhớ, HĐH Android/iOS) cộng thêm chức năng liên lạc.",
  },
  {
    id: "b7-02",
    q: "Hai hệ điều hành di động phổ biến nhất hiện nay là:",
    options: ["Android và iOS", "Windows và Linux", "macOS và Ubuntu", "MS-DOS và Unix"],
    answer: 0,
    explain: "Android (Google) và iOS (Apple) chiếm gần như toàn bộ thị trường điện thoại thông minh.",
  },
  {
    id: "b7-03",
    q: "Muốn cài thêm ứng dụng trên điện thoại một cách an toàn, nên tải từ đâu?",
    options: [
      "Kho ứng dụng chính thức (Google Play / App Store)",
      "Trang web chia sẻ file lậu",
      "Đường link lạ trong tin nhắn",
      "USB của người không quen biết",
    ],
    answer: 0,
    explain:
      "Kho chính thức có kiểm duyệt, giảm nguy cơ mã độc; cài từ nguồn trôi nổi rất dễ nhiễm phần mềm độc hại.",
  },
  {
    id: "b7-04",
    q: "Để chuyển ảnh từ điện thoại sang máy tính, cách nào KHÔNG dùng được?",
    options: [
      "Đọc to nội dung ảnh cho máy tính nghe",
      "Cắm cáp USB và sao chép tệp",
      "Gửi qua dịch vụ đám mây (Google Drive...)",
      "Dùng Bluetooth hoặc ứng dụng chia sẻ",
    ],
    answer: 0,
    explain: "Ảnh là tệp dữ liệu — chuyển bằng cáp, mạng, đám mây, Bluetooth đều được; 'đọc to' thì không.",
  },
  {
    id: "b7-05",
    q: "Độ phân giải camera 12 MP nghĩa là:",
    options: [
      "Mỗi ảnh chụp có khoảng 12 triệu điểm ảnh",
      "Ảnh nặng 12 MB",
      "Camera zoom được 12 lần",
      "Chụp được 12 ảnh mỗi giây",
    ],
    answer: 0,
    explain: "MP (megapixel) = triệu pixel; 12 MP ≈ ảnh 4000 × 3000 điểm ảnh.",
  },
  {
    id: "b7-06",
    q: "Khi pin điện thoại xuống thấp mà chưa sạc được, cách tiết kiệm pin hợp lí là:",
    options: [
      "Giảm độ sáng màn hình, tắt Wi-Fi/Bluetooth/GPS không dùng, bật chế độ tiết kiệm pin",
      "Mở thêm nhiều ứng dụng",
      "Tăng độ sáng tối đa",
      "Quay video liên tục",
    ],
    answer: 0,
    explain: "Màn hình và các kết nối không dây là những thứ tiêu tốn pin nhiều nhất.",
  },
  {
    id: "b7-07",
    q: "Kết nối nào dùng để truyền tệp không dây giữa hai thiết bị ở khoảng cách gần?",
    options: ["Bluetooth", "Cáp HDMI", "Cổng VGA", "Jack tai nghe 3.5mm"],
    answer: 0,
    explain: "Bluetooth truyền dữ liệu không dây tầm ngắn (~10m); HDMI/VGA là cáp xuất hình ảnh.",
  },
  {
    id: "b7-08",
    q: "Vì sao nên đặt mã khoá màn hình (PIN, vân tay, khuôn mặt) cho điện thoại?",
    options: [
      "Bảo vệ dữ liệu cá nhân khi máy rơi vào tay người khác",
      "Giúp máy chạy nhanh hơn",
      "Tiết kiệm pin",
      "Tăng âm lượng loa",
    ],
    answer: 0,
    explain:
      "Điện thoại chứa tài khoản, ảnh, tin nhắn, ứng dụng ngân hàng — khoá màn hình là lớp bảo vệ đầu tiên.",
  },
  {
    id: "b7-09",
    q: "Thao tác 'sao lưu' (backup) dữ liệu điện thoại nghĩa là:",
    options: [
      "Tạo bản sao dữ liệu ở nơi khác (đám mây, máy tính) đề phòng mất máy, hỏng máy",
      "Xoá bớt dữ liệu cũ",
      "Nén ảnh cho nhẹ",
      "Cài lại hệ điều hành",
    ],
    answer: 0,
    explain: "Có bản sao lưu thì mất máy vẫn khôi phục được danh bạ, ảnh, tin nhắn... trên thiết bị mới.",
  },
  {
    id: "b7-10",
    q: "Khi kết nối điện thoại với Wi-Fi công cộng để dùng thiết bị số an toàn, nên:",
    options: [
      "Tránh đăng nhập tài khoản quan trọng (ngân hàng, email chính)",
      "Tắt hết mật khẩu cho tiện",
      "Chia sẻ mật khẩu Wi-Fi nhà mình",
      "Bật chế độ máy bay",
    ],
    answer: 0,
    explain: "Wi-Fi công cộng kém an toàn — hạn chế thao tác nhạy cảm (đã học ở Bài 9).",
  },
];

export default questions;
