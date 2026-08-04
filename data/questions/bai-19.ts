import type { Question } from "@/lib/types";

// Bài 19. Câu lệnh điều kiện if
const questions: Question[] = [
  {
    id: "b19-01",
    q: "Câu lệnh if dùng để làm gì?",
    options: [
      "Rẽ nhánh: thực hiện khối lệnh khi điều kiện đúng",
      "Lặp lại một khối lệnh nhiều lần",
      "Khai báo biến",
      "In dữ liệu ra màn hình",
    ],
    answer: 0,
    explain:
      "if kiểm tra điều kiện; điều kiện đúng (True) thì thực hiện khối lệnh thụt lề bên trong.",
  },
  {
    id: "b19-02",
    q: "Cú pháp nào của câu lệnh if là ĐÚNG trong Python?",
    options: [
      "if a > 5:",
      "if (a > 5) then",
      "if a > 5 do",
      "if a > 5 {",
    ],
    answer: 0,
    explain: "Python dùng dấu hai chấm sau điều kiện, khối lệnh bên trong phải thụt lề. Không dùng then, do hay ngoặc nhọn.",
  },
  {
    id: "b19-03",
    q: "Phép so sánh nào kiểm tra a có BẰNG b hay không?",
    options: ["a == b", "a = b", "a := b", "a equals b"],
    answer: 0,
    explain: "== là so sánh bằng (trả về True/False); một dấu = là lệnh gán — nhầm hai kí hiệu này là lỗi kinh điển.",
  },
  {
    id: "b19-04",
    q: "Đoạn chương trình sau in ra gì?",
    code: 'a = 7\nif a % 2 == 0:\n    print("Chẵn")\nelse:\n    print("Lẻ")',
    options: ["Lẻ", "Chẵn", "Không in gì", "Báo lỗi"],
    answer: 0,
    explain: "7 % 2 = 1 ≠ 0 nên điều kiện sai, chương trình chạy nhánh else → in Lẻ.",
  },
  {
    id: "b19-05",
    q: "Biểu thức lôgic a > 5 and a < 10 đúng khi nào?",
    options: [
      "Khi a lớn hơn 5 VÀ nhỏ hơn 10 (ví dụ a = 7)",
      "Khi a bằng 5 hoặc 10",
      "Khi a nhỏ hơn 5",
      "Với mọi giá trị của a",
    ],
    answer: 0,
    explain: "and yêu cầu cả hai điều kiện cùng đúng: 5 < a < 10.",
  },
  {
    id: "b19-06",
    q: "Biểu thức not (a > 5) tương đương với:",
    options: ["a <= 5", "a < 5", "a >= 5", "a != 5"],
    answer: 0,
    explain: "Phủ định của a > 5 là a ≤ 5 (bao gồm cả trường hợp bằng 5).",
  },
  {
    id: "b19-07",
    q: "Đoạn chương trình sau in ra gì?",
    code: "x = 10\nif x >= 10:\n    print(\"A\")\nprint(\"B\")",
    options: ["A rồi B", "Chỉ A", "Chỉ B", "Không in gì"],
    answer: 0,
    explain:
      "Điều kiện đúng nên in A. Lệnh print(\"B\") KHÔNG thụt lề — nằm ngoài if nên luôn được thực hiện.",
  },
  {
    id: "b19-08",
    q: "Trong Python, khối lệnh bên trong if được xác định bằng gì?",
    options: ["Thụt lề (indentation)", "Cặp ngoặc nhọn { }", "Từ khoá begin...end", "Dấu chấm phẩy"],
    answer: 0,
    explain:
      "Python dùng thụt lề (thường 4 dấu cách) để xác định khối lệnh — thụt lề sai sẽ gây lỗi hoặc chạy sai logic.",
  },
  {
    id: "b19-09",
    q: "Giá trị của biểu thức 3 > 5 là:",
    options: ["False", "True", "0", "Báo lỗi"],
    answer: 0,
    explain: "Biểu thức so sánh trả về kiểu bool: True hoặc False. 3 > 5 sai → False.",
  },
  {
    id: "b19-10",
    q: "Đoạn chương trình kiểm tra học lực sau in ra gì nếu diem = 8?",
    code: 'diem = 8\nif diem >= 8:\n    print("Giỏi")\nelif diem >= 6.5:\n    print("Khá")\nelse:\n    print("Cần cố gắng")',
    options: ["Giỏi", "Khá", "Cần cố gắng", "Giỏi và Khá"],
    answer: 0,
    explain:
      "Điều kiện đầu tiên diem >= 8 đúng nên in Giỏi và BỎ QUA các nhánh elif/else còn lại.",
  },
  {
    id: "b19-11",
    q: "Điều kiện nào kiểm tra n chia hết cho cả 3 và 5?",
    options: [
      "n % 3 == 0 and n % 5 == 0",
      "n % 3 == 0 or n % 5 == 0",
      "n / 3 == 0 and n / 5 == 0",
      "n % 15 == 1",
    ],
    answer: 0,
    explain:
      "Chia hết cho 3 và 5 nghĩa là số dư đều bằng 0, nối bằng and. (Cũng tương đương n % 15 == 0.)",
  },
  {
    id: "b19-12",
    q: "Đoạn chương trình sau có lỗi gì?",
    code: "if x > 0\n    print(\"Dương\")",
    options: [
      "Thiếu dấu hai chấm sau điều kiện",
      "Thiếu dấu chấm phẩy",
      "print viết sai",
      "Không có lỗi",
    ],
    answer: 0,
    explain: "Cú pháp đúng phải là if x > 0: — thiếu dấu : Python sẽ báo SyntaxError.",
  },
];

export default questions;
