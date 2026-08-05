import type { Question } from "@/lib/types";

// Bài 11. Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền
const questions: Question[] = [
  {
    id: "b11-01",
    q: "Hành vi nào sau đây là ứng xử ĐÚNG trên môi trường số?",
    options: [
      "Kiểm chứng thông tin trước khi chia sẻ",
      "Bình luận xúc phạm người có ý kiến khác",
      "Chia sẻ tin giật gân chưa rõ nguồn",
      "Đăng ảnh người khác khi chưa được phép",
    ],
    answer: 0,
    explain:
      "Kiểm chứng nguồn tin trước khi chia sẻ là trách nhiệm của mỗi người để tránh lan truyền tin giả.",
  },
  {
    id: "b11-02",
    q: "Đăng tải thông tin sai sự thật, xúc phạm danh dự người khác trên mạng có thể bị xử lí như thế nào?",
    options: [
      "Bị xử phạt hành chính, nặng hơn là truy cứu hình sự",
      "Chỉ bị mạng xã hội nhắc nhở và hạn chế bài đăng",
      "Chỉ bị buộc gỡ bài viết và xin lỗi công khai",
      "Không bị xử lí vì hoạt động trên mạng là ẩn danh",
    ],
    answer: 0,
    explain:
      "Luật An ninh mạng và các nghị định xử phạt quy định rõ: hành vi vu khống, xúc phạm trên mạng bị xử phạt như ngoài đời thực.",
  },
  {
    id: "b11-03",
    q: "Bản quyền (quyền tác giả) bảo vệ điều gì?",
    options: [
      "Quyền của người sáng tạo với tác phẩm của mình",
      "Quyền của người mua đối với bản sao đã mua",
      "Quyền được tự do truy cập Internet của mọi người",
      "Giá bán và lợi nhuận của sản phẩm trên thị trường",
    ],
    answer: 0,
    explain:
      "Quyền tác giả bảo hộ tác phẩm trí tuệ — văn học, âm nhạc, hình ảnh và cả phần mềm máy tính. Người mua chỉ có quyền với bản sao mình sở hữu chứ không có quyền tác giả; còn giá bán do thị trường quyết định, không thuộc phạm vi bản quyền.",
  },
  {
    id: "b11-04",
    q: "Hành vi nào VI PHẠM bản quyền?",
    options: [
      "Dùng phần mềm bẻ khoá (crack) thay vì mua bản quyền",
      "Dùng phần mềm mã nguồn mở theo đúng giấy phép",
      "Mua tài khoản phần mềm chính hãng",
      "Dùng phần mềm miễn phí do tác giả công bố",
    ],
    answer: 0,
    explain:
      "Crack phần mềm là sao chép, sử dụng trái phép tác phẩm được bảo hộ — vi phạm pháp luật và tiềm ẩn mã độc.",
  },
  {
    id: "b11-05",
    q: "Khi sử dụng hình ảnh trên mạng cho bài thuyết trình, cách làm ĐÚNG là:",
    options: [
      "Ưu tiên ảnh có giấy phép sử dụng tự do và ghi rõ nguồn",
      "Tải bất kì ảnh nào và xoá tên tác giả",
      "Chụp lại màn hình để tránh vi phạm",
      "Không cần quan tâm vì bài tập không thương mại",
    ],
    answer: 0,
    explain:
      "Nên dùng ảnh giấy phép mở (Creative Commons, public domain) và luôn dẫn nguồn — vừa đúng luật vừa thể hiện sự tôn trọng tác giả.",
  },
  {
    id: "b11-06",
    q: "Chia sẻ khoá học/sách điện tử có bản quyền lên nhóm chat cho bạn bè tải miễn phí là hành vi:",
    options: [
      "Vi phạm bản quyền dù không thu tiền",
      "Hợp pháp vì mục đích học tập",
      "Hợp pháp vì chia sẻ trong nhóm kín",
      "Chỉ vi phạm nếu thu phí",
    ],
    answer: 0,
    explain:
      "Phát tán bản sao tác phẩm khi chưa được phép là vi phạm quyền tác giả, kể cả miễn phí hay trong nhóm kín.",
  },
  {
    id: "b11-07",
    q: "Bắt nạt trên mạng (cyberbullying) là:",
    options: [
      "Dùng môi trường số đe doạ, sỉ nhục người khác nhiều lần",
      "Tranh luận gay gắt nhưng lịch sự về một chủ đề",
      "Chặn và không trả lời tin nhắn của một người bạn",
      "Đăng lại bài của người khác mà không xin phép",
    ],
    answer: 0,
    explain:
      "Cyberbullying gây tổn thương tâm lí nghiêm trọng; nạn nhân nên lưu bằng chứng, chặn kẻ bắt nạt và báo người lớn/nhà trường.",
  },
  {
    id: "b11-08",
    q: "Nhận được tin nhắn kêu gọi chuyển tiền từ thiện qua tài khoản cá nhân không rõ danh tính, em nên:",
    options: [
      "Kiểm chứng kĩ, chỉ ủng hộ qua tổ chức chính thống",
      "Chia sẻ lời kêu gọi để nhiều người cùng giúp",
      "Chuyển ngay vì việc thiện không nên chần chừ",
      "Chuyển một khoản nhỏ cho yên tâm rồi thôi",
    ],
    answer: 0,
    explain:
      "Lợi dụng từ thiện là chiêu lừa đảo phổ biến; hãy kiểm chứng và ủng hộ qua kênh chính thống có xác nhận.",
  },
  {
    id: "b11-09",
    q: 'Quy tắc nào nên nhớ trước khi đăng bất kì nội dung gì lên mạng?',
    options: [
      "Nội dung lan truyền nhanh, gần như không thu hồi được",
      "Chỉ bạn bè trong danh sách mới xem được bài đăng",
      "Có thể xoá sạch dấu vết bất cứ lúc nào muốn",
      "Nội dung cũ sẽ tự biến mất sau khoảng một năm",
    ],
    answer: 0,
    explain:
      "Ảnh chụp màn hình, chia sẻ lại... khiến nội dung tồn tại mãi. Hãy cân nhắc kĩ trước khi đăng.",
  },
  {
    id: "b11-10",
    q: "Phần mềm mã nguồn mở khác phần mềm thương mại đóng ở điểm nào?",
    options: [
      "Công khai mã nguồn, cho phép dùng và sửa theo giấy phép",
      "Không có giấy phép và không ràng buộc điều kiện nào",
      "Không có bản quyền nên ai muốn dùng sao cũng được",
      "Chất lượng kém hơn vì không có công ty đứng sau",
    ],
    answer: 0,
    explain:
      "Mã nguồn mở (Linux, LibreOffice...) vẫn có bản quyền và giấy phép (GPL, MIT...) nhưng cho phép dùng, xem, sửa mã nguồn theo điều kiện của giấy phép.",
  },
  {
    id: "b11-11",
    q: "Trích dẫn bài viết của người khác vào bài của mình, cách làm ĐÚNG là:",
    options: [
      "Trích ngắn phần cần thiết, ghi rõ tác giả và nguồn",
      "Đổi vài từ trong bài rồi coi như của chính mình",
      "Sao chép toàn bộ bài rồi để tên mình bên dưới",
      "Chỉ cần ghi nguồn khi bài viết đó nổi tiếng",
    ],
    answer: 0,
    explain:
      "Trích dẫn hợp lí kèm dẫn nguồn là được phép; sao chép mà không ghi nguồn là đạo văn, vi phạm quyền tác giả.",
  },
  {
    id: "b11-12",
    q: "Luật nào của Việt Nam quy định trực tiếp về hành vi trên không gian mạng?",
    options: [
      "Luật An ninh mạng (2018)",
      "Luật Giao thông đường bộ",
      "Luật Thương mại",
      "Luật Xây dựng",
    ],
    answer: 0,
    explain:
      "Luật An ninh mạng 2018 (cùng Luật Công nghệ thông tin, Luật Sở hữu trí tuệ...) là căn cứ pháp lí điều chỉnh hành vi trên môi trường số.",
  },
];

export default questions;
