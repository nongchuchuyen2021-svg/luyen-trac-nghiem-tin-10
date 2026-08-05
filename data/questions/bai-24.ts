import type { Question } from "@/lib/types";

// Bài 24. Xâu kí tự
const questions: Question[] = [
  {
    id: "b24-01",
    q: "Xâu kí tự trong Python là gì?",
    options: [
      "Dãy kí tự đặt trong cặp nháy đơn hoặc nháy kép",
      "Dãy các số nguyên đặt trong cặp ngoặc vuông",
      "Kiểu dữ liệu chỉ chứa được các chữ cái A đến Z",
      "Tên gọi khác của kiểu dữ liệu danh sách trong Python",
    ],
    answer: 0,
    explain: 'Xâu (str) viết trong nháy: "Tin học" hoặc \'Tin học\' — chứa được chữ, số, dấu cách, kí hiệu.',
  },
  {
    id: "b24-02",
    q: 'Cho s = "Tin hoc". Giá trị của len(s) là:',
    options: ["7", "6", "8", "2"],
    answer: 0,
    explain: "len đếm cả dấu cách: T-i-n-(cách)-h-o-c = 7 kí tự.",
  },
  {
    id: "b24-03",
    q: 'Cho s = "Python". Giá trị của s[0] là:',
    options: ['"P"', '"y"', '"n"', "Báo lỗi"],
    answer: 0,
    explain: "Xâu truy cập theo chỉ số như danh sách, bắt đầu từ 0: s[0] = \"P\".",
  },
  {
    id: "b24-04",
    q: 'Cho s = "Python". Giá trị của s[5] là:',
    options: ['"n"', '"o"', '"P"', "Báo lỗi"],
    answer: 0,
    explain: "Chỉ số 0..5 cho 6 kí tự: P(0) y(1) t(2) h(3) o(4) n(5).",
  },
  {
    id: "b24-05",
    q: "Xâu là kiểu dữ liệu KHÔNG thay đổi được (immutable) nghĩa là:",
    options: [
      "Không thể gán lại từng kí tự, ví dụ s[0] = \"A\"",
      "Không thể tạo thêm xâu mới sau khi đã khai báo",
      "Không thể đọc giá trị của từng kí tự trong xâu",
      "Không thể so sánh hai xâu bằng toán tử lớn bé",
    ],
    answer: 0,
    explain:
      "s[0] = \"A\" gây TypeError; muốn 'sửa' phải tạo xâu mới, ví dụ s = \"A\" + s[1:].",
  },
  {
    id: "b24-06",
    q: 'Kết quả của "ab" + "cd" là:',
    options: ['"abcd"', '"ab cd"', "Báo lỗi", '"a b c d"'],
    answer: 0,
    explain: "Phép + với xâu là ghép nối liền, không tự thêm dấu cách.",
  },
  {
    id: "b24-07",
    q: 'Kết quả của "Hi" * 3 là:',
    options: ['"HiHiHi"', '"Hi3"', '"Hi Hi Hi"', "Báo lỗi"],
    answer: 0,
    explain: "Phép * lặp xâu: \"Hi\" * 3 nối ba bản liền nhau.",
  },
  {
    id: "b24-08",
    q: "Đoạn chương trình sau in ra gì?",
    code: 'for ch in "abc":\n    print(ch)',
    options: [
      "a, b, c — mỗi kí tự nằm trên một dòng",
      "abc — cả ba kí tự trên cùng một dòng",
      "ch — lặp lại đúng ba lần liên tiếp",
      "Báo lỗi vì không duyệt xâu bằng for được",
    ],
    answer: 0,
    explain: "for duyệt xâu qua từng kí tự, giống duyệt danh sách.",
  },
  {
    id: "b24-09",
    q: 'Biểu thức "học" in "Tin học 10" có giá trị:',
    options: ["True", "False", '"học"', "2"],
    answer: 0,
    explain: "Toán tử in kiểm tra xâu con: \"học\" xuất hiện trong xâu nên True.",
  },
  {
    id: "b24-10",
    q: 'Cho s = "Python". Lát cắt s[0:3] cho kết quả:',
    options: ['"Pyt"', '"Pyth"', '"tho"', '"Py"'],
    answer: 0,
    explain: "s[a:b] lấy từ chỉ số a đến TRƯỚC b: chỉ số 0, 1, 2 → \"Pyt\".",
  },
  {
    id: "b24-11",
    q: 'So sánh "an" < "b" cho kết quả gì và vì sao?',
    options: [
      "True — so theo mã từng kí tự, chữ a đứng trước chữ b",
      "False — xâu nào nhiều kí tự hơn thì được coi là lớn hơn",
      "False — Python so sánh xâu theo tổng mã của các kí tự",
      "Báo lỗi — không thể so sánh lớn bé giữa hai xâu kí tự",
    ],
    answer: 0,
    explain:
      "Xâu so sánh theo thứ tự từ điển dựa trên mã kí tự, xét lần lượt từng vị trí.",
  },
  {
    id: "b24-12",
    q: "Đếm số kí tự 'a' trong xâu s, cách viết đúng là:",
    code: "dem = 0\nfor ch in s:\n    if ______:\n        dem = dem + 1",
    options: ['ch == "a"', 'ch = "a"', 's == "a"', 'ch in dem'],
    answer: 0,
    explain: "So sánh từng kí tự với \"a\" bằng == (hai dấu bằng).",
  },
];

export default questions;
