import type { LessonExtra } from "@/lib/types";

// Bài 27. Tham số của hàm
const extra: LessonExtra = {
  tf: [
    {
      id: "b27-tf1",
      context:
        "Bạn Vừ viết hàm tính tiền điện cho gia đình: nhận số điện tiêu thụ và đơn giá rồi trả về số tiền. Khi gọi hàm, Vừ vô ý đảo thứ tự hai con số nên kết quả ra một con số lạ lùng khiến bố phải hỏi lại \"Nhà mình dùng có 2 số điện thôi à con?\".",
      code: 'def tien_dien(so_dien, don_gia):\n    return so_dien * don_gia\n\nprint(tien_dien(150, 2000))\nprint(tien_dien(2000, 150))',
      statements: [
        {
          text: "so_dien và don_gia trong dòng def là các tham số (tham số hình thức) của hàm.",
          answer: true,
          explain: "Tên đặt trong định nghĩa hàm là tham số hình thức.",
        },
        {
          text: "Các giá trị 150 và 2000 khi gọi hàm được gọi là đối số.",
          answer: true,
          explain: "Giá trị cụ thể truyền vào lúc gọi là đối số (tham số thực sự).",
        },
        {
          text: "Hai lệnh print cho ra hai kết quả khác nhau vì thứ tự đối số đã bị đảo.",
          answer: false,
          explain:
            "Phép nhân có tính giao hoán nên cả hai đều ra 300000 — dù ý nghĩa 'số điện' và 'đơn giá' bị hiểu sai. Đây là bẫy: kết quả giống nhau nhưng cách gọi thứ hai sai về ngữ nghĩa.",
        },
        {
          text: "Đối số được truyền cho tham số theo đúng thứ tự viết trong lời gọi hàm.",
          answer: true,
          explain: "Đối số đầu vào tham số đầu, đối số thứ hai vào tham số thứ hai...",
        },
      ],
    },
    {
      id: "b27-tf2",
      context:
        "Lớp 10A2 làm chương trình điểm danh vui cho buổi sinh hoạt đầu tuần: mỗi bạn khi được gọi tên sẽ hiện lên một lời chào kèm tên lớp. Trong tiết thực hành, bạn Dua nhận phần viết hàm chào hỏi để cả nhóm gọi lại nhiều lần. Dua thử gọi hàm với vài cái tên khác nhau thấy chạy ngon lành, rồi nghịch ngợm gọi thêm một lần nữa mà cố tình quên truyền tên lớp để xem máy phản ứng thế nào.",
      code: 'def chao(ten, lop):\n    print("Chào", ten, "lớp", lop)\n\nchao("Mai", "10A1")\nchao("Nam", "10A2")',
      statements: [
        {
          text: "Hàm chao có hai tham số nên mỗi lời gọi phải truyền đủ hai đối số.",
          answer: true,
          explain: "Thiếu hoặc thừa đối số đều gây lỗi TypeError khi chạy.",
        },
        {
          text: "Nếu gọi chao(\"Mai\") thì Python báo lỗi thiếu đối số cho tham số lop.",
          answer: true,
          explain: "TypeError: missing 1 required positional argument: 'lop'.",
        },
        {
          text: "Mỗi lần gọi hàm, các tham số ten và lop nhận giá trị mới tương ứng với đối số truyền vào.",
          answer: true,
          explain: "Nhờ vậy một hàm dùng lại được với nhiều dữ liệu khác nhau.",
        },
        {
          text: "Một hàm trong Python bắt buộc phải có ít nhất một tham số.",
          answer: false,
          explain: "Hàm có thể không có tham số nào: def in_tieu_de(): print(\"BẢNG ĐIỂM\").",
        },
      ],
    },
    {
      id: "b27-tf3",
      context:
        "Cô ra bài nâng cao: viết hàm trả về đồng thời cả tổng và hiệu của hai số. Bạn Xính nghĩ phải viết hai hàm riêng, nhưng bạn Sao chỉ cần một hàm với lệnh return hai giá trị, rồi nhận về bằng hai biến cùng lúc. Cả lớp trầm trồ vì Python \"linh hoạt thật\".",
      code: 'def tong_hieu(a, b):\n    return a + b, a - b\n\nt, h = tong_hieu(10, 4)\nprint(t, h)',
      statements: [
        {
          text: "Hàm tong_hieu trả về đồng thời hai giá trị bằng cách viết return a + b, a - b.",
          answer: true,
          explain: "Python cho phép trả về nhiều giá trị (thực chất là một bộ giá trị).",
        },
        {
          text: "Lệnh t, h = tong_hieu(10, 4) gán t = 14 và h = 6.",
          answer: true,
          explain: "Giá trị trả về được gán lần lượt cho các biến bên trái.",
        },
        {
          text: "Lệnh print(t, h) in ra 14 6.",
          answer: true,
          explain: "print in hai giá trị cách nhau một dấu cách.",
        },
        {
          text: "Có thể gọi hàm với đối số là biểu thức, ví dụ tong_hieu(3 + 2, 4 * 2) là hợp lệ.",
          answer: true,
          explain: "Python tính giá trị biểu thức trước rồi truyền kết quả (5 và 8) vào hàm.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b27-es1",
      q: "Phân biệt tham số và đối số của hàm. Điều gì xảy ra nếu số đối số truyền vào không khớp với số tham số? Cho ví dụ minh hoạ bằng một hàm tự chọn.",
      answer:
        '- Tham số (tham số hình thức): tên biến viết trong dòng def, đại diện cho dữ liệu hàm sẽ nhận. Đối số (tham số thực sự): giá trị cụ thể truyền vào khi GỌI hàm.\n- Ví dụ: def dien_tich_hcn(dai, rong): return dai * rong — dai, rong là tham số. Lời gọi dien_tich_hcn(5, 3) — 5 và 3 là đối số.\n- Nếu không khớp số lượng: Python báo lỗi TypeError khi chạy (thiếu đối số: "missing required positional argument"; thừa đối số: "takes 2 positional arguments but 3 were given").\n- Lưu ý: đối số được truyền theo THỨ TỰ, nên gọi sai thứ tự có thể cho kết quả sai về ý nghĩa dù không báo lỗi.',
    },
    {
      id: "b27-es2",
      q: "Viết hàm kiem_tra_tam_giac(a, b, c) trả về True nếu ba số tạo thành tam giác và False nếu không. Viết thêm phần chương trình chính nhập ba số từ bàn phím và dùng hàm này để thông báo kết quả.",
      answer:
        'def kiem_tra_tam_giac(a, b, c):\n    if a > 0 and b > 0 and c > 0 and a + b > c and b + c > a and a + c > b:\n        return True\n    return False\n\n# Chương trình chính\nx = float(input("a = "))\ny = float(input("b = "))\nz = float(input("c = "))\nif kiem_tra_tam_giac(x, y, z):\n    print("Ba đoạn tạo thành tam giác")\nelse:\n    print("Không tạo thành tam giác")\n\nGiải thích: hàm trả về giá trị lôgic nên dùng trực tiếp trong câu lệnh if rất gọn. Có thể viết ngắn hơn: return a > 0 and ... and a + c > b.',
    },
  ],
};

export default extra;
