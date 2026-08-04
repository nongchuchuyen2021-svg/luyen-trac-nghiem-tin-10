import type { LessonExtra } from "@/lib/types";

// Bài 5. Dữ liệu lôgic
const extra: LessonExtra = {
  tf: [
    {
      id: "b5-tf1",
      context:
        "Trường thông báo điều kiện được dự thi học sinh giỏi cấp trường môn Tin học: \"Điểm trung bình môn Tin từ 8,0 trở lên VÀ không nghỉ học quá 3 buổi trong học kì.\" Bạn Việt có điểm trung bình 8,5 nhưng nghỉ 5 buổi vì ốm; bạn Nga điểm 8,2 và chỉ nghỉ 1 buổi; bạn Toàn điểm 7,9 và đi học đầy đủ. Ba bạn ngồi tính xem ai đủ điều kiện đăng kí.",
      statements: [
        {
          text: "Điều kiện dự thi là một biểu thức lôgic dạng A AND B, với A là \"điểm ≥ 8,0\" và B là \"nghỉ ≤ 3 buổi\".",
          answer: true,
          explain: "Chữ VÀ trong thông báo tương ứng phép AND của đại số lôgic.",
        },
        {
          text: "Bạn Việt đủ điều kiện dự thi vì có điểm trung bình cao hơn yêu cầu.",
          answer: false,
          explain: "Việt: A đúng nhưng B sai (nghỉ 5 buổi) → A AND B = sai, không đủ điều kiện.",
        },
        {
          text: "Bạn Nga là người duy nhất trong ba bạn đủ điều kiện dự thi.",
          answer: true,
          explain: "Nga: cả A và B đều đúng; Việt hỏng B, Toàn hỏng A (7,9 < 8,0).",
        },
        {
          text: "Nếu trường đổi chữ VÀ thành HOẶC thì cả ba bạn đều đủ điều kiện.",
          answer: true,
          explain: "OR chỉ cần một vế đúng: Việt có A đúng, Nga cả hai đúng, Toàn có B đúng → cả ba đạt.",
        },
      ],
    },
    {
      id: "b5-tf2",
      context:
        "Bố bạn Thảo lắp hệ thống tưới tự động cho vườn rau: máy bơm chỉ chạy khi \"độ ẩm đất thấp hơn 40%\" và \"KHÔNG phải đang mưa\". Thảo tò mò mở ứng dụng xem: lúc 6 giờ sáng độ ẩm 35%, trời tạnh ráo — máy bơm chạy. Đến trưa trời đổ mưa to, độ ẩm vẫn 35% — máy bơm tự tắt. Thảo chợt nhận ra chiếc máy bơm đang \"tính toán lôgic\" y như bài học trên lớp.",
      statements: [
        {
          text: "Điều kiện bật máy bơm có thể viết là: (độ ẩm < 40%) AND (NOT đang mưa).",
          answer: true,
          explain: "Hai điều kiện nối bằng VÀ, trong đó vế sau là phủ định của \"đang mưa\".",
        },
        {
          text: "Lúc 6 giờ sáng, cả hai vế của biểu thức đều đúng nên máy bơm chạy.",
          answer: true,
          explain: "35% < 40% đúng; không mưa nên NOT đang mưa = đúng; AND của hai giá trị đúng là đúng.",
        },
        {
          text: "Buổi trưa máy bơm tắt vì vế \"độ ẩm < 40%\" trở thành sai.",
          answer: false,
          explain: "Độ ẩm vẫn 35% (vế này vẫn đúng); máy tắt vì \"NOT đang mưa\" thành sai khi trời mưa.",
        },
        {
          text: "Giá trị của biểu thức điều kiện trên chỉ có thể là một trong hai: đúng hoặc sai.",
          answer: true,
          explain: "Biểu thức lôgic luôn nhận đúng một trong hai giá trị True/False.",
        },
      ],
    },
    {
      id: "b5-tf3",
      context:
        "Trong giờ học, cô giáo viết lên bảng hai giá trị x = 1, y = 0 (quy ước 1 là đúng, 0 là sai) và một dãy biểu thức: x AND y, x OR y, NOT x, (NOT y) AND x. Cô chia lớp thành 4 nhóm, mỗi nhóm tính một biểu thức rồi dán kết quả lên bảng. Nhóm nào tính sai sẽ hát một bài trước lớp, thế là cả lớp tính toán cực kì cẩn thận.",
      statements: [
        {
          text: "x AND y = 0.",
          answer: true,
          explain: "1 AND 0 = 0 — AND chỉ đúng khi cả hai cùng đúng.",
        },
        {
          text: "x OR y = 1.",
          answer: true,
          explain: "1 OR 0 = 1 — OR đúng khi có ít nhất một vế đúng.",
        },
        {
          text: "NOT x = 1.",
          answer: false,
          explain: "x = 1 nên NOT x = 0.",
        },
        {
          text: "(NOT y) AND x = 1.",
          answer: true,
          explain: "NOT y = NOT 0 = 1; 1 AND 1 = 1.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b5-es1",
      q: "Lập bảng chân trị cho hai phép toán AND và OR (với hai toán hạng). Từ bảng đó, rút ra cách nhớ nhanh kết quả của mỗi phép toán.",
      answer:
        "Bảng chân trị (p, q, p AND q, p OR q):\n0 0 → AND: 0, OR: 0\n0 1 → AND: 0, OR: 1\n1 0 → AND: 0, OR: 1\n1 1 → AND: 1, OR: 1\nCách nhớ: AND chỉ đúng khi CẢ HAI cùng đúng (khắt khe — như điều kiện \"vừa... vừa...\"); OR chỉ sai khi CẢ HAI cùng sai (dễ tính — chỉ cần một vế đúng là đúng).",
    },
    {
      id: "b5-es2",
      q: "Nêu một tình huống thực tế ở trường hoặc ở nhà có sử dụng điều kiện kết hợp AND, OR hoặc NOT. Viết điều kiện đó dưới dạng biểu thức lôgic và phân tích một trường hợp cụ thể.",
      answer:
        "Gợi ý ví dụ: Điều kiện được khen thưởng cuối năm: (học lực Giỏi) AND (hạnh kiểm Tốt). Bạn A học lực Giỏi, hạnh kiểm Tốt → đúng AND đúng = đúng → được khen. Bạn B học lực Giỏi, hạnh kiểm Khá → đúng AND sai = sai → chưa được.\nVí dụ khác: chuông chống trộm kêu khi (cửa mở) AND (NOT chủ nhà ở nhà); được nghỉ tiết thể dục khi (có đơn xin phép) OR (giáo viên chỉ định).\n(Học sinh nêu tình huống hợp lí, viết đúng biểu thức và phân tích đúng một trường hợp là đạt.)",
    },
  ],
};

export default extra;
