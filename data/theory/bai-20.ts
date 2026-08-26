import type { LessonTheory } from "@/lib/types";

// Bài 20. Câu lệnh lặp for
// SGK trang 102–106, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Nếu phải gõ 30 lệnh print giống hệt nhau để in 30 dòng, chắc chẳng ai muốn học lập trình nữa! Câu lệnh **for** giải quyết đúng nỗi khổ đó: lặp lại một khối lệnh đúng số lần mình muốn, chỉ với vài dòng code. Đây là bài dễ \"vấp\" nhất trong cả chương trình lớp 10 vì hàm range() có một quy tắc hơi ngược trực giác — nên mọi ví dụ trong bài đều cố tình đi thật chậm, thật cụ thể để không ai bị bỏ lại phía sau.",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "for-va-range",
      emoji: "🔁",
      heading: "Vòng lặp for và hàm range(): lặp đúng số lần đã biết trước",
      blocks: [
        {
          kind: "text",
          text: "Khi biết trước chính xác cần lặp lại một việc bao nhiêu lần, ta dùng câu lệnh **for**. Cách viết phổ biến nhất là kết hợp với hàm **range()**: for i in range(n) sẽ lặp đúng **n lần**, mỗi lần biến đếm i tự động nhận một giá trị mới — hoàn toàn không cần tự tay cộng thêm 1 như một số ngôn ngữ khác.",
        },
        {
          kind: "example",
          title: "Tình huống: Rung chuông báo hết giờ ôn tập đúng 5 lần",
          text: "Cô giáo nhờ bạn Na phụ trách rung chuông nhỏ báo hết giờ tự học — đúng 5 tiếng liên tục để cả lớp chú ý. Na không cần quan tâm đó là tiếng thứ mấy, chỉ cần lặp lại đúng hành động \"rung chuông\" 5 lần. Đây là trường hợp đơn giản nhất của for: chỉ cần lặp đủ số lần, không cần dùng đến giá trị của biến đếm.",
        },
        {
          kind: "code",
          caption: "Lặp lại một hành động đúng 5 lần, không cần quan tâm giá trị của i",
          code: 'for i in range(5):\n    print("🔔 Rung chuông!")',
        },
        {
          kind: "figure",
          diagram: "vong-lap-filmstrip",
          caption: "Hình 20.1. Cùng một lệnh, chạy lại 5 lần — mỗi lần i tự động đổi giá trị",
        },
        {
          kind: "text",
          text: "Nhưng nhiều khi giá trị của i lại rất quan trọng — ví dụ khi cần đánh số thứ tự. Đây là lúc phải để ý kĩ đến cách range() sinh ra dãy số: **range(n)** cho dãy từ 0 đến n−1 (thiếu mất giá trị n); **range(a, b)** cho dãy từ a đến b−1 (thiếu mất giá trị b). Nói cách khác, range() luôn \"hụt\" mất giá trị cuối cùng — đây chính là lỗi kinh điển khiến người mới học thường bị thiếu hoặc thừa một lần lặp.",
        },
        {
          kind: "figure",
          diagram: "range-so-line",
          caption: "Hình 20.2. range() luôn dừng lại TRƯỚC giá trị cuối — dễ gây thiếu một số nếu không để ý",
        },
        {
          kind: "example",
          title: "Tình huống: Thiếu mất một số báo danh",
          text: "Chuẩn bị giải cờ vua của trường với đúng 20 thí sinh, Na viết chương trình in phiếu số báo danh từ 1 đến 20. Na viết vội for i in range(1, 20): rồi in \"Số báo danh\", i — chạy thử chỉ thấy phiếu in đến số 19, thiếu mất bạn thứ 20! Na kiểm tra lại: range(1, 20) sinh dãy từ 1 đến 19, đúng như quy tắc \"hụt mất giá trị cuối\". Sửa lại thành range(1, 21), Na mới in đủ trọn vẹn 20 phiếu số báo danh.",
        },
        {
          kind: "code",
          caption: "Sửa lỗi thiếu một số báo danh",
          code: 'for i in range(1, 21):\n    print("Số báo danh", i)\n\n# range(1, 21) → 1, 2, 3, ..., 20  (đủ 20 giá trị)',
        },
        {
          kind: "note",
          text: "for <biến> in range(...): lặp đúng số lần theo dãy do range() sinh ra. range(n): dãy 0 đến n−1 (n giá trị). range(a, b): dãy a đến b−1 (b−a giá trị). Cả hai đều KHÔNG bao gồm giá trị chặn trên — muốn lặp đến đúng số n, phải viết range(n+1) hoặc range(a, n+1).",
        },
        {
          kind: "check",
          q: "Muốn in đủ số báo danh cho đúng 20 thí sinh, đánh số từ 1 đến 20, cách viết nào là đúng?",
          options: [
            "for i in range(1, 21):",
            "for i in range(1, 20):",
            "for i in range(0, 20):",
            "for i in range(20):",
          ],
          answer: 0,
          explain:
            "range(a, b) sinh dãy từ a đến b−1, tức KHÔNG bao gồm b. Muốn dãy chạy đến đúng 20, chặn trên phải là 21 để 20 vẫn còn nằm trong dãy: range(1, 21) cho đúng 1, 2, ..., 20.",
        },
        {
          kind: "check",
          q: "Vòng lặp for i in range(5): print(\"🔔\") thực hiện thân lặp bao nhiêu lần?",
          options: ["5 lần", "4 lần", "6 lần", "Không xác định được"],
          answer: 0,
          explain:
            "range(5) sinh đúng 5 giá trị (0, 1, 2, 3, 4), nên thân vòng lặp được thực hiện đúng 5 lần — dù bản thân giá trị của i không được dùng đến trong lệnh in.",
        },
        {
          kind: "check",
          q: "range(3, 8) sinh ra dãy số nào?",
          options: ["3, 4, 5, 6, 7", "3, 4, 5, 6, 7, 8", "4, 5, 6, 7, 8", "3, 8"],
          answer: 0,
          explain:
            "range(a, b) bắt đầu từ a, dừng TRƯỚC b: range(3, 8) cho ra 3, 4, 5, 6, 7 — đúng 5 giá trị (8 − 3 = 5), không có số 8.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "bien-cong-don",
      emoji: "🪣",
      heading: "Biến cộng dồn: tính tổng qua vòng lặp",
      blocks: [
        {
          kind: "text",
          text: "Một trong những việc for làm tốt nhất là **cộng dồn** giá trị qua từng vòng lặp — ví dụ tính tổng một dãy số. Kĩ thuật này cần một **biến cộng dồn** (thường gọi là biến tích luỹ): khởi tạo giá trị ban đầu (thường bằng 0) **TRƯỚC** vòng lặp, sau đó mỗi vòng cộng thêm giá trị mới vào chính nó. Đặt lệnh khởi tạo nhầm vào TRONG vòng lặp là lỗi rất phổ biến — biến sẽ bị đặt lại từ đầu ở mỗi vòng thay vì giữ lại kết quả cộng dồn.",
        },
        {
          kind: "figure",
          diagram: "bien-cong-don",
          caption: "Hình 20.3. Khởi tạo biến cộng dồn TRƯỚC vòng lặp — nếu đặt sai chỗ, kết quả sẽ sai hoàn toàn",
        },
        {
          kind: "example",
          title: "Tình huống: Chiến dịch quyên góp sách cũ cho thư viện",
          text: "Lớp 10A2 phát động quyên góp sách cũ cho thư viện trường trong 5 ngày: ngày thứ i, cả lớp góp thêm đúng i quyển sách (ngày 1 được 1 quyển, ngày 2 được 2 quyển, ngày 3 được 3 quyển…). Na viết chương trình cộng dồn tổng số sách qua từng ngày. Cậu bạn ngồi cạnh tò mò thử đổi chỗ dòng khởi tạo s = 0 xuống bên trong vòng lặp — chạy lại thì tổng cuối cùng chỉ còn đúng 5, thay vì 15 quyển như tính tay! Hoá ra mỗi vòng lặp, biến s bị \"đổ sạch\" về 0 rồi mới cộng ngày hiện tại vào, nên chẳng còn giữ được kết quả của những ngày trước đó.",
        },
        {
          kind: "code",
          caption: "Cộng dồn tổng số sách quyên góp qua 5 ngày — đúng và sai",
          code: '# ĐÚNG: khởi tạo s = 0 TRƯỚC vòng lặp\ns = 0\nfor i in range(1, 6):\n    s = s + i\nprint(s)          # 15\n\n# SAI: đặt s = 0 vào TRONG vòng lặp\nfor i in range(1, 6):\n    s = 0\n    s = s + i\nprint(s)          # 5 — chỉ còn giá trị của ngày cuối',
        },
        {
          kind: "note",
          text: "Biến cộng dồn phải được khởi tạo (thường bằng 0) TRƯỚC khi vào vòng lặp, và lệnh cộng dồn s = s + i phải nằm TRONG vòng lặp. Nếu khởi tạo lại giá trị ban đầu bên trong vòng lặp, biến sẽ mất hết kết quả tích luỹ của các vòng trước — đây là lỗi lôgic rất hay gặp, chương trình vẫn chạy được nhưng cho kết quả sai.",
        },
        {
          kind: "check",
          q: "Trong chương trình quyên góp sách, vì sao khi chuyển dòng s = 0 vào bên trong vòng lặp thì kết quả cuối cùng lại sai?",
          options: [
            "Vì biến s bị đặt lại 0 ở đầu mỗi vòng, nên mất hết phần tổng đã cộng dồn được từ các vòng trước",
            "Vì Python không cho phép đặt lệnh gán bên trong một vòng lặp for",
            "Vì biến đếm i sẽ tự động dừng lại sau vòng lặp đầu tiên",
            "Vì lệnh print(s) chỉ hoạt động khi s được khởi tạo bên ngoài vòng lặp",
          ],
          answer: 0,
          explain:
            "Mỗi lần lặp lại chạy s = 0 rồi mới cộng, nên toàn bộ kết quả cộng dồn của những vòng trước bị xoá sạch — cuối cùng s chỉ còn giữ giá trị của lần cộng ở vòng lặp cuối cùng.",
        },
        {
          kind: "check",
          q: "Đoạn chương trình s = 0; for i in range(1, 6): s = s + i; print(s) cuối cùng in ra giá trị nào?",
          options: ["15", "5", "10", "6"],
          answer: 0,
          explain:
            "s cộng dồn lần lượt 1 + 2 + 3 + 4 + 5 = 15, vì s = 0 được khởi tạo đúng một lần trước vòng lặp và giữ nguyên kết quả tích luỹ qua từng vòng.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "vong-lap-long-nhau",
      emoji: "🎬",
      heading: "Vòng lặp lồng nhau: in sơ đồ hai chiều",
      blocks: [
        {
          kind: "text",
          text: "Khi dữ liệu có hai chiều — như hàng và cột — ta đặt một vòng for **lồng bên trong** một vòng for khác. Vòng **ngoài** thường điều khiển hàng, vòng **trong** điều khiển cột: ứng với **mỗi lần** vòng ngoài chạy, vòng trong sẽ chạy **trọn vẹn** từ đầu đến cuối một lượt.",
        },
        {
          kind: "figure",
          diagram: "ghe-rap-chieu-phim",
          caption: "Hình 20.4. for lồng nhau: vòng ngoài chọn hàng, vòng trong chọn từng ghế trong hàng đó",
        },
        {
          kind: "example",
          title: "Tình huống: In sơ đồ chỗ ngồi rạp chiếu phim mini của trường",
          text: "CLB Điện ảnh cần in sơ đồ chỗ ngồi cho phòng chiếu mini: 3 hàng ghế, mỗi hàng 5 ghế, đặt tên theo kiểu \"Hàng 1 - Ghế 1\", \"Hàng 1 - Ghế 2\"... cho tới \"Hàng 3 - Ghế 5\". Na nhận ra đây đúng là bài toán hai vòng lặp lồng nhau: vòng ngoài chạy qua từng hàng (1, 2, 3); với MỖI hàng đó, vòng trong lại chạy hết một lượt từ ghế 1 đến ghế 5 rồi mới quay lại vòng ngoài để sang hàng tiếp theo.",
        },
        {
          kind: "code",
          caption: "In sơ đồ 3 hàng, mỗi hàng 5 ghế bằng hai vòng lặp lồng nhau",
          code: 'for hang in range(1, 4):\n    for ghe in range(1, 6):\n        print("Hàng", hang, "- Ghế", ghe)\n\n# In tổng cộng 3 × 5 = 15 dòng',
        },
        {
          kind: "note",
          text: "Vòng lặp lồng nhau gồm một vòng for đặt bên trong một vòng for khác. Với mỗi lần lặp của vòng ngoài, toàn bộ vòng trong chạy trọn vẹn hết một lượt rồi mới quay về vòng ngoài để tiếp tục. Tổng số lần thân lệnh trong cùng được thực hiện bằng (số lần vòng ngoài) nhân (số lần vòng trong).",
        },
        {
          kind: "check",
          q: "Trong chương trình in sơ đồ ghế rạp chiếu phim, khi vòng lặp ngoài đang ở hàng 2, vòng lặp trong sẽ làm gì?",
          options: [
            "Chạy trọn vẹn từ ghế 1 đến ghế 5 của đúng hàng 2, rồi mới quay lại vòng ngoài để sang hàng 3",
            "Chỉ in đúng một ghế duy nhất rồi lập tức chuyển ngay sang hàng 3",
            "Bỏ qua hàng 2 hoàn toàn vì vòng trong chỉ chạy ở hàng đầu tiên",
            "Chạy lại từ ghế 1 đến ghế 5 của tất cả các hàng đã đi qua trước đó",
          ],
          answer: 0,
          explain:
            "Ứng với mỗi lần lặp của vòng ngoài (mỗi hàng), vòng lặp trong luôn chạy trọn vẹn một lượt đầy đủ (ghế 1 đến ghế 5) trước khi vòng ngoài chuyển sang giá trị hàng tiếp theo.",
        },
        {
          kind: "check",
          q: "Chương trình in sơ đồ ghế rạp chiếu phim ở trên (3 hàng, mỗi hàng 5 ghế) in ra tổng cộng bao nhiêu dòng?",
          options: ["15 dòng", "8 dòng", "3 dòng", "5 dòng"],
          answer: 0,
          explain:
            "Vòng ngoài chạy 3 lần (3 hàng), mỗi lần vòng trong lại chạy đủ 5 lần (5 ghế) — tổng số dòng in ra là 3 nhân 5, bằng 15 dòng.",
        },
      ],
    },
  ],

  summary: [
    "**for <biến> in range(...):** lặp đúng số lần theo dãy do range() sinh ra. range(n) cho dãy 0 đến n−1; range(a, b) cho dãy a đến b−1 — cả hai đều KHÔNG bao gồm giá trị chặn trên.",
    "**Biến cộng dồn** phải khởi tạo TRƯỚC vòng lặp; lệnh cộng dồn (như s = s + i) đặt TRONG vòng lặp. Khởi tạo nhầm vào trong vòng lặp sẽ làm mất hết kết quả tích luỹ của các vòng trước.",
    "**Vòng lặp lồng nhau** đặt một for bên trong một for khác — với mỗi lần lặp của vòng ngoài, vòng trong chạy trọn vẹn hết một lượt. Tổng số lần lặp của thân lệnh trong cùng bằng tích số lần lặp của hai vòng.",
    "Luôn kiểm tra kĩ chặn trên của range() khi cần lặp đến một số cụ thể — lỗi \"hụt mất một giá trị\" là lỗi phổ biến nhất khi mới học vòng lặp for.",
  ],
};

export default theory;
