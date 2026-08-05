import type { Question } from "@/lib/types";

// Bài 22. Kiểu dữ liệu danh sách
const questions: Question[] = [
  {
    id: "b22-01",
    q: "Danh sách (list) trong Python là gì?",
    options: [
      "Dãy giá trị có thứ tự, truy cập được qua chỉ số",
      "Dãy kí tự có thứ tự nhưng không sửa được từng phần",
      "Tập hợp các giá trị không trùng nhau và không thứ tự",
      "Kiểu dữ liệu chỉ chứa được các giá trị cùng một kiểu",
    ],
    answer: 0,
    explain:
      "List chứa nhiều phần tử theo thứ tự, có thể khác kiểu nhau, truy cập bằng chỉ số bắt đầu từ 0.",
  },
  {
    id: "b22-02",
    q: "Cách khởi tạo danh sách nào ĐÚNG?",
    options: ["a = [1, 2, 3]", "a = (1; 2; 3)", "a = {1 2 3}", "list a = 1, 2, 3"],
    answer: 0,
    explain: "Danh sách viết trong cặp ngoặc vuông, các phần tử cách nhau bởi dấu phẩy.",
  },
  {
    id: "b22-03",
    q: "Cho a = [5, 7, 9, 11]. Giá trị của a[0] là:",
    options: ["5", "7", "0", "11"],
    answer: 0,
    explain: "Chỉ số danh sách bắt đầu từ 0: a[0] là phần tử đầu tiên = 5.",
  },
  {
    id: "b22-04",
    q: "Cho a = [5, 7, 9, 11]. Giá trị của a[3] là:",
    options: ["11", "9", "Báo lỗi", "5"],
    answer: 0,
    explain: "a[3] là phần tử thứ tư (chỉ số 0,1,2,3) = 11 — cũng là phần tử cuối của danh sách 4 phần tử.",
  },
  {
    id: "b22-05",
    q: "Cho a = [1, 2, 3]. Lệnh len(a) trả về:",
    options: ["3", "2", "6", "[1, 2, 3]"],
    answer: 0,
    explain: "len() trả về số phần tử của danh sách: [1, 2, 3] có 3 phần tử.",
  },
  {
    id: "b22-06",
    q: "Cho a = [1, 2, 3]. Sau lệnh a.append(4), danh sách a là:",
    options: ["[1, 2, 3, 4]", "[4, 1, 2, 3]", "[1, 2, 3]", "[4]"],
    answer: 0,
    explain: "append(x) thêm phần tử x vào CUỐI danh sách.",
  },
  {
    id: "b22-07",
    q: "Cho a = [3, 1, 4]. Sau lệnh a[1] = 9, danh sách a là:",
    options: ["[3, 9, 4]", "[9, 1, 4]", "[3, 1, 9]", "Báo lỗi"],
    answer: 0,
    explain: "a[1] là phần tử chỉ số 1 (giá trị 1 cũ) — gán lại thành 9. List cho phép thay đổi phần tử.",
  },
  {
    id: "b22-08",
    q: "Đoạn chương trình sau in ra gì?",
    code: "a = [2, 4, 6]\nfor x in a:\n    print(x)",
    options: ["2 4 6 (mỗi số một dòng)", "0 1 2 (mỗi số một dòng)", "[2, 4, 6]", "x x x"],
    answer: 0,
    explain: "for x in a duyệt từng phần tử của danh sách: x lần lượt là 2, 4, 6.",
  },
  {
    id: "b22-09",
    q: "Đoạn chương trình sau tính gì?",
    code: "a = [4, 8, 15, 16]\ns = 0\nfor x in a:\n    s = s + x\nprint(s)",
    options: ["Tổng các phần tử (43)", "Số phần tử (4)", "Phần tử lớn nhất (16)", "Trung bình cộng"],
    answer: 0,
    explain: "Cộng dồn từng phần tử vào s: 4 + 8 + 15 + 16 = 43. (Python có sẵn hàm sum(a) cho việc này.)",
  },
  {
    id: "b22-10",
    q: "Cho a = [10, 20, 30]. Toán tử in trong biểu thức 20 in a trả về:",
    options: ["True", "False", "1", "20"],
    answer: 0,
    explain: "Toán tử in kiểm tra một giá trị có thuộc danh sách không: 20 có trong a → True.",
  },
  {
    id: "b22-11",
    q: "Danh sách khác xâu kí tự ở điểm nào?",
    options: [
      "Sửa được từng phần tử của danh sách, còn xâu thì không sửa được",
      "Sửa được từng kí tự của xâu, còn danh sách thì không sửa được",
      "Danh sách truy cập qua chỉ số, còn xâu thì không có chỉ số",
      "Xâu duyệt được bằng vòng lặp for, còn danh sách thì không",
    ],
    answer: 0,
    explain:
      "List thay đổi được (mutable): a[0] = 9 hợp lệ. Xâu bất biến (immutable): s[0] = \"A\" gây lỗi.",
  },
  {
    id: "b22-12",
    q: "Khởi tạo danh sách RỖNG rồi thêm dần phần tử, cách viết đúng là:",
    code: "?",
    options: [
      "a = []  rồi  a.append(x)",
      "a = 0  rồi  a.append(x)",
      "a = [rỗng]  rồi  a.add(x)",
      "a = ()  rồi  a[0] = x",
    ],
    answer: 0,
    explain: "[] là danh sách rỗng; thêm phần tử bằng append. Số 0 không phải danh sách; add không phải phương thức của list.",
  },
];

export default questions;
