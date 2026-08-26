import type { LessonTheory } from "@/lib/types";

const bai33: LessonTheory = {
  intro:
    "Buổi hướng nghiệp cuối chủ đề, nhà trường mời chị Hoa — cựu học sinh, hiện là nhà thiết kế đồ hoạ tại một công ty truyền thông ở Thái Nguyên — về nói chuyện với lớp. Chị mở màn bằng câu hỏi: \"Các em nghĩ nghề thiết kế đồ hoạ là ngồi vẽ đẹp trên máy tính cả ngày đúng không?\" Cả lớp gật đầu, rồi chị kể lại một ngày làm việc thật của mình khiến ai cũng bất ngờ. Bài học này tìm hiểu nghề thiết kế đồ hoạ máy tính làm gì, cần công cụ và tố chất nào, và học sinh lớp 10 có thể chuẩn bị gì ngay từ bây giờ nếu muốn theo nghề.",
  minutes: 14,
  sections: [
    {
      id: "cong-viec",
      emoji: "🎨",
      heading: "1. Nghề thiết kế đồ hoạ máy tính làm những công việc gì?",
      blocks: [
        {
          kind: "text",
          text: "Chị Hoa kể lại một ngày làm việc: sáng gặp khách hàng nghe yêu cầu về bộ nhận diện cho một thương hiệu chè, trưa phác thảo ý tưởng ra giấy, chiều dựng logo trên máy, tối gửi ba phương án cho khách chọn rồi chờ góp ý để chỉnh sửa. \"Vẽ trên máy chỉ là một khâu\" — chị nói — \"phần lớn thời gian là hiểu khách hàng muốn gì và thuyết phục họ bằng hình ảnh\".",
        },
        { kind: "figure", diagram: "mot-ngay-cua-nha-thiet-ke", caption: "Một ngày làm việc của nhà thiết kế — quy trình lặp đi lặp lại giữa dựng bản và chỉnh sửa theo góp ý" },
        {
          kind: "text",
          text: "Nói ngắn gọn, nhà thiết kế đồ hoạ máy tính là người dùng công cụ số để sáng tạo ra hình ảnh truyền tải một thông điệp: từ một chiếc logo nhỏ đến cả một bộ nhận diện thương hiệu.",
        },
        {
          kind: "cards",
          tone: "grape",
          items: [
            { emoji: "🏷️", title: "Nhận diện thương hiệu", text: "Logo, bảng màu, kiểu chữ, ấn phẩm — bộ mặt hình ảnh của một công ty hay sản phẩm." },
            { emoji: "📣", title: "Ấn phẩm truyền thông", text: "Poster, banner quảng cáo, bao bì sản phẩm, minh hoạ sách báo." },
            { emoji: "📱", title: "Giao diện số (UI/UX)", text: "Giao diện web, ứng dụng di động — mảng đang phát triển rất mạnh hiện nay." },
            { emoji: "🎮", title: "Đồ hoạ game, video", text: "Nhân vật, hiệu ứng hình ảnh cho trò chơi điện tử và các sản phẩm video." },
          ],
        },
        {
          kind: "note",
          text: "Một sản phẩm như \"bảng lương nhân viên\" không phải là sản phẩm thiết kế đồ hoạ — đó là nghiệp vụ kế toán, dù cũng được trình bày trên máy tính. Điểm phân biệt là thiết kế đồ hoạ luôn nhằm mục đích truyền tải thông điệp bằng hình ảnh, không đơn thuần là trình bày số liệu.",
        },
        {
          kind: "check",
          q: "Theo lời kể của chị Hoa, phần nào chiếm nhiều thời gian nhất trong công việc của một nhà thiết kế đồ hoạ?",
          options: [
            "Chỉ ngồi vẽ liên tục trên phần mềm suốt cả ngày",
            "Gặp gỡ, trao đổi với khách hàng và chỉnh sửa theo phản hồi",
            "Học các phím tắt mới của phần mềm mỗi ngày",
            "Sửa chữa máy tính khi phần mềm bị lỗi",
          ],
          answer: 1,
          explain: "Câu chuyện của chị Hoa cho thấy quy trình lặp đi lặp lại giữa gặp khách hàng, dựng bản và nhận góp ý để chỉnh sửa — đây là phần việc chiếm nhiều thời gian và quyết định chất lượng sản phẩm.",
        },
        {
          kind: "check",
          q: "Sản phẩm nào dưới đây KHÔNG thuộc lĩnh vực thiết kế đồ hoạ máy tính?",
          options: [
            "Bộ nhận diện thương hiệu cho một quán cà phê",
            "Giao diện của một ứng dụng đặt xe trên điện thoại",
            "Bảng tính lương và thưởng của nhân viên công ty",
            "Poster quảng cáo cho một bộ phim sắp chiếu rạp",
          ],
          answer: 2,
          explain: "Bảng tính lương thuộc nghiệp vụ kế toán, không nhằm mục đích truyền tải thông điệp bằng hình ảnh — ba sản phẩm còn lại đều là sản phẩm thiết kế thị giác điển hình.",
        },
      ],
    },
    {
      id: "cong-cu-to-chat",
      emoji: "🧰",
      heading: "2. Công cụ và tố chất — hoá ra đã học từ lớp 10",
      blocks: [
        {
          kind: "text",
          text: "Chị Hoa chiếu màn hình làm việc của mình cho cả lớp xem: bên trái là Inkscape đang mở logo dạng vector, bên phải là GIMP đang chỉnh ảnh chụp đồi chè, còn trên trình duyệt là một phần mềm dựng giao diện web mà chị đang làm cùng đồng nghiệp ở xa theo thời gian thực. Cả lớp trầm trồ: hoá ra những phần mềm đã học ở lớp 10 chính là công cụ nghề nghiệp thật.",
        },
        { kind: "figure", diagram: "tu-kien-thuc-den-cong-cu", caption: "Kiến thức đã học ở lớp 10 chính là bước làm quen đầu tiên với công cụ nghề nghiệp" },
        {
          kind: "list",
          items: [
            "Đồ hoạ vector (Inkscape) dùng cho logo, icon — vì cần co giãn nhiều kích cỡ, từ danh thiếp đến biển quảng cáo khổ lớn, mà không bị vỡ nét.",
            "Đồ hoạ bitmap (GIMP/Photoshop) dùng để chỉnh sửa ảnh chụp thật, ghép ảnh, xử lí màu sắc.",
            "Thiết kế giao diện web/ứng dụng (UI/UX) là mảng công việc mới, kết hợp cả thẩm mĩ lẫn hiểu tâm lí người dùng.",
          ],
        },
        {
          kind: "compare",
          left: {
            title: "Tố chất cần rèn luyện",
            emoji: "✅",
            items: ["Óc thẩm mĩ và tư duy sáng tạo", "Thành thạo công cụ số (thao tác thạo dần qua luyện tập)", "Hiểu nguyên tắc bố cục, màu sắc, kiểu chữ"],
          },
          right: {
            title: "Ngộ nhận thường gặp",
            emoji: "❌",
            items: ["Phải nhớ hết mọi phím tắt ngay từ đầu mới làm được nghề", "Phải vẽ tay thật đẹp, không cần dùng máy tính", "Phải giỏi lập trình, thuật toán mới thiết kế được"],
          },
        },
        {
          kind: "note",
          text: "Phím tắt phần mềm dùng nhiều tự nhiên sẽ nhớ, không cần học thuộc lòng trước. Vẽ tay đẹp là một lợi thế nhưng sản phẩm cuối cùng vẫn phải hoàn thiện trên máy tính. Còn tư duy thuật toán, lập trình là công việc của một nghề khác — lập trình viên — không phải yêu cầu bắt buộc của nghề thiết kế đồ hoạ.",
        },
        {
          kind: "check",
          q: "Vì sao logo của một thương hiệu thường được vẽ bằng đồ hoạ vector (ví dụ trên Inkscape) thay vì đồ hoạ bitmap?",
          options: [
            "Vì vector luôn có nhiều màu sắc hơn bitmap",
            "Vì logo cần co giãn ở nhiều kích cỡ khác nhau mà không bị vỡ nét",
            "Vì phần mềm vector rẻ hơn phần mềm bitmap",
            "Vì bitmap không thể lưu được hình có màu",
          ],
          answer: 1,
          explain: "Logo phải in được từ danh thiếp nhỏ đến biển quảng cáo khổ lớn. Ảnh vector phóng to thu nhỏ tuỳ ý mà không vỡ nét, còn ảnh bitmap phóng to quá mức sẽ bị rỗ — đây là kiến thức đã học ở bài 12.",
        },
        {
          kind: "check",
          q: "Nhận định nào dưới đây là NGỘ NHẬN, không đúng về nghề thiết kế đồ hoạ?",
          options: [
            "Cần có óc thẩm mĩ và tư duy sáng tạo",
            "Cần thành thạo dần các phần mềm thiết kế qua luyện tập",
            "Bắt buộc phải giỏi lập trình và thuật toán mới làm được nghề",
            "Cần hiểu các nguyên tắc cơ bản về bố cục và màu sắc",
          ],
          answer: 2,
          explain: "Giỏi lập trình, thuật toán là yêu cầu của nghề lập trình viên, không phải điều kiện bắt buộc để theo nghề thiết kế đồ hoạ.",
        },
      ],
    },
    {
      id: "con-duong",
      emoji: "🌱",
      heading: "3. Con đường theo nghề: chuẩn bị gì từ bây giờ?",
      blocks: [
        {
          kind: "text",
          text: "Cuối buổi, chị Hoa nhắn nhủ: \"Các em muốn theo nghề thì rèn ba thứ ngay từ bây giờ. Ngành này giờ có thêm công cụ AI hỗ trợ, nhưng AI không thay được người biết đặt câu hỏi đúng cho khách hàng.\"",
        },
        { kind: "figure", diagram: "ba-dieu-ren-luyen", caption: "Ba điều chị Hoa nhắn nhủ — rèn luyện được ngay từ lớp 10" },
        {
          kind: "steps",
          items: [
            { label: "1", title: "Luyện tập bằng bài nhỏ", text: "Thiết kế thiệp, logo lớp, poster cho hoạt động Đoàn — làm nhiều để tay nghề phần mềm lên dần, không cần chờ dự án lớn." },
            { label: "2", title: "Lập bộ sưu tập sản phẩm (portfolio)", text: "Lưu lại các sản phẩm đã làm, dù nhỏ, để theo dõi sự tiến bộ và giới thiệu khi cần." },
            { label: "3", title: "Tìm hiểu ngành đào tạo phù hợp", text: "Thiết kế đồ hoạ, Mĩ thuật ứng dụng, Truyền thông đa phương tiện là các nhóm ngành đào tạo cả nền tảng mĩ thuật lẫn công cụ số." },
          ],
        },
        {
          kind: "example",
          title: "Xu hướng mở rộng cơ hội nghề nghiệp",
          text: "Thương mại điện tử, mạng xã hội và game phát triển mạnh khiến nhu cầu hình ảnh tăng lên không ngừng — cửa hàng nào cũng cần ảnh sản phẩm đẹp, trang mạng xã hội nào cũng cần hình ảnh thu hút. Công cụ AI hỗ trợ tạo phác thảo nhanh hơn, nhưng người quyết định ý tưởng, gu thẩm mĩ và hiểu đúng mong muốn của khách hàng vẫn luôn là con người.",
        },
        {
          kind: "note",
          text: "Ý thức tôn trọng bản quyền — đã học ở bài 11 — là yêu cầu đạo đức nghề nghiệp quan trọng của người làm thiết kế: không sao chép, không lấy sản phẩm của người khác làm của mình, luôn ghi rõ nguồn khi dùng tư liệu tham khảo.",
        },
        {
          kind: "check",
          q: "Học sinh muốn theo nghề thiết kế đồ hoạ nên bắt đầu chuẩn bị bằng cách nào ngay từ lớp 10?",
          options: [
            "Chờ vào đại học rồi mới bắt đầu học phần mềm thiết kế",
            "Luyện tập bằng các bài tập nhỏ như thiệp, logo lớp, poster và lưu lại thành bộ sưu tập sản phẩm",
            "Chỉ cần học thuộc lý thuyết về màu sắc, không cần thực hành phần mềm",
            "Tập trung học lập trình thật giỏi trước, thiết kế học sau cũng được",
          ],
          answer: 1,
          explain: "Thực hành thường xuyên bằng các bài tập nhỏ và lưu lại thành bộ sưu tập sản phẩm (portfolio) là cách chuẩn bị thiết thực nhất ngay từ bây giờ.",
        },
        {
          kind: "check",
          q: "Theo lời chị Hoa, vai trò của công cụ AI trong nghề thiết kế đồ hoạ hiện nay là gì?",
          options: [
            "AI sẽ thay thế hoàn toàn nhà thiết kế trong tương lai gần",
            "AI là công cụ hỗ trợ tăng năng suất, không thay được người biết đặt câu hỏi đúng cho khách hàng",
            "AI chỉ dùng được cho lập trình, không liên quan đến thiết kế đồ hoạ",
            "AI khiến nghề thiết kế đồ hoạ không còn cơ hội phát triển",
          ],
          answer: 1,
          explain: "Chị Hoa khẳng định AI là công cụ hỗ trợ, giúp tăng năng suất, nhưng năng lực hiểu khách hàng và đưa ra ý tưởng đúng vẫn thuộc về con người.",
        },
      ],
    },
  ],
  summary: [
    "Nhà thiết kế đồ hoạ máy tính dùng công cụ số để sáng tạo hình ảnh truyền tải thông điệp: logo, bộ nhận diện thương hiệu, ấn phẩm truyền thông, giao diện UI/UX, đồ hoạ game/video — và dành phần lớn thời gian giao tiếp, chỉnh sửa theo phản hồi khách hàng, không chỉ ngồi vẽ.",
    "Công cụ nghề nghiệp chính là những phần mềm đã học ở lớp 10: Inkscape cho đồ hoạ vector (logo, icon), GIMP/Photoshop cho đồ hoạ bitmap (ảnh chụp), cùng các phần mềm dựng giao diện UI/UX.",
    "Tố chất cần rèn: óc thẩm mĩ, tư duy sáng tạo, thành thạo công cụ (qua luyện tập dần, không cần thuộc phím tắt từ đầu) — không bắt buộc phải giỏi lập trình hay vẽ tay đẹp.",
    "Chuẩn bị từ lớp 10: luyện tập bằng bài nhỏ, lập bộ sưu tập sản phẩm (portfolio), tìm hiểu ngành Thiết kế đồ hoạ/Mĩ thuật ứng dụng/Truyền thông, và luôn giữ ý thức tôn trọng bản quyền.",
  ],
};

export default bai33;
