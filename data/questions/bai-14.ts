import type { Question } from "@/lib/types";

// Bài 14. Làm việc với đối tượng đường và văn bản
const questions: Question[] = [
  {
    id: "b14-01",
    q: "Trong đồ hoạ vector, 'đường' (path) được tạo thành từ gì?",
    options: [
      "Các điểm neo (anchor) nối với nhau bằng đoạn thẳng hoặc đường cong",
      "Các điểm ảnh xếp liền nhau",
      "Một chuỗi kí tự",
      "Nhiều hình chữ nhật nhỏ",
    ],
    answer: 0,
    explain:
      "Path gồm các điểm neo; đoạn giữa hai neo có thể là thẳng hoặc cong (điều khiển bằng tay nắm Bezier).",
  },
  {
    id: "b14-02",
    q: "Công cụ nào trong Inkscape dùng để vẽ đường thẳng/đường gấp khúc/đường cong?",
    options: ["Công cụ Bezier (Pen, phím B)", "Công cụ Rectangle", "Công cụ Zoom", "Công cụ Dropper"],
    answer: 0,
    explain: "Công cụ Bezier: nháy từng điểm tạo đường gấp khúc; nháy-kéo tạo đường cong.",
  },
  {
    id: "b14-03",
    q: "Muốn chỉnh sửa từng điểm neo của một đường đã vẽ, ta dùng công cụ:",
    options: ["Node (chỉnh nút, phím N)", "Text", "Spray", "Measure"],
    answer: 0,
    explain: "Công cụ Node cho phép kéo điểm neo, bẻ tay nắm, thêm/xoá nút để nắn hình.",
  },
  {
    id: "b14-04",
    q: "Để thêm chữ vào bản vẽ, ta dùng công cụ:",
    options: ["Text (phím T), nháy vào trang vẽ rồi gõ", "Bezier", "Ellipse", "Connector"],
    answer: 0,
    explain: "Công cụ Text tạo đối tượng văn bản; chọn phông, cỡ, kiểu trên thanh thuộc tính.",
  },
  {
    id: "b14-05",
    q: "Đối tượng văn bản trong Inkscape có thể:",
    options: [
      "Đổi phông, cỡ, màu, co giãn, xoay như đối tượng đồ hoạ",
      "Chỉ hiển thị màu đen",
      "Không di chuyển được",
      "Chỉ dùng phông Times New Roman",
    ],
    answer: 0,
    explain: "Text trong vector là đối tượng đồ hoạ đầy đủ — biến đổi thoải mái mà không vỡ nét.",
  },
  {
    id: "b14-06",
    q: "Tính năng đặt chữ chạy theo một đường cong (ví dụ chữ uốn theo vòng cung) gọi là:",
    options: [
      "Text on Path (chữ theo đường)",
      "Word Wrap",
      "Drop Cap",
      "Mail Merge",
    ],
    answer: 0,
    explain: "Chọn chữ + đường rồi dùng Text → Put on Path — chữ sẽ uốn theo hình dạng đường.",
  },
  {
    id: "b14-07",
    q: "Đường cong Bezier được điều khiển hình dạng bằng gì?",
    options: [
      "Các tay nắm (handle) gắn với điểm neo",
      "Bàn phím số",
      "Độ phân giải màn hình",
      "Tốc độ kéo chuột",
    ],
    answer: 0,
    explain: "Kéo tay nắm đổi hướng và độ cong của đoạn cong hai bên điểm neo.",
  },
  {
    id: "b14-08",
    q: "Muốn biến một hình chữ nhật thành path để nắn từng nút, ta dùng lệnh:",
    options: [
      "Path → Object to Path",
      "File → Export",
      "Edit → Copy",
      "View → Zoom",
    ],
    answer: 0,
    explain:
      "Object to Path chuyển hình cơ bản thành đường gồm các nút — sau đó chỉnh tự do bằng công cụ Node.",
  },
  {
    id: "b14-09",
    q: "Điểm neo kiểu 'trơn' (smooth) khác kiểu 'góc' (corner) thế nào?",
    options: [
      "Smooth cho đường cong mượt liên tục qua nút; corner tạo góc gãy",
      "Smooth chỉ dùng cho đường thẳng",
      "Corner làm hình to hơn",
      "Không có gì khác nhau",
    ],
    answer: 0,
    explain: "Tại nút smooth, hai tay nắm thẳng hàng nên đường cong liền mạch; nút corner cho phép gãy khúc.",
  },
  {
    id: "b14-10",
    q: "Khi vẽ bằng công cụ Bezier, kết thúc đường đang vẽ bằng cách nào?",
    options: [
      "Nhấn Enter (hoặc nháy đúp), nối về điểm đầu để khép kín hình",
      "Tắt phần mềm",
      "Nhấn Ctrl+S",
      "Đổi sang công cụ Zoom là tự xong",
    ],
    answer: 0,
    explain: "Enter/nháy đúp kết thúc đường hở; nháy vào điểm đầu tạo đường khép kín (tô màu được).",
  },
];

export default questions;
