import type { Question } from "@/lib/types";

// Bài 17. Biến và lệnh gán
const questions: Question[] = [
  {
    id: "b17-01",
    q: "Biến trong chương trình là gì?",
    options: [
      "Tên của một vùng nhớ lưu giá trị, giá trị này thay đổi được",
      "Một giá trị cố định, không bao giờ thay đổi khi chạy",
      "Tên của chương trình do người lập trình tự đặt ra",
      "Một ô nhớ chỉ lưu được duy nhất các số nguyên",
    ],
    answer: 0,
    explain:
      "Biến là tên đặt cho vùng nhớ lưu giá trị; giá trị của biến có thể thay đổi bằng lệnh gán.",
  },
  {
    id: "b17-02",
    q: "Lệnh gán trong Python dùng kí hiệu nào?",
    options: ["=", "==", ":=", "→"],
    answer: 0,
    explain: "Dấu = là lệnh gán (x = 5). Còn == là phép so sánh bằng.",
  },
  {
    id: "b17-03",
    q: "Tên biến nào sau đây HỢP LỆ trong Python?",
    options: ["diem_toan", "2diem", "diem toan", "class"],
    answer: 0,
    explain:
      "Tên biến gồm chữ cái, chữ số, dấu gạch dưới, không bắt đầu bằng chữ số, không trùng từ khoá (class là từ khoá), không chứa dấu cách.",
  },
  {
    id: "b17-04",
    q: "Sau hai lệnh sau, biến x có giá trị bao nhiêu?",
    code: "x = 5\nx = x + 3",
    options: ["8", "5", "3", "53"],
    answer: 0,
    explain:
      "Lệnh x = x + 3 lấy giá trị hiện tại của x (5), cộng 3 rồi gán lại cho x → x = 8.",
  },
  {
    id: "b17-05",
    q: "Python phân biệt chữ hoa, chữ thường trong tên biến. Vậy Diem và diem là:",
    options: ["Hai biến khác nhau", "Cùng một biến", "Đều không hợp lệ", "Tuỳ phiên bản Python"],
    answer: 0,
    explain: "Python phân biệt hoa/thường (case-sensitive): Diem, diem, DIEM là ba biến khác nhau.",
  },
  {
    id: "b17-06",
    q: "Sau các lệnh sau, a và b có giá trị là gì?",
    code: "a, b = 3, 7",
    options: ["a = 3, b = 7", "a = 7, b = 3", "a = 3, b = 3", "Báo lỗi"],
    answer: 0,
    explain: "Python cho phép gán đồng thời: các giá trị bên phải gán lần lượt cho các biến bên trái.",
  },
  {
    id: "b17-07",
    q: "Phép toán // trong Python là:",
    options: ["Chia lấy phần nguyên", "Chia thông thường", "Chia lấy phần dư", "Luỹ thừa"],
    answer: 0,
    explain: "7 // 2 = 3 (lấy nguyên). Chia thường là /, lấy dư là %, luỹ thừa là **.",
  },
  {
    id: "b17-08",
    q: "Kết quả của biểu thức 7 % 3 là:",
    options: ["1", "2", "2.33", "21"],
    answer: 0,
    explain: "% là phép chia lấy dư: 7 chia 3 được 2 dư 1 → 7 % 3 = 1.",
  },
  {
    id: "b17-09",
    q: "Kết quả của biểu thức 2 ** 3 là:",
    options: ["8", "6", "9", "5"],
    answer: 0,
    explain: "** là phép luỹ thừa: 2 ** 3 = 2³ = 8.",
  },
  {
    id: "b17-10",
    q: "Thứ tự thực hiện phép toán trong biểu thức 2 + 3 * 4 cho kết quả:",
    options: ["14", "20", "24", "9"],
    answer: 0,
    explain: "Nhân chia trước, cộng trừ sau: 3 * 4 = 12, rồi 2 + 12 = 14. Muốn cộng trước phải viết (2 + 3) * 4.",
  },
  {
    id: "b17-11",
    q: "Sau đoạn lệnh sau, x và y có giá trị là gì?",
    code: "x = 10\ny = x\nx = 20",
    options: ["x = 20, y = 10", "x = 20, y = 20", "x = 10, y = 20", "x = 10, y = 10"],
    answer: 0,
    explain:
      "y = x sao chép giá trị hiện tại của x (10) cho y. Đổi x sau đó không ảnh hưởng đến y.",
  },
  {
    id: "b17-12",
    q: "Lệnh nào tính chu vi hình tròn bán kính r (lấy π ≈ 3.14) và lưu vào biến cv?",
    options: ["cv = 2 * 3.14 * r", "cv == 2 * 3.14 * r", "2 * 3.14 * r = cv", "cv := 2 × 3.14 × r"],
    answer: 0,
    explain:
      "Lệnh gán: tên biến bên trái, biểu thức bên phải dấu =. Dấu × không phải kí hiệu nhân của Python.",
  },
];

export default questions;
