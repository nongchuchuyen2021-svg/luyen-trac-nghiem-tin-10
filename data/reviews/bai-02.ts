import type { LessonReview } from "@/lib/types";

const review: LessonReview = {
  summary:
    "Bài này giúp em nhận biết thiết bị thông minh, hiểu vai trò của cuộc cách mạng công nghiệp 4.0 và IoT, đồng thời nắm được những đóng góp và thành tựu nổi bật của Tin học đối với xã hội.",
  keyPoints: [
    "Thiết bị thông minh phải thỏa ĐỦ 2 điều kiện: hoạt động tự chủ theo phần mềm VÀ tự động kết nối trao đổi dữ liệu qua mạng không dây.",
    "4 cuộc CMCN: (1) động cơ hơi nước, (2) điện năng & dây chuyền sản xuất, (3) máy tính hỗ trợ hoạt động trí tuệ, (4) IoT & kết hợp thực-ảo.",
    "IoT (Internet of Things) là việc kết nối các thiết bị thông minh để tự động thu thập, xử lí thông tin trên diện rộng.",
    "Tin học đóng góp cho xã hội qua 5 lĩnh vực: Quản lí, Tự động hoá, Giải bài toán khoa học kĩ thuật, Thay đổi cách làm việc, Giao tiếp cộng đồng.",
    "Thành tựu tiêu biểu của Tin học: hệ điều hành (OS/360, 1964), mạng & Internet (TCP/IP 1983, WWW 1992), ngôn ngữ lập trình bậc cao (FORTRAN, 1957), hệ quản trị CSDL.",
  ],
  commonMistakes: [
    {
      mistake: "Thấy thiết bị có thể kết nối wifi/bluetooth là vội kết luận đó là thiết bị thông minh.",
      fix: "Cần thêm điều kiện thiết bị phải TỰ ĐỘNG kết nối và trao đổi dữ liệu, không cần con người thao tác mỗi lần. Máy ảnh số có wifi nhưng chỉ gửi ảnh khi người dùng bấm nút thì vẫn KHÔNG phải thiết bị thông minh.",
    },
    {
      mistake: "Nhầm lẫn CMCN lần 3 (máy tính hỗ trợ trí tuệ) với CMCN lần 4 (IoT, kết hợp thực-ảo).",
      fix: "CMCN 3 là giai đoạn máy tính bắt đầu hỗ trợ con người tính toán, xử lí thông tin. CMCN 4 mới là giai đoạn các thiết bị kết nối vạn vật (IoT) và làm mờ ranh giới giữa thế giới thực và thế giới ảo.",
    },
    {
      mistake: "Nhầm 'tự động hoá' với 'giải quyết bài toán khoa học kĩ thuật' khi cho ví dụ minh hoạ.",
      fix: "Tự động hoá là máy làm THAY con người (VD: robot làm việc ở nơi nguy hiểm). Giải bài toán khoa học kĩ thuật là máy HỖ TRỢ tính toán/mô phỏng cho con người nghiên cứu (VD: dự báo thời tiết, giải mã gen).",
    },
  ],
  tips: [
    "Mẹo nhớ 4 CMCN theo trình tự động lực chính: Hơi nước → Điện → Máy tính → Internet vạn vật (IoT).",
    "Mẹo phân biệt 5 đóng góp của Tin học: tự hỏi 'máy làm THAY người' (tự động hoá) hay 'máy giúp người NHANH/CHÍNH XÁC hơn' (quản lí, khoa học kĩ thuật) hay 'máy thay đổi CÁCH LÀM' (cách thức làm việc, giao tiếp cộng đồng).",
  ],
  flashcards: [
    {
      front: "Thiết bị thông minh là gì?",
      back: "Thiết bị điện tử hoạt động tự chủ theo phần mềm cài sẵn và tự động kết nối, trao đổi dữ liệu với thiết bị khác qua mạng không dây.",
    },
    {
      front: "IoT là gì?",
      back: "Internet of Things — kết nối các thiết bị thông minh với nhau để tự động thu thập, xử lí thông tin trên diện rộng.",
    },
    {
      front: "Cuộc CMCN lần thứ nhất có dấu ấn gì?",
      back: "Động cơ hơi nước — chuyển từ lao động thủ công sang cơ giới (cuối thế kỉ XVIII – đầu thế kỉ XIX).",
    },
    {
      front: "CMCN 4.0 dựa trên nền tảng công nghệ nào?",
      back: "Công nghệ số: trí tuệ nhân tạo (AI), IoT, điện toán đám mây, dữ liệu lớn — làm mờ ranh giới giữa thế giới thực và thế giới ảo.",
    },
    {
      front: "Kể tên 5 lĩnh vực đóng góp của Tin học cho xã hội?",
      back: "Quản lí, Tự động hoá, Giải bài toán khoa học kĩ thuật, Thay đổi cách làm việc, Giao tiếp cộng đồng.",
    },
    {
      front: "Hệ điều hành đầu tiên tên gì, ra đời năm nào?",
      back: "OS/360, năm 1964, chạy trên máy IBM/360.",
    },
    {
      front: "Phát minh nào giúp Internet được phổ cập rộng rãi?",
      back: "World Wide Web (WWW), ra đời năm 1992, tạo phương tiện truy cập Internet dễ dàng và nhất quán.",
    },
    {
      front: "Ngôn ngữ lập trình bậc cao đầu tiên là gì, ra đời năm nào?",
      back: "FORTRAN, ra đời năm 1957.",
    },
  ],
  checklist: [
    "Tôi phân biệt được thiết bị thông minh và thiết bị điện tử thường.",
    "Tôi nêu được đặc điểm và mốc thời gian của 4 cuộc cách mạng công nghiệp.",
    "Tôi giải thích được khái niệm IoT và vai trò của thiết bị thông minh trong IoT.",
    "Tôi liệt kê được các đóng góp và thành tựu tiêu biểu của ngành Tin học.",
  ],
  diagram: "cmcn-dong-thoi-gian",
};

export default review;
