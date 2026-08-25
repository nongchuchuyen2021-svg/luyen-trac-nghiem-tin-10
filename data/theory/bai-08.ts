import type { LessonTheory } from "@/lib/types";

// Bài 8. Mạng máy tính trong cuộc sống hiện đại
// SGK trang 38–43, Chủ đề 2: Mạng máy tính và Internet
const theory: LessonTheory = {
  intro:
    "Bài này giúp em phân biệt **mạng LAN** với **Internet**, hiểu vai trò của Internet trong cuộc sống, và làm quen với hai công nghệ dựa trên Internet: **điện toán đám mây** và **kết nối vạn vật (IoT)**.",
  minutes: 9,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "mang-lan-va-internet",
      emoji: "🖧",
      heading: "Mạng LAN và Internet",
      blocks: [
        {
          kind: "text",
          text: "Trong một mạng máy tính, **máy chủ, máy tính để bàn, máy in** là các thiết bị đầu cuối; còn **bộ chia (Hub), bộ chuyển mạch (Switch), bộ định tuyến (Router)** là các thiết bị kết nối, giúp các thiết bị đầu cuối trao đổi dữ liệu với nhau.",
        },
        {
          kind: "text",
          text: "Theo phạm vi địa lí, mạng máy tính chia thành hai loại: **mạng cục bộ (Local Area Network — LAN)** có phạm vi nhỏ như gia đình, trường học, công ty; và **mạng diện rộng (Wide Area Network — WAN)** hình thành bằng cách liên kết các LAN hay các máy tính đơn lẻ. **Internet** chính là mạng diện rộng có quy mô toàn cầu.",
        },
        {
          kind: "figure",
          diagram: "lan-qua-internet",
          caption: "Router kết nối các mạng LAN với nhau qua Internet (theo Hình 8.2 SGK)",
        },
        {
          kind: "text",
          text: "Trong mạng máy tính, thiết bị **Switch hay Hub chỉ chuyển tiếp dữ liệu trong nội bộ mạng LAN**. **Router** hoạt động theo nguyên lí: khi phát hiện dữ liệu gửi cho thiết bị không có trong LAN thì nó sẽ gửi dữ liệu đó ra qua cổng Internet. Người ta dùng Router để kết nối các LAN với nhau.",
        },
        {
          kind: "compare",
          left: {
            title: "Mạng cục bộ (LAN)",
            emoji: "🏠",
            items: [
              "Phạm vi, quy mô: cơ quan, gia đình",
              "Cách kết nối: trực tiếp trong mạng qua thiết bị kết nối như Hub, Switch, wifi",
              "Sở hữu: có chủ sở hữu (cá nhân, gia đình, cơ quan, tổ chức xác định)",
            ],
          },
          right: {
            title: "Internet",
            emoji: "🌍",
            items: [
              "Phạm vi, quy mô: toàn cầu",
              "Cách kết nối: kết nối các LAN qua Router, thông qua các nhà cung cấp dịch vụ kết nối",
              "Sở hữu: không có chủ sở hữu, chỉ có vài tổ chức phi lợi nhuận quốc tế điều phối tài nguyên",
            ],
          },
        },
        {
          kind: "check",
          q: "Thiết bị nào dùng để kết nối các mạng LAN với nhau, gửi dữ liệu ra ngoài LAN khi đích đến không nằm trong mạng đó?",
          options: ["Router (bộ định tuyến)", "Switch (bộ chuyển mạch)", "Hub (bộ chia)", "Máy in"],
          answer: 0,
          explain:
            "Router hoạt động theo nguyên lí: khi phát hiện dữ liệu gửi cho thiết bị không có trong LAN thì gửi dữ liệu đó ra qua cổng Internet. Switch/Hub chỉ chuyển tiếp dữ liệu trong nội bộ LAN.",
        },
        {
          kind: "check",
          q: "Phát biểu nào sau đây đúng về quyền sở hữu của Internet?",
          options: [
            "Internet không có chủ sở hữu, chỉ có vài tổ chức phi lợi nhuận điều phối tài nguyên",
            "Internet thuộc quyền sở hữu riêng của duy nhất một quốc gia trên toàn thế giới",
            "Internet thuộc sở hữu của công ty đầu tiên đã phát minh ra World Wide Web",
            "Mỗi mạng LAN khi kết nối vào Internet sẽ tự động trở thành đồng sở hữu Internet",
          ],
          answer: 0,
          explain:
            "SGK nêu: Internet không của riêng ai, không có cơ quan quản lí tập trung nào, nhưng có một vài tổ chức phi lợi nhuận quốc tế điều phối tài nguyên (như địa chỉ, tên miền) và tiêu chuẩn hoá nền tảng kĩ thuật.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "vai-tro-internet",
      emoji: "🌐",
      heading: "Vai trò của Internet",
      blocks: [
        {
          kind: "text",
          text: "Internet ngày càng được sử dụng rộng rãi trên toàn thế giới và có ảnh hưởng đến hầu hết các lĩnh vực hoạt động của con người.",
        },
        {
          kind: "cards",
          tone: "mint",
          items: [
            {
              emoji: "💬",
              title: "Trong giao tiếp cộng đồng",
              text: "Internet đã thay đổi cách mọi người tương tác với nhau: liên lạc, kết nối thông tin, chia sẻ kiến thức, kinh nghiệm, đưa ra ý tưởng và nhận phản hồi ngay lập tức mà không cần tiếp xúc trực tiếp.",
            },
            {
              emoji: "📚",
              title: "Trong giáo dục",
              text: "Internet là nguồn thông tin khổng lồ về mọi lĩnh vực — truy cập thư viện bài giảng, bách khoa toàn thư. Các nền tảng học trực tuyến giúp người học học từ xa mọi lúc, mọi nơi, học tập suốt đời.",
            },
          ],
        },
        {
          kind: "note",
          text: "Internet là kho tri thức khổng lồ thường xuyên được cập nhật, có thể truy cập bất cứ ở đâu, bất cứ lúc nào. Internet đã giúp con người kết nối và giao tiếp với nhau dễ dàng và tiện lợi. Internet đã có ảnh hưởng sâu sắc tới mọi lĩnh vực của đời sống xã hội, làm thay đổi cách thức làm việc, học tập và giao tiếp với nhau.",
        },
        {
          kind: "check",
          q: "Việc học sinh tham gia một khoá học trực tuyến để có thể học từ xa vào bất cứ lúc nào, ở bất cứ đâu thể hiện vai trò nào của Internet?",
          options: ["Vai trò trong giáo dục", "Vai trò trong giao tiếp cộng đồng", "Vai trò của điện toán đám mây", "Vai trò của kết nối vạn vật (IoT)"],
          answer: 0,
          explain:
            "Các nền tảng học trực tuyến giúp người học học từ xa mọi lúc, mọi nơi — đây chính là vai trò của Internet trong giáo dục.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "dien-toan-dam-may",
      emoji: "☁️",
      heading: "Điện toán đám mây",
      blocks: [
        {
          kind: "text",
          text: "Việc chia sẻ các tài nguyên mạng theo nhu cầu qua Internet — miễn phí hoặc trả phí theo hạn mức sử dụng — được gọi là **dịch vụ điện toán đám mây (dịch vụ đám mây)**. Để sử dụng, người dùng phải đăng kí thuê bao, thoả thuận hạn mức sử dụng nếu phải trả phí và được cấp tài khoản truy cập. Google Docs, Dropbox,… là những ví dụ điển hình của dịch vụ đám mây.",
        },
        {
          kind: "cards",
          tone: "sun",
          items: [
            {
              emoji: "🧩",
              title: "SaaS — phần mềm như dịch vụ",
              text: "Software as a Service: cho thuê phần mềm ứng dụng dùng trong hoạt động nghiệp vụ. Ví dụ: Google Docs, phần mềm lớp học ảo Zoom.",
            },
            {
              emoji: "🏗️",
              title: "PaaS — nền tảng như dịch vụ",
              text: "Platform as a Service: cho thuê phần mềm nền tảng — công cụ để làm ra các sản phẩm khác. Ví dụ: thuê bản đồ số của Google để dựng ứng dụng đặt xe, giao hàng.",
            },
            {
              emoji: "🗄️",
              title: "IaaS — hạ tầng như dịch vụ",
              text: "Infrastructure as a Service: cho thuê phần cứng như máy chủ, thiết bị lưu trữ qua Internet. Ví dụ: lưu trữ thông tin trên Dropbox, Google Drive.",
            },
          ],
        },
        {
          kind: "list",
          items: [
            "**Tính mềm dẻo và độ sẵn sàng cao**: người dùng không bị lệ thuộc vào phương tiện cá nhân, thời gian và địa điểm làm việc, miễn là có kết nối Internet.",
            "**Chất lượng cao**: nhà cung cấp dịch vụ đám mây thường đầu tư chuyên nghiệp; phần mềm được kiểm định nhờ chia sẻ; hạ tầng có công suất dự phòng lớn, ổn định, an toàn.",
            "**Kinh tế hơn**: do chia sẻ cho nhiều người, dịch vụ đám mây phân tải hợp lí, tránh lãng phí; người dùng chỉ trả tiền theo mức sử dụng thực tế.",
          ],
        },
        {
          kind: "note",
          text: "Điện toán đám mây được định nghĩa là việc phân phối các tài nguyên công nghệ thông tin theo nhu cầu qua Internet với chính sách thanh toán theo mức sử dụng. **SaaS, PaaS, IaaS** là các loại hình dịch vụ chủ yếu của điện toán đám mây.",
        },
        {
          kind: "check",
          q: "Bạn An lưu ảnh trên dịch vụ Dropbox thay vì mua thêm ổ cứng. An đang thuê loại tài nguyên nào của điện toán đám mây?",
          options: ["IaaS — hạ tầng lưu trữ", "SaaS — phần mềm ứng dụng", "PaaS — nền tảng phát triển", "Không phải dịch vụ đám mây"],
          answer: 0,
          explain:
            "Dropbox cho thuê không gian lưu trữ (phần cứng) qua Internet — đây là ví dụ của IaaS (Infrastructure as a Service, hạ tầng như dịch vụ).",
        },
        {
          kind: "check",
          q: "Lợi ích nào của dịch vụ đám mây thể hiện qua việc người dùng chỉ cần trả tiền đúng theo mức mình sử dụng, không phải tự đầu tư toàn bộ hạ tầng?",
          options: ["Kinh tế hơn", "Chất lượng cao", "Tính mềm dẻo và độ sẵn sàng cao", "Không có lợi ích nào phù hợp"],
          answer: 0,
          explain:
            "Vì tài nguyên đám mây được chia sẻ cho nhiều người dùng nên được phân tải hợp lí, tránh lãng phí, và người dùng chỉ trả tiền theo mức sử dụng thực tế — đây là lợi ích kinh tế hơn.",
        },
      ],
    },

    // ───────────────────────── MỤC 4 ─────────────────────────
    {
      id: "ket-noi-van-vat",
      emoji: "🔗",
      heading: "Kết nối vạn vật (IoT)",
      blocks: [
        {
          kind: "text",
          text: "Ý tưởng liên kết các thiết bị thông minh là nguồn gốc của **kết nối vạn vật (Internet of Things — IoT)**. IoT được định nghĩa là việc liên kết các thiết bị thông minh để tự động thu thập, trao đổi và xử lí dữ liệu phục vụ cho các mục đích khác nhau.",
        },
        {
          kind: "cards",
          tone: "bubble",
          items: [
            { emoji: "🌍", title: "Thu thập dữ liệu diện rộng", text: "Có thể thu thập dữ liệu trên diện rộng nhờ mạng máy tính, vượt xa khả năng của con người." },
            { emoji: "☢️", title: "Làm việc ở nơi bất lợi", text: "Hoạt động được ở những nơi con người không làm được, như ghi dữ liệu giám sát lò phản ứng hạt nhân." },
            { emoji: "⏱️", title: "Hoạt động liên tục, tức thời", text: "Cung cấp dữ liệu tức thời — quan trọng với hệ thống thời gian thực, nơi quyết định chậm trễ có thể gây thảm hoạ." },
            { emoji: "💰", title: "Tiết kiệm chi phí", text: "Giảm bớt lao động thu thập và xử lí thông tin mang tính thủ công." },
          ],
        },
        {
          kind: "example",
          title: "Thu phí không dừng trên đường cao tốc",
          text: "Ô tô dán thẻ định danh giao tiếp qua sóng radio (RFID) ở kính lái. Khi xe vào hay ra khỏi cao tốc, thiết bị đọc thẻ RFID thu thông tin trên thẻ rồi truyền về hệ thống kiểm soát; nếu tài khoản còn đủ tiền, hệ thống trừ phí và truyền lệnh về trạm thu phí mở thanh chắn — toàn bộ tự động, không cần dừng xe.",
        },
        {
          kind: "note",
          text: "IoT là hệ thống liên mạng bao gồm các phương tiện, vật dụng, thiết bị thông minh được cài đặt cảm biến, phần mềm chuyên dụng giúp chúng tự động kết nối, thu thập và trao đổi dữ liệu trên cơ sở hạ tầng Internet, mà không nhất thiết có sự tương tác trực tiếp giữa người với người hay người với máy tính. IoT được xem là một nội dung chủ chốt của cuộc cách mạng công nghiệp lần thứ tư.",
        },
        {
          kind: "check",
          q: "Trong một mạng IoT, các thiết bị thông minh nhất thiết chỉ được phép kết nối với nhau qua Internet, đúng hay sai?",
          options: [
            "Sai — IoT là hệ liên mạng, có thể kết nối qua nhiều hạ tầng mạng khác nhau",
            "Đúng — IoT chỉ hoạt động khi mọi thiết bị cùng kết nối trực tiếp vào Internet",
            "Đúng — nếu không qua Internet thì không còn gọi là thiết bị thông minh nữa",
            "Sai — IoT hoàn toàn không cần bất kì kết nối mạng nào giữa các thiết bị",
          ],
          answer: 0,
          explain:
            "SGK đặt câu hỏi gợi mở: trong một mạng IoT, có nhất thiết là các thiết bị thông minh chỉ nối với nhau qua Internet hay không? Trên thực tế, IoT là hệ liên mạng, các thiết bị có thể kết nối qua nhiều loại hạ tầng mạng khác nhau (wifi cục bộ, bluetooth,…) chứ không bắt buộc mọi kết nối đều trực tiếp qua Internet.",
        },
        {
          kind: "check",
          q: "Việc công tơ điện tử tự động đọc chỉ số điện và gửi về trung tâm dữ liệu qua Internet, thay vì nhân viên điện lực phải đến từng nhà ghi chép, thể hiện rõ nhất lợi ích nào của IoT?",
          options: [
            "Tiết kiệm chi phí do giảm bớt lao động thu thập thông tin thủ công",
            "Làm việc được ở những nơi con người không thể nào tới được",
            "Cung cấp dữ liệu tức thời cho các hệ thống thời gian thực",
            "Giúp thiết bị tự bắt chước hành vi và cách tư duy của con người",
          ],
          answer: 0,
          explain:
            "Công tơ điện tử tự động đọc và gửi chỉ số qua Internet giúp giảm bớt lao động thu thập thông tin mang tính thủ công (nhân viên đi đọc từng nhà) — đúng là lợi ích tiết kiệm chi phí của IoT.",
        },
      ],
    },
  ],

  summary: [
    "**LAN** có phạm vi nhỏ (gia đình, cơ quan), có chủ sở hữu; **Internet** là mạng diện rộng toàn cầu, không có chủ sở hữu. **Switch/Hub** chuyển tiếp trong nội bộ LAN, **Router** kết nối các LAN qua Internet.",
    "Internet có vai trò lớn trong **giao tiếp cộng đồng** và **giáo dục**, ảnh hưởng sâu sắc tới cách làm việc, học tập, giao tiếp của con người.",
    "**Điện toán đám mây** là dịch vụ chia sẻ tài nguyên CNTT theo nhu cầu qua Internet, trả phí theo mức dùng — gồm 3 loại chính: **SaaS** (phần mềm), **PaaS** (nền tảng), **IaaS** (hạ tầng).",
    "**IoT (kết nối vạn vật)** là việc liên kết các thiết bị thông minh để tự động thu thập, trao đổi, xử lí dữ liệu — lợi ích: thu thập dữ liệu diện rộng, làm việc nơi bất lợi, hoạt động thời gian thực, tiết kiệm chi phí.",
  ],
};

export default theory;
