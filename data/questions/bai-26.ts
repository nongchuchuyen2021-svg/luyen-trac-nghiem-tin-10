import type { Question } from "@/lib/types";

// Bài 26. Hàm trong Python
const questions: Question[] = [
  {
    id: "b26-01",
    q: "Hàm trong lập trình là gì?",
    options: [
      "Khối lệnh có tên, gọi lại được nhiều lần khi cần",
      "Một biến đặc biệt lưu được nhiều giá trị",
      "Một dạng vòng lặp viết gọn của lệnh for",
      "Tên gọi khác của cả chương trình chính",
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
    options: [
      "print(), len(), int()",
      "tinh_tong(), dem_so()",
      "xu_ly(), kiem_tra()",
      "chao_hoi(), ve_hinh()",
    ],
    answer: 0,
    explain:
      "Python có sẵn nhiều hàm chuẩn (built-in) như print, len, int, float, str. Các hàm đặt tên tiếng Việt kia đều phải tự định nghĩa bằng def trước khi gọi.",
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
      "In giá trị kết quả ra màn hình cho người dùng",
      "Quay lại chạy thân hàm thêm một lần nữa",
      "Xoá hàm khỏi bộ nhớ sau khi chạy xong",
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
      "return trả giá trị để dùng tiếp, print chỉ hiển thị",
      "print trả giá trị để dùng tiếp, return chỉ hiển thị",
      "Hai lệnh cho kết quả giống hệt nhau khi ở trong hàm",
      "return chỉ dùng được ở ngoài hàm, print thì ở trong hàm",
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
      "Dễ đọc, tránh lặp mã, dễ tìm lỗi và chia việc nhóm",
      "Giúp chương trình luôn chạy nhanh hơn hẳn",
      "Là quy định bắt buộc, thiếu hàm thì không chạy được",
      "Giúp mã nguồn trông đẹp mắt và chuyên nghiệp hơn",
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
      "10 — chữ 'xong' không in vì nằm sau return",
      "10 rồi mới đến chữ 'xong' ở dòng dưới",
      "Chữ 'xong' in trước rồi mới đến số 10",
      "Báo lỗi vì có lệnh đứng sau lệnh return",
    ],
    answer: 0,
    explain: "return kết thúc hàm ngay lập tức — mọi lệnh phía sau trong hàm bị bỏ qua.",
  },
];

export default questions;
