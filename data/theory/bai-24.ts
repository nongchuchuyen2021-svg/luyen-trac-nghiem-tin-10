import type { LessonTheory } from "@/lib/types";

// Bài 24. Xâu kí tự
// SGK trang 122–126, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Bài 22-23 dạy danh sách — dãy giá trị SỬA được từng phần tử. Hôm nay đến lượt xâu kí tự (str), dãy kí tự trông rất giống danh sách (cũng đánh chỉ số từ 0, cũng duyệt được bằng for) nhưng ẩn chứa một khác biệt cực kì quan trọng: xâu **không cho sửa từng kí tự**. Nhớ đúng một điều này sẽ giúp em tránh được lỗi hay gặp nhất khi mới làm việc với xâu.",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "xau-va-tinh-bat-bien",
      emoji: "🔒",
      heading: "Xâu kí tự: giống danh sách ở chỉ số, nhưng KHÔNG sửa được",
      blocks: [
        {
          kind: "text",
          text: "**Xâu kí tự (str)** là một dãy kí tự đặt trong cặp nháy đơn hoặc nháy kép, ví dụ \"Tin học\". Cũng như danh sách, xâu truy cập từng kí tự qua chỉ số bắt đầu từ **0** (s[0] là kí tự đầu tiên), và **len(s)** cho biết số kí tự — kể cả dấu cách cũng được tính là một kí tự. Nhưng có một khác biệt cốt lõi: xâu là kiểu dữ liệu **không thay đổi được (immutable)** — không thể gán lại một kí tự bên trong xâu như vẫn làm được với danh sách.",
        },
        {
          kind: "figure",
          diagram: "xau-bat-bien",
          caption: "Hình 24.1. Danh sách sửa được từng ô — xâu thì tuyệt đối không",
        },
        {
          kind: "example",
          title: "Tình huống: Gõ nhầm thẻ tên buổi dã ngoại",
          text: "Chuẩn bị thẻ tên đeo cho buổi dã ngoại, Vy gõ vội biến ten = \"Vi\" nhưng gõ nhầm — đúng ra phải là \"Vy\". Theo phản xạ từ bài học danh sách, Vy thử sửa ngay bằng ten[1] = \"y\", giống hệt cách sửa phần tử danh sách tuần trước — nhưng máy báo lỗi đỏ TypeError ngay lập tức. Hoá ra xâu không cho phép sửa từng kí tự theo kiểu đó. Cách đúng là tạo hẳn một xâu mới: ten = \"V\" + \"y\", hoặc đơn giản nhất là gán lại toàn bộ ten = \"Vy\".",
        },
        {
          kind: "code",
          caption: "Xâu không sửa được từng kí tự — phải tạo xâu mới",
          code: 'ten = "Vi"\nprint(len(ten))   # 2\nprint(ten[0])     # V\n\nten[1] = "y"       # TypeError — xâu không sửa được như vậy\n\nten = "V" + "y"    # ĐÚNG: tạo hẳn một xâu mới\nprint(ten)         # Vy',
        },
        {
          kind: "note",
          text: "Xâu kí tự truy cập theo chỉ số s[i] và tính độ dài bằng len(s), giống cách làm với danh sách — chỉ số cũng bắt đầu từ 0. Nhưng xâu là kiểu bất biến (immutable): không thể gán lại một kí tự như s[0] = \"X\" (sẽ gây lỗi TypeError). Muốn thay đổi nội dung, phải tạo ra một xâu hoàn toàn mới rồi gán lại cho biến.",
        },
        {
          kind: "check",
          q: "Vy có biến ten = \"Vi\" và muốn sửa kí tự thứ hai thành \"y\". Lệnh ten[1] = \"y\" cho kết quả gì?",
          options: [
            "Chương trình báo lỗi TypeError vì xâu không cho phép gán lại từng kí tự",
            "Biến ten đổi thành \"Vy\" giống hệt cách sửa một phần tử của danh sách",
            "Chương trình chạy bình thường nhưng ten vẫn giữ nguyên giá trị \"Vi\"",
            "Biến ten trở thành danh sách [\"V\", \"y\"] một cách tự động",
          ],
          answer: 0,
          explain:
            "Xâu là kiểu dữ liệu bất biến (immutable) — không có cách nào gán lại trực tiếp một kí tự bên trong nó. Muốn đổi nội dung, phải tạo một xâu mới rồi gán lại cho biến ten, ví dụ ten = \"Vy\".",
        },
        {
          kind: "check",
          q: "Với s = \"Na Ri\" (có một dấu cách ở giữa), giá trị của len(s) là bao nhiêu?",
          options: ["5", "4", "6", "2"],
          answer: 0,
          explain:
            "len() đếm TẤT CẢ kí tự, kể cả dấu cách: N-a-(dấu cách)-R-i, tổng cộng đúng 5 kí tự.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "ghep-lap-lat-cat",
      emoji: "✂️",
      heading: "Ghép nối (+), lặp lại và lát cắt s[a:b]",
      blocks: [
        {
          kind: "text",
          text: "Phép **+** ghép hai xâu thành một, nhưng ghép **liền mạch** — Python không tự thêm dấu cách cho em, quên là dính chữ ngay. Phép **nhân với một số nguyên** lặp lại xâu đó nhiều lần liên tiếp — rất tiện để vẽ đường viền hay dấu phân cách. Và **lát cắt s[a:b]** lấy ra một đoạn con của xâu, từ chỉ số a đến **trước** chỉ số b — đúng quy tắc \"hụt mất giá trị cuối\" giống hệt hàm range() đã học ở bài 20.",
        },
        {
          kind: "figure",
          diagram: "ghep-noi-va-lat-cat",
          caption: "Hình 24.2. Ghép nối không tự thêm dấu cách — lát cắt cũng hụt mất chỉ số cuối như range()",
        },
        {
          kind: "example",
          title: "Tình huống: Lời chào riêng và viền trang trí cho thẻ tên",
          text: "Vy muốn in lời chào cá nhân hoá cho từng bạn: ghép \"Xin chào, \" với tên rồi thêm dấu chấm than. Lần đầu Vy quên mất dấu cách trong xâu \"Xin chào,\", kết quả in ra dính hẳn thành \"Xin chào,Vy!\" xấu ơi là xấu — sửa lại thành \"Xin chào, \" (có thêm khoảng trắng cuối) mới đúng ý. Để trang trí viền thẻ tên, Vy dùng \"-\" nhân với 20 để có ngay một dòng gạch ngang dài mà không cần gõ tay từng dấu. Cuối cùng, muốn lấy 2 chữ cái đầu tên lớp \"10A2\" làm kí hiệu viết tắt, Vy dùng lát cắt lop[0:3] — nhớ đúng quy tắc chỉ số 3 sẽ KHÔNG được lấy vào.",
        },
        {
          kind: "code",
          caption: "Ghép nối, lặp lại và cắt xâu cho thẻ tên",
          code: 'loi_chao = "Xin chào, " + "Vy" + "!"\nprint(loi_chao)        # Xin chào, Vy!\n\nvien = "-" * 20\nprint(vien)            # --------------------\n\nlop = "10A2"\nprint(lop[0:3])        # 10A — chỉ số 3 (kí tự "2") KHÔNG được lấy',
        },
        {
          kind: "note",
          text: "s1 + s2 ghép hai xâu liền nhau, không tự chèn dấu cách. Phép nhân xâu với một số nguyên n (xem cú pháp trong khối lệnh ở trên) lặp lại xâu đó liên tiếp n lần. s[a:b] lấy lát cắt từ chỉ số a đến trước chỉ số b (không bao gồm b) — cùng quy tắc với range(a, b). Bỏ trống a hoặc b để lấy từ đầu hoặc đến cuối xâu, ví dụ s[:3] hoặc s[2:].",
        },
        {
          kind: "check",
          q: "Vì sao khi Vy ghép \"Xin chào,\" + \"Vy\" + \"!\", kết quả lại in dính liền thành \"Xin chào,Vy!\" thay vì có khoảng trắng sau dấu phẩy?",
          options: [
            "Vì phép + chỉ ghép nối các xâu lại đúng như chúng có, không tự động thêm bất kì kí tự nào khác",
            "Vì Python luôn xoá hết khoảng trắng khi thực hiện phép ghép nối hai xâu",
            "Vì dấu phẩy trong xâu đầu tiên đã bị lỗi cú pháp nên bị bỏ qua",
            "Vì chỉ có phép nhân xâu mới giữ được khoảng trắng, còn phép cộng thì không",
          ],
          answer: 0,
          explain:
            "Phép + chỉ đơn thuần nối liền hai xâu theo đúng nội dung đã có, không hề tự thêm dấu cách hay bất kì kí tự nào khác. Muốn có khoảng trắng, người viết code phải tự đưa nó vào trong xâu, ví dụ \"Xin chào, \" (có dấu cách ở cuối).",
        },
        {
          kind: "check",
          q: "Với lop = \"10A2\", lát cắt lop[0:3] trả về xâu nào?",
          options: ['"10A"', '"10A2"', '"0A2"', '"A2"'],
          answer: 0,
          explain:
            "Lát cắt s[a:b] lấy từ chỉ số a đến TRƯỚC chỉ số b. lop[0:3] lấy chỉ số 0, 1, 2 (tức \"1\", \"0\", \"A\"), tạo thành \"10A\" — kí tự ở chỉ số 3 (\"2\") không được lấy vào.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "duyet-kiem-tra-so-sanh",
      emoji: "🔡",
      heading: "Duyệt xâu, kiểm tra xâu con và so sánh xâu",
      blocks: [
        {
          kind: "text",
          text: "Xâu duyệt được bằng vòng lặp **for ch in s**, cho ch lần lượt nhận từng kí tự — giống hệt cách duyệt danh sách. Toán tử **in** kiểm tra một xâu con có xuất hiện bên trong xâu lớn hay không, trả về True/False. Và khi so sánh hai xâu bằng <, >, Python so sánh theo **thứ tự từ điển** — xét lần lượt từng kí tự từ trái sang phải theo mã kí tự, chứ **không** so theo độ dài của xâu.",
        },
        {
          kind: "figure",
          diagram: "so-sanh-xau",
          caption: "Hình 24.3. So sánh xâu xét từng kí tự theo bảng chữ cái, không phải xâu dài hơn là lớn hơn",
        },
        {
          kind: "example",
          title: "Tình huống: Đếm nguyên âm và xếp thẻ tên theo bảng chữ cái",
          text: "Muốn trang trí thêm, Vy đếm xem tên mỗi bạn có bao nhiêu nguyên âm bằng cách duyệt for ch in ten rồi kiểm tra ch in \"aeiouAEIOU\". Xếp chồng thẻ tên để phát theo thứ tự, Vy nhớ lại: so sánh hai tên như \"An\" và \"Bình\" không phải xem tên nào dài hơn, mà xét kí tự đầu tiên trước — \"A\" đứng trước \"B\" trong bảng chữ cái nên \"An\" nhỏ hơn \"Bình\", bất kể \"Bình\" có nhiều chữ cái hơn.",
        },
        {
          kind: "code",
          caption: "Duyệt xâu đếm nguyên âm và kiểm tra xâu con",
          code: 'ten = "Vy"\ndem = 0\nfor ch in ten:\n    if ch in "aeiouAEIOU":\n        dem = dem + 1\nprint("Số nguyên âm:", dem)\n\nprint("Nguyễn" in "Nguyễn Văn An")   # True',
        },
        {
          kind: "note",
          text: "for ch in s duyệt từng kí tự của xâu s. xâu_con in s kiểm tra xâu_con có xuất hiện trong s hay không, trả về True/False. So sánh hai xâu bằng <, > thực hiện theo thứ tự từ điển: xét từng kí tự từ trái sang phải theo mã kí tự — dừng ngay khi tìm được kí tự khác nhau đầu tiên, không liên quan đến độ dài của xâu.",
        },
        {
          kind: "check",
          q: "So sánh hai xâu \"An\" và \"Bình\" bằng \"An\" < \"Bình\", kết quả là gì và vì sao?",
          options: [
            "True, vì kí tự \"A\" đứng trước kí tự \"B\" trong bảng chữ cái",
            "False, vì \"An\" có ít kí tự hơn nên luôn được coi là nhỏ hơn",
            "False, vì \"Bình\" có dấu thanh nên luôn lớn hơn xâu không dấu",
            "Báo lỗi, vì hai xâu có độ dài khác nhau nên không so sánh được",
          ],
          answer: 0,
          explain:
            "So sánh xâu xét lần lượt từng kí tự từ trái sang phải theo mã kí tự, không liên quan gì đến độ dài. Ngay kí tự đầu tiên, \"A\" đã đứng trước \"B\" trong bảng chữ cái, nên phép so sánh dừng lại và trả về True — không cần xét tới các kí tự còn lại.",
        },
        {
          kind: "check",
          q: "Biểu thức \"Nguyễn\" in \"Nguyễn Văn An\" trả về giá trị gì?",
          options: ["True", "False", '"Nguyễn"', "0"],
          answer: 0,
          explain:
            "Toán tử in kiểm tra xem xâu bên trái có phải là một đoạn xâu con xuất hiện đâu đó trong xâu bên phải hay không. \"Nguyễn\" xuất hiện ngay từ đầu xâu \"Nguyễn Văn An\", nên kết quả là True.",
        },
      ],
    },
  ],

  summary: [
    "**Xâu kí tự (str)** truy cập theo chỉ số s[i] và tính độ dài bằng len(s) như danh sách, chỉ số cũng bắt đầu từ 0. Nhưng xâu là kiểu **bất biến (immutable)** — không gán lại được từng kí tự; muốn đổi nội dung phải tạo xâu mới.",
    "**s1 + s2** ghép nối liền, không tự thêm dấu cách. Nhân xâu với số nguyên n để lặp lại xâu đó n lần. **s[a:b]** lấy lát cắt từ chỉ số a đến TRƯỚC chỉ số b, giống quy tắc của range().",
    "**for ch in s** duyệt từng kí tự. **xâu_con in s** kiểm tra xâu con có xuất hiện trong s hay không, trả về True/False.",
    "So sánh xâu bằng <, > theo **thứ tự từ điển**: xét từng kí tự từ trái sang phải theo mã kí tự, không phải so theo độ dài xâu.",
  ],
};

export default theory;
