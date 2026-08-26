import type { LessonTheory } from "@/lib/types";

// Bài 9. An toàn trên không gian mạng
// SGK trang 44–49, Chủ đề 2: Mạng máy tính và Internet
const theory: LessonTheory = {
  intro:
    "Không gian mạng mang lại kho tàng tri thức vô tận, nhưng cũng đầy rẫy cạm bẫy. Bài này giúp em nhận diện **5 nguy cơ chính trên mạng**, phân biệt rạch ròi các loại **phần mềm độc hại (Virus, Worm, Trojan)**, và nắm vững **kĩ năng phòng vệ, quét diệt mã độc** với Windows Defender.",
  minutes: 9,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "nguy-co-tren-mang",
      emoji: "🚨",
      heading: "Một số nguy cơ trên không gian mạng",
      blocks: [
        {
          kind: "text",
          text: "Không gian mạng (Internet) là môi trường **mở và kết nối toàn cầu**. Mọi người có thể liên lạc, chia sẻ dữ liệu dễ dàng; nhưng chính điều này lại bị kẻ xấu lợi dụng để gài bẫy người dùng thiếu cảnh giác.",
        },
        {
          kind: "figure",
          diagram: "nguy-co-khong-gian-mang",
          caption: "Hình 9.1. Năm nguy cơ tiềm ẩn hàng đầu khi tham gia không gian mạng",
        },
        {
          kind: "cards",
          tone: "bubble",
          items: [
            {
              emoji: "📰",
              title: "1. Tin giả & tin phản văn hoá",
              text: "Thông tin bịa đặt, bóp méo sự thật, kích động bạo lực hoặc chi tiết phản cảm dẫn đến nhận thức lệch lạc.",
            },
            {
              emoji: "🎣",
              title: "2. Lừa đảo trực tuyến",
              text: "Lập tài khoản/trang web giả mạo mượn tiền, gửi link trúng thưởng giả để lừa chiếm đoạt tài sản.",
            },
            {
              emoji: "🔓",
              title: "3. Lộ thông tin cá nhân",
              text: "Lộ họ tên, CCCD, số điện thoại, mật khẩu, tài khoản ngân hàng dẫn đến bị mạo danh hoặc mất tiền.",
            },
            {
              emoji: "⚠️",
              title: "4. Bắt nạt trên mạng (Cyberbullying)",
              text: "Xỉ vả, bêu xấu, đe dọa tung ảnh riêng tư, tống tiền ép buộc gây khủng hoảng tâm lí nặng nề cho nạn nhân.",
            },
            {
              emoji: "🎮",
              title: "5. Nghiện mạng & trò chơi",
              text: "Dành quá nhiều thời gian chơi game, lướt mạng xã hội; gây sa sút học tập, kiệt quệ sức khoẻ và đột quỵ.",
            },
          ],
        },
        {
          kind: "compare",
          left: {
            title: "Hành vi nguy hiểm dễ mắc bẫy",
            emoji: "❌",
            items: [
              "Kết bạn bừa bãi với người lạ trên mạng xã hội",
              "Bấm vào link lạ, link giục \"nhập mật khẩu gấp\" gửi qua chat/email",
              "Công khai số CCCD, thẻ học sinh, vị trí và lịch trình lên mạng",
              "Tranh cãi gay gắt, đôi co với kẻ khiêu khích hoặc bắt nạt",
            ],
          },
          right: {
            title: "Kĩ năng an toàn số thông minh",
            emoji: "🛡️",
            items: [
              "Chỉ kết bạn với những người mình quen biết ngoài đời",
              "Gọi điện thoại/gặp mặt trực tiếp để xác minh khi người quen nhắn mượn tiền",
              "Bật bảo mật 2 lớp (2FA) cho toàn bộ tài khoản email, mạng xã hội",
              "Chụp màn hình lưu bằng chứng và tâm sự ngay với cha mẹ/thầy cô khi bị đe dọa",
            ],
          },
        },
        {
          kind: "example",
          title: "Tình huống đời thường: Bẫy mạo danh vay tiền gấp",
          text: "Tối chủ nhật, bạn Xuân nhận được tin nhắn từ nick Facebook bạn thân: \"Cậu ơi, tớ đang kẹt tiền đóng học phí gấp, chuyển giúp tớ 500k vào số tài khoản này nhé, mai tớ gửi lại liền!\". Cách xưng hô đúng hệt như thường ngày. Xuân không chuyển tiền ngay mà gọi điện thoại trực tiếp cho bạn — bạn ngơ ngác: \"Tớ có nhắn gì đâu, nick tớ vừa bị hack mất rồi!\". Nhờ gọi xác minh trực tiếp, Xuân đã không bị sập bẫy lừa đảo.",
        },
        {
          kind: "note",
          text: "Mạng là môi trường giao tiếp nhanh chóng nhưng ẩn chứa nhiều nguy cơ. Cần giữ bí mật thông tin cá nhân, chỉ truy cập trang web tin cậy, không kết bạn dễ dãi, không dùng mạng quá nhiều và chia sẻ với người thân/thầy cô ngay khi bị bắt nạt.",
        },
        {
          kind: "check",
          q: "Khi nhận được tin nhắn từ tài khoản mạng xã hội của một người bạn thân nhờ chuyển tiền gấp, cách xử lí nào sau đây là AN TOÀN NHẤT?",
          options: [
            "Gọi điện thoại trực tiếp hoặc gặp mặt bạn đó để xác minh trước khi chuyển",
            "Chuyển tiền ngay vì tin nhắn có cách xưng hô thân quen đúng như ngày thường",
            "Nhắn tin hỏi lại trên chính tài khoản đó để kiểm tra xem có đúng là bạn không",
            "Gửi tài khoản ngân hàng và mật khẩu của mình cho bạn tự vào rút tiền",
          ],
          answer: 0,
          explain:
            "Kẻ xấu khi chiếm đoạt tài khoản sẽ đọc tin nhắn cũ để bắt chước cách xưng hô. Cách xác minh an toàn duy nhất là liên lạc qua một kênh độc lập khác (gọi điện thoại trực tiếp hoặc gặp mặt).",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "phan-mem-doc-hai",
      emoji: "🦠",
      heading: "Phần mềm độc hại (Malware)",
      blocks: [
        {
          kind: "text",
          text: "**Phần mềm độc hại (Malware — Malicious Software)** là các phần mềm được viết ra với **ý đồ xấu**, nhằm gây hại cho người dùng, đánh cắp dữ liệu hoặc phá hoại hệ thống máy tính. Điều quyết định một phần mềm có phải malware hay không là **mục đích xấu của người tạo ra nó**.",
        },
        {
          kind: "figure",
          diagram: "phan-biet-malware",
          caption: "Hình 9.2. Phân biệt cơ chế hoạt động giữa Virus, Worm (Sâu) và Trojan",
        },
        {
          kind: "compare",
          left: {
            title: "Virus máy tính",
            emoji: "🦠",
            items: [
              "**Không phải** phần mềm hoàn chỉnh, chỉ là đoạn mã độc",
              "**Bắt buộc phải gắn (ký sinh)** vào một tệp/chương trình chủ (.exe, docx macro...)",
              "Chỉ phát tác và lây lan **khi tệp chủ được người dùng mở/chạy**",
              "Lây qua sao chép tệp (USB, gửi file, tải về)",
            ],
          },
          right: {
            title: "Worm — Sâu máy tính",
            emoji: "🐛",
            items: [
              "**Là phần mềm hoàn chỉnh**, độc lập",
              "**Không cần tệp chủ**, tự nhân bản chính nó",
              "Tự động tìm kiếm lỗ hổng mạng để **tự lây lan từ máy này sang máy khác** qua Internet/email",
              "Có thể lây lan hàng loạt với tốc độ chóng mặt mà không cần người dùng thao tác mở tệp",
            ],
          },
        },
        {
          kind: "cards",
          tone: "grape",
          items: [
            {
              emoji: "🐴",
              title: "Trojan (Ngựa thành Troa)",
              text: "Lấy cảm hứng từ thần thoại Hy Lạp: nguỵ trang dưới vỏ bọc một phần mềm hữu ích (game crack, bộ gõ tiếng Việt lậu, app xem phim) để người dùng tự tay tải và cài đặt vào máy.",
            },
            {
              emoji: "🕵️",
              title: "Spyware (Phần mềm gián điệp)",
              text: "Âm thầm theo dõi hành vi người dùng, lục lọi tài liệu, hình ảnh và gửi dữ liệu đánh cắp được ra máy chủ kẻ tấn công.",
            },
            {
              emoji: "⌨️",
              title: "Keylogger",
              text: "Loại spyware chuyên ghi lại toàn bộ thao tác bàn phím và chuột nhằm đánh cắp mật khẩu đăng nhập, mã OTP, số thẻ tín dụng.",
            },
            {
              emoji: "🚪",
              title: "Backdoor (Cửa sau) & Rootkit",
              text: "Tạo tài khoản bí mật để kẻ xấu truy cập ngầm từ xa, hoặc chiếm quyền quản trị cao nhất của máy tính và xoá mọi dấu vết.",
            },
          ],
        },
        {
          kind: "steps",
          items: [
            {
              label: "1999",
              title: "Sâu Melissa — Lây lan qua Email",
              text: "Nguỵ trang dưới tệp văn bản Word gửi qua email, tự gửi thư tới 50 địa chỉ đầu tiên trong danh bạ Outlook; có ước tính thiệt hại toàn cầu lên tới hơn 1 tỉ USD.",
            },
            {
              label: "2001",
              title: "Sâu Code Red — Tấn công máy chủ",
              text: "Lợi dụng lỗ hổng bảo mật của hệ điều hành Windows để chiếm quyền điều khiển các máy chủ web, gây thiệt hại khoảng 2 tỉ USD trong 10 ngày.",
            },
            {
              label: "2017",
              title: "Sâu WannaCry — Mã độc tống tiền (Ransomware)",
              text: "Tự quét qua mạng để lây nhiễm, mã hoá toàn bộ dữ liệu trên ổ cứng máy tính và đòi tiền chuộc bằng Bitcoin mới cung cấp phần mềm giải mã.",
            },
          ],
        },
        {
          kind: "example",
          title: "Tình huống: Hậu quả tai hại của việc dùng 'Game bẻ khoá'",
          text: "Bạn Long tải một bản game \"crack miễn phí\" từ trang web lạ về máy tính. Vài hôm sau, máy tính chạy rất chậm, trình duyệt liên tục nhảy trang quảng cáo. Đỉnh điểm là vào một buổi sáng, toàn bộ tệp bài tập và ảnh chụp kỷ yếu trên máy bị đổi tên đuôi thành \".locked\" kèm theo một tệp hướng dẫn nộp tiền chuộc 300 USD. Máy của Long đã bị dính Trojan mang theo Ransomware.",
        },
        {
          kind: "note",
          text: "Phần mềm độc hại là phần mềm viết ra với ý đồ xấu. Virus cần vật chủ và lây khi tệp chủ chạy; Worm là phần mềm hoàn chỉnh tự lây lan độc lập qua mạng; Trojan nguỵ trang phần mềm có ích để lừa người dùng cài đặt nhằm ăn cắp thông tin và chiếm quyền sử dụng máy.",
        },
        {
          kind: "check",
          q: "Đặc điểm nào sau đây phân biệt CHÍNH XÁC nhất giữa Virus và Worm (Sâu máy tính)?",
          options: [
            "Virus cần gắn vào tệp chủ để lây nhiễm, còn Worm là phần mềm hoàn chỉnh tự lây lan độc lập qua mạng",
            "Virus chỉ hoạt động trên hệ thống máy tính, còn Worm chỉ hoạt động trên hệ điều hành điện thoại di động",
            "Virus lây lan tự động qua mạng Internet, còn Worm bắt buộc phải cắm thiết bị lưu trữ USB mới lây lan được",
            "Virus là một phần mềm độc lập hoàn chỉnh, còn Worm chỉ là một đoạn mã độc ngắn đính kèm trong thư điện tử",
          ],
          answer: 0,
          explain:
            "Virus bắt buộc phải ký sinh vào tệp chủ và cần kích hoạt tệp chủ mới lây được; Worm là phần mềm độc lập hoàn chỉnh có khả năng tự nhân bản và tự lây lan qua mạng.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "phong-chong-va-thuc-hanh",
      emoji: "🛡️",
      heading: "Phòng chống mã độc & Sử dụng Windows Defender",
      blocks: [
        {
          kind: "text",
          text: "Để bảo vệ máy tính trước các phần mềm độc hại, chúng ta cần kết hợp giữa **thói quen sử dụng an toàn** và **công cụ bảo mật (phần mềm diệt virus, tường lửa — Firewall)**.",
        },
        {
          kind: "cards",
          tone: "mint",
          items: [
            {
              emoji: "🚫",
              title: "Không dùng phần mềm lậu",
              text: "Tuyệt đối không tải các bản bẻ khoá (crack, keygen) từ trang web không rõ nguồn gốc vì hầu hết đều bị gài sẵn mã độc.",
            },
            {
              emoji: "🔄",
              title: "Cập nhật hệ điều hành thường xuyên",
              text: "Luôn bật Windows Update để vá các lỗ hổng bảo mật mà sâu máy tính (Worm) có thể khai thác.",
            },
            {
              emoji: "💾",
              title: "Sao lưu dữ liệu định kì",
              text: "Lưu trữ bản sao dữ liệu quan trọng lên đám mây (Google Drive, OneDrive) hoặc ổ cứng gắn ngoài để không bao giờ sợ bị tống tiền (Ransomware).",
            },
            {
              emoji: "🛡️",
              title: "Bật phần mềm diệt virus & Tường lửa",
              text: "Sử dụng các phần mềm uy tín như Windows Defender, Kaspersky, BKAV, Avast,... để giám sát tệp tin và lưu lượng mạng.",
            },
          ],
        },
        {
          kind: "figure",
          diagram: "che-do-quet-defender",
          caption: "Hình 9.3. Các chế độ quét mã độc trong Windows Defender (Windows Security)",
        },
        {
          kind: "steps",
          items: [
            {
              label: "Bước 1",
              title: "Mở Windows Security",
              text: "Bấm nút Start ➜ gõ 'Defender' hoặc 'Windows Security' ➜ Chọn mở ứng dụng Windows Security.",
            },
            {
              label: "Bước 2",
              title: "Vào mục Bảo vệ",
              text: "Chọn thẻ 'Virus & threat protection' (Bảo vệ chống virus và mối đe dọa).",
            },
            {
              label: "Bước 3",
              title: "Thực hiện quét",
              text: "Bấm nút 'Quick scan' để quét nhanh, hoặc bấm 'Scan options' để chọn Full scan (quét toàn bộ máy) / Custom scan (quét thư mục/USB cụ thể) ➜ bấm 'Scan now'.",
            },
          ],
        },
        {
          kind: "note",
          text: "Để phòng ngừa mã độc: không lấy phần mềm từ nguồn không tin cậy, không mở liên kết lạ, giữ bí mật thông tin cá nhân và luôn sử dụng phần mềm phòng chống mã độc được cập nhật thường xuyên.",
        },
        {
          kind: "check",
          q: "Khi bạn vừa cắm một chiếc USB mượn của bạn vào máy tính và muốn kiểm tra riêng chiếc USB đó xem có virus không, bạn nên chọn chế độ quét nào trong Windows Defender?",
          options: [
            "Custom scan (Quét tuỳ chọn)",
            "Quick scan (Quét nhanh)",
            "Full scan (Quét toàn bộ)",
            "Windows Defender Offline scan",
          ],
          answer: 0,
          explain:
            "Custom scan cho phép người dùng chỉ định chính xác thư mục hoặc ổ đĩa USB cụ thể để quét, tiết kiệm thời gian và kiểm tra đúng mục tiêu.",
        },
      ],
    },
  ],

  summary: [
    "Không gian mạng tiềm ẩn **5 nguy cơ chính**: tin giả/phản văn hoá, lừa đảo trực tuyến, lộ thông tin cá nhân, bắt nạt qua mạng và nghiện mạng/game.",
    "**Phần mềm độc hại (Malware)** là phần mềm được viết ra với **ý đồ xấu** nhằm gây hại cho hệ thống hoặc người dùng.",
    "**Virus** ký sinh trong tệp chủ và lây khi tệp chạy; **Worm (Sâu)** là phần mềm hoàn chỉnh tự nhân bản lây qua mạng; **Trojan** nguỵ trang phần mềm có ích để lừa người dùng cài đặt.",
    "Các biến thể nguy hiểm: **Spyware** (gián điệp), **Keylogger** (ghi phím lấy mật khẩu), **Ransomware** (mã hoá tống tiền), **Backdoor/Rootkit** (cửa sau chiếm quyền).",
    "Phòng chống mã độc bằng cách: không cài phần mềm bẻ khoá (crack), cập nhật hệ điều hành, sao lưu dữ liệu và sử dụng **Windows Defender** (Quick scan / Full scan / Custom scan).",
  ],
};

export default theory;
