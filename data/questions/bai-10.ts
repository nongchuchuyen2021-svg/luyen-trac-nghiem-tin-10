import type { Question } from "@/lib/types";

// Bài 10. Thực hành khai thác tài nguyên trên Internet
const questions: Question[] = [
  {
    id: "b10-01",
    q: "Công cụ nào dùng để tìm kiếm thông tin trên Internet?",
    options: [
      "Máy tìm kiếm như Google, Bing hoặc Cốc Cốc",
      "Trình duyệt web như Chrome, Firefox, Edge",
      "Trình quản lí tệp có sẵn của hệ điều hành",
      "Phần mềm đọc tài liệu định dạng PDF",
    ],
    answer: 0,
    explain: "Máy tìm kiếm lập chỉ mục hàng tỉ trang web và trả kết quả theo từ khoá.",
  },
  {
    id: "b10-02",
    q: 'Đặt từ khoá trong dấu ngoặc kép, ví dụ "an toàn thông tin", có tác dụng gì?',
    options: [
      "Tìm chính xác nguyên cụm từ đó theo đúng thứ tự",
      "Loại bỏ các trang có chứa cụm từ đó khỏi kết quả",
      "Chỉ tìm cụm từ đó trong tiêu đề của các trang web",
      "Tìm các trang chứa ít nhất một từ trong cụm đó",
    ],
    answer: 0,
    explain: "Ngoặc kép yêu cầu kết quả chứa nguyên cụm — lọc bớt kết quả rời rạc, không liên quan.",
  },
  {
    id: "b10-03",
    q: "Cú pháp site:moet.gov.vn kèm từ khoá có tác dụng gì?",
    options: [
      "Chỉ tìm kết quả nằm trong trang moet.gov.vn",
      "Loại bỏ trang moet.gov.vn ra khỏi kết quả",
      "Tìm các trang có liên kết tới moet.gov.vn",
      "Tìm các trang tương tự với moet.gov.vn",
    ],
    answer: 0,
    explain: "Toán tử site: giới hạn phạm vi tìm kiếm trong một website cụ thể.",
  },
  {
    id: "b10-04",
    q: "Dấu trừ trong truy vấn, ví dụ: python -rắn, có tác dụng gì?",
    options: [
      "Loại các kết quả chứa từ 'rắn'",
      "Chỉ tìm từ 'rắn'",
      "Tìm cả hai từ",
      "Sắp xếp kết quả theo bảng chữ cái",
    ],
    answer: 0,
    explain: "Dấu trừ loại trừ từ khoá không mong muốn — hữu ích khi từ có nhiều nghĩa.",
  },
  {
    id: "b10-05",
    q: "Muốn tìm tệp trình chiếu về chủ đề nào đó, có thể thêm cú pháp:",
    options: ["filetype:pptx", "filesize:pptx", "format:pptx", "extension:pptx"],
    answer: 0,
    explain: "filetype: giới hạn theo định dạng tệp (pptx, pdf, docx, xlsx...).",
  },
  {
    id: "b10-06",
    q: "Tiêu chí nào KHÔNG giúp đánh giá độ tin cậy của thông tin trên mạng?",
    options: [
      "Trang web có nhiều quảng cáo bắt mắt",
      "Nguồn đăng là cơ quan, tổ chức uy tín",
      "Có ghi tác giả và thời gian đăng rõ ràng",
      "Nhiều nguồn độc lập cùng đưa tin giống nhau",
    ],
    answer: 0,
    explain:
      "Giao diện hay quảng cáo không nói lên độ tin cậy; nguồn gốc, tác giả, thời gian và kiểm chứng chéo mới quan trọng.",
  },
  {
    id: "b10-07",
    q: "Tên miền .gov.vn thường thuộc về loại tổ chức nào?",
    options: [
      "Cơ quan nhà nước Việt Nam",
      "Công ty tư nhân",
      "Trường đại học nước ngoài",
      "Cá nhân tự do",
    ],
    answer: 0,
    explain: ".gov = government (chính phủ); .edu.vn là giáo dục, .com là thương mại.",
  },
  {
    id: "b10-08",
    q: "Khi tải tài liệu từ Internet để làm bài, việc nên làm là:",
    options: [
      "Ghi lại địa chỉ trang và tên tác giả để trích dẫn",
      "Chép nguyên văn rồi ghi tên mình vào phần tác giả",
      "Xoá tên tác giả gốc để bài trông gọn gàng hơn",
      "Đổi vài từ trong bài rồi coi như của mình viết",
    ],
    answer: 0,
    explain: "Dẫn nguồn là yêu cầu bắt buộc về liêm chính học thuật và tôn trọng bản quyền (Bài 11).",
  },
  {
    id: "b10-09",
    q: "Tìm kiếm bằng hình ảnh (Google Images/Lens) hữu ích khi nào?",
    options: [
      "Muốn biết vật hay địa danh trong ảnh là gì khi chưa rõ tên",
      "Muốn tìm các bức ảnh khác cùng tác giả đã chụp bức ảnh đó",
      "Muốn tăng độ phân giải của bức ảnh trước khi đem đi in",
      "Muốn chuyển bức ảnh sang định dạng khác cho nhẹ hơn",
    ],
    answer: 0,
    explain: "Tìm kiếm ngược bằng ảnh giúp nhận diện đối tượng, kiểm tra nguồn gốc ảnh (phát hiện ảnh giả).",
  },
  {
    id: "b10-10",
    q: "Dịch vụ nào cho phép lưu và chia sẻ tài liệu học tập trực tuyến cho nhóm bạn cùng dùng?",
    options: [
      "Google Drive / OneDrive",
      "Máy tính bỏ túi",
      "Phần mềm Paint",
      "Trình chống phân mảnh ổ đĩa",
    ],
    answer: 0,
    explain: "Lưu trữ đám mây cho phép chia sẻ theo link, phân quyền xem/sửa — tiện làm việc nhóm.",
  },
];

export default questions;
