import type { Question } from "@/lib/types";

// ============================================================================
// THƯ MỤC ĐỀ KIỂM TRA ĐỊNH KỲ — TIN HỌC 10
// Trường THPT Na Rì — Tỉnh Thái Nguyên
// Đề: KIỂM TRA THƯỜNG XUYÊN SỐ 2 (Bài 1, 2, 7, 8, 9)
// Cấu trúc: 15 câu trắc nghiệm 4 phương án · 20 phút · Thang điểm 10,0
// ============================================================================

export interface DeKiemTraThuongXuyen {
  id: string;
  title: string;
  subtitle: string;
  phamVi: string;
  thoiGianPhut: number;
  soCau: number;
  thangDiem: number;
  questions: Question[];
}

export const DE_KIEM_TRA_TX2: DeKiemTraThuongXuyen = {
  id: "kiem-tra-tx2",
  title: "Đề Kiểm Tra Thường Xuyên 2 — Tin học 10",
  subtitle: "Đánh giá định kỳ thường xuyên số 2 (Phạm vi: Bài 1, 2, 7, 8, 9)",
  phamVi: "Bài 1 (Thông tin & xử lí) · Bài 2 (Thiết bị thông minh & xã hội) · Bài 7 (Sử dụng thiết bị số) · Bài 8 (Mạng máy tính) · Bài 9 (An toàn mạng)",
  thoiGianPhut: 20,
  soCau: 15,
  thangDiem: 10.0,
  questions: [
    // --- BÀI 1: THÔNG TIN VÀ XỬ LÍ THÔNG TIN (3 CÂU) ---
    {
      id: "tx2-01",
      q: "Thông tin là gì?",
      options: [
        "Tất cả những gì con người nhìn thấy và nghe được ở xung quanh",
        "Các tín hiệu điện được truyền đi giữa những bộ phận của máy tính",
        "Những con số và chữ viết đã được ghi lại và lưu trữ trong máy tính",
        "Những gì đem lại hiểu biết cho con người về thế giới và về chính mình",
      ],
      answer: 3,
      explain:
        "Thông tin là những gì đem lại hiểu biết cho con người về thế giới xung quanh và về chính bản thân mình.",
    },
    {
      id: "tx2-02",
      q: "Quá trình xử lí thông tin của máy tính diễn ra theo trình tự cơ bản nào sau đây?",
      options: [
        "Tiếp nhận dữ liệu → Xử lí dữ liệu → Xuất hoặc lưu trữ kết quả",
        "Xử lí dữ liệu → Tiếp nhận dữ liệu → Xuất kết quả ra màn hình",
        "Lưu trữ dữ liệu → Tiếp nhận thông tin → Thực hiện tính toán",
        "Xuất kết quả ra → Tiếp nhận dữ liệu → Phân tích thông tin",
      ],
      answer: 0,
      explain:
        "Quy trình xử lí thông tin chuẩn gồm: Tiếp nhận thông tin (vào) → Xử lí thông tin → Xuất hoặc lưu trữ kết quả (ra).",
    },
    {
      id: "tx2-03",
      q: "Phát biểu nào sau đây là ĐÚNG khi phân biệt giữa thông tin và dữ liệu?",
      options: [
        "Thông tin chỉ có trong máy tính, còn dữ liệu chỉ xuất hiện ở ngoài đời thực",
        "Thông tin là ý nghĩa hiểu biết, còn dữ liệu là hình thức ghi lại thông tin đó",
        "Dữ liệu là ý nghĩa hiểu biết, còn thông tin là các con số cụ thể ghi trong máy",
        "Thông tin và dữ liệu là hai khái niệm hoàn toàn đồng nhất và thay thế được nhau",
      ],
      answer: 1,
      explain:
        "Thông tin là ý nghĩa hiểu biết mà con người thu nhận được; dữ liệu là dạng biểu diễn (số hoá) của thông tin để máy tính có thể lưu trữ và xử lí.",
    },

    // --- BÀI 2: VAI TRÒ CỦA THIẾT BỊ THÔNG MINH VÀ TIN HỌC (3 CÂU) ---
    {
      id: "tx2-04",
      q: "Thiết bị thông minh được định nghĩa chính xác là gì?",
      options: [
        "Thiết bị điện tử tự chủ ở mức nhất định nhờ phần mềm điều khiển",
        "Thiết bị có giá thành cao và được tích hợp nhiều tính năng giải trí",
        "Thiết bị có màn hình cảm ứng độ phân giải cao và kết nối Internet",
        "Thiết bị sử dụng pin sạc dung lượng lớn và có độ bền cơ học vượt trội",
      ],
      answer: 0,
      explain:
        "Thiết bị thông minh là thiết bị điện tử có khả năng hoạt động tự chủ ở mức độ nhất định nhờ có bộ xử lí và phần mềm điều khiển.",
    },
    {
      id: "tx2-05",
      q: "Đặc trưng nổi bật nhất của cuộc Cách mạng công nghiệp lần thứ tư (CMCN 4.0) là gì?",
      options: [
        "Cơ giới hoá sản xuất nhờ việc ứng dụng động cơ hơi nước trong các nhà máy",
        "Điện khí hoá và dây chuyền sản xuất hàng loạt quy mô lớn trên toàn thế giới",
        "Tự động hoá sản xuất dựa trên máy tính điện tử và vi mạch điều khiển rời rạc",
        "Kết nối vạn vật (IoT), trí tuệ nhân tạo (AI), dữ liệu lớn và tự động hoá thông minh",
      ],
      answer: 3,
      explain:
        "CMCN 4.0 đặc trưng bởi sự hội tụ của thế giới số và thực tế: Internet vạn vật (IoT), Trí tuệ nhân tạo (AI), Dữ liệu lớn (Big Data) và Điện toán đám mây.",
    },
    {
      id: "tx2-06",
      q: "Mạng kết nối vạn vật (Internet of Things — IoT) là gì?",
      options: [
        "Mạng lưới máy chủ chuyên dụng cung cấp tài nguyên điện toán đám mây quốc tế",
        "Hệ thống phần mềm bảo mật ngăn chặn mã độc lây lan qua kết nối mạng không dây",
        "Mạng lưới kết nối các thiết bị để tự thu thập, truyền và trao đổi dữ liệu",
        "Hệ thống sàn thương mại điện tử giúp kết nối người mua và người bán trực tuyến",
      ],
      answer: 2,
      explain:
        "IoT (Internet of Things) là mạng lưới liên kết các thiết bị vật lí (cảm biến, đồ gia dụng, xe cộ...) qua Internet để tự thu thập và trao đổi dữ liệu không cần sự can thiệp liên tục của con người.",
    },

    // --- BÀI 7: THỰC HÀNH SỬ DỤNG THIẾT BỊ SỐ THÔNG DỤNG (3 CÂU) ---
    {
      id: "tx2-07",
      q: "Về mặt bản chất kỹ thuật, điện thoại thông minh (smartphone) là gì?",
      options: [
        "Một thiết bị viễn thông đơn thuần chỉ dùng để liên lạc nghe gọi và nhắn tin",
        "Một máy tính thu nhỏ có đầy đủ CPU, bộ nhớ, thiết bị vào/ra và hệ điều hành",
        "Một máy quay phim, chụp ảnh kỹ thuật số gắn thêm màn hình cảm ứng đa điểm",
        "Một thiết bị cầm tay chuyên dụng dùng để chơi game và duyệt web di động tốc độ",
      ],
      answer: 1,
      explain:
        "Smartphone về bản chất là một chiếc máy tính thu nhỏ: có bộ vi xử lí (CPU), RAM, bộ nhớ trong, thiết bị vào/ra (màn hình cảm ứng, mic, camera) và chạy một hệ điều hành hoàn chỉnh.",
    },
    {
      id: "tx2-08",
      q: "Để đảm bảo an toàn cho thiết bị số, người dùng nên cài đặt ứng dụng từ nguồn nào?",
      options: [
        "Từ các kho ứng dụng chính thức đã được kiểm duyệt như Google Play hoặc App Store",
        "Từ các liên kết được chia sẻ trong nhóm mạng xã hội hoặc diễn đàn công nghệ lạ",
        "Từ các trang web tải tệp cài đặt định dạng .apk miễn phí đã được bẻ khoá phần mềm",
        "Từ bất kì thiết bị USB nào của người khác khi được giới thiệu là phần mềm hay",
      ],
      answer: 0,
      explain:
        "Các kho ứng dụng chính thức (Google Play đối với Android, App Store đối với iOS) luôn có quy trình quét mã độc và kiểm duyệt bảo mật trước khi cho phép tải.",
    },
    {
      id: "tx2-09",
      q: "Thao tác sao lưu (backup) dữ liệu trên điện thoại thông minh nhằm mục đích chính là gì?",
      options: [
        "Giải phóng hoàn toàn dung lượng bộ nhớ trong để máy chạy với tốc độ nhanh hơn",
        "Tự động cập nhật phiên bản mới nhất cho toàn bộ các ứng dụng đang có trên máy",
        "Tạo thêm bản sao an toàn ở nơi khác để tránh mất mát dữ liệu quan trọng khi có sự cố",
        "Nén nhỏ kích thước của toàn bộ hình ảnh và video để tiết kiệm dung lượng thẻ nhớ",
      ],
      answer: 2,
      explain:
        "Sao lưu là tạo bản sao dữ liệu (danh bạ, tin nhắn, ảnh, tệp tin...) lưu tại dịch vụ đám mây hoặc máy tính, giúp khôi phục dễ dàng khi máy bị rơi, hỏng hoặc đổi thiết bị mới.",
    },

    // --- BÀI 8: MẠNG MÁY TÍNH TRONG CUỘC SỐNG HIỆN ĐẠI (3 CÂU) ---
    {
      id: "tx2-10",
      q: "Mạng máy tính được định nghĩa là gì?",
      options: [
        "Một hệ thống máy tính cực mạnh cho phép nhiều người sử dụng cùng lúc từ các địa điểm",
        "Tập hợp các phần mềm văn phòng được cài đặt và vận hành song song trên một máy tính",
        "Hệ thống các dây cáp mạng và ổ cắm điện chuyên dụng được lắp đặt bên trong phòng máy",
        "Tập hợp các máy tính và thiết bị được kết nối để truyền dữ liệu và dùng chung tài nguyên",
      ],
      answer: 3,
      explain:
        "Mạng máy tính là tập hợp các máy tính và thiết bị được kết nối với nhau bằng phương tiện truyền dẫn để trao đổi dữ liệu và dùng chung tài nguyên phần cứng, phần mềm.",
    },
    {
      id: "tx2-11",
      q: "Mạng cục bộ (LAN) khác với mạng diện rộng (WAN) chủ yếu ở đặc điểm nào sau đây?",
      options: [
        "LAN chỉ kết nối bằng sóng Wi-Fi, còn WAN chỉ sử dụng đường truyền bằng dây cáp quang",
        "LAN có phạm vi địa lí hẹp như trong phòng hay trường học, còn WAN có phạm vi rộng lớn",
        "LAN không thể chia sẻ tệp dữ liệu, còn WAN cho phép mọi máy tính cùng chia sẻ tệp tin",
        "LAN luôn yêu cầu mật khẩu đăng nhập, còn WAN là mạng mở tự do không cần bảo mật gì cả",
      ],
      answer: 1,
      explain:
        "LAN (Local Area Network) hoạt động trong phạm vi hẹp (gia đình, phòng học, toà nhà); WAN (Wide Area Network) kết nối các mạng ở khoảng cách lớn (tỉnh, quốc gia hoặc toàn cầu).",
    },
    {
      id: "tx2-12",
      q: "Điện toán đám mây (Cloud Computing) mang lại lợi ích nổi bật nào cho người sử dụng?",
      options: [
        "Tự động tăng tốc độ xử lí phần cứng của máy tính cá nhân lên gấp nhiều lần mà không tốn điện",
        "Cho phép truy cập dữ liệu và dùng phần mềm qua Internet mà không cần đầu tư máy chủ cục bộ",
        "Lưu trữ dữ liệu vào một phân vùng ẩn đặc biệt trong ổ cứng máy tính để chống lại virus phá hoại",
        "Cho phép sử dụng Internet hoàn toàn miễn phí mà không cần chi trả cước phí thuê bao hàng tháng",
      ],
      answer: 1,
      explain:
        "Điện toán đám mây cho phép người dùng lưu trữ (Google Drive, OneDrive), sử dụng phần mềm và tài nguyên tính toán qua mạng Internet từ bất kì thiết bị nào mà không cần tự duy trì hạ tầng máy chủ.",
    },

    // --- BÀI 9: AN TOÀN TRÊN KHÔNG GIAN MẠNG (3 CÂU) ---
    {
      id: "tx2-13",
      q: "Yếu tố cốt lõi nhất để xác định một chương trình máy tính là phần mềm độc hại (malware) là gì?",
      options: [
        "Chương trình được tạo ra có ý đồ xấu nhằm gây hại cho người dùng, dữ liệu hoặc hệ thống",
        "Chương trình chiếm dụng nhiều bộ nhớ RAM khiến máy tính chạy chậm hơn bình thường một chút",
        "Chương trình miễn phí tải từ Internet nhưng chưa được cấp chứng nhận bản quyền quốc tế",
        "Chương trình xuất hiện nhiều lỗi lập trình khiến giao diện hiển thị không được đẹp mắt",
      ],
      answer: 0,
      explain:
        "Mấu chốt của phần mềm độc hại (malware) nằm ở Ý ĐỒ XẤU của kẻ tạo ra nó (phá huỷ hệ thống, ăn cắp thông tin, tống tiền...), chứ không phải do lỗi lập trình hay dung lượng.",
    },
    {
      id: "tx2-14",
      q: "Đặc điểm nhận diện điển hình của một cuộc tấn công lừa đảo giả mạo (Phishing) là gì?",
      options: [
        "Tự động làm cho màn hình máy tính của nạn nhân bị rung giật liên tục và không thể gõ được bàn phím",
        "Gửi email hoặc tin nhắn mạo danh tổ chức uy tín, giục bấm link để lừa lấy mật khẩu tài khoản",
        "Âm thầm tắt kết nối mạng Internet của máy tính vào một khung giờ cố định trong ngày để gây khó chịu",
        "Tự động nhân bản các tệp tin văn bản trong máy tính thành nhiều bản sao có kích thước giống nhau",
      ],
      answer: 1,
      explain:
        "Tấn công Phishing (lừa đảo giả mạo) thường giả mạo các tổ chức uy tín (ngân hàng, trường học, mạng xã hội) kèm theo thông báo khẩn cấp để đánh lừa người dùng đăng nhập vào trang web giả mạo.",
    },
    {
      id: "tx2-15",
      q: "Cơ chế bảo mật xác thực hai yếu tố (2FA) bảo vệ tài khoản người dùng an toàn hơn nhờ điều gì?",
      options: [
        "Yêu cầu người dùng phải nhập mật khẩu hai lần liên tiếp thật chính xác trong vòng 10 giây",
        "Bắt buộc người dùng phải đăng nhập tài khoản trên hai thiết bị cùng lúc mới cho phép mở dữ liệu",
        "Đòi hỏi thêm một yếu tố xác thực độc lập như mã OTP hoặc vân tay ngoài mật khẩu thông thường",
        "Tự động đổi mật khẩu của tài khoản sang một chuỗi ký tự ngẫu nhiên sau mỗi lần người dùng đăng xuất",
      ],
      answer: 2,
      explain:
        "Xác thực hai yếu tố (2FA) kết hợp hai loại yếu tố khác nhau: thứ người dùng biết (mật khẩu) và thứ người dùng sở hữu (mã OTP gửi về điện thoại, thiết bị khóa, vân tay). Nếu lộ mật khẩu, kẻ xấu vẫn không thể truy cập tài khoản.",
    },
  ],
};
