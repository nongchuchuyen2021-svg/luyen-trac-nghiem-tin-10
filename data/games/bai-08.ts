import type { LessonGame, NetworkGame, Sort3Game, SortGame } from "@/lib/types";

// =====================================================================
// GAME 1: KỸ SƯ ĐIỀU PHỐI MẠNG & ĐIỆN TOÁN ĐÁM MÂY (NETWORK ARCHITECT SIMULATOR)
// =====================================================================
// Mô phỏng trực quan: định tuyến gói tin qua Switch/Router, chẩn đoán sự cố mạng,
// thiết kế giải pháp đám mây SaaS/PaaS/IaaS và chuỗi cảm biến thông minh IoT.
const networkGameSimulator: NetworkGame = {
  kind: "network",
  id: "ky-su-dieu-phoi-mang",
  title: "Kỹ sư Điều phối Mạng & Đám mây (Network Simulator)",
  emoji: "🌐",
  instructions:
    "Nhập vai Kỹ sư Mạng trưởng: điều phối các gói tin qua Switch & Router, cứu hộ sự cố mạng trường học, và thiết kế giải pháp Đám mây & IoT!",
  missions: [
    // NHIỆM VỤ 1: LỆNH IN NỘI BỘ TRONG MẠNG LAN
    {
      id: "net-mission-1",
      missionNumber: 1,
      badge: "Mạng LAN & Switch",
      title: "Lệnh in tài liệu nội bộ phòng Tin học",
      scenario:
        "Thầy giáo tại Máy tính A (phòng thực hành Tin học) gửi lệnh in tập đề cương 20 trang sang Máy in mạng đặt tại góc phòng. Cả hai thiết bị đều đang cắm dây mạng RJ45 vào cùng một Bộ chuyển mạch (Switch).",
      taskQuestion:
        "Gói tin dữ liệu in ấn sẽ di chuyển theo lộ trình nào là ĐÚNG NGUYÊN LÝ và AN TOÀN NHẤT theo SGK Tin học 10?",
      diagram: {
        nodes: [
          { id: "pc-a", name: "Máy tính A", emoji: "💻", ip: "192.168.1.10", role: "pc", x: 18, y: 30 },
          { id: "switch", name: "Switch LAN", emoji: "🖧", ip: "Cục bộ LAN", role: "switch", x: 48, y: 50 },
          { id: "printer", name: "Máy in mạng", emoji: "🖨️", ip: "192.168.1.50", role: "printer", x: 18, y: 75 },
          { id: "router", name: "Router", emoji: "🔀", ip: "192.168.1.1", role: "router", x: 75, y: 50 },
          { id: "internet", name: "Internet", emoji: "☁️", role: "internet", x: 92, y: 50 },
        ],
        links: [
          { from: "pc-a", to: "switch", type: "ethernet" },
          { from: "printer", to: "switch", type: "ethernet" },
          { from: "switch", to: "router", type: "ethernet" },
          { from: "router", to: "internet", type: "fiber" },
        ],
        activePacket: {
          sourceId: "pc-a",
          targetId: "printer",
          packetLabel: "Tài liệu in (Print Job 15MB)",
          correctPath: ["pc-a", "switch", "printer"],
        },
      },
      options: [
        {
          id: "a",
          text: "Máy tính A → Switch → Máy in (Chỉ di chuyển trong mạng nội bộ LAN)",
          detail: "Switch đọc địa chỉ MAC của Máy in và chuyển thẳng gói tin, không gửi ra ngoài.",
          isCorrect: true,
          explain:
            "Chính xác! Bộ chuyển mạch (Switch) có chức năng chuyển tiếp dữ liệu giữa các thiết bị trong cùng mạng cục bộ (LAN). Dữ liệu in ấn nội bộ tuyệt đối không cần và không được gửi ra Router hay Internet.",
        },
        {
          id: "b",
          text: "Máy tính A → Switch → Router → Internet → Switch → Máy in",
          detail: "Gói tin phải gửi lên máy chủ đám mây của hãng máy in rồi mới tải ngược về phòng học.",
          isCorrect: false,
          explain:
            "Sai lầm nghiêm trọng! Khi hai thiết bị cùng nằm trong một mạng LAN kết nối qua Switch, gói tin được chuyển tiếp trực tiếp trong nội bộ. Gửi ra Internet sẽ làm nghẽn băng thông và rò rỉ đề thi.",
        },
        {
          id: "c",
          text: "Máy tính A gửi thẳng sóng Wifi trực tiếp sang Máy in không cần qua Switch",
          detail: "Bỏ qua toàn bộ dây cáp mạng mạng LAN.",
          isCorrect: false,
          explain:
            "Không chính xác! Cả Máy tính A và Máy in đều đang cắm dây cáp vào Switch phòng máy, dữ liệu phải đi qua đường truyền có dây và Switch điều phối.",
        },
        {
          id: "d",
          text: "Gói tin bắt buộc phải đi qua Modem để giải mã tín hiệu quang",
          detail: "Mọi gói tin trong trường đều phải qua Modem nhà mạng ISP.",
          isCorrect: false,
          explain:
            "Không đúng! Modem chỉ làm nhiệm vụ khi có dữ liệu đi ra hoặc đi vào từ nhà mạng Internet bên ngoài. Trong nội bộ mạng LAN thì không cần qua Modem.",
        },
      ],
      practicalTip:
        "Ngay cả khi cáp quang ngoài đường bị đứt mất Internet hoàn toàn, phòng Tin học vẫn có thể chia sẻ file và in ấn bình thường nhờ Switch LAN!",
    },

    // NHIỆM VỤ 2: TRUY CẬP INTERNET QUA ROUTER
    {
      id: "net-mission-2",
      missionNumber: 2,
      badge: "Định tuyến Internet",
      title: "Xem video bài giảng trực tuyến từ Smartphone qua Wifi",
      scenario:
        "Bạn Lan dùng điện thoại thông minh kết nối vào mạng Wifi trường học để xem video bài giảng trên YouTube. Tín hiệu sóng Wifi được truyền tới Điểm truy cập không dây (Access Point).",
      taskQuestion:
        "Để yêu cầu xem video từ điện thoại gửi đến máy chủ YouTube toàn cầu, gói tin phải đi qua trình tự các thiết bị nào?",
      diagram: {
        nodes: [
          { id: "phone", name: "Điện thoại", emoji: "📱", ip: "192.168.1.33", role: "phone", x: 12, y: 35 },
          { id: "ap", name: "Access Point", emoji: "📶", role: "switch", x: 32, y: 35 },
          { id: "switch", name: "Switch LAN", emoji: "🖧", role: "switch", x: 48, y: 55 },
          { id: "router", name: "Router", emoji: "🔀", ip: "Default Gateway", role: "router", x: 68, y: 55 },
          { id: "modem", name: "Modem ISP", emoji: "🔌", role: "modem", x: 82, y: 55 },
          { id: "youtube", name: "Máy chủ YouTube", emoji: "🌐", role: "internet", x: 95, y: 55 },
        ],
        links: [
          { from: "phone", to: "ap", type: "wifi" },
          { from: "ap", to: "switch", type: "ethernet" },
          { from: "switch", to: "router", type: "ethernet" },
          { from: "router", to: "modem", type: "ethernet" },
          { from: "modem", to: "youtube", type: "fiber" },
        ],
        activePacket: {
          sourceId: "phone",
          targetId: "youtube",
          packetLabel: "Yêu cầu Video (HTTP GET /watch?v=Tin10)",
          correctPath: ["phone", "ap", "switch", "router", "modem", "youtube"],
        },
      },
      options: [
        {
          id: "a",
          text: "Điện thoại → Access Point → Switch → Router → Modem → Internet (YouTube)",
          detail: "Qua sóng wifi vào mạng nội bộ, Switch đưa tới Router định tuyến ra ngoài qua Modem.",
          isCorrect: true,
          explain:
            "Chuẩn xác 100%! Sóng wifi từ điện thoại tới Access Point chuyển thành tín hiệu mạng có dây vào Switch, Switch chuyển tới Router để tìm đường ra ngoài Internet, Modem chuyển tín hiệu quang gửi đi xa.",
        },
        {
          id: "b",
          text: "Điện thoại phát sóng trực tiếp tới trạm vệ tinh của YouTube ngoài không gian",
          detail: "Điện thoại kết nối thẳng không cần thiết bị mạng nào của trường.",
          isCorrect: false,
          explain:
            "Hoàn toàn sai! Điện thoại chỉ có chip thu phát sóng Wifi tầm ngắn (khoảng vài chục mét), bắt buộc phải kết nối thông qua thiết bị mạng trường học.",
        },
        {
          id: "c",
          text: "Điện thoại → Switch → Máy in → Router → Internet",
          detail: "Mọi gói tin Internet đều phải đi qua Máy in để kiểm duyệt.",
          isCorrect: false,
          explain:
            "Sai! Máy in là thiết bị đầu cuối, không có chức năng chuyển tiếp gói tin của thiết bị khác.",
        },
        {
          id: "d",
          text: "Điện thoại → Modem → Switch → Router → Internet",
          detail: "Modem nhận trực tiếp tín hiệu Wifi từ điện thoại.",
          isCorrect: false,
          explain:
            "Sai thứ tự! Access Point và Switch nằm ở tầng nội bộ kết nối người dùng, Router và Modem nằm ở cổng ngõ kết nối ra thế giới bên ngoài.",
        },
      ],
      practicalTip:
        "Router đóng vai trò như 'Cảnh sát giao thông quốc tế': nhận gói tin từ mạng trường và tìm tuyến cáp quang thông thoáng nhất để gửi ra máy chủ toàn cầu.",
    },

    // NHIỆM VỤ 3: PHÂN BIỆT NHIỆM VỤ CỐT LÕI SWITCH VS ROUTER
    {
      id: "net-mission-3",
      missionNumber: 3,
      badge: "Cốt lõi Switch vs Router",
      title: "Phân định vai trò: Chuyển tiếp nội bộ hay Định tuyến liên mạng?",
      scenario:
        "Kỹ sư mạng đang phân tích một gói tin vừa phát sinh từ máy tính học sinh. Địa chỉ IP đích trong gói tin là `8.8.8.8` (Địa chỉ máy chủ DNS công cộng của Google trên Internet toàn cầu, không thuộc dải mạng `192.168.1.x` của trường).",
      taskQuestion:
        "Theo SGK Tin học 10, thiết bị nào có nhiệm vụ quyết định tìm đường và đưa gói tin này vượt ra khỏi mạng trường học?",
      options: [
        {
          id: "a",
          text: "Bộ định tuyến (Router) — vì nó có chức năng kết nối các mạng khác nhau và tìm đường đi tối ưu",
          detail: "Router đọc địa chỉ IP đích và chuyển gói tin ra cổng WAN hướng về nhà mạng ISP.",
          isCorrect: true,
          explain:
            "Rất chuẩn! Router (Bộ định tuyến) có chức năng kết nối các mạng máy tính khác nhau (LAN với WAN/Internet). Ngược lại, Switch chỉ chuyển tiếp dữ liệu trong phạm vi cùng một mạng cục bộ (LAN).",
        },
        {
          id: "b",
          text: "Bộ chuyển mạch (Switch) — vì Switch quản lý tất cả các địa chỉ trên toàn thế giới",
          detail: "Switch tự động định tuyến toàn bộ Internet.",
          isCorrect: false,
          explain:
            "Sai! Switch chỉ biết địa chỉ các thiết bị cắm trực tiếp vào các cổng của nó trong mạng LAN. Switch không có bảng định tuyến toàn cầu như Router.",
        },
        {
          id: "c",
          text: "Bàn phím máy tính — vì người dùng gõ số 8.8.8.8 trên bàn phím",
          detail: "Bàn phím là thiết bị định tuyến.",
          isCorrect: false,
          explain: "Bàn phím chỉ là thiết bị vào (input), không phải thiết bị mạng.",
        },
        {
          id: "d",
          text: "Dây cáp mạng — vì dây cáp tự biết đọc địa chỉ IP",
          detail: "Dây cáp thông minh tự điều phối dữ liệu.",
          isCorrect: false,
          explain:
            "Dây cáp mạng chỉ là môi trường truyền dẫn vật lý, không có khả năng tính toán hay định tuyến.",
        },
      ],
      practicalTip:
        "Quy tắc vàng: Switch = giao thông trong làng (LAN); Router = trạm thu phí và đường cao tốc nối các tỉnh thành (Internet).",
    },

    // NHIỆM VỤ 4: CHẨN ĐOÁN & CỨU HỘ SỰ CỐ MẠNG
    {
      id: "net-mission-4",
      missionNumber: 4,
      badge: "Chẩn đoán sự cố mạng",
      title: "Cứu hộ phòng máy: In ấn được nhưng mất kết nối Internet!",
      scenario:
        "Sáng thứ Hai, cả trường xôn xao vì không ai vào được Google, Zalo hay tra cứu tài liệu trên mạng. Tuy nhiên, các thầy cô tại phòng Hội đồng vẫn chia sẻ tệp qua mạng nội bộ và in tài liệu trên máy in mạng rất mượt mà.",
      taskQuestion:
        "Với tư cách Kỹ sư mạng, em kết luận bộ phận nào trong hệ thống mạng đang gặp sự cố?",
      options: [
        {
          id: "a",
          text: "Sự cố nằm ở Router, Modem hoặc đứt cáp quang từ nhà mạng ISP — Switch LAN nội bộ vẫn tốt",
          detail: "Mạng LAN hoạt động độc lập với đường truyền Internet bên ngoài.",
          isCorrect: true,
          explain:
            "Chẩn đoán xuất sắc! Vì in ấn và chia sẻ file nội bộ vẫn diễn ra bình thường, chứng tỏ mạng LAN và các bộ chuyển mạch (Switch) hoạt động hoàn hảo. Sự cố chỉ xảy ra ở cổng ngõ đi ra ngoài: Router, Modem hoặc đứt cáp viễn thông.",
        },
        {
          id: "b",
          text: "Tất cả các Switch trong trường đều đã bị cháy hỏng đồng loạt",
          detail: "Cần thay mới toàn bộ Switch của trường.",
          isCorrect: false,
          explain:
            "Nếu Switch bị cháy hỏng thì các máy tính không thể kết nối tới máy in nội bộ được. Ở đây in ấn vẫn tốt nên Switch hoàn toàn bình thường.",
        },
        {
          id: "c",
          text: "Máy in bị hỏng làm nghẽn toàn bộ đường truyền Internet của trường",
          detail: "Máy in là nguồn phát sinh lỗi mạng Internet.",
          isCorrect: false,
          explain:
            "Không hợp lý! Máy in vẫn đang in bình thường và máy in không có vai trò điều phối kết nối Internet.",
        },
        {
          id: "d",
          text: "Toàn bộ máy tính học sinh đều bị nhiễm virus làm mất wifi",
          detail: "Lỗi do học sinh cài game.",
          isCorrect: false,
          explain:
            "Không chính xác. Dấu hiệu mất kết nối diện rộng ra ngoài trong khi mạng nội bộ vẫn thông là điển hình của sự cố Router/Modem/ISP.",
        },
      ],
      practicalTip:
        "Khi mất mạng, bước đầu tiên của chuyên viên IT là kiểm tra đèn 'PON' hoặc 'Internet' trên Modem xem có chuyển sang màu đỏ (mất tín hiệu quang) hay không.",
    },

    // NHIỆM VỤ 5: MỞ RỘNG PHÒNG THỰC HÀNH (NỐI TẦNG SWITCH)
    {
      id: "net-mission-5",
      missionNumber: 5,
      badge: "Kiến trúc mạng",
      title: "Mở rộng phòng Tin học thêm 20 máy tính mới",
      scenario:
        "Trường THPT Na Rì vừa nhận tài trợ 20 máy tính để bàn mới cho phòng thực hành Tin học. Tuy nhiên, bộ chuyển mạch Switch 24 cổng hiện tại chỉ còn duy nhất 1 cổng cắm trống.",
      taskQuestion:
        "Phương án bổ sung thiết bị nào sau đây là TIẾT KIỆM, ĐÚNG CHUYÊN MÔN và CHUẨN THIẾT KẾ MẠNG NHẤT?",
      options: [
        {
          id: "a",
          text: "Mua thêm một Switch 24 cổng mới, cắm 1 dây cáp nối giữa 2 Switch (nối tầng)",
          detail: "20 máy tính mới cắm vào Switch mới, cả 2 Switch liên kết với nhau trong cùng mạng LAN.",
          isCorrect: true,
          explain:
            "Giải pháp tối ưu! Để tăng số lượng cổng kết nối cho các máy tính trong cùng một mạng LAN, cách chuẩn nhất là mua thêm Switch và nối tầng (cascade) với Switch hiện có. Không cần mua thêm Router hay Modem.",
        },
        {
          id: "b",
          text: "Phải mua thêm một đường truyền Internet mới và một Modem mới từ nhà mạng",
          detail: "Mỗi phòng 20 máy tính phải đăng ký một gói cước mạng riêng biệt.",
          isCorrect: false,
          explain:
            "Rất lãng phí và không cần thiết! Cả trường chỉ cần dùng chung đường truyền Internet hiện có thông qua Router.",
        },
        {
          id: "c",
          text: "Mua 20 chiếc USB 4G cắm vào từng máy tính để dùng mạng di động riêng",
          detail: "Không cần kết nối mạng LAN trường học nữa.",
          isCorrect: false,
          explain:
            "Chi phí cước hàng tháng cực kỳ tốn kém và các máy tính không thể chia sẻ bài tập hay thi cử trong mạng LAN trường học.",
        },
        {
          id: "d",
          text: "Cắt đôi dây cáp mạng hiện tại để nối chung 2 máy tính vào 1 cổng Switch",
          detail: "Hàn dây cáp đồng thủ công.",
          isCorrect: false,
          explain:
            "Tuyệt đối không được làm! Cáp mạng truyền tín hiệu số cao tần theo chuẩn RJ45, không thể đấu nối chập dây thủ công như dây điện.",
        },
      ],
      practicalTip:
        "Trong các phòng máy lớn hoặc toà nhà nhiều tầng, các kỹ sư thường dùng một Switch chính (Core Switch) nối tới các Switch phụ ở từng phòng học.",
    },

    // NHIỆM VỤ 6: TƯ VẤN ĐIỆN TOÁN ĐÁM MÂY SAAS
    {
      id: "net-mission-6",
      missionNumber: 6,
      badge: "Đám mây SaaS",
      title: "Giải pháp làm bài tập nhóm trực tuyến cho 800 học sinh",
      scenario:
        "Thầy Hiệu trưởng yêu cầu: 'Cần có giải pháp để toàn bộ 800 học sinh có thể cùng soạn thảo văn bản, làm bài thuyết trình nhóm trực tuyến ở bất cứ đâu, tự động lưu trữ, không cần trường phải mua máy chủ và không cần cài đặt phần mềm phức tạp lên máy tính'.",
      taskQuestion:
        "Kỹ sư tư vấn nhà trường nên sử dụng mô hình dịch vụ điện toán đám mây nào theo SGK Bài 8?",
      options: [
        {
          id: "a",
          text: "Mô hình SaaS (Software as a Service - Phần mềm như một dịch vụ)",
          detail: "Ví dụ: Google Workspace (Docs, Slides, Classroom) hoặc Microsoft 365 trực tuyến.",
          isCorrect: true,
          explain:
            "Chính xác tuyệt đối! SaaS cung cấp các ứng dụng phần mềm hoàn chỉnh chạy trên nền web (như Google Docs, Office 365, Canva). Người dùng chỉ cần tài khoản và trình duyệt web, không cần lo bảo trì phần cứng hay cài đặt.",
        },
        {
          id: "b",
          text: "Mô hình IaaS (Infrastructure as a Service - Hạ tầng như một dịch vụ)",
          detail: "Thuê các máy chủ ảo thô về để học sinh tự viết hệ điều hành.",
          isCorrect: false,
          explain:
            "Không phù hợp! IaaS chỉ cung cấp hạ tầng máy tính ảo trống (CPU, RAM, ổ cứng). Trường học sẽ phải tự cài hệ điều hành, tự phát triển phần mềm soạn thảo rất tốn kém.",
        },
        {
          id: "c",
          text: "Yêu cầu mỗi học sinh tự mua 1 ổ cứng di động 1TB đem theo người",
          detail: "Lưu trữ thủ công bằng USB/ổ cứng rời.",
          isCorrect: false,
          explain:
            "Không phải điện toán đám mây và không thể hỗ trợ cùng sửa một văn bản theo thời gian thực (real-time collaboration).",
        },
        {
          id: "d",
          text: "Mô hình mạng LAN nội bộ chỉ dùng được khi học sinh có mặt tại trường",
          detail: "Không đưa lên đám mây Internet.",
          isCorrect: false,
          explain:
            "Không đáp ứng được yêu cầu làm việc ở bất cứ đâu (ở nhà, quán cà phê) của thầy Hiệu trưởng.",
        },
      ],
      practicalTip:
        "SaaS là hình thức đám mây phổ biến nhất với học sinh: Gmail, Google Drive, Canva, Zoom đều là các dịch vụ SaaS điển hình!",
    },

    // NHIỆM VỤ 7: TƯ VẤN ĐIỆN TOÁN ĐÁM MÂY IAAS
    {
      id: "net-mission-7",
      missionNumber: 7,
      badge: "Đám mây IaaS",
      title: "Dự án nghiên cứu: Cần thuê máy chủ siêu mạnh trong 3 ngày",
      scenario:
        "Nhóm học sinh tham gia cuộc thi Sáng tạo KHKT cần chạy thử nghiệm một mô hình Trí tuệ nhân tạo (AI) nhận diện lá cây bị bệnh. Mô hình này đòi hỏi máy chủ cấu hình rất khủng: 64 Core CPU, 128GB RAM và Card đồ hoạ GPU đắt tiền, nhưng nhóm chỉ cần chạy đúng trong 3 ngày cuối tuần.",
      taskQuestion:
        "Phương án kinh tế và thông minh nhất theo định nghĩa SGK Tin học 10 là gì?",
      options: [
        {
          id: "a",
          text: "Thuê hạ tầng máy chủ ảo IaaS theo giờ trên đám mây (như AWS EC2, Google Compute Engine)",
          detail: "Chỉ trả tiền cho 72 giờ sử dụng, xong việc lập tức xoá máy chủ, chi phí chỉ vài trăm nghìn đồng.",
          isCorrect: true,
          explain:
            "Tư duy công nghệ xuất sắc! Mô hình IaaS (Hạ tầng như một dịch vụ) cho phép thuê tài nguyên tính toán (CPU, RAM, GPU, ổ đĩa) theo nhu cầu thực tế mà không cần bỏ ra hàng trăm triệu mua máy chủ vật lý.",
        },
        {
          id: "b",
          text: "Góp tiền mua ngay một dàn máy chủ vật lý trị giá 250 triệu đồng về trường",
          detail: "Mua đứt máy chủ để sở hữu vĩnh viễn dù chỉ dùng 3 ngày.",
          isCorrect: false,
          explain:
            "Lãng phí khổng lồ! Mua máy chủ đắt đỏ chỉ dùng 3 ngày rồi bỏ không là sai lầm điển hình mà điện toán đám mây IaaS sinh ra để giải quyết.",
        },
        {
          id: "c",
          text: "Dùng máy tính Casio FX-580VN để tính toán thuật toán AI nhận diện ảnh",
          detail: "Máy tính cầm tay bỏ túi.",
          isCorrect: false,
          explain: "Máy tính bỏ túi không đủ bộ nhớ và năng lực tính toán để huấn luyện mô hình thị giác máy tính.",
        },
        {
          id: "d",
          text: "Chờ đến khi máy tính tự thông minh lên mà không cần huấn luyện",
          detail: "Không cần tài nguyên tính toán.",
          isCorrect: false,
          explain: "Phi thực tế và trái quy luật khoa học máy tính.",
        },
      ],
      practicalTip:
        "Khái niệm IaaS: Người dùng toàn quyền cài bất cứ hệ điều hành nào (Ubuntu, Windows Server...) và phần mềm nào họ muốn lên cụm phần cứng ảo đã thuê.",
    },

    // NHIỆM VỤ 8: THIẾT KẾ HỆ THỐNG SMART FARM IOT
    {
      id: "net-mission-8",
      missionNumber: 8,
      badge: "Hệ thống IoT",
      title: "Thiết kế chuỗi vận hành Nông trại thông minh Smart Farm",
      scenario:
        "Bác nông dân huyện Na Rì muốn lắp đặt hệ thống tưới nước tự động cho vườn cây ăn quả theo công nghệ IoT (Internet vạn vật) được học trong SGK Bài 8.",
      taskQuestion:
        "Chuỗi các bước vận hành khép kín nào sau đây mô tả ĐÚNG BẢN CHẤT của hệ thống IoT?",
      options: [
        {
          id: "a",
          text: "[Cảm biến độ ẩm đất] → [Vi điều khiển gửi dữ liệu qua Internet lên Cloud] → [Thuật toán ra lệnh bật van bơm] → [Thông báo về Smartphone]",
          detail: "Thu thập dữ liệu tự động → Truyền qua mạng → Xử lý ra quyết định → Tác động trở lại môi trường.",
          isCorrect: true,
          explain:
            "Xuất sắc! Đây chính là mô hình IoT chuẩn SGK: Thiết bị thông minh có gắn cảm biến (thu nhận dữ liệu) kết nối mạng Internet, tự động tương tác và điều khiển máy móc mà không cần con người trực tiếp can thiệp thủ công.",
        },
        {
          id: "b",
          text: "Bác nông dân nhìn trời mưa nắng rồi tự xách xô đi tưới nước bằng tay",
          detail: "Lao động thủ công hoàn toàn.",
          isCorrect: false,
          explain: "Đây là nông nghiệp thủ công truyền thống, không có yếu tố thiết bị thông minh hay mạng IoT.",
        },
        {
          id: "c",
          text: "Cài đặt đồng hồ báo thức reo chuông 6h sáng để bác nông dân thức dậy bật máy bơm",
          detail: "Chỉ có đồng hồ bấm giờ thông thường.",
          isCorrect: false,
          explain:
            "Không phải IoT! Đồng hồ không kết nối mạng, không đo được độ ẩm thực tế của đất (nếu trời đang mưa to đất ẩm sũng thì đồng hồ vẫn kêu).",
        },
        {
          id: "d",
          text: "Đổ nước trực tiếp vào ổ cắm điện để cảm biến tự kích hoạt",
          detail: "Thử nghiệm nguy hiểm.",
          isCorrect: false,
          explain: "Cực kỳ nguy hiểm gây chập cháy điện, trái quy tắc an toàn phòng thí nghiệm.",
        },
      ],
      practicalTip:
        "IoT (Internet of Things) = Cảm biến (Sensor) + Kết nối mạng (Network) + Trí tuệ xử lý (Cloud/AI) + Thiết bị chấp hành tự động (Actuator)!",
    },
  ],
};

// =====================================================================
// CÁC GAME BỔ TRỢ KHÁC CỦA BÀI 8 (GIỮ LẠI ĐỂ ĐA DẠNG LỰA CHỌN)
// =====================================================================
const sortGameLan: SortGame = {
  kind: "sort",
  id: "lan-hay-internet",
  title: "Phân loại đặc trưng: Mạng LAN vs Internet",
  emoji: "🖧",
  instructions:
    "Kéo (hoặc bấm nút) từng thẻ sang đúng khay: mô tả đó là đặc điểm của mạng LAN (phạm vi nhỏ, có chủ sở hữu) hay của Internet (toàn cầu, không chủ sở hữu)?",
  matchLabel: "Internet",
  matchEmoji: "🌍",
  noMatchLabel: "LAN",
  noMatchEmoji: "🏠",
  items: [
    {
      id: "switch-hub",
      emoji: "🔌",
      label: "Switch/Hub chỉ chuyển tiếp dữ liệu trong nội bộ",
      isMatch: false,
      explain: "Đây là đặc điểm hoạt động của Switch/Hub — thiết bị chỉ chuyển tiếp dữ liệu trong phạm vi mạng LAN.",
    },
    {
      id: "phong-thuc-hanh",
      emoji: "🏫",
      label: "Mạng máy tính phòng thực hành Tin học của trường",
      isMatch: false,
      explain: "Phạm vi nhỏ (1 phòng/1 trường), có chủ sở hữu xác định (nhà trường) — đây là một mạng LAN.",
    },
    {
      id: "may-in-vanphong",
      emoji: "🖨️",
      label: "Hai máy in dùng chung trong văn phòng, nối qua Switch",
      isMatch: false,
      explain: "Kết nối trực tiếp trong nội bộ văn phòng qua thiết bị kết nối như Switch — đặc trưng của LAN.",
    },
    {
      id: "wifi-nha",
      emoji: "📶",
      label: "Mạng wifi trong nhà em",
      isMatch: false,
      explain: "Phạm vi gia đình, có chủ sở hữu (gia đình em) — đây là mạng LAN.",
    },
    {
      id: "hangty-may",
      emoji: "🌍",
      label: "Mạng kết nối hàng tỉ máy tính trên toàn thế giới",
      isMatch: true,
      explain: "Phạm vi toàn cầu — đúng là đặc điểm của Internet.",
    },
    {
      id: "khong-chu-so-huu",
      emoji: "🚫",
      label: "Không có ai là chủ sở hữu duy nhất trên thế giới",
      isMatch: true,
      explain: "Internet không của riêng ai, chỉ có vài tổ chức phi lợi nhuận quốc tế điều phối tài nguyên.",
    },
    {
      id: "router-gui-ra",
      emoji: "🔀",
      label: "Router gửi dữ liệu ra ngoài khi đích đến không nằm trong LAN",
      isMatch: true,
      explain: "Đây là nguyên lí hoạt động của Router — thiết bị kết nối các LAN với Internet.",
    },
  ],
};

const sort3GameCloud: Sort3Game = {
  kind: "sort3",
  id: "dich-vu-dam-may",
  title: "Phân loại mô hình Đám mây: SaaS, PaaS hay IaaS?",
  emoji: "☁️",
  instructions:
    "Mỗi thẻ mô tả một loại hình dịch vụ điện toán đám mây. Hãy bấm chọn đúng nhóm: SaaS (phần mềm ứng dụng), PaaS (nền tảng phát triển) hay IaaS (hạ tầng phần cứng ảo hoá)?",
  groups: [
    { label: "SaaS (Phần mềm)", emoji: "📱" },
    { label: "PaaS (Nền tảng)", emoji: "🛠️" },
    { label: "IaaS (Hạ tầng)", emoji: "🖥️" },
  ],
  items: [
    {
      id: "saas-gmail",
      emoji: "📧",
      label: "Dịch vụ thư điện tử Gmail dùng trực tiếp trên trình duyệt",
      group: 0,
      explain: "Gmail là phần mềm hoàn chỉnh, người dùng chỉ việc mở web lên dùng — đúng là SaaS.",
    },
    {
      id: "saas-docs",
      emoji: "📄",
      label: "Google Docs soạn thảo văn bản trực tuyến nhiều người cùng làm",
      group: 0,
      explain: "Ứng dụng văn phòng chạy hoàn toàn trên đám mây, không cần cài gì — đúng là SaaS.",
    },
    {
      id: "paas-database",
      emoji: "🗄️",
      label: "Dịch vụ cơ sở dữ liệu và môi trường lập trình Python cấu hình sẵn trên mạng",
      group: 1,
      explain: "Cung cấp nền tảng và môi trường sẵn có để lập trình viên xây dựng ứng dụng — đúng là PaaS.",
    },
    {
      id: "iaas-aws",
      emoji: "🖥️",
      label: "Thuê máy chủ ảo trống trên Amazon Web Services rồi tự cài hệ điều hành và cấu hình",
      group: 2,
      explain: "Thuê hạ tầng máy chủ ảo rồi tự cài đặt mọi thứ từ hệ điều hành trở lên — đúng là IaaS.",
    },
  ],
};

// Đặt game Simulator lên vị trí đầu tiên
const games: LessonGame[] = [networkGameSimulator, sortGameLan, sort3GameCloud];

export default games;
