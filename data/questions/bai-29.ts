import type { Question } from "@/lib/types";

// Bài 29. Nhận biết lỗi chương trình
const questions: Question[] = [
  {
    id: "b29-01",
    q: "Ba loại lỗi thường gặp khi lập trình là:",
    options: [
      "Lỗi cú pháp, lỗi ngoại lệ phát sinh khi chạy và lỗi lôgic thuật toán",
      "Lỗi khi biên dịch, lỗi khi cài đặt phần mềm và lỗi khi lưu tệp mã nguồn",
      "Lỗi do phần cứng hỏng, lỗi do mất kết nối mạng và lỗi do mất điện đột ngột",
      "Lỗi do nhập sai dữ liệu, lỗi do máy thiếu bộ nhớ và lỗi do virus máy tính",
    ],
    answer: 0,
    explain:
      "Syntax error (viết sai ngữ pháp), exception/runtime error (lỗi phát sinh khi chạy), logic error (chạy được nhưng cho kết quả sai).",
  },
  {
    id: "b29-02",
    q: "Lỗi cú pháp (SyntaxError) xảy ra khi nào?",
    options: [
      "Câu lệnh viết sai quy tắc ngôn ngữ nên chương trình không chạy được dòng nào",
      "Chương trình chạy hết bình thường nhưng cho ra kết quả không đúng mong muốn",
      "Chương trình đang chạy thì gặp tình huống không xử lí được và dừng giữa chừng",
      "Người dùng nhập dữ liệu không đúng kiểu mà chương trình đang chờ đợi",
    ],
    answer: 0,
    explain: "Thiếu dấu :, sai thụt lề, thiếu ngoặc... Python phát hiện ngay trước khi chạy.",
  },
  {
    id: "b29-03",
    q: "Dòng lệnh sau mắc lỗi loại nào?",
    code: 'if x > 5\n    print("lớn")',
    options: [
      "Lỗi cú pháp — thiếu dấu hai chấm ở cuối dòng điều kiện if",
      "Lỗi cú pháp — khối lệnh bên trong if bị thụt lề quá nhiều dấu cách",
      "Lỗi ngoại lệ — biến x chưa được gán giá trị nào trước khi so sánh",
      "Lỗi lôgic — điều kiện phải viết x >= 5 thì chương trình mới đúng ý",
    ],
    answer: 0,
    explain: "Thiếu : sau if là vi phạm ngữ pháp — SyntaxError, chương trình không chạy nổi dòng nào.",
  },
  {
    id: "b29-04",
    q: "Lệnh print(10 / 0) gây ra lỗi gì?",
    options: [
      "ZeroDivisionError — lỗi ngoại lệ phát sinh lúc chạy vì chia cho số 0",
      "SyntaxError — lỗi cú pháp vì phép chia cho 0 là viết sai quy tắc",
      "ValueError — lỗi giá trị vì số 0 không hợp lệ ở vị trí số chia",
      "Không phát sinh lỗi, chương trình in ra kết quả bằng 0 rồi kết thúc",
    ],
    answer: 0,
    explain:
      "Cú pháp hoàn toàn đúng, nhưng lúc THỰC HIỆN phép chia cho 0 không tồn tại → ngoại lệ ZeroDivisionError.",
  },
  {
    id: "b29-05",
    q: 'Lệnh int("abc") gây lỗi gì?',
    options: [
      "ValueError — giá trị xâu truyền vào không đổi được thành số nguyên",
      "TypeError — kiểu dữ liệu xâu không được phép truyền cho hàm int()",
      "SyntaxError — viết int() với đối số là xâu là sai quy tắc cú pháp",
      "NameError — tên abc chưa được định nghĩa ở đâu trong chương trình",
    ],
    answer: 0,
    explain: "Xâu \"abc\" không có dạng số — int() báo ValueError khi chạy.",
  },
  {
    id: "b29-06",
    q: "Cho a = [1, 2, 3]. Lệnh print(a[5]) gây lỗi gì?",
    options: [
      "IndexError — chỉ số 5 vượt quá phạm vi chỉ số hợp lệ của danh sách",
      "ValueError — giá trị 5 không tồn tại trong danh sách a đã cho",
      "TypeError — không được dùng số nguyên làm chỉ số cho danh sách",
      "Không lỗi, Python trả về giá trị None vì vị trí đó còn để trống",
    ],
    answer: 0,
    explain: "Danh sách chỉ có chỉ số 0..2; truy cập a[5] là ra ngoài phạm vi → IndexError.",
  },
  {
    id: "b29-07",
    q: "Dùng biến chưa được gán giá trị (ví dụ print(diem) khi chưa tạo diem) gây lỗi:",
    options: [
      "NameError — tên biến chưa được định nghĩa ở đâu trong chương trình",
      "ValueError — biến đã tồn tại nhưng đang giữ một giá trị không hợp lệ",
      "SyntaxError — dùng biến trước khi gán là viết sai quy tắc cú pháp",
      "TypeError — biến chưa có kiểu dữ liệu nên lệnh print không xử lí được",
    ],
    answer: 0,
    explain: "NameError: name 'diem' is not defined — tên chưa tồn tại trong chương trình.",
  },
  {
    id: "b29-08",
    q: 'Lệnh "5" + 2 gây lỗi gì?',
    options: [
      "TypeError — không thực hiện được phép cộng giữa một xâu và một số",
      "ValueError — xâu \"5\" có giá trị không hợp lệ để đem cộng với số 2",
      "Không lỗi, Python tự đổi xâu thành số rồi cho kết quả bằng 7",
      "Không lỗi, Python tự đổi số thành xâu rồi ghép lại thành \"52\"",
    ],
    answer: 0,
    explain: "Phép + đòi hỏi hai toán hạng cùng loại: xâu + xâu hoặc số + số; trộn lẫn gây TypeError.",
  },
  {
    id: "b29-09",
    q: "Chương trình tính trung bình cộng viết nhầm (a + b) / 2 thành a + b / 2. Đây là lỗi:",
    options: [
      "Lỗi lôgic — chương trình chạy bình thường nhưng cho kết quả sai",
      "Lỗi cú pháp — biểu thức thiếu cặp ngoặc là viết sai quy tắc ngôn ngữ",
      "Lỗi ngoại lệ — chương trình sẽ dừng lại khi thực hiện phép chia đó",
      "Không phải lỗi — hai cách viết cho cùng một kết quả như nhau",
    ],
    answer: 0,
    explain:
      "Do ưu tiên phép toán, a + b / 2 = a + (b/2) — chương trình vẫn chạy, chỉ ra kết quả sai. Loại lỗi khó phát hiện nhất!",
  },
  {
    id: "b29-10",
    q: "Vì sao lỗi lôgic khó phát hiện hơn hai loại lỗi kia?",
    options: [
      "Vì chương trình không báo gì, phải tự đối chiếu kết quả với đáp án đúng",
      "Vì thông báo lỗi lôgic thường quá dài và khó hiểu đối với người mới học",
      "Vì lỗi lôgic chỉ xuất hiện khi chạy chương trình trên máy cấu hình yếu",
      "Vì Python không có công cụ nào cho phép theo dõi giá trị của các biến",
    ],
    answer: 0,
    explain:
      "Syntax và exception có thông báo đỏ chỉ rõ dòng lỗi; lỗi lôgic im lặng — cần kiểm thử để phát hiện.",
  },
  {
    id: "b29-11",
    q: "Khi Python báo lỗi ngoại lệ, thông báo cho biết gì?",
    options: [
      "Tên loại lỗi kèm mô tả và số dòng lệnh đã gây ra lỗi đó",
      "Cách sửa cụ thể để chương trình chạy đúng theo ý người viết",
      "Danh sách toàn bộ các biến và giá trị của chúng lúc xảy ra lỗi",
      "Số lỗi còn lại trong chương trình mà Python đã phát hiện được",
    ],
    answer: 0,
    explain:
      "Traceback chỉ ra file, số dòng và tên lỗi (ValueError, IndexError...) — đọc kĩ thông báo là bước đầu sửa lỗi.",
  },
  {
    id: "b29-12",
    q: "Chương trình chia hai số, muốn tránh lỗi khi người dùng nhập số chia bằng 0, nên:",
    options: [
      "Dùng câu lệnh if kiểm tra số chia khác 0 trước khi thực hiện phép chia",
      "Đổi phép chia thành phép chia lấy phần nguyên để tránh phát sinh lỗi",
      "Gán sẵn giá trị 1 cho số chia rồi mới cho người dùng nhập đè lên",
      "Không cần xử lí vì Python tự bỏ qua phép chia cho 0 và trả về số 0",
    ],
    answer: 0,
    explain: "if b != 0 mới chia, ngược lại thông báo — chủ động chặn tình huống gây ngoại lệ.",
  },
];

export default questions;
