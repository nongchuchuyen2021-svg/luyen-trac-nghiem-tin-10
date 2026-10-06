import type { ArenaGame, LessonGame, Sort3Game, SortGame, TimelineGame } from "@/lib/types";

// =====================================================================
// GAME 1: ĐẤU TRƯỜNG AN NINH MẠNG (CYBER DEFENSE ARENA - BOSS BATTLE)
// =====================================================================
const arenaGameCyberDefense: ArenaGame = {
  kind: "arena",
  id: "dau-truong-an-ninh-mang",
  title: "Đấu trường An ninh mạng (Boss Battle)",
  emoji: "⚔️",
  instructions:
    "Phòng thủ máy chủ trường học trước 5 đợt tổng tấn công của hacker! Vận dụng kiến thức Bài 9 để kích hoạt Tường lửa, tung phản đòn và đập tan trùm mã độc!",
  bossName: "The Cyber Overlord (Trùm Hacker Bóng Tối)",
  bossEmoji: "👾",
  bossHp: 500,
  waves: [
    // ĐỢT 1: LỪA ĐẢO & TIN GIẢ
    {
      id: "wave-1",
      waveNumber: 1,
      name: "Tấn công Lừa đảo & Tin giả (Phishing & Fake News)",
      subtitle: "Kẻ địch sử dụng chiêu trò tâm lý thao túng để lừa chiếm đoạt tài khoản",
      emoji: "🎣",
      threats: [
        {
          id: "threat-phishing-1",
          threatType: "Phishing",
          threatName: "Bẫy Phishing mạo danh bạn thân mượn tiền gấp",
          threatEmoji: "💬",
          attackerTag: "Hacker Mạo Danh #301",
          situation:
            "Tối muộn, em nhận được tin nhắn Facebook từ tài khoản một bạn cùng lớp: 'Cậu ơi tớ kẹt tiền đóng học phí gấp, chuyển giúp tớ 500k vào số tài khoản lạ này nhé, mai lên lớp tớ gửi lại liền!'. Cách xưng hô rất giống thường ngày.",
          q: "Hành động tác chiến phòng vệ nào sau đây là CHUẨN XÁC và AN TOÀN NHẤT?",
          options: [
            "Gọi điện thoại trực tiếp hoặc gặp mặt bạn đó để xác minh trước khi làm bất cứ việc gì",
            "Chuyển ngay 500k vì tài khoản đó có tên và ảnh đại diện đúng là bạn mình",
            "Nhắn tin hỏi lại trên chính cửa sổ chat đó: 'Có thật là cậu không?'",
            "Chụp ảnh thẻ ngân hàng và gửi mã OTP cho bạn tự vào rút tiền",
          ],
          answer: 0,
          explain:
            "Kẻ xấu khi chiếm đoạt tài khoản sẽ đọc tin nhắn cũ để bắt chước văn phong. Cách xác minh an toàn duy nhất theo SGK là dùng một kênh liên lạc độc lập (gọi điện thoại trực tiếp qua số sim hoặc gặp mặt ngoài đời).",
          damage: 25,
          score: 150,
        },
        {
          id: "threat-phishing-2",
          threatType: "Phishing",
          threatName: "Bẫy trúng thưởng iPhone & Chiếm đoạt CCCD",
          threatEmoji: "🎁",
          attackerTag: "Tập đoàn Lừa đảo Xuyên biên giới",
          situation:
            "Một đường link lạ gửi qua Zalo thông báo: 'Chúc mừng bạn trúng thưởng iPhone 15 Pro Max! Hãy bấm vào link bên dưới, điền đầy đủ họ tên, số CCCD, ngày sinh và mật khẩu tài khoản ngân hàng để nhận quà trong 24h!'.",
          q: "Phản xạ an toàn mạng nào giúp bảo vệ bản thân trước cạm bẫy này?",
          options: [
            "Tuyệt đối không bấm link, không cung cấp CCCD và mật khẩu; báo cáo chặn kẻ gửi ngay",
            "Điền số CCCD và ngày sinh nhưng giấu mật khẩu ngân hàng để thử nhận thưởng",
            "Chuyển tiếp đường link cho cả lớp cùng đăng ký nhận thưởng",
            "Bấm vào link xem thử giao diện vì nếu chưa chuyển tiền thì không sao",
          ],
          answer: 0,
          explain:
            "Đây là chiêu trò lừa đảo đánh cắp thông tin cá nhân (Identity Theft). Để lộ số CCCD, ngày sinh và tài khoản sẽ khiến em bị kẻ xấu dùng vào các hợp đồng vay tiền nợ xấu hoặc mạo danh phạm tội.",
          damage: 30,
          score: 160,
        },
      ],
    },

    // ĐỢT 2: BÃO SÂU MẠNG & VIRUS KÝ SINH
    {
      id: "wave-2",
      waveNumber: 2,
      name: "Bão Sâu mạng & Virus ký sinh (Worm & Virus Swarm)",
      subtitle: "Các đoạn mã độc bắt đầu lây nhiễm và tìm cách nhân bản hàng loạt",
      emoji: "🦠",
      threats: [
        {
          id: "threat-malware-1",
          threatType: "Virus",
          threatName: "Virus ký sinh Macro tệp bài tập nhóm",
          threatEmoji: "📄",
          attackerTag: "MacroFiend Infiltrator",
          situation:
            "Một tệp bài tập 'TinHoc10_OnTap.docx' được tải từ diễn đàn lạ về máy. Khi mở file ra, Word hiện cảnh báo mã Macro yêu cầu bấm 'Enable Content'. Người dùng bấm cho phép, khiến mã độc lập tức gắn lén vào toàn bộ tệp văn bản khác trong máy tính.",
          q: "Đặc điểm bản chất nào chứng minh đây là một VIRUS máy tính chứ không phải Worm?",
          options: [
            "Bắt buộc phải ký sinh gắn vào một tệp chủ và chỉ lây lan khi người dùng mở tệp đó",
            "Là một phần mềm hoàn chỉnh độc lập tự gửi thư qua mạng Internet mà không cần tệp chủ",
            "Tự động quét cổng mạng LAN để lây sang máy tính khác trong trường học",
            "Tự động mã hoá toàn bộ ổ cứng và đòi tiền chuộc bằng tiền ảo Bitcoin",
          ],
          answer: 0,
          explain:
            "Theo định nghĩa SGK Tin 10: Virus không phải phần mềm hoàn chỉnh, nó là đoạn mã ký sinh bắt buộc phải gắn vào tệp chủ và chỉ phát tác lây lan khi tệp chủ được người dùng kích hoạt/mở ra.",
          damage: 30,
          score: 180,
        },
        {
          id: "threat-malware-2",
          threatType: "Worm",
          threatName: "Sâu mạng tự nhân bản quét cổng phòng thực hành",
          threatEmoji: "🐛",
          attackerTag: "NetCrawler Worm 2026",
          situation:
            "Chỉ cần 1 máy tính trong phòng thực hành Tin học cắm USB lạ nhiễm sâu, vài phút sau toàn bộ 40 máy tính nối chung mạng LAN đều bị nhiễm mã độc này dù học sinh ở các máy khác không hề tải hay mở tệp lạ nào.",
          q: "Tại sao Sâu máy tính (Worm) lại có tốc độ lây lan khủng khiếp như vậy?",
          options: [
            "Vì Worm là phần mềm hoàn chỉnh độc lập, có khả năng tự nhân bản và tự lây lan qua mạng mà không cần người dùng thao tác",
            "Vì Worm bắt buộc phải chờ người dùng bấm gửi từng email thì mới lây được",
            "Vì Worm chỉ là một đoạn mã nhỏ ký sinh trong file văn bản Microsoft Word",
            "Vì Worm chỉ hoạt động trên mạng Wifi điện thoại di động chứ không lây được qua dây mạng",
          ],
          answer: 0,
          explain:
            "Worm (Sâu máy tính) là phần mềm hoàn chỉnh độc lập, không cần tệp chủ. Nó tự nhân bản và tự tìm kiếm lỗ hổng mạng để lây từ máy này sang máy khác mà không cần sự can thiệp của người dùng.",
          damage: 35,
          score: 190,
        },
      ],
    },

    // ĐỢT 3: TROJAN & PHẦN MỀM GIÁN ĐIỆP
    {
      id: "wave-3",
      waveNumber: 3,
      name: "Tập kích Trojan & Phần mềm Gián điệp (Trojan & Spyware)",
      subtitle: "Chiêu bài nguỵ trang lén lút mở cổng sau và đánh cắp mật khẩu",
      emoji: "🐴",
      threats: [
        {
          id: "threat-trojan-1",
          threatType: "Trojan",
          threatName: "Bản game bẻ khoá (Game Crack) chứa Trojan ngầm",
          threatEmoji: "🎮",
          attackerTag: "Dark Crack Team",
          situation:
            "Một học sinh tải bản 'Game Bắn Súng Crack Miễn Phí Full Tiền' từ trang web lậu. Khi cài đặt xong, game vẫn chơi được bình thường nhưng máy tính bắt đầu chạy quạt tản nhiệt hết công suất và liên tục gửi dữ liệu lạ ra máy chủ nước ngoài.",
          q: "Cơ chế hoạt động đặc trưng của Trojan (Ngựa thành Troa) là gì?",
          options: [
            "Nguỵ trang dưới vỏ bọc phần mềm hữu ích để lừa người dùng tự tay tải về và cài đặt vào máy",
            "Tự lây lan qua cáp mạng mà người dùng không hề tải hay bấm cài đặt gì",
            "Gắn đoạn mã ký sinh vào tệp hệ điều hành và xóa sạch thùng rác Recycle Bin",
            "Là phần mềm diệt virus chính hãng của Microsoft phát hành",
          ],
          answer: 0,
          explain:
            "Lấy cảm hứng từ điển tích con ngựa gỗ thành Troa: Trojan giả danh phần mềm hấp dẫn/hữu ích (game crack, bộ gõ lậu, tool hack) để dụ dỗ người dùng tự mở cửa rước kẻ địch vào hệ thống.",
          damage: 30,
          score: 200,
        },
        {
          id: "threat-spyware-1",
          threatType: "Spyware",
          threatName: "Keylogger âm thầm ghi thao tác bàn phím",
          threatEmoji: "⌨️",
          attackerTag: "Silent KeySniffer",
          situation:
            "Hacker cài lén một phần mềm gián điệp chạy ngầm trên máy tính. Mỗi khi người dùng gõ tài khoản, mật khẩu hoặc số thẻ tín dụng, mã độc lập tức lưu lại toàn bộ chuỗi ký tự vừa gõ và bí mật gửi về cho hacker.",
          q: "Loại phần mềm gián điệp chuyên ghi lại thao tác gõ phím này có tên gọi là gì?",
          options: [
            "Keylogger (thuộc nhóm Spyware - phần mềm gián điệp)",
            "Firewall (Tường lửa mạng)",
            "Windows Defender Antivirus",
            "Router chuyển tiếp dữ liệu Internet",
          ],
          answer: 0,
          explain:
            "Keylogger là một dạng Spyware cực kì nguy hiểm chuyên ghi lại mọi thao tác gõ bàn phím và nhấp chuột nhằm ăn cắp thông tin đăng nhập, mã số bí mật của người dùng.",
          damage: 35,
          score: 210,
        },
      ],
    },

    // ĐỢT 4: RANSOMWARE KHỦNG HOẢNG & TỐNG TIỀN
    {
      id: "wave-4",
      waveNumber: 4,
      name: "Khủng hoảng Mã độc Tống tiền (Ransomware Crisis)",
      subtitle: "Mã hóa toàn bộ tài liệu ổ cứng và đòi tiền chuộc nộp bằng Bitcoin",
      emoji: "🔒",
      threats: [
        {
          id: "threat-ransomware-1",
          threatType: "Ransomware",
          threatName: "Mã độc tống tiền WannaCry biến thể 2026",
          threatEmoji: "💰",
          attackerTag: "Ransom Syndicate",
          situation:
            "Toàn bộ tài liệu văn bản, bảng điểm và ảnh kỷ yếu trên máy tính bất ngờ bị đổi đuôi thành '.locked' và không thể mở được. Màn hình hiện thông báo đỏ rực: 'Muốn giải mã dữ liệu, hãy gửi 300 USD bằng Bitcoin vào ví sau trong 48h!'.",
          q: "Biện pháp phòng ngừa CĂN BẢN và HIỆU QUẢ NHẤT để không bao giờ sợ Ransomware tống tiền là gì?",
          options: [
            "Thường xuyên sao lưu (Backup) dữ liệu quan trọng lên đám mây hoặc ổ cứng ngoài độc lập",
            "Chuyển ngay tiền chuộc Bitcoin cho hacker theo đúng hẹn",
            "Tải thêm các phần mềm crack trôi nổi trên mạng về để tự sửa",
            "Tắt hoàn toàn tính năng cập nhật Windows Update để tránh lỗi hệ điều hành",
          ],
          answer: 0,
          explain:
            "Nếu luôn có bản sao lưu (Backup) an toàn trên Cloud hoặc ổ cứng rời, khi bị dính Ransomware em chỉ cần xóa sạch cài lại máy và khôi phục dữ liệu mà không sợ mất mát và không cần trả tiền chuộc cho tội phạm mạng.",
          damage: 35,
          score: 220,
        },
        {
          id: "threat-wifi-1",
          threatType: "Spyware",
          threatName: "Bẫy Wifi công cộng giả mạo ở quán cà phê",
          threatEmoji: "📶",
          attackerTag: "Rogue Access Point Operator",
          situation:
            "Tại một quán cà phê, em thấy có sóng Wifi miễn phí tên 'Wifi_MienPhi_KhongMatKhau'. Khi kết nối vào, một trang web yêu cầu em nhập tài khoản mật khẩu Facebook để 'xác thực vào mạng'.",
          q: "Nguy cơ tiềm ẩn nguy hiểm khi sử dụng Wifi công cộng không mật khẩu là gì?",
          options: [
            "Kẻ xấu có thể dựng trạm phát sóng giả mạo để nghe lén và đánh cắp dữ liệu truyền đi (Man-in-the-middle)",
            "Điện thoại sẽ bị hư hỏng màn hình cảm ứng vật lý ngay lập tức",
            "Mạng Wifi công cộng không thể truyền được dữ liệu hình ảnh và âm thanh",
            "Wifi công cộng chỉ sử dụng được vào ban đêm chứ ban ngày không hoạt động",
          ],
          answer: 0,
          explain:
            "Wifi công cộng không mã hóa bảo vệ cho phép kẻ xấu nghe lén gói tin hoặc tạo trang đăng nhập giả mạo để câu mật khẩu. Tuyệt đối không giao dịch ngân hàng hay đăng nhập tài khoản nhạy cảm trên Wifi công cộng lạ.",
          damage: 30,
          score: 210,
        },
      ],
    },

    // ĐỢT 5: TRẬN CHIẾN TRÙM CUỐI (BOSS BATTLE FINALE)
    {
      id: "wave-5",
      waveNumber: 5,
      name: "ĐẠI CHIẾN TRÙM CUỐI: THE CYBER OVERLORD",
      subtitle: "Chúa tể Bóng tối tung đòn tấn công công nghệ cao tinh vi nhất!",
      emoji: "👾",
      isBossWave: true,
      threats: [
        {
          id: "threat-boss-1",
          threatType: "Cyberbullying",
          threatName: "Tấn công Video Deepfake mạo danh tống tiền",
          threatEmoji: "🎭",
          attackerTag: "The Cyber Overlord (Trùm Hacker)",
          situation:
            "Trùm hacker sử dụng công nghệ trí tuệ nhân tạo ghép khuôn mặt và giọng nói của học sinh (Deepfake) vào một video nhạy cảm bịa đặt, sau đó nhắn tin đe dọa tung lên mạng nếu không chuyển tiền hoặc làm theo các yêu cầu sai trái.",
          q: "Học sinh THPT cần làm gì ngay lập tức khi trở thành nạn nhân của bắt nạt và tống tiền trên mạng?",
          options: [
            "Bình tĩnh chụp lại bằng chứng, tuyệt đối không làm theo yêu cầu, chia sẻ ngay với cha mẹ, thầy cô và báo công an",
            "Âm thầm gom tiền nộp chuộc một mình vì sợ người khác chê cười",
            "Lên mạng chửi bới, thách thức và tranh cãi gay gắt với kẻ bắt nạt",
            "Xóa sạch toàn bộ tin nhắn để không ai biết mình bị dọa",
          ],
          answer: 0,
          explain:
            "Theo bài học SGK: Khi bị đe dọa, bắt nạt trên mạng (Cyberbullying), tuyệt đối không im lặng thỏa hiệp hay tranh cãi; phải lưu lại chứng cứ (chụp màn hình) và tâm sự ngay với cha mẹ, thầy cô, nhà trường hoặc cơ quan chức năng để được bảo vệ kịp thời.",
          damage: 40,
          score: 260,
        },
        {
          id: "threat-boss-2",
          threatType: "Virus",
          threatName: "Tổng phản kích Tường Lửa & Windows Defender",
          threatEmoji: "🛡️",
          attackerTag: "The Cyber Overlord (Trùm Hacker)",
          situation:
            "Trùm hacker tung đợt tấn công mã độc cuối cùng nhằm xuyên thủng toàn bộ máy chủ. Để dập tắt hoàn toàn mối đe dọa, em cần kích hoạt lá chắn bảo mật tổng hợp mạnh nhất của hệ điều hành Windows.",
          q: "Bộ ba nguyên tắc bảo vệ máy tính TOÀN DIỆN nhất theo SGK Tin học 10 là gì?",
          options: [
            "Bật Windows Defender & Tường lửa + Thường xuyên cập nhật hệ điều hành + Dùng mật khẩu mạnh kèm xác thực 2 bước (2FA)",
            "Cài đặt nhiều phần mềm diệt virus lậu cùng lúc để chúng bổ trợ cho nhau",
            "Tắt hoàn toàn kết nối Internet của trường học vĩnh viễn",
            "Chỉ cần đặt mật khẩu 6 số ngày sinh nhật là đã tuyệt đối an toàn",
          ],
          answer: 0,
          explain:
            "Chiến lược phòng thủ kiên cố nhất: Kết hợp công cụ an ninh (Windows Defender + Firewall), luôn vá lỗ hổng (Windows Update), và thói quen an toàn số (mật khẩu phức tạp, bật 2FA, sao lưu dữ liệu).",
          damage: 45,
          score: 300,
        },
      ],
    },
  ],
};

// =====================================================================
// GAME 2: PHÂN LOẠI MÃ ĐỘC (SORT3GAME: VIRUS vs WORM vs TROJAN)
// =====================================================================
const sortGameMalware: Sort3Game = {
  kind: "sort3",
  id: "phan-loai-ma-doc",
  title: "Virus, Sâu (Worm) hay Trojan?",
  emoji: "🦠",
  instructions:
    "Chạm chọn đúng nhóm cho từng đặc điểm/tình huống: Đây là Virus (cần tệp chủ ký sinh), Worm (tự lây lan độc lập qua mạng), hay Trojan (nguỵ trang phần mềm có ích)?",
  groups: [
    { label: "Virus máy tính", emoji: "🦠" },
    { label: "Sâu máy tính (Worm)", emoji: "🐛" },
    { label: "Trojan (Ngựa Troa)", emoji: "🐴" },
  ],
  items: [
    {
      id: "mal-1",
      emoji: "📎",
      label: "Không phải phần mềm hoàn chỉnh, chỉ là đoạn mã phải ký sinh vào tệp chủ",
      group: 0,
      explain: "Virus không độc lập, nó bắt buộc phải gắn lén vào tệp chủ (.exe, macro...) mới tồn tại được.",
    },
    {
      id: "mal-2",
      emoji: "🌐",
      label: "Tự động nhân bản và quét mạng lây từ máy này sang máy khác không cần mở file",
      group: 1,
      explain: "Đây là đặc tính ghê gớm nhất của Worm (Sâu máy tính) — tự lây lan độc lập với tốc độ cực nhanh.",
    },
    {
      id: "mal-3",
      emoji: "🎮",
      label: "Nguỵ trang dưới vỏ bọc game bẻ khoá (crack) hay app xem phim miễn phí",
      group: 2,
      explain: "Bản chất Trojan là ngụy trang để lừa nạn nhân tự tay tải và cài đặt vào máy tính.",
    },
    {
      id: "mal-4",
      emoji: "🖱️",
      label: "Chỉ phát tác và lây nhiễm khi người dùng chạy hoặc mở tệp chủ bị nhiễm",
      group: 0,
      explain: "Virus nằm im nếu tệp chủ chưa được mở; chỉ khi người dùng click chạy tệp thì virus mới kích hoạt.",
    },
    {
      id: "mal-5",
      emoji: "💾",
      label: "Lây lan chủ yếu qua việc sao chép tệp bằng USB hoặc gửi tệp qua chat",
      group: 0,
      explain: "Vì gắn vào tệp chủ, virus di chuyển theo các bản sao tệp (cắm USB, tải file nhiễm về máy).",
    },
    {
      id: "mal-6",
      emoji: "📧",
      label: "Sâu Melissa (1999) tự gửi thư tới 50 địa chỉ đầu tiên trong danh bạ Outlook",
      group: 1,
      explain: "Sâu Melissa là một trong những sâu mạng nổi tiếng lịch sử, tự phát tán qua email hàng loạt.",
    },
    {
      id: "mal-7",
      emoji: "🚪",
      label: "Tạo cổng sau (Backdoor) bí mật cho kẻ tấn công xâm nhập điều khiển máy từ xa",
      group: 2,
      explain: "Mục đích phổ biến nhất của Trojan sau khi lừa cài vào máy là mở Backdoor cho hacker.",
    },
    {
      id: "mal-8",
      emoji: "🖥️",
      label: "Sâu Code Red (2001) khai thác lỗ hổng máy chủ gây thiệt hại 2 tỉ USD trong 10 ngày",
      group: 1,
      explain: "Code Red là sâu máy tính chuyên quét lỗ hổng dịch vụ web để lây nhiễm máy chủ tự động.",
    },
    {
      id: "mal-9",
      emoji: "🎁",
      label: "Giả danh bộ gõ tiếng Việt Unikey lậu trên mạng để đánh cắp tài khoản",
      group: 2,
      explain: "Giả dạng phần mềm thông dụng có ích để lừa người dùng chính là thủ đoạn kinh điển của Trojan.",
    },
    {
      id: "mal-10",
      emoji: "💰",
      label: "Sâu WannaCry (2017) tự quét mạng lây nhiễm và mã hoá dữ liệu đòi tiền chuộc",
      group: 1,
      explain: "WannaCry sở hữu module lây lan của Worm (khai thác lỗ hổng EternalBlue) kết hợp tống tiền Ransomware.",
    },
    {
      id: "mal-11",
      emoji: "⌨️",
      label: "Chứa Keylogger chạy ngầm để ghi lại toàn bộ mật khẩu khi người dùng gõ phím",
      group: 2,
      explain: "Trojan thường mang theo Spyware và Keylogger để thu thập bí mật đăng nhập của nạn nhân.",
    },
    {
      id: "mal-12",
      emoji: "⚙️",
      label: "Là một phần mềm hoàn chỉnh, độc lập, không cần gắn vào chương trình khác",
      group: 1,
      explain: "Điểm cốt lõi: Sâu (Worm) là chương trình độc lập hoàn chỉnh, khác biệt với Virus chỉ là đoạn mã ký sinh.",
    },
  ],
};

// =====================================================================
// GAME 3: MẮT THẦN AN NINH: CẠM BẪY HAY AN TOÀN? (SORTGAME)
// =====================================================================
const sortGamePhishing: SortGame = {
  kind: "sort",
  id: "cam-bay-hay-an-toan",
  title: "Mắt thần An ninh: Cạm bẫy hay An toàn?",
  emoji: "🎣",
  instructions:
    "Kéo (hoặc bấm nút) từng thẻ sang đúng khay: Hành vi/tình huống đó là KĨ NĂNG SỐ AN TOÀN 🛡️ hay là CẠM BẪY NGUY HIỂM ⚠️ trên không gian mạng?",
  matchLabel: "An toàn 🛡️",
  matchEmoji: "🛡️",
  noMatchLabel: "Cạm bẫy ⚠️",
  noMatchEmoji: "⚠️",
  items: [
    {
      id: "safe-1",
      emoji: "🔒",
      label: "Kích hoạt xác thực 2 bước (2FA) cho email và mạng xã hội",
      isMatch: true,
      explain: "Xác thực 2 bước giúp dù lộ mật khẩu thì kẻ xấu vẫn không thể đăng nhập nếu thiếu mã OTP.",
    },
    {
      id: "trap-1",
      emoji: "💸",
      label: "Bấm vào link trúng thưởng iPhone 15 gửi từ nick người lạ trên mạng",
      isMatch: false,
      explain: "Chiêu trò lừa đảo câu view hoặc đánh cắp thông tin cá nhân cực kì nguy hiểm.",
    },
    {
      id: "safe-2",
      emoji: "📞",
      label: "Gọi điện thoại trực tiếp xác minh khi bạn thân nhắn mượn tiền gấp qua chat",
      isMatch: true,
      explain: "Gọi điện qua kênh độc lập là cách duy nhất tránh bẫy hacker chiếm đoạt nick giả mạo bạn bè.",
    },
    {
      id: "trap-2",
      emoji: "🆔",
      label: "Chụp ảnh căn cước công dân (CCCD) và thẻ học sinh đăng công khai lên Facebook",
      isMatch: false,
      explain: "Lộ thông tin định danh cá nhân rất dễ bị kẻ xấu lợi dụng làm hợp đồng vay tiền lậu.",
    },
    {
      id: "safe-3",
      emoji: "🔄",
      label: "Thường xuyên cập nhật hệ điều hành (Windows Update) để vá lỗi bảo mật",
      isMatch: true,
      explain: "Cập nhật hệ điều hành giúp vá các lỗ hổng mà sâu máy tính (Worm) có thể khai thác.",
    },
    {
      id: "trap-3",
      emoji: "🎮",
      label: "Tải và cài đặt các bản game bẻ khoá (crack, hack) từ trang web không rõ nguồn gốc",
      isMatch: false,
      explain: "Hầu hết các bản bẻ khoá lậu đều bị gài sẵn Trojan, mã độc đào coin hoặc Ransomware.",
    },
    {
      id: "safe-4",
      emoji: "💾",
      label: "Sao lưu định kì bài tập và dữ liệu quan trọng lên Google Drive hoặc ổ cứng ngoài",
      isMatch: true,
      explain: "Sao lưu độc lập giúp em không bao giờ sợ bị tống tiền nếu chẳng may máy dính mã độc.",
    },
    {
      id: "trap-4",
      emoji: "🔑",
      label: "Đặt mật khẩu là '123456' hay ngày sinh nhật cho tất cả tài khoản",
      isMatch: false,
      explain: "Mật khẩu đơn giản hoặc chứa thông tin cá nhân rất dễ bị phần mềm dò quét bẻ khóa.",
    },
    {
      id: "safe-5",
      emoji: "📸",
      label: "Chụp lại màn hình tin nhắn đe dọa và báo ngay cho cha mẹ, thầy cô khi bị bắt nạt",
      isMatch: true,
      explain: "Lưu giữ bằng chứng và nhờ người lớn can thiệp là cách ứng phó chuẩn xác với cyberbullying.",
    },
    {
      id: "trap-5",
      emoji: "📶",
      label: "Đăng nhập tài khoản ngân hàng trên mạng Wifi công cộng miễn phí không mật khẩu",
      isMatch: false,
      explain: "Dữ liệu truyền trên Wifi công cộng không mã hóa dễ bị tin tặc nghe lén và đánh cắp.",
    },
    {
      id: "safe-6",
      emoji: "🛡️",
      label: "Bật phần mềm diệt virus Windows Defender và Tường lửa (Firewall) theo dõi thường trực",
      isMatch: true,
      explain: "Lá chắn giám sát tự động của hệ điều hành giúp phát hiện và ngăn chặn mã độc kịp thời.",
    },
    {
      id: "trap-6",
      emoji: "⏰",
      label: "Chơi game và lướt mạng xã hội liên tục thâu đêm từ 6 đến 8 tiếng mỗi ngày",
      isMatch: false,
      explain: "Nghiện game và mạng xã hội gây kiệt quệ sức khỏe, giảm sút học tập và nguy cơ đột quỵ.",
    },
  ],
};

// =====================================================================
// GAME 4: DÒNG THỜI GIAN ĐẠI DỊCH MÃ ĐỘC (TIMELINEGAME)
// =====================================================================
const timelineGameMalware: TimelineGame = {
  kind: "timeline",
  id: "dong-thoi-gian-ma-doc",
  title: "Dòng lịch sử: Các đại dịch mã độc toàn cầu",
  emoji: "⏱️",
  instructions:
    "Kéo hoặc chạm để sắp xếp các đại dịch mã độc và sự kiện an ninh mạng chấn động thế giới theo đúng trình tự THỜI GIAN từ xưa tới nay!",
  items: [
    {
      id: "time-morris",
      emoji: "🐛",
      label: "Sâu Morris — Sâu máy tính đầu tiên lây lan làm nghẽn 10% mạng tiền thân ARPANET",
      year: "1988",
      explain: "Do Robert Tappan Morris viết ra, được coi là sự kiện mở đầu cho kỷ nguyên an ninh mạng toàn cầu.",
    },
    {
      id: "time-melissa",
      emoji: "📄",
      label: "Sâu Melissa — Nguỵ trang tệp Word tự gửi thư tới 50 địa chỉ Outlook, thiệt hại 1 tỉ USD",
      year: "1999",
      explain: "Đại dịch sâu lây qua email kinh điển thời kỳ đầu bùng nổ Internet gia đình.",
    },
    {
      id: "time-iloveyou",
      emoji: "💌",
      label: "Virus ILOVEYOU — Đánh lừa tâm lý bằng thư tình, làm tê liệt hàng triệu máy tính toàn cầu",
      year: "2000",
      explain: "Xuất phát từ Philippines, gây thiệt hại ước tính gần 10 tỉ USD cho các cơ quan và doanh nghiệp.",
    },
    {
      id: "time-codered",
      emoji: "🚨",
      label: "Sâu Code Red — Tấn công máy chủ web qua lỗ hổng hệ điều hành, thiệt hại 2 tỉ USD",
      year: "2001",
      explain: "Sâu mạng nhắm thẳng vào các máy chủ web Microsoft IIS, lây nhiễm hơn 359.000 máy chủ chỉ trong chưa đầy 1 ngày.",
    },
    {
      id: "time-wannacry",
      emoji: "🔒",
      label: "Sâu WannaCry — Mã độc tống tiền (Ransomware) quét mạng LAN đòi tiền chuộc Bitcoin",
      year: "2017",
      explain: "Tê liệt hàng loạt bệnh viện tại Anh và hệ thống máy tính tại hơn 150 quốc gia chỉ trong vài giờ.",
    },
    {
      id: "time-pegasus",
      emoji: "🕵️",
      label: "Mã độc gián điệp Pegasus — Phần mềm gián điệp siêu tinh vi xâm nhập smartphone",
      year: "2021",
      explain: "Mã độc gián điệp 'Zero-click' không cần người dùng bấm gì vẫn có thể theo dõi vị trí và mic điện thoại.",
    },
  ],
};

const bai09Games: LessonGame[] = [
  arenaGameCyberDefense,
  sortGameMalware,
  sortGamePhishing,
  timelineGameMalware,
];

export default bai09Games;
