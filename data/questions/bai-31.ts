import type { Question } from "@/lib/types";

// Bài 31. Thực hành viết chương trình đơn giản
const questions: Question[] = [
  {
    id: "b31-01",
    q: "Trình tự hợp lí để giải một bài toán bằng lập trình là:",
    options: [
      "Xác định bài toán (vào/ra) → thiết kế thuật toán → viết chương trình → kiểm thử",
      "Viết code ngay → nghĩ thuật toán sau",
      "Kiểm thử trước → viết code sau",
      "Chỉ cần viết code là đủ",
    ],
    answer: 0,
    explain:
      "Hiểu rõ INPUT/OUTPUT và cách giải trước khi gõ code giúp tránh viết đi viết lại.",
  },
  {
    id: "b31-02",
    q: "Bài toán: nhập ba số, in ra số lớn nhất. INPUT và OUTPUT là gì?",
    options: [
      "INPUT: ba số; OUTPUT: số lớn nhất trong ba số",
      "INPUT: số lớn nhất; OUTPUT: ba số",
      "INPUT: bàn phím; OUTPUT: màn hình",
      "INPUT: chương trình; OUTPUT: máy tính",
    ],
    answer: 0,
    explain: "Xác định dữ liệu vào và kết quả ra là bước đầu tiên của mọi bài toán tin học.",
  },
  {
    id: "b31-03",
    q: "Chương trình tính điểm trung bình 3 môn. Chỗ trống điền gì?",
    code: "t = float(input())\nv = float(input())\na = float(input())\ndtb = ______\nprint(dtb)",
    options: ["(t + v + a) / 3", "t + v + a / 3", "t + v + a * 3", "(t + v + a) * 3"],
    answer: 0,
    explain: "Phải đóng ngoặc tổng trước khi chia — không ngoặc thì chỉ a bị chia 3 (lỗi lôgic kinh điển).",
  },
  {
    id: "b31-04",
    q: "Chương trình kiểm tra số chẵn/lẻ dùng biểu thức điều kiện nào?",
    options: ["n % 2 == 0", "n / 2 == 0", "n * 2 == 0", "n có chữ số cuối tròn"],
    answer: 0,
    explain: "Chẵn ⇔ chia 2 dư 0. Phép % (lấy dư) là công cụ quen thuộc cho loại bài này.",
  },
  {
    id: "b31-05",
    q: "Đoạn chương trình sau giải bài toán gì?",
    code: "n = int(input())\nfor i in range(1, 11):\n    print(n, \"x\", i, \"=\", n * i)",
    options: [
      "In bảng nhân của số n từ 1 đến 10",
      "Tính tổng 1 đến n",
      "Đếm ước số của n",
      "In các số chẵn nhỏ hơn n",
    ],
    answer: 0,
    explain: "Vòng lặp i chạy 1..10, mỗi dòng in một phép nhân — chính là bảng cửu chương của n.",
  },
  {
    id: "b31-06",
    q: "Muốn đếm các số chia hết cho 3 trong danh sách a, khung chương trình đúng là:",
    code: "dem = 0\nfor x in a:\n    ______\nprint(dem)",
    options: [
      "if x % 3 == 0: dem = dem + 1",
      "dem = x % 3",
      "if x == 3: dem = 0",
      "dem = dem + x",
    ],
    answer: 0,
    explain: "Mẫu 'duyệt và đếm theo điều kiện' — một trong các khuôn mẫu code hay gặp nhất.",
  },
  {
    id: "b31-07",
    q: "Tìm giá trị lớn nhất trong danh sách a (không dùng hàm max), cách làm đúng là:",
    code: "ln = a[0]\nfor x in a:\n    ______",
    options: [
      "if x > ln: ln = x",
      "if x < ln: ln = x",
      "ln = x",
      "if x == ln: ln = 0",
    ],
    answer: 0,
    explain:
      "Khởi tạo bằng phần tử đầu, gặp phần tử lớn hơn thì cập nhật — thuật toán tìm max cơ bản.",
  },
  {
    id: "b31-08",
    q: "Chương trình nên có các lời nhắc rõ ràng khi nhập, ví dụ input(\"Nhập tuổi: \"), vì:",
    options: [
      "Người dùng biết cần nhập gì, chương trình thân thiện và ít nhập sai hơn",
      "Bắt buộc của Python",
      "Làm chương trình chạy nhanh hơn",
      "Để code dài hơn cho đẹp",
    ],
    answer: 0,
    explain: "Giao tiếp rõ ràng với người dùng là một phần của chất lượng chương trình.",
  },
  {
    id: "b31-09",
    q: "Sau khi viết xong chương trình đổi tiền/tính tiền, bước KHÔNG THỂ bỏ qua là:",
    options: [
      "Chạy thử với vài bộ dữ liệu đã tính tay trước kết quả",
      "Đổi tên tất cả các biến thành x1, x2",
      "Xoá hết chú thích",
      "Tăng cỡ chữ của code",
    ],
    answer: 0,
    explain: "Kiểm thử (Bài 30) là bước bắt buộc trước khi tin tưởng chương trình.",
  },
  {
    id: "b31-10",
    q: "Viết chú thích (comment) bằng dấu # trong chương trình để làm gì?",
    options: [
      "Ghi giải thích cho người đọc; Python bỏ qua khi chạy",
      "Tăng tốc độ chạy",
      "Bắt buộc mỗi dòng phải có",
      "In nội dung đó ra màn hình",
    ],
    answer: 0,
    explain:
      "Chú thích giúp người khác (và chính mình sau này) hiểu code; không ảnh hưởng việc thực hiện.",
  },
];

export default questions;
