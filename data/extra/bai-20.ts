import type { LessonExtra } from "@/lib/types";

// Bài 20. Câu lệnh lặp for
const extra: LessonExtra = {
  tf: [
    {
      id: "b20-tf1",
      context:
        "Chuẩn bị cho hội trại 26/3, lớp cần cắt 30 lá cờ nhỏ đánh số từ 1 đến 30 để trang trí. Bạn Chợ nói đùa: \"Nếu là Python thì tớ chỉ cần hai dòng lệnh là in đủ 30 nhãn số!\" rồi viết đoạn code bên dưới lên bảng phụ của lớp cho các bạn xem.",
      code: "for i in range(1, 31):\n    print(\"Cờ số\", i)",
      statements: [
        {
          text: "Đoạn chương trình in đúng 30 dòng, từ \"Cờ số 1\" đến \"Cờ số 30\".",
          answer: true,
          explain: "range(1, 31) sinh dãy 1..30 — đủ 30 giá trị.",
        },
        {
          text: "Nếu viết range(1, 30) thì chương trình sẽ thiếu mất lá cờ số 30.",
          answer: true,
          explain: "range dừng TRƯỚC giá trị cuối: range(1, 30) chỉ đến 29.",
        },
        {
          text: "Biến i tự động nhận lần lượt các giá trị của dãy mà không cần lệnh gán tăng thủ công.",
          answer: true,
          explain: "for quản lí biến đếm tự động — khác với while phải tự tăng.",
        },
        {
          text: "Đoạn code trên phải viết đủ 30 lệnh print riêng biệt thì mới in được 30 dòng.",
          answer: false,
          explain: "Chính vòng lặp giúp MỘT lệnh print chạy 30 lần — đó là sức mạnh của for.",
        },
      ],
    },
    {
      id: "b20-tf2",
      context:
        "Bạn Hầu tập tành tính toán bằng vòng lặp: cậu muốn biết tổng tiền tiết kiệm nếu ngày đầu bỏ ống 1 nghìn, ngày thứ hai 2 nghìn, cứ thế tăng dần đến ngày thứ 10 bỏ 10 nghìn. Hầu viết đoạn chương trình dưới đây, chạy xong reo lên: \"Ra rồi! Hoá ra bằng đúng công thức tổng dãy số cô dạy bên Toán!\"",
      code: "s = 0\nfor i in range(1, 11):\n    s = s + i\nprint(s)",
      statements: [
        {
          text: "Chương trình in ra 55.",
          answer: true,
          explain: "1 + 2 + ... + 10 = 55 — khớp công thức n(n+1)/2 = 10×11/2.",
        },
        {
          text: "Biến s được gọi là biến cộng dồn, cần khởi tạo bằng 0 trước vòng lặp.",
          answer: true,
          explain: "s tích luỹ kết quả qua từng vòng — quên khởi tạo là lỗi NameError hoặc kết quả sai.",
        },
        {
          text: "Nếu đưa lệnh s = 0 vào TRONG vòng lặp (thụt lề cùng s = s + i), kết quả in ra vẫn là 55.",
          answer: false,
          explain: "s bị đặt lại 0 mỗi vòng — cuối cùng chỉ còn giá trị của lần cộng cuối: s = 10.",
        },
        {
          text: "Vòng lặp trên thực hiện thân lặp đúng 10 lần.",
          answer: true,
          explain: "range(1, 11) có 10 giá trị (1 đến 10).",
        },
      ],
    },
    {
      id: "b20-tf3",
      context:
        "Trong tiết ôn tập, cô đưa đoạn chương trình \"in hình tam giác sao\" và yêu cầu cả lớp đoán kết quả trước khi chạy. Bạn Lầu đoán 3 dòng, bạn Sái đoán 6 dòng, còn bạn Mai im lặng vẽ từng vòng lặp ra giấy nháp rồi mỉm cười tự tin giơ tay.",
      code: 'for i in range(1, 4):\n    print("*" * i)',
      statements: [
        {
          text: "Chương trình in ra 3 dòng.",
          answer: true,
          explain: "range(1, 4) gồm 1, 2, 3 — ba vòng lặp, ba dòng in.",
        },
        {
          text: "Dòng thứ hai của kết quả là hai dấu sao **.",
          answer: true,
          explain: 'Khi i = 2, "*" * 2 = "**" — phép nhân xâu lặp kí tự.',
        },
        {
          text: "Kết quả trên màn hình có dạng tam giác: * / ** / ***.",
          answer: true,
          explain: "Số sao tăng theo i: 1, 2, 3 — thành hình tam giác vuông.",
        },
        {
          text: "Nếu đổi thành range(4) thì chương trình in bốn dòng sao, bắt đầu từ một dấu sao.",
          answer: false,
          explain: "range(4) bắt đầu từ 0: vòng đầu in \"\" (xâu rỗng — dòng trắng), rồi mới *, **, ***.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b20-es1",
      q: "Trình bày cú pháp câu lệnh for kết hợp range trong Python. Giải thích rõ ba cách dùng range(n), range(a, b), range(a, b, k) kèm ví dụ dãy số sinh ra của mỗi cách.",
      answer:
        "- Cú pháp: for <biến> in range(...): xuống dòng, khối lệnh thụt lề. Biến đếm tự nhận lần lượt các giá trị của dãy.\n- range(n): dãy 0, 1, ..., n−1 (n số). VD range(4) → 0 1 2 3.\n- range(a, b): dãy a, a+1, ..., b−1 (không gồm b). VD range(2, 6) → 2 3 4 5.\n- range(a, b, k): bắt đầu a, bước nhảy k, dừng trước b. VD range(1, 10, 2) → 1 3 5 7 9; range(10, 0, -2) → 10 8 6 4 2 (bước âm cho dãy giảm).\n- Ghi nhớ: range luôn 'hụt' giá trị cuối — muốn lấy đến n phải viết n+1.",
    },
    {
      id: "b20-es2",
      q: "Viết chương trình nhập số tự nhiên n rồi in bảng nhân của n từ n×1 đến n×10, mỗi phép tính một dòng dạng \"n x i = kết quả\". Cho biết chương trình của em thực hiện thân vòng lặp bao nhiêu lần?",
      answer:
        'n = int(input("Nhập n: "))\nfor i in range(1, 11):\n    print(n, "x", i, "=", n * i)\n- Thân vòng lặp thực hiện 10 lần (i chạy 1 đến 10).\n- Giải thích: range(1, 11) tạo dãy 1..10; mỗi vòng in một dòng phép nhân với giá trị i hiện tại. Ví dụ n = 3 sẽ in từ "3 x 1 = 3" đến "3 x 10 = 30".',
    },
  ],
};

export default extra;
