import type { Question } from "@/lib/types";

// Bài 25. Một số lệnh làm việc với xâu kí tự
const questions: Question[] = [
  {
    id: "b25-01",
    q: 'Cho s = "Tin hoc 10". Lệnh s.find("hoc") trả về:',
    options: ["4", "5", "-1", "True"],
    answer: 0,
    explain:
      "find trả về chỉ số bắt đầu của xâu con: T(0) i(1) n(2) cách(3) h(4) → 4.",
  },
  {
    id: "b25-02",
    q: "Khi xâu con KHÔNG tồn tại, s.find(...) trả về:",
    options: ["-1", "0", "False", "Báo lỗi dừng chương trình"],
    answer: 0,
    explain: "find trả −1 nếu không thấy (khác index của danh sách là báo lỗi).",
  },
  {
    id: "b25-03",
    q: 'Lệnh "an giang".upper() cho kết quả:',
    options: ['"AN GIANG"', '"An Giang"', '"an giang"', '"An giang"'],
    answer: 0,
    explain: "upper() chuyển toàn bộ thành chữ hoa; lower() ngược lại.",
  },
  {
    id: "b25-04",
    q: 'Lệnh "a,b,c".split(",") cho kết quả:',
    options: ['["a", "b", "c"]', '"abc"', '("a", "b", "c")', '["a,b,c"]'],
    answer: 0,
    explain: "split tách xâu thành DANH SÁCH các xâu con theo kí tự phân tách.",
  },
  {
    id: "b25-05",
    q: 'Lệnh "Tin hoc lop 10".split() (không tham số) tách theo gì?',
    options: [
      "Dấu cách (khoảng trắng) → ['Tin', 'hoc', 'lop', '10']",
      "Từng kí tự một",
      "Dấu phẩy",
      "Không tách gì cả",
    ],
    answer: 0,
    explain: "split() mặc định tách theo khoảng trắng — rất tiện tách các từ trong câu.",
  },
  {
    id: "b25-06",
    q: 'Lệnh "-".join(["a", "b", "c"]) cho kết quả:',
    options: ['"a-b-c"', '["a-b-c"]', '"abc-"', '"-abc"'],
    answer: 0,
    explain: "join nối các phần tử danh sách thành một xâu, chèn xâu phân tách vào giữa.",
  },
  {
    id: "b25-07",
    q: "Cặp lệnh nào có tác dụng NGƯỢC nhau?",
    options: [
      "split (tách xâu thành danh sách) và join (nối danh sách thành xâu)",
      "upper và find",
      "len và print",
      "find và index",
    ],
    answer: 0,
    explain: "split phân rã, join lắp ghép lại — cặp thao tác bổ trợ khi xử lí văn bản.",
  },
  {
    id: "b25-08",
    q: 'Kết quả của "  Tin học  ".strip() là:',
    options: ['"Tin học"', '"  Tin học"', '"Tinhọc"', '"TIN HỌC"'],
    answer: 0,
    explain: "strip() cắt khoảng trắng thừa ở HAI ĐẦU xâu (không đụng khoảng trắng ở giữa).",
  },
  {
    id: "b25-09",
    q: "Đoạn chương trình sau in ra gì?",
    code: 's = "hom nay troi dep"\nprint(len(s.split()))',
    options: ["4", "16", "3", "1"],
    answer: 0,
    explain: "split() tách được 4 từ; len đếm số phần tử danh sách → 4. Đây là cách đếm số từ trong câu.",
  },
  {
    id: "b25-10",
    q: 'Lệnh s.replace("a", "o") có tác dụng gì?',
    options: [
      "Trả về xâu mới trong đó mọi kí tự 'a' được thay bằng 'o'",
      "Xoá hết kí tự 'a' và 'o'",
      "Đổi chỗ 'a' và 'o' cho nhau",
      "Sửa trực tiếp xâu s gốc",
    ],
    answer: 0,
    explain:
      "replace tạo XÂU MỚI đã thay thế (xâu gốc không đổi vì xâu bất biến) — muốn giữ phải gán: s = s.replace(...).",
  },
  {
    id: "b25-11",
    q: "Kiểm tra xâu s có KẾT THÚC bằng \".png\" không, ta dùng:",
    options: ['s.endswith(".png")', 's.startswith(".png")', 's.find(".png") == 0', 's == ".png"'],
    answer: 0,
    explain: "endswith kiểm tra đuôi xâu — tiện lọc loại tệp; startswith kiểm tra phần đầu.",
  },
  {
    id: "b25-12",
    q: "Chuẩn hoá tên nhập vào (bỏ khoảng trắng thừa hai đầu, viết hoa chữ đầu mỗi từ):",
    code: 'ten = input()\nten = ______',
    options: [
      "ten.strip().title()",
      "ten.upper().split()",
      "ten.find().join()",
      "ten.len().lower()",
    ],
    answer: 0,
    explain:
      'strip() dọn hai đầu, title() viết hoa đầu từ: "  nong van an " → "Nong Van An".',
  },
];

export default questions;
