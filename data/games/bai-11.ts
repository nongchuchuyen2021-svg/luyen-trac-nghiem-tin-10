import type { CourtCase, CourtGame, LessonGame, SortGame } from "@/lib/types";

// =====================================================================
// GAME 1: TÒA ÁN CÔNG LÝ SỐ (CYBER COURT - THẨM PHÁN KHÔNG GIAN MẠNG)
// =====================================================================
// Học sinh đóng vai Thẩm phán số, thụ lý 8 vụ án học đường và đời sống số:
// - Phân định hành vi: Chuẩn mực đạo đức, Bắt nạt mạng, Quyền nhân thân, Quyền tài sản
// - Rèn luyện tư duy thượng tôn pháp luật và văn hoá ứng xử mạng theo SGK Tin 10
const courtGameCyberJudge: CourtGame = {
  kind: "court",
  id: "toa-an-cong-ly-so",
  title: "Tòa án Công lý Số (Cyber Court - Thẩm phán Không gian mạng)",
  emoji: "⚖️",
  instructions:
    "Thụ lý hồ sơ vụ án, lắng nghe lời tố giác, xem xét chứng cứ số và gõ búa tuyên án chuẩn xác theo SGK Tin 10 và pháp luật Việt Nam!",
  cases: [
    {
      id: "case-01",
      caseNumber: "#01",
      title: "Vụ án: Quay lén bạn bị ngã đăng TikTok câu like",
      category: "Đạo đức & Văn hoá số",
      defendant: "Học sinh Hoàng (Lớp 10A)",
      situation:
        "Trong giờ ra chơi, bạn Nam sơ ý trượt ngã vào vũng nước ướt hết quần áo. Hoàng đứng cạnh dùng điện thoại quay lén rồi đăng lên TikTok kèm tiêu đề chế giễu: 'Pha tiếp đất đỉnh cao của thằng hề'. Video đạt 50.000 lượt xem với hàng trăm bình luận chê cười khiến Nam suy sụp, xấu hổ không dám đến trường.",
      evidence:
        "Đoạn clip trên tài khoản TikTok của Hoàng, ảnh chụp màn hình bình luận công kích và đơn đề nghị can thiệp của gia đình Nam.",
      charge: "Xâm phạm hình ảnh đời tư & Bắt nạt trên mạng (Cyberbullying)",
      options: [
        {
          id: "opt-1a",
          verdict: "Tuyên án: Vi phạm nghiêm trọng đạo đức và quyền hình ảnh cá nhân (Bắt nạt trên mạng)",
          subVerdict: "Buộc gỡ bỏ video ngay lập tức, công khai xin lỗi nạn nhân và chịu kỉ luật nhà trường",
          isCorrect: true,
          explain:
            "Hành vi đăng tải hình ảnh trớ trêu của người khác khi chưa được phép kèm lời lẽ bêu xấu là bắt nạt trên mạng (Cyberbullying), vi phạm Điều 32 Bộ luật Dân sự 2015 và chuẩn mực văn hoá số trong SGK Tin 10.",
        },
        {
          id: "opt-1b",
          verdict: "Tuyên án: Vô tội — Chỉ là trò đùa vui vô hại giữa bạn bè cùng lớp trong giờ giải lao",
          subVerdict: "Không cần xử lý vì mạng xã hội sinh ra là để chia sẻ niềm vui",
          isCorrect: false,
          explain:
            "Không thể coi việc bêu xấu làm tổn thương tâm lý nghiêm trọng người khác là 'trò đùa vô hại'. Hành vi này bị SGK Tin 10 và pháp luật nghiêm cấm.",
        },
        {
          id: "opt-1c",
          verdict: "Tuyên án: Vi phạm quyền tác giả đối với video clip do Nam là diễn viên chính",
          subVerdict: "Buộc chia sẻ 50% tiền thưởng view TikTok cho Nam",
          isCorrect: false,
          explain:
            "Đây là hành vi xâm phạm quyền nhân thân về hình ảnh đời tư và bắt nạt trên mạng, không phải tranh chấp về quyền tác giả tác phẩm điện ảnh.",
        },
      ],
      statute: "SGK Tin 10 trang 56–57; Bộ luật Dân sự 2015 (Điều 32); Luật Trẻ em 2016.",
    },
    {
      id: "case-02",
      caseNumber: "#02",
      title: "Vụ án: Đạo nhái bài thi Infographic nộp dự thi",
      category: "Quyền tác giả - Nhân thân",
      defendant: "Học sinh Minh Hội",
      situation:
        "Tham gia Cuộc thi Thiết kế sản phẩm số cấp trường, Hội lên mạng tải về một bài Infographic đoạt giải của học sinh trường khác. Hội dùng Photoshop xóa tên tác giả gốc, thay bằng họ tên và lớp của mình rồi nộp dự thi nhận là do mình tự vẽ hoàn toàn.",
      evidence:
        "Tệp Infographic gốc của tác giả Nguyễn An trên trang học tập có ngày tải lên trước 6 tháng; các lớp hình vẽ trùng khớp 100%.",
      charge: "Xâm phạm Quyền nhân thân (Mạo danh tác giả) & Đạo nhái tác phẩm số",
      options: [
        {
          id: "opt-2a",
          verdict: "Tuyên án: Xâm phạm Quyền nhân thân (Chiếm đoạt quyền đứng tên tác giả) & Đạo nhái tác phẩm",
          subVerdict: "Hủy bỏ tư cách dự thi, tước quyền tham gia phong trào và công khai phê bình về liêm chính học thuật",
          isCorrect: true,
          explain:
            "Quyền đứng tên trên tác phẩm là Quyền nhân thân bất khả xâm phạm của tác giả (SGK Tin 10 trang 59). Việc tự ý thay tên mình vào tác phẩm của người khác là hành vi đạo nhái, vi phạm nghiêm trọng Luật Sở hữu trí tuệ.",
        },
        {
          id: "opt-2b",
          verdict: "Tuyên phán: Hợp pháp — Đã tự tay sửa chữa và bổ sung tên mình thì trở thành tác phẩm mới",
          subVerdict: "Công nhận bài thi hợp lệ do có công tìm kiếm và chỉnh sửa",
          isCorrect: false,
          explain:
            "Hành vi xóa tên tác giả gốc để điền tên mình không tạo ra tác phẩm mới mà là hành vi chiếm đoạt quyền tác giả trái pháp luật.",
        },
        {
          id: "opt-2c",
          verdict: "Tuyên án: Chỉ vi phạm quy định làm bài tập, không liên quan đến pháp luật bản quyền",
          subVerdict: "Chỉ cần trừ 2 điểm bài thi và nhắc nhở rút kinh nghiệm",
          isCorrect: false,
          explain:
            "Quyền tác giả được pháp luật bảo hộ tự động kể từ khi tác phẩm được sáng tạo. Xâm phạm bản quyền trong môi trường học đường là vi phạm cả đạo đức lẫn luật pháp.",
        },
      ],
      statute: "SGK Tin 10 trang 59; Luật Sở hữu trí tuệ 2005 (sửa đổi 2022) Điều 19 và Điều 28.",
    },
    {
      id: "case-03",
      caseNumber: "#03",
      title: "Vụ án: Chia sẻ tin đồn thất thiệt dịch bệnh lên Facebook",
      category: "Quy định pháp luật mạng",
      defendant: "Người dùng mạng Lan Chi",
      situation:
        "Thấy tin đồn giật gân trôi nổi trong nhóm chat: 'Có ca ngộ độc thực phẩm nguy hiểm ở trường X khiến hàng chục học sinh nguy kịch', Chi không kiểm chứng từ cơ quan y tế hay báo chí chính thống mà lập tức bấm 'Chia sẻ' về Facebook cá nhân kèm lời hô hào hoang mang, khiến hàng trăm phụ huynh lo sợ kéo đến trường.",
      evidence:
        "Bài đăng trên trang cá nhân của Chi; văn bản bác bỏ của Sở Y tế khẳng định thông tin trên là hoàn toàn bịa đặt, sai sự thật.",
      charge: "Cung cấp, chia sẻ thông tin giả mạo, sai sự thật gây hoang mang trong nhân dân",
      options: [
        {
          id: "opt-3a",
          verdict: "Tuyên án: Vi phạm Nghị định 15/2020/NĐ-CP (Điều 101) về phát tán tin giả",
          subVerdict: "Xử phạt vi phạm hành chính từ 10.000.000đ đến 20.000.000đ, buộc gỡ bài và đính chính",
          isCorrect: true,
          explain:
            "SGK Tin 10 nêu rõ: Việc chia sẻ một tin vi phạm pháp luật cũng bị coi là hành vi vi phạm pháp luật. Nghị định 15/2020/NĐ-CP phạt tiền từ 10 - 20 triệu đồng cho hành vi lan truyền thông tin sai sự thật trên mạng xã hội.",
        },
        {
          id: "opt-3b",
          verdict: "Tuyên án: Vô tội — Vì Chi chỉ chia sẻ lại bài viết của người khác chứ không tự bịa ra",
          subVerdict: "Miễn trách nhiệm cho người bấm nút chia sẻ",
          isCorrect: false,
          explain:
            "Pháp luật quy định rõ hành vi 'cung cấp hoặc chia sẻ' đều bị xử lý bình đẳng. Không thể viện cớ 'chỉ chia sẻ lại' để trốn tránh trách nhiệm.",
        },
        {
          id: "opt-3c",
          verdict: "Tuyên án: Vô tội — Chi có ý tốt cảnh báo cộng đồng nên được miễn trừ mọi trách nhiệm",
          subVerdict: "Khuyến khích mọi người tiếp tục chia sẻ nhanh các cảnh báo",
          isCorrect: false,
          explain:
            "Ý tốt không thể thay thế cho trách nhiệm kiểm chứng thông tin. Chia sẻ tin thất thiệt gây náo loạn an ninh trật tự xã hội là hành vi nguy hiểm.",
        },
      ],
      statute: "SGK Tin 10 trang 58; Nghị định 15/2020/NĐ-CP (Điều 101); Luật An ninh mạng 2018.",
    },
    {
      id: "case-04",
      caseNumber: "#04",
      title: "Vụ án: Bẻ khóa phần mềm thương mại (Crack) chia sẻ công khai",
      category: "Quyền tác giả - Tài sản",
      defendant: "Kĩ thuật viên Vũ Phong",
      situation:
        "Phong tải bộ phần mềm đồ họa chuyên nghiệp Photoshop giá bản quyền 500$, dùng công cụ can thiệp bẻ khóa (crack) để vô hiệu hóa chức năng kiểm tra bản quyền của nhà sản xuất, sau đó tải lên Google Drive và chia sẻ rộng rãi link cho các diễn đàn tải về sử dụng miễn phí.",
      evidence:
        "Đường link chia sẻ tệp bẻ khóa do Phong đăng tải, hướng dẫn bẻ khóa chi tiết và các tệp mã độc đính kèm trong gói phần mềm.",
      charge: "Xâm phạm Quyền tài sản của tác giả & Vô hiệu hóa biện pháp kỹ thuật bảo vệ bản quyền",
      options: [
        {
          id: "opt-4a",
          verdict: "Tuyên án: Xâm phạm nghiêm trọng Quyền tài sản (sao chép, phân phối tác phẩm trái phép)",
          subVerdict: "Hành vi vô hiệu hóa biện pháp kỹ thuật bảo vệ quyền tác giả vi phạm pháp luật và tiềm ẩn nguy cơ phát tán mã độc",
          isCorrect: true,
          explain:
            "SGK Tin 10 trang 60 khẳng định: Dùng phần mềm bẻ khóa (crack) là hành vi vi phạm pháp luật làm tổn hại ngành công nghiệp sáng tạo tri thức. Hành vi sao chép và phát tán phần mềm lậu vi phạm quyền tài sản của chủ sở hữu.",
        },
        {
          id: "opt-4b",
          verdict: "Tuyên phán: Hợp pháp — Chia sẻ miễn phí giúp đỡ học sinh nghèo không vì mục đích thu lợi nhuận",
          subVerdict: "Biểu dương tinh thần đóng góp cho cộng đồng CNTT",
          isCorrect: false,
          explain:
            "Dù không thu tiền, việc phát tán phần mềm bẻ khóa vẫn gây thiệt hại kinh tế to lớn cho tác giả và cấu thành hành vi xâm phạm bản quyền nghiêm trọng.",
        },
        {
          id: "opt-4c",
          verdict: "Tuyên án: Vi phạm quyền nhân thân do làm méo mó tên tuổi của hãng phần mềm",
          subVerdict: "Chỉ cần gửi thư xin lỗi công ty phần mềm",
          isCorrect: false,
          explain:
            "Sao chép, phân phối và sử dụng thương mại trái phép thuộc về Quyền tài sản, không phải quyền nhân thân.",
        },
      ],
      statute: "SGK Tin 10 trang 60; Luật Sở hữu trí tuệ (Điều 20, Điều 28); Bộ luật Hình sự (Điều 225).",
    },
    {
      id: "case-05",
      caseNumber: "#05",
      title: "Vụ án: Cắt xén tranh minh họa, chế ảnh meme nhảm nhí xúc phạm tác giả",
      category: "Quyền tác giả - Nhân thân",
      defendant: "Quản trị viên Fanpage 'Cười Thả Ga'",
      situation:
        "Bị đơn tải bức tranh cổ động giàu ý nghĩa của một nữ họa sĩ trẻ, tự ý dùng phần mềm cắt xén bức tranh, vẽ thêm các chi tiết kỳ quặc phản cảm và gán ghép lời thoại thô tục để làm ảnh chế (meme) câu tương tác trên mạng, khiến công chúng hiểu sai lệch về thông điệp nghệ thuật của tác giả.",
      evidence:
        "Bức tranh gốc đã được công bố của họa sĩ và hình ảnh chế phản cảm đăng tải trên fanpage kèm hàng nghìn lượt chia sẻ tiêu cực.",
      charge: "Xâm phạm Quyền bảo vệ sự toàn vẹn của tác phẩm (thuộc Quyền nhân thân)",
      options: [
        {
          id: "opt-5a",
          verdict: "Tuyên án: Xâm phạm Quyền bảo vệ sự toàn vẹn của tác phẩm (Quyền nhân thân của tác giả)",
          subVerdict: "Xuyên tạc tác phẩm gây phương hại đến danh dự và uy tín của tác giả; buộc gỡ bỏ và bồi thường tổn thất tinh thần",
          isCorrect: true,
          explain:
            "Theo Luật Sở hữu trí tuệ và SGK Tin 10 trang 59, tác giả có Quyền nhân thân được bảo vệ sự toàn vẹn của tác phẩm, không cho người khác sửa chữa, cắt xén hoặc xuyên tạc tác phẩm dưới bất kì hình thức nào gây phương hại đến danh dự, uy tín tác giả.",
        },
        {
          id: "opt-5b",
          verdict: "Tuyên phán: Hợp pháp — Ảnh chế meme trên mạng là quyền tự do sáng tác của cư dân mạng",
          subVerdict: "Không xử lý vì mạng xã hội có văn hoá ảnh chế riêng",
          isCorrect: false,
          explain:
            "Tự do sáng tạo không được xâm phạm đến quyền nhân thân của tác giả tác phẩm gốc. Hành vi xuyên tạc tranh vẽ là vi phạm pháp luật rõ ràng.",
        },
        {
          id: "opt-5c",
          verdict: "Tuyên án: Vi phạm quyền tài sản vì không trả tiền nhuận bút cho họa sĩ",
          subVerdict: "Yêu cầu trả 100.000đ tiền bản quyền ảnh",
          isCorrect: false,
          explain:
            "Vấn đề cốt lõi ở đây là hành vi cắt xén, bóp méo tác phẩm làm tổn hại danh dự tác giả — đây là hành vi xâm phạm Quyền nhân thân.",
        },
      ],
      statute: "SGK Tin 10 trang 59; Luật Sở hữu trí tuệ (Điều 19, khoản 4).",
    },
    {
      id: "case-06",
      caseNumber: "#06",
      title: "Vụ án: Mua 1 giấy phép sử dụng (Licence) cài đặt cho 20 máy",
      category: "Quyền tác giả - Tài sản",
      defendant: "Chủ phòng máy Tin học tư nhân",
      situation:
        "Bị đơn mua 1 Giấy phép quyền sử dụng (Licence) gói cá nhân cho 1 máy tính của phần mềm diệt virus bản quyền. Nhận thấy bộ cài đặt không có khóa bảo vệ phần cứng, bị đơn đã sao chép khóa kích hoạt này để cài đặt cho toàn bộ 20 máy tính trong phòng máy của mình.",
      evidence:
        "Hóa đơn mua hàng thể hiện giấy phép cho 1 PC duy nhất và biên bản kiểm tra thực tế 20 máy tính đang kích hoạt cùng một mã số bản quyền.",
      charge: "Vi phạm Giấy phép quyền sử dụng phần mềm (Licence Agreement) & Cài đặt vượt mức cho phép",
      options: [
        {
          id: "opt-6a",
          verdict: "Tuyên án: Vi phạm thỏa thuận Giấy phép quyền sử dụng (Licence Agreement)",
          subVerdict: "Phân biệt rõ: Người mua chỉ có quyền sử dụng (Licence) trên số máy thoả thuận chứ không sở hữu bản quyền phần mềm",
          isCorrect: true,
          explain:
            "SGK Tin 10 trang 60 chỉ rõ: Cần phân biệt giữa 'Mua bản quyền' (sở hữu tác phẩm) và 'Mua quyền sử dụng' (Licence). Mua giấy phép 1 máy nhưng cài đặt cho nhiều máy là vi phạm bản quyền phần mềm.",
        },
        {
          id: "opt-6b",
          verdict: "Tuyên phán: Hợp pháp — Đã bỏ tiền mua thì toàn quyền cài đặt cho bao nhiêu máy tính tùy thích",
          subVerdict: "Quyền sở hữu thuộc về người đã trả tiền mua",
          isCorrect: false,
          explain:
            "Người dùng chỉ mua Quyền sử dụng (Licence) theo các điều khoản giới hạn, không phải mua toàn bộ quyền sở hữu trí tuệ của phần mềm.",
        },
        {
          id: "opt-6c",
          verdict: "Tuyên án: Tội trộm cắp tài sản máy tính",
          subVerdict: "Chuyển hồ sơ xử lý hình sự tội trộm cắp",
          isCorrect: false,
          explain:
            "Đây là vi phạm về thỏa thuận cấp phép bản quyền phần mềm theo Luật Sở hữu trí tuệ, không phải trộm cắp tài sản vật chất.",
        },
      ],
      statute: "SGK Tin 10 trang 60; Hình 11.3 (Phân biệt Mua bản quyền vs Giấy phép sử dụng).",
    },
    {
      id: "case-07",
      caseNumber: "#07",
      title: "Vụ án: Dùng ảnh từ kho tài nguyên mở Creative Commons và ghi nguồn",
      category: "Quyền tác giả - Tài sản",
      defendant: "Học sinh Thùy Dung (Lớp 10B)",
      situation:
        "Khi làm video thuyết trình môn Địa lý, Dung tải các ảnh phong cảnh từ trang Unsplash (kho ảnh giấy phép mở Creative Commons miễn phí). Ở cuối video, Dung dành riêng 1 khung hình trang trọng ghi rõ: 'Hình ảnh sử dụng theo giấy phép CC0 từ Unsplash / Tác giả John Doe'. Một bạn trong lớp tố cáo Dung đã lấy ảnh người khác đưa vào bài là 'vi phạm bản quyền'.",
      evidence:
        "Video thuyết trình của Dung có đầy đủ phần ghi nguồn (Attribution); trang Unsplash xác nhận ảnh thuộc giấy phép tài nguyên mở cho phép tái sử dụng tự do.",
      charge: "Bị tố giác vô cớ về hành vi vi phạm bản quyền hình ảnh",
      options: [
        {
          id: "opt-7a",
          verdict: "Tuyên phán: HOÀN TOÀN HỢP PHÁP VÀ ĐẠT CHUẨN MỰC LIÊM CHÍNH SỐ",
          subVerdict: "Học sinh đã sử dụng đúng tài nguyên mở (OER/CC) và tuân thủ tuyệt đối việc ghi công nguồn tác giả",
          isCorrect: true,
          explain:
            "SGK Tin 10 trang 60 biểu dương: Sử dụng các phần mềm mã nguồn mở hoặc hình ảnh từ kho giấy phép mở (Creative Commons) và luôn trích dẫn nguồn tác giả đầy đủ là biểu hiện chuẩn mực của tôn trọng bản quyền.",
        },
        {
          id: "opt-7b",
          verdict: "Tuyên án: Vi phạm bản quyền vì bất kì hình ảnh nào trên mạng đều cấm sao chép",
          subVerdict: "Buộc xóa video và vẽ lại toàn bộ ảnh bằng tay",
          isCorrect: false,
          explain:
            "Tác giả có quyền phát hành tác phẩm dưới các giấy phép mở (Creative Commons) để cộng đồng sử dụng hợp pháp.",
        },
        {
          id: "opt-7c",
          verdict: "Tuyên án: Phải gửi thư xin phép bằng văn bản sang nước ngoài mới được công nhận",
          subVerdict: "Không chấp nhận việc tự ghi nguồn ở cuối video",
          isCorrect: false,
          explain:
            "Các giấy phép mở Creative Commons (CC) đã cấp quyền trước cho cộng đồng, người dùng chỉ cần thực hiện đúng điều kiện giấy phép (như ghi công tác giả) là hợp lệ.",
        },
      ],
      statute: "SGK Tin 10 trang 60; Khái niệm Tài nguyên mở & Giấy phép công cộng Creative Commons.",
    },
    {
      id: "case-08",
      caseNumber: "#08",
      title: "Vụ án: Lập nick ảo ẩn danh để xúc phạm, miệt thị vùng miền",
      category: "Quy định pháp luật mạng",
      defendant: "Người dùng ẩn danh @BongMa202",
      situation:
        "Xuất phát từ mâu thuẫn trên mạng xã hội, bị đơn lập tài khoản ẩn danh, lấy ảnh đại diện giả để tràn vào trang cá nhân của bạn cùng lớp chửi bới thậm tệ, xúc phạm danh dự gia đình và miệt thị nguồn gốc xuất thân địa phương. Bị đơn thách thức: 'Dùng nick clone thì công an đố tìm ra!'.",
      evidence:
        "Nhật ký địa chỉ IP truy cập (Digital Footprint), thông tin thiết bị và xác nhận thuê bao do nhà cung cấp dịch vụ mạng (ISP) cung cấp cho cơ quan điều tra.",
      charge: "Xúc phạm nhân phẩm danh dự, kích động thù hằn chia rẽ & Tưởng bở việc ẩn danh trên mạng",
      options: [
        {
          id: "opt-3a-fake",
          verdict: "Tuyên án: Vi phạm Luật An ninh mạng & Nghị định 15/2020/NĐ-CP",
          subVerdict: "'Không gian mạng không phải vùng đất vô luật pháp — Mọi hành vi ẩn danh đều để lại dấu vết số và phải chịu trách nhiệm pháp lí'",
          isCorrect: true,
          explain:
            "SGK Tin 10 trang 56–58 nhấn mạnh: Giao tiếp trên mạng có thể ẩn danh nhưng mọi hành vi đều để lại dấu vết kĩ thuật số. Pháp luật nghiêm cấm hành vi xúc phạm danh dự, miệt thị người khác dù sử dụng bất kì tài khoản nào.",
        },
        {
          id: "opt-8b",
          verdict: "Tuyên án: Vô tội — Quyền tự do ngôn luận trên mạng xã hội cho phép phát ngôn mọi điều mình thích",
          subVerdict: "Không can thiệp vào tranh cãi trên mạng",
          isCorrect: false,
          explain:
            "Tự do ngôn luận phải nằm trong khuôn khổ pháp luật, không được xâm phạm danh dự, nhân phẩm và quyền lợi hợp pháp của người khác.",
        },
        {
          id: "opt-8c",
          verdict: "Tuyên phán: Không thể thụ lý do không tìm thấy danh tính thật ngoài đời",
          subVerdict: "Đình chỉ vụ án vì tài khoản là ảo",
          isCorrect: false,
          explain:
            "Các cơ quan thực thi pháp luật phối hợp với nhà mạng có đầy đủ công cụ kỹ thuật để truy vết định danh người dùng qua dấu vết số (IP, MAC, nhật ký mạng).",
        },
      ],
      statute: "SGK Tin 10 trang 57; Luật An ninh mạng 2018 (Điều 8, Điều 16).",
    },
  ],
};

// =====================================================================
// GAME 2: PHÂN LOẠI QUYỀN TÁC GIẢ (QUYỀN NHÂN THÂN VS QUYỀN TÀI SẢN)
// =====================================================================
// Theo đúng cấu trúc Hình 11.2 SGK Tin học 10 trang 59:
// - Quyền nhân thân: Gắn liền với cá nhân tác giả, không thể chuyển giao (trừ quyền công bố)
// - Quyền tài sản: Quyền khai thác kinh tế, có thể chuyển giao, bán, nhượng quyền
const sortGameCopyright: SortGame = {
  kind: "sort",
  id: "quyen-nhan-than-hay-tai-san",
  title: "Quyền Nhân thân hay Quyền Tài sản?",
  emoji: "📜",
  instructions:
    "Kéo (hoặc bấm nút) từng quyền tác giả sang đúng nhánh: Quyền nhân thân (gắn với danh dự, tên tuổi tác giả) hay Quyền tài sản (khai thác kinh tế, thương mại)?",
  matchLabel: "Quyền Tài sản",
  matchEmoji: "💰",
  noMatchLabel: "Quyền Nhân thân",
  noMatchEmoji: "👤",
  items: [
    {
      id: "dat-ten-tac-pham",
      emoji: "🏷️",
      label: "Đặt tên cho tác phẩm do mình sáng tạo ra",
      isMatch: false,
      explain: "Quyền nhân thân — chỉ chính tác giả mới có quyền đặt tên cho tác phẩm của mình.",
    },
    {
      id: "dung-ten-but-danh",
      emoji: "✍️",
      label: "Đứng tên thật hoặc bút danh trên tác phẩm; được nêu tên khi phổ biến",
      isMatch: false,
      explain: "Quyền nhân thân — quyền khẳng định tác quyền danh dự của người sáng tạo.",
    },
    {
      id: "sao-chep-tac-pham",
      emoji: "📑",
      label: "Sao chép tác phẩm (in ấn, nhân bản đĩa, lưu trữ dạng tệp số)",
      isMatch: true,
      explain: "Quyền tài sản — quyền cho phép hoặc ngăn cấm người khác sao chép bản sao tác phẩm để kinh doanh.",
    },
    {
      id: "lam-tac-pham-phai-sinh",
      emoji: "🔄",
      label: "Làm tác phẩm phái sinh (dịch sách sang tiếng nước ngoài, chuyển thể truyện thành kịch/phim)",
      isMatch: true,
      explain: "Quyền tài sản — quyền tạo ra các tác phẩm chuyển thể, phóng tác từ tác phẩm gốc để khai thác kinh tế.",
    },
    {
      id: "bao-ve-su-toan-ven",
      emoji: "🛡️",
      label: "Bảo vệ sự toàn vẹn của tác phẩm, không cho người khác tự ý sửa đổi, cắt xén gây xấu uy tín",
      isMatch: false,
      explain: "Quyền nhân thân — ngăn chặn hành vi bóp méo, xuyên tạc làm tổn hại danh dự tác giả.",
    },
    {
      id: "bieu-dien-truoc-cong-chung",
      emoji: "🎭",
      label: "Biểu diễn tác phẩm trước công chúng (ca nhạc, kịch bản sân khấu)",
      isMatch: true,
      explain: "Quyền tài sản — quyền khai thác qua các buổi biểu diễn có bán vé hoặc truyền thông thương mại.",
    },
    {
      id: "phan-phoi-ban-ban-goc",
      emoji: "📦",
      label: "Phân phối, bán hoặc cho thuê bản gốc hoặc bản sao tác phẩm",
      isMatch: true,
      explain: "Quyền tài sản — phát hành và thương mại hóa sản phẩm trên thị trường.",
    },
    {
      id: "cong-bo-tac-pham",
      emoji: "📢",
      label: "Công bố tác phẩm hoặc cho phép người khác công bố tác phẩm lần đầu",
      isMatch: false,
      explain: "Quyền nhân thân — quyền quyết định thời điểm và hình thức ra mắt tác phẩm trước công chúng.",
    },
    {
      id: "truyen-dat-qua-internet",
      emoji: "🌐",
      label: "Truyền đạt tác phẩm đến công chúng bằng phương tiện mạng Internet, truyền hình",
      isMatch: true,
      explain: "Quyền tài sản — quyền phát sóng, đăng tải lên mạng và thu tiền từ lượt truy cập.",
    },
    {
      id: "cho-thue-phan-mem",
      emoji: "💻",
      label: "Cho thuê bản gốc hoặc bản sao chương trình máy tính (phần mềm)",
      isMatch: true,
      explain: "Quyền tài sản — độc quyền cho thuê phần mềm máy tính để thu phí định kì.",
    },
  ],
};

const bai11Games: LessonGame[] = [courtGameCyberJudge, sortGameCopyright];

export default bai11Games;
