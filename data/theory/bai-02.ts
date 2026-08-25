import type { LessonTheory } from "@/lib/types";

// Bài 2. Vai trò của thiết bị thông minh và tin học đối với xã hội
// SGK trang 11–15, Chủ đề 1: Máy tính và xã hội tri thức
const theory: LessonTheory = {
  intro:
    "Bài này giúp em nhận biết **thiết bị thông minh**, hiểu vai trò của thiết bị thông minh trong cuộc cách mạng công nghiệp lần thứ tư, và thấy được những đóng góp cùng thành tựu nổi bật của **Tin học** đối với xã hội.",
  minutes: 8,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "thiet-bi-thong-minh",
      emoji: "📱",
      heading: "Thiết bị thông minh",
      blocks: [
        {
          kind: "text",
          text: "Chúng ta thường nghe các từ gắn với \"smart\" như smart TV, smartphone, smart watch,… — đó là tên gọi của các **thiết bị thông minh**. Có thể hiểu đơn giản: thiết bị thông minh là thiết bị điện tử có thể hoạt động một cách **tự chủ** trong một mức độ nhất định nhờ phần mềm điều khiển cài đặt sẵn, và có khả năng **tương tác với các thiết bị khác một cách tự động** qua mạng không dây (bluetooth, wifi,…) để tiếp nhận, xử lí và truyền dữ liệu.",
        },
        {
          kind: "cards",
          tone: "bubble",
          items: [
            {
              emoji: "⏰",
              title: "Đồng hồ lịch vạn niên — KHÔNG phải",
              text: "Không có khả năng kết nối với thiết bị khác nên không phải thiết bị thông minh.",
            },
            {
              emoji: "📱",
              title: "Điện thoại di động — LÀ thiết bị thông minh",
              text: "Tự chủ hoạt động theo phần mềm, kết nối và trao đổi dữ liệu tự động qua wifi/bluetooth.",
            },
            {
              emoji: "📷",
              title: "Camera kết nối Internet — LÀ thiết bị thông minh",
              text: "Tự động truyền dữ liệu và có khả năng chọn lọc chỉ ghi hình khi phát hiện chuyển động.",
            },
            {
              emoji: "📸",
              title: "Máy ảnh số thường — KHÔNG phải",
              text: "Không hoạt động tự chủ, chỉ chụp khi con người bấm nút nên không phải thiết bị thông minh.",
            },
          ],
        },
        {
          kind: "note",
          text: "**Thiết bị thông minh** là thiết bị điện tử có thể hoạt động tự chủ không cần sự can thiệp của con người, tự thích ứng với hoàn cảnh và có khả năng kết nối với các thiết bị khác để trao đổi dữ liệu.",
        },
        {
          kind: "check",
          q: "Trong ba thiết bị: (a) cân điện tử hiện số, (b) đồng hồ kết nối với điện thoại qua bluetooth, (c) máy tính cầm tay — thiết bị nào là thiết bị thông minh?",
          options: [
            "Đồng hồ kết nối với điện thoại qua bluetooth",
            "Cân điện tử hiện số cân nặng lên màn hình",
            "Máy tính cầm tay dùng để tính toán",
            "Cả ba thiết bị trên đều là thiết bị thông minh",
          ],
          answer: 0,
          explain:
            "Đồng hồ kết nối bluetooth có khả năng trao đổi dữ liệu tự động với điện thoại nên là thiết bị thông minh. Cân điện tử và máy tính cầm tay chỉ hiển thị kết quả tại chỗ, không tự kết nối trao đổi dữ liệu.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "cach-mang-cong-nghiep-4",
      emoji: "🏭",
      heading: "Vai trò trong cuộc cách mạng công nghiệp lần thứ tư",
      blocks: [
        {
          kind: "text",
          text: "Một số thiết bị thông minh hiện nay còn được tích hợp thêm khả năng \"bắt chước\" một vài hành vi hay cách tư duy của con người — như người máy hiểu và giao tiếp bằng ngôn ngữ tự nhiên, xe tự hành có thể dự đoán khả năng va chạm để tránh tai nạn. Khả năng \"bắt chước\" đó, nói riêng ở thiết bị thông minh và nói chung ở máy móc, được gọi là **trí tuệ nhân tạo (AI — Artificial Intelligence)**.",
        },
        {
          kind: "steps",
          items: [
            {
              label: "CMCN 1",
              title: "Cuối thế kỉ XVIII – đầu thế kỉ XIX",
              text: "Chuyển từ lao động thủ công sang cơ giới, dấu ấn là động cơ hơi nước.",
            },
            {
              label: "CMCN 2",
              title: "Cuối thế kỉ XIX – đầu thế kỉ XX",
              text: "Công nghiệp phát triển; điện năng được dùng phổ biến; sản xuất dây chuyền tập trung.",
            },
            {
              label: "CMCN 3",
              title: "Cuối thế kỉ XX – đầu thế kỉ XXI",
              text: "Máy tính hỗ trợ con người trong hoạt động trí tuệ. Tin học làm thay đổi cuộc sống.",
            },
            {
              label: "CMCN 4",
              title: "Đầu thế kỉ XXI (đang diễn ra)",
              text: "Hệ thống IoT và các hệ thống kết hợp thực – ảo trở nên phổ biến.",
            },
          ],
        },
        {
          kind: "text",
          text: "Cách mạng công nghiệp lần thứ tư (**CMCN 4.0**) là cuộc cách mạng dựa trên nền tảng công nghệ số, tích hợp các công nghệ thông minh để tạo ra quy trình và phương thức sản xuất mới — dựa trên trí tuệ nhân tạo, kết nối vạn vật (IoT), điện toán đám mây (Cloud Computing), dữ liệu lớn (Big Data),… làm mờ ranh giới giữa thế giới thực (thế giới vật lí) và thế giới ảo (thế giới số).",
        },
        {
          kind: "figure",
          diagram: "iot-ket-noi-thiet-bi",
          caption: "Các thiết bị thông minh kết nối vạn vật (IoT)",
        },
        {
          kind: "text",
          text: "**IoT (Internet of Things — kết nối vạn vật)** là việc kết nối các thiết bị thông minh với nhau nhằm thu thập và xử lí thông tin một cách tự động, tức thời trên diện rộng — ví dụ trong các ứng dụng giám sát giao thông, cảnh báo thiên tai, lái xe tự động, điều khiển quá trình sản xuất trong nhà máy.",
        },
        {
          kind: "note",
          text: "Thiết bị thông minh là thiết bị điện tử có thể hoạt động tự chủ, tự thích ứng với hoàn cảnh và có khả năng kết nối với các thiết bị khác để trao đổi dữ liệu. Thiết bị thông minh đóng vai trò chủ chốt trong các hệ thống IoT — một nội dung cơ bản của cuộc cách mạng công nghiệp 4.0.",
        },
        {
          kind: "check",
          q: "Cuộc cách mạng công nghiệp nào có dấu ấn là sự ra đời của động cơ hơi nước?",
          options: [
            "Cách mạng công nghiệp lần thứ nhất",
            "Cách mạng công nghiệp lần thứ hai",
            "Cách mạng công nghiệp lần thứ ba",
            "Cách mạng công nghiệp lần thứ tư",
          ],
          answer: 0,
          explain:
            "CMCN lần thứ nhất (cuối thế kỉ XVIII – đầu thế kỉ XIX) chuyển từ lao động thủ công sang cơ giới, với dấu ấn là động cơ hơi nước.",
        },
        {
          kind: "check",
          q: "IoT (kết nối vạn vật) là gì?",
          options: [
            "Việc kết nối các thiết bị thông minh để tự động thu thập, xử lí thông tin",
            "Một loại virus máy tính chuyên tấn công các thiết bị di động thông minh",
            "Một ngôn ngữ lập trình dùng riêng để viết chương trình cho robot công nghiệp",
            "Tên gọi khác của mạng xã hội phổ biến dùng trên điện thoại thông minh",
          ],
          answer: 0,
          explain:
            "IoT là việc kết nối các thiết bị thông minh với nhau nhằm thu thập và xử lí thông tin một cách tự động, tức thời trên diện rộng.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "dong-gop-tin-hoc-xa-hoi",
      emoji: "🌍",
      heading: "Đóng góp của Tin học với xã hội",
      blocks: [
        {
          kind: "text",
          text: "Tin học được ứng dụng trong mọi lĩnh vực của đời sống. Dưới đây là một số lĩnh vực ứng dụng phổ biến nhất.",
        },
        {
          kind: "cards",
          tone: "mint",
          items: [
            {
              emoji: "🗂️",
              title: "Quản lí",
              text: "Trường học quản lí học tập, ngân hàng quản lí tài khoản, doanh nghiệp quản lí sản xuất — máy tính giúp xử lí công việc nhanh chóng, chính xác, hiệu quả, tiết kiệm chi phí.",
            },
            {
              emoji: "🤖",
              title: "Tự động hoá",
              text: "Thiết bị thông minh hoạt động theo chương trình thay cho con người. Robot còn có thể làm việc ở nơi nguy hiểm như nhà máy điện hạt nhân, dưới nước.",
            },
            {
              emoji: "🔬",
              title: "Giải quyết bài toán khoa học kĩ thuật",
              text: "Máy tính hỗ trợ tính toán, mô phỏng, kiểm nghiệm nghiên cứu, thiết kế công trình, dự báo thời tiết, giải mã gen, ứng dụng bản đồ số,…",
            },
            {
              emoji: "🏢",
              title: "Thay đổi cách thức làm việc",
              text: "Dạy học, mua hàng thực hiện trực tuyến; nhiều nghề thay đổi hoàn toàn — như in ấn chuyển sang chế bản trên máy tính, chụp ảnh phim chuyển sang ảnh số.",
            },
            {
              emoji: "💬",
              title: "Giao tiếp cộng đồng",
              text: "Thư điện tử, diễn đàn, mạng xã hội (Youtube, Facebook, Zalo,…) giúp trao đổi thông tin nhanh chóng, hiệu quả, dễ dàng, trực quan, tương tác nhau.",
            },
          ],
        },
        {
          kind: "check",
          q: "Việc robot có thể làm việc thay con người ở những nơi nguy hiểm như nhà máy điện hạt nhân là ví dụ cho đóng góp nào của Tin học?",
          options: [
            "Tự động hoá",
            "Giao tiếp cộng đồng",
            "Thay đổi cách thức làm việc của ngành nghề",
            "Giải quyết bài toán khoa học kĩ thuật",
          ],
          answer: 0,
          explain:
            "Robot hoạt động theo chương trình thay cho con người, kể cả ở môi trường nguy hiểm, chính là biểu hiện của tự động hoá.",
        },
      ],
    },

    // ───────────────────────── MỤC 4 ─────────────────────────
    {
      id: "thanh-tuu-tin-hoc",
      emoji: "🚀",
      heading: "Một số thành tựu phát triển của Tin học",
      blocks: [
        {
          kind: "text",
          text: "Bên cạnh những đóng góp về ứng dụng, bản thân ngành Tin học cũng có nhiều thành tựu phát triển — giúp phần cứng, phần mềm và mạng máy tính trở nên mạnh mẽ như ngày nay.",
        },
        {
          kind: "cards",
          tone: "sun",
          items: [
            {
              emoji: "🖥️",
              title: "Hệ điều hành",
              text: "OS/360 (1964) trên máy IBM/360 là hệ điều hành đầu tiên. Ngày nay có Windows, macOS (máy tính), Android, iOS (di động), UNIX (máy chủ lớn).",
            },
            {
              emoji: "🌐",
              title: "Mạng và Internet",
              text: "Giao thức TCP/IP (1983) giúp kết nối Internet toàn cầu. World Wide Web (WWW, 1992) tạo ra phương tiện truy cập Internet dễ dàng, nhất quán.",
            },
            {
              emoji: "📝",
              title: "Ngôn ngữ lập trình bậc cao",
              text: "FORTRAN (1957) là ngôn ngữ lập trình bậc cao đầu tiên, giúp người lập trình không cần biết đến mã máy. Sau đó có Cobol, C, Pascal, Python,…",
            },
            {
              emoji: "🗄️",
              title: "Hệ quản trị cơ sở dữ liệu",
              text: "Ra đời cuối những năm 60, phát triển mạnh sau 1970 với DB2, MS/SQL, Oracle, MySQL,… giúp tổ chức, cập nhật, truy cập dữ liệu không phụ thuộc bài toán cụ thể.",
            },
          ],
        },
        {
          kind: "note",
          text: "Tin học đã đem lại nhiều thay đổi trong mọi lĩnh vực của xã hội, từ quản lí điều hành, tự động hoá sản xuất, giải quyết các bài toán khoa học kĩ thuật cho tới thay đổi cách làm việc của nhiều ngành nghề và thói quen giao tiếp cộng đồng. Sự phát triển mạnh mẽ của phần cứng, thiết bị số, phần mềm và sự bùng nổ của mạng máy tính, Internet là những yếu tố quyết định để máy tính trở thành phần không thể thiếu trong xã hội hiện đại.",
        },
        {
          kind: "check",
          q: "Phát minh nào đã tạo ra phương tiện truy cập Internet dễ dàng và nhất quán, giúp Internet được phổ cập rộng rãi?",
          options: [
            "World Wide Web (WWW), ra đời năm 1992",
            "Hệ điều hành OS/360, ra đời năm 1964",
            "Ngôn ngữ lập trình FORTRAN, ra đời năm 1957",
            "Hệ quản trị cơ sở dữ liệu MySQL",
          ],
          answer: 0,
          explain:
            "SGK nêu: việc phát minh ra World Wide Web (WWW) vào năm 1992 đã tạo ra phương tiện truy cập Internet dễ dàng và nhất quán, giúp phổ cập Internet.",
        },
        {
          kind: "check",
          q: "Ngôn ngữ lập trình bậc cao mang lại lợi ích gì cho người lập trình so với việc viết bằng ngôn ngữ máy?",
          options: [
            "Chỉ cần thể hiện cách giải quyết vấn đề, không cần biết đến mã máy",
            "Bắt buộc phải biết rõ cấu tạo phần cứng của từng loại máy tính",
            "Chương trình viết ra chạy nhanh hơn chương trình viết bằng mã máy",
            "Không cần trình biên dịch để chuyển sang mã máy khi chạy",
          ],
          answer: 0,
          explain:
            "Ngôn ngữ bậc cao giúp người lập trình chỉ cần thể hiện cách giải quyết vấn đề (thuật toán) mà không cần biết đến các lệnh máy; chương trình dịch sẽ chuyển sang mã máy.",
        },
      ],
    },
  ],

  summary: [
    "**Thiết bị thông minh** là thiết bị điện tử hoạt động tự chủ, tự thích ứng hoàn cảnh và kết nối được với thiết bị khác để trao đổi dữ liệu.",
    "Thế giới đã trải qua **4 cuộc cách mạng công nghiệp**; CMCN 4.0 dựa trên công nghệ số, tích hợp AI, IoT, điện toán đám mây, dữ liệu lớn.",
    "**IoT** là việc kết nối các thiết bị thông minh để tự động thu thập, xử lí thông tin trên diện rộng; thiết bị thông minh giữ vai trò chủ chốt trong IoT.",
    "Tin học đóng góp cho xã hội qua: **quản lí, tự động hoá, giải quyết bài toán khoa học kĩ thuật, thay đổi cách làm việc, giao tiếp cộng đồng**.",
    "Thành tựu của ngành Tin học: **hệ điều hành, mạng và Internet (TCP/IP, WWW), ngôn ngữ lập trình bậc cao, hệ quản trị cơ sở dữ liệu**.",
  ],
};

export default theory;
