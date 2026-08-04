import type { Question } from "@/lib/types";

// Bài 13. Bổ sung các đối tượng đồ hoạ
const questions: Question[] = [
  {
    id: "b13-01",
    q: "Trong Inkscape, để vẽ hình chữ nhật ta dùng công cụ nào?",
    options: [
      "Công cụ Rectangle (phím tắt R)",
      "Công cụ Text",
      "Công cụ Zoom",
      "Công cụ Eraser",
    ],
    answer: 0,
    explain: "Hộp công cụ có sẵn Rectangle (chữ nhật), Ellipse (elip), Star (sao), Bezier (đường)...",
  },
  {
    id: "b13-02",
    q: "Muốn vẽ hình vuông (thay vì chữ nhật bất kì), khi kéo chuột cần giữ phím:",
    options: ["Ctrl", "Alt", "Tab", "Caps Lock"],
    answer: 0,
    explain: "Giữ Ctrl khoá tỉ lệ 1:1 → chữ nhật thành hình vuông, elip thành hình tròn.",
  },
  {
    id: "b13-03",
    q: "Khi các hình chồng lên nhau, hình nào hiển thị trên cùng?",
    options: [
      "Hình được vẽ (hoặc đưa lên) sau cùng trong thứ tự xếp lớp",
      "Hình lớn nhất",
      "Hình có màu đậm nhất",
      "Hình vẽ đầu tiên",
    ],
    answer: 0,
    explain:
      "Đối tượng có thứ tự xếp lớp (z-order); lệnh Raise/Lower thay đổi vị trí trên dưới của chúng.",
  },
  {
    id: "b13-04",
    q: "Phím tắt Ctrl+D trong Inkscape có tác dụng gì?",
    options: [
      "Nhân đôi (duplicate) đối tượng đang chọn",
      "Xoá đối tượng",
      "Đổi màu đối tượng",
      "Mở tệp mới",
    ],
    answer: 0,
    explain: "Ctrl+D tạo bản sao chồng lên đối tượng gốc — rất hay dùng khi thiết kế.",
  },
  {
    id: "b13-05",
    q: "Nhóm nhiều đối tượng thành một (group) có lợi ích gì?",
    options: [
      "Di chuyển, co giãn cả cụm như một đối tượng duy nhất",
      "Làm nhẹ tệp đi một nửa",
      "Đổi tất cả thành màu đen",
      "Khoá vĩnh viễn không sửa được nữa",
    ],
    answer: 0,
    explain: "Group (Ctrl+G) gộp tạm thời để thao tác đồng bộ; Ungroup (Ctrl+Shift+G) tách lại.",
  },
  {
    id: "b13-06",
    q: "Để căn nhiều đối tượng thẳng hàng chính giữa, ta dùng chức năng nào?",
    options: [
      "Align & Distribute (Căn chỉnh và phân bố)",
      "Trace Bitmap",
      "Spell Check",
      "Print Preview",
    ],
    answer: 0,
    explain: "Align & Distribute căn trái/phải/giữa và chia đều khoảng cách các đối tượng.",
  },
  {
    id: "b13-07",
    q: "Độ mờ/trong suốt của đối tượng được điều chỉnh bằng thuộc tính nào?",
    options: ["Opacity", "Volume", "Brightness", "Contrast"],
    answer: 0,
    explain: "Opacity 100% là đặc hoàn toàn, giảm dần sẽ nhìn xuyên qua được — dùng tạo hiệu ứng lớp.",
  },
  {
    id: "b13-08",
    q: "Công cụ Star/Polygon trong Inkscape cho phép vẽ:",
    options: [
      "Hình sao và đa giác đều với số cánh/cạnh tuỳ chọn",
      "Chỉ hình sao 5 cánh cố định",
      "Đường cong tự do",
      "Ảnh chụp màn hình",
    ],
    answer: 0,
    explain: "Trên thanh thuộc tính có thể đổi số cánh, độ nhọn... để tạo nhiều biến thể hình sao/đa giác.",
  },
  {
    id: "b13-09",
    q: "Muốn đổi màu tô của hình đang chọn nhanh nhất, ta:",
    options: [
      "Nháy chuột vào một ô màu trên bảng màu (palette)",
      "Vẽ lại hình từ đầu",
      "Xoá hình rồi tạo hình mới",
      "Đổi tên tệp",
    ],
    answer: 0,
    explain: "Click bảng màu đổi fill; Shift+click đổi stroke — hoặc mở hộp thoại Fill & Stroke để chỉnh chi tiết.",
  },
  {
    id: "b13-10",
    q: "Phóng to thu nhỏ đối tượng mà giữ nguyên tỉ lệ, khi kéo góc cần giữ phím:",
    options: ["Ctrl", "Esc", "F1", "Space"],
    answer: 0,
    explain: "Giữ Ctrl khi kéo tay nắm góc để không làm méo hình (giữ tỉ lệ ngang/dọc).",
  },
  {
    id: "b13-11",
    q: "Lệnh Undo (hoàn tác) trong hầu hết phần mềm có phím tắt là:",
    options: ["Ctrl+Z", "Ctrl+P", "Ctrl+N", "Alt+F4"],
    answer: 0,
    explain: "Ctrl+Z lùi lại thao tác vừa làm; Ctrl+Y (hoặc Ctrl+Shift+Z) làm lại.",
  },
  {
    id: "b13-12",
    q: "Khi thiết kế một tấm thiệp gồm nền, hình trang trí và chữ, nên tổ chức thế nào?",
    options: [
      "Xếp lớp hợp lí: nền dưới cùng, trang trí ở giữa, chữ trên cùng",
      "Đặt tất cả cùng một lớp không phân biệt",
      "Chữ dưới cùng cho khỏi che",
      "Mỗi thứ lưu một tệp riêng biệt",
    ],
    answer: 0,
    explain: "Tư duy xếp lớp (layer/z-order) là kĩ năng nền tảng của thiết kế đồ hoạ.",
  },
];

export default questions;
