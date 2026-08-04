import type { Question } from "@/lib/types";

// Bài 30. Kiểm thử và gỡ lỗi chương trình
const questions: Question[] = [
  {
    id: "b30-01",
    q: "Kiểm thử chương trình là gì?",
    options: [
      "Chạy chương trình với các bộ dữ liệu thử để kiểm tra tính đúng đắn",
      "Đọc lại code cho vui",
      "In chương trình ra giấy",
      "Đổi tên các biến",
    ],
    answer: 0,
    explain:
      "Kiểm thử = cho chương trình chạy với dữ liệu vào đã biết trước kết quả đúng, rồi so sánh.",
  },
  {
    id: "b30-02",
    q: "Một bộ dữ liệu kiểm thử (test case) gồm những gì?",
    options: [
      "Dữ liệu vào và kết quả ra mong đợi",
      "Chỉ cần dữ liệu vào",
      "Tên chương trình và ngày viết",
      "Số dòng code",
    ],
    answer: 0,
    explain: "Phải biết trước đáp án đúng thì mới đối chiếu được với kết quả chương trình in ra.",
  },
  {
    id: "b30-03",
    q: "Vì sao nên kiểm thử với NHIỀU bộ dữ liệu khác nhau?",
    options: [
      "Một bộ đúng chưa đủ khẳng định — lỗi có thể chỉ lộ ra ở trường hợp đặc biệt",
      "Để chương trình chạy nhanh hơn",
      "Vì Python yêu cầu tối thiểu 5 bộ",
      "Để tốn thời gian hơn",
    ],
    answer: 0,
    explain:
      "Cần thử cả trường hợp thường lẫn biên: số 0, số âm, danh sách rỗng, giá trị lớn...",
  },
  {
    id: "b30-04",
    q: "Chương trình xếp loại điểm nên kiểm thử với các giá trị nào là hợp lí nhất?",
    options: [
      "Các giá trị biên như 0, 5, 6.5, 8, 10 và giá trị không hợp lệ như -1, 11",
      "Chỉ cần thử điểm 7",
      "Chỉ thử số thật lớn như 1000",
      "Không cần thử vì code ngắn",
    ],
    answer: 0,
    explain:
      "Lỗi hay nằm ở ranh giới các khoảng (>= hay > ?) và ở dữ liệu ngoài phạm vi.",
  },
  {
    id: "b30-05",
    q: "Gỡ lỗi (debug) là gì?",
    options: [
      "Tìm ra vị trí, nguyên nhân lỗi và sửa cho chương trình chạy đúng",
      "Xoá chương trình viết lại từ đầu",
      "Cài phần mềm diệt virus",
      "Tăng tốc độ máy tính",
    ],
    answer: 0,
    explain: "Debug là quá trình lần theo dấu vết lỗi — từ 'bug' (con bọ) trong lịch sử máy tính.",
  },
  {
    id: "b30-06",
    q: "Cách đơn giản nhất để theo dõi giá trị các biến khi tìm lỗi là:",
    options: [
      "Chèn thêm các lệnh print in giá trị biến ở những vị trí nghi ngờ",
      "Đổi màu chữ trong code",
      "Chạy chương trình thật nhiều lần",
      "Đọc to code lên",
    ],
    answer: 0,
    explain:
      "print tạm giá trị biến giữa chừng giúp thấy chương trình 'rẽ nhánh' và tính toán ra sao; xong nhớ xoá đi.",
  },
  {
    id: "b30-07",
    q: "Công cụ gỡ lỗi (debugger) của môi trường lập trình cho phép:",
    options: [
      "Chạy từng dòng lệnh, dừng tại điểm dừng (breakpoint) và xem giá trị biến",
      "Tự động viết chương trình đúng",
      "Dịch code sang tiếng Việt",
      "In code ra máy in",
    ],
    answer: 0,
    explain:
      "Debugger cho chạy từng bước (step), đặt breakpoint, quan sát biến — mạnh hơn print thủ công.",
  },
  {
    id: "b30-08",
    q: "Chương trình tính tổng 1 đến n cho kết quả luôn thiếu n. Nghi ngờ hợp lí nhất là:",
    code: "s = 0\nfor i in range(1, n):\n    s = s + i",
    options: [
      "range(1, n) không gồm n — phải sửa thành range(1, n + 1)",
      "Lệnh s = 0 sai",
      "Phải đổi for thành while",
      "Do máy tính cũ",
    ],
    answer: 0,
    explain:
      "range dừng TRƯỚC giá trị cuối — lỗi 'lệch một đơn vị' (off-by-one) kinh điển khi dùng vòng lặp.",
  },
  {
    id: "b30-09",
    q: "Khi gặp thông báo lỗi ngoại lệ dài, nên đọc từ đâu?",
    options: [
      "Dòng cuối (tên lỗi + mô tả) và số dòng code được chỉ ra",
      "Chỉ đọc dòng đầu tiên",
      "Không cần đọc, chạy lại là hết",
      "Đọc từ giữa",
    ],
    answer: 0,
    explain:
      "Dòng cuối traceback nêu loại lỗi; các dòng trên chỉ vị trí — hai thông tin đủ để khoanh vùng.",
  },
  {
    id: "b30-10",
    q: "Quy trình hợp lí khi chương trình cho kết quả sai là:",
    options: [
      "Khoanh vùng nghi vấn → xem giá trị biến → tìm nguyên nhân → sửa → kiểm thử lại toàn bộ",
      "Sửa ngẫu nhiên vài chỗ rồi hi vọng",
      "Viết lại từ đầu ngay lập tức",
      "Đổi máy tính khác",
    ],
    answer: 0,
    explain:
      "Sửa có phương pháp và LUÔN kiểm thử lại sau khi sửa — tránh sửa lỗi này sinh lỗi khác.",
  },
];

export default questions;
