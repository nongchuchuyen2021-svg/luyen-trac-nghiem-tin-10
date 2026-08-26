import type { LessonTheory } from "@/lib/types";

// Bài 11. Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền
// SGK trang 55–61, Chủ đề 3: Đạo đức, pháp luật và văn hoá trong môi trường số
const theory: LessonTheory = {
  intro:
    "Trên không gian mạng, mỗi cú nhấp chuột hay bình luận đều để lại 'dấu chân số' lâu dài. Bài này giúp em hiểu rõ **chuẩn mực đạo đức và ranh giới pháp luật** khi tương tác trên mạng, nắm vững cấu trúc của **Quyền tác giả (Quyền nhân thân & Quyền tài sản)**, và xây dựng ý thức **tôn trọng bản quyền phần mềm, sản phẩm số**.",
  minutes: 9,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "dao-duc-phap-luat-van-hoa",
      emoji: "🤝",
      heading: "Những vấn đề đạo đức, pháp luật và văn hoá",
      blocks: [
        {
          kind: "text",
          text: "Giao tiếp trong không gian mạng mang tính **gián tiếp và có thể ẩn danh**. Điều này dễ khiến một số người nảy sinh tâm lí tự do quá mức, phát ngôn thiếu suy nghĩ, dẫn tới các hành vi vi phạm đạo đức, văn hoá và pháp luật.",
        },
        {
          kind: "figure",
          diagram: "van-hoa-va-phap-luat-mang",
          caption: "Hình 11.1. Ba trụ cột điều chỉnh hành vi ứng xử của con người trong môi trường số",
        },
        {
          kind: "cards",
          tone: "bubble",
          items: [
            {
              emoji: "📢",
              title: "1. Đưa tin sai sự thật",
              text: "Đăng tải hoặc chia sẻ thông tin chưa kiểm chứng, tin bịa đặt gây hoang mang dư luận hoặc làm tổn hại uy tín của người khác.",
            },
            {
              emoji: "🔓",
              title: "2. Tiết lộ thông tin cá nhân",
              text: "Đăng ảnh, số điện thoại, điểm số, chuyện riêng tư của bạn bè lên mạng khi chưa được sự đồng ý của họ.",
            },
            {
              emoji: "📨",
              title: "3. Phát tán thư rác & tin rác",
              text: "Gửi tin nhắn quảng cáo hàng loạt, tag tên bạn bè vô tội vạ vào các bài bán hàng gây phiền hà, quấy nhiễu.",
            },
            {
              emoji: "⚠️",
              title: "4. Bắt nạt qua mạng (Cyberbullying)",
              text: "Hùa nhau chế giễu, lập hội tẩy chay, công kích diện mạo hoặc sai sót của bạn bè trên diễn đàn, nhóm chat.",
            },
            {
              emoji: "💬",
              title: "5. Ứng xử thiếu văn hoá",
              text: "Dùng từ ngữ thô tục, chửi bới, miệt thị vùng miền hoặc công kích người có quan điểm khác mình trong phần bình luận.",
            },
          ],
        },
        {
          kind: "compare",
          left: {
            title: "Thói quen xấu trên mạng xã hội",
            emoji: "❌",
            items: [
              "Thấy tin giật gân là bấm 'Chia sẻ' ngay mà không cần đọc kĩ hay kiểm chứng",
              "Quay lén cảnh bạn bè trớ trêu, xích mích rồi đăng lên mạng để câu like",
              "Lập tài khoản ảo (nick clone) để chửi bới, xúc phạm người mình ghét",
              "Tự cho rằng hoạt động trên mạng là ẩn danh nên không ai tìm ra được",
            ],
          },
          right: {
            title: "Chuẩn mực công dân số văn minh",
            emoji: "✨",
            items: [
              "Luôn kiểm chứng tính xác thực từ các báo chính thống trước khi chia sẻ",
              "Tôn trọng quyền riêng tư và hình ảnh cá nhân của người khác",
              "Bình luận lịch sự, tranh luận trên tinh thần xây dựng và tôn trọng sự khác biệt",
              "Hiểu rằng mọi dấu vết trên mạng đều có thể truy vết và chịu trách nhiệm pháp lí",
            ],
          },
        },
        {
          kind: "example",
          title: "Tình huống học đường: Hậu quả của trò đùa 'câu view'",
          text: "Trong trận bóng đá trường, bạn Tráng lỡ đá phản lưới nhà. Một bạn quay video đăng lên nhóm mạng xã hội kèm lời lẽ chế giễu. Video lan truyền nhanh chóng, xuất hiện hàng trăm bình luận công kích nặng nề khiến Tráng suy sụp, xấu hổ phải xin nghỉ học. Hành vi đăng video và bình luận xúc phạm kéo dài này chính là hành vi bắt nạt trên mạng (Cyberbullying) vi phạm nghiêm trọng cả đạo đức lẫn quyền hình ảnh cá nhân.",
        },
        {
          kind: "note",
          text: "Những hành vi vi phạm đạo đức, pháp luật và văn hoá khi dùng mạng gồm: đưa tin không phù hợp, công bố thông tin cá nhân trái phép, phát tán thư rác, vi phạm bản quyền, bắt nạt trên mạng và ứng xử thiếu văn hoá.",
        },
        {
          kind: "check",
          q: "Hành vi nào sau đây thể hiện đúng chuẩn mực văn hoá và đạo đức khi tham gia môi trường số?",
          options: [
            "Kiểm chứng tính chính xác của thông tin từ nguồn đáng tin cậy trước khi bấm nút chia sẻ",
            "Đăng ảnh chụp lén khoảnh khắc trớ trêu của bạn cùng lớp lên mạng xã hội để mọi người cùng vui",
            "Tham gia bình luận xúc phạm người khác trên mạng vì cho rằng tài khoản của mình là ẩn danh",
            "Chia sẻ ngay các bài viết có tiêu đề giật gân, li kì mà không cần kiểm tra nguồn gốc bài đăng",
          ],
          answer: 0,
          explain:
            "Kiểm chứng thông tin trước khi chia sẻ là trách nhiệm của mỗi công dân số nhằm ngăn chặn tin giả và bảo vệ cộng đồng mạng.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "quy-dinh-phap-li",
      emoji: "⚖️",
      heading: "Một số quy định pháp lí đối với người dùng trên mạng",
      blocks: [
        {
          kind: "text",
          text: "Nhà nước Việt Nam đã ban hành hệ thống văn bản pháp luật hoàn chỉnh nhằm quản lí không gian mạng, tiêu biểu như: **Luật Giao dịch điện tử (2005)**, **Luật Công nghệ thông tin (2006)**, **Luật An ninh mạng (2018)**, **Nghị định 15/2020/NĐ-CP** và **Bộ Quy tắc ứng xử trên mạng xã hội (2021)**.",
        },
        {
          kind: "cards",
          tone: "grape",
          items: [
            {
              emoji: "🚫",
              title: "Cấm xuyên tạc lịch sử & chủ quyền",
              text: "Cấm đăng tải thông tin xuyên tạc lịch sử dân tộc, phủ nhận thành tựu cách mạng, chia sẻ hình ảnh bản đồ Việt Nam sai lệch chủ quyền.",
            },
            {
              emoji: "🚫",
              title: "Cấm tung tin giả, vu khống",
              text: "Cấm cung cấp, chia sẻ thông tin giả mạo, sai sự thật nhằm xúc phạm danh dự, uy tín của tổ chức, cá nhân hoặc gây hoang mang trong nhân dân.",
            },
            {
              emoji: "🚫",
              title: "Cấm kích động bạo lực, tệ nạn",
              text: "Cấm cổ suý các hủ tục, mê tín dị đoan, dâm ô, đồi truỵ, mô tả tỉ mỉ hành động bạo lực, rùng rợn, kích động phạm tội.",
            },
            {
              emoji: "🚫",
              title: "Cấm xâm phạm bí mật nhà nước",
              text: "Cấm tiết lộ bí mật quân sự, an ninh, kinh tế, đời tư cá nhân và các bí mật khác được pháp luật bảo vệ.",
            },
          ],
        },
        {
          kind: "steps",
          items: [
            {
              label: "Nguyên tắc 1",
              title: "Kiểm tra tính pháp lí",
              text: "Trước khi đăng bài hay chia sẻ, tự hỏi nội dung này có vi phạm điều cấm của Luật An ninh mạng hay các nghị định pháp luật không.",
            },
            {
              label: "Nguyên tắc 2",
              title: "Kiểm chứng tính xác thực",
              text: "Xác minh thông tin từ các cơ quan báo chí chính thống. Tuyệt đối không chia sẻ tin đồn thất thiệt vì 'chia sẻ tin sai cũng là vi phạm pháp luật'.",
            },
            {
              label: "Nguyên tắc 3",
              title: "Cân nhắc khía cạnh đạo đức",
              text: "Dù thông tin không phạm luật nhưng nếu gây tổn thương đến danh dự, tinh thần của người khác thì không nên lan truyền.",
            },
          ],
        },
        {
          kind: "example",
          title: "Bài học pháp lí: Mức phạt khi chia sẻ tin giả trên mạng xã hội",
          text: "Theo Nghị định 15/2020/NĐ-CP (Điều 101), hành vi lợi dụng mạng xã hội để cung cấp, chia sẻ thông tin giả mạo, sai sự thật, xúc phạm uy tín của cơ quan, danh dự cá nhân sẽ bị phạt tiền từ **10.000.000 đồng đến 20.000.000 đồng**, trường hợp nghiêm trọng có thể bị truy cứu trách nhiệm hình sự.",
        },
        {
          kind: "note",
          text: "Khi đưa tin lên mạng, phải tuân thủ pháp luật và đạo đức. Việc chia sẻ một tin vi phạm pháp luật cũng bị coi là hành vi vi phạm pháp luật.",
        },
        {
          kind: "check",
          q: "Theo quy định pháp luật Việt Nam hiện hành, người chia sẻ thông tin sai sự thật trên mạng xã hội có thể phải chịu chế tài nào?",
          options: [
            "Bị xử phạt vi phạm hành chính bằng tiền và có thể bị truy cứu trách nhiệm hình sự nếu gây hậu quả nghiêm trọng",
            "Chỉ bị mạng xã hội gửi tin nhắn cảnh báo tự động và tạm thời khoá tài khoản trong thời gian ngắn",
            "Không phải chịu bất kì trách nhiệm hay chế tài nào vì người chia sẻ không phải là tác giả gốc của thông tin",
            "Chỉ cần tự xoá bài đăng và viết lời xin lỗi công khai trên trang cá nhân là được miễn mọi trách nhiệm",
          ],
          answer: 0,
          explain:
            "Nghị định 15/2020/NĐ-CP quy định xử phạt vi phạm hành chính từ 10 - 20 triệu đồng; nếu hành vi gây hậu quả nghiêm trọng có thể bị truy cứu trách nhiệm hình sự theo Bộ luật Hình sự.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "quyen-tac-gia-ban-quyen",
      emoji: "📜",
      heading: "Quyền tác giả và Nghĩa vụ tôn trọng bản quyền",
      blocks: [
        {
          kind: "text",
          text: "**Quyền tác giả (Copyright)** là quyền của tổ chức, cá nhân đối với tác phẩm do mình sáng tạo ra hoặc sở hữu. Trong môi trường số, các sản phẩm phần mềm, tài liệu, hình ảnh rất dễ bị sao chép và phát tán trái phép, gây thiệt hại to lớn cho các tác giả.",
        },
        {
          kind: "figure",
          diagram: "quyen-tac-gia-phan-biet",
          caption: "Hình 11.2. Cấu trúc hai nhánh của Quyền tác giả: Quyền nhân thân và Quyền tài sản",
        },
        {
          kind: "figure",
          diagram: "ban-quyen-vs-giay-phep",
          caption: "Hình 11.3. Phân biệt giữa Mua bản quyền (Ownership) và Mua quyền sử dụng (Licence)",
        },
        {
          kind: "cards",
          tone: "mint",
          items: [
            {
              emoji: "🚫",
              title: "Dùng phần mềm bẻ khoá (crack)",
              text: "Vô hiệu hoá biện pháp bảo vệ bản quyền để dùng phần mềm lậu là hành vi vi phạm quyền tài sản và tiềm ẩn nguy cơ dính mã độc.",
            },
            {
              emoji: "🚫",
              title: "Đạo nhái tác phẩm số",
              text: "Lấy hình vẽ, bài thuyết trình, mã nguồn chương trình của người khác rồi thay tên mình vào để nộp dự thi hoặc đăng tải.",
            },
            {
              emoji: "🚫",
              title: "Cài đặt quá số máy quy định",
              text: "Mua giấy phép sử dụng (Licence) dành riêng cho 1 máy tính nhưng lại chia sẻ để cài đặt cho nhiều máy khác.",
            },
            {
              emoji: "✅",
              title: "Sử dụng nguồn tài nguyên mở",
              text: "Sử dụng các phần mềm mã nguồn mở hoặc hình ảnh từ kho giấy phép mở (Creative Commons) và luôn trích dẫn nguồn tác giả đầy đủ.",
            },
          ],
        },
        {
          kind: "example",
          title: "Tình huống: Bản quyền bài thi thiết kế Infographic",
          text: "Chuẩn bị thi thiết kế poster trường, bạn Hội tải một mẫu thiết kế có sẵn trên mạng về, chỉ đổi tên lớp rồi nộp dự thi nhận là của mình. Bạn Dung không đồng ý: \"Thế là đạo nhái vi phạm bản quyền! Tớ dùng ảnh tự chụp, biểu tượng từ kho mở miễn phí và ghi rõ nguồn — tuy mất công hơn nhưng là sản phẩm trí tuệ của chính mình\". Cách làm của Dung là biểu hiện chuẩn mực của liêm chính học thuật và tôn trọng quyền tác giả.",
        },
        {
          kind: "note",
          text: "Quyền tác giả gồm quyền nhân thân và quyền tài sản. Phần mềm và dữ liệu số rất dễ bị xâm phạm bản quyền. Vi phạm bản quyền là hành vi vi phạm pháp luật làm tổn hại ngành công nghiệp sáng tạo tri thức. Hãy luôn tôn trọng bản quyền!",
        },
        {
          kind: "check",
          q: "Khi một người dùng mua bản quyền hệ điều hành Windows hoặc gói Microsoft Office, người dùng đó đã nhận được quyền gì?",
          options: [
            "Nhận được Giấy phép quyền sử dụng (Licence) để cài đặt và sử dụng phần mềm trên số lượng máy nhất định",
            "Trở thành chủ sở hữu toàn bộ mã nguồn và nắm toàn quyền kinh doanh bán lại phần mềm cho người khác",
            "Được phép tự do bẻ khoá và sao chép phần mềm sang không giới hạn số lượng máy tính trong trường học",
            "Được phép chỉnh sửa mã nguồn gốc của phần mềm và đổi tên tác phẩm thành sản phẩm của riêng mình",
          ],
          answer: 0,
          explain:
            "Người dùng cá nhân chỉ mua Giấy phép quyền sử dụng (Licence) với các điều khoản giới hạn số máy cài đặt; bản quyền sở hữu trí tuệ gốc vẫn thuộc về tập đoàn Microsoft.",
        },
      ],
    },
  ],

  summary: [
    "Ứng xử trên mạng phải tuân thủ **đạo đức, văn hoá và pháp luật**. Mọi hành vi ẩn danh đều để lại dấu vết và chịu trách nhiệm pháp lí.",
    "Nghiêm cấm: **đưa tin sai sự thật, vu khống, xúc phạm danh dự, bắt nạt trên mạng, chia sẻ văn hoá phẩm đồi truỵ và xâm phạm bí mật cá nhân**.",
    "Quyền tác giả gồm: **Quyền nhân thân** (đặt tên, đứng tên, bảo vệ toàn vẹn tác phẩm) và **Quyền tài sản** (sao chép, làm tác phẩm phái sinh, phân phối, truyền đạt ra công chúng).",
    "Phân biệt: **Mua bản quyền** (sở hữu tác phẩm) và **Mua quyền sử dụng / Licence** (chỉ có quyền cài đặt và sử dụng theo thoả thuận).",
    "Tuyệt đối **không dùng phần mềm bẻ khoá (crack)**, không đạo nhái tác phẩm số và luôn ghi rõ nguồn khi sử dụng tài nguyên được phép.",
  ],
};

export default theory;
