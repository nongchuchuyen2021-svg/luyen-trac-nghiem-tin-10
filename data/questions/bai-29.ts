import type { Question } from "@/lib/types";

// Bài 29. Nhận biết lỗi chương trình
const questions: Question[] = [
  {
    id: "b29-01",
    q: "Ba loại lỗi thường gặp khi lập trình là:",
    options: [
      "Lỗi cú pháp, lỗi ngoại lệ (khi chạy), lỗi lôgic",
      "Lỗi bàn phím, lỗi chuột, lỗi màn hình",
      "Lỗi phần cứng, lỗi mạng, lỗi điện",
      "Lỗi to, lỗi vừa, lỗi nhỏ",
    ],
    answer: 0,
    explain:
      "Syntax error (viết sai ngữ pháp), exception/runtime error (lỗi phát sinh khi chạy), logic error (chạy được nhưng cho kết quả sai).",
  },
  {
    id: "b29-02",
    q: "Lỗi cú pháp (SyntaxError) xảy ra khi nào?",
    options: [
      "Câu lệnh viết sai quy tắc ngôn ngữ, chương trình không chạy được",
      "Chương trình chạy xong nhưng kết quả sai",
      "Máy hết pin",
      "Người dùng nhập sai dữ liệu",
    ],
    answer: 0,
    explain: "Thiếu dấu :, sai thụt lề, thiếu ngoặc... Python phát hiện ngay trước khi chạy.",
  },
  {
    id: "b29-03",
    q: "Dòng lệnh sau mắc lỗi loại nào?",
    code: 'if x > 5\n    print("lớn")',
    options: ["Lỗi cú pháp — thiếu dấu hai chấm sau điều kiện", "Lỗi lôgic", "Lỗi ngoại lệ", "Không có lỗi"],
    answer: 0,
    explain: "Thiếu : sau if là vi phạm ngữ pháp — SyntaxError, chương trình không chạy nổi dòng nào.",
  },
  {
    id: "b29-04",
    q: "Lệnh print(10 / 0) gây ra lỗi gì?",
    options: ["ZeroDivisionError — lỗi ngoại lệ khi chạy", "SyntaxError", "Lỗi lôgic", "Không lỗi, in ra 0"],
    answer: 0,
    explain:
      "Cú pháp hoàn toàn đúng, nhưng lúc THỰC HIỆN phép chia cho 0 không tồn tại → ngoại lệ ZeroDivisionError.",
  },
  {
    id: "b29-05",
    q: 'Lệnh int("abc") gây lỗi gì?',
    options: ["ValueError", "ZeroDivisionError", "SyntaxError", "IndexError"],
    answer: 0,
    explain: "Xâu \"abc\" không có dạng số — int() báo ValueError khi chạy.",
  },
  {
    id: "b29-06",
    q: "Cho a = [1, 2, 3]. Lệnh print(a[5]) gây lỗi gì?",
    options: ["IndexError — chỉ số vượt quá phạm vi danh sách", "ValueError", "NameError", "TypeError"],
    answer: 0,
    explain: "Danh sách chỉ có chỉ số 0..2; truy cập a[5] là ra ngoài phạm vi → IndexError.",
  },
  {
    id: "b29-07",
    q: "Dùng biến chưa được gán giá trị (ví dụ print(diem) khi chưa tạo diem) gây lỗi:",
    options: ["NameError", "ValueError", "SyntaxError", "ZeroDivisionError"],
    answer: 0,
    explain: "NameError: name 'diem' is not defined — tên chưa tồn tại trong chương trình.",
  },
  {
    id: "b29-08",
    q: 'Lệnh "5" + 2 gây lỗi gì?',
    options: [
      "TypeError — không cộng được xâu với số",
      "ValueError",
      "Không lỗi, ra 7",
      "Không lỗi, ra 52",
    ],
    answer: 0,
    explain: "Phép + đòi hỏi hai toán hạng cùng loại: xâu + xâu hoặc số + số; trộn lẫn gây TypeError.",
  },
  {
    id: "b29-09",
    q: "Chương trình tính trung bình cộng viết nhầm (a + b) / 2 thành a + b / 2. Đây là lỗi:",
    options: [
      "Lỗi lôgic — chạy bình thường nhưng kết quả sai",
      "Lỗi cú pháp",
      "Lỗi ngoại lệ",
      "Không phải lỗi",
    ],
    answer: 0,
    explain:
      "Do ưu tiên phép toán, a + b / 2 = a + (b/2) — chương trình vẫn chạy, chỉ ra kết quả sai. Loại lỗi khó phát hiện nhất!",
  },
  {
    id: "b29-10",
    q: "Vì sao lỗi lôgic khó phát hiện hơn hai loại lỗi kia?",
    options: [
      "Vì chương trình không báo lỗi gì, phải tự so kết quả với đáp án đúng mới biết",
      "Vì Python giấu thông báo",
      "Vì nó chỉ xảy ra ban đêm",
      "Vì nó làm hỏng máy tính",
    ],
    answer: 0,
    explain:
      "Syntax và exception có thông báo đỏ chỉ rõ dòng lỗi; lỗi lôgic im lặng — cần kiểm thử để phát hiện.",
  },
  {
    id: "b29-11",
    q: "Khi Python báo lỗi ngoại lệ, thông báo cho biết gì?",
    options: [
      "Loại lỗi và dòng lệnh gây ra lỗi",
      "Cách sửa lỗi tự động",
      "Tên người viết chương trình",
      "Thời tiết hôm nay",
    ],
    answer: 0,
    explain:
      "Traceback chỉ ra file, số dòng và tên lỗi (ValueError, IndexError...) — đọc kĩ thông báo là bước đầu sửa lỗi.",
  },
  {
    id: "b29-12",
    q: "Chương trình chia hai số, muốn tránh lỗi khi người dùng nhập số chia bằng 0, nên:",
    options: [
      "Kiểm tra bằng if trước khi chia (hoặc dùng try-except)",
      "Cấm người dùng nhập số",
      "Xoá phép chia khỏi chương trình",
      "Không cần làm gì",
    ],
    answer: 0,
    explain: "if b != 0 mới chia, ngược lại thông báo — chủ động chặn tình huống gây ngoại lệ.",
  },
];

export default questions;
