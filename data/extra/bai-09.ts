import type { LessonExtra } from "@/lib/types";

// Bài 9. An toàn trên không gian mạng
const extra: LessonExtra = {
  tf: [
    {
      id: "b9-tf1",
      context:
        "Tối chủ nhật, bạn Xuân nhận được tin nhắn từ tài khoản của một người bạn thân: \"Cậu ơi, tớ đang kẹt tiền nộp học gấp, chuyển giúp tớ 500 nghìn vào số tài khoản này nhé, mai tớ trả liền!\" Lời nhắn đúng kiểu xưng hô hằng ngày của hai đứa. Xuân định chuyển ngay nhưng chợt nhớ lời cô dặn, bèn gọi điện thoại trực tiếp cho bạn. Đầu dây bên kia ngơ ngác: \"Tớ có nhắn gì đâu! Chết rồi, chắc nick tớ bị hack!\"",
      statements: [
        {
          text: "Đây là chiêu lừa đảo chiếm đoạt tài khoản rồi giả danh chủ tài khoản để vay tiền người quen.",
          answer: true,
          explain: "Kịch bản mạo danh vay tiền qua tài khoản bị chiếm là hình thức lừa đảo rất phổ biến.",
        },
        {
          text: "Hành động gọi điện thoại xác minh trực tiếp của Xuân là cách xử lí đúng.",
          answer: true,
          explain: "Xác minh qua kênh khác (gọi điện, gặp mặt) trước khi chuyển tiền là nguyên tắc vàng.",
        },
        {
          text: "Vì tin nhắn xưng hô đúng kiểu thân quen nên chắc chắn không thể là lừa đảo.",
          answer: false,
          explain: "Kẻ xấu đọc được tin nhắn cũ nên bắt chước được cách xưng hô — không phải bằng chứng tin cậy.",
        },
        {
          text: "Người bạn của Xuân nên đổi mật khẩu ngay, bật xác thực hai yếu tố và báo cho bạn bè biết tài khoản vừa bị chiếm.",
          answer: true,
          explain: "Đó là ba việc cần làm ngay để lấy lại tài khoản và ngăn kẻ xấu lừa thêm người khác.",
        },
      ],
    },
    {
      id: "b9-tf2",
      context:
        "Bạn Long tải một phần mềm chỉnh sửa video \"bản đầy đủ miễn phí\" từ trang web lạ về máy tính của gia đình. Từ hôm đó, máy khởi động rất chậm, trình duyệt liên tục tự mở trang quảng cáo, và đáng sợ hơn — một buổi tối cả nhà phát hiện các tệp tài liệu trong máy bị đổi đuôi lạ kèm thông báo đòi tiền chuộc bằng tiếng Anh mới mở khoá được dữ liệu.",
      statements: [
        {
          text: "Phần mềm \"bản đầy đủ miễn phí\" từ trang lạ rất có thể là trojan — nguỵ trang phần mềm hữu ích để lừa người dùng tự cài.",
          answer: true,
          explain: "Giả dạng phần mềm có ích để được cài vào máy là đặc trưng của trojan.",
        },
        {
          text: "Các tệp bị mã hoá kèm thông báo đòi tiền chuộc là dấu hiệu máy nhiễm ransomware (mã độc tống tiền).",
          answer: true,
          explain: "Mã hoá dữ liệu rồi đòi tiền chuộc là hành vi đặc trưng của ransomware.",
        },
        {
          text: "Cách chắc chắn nhất để lấy lại dữ liệu là chuyển tiền chuộc theo yêu cầu của kẻ tấn công.",
          answer: false,
          explain:
            "Trả tiền không bảo đảm lấy lại dữ liệu và còn khuyến khích tội phạm; phòng ngừa bằng sao lưu định kì mới là giải pháp đúng.",
        },
        {
          text: "Nếu gia đình Long có bản sao lưu tài liệu trên ổ cứng rời hoặc đám mây thì thiệt hại sẽ giảm đi rất nhiều.",
          answer: true,
          explain: "Có bản sao lưu thì chỉ cần làm sạch máy và khôi phục — không phụ thuộc kẻ tống tiền.",
        },
      ],
    },
    {
      id: "b9-tf3",
      context:
        "Trường tổ chức tuần lễ \"An toàn số\". Tại gian trưng bày, các bạn lớp 10A1 dán một tấm áp phích so sánh hai chiếc mật khẩu: chiếc thứ nhất là \"123456\" — được ví như cánh cửa khép hờ; chiếc thứ hai là \"Tr@ngAn2026!\" — được ví như cửa sắt hai lớp khoá. Bên cạnh là khẩu hiệu: \"Một mật khẩu cho tất cả tài khoản = một chìa khoá mở được cả nhà bạn!\"",
      statements: [
        {
          text: "Mật khẩu \"123456\" yếu vì quá ngắn, quá phổ biến và dễ đoán.",
          answer: true,
          explain: "Đây là mật khẩu bị lộ nhiều nhất thế giới — kẻ xấu thử đầu tiên.",
        },
        {
          text: "Mật khẩu \"Tr@ngAn2026!\" mạnh hơn vì dài và kết hợp chữ hoa, chữ thường, số, kí tự đặc biệt.",
          answer: true,
          explain: "Độ dài + đa dạng kí tự làm số tổ hợp cần thử tăng vọt, rất khó dò.",
        },
        {
          text: "Khẩu hiệu trên cảnh báo: dùng chung một mật khẩu cho mọi tài khoản thì lộ một nơi là nguy hiểm mọi nơi.",
          answer: true,
          explain: "Kẻ xấu lấy được mật khẩu từ một vụ rò rỉ sẽ thử đăng nhập mọi dịch vụ khác của bạn.",
        },
        {
          text: "Đã đặt mật khẩu mạnh thì không bao giờ cần bật xác thực hai yếu tố nữa.",
          answer: false,
          explain:
            "Mật khẩu mạnh vẫn có thể bị lộ (phishing, rò rỉ dữ liệu) — 2FA là lớp khoá thứ hai cần thiết.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b9-es1",
      q: "Kể tên 3 loại phần mềm độc hại và nêu đặc điểm nhận biết của từng loại. Trình bày các biện pháp phòng tránh mà học sinh có thể tự thực hiện.",
      answer:
        "- Virus: gắn vào tệp/chương trình chủ, lây khi tệp được mở/chạy. Worm (sâu): tự nhân bản, tự lây qua mạng không cần vật chủ. Trojan: giả dạng phần mềm hữu ích để người dùng tự cài, rồi mở cửa cho kẻ xấu (ngoài ra: ransomware mã hoá dữ liệu đòi tiền chuộc, spyware theo dõi).\n- Phòng tránh: chỉ tải phần mềm từ nguồn chính thức; không mở tệp đính kèm/đường link lạ; cài và cập nhật phần mềm diệt virus; cập nhật hệ điều hành thường xuyên; sao lưu dữ liệu định kì; không dùng phần mềm bẻ khoá.",
    },
    {
      id: "b9-es2",
      q: "Tình huống: em nhận được email tự xưng là \"Ban quản trị hệ thống thi trực tuyến\" yêu cầu bấm link đăng nhập trong 24 giờ nếu không sẽ bị khoá tài khoản. Hãy chỉ ra các dấu hiệu đáng ngờ và trình bày cách xử lí đúng.",
      answer:
        "- Dấu hiệu phishing: tạo áp lực thời gian (\"trong 24 giờ\"); đe doạ khoá tài khoản; yêu cầu bấm link và nhập mật khẩu; địa chỉ người gửi/đường link thường sai khác tên miền chính thức; lời chào chung chung không nêu đích danh.\n- Xử lí: KHÔNG bấm link, không nhập thông tin; kiểm tra kĩ địa chỉ người gửi; nếu cần, tự mở trang chính thức bằng cách gõ địa chỉ đã biết (không đi qua link trong email) để kiểm tra tài khoản; báo cho giáo viên/nhà trường; xoá hoặc báo cáo email lừa đảo; kể lại cho bạn bè để cùng cảnh giác.",
    },
  ],
};

export default extra;
