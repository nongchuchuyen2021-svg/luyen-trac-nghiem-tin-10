import type { Question } from "@/lib/types";

// Bài 12. Phần mềm thiết kế đồ hoạ
const questions: Question[] = [
  {
    id: "b12-01",
    q: "Đồ hoạ điểm ảnh (bitmap/raster) là gì?",
    options: [
      "Ảnh tạo từ lưới các điểm ảnh, phóng to sẽ vỡ hạt",
      "Ảnh tạo từ các công thức toán học",
      "Ảnh chỉ có hai màu đen trắng",
      "Ảnh không lưu được vào máy",
    ],
    answer: 0,
    explain:
      "Bitmap lưu màu từng pixel; phóng to quá kích thước gốc sẽ thấy răng cưa, vỡ hình.",
  },
  {
    id: "b12-02",
    q: "Đồ hoạ vector khác bitmap ở điểm nào?",
    options: [
      "Lưu hình bằng mô tả toán học (điểm, đường, màu) nên phóng to bao nhiêu cũng nét",
      "Luôn nặng hơn bitmap",
      "Chỉ vẽ được hình vuông",
      "Không đổi màu được",
    ],
    answer: 0,
    explain:
      "Vector mô tả hình bằng toạ độ và thuộc tính; khi phóng to, máy tính vẽ lại nên không vỡ hình — hợp làm logo.",
  },
  {
    id: "b12-03",
    q: "Phần mềm nào là phần mềm thiết kế đồ hoạ VECTOR miễn phí?",
    options: ["Inkscape", "GIMP", "Microsoft Word", "Windows Media Player"],
    answer: 0,
    explain: "Inkscape chuyên vector (nguồn mở, miễn phí); GIMP chuyên chỉnh sửa ảnh bitmap.",
  },
  {
    id: "b12-04",
    q: "GIMP là phần mềm dùng để:",
    options: [
      "Chỉnh sửa ảnh bitmap (tương tự Photoshop) — nguồn mở, miễn phí",
      "Soạn nhạc",
      "Vẽ hình vector",
      "Lập trình Python",
    ],
    answer: 0,
    explain: "GIMP (GNU Image Manipulation Program) xử lí ảnh điểm ảnh: cắt ghép, chỉnh màu, xoá phông...",
  },
  {
    id: "b12-05",
    q: "Định dạng tệp chuẩn của đồ hoạ vector trên web là:",
    options: [".svg", ".jpg", ".mp4", ".wav"],
    answer: 0,
    explain: "SVG (Scalable Vector Graphics) là chuẩn vector mở, phóng to không vỡ, trình duyệt hiển thị trực tiếp.",
  },
  {
    id: "b12-06",
    q: "Sản phẩm nào NÊN thiết kế bằng đồ hoạ vector?",
    options: [
      "Logo trường học (cần in từ danh thiếp đến băng rôn lớn)",
      "Ảnh chụp chân dung",
      "Ảnh màn hình trò chơi",
      "Ảnh quét tài liệu cũ",
    ],
    answer: 0,
    explain:
      "Logo cần co giãn mọi kích thước mà vẫn sắc nét → vector là lựa chọn đúng; ảnh chụp là bitmap.",
  },
  {
    id: "b12-07",
    q: "Trong Inkscape, vùng làm việc chính để vẽ gọi là:",
    options: ["Canvas (trang vẽ)", "Desktop", "Taskbar", "Ribbon"],
    answer: 0,
    explain: "Canvas là trang vẽ ở giữa màn hình; xung quanh là hộp công cụ, bảng màu, thanh thuộc tính.",
  },
  {
    id: "b12-08",
    q: "Hai thuộc tính cơ bản về màu của một đối tượng vector là:",
    options: [
      "Màu tô (fill) và màu nét (stroke)",
      "Màu nền và màu chữ",
      "Độ sáng và độ tương phản",
      "Màu nóng và màu lạnh",
    ],
    answer: 0,
    explain: "Fill là màu bên trong hình, stroke là màu đường viền — chỉnh riêng biệt được.",
  },
  {
    id: "b12-09",
    q: "Ảnh chụp từ máy ảnh số thuộc loại đồ hoạ nào?",
    options: ["Bitmap (điểm ảnh)", "Vector", "Cả hai loại", "Không thuộc loại nào"],
    answer: 0,
    explain: "Cảm biến máy ảnh ghi màu từng điểm → ảnh chụp luôn là bitmap.",
  },
  {
    id: "b12-10",
    q: "Ưu điểm của tệp vector so với bitmap cùng nội dung hình vẽ đơn giản là:",
    options: [
      "Thường nhẹ hơn và co giãn không giảm chất lượng",
      "Hiển thị màu chân thực hơn ảnh chụp",
      "Mở được bằng mọi phần mềm nghe nhạc",
      "Không cần phần mềm để xem",
    ],
    answer: 0,
    explain:
      "Hình đơn giản mô tả bằng vài lệnh toán học nhẹ hơn nhiều so với lưu hàng triệu pixel.",
  },
  {
    id: "b12-11",
    q: "Phần mềm thiết kế đồ hoạ được ứng dụng trong công việc nào?",
    options: [
      "Thiết kế logo, poster, banner quảng cáo, giao diện web, minh hoạ sách",
      "Chỉ để chơi game",
      "Quản lí điểm học sinh",
      "Soạn thảo hợp đồng",
    ],
    answer: 0,
    explain: "Đồ hoạ hiện diện khắp nơi: nhận diện thương hiệu, truyền thông, xuất bản, web, game...",
  },
  {
    id: "b12-12",
    q: "Định dạng tệp làm việc (lưu dự án) mặc định của Inkscape là:",
    options: [".svg", ".gimp", ".docx", ".exe"],
    answer: 0,
    explain: "Inkscape lưu trực tiếp dạng SVG — vừa là tệp dự án vừa là định dạng chuẩn web.",
  },
];

export default questions;
