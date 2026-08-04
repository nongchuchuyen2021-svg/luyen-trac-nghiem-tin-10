import type { Question } from "@/lib/types";

// Bài 3. Một số kiểu dữ liệu và dữ liệu văn bản
const questions: Question[] = [
  {
    id: "b3-01",
    q: "Trong máy tính, dữ liệu thường được phân thành các kiểu cơ bản nào?",
    options: [
      "Số nguyên, số thực, lôgic, văn bản (kí tự)",
      "Chỉ có số và chữ",
      "Ảnh, video, âm thanh",
      "Tệp và thư mục",
    ],
    answer: 0,
    explain:
      "Bốn kiểu dữ liệu cơ bản: số nguyên, số thực, lôgic (đúng/sai) và văn bản — mỗi kiểu có cách biểu diễn riêng.",
  },
  {
    id: "b3-02",
    q: "Số 3.14 thuộc kiểu dữ liệu nào?",
    options: ["Số thực", "Số nguyên", "Văn bản", "Lôgic"],
    answer: 0,
    explain: "Số có phần thập phân là số thực (trong Python là kiểu float).",
  },
  {
    id: "b3-03",
    q: "Bảng mã ASCII dùng bao nhiêu bit để mã hoá một kí tự?",
    options: ["7 bit (mở rộng 8 bit)", "16 bit", "32 bit", "2 bit"],
    answer: 0,
    explain:
      "ASCII gốc dùng 7 bit mã hoá 128 kí tự; bản mở rộng dùng 8 bit cho 256 kí tự.",
  },
  {
    id: "b3-04",
    q: "Hạn chế lớn nhất của bảng mã ASCII là gì?",
    options: [
      "Không đủ chỗ mã hoá kí tự của nhiều ngôn ngữ (như chữ Việt có dấu)",
      "Chiếm quá nhiều bộ nhớ",
      "Không mã hoá được chữ số",
      "Chỉ dùng được trên máy tính cũ",
    ],
    answer: 0,
    explain:
      "256 mã của ASCII mở rộng không đủ cho các ngôn ngữ ngoài tiếng Anh — vì vậy Unicode ra đời.",
  },
  {
    id: "b3-05",
    q: "Unicode là gì?",
    options: [
      "Bảng mã chung mã hoá kí tự của hầu hết ngôn ngữ trên thế giới",
      "Một phần mềm gõ tiếng Việt",
      "Bảng mã chỉ dành cho tiếng Anh",
      "Tên một loại phông chữ",
    ],
    answer: 0,
    explain:
      "Unicode gán mã duy nhất cho kí tự của mọi ngôn ngữ (hơn 149 000 kí tự), giúp trao đổi văn bản toàn cầu thống nhất.",
  },
  {
    id: "b3-06",
    q: "UTF-8 là gì?",
    options: [
      "Một cách mã hoá Unicode có độ dài thay đổi (1-4 byte mỗi kí tự), phổ biến nhất trên web",
      "Bảng mã thay thế hoàn toàn Unicode",
      "Phông chữ tiếng Việt",
      "Định dạng ảnh",
    ],
    answer: 0,
    explain:
      "UTF-8 mã hoá kí tự Unicode bằng 1-4 byte: kí tự Latinh chỉ tốn 1 byte, chữ Việt có dấu thường tốn 2-3 byte — tiết kiệm và tương thích ASCII.",
  },
  {
    id: "b3-07",
    q: "Kí tự chữ Việt có dấu (như ắ, ễ, ộ) được mã hoá đúng trong bảng mã nào?",
    options: ["Unicode (UTF-8)", "ASCII 7 bit", "Mã nhị phân 4 bit", "Mã Morse"],
    answer: 0,
    explain:
      "Tiếng Việt cần Unicode; trước đây các bảng mã riêng (TCVN3, VNI) gây lỗi phông, nay chuẩn chung là Unicode.",
  },
  {
    id: "b3-08",
    q: 'Xâu "1234" khác số 1234 ở điểm nào?',
    options: [
      'Xâu "1234" là dãy 4 kí tự, không dùng trực tiếp để tính toán số học',
      "Không khác gì nhau",
      'Xâu "1234" chiếm ít bộ nhớ hơn',
      "Số 1234 không lưu được trong máy tính",
    ],
    answer: 0,
    explain:
      "Dữ liệu văn bản lưu mã kí tự từng chữ số; muốn tính toán phải chuyển sang kiểu số (ví dụ int(\"1234\")).",
  },
  {
    id: "b3-09",
    q: "Giá trị kiểu lôgic chỉ có thể là:",
    options: ["Đúng (True) hoặc Sai (False)", "0 đến 9", "Âm hoặc dương", "Chẵn hoặc lẻ"],
    answer: 0,
    explain: "Kiểu lôgic (boolean) chỉ có hai giá trị True/False — nền tảng của các biểu thức điều kiện.",
  },
  {
    id: "b3-10",
    q: "Một văn bản 1000 kí tự tiếng Anh mã hoá UTF-8 chiếm khoảng bao nhiêu bộ nhớ?",
    options: ["Khoảng 1000 byte", "Khoảng 4000 byte", "Khoảng 125 byte", "Khoảng 1 MB"],
    answer: 0,
    explain: "Kí tự Latinh cơ bản trong UTF-8 chiếm 1 byte → 1000 kí tự ≈ 1000 byte ≈ 1 KB.",
  },
  {
    id: "b3-11",
    q: "Trong Python, kiểu dữ liệu số nguyên, số thực, xâu kí tự lần lượt có tên là:",
    options: ["int, float, str", "integer, real, text", "num, dec, char", "int, double, string"],
    answer: 0,
    explain: "Python dùng int (nguyên), float (thực), str (xâu), bool (lôgic).",
  },
  {
    id: "b3-12",
    q: "Vì sao cần quy định kiểu dữ liệu?",
    options: [
      "Để máy tính biết cách lưu trữ và phép toán nào áp dụng được trên dữ liệu đó",
      "Để chương trình dài hơn",
      "Chỉ để trang trí code",
      "Để tiết kiệm màn hình",
    ],
    answer: 0,
    explain:
      "Mỗi kiểu có cách biểu diễn và phép toán riêng: số cộng trừ được, xâu ghép nối được — kiểu giúp máy xử lí đúng.",
  },
];

export default questions;
