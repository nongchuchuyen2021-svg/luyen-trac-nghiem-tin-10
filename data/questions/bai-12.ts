import type { Question } from "@/lib/types";

// Bài 12. Phần mềm thiết kế đồ hoạ
const questions: Question[] = [
  {
    id: "b12-01",
    q: "Đồ hoạ điểm ảnh (bitmap/raster) là gì?",
    options: [
      "Ảnh tạo từ lưới điểm ảnh, phóng to sẽ vỡ hạt",
      "Ảnh tạo từ công thức toán mô tả các đường nét",
      "Ảnh gồm hai màu đen trắng, không có màu trung gian",
      "Ảnh bị nén lại nên khi phóng to mới vỡ hạt",
    ],
    answer: 0,
    explain:
      "Bitmap lưu màu của từng pixel nên phóng to quá kích thước gốc sẽ thấy răng cưa, vỡ hình — kể cả khi ảnh không hề bị nén. Mô tả bằng công thức toán học là đặc điểm của đồ hoạ vector.",
  },
  {
    id: "b12-02",
    q: "Đồ hoạ vector khác bitmap ở điểm nào?",
    options: [
      "Lưu hình bằng mô tả toán học nên phóng to vẫn nét",
      "Lưu màu từng điểm ảnh nên hiển thị nhanh hơn",
      "Có dung lượng tệp lớn hơn ảnh bitmap cùng cỡ",
      "Chỉ vẽ được các hình khối cơ bản có sẵn",
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
      "Chỉnh sửa ảnh bitmap, tương tự Photoshop",
      "Vẽ hình vector, tương tự Illustrator",
      "Dựng và cắt ghép video, tương tự Premiere",
      "Thiết kế giao diện web, tương tự Figma",
    ],
    answer: 0,
    explain:
      "GIMP (GNU Image Manipulation Program) xử lí ảnh điểm ảnh: cắt ghép, chỉnh màu, xoá phông. Phần mềm vector nguồn mở tương ứng là Inkscape, còn dựng video và thiết kế giao diện là việc của nhóm phần mềm khác.",
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
      "Logo trường, in từ danh thiếp đến băng rôn lớn",
      "Ảnh chụp chân dung để in vào kỉ yếu lớp",
      "Ảnh chụp màn hình trò chơi để làm hình nền",
      "Ảnh quét tài liệu cũ để lưu trữ lâu dài",
    ],
    answer: 0,
    explain:
      "Logo cần co giãn mọi kích thước mà vẫn sắc nét → vector là lựa chọn đúng; ảnh chụp là bitmap.",
  },
  {
    id: "b12-07",
    q: "Trong Inkscape, vùng làm việc chính để vẽ gọi là:",
    options: [
      "Canvas (trang vẽ)",
      "Toolbox (hộp công cụ)",
      "Palette (bảng màu)",
      "Status bar (thanh trạng thái)",
    ],
    answer: 0,
    explain:
      "Canvas là trang vẽ ở giữa màn hình. Toolbox nằm bên trái chứa các công cụ vẽ, Palette là dải màu phía dưới, còn Status bar hiển thị thông tin về đối tượng đang chọn.",
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
      "Hiển thị màu sắc chân thực hơn ảnh chụp thật",
      "Mở được bằng mọi phần mềm mà không cần cài đặt",
      "Chứa sẵn hiệu ứng ánh sáng và bóng đổ tự nhiên",
    ],
    answer: 0,
    explain:
      "Hình đơn giản mô tả bằng vài lệnh toán học nhẹ hơn nhiều so với lưu hàng triệu pixel.",
  },
  {
    id: "b12-11",
    q: "Phần mềm thiết kế đồ hoạ được ứng dụng trong công việc nào?",
    options: [
      "Thiết kế logo, poster, banner, giao diện web",
      "Quản lí điểm và hồ sơ học sinh trong trường",
      "Soạn thảo hợp đồng và văn bản hành chính",
      "Dựng mô hình 3D và tính toán kết cấu nhà",
    ],
    answer: 0,
    explain:
      "Đồ hoạ hiện diện khắp nơi: nhận diện thương hiệu, truyền thông, xuất bản, web, game. Ba việc còn lại cần phần mềm quản lí cơ sở dữ liệu, soạn thảo văn bản và phần mềm kĩ thuật chuyên dụng.",
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
