import type { LessonExtra } from "@/lib/types";

// Bài 31. Thực hành viết chương trình đơn giản
const extra: LessonExtra = {
  tf: [
    {
      id: "b31-tf1",
      context:
        "Hợp tác xã miến dong của xã nhờ CLB Tin học viết chương trình tính tiền bán hàng: nhập số kilôgam miến và đơn giá, tính thành tiền, nếu mua từ 20 kg trở lên được giảm 5%. Bạn Chá xác định rõ INPUT, OUTPUT rồi mới bắt tay viết code chứ không gõ ngay như mọi khi.",
      code: 'kg = float(input("Số kg: "))\ngia = float(input("Đơn giá: "))\ntien = kg * gia\nif kg >= 20:\n    tien = tien * 0.95\nprint("Thành tiền:", tien)',
      statements: [
        {
          text: "INPUT của bài toán là số kilôgam và đơn giá; OUTPUT là số tiền phải trả.",
          answer: true,
          explain: "Xác định vào/ra là bước đầu tiên khi giải bài toán bằng máy tính.",
        },
        {
          text: "Với kg = 20 và gia = 50000, chương trình in ra 950000.0.",
          answer: true,
          explain: "20 × 50000 = 1000000; giảm 5% còn 1000000 × 0.95 = 950000.",
        },
        {
          text: "Với kg = 19, chương trình vẫn áp dụng giảm giá 5%.",
          answer: false,
          explain: "Điều kiện là kg >= 20; 19 < 20 nên không vào nhánh if, không được giảm.",
        },
        {
          text: "Nhân với 0.95 tương đương với việc giảm 5% giá trị ban đầu.",
          answer: true,
          explain: "Còn lại 95% = nhân 0,95 — cách viết gọn thay cho tien - tien*0.05.",
        },
      ],
    },
    {
      id: "b31-tf2",
      context:
        "Bạn Dở viết chương trình đếm số học sinh đạt điểm từ 8 trở lên trong danh sách điểm của lớp và tính tỉ lệ phần trăm. Viết xong, Dở chạy thử với một danh sách nhỏ đã biết đáp án để chắc chắn chương trình đúng trước khi dùng cho cả lớp 40 bạn.",
      code: 'diem = [9, 7, 8, 5, 10]\ndem = 0\nfor x in diem:\n    if x >= 8:\n        dem = dem + 1\nprint(dem)\nprint(dem / len(diem) * 100)',
      statements: [
        {
          text: "Chương trình in ra 3 ở dòng đầu tiên.",
          answer: true,
          explain: "Các điểm từ 8 trở lên: 9, 8, 10 → đếm được 3.",
        },
        {
          text: "Dòng thứ hai in ra 60.0 — tức 60% học sinh đạt từ 8 trở lên.",
          answer: true,
          explain: "3 / 5 × 100 = 60.0.",
        },
        {
          text: "Việc chạy thử với danh sách nhỏ đã biết đáp án chính là hoạt động kiểm thử chương trình.",
          answer: true,
          explain: "Đối chiếu kết quả máy với kết quả tính tay — cách kiểm thử cơ bản nhất.",
        },
        {
          text: "Nếu danh sách diem rỗng (không có phần tử nào), dòng tính phần trăm vẫn chạy bình thường.",
          answer: false,
          explain: "len(diem) = 0 → chia cho 0 → ZeroDivisionError. Chương trình tốt cần xử lí trường hợp này.",
        },
      ],
    },
    {
      id: "b31-tf3",
      context:
        "Cô giáo nhận xét bài thực hành của hai bạn. Bài của Sao: tên biến là a, b, c, d, không có chú thích, lệnh input không có lời nhắc nên chạy lên màn hình đen thui người dùng chẳng biết nhập gì. Bài của Mai: tên biến là chieu_dai, chieu_rong, có chú thích ngắn ở mỗi phần, lời nhắc nhập rõ ràng. Cả hai bài đều ra kết quả đúng.",
      statements: [
        {
          text: "Bài của Mai dễ đọc và dễ bảo trì hơn nhờ tên biến gợi nghĩa và có chú thích.",
          answer: true,
          explain: "Code được đọc nhiều hơn được viết — đặt tên rõ nghĩa là kĩ năng quan trọng.",
        },
        {
          text: "Lời nhắc trong input giúp chương trình thân thiện, người dùng biết cần nhập dữ liệu gì.",
          answer: true,
          explain: 'input("Nhập chiều dài: ") rõ ràng hơn hẳn input() trống trơn.',
        },
        {
          text: "Chú thích bắt đầu bằng dấu # sẽ được Python in ra màn hình khi chạy chương trình.",
          answer: false,
          explain: "Python BỎ QUA chú thích khi chạy — chú thích chỉ dành cho người đọc code.",
        },
        {
          text: "Vì cả hai bài đều ra kết quả đúng nên chất lượng hai chương trình là hoàn toàn như nhau.",
          answer: false,
          explain:
            "Chương trình tốt không chỉ đúng mà còn phải dễ đọc, dễ sửa, thân thiện với người dùng.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b31-es1",
      q: "Trình bày các bước giải một bài toán bằng chương trình máy tính. Áp dụng: mô tả các bước cho bài toán \"nhập ba số, tìm và in ra số lớn nhất\".",
      answer:
        "- Các bước: (1) Xác định bài toán: INPUT là gì, OUTPUT là gì; (2) Thiết kế thuật toán: mô tả cách giải bằng lời hoặc sơ đồ; (3) Viết chương trình bằng ngôn ngữ lập trình; (4) Kiểm thử với nhiều bộ dữ liệu và sửa lỗi.\n- Áp dụng: INPUT: ba số a, b, c. OUTPUT: số lớn nhất trong ba số. Thuật toán: giả sử max = a; nếu b > max thì max = b; nếu c > max thì max = c; in max.\nChương trình:\na = float(input()); b = float(input()); c = float(input())\nmax_so = a\nif b > max_so:\n    max_so = b\nif c > max_so:\n    max_so = c\nprint(\"Số lớn nhất:\", max_so)\nKiểm thử: (3,5,4)→5; (9,2,7)→9; (1,1,1)→1; (−5,−2,−9)→−2.",
    },
    {
      id: "b31-es2",
      q: "Viết chương trình quản lí chi tiêu đơn giản: nhập số ngày n, sau đó nhập số tiền chi tiêu của từng ngày vào một danh sách; in ra tổng chi, trung bình mỗi ngày và số ngày chi vượt quá mức trung bình đó.",
      answer:
        'n = int(input("Số ngày: "))\nchi = []\nfor i in range(n):\n    x = float(input("Chi ngày " + str(i + 1) + ": "))\n    chi.append(x)\n\ntong = sum(chi)\ntb = tong / n\nprint("Tổng chi:", tong)\nprint("Trung bình mỗi ngày:", tb)\n\ndem = 0\nfor x in chi:\n    if x > tb:\n        dem = dem + 1\nprint("Số ngày chi vượt mức trung bình:", dem)\n\nLưu ý: phải tính xong trung bình rồi mới duyệt đếm (cần hai vòng lặp riêng biệt); nên kiểm tra n > 0 để tránh lỗi chia cho 0.',
    },
  ],
};

export default extra;
