import type { LessonExtra } from "@/lib/types";

// Bài 2. Vai trò của thiết bị thông minh và tin học đối với xã hội
const extra: LessonExtra = {
  tf: [
    {
      id: "b2-tf1",
      context:
        "Nhà bà Nội của bạn Quỳnh mới lắp bộ camera an ninh. Buổi tối, cả nhà ngồi xem lại: camera tự bật đèn hồng ngoại khi trời tối, tự gửi thông báo vào điện thoại của bố khi phát hiện người lạ vào sân, và bố có thể mở ứng dụng xem hình ảnh trực tiếp dù đang đi công tác ở xa. Bà Nội tấm tắc: \"Cái máy này khôn thật, biết tự làm việc mà chẳng cần ai bấm nút!\"",
      statements: [
        {
          text: "Camera an ninh trong câu chuyện là một thiết bị thông minh vì hoạt động tự chủ nhờ phần mềm và có kết nối mạng.",
          answer: true,
          explain:
            "Tự nhận biết (cảm biến), tự quyết định (phần mềm), kết nối từ xa — đủ đặc điểm thiết bị thông minh.",
        },
        {
          text: "Việc camera tự phát hiện người lạ là ứng dụng của trí tuệ nhân tạo (nhận dạng hình ảnh).",
          answer: true,
          explain: "Phân biệt người/vật, người quen/lạ là bài toán nhận dạng của AI.",
        },
        {
          text: "Bố của Quỳnh xem được hình ảnh khi đi công tác là nhờ camera kết nối Internet.",
          answer: true,
          explain: "Dữ liệu hình ảnh truyền qua Internet đến ứng dụng trên điện thoại.",
        },
        {
          text: "Mọi thiết bị chạy bằng điện trong nhà (quạt cơ, bóng đèn sợi đốt) đều được coi là thiết bị thông minh.",
          answer: false,
          explain:
            "Thiết bị thông minh phải có bộ xử lí và phần mềm điều khiển, hoạt động tự chủ — quạt cơ, đèn sợi đốt không có.",
        },
      ],
    },
    {
      id: "b2-tf2",
      context:
        "Trong buổi hướng nghiệp, cô giáo kể: trạm y tế xã giờ đây có thể gửi ảnh X-quang lên bệnh viện tỉnh để bác sĩ tuyến trên hội chẩn từ xa; nông dân xem dự báo thời tiết và giá nông sản trên điện thoại; còn Đoàn xã thì phát trực tiếp phiên chợ đêm để bán hàng cho khách khắp cả nước. Cô kết luận: \"Tin học đang thay đổi cuộc sống ở chính quê hương mình, không phải chuyện xa xôi.\"",
      statements: [
        {
          text: "Hội chẩn từ xa qua ảnh X-quang là đóng góp của tin học trong lĩnh vực y tế.",
          answer: true,
          explain: "Khám chữa bệnh từ xa (telemedicine) là ứng dụng tiêu biểu của tin học trong y tế.",
        },
        {
          text: "Việc bán nông sản qua livestream là một hình thức thương mại điện tử.",
          answer: true,
          explain: "Mua bán qua mạng — dù qua sàn hay livestream — đều thuộc thương mại điện tử.",
        },
        {
          text: "Các ứng dụng trên chỉ hoạt động được ở thành phố lớn, vùng cao không thể áp dụng.",
          answer: false,
          explain:
            "Chính câu chuyện ở xã đã cho thấy điều ngược lại — chỉ cần thiết bị và kết nối mạng.",
        },
        {
          text: "Tin học đã thay thế hoàn toàn bác sĩ và nông dân trong các công việc kể trên.",
          answer: false,
          explain:
            "Tin học là công cụ hỗ trợ; con người vẫn ra quyết định chuyên môn và chịu trách nhiệm.",
        },
      ],
    },
    {
      id: "b2-tf3",
      context:
        "Bạn Tú được bố mua cho chiếc đồng hồ thông minh để tiện liên lạc. Đồng hồ đếm số bước chân mỗi ngày, đo nhịp tim khi chạy thể dục, rung nhắc nhở khi Tú ngồi học quá lâu không vận động, và tự đồng bộ toàn bộ số liệu sang điện thoại của mẹ. Thấy hay quá, Tú đeo cả ngày lẫn đêm và khoe số liệu của mình lên nhóm lớp mỗi tối.",
      statements: [
        {
          text: "Đồng hồ của Tú thu thập dữ liệu bằng các cảm biến (đếm bước, đo nhịp tim).",
          answer: true,
          explain: "Cảm biến gia tốc, cảm biến quang đo nhịp tim là 'giác quan' của thiết bị thông minh.",
        },
        {
          text: "Việc số liệu tự chuyển sang điện thoại của mẹ thể hiện khả năng kết nối của thiết bị thông minh.",
          answer: true,
          explain: "Đồng bộ dữ liệu qua Bluetooth/Internet là đặc điểm kết nối tiêu biểu.",
        },
        {
          text: "Chia sẻ công khai toàn bộ số liệu sức khoẻ và vị trí lên nhóm lớp mỗi ngày là thói quen an toàn, không có rủi ro gì.",
          answer: false,
          explain:
            "Dữ liệu sức khoẻ, vị trí là thông tin cá nhân — công khai thường xuyên có thể bị kẻ xấu lợi dụng.",
        },
        {
          text: "Sử dụng thiết bị thông minh hợp lí cũng cần chú ý sức khoẻ, ví dụ không lạm dụng liên tục cả ngày đêm.",
          answer: true,
          explain: "Dùng thiết bị có chừng mực là một phần của văn hoá số và bảo vệ sức khoẻ.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b2-es1",
      q: "Thiết bị thông minh là gì? Kể tên 3 thiết bị thông minh mà em biết trong thực tế và chỉ ra ở mỗi thiết bị: nó tự chủ ở điểm nào và kết nối với gì?",
      answer:
        "- Thiết bị thông minh: thiết bị điện tử có bộ xử lí và phần mềm, hoạt động tự chủ ở mức độ nhất định, thường có khả năng kết nối mạng/thiết bị khác.\n- Ví dụ: (1) Điện thoại thông minh — tự nhận diện khuôn mặt để mở khoá, kết nối Internet/Bluetooth; (2) Robot hút bụi — tự dò đường, tránh vật cản, tự về trạm sạc, kết nối Wi-Fi để điều khiển qua ứng dụng; (3) Camera an ninh — tự phát hiện chuyển động và gửi cảnh báo, kết nối Internet để xem từ xa.\n(Học sinh nêu thiết bị khác đúng đặc điểm vẫn được điểm.)",
    },
    {
      id: "b2-es2",
      q: "Trình bày các đóng góp chính của tin học đối với xã hội. Liên hệ: tin học đã thay đổi việc học tập của bản thân em như thế nào?",
      answer:
        "- Đóng góp: quản lí, điều hành hiệu quả (chính phủ điện tử, quản lí trường học); phát triển kinh tế (thương mại điện tử, ngân hàng số, sản xuất tự động); y tế (bệnh án điện tử, khám từ xa); giáo dục (học trực tuyến, kho học liệu); giải trí, truyền thông; là động lực của cách mạng công nghiệp 4.0 cùng AI, IoT, dữ liệu lớn.\n- Liên hệ (gợi ý): tra cứu tài liệu trên Internet, học qua video bài giảng, làm bài trắc nghiệm trực tuyến, nộp bài qua mạng, trao đổi nhóm qua Zalo/Teams... — học mọi lúc mọi nơi, nguồn học liệu phong phú hơn.",
    },
  ],
};

export default extra;
