import type { LessonExtra } from "@/lib/types";

// Bài 16. Ngôn ngữ lập trình bậc cao và Python
const extra: LessonExtra = {
  tf: [
    {
      id: "b16-tf1",
      context:
        "Buổi đầu học lập trình, cô giáo chiếu hai đoạn \"văn bản\" lên bảng. Bên trái là một dãy dài toàn số 0 và 1 khó hiểu. Bên phải là dòng lệnh print(\"Xin chào lớp 10A!\") mà cả lớp đọc phát hiểu ngay. Cô nói: \"Cả hai đều ra lệnh cho máy tính in một câu chào. Nhưng một bên là tiếng nói của máy, một bên là ngôn ngữ được thiết kế cho con người viết.\"",
      statements: [
        {
          text: "Dãy 0 và 1 bên trái là chương trình viết bằng ngôn ngữ máy.",
          answer: true,
          explain: "Ngôn ngữ máy là các lệnh nhị phân mà CPU thực hiện trực tiếp.",
        },
        {
          text: "Dòng lệnh print bên phải thuộc ngôn ngữ lập trình bậc cao, gần với ngôn ngữ tự nhiên.",
          answer: true,
          explain: "Python là ngôn ngữ bậc cao — người đọc hiểu được ngay ý nghĩa câu lệnh.",
        },
        {
          text: "Máy tính thực hiện trực tiếp được dòng lệnh Python mà không cần bước chuyển đổi nào.",
          answer: false,
          explain: "CPU chỉ hiểu ngôn ngữ máy — lệnh Python phải qua môi trường thông dịch chuyển đổi rồi mới thực hiện.",
        },
        {
          text: "Chương trình bậc cao có ưu điểm là dễ viết, dễ đọc, dễ sửa hơn ngôn ngữ máy.",
          answer: true,
          explain: "Đó chính là lí do ngôn ngữ bậc cao ra đời và phổ biến.",
        },
      ],
    },
    {
      id: "b16-tf2",
      context:
        "Bạn Sảng mở môi trường lập trình Python lần đầu tiên, thấy cửa sổ có dấu nhắc >>> nhấp nháy. Sảng gõ thử 3 + 5 rồi nhấn Enter — màn hình hiện ngay 8. Gõ tiếp print(\"toi yeu tin hoc\") — máy in đúng câu đó. Thích thú, Sảng gõ luôn một bài thơ vào sau dấu nhắc thì máy báo SyntaxError đỏ lòm. Sảng gãi đầu: \"Hoá ra không phải gõ gì máy cũng chịu!\"",
      statements: [
        {
          text: "Cửa sổ có dấu nhắc >>> là chế độ gõ lệnh tương tác của Python, thực hiện ngay từng lệnh.",
          answer: true,
          explain: "Chế độ tương tác nhận một lệnh, chạy và trả kết quả ngay — tiện thử nghiệm.",
        },
        {
          text: "Máy tính trả lời 8 vì Python tính giá trị biểu thức 3 + 5 rồi hiển thị kết quả.",
          answer: true,
          explain: "Ở chế độ tương tác, gõ biểu thức là được trả về giá trị của nó.",
        },
        {
          text: "Bài thơ bị báo SyntaxError vì không tuân theo quy tắc cú pháp của ngôn ngữ Python.",
          answer: true,
          explain: "Câu lệnh phải đúng ngữ pháp của ngôn ngữ — văn thơ tự do không phải câu lệnh hợp lệ.",
        },
        {
          text: "Muốn viết chương trình dài nhiều lệnh để dùng lại, cách phù hợp vẫn là gõ từng dòng ở dấu nhắc >>>.",
          answer: false,
          explain: "Chương trình dài nên soạn trong tệp .py rồi chạy — chế độ tương tác chỉ hợp thử lệnh ngắn.",
        },
      ],
    },
    {
      id: "b16-tf3",
      context:
        "Trong buổi sinh hoạt hướng nghiệp, anh cựu học sinh của trường — giờ là kĩ sư phần mềm — kể: \"Hồi lớp 10 anh bắt đầu với Python như các em. Giờ anh vẫn dùng Python hằng ngày để phân tích dữ liệu và làm AI. Cái hay của nó là lệnh ngắn gọn, thư viện thì mênh mông, cộng đồng hỗ trợ khắp thế giới. Nhưng nhớ này: học ngôn ngữ nào không quan trọng bằng học cách TƯ DUY giải quyết vấn đề.\"",
      statements: [
        {
          text: "Python được ứng dụng trong nhiều lĩnh vực hiện đại như phân tích dữ liệu và trí tuệ nhân tạo.",
          answer: true,
          explain: "Python là ngôn ngữ hàng đầu trong khoa học dữ liệu và AI nhờ hệ thư viện phong phú.",
        },
        {
          text: "Cú pháp đơn giản, gần ngôn ngữ tự nhiên là một lí do Python phù hợp cho người mới học.",
          answer: true,
          explain: "Code Python ngắn gọn, dễ đọc — giảm rào cản khi bắt đầu học lập trình.",
        },
        {
          text: "Python là ngôn ngữ lập trình duy nhất đang được sử dụng trong ngành phần mềm hiện nay.",
          answer: false,
          explain: "Còn rất nhiều ngôn ngữ khác (C++, Java, JavaScript...) — mỗi ngôn ngữ mạnh ở lĩnh vực riêng.",
        },
        {
          text: "Theo lời khuyên của anh kĩ sư, tư duy giải quyết vấn đề quan trọng hơn việc thuộc lòng một ngôn ngữ cụ thể.",
          answer: true,
          explain: "Ngôn ngữ có thể đổi, tư duy thuật toán theo ta suốt sự nghiệp.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b16-es1",
      q: "Phân biệt ngôn ngữ máy và ngôn ngữ lập trình bậc cao. Vì sao chương trình viết bằng ngôn ngữ bậc cao cần được dịch trước khi máy tính thực hiện?",
      answer:
        "- Ngôn ngữ máy: các lệnh dạng dãy bit 0/1, gắn với từng loại CPU, máy thực hiện trực tiếp nhưng con người rất khó viết và đọc.\n- Ngôn ngữ bậc cao (Python, C++, Java...): câu lệnh gần ngôn ngữ tự nhiên và kí hiệu toán học, không phụ thuộc loại máy cụ thể, dễ viết — dễ đọc — dễ bảo trì.\n- Cần dịch vì CPU chỉ hiểu ngôn ngữ máy: chương trình dịch (compiler) chuyển cả chương trình một lần, hoặc chương trình thông dịch (interpreter) dịch và thực hiện từng câu lệnh. Python dùng cơ chế thông dịch.",
    },
    {
      id: "b16-es2",
      q: "Nêu những đặc điểm khiến Python phù hợp với người mới học lập trình. Viết một chương trình Python đầu tiên gồm 2 lệnh: in lời chào có tên em và in kết quả của phép tính 2026 − 2010.",
      answer:
        '- Đặc điểm: cú pháp ngắn gọn, dễ đọc gần ngôn ngữ tự nhiên; không cần khai báo kiểu phức tạp; có chế độ tương tác thử lệnh ngay; miễn phí, chạy trên mọi hệ điều hành; thư viện phong phú và cộng đồng lớn; dùng thực tế trong nhiều lĩnh vực (AI, dữ liệu, web).\n- Chương trình ví dụ:\nprint("Xin chào! Mình là Hoa, học sinh lớp 10A1")\nprint(2026 - 2010)\nKết quả: dòng chào và số 16.',
    },
  ],
};

export default extra;
