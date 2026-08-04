import type { LessonExtra } from "@/lib/types";

// Bài 1. Thông tin và xử lí thông tin — câu đúng/sai + tự luận
const extra: LessonExtra = {
  tf: [
    {
      id: "b1-tf1",
      context:
        "Sáng thứ Hai, lớp 10A1 trực tuần ghi chép sĩ số các lớp lên bảng theo dõi của Đoàn trường. Bạn Mai cầm sổ đi từng lớp, ghi lại các con số: 10A1 vắng 0, 10A2 vắng 2, 10A3 vắng 1. Cuối buổi, thầy Tổng phụ trách nhìn vào bảng và nhận xét: \"Tuần này khối 10 đi học đầy đủ hơn tuần trước, riêng 10A2 cần nhắc nhở thêm.\" Cả trường nghe nhận xét đều hiểu tình hình chuyên cần của khối.",
      statements: [
        {
          text: "Các con số vắng 0, 2, 1 mà bạn Mai ghi vào sổ là dữ liệu.",
          answer: true,
          explain: "Con số được ghi chép lại trên vật mang tin (sổ, bảng) chính là dữ liệu.",
        },
        {
          text: "Nhận xét của thầy Tổng phụ trách về tình hình chuyên cần là thông tin thu được sau khi xử lí dữ liệu.",
          answer: true,
          explain:
            "Thầy so sánh, tổng hợp các con số (xử lí) để rút ra hiểu biết — đó là thông tin.",
        },
        {
          text: "Bạn Mai đi ghi sĩ số từng lớp là bước tiếp nhận (thu nhận) dữ liệu trong quá trình xử lí thông tin.",
          answer: true,
          explain: "Thu thập số liệu từ thực tế chính là bước tiếp nhận đầu vào.",
        },
        {
          text: "Nếu xoá bảng theo dõi đi thì thông tin về chuyên cần của khối 10 cũng biến mất hoàn toàn, không ai còn biết gì nữa.",
          answer: false,
          explain:
            "Thông tin đã được mọi người tiếp nhận (hiểu biết trong đầu) và có thể còn lưu ở sổ của Mai — xoá một bản ghi dữ liệu không làm mất thông tin.",
        },
      ],
    },
    {
      id: "b1-tf2",
      context:
        "Nhà bạn Dương ở xã vùng cao, bố mẹ trồng cam. Vụ này, bố Dương dùng điện thoại chụp ảnh vườn cam gửi cho thương lái xem, đồng thời ghi vào cuốn sổ tay: \"20/10: hái 350 kg, giá 25 000 đồng/kg\". Cuối vụ, Dương giúp bố cộng tất cả các dòng trong sổ và báo: \"Vụ này nhà mình thu được tổng cộng 42 triệu đồng, cao hơn vụ trước 5 triệu.\" Bố cười: \"Vậy sang năm mở rộng thêm một đồi nữa!\"",
      statements: [
        {
          text: "Dòng chữ \"20/10: hái 350 kg, giá 25 000 đồng/kg\" trong sổ tay là dữ liệu dạng văn bản và số.",
          answer: true,
          explain: "Thông tin về vụ thu hoạch được ghi lại thành chữ và số — là dữ liệu.",
        },
        {
          text: "Bức ảnh vườn cam chụp bằng điện thoại cũng là một dạng dữ liệu.",
          answer: true,
          explain: "Dữ liệu có nhiều dạng: số, văn bản, hình ảnh, âm thanh...",
        },
        {
          text: "Việc Dương cộng các dòng trong sổ để ra tổng thu 42 triệu là bước xử lí dữ liệu.",
          answer: true,
          explain: "Tính toán trên dữ liệu đã thu thập chính là xử lí.",
        },
        {
          text: "Quyết định \"sang năm mở rộng thêm một đồi\" của bố Dương không liên quan gì đến thông tin vừa nhận được.",
          answer: false,
          explain:
            "Quyết định dựa trên thông tin \"thu cao hơn vụ trước\" — thông tin là căn cứ cho hành động.",
        },
      ],
    },
    {
      id: "b1-tf3",
      context:
        "Giờ Tin học, cô giáo cho cả lớp xem một tấm thẻ nhớ 32 GB và hỏi: \"Chiếc thẻ bé bằng móng tay này chứa được bao nhiêu tấm ảnh?\" Bạn Hùng nhẩm tính: mỗi ảnh điện thoại chụp trung bình 4 MB. Bạn Lan thì thắc mắc tại sao dung lượng lại đo bằng GB mà không đo bằng \"số tấm ảnh\" cho dễ hiểu. Cô giải thích rằng máy tính có hệ thống đơn vị đo lượng dữ liệu riêng, bắt đầu từ đơn vị nhỏ nhất.",
      statements: [
        {
          text: "Đơn vị nhỏ nhất để biểu diễn dữ liệu trong máy tính là bit, chỉ nhận giá trị 0 hoặc 1.",
          answer: true,
          explain: "Bit (binary digit) là đơn vị cơ sở, mọi dữ liệu đều quy về dãy bit.",
        },
        {
          text: "1 GB lớn hơn 1 MB đúng 1000 lần theo quy ước trong tin học.",
          answer: false,
          explain: "Trong tin học quy ước 1 GB = 1024 MB (2¹⁰), không phải 1000.",
        },
        {
          text: "Thẻ nhớ 32 GB chứa được khoảng tám nghìn tấm ảnh 4 MB.",
          answer: true,
          explain: "32 GB = 32 × 1024 MB ≈ 32 768 MB; chia 4 MB ≈ 8 192 ảnh — khoảng tám nghìn.",
        },
        {
          text: "Vì thẻ nhớ rất nhỏ nên dữ liệu trong đó không phải là dãy bit như trong máy tính.",
          answer: false,
          explain:
            "Mọi thiết bị số đều lưu dữ liệu dạng bit — kích thước vật lí không thay đổi bản chất biểu diễn.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b1-es1",
      q: "Phân biệt thông tin và dữ liệu. Cho một ví dụ trong đời sống ở trường em, chỉ rõ đâu là dữ liệu, đâu là thông tin và quá trình xử lí diễn ra như thế nào.",
      answer:
        "- Thông tin: những gì đem lại hiểu biết cho con người về thế giới xung quanh và chính mình.\n- Dữ liệu: thông tin đã được ghi lại (con số, văn bản, hình ảnh...) trên vật mang tin để lưu trữ, xử lí — trong máy tính là thông tin đã được số hoá.\n- Ví dụ: điểm các bài kiểm tra ghi trong sổ điểm là DỮ LIỆU; giáo viên tính điểm trung bình rồi xếp loại học lực \"Giỏi\" (XỬ LÍ); kết luận \"em đạt học lực Giỏi\" là THÔNG TIN giúp học sinh và phụ huynh hiểu về kết quả học tập.",
    },
    {
      id: "b1-es2",
      q: "Nêu các bước cơ bản của quá trình xử lí thông tin. Với mỗi bước, cho biết máy tính hỗ trợ con người bằng thiết bị/chức năng nào?",
      answer:
        "Bốn bước: (1) Tiếp nhận — máy hỗ trợ bằng thiết bị vào: bàn phím, chuột, máy quét, micro, camera, cảm biến; (2) Xử lí — bộ xử lí trung tâm (CPU) tính toán theo chương trình; (3) Lưu trữ và truyền — bộ nhớ trong (RAM), thiết bị lưu trữ (ổ cứng, thẻ nhớ, đám mây), mạng máy tính để truyền đi xa; (4) Đưa ra kết quả — thiết bị ra: màn hình, loa, máy in.\nMáy tính vượt trội con người về tốc độ xử lí, độ chính xác và khả năng lưu trữ lớn, nhưng hoạt động theo chương trình do con người viết.",
    },
  ],
};

export default extra;
