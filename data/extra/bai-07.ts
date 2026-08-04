import type { LessonExtra } from "@/lib/types";

// Bài 7. Thực hành sử dụng thiết bị số thông dụng
const extra: LessonExtra = {
  tf: [
    {
      id: "b7-tf1",
      context:
        "Chuẩn bị cho chuyến trải nghiệm hái chè ở đồi chè của hợp tác xã, lớp 10A3 phân công bạn Phương chụp ảnh tư liệu bằng điện thoại. Tối hôm trước, Phương kiểm tra máy: pin còn 40%, bộ nhớ báo gần đầy. Phương bèn sạc pin, xoá bớt video cũ đã sao lưu lên Google Drive, và bật chế độ tiết kiệm pin. Sáng hôm sau, máy của Phương \"sống khoẻ\" suốt chuyến đi trong khi nhiều bạn hết pin từ giữa trưa.",
      statements: [
        {
          text: "Xoá các video đã sao lưu lên Google Drive để giải phóng bộ nhớ máy là cách làm hợp lí.",
          answer: true,
          explain: "Dữ liệu đã có bản sao trên đám mây — xoá bản trên máy không làm mất dữ liệu.",
        },
        {
          text: "Chế độ tiết kiệm pin giúp máy hoạt động lâu hơn bằng cách giảm các hoạt động tiêu tốn năng lượng.",
          answer: true,
          explain: "Giảm độ sáng, hạn chế ứng dụng chạy ngầm... giúp kéo dài thời gian dùng pin.",
        },
        {
          text: "Google Drive lưu video của Phương ngay trong bộ nhớ vật lí của chiếc điện thoại.",
          answer: false,
          explain: "Dịch vụ đám mây lưu dữ liệu trên máy chủ của nhà cung cấp, truy cập qua Internet.",
        },
        {
          text: "Sự chuẩn bị của Phương thể hiện kĩ năng sử dụng thiết bị số hiệu quả.",
          answer: true,
          explain: "Kiểm tra pin, bộ nhớ, sao lưu trước khi dùng là thói quen tốt với thiết bị số.",
        },
      ],
    },
    {
      id: "b7-tf2",
      context:
        "Sau chuyến trải nghiệm, Phương cần chuyển 300 tấm ảnh (khoảng 1,2 GB) từ điện thoại sang máy tính của lớp để dựng video. Bạn Đạt bảo: \"Gửi hết qua Zalo đi cho tiện!\" Bạn Minh lại đề xuất cắm cáp USB chép thẳng sang máy tính. Cô giáo gợi ý thêm phương án thứ ba: tải cả thư mục lên Google Drive rồi máy tính tải về.",
      statements: [
        {
          text: "Cắm cáp USB chép trực tiếp thường là cách nhanh và giữ nguyên chất lượng ảnh gốc.",
          answer: true,
          explain: "Truyền qua cáp không phụ thuộc tốc độ mạng và không bị nén như gửi qua ứng dụng chat.",
        },
        {
          text: "Gửi ảnh qua ứng dụng chat ở chế độ mặc định có thể làm ảnh bị nén, giảm chất lượng.",
          answer: true,
          explain: "Nhiều ứng dụng tự nén ảnh để gửi nhanh — không phù hợp khi cần ảnh gốc để dựng video.",
        },
        {
          text: "Phương án dùng Google Drive yêu cầu cả điện thoại và máy tính đều có kết nối Internet.",
          answer: true,
          explain: "Đám mây trung chuyển qua Internet — không có mạng thì không tải lên/xuống được.",
        },
        {
          text: "Ba phương án trên cho tốc độ và chất lượng hoàn toàn giống nhau nên chọn cách nào cũng không khác gì.",
          answer: false,
          explain: "Mỗi cách khác nhau về tốc độ, chất lượng, điều kiện (cáp, mạng) — cần chọn theo tình huống.",
        },
      ],
    },
    {
      id: "b7-tf3",
      context:
        "Điện thoại của bạn Hải dạo này chạy chậm hẳn và hay hiện quảng cáo lạ. Kiểm tra lại, Hải nhớ ra tuần trước có cài một trò chơi \"phiên bản mod full tiền\" từ đường link trên mạng xã hội thay vì tải từ CH Play. Anh trai Hải khuyên: gỡ ngay ứng dụng đó, đổi các mật khẩu quan trọng, quét lại máy và từ nay chỉ cài ứng dụng từ kho chính thức.",
      statements: [
        {
          text: "Cài ứng dụng từ đường link trôi nổi thay vì kho chính thức là nguyên nhân rất có thể khiến máy nhiễm phần mềm độc hại.",
          answer: true,
          explain: "Bản \"mod\" ngoài kho thường bị cài kèm mã độc, quảng cáo — nguồn lây phổ biến nhất.",
        },
        {
          text: "Kho ứng dụng chính thức (CH Play, App Store) có quy trình kiểm duyệt nên an toàn hơn nguồn trôi nổi.",
          answer: true,
          explain: "Kiểm duyệt không tuyệt đối nhưng loại bỏ phần lớn ứng dụng độc hại.",
        },
        {
          text: "Chỉ cần gỡ trò chơi đó là đủ, không cần đổi mật khẩu vì mật khẩu lưu trong đầu Hải chứ không ở trong máy.",
          answer: false,
          explain:
            "Mã độc có thể đã ghi lại thao tác gõ phím, đánh cắp phiên đăng nhập — đổi mật khẩu là bước cần thiết.",
        },
        {
          text: "Lời khuyên của anh trai Hải là quy trình xử lí hợp lí khi nghi ngờ máy nhiễm mã độc.",
          answer: true,
          explain: "Gỡ nguồn nghi vấn → đổi mật khẩu → quét máy → phòng ngừa lâu dài — đúng trình tự.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b7-es1",
      q: "Em hãy nêu ít nhất 4 thói quen sử dụng điện thoại thông minh an toàn và hiệu quả mà học sinh nên có. Giải thích ngắn gọn lợi ích của từng thói quen.",
      answer:
        "Gợi ý: (1) Đặt khoá màn hình (PIN/vân tay) — bảo vệ dữ liệu khi mất máy; (2) Chỉ cài ứng dụng từ kho chính thức — tránh mã độc; (3) Sao lưu ảnh, danh bạ lên đám mây định kì — không mất dữ liệu khi hỏng/mất máy; (4) Cập nhật hệ điều hành và ứng dụng — vá lỗ hổng bảo mật; (5) Quản lí thời gian dùng máy, không dùng khuya — bảo vệ sức khoẻ, tập trung học tập; (6) Cẩn trọng với Wi-Fi công cộng khi đăng nhập tài khoản quan trọng.\n(Nêu đủ 4 thói quen hợp lí kèm lợi ích là đạt.)",
    },
    {
      id: "b7-es2",
      q: "Lớp em cần chuyển một thư mục ảnh dung lượng lớn từ điện thoại sang máy tính. Hãy nêu 3 cách thực hiện, phân tích ưu — nhược điểm của mỗi cách và cho biết em chọn cách nào trong điều kiện phòng máy của trường.",
      answer:
        "- Cách 1: Cáp USB — Ưu: nhanh, ổn định, giữ nguyên chất lượng, không cần mạng; Nhược: cần có cáp phù hợp, máy tính nhận thiết bị.\n- Cách 2: Lưu trữ đám mây (Google Drive...) — Ưu: không cần cáp, chia sẻ cho nhiều người; Nhược: phụ thuộc tốc độ Internet, dung lượng miễn phí có hạn, tải 2 lần (lên rồi xuống).\n- Cách 3: Gửi qua ứng dụng chat (Zalo...) — Ưu: quen thuộc, tiện với vài tệp nhỏ; Nhược: ảnh thường bị nén giảm chất lượng, gửi nhiều tệp bất tiện.\n- Lựa chọn (gợi ý): trong phòng máy có sẵn cáp thì chọn cách 1 vì nhanh và giữ ảnh gốc; nếu không có cáp mà mạng tốt thì dùng cách 2 (chọn chế độ giữ nguyên chất lượng).",
    },
  ],
};

export default extra;
