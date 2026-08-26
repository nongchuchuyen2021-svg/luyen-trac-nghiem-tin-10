import type { LessonTheory } from "@/lib/types";

// Bài 21. Câu lệnh lặp while
// SGK trang 107–111, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Bài 20 dạy for để lặp khi đã BIẾT CHẮC số lần cần lặp. Nhưng đời không phải lúc nào cũng đếm trước được: đoán mật khẩu mấy lần mới đúng? Nhập điểm sai mấy lần mới hợp lệ? Không ai biết trước cả — và đó chính xác là lúc cần đến câu lệnh **while**. Bài này đi thật chậm qua từng bước để không ai nhầm while với for, và đặc biệt dừng lại thật lâu ở cái bẫy khiến chương trình bị \"đơ\" mãi không dừng.",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "while-co-ban",
      emoji: "🔂",
      heading: "while: lặp khi CHƯA BIẾT trước số lần",
      blocks: [
        {
          kind: "text",
          text: "Câu lệnh **while** lặp lại một khối lệnh **chừng nào điều kiện còn đúng**. Khác với for (biết chắc số lần lặp ngay từ lúc viết code), while phù hợp khi số lần lặp **phụ thuộc vào chính kết quả lúc chương trình đang chạy** — có thể 1 lần, có thể 10 lần, không ai đoán trước được.",
        },
        {
          kind: "figure",
          diagram: "for-vs-while-so-sanh",
          caption: "Hình 21.1. for cho việc đếm được trước — while cho việc không đếm được trước",
        },
        {
          kind: "example",
          title: "Tình huống: Trò chơi đoán mật khẩu bí mật của CLB Tin học",
          text: "CLB Tin học đặt một trò chơi nhỏ ở góc lớp: máy giữ sẵn mật khẩu \"bimat\", ai đoán đúng thì thắng. Bạn Kiên thử chơi — không ai, kể cả Kiên, biết trước cậu sẽ đoán đúng ngay lần đầu hay phải thử đến lần thứ mười. Đây chính xác là lúc for bó tay: for cần biết trước số lần lặp, còn while chỉ cần biết điều kiện dừng là gì (\"đoán đúng thì dừng\"), còn lặp bao nhiêu lần thì cứ để chương trình tự lo.",
        },
        {
          kind: "code",
          caption: "Trò chơi đoán mật khẩu — lặp lại chừng nào còn đoán sai",
          code: 'mk = input("Nhập mật khẩu: ")\nwhile mk != "bimat":\n    mk = input("Sai rồi! Nhập lại: ")\nprint("🎉 Chúc mừng, bạn đã đoán đúng!")',
        },
        {
          kind: "text",
          text: "Một điều quan trọng cần nhớ: while kiểm tra điều kiện **TRƯỚC** mỗi vòng lặp, kể cả vòng đầu tiên. Nếu điều kiện sai ngay từ đầu, khối lệnh bên trong **không hề chạy lần nào cả** — khác hẳn với việc \"chạy ít nhất một lần rồi mới kiểm tra\" mà một số bạn hay nhầm.",
        },
        {
          kind: "figure",
          diagram: "while-kiem-tra-truoc",
          caption: "Hình 21.2. Gõ đúng ngay từ đầu: while có thể chạy đúng 0 lần",
        },
        {
          kind: "note",
          text: "while <điều kiện>: lặp lại khối lệnh thụt lề bên trong chừng nào điều kiện còn đúng (True); điều kiện sai (False) thì dừng lại. Điều kiện được kiểm tra TRƯỚC mỗi lần lặp, kể cả trước lần đầu tiên — nếu sai ngay từ đầu, thân lặp không chạy lần nào. Dùng while khi số lần lặp phụ thuộc vào dữ liệu lúc chạy, không biết trước được.",
        },
        {
          kind: "check",
          q: "Nếu Kiên may mắn gõ đúng \"bimat\" ngay trong lần input() đầu tiên (trước khi vào vòng lặp), điều gì xảy ra?",
          options: [
            "Điều kiện while đã sai ngay từ đầu, nên thân vòng lặp không chạy lần nào, chương trình in thẳng lời chúc mừng",
            "Thân vòng lặp vẫn chạy đúng một lần trước khi thoát, dù đã gõ đúng",
            "Chương trình báo lỗi vì while luôn cần chạy ít nhất một lần",
            "Chương trình lặp vô hạn vì không có cơ hội để dừng lại",
          ],
          answer: 0,
          explain:
            "while kiểm tra điều kiện trước khi thực hiện thân lặp. Nếu mk đã bằng \"bimat\" từ input() ban đầu, điều kiện mk != \"bimat\" sai ngay lập tức, nên khối lệnh nhập lại bên trong while không được thực hiện lần nào.",
        },
        {
          kind: "check",
          q: "Trong bốn bài toán sau, bài nào NÊN dùng while thay vì for?",
          options: [
            "Yêu cầu nhập lại mật khẩu cho đến khi gõ đúng",
            "In bảng cửu chương 7 gồm đúng 9 dòng",
            "Tính tổng 100 số nguyên dương đầu tiên",
            "In sơ đồ ghế ngồi của rạp chiếu phim 3 hàng 5 ghế",
          ],
          answer: 0,
          explain:
            "Ba bài còn lại đều biết chính xác số lần lặp ngay khi viết chương trình (9 dòng, 100 số, 15 ghế) nên for là lựa chọn gọn hơn. Việc nhập mật khẩu thì không biết trước người dùng sẽ gõ đúng ở lần thứ mấy — đúng đặc trưng của while.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "bay-lap-vo-han",
      emoji: "🚨",
      heading: "Bẫy lặp vô hạn: quên cập nhật biến điều khiển",
      blocks: [
        {
          kind: "text",
          text: "Vì while tự kiểm tra điều kiện mà không tự động thay đổi giá trị nào cả (khác với for luôn tự cập nhật biến đếm), người lập trình **phải tự tay** đảm bảo có ít nhất một lệnh bên trong thân lặp làm điều kiện sớm muộn trở thành sai. Quên mất bước này là lỗi phổ biến nhất khi mới học while: chương trình rơi vào **lặp vô hạn**, chạy mãi không bao giờ dừng.",
        },
        {
          kind: "figure",
          diagram: "bay-lap-vo-han",
          caption: "Hình 21.3. Có cập nhật biến đếm thì dừng đúng lúc — quên cập nhật thì kẹt lại mãi mãi",
        },
        {
          kind: "example",
          title: "Tình huống: Đếm ngược pháo hoa giao thừa bị \"đơ\"",
          text: "Chuẩn bị tiết mục đếm ngược đêm giao thừa cho hội xuân của trường, Kiên viết chương trình đếm ngược từ 5 xuống 0 rồi hô \"Bắn pháo hoa!\". Nhấn chạy, màn hình hiện số 5 rồi... cứ thế hiện mãi số 5 không ngừng, laptop nóng ran. Kiên hoảng hốt bấm Ctrl+C để ngắt chương trình. Xem lại code mới tá hoả: cậu quên mất dòng lệnh giảm biến đếm bên trong thân lặp — biến đếm mãi mãi giữ nguyên giá trị 5, khiến điều kiện dem lớn hơn 0 không bao giờ trở thành sai.",
        },
        {
          kind: "code",
          caption: "Đếm ngược pháo hoa — bản lỗi và bản đã sửa",
          code: '# SAI: quên dòng giảm dem → lặp vô hạn\ndem = 5\nwhile dem > 0:\n    print(dem)\n\n# ĐÚNG: có dòng dem = dem - 1\ndem = 5\nwhile dem > 0:\n    print(dem)\n    dem = dem - 1\nprint("Bắn pháo hoa! 🎆")',
        },
        {
          kind: "note",
          text: "Vòng lặp vô hạn xảy ra khi điều kiện của while không bao giờ trở thành sai — nguyên nhân phổ biến nhất là quên cập nhật biến điều khiển bên trong thân lặp. Trước khi chạy một vòng while, luôn tự hỏi: \"có dòng lệnh nào trong thân lặp làm thay đổi giá trị dùng trong điều kiện không?\". Nếu chương trình lỡ bị lặp vô hạn, nhấn Ctrl+C (hoặc nút Stop của môi trường lập trình) để ngắt ngay lập tức.",
        },
        {
          kind: "check",
          q: "Vì sao chương trình đếm ngược của Kiên bị lặp vô hạn, cứ hiện mãi số 5 không dừng?",
          options: [
            "Vì thân vòng lặp thiếu dòng lệnh giảm biến dem, nên dem mãi mãi giữ giá trị 5 và điều kiện luôn đúng",
            "Vì Python không hỗ trợ đếm ngược từ một số dương về 0",
            "Vì lệnh print(dem) chỉ được phép gọi đúng một lần trong toàn bộ chương trình",
            "Vì biến dem đã bị đặt sai kiểu dữ liệu ngay từ đầu chương trình",
          ],
          answer: 0,
          explain:
            "while không tự động thay đổi bất kì biến nào — chỉ có lệnh dem = dem - 1 bên trong thân lặp mới làm dem giảm dần. Thiếu dòng đó, dem đứng yên ở 5 mãi mãi, khiến điều kiện dem > 0 không bao giờ sai.",
        },
        {
          kind: "check",
          q: "Khi một chương trình Python lỡ rơi vào lặp vô hạn đang chạy trên máy, cách xử lí đúng và nhanh nhất là gì?",
          options: [
            "Nhấn Ctrl+C hoặc nút Stop của môi trường lập trình để ngắt chương trình",
            "Tắt hẳn máy tính rồi khởi động lại từ đầu để chương trình tự dừng",
            "Chờ đúng một phút, Python sẽ tự động huỷ mọi vòng lặp quá dài",
            "Nhấn phím Enter thật nhiều lần liên tục cho đến khi chương trình tự thoát",
          ],
          answer: 0,
          explain:
            "Ctrl+C gửi tín hiệu ngắt chương trình đang chạy (KeyboardInterrupt). Python không tự đặt giới hạn thời gian cho vòng lặp nên sẽ chạy mãi nếu không được can thiệp — không cần khởi động lại cả máy tính.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "ung-dung-while",
      emoji: "📄",
      heading: "Ứng dụng while: nhập liệu hợp lệ và tích luỹ đến ngưỡng",
      blocks: [
        {
          kind: "text",
          text: "Hai kiểu bài toán rất hay dùng while: **kiểm tra dữ liệu nhập vào** (bắt nhập lại đến khi hợp lệ) và **tích luỹ giá trị đến khi đạt một ngưỡng** nào đó — cả hai đều có điểm chung là không biết trước chính xác sẽ lặp bao nhiêu lần.",
        },
        {
          kind: "code",
          caption: "Bắt nhập lại điểm cho đến khi hợp lệ (0 đến 10)",
          code: 'diem = float(input("Nhập điểm (0-10): "))\nwhile diem < 0 or diem > 10:\n    diem = float(input("Không hợp lệ! Nhập lại: "))\nprint("Đã ghi nhận điểm:", diem)',
        },
        {
          kind: "example",
          title: "Tình huống: Gấp giấy đến khi dày hơn một mét",
          text: "Trong giờ ngoại khoá STEM, thầy đố cả lớp: \"Một tờ giấy dày 0,1mm, cứ gấp đôi liên tục thì gấp bao nhiêu lần mới dày quá 1 mét (1000mm)?\". Không ai biết chắc con số ngay, kể cả thầy — phải thử dần mới ra. Kiên viết ngay một vòng while: độ dày ban đầu 0,1mm, mỗi vòng lặp độ dày lại tăng gấp đôi, cứ thế cho đến khi độ dày vượt quá 1000mm thì dừng và đếm xem đã gấp bao nhiêu lần. Kết quả khiến cả lớp bất ngờ: chỉ cần đúng 14 lần gấp, độ dày đã vượt hẳn một mét!",
        },
        {
          kind: "figure",
          diagram: "gap-giay-toi-nguong",
          caption: "Hình 21.4. Mỗi lần gấp đôi, độ dày tăng vọt — while dừng lại đúng lúc vượt ngưỡng",
        },
        {
          kind: "code",
          caption: "Đếm số lần gấp giấy cho đến khi dày hơn 1000mm",
          code: 'do_day = 0.1\nlan_gap = 0\nwhile do_day <= 1000:\n    do_day = do_day * 2\n    lan_gap = lan_gap + 1\nprint("Số lần gấp cần thiết:", lan_gap)',
        },
        {
          kind: "note",
          text: "Kiểm tra dữ liệu nhập vào: while lặp lại việc nhập chừng nào dữ liệu còn chưa hợp lệ. Tích luỹ đến ngưỡng: while lặp lại việc cộng dồn hoặc nhân dồn chừng nào giá trị còn chưa đạt mức mong muốn. Cả hai đều có số lần lặp phụ thuộc hoàn toàn vào dữ liệu thực tế lúc chương trình chạy, không thể biết trước khi viết code.",
        },
        {
          kind: "check",
          q: "Vì sao bài toán \"gấp giấy đến khi dày hơn 1000mm\" phù hợp dùng while hơn là for?",
          options: [
            "Vì không biết trước chính xác cần gấp bao nhiêu lần mới vượt ngưỡng độ dày — phải tính dần mới biết",
            "Vì phép nhân đôi liên tiếp chỉ thực hiện được bằng while, for không hỗ trợ nhân",
            "Vì bài toán này không thể lập trình được bằng bất kì loại vòng lặp nào",
            "Vì for chỉ hoạt động được với các số nguyên, không hoạt động với số thập phân như 0.1",
          ],
          answer: 0,
          explain:
            "Số lần cần gấp phụ thuộc vào phép tính nhân đôi liên tiếp, không biết trước ngay từ đầu — chỉ khi chạy chương trình và so sánh với ngưỡng 1000mm ở mỗi vòng mới xác định được khi nào nên dừng. Đây là đặc trưng điển hình để dùng while.",
        },
      ],
    },
  ],

  summary: [
    "**while <điều kiện>:** lặp lại khối lệnh chừng nào điều kiện còn đúng; dùng khi số lần lặp KHÔNG biết trước, phụ thuộc dữ liệu lúc chạy — khác với for dùng khi biết trước số lần.",
    "while kiểm tra điều kiện TRƯỚC mỗi vòng, kể cả vòng đầu — điều kiện sai ngay từ đầu thì thân lặp không chạy lần nào.",
    "**Lặp vô hạn** xảy ra khi quên cập nhật biến điều khiển trong thân lặp khiến điều kiện không bao giờ sai. Luôn kiểm tra thân lặp có làm thay đổi điều kiện không; dùng Ctrl+C để ngắt khẩn cấp khi lỡ bị treo.",
    "while rất hợp với hai dạng bài: kiểm tra dữ liệu nhập vào (lặp đến khi hợp lệ) và tích luỹ giá trị đến khi đạt ngưỡng mong muốn.",
  ],
};

export default theory;
