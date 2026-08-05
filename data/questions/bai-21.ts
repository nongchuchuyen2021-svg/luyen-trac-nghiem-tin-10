import type { Question } from "@/lib/types";

// Bài 21. Câu lệnh lặp while
const questions: Question[] = [
  {
    id: "b21-01",
    q: "Câu lệnh while lặp lại khối lệnh khi nào?",
    options: [
      "Khi điều kiện còn đúng (True)",
      "Đúng 10 lần rồi dừng",
      "Khi điều kiện sai",
      "Chỉ chạy một lần duy nhất",
    ],
    answer: 0,
    explain:
      "while kiểm tra điều kiện trước mỗi vòng: còn đúng thì lặp tiếp, sai thì thoát — dùng khi chưa biết trước số lần lặp.",
  },
  {
    id: "b21-02",
    q: "Điểm khác nhau chính giữa for và while là:",
    options: [
      "for lặp số lần biết trước, while lặp theo điều kiện",
      "for chạy nhanh hơn while trên cùng số vòng lặp",
      "while kiểm tra điều kiện sau khi chạy xong thân lặp",
      "for chỉ duyệt được danh sách, không duyệt được dãy số",
    ],
    answer: 0,
    explain:
      "Biết trước số lần → dùng for cho gọn; lặp đến khi thoả điều kiện (nhập đúng, đạt ngưỡng...) → while.",
  },
  {
    id: "b21-03",
    q: "Đoạn chương trình sau in ra gì?",
    code: "i = 1\nwhile i <= 3:\n    print(i)\n    i = i + 1",
    options: [
      "1 2 3 (mỗi số một dòng)",
      "1 2 3 4 (mỗi số một dòng)",
      "1 1 1 ... lặp lại mãi mãi",
      "Không in ra gì cả",
    ],
    answer: 0,
    explain:
      "i chạy 1 → 2 → 3, đến khi i = 4 thì điều kiện i <= 3 sai nên dừng, vậy 4 không được in. Nhờ có lệnh i = i + 1 nên vòng lặp không bị vô hạn.",
  },
  {
    id: "b21-04",
    q: "Đoạn chương trình sau có vấn đề gì?",
    code: "i = 1\nwhile i <= 3:\n    print(i)",
    options: [
      "Lặp vô hạn vì i không bao giờ thay đổi",
      "In đúng 3 lần rồi tự động dừng lại",
      "Báo lỗi cú pháp vì thiếu lệnh tăng i",
      "Không in gì vì điều kiện sai ngay từ đầu",
    ],
    answer: 0,
    explain:
      "Quên lệnh tăng i → điều kiện luôn đúng → vòng lặp vô hạn. Đây là lỗi kinh điển với while.",
  },
  {
    id: "b21-05",
    q: "Sau đoạn chương trình sau, s có giá trị bao nhiêu?",
    code: "s = 0\ni = 1\nwhile i <= 4:\n    s = s + i\n    i = i + 1",
    options: ["10", "4", "6", "15"],
    answer: 0,
    explain: "s cộng dồn 1 + 2 + 3 + 4 = 10.",
  },
  {
    id: "b21-06",
    q: "Vòng lặp while điều kiện sai NGAY TỪ ĐẦU thì khối lệnh bên trong:",
    options: [
      "Không được thực hiện lần nào",
      "Vẫn chạy đúng một lần rồi thoát",
      "Chạy lặp vô hạn không dừng lại",
      "Gây lỗi khi chạy chương trình",
    ],
    answer: 0,
    explain: "while kiểm tra trước khi chạy: điều kiện sai từ đầu thì bỏ qua toàn bộ khối lệnh.",
  },
  {
    id: "b21-07",
    q: "Đoạn chương trình sau dừng khi người dùng gõ gì?",
    code: 'mk = input("Nhập mật khẩu: ")\nwhile mk != "tin10":\n    mk = input("Sai! Nhập lại: ")',
    options: ["tin10", "Bất kì chữ gì", "Số 10", "Không bao giờ dừng"],
    answer: 0,
    explain:
      "Điều kiện lặp là mk != \"tin10\" — gõ đúng \"tin10\" thì điều kiện sai, thoát vòng lặp. Ứng dụng thực tế của while.",
  },
  {
    id: "b21-08",
    q: "Sau vòng lặp sau, i có giá trị bao nhiêu?",
    code: "i = 10\nwhile i > 0:\n    i = i - 3",
    options: ["-2", "0", "1", "3"],
    answer: 0,
    explain: "i giảm: 10 → 7 → 4 → 1 → −2; tại −2 điều kiện i > 0 sai nên dừng.",
  },
  {
    id: "b21-09",
    q: "Bài toán nào NÊN dùng while thay vì for?",
    options: [
      "Nhập lại điểm cho tới khi được giá trị hợp lệ",
      "In bảng cửu chương 2 gồm đúng 9 dòng",
      "Tính tổng của 100 số nguyên đầu tiên",
      "Duyệt qua danh sách 30 học sinh trong lớp",
    ],
    answer: 0,
    explain:
      "Không biết trước người dùng nhập sai bao nhiêu lần → điều kiện dừng phụ thuộc dữ liệu → dùng while.",
  },
  {
    id: "b21-10",
    q: "Vòng lặp sau chạy bao nhiêu lần?",
    code: "i = 0\nwhile i < 10:\n    i = i + 2",
    options: ["5 lần", "10 lần", "4 lần", "Vô hạn"],
    answer: 0,
    explain: "i nhận 0, 2, 4, 6, 8 (5 lần vào thân lặp); khi i = 10 điều kiện sai.",
  },
  {
    id: "b21-11",
    q: "Để đếm số chữ số của số nguyên dương n, đoạn while nào đúng?",
    code: "dem = 0\nwhile ______:\n    n = n // 10\n    dem = dem + 1",
    options: ["n > 0", "n < 0", "dem > 0", "n == 0"],
    answer: 0,
    explain:
      "Mỗi vòng bỏ một chữ số cuối (n // 10) và đếm; dừng khi n về 0 — điều kiện lặp là n > 0.",
  },
  {
    id: "b21-12",
    q: "Nếu lỡ chạy chương trình bị lặp vô hạn trong môi trường Python, cách dừng thường dùng là:",
    options: [
      "Nhấn Ctrl+C hoặc nút Stop của môi trường lập trình",
      "Nhấn Ctrl+S để lưu lại rồi chương trình dừng",
      "Chờ Python tự ngắt vòng lặp sau khoảng 1 phút",
      "Nhấn Enter nhiều lần cho hết bộ nhớ đệm",
    ],
    answer: 0,
    explain:
      "Ctrl+C gửi tín hiệu ngắt (KeyboardInterrupt) dừng chương trình đang chạy. Python không tự đặt giới hạn thời gian cho vòng lặp, còn Ctrl+S chỉ lưu tệp chứ không tác động tới tiến trình đang chạy.",
  },
];

export default questions;
