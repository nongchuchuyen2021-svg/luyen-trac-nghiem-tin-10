import type { Question } from "@/lib/types";

// Bài 15. Hoàn thiện hình ảnh đồ hoạ
const questions: Question[] = [
  {
    id: "b15-01",
    q: "Phép Union (hợp) hai hình trong Inkscape cho kết quả gì?",
    options: [
      "Một hình mới là toàn bộ phần của cả hai hình gộp lại",
      "Chỉ giữ phần chung của hai hình",
      "Xoá cả hai hình",
      "Hai hình đổi màu cho nhau",
    ],
    answer: 0,
    explain: "Union (Ctrl++) hợp nhất hai hình thành một path duy nhất bao trọn cả hai.",
  },
  {
    id: "b15-02",
    q: "Phép Difference (hiệu) có tác dụng gì?",
    options: [
      "Lấy hình dưới trừ đi phần bị hình trên che phủ (đục lỗ)",
      "Cộng hai hình lại",
      "Đổi thứ tự hai hình",
      "Sao chép hình trên",
    ],
    answer: 0,
    explain:
      "Difference (Ctrl+-) dùng hình trên như 'khuôn cắt' đục vào hình dưới — ví dụ khoét lỗ tròn trên tấm thẻ.",
  },
  {
    id: "b15-03",
    q: "Phép Intersection (giao) giữ lại phần nào?",
    options: [
      "Chỉ phần chồng lấn chung của hai hình",
      "Toàn bộ hai hình",
      "Phần không chồng lấn",
      "Chỉ đường viền",
    ],
    answer: 0,
    explain: "Intersection (Ctrl+*) giữ đúng vùng mà cả hai hình cùng chiếm.",
  },
  {
    id: "b15-04",
    q: "Các phép ghép hình (Union, Difference, Intersection...) nằm trong bảng chọn nào của Inkscape?",
    options: ["Path", "File", "Help", "View"],
    answer: 0,
    explain: "Menu Path chứa các phép toán hình học trên đường (path operations).",
  },
  {
    id: "b15-05",
    q: "Muốn vẽ hình trăng khuyết từ hai hình tròn, ta dùng phép nào?",
    options: ["Difference (hình tròn trên trừ vào hình tròn dưới)", "Union", "Group", "Duplicate"],
    answer: 0,
    explain: "Đặt hai hình tròn chồng lệch nhau rồi Difference — phần bị trừ tạo dáng trăng khuyết.",
  },
  {
    id: "b15-06",
    q: "Xuất bản vẽ Inkscape ra ảnh PNG dùng lệnh nào?",
    options: [
      "File → Export PNG Image",
      "File → Print",
      "Edit → Paste",
      "Path → Union",
    ],
    answer: 0,
    explain:
      "Export PNG xuất ảnh bitmap để chèn vào tài liệu, đăng mạng; tệp gốc vẫn nên giữ dạng SVG để sửa sau.",
  },
  {
    id: "b15-07",
    q: "Khi xuất PNG, chọn độ phân giải (DPI/kích thước pixel) cao hơn sẽ:",
    options: [
      "Ảnh nét hơn khi in lớn nhưng tệp nặng hơn",
      "Ảnh mờ đi",
      "Không ảnh hưởng gì",
      "Đổi màu toàn bộ ảnh",
    ],
    answer: 0,
    explain: "Nhiều pixel hơn = chi tiết hơn = dung lượng lớn hơn; chọn phù hợp mục đích (web vs in ấn).",
  },
  {
    id: "b15-08",
    q: "Vì sao nên lưu tệp SVG gốc kể cả khi đã xuất PNG?",
    options: [
      "SVG giữ nguyên các đối tượng để chỉnh sửa tiếp; PNG đã 'phẳng' thành điểm ảnh",
      "SVG nhẹ hơn nên đỡ tốn ổ cứng",
      "PNG không mở lại được",
      "SVG in màu đẹp hơn",
    ],
    answer: 0,
    explain:
      "PNG mất cấu trúc đối tượng — muốn sửa chữ, đổi màu từng phần phải quay về tệp SVG nguồn.",
  },
  {
    id: "b15-09",
    q: "Gradient (chuyển sắc) là gì?",
    options: [
      "Màu tô chuyển dần từ màu này sang màu khác",
      "Màu đơn sắc đậm",
      "Hiệu ứng làm mờ ảnh",
      "Công cụ đo kích thước",
    ],
    answer: 0,
    explain: "Gradient tạo dải màu mượt (thẳng hoặc toả tròn) — làm hình khối có chiều sâu hơn.",
  },
  {
    id: "b15-10",
    q: "Quy trình hợp lí để hoàn thiện một sản phẩm đồ hoạ (logo, thiệp) là:",
    options: [
      "Phác thảo ý tưởng → dựng hình → phối màu, chữ → căn chỉnh → xuất tệp",
      "Xuất tệp trước, vẽ sau",
      "Vẽ ngẫu nhiên không cần ý tưởng",
      "Chỉ cần chọn màu là xong",
    ],
    answer: 0,
    explain: "Làm việc có quy trình giúp sản phẩm nhất quán và tiết kiệm thời gian chỉnh sửa.",
  },
];

export default questions;
