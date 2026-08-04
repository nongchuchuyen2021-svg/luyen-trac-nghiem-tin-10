import type { Question } from "@/lib/types";

// Bài 27. Tham số của hàm
const questions: Question[] = [
  {
    id: "b27-01",
    q: "Trong định nghĩa def f(a, b): thì a, b gọi là gì?",
    options: [
      "Tham số (tham số hình thức)",
      "Đối số (tham số thực sự)",
      "Biến toàn cục",
      "Hằng số",
    ],
    answer: 0,
    explain:
      "Tên trong định nghĩa hàm là tham số hình thức; giá trị truyền vào khi GỌI hàm là đối số.",
  },
  {
    id: "b27-02",
    q: "Trong lệnh gọi f(3, 7) thì 3 và 7 gọi là gì?",
    options: ["Đối số (tham số thực sự)", "Tham số hình thức", "Kết quả trả về", "Biến cục bộ của nơi gọi"],
    answer: 0,
    explain: "Đối số là giá trị cụ thể truyền cho tham số khi gọi hàm: a nhận 3, b nhận 7.",
  },
  {
    id: "b27-03",
    q: "Đoạn chương trình sau in ra gì?",
    code: "def hieu(a, b):\n    return a - b\n\nprint(hieu(10, 4))",
    options: ["6", "-6", "14", "10 - 4"],
    answer: 0,
    explain: "Đối số truyền THEO THỨ TỰ: a = 10, b = 4 → 10 − 4 = 6.",
  },
  {
    id: "b27-04",
    q: "Với hàm hieu(a, b) ở trên, lệnh print(hieu(4, 10)) in ra:",
    options: ["-6", "6", "40", "Báo lỗi"],
    answer: 0,
    explain: "Đổi thứ tự đối số thì kết quả đổi: a = 4, b = 10 → 4 − 10 = −6.",
  },
  {
    id: "b27-05",
    q: "Gọi hàm f(a, b) mà chỉ truyền một đối số f(5) thì:",
    options: [
      "Báo lỗi thiếu đối số (TypeError)",
      "b tự động bằng 0",
      "b tự động bằng 5",
      "Hàm chạy bình thường",
    ],
    answer: 0,
    explain:
      "Số đối số phải khớp số tham số (trừ khi tham số có giá trị mặc định) — thiếu sẽ báo TypeError.",
  },
  {
    id: "b27-06",
    q: "Hàm có thể có bao nhiêu tham số?",
    options: [
      "Không có, một hoặc nhiều tham số đều được",
      "Bắt buộc đúng một tham số",
      "Tối đa hai tham số",
      "Bắt buộc phải có ít nhất một",
    ],
    answer: 0,
    explain: "def f(): không tham số, def f(a, b, c): ba tham số — tuỳ nhu cầu của công việc.",
  },
  {
    id: "b27-07",
    q: "Đoạn chương trình sau in ra gì?",
    code: 'def chao(ten):\n    print("Chào", ten)\n\nchao("Lan")\nchao("Nam")',
    options: [
      "Chào Lan rồi Chào Nam",
      "Chào Lan hai lần",
      "Chào ten hai lần",
      "Báo lỗi",
    ],
    answer: 0,
    explain: "Mỗi lần gọi, tham số ten nhận đối số khác nhau — hàm tái sử dụng với dữ liệu khác nhau.",
  },
  {
    id: "b27-08",
    q: "Đối số truyền cho hàm có thể là gì?",
    options: [
      "Hằng số, biến, hoặc biểu thức (kể cả lời gọi hàm khác)",
      "Chỉ được là số cụ thể",
      "Chỉ được là biến",
      "Chỉ được là xâu",
    ],
    answer: 0,
    explain: "f(5), f(x), f(2*x + 1), f(len(s)) đều hợp lệ — giá trị của biểu thức được tính rồi truyền vào.",
  },
  {
    id: "b27-09",
    q: "Hàm max(a, b) tự viết trả về số lớn hơn. Chỗ trống điền gì?",
    code: "def lon_hon(a, b):\n    if a > b:\n        return a\n    else:\n        ______",
    options: ["return b", "return a", "print(b)", "b = a"],
    answer: 0,
    explain: "Nhánh else xử lí trường hợp b ≥ a: trả về b.",
  },
  {
    id: "b27-10",
    q: "Đoạn chương trình sau in ra gì?",
    code: "def f(x):\n    return x * 2\n\nprint(f(f(3)))",
    options: ["12", "6", "9", "36"],
    answer: 0,
    explain: "Gọi lồng nhau: f(3) = 6 trước, rồi f(6) = 12.",
  },
  {
    id: "b27-11",
    q: "Một hàm có thể trả về nhiều giá trị không?",
    options: [
      "Có — return a, b trả về đồng thời nhiều giá trị",
      "Không bao giờ",
      "Chỉ khi dùng print",
      "Chỉ trả được tối đa 2 số nguyên",
    ],
    answer: 0,
    explain: "return tong, hieu trả cặp giá trị; nơi gọi nhận bằng t, h = f(x, y).",
  },
  {
    id: "b27-12",
    q: "Vì sao nên đặt tên hàm và tham số có ý nghĩa (vd tinh_dtb(toan, van))?",
    options: [
      "Giúp người đọc hiểu ngay chức năng mà không cần đọc thân hàm",
      "Bắt buộc của Python, sai tên là không chạy",
      "Để chương trình chạy nhanh hơn",
      "Để tệp nhẹ hơn",
    ],
    answer: 0,
    explain: "Tên gợi nghĩa là quy tắc vàng khi viết code — code được đọc nhiều hơn được viết.",
  },
];

export default questions;
