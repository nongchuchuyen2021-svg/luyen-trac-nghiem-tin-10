import type { Question } from "@/lib/types";

// Bài 5. Dữ liệu lôgic
const questions: Question[] = [
  {
    id: "b5-01",
    q: "Đại số lôgic do nhà toán học nào đặt nền móng?",
    options: ["Alan Turing", "George Boole", "Blaise Pascal", "Isaac Newton"],
    answer: 1,
    explain:
      "George Boole (thế kỉ 19) xây dựng đại số lôgic — vì thế kiểu dữ liệu lôgic còn gọi là kiểu Boolean.",
  },
  {
    id: "b5-02",
    q: "Phép toán lôgic AND (VÀ) cho kết quả đúng khi nào?",
    options: [
      "Cả hai toán hạng đều sai",
      "Hai toán hạng khác nhau",
      "Ít nhất một toán hạng đúng",
      "Cả hai toán hạng đều đúng",
    ],
    answer: 3,
    explain: "AND chỉ đúng khi cả hai cùng đúng: 1 AND 1 = 1; các trường hợp còn lại đều bằng 0.",
  },
  {
    id: "b5-03",
    q: "Phép toán lôgic OR (HOẶC) cho kết quả sai khi nào?",
    options: [
      "Hai toán hạng khác nhau",
      "Ít nhất một toán hạng đúng",
      "Cả hai toán hạng đều đúng",
      "Cả hai toán hạng đều sai",
    ],
    answer: 3,
    explain: "OR chỉ sai khi cả hai cùng sai: 0 OR 0 = 0; có ít nhất một số 1 thì kết quả là 1.",
  },
  {
    id: "b5-04",
    q: "Phép NOT (PHỦ ĐỊNH) của giá trị True là:",
    options: ["0 hoặc 1", "True", "Không xác định", "False"],
    answer: 3,
    explain: "NOT đảo giá trị: NOT True = False, NOT False = True.",
  },
  {
    id: "b5-05",
    q: "Kết quả của biểu thức (1 AND 0) OR 1 là:",
    options: ["1", "0", "Không tính được", "2"],
    answer: 0,
    explain: "1 AND 0 = 0; sau đó 0 OR 1 = 1.",
  },
  {
    id: "b5-06",
    q: 'Mệnh đề "Hôm nay trời mưa VÀ em mang ô" đúng khi nào?',
    options: [
      "Chỉ cần vế thứ hai đúng: em có mang ô theo",
      "Cả hai vế đều đúng: trời mưa và em có mang ô",
      "Chỉ cần vế thứ nhất đúng: hôm nay trời có mưa",
      "Chỉ cần một trong hai vế đúng là mệnh đề đúng",
    ],
    answer: 1,
    explain: "Liên từ VÀ tương ứng phép AND: cả hai vế phải cùng đúng.",
  },
  {
    id: "b5-07",
    q: "Giá trị lôgic thường được biểu diễn trong máy tính bằng:",
    options: [
      "2 byte, giống như cách lưu số nguyên nhỏ",
      "1 bit, quy ước 1 là đúng và 0 là sai",
      "1 byte, tức 8 bit cho mỗi giá trị lôgic",
      "1 kí tự chữ cái, là chữ Đ hoặc chữ S",
    ],
    answer: 1,
    explain:
      "Về lí thuyết chỉ cần 1 bit cho một giá trị lôgic (thực tế máy có thể cấp cả byte cho tiện xử lí).",
  },
  {
    id: "b5-08",
    q: "Trong Python, hai giá trị của kiểu bool được viết là:",
    options: ["1.0 và 0.0", "True và False", "ĐÚNG và SAI", "true và false"],
    answer: 1,
    explain: "Python viết hoa chữ cái đầu: True, False (viết thường sẽ báo lỗi tên chưa định nghĩa).",
  },
  {
    id: "b5-09",
    q: "Biểu thức 5 > 3 AND 2 > 4 có giá trị:",
    options: ["False", "True", "None", "Báo lỗi"],
    answer: 0,
    explain: "5 > 3 đúng nhưng 2 > 4 sai; đúng AND sai = sai (False).",
  },
  {
    id: "b5-10",
    q: "Ứng dụng của đại số lôgic trong máy tính là gì?",
    options: [
      "Nén ảnh và video để giảm dung lượng tệp khi lưu trữ và truyền đi",
      "Thiết kế mạch điện tử số và xử lí biểu thức điều kiện trong chương trình",
      "Mã hoá kí tự thành dãy bit theo bảng mã Unicode và UTF-8",
      "Sắp xếp và tìm kiếm dữ liệu trong các cơ sở dữ liệu lớn",
    ],
    answer: 1,
    explain:
      "Các cổng lôgic AND, OR, NOT là nền tảng của mạch số; câu lệnh if/while dựa trên biểu thức lôgic.",
  },
  {
    id: "b5-11",
    q: "NOT (x > 10) tương đương với biểu thức nào?",
    options: ["x != 10", "x < 10", "x >= 10", "x <= 10"],
    answer: 3,
    explain: "Phủ định của 'lớn hơn 10' là 'không lớn hơn 10', tức nhỏ hơn hoặc bằng 10.",
  },
  {
    id: "b5-12",
    q: "Bảng liệt kê giá trị của biểu thức lôgic theo mọi tổ hợp toán hạng gọi là:",
    options: [
      "Bảng mã ASCII dùng để mã hoá các kí tự",
      "Bảng chuyển đổi giữa hệ nhị phân và thập phân",
      "Bảng cửu chương của phép nhân trong hệ nhị phân",
      "Bảng chân trị, còn gọi là bảng giá trị chân lí",
    ],
    answer: 3,
    explain: "Bảng chân trị cho biết kết quả của phép lôgic với từng tổ hợp giá trị đầu vào.",
  },
];

export default questions;
