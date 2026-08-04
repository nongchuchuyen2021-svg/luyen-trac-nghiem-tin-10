import type { LessonExtra } from "@/lib/types";

// Bài 19. Câu lệnh điều kiện if
const extra: LessonExtra = {
  tf: [
    {
      id: "b19-tf1",
      context:
        "Trường tổ chức giải chạy việt dã quanh hồ. Ban tổ chức nhờ CLB Tin học viết chương trình phân loại vận động viên: nhập thời gian chạy (phút), nếu dưới 25 phút xếp loại \"Xuất sắc\", từ 25 đến dưới 35 phút xếp \"Đạt\", còn lại là \"Cần luyện thêm\". Bạn Sùng viết đoạn chương trình bên dưới và chạy thử với thời gian 25 phút.",
      code: 't = float(input())\nif t < 25:\n    print("Xuất sắc")\nelif t < 35:\n    print("Đạt")\nelse:\n    print("Cần luyện thêm")',
      statements: [
        {
          text: "Với t = 25, chương trình in ra \"Đạt\".",
          answer: true,
          explain: "25 < 25 sai nên bỏ nhánh đầu; 25 < 35 đúng → in Đạt. Biên 25 thuộc nhóm Đạt.",
        },
        {
          text: "Với t = 40, chương trình in ra \"Cần luyện thêm\".",
          answer: true,
          explain: "40 < 25 sai, 40 < 35 sai → rơi vào nhánh else.",
        },
        {
          text: "Trong cấu trúc if-elif-else, khi một điều kiện đúng thì các nhánh phía sau vẫn được kiểm tra tiếp.",
          answer: false,
          explain: "Chỉ nhánh ĐẦU TIÊN có điều kiện đúng được thực hiện, các nhánh sau bị bỏ qua.",
        },
        {
          text: "Khối lệnh thuộc mỗi nhánh được xác định nhờ thụt lề.",
          answer: true,
          explain: "Python dùng thụt lề thay cho ngoặc để đánh dấu khối lệnh.",
        },
      ],
    },
    {
      id: "b19-tf2",
      context:
        "Nhà xe của trường quy định: học sinh được gửi xe điện miễn phí nếu có thẻ tháng HOẶC là học sinh khối 10 (tháng đầu nhập học). Bạn Vàng thử \"lập trình hoá\" quy định này để đố các bạn: biến the_thang nhận True/False, biến khoi nhận giá trị 10, 11, 12. Cả nhóm tranh luận sôi nổi về cách viết điều kiện cho đúng.",
      code: "if the_thang or khoi == 10:\n    print(\"Miễn phí\")\nelse:\n    print(\"Thu phí\")",
      statements: [
        {
          text: "Học sinh khối 11 có thẻ tháng sẽ được in \"Miễn phí\".",
          answer: true,
          explain: "the_thang = True nên cả biểu thức OR đúng bất kể khối nào.",
        },
        {
          text: "Học sinh khối 10 không có thẻ tháng sẽ bị in \"Thu phí\".",
          answer: false,
          explain: "khoi == 10 đúng → biểu thức OR đúng → vẫn Miễn phí theo đúng quy định.",
        },
        {
          text: "Nếu viết nhầm or thành and, học sinh khối 10 chưa có thẻ tháng sẽ mất quyền miễn phí.",
          answer: true,
          explain: "AND đòi cả hai vế đúng — sai một vế là rơi xuống else, trái với quy định.",
        },
        {
          text: "Biểu thức khoi == 10 dùng hai dấu bằng vì đây là phép so sánh, không phải lệnh gán.",
          answer: true,
          explain: "== so sánh bằng, trả về True/False; một dấu = là gán, dùng trong if sẽ sai cú pháp.",
        },
      ],
    },
    {
      id: "b19-tf3",
      context:
        "Bạn Dung viết chương trình kiểm tra một số có phải năm nhuận không (năm nhuận: chia hết cho 4 nhưng không chia hết cho 100, hoặc chia hết cho 400). Dung viết đoạn code dưới đây rồi thử lần lượt các năm 2024, 1900 và 2000 để kiểm chứng với kiến thức Địa lí đã học.",
      code: "nam = int(input())\nif (nam % 4 == 0 and nam % 100 != 0) or nam % 400 == 0:\n    print(\"Năm nhuận\")\nelse:\n    print(\"Không nhuận\")",
      statements: [
        {
          text: "Năm 2024 được chương trình kết luận là năm nhuận.",
          answer: true,
          explain: "2024 % 4 == 0 đúng và 2024 % 100 != 0 đúng → vế trái của OR đúng.",
        },
        {
          text: "Năm 1900 được chương trình kết luận là năm nhuận.",
          answer: false,
          explain: "1900 chia hết cho 100 (vế trái sai) và không chia hết cho 400 (vế phải sai) → Không nhuận.",
        },
        {
          text: "Năm 2000 được chương trình kết luận là năm nhuận nhờ điều kiện chia hết cho 400.",
          answer: true,
          explain: "2000 % 400 == 0 đúng → cả biểu thức OR đúng.",
        },
        {
          text: "Cặp ngoặc tròn quanh (nam % 4 == 0 and nam % 100 != 0) giúp biểu thức được nhóm đúng ý đồ trước khi OR.",
          answer: true,
          explain: "Ngoặc làm rõ thứ tự: (A and B) or C — đúng định nghĩa năm nhuận.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b19-es1",
      q: "Trình bày cú pháp và cách hoạt động của câu lệnh if dạng thiếu (if), dạng đủ (if-else) và dạng nhiều nhánh (if-elif-else) trong Python. Cho ví dụ minh hoạ mỗi dạng gắn với tình huống trường học.",
      answer:
        '- Dạng thiếu: if <điều kiện>: <khối lệnh> — chỉ làm gì đó khi điều kiện đúng. VD: if diem == 10: print("Tuyệt đối!").\n- Dạng đủ: if <điều kiện>: ... else: ... — hai nhánh loại trừ nhau. VD: if diem >= 5: print("Đạt") else: print("Chưa đạt").\n- Nhiều nhánh: if ... elif ... elif ... else — xét lần lượt từ trên xuống, gặp điều kiện đúng đầu tiên thì thực hiện nhánh đó và bỏ qua phần còn lại. VD xếp loại: >= 8 Giỏi, >= 6.5 Khá, >= 5 Trung bình, còn lại Chưa đạt.\n- Lưu ý chung: sau điều kiện có dấu hai chấm; khối lệnh phải thụt lề thống nhất.',
    },
    {
      id: "b19-es2",
      q: "Viết chương trình nhập ba số a, b, c là độ dài ba đoạn thẳng, kiểm tra và thông báo ba đoạn đó có tạo thành một tam giác hay không (điều kiện: tổng hai cạnh bất kì lớn hơn cạnh còn lại).",
      answer:
        'a = float(input("a = "))\nb = float(input("b = "))\nc = float(input("c = "))\nif a + b > c and b + c > a and a + c > b:\n    print("Ba đoạn tạo thành tam giác")\nelse:\n    print("Không tạo thành tam giác")\nGiải thích: cần đủ CẢ BA bất đẳng thức nên nối bằng and; chỉ cần một bất đẳng thức sai là biểu thức sai, chương trình vào nhánh else. (Có thể kiểm tra thêm a, b, c > 0 — càng chặt chẽ càng tốt.)',
    },
  ],
};

export default extra;
