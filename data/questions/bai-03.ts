import type { Question } from "@/lib/types";

// Bài 3. Một số kiểu dữ liệu và dữ liệu văn bản
const questions: Question[] = [
  {
    id: "b3-01",
    q: "Trong máy tính, dữ liệu thường được phân thành các kiểu cơ bản nào?",
    options: [
      "Số nguyên, số thực, lôgic và văn bản (kí tự)",
      "Số nguyên, số thực, ngày tháng và tiền tệ",
      "Văn bản, hình ảnh, âm thanh và phim video",
      "Tệp, thư mục, ổ đĩa và phân vùng trên đĩa",
    ],
    answer: 0,
    explain:
      "Bốn kiểu cơ bản là số nguyên, số thực, lôgic (đúng/sai) và văn bản. Ngày tháng hay tiền tệ là kiểu dẫn xuất do phần mềm quy ước; ảnh/âm thanh là dạng dữ liệu đa phương tiện; tệp và thư mục là cách tổ chức lưu trữ, không phải kiểu dữ liệu.",
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
    options: [
      "7 bit, bản mở rộng dùng 8 bit",
      "8 bit, bản mở rộng dùng 16 bit",
      "16 bit, giống bảng mã Unicode",
      "4 bit, đủ mã hoá 26 chữ cái",
    ],
    answer: 0,
    explain:
      "ASCII gốc dùng 7 bit mã hoá 128 kí tự, bản mở rộng dùng 8 bit cho 256 kí tự. 16 bit là cỡ mã của UTF-16, còn 4 bit chỉ biểu diễn được 16 giá trị nên không đủ cho cả bảng chữ cái.",
  },
  {
    id: "b3-04",
    q: "Hạn chế lớn nhất của bảng mã ASCII là gì?",
    options: [
      "Không đủ mã cho kí tự của nhiều ngôn ngữ khác",
      "Chiếm quá nhiều bộ nhớ cho mỗi kí tự lưu trữ",
      "Không mã hoá được các chữ số và dấu câu",
      "Không dùng được trên máy tính đời mới",
    ],
    answer: 0,
    explain:
      "256 mã của ASCII mở rộng không đủ cho các ngôn ngữ ngoài tiếng Anh nên Unicode ra đời. Ngược lại, ASCII rất tiết kiệm (1 byte/kí tự), có mã đầy đủ cho chữ số và dấu câu, và vẫn được mọi máy tính hiện nay hỗ trợ.",
  },
  {
    id: "b3-05",
    q: "Unicode là gì?",
    options: [
      "Bảng mã chung cho kí tự của hầu hết ngôn ngữ",
      "Phần mềm gõ tiếng Việt có dấu trên máy tính",
      "Bộ phông chữ giúp hiển thị chữ Việt có dấu",
      "Bảng mã mở rộng dành riêng cho tiếng Anh",
    ],
    answer: 0,
    explain:
      "Unicode gán mã duy nhất cho kí tự của mọi ngôn ngữ (hơn 149 000 kí tự). Phần mềm gõ tiếng Việt là Unikey/Vietkey, phông chữ là Times New Roman, Arial... — chúng dùng bảng mã chứ không phải là bảng mã.",
  },
  {
    id: "b3-06",
    q: "UTF-8 là gì?",
    options: [
      "Cách mã hoá Unicode dùng 1-4 byte cho mỗi kí tự",
      "Bảng mã mới ra đời để thay thế hẳn Unicode",
      "Phông chữ tiếng Việt dùng chung trên trình duyệt",
      "Định dạng nén ảnh phổ biến trên các trang web",
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
      "Xâu \"1234\" là dãy 4 kí tự, không cộng trừ trực tiếp",
      "Xâu \"1234\" chiếm ít bộ nhớ hơn số 1234",
      "Số 1234 phải viết trong dấu nháy khi khai báo",
      "Hai giá trị này hoàn toàn giống nhau trong Python",
    ],
    answer: 0,
    explain:
      "Dữ liệu văn bản lưu mã của từng kí tự chữ số, muốn tính toán phải chuyển sang kiểu số bằng int(\"1234\"). Xâu thường tốn bộ nhớ hơn chứ không ít hơn, và chỉ xâu mới cần dấu nháy.",
  },
  {
    id: "b3-09",
    q: "Giá trị kiểu lôgic chỉ có thể là:",
    options: [
      "Đúng (True) hoặc Sai (False)",
      "Hai chữ số 0 và 1 trong hệ nhị phân",
      "Một trong ba giá trị Yes, No hoặc Null",
      "Giá trị âm, bằng không hoặc dương",
    ],
    answer: 0,
    explain:
      "Kiểu lôgic (boolean) có đúng hai giá trị True/False — nền tảng của các biểu thức điều kiện. Bên trong máy chúng được lưu bằng bit 0/1, nhưng bản thân bit là đơn vị lưu trữ chứ không phải giá trị của kiểu lôgic.",
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
      "Để máy biết cách lưu trữ và phép toán nào dùng được",
      "Để chương trình chạy nhanh hơn trên mọi máy tính",
      "Để mã nguồn trông chuyên nghiệp và dễ đọc hơn",
      "Để tiết kiệm dung lượng ổ đĩa khi lưu tệp mã",
    ],
    answer: 0,
    explain:
      "Mỗi kiểu có cách biểu diễn và phép toán riêng: số cộng trừ được, xâu ghép nối được. Kiểu dữ liệu giúp máy xử lí đúng chứ không nhằm tăng tốc độ, làm đẹp mã nguồn hay tiết kiệm ổ đĩa.",
  },
];

export default questions;
