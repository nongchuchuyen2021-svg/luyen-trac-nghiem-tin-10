import type { Question } from "@/lib/types";

// Bài 30. Kiểm thử và gỡ lỗi chương trình
const questions: Question[] = [
  {
    id: "b30-01",
    q: "Kiểm thử chương trình là gì?",
    options: [
      "Chạy chương trình với các bộ dữ liệu thử để kiểm tra tính đúng đắn",
      "Đọc lại toàn bộ mã nguồn để phát hiện các câu lệnh viết sai cú pháp",
      "Sắp xếp lại thứ tự các dòng lệnh cho chương trình chạy nhanh hơn",
      "Viết chú thích cho từng dòng lệnh để người khác dễ hiểu chương trình",
    ],
    answer: 0,
    explain:
      "Kiểm thử = cho chương trình chạy với dữ liệu vào đã biết trước kết quả đúng, rồi so sánh.",
  },
  {
    id: "b30-02",
    q: "Một bộ dữ liệu kiểm thử (test case) gồm những gì?",
    options: [
      "Dữ liệu vào cụ thể và kết quả ra mong đợi tương ứng với dữ liệu đó",
      "Dữ liệu vào cụ thể cùng thời gian chạy tối đa mà chương trình được phép",
      "Tên chương trình, tên người viết và ngày tháng thực hiện việc kiểm thử",
      "Số dòng mã nguồn và số lượng biến mà chương trình đã sử dụng đến",
    ],
    answer: 0,
    explain: "Phải biết trước đáp án đúng thì mới đối chiếu được với kết quả chương trình in ra.",
  },
  {
    id: "b30-03",
    q: "Vì sao nên kiểm thử với NHIỀU bộ dữ liệu khác nhau?",
    options: [
      "Một bộ đúng chưa đủ khẳng định, lỗi có thể chỉ lộ ra ở trường hợp đặc biệt",
      "Chạy càng nhiều bộ dữ liệu thì chương trình càng được tối ưu và chạy nhanh",
      "Ngôn ngữ Python quy định mỗi chương trình phải có tối thiểu năm bộ thử",
      "Mỗi lần chạy thử máy tính lại tự sửa một phần lỗi còn sót trong chương trình",
    ],
    answer: 0,
    explain:
      "Cần thử cả trường hợp thường lẫn biên: số 0, số âm, danh sách rỗng, giá trị lớn...",
  },
  {
    id: "b30-04",
    q: "Chương trình xếp loại điểm nên kiểm thử với các giá trị nào là hợp lí nhất?",
    options: [
      "Các giá trị biên như 0; 5; 6,5; 8; 10 và giá trị không hợp lệ như −1; 11",
      "Một giá trị ở giữa mỗi khoảng xếp loại, ví dụ 2; 6; 7; 9 là đã đủ tin cậy",
      "Toàn bộ các số nguyên từ 0 đến 10 để chắc chắn không bỏ sót trường hợp nào",
      "Các số rất lớn và rất nhỏ như 1000 hay −1000 để thử sức chịu tải chương trình",
    ],
    answer: 0,
    explain:
      "Lỗi hay nằm ở ranh giới các khoảng (>= hay > ?) và ở dữ liệu ngoài phạm vi.",
  },
  {
    id: "b30-05",
    q: "Gỡ lỗi (debug) là gì?",
    options: [
      "Tìm ra vị trí, nguyên nhân của lỗi rồi sửa cho chương trình chạy đúng",
      "Chạy chương trình với nhiều bộ dữ liệu để phát hiện chương trình có lỗi",
      "Xoá bỏ chương trình cũ và viết lại từ đầu theo một thuật toán khác",
      "Rà soát mã nguồn để rút gọn các câu lệnh thừa cho chương trình gọn hơn",
    ],
    answer: 0,
    explain: "Debug là quá trình lần theo dấu vết lỗi — từ 'bug' (con bọ) trong lịch sử máy tính.",
  },
  {
    id: "b30-06",
    q: "Cách đơn giản nhất để theo dõi giá trị các biến khi tìm lỗi là:",
    options: [
      "Chèn thêm các lệnh print in giá trị của biến ở những vị trí nghi ngờ",
      "Chạy đi chạy lại chương trình nhiều lần cho đến khi ra kết quả đúng",
      "Đổi tên các biến thành tên ngắn hơn để dễ theo dõi khi đọc mã nguồn",
      "Xoá bớt các câu lệnh trong chương trình cho đến khi hết báo lỗi",
    ],
    answer: 0,
    explain:
      "print tạm giá trị biến giữa chừng giúp thấy chương trình 'rẽ nhánh' và tính toán ra sao; xong nhớ xoá đi.",
  },
  {
    id: "b30-07",
    q: "Công cụ gỡ lỗi (debugger) của môi trường lập trình cho phép:",
    options: [
      "Chạy từng dòng lệnh, dừng ở điểm dừng đã đặt và xem giá trị các biến",
      "Tự động phát hiện lỗi lôgic rồi sửa lại mã nguồn cho chương trình chạy đúng",
      "Dịch các thông báo lỗi của Python sang tiếng Việt cho người học dễ hiểu",
      "Đo thời gian chạy của từng câu lệnh để tìm ra chỗ làm chương trình chậm",
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
      "range(1, n) không bao gồm n, phải sửa thành range(1, n + 1) mới đủ",
      "Lệnh s = 0 đặt sai chỗ, phải chuyển vào bên trong thân vòng lặp for",
      "Biến đếm i chưa được tăng nên phải thêm lệnh i = i + 1 vào thân lặp",
      "Phép cộng dồn viết sai, phải sửa thành s = s + 1 thay vì s = s + i",
    ],
    answer: 0,
    explain:
      "range dừng TRƯỚC giá trị cuối — lỗi 'lệch một đơn vị' (off-by-one) kinh điển khi dùng vòng lặp.",
  },
  {
    id: "b30-09",
    q: "Khi gặp thông báo lỗi ngoại lệ dài, nên đọc từ đâu?",
    options: [
      "Dòng cuối cùng nêu tên lỗi và mô tả, kèm số dòng lệnh được chỉ ra",
      "Dòng đầu tiên vì đó là nơi lỗi bắt đầu phát sinh trong chương trình",
      "Các dòng ở giữa vì chúng liệt kê những biến đang có giá trị bất thường",
      "Không cần đọc kĩ, chỉ cần chạy lại chương trình một lần nữa là biết",
    ],
    answer: 0,
    explain:
      "Dòng cuối traceback nêu loại lỗi; các dòng trên chỉ vị trí — hai thông tin đủ để khoanh vùng.",
  },
  {
    id: "b30-10",
    q: "Quy trình hợp lí khi chương trình cho kết quả sai là:",
    options: [
      "Khoanh vùng nghi vấn → xem giá trị biến → tìm nguyên nhân → sửa → thử lại",
      "Sửa thử vài chỗ nghi ngờ rồi chạy lại, đúng thì thôi mà sai thì sửa tiếp",
      "Xoá chương trình và viết lại từ đầu vì tìm lỗi thường lâu hơn viết mới",
      "Sửa xong chỗ sai rồi chạy lại đúng bộ dữ liệu vừa phát hiện lỗi là đủ",
    ],
    answer: 0,
    explain:
      "Sửa có phương pháp và LUÔN kiểm thử lại sau khi sửa — tránh sửa lỗi này sinh lỗi khác.",
  },
];

export default questions;
