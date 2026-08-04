import type { Question } from "@/lib/types";

// Bài 20. Câu lệnh lặp for
const questions: Question[] = [
  {
    id: "b20-01",
    q: "Câu lệnh for dùng để làm gì?",
    options: [
      "Lặp lại khối lệnh với số lần biết trước",
      "Rẽ nhánh theo điều kiện",
      "Thoát khỏi chương trình",
      "Khai báo hàm",
    ],
    answer: 0,
    explain: "for lặp qua một dãy giá trị (thường tạo bởi range) — dùng khi biết trước số lần lặp.",
  },
  {
    id: "b20-02",
    q: "range(5) tạo ra dãy số nào?",
    options: ["0, 1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4, 5", "5, 4, 3, 2, 1"],
    answer: 0,
    explain: "range(n) tạo dãy từ 0 đến n−1, gồm n số. range(5) → 0..4.",
  },
  {
    id: "b20-03",
    q: "range(1, 6) tạo ra dãy số nào?",
    options: ["1, 2, 3, 4, 5", "1, 2, 3, 4, 5, 6", "0, 1, 2, 3, 4, 5", "2, 3, 4, 5"],
    answer: 0,
    explain: "range(a, b) tạo dãy từ a đến b−1. range(1, 6) → 1..5, không gồm 6.",
  },
  {
    id: "b20-04",
    q: "Đoạn chương trình sau in ra gì?",
    code: "for i in range(3):\n    print(i)",
    options: ["0 1 2 (mỗi số một dòng)", "1 2 3 (mỗi số một dòng)", "0 1 2 3", "3 lần chữ i"],
    answer: 0,
    explain: "i lần lượt nhận 0, 1, 2; mỗi vòng in một giá trị trên một dòng.",
  },
  {
    id: "b20-05",
    q: "Vòng lặp sau thực hiện bao nhiêu lần?",
    code: "for i in range(2, 10):\n    print(\"Hello\")",
    options: ["8 lần", "10 lần", "9 lần", "7 lần"],
    answer: 0,
    explain: "range(2, 10) gồm các số 2..9, tức 10 − 2 = 8 số → lặp 8 lần.",
  },
  {
    id: "b20-06",
    q: "range(0, 10, 2) tạo ra dãy nào?",
    options: ["0, 2, 4, 6, 8", "0, 2, 4, 6, 8, 10", "2, 4, 6, 8, 10", "1, 3, 5, 7, 9"],
    answer: 0,
    explain: "Tham số thứ ba là bước nhảy: bắt đầu 0, cộng 2 mỗi bước, dừng trước 10 → 0, 2, 4, 6, 8.",
  },
  {
    id: "b20-07",
    q: "Đoạn chương trình sau tính gì?",
    code: "s = 0\nfor i in range(1, 11):\n    s = s + i\nprint(s)",
    options: [
      "Tổng các số từ 1 đến 10 (kết quả 55)",
      "Tổng các số từ 1 đến 11",
      "Tích các số từ 1 đến 10",
      "Đếm số vòng lặp",
    ],
    answer: 0,
    explain: "Mỗi vòng cộng dồn i vào s: 1 + 2 + ... + 10 = 55.",
  },
  {
    id: "b20-08",
    q: "Sau vòng lặp sau, t có giá trị bao nhiêu?",
    code: "t = 1\nfor i in range(1, 5):\n    t = t * i",
    options: ["24", "120", "10", "5"],
    answer: 0,
    explain: "t = 1×1×2×3×4 = 24 (giai thừa của 4, vì range(1,5) chỉ đến 4).",
  },
  {
    id: "b20-09",
    q: "Muốn in các số 10, 9, 8, ..., 1 ta dùng:",
    options: [
      "for i in range(10, 0, -1):",
      "for i in range(10, 1):",
      "for i in range(1, 10, -1):",
      "for i in range(10):",
    ],
    answer: 0,
    explain: "Bước nhảy −1 cho dãy giảm dần: bắt đầu 10, dừng trước 0 → 10, 9, ..., 1.",
  },
  {
    id: "b20-10",
    q: "Đoạn chương trình sau in ra gì?",
    code: 'for i in range(2):\n    for j in range(3):\n        print("*", end="")\n    print()',
    options: [
      "Hai dòng, mỗi dòng 3 dấu *",
      "Ba dòng, mỗi dòng 2 dấu *",
      "Một dòng 6 dấu *",
      "6 dòng mỗi dòng 1 dấu *",
    ],
    answer: 0,
    explain:
      "Vòng ngoài chạy 2 lần (2 dòng); mỗi lần vòng trong in 3 dấu * trên cùng dòng (end=\"\" không xuống dòng), rồi print() xuống dòng.",
  },
  {
    id: "b20-11",
    q: "Biến i trong câu lệnh for i in range(n) được gọi là:",
    options: ["Biến đếm (biến điều khiển vòng lặp)", "Hằng số", "Biến toàn cục bắt buộc", "Tham số của hàm"],
    answer: 0,
    explain: "i tự động nhận lần lượt các giá trị của dãy, điều khiển số lần lặp.",
  },
  {
    id: "b20-12",
    q: "Đoạn chương trình đếm số chia hết cho 3 từ 1 đến 20. Chỗ trống cần điền gì?",
    code: "dem = 0\nfor i in range(1, 21):\n    if ______:\n        dem = dem + 1\nprint(dem)",
    options: ["i % 3 == 0", "i / 3 == 0", "i % 3 = 0", "i // 3 == 0"],
    answer: 0,
    explain:
      "Chia hết cho 3 ⇔ số dư khi chia 3 bằng 0: i % 3 == 0. Chú ý dùng == (so sánh), không phải = (gán).",
  },
];

export default questions;
