import type { LessonExtra } from "@/lib/types";

// Bài 22. Kiểu dữ liệu danh sách
const extra: LessonExtra = {
  tf: [
    {
      id: "b22-tf1",
      context:
        "Bạn Chi làm thủ quỹ lớp, ghi số tiền quỹ thu được mỗi tuần của tháng 10 vào một danh sách Python để dễ tính toán. Chi khoe với lớp phó: \"Tớ lưu cả tháng trong một biến duy nhất, muốn xem tuần nào chỉ việc gọi đúng 'số ghế' của nó!\"",
      code: "quy = [120, 95, 150, 110]\nprint(quy[0])\nprint(len(quy))",
      statements: [
        {
          text: "Danh sách quy chứa 4 phần tử, ứng với 4 tuần của tháng.",
          answer: true,
          explain: "Bốn giá trị trong cặp ngoặc vuông — len(quy) = 4.",
        },
        {
          text: "Lệnh print(quy[0]) in ra 120 — số tiền của tuần đầu tiên.",
          answer: true,
          explain: "Chỉ số bắt đầu từ 0: quy[0] là phần tử đầu.",
        },
        {
          text: "\"Số ghế\" mà Chi nhắc đến chính là chỉ số của phần tử, và phần tử cuối cùng của danh sách này có chỉ số 4.",
          answer: false,
          explain: "Danh sách 4 phần tử có chỉ số 0..3 — phần tử cuối là quy[3]; gọi quy[4] sẽ lỗi IndexError.",
        },
        {
          text: "Nếu tuần 5 phát sinh (tháng có 5 tuần), Chi có thể dùng quy.append(...) để thêm vào cuối danh sách.",
          answer: true,
          explain: "append thêm phần tử vào cuối — danh sách dài ra thành 5 phần tử.",
        },
      ],
    },
    {
      id: "b22-tf2",
      context:
        "Cô giáo giao bài: cho danh sách nhiệt độ trung bình 7 ngày trong tuần ở địa phương, hãy tính nhiệt độ trung bình cả tuần. Bạn Sào viết đoạn chương trình dưới đây. Chạy xong, Sào còn thử sửa nhiệt độ ngày thứ ba (vì hôm đó nhập nhầm) bằng một lệnh gán rất gọn.",
      code: "t = [18, 21, 19, 25, 24, 22, 20]\ntong = 0\nfor x in t:\n    tong = tong + x\nprint(tong / len(t))",
      statements: [
        {
          text: "Vòng lặp for x in t duyệt qua từng phần tử của danh sách, không cần dùng chỉ số.",
          answer: true,
          explain: "x lần lượt nhận giá trị từng phần tử — cách duyệt trực tiếp gọn gàng.",
        },
        {
          text: "Chương trình in ra giá trị 21.285714... (tổng 149 chia cho 7).",
          answer: true,
          explain: "18+21+19+25+24+22+20 = 149; 149 / 7 ≈ 21,29.",
        },
        {
          text: "Muốn sửa nhiệt độ ngày thứ ba thành 20, Sào viết t[3] = 20.",
          answer: false,
          explain: "Ngày thứ ba là phần tử thứ 3 → chỉ số 2: phải viết t[2] = 20 (chỉ số lệch 1 so với thứ tự).",
        },
        {
          text: "Có thể thay cả đoạn tính tổng bằng hàm có sẵn: print(sum(t) / len(t)).",
          answer: true,
          explain: "sum(t) tính tổng danh sách — kết quả tương đương vòng lặp cộng dồn.",
        },
      ],
    },
    {
      id: "b22-tf3",
      context:
        "Lớp bình chọn tiết mục văn nghệ. Bạn Sếnh tạo danh sách các tiết mục rồi thao tác thêm bớt theo diễn biến cuộc họp: ban đầu có ba tiết mục, sau đó lớp thêm \"Nhảy hiện đại\" vào cuối, rồi bỏ \"Kịch câm\" vì thiếu người tập.",
      code: 'tm = ["Hát tốp ca", "Kịch câm", "Múa khèn"]\ntm.append("Nhảy hiện đại")\ntm.remove("Kịch câm")\nprint(tm)',
      statements: [
        {
          text: "Sau lệnh append, danh sách có 4 tiết mục.",
          answer: true,
          explain: "append thêm \"Nhảy hiện đại\" vào cuối: 3 + 1 = 4 phần tử.",
        },
        {
          text: "Lệnh remove xoá phần tử theo GIÁ TRỊ — tìm và xoá đúng tiết mục \"Kịch câm\".",
          answer: true,
          explain: "remove(x) xoá phần tử đầu tiên có giá trị x, không cần biết chỉ số.",
        },
        {
          text: "Kết quả in ra là ['Hát tốp ca', 'Múa khèn', 'Nhảy hiện đại'].",
          answer: true,
          explain: "Thêm cuối rồi xoá \"Kịch câm\" — còn lại ba tiết mục theo đúng thứ tự này.",
        },
        {
          text: "Danh sách trong Python chỉ chứa được số, không chứa được các xâu kí tự như trên.",
          answer: false,
          explain: "List chứa được mọi kiểu dữ liệu: số, xâu, thậm chí trộn lẫn — ví dụ trên toàn xâu vẫn hợp lệ.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b22-es1",
      q: "Danh sách (list) trong Python là gì? Trình bày cách khởi tạo, truy cập phần tử theo chỉ số, thay đổi giá trị phần tử và duyệt danh sách bằng vòng lặp for (cả hai cách: duyệt trực tiếp và duyệt theo chỉ số).",
      answer:
        "- List: dãy các giá trị có thứ tự, có thể khác kiểu, cho phép thay đổi (mutable).\n- Khởi tạo: a = [5, 7, 9] hoặc a = [] (rỗng).\n- Truy cập: a[i] với chỉ số i từ 0 đến len(a)−1; a[0] phần tử đầu, a[len(a)-1] phần tử cuối; vượt phạm vi gây IndexError.\n- Thay đổi: a[1] = 100 — gán giá trị mới cho phần tử.\n- Duyệt trực tiếp: for x in a: print(x) — x nhận từng giá trị.\n- Duyệt theo chỉ số: for i in range(len(a)): print(i, a[i]) — dùng khi cần biết/thay đổi vị trí.",
    },
    {
      id: "b22-es2",
      q: "Viết chương trình: nhập 5 số điểm kiểm tra vào một danh sách, sau đó in ra điểm cao nhất, điểm thấp nhất và số bài đạt từ 8 trở lên.",
      answer:
        'diem = []\nfor i in range(5):\n    x = float(input("Điểm bài " + str(i + 1) + ": "))\n    diem.append(x)\nprint("Cao nhất:", max(diem))\nprint("Thấp nhất:", min(diem))\ndem = 0\nfor x in diem:\n    if x >= 8:\n        dem = dem + 1\nprint("Số bài từ 8 trở lên:", dem)\nGiải thích: vòng for đầu nhập và append từng điểm; max/min là hàm có sẵn cho danh sách; vòng for sau đếm theo điều kiện — mẫu \"duyệt và đếm\" quen thuộc.',
    },
  ],
};

export default extra;
