import type { Question } from "@/lib/types";

// Bài 13. Bổ sung các đối tượng đồ hoạ
const questions: Question[] = [
  {
    id: "b13-01",
    q: "Trong Inkscape, để vẽ hình chữ nhật ta dùng công cụ nào?",
    options: [
      "Công cụ Ellipse (phím tắt E)",
      "Công cụ Bezier (phím tắt B)",
      "Công cụ Rectangle (phím tắt R)",
      "Công cụ Selector (phím tắt S)",
    ],
    answer: 2,
    explain:
      "Rectangle vẽ chữ nhật; Ellipse vẽ elip/hình tròn; Bezier vẽ đường gấp khúc và đường cong; Selector chỉ để chọn và biến đổi đối tượng đã có, không vẽ được hình mới.",
  },
  {
    id: "b13-02",
    q: "Muốn vẽ hình vuông (thay vì chữ nhật bất kì), khi kéo chuột cần giữ phím:",
    options: ["Ctrl", "Tab", "Alt", "Caps Lock"],
    answer: 0,
    explain: "Giữ Ctrl khoá tỉ lệ 1:1 → chữ nhật thành hình vuông, elip thành hình tròn.",
  },
  {
    id: "b13-03",
    q: "Khi các hình chồng lên nhau, hình nào hiển thị trên cùng?",
    options: [
      "Hình có màu tô đậm và nổi bật nhất",
      "Hình được đưa lên sau cùng trong thứ tự xếp lớp",
      "Hình có diện tích lớn nhất trong các hình",
      "Hình được vẽ đầu tiên trên trang thiết kế",
    ],
    answer: 1,
    explain:
      "Thứ tự hiển thị do thứ tự xếp lớp (z-order) quyết định, không phụ thuộc kích thước hay màu sắc. Hình vẽ đầu tiên nằm dưới cùng; lệnh Raise/Lower đổi lại vị trí trên dưới.",
  },
  {
    id: "b13-04",
    q: "Phím tắt Ctrl+D trong Inkscape có tác dụng gì?",
    options: [
      "Nhóm các đối tượng đang chọn lại với nhau",
      "Nhân đôi đối tượng đang chọn ngay tại chỗ",
      "Bỏ chọn tất cả đối tượng trên trang vẽ",
      "Xoá hẳn đối tượng đang chọn khỏi trang",
    ],
    answer: 1,
    explain:
      "Ctrl+D tạo bản sao chồng khít lên đối tượng gốc. Xoá là phím Delete, nhóm là Ctrl+G, bỏ chọn là Esc hoặc Edit > Deselect.",
  },
  {
    id: "b13-05",
    q: "Nhóm nhiều đối tượng thành một (group) có lợi ích gì?",
    options: [
      "Khoá cụm lại để không chỉnh sửa được nữa",
      "Tự động căn đều khoảng cách giữa các hình",
      "Di chuyển, co giãn cả cụm như một đối tượng",
      "Hợp các hình thành một hình khép kín mới",
    ],
    answer: 2,
    explain:
      "Group (Ctrl+G) chỉ gộp tạm để thao tác đồng bộ, các hình bên trong vẫn nguyên vẹn và sửa được; Ungroup (Ctrl+Shift+G) tách lại. Hợp hình là Path > Union, căn đều là Align & Distribute.",
  },
  {
    id: "b13-06",
    q: "Để căn nhiều đối tượng thẳng hàng chính giữa, ta dùng chức năng nào?",
    options: [
      "Fill & Stroke (Màu tô và nét viền)",
      "Object Properties (Thuộc tính đối tượng)",
      "Transform (Xoay, co giãn, dịch chuyển)",
      "Align & Distribute (Căn chỉnh và phân bố)",
    ],
    answer: 3,
    explain:
      "Align & Distribute căn trái/phải/giữa và chia đều khoảng cách. Transform chỉ biến đổi từng đối tượng theo số liệu nhập vào, Fill & Stroke lo màu sắc, Object Properties đặt tên và nhãn cho đối tượng.",
  },
  {
    id: "b13-07",
    q: "Độ mờ/trong suốt của đối tượng được điều chỉnh bằng thuộc tính nào?",
    options: ["Contrast", "Opacity", "Volume", "Brightness"],
    answer: 1,
    explain: "Opacity 100% là đặc hoàn toàn, giảm dần sẽ nhìn xuyên qua được — dùng tạo hiệu ứng lớp.",
  },
  {
    id: "b13-08",
    q: "Công cụ Star/Polygon trong Inkscape cho phép vẽ:",
    options: [
      "Đa giác bất kì có các cạnh dài ngắn khác nhau",
      "Hình sao và đa giác đều, tuỳ chọn số cánh",
      "Đường cong tự do đi qua các điểm neo",
      "Hình sao 5 cánh với kích thước cố định",
    ],
    answer: 1,
    explain:
      "Trên thanh thuộc tính có thể đổi số cánh/cạnh, độ nhọn, độ bo tròn nên không hề cố định 5 cánh. Đa giác cạnh không đều hay đường cong tự do phải vẽ bằng công cụ Bezier.",
  },
  {
    id: "b13-09",
    q: "Muốn đổi màu tô của hình đang chọn nhanh nhất, ta:",
    options: [
      "Vào Edit > Preferences để đặt lại màu",
      "Xoá hình cũ rồi vẽ lại hình bằng màu mới",
      "Nháy chuột vào một ô màu trên bảng màu",
      "Giữ Shift rồi nháy vào ô màu cần dùng",
    ],
    answer: 2,
    explain:
      "Nháy vào bảng màu đổi ngay màu tô (fill). Giữ Shift rồi nháy lại đổi màu nét viền (stroke) chứ không phải màu tô. Preferences chỉ đặt tuỳ chọn chung, còn vẽ lại hình thì quá mất công.",
  },
  {
    id: "b13-10",
    q: "Phóng to thu nhỏ đối tượng mà giữ nguyên tỉ lệ, khi kéo góc cần giữ phím:",
    options: ["Esc", "F1", "Ctrl", "Space"],
    answer: 2,
    explain: "Giữ Ctrl khi kéo tay nắm góc để không làm méo hình (giữ tỉ lệ ngang/dọc).",
  },
  {
    id: "b13-11",
    q: "Lệnh Undo (hoàn tác) trong hầu hết phần mềm có phím tắt là:",
    options: ["Ctrl+Z", "Ctrl+N", "Ctrl+P", "Alt+F4"],
    answer: 0,
    explain: "Ctrl+Z lùi lại thao tác vừa làm; Ctrl+Y (hoặc Ctrl+Shift+Z) làm lại.",
  },
  {
    id: "b13-12",
    q: "Khi thiết kế một tấm thiệp gồm nền, hình trang trí và chữ, nên tổ chức thế nào?",
    options: [
      "Lưu nền, trang trí và chữ thành ba tệp riêng",
      "Đặt cả ba thành phần chung vào một lớp duy nhất",
      "Xếp lớp: chữ dưới, nền giữa, trang trí trên cùng",
      "Xếp lớp: nền dưới, trang trí giữa, chữ trên cùng",
    ],
    answer: 3,
    explain:
      "Chữ phải nằm trên cùng mới đọc được; nền đặt dưới cùng làm phông. Dồn chung một lớp thì khó chỉnh riêng từng phần, còn tách ba tệp thì không ghép lại thành một tấm thiệp được.",
  },
];

export default questions;
