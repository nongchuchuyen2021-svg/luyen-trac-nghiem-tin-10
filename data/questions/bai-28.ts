import type { Question } from "@/lib/types";

// Bài 28. Phạm vi của biến
const questions: Question[] = [
  {
    id: "b28-01",
    q: "Biến cục bộ là gì?",
    options: [
      "Biến khai báo bên trong hàm, chỉ dùng được trong hàm đó",
      "Biến dùng được ở mọi nơi trong chương trình",
      "Biến không bao giờ đổi giá trị",
      "Biến của hệ điều hành",
    ],
    answer: 0,
    explain:
      "Biến tạo trong thân hàm (kể cả tham số) là cục bộ — 'sống' từ lúc gọi hàm đến khi hàm kết thúc.",
  },
  {
    id: "b28-02",
    q: "Biến toàn cục là gì?",
    options: [
      "Biến khai báo ngoài mọi hàm, các hàm có thể đọc giá trị của nó",
      "Biến chỉ dùng trong một hàm",
      "Biến của Python có sẵn",
      "Tham số của hàm",
    ],
    answer: 0,
    explain: "Biến gán ở cấp chương trình chính là toàn cục — nhìn thấy được từ bên trong các hàm (để đọc).",
  },
  {
    id: "b28-03",
    q: "Đoạn chương trình sau bị lỗi gì?",
    code: "def f():\n    x = 10\n\nf()\nprint(x)",
    options: [
      "NameError: x là biến cục bộ của f, ngoài hàm không tồn tại",
      "Không lỗi, in ra 10",
      "SyntaxError ở def",
      "In ra None",
    ],
    answer: 0,
    explain:
      "x sinh ra trong f và biến mất khi f kết thúc — bên ngoài print(x) gặp tên chưa định nghĩa.",
  },
  {
    id: "b28-04",
    q: "Đoạn chương trình sau in ra gì?",
    code: 'x = "toàn cục"\ndef f():\n    print(x)\n\nf()',
    options: [
      "toàn cục — hàm đọc được biến toàn cục",
      "Báo lỗi NameError",
      "None",
      "x",
    ],
    answer: 0,
    explain: "Trong hàm không gán x nên Python tìm ra ngoài, thấy biến toàn cục và đọc giá trị của nó.",
  },
  {
    id: "b28-05",
    q: "Đoạn chương trình sau in ra gì?",
    code: "x = 5\ndef f():\n    x = 99\n    print(x)\n\nf()\nprint(x)",
    options: [
      "99 rồi 5",
      "99 rồi 99",
      "5 rồi 5",
      "5 rồi 99",
    ],
    answer: 0,
    explain:
      "Gán x = 99 TRONG hàm tạo biến cục bộ MỚI che biến toàn cục; ngoài hàm x toàn cục vẫn là 5.",
  },
  {
    id: "b28-06",
    q: "Muốn GÁN LẠI biến toàn cục x từ bên trong hàm, phải khai báo:",
    options: ["global x ở đầu thân hàm", "local x", "public x", "Không có cách nào"],
    answer: 0,
    explain: "Từ khoá global báo cho Python biết x trong hàm chính là biến toàn cục, không tạo biến mới.",
  },
  {
    id: "b28-07",
    q: "Tham số của hàm có phạm vi như thế nào?",
    options: [
      "Là biến cục bộ của hàm đó",
      "Là biến toàn cục",
      "Dùng được ở hàm khác",
      "Tồn tại mãi sau khi hàm chạy xong",
    ],
    answer: 0,
    explain: "Tham số sinh ra khi gọi hàm, huỷ khi hàm kết thúc — đúng tính chất biến cục bộ.",
  },
  {
    id: "b28-08",
    q: "Hai hàm khác nhau cùng đặt tên biến cục bộ là i thì:",
    options: [
      "Không sao — mỗi hàm có biến i riêng, độc lập nhau",
      "Gây xung đột, chương trình lỗi",
      "Biến i dùng chung giá trị",
      "Python tự đổi tên một biến",
    ],
    answer: 0,
    explain:
      "Phạm vi cục bộ tách biệt từng hàm — nhờ vậy viết hàm không lo 'đụng tên' với code nơi khác.",
  },
  {
    id: "b28-09",
    q: "Lợi ích của biến cục bộ so với lạm dụng biến toàn cục là:",
    options: [
      "Hàm độc lập, dễ kiểm soát, tránh hàm này vô tình phá giá trị của hàm kia",
      "Tiết kiệm điện cho máy tính",
      "Bắt buộc của Python",
      "Không có lợi ích gì",
    ],
    answer: 0,
    explain:
      "Biến toàn cục bị sửa từ nhiều nơi rất khó lần ra lỗi; ưu tiên cục bộ + truyền tham số + return.",
  },
  {
    id: "b28-10",
    q: "Đoạn chương trình sau in ra gì?",
    code: "def tang(n):\n    n = n + 1\n    return n\n\na = 7\ntang(a)\nprint(a)",
    options: [
      "7 — vì n là bản sao cục bộ, a không đổi (kết quả trả về không được gán lại)",
      "8",
      "Báo lỗi",
      "None",
    ],
    answer: 0,
    explain:
      "Muốn a thay đổi phải viết a = tang(a) — hàm nhận giá trị, không tự sửa biến bên ngoài.",
  },
];

export default questions;
