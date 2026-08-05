import type { Question } from "@/lib/types";

// Bài 16. Ngôn ngữ lập trình bậc cao và Python
const questions: Question[] = [
  {
    id: "b16-01",
    q: "Ngôn ngữ lập trình bậc cao có đặc điểm gì?",
    options: [
      "Câu lệnh gần ngôn ngữ tự nhiên, không phụ thuộc loại máy tính cụ thể",
      "Câu lệnh gồm các dãy bit 0 và 1 mà bộ xử lí thực hiện được ngay",
      "Câu lệnh viết bằng kí hiệu gợi nhớ, gắn chặt với một loại vi xử lí",
      "Câu lệnh dùng các thẻ đánh dấu để mô tả bố cục và nội dung trang",
    ],
    answer: 0,
    explain:
      "Ngôn ngữ bậc cao (Python, C++, Java...) dễ đọc, dễ viết; cần trình dịch/thông dịch chuyển sang ngôn ngữ máy để chạy.",
  },
  {
    id: "b16-02",
    q: "Vì sao chương trình viết bằng ngôn ngữ bậc cao cần được dịch trước khi máy thực hiện?",
    options: [
      "Vì bộ xử lí chỉ thực hiện được lệnh viết bằng ngôn ngữ máy dạng dãy bit",
      "Vì bản dịch luôn chạy nhanh hơn nhiều so với mã nguồn ban đầu",
      "Vì quá trình dịch giúp rút gọn chương trình còn ít dòng lệnh hơn",
      "Vì mã nguồn cần được mã hoá để người khác không đọc trộm được",
    ],
    answer: 0,
    explain:
      "CPU chỉ thực hiện được lệnh ngôn ngữ máy; trình dịch (compiler) hoặc thông dịch (interpreter) làm nhiệm vụ chuyển đổi.",
  },
  {
    id: "b16-03",
    q: "Python là ngôn ngữ thuộc loại nào?",
    options: [
      "Ngôn ngữ bậc cao, thực hiện theo cơ chế thông dịch từng câu lệnh",
      "Ngôn ngữ bậc cao, phải biên dịch trọn bộ thành tệp chạy trước khi dùng",
      "Hợp ngữ, dùng kí hiệu gợi nhớ thay cho các mã lệnh nhị phân",
      "Ngôn ngữ đánh dấu, dùng các thẻ để mô tả cấu trúc của trang web",
    ],
    answer: 0,
    explain:
      "Python là ngôn ngữ bậc cao, thực hiện theo cơ chế thông dịch — dịch và chạy từng câu lệnh.",
  },
  {
    id: "b16-04",
    q: "Ưu điểm nào khiến Python phù hợp cho người mới học lập trình?",
    options: [
      "Cú pháp đơn giản, gần ngôn ngữ tự nhiên và có thư viện rất phong phú",
      "Bắt buộc khai báo kiểu cho mọi biến nên người học ít nhầm lẫn kiểu",
      "Tự động phát hiện và sửa các lỗi lôgic trong chương trình người học viết",
      "Chỉ cần học đúng mười câu lệnh là viết được mọi chương trình cần thiết",
    ],
    answer: 0,
    explain:
      "Python nổi tiếng vì code ngắn gọn dễ đọc và hệ sinh thái thư viện lớn (AI, dữ liệu, web...).",
  },
  {
    id: "b16-05",
    q: "Câu lệnh nào in ra màn hình dòng chữ Xin chào?",
    code: '?',
    options: [
      'print("Xin chào")',
      'echo "Xin chào"',
      'println("Xin chào")',
      'printf("Xin chào")',
    ],
    answer: 0,
    explain: "Trong Python, lệnh print() đưa dữ liệu ra màn hình. echo là của shell, println của Java, printf của C.",
  },
  {
    id: "b16-06",
    q: "Kết quả của lệnh sau là gì?",
    code: "print(5 + 3)",
    options: ["8", "5 + 3", '"8"', "53"],
    answer: 0,
    explain: "5 + 3 là biểu thức số học, Python tính ra 8 rồi in kết quả. Nếu viết print(\"5 + 3\") mới in nguyên văn.",
  },
  {
    id: "b16-07",
    q: "Kết quả của lệnh sau là gì?",
    code: 'print("5 + 3")',
    options: ["5 + 3", "8", "Báo lỗi", "53"],
    answer: 0,
    explain: "Nội dung trong cặp nháy là xâu kí tự — in nguyên văn, không tính toán.",
  },
  {
    id: "b16-08",
    q: "Môi trường nào dùng để soạn thảo và chạy chương trình Python?",
    options: [
      "IDLE, Thonny hoặc các môi trường như PyCharm, Visual Studio Code",
      "Microsoft Word, WordPad hoặc các trình soạn thảo văn bản có định dạng",
      "Trình duyệt web như Chrome, Firefox mà không cần cài thêm phần mềm",
      "Bảng tính Excel kết hợp với công cụ tạo biểu đồ và hàm tính toán",
    ],
    answer: 0,
    explain:
      "IDLE đi kèm Python; ngoài ra có nhiều môi trường khác. Word chỉ là trình soạn văn bản, không chạy được code.",
  },
  {
    id: "b16-09",
    q: "Chế độ gõ lệnh trực tiếp (interactive) của Python có dấu nhắc là:",
    options: [">>>", "C:\\>", "#", "$$"],
    answer: 0,
    explain:
      "Ở chế độ tương tác, sau dấu nhắc >>> ta gõ lệnh và nhận kết quả ngay — tiện để thử nghiệm nhanh.",
  },
  {
    id: "b16-10",
    q: "Tệp chương trình Python thường có phần mở rộng là:",
    options: [".py", ".doc", ".exe", ".html"],
    answer: 0,
    explain: "Mã nguồn Python lưu trong tệp .py, ví dụ bai_tap.py.",
  },
  {
    id: "b16-11",
    q: "Kết quả của lệnh sau là gì?",
    code: "print(10 / 4)",
    options: ["2.5", "2", "2.0", "Báo lỗi"],
    answer: 0,
    explain: "Trong Python, phép chia / luôn cho kết quả số thực: 10 / 4 = 2.5. Muốn chia lấy nguyên dùng //.",
  },
  {
    id: "b16-12",
    q: "Ngôn ngữ máy là gì?",
    options: [
      "Các lệnh dạng dãy bit mà bộ xử lí thực hiện được trực tiếp",
      "Các lệnh viết bằng kí hiệu gợi nhớ tương ứng từng lệnh máy",
      "Các lệnh dùng từ tiếng Anh gần với ngôn ngữ tự nhiên của người",
      "Các lệnh điều khiển dành riêng cho robot và máy công nghiệp",
    ],
    answer: 0,
    explain:
      "Ngôn ngữ máy gồm các lệnh nhị phân gắn với từng loại CPU — là ngôn ngữ duy nhất máy hiểu trực tiếp.",
  },
];

export default questions;
