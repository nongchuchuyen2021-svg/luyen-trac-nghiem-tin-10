import type { LessonExtra } from "@/lib/types";

// Bài 6. Dữ liệu âm thanh và hình ảnh
const extra: LessonExtra = {
  tf: [
    {
      id: "b6-tf1",
      context:
        "Đội văn nghệ của trường thu âm bài hát dự thi bằng điện thoại. Bạn Hằng phụ trách kĩ thuật băn khoăn giữa hai chế độ thu: chế độ \"tiêu chuẩn\" (tần số lấy mẫu 44,1 kHz) và chế độ \"tiết kiệm\" (11 kHz). Thầy phụ trách khuyên: \"Bài dự thi thì thu chế độ tiêu chuẩn cho trung thực, còn ghi âm lời nhắc lịch tập thì chế độ tiết kiệm là đủ rồi.\"",
      statements: [
        {
          text: "Tần số lấy mẫu 44,1 kHz nghĩa là mỗi giây tín hiệu âm thanh được đo 44 100 lần.",
          answer: true,
          explain: "kHz = nghìn lần mỗi giây — đây chính là ý nghĩa của tần số lấy mẫu.",
        },
        {
          text: "Thu ở 44,1 kHz cho âm thanh trung thực hơn thu ở 11 kHz.",
          answer: true,
          explain: "Lấy mẫu dày hơn thì mô tả sóng âm chính xác hơn, gần âm gốc hơn.",
        },
        {
          text: "Tệp thu ở chế độ tiêu chuẩn sẽ nhẹ hơn tệp thu ở chế độ tiết kiệm với cùng thời lượng.",
          answer: false,
          explain: "Nhiều mẫu hơn = nhiều dữ liệu hơn → tệp NẶNG hơn, không phải nhẹ hơn.",
        },
        {
          text: "Lời khuyên của thầy thể hiện nguyên tắc: chọn chất lượng số hoá phù hợp mục đích sử dụng.",
          answer: true,
          explain: "Cân bằng giữa chất lượng và dung lượng là tư duy đúng khi số hoá dữ liệu.",
        },
      ],
    },
    {
      id: "b6-tf2",
      context:
        "Bạn Tùng chụp ảnh tập thể lớp bằng máy ảnh 24 megapixel để in tấm băng rôn kỉ niệm 20/11 khổ lớn treo trước cổng trường. Khi gửi ảnh qua Zalo cho thợ in, Tùng chọn nhầm chế độ \"gửi nhanh\" khiến ảnh bị nén xuống còn rất nhỏ. Thợ in gọi điện: \"Ảnh này in khổ lớn sẽ vỡ hết, em gửi lại bản gốc qua email hoặc USB nhé!\"",
      statements: [
        {
          text: "Ảnh 24 megapixel nghĩa là ảnh gồm khoảng 24 triệu điểm ảnh.",
          answer: true,
          explain: "Megapixel = triệu pixel — số điểm ảnh của bức ảnh.",
        },
        {
          text: "Ảnh bị nén nhỏ khi phóng to để in khổ lớn sẽ bị vỡ hạt, hiện rõ từng ô vuông.",
          answer: true,
          explain: "Ảnh bitmap ít điểm ảnh khi phóng to sẽ lộ răng cưa — đúng như thợ in cảnh báo.",
        },
        {
          text: "Việc \"gửi nhanh\" làm ảnh nhẹ đi là một ứng dụng của nén dữ liệu.",
          answer: true,
          explain: "Ứng dụng nén (giảm độ phân giải/chất lượng) để truyền nhanh, tốn ít băng thông.",
        },
        {
          text: "Chỉ cần dùng phần mềm phóng to ảnh đã nén lên gấp 10 lần là khôi phục được đầy đủ chi tiết như ảnh gốc.",
          answer: false,
          explain:
            "Chi tiết đã mất khi nén (nén mất mát) không thể khôi phục nguyên vẹn — phóng to không tạo lại được thông tin đã bỏ đi.",
        },
      ],
    },
    {
      id: "b6-tf3",
      context:
        "Giờ Tin học, cô yêu cầu ước tính dung lượng một bức ảnh màn hình máy tính độ phân giải 1000 × 600, hệ màu RGB với mỗi pixel 3 byte, chưa nén. Bạn Nhi tính nhanh ra kết quả rồi so sánh với tệp JPG cùng ảnh đó trên máy chỉ nặng khoảng 200 KB. \"Chênh nhau gần chục lần, hoá ra JPG 'phù phép' giỏi thật!\" — Nhi thốt lên.",
      statements: [
        {
          text: "Dung lượng ảnh chưa nén là 1000 × 600 × 3 = 1 800 000 byte, tức khoảng 1,8 MB.",
          answer: true,
          explain: "Số pixel nhân số byte mỗi pixel — công thức ước tính cơ bản.",
        },
        {
          text: "Trong hệ RGB, mỗi pixel 3 byte tương ứng ba kênh màu Đỏ, Lục, Lam, mỗi kênh 1 byte.",
          answer: true,
          explain: "Mỗi kênh 0-255 (1 byte); phối ba kênh tạo ra khoảng 16,7 triệu màu.",
        },
        {
          text: "Tệp JPG nhỏ hơn gần chục lần vì JPG là định dạng ảnh nén.",
          answer: true,
          explain: "JPEG nén mất mát dựa trên đặc điểm mắt người, giảm mạnh dung lượng.",
        },
        {
          text: "Vì đã bị nén nên tệp JPG không còn là dữ liệu dạng bit nữa.",
          answer: false,
          explain: "Mọi tệp trong máy tính, nén hay không, đều là dãy bit — nén chỉ thay đổi cách biểu diễn.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b6-es1",
      q: "Trình bày ngắn gọn quá trình số hoá âm thanh. Hai yếu tố nào quyết định chất lượng và dung lượng của tệp âm thanh số?",
      answer:
        "- Quá trình: sóng âm liên tục được LẤY MẪU đều đặn theo thời gian (đo biên độ tại từng thời điểm); mỗi giá trị mẫu được LƯỢNG TỬ HOÁ và biểu diễn bằng một số nhị phân với số bit nhất định; dãy số thu được chính là dữ liệu âm thanh số.\n- Hai yếu tố: (1) tần số lấy mẫu (số mẫu/giây — càng cao càng trung thực); (2) độ sâu bit (số bit cho mỗi mẫu — càng nhiều thì mức âm càng mịn). Cả hai tăng thì chất lượng tăng nhưng dung lượng tệp cũng tăng theo.",
    },
    {
      id: "b6-es2",
      q: "Ảnh số được biểu diễn trong máy tính như thế nào? Giải thích vì sao khi phóng to quá mức, ảnh chụp bị \"vỡ\", còn chữ trong tệp văn bản thì phóng to cỡ nào cũng nét.",
      answer:
        "- Ảnh số (bitmap) là lưới các điểm ảnh; mỗi pixel lưu giá trị màu (thường 3 byte RGB). Độ phân giải = số pixel ngang × dọc.\n- Ảnh chụp vỡ khi phóng to vì số pixel là cố định — phóng to chỉ kéo giãn các ô màu có sẵn, lộ rõ răng cưa, không sinh thêm chi tiết mới.\n- Chữ trên màn hình được vẽ lại từ mô tả toán học của phông chữ (dạng vector/đường cong): mỗi lần phóng to, máy tính re-vẽ nét chữ ở kích thước mới nên luôn sắc nét.",
    },
  ],
};

export default extra;
