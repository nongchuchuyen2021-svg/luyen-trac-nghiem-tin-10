import type { LessonExtra } from "@/lib/types";

// Bài 33. Nghề thiết kế đồ hoạ máy tính
const extra: LessonExtra = {
  tf: [
    {
      id: "b33-tf1",
      context:
        "Trong buổi hướng nghiệp, nhà trường mời chị Hoa — cựu học sinh, hiện là nhà thiết kế đồ hoạ tại một công ty truyền thông ở Thái Nguyên. Chị kể một ngày làm việc: sáng gặp khách hàng nghe yêu cầu về bộ nhận diện cho một thương hiệu chè, trưa phác thảo ý tưởng ra giấy, chiều dựng logo trên máy, tối gửi ba phương án cho khách chọn rồi chờ góp ý để chỉnh sửa.",
      statements: [
        {
          text: "Công việc của nhà thiết kế đồ hoạ bao gồm cả việc tiếp nhận yêu cầu và trao đổi với khách hàng, không chỉ ngồi vẽ trên máy.",
          answer: true,
          explain: "Hiểu đúng nhu cầu khách hàng là bước quyết định chất lượng sản phẩm thiết kế.",
        },
        {
          text: "Bộ nhận diện thương hiệu (logo, bao bì, ấn phẩm) là một sản phẩm tiêu biểu của nghề thiết kế đồ hoạ.",
          answer: true,
          explain: "Thiết kế nhận diện thương hiệu là mảng việc phổ biến nhất của nghề.",
        },
        {
          text: "Kĩ năng giao tiếp, trình bày ý tưởng và tiếp nhận phản hồi là không cần thiết với nghề này.",
          answer: false,
          explain:
            "Ngược lại — chính câu chuyện của chị Hoa cho thấy giao tiếp chiếm phần lớn quy trình làm việc.",
        },
        {
          text: "Việc phác thảo ý tưởng ra giấy trước khi dựng trên máy là bước hợp lí trong quy trình thiết kế.",
          answer: true,
          explain: "Phác thảo nhanh giúp thử nhiều hướng trước khi đầu tư thời gian dựng chi tiết.",
        },
      ],
    },
    {
      id: "b33-tf2",
      context:
        "Chị Hoa chiếu cho học sinh xem màn hình làm việc: bên trái là Inkscape đang mở logo dạng vector, bên phải là GIMP đang chỉnh ảnh chụp đồi chè, còn trên trình duyệt là Figma nơi chị dựng giao diện trang web bán chè cùng đồng nghiệp ở Hà Nội theo thời gian thực. Các bạn học sinh trầm trồ vì hoá ra những phần mềm đã học ở lớp 10 chính là công cụ nghề nghiệp thật.",
      statements: [
        {
          text: "Inkscape phù hợp để xử lí logo vì logo cần co giãn nhiều kích cỡ mà không vỡ nét.",
          answer: true,
          explain: "Đồ hoạ vector là lựa chọn chuẩn cho logo và biểu tượng.",
        },
        {
          text: "GIMP phù hợp để chỉnh sửa ảnh chụp đồi chè vì đây là phần mềm xử lí ảnh bitmap.",
          answer: true,
          explain: "Ảnh chụp là bitmap — cắt ghép, chỉnh màu bằng GIMP hoặc phần mềm tương đương.",
        },
        {
          text: "Thiết kế giao diện website, ứng dụng là một mảng công việc thuộc nghề thiết kế đồ hoạ (UI/UX).",
          answer: true,
          explain: "UI/UX là mảng đang phát triển mạnh của ngành thiết kế số.",
        },
        {
          text: "Vì đã có phần mềm mạnh nên nhà thiết kế không cần óc thẩm mĩ và khả năng sáng tạo.",
          answer: false,
          explain:
            "Phần mềm chỉ là công cụ; ý tưởng và cảm quan thẩm mĩ mới tạo nên giá trị của nhà thiết kế.",
        },
      ],
    },
    {
      id: "b33-tf3",
      context:
        "Cuối buổi, chị Hoa nhắn nhủ: \"Các em muốn theo nghề thì rèn ba thứ: con mắt thẩm mĩ (quan sát, học từ sản phẩm đẹp), tay nghề phần mềm (làm nhiều bài tập nhỏ), và ý thức bản quyền — đừng bao giờ lấy thiết kế của người khác làm của mình. Ngành này giờ có thêm công cụ AI hỗ trợ, nhưng AI không thay được người biết đặt câu hỏi đúng cho khách hàng.\"",
      statements: [
        {
          text: "Ý thức tôn trọng bản quyền là một yêu cầu đạo đức nghề nghiệp của người làm thiết kế.",
          answer: true,
          explain: "Đạo nhái thiết kế vừa vi phạm pháp luật vừa huỷ hoại uy tín nghề nghiệp.",
        },
        {
          text: "Học sinh có thể chuẩn bị cho nghề này ngay từ lớp 10 qua việc thực hành các phần mềm đồ hoạ đã học.",
          answer: true,
          explain: "Chủ đề 4 của môn Tin học 10 chính là bước làm quen đầu tiên với nghề.",
        },
        {
          text: "Theo lời chị Hoa, các công cụ AI sẽ khiến nghề thiết kế đồ hoạ biến mất hoàn toàn.",
          answer: false,
          explain:
            "Chị nói AI là công cụ hỗ trợ, không thay được năng lực hiểu và làm việc với con người.",
        },
        {
          text: "Ngành thiết kế đồ hoạ cho phép làm việc tại công ty, studio hoặc làm tự do (freelance).",
          answer: true,
          explain: "Hình thức làm việc linh hoạt, có thể nhận việc từ xa xuyên tỉnh, xuyên quốc gia.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b33-es1",
      q: "Trình bày công việc chính, sản phẩm tiêu biểu và những phẩm chất, kĩ năng cần có của người làm nghề thiết kế đồ hoạ máy tính.",
      answer:
        "- Công việc: tiếp nhận yêu cầu của khách hàng, xây dựng ý tưởng, phác thảo, dựng sản phẩm bằng phần mềm đồ hoạ, trình bày và chỉnh sửa theo góp ý, bàn giao tệp thành phẩm.\n- Sản phẩm: logo và bộ nhận diện thương hiệu, poster, banner quảng cáo, bao bì sản phẩm, ấn phẩm truyền thông, minh hoạ sách báo, giao diện web/ứng dụng (UI), đồ hoạ cho game và video.\n- Phẩm chất, kĩ năng: óc thẩm mĩ và sáng tạo; thành thạo phần mềm (Photoshop/GIMP, Illustrator/Inkscape, Figma...); hiểu nguyên tắc bố cục, màu sắc, kiểu chữ; kĩ năng giao tiếp, trình bày và tiếp thu phản hồi; quản lí thời gian, làm việc nhóm; tinh thần tự học vì công nghệ thay đổi nhanh; ý thức tôn trọng bản quyền.",
    },
    {
      id: "b33-es2",
      q: "Em hãy nêu những kiến thức, kĩ năng đã học trong môn Tin học lớp 10 có thể hỗ trợ cho nghề thiết kế đồ hoạ. Nếu muốn theo nghề này, em cần chuẩn bị và rèn luyện những gì từ bây giờ?",
      answer:
        "- Kiến thức hỗ trợ: phân biệt đồ hoạ vector và bitmap, hiểu độ phân giải, hệ màu RGB, các định dạng tệp (SVG, PNG, JPG) — Bài 6 và chủ đề 4; thao tác với Inkscape/GIMP: vẽ hình, xếp lớp, nhóm đối tượng, làm việc với đường và văn bản, các phép ghép hình, xuất tệp; kiến thức về bản quyền và ứng xử số (Bài 11); kĩ năng khai thác tài nguyên trên Internet để tìm tư liệu, cảm hứng (Bài 10).\n- Chuẩn bị: thực hành thường xuyên với các bài tập nhỏ (thiết kế thiệp, logo lớp, poster hoạt động Đoàn); lập bộ sưu tập sản phẩm của mình (portfolio); quan sát và phân tích các thiết kế đẹp; học thêm về màu sắc, bố cục, kiểu chữ; rèn tiếng Anh để đọc tài liệu; tham gia các cuộc thi thiết kế của trường; tìm hiểu các ngành đào tạo (Thiết kế đồ hoạ, Mĩ thuật ứng dụng, Truyền thông đa phương tiện).",
    },
  ],
};

export default extra;
