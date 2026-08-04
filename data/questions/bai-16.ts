import type { Question } from "@/lib/types";

// Bài 16. Ngôn ngữ lập trình bậc cao và Python
const questions: Question[] = [
  {
    id: "b16-01",
    q: "Ngôn ngữ lập trình bậc cao có đặc điểm gì?",
    options: [
      "Câu lệnh gần với ngôn ngữ tự nhiên, không phụ thuộc loại máy tính cụ thể",
      "Chỉ gồm các dãy số 0 và 1",
      "Chỉ chạy được trên một loại máy tính duy nhất",
      "Không cần dịch sang ngôn ngữ máy",
    ],
    answer: 0,
    explain:
      "Ngôn ngữ bậc cao (Python, C++, Java...) dễ đọc, dễ viết; cần trình dịch/thông dịch chuyển sang ngôn ngữ máy để chạy.",
  },
  {
    id: "b16-02",
    q: "Vì sao chương trình viết bằng ngôn ngữ bậc cao cần được dịch trước khi máy thực hiện?",
    options: [
      "Vì máy tính chỉ hiểu và thực hiện được ngôn ngữ máy (dãy bit)",
      "Vì ngôn ngữ bậc cao chạy chậm",
      "Vì để chương trình ngắn hơn",
      "Vì để bảo mật mã nguồn",
    ],
    answer: 0,
    explain:
      "CPU chỉ thực hiện được lệnh ngôn ngữ máy; trình dịch (compiler) hoặc thông dịch (interpreter) làm nhiệm vụ chuyển đổi.",
  },
  {
    id: "b16-03",
    q: "Python là ngôn ngữ thuộc loại nào?",
    options: [
      "Ngôn ngữ bậc cao, được thông dịch",
      "Ngôn ngữ máy",
      "Hợp ngữ (assembly)",
      "Ngôn ngữ đánh dấu như HTML",
    ],
    answer: 0,
    explain:
      "Python là ngôn ngữ bậc cao, thực hiện theo cơ chế thông dịch — dịch và chạy từng câu lệnh.",
  },
  {
    id: "b16-04",
    q: "Ưu điểm nào khiến Python phù hợp cho người mới học lập trình?",
    options: [
      "Cú pháp đơn giản, gần ngôn ngữ tự nhiên, thư viện phong phú",
      "Bắt buộc khai báo kiểu cho mọi biến",
      "Chỉ chạy trên siêu máy tính",
      "Không cho phép viết sai",
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
      "IDLE, Thonny hoặc các IDE như PyCharm, VS Code",
      "Microsoft Word",
      "PowerPoint",
      "Trình xem ảnh",
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
      "Các lệnh ở dạng dãy bit mà CPU thực hiện được trực tiếp",
      "Ngôn ngữ của robot",
      "Tiếng Anh chuyên ngành máy tính",
      "Ngôn ngữ Python phiên bản đầu tiên",
    ],
    answer: 0,
    explain:
      "Ngôn ngữ máy gồm các lệnh nhị phân gắn với từng loại CPU — là ngôn ngữ duy nhất máy hiểu trực tiếp.",
  },
];

export default questions;
