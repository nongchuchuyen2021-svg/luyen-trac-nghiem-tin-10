import type { LessonExtra } from "@/lib/types";

// Bài 4. Hệ nhị phân và dữ liệu số nguyên
const extra: LessonExtra = {
  tf: [
    {
      id: "b4-tf1",
      context:
        "Giờ Tin học, cô giáo tổ chức trò chơi \"giải mã điệp viên\": mỗi nhóm nhận một dãy đèn LED, đèn sáng là 1, đèn tắt là 0. Nhóm của Linh nhận được dãy 4 đèn: sáng - tắt - sáng - sáng. Linh reo lên: \"Đây là số 1011 trong hệ nhị phân, đổi ra hệ thập phân là ra mật mã!\" Cả nhóm cắm cúi tính toán để mở chiếc hộp quà của cô.",
      statements: [
        {
          text: "Dãy đèn sáng-tắt-sáng-sáng biểu diễn số nhị phân 1011₂.",
          answer: true,
          explain: "Sáng = 1, tắt = 0 → đọc lần lượt được 1011.",
        },
        {
          text: "Giá trị thập phân của 1011₂ là 11.",
          answer: true,
          explain: "1×8 + 0×4 + 1×2 + 1×1 = 11.",
        },
        {
          text: "Trò chơi này minh hoạ việc máy tính dùng hai trạng thái vật lí (có điện/không điện) để biểu diễn bit 1 và 0.",
          answer: true,
          explain: "Đèn sáng/tắt tương tự mạch điện tử có điện/không điện — cơ sở của hệ nhị phân trong máy tính.",
        },
        {
          text: "Nếu thêm một đèn nữa (thành 5 đèn), số lượng giá trị khác nhau mà dãy đèn biểu diễn được sẽ tăng thêm đúng 2 giá trị.",
          answer: false,
          explain: "Thêm 1 bit thì số tổ hợp NHÂN ĐÔI: từ 2⁴ = 16 lên 2⁵ = 32, tức thêm 16 giá trị.",
        },
      ],
    },
    {
      id: "b4-tf2",
      context:
        "Bạn Phúc khoe với em gái: \"Anh biết làm toán bằng hệ đếm của máy tính đấy!\" Em gái liền thách: \"Vậy anh cộng 1101 với 110 đi, toàn số 0 với 1 thôi mà.\" Phúc lấy giấy nháp, đặt phép tính theo cột dọc như cộng số thường, chỉ khác là nhớ theo quy tắc 1 + 1 = 10. Một lúc sau Phúc đưa ra đáp số và giải thích từng bước nhớ cho em gái nghe.",
      statements: [
        {
          text: "Trong phép cộng nhị phân, 1 + 1 = 10₂ (viết 0, nhớ 1).",
          answer: true,
          explain: "1 + 1 = 2 = 10₂ — quy tắc nhớ giống hệ thập phân khi vượt cơ số.",
        },
        {
          text: "Kết quả phép cộng 1101₂ + 110₂ là 10011₂.",
          answer: true,
          explain: "1101₂ = 13, 110₂ = 6; 13 + 6 = 19 = 16 + 2 + 1 = 10011₂.",
        },
        {
          text: "Có thể kiểm tra kết quả bằng cách đổi cả hai số sang hệ thập phân, cộng lại rồi so sánh.",
          answer: true,
          explain: "Hai hệ đếm chỉ là hai cách viết của cùng giá trị — kết quả phải khớp nhau.",
        },
        {
          text: "Phép nhân trong hệ nhị phân không thực hiện được, máy tính phải đổi về hệ thập phân để nhân.",
          answer: false,
          explain:
            "Nhị phân nhân được bình thường (bảng nhân cực đơn giản: 0 và 1) — máy tính nhân trực tiếp trên dãy bit.",
        },
      ],
    },
    {
      id: "b4-tf3",
      context:
        "Trong buổi sinh hoạt CLB Tin học, bạn Kiên đố cả nhóm: \"Vì sao lập trình viên hay đùa rằng trên đời có 10 loại người: người hiểu hệ nhị phân và người không hiểu?\" Cả nhóm cười ồ khi nhận ra 10 ở đây không phải là mười. Sau đó nhóm thảo luận tiếp: một ô nhớ 8 bit thì đếm được từ 0 đến bao nhiêu, và chuyện gì xảy ra nếu cần lưu số lớn hơn.",
      statements: [
        {
          text: "Trong câu đùa, \"10\" phải đọc là số nhị phân, có giá trị bằng 2.",
          answer: true,
          explain: "10₂ = 2 — nên câu đùa nghĩa là \"có 2 loại người\".",
        },
        {
          text: "Một ô nhớ 8 bit biểu diễn được các số nguyên không âm từ 0 đến 255.",
          answer: true,
          explain: "2⁸ = 256 tổ hợp → giá trị 0..255.",
        },
        {
          text: "Muốn lưu số nguyên lớn hơn 255, máy tính dùng nhiều byte hơn cho một số (ví dụ 2 byte, 4 byte).",
          answer: true,
          explain: "2 byte cho 0..65535, 4 byte cho hơn 4 tỉ giá trị — phạm vi tăng theo số bit.",
        },
        {
          text: "Số 256 viết trong hệ nhị phân là 11111111₂.",
          answer: false,
          explain: "11111111₂ = 255; còn 256 = 2⁸ = 100000000₂ (1 theo sau 8 chữ số 0).",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b4-es1",
      q: "Trình bày cách đổi số thập phân 45 sang hệ nhị phân (viết rõ từng bước) và cách đổi ngược kết quả về hệ thập phân để kiểm tra.",
      answer:
        "- Chia liên tiếp cho 2, ghi số dư: 45 ÷ 2 = 22 dư 1; 22 ÷ 2 = 11 dư 0; 11 ÷ 2 = 5 dư 1; 5 ÷ 2 = 2 dư 1; 2 ÷ 2 = 1 dư 0; 1 ÷ 2 = 0 dư 1. Đọc dãy dư từ dưới lên: 101101₂.\n- Kiểm tra: 101101₂ = 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1×1 = 32 + 8 + 4 + 1 = 45 ✓.",
    },
    {
      id: "b4-es2",
      q: "Vì sao máy tính chọn hệ nhị phân mà không dùng hệ thập phân quen thuộc của con người? Việc một số nguyên được lưu trong ô nhớ có độ dài cố định dẫn đến hạn chế gì?",
      answer:
        "- Chọn nhị phân vì: linh kiện điện tử chỉ cần phân biệt 2 trạng thái (có điện/không điện, từ hoá hai chiều...) — dễ chế tạo, hoạt động ổn định, ít nhầm lẫn; các phép toán và mạch lôgic (AND, OR, NOT) thiết kế đơn giản. Nếu dùng 10 trạng thái điện áp thì mạch phức tạp và dễ sai.\n- Hạn chế của ô nhớ cố định: chỉ biểu diễn được một phạm vi hữu hạn (8 bit: 0..255; nhiều bit hơn thì phạm vi lớn hơn nhưng vẫn hữu hạn). Nếu kết quả tính vượt phạm vi sẽ gây tràn số (overflow) — lập trình viên phải chọn kiểu dữ liệu đủ lớn cho bài toán.",
    },
  ],
};

export default extra;
