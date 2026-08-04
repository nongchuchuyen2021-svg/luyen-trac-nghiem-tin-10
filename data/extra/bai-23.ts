import type { LessonExtra } from "@/lib/types";

// Bài 23. Một số lệnh làm việc với dữ liệu danh sách
const extra: LessonExtra = {
  tf: [
    {
      id: "b23-tf1",
      context:
        "Bạn Khoa quản lí danh sách đăng kí tham gia CLB Bóng rổ của khối 10. Ban đầu có bốn bạn đăng kí. Sau đó bạn Hùng xin rút vì trùng lịch học thêm, còn bạn Nam thì nhờ Khoa chèn tên mình vào ngay sau bạn đầu danh sách vì \"tớ đăng kí sớm nhất mà quên ghi\".",
      code: 'ds = ["An", "Hùng", "Bình", "Chi"]\nds.remove("Hùng")\nds.insert(1, "Nam")\nprint(ds)',
      statements: [
        {
          text: "Lệnh ds.remove(\"Hùng\") xoá phần tử có giá trị \"Hùng\" khỏi danh sách.",
          answer: true,
          explain: "remove xoá theo giá trị, khác với del xoá theo chỉ số.",
        },
        {
          text: "Lệnh ds.insert(1, \"Nam\") chèn \"Nam\" vào vị trí chỉ số 1, tức ngay sau phần tử đầu tiên.",
          answer: true,
          explain: "insert(vị_trí, giá_trị) chèn vào TRƯỚC phần tử đang ở chỉ số đó.",
        },
        {
          text: "Kết quả in ra là ['An', 'Nam', 'Bình', 'Chi'].",
          answer: true,
          explain: "Sau remove còn ['An','Bình','Chi']; chèn Nam vào chỉ số 1 được kết quả trên.",
        },
        {
          text: "Nếu Khoa viết nhầm ds.remove(1) thì Python cũng xoá phần tử ở chỉ số 1 giống như del ds[1].",
          answer: false,
          explain:
            "remove(1) tìm phần tử có GIÁ TRỊ bằng 1; danh sách toàn tên nên không tìm thấy → lỗi ValueError.",
        },
      ],
    },
    {
      id: "b23-tf2",
      context:
        "Cuối học kì, cô chủ nhiệm cần thống kê nhanh điểm môn Tin học của tổ 1 gồm 6 bạn để báo cáo trong buổi họp phụ huynh sắp tới. Cô nhờ bạn Vân — tổ trưởng, cũng là \"cây\" Tin học của lớp — giúp một tay. Thay vì ngồi cộng trừ bằng máy tính bỏ túi như mọi năm, Vân nhập điểm vào một danh sách rồi dùng các hàm và lệnh có sẵn của Python để lấy ngay các con số cô cần, không phải tự viết vòng lặp dài dòng.",
      code: "d = [7, 9, 5, 9, 8, 6]\nprint(sum(d), max(d), min(d))\nprint(d.count(9))\nd.sort()\nprint(d)",
      statements: [
        {
          text: "Dòng đầu in ra ba giá trị: 44, 9 và 5.",
          answer: true,
          explain: "Tổng 7+9+5+9+8+6 = 44; lớn nhất 9; nhỏ nhất 5.",
        },
        {
          text: "Lệnh d.count(9) in ra 2 vì có hai bạn đạt điểm 9.",
          answer: true,
          explain: "count(x) đếm số lần giá trị x xuất hiện trong danh sách.",
        },
        {
          text: "Sau lệnh d.sort(), danh sách in ra là [5, 6, 7, 8, 9, 9].",
          answer: true,
          explain: "sort() sắp xếp tăng dần ngay trên danh sách gốc.",
        },
        {
          text: "Lệnh d.sort() tạo ra một danh sách mới đã sắp xếp và giữ nguyên danh sách d ban đầu.",
          answer: false,
          explain:
            "sort() sắp xếp TẠI CHỖ, làm thay đổi d. Muốn giữ bản gốc phải dùng sorted(d) trả về danh sách mới.",
        },
      ],
    },
    {
      id: "b23-tf3",
      context:
        "Trong tiết thực hành, cô ra bài: nhập danh sách 8 số nguyên rồi đếm xem có bao nhiêu số chia hết cho 3. Bạn Tráng viết đoạn chương trình bên dưới nhưng quên mất một dòng quan trọng nên chạy ra kết quả luôn bằng 0. Cả nhóm soi mãi mới thấy chỗ sai.",
      code: "a = [12, 7, 9, 4, 15, 8, 3, 10]\ndem = 0\nfor x in a:\n    if x % 3 == 0:\n        dem = dem + 1\nprint(dem)",
      statements: [
        {
          text: "Đoạn chương trình như trên (đã đầy đủ) in ra kết quả 4.",
          answer: true,
          explain: "Các số chia hết cho 3: 12, 9, 15, 3 → đếm được 4 số.",
        },
        {
          text: "Nếu quên dòng dem = 0 trước vòng lặp, chương trình sẽ báo lỗi NameError.",
          answer: true,
          explain: "Lệnh dem = dem + 1 cần đọc giá trị hiện tại của dem — biến chưa tồn tại thì lỗi.",
        },
        {
          text: "Điều kiện x % 3 == 0 kiểm tra x có chia hết cho 3 hay không.",
          answer: true,
          explain: "Chia hết ⇔ số dư bằng 0.",
        },
        {
          text: "Nếu đặt lệnh print(dem) thụt lề vào trong vòng lặp thì chương trình chỉ in đúng một lần như cũ.",
          answer: false,
          explain: "Thụt lề vào trong thì print chạy mỗi vòng — in 8 dòng thay vì 1 dòng.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b23-es1",
      q: "Trình bày tác dụng và cách dùng của các lệnh/hàm sau với danh sách: append, insert, remove, del, sort, sum, max, min, len, count. Chỉ rõ điểm khác nhau giữa remove và del.",
      answer:
        "- a.append(x): thêm x vào cuối danh sách.\n- a.insert(i, x): chèn x vào vị trí chỉ số i.\n- a.remove(x): xoá phần tử ĐẦU TIÊN có giá trị x (lỗi nếu không có).\n- del a[i]: xoá phần tử ở CHỈ SỐ i.\n- a.sort(): sắp xếp tăng dần tại chỗ (a.sort(reverse=True) để giảm dần).\n- sum(a), max(a), min(a): tổng, lớn nhất, nhỏ nhất; len(a): số phần tử; a.count(x): đếm số lần x xuất hiện.\n- Khác nhau: remove làm việc theo GIÁ TRỊ, del theo VỊ TRÍ. Ví dụ a = [10, 20, 30]: a.remove(10) xoá số 10 (còn [20,30]); del a[10] gây lỗi vì không có chỉ số 10, còn del a[0] xoá phần tử đầu.",
    },
    {
      id: "b23-es2",
      q: "Viết chương trình nhập n số nguyên vào danh sách (n do người dùng nhập), sau đó in ra: tổng các số chẵn, danh sách sau khi sắp xếp giảm dần và vị trí (chỉ số) của số lớn nhất.",
      answer:
        'n = int(input("Nhập n: "))\na = []\nfor i in range(n):\n    a.append(int(input()))\n\ntong_chan = 0\nfor x in a:\n    if x % 2 == 0:\n        tong_chan = tong_chan + x\nprint("Tổng số chẵn:", tong_chan)\n\nprint("Vị trí số lớn nhất:", a.index(max(a)))\n\na.sort(reverse=True)\nprint("Sắp xếp giảm dần:", a)\n\nLưu ý thứ tự: phải tìm vị trí số lớn nhất TRƯỚC khi sort, vì sort làm thay đổi vị trí các phần tử.',
    },
  ],
};

export default extra;
