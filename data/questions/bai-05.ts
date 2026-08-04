import type { Question } from "@/lib/types";

// Bài 5. Dữ liệu lôgic
const questions: Question[] = [
  {
    id: "b5-01",
    q: "Đại số lôgic do nhà toán học nào đặt nền móng?",
    options: ["George Boole", "Isaac Newton", "Alan Turing", "Blaise Pascal"],
    answer: 0,
    explain:
      "George Boole (thế kỉ 19) xây dựng đại số lôgic — vì thế kiểu dữ liệu lôgic còn gọi là kiểu Boolean.",
  },
  {
    id: "b5-02",
    q: "Phép toán lôgic AND (VÀ) cho kết quả đúng khi nào?",
    options: [
      "Cả hai toán hạng đều đúng",
      "Ít nhất một toán hạng đúng",
      "Cả hai toán hạng đều sai",
      "Hai toán hạng khác nhau",
    ],
    answer: 0,
    explain: "AND chỉ đúng khi cả hai cùng đúng: 1 AND 1 = 1; các trường hợp còn lại đều bằng 0.",
  },
  {
    id: "b5-03",
    q: "Phép toán lôgic OR (HOẶC) cho kết quả sai khi nào?",
    options: [
      "Cả hai toán hạng đều sai",
      "Cả hai toán hạng đều đúng",
      "Ít nhất một toán hạng đúng",
      "Hai toán hạng khác nhau",
    ],
    answer: 0,
    explain: "OR chỉ sai khi cả hai cùng sai: 0 OR 0 = 0; có ít nhất một số 1 thì kết quả là 1.",
  },
  {
    id: "b5-04",
    q: "Phép NOT (PHỦ ĐỊNH) của giá trị True là:",
    options: ["False", "True", "0 hoặc 1", "Không xác định"],
    answer: 0,
    explain: "NOT đảo giá trị: NOT True = False, NOT False = True.",
  },
  {
    id: "b5-05",
    q: "Kết quả của biểu thức (1 AND 0) OR 1 là:",
    options: ["1", "0", "2", "Không tính được"],
    answer: 0,
    explain: "1 AND 0 = 0; sau đó 0 OR 1 = 1.",
  },
  {
    id: "b5-06",
    q: 'Mệnh đề "Hôm nay trời mưa VÀ em mang ô" đúng khi nào?',
    options: [
      "Trời mưa đúng và em mang ô cũng đúng",
      "Chỉ cần trời mưa",
      "Chỉ cần em mang ô",
      "Một trong hai điều đúng",
    ],
    answer: 0,
    explain: "Liên từ VÀ tương ứng phép AND: cả hai vế phải cùng đúng.",
  },
  {
    id: "b5-07",
    q: "Giá trị lôgic thường được biểu diễn trong máy tính bằng:",
    options: ["1 bit (1 = đúng, 0 = sai)", "1 KB", "8 byte", "Một kí tự chữ cái"],
    answer: 0,
    explain:
      "Về lí thuyết chỉ cần 1 bit cho một giá trị lôgic (thực tế máy có thể cấp cả byte cho tiện xử lí).",
  },
  {
    id: "b5-08",
    q: "Trong Python, hai giá trị của kiểu bool được viết là:",
    options: ["True và False", "true và false", "ĐÚNG và SAI", "1.0 và 0.0"],
    answer: 0,
    explain: "Python viết hoa chữ cái đầu: True, False (viết thường sẽ báo lỗi tên chưa định nghĩa).",
  },
  {
    id: "b5-09",
    q: "Biểu thức 5 > 3 AND 2 > 4 có giá trị:",
    options: ["False", "True", "5", "2"],
    answer: 0,
    explain: "5 > 3 đúng nhưng 2 > 4 sai; đúng AND sai = sai (False).",
  },
  {
    id: "b5-10",
    q: "Ứng dụng của đại số lôgic trong máy tính là gì?",
    options: [
      "Thiết kế các mạch điện tử số và xử lí biểu thức điều kiện trong chương trình",
      "Chỉ dùng để học toán",
      "Nén ảnh và video",
      "Tăng dung lượng ổ cứng",
    ],
    answer: 0,
    explain:
      "Các cổng lôgic AND, OR, NOT là nền tảng của mạch số; câu lệnh if/while dựa trên biểu thức lôgic.",
  },
  {
    id: "b5-11",
    q: "NOT (x > 10) tương đương với biểu thức nào?",
    options: ["x <= 10", "x < 10", "x >= 10", "x != 10"],
    answer: 0,
    explain: "Phủ định của 'lớn hơn 10' là 'không lớn hơn 10', tức nhỏ hơn hoặc bằng 10.",
  },
  {
    id: "b5-12",
    q: "Bảng liệt kê giá trị của biểu thức lôgic theo mọi tổ hợp toán hạng gọi là:",
    options: ["Bảng chân trị (bảng giá trị chân lí)", "Bảng cửu chương", "Bảng mã ASCII", "Bảng tính Excel"],
    answer: 0,
    explain: "Bảng chân trị cho biết kết quả của phép lôgic với từng tổ hợp giá trị đầu vào.",
  },
];

export default questions;
