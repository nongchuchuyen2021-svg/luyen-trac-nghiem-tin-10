import type { LessonExtra } from "@/lib/types";

// Bài 34. Nghề phát triển phần mềm
const extra: LessonExtra = {
  tf: [
    {
      id: "b34-tf1",
      context:
        "Anh Thắng — cựu học sinh của trường, hiện làm kĩ sư phần mềm — chia sẻ về dự án gần nhất: công ty anh làm ứng dụng đặt lịch khám cho một bệnh viện. Nhóm có 6 người: một người phân tích nghiệp vụ ngồi với bác sĩ để hiểu quy trình khám, hai người viết giao diện, hai người viết phần xử lí dữ liệu, một người chuyên tìm lỗi. Anh nói: \"Code chỉ chiếm chừng một nửa thời gian thôi các em ạ.\"",
      statements: [
        {
          text: "Phát triển phần mềm là công việc của cả một nhóm với nhiều vai trò khác nhau, không chỉ có lập trình viên.",
          answer: true,
          explain: "Phân tích nghiệp vụ, thiết kế, lập trình, kiểm thử, quản lí dự án — mỗi vai một việc.",
        },
        {
          text: "Người chuyên tìm lỗi trong nhóm đảm nhiệm công việc kiểm thử (tester).",
          answer: true,
          explain: "Tester thiết kế tình huống thử để phát hiện lỗi trước khi phần mềm đến tay người dùng.",
        },
        {
          text: "Việc ngồi với bác sĩ để hiểu quy trình khám thuộc bước xác định yêu cầu của quy trình phát triển phần mềm.",
          answer: true,
          explain: "Hiểu đúng nhu cầu người dùng là bước đầu tiên và quan trọng nhất.",
        },
        {
          text: "Theo chia sẻ của anh Thắng, viết code chiếm gần như toàn bộ thời gian làm phần mềm.",
          answer: false,
          explain:
            "Anh nói code chỉ chừng một nửa — phần còn lại là phân tích, thiết kế, kiểm thử, họp bàn, sửa theo phản hồi.",
        },
      ],
    },
    {
      id: "b34-tf2",
      context:
        "Anh Thắng kể tiếp: \"Hồi lớp 10 anh học Python như các em bây giờ, viết mấy chương trình tính điểm, đếm số chẵn lẻ. Giờ ngôn ngữ anh dùng chính là Java và JavaScript, nhưng cái anh mang theo từ lớp 10 là cách nghĩ: chia bài toán lớn thành việc nhỏ, viết ra rồi kiểm thử cẩn thận. Ngôn ngữ nào rồi cũng học được nếu tư duy vững.\"",
      statements: [
        {
          text: "Tư duy chia bài toán lớn thành các phần nhỏ (chia để trị) là kĩ năng cốt lõi của người làm phần mềm.",
          answer: true,
          explain: "Đây chính là tư tưởng đằng sau việc dùng hàm, mô-đun trong lập trình.",
        },
        {
          text: "Người làm nghề phần mềm thường phải học thêm nhiều ngôn ngữ và công nghệ mới trong suốt sự nghiệp.",
          answer: true,
          explain: "Công nghệ thay đổi nhanh — khả năng tự học là yêu cầu bắt buộc của nghề.",
        },
        {
          text: "Kiến thức Python học ở lớp 10 là vô ích vì ra làm việc thực tế người ta dùng ngôn ngữ khác.",
          answer: false,
          explain:
            "Ngôn ngữ chỉ là công cụ; tư duy thuật toán và thói quen kiểm thử hình thành từ lớp 10 mới là thứ theo suốt sự nghiệp. Hơn nữa Python vẫn được dùng rất rộng rãi.",
        },
        {
          text: "Kiểm thử cẩn thận là một phần trong tư duy làm phần mềm chuyên nghiệp.",
          answer: true,
          explain: "Phần mềm không được kiểm thử kĩ có thể gây hậu quả lớn khi đưa vào sử dụng thật.",
        },
      ],
    },
    {
      id: "b34-tf3",
      context:
        "Cuối buổi, một bạn hỏi: \"Ở vùng cao như quê mình thì có làm nghề này được không anh?\" Anh Thắng cười: \"Anh có đồng nghiệp ngồi ở Bắc Kạn làm cho công ty Nhật, họp online mỗi sáng. Nghề này cần Internet, máy tính và cái đầu — chứ không cần em phải sống ở thành phố. Nhưng phải giỏi thật, và tiếng Anh phải đủ để đọc tài liệu.\"",
      statements: [
        {
          text: "Nghề phát triển phần mềm cho phép làm việc từ xa, không nhất thiết phải ở thành phố lớn.",
          answer: true,
          explain: "Chỉ cần máy tính và kết nối Internet ổn định — làm việc xuyên tỉnh, xuyên quốc gia.",
        },
        {
          text: "Khả năng đọc hiểu tiếng Anh là lợi thế quan trọng vì phần lớn tài liệu kĩ thuật viết bằng tiếng Anh.",
          answer: true,
          explain: "Tài liệu, diễn đàn, khoá học chất lượng cao chủ yếu bằng tiếng Anh.",
        },
        {
          text: "Nhu cầu nhân lực ngành công nghệ thông tin ở Việt Nam hiện nay rất lớn.",
          answer: true,
          explain: "CNTT nhiều năm liền nằm trong nhóm ngành thiếu nhân lực chất lượng cao.",
        },
        {
          text: "Muốn làm nghề này bắt buộc phải tốt nghiệp đại học chính quy, không còn con đường nào khác.",
          answer: false,
          explain:
            "Ngoài đại học còn có cao đẳng, trường nghề, khoá đào tạo thực hành; năng lực thực tế và sản phẩm làm được mới là thứ nhà tuyển dụng quan tâm nhất.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b34-es1",
      q: "Trình bày các công đoạn chính của quy trình phát triển phần mềm và vai trò của các vị trí công việc trong một nhóm phát triển.",
      answer:
        "- Công đoạn: (1) Xác định yêu cầu — làm việc với khách hàng/người dùng để hiểu cần gì; (2) Thiết kế — xác định cấu trúc hệ thống, cơ sở dữ liệu, giao diện; (3) Lập trình — viết mã nguồn hiện thực bản thiết kế; (4) Kiểm thử — tìm và báo lỗi trước khi phát hành; (5) Triển khai và bảo trì — đưa vào sử dụng, sửa lỗi phát sinh, nâng cấp theo nhu cầu mới.\n- Vai trò: chuyên viên phân tích nghiệp vụ (hiểu và mô tả yêu cầu); kiến trúc sư/thiết kế hệ thống; lập trình viên (front-end lo giao diện, back-end lo xử lí và dữ liệu); kĩ sư kiểm thử (tester); quản trị dự án; ngoài ra còn thiết kế UI/UX, kĩ sư vận hành.",
    },
    {
      id: "b34-es2",
      q: "Theo em, nghề phát triển phần mềm đòi hỏi những phẩm chất và kĩ năng gì? Em hãy tự đánh giá bản thân và nêu kế hoạch rèn luyện nếu muốn theo đuổi nghề này.",
      answer:
        "- Phẩm chất, kĩ năng: tư duy lôgic và khả năng giải quyết vấn đề; kiên trì, tỉ mỉ (một dấu chấm phẩy sai cũng gây lỗi); tinh thần tự học vì công nghệ đổi liên tục; kĩ năng làm việc nhóm và giao tiếp; ngoại ngữ (tiếng Anh) để đọc tài liệu; trung thực và trách nhiệm với sản phẩm mình làm ra.\n- Kế hoạch rèn luyện (gợi ý): học chắc Toán và Tin ở phổ thông; luyện lập trình Python đều đặn qua bài tập và các trang luyện thuật toán; tự làm các dự án nhỏ (chương trình quản lí điểm, trò chơi đơn giản, trang web giới thiệu lớp); học tiếng Anh; tham gia CLB Tin học, cuộc thi tin học trẻ; tìm hiểu và chọn ngành phù hợp (Công nghệ thông tin, Khoa học máy tính, Kĩ thuật phần mềm); rèn thói quen viết code sạch và kiểm thử cẩn thận ngay từ bây giờ.",
    },
  ],
};

export default extra;
