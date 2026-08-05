import type { Question } from "@/lib/types";

// Bài 7. Thực hành sử dụng thiết bị số thông dụng
const questions: Question[] = [
  {
    id: "b7-01",
    q: "Điện thoại thông minh về bản chất là gì?",
    options: [
      "Một máy tính thu nhỏ có CPU, bộ nhớ và hệ điều hành",
      "Một thiết bị viễn thông để nghe gọi và nhắn tin",
      "Một máy ảnh số gắn thêm màn hình cảm ứng",
      "Một thiết bị giải trí chuyên chơi game, xem phim",
    ],
    answer: 0,
    explain:
      "Smartphone có đủ thành phần của máy tính (CPU, RAM, bộ nhớ, hệ điều hành Android/iOS) rồi mới cộng thêm chức năng liên lạc, chụp ảnh, giải trí — đó chỉ là các ứng dụng chạy trên nền máy tính ấy.",
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
      "Kho ứng dụng chính thức Google Play hoặc App Store",
      "Trang web chia sẻ bản cài đặt đã bẻ khoá",
      "Đường liên kết lạ nhận được trong tin nhắn",
      "USB của người quen chép sẵn nhiều ứng dụng",
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
      "Mỗi tệp ảnh chụp ra nặng khoảng 12 MB",
      "Ống kính phóng to được tối đa 12 lần",
      "Máy chụp được liên tiếp 12 ảnh mỗi giây",
    ],
    answer: 0,
    explain: "MP (megapixel) = triệu pixel; 12 MP ≈ ảnh 4000 × 3000 điểm ảnh.",
  },
  {
    id: "b7-06",
    q: "Khi pin điện thoại xuống thấp mà chưa sạc được, cách tiết kiệm pin hợp lí là:",
    options: [
      "Giảm sáng màn hình, tắt Wi-Fi và GPS không dùng",
      "Đóng hết ứng dụng nền vài phút một lần",
      "Tắt máy rồi bật lại để làm mới bộ nhớ",
      "Hạ chất lượng ảnh chụp và cỡ chữ hiển thị",
    ],
    answer: 0,
    explain:
      "Màn hình và các kết nối không dây tiêu tốn pin nhiều nhất. Liên tục vuốt đóng ứng dụng nền hay khởi động lại máy còn tốn thêm pin vì phải nạp lại ứng dụng từ đầu; cỡ chữ thì gần như không ảnh hưởng.",
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
      "Bảo vệ dữ liệu cá nhân khi máy rơi vào tay người lạ",
      "Ngăn ứng dụng lạ tự cài vào máy lúc màn hình tắt",
      "Giúp máy khởi động nhanh và chạy mượt hơn",
      "Tiết kiệm pin do màn hình tự tắt sớm hơn",
    ],
    answer: 0,
    explain:
      "Điện thoại chứa tài khoản, ảnh, tin nhắn, ứng dụng ngân hàng nên khoá màn hình là lớp bảo vệ đầu tiên. Nó không liên quan tới tốc độ máy hay thời lượng pin, còn việc chặn ứng dụng lạ là nhiệm vụ của kho ứng dụng và phần mềm bảo mật.",
  },
  {
    id: "b7-09",
    q: "Thao tác 'sao lưu' (backup) dữ liệu điện thoại nghĩa là:",
    options: [
      "Tạo bản sao dữ liệu ở đám mây hoặc máy tính",
      "Nén ảnh và video lại cho nhẹ bộ nhớ máy",
      "Xoá bớt dữ liệu cũ để giải phóng bộ nhớ",
      "Cài lại hệ điều hành cho máy chạy mượt",
    ],
    answer: 0,
    explain:
      "Sao lưu là tạo thêm bản sao ở nơi khác, nhờ đó mất máy vẫn khôi phục được danh bạ, ảnh, tin nhắn trên thiết bị mới. Nén, xoá bớt hay cài lại máy đều không tạo ra bản sao — thậm chí còn làm mất dữ liệu.",
  },
  {
    id: "b7-10",
    q: "Khi kết nối điện thoại với Wi-Fi công cộng để dùng thiết bị số an toàn, nên:",
    options: [
      "Tránh đăng nhập tài khoản ngân hàng, email chính",
      "Chia sẻ mật khẩu Wi-Fi nhà mình để dùng chung",
      "Tắt mật khẩu máy cho tiện khi truy cập mạng",
      "Bật chế độ máy bay rồi mới kết nối Wi-Fi",
    ],
    answer: 0,
    explain:
      "Wi-Fi công cộng kém an toàn nên phải hạn chế thao tác nhạy cảm (đã học ở Bài 9). Chia sẻ mật khẩu nhà mình và tắt mật khẩu máy đều làm giảm an toàn, còn chế độ máy bay ngắt luôn kết nối nên không dùng mạng được.",
  },
];

export default questions;
