import type { Question } from "@/lib/types";

// Bài 9. An toàn trên không gian mạng
const questions: Question[] = [
  {
    id: "b9-01",
    q: "Phần mềm độc hại (malware) là gì?",
    options: [
      "Phần mềm được viết ra với ý đồ xấu, gây hại cho người dùng hoặc hệ thống",
      "Phần mềm có nhiều lỗi lập trình",
      "Phần mềm miễn phí",
      "Phần mềm chạy chậm",
    ],
    answer: 0,
    explain:
      "Malware gồm virus, worm, trojan... được tạo ra nhằm đánh cắp dữ liệu, phá hoại hoặc chiếm quyền điều khiển.",
  },
  {
    id: "b9-02",
    q: "Điểm khác biệt chính giữa virus và worm (sâu máy tính) là:",
    options: [
      "Virus phải gắn vào tệp/chương trình chủ, worm tự lây lan độc lập qua mạng",
      "Virus lây qua mạng, worm chỉ lây qua USB",
      "Worm vô hại còn virus nguy hiểm",
      "Không có gì khác nhau",
    ],
    answer: 0,
    explain:
      "Virus cần vật chủ (tệp bị lây nhiễm) và cần người dùng kích hoạt; worm tự nhân bản, tự lây qua mạng không cần vật chủ.",
  },
  {
    id: "b9-03",
    q: "Trojan (ngựa thành Troa) hoạt động theo cách nào?",
    options: [
      "Giả dạng phần mềm hữu ích để lừa người dùng cài đặt, rồi thực hiện hành vi độc hại",
      "Tự lây lan qua email không cần người dùng làm gì",
      "Chỉ hiển thị quảng cáo",
      "Làm mát CPU máy tính",
    ],
    answer: 0,
    explain:
      "Trojan nguỵ trang thành phần mềm/tệp có ích (game crack, phần mềm lậu...) để người dùng tự cài vào máy.",
  },
  {
    id: "b9-04",
    q: "Lừa đảo qua mạng (phishing) thường có dấu hiệu nào?",
    options: [
      "Email/tin nhắn giả mạo tổ chức uy tín, thúc giục bấm link và nhập mật khẩu, thông tin cá nhân",
      "Email từ người thân hỏi thăm sức khoẻ",
      "Thông báo cập nhật chính thức từ hệ điều hành",
      "Quảng cáo sản phẩm trên trang web chính thức",
    ],
    answer: 0,
    explain:
      "Phishing giả danh ngân hàng, mạng xã hội... tạo cảm giác khẩn cấp để nạn nhân bấm link giả và tự nộp thông tin đăng nhập.",
  },
  {
    id: "b9-05",
    q: "Cách đặt mật khẩu nào là AN TOÀN nhất?",
    options: [
      "Dài trên 8 kí tự, kết hợp chữ hoa, chữ thường, số và kí tự đặc biệt",
      "Dùng ngày sinh của mình cho dễ nhớ",
      "Dùng một mật khẩu chung cho mọi tài khoản",
      "Dùng dãy 123456789 cho nhanh",
    ],
    answer: 0,
    explain:
      "Mật khẩu mạnh: dài, phức tạp, không chứa thông tin cá nhân dễ đoán, mỗi tài khoản một mật khẩu riêng.",
  },
  {
    id: "b9-06",
    q: "Xác thực hai yếu tố (2FA) là gì?",
    options: [
      "Ngoài mật khẩu còn cần thêm một bước xác nhận (mã OTP, vân tay...) khi đăng nhập",
      "Đặt hai mật khẩu giống nhau",
      "Đăng nhập trên hai thiết bị cùng lúc",
      "Đổi mật khẩu hai lần mỗi năm",
    ],
    answer: 0,
    explain:
      "2FA thêm lớp bảo vệ thứ hai — kẻ xấu dù biết mật khẩu cũng khó chiếm tài khoản vì thiếu mã xác nhận.",
  },
  {
    id: "b9-07",
    q: "Khi nhận được email lạ có tệp đính kèm .exe, em nên làm gì?",
    options: [
      "Không mở tệp, xoá email hoặc báo cáo spam",
      "Mở ngay xem có gì bên trong",
      "Chuyển tiếp cho bạn bè xem giúp",
      "Tắt phần mềm diệt virus rồi mở",
    ],
    answer: 0,
    explain:
      "Tệp .exe từ nguồn không tin cậy rất có thể chứa mã độc — tuyệt đối không mở, không chuyển tiếp.",
  },
  {
    id: "b9-08",
    q: "Biện pháp nào giúp phòng chống mã độc hiệu quả?",
    options: [
      "Cài phần mềm diệt virus, cập nhật hệ điều hành, không cài phần mềm lậu",
      "Không bao giờ tắt máy tính",
      "Chỉ dùng máy tính vào ban ngày",
      "Xoá hết dữ liệu định kì",
    ],
    answer: 0,
    explain:
      "Phần mềm an ninh + bản vá cập nhật + thói quen chỉ tải phần mềm chính hãng là bộ ba phòng thủ cơ bản.",
  },
  {
    id: "b9-09",
    q: "Thông tin nào KHÔNG nên chia sẻ công khai trên mạng xã hội?",
    options: [
      "Số CCCD, địa chỉ nhà, số tài khoản ngân hàng",
      "Bài viết về sở thích đọc sách",
      "Ảnh phong cảnh chuyến du lịch đã về",
      "Lời chúc mừng sinh nhật bạn bè",
    ],
    answer: 0,
    explain:
      "Thông tin định danh cá nhân có thể bị lợi dụng để lừa đảo, giả mạo, chiếm đoạt tài khoản.",
  },
  {
    id: "b9-10",
    q: "Ransomware là loại mã độc:",
    options: [
      "Mã hoá dữ liệu của nạn nhân rồi đòi tiền chuộc để giải mã",
      "Chỉ hiển thị quảng cáo gây phiền",
      "Làm chậm mạng Wi-Fi",
      "Tự xoá chính nó sau 24 giờ",
    ],
    answer: 0,
    explain:
      "Ransomware khoá/mã hoá tệp và đòi tiền chuộc — phòng ngừa bằng sao lưu dữ liệu thường xuyên và không mở tệp lạ.",
  },
  {
    id: "b9-11",
    q: "Khi phát hiện tài khoản mạng xã hội của mình bị chiếm đoạt, việc cần làm NGAY là:",
    options: [
      "Đổi mật khẩu (hoặc dùng chức năng khôi phục), bật 2FA và báo cho bạn bè đề phòng lừa đảo",
      "Tạo tài khoản mới và bỏ mặc tài khoản cũ",
      "Không làm gì, chờ kẻ xấu tự trả",
      "Đăng bài chửi kẻ xấu",
    ],
    answer: 0,
    explain:
      "Lấy lại quyền kiểm soát sớm nhất có thể và cảnh báo người quen — kẻ chiếm tài khoản thường nhắn tin lừa vay tiền.",
  },
  {
    id: "b9-12",
    q: "Vì sao KHÔNG nên dùng Wi-Fi công cộng để đăng nhập tài khoản ngân hàng?",
    options: [
      "Dữ liệu truyền qua mạng công cộng có thể bị kẻ xấu chặn bắt, đánh cắp",
      "Wi-Fi công cộng luôn chậm hơn",
      "Ngân hàng cấm dùng Wi-Fi",
      "Wi-Fi công cộng làm hỏng điện thoại",
    ],
    answer: 0,
    explain:
      "Mạng công cộng thiếu bảo mật, kẻ xấu có thể nghe lén gói tin hoặc dựng điểm truy cập giả để đánh cắp thông tin đăng nhập.",
  },
];

export default questions;
