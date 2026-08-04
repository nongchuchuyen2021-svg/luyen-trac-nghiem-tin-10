import type { LessonExtra } from "@/lib/types";

// Bài 11. Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền
const extra: LessonExtra = {
  tf: [
    {
      id: "b11-tf1",
      context:
        "Trong trận bóng đá giao hữu giữa hai lớp, bạn Tráng lớp 10A2 đá phản lưới nhà. Tối đó, một bạn quay được khoảnh khắc ấy liền đăng video lên nhóm kín của khối kèm chú thích chế giễu. Video lan nhanh, nhiều bình luận trêu chọc nặng nề xuất hiện, có người còn ghép ảnh Tráng vào các ảnh chế. Hôm sau Tráng buồn bã xin nghỉ học. Lớp trưởng 10A2 quyết định báo ngay cho cô chủ nhiệm.",
      statements: [
        {
          text: "Đăng video kèm chú thích chế giễu và các bình luận xúc phạm kéo dài là biểu hiện của bắt nạt trên mạng (cyberbullying).",
          answer: true,
          explain: "Sỉ nhục, chế giễu lặp đi lặp lại trên môi trường số gây tổn thương — đúng định nghĩa bắt nạt mạng.",
        },
        {
          text: "Đăng trong \"nhóm kín\" nên hành vi này không gây hại và không ai phải chịu trách nhiệm.",
          answer: false,
          explain: "Nhóm kín vẫn lan truyền được (chụp màn hình, chia sẻ lại) và hành vi xúc phạm vẫn vi phạm dù ở đâu.",
        },
        {
          text: "Việc lớp trưởng báo cho cô chủ nhiệm là cách xử lí đúng khi chứng kiến bạn bị bắt nạt trên mạng.",
          answer: true,
          explain: "Báo người lớn có trách nhiệm, không hùa theo, đứng về phía nạn nhân — ứng xử đúng.",
        },
        {
          text: "Quay và đăng hình ảnh người khác trong tình huống nhạy cảm mà không được phép là xâm phạm quyền hình ảnh cá nhân.",
          answer: true,
          explain: "Quyền của cá nhân đối với hình ảnh của mình được pháp luật bảo vệ.",
        },
      ],
    },
    {
      id: "b11-tf2",
      context:
        "Chuẩn bị thi thiết kế infographic cấp trường, bạn Hội tải một mẫu thiết kế rất đẹp trên mạng về, chỉ đổi tên trường và vài dòng chữ rồi nộp dự thi với tư cách tác phẩm của mình. Bạn cùng nhóm là Dung không đồng ý: \"Thế là đạo tác phẩm của người ta! Mình dùng ảnh tự chụp, biểu tượng từ kho giấy phép mở, có ghi nguồn — chậm hơn nhưng là của mình thật.\"",
      statements: [
        {
          text: "Lấy gần như nguyên mẫu thiết kế của người khác rồi đứng tên mình dự thi là hành vi đạo nhái, vi phạm quyền tác giả.",
          answer: true,
          explain: "Tác phẩm thiết kế được bảo hộ — sao chép rồi nhận là của mình là vi phạm cả pháp luật lẫn liêm chính.",
        },
        {
          text: "Vì mẫu đó đăng công khai trên mạng nên ai tải về dùng thế nào cũng được.",
          answer: false,
          explain: "Đăng công khai không có nghĩa từ bỏ bản quyền — quyền vẫn thuộc tác giả trừ khi họ cho phép.",
        },
        {
          text: "Cách làm của Dung (tư liệu tự tạo, kho giấy phép mở, ghi nguồn) là cách làm tôn trọng bản quyền.",
          answer: true,
          explain: "Dùng tài nguyên được phép và ghi công tác giả — chuẩn mực khi sáng tạo nội dung.",
        },
        {
          text: "Nếu bài của Hội đoạt giải rồi bị phát hiện đạo nhái, giải thưởng có thể bị thu hồi và uy tín bị ảnh hưởng.",
          answer: true,
          explain: "Hậu quả thực tế của đạo nhái: mất giải, mất niềm tin — cái giá đắt hơn nhiều công sức tự làm.",
        },
      ],
    },
    {
      id: "b11-tf3",
      context:
        "Nhóm bạn Páo lập kênh video giới thiệu văn hoá dân tộc Mông: múa khèn, thêu thổ cẩm, chợ phiên. Để video hấp dẫn, Páo định lấy một bài nhạc đang thịnh hành làm nhạc nền, nhưng khi tải lên thì nền tảng báo \"video chứa nội dung có bản quyền, doanh thu sẽ thuộc về chủ sở hữu bản nhạc\". Cả nhóm bèn quyết định nhờ chú của Páo thổi khèn thu âm làm nhạc nền riêng — vừa độc đáo vừa không lo bản quyền.",
      statements: [
        {
          text: "Hệ thống của nền tảng tự phát hiện bản nhạc có bản quyền cho thấy các nội dung số được bảo vệ bằng công nghệ.",
          answer: true,
          explain: "Content ID và các công nghệ tương tự quét và đối chiếu nội dung có bản quyền tự động.",
        },
        {
          text: "Dùng nguyên bài nhạc thịnh hành làm nhạc nền không xin phép là sử dụng tác phẩm không được phép của chủ sở hữu.",
          answer: true,
          explain: "Âm nhạc là tác phẩm được bảo hộ — dùng cho video công khai cần được phép/trả phí bản quyền.",
        },
        {
          text: "Bản thu tiếng khèn do chú của Páo biểu diễn và đồng ý cho nhóm dùng là tài nguyên hợp pháp của kênh.",
          answer: true,
          explain: "Tác phẩm tự tạo với sự đồng ý của người biểu diễn — nhóm có quyền sử dụng.",
        },
        {
          text: "Video của nhóm Páo đăng lên mạng thì ai cũng có quyền tải về, cắt ghép và đăng lại kênh khác mà không cần hỏi nhóm.",
          answer: false,
          explain: "Video của nhóm cũng là tác phẩm được bảo hộ — người khác muốn dùng lại phải xin phép nhóm.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b11-es1",
      q: "Nêu những quy tắc ứng xử văn minh mà học sinh cần tuân thủ trên môi trường số. Vì sao nói \"những gì đã đăng lên mạng thì gần như không thể thu hồi hoàn toàn\"?",
      answer:
        "- Quy tắc: kiểm chứng trước khi chia sẻ; ngôn từ lịch sự, không xúc phạm, miệt thị; tôn trọng quyền riêng tư và hình ảnh người khác (hỏi trước khi đăng ảnh có mặt bạn bè); không tham gia, không cổ vũ bắt nạt mạng; suy nghĩ kĩ trước khi đăng; tôn trọng bản quyền, ghi nguồn khi trích dẫn; báo người lớn khi gặp nội dung xấu.\n- Không thể thu hồi vì: nội dung có thể bị chụp màn hình, tải về, chia sẻ lại tức thì đến vô số nơi; các bản sao nằm ngoài quyền kiểm soát của người đăng; hệ thống lưu trữ, bộ nhớ đệm có thể còn giữ bản sao — xoá bài gốc không xoá được các bản sao đã phát tán.",
    },
    {
      id: "b11-es2",
      q: "Bản quyền (quyền tác giả) là gì và vì sao phải tôn trọng bản quyền trên môi trường số? Là học sinh, em thực hiện nghĩa vụ tôn trọng bản quyền như thế nào trong học tập?",
      answer:
        "- Quyền tác giả: quyền của người sáng tạo đối với tác phẩm của mình (văn học, âm nhạc, phần mềm, hình ảnh, video...), được pháp luật (Luật Sở hữu trí tuệ) bảo hộ.\n- Phải tôn trọng vì: bảo vệ công sức và thu nhập của người sáng tạo, khuyến khích sáng tạo mới; vi phạm có thể bị xử phạt; môi trường số khiến sao chép quá dễ nên ý thức càng quan trọng.\n- Thực hiện: không dùng phần mềm bẻ khoá (dùng phần mềm miễn phí/nguồn mở thay thế); trích dẫn ghi rõ nguồn, không đạo văn; dùng ảnh/nhạc có giấy phép mở hoặc tự tạo; không chia sẻ sách, khoá học lậu; xin phép trước khi dùng tác phẩm của bạn bè.",
    },
  ],
};

export default extra;
