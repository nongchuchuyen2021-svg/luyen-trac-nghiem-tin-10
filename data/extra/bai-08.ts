import type { LessonExtra } from "@/lib/types";

// Bài 8. Mạng máy tính trong cuộc sống hiện đại
const extra: LessonExtra = {
  tf: [
    {
      id: "b8-tf1",
      context:
        "Phòng Tin học của trường có 25 máy tính nối với nhau và nối với máy chủ của trường qua bộ chuyển mạch (switch), tất cả dùng chung một máy in. Ngoài ra nhà trường lắp một đường Internet cáp quang, phát Wi-Fi cho giáo viên toàn trường. Trong giờ thực hành, học sinh mở được cả tài liệu trên máy chủ của trường lẫn trang web luyện tập trên Internet.",
      statements: [
        {
          text: "Hệ thống 25 máy tính nối nhau trong phòng và trong khuôn viên trường là một mạng LAN (mạng cục bộ).",
          answer: true,
          explain: "Phạm vi hẹp trong một toà nhà/khuôn viên → mạng cục bộ LAN.",
        },
        {
          text: "Việc 25 máy dùng chung một máy in thể hiện lợi ích chia sẻ tài nguyên của mạng máy tính.",
          answer: true,
          explain: "Dùng chung thiết bị, dữ liệu, phần mềm là lợi ích cốt lõi của việc nối mạng.",
        },
        {
          text: "Khi học sinh mở trang web luyện tập, dữ liệu chỉ chạy quanh quẩn trong phòng máy, không ra khỏi trường.",
          answer: false,
          explain: "Trang web nằm trên máy chủ ngoài Internet — dữ liệu đi qua đường cáp quang ra mạng toàn cầu.",
        },
        {
          text: "Internet được gọi là \"mạng của các mạng\" vì kết nối vô số mạng LAN, WAN trên toàn thế giới.",
          answer: true,
          explain: "Mạng của trường chỉ là một trong hàng triệu mạng con hợp thành Internet.",
        },
      ],
    },
    {
      id: "b8-tf2",
      context:
        "Nhóm của bạn Yến làm bài thuyết trình chung. Thay vì chép file qua USB cho nhau như trước, cả nhóm tạo một tài liệu trên Google Docs: tối đến, bốn thành viên ở bốn nhà cùng mở tài liệu, người soạn nội dung, người chèn ảnh, người sửa chính tả — con trỏ của ai đang gõ ở đâu đều nhìn thấy rõ. Làm xong, nhóm chia sẻ link cho cô giáo góp ý trực tiếp lên bài.",
      statements: [
        {
          text: "Google Docs là một dịch vụ đám mây: tài liệu lưu trên máy chủ của nhà cung cấp, không nằm trên máy của riêng bạn nào.",
          answer: true,
          explain: "Người dùng truy cập tài liệu trên \"đám mây\" qua Internet từ bất kì thiết bị nào.",
        },
        {
          text: "Bốn thành viên cùng sửa một tài liệu tại cùng thời điểm là ví dụ về cộng tác trực tuyến thời gian thực.",
          answer: true,
          explain: "Đồng chỉnh sửa realtime là thế mạnh của bộ công cụ văn phòng đám mây.",
        },
        {
          text: "Nếu máy tính của Yến hỏng ổ cứng, tài liệu chung của nhóm cũng mất theo.",
          answer: false,
          explain: "Tài liệu nằm trên đám mây gắn với tài khoản — hỏng máy cá nhân không ảnh hưởng.",
        },
        {
          text: "Muốn dùng cách làm việc này, các thành viên bắt buộc phải ngồi cùng một phòng, chung một mạng LAN.",
          answer: false,
          explain: "Chỉ cần mỗi người có Internet — bốn nhà khác nhau vẫn cộng tác bình thường.",
        },
      ],
    },
    {
      id: "b8-tf3",
      context:
        "Xã của bạn Sình triển khai mô hình \"du lịch cộng đồng thông minh\": homestay lắp Wi-Fi cho khách, các điểm check-in gắn mã QR giới thiệu lịch sử bản làng bằng ba thứ tiếng, còn hợp tác xã thì lắp cảm biến đo nhiệt độ – độ ẩm ở kho bảo quản miến dong, số liệu tự động báo về điện thoại của chủ nhiệm. Nhờ vậy khách đến đông hơn hẳn và miến ít bị hỏng do bảo quản sai.",
      statements: [
        {
          text: "Hệ thống cảm biến kho tự gửi số liệu về điện thoại là một ứng dụng của IoT (Internet vạn vật).",
          answer: true,
          explain: "Thiết bị cảm biến kết nối mạng, tự thu thập và truyền dữ liệu — đúng mô hình IoT.",
        },
        {
          text: "Mã QR tại điểm check-in giúp khách truy cập nội dung giới thiệu qua Internet bằng điện thoại.",
          answer: true,
          explain: "QR chứa đường dẫn — quét mã là mở trang thông tin trên mạng.",
        },
        {
          text: "Câu chuyện cho thấy mạng máy tính chỉ phục vụ giải trí, không giúp gì cho phát triển kinh tế địa phương.",
          answer: false,
          explain: "Du lịch đông khách hơn, nông sản ít hỏng hơn — lợi ích kinh tế rõ rệt từ kết nối mạng.",
        },
        {
          text: "Wi-Fi ở homestay truyền dữ liệu bằng sóng vô tuyến, không cần dây nối đến từng điện thoại của khách.",
          answer: true,
          explain: "Wi-Fi là kết nối không dây tầm ngắn dùng sóng vô tuyến.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b8-es1",
      q: "Phân biệt mạng LAN và Internet về phạm vi và quy mô. Mạng của trường em thuộc loại nào? Nêu 3 lợi ích cụ thể mà mạng máy tính mang lại cho việc dạy và học ở trường.",
      answer:
        "- LAN: mạng cục bộ, phạm vi hẹp (phòng, toà nhà, khuôn viên trường), số thiết bị hạn chế, thường do một đơn vị tự quản lí. Internet: mạng toàn cầu kết nối hàng tỉ thiết bị, là \"mạng của các mạng\", dùng bộ giao thức chung TCP/IP.\n- Mạng nội bộ của trường là LAN; trường kết nối ra Internet qua nhà cung cấp dịch vụ.\n- Lợi ích (gợi ý): dùng chung máy in, tài liệu trên máy chủ; học liệu và bài kiểm tra trực tuyến; tra cứu thông tin phục vụ bài học; họp/học từ xa khi cần; quản lí điểm, thông báo cho phụ huynh qua mạng.",
    },
    {
      id: "b8-es2",
      q: "Điện toán đám mây là gì? Kể 2 dịch vụ đám mây mà em (hoặc gia đình em) đang dùng và phân tích một lợi ích, một điểm cần lưu ý khi sử dụng.",
      answer:
        "- Điện toán đám mây: cung cấp tài nguyên tính toán (lưu trữ, phần mềm, máy chủ...) như dịch vụ qua Internet — dùng đến đâu trả đến đó, không cần sở hữu hạ tầng.\n- Ví dụ: Google Drive/Photos lưu ảnh và tài liệu; Zalo/Gmail lưu tin nhắn, thư trên máy chủ; Google Docs soạn thảo trực tuyến.\n- Lợi ích: truy cập mọi lúc mọi nơi trên nhiều thiết bị, không lo hỏng máy mất dữ liệu, dễ chia sẻ cộng tác.\n- Lưu ý: phụ thuộc kết nối Internet; cần bảo vệ tài khoản (mật khẩu mạnh, 2FA) vì mất tài khoản là mất quyền truy cập dữ liệu; cân nhắc quyền riêng tư khi lưu dữ liệu nhạy cảm.",
    },
  ],
};

export default extra;
