import type { LessonExtra } from "@/lib/types";

// Bài 26. Hàm trong Python
const extra: LessonExtra = {
  tf: [
    {
      id: "b26-tf1",
      context:
        "Lớp 10A1 làm chương trình quản lí quỹ lớp. Ban đầu bạn Hoà viết đi viết lại đoạn tính tiền ở năm chỗ khác nhau trong chương trình, mỗi lần sửa công thức là phải sửa cả năm chỗ, rất dễ sót. Cô giáo gợi ý: \"Em hãy đóng gói đoạn tính ấy thành một hàm, đặt tên gợi nghĩa rồi gọi lại ở năm chỗ đó.\"",
      code: 'def tinh_tien(so_luong, don_gia):\n    return so_luong * don_gia\n\nprint(tinh_tien(3, 5000))\nprint(tinh_tien(10, 2000))',
      statements: [
        {
          text: "Từ khoá def dùng để định nghĩa hàm, sau tên hàm và danh sách tham số phải có dấu hai chấm.",
          answer: true,
          explain: "Cú pháp: def tên_hàm(tham_số): rồi khối lệnh thụt lề bên trong.",
        },
        {
          text: "Hai lệnh print in ra lần lượt 15000 và 20000.",
          answer: true,
          explain: "3 × 5000 = 15000; 10 × 2000 = 20000.",
        },
        {
          text: "Việc dùng hàm giúp tránh lặp code và khi cần sửa công thức chỉ phải sửa một chỗ duy nhất.",
          answer: true,
          explain: "Đây chính là lợi ích lớn nhất của hàm: dễ bảo trì, ít sai sót.",
        },
        {
          text: "Nếu chỉ viết phần def mà không có lệnh gọi tinh_tien(...) thì chương trình vẫn tự động in ra kết quả.",
          answer: false,
          explain: "def chỉ định nghĩa; thân hàm chỉ chạy khi có lệnh GỌI hàm.",
        },
      ],
    },
    {
      id: "b26-tf2",
      context:
        "Bạn Sùng và bạn Lử tranh luận: Sùng viết hàm dùng print để hiện kết quả ra màn hình, Lử viết hàm dùng return để trả giá trị về. Cả hai cùng \"chạy được\", nhưng khi cô yêu cầu lấy kết quả của hàm cộng thêm 10 rồi mới in, thì chỉ hàm của Lử làm được.",
      code: 'def cach1(x):\n    print(x * 2)\n\ndef cach2(x):\n    return x * 2\n\nkq = cach2(5)\nprint(kq + 10)',
      statements: [
        {
          text: "Hàm cach2 trả về giá trị nên kết quả gán được vào biến kq để tính toán tiếp.",
          answer: true,
          explain: "return đưa giá trị về nơi gọi — dùng được trong biểu thức, gán biến.",
        },
        {
          text: "Lệnh print(kq + 10) in ra 20.",
          answer: true,
          explain: "cach2(5) = 10; 10 + 10 = 20.",
        },
        {
          text: "Nếu viết kq = cach1(5) thì kq nhận giá trị 10 giống như dùng cach2.",
          answer: false,
          explain:
            "cach1 chỉ in ra màn hình, không có return nên trả về None — kq sẽ là None, cộng thêm 10 sẽ lỗi.",
        },
        {
          text: "Một hàm không có lệnh return sẽ trả về giá trị đặc biệt None.",
          answer: true,
          explain: "None nghĩa là \"không có giá trị\" — mặc định của hàm không return.",
        },
      ],
    },
    {
      id: "b26-tf3",
      context:
        "Cô giáo ra bài kiểm tra nhanh về thứ tự thực hiện lệnh trong hàm. Bạn Chúng viết đoạn chương trình dưới đây và khẳng định màn hình sẽ hiện hai dòng: số 25 và chữ \"Tính xong\". Cả lớp chia làm hai phe tranh luận nảy lửa cho đến khi cô cho chạy thử.",
      code: 'def binh_phuong(x):\n    return x * x\n    print("Tính xong")\n\nprint(binh_phuong(5))',
      statements: [
        {
          text: "Chương trình chỉ in ra 25, không in \"Tính xong\".",
          answer: true,
          explain: "return kết thúc hàm ngay lập tức — mọi lệnh sau return trong hàm bị bỏ qua.",
        },
        {
          text: "Lệnh print(\"Tính xong\") trong hàm là code không bao giờ được thực hiện.",
          answer: true,
          explain: "Đây gọi là 'code chết' — dấu hiệu cần rà soát lại logic chương trình.",
        },
        {
          text: "Muốn in được cả \"Tính xong\", phải đặt lệnh print đó TRƯỚC lệnh return.",
          answer: true,
          explain: "Đảo thứ tự hai dòng thì print chạy trước, sau đó return kết thúc hàm.",
        },
        {
          text: "Một hàm trong Python chỉ được phép có duy nhất một lệnh return trong toàn bộ thân hàm.",
          answer: false,
          explain:
            "Hàm có thể có nhiều return ở các nhánh if khác nhau; hàm dừng ở return nào được thực hiện trước.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b26-es1",
      q: "Hàm trong lập trình là gì? Nêu cấu trúc một hàm trong Python và phân biệt rõ hai khái niệm: định nghĩa hàm và gọi hàm. Vì sao nên chia chương trình thành các hàm?",
      answer:
        "- Hàm: khối lệnh có tên, thực hiện một công việc xác định, có thể gọi lại nhiều lần; có thể nhận tham số và trả về giá trị.\n- Cấu trúc: def tên_hàm(danh_sách_tham_số): rồi khối lệnh thụt lề; dùng return để trả kết quả (không bắt buộc).\n- Định nghĩa hàm: viết phần def... — chỉ 'khai báo', thân hàm chưa chạy. Gọi hàm: viết tên_hàm(đối_số) — lúc này thân hàm mới được thực hiện.\n- Lợi ích: tránh lặp code, sửa một chỗ áp dụng mọi nơi; chương trình ngắn gọn dễ đọc; dễ tìm và sửa lỗi; chia việc lớn thành việc nhỏ (chia để trị), thuận lợi khi làm nhóm; tái sử dụng cho chương trình khác.",
    },
    {
      id: "b26-es2",
      q: "Phân biệt return và print trong hàm bằng ví dụ cụ thể. Viết hàm tinh_dtb(toan, van, anh) tính điểm trung bình ba môn và minh hoạ cách dùng kết quả của hàm để xếp loại học lực.",
      answer:
        'Phân biệt: print chỉ HIỂN THỊ ra màn hình cho người xem, không lấy lại được để tính tiếp; return TRẢ giá trị về nơi gọi, gán vào biến hoặc đưa vào biểu thức được.\n\ndef tinh_dtb(toan, van, anh):\n    return (toan + van + anh) / 3\n\ndtb = tinh_dtb(8, 7, 9)\nprint("Điểm trung bình:", dtb)\nif dtb >= 8:\n    print("Học lực: Giỏi")\nelif dtb >= 6.5:\n    print("Học lực: Khá")\nelse:\n    print("Học lực: Cần cố gắng")\n\nNhờ hàm trả về giá trị, ta vừa in được điểm vừa dùng nó cho câu lệnh điều kiện xếp loại. Nếu hàm chỉ print thì không làm được bước xếp loại này.',
    },
  ],
};

export default extra;
