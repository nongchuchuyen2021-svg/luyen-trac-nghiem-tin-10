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
      "Bị xử phạt hành chính, thậm chí truy cứu trách nhiệm hình sự theo pháp luật Việt Nam",
      "Không sao vì mạng là ảo",
      "Chỉ bị nhắc nhở bởi mạng xã hội",
      "Chỉ bị xoá bài viết",
    ],
    answer: 0,
    explain:
      "Luật An ninh mạng và các nghị định xử phạt quy định rõ: hành vi vu khống, xúc phạm trên mạng bị xử phạt như ngoài đời thực.",
  },
  {
    id: "b11-03",
    q: "Bản quyền (quyền tác giả) bảo vệ điều gì?",
    options: [
      "Quyền của người sáng tạo đối với tác phẩm của mình (văn học, phần mềm, âm nhạc, hình ảnh...)",
      "Chỉ bảo vệ sách in giấy",
      "Quyền sử dụng Internet của mọi người",
      "Giá bán của sản phẩm",
    ],
    answer: 0,
    explain:
      "Quyền tác giả bảo hộ tác phẩm trí tuệ; phần mềm máy tính cũng là đối tượng được bảo hộ như tác phẩm viết.",
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
      "Dùng môi trường số để đe doạ, sỉ nhục, cô lập người khác một cách lặp đi lặp lại",
      "Tranh luận lịch sự về một chủ đề",
      "Không trả lời tin nhắn của bạn",
      "Chặn tài khoản quảng cáo",
    ],
    answer: 0,
    explain:
      "Cyberbullying gây tổn thương tâm lí nghiêm trọng; nạn nhân nên lưu bằng chứng, chặn kẻ bắt nạt và báo người lớn/nhà trường.",
  },
  {
    id: "b11-08",
    q: "Nhận được tin nhắn kêu gọi chuyển tiền từ thiện qua tài khoản cá nhân không rõ danh tính, em nên:",
    options: [
      "Thận trọng kiểm chứng; chỉ ủng hộ qua tổ chức, kênh chính thống",
      "Chuyển ngay vì việc thiện không nên chần chừ",
      "Chia sẻ lời kêu gọi cho nhiều người",
      "Chuyển một ít cho yên tâm",
    ],
    answer: 0,
    explain:
      "Lợi dụng từ thiện là chiêu lừa đảo phổ biến; hãy kiểm chứng và ủng hộ qua kênh chính thống có xác nhận.",
  },
  {
    id: "b11-09",
    q: 'Quy tắc nào nên nhớ trước khi đăng bất kì nội dung gì lên mạng?',
    options: [
      "Nội dung trên mạng lan truyền nhanh và gần như không thể thu hồi hoàn toàn",
      "Có thể xoá sạch dấu vết bất cứ lúc nào",
      "Chỉ bạn bè mới thấy được nội dung mình đăng",
      "Nội dung cũ sẽ tự biến mất sau một năm",
    ],
    answer: 0,
    explain:
      "Ảnh chụp màn hình, chia sẻ lại... khiến nội dung tồn tại mãi. Hãy cân nhắc kĩ trước khi đăng.",
  },
  {
    id: "b11-10",
    q: "Phần mềm mã nguồn mở khác phần mềm thương mại đóng ở điểm nào?",
    options: [
      "Được công khai mã nguồn và cho phép sử dụng, sửa đổi theo giấy phép kèm theo",
      "Luôn kém chất lượng hơn",
      "Không có tác giả",
      "Không có giấy phép sử dụng",
    ],
    answer: 0,
    explain:
      "Mã nguồn mở (Linux, LibreOffice...) vẫn có bản quyền và giấy phép (GPL, MIT...) nhưng cho phép dùng, xem, sửa mã nguồn theo điều kiện của giấy phép.",
  },
  {
    id: "b11-11",
    q: "Trích dẫn bài viết của người khác vào bài của mình, cách làm ĐÚNG là:",
    options: [
      "Trích ngắn gọn phần cần thiết và ghi rõ tên tác giả, nguồn",
      "Sao chép toàn bộ và để tên mình",
      "Đổi vài từ rồi coi như của mình",
      "Không cần ghi nguồn nếu bài không nổi tiếng",
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
