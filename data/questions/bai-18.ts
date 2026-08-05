import type { Question } from "@/lib/types";

// Bài 18. Các lệnh vào ra đơn giản
const questions: Question[] = [
  {
    id: "b18-01",
    q: "Lệnh input() trong Python dùng để làm gì?",
    options: [
      "Nhận dữ liệu người dùng gõ từ bàn phím",
      "In dữ liệu ra màn hình cho người dùng xem",
      "Tính giá trị của một biểu thức số học",
      "Kết thúc chương trình đang chạy dở",
    ],
    answer: 0,
    explain: "input() dừng chương trình chờ người dùng gõ và nhấn Enter, trả về nội dung đã gõ.",
  },
  {
    id: "b18-02",
    q: "Dữ liệu do input() trả về luôn thuộc kiểu nào?",
    options: ["Xâu kí tự (str)", "Số nguyên (int)", "Số thực (float)", "Lôgic (bool)"],
    answer: 0,
    explain:
      "input() LUÔN trả về xâu, kể cả khi người dùng gõ số — muốn tính toán phải chuyển kiểu bằng int() hoặc float().",
  },
  {
    id: "b18-03",
    q: "Muốn nhập một số nguyên từ bàn phím vào biến n, cách viết đúng là:",
    code: "?",
    options: [
      'n = int(input("Nhập n: "))',
      'n = input(int("Nhập n: "))',
      'int n = input("Nhập n: ")',
      'n = number(input("Nhập n: "))',
    ],
    answer: 0,
    explain: "input() lấy xâu, int() chuyển xâu đó thành số nguyên — lồng nhau đúng thứ tự.",
  },
  {
    id: "b18-04",
    q: "Đoạn chương trình sau in ra gì nếu người dùng gõ 3 rồi gõ 4?",
    code: 'a = input()\nb = input()\nprint(a + b)',
    options: ["34", "7", "3 4", "Báo lỗi"],
    answer: 0,
    explain:
      "a và b là xâu \"3\" và \"4\"; phép + với xâu là GHÉP NỐI → \"34\". Muốn ra 7 phải chuyển int trước.",
  },
  {
    id: "b18-05",
    q: "Hàm float() dùng để:",
    options: [
      "Chuyển dữ liệu sang kiểu số thực",
      "Làm tròn số thực đến hàng đơn vị",
      "Chuyển dữ liệu sang kiểu xâu kí tự",
      "Cắt bỏ phần thập phân của một số",
    ],
    answer: 0,
    explain: 'float("3.5") → 3.5; dùng khi nhập dữ liệu có phần thập phân như chiều cao, cân nặng.',
  },
  {
    id: "b18-06",
    q: "Lệnh print(1, 2, 3) in ra gì?",
    options: [
      "1 2 3 (các số cách nhau dấu cách)",
      "123 (các số viết liền nhau)",
      "1,2,3 (cách nhau dấu phẩy)",
      "(1, 2, 3) (dạng một bộ tuple)",
    ],
    answer: 0,
    explain:
      "print in các giá trị cách nhau một dấu cách vì mặc định sep=\" \". Muốn viết liền phải đặt sep=\"\", muốn ngăn bằng dấu phẩy thì đặt sep=\",\"; còn dạng (1, 2, 3) là khi in một tuple print((1, 2, 3)).",
  },
  {
    id: "b18-07",
    q: "Tham số end trong print có tác dụng gì? Ví dụ print(\"A\", end=\"\")",
    options: [
      "Quy định kí tự in ở cuối thay cho xuống dòng",
      "Quy định kí tự ngăn cách giữa các giá trị",
      "Kết thúc chương trình ngay sau khi in xong",
      "Xoá nội dung màn hình trước khi in ra",
    ],
    answer: 0,
    explain:
      "Mặc định print xuống dòng sau khi in, end=\"\" khiến lần in tiếp theo nối cùng dòng. Kí tự ngăn cách giữa các giá trị là việc của tham số sep, không phải end.",
  },
  {
    id: "b18-08",
    q: "Lệnh print(\"a\", \"b\", sep=\"-\") in ra:",
    options: ["a-b", "a b", "ab", "a - b -"],
    answer: 0,
    explain: "sep quy định kí tự phân tách giữa các giá trị — ở đây là dấu gạch ngang.",
  },
  {
    id: "b18-09",
    q: "Hàm str() dùng để làm gì?",
    options: [
      "Chuyển dữ liệu số sang xâu kí tự",
      "Chuyển xâu kí tự sang dữ liệu số",
      "Sắp xếp các kí tự trong xâu",
      "Đếm số kí tự có trong xâu",
    ],
    answer: 0,
    explain: 'str(2026) → "2026"; cần khi muốn ghép số vào xâu: "Năm " + str(2026).',
  },
  {
    id: "b18-10",
    q: "Chạy lệnh sau, người dùng gõ chữ 'năm', chương trình báo lỗi gì?",
    code: 'n = int(input())\n# người dùng gõ: năm',
    options: [
      "ValueError vì xâu 'năm' không đổi được sang số",
      "TypeError vì int() nhận sai kiểu tham số",
      "SyntaxError vì thiếu dấu nháy khi gõ",
      "Không lỗi, n nhận giá trị mặc định là 0",
    ],
    answer: 0,
    explain:
      "int() chỉ chuyển được xâu viết dưới dạng chữ số, gõ chữ sẽ gây ValueError khi chạy. TypeError xảy ra khi truyền sai kiểu (ví dụ int(None)), còn SyntaxError là lỗi cú pháp của mã nguồn, không liên quan tới dữ liệu người dùng gõ.",
  },
  {
    id: "b18-11",
    q: "Chương trình tính tổng hai số nhập vào. Chỗ trống cần điền gì?",
    code: "a = ______(input())\nb = ______(input())\nprint(a + b)",
    options: ["int hoặc float", "str", "print", "input"],
    answer: 0,
    explain: "Phải chuyển kiểu số (int cho số nguyên, float cho số thực) thì phép + mới là phép cộng số học.",
  },
  {
    id: "b18-12",
    q: 'Lệnh print("Điểm:", 9.5) in ra:',
    options: ["Điểm: 9.5", "Điểm:9.5", "\"Điểm:\" 9.5", "Báo lỗi vì trộn xâu và số"],
    answer: 0,
    explain: "print chấp nhận nhiều giá trị khác kiểu, tự cách nhau bằng dấu cách.",
  },
];

export default questions;
