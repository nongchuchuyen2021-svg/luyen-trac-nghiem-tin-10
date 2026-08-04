import type { LessonExtra } from "@/lib/types";

// Bài 10. Thực hành khai thác tài nguyên trên Internet
const extra: LessonExtra = {
  tf: [
    {
      id: "b10-tf1",
      context:
        "Cô giáo Lịch sử giao bài tìm hiểu về chiến thắng Điện Biên Phủ. Bạn An gõ vào Google đúng một chữ \"điện biên\" và nhận về hàng chục triệu kết quả lẫn lộn cả tin du lịch, giá vé máy bay. Bạn Bình thì gõ: \"chiến dịch Điện Biên Phủ\" 1954 site:baotanglichsu.vn — kết quả ra gọn gàng toàn trang sử liệu. An tròn mắt: \"Cậu học phép thuật tìm kiếm ở đâu thế?\"",
      statements: [
        {
          text: "Đặt cụm từ trong dấu ngoặc kép giúp tìm chính xác nguyên cụm \"chiến dịch Điện Biên Phủ\".",
          answer: true,
          explain: "Ngoặc kép yêu cầu kết quả chứa đúng cụm từ theo thứ tự — lọc bớt kết quả tản mạn.",
        },
        {
          text: "Cú pháp site:baotanglichsu.vn giới hạn kết quả trong đúng trang web đó.",
          answer: true,
          explain: "Toán tử site: là bộ lọc phạm vi theo tên miền.",
        },
        {
          text: "Kết quả của An nhiều gấp triệu lần của Bình chứng tỏ cách tìm của An hiệu quả hơn.",
          answer: false,
          explain: "Nhiều kết quả không đồng nghĩa hữu ích — tìm kiếm tốt là ra đúng thứ cần, không phải ra nhiều.",
        },
        {
          text: "Kĩ năng chọn từ khoá cụ thể, thêm bộ lọc là yếu tố quyết định chất lượng tìm kiếm.",
          answer: true,
          explain: "Cùng một máy tìm kiếm, người ra lệnh khéo sẽ nhận kết quả giá trị hơn hẳn.",
        },
      ],
    },
    {
      id: "b10-tf2",
      context:
        "Làm bài thuyết trình về tác hại của thuốc lá điện tử, bạn Cường tìm được hai nguồn: một bài đăng trên trang cá nhân không rõ tác giả, tiêu đề giật gân \"SỰ THẬT KINH HOÀNG ít ai biết\"; và một bài trên trang của Bộ Y tế có số liệu khảo sát, ghi rõ ngày đăng và đơn vị thực hiện. Cường phân vân vì bài giật gân đọc \"hấp dẫn\" hơn nhiều.",
      statements: [
        {
          text: "Bài trên trang của Bộ Y tế đáng tin cậy hơn vì có nguồn gốc rõ ràng, số liệu kiểm chứng được.",
          answer: true,
          explain: "Cơ quan chuyên môn, tác giả và thời gian rõ ràng là tiêu chí hàng đầu của độ tin cậy.",
        },
        {
          text: "Tiêu đề giật gân, không rõ tác giả là dấu hiệu cần thận trọng với chất lượng thông tin.",
          answer: true,
          explain: "Giật gân câu view và ẩn danh là hai dấu hiệu điển hình của nguồn kém tin cậy.",
        },
        {
          text: "Bài nào đọc hấp dẫn hơn thì thông tin trong đó chính xác hơn.",
          answer: false,
          explain: "Độ hấp dẫn thuộc về cách viết; độ chính xác thuộc về nguồn và bằng chứng — hai chuyện khác nhau.",
        },
        {
          text: "Khi trích số liệu vào bài thuyết trình, Cường nên ghi rõ nguồn (tên trang, thời điểm truy cập).",
          answer: true,
          explain: "Dẫn nguồn giúp người nghe kiểm chứng và thể hiện sự tôn trọng tác giả.",
        },
      ],
    },
    {
      id: "b10-tf3",
      context:
        "Nhóm bạn Dinh làm dự án giới thiệu thác Nà Đăng quê mình. Cả nhóm phân công: Dinh tìm tư liệu chữ và ảnh trên mạng, lưu tất cả vào một thư mục Google Drive chia sẻ cho cả nhóm; Hoa tải mẫu trình chiếu bằng cú pháp filetype:pptx; còn Sáu phụ trách kiểm tra lại giấy phép sử dụng của từng tấm ảnh trước khi đưa vào bài, ưu tiên ảnh nhóm tự chụp.",
      statements: [
        {
          text: "Cú pháp filetype:pptx giúp Hoa tìm đúng các tệp trình chiếu PowerPoint.",
          answer: true,
          explain: "filetype: lọc kết quả theo định dạng tệp mong muốn.",
        },
        {
          text: "Lưu tư liệu vào thư mục Google Drive chia sẻ giúp cả nhóm cùng truy cập và bổ sung tài nguyên.",
          answer: true,
          explain: "Thư mục đám mây dùng chung là cách tổ chức tư liệu nhóm hiệu quả.",
        },
        {
          text: "Mọi ảnh tìm thấy trên Internet đều được tự do sử dụng trong bài dự án mà không cần quan tâm giấy phép.",
          answer: false,
          explain: "Ảnh trên mạng vẫn có bản quyền — cần dùng ảnh giấy phép mở hoặc xin phép, và luôn ghi nguồn.",
        },
        {
          text: "Ưu tiên dùng ảnh nhóm tự chụp là lựa chọn vừa an toàn về bản quyền vừa tăng tính độc đáo cho dự án.",
          answer: true,
          explain: "Ảnh tự chụp thuộc quyền của nhóm — không lo vi phạm và không trùng với ai.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b10-es1",
      q: "Trình bày ít nhất 4 kĩ thuật tìm kiếm nâng cao trên máy tìm kiếm và cho ví dụ cụ thể với chủ đề \"biến đổi khí hậu\".",
      answer:
        '- Ngoặc kép tìm nguyên cụm: "biến đổi khí hậu ở Việt Nam".\n- site: giới hạn trang: biến đổi khí hậu site:monre.gov.vn (trang Bộ TN&MT).\n- Dấu trừ loại từ: biến đổi khí hậu -phim (loại kết quả về phim ảnh).\n- filetype: tìm theo định dạng: biến đổi khí hậu filetype:pdf (tìm báo cáo PDF).\n- Kết hợp: "biến đổi khí hậu" báo cáo 2025 filetype:pdf site:gov.vn.\n- Ngoài ra: tìm bằng hình ảnh, giới hạn thời gian đăng trong công cụ tìm kiếm.',
    },
    {
      id: "b10-es2",
      q: "Nêu các tiêu chí đánh giá độ tin cậy của thông tin trên Internet. Vận dụng: em sẽ kiểm tra như thế nào trước khi chia sẻ một bài viết \"trường X sẽ cho nghỉ học ngày mai\" lan truyền trên mạng xã hội?",
      answer:
        "- Tiêu chí: nguồn đăng (cơ quan chính thức hay trang cá nhân?); tác giả có danh tính, chuyên môn không; thời gian đăng (tin cũ bị đào lại?); có bằng chứng, số liệu kiểm chứng được không; nhiều nguồn độc lập có cùng đưa tin không; mục đích bài viết (thông tin hay câu view, bán hàng?).\n- Vận dụng: kiểm tra trang đăng có phải kênh chính thức của trường/Sở GD không; xem website hoặc fanpage chính thức của trường có thông báo không; hỏi trực tiếp giáo viên chủ nhiệm; xem ảnh chụp văn bản (nếu có) có dấu, chữ kí, số văn bản hợp lệ không. Chưa xác minh được thì KHÔNG chia sẻ — tránh tiếp tay lan truyền tin giả.",
    },
  ],
};

export default extra;
