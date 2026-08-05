import type { Question } from "@/lib/types";

// Bài 27. Tham số của hàm
const questions: Question[] = [
  {
    id: "b27-01",
    q: "Trong định nghĩa def f(a, b): thì a, b gọi là gì?",
    options: [
      "Tham số hình thức của hàm",
      "Đối số truyền vào lúc gọi hàm",
      "Biến toàn cục của chương trình",
      "Hằng số dùng riêng trong hàm",
    ],
    answer: 0,
    explain:
      "Tên trong định nghĩa hàm là tham số hình thức; giá trị truyền vào khi GỌI hàm là đối số.",
  },
  {
    id: "b27-02",
    q: "Trong lệnh gọi f(3, 7) thì 3 và 7 gọi là gì?",
    options: [
      "Đối số truyền cho hàm",
      "Tham số hình thức",
      "Giá trị hàm trả về",
      "Biến cục bộ của hàm",
    ],
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
      "Báo lỗi TypeError vì thiếu đối số",
      "Tham số b tự động nhận giá trị 0",
      "Tham số b tự động nhận giá trị 5",
      "Hàm vẫn chạy, b nhận giá trị None",
    ],
    answer: 0,
    explain:
      "Số đối số phải khớp số tham số (trừ khi tham số có giá trị mặc định) — thiếu sẽ báo TypeError.",
  },
  {
    id: "b27-06",
    q: "Hàm có thể có bao nhiêu tham số?",
    options: [
      "Không có, một hoặc nhiều đều được",
      "Bắt buộc phải có đúng một tham số",
      "Bắt buộc có ít nhất một tham số",
      "Nhiều nhất chỉ được ba tham số",
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
      "Chào Lan rồi Chào Lan",
      "Chào ten rồi Chào ten",
      "Chào Nam rồi Chào Lan",
    ],
    answer: 0,
    explain: "Mỗi lần gọi, tham số ten nhận đối số khác nhau — hàm tái sử dụng với dữ liệu khác nhau.",
  },
  {
    id: "b27-08",
    q: "Đối số truyền cho hàm có thể là gì?",
    options: [
      "Hằng số, biến hoặc biểu thức, kể cả lời gọi một hàm khác",
      "Chỉ được là một hằng số cụ thể viết trực tiếp trong lời gọi",
      "Chỉ được là tên một biến đã được gán giá trị từ trước",
      "Chỉ được là biến hoặc hằng, không được là biểu thức tính toán",
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
      "Có, viết return a, b là trả về đồng thời nhiều giá trị",
      "Không, mỗi hàm chỉ trả về được đúng một giá trị duy nhất",
      "Có, nhưng phải dùng lệnh print thay cho lệnh return",
      "Có, nhưng chỉ trả về được tối đa hai số nguyên mà thôi",
    ],
    answer: 0,
    explain: "return tong, hieu trả cặp giá trị; nơi gọi nhận bằng t, h = f(x, y).",
  },
  {
    id: "b27-12",
    q: "Vì sao nên đặt tên hàm và tham số có ý nghĩa (vd tinh_dtb(toan, van))?",
    options: [
      "Giúp người đọc hiểu ngay chức năng mà chưa cần đọc thân hàm",
      "Là quy định bắt buộc của Python, đặt tên sai thì không chạy được",
      "Giúp chương trình chạy nhanh hơn vì máy nhận diện tên dễ hơn",
      "Giúp tệp mã nguồn nhẹ đi và tiết kiệm bộ nhớ khi chạy chương trình",
    ],
    answer: 0,
    explain: "Tên gợi nghĩa là quy tắc vàng khi viết code — code được đọc nhiều hơn được viết.",
  },
];

export default questions;
