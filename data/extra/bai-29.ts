import type { LessonExtra } from "@/lib/types";

// Bài 29. Nhận biết lỗi chương trình
const extra: LessonExtra = {
  tf: [
    {
      id: "b29-tf1",
      context:
        "Giờ thực hành, ba bạn cùng bàn gặp ba tình huống lỗi khác nhau. Bạn Mua viết if diem > 5 rồi xuống dòng luôn, máy tô đỏ ngay chưa kịp chạy. Bạn Sinh chạy được nhưng khi nhập số 0 cho mẫu số thì máy dừng giữa chừng. Bạn Chá thì chương trình chạy trơn tru, in ra kết quả đàng hoàng, chỉ có điều điểm trung bình lớp lại ra 245 điểm.",
      statements: [
        {
          text: "Lỗi của bạn Mua (thiếu dấu hai chấm sau điều kiện) là lỗi cú pháp, chương trình không chạy được.",
          answer: true,
          explain: "Vi phạm quy tắc ngữ pháp của ngôn ngữ — Python phát hiện ngay trước khi chạy.",
        },
        {
          text: "Lỗi của bạn Sinh khi nhập 0 cho mẫu số là lỗi ngoại lệ phát sinh lúc chạy (ZeroDivisionError).",
          answer: true,
          explain: "Cú pháp đúng nhưng phép toán không thực hiện được với dữ liệu cụ thể đó.",
        },
        {
          text: "Lỗi của bạn Chá (chương trình chạy được nhưng kết quả vô lí) là lỗi lôgic.",
          answer: true,
          explain: "Máy không báo gì, chỉ có kết quả sai — loại lỗi khó phát hiện nhất.",
        },
        {
          text: "Trong ba loại lỗi trên, lỗi cú pháp là loại nguy hiểm và khó phát hiện nhất.",
          answer: false,
          explain:
            "Ngược lại: lỗi cú pháp dễ nhất vì máy chỉ rõ dòng sai. Lỗi lôgic mới nguy hiểm vì im lặng, phải tự kiểm thử mới thấy.",
        },
      ],
    },
    {
      id: "b29-tf2",
      context:
        "Bạn Thào viết chương trình quản lí danh sách 5 bạn trong tổ. Khi thử truy cập phần tử để in tên bạn cuối cùng, Thào gõ nhầm chỉ số nên nhận về một dòng lỗi đỏ dài ngoằng. Đọc kĩ dòng cuối cùng của thông báo, Thào hiểu ngay vấn đề nằm ở đâu.",
      code: 'to = ["An", "Bình", "Cường", "Dũng", "En"]\nprint(to[5])',
      statements: [
        {
          text: "Lệnh trên gây lỗi IndexError vì danh sách 5 phần tử chỉ có chỉ số từ 0 đến 4.",
          answer: true,
          explain: "to[5] vượt ra ngoài phạm vi chỉ số hợp lệ.",
        },
        {
          text: "Muốn in tên bạn cuối cùng, Thào nên viết to[4] hoặc to[len(to) - 1].",
          answer: true,
          explain: "Cả hai cách đều trỏ tới phần tử cuối; cách thứ hai tổng quát hơn.",
        },
        {
          text: "Thông báo lỗi (traceback) của Python cho biết loại lỗi và dòng lệnh gây ra lỗi.",
          answer: true,
          explain: "Đọc dòng cuối để biết loại lỗi, các dòng trên để biết vị trí — kĩ năng quan trọng khi gỡ lỗi.",
        },
        {
          text: "Lỗi IndexError này thuộc loại lỗi cú pháp vì viết sai cách truy cập danh sách.",
          answer: false,
          explain:
            "Cú pháp to[5] hoàn toàn hợp lệ; lỗi chỉ phát sinh KHI CHẠY do danh sách không đủ dài — đây là lỗi ngoại lệ.",
        },
      ],
    },
    {
      id: "b29-tf3",
      context:
        "Bài toán tính điểm trung bình hai môn của bạn Váng luôn cho kết quả cao bất thường: nhập 8 và 6 lại ra 11. Váng khẳng định chương trình \"chạy tốt, không lỗi gì\" cho đến khi cô giáo bảo lấy giấy nháp tính tay theo đúng thứ tự các phép toán trong câu lệnh.",
      code: "a = 8\nb = 6\ntb = a + b / 2\nprint(tb)",
      statements: [
        {
          text: "Chương trình in ra 11.0 vì phép chia được thực hiện trước phép cộng.",
          answer: true,
          explain: "a + b/2 = 8 + 3 = 11 (không phải (8+6)/2 = 7).",
        },
        {
          text: "Đây là lỗi lôgic: chương trình vẫn chạy bình thường nhưng cho kết quả sai ý đồ.",
          answer: true,
          explain: "Không có thông báo lỗi nào — chỉ kết quả không đúng mong muốn.",
        },
        {
          text: "Sửa lại thành tb = (a + b) / 2 thì chương trình cho kết quả đúng là 7.0.",
          answer: true,
          explain: "Ngoặc buộc phép cộng thực hiện trước: (8+6)/2 = 7.",
        },
        {
          text: "Vì Python không báo lỗi nên có thể khẳng định chương trình ban đầu hoàn toàn đúng.",
          answer: false,
          explain:
            "Không báo lỗi KHÔNG có nghĩa là đúng — phải kiểm thử với dữ liệu đã biết trước kết quả mới khẳng định được.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b29-es1",
      q: "Nêu ba loại lỗi thường gặp khi lập trình. Với mỗi loại, cho một ví dụ cụ thể bằng Python và cho biết chương trình biểu hiện như thế nào (có chạy được không, có báo lỗi không).",
      answer:
        '- Lỗi cú pháp (SyntaxError): viết sai quy tắc ngôn ngữ. VD: if x > 5 (thiếu dấu :) hoặc print("a" (thiếu ngoặc). Biểu hiện: chương trình KHÔNG chạy được dòng nào, Python báo lỗi và chỉ rõ vị trí.\n- Lỗi ngoại lệ khi chạy (runtime error/exception): cú pháp đúng nhưng gặp tình huống không thực hiện được. VD: 10/0 → ZeroDivisionError; int("abc") → ValueError; a[5] với danh sách 3 phần tử → IndexError. Biểu hiện: chạy được một phần rồi DỪNG giữa chừng kèm thông báo lỗi.\n- Lỗi lôgic: chạy trơn tru, không báo gì nhưng kết quả sai. VD: viết a + b/2 thay vì (a+b)/2; dùng range(1,n) thay vì range(1,n+1). Biểu hiện: chỉ phát hiện được khi kiểm thử và đối chiếu với kết quả đúng.',
    },
    {
      id: "b29-es2",
      q: "Cho đoạn chương trình sau. Hãy chỉ ra tất cả các lỗi, cho biết mỗi lỗi thuộc loại nào và viết lại chương trình cho đúng (mục tiêu: nhập hai số, in ra thương của chúng).",
      code: 'a = input("a = ")\nb = input("b = ")\nif b != 0\n    print(a / b)',
      answer:
        '- Lỗi 1 (cú pháp): thiếu dấu hai chấm sau điều kiện if b != 0.\n- Lỗi 2 (kiểu dữ liệu → ngoại lệ khi chạy): input() trả về xâu, nên a / b là chia hai xâu → TypeError; ngoài ra so sánh b != 0 là so xâu với số, luôn đúng nên không lọc được trường hợp b = 0.\n- Lỗi 3 (thiếu xử lí): chưa có nhánh else thông báo khi mẫu bằng 0 (không bắt buộc nhưng nên có).\n\nChương trình sửa lại:\na = float(input("a = "))\nb = float(input("b = "))\nif b != 0:\n    print(a / b)\nelse:\n    print("Không chia được cho 0")',
    },
  ],
};

export default extra;
