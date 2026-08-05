import type { Question } from "@/lib/types";

// Bài 4. Hệ nhị phân và dữ liệu số nguyên
const questions: Question[] = [
  {
    id: "b4-01",
    q: "Hệ nhị phân sử dụng những chữ số nào?",
    options: ["0 và 1", "0 đến 9", "0 đến 7", "1 và 2"],
    answer: 0,
    explain: "Hệ nhị phân (cơ số 2) chỉ dùng hai chữ số 0 và 1 — phù hợp với hai trạng thái của mạch điện tử.",
  },
  {
    id: "b4-02",
    q: "Số nhị phân 101₂ có giá trị thập phân bằng bao nhiêu?",
    options: ["5", "3", "101", "6"],
    answer: 0,
    explain: "101₂ = 1×2² + 0×2¹ + 1×2⁰ = 4 + 0 + 1 = 5.",
  },
  {
    id: "b4-03",
    q: "Số thập phân 10 viết trong hệ nhị phân là:",
    options: ["1010₂", "1100₂", "1001₂", "1110₂"],
    answer: 0,
    explain: "10 = 8 + 2 = 2³ + 2¹ → 1010₂. (Chia liên tiếp cho 2: 10→5 dư 0, 5→2 dư 1, 2→1 dư 0, 1→0 dư 1, đọc ngược: 1010.)",
  },
  {
    id: "b4-04",
    q: "Số nhị phân 1111₂ có giá trị thập phân bằng:",
    options: ["15", "16", "11", "8"],
    answer: 0,
    explain: "1111₂ = 8 + 4 + 2 + 1 = 15. Mẹo: n chữ số 1 liên tiếp = 2ⁿ − 1.",
  },
  {
    id: "b4-05",
    q: "Vì sao máy tính dùng hệ nhị phân để biểu diễn dữ liệu?",
    options: [
      "Vì linh kiện điện tử dễ chế tạo với hai trạng thái có điện, không điện",
      "Vì phép tính trong hệ nhị phân luôn cho kết quả nhỏ hơn hệ thập phân",
      "Vì hệ thập phân không biểu diễn được các số nguyên quá lớn",
      "Vì hệ nhị phân tiết kiệm bộ nhớ hơn hệ thập phân khi lưu cùng một số",
    ],
    answer: 0,
    explain:
      "Hai trạng thái vật lí (bật/tắt, có điện/không điện) rất dễ thực hiện và ổn định trong mạch điện tử, tương ứng 1 và 0.",
  },
  {
    id: "b4-06",
    q: "Kết quả của phép cộng nhị phân 1 + 1 là:",
    options: ["10₂", "2₂", "1₂", "11₂"],
    answer: 0,
    explain: "Trong hệ nhị phân: 1 + 1 = 10₂ (bằng 2 trong hệ thập phân) — viết 0 nhớ 1.",
  },
  {
    id: "b4-07",
    q: "Kết quả phép cộng nhị phân 1011₂ + 110₂ là:",
    options: ["10001₂", "1111₂", "10101₂", "1101₂"],
    answer: 0,
    explain: "1011₂ (=11) + 110₂ (=6) = 17 = 16 + 1 = 10001₂.",
  },
  {
    id: "b4-08",
    q: "Với 8 bit, có thể biểu diễn được bao nhiêu số nguyên không âm khác nhau?",
    options: ["256 (từ 0 đến 255)", "255 (từ 1 đến 255)", "128 (từ 0 đến 127)", "512 (từ 0 đến 511)"],
    answer: 0,
    explain: "8 bit cho 2⁸ = 256 tổ hợp, biểu diễn các số 0..255.",
  },
  {
    id: "b4-09",
    q: "Kết quả phép nhân nhị phân 11₂ × 10₂ là:",
    options: ["110₂", "101₂", "100₂", "1010₂"],
    answer: 0,
    explain: "11₂ (=3) × 10₂ (=2) = 6 = 110₂. Nhân với 10₂ tương đương thêm chữ số 0 vào cuối.",
  },
  {
    id: "b4-10",
    q: "Số 2⁷ viết trong hệ nhị phân là:",
    options: ["10000000₂ (1 theo sau là 7 chữ số 0)", "1111111₂", "10000₂", "1000000₂ (1 theo sau là 6 chữ số 0)"],
    answer: 0,
    explain: "2ⁿ trong hệ nhị phân là chữ số 1 theo sau n chữ số 0. 2⁷ = 128 = 10000000₂.",
  },
  {
    id: "b4-11",
    q: "Dãy bit nào biểu diễn số thập phân 13?",
    options: ["1101₂", "1011₂", "1110₂", "1001₂"],
    answer: 0,
    explain: "13 = 8 + 4 + 1 = 2³ + 2² + 2⁰ = 1101₂.",
  },
  {
    id: "b4-12",
    q: "Phát biểu nào ĐÚNG về biểu diễn số nguyên trong máy tính?",
    options: [
      "Số nguyên lưu bằng số bit cố định nên phạm vi biểu diễn bị giới hạn",
      "Máy tính lưu được số nguyên lớn tuỳ ý mà không có giới hạn nào cả",
      "Mỗi số nguyên luôn chiếm đúng một bit trong bộ nhớ của máy tính",
      "Số nguyên âm không biểu diễn được nên phải lưu riêng dấu ra chỗ khác",
    ],
    answer: 0,
    explain:
      "Mỗi số nguyên được lưu trong ô nhớ có độ dài cố định (1, 2, 4... byte) nên chỉ biểu diễn được một phạm vi hữu hạn; số âm biểu diễn bằng bit dấu/bù hai.",
  },
];

export default questions;
