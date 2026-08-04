import type { Question } from "@/lib/types";

// Bài 26. Hàm trong Python
const questions: Question[] = [
  {
    id: "b26-01",
    q: "Hàm trong lập trình là gì?",
    options: [
      "Khối lệnh có tên, thực hiện một công việc xác định, gọi lại được nhiều lần",
      "Một biến đặc biệt",
      "Một loại vòng lặp",
      "Tên khác của chương trình",
    ],
    answer: 0,
    explain:
      "Hàm đóng gói khối lệnh; định nghĩa một lần, gọi nhiều lần — giúp chương trình gọn và dễ bảo trì.",
  },
  {
    id: "b26-02",
    q: "Từ khoá nào dùng để định nghĩa hàm trong Python?",
    options: ["def", "function", "define", "func"],
    answer: 0,
    explain: "Cú pháp: def tên_hàm(tham_số): rồi khối lệnh thụt lề.",
  },
  {
    id: "b26-03",
    q: "Hàm nào sau đây là hàm CÓ SẴN của Python?",
    options: ["print(), len(), int()", "tinh_tong()", "xu_ly()", "chao_hoi()"],
    answer: 0,
    explain: "Python có sẵn nhiều hàm chuẩn (built-in); các hàm tên tiếng Việt kia phải tự định nghĩa.",
  },
  {
    id: "b26-04",
    q: "Đoạn chương trình sau in ra gì?",
    code: 'def chao():\n    print("Xin chào!")\n\nchao()\nchao()',
    options: [
      "Xin chào! hai lần",
      "Xin chào! một lần",
      "Không in gì",
      "Báo lỗi",
    ],
    answer: 0,
    explain: "Định nghĩa một lần, gọi hai lần → thân hàm chạy hai lần.",
  },
  {
    id: "b26-05",
    q: "Nếu chỉ ĐỊNH NGHĨA hàm mà không GỌI hàm, thân hàm sẽ:",
    options: [
      "Không được thực hiện",
      "Tự chạy một lần",
      "Chạy liên tục",
      "Gây lỗi cú pháp",
    ],
    answer: 0,
    explain: "def chỉ 'đăng kí' hàm; thân hàm chỉ chạy khi có lệnh gọi tên hàm kèm cặp ngoặc.",
  },
  {
    id: "b26-06",
    q: "Từ khoá return trong hàm có tác dụng gì?",
    options: [
      "Kết thúc hàm và trả giá trị về nơi gọi",
      "In giá trị ra màn hình",
      "Lặp lại thân hàm",
      "Xoá hàm khỏi bộ nhớ",
    ],
    answer: 0,
    explain: "return đưa kết quả về cho biểu thức gọi hàm; các lệnh sau return không được chạy.",
  },
  {
    id: "b26-07",
    q: "Đoạn chương trình sau in ra gì?",
    code: "def binh_phuong(x):\n    return x * x\n\nprint(binh_phuong(4))",
    options: ["16", "8", "4", "x * x"],
    answer: 0,
    explain: "Hàm nhận 4, trả về 4 × 4 = 16; print in giá trị đó.",
  },
  {
    id: "b26-08",
    q: "Khác nhau giữa return và print trong hàm là:",
    options: [
      "return trả giá trị cho nơi gọi để dùng tiếp; print chỉ hiển thị ra màn hình",
      "Giống hệt nhau",
      "print trả giá trị, return hiển thị",
      "return chỉ dùng ngoài hàm",
    ],
    answer: 0,
    explain:
      "Kết quả return gán được vào biến, tính toán tiếp; print chỉ cho người xem, không 'lấy lại' được.",
  },
  {
    id: "b26-09",
    q: "Hàm không có lệnh return (hoặc return không kèm giá trị) sẽ trả về:",
    options: ["None", "0", "False", "Xâu rỗng"],
    answer: 0,
    explain: "Mặc định hàm trả về None — giá trị đặc biệt nghĩa là 'không có gì'.",
  },
  {
    id: "b26-10",
    q: "Lợi ích của việc chia chương trình thành các hàm là:",
    options: [
      "Dễ đọc, tránh lặp code, dễ tìm lỗi và phân công làm việc nhóm",
      "Chương trình chạy chậm đi",
      "Bắt buộc phải có mới chạy được",
      "Chỉ để đẹp code",
    ],
    answer: 0,
    explain:
      "Tách việc lớn thành các hàm nhỏ độc lập là tư duy 'chia để trị' — nền tảng của phát triển phần mềm.",
  },
  {
    id: "b26-11",
    q: "Cách GỌI hàm tinh_tong với hai giá trị 3 và 5, lấy kết quả vào biến s:",
    options: [
      "s = tinh_tong(3, 5)",
      "s = def tinh_tong(3, 5)",
      "tinh_tong = s(3, 5)",
      "s = tinh_tong[3, 5]",
    ],
    answer: 0,
    explain: "Gọi hàm bằng tên kèm ngoặc tròn chứa đối số; kết quả return gán vào s.",
  },
  {
    id: "b26-12",
    q: "Đoạn chương trình sau in ra gì?",
    code: "def f(x):\n    return x + 1\n    print(\"xong\")\n\nprint(f(9))",
    options: [
      "10 (chữ 'xong' không in vì nằm sau return)",
      "10 rồi xong",
      "xong rồi 10",
      "Báo lỗi",
    ],
    answer: 0,
    explain: "return kết thúc hàm ngay lập tức — mọi lệnh phía sau trong hàm bị bỏ qua.",
  },
];

export default questions;
