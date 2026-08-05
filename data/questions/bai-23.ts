import type { Question } from "@/lib/types";

// Bài 23. Một số lệnh làm việc với dữ liệu danh sách
const questions: Question[] = [
  {
    id: "b23-01",
    q: "Cho a = [1, 2, 3]. Sau lệnh a.insert(1, 9), danh sách a là:",
    options: ["[1, 9, 2, 3]", "[9, 1, 2, 3]", "[1, 2, 3, 9]", "[1, 2, 9, 3]"],
    answer: 0,
    explain: "insert(vị_trí, giá_trị) chèn vào trước phần tử ở chỉ số đó: chèn 9 vào chỉ số 1.",
  },
  {
    id: "b23-02",
    q: "Cho a = [5, 3, 5, 7]. Sau lệnh a.remove(5), danh sách a là:",
    options: ["[3, 5, 7]", "[3, 7]", "[5, 3, 7]", "Báo lỗi"],
    answer: 0,
    explain: "remove(x) xoá phần tử ĐẦU TIÊN có giá trị x — chỉ xoá số 5 thứ nhất.",
  },
  {
    id: "b23-03",
    q: "Lệnh del a[0] khác a.remove(0) thế nào?",
    options: [
      "del xoá theo CHỈ SỐ, còn remove xoá theo GIÁ TRỊ của phần tử",
      "del xoá theo GIÁ TRỊ, còn remove xoá theo CHỈ SỐ của phần tử",
      "Hai lệnh cho kết quả giống hệt nhau trong mọi trường hợp",
      "del xoá một phần tử, còn remove xoá toàn bộ danh sách",
    ],
    answer: 0,
    explain: "del xoá theo vị trí, remove xoá theo giá trị — nhầm lẫn hai lệnh này rất phổ biến.",
  },
  {
    id: "b23-04",
    q: "Cho a = [1, 2, 3]. Lệnh a.clear() cho kết quả:",
    options: ["a trở thành danh sách rỗng []", "a bị xoá khỏi bộ nhớ hoàn toàn", "a = [0, 0, 0]", "Báo lỗi"],
    answer: 0,
    explain: "clear() xoá mọi phần tử nhưng biến a vẫn tồn tại, là danh sách rỗng.",
  },
  {
    id: "b23-05",
    q: "Hàm nào tính tổng các phần tử số của danh sách a?",
    options: ["sum(a)", "total(a)", "add(a)", "count(a)"],
    answer: 0,
    explain: "sum(a) trả về tổng; ngoài ra có max(a), min(a), len(a) rất hay dùng.",
  },
  {
    id: "b23-06",
    q: "Cho a = [4, 9, 2, 7]. Giá trị của max(a) và min(a) lần lượt là:",
    options: ["9 và 2", "4 và 7", "9 và 4", "7 và 2"],
    answer: 0,
    explain: "max lấy phần tử lớn nhất (9), min lấy nhỏ nhất (2).",
  },
  {
    id: "b23-07",
    q: "Đoạn chương trình sau in ra gì?",
    code: "a = [3, 1, 2]\na.sort()\nprint(a)",
    options: ["[1, 2, 3]", "[3, 2, 1]", "[3, 1, 2]", "Báo lỗi"],
    answer: 0,
    explain: "sort() sắp xếp danh sách tăng dần (tại chỗ); muốn giảm dần dùng a.sort(reverse=True).",
  },
  {
    id: "b23-08",
    q: "Đoạn chương trình sau đếm gì?",
    code: "a = [7, 2, 9, 4, 8]\ndem = 0\nfor x in a:\n    if x > 5:\n        dem = dem + 1\nprint(dem)",
    options: [
      "Đếm số phần tử lớn hơn 5, kết quả là 3",
      "Tính tổng các phần tử lớn hơn 5 trong dãy",
      "Đếm số phần tử là số chẵn trong dãy",
      "Tìm phần tử lớn nhất trong dãy đã cho",
    ],
    answer: 0,
    explain: "Duyệt từng phần tử, đếm những giá trị > 5: có 7, 9, 8 → in 3.",
  },
  {
    id: "b23-09",
    q: "Cho a = [1, 2, 3]. Lệnh a.append([4, 5]) làm a thành:",
    options: [
      "[1, 2, 3, [4, 5]] — phần tử cuối là một danh sách con",
      "[1, 2, 3, 4, 5] — hai phần tử được nối vào cuối",
      "[[1, 2, 3], [4, 5]] — thành danh sách lồng hai mức",
      "Báo lỗi vì append chỉ nhận một giá trị đơn lẻ",
    ],
    answer: 0,
    explain: "append thêm NGUYÊN đối tượng làm một phần tử; muốn nối từng phần tử dùng a.extend([4, 5]).",
  },
  {
    id: "b23-10",
    q: "a.count(2) với a = [2, 5, 2, 2] trả về:",
    options: ["3", "2", "4", "1"],
    answer: 0,
    explain: "count(x) đếm số lần x xuất hiện: số 2 có mặt 3 lần.",
  },
  {
    id: "b23-11",
    q: "Chương trình nhập 5 số vào danh sách. Chỗ trống cần điền gì?",
    code: "a = []\nfor i in range(5):\n    x = int(input())\n    ______",
    options: ["a.append(x)", "a.insert(x)", "a = x", "x.append(a)"],
    answer: 0,
    explain: "Thêm từng số nhập được vào cuối danh sách bằng append(x).",
  },
  {
    id: "b23-12",
    q: "Tìm chỉ số của giá trị 7 trong danh sách a, ta dùng:",
    options: ["a.index(7)", "a.find(7)", "a.search(7)", "index(a, 7)"],
    answer: 0,
    explain: "index(x) trả về chỉ số xuất hiện đầu tiên của x (lỗi nếu không có; find là của xâu).",
  },
];

export default questions;
