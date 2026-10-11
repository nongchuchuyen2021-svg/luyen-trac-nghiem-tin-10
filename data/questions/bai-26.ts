import type { Question } from "@/lib/types";

// Bài 26. Hàm trong Python
const questions: Question[] = [
  {
    id: "b26-01",
    q: "Hàm trong lập trình là gì?",
    options: [
      "Một biến đặc biệt lưu được nhiều giá trị",
      "Một dạng vòng lặp viết gọn của lệnh for",
      "Khối lệnh có tên, gọi lại được nhiều lần khi cần",
      "Tên gọi khác của cả chương trình chính",
    ],
    answer: 2,
    explain:
      "Hàm đóng gói khối lệnh; định nghĩa một lần, gọi nhiều lần — giúp chương trình gọn và dễ bảo trì.",
  },
  {
    id: "b26-02",
    q: "Từ khoá nào dùng để định nghĩa hàm trong Python?",
    options: ["define", "function", "func", "def"],
    answer: 3,
    explain: "Cú pháp: def tên_hàm(tham_số): rồi khối lệnh thụt lề.",
  },
  {
    id: "b26-03",
    q: "Hàm nào sau đây là hàm CÓ SẴN của Python?",
    options: [
      "tinh_tong(), dem_so()",
      "print(), len(), int()",
      "xu_ly(), kiem_tra()",
      "chao_hoi(), ve_hinh()",
    ],
    answer: 1,
    explain:
      "Python có sẵn nhiều hàm chuẩn (built-in) như print, len, int, float, str. Các hàm đặt tên tiếng Việt kia đều phải tự định nghĩa bằng def trước khi gọi.",
  },
  {
    id: "b26-04",
    q: "Đoạn chương trình sau in ra gì?",
    code: 'def chao():\n    print("Xin chào!")\n\nchao()\nchao()',
    options: [
      "Xin chào! một lần",
      "Xin chào! hai lần",
      "Không in gì",
      "Báo lỗi",
    ],
    answer: 1,
    explain: "Định nghĩa một lần, gọi hai lần → thân hàm chạy hai lần.",
  },
  {
    id: "b26-05",
    q: "Nếu chỉ ĐỊNH NGHĨA hàm mà không GỌI hàm, thân hàm sẽ:",
    options: [
      "Gây lỗi cú pháp",
      "Chạy liên tục",
      "Không được thực hiện",
      "Tự chạy một lần",
    ],
    answer: 2,
    explain: "def chỉ 'đăng kí' hàm; thân hàm chỉ chạy khi có lệnh gọi tên hàm kèm cặp ngoặc.",
  },
  {
    id: "b26-06",
    q: "Từ khoá return trong hàm có tác dụng gì?",
    options: [
      "Kết thúc hàm và trả giá trị về nơi gọi",
      "Xoá hàm khỏi bộ nhớ sau khi chạy xong",
      "Quay lại chạy thân hàm thêm một lần nữa",
      "In giá trị kết quả ra màn hình cho người dùng",
    ],
    answer: 0,
    explain: "return đưa kết quả về cho biểu thức gọi hàm; các lệnh sau return không được chạy.",
  },
  {
    id: "b26-07",
    q: "Đoạn chương trình sau in ra gì?",
    code: "def binh_phuong(x):\n    return x * x\n\nprint(binh_phuong(4))",
    options: ["4", "16", "8", "x * x"],
    answer: 1,
    explain: "Hàm nhận 4, trả về 4 × 4 = 16; print in giá trị đó.",
  },
  {
    id: "b26-08",
    q: "Khác nhau giữa return và print trong hàm là:",
    options: [
      "print trả giá trị để dùng tiếp, return chỉ hiển thị",
      "Hai lệnh cho kết quả giống hệt nhau khi ở trong hàm",
      "return trả giá trị để dùng tiếp, print chỉ hiển thị",
      "return chỉ dùng được ở ngoài hàm, print thì ở trong hàm",
    ],
    answer: 2,
    explain:
      "Kết quả return gán được vào biến, tính toán tiếp; print chỉ cho người xem, không 'lấy lại' được.",
  },
  {
    id: "b26-09",
    q: "Hàm không có lệnh return (hoặc return không kèm giá trị) sẽ trả về:",
    options: ["0", "Xâu rỗng", "None", "False"],
    answer: 2,
    explain: "Mặc định hàm trả về None — giá trị đặc biệt nghĩa là 'không có gì'.",
  },
  {
    id: "b26-10",
    q: "Lợi ích của việc chia chương trình thành các hàm là:",
    options: [
      "Là quy định bắt buộc, thiếu hàm thì không chạy được",
      "Dễ đọc, tránh lặp mã, dễ tìm lỗi và chia việc nhóm",
      "Giúp mã nguồn trông đẹp mắt và chuyên nghiệp hơn",
      "Giúp chương trình luôn chạy nhanh hơn hẳn",
    ],
    answer: 1,
    explain:
      "Tách việc lớn thành các hàm nhỏ độc lập là tư duy 'chia để trị' — nền tảng của phát triển phần mềm.",
  },
  {
    id: "b26-11",
    q: "Cách GỌI hàm tinh_tong với hai giá trị 3 và 5, lấy kết quả vào biến s:",
    options: [
      "s = tinh_tong[3, 5]",
      "s = def tinh_tong(3, 5)",
      "s = tinh_tong(3, 5)",
      "tinh_tong = s(3, 5)",
    ],
    answer: 2,
    explain: "Gọi hàm bằng tên kèm ngoặc tròn chứa đối số; kết quả return gán vào s.",
  },
  {
    id: "b26-12",
    q: "Đoạn chương trình sau in ra gì?",
    code: "def f(x):\n    return x + 1\n    print(\"xong\")\n\nprint(f(9))",
    options: [
      "10 rồi mới đến chữ 'xong' ở dòng dưới",
      "Chữ 'xong' in trước rồi mới đến số 10",
      "Báo lỗi vì có lệnh đứng sau lệnh return",
      "10 — chữ 'xong' không in vì nằm sau return",
    ],
    answer: 3,
    explain: "return kết thúc hàm ngay lập tức — mọi lệnh phía sau trong hàm bị bỏ qua.",
  },
];

export default questions;
