import type { Question } from "@/lib/types";

// Bài 9. An toàn trên không gian mạng
const questions: Question[] = [
  {
    id: "b9-01",
    q: "Phần mềm độc hại (malware) là gì?",
    options: [
      "Phần mềm được viết ra với ý đồ xấu, gây hại cho người dùng hoặc hệ thống",
      "Phần mềm còn nhiều lỗi lập trình khiến máy tính hoạt động không ổn định",
      "Phần mềm miễn phí tải từ Internet, chưa được nhà sản xuất kiểm định",
      "Phần mềm chiếm nhiều bộ nhớ khiến máy tính chạy chậm hơn bình thường",
    ],
    answer: 0,
    explain:
      "Điều quyết định là Ý ĐỒ XẤU của người viết, không phải chất lượng hay giá tiền. Phần mềm nhiều lỗi hay chạy chậm chỉ là kém, không phải độc hại.",
  },
  {
    id: "b9-02",
    q: "Điểm khác biệt chính giữa virus và worm (sâu máy tính) là gì?",
    options: [
      "Virus phải gắn vào tệp hoặc chương trình chủ, còn worm tự lây lan qua mạng",
      "Virus lây lan qua mạng Internet, còn worm chỉ lây qua USB và ổ cứng rời",
      "Virus phá hoại dữ liệu người dùng, còn worm chỉ theo dõi và đánh cắp mật khẩu",
      "Virus chỉ hoạt động trên Windows, còn worm chỉ hoạt động trên điện thoại",
    ],
    answer: 0,
    explain:
      "Virus cần vật chủ và cần người dùng kích hoạt; worm tự nhân bản, tự lây qua mạng. Cả hai đều có thể phá hoại lẫn đánh cắp, và đều tồn tại trên nhiều hệ điều hành.",
  },
  {
    id: "b9-03",
    q: "Trojan (ngựa thành Troa) hoạt động theo cách nào?",
    options: [
      "Giả dạng phần mềm hữu ích để người dùng tự cài, rồi âm thầm gây hại",
      "Tự động lây lan qua email hàng loạt mà người dùng không cần thao tác gì",
      "Gắn vào tệp văn bản có sẵn và kích hoạt mỗi khi tệp đó được mở ra",
      "Mã hoá toàn bộ dữ liệu trong máy rồi hiện thông báo đòi tiền chuộc",
    ],
    answer: 0,
    explain:
      "Đặc trưng của trojan là NGUỴ TRANG để nạn nhân tự rước vào máy (game bẻ khoá, phần mềm lậu). Tự lây qua mạng là worm, gắn vào tệp là virus, đòi tiền chuộc là ransomware.",
  },
  {
    id: "b9-04",
    q: "Dấu hiệu nào cho thấy một email là lừa đảo (phishing)?",
    options: [
      "Giả mạo tổ chức uy tín, tạo cảm giác gấp gáp và giục bấm link nhập mật khẩu",
      "Có đính kèm tệp tài liệu PDF dung lượng lớn hơn mười megabyte",
      "Được gửi vào ban đêm hoặc ngày nghỉ thay vì trong giờ hành chính",
      "Nội dung email viết bằng tiếng Anh thay vì tiếng Việt như thường lệ",
    ],
    answer: 0,
    explain:
      "Bộ ba dấu hiệu của phishing: mạo danh tổ chức uy tín + tạo áp lực thời gian + yêu cầu nhập thông tin đăng nhập. Giờ gửi, ngôn ngữ hay tệp đính kèm không tự nó là bằng chứng.",
  },
  {
    id: "b9-05",
    q: "Cách đặt mật khẩu nào là AN TOÀN nhất?",
    options: [
      "Dài trên tám kí tự, trộn chữ hoa, chữ thường, chữ số và kí tự đặc biệt",
      "Ghép họ tên đầy đủ với ngày tháng năm sinh của mình cho dễ nhớ lâu dài",
      "Dùng một mật khẩu thật phức tạp rồi đặt chung cho tất cả các tài khoản",
      "Dùng tên thú cưng viết ngược lại rồi thêm số 123 vào phía sau cùng",
    ],
    answer: 0,
    explain:
      "Mật khẩu mạnh phải vừa dài vừa phức tạp, KHÔNG chứa thông tin cá nhân dễ tra ra, và mỗi tài khoản một mật khẩu riêng — lộ một nơi không kéo theo mất tất cả.",
  },
  {
    id: "b9-06",
    q: "Xác thực hai yếu tố (2FA) là gì?",
    options: [
      "Ngoài mật khẩu còn cần thêm một bước xác nhận như mã OTP hoặc vân tay",
      "Đặt hai mật khẩu khác nhau và phải nhập lần lượt cả hai khi đăng nhập",
      "Bắt buộc đổi mật khẩu định kì hai lần mỗi năm để tăng mức độ an toàn",
      "Đăng nhập đồng thời trên hai thiết bị để hệ thống đối chiếu và xác minh",
    ],
    answer: 0,
    explain:
      "Hai YẾU TỐ khác loại: thứ bạn BIẾT (mật khẩu) và thứ bạn CÓ (điện thoại nhận mã, vân tay). Nhờ vậy kẻ xấu biết mật khẩu vẫn không vào được tài khoản.",
  },
  {
    id: "b9-07",
    q: "Khi nhận được email lạ có tệp đính kèm đuôi .exe, em nên làm gì?",
    options: [
      "Không mở tệp, xoá email đó hoặc đánh dấu báo cáo là thư rác lừa đảo",
      "Mở tệp trong chế độ ẩn danh của trình duyệt để tránh bị theo dõi",
      "Chuyển tiếp cho bạn bè xem giúp xem tệp đó có an toàn hay không",
      "Tạm tắt phần mềm diệt virus rồi mở tệp để tránh bị chặn nhầm",
    ],
    answer: 0,
    explain:
      "Tệp .exe là tệp chương trình chạy được — từ nguồn lạ rất có thể là mã độc. Chế độ ẩn danh không bảo vệ máy, chuyển tiếp là lan truyền nguy hiểm, tắt diệt virus càng nguy.",
  },
  {
    id: "b9-08",
    q: "Nhóm biện pháp nào giúp phòng chống mã độc hiệu quả nhất?",
    options: [
      "Cài phần mềm diệt virus, cập nhật hệ điều hành, không dùng phần mềm bẻ khoá",
      "Đặt mật khẩu máy tính thật dài và thay đổi mật khẩu đó hằng tuần",
      "Tắt hoàn toàn kết nối Internet mỗi khi không sử dụng đến máy tính",
      "Chia ổ cứng thành nhiều phân vùng và lưu dữ liệu ở phân vùng riêng",
    ],
    answer: 0,
    explain:
      "Bộ ba phòng thủ: phần mềm an ninh + bản vá lỗ hổng + thói quen dùng phần mềm chính thống. Các cách còn lại có ích ở mặt khác nhưng không ngăn được mã độc xâm nhập.",
  },
  {
    id: "b9-09",
    q: "Thông tin nào KHÔNG nên chia sẻ công khai trên mạng xã hội?",
    options: [
      "Số căn cước công dân, địa chỉ nhà ở và số tài khoản ngân hàng cá nhân",
      "Cảm nhận về một cuốn sách vừa đọc xong kèm ảnh chụp bìa sách đó",
      "Ảnh phong cảnh chụp trong chuyến du lịch sau khi đã trở về nhà",
      "Lời chúc mừng sinh nhật bạn cùng lớp kèm ảnh chụp chung cả nhóm",
    ],
    answer: 0,
    explain:
      "Thông tin định danh cá nhân bị lợi dụng để giả mạo, vay tiền, mở tài khoản trái phép. Lưu ý thêm: đăng ảnh du lịch KHI ĐANG ĐI xa cũng rủi ro vì lộ việc nhà không có người.",
  },
  {
    id: "b9-10",
    q: "Ransomware là loại mã độc có hành vi đặc trưng nào?",
    options: [
      "Mã hoá dữ liệu của nạn nhân rồi đòi tiền chuộc mới chịu giải mã trả lại",
      "Hiển thị liên tục các cửa sổ quảng cáo gây phiền toái cho người dùng",
      "Âm thầm ghi lại mọi thao tác gõ phím để đánh cắp mật khẩu tài khoản",
      "Chiếm dụng đường truyền mạng khiến tốc độ Internet giảm xuống rõ rệt",
    ],
    answer: 0,
    explain:
      "Ransom nghĩa là tiền chuộc. Hiện quảng cáo là adware, ghi thao tác bàn phím là keylogger — đều là mã độc nhưng hành vi khác hẳn ransomware.",
  },
  {
    id: "b9-11",
    q: "Phát hiện tài khoản mạng xã hội bị chiếm đoạt, việc cần làm NGAY là gì?",
    options: [
      "Khôi phục mật khẩu, bật xác thực hai yếu tố và báo bạn bè đề phòng lừa đảo",
      "Đăng bài công khai lên trang cá nhân khác để tố cáo kẻ đã chiếm tài khoản",
      "Chờ vài ngày xem kẻ xấu có tự trả lại tài khoản hay không rồi mới xử lí",
      "Lập tài khoản mới với tên gần giống và bỏ hẳn tài khoản cũ không dùng nữa",
    ],
    answer: 0,
    explain:
      "Phải giành lại quyền kiểm soát càng sớm càng tốt và cảnh báo người quen, vì kẻ chiếm tài khoản thường nhắn tin vay tiền bạn bè ngay trong vài giờ đầu.",
  },
  {
    id: "b9-12",
    q: "Vì sao KHÔNG nên dùng Wi-Fi công cộng để đăng nhập tài khoản ngân hàng?",
    options: [
      "Dữ liệu truyền qua mạng công cộng có thể bị kẻ xấu chặn bắt và đánh cắp",
      "Mạng công cộng có tốc độ chậm nên giao dịch dễ bị gián đoạn giữa chừng",
      "Ngân hàng có quy định cấm khách hàng giao dịch qua mạng Wi-Fi công cộng",
      "Sóng Wi-Fi công cộng gây hao pin và làm nóng thiết bị khi giao dịch lâu",
    ],
    answer: 0,
    explain:
      "Nguy cơ nằm ở BẢO MẬT: kẻ xấu có thể nghe lén gói tin hoặc dựng điểm phát Wi-Fi giả để lấy thông tin đăng nhập — không liên quan đến tốc độ hay pin.",
  },
];

export default questions;
