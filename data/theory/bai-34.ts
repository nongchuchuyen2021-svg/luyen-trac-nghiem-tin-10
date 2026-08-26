import type { LessonTheory } from "@/lib/types";

const bai34: LessonTheory = {
  intro:
    "Tiết hướng nghiệp cuối cùng của môn Tin học 10, nhà trường mời anh Thắng — cựu học sinh, hiện là kĩ sư phần mềm — về chia sẻ. Anh mở đầu bằng câu chuyện dự án gần nhất: công ty anh làm ứng dụng đặt lịch khám cho một bệnh viện, nhóm có 6 người với 6 công việc khác nhau. \"Code chỉ chiếm chừng một nửa thời gian thôi các em ạ\" — anh nói, khiến cả lớp bất ngờ vì tưởng nghề lập trình là chỉ ngồi gõ code cả ngày. Bài học cuối cùng của môn học này tìm hiểu nghề phát triển phần mềm thực sự làm gì, những gì đã học ở lớp 10 sẽ theo các em đi bao xa, và cơ hội nghề nghiệp dành cho học sinh vùng cao như Na Rì.",
  minutes: 15,
  sections: [
    {
      id: "quy-trinh-nhom",
      emoji: "🏗️",
      heading: "1. Phát triển phần mềm là việc của một nhóm, không phải một người",
      blocks: [
        {
          kind: "text",
          text: "Anh Thắng kể: dự án đặt lịch khám bệnh có một người phân tích nghiệp vụ ngồi với bác sĩ để hiểu quy trình khám, hai người viết giao diện, hai người viết phần xử lí dữ liệu, và một người chuyên tìm lỗi. Không ai trong nhóm làm hết mọi việc — mỗi người phụ trách một công đoạn trong quy trình phát triển phần mềm.",
        },
        { kind: "figure", diagram: "quy-trinh-va-vai-tro-nhom", caption: "Quy trình phát triển phần mềm — mỗi công đoạn gắn với một vai trò chuyên biệt trong nhóm" },
        {
          kind: "steps",
          items: [
            { label: "1", title: "Xác định yêu cầu", text: "Làm việc với khách hàng, người dùng để hiểu rõ họ cần gì — giống bước 1 của quy trình giải bài toán đã học ở bài 31, nhưng ở quy mô lớn hơn nhiều." },
            { label: "2", title: "Thiết kế", text: "Xác định cấu trúc hệ thống, cơ sở dữ liệu, giao diện — vẽ ra bản thiết kế trước khi viết bất kì dòng code nào." },
            { label: "3", title: "Lập trình", text: "Lập trình viên (developer) viết mã nguồn để hiện thực hoá bản thiết kế thành chương trình chạy được." },
            { label: "4", title: "Kiểm thử", text: "Kĩ sư kiểm thử (tester) chủ động nghĩ ra các tình huống để tìm lỗi trước khi phần mềm đến tay người dùng — vận dụng đúng tinh thần kiểm thử đã học ở bài 30." },
            { label: "5", title: "Triển khai & bảo trì", text: "Đưa phần mềm vào sử dụng thật, theo dõi vận hành, sửa lỗi phát sinh và nâng cấp theo nhu cầu mới." },
          ],
        },
        {
          kind: "note",
          text: "Đường đứt nét trong sơ đồ nhắc một điều quan trọng: dùng thật rồi vẫn có thể phát sinh lỗi mới, buộc phải quay lại sửa code. Vòng đời phần mềm không dừng lại ở lúc phát hành — bảo trì có thể kéo dài nhiều năm sau đó.",
        },
        {
          kind: "check",
          q: "Trong quy trình phát triển phần mềm, bước nào cần thực hiện trước bước lập trình?",
          options: [
            "Triển khai và bảo trì",
            "Xác định yêu cầu và thiết kế",
            "Kiểm thử toàn bộ hệ thống",
            "Không có bước nào cần làm trước, viết code trước là được",
          ],
          answer: 1,
          explain: "Phải hiểu rõ người dùng cần gì (xác định yêu cầu) và vạch ra cấu trúc giải pháp (thiết kế) trước khi viết code, nếu không sẽ phải viết đi viết lại rất nhiều lần.",
        },
        {
          kind: "check",
          q: "Trong nhóm dự án của anh Thắng, người ngồi với bác sĩ để hiểu quy trình khám bệnh đang đảm nhiệm công đoạn nào?",
          options: ["Lập trình", "Kiểm thử", "Xác định yêu cầu", "Triển khai và bảo trì"],
          answer: 2,
          explain: "Tìm hiểu nhu cầu thực tế của người dùng (ở đây là quy trình khám của bác sĩ) chính là công đoạn xác định yêu cầu — bước đầu tiên và quan trọng nhất.",
        },
      ],
    },
    {
      id: "python-den-nghe",
      emoji: "🧭",
      heading: "2. Từ Python lớp 10 đến nghề nghiệp thật — điều gì mang theo?",
      blocks: [
        {
          kind: "text",
          text: "Anh Thắng kể tiếp: \"Hồi lớp 10 anh học Python như các em bây giờ, viết mấy chương trình tính điểm, đếm số chẵn lẻ. Giờ ngôn ngữ anh dùng chính là Java và JavaScript, nhưng cái anh mang theo từ lớp 10 là cách nghĩ: chia bài toán lớn thành việc nhỏ, viết ra rồi kiểm thử cẩn thận. Ngôn ngữ nào rồi cũng học được nếu tư duy vững.\"",
        },
        { kind: "figure", diagram: "tu-python-den-nghe-nghiep", caption: "Ngôn ngữ lập trình có thể đổi theo công việc, nhưng tư duy lập trình thì theo suốt sự nghiệp" },
        {
          kind: "text",
          text: "Đây chính là điều cốt lõi của môn Tin học lớp 10: không phải để ai cũng trở thành chuyên gia Python, mà để rèn tư duy lập trình — thứ áp dụng được với bất kì ngôn ngữ nào sau này.",
        },
        {
          kind: "cards",
          tone: "grape",
          items: [
            { emoji: "🧩", title: "Chia để trị", text: "Tách một bài toán lớn thành các hàm, các phần nhỏ dễ xử lí — chính là tư tưởng đằng sau việc dùng hàm ở bài 26-28." },
            { emoji: "🧪", title: "Kiểm thử cẩn thận", text: "Không tin ngay chương trình chạy được là đúng — phải thử với nhiều bộ dữ liệu như đã luyện ở bài 30-31." },
            { emoji: "📚", title: "Tự học suốt đời", text: "Công nghệ đổi rất nhanh, người làm nghề phải quen với việc liên tục học công cụ và ngôn ngữ mới." },
            { emoji: "🤝", title: "Làm việc nhóm", text: "Phần mềm thực tế có hàng nghìn tệp mã nguồn, không ai làm một mình — luôn cần phối hợp và thống nhất với đồng đội." },
          ],
        },
        {
          kind: "note",
          text: "Có một tố chất nghe tưởng quan trọng nhưng thực ra không phải cốt lõi: gõ bàn phím thật nhanh và nhớ chính xác cú pháp nhiều ngôn ngữ. Cú pháp có thể tra cứu bất cứ lúc nào; thứ máy tính và công cụ tra cứu không thay được cho con người chính là tư duy giải quyết vấn đề.",
        },
        {
          kind: "check",
          q: "Theo lời anh Thắng, điều gì từ lớp 10 sẽ còn theo anh suốt sự nghiệp, dù ngôn ngữ lập trình đã đổi khác?",
          options: [
            "Cú pháp chính xác của ngôn ngữ Python",
            "Tư duy chia bài toán lớn thành việc nhỏ và thói quen kiểm thử cẩn thận",
            "Tốc độ gõ bàn phím thật nhanh",
            "Việc chỉ dùng đúng một ngôn ngữ lập trình duy nhất suốt đời",
          ],
          answer: 1,
          explain: "Cú pháp cụ thể của Python sẽ không còn dùng nếu đổi sang Java hay JavaScript, nhưng tư duy chia nhỏ bài toán và thói quen kiểm thử thì áp dụng được với mọi ngôn ngữ.",
        },
        {
          kind: "check",
          q: "Tố chất nào KHÔNG phải là yêu cầu cốt lõi của nghề phát triển phần mềm?",
          options: [
            "Tư duy lôgic và kiên trì giải quyết vấn đề",
            "Ham học hỏi công nghệ mới và kĩ năng làm việc nhóm",
            "Nhớ chính xác cú pháp của thật nhiều ngôn ngữ lập trình khác nhau",
            "Khả năng chia một bài toán lớn thành các phần việc nhỏ hơn",
          ],
          answer: 2,
          explain: "Cú pháp có thể tra cứu bất cứ lúc nào khi cần, không cần thuộc lòng — cái máy tính không thay được là tư duy giải quyết vấn đề của con người.",
        },
      ],
    },
    {
      id: "co-hoi-nghe",
      emoji: "🌐",
      heading: "3. Cơ hội nghề nghiệp: không cần sống ở thành phố lớn",
      blocks: [
        {
          kind: "text",
          text: "Cuối buổi, một bạn hỏi: \"Ở vùng cao như quê mình thì có làm nghề này được không anh?\" Anh Thắng cười: \"Anh có đồng nghiệp ngồi ở Bắc Kạn làm cho công ty Nhật, họp online mỗi sáng. Nghề này cần Internet, máy tính và cái đầu — chứ không cần em phải sống ở thành phố. Nhưng phải giỏi thật, và tiếng Anh phải đủ để đọc tài liệu.\"",
        },
        { kind: "figure", diagram: "lam-viec-tu-xa", caption: "Nghề phát triển phần mềm không đòi hỏi phải sống ở thành phố lớn — chỉ cần Internet, máy tính và năng lực thật" },
        {
          kind: "list",
          items: [
            "Nhu cầu tuyển dụng ngành công nghệ thông tin ở Việt Nam nhiều năm liền rất lớn, thu nhập khá so với mặt bằng chung.",
            "Làm việc từ xa (remote) cho công ty trong và ngoài nước ngày càng phổ biến, không giới hạn bởi nơi ở.",
            "Tiếng Anh đọc hiểu là lợi thế quan trọng vì phần lớn tài liệu kĩ thuật, diễn đàn, khoá học chất lượng cao đều bằng tiếng Anh.",
            "Ngoài đại học (Công nghệ thông tin, Khoa học máy tính, Kĩ thuật phần mềm, An toàn thông tin) còn có cao đẳng và các khoá đào tạo nghề thiên về thực hành.",
          ],
        },
        {
          kind: "example",
          title: "Kế hoạch rèn luyện từ bây giờ",
          text: "Học chắc Toán và Tin ở phổ thông; luyện lập trình Python đều đặn qua bài tập; tự làm các dự án nhỏ như chương trình quản lí điểm hay một trò chơi đơn giản; học tiếng Anh; tham gia câu lạc bộ Tin học, các cuộc thi tin học trẻ; và rèn thói quen viết code sạch, kiểm thử cẩn thận ngay từ những bài tập nhỏ nhất — đúng như tinh thần bài 31-32 đã luyện tập.",
        },
        {
          kind: "note",
          text: "AI hiện là công cụ hỗ trợ giúp lập trình viên viết code nhanh hơn, chứ chưa thay thế được con người — vẫn cần người hiểu đúng bài toán, ra quyết định thiết kế và kiểm thử kết quả. Đây cũng là lí do nghề này chưa hề bớt cơ hội dù công nghệ AI phát triển mạnh.",
        },
        {
          kind: "check",
          q: "Theo câu chuyện của anh Thắng về đồng nghiệp ở Bắc Kạn, điều gì thực sự cần thiết để làm nghề phát triển phần mềm?",
          options: [
            "Phải chuyển đến sống ở một thành phố lớn",
            "Phải có bằng thạc sĩ trở lên mới được tuyển dụng",
            "Cần Internet ổn định, máy tính, năng lực thực chiến và khả năng đọc hiểu tiếng Anh",
            "Chỉ cần biết một ngôn ngữ lập trình duy nhất là đủ cho cả sự nghiệp",
          ],
          answer: 2,
          explain: "Câu chuyện của anh Thắng khẳng định nơi ở không phải rào cản — điều quyết định là năng lực thật, công cụ làm việc (Internet, máy tính) và khả năng đọc tài liệu tiếng Anh.",
        },
        {
          kind: "check",
          q: "Nhận định nào sau đây phản ánh ĐÚNG vai trò của AI trong nghề phát triển phần mềm hiện nay?",
          options: [
            "AI đã thay thế hoàn toàn lập trình viên trong mọi dự án",
            "AI là công cụ hỗ trợ viết code nhanh hơn, nhưng chưa thay được người hiểu bài toán và kiểm thử kết quả",
            "AI chỉ dùng được cho các công việc văn phòng, không liên quan gì đến lập trình",
            "AI khiến nhu cầu tuyển dụng ngành công nghệ thông tin giảm mạnh",
          ],
          answer: 1,
          explain: "AI hỗ trợ tăng năng suất viết code, nhưng việc hiểu đúng yêu cầu, ra quyết định thiết kế và kiểm thử kết quả vẫn cần con người đảm nhiệm.",
        },
      ],
    },
  ],
  summary: [
    "Phát triển phần mềm là công việc của cả một nhóm với 5 công đoạn: xác định yêu cầu → thiết kế → lập trình → kiểm thử → triển khai và bảo trì, mỗi công đoạn gắn với một vai trò riêng (phân tích nghiệp vụ, thiết kế hệ thống, lập trình viên, tester, kĩ sư vận hành).",
    "Ngôn ngữ lập trình có thể thay đổi theo công việc, nhưng tư duy chia nhỏ bài toán và thói quen kiểm thử cẩn thận — rèn luyện từ Python lớp 10 — mới là thứ theo suốt sự nghiệp.",
    "Tố chất cốt lõi của nghề: tư duy lôgic, kiên trì giải quyết vấn đề, ham học công nghệ mới, làm việc nhóm — không phải nhớ cú pháp hay gõ phím nhanh.",
    "Nghề phát triển phần mềm có nhu cầu tuyển dụng lớn, cho phép làm việc từ xa không giới hạn nơi ở, và AI hiện chỉ là công cụ hỗ trợ chứ chưa thay thế được con người.",
  ],
};

export default bai34;
