import type { LessonTheory } from "@/lib/types";

// Bài 29. Nhận biết lỗi chương trình
// SGK trang 146–150, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Chương trình quản lí quỹ dã ngoại của nhóm Vy tuần này gặp liền ba sự cố khác hẳn nhau: một bạn báo \"chạy không nổi\", một bạn báo \"đang chạy tự nhiên đứng hình\", còn một bạn thì khăng khăng \"chạy tốt mà\" — dù kết quả rõ ràng vô lí. Ba tình huống đó chính là ba loại lỗi kinh điển của lập trình. Hãy tưởng tượng chạy chương trình giống như lái xe trên một đường đua: có xe chưa hề lăn bánh, có xe chạy giữa đường thì chết máy, và có xe chạy êm ru — nhưng lại tới nhầm địa điểm.",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "loi-cu-phap",
      emoji: "🏁",
      heading: "Lỗi cú pháp: chương trình chưa chạy được dòng nào",
      blocks: [
        {
          kind: "text",
          text: "**Lỗi cú pháp (SyntaxError)** xảy ra khi câu lệnh viết sai quy tắc ngữ pháp của Python — ví dụ thiếu dấu hai chấm sau if/for/def, thụt lề sai, thiếu ngoặc đóng. Python phát hiện lỗi này **trước khi chạy bất kì dòng nào**, giống như một chiếc xe bị chặn ngay tại vạch xuất phát vì lỗi kĩ thuật — chưa hề lăn bánh được một mét nào.",
        },
        {
          kind: "figure",
          diagram: "loi-cu-phap-khong-chay",
          caption: "Hình 29.1. Lỗi cú pháp chặn chương trình lại ngay từ vạch xuất phát",
        },
        {
          kind: "example",
          title: "Tình huống: Bạn Mua báo \"chạy không nổi\"",
          text: "Bạn Mua trong nhóm viết dòng lệnh if diem > 5 rồi xuống dòng luôn, quên mất dấu hai chấm ở cuối. Vừa nhấn chạy, màn hình tô đỏ ngay lập tức với dòng chữ SyntaxError, chưa kịp thấy bất kì kết quả nào xuất hiện — kể cả những dòng lệnh phía trên hay phía dưới dòng lỗi cũng không chạy được. Đây chính là đặc điểm nhận diện lỗi cú pháp: sai một chỗ, cả chương trình \"đứng hình\" hoàn toàn.",
        },
        {
          kind: "code",
          caption: "Thiếu dấu hai chấm gây lỗi cú pháp — chương trình không chạy được dòng nào",
          code: 'if diem > 5\n    print("Đạt")\n\n# SyntaxError: expected \':\'\n# Sửa lại: if diem > 5:',
        },
        {
          kind: "note",
          text: "Lỗi cú pháp (SyntaxError) là lỗi vi phạm quy tắc ngữ pháp của ngôn ngữ lập trình — thiếu dấu hai chấm, sai thụt lề, thiếu ngoặc... Python phát hiện lỗi này ngay khi đọc mã nguồn, trước khi thực hiện bất kì câu lệnh nào, nên chương trình hoàn toàn không chạy được.",
        },
        {
          kind: "check",
          q: "Dòng lệnh if diem > 5 (không có dấu hai chấm ở cuối) mắc lỗi loại nào?",
          options: [
            "Lỗi cú pháp — vi phạm quy tắc ngữ pháp bắt buộc phải có dấu hai chấm sau điều kiện if",
            "Lỗi ngoại lệ — phát sinh khi chương trình đang chạy và gặp tình huống không xử lí được",
            "Lỗi lôgic — chương trình vẫn chạy được nhưng cho ra kết quả không đúng ý",
            "Không phải lỗi, chỉ là một cách viết khác của câu lệnh if trong Python",
          ],
          answer: 0,
          explain:
            "Thiếu dấu hai chấm sau điều kiện if là vi phạm cú pháp bắt buộc của Python — lỗi này được phát hiện ngay khi đọc mã nguồn, trước khi chạy, nên gọi là lỗi cú pháp (SyntaxError).",
        },
        {
          kind: "check",
          q: "Đặc điểm nhận diện nào đúng nhất cho một lỗi cú pháp?",
          options: [
            "Chương trình không chạy được dòng nào cả, kể cả những dòng không liên quan tới chỗ sai",
            "Chương trình chạy hết toàn bộ rồi mới cho biết kết quả bị sai ở đâu",
            "Chương trình chạy được một đoạn dài rồi mới dừng đột ngột giữa chừng",
            "Chương trình chạy xong xuôi và luôn cho ra kết quả đúng như mong đợi",
          ],
          answer: 0,
          explain:
            "Vì Python kiểm tra toàn bộ cú pháp trước khi bắt đầu chạy, một lỗi cú pháp ở bất kì đâu cũng khiến toàn bộ chương trình không chạy được dòng nào — khác hẳn lỗi ngoại lệ (chạy được một phần) hay lỗi lôgic (chạy hết nhưng sai kết quả).",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "loi-ngoai-le",
      emoji: "🚧",
      heading: "Lỗi ngoại lệ: chạy được rồi dừng đột ngột giữa chừng",
      blocks: [
        {
          kind: "text",
          text: "**Lỗi ngoại lệ (Exception)** xảy ra khi cú pháp hoàn toàn đúng, chương trình đã bắt đầu chạy, nhưng đến một dòng nào đó thì gặp tình huống không thể thực hiện được với dữ liệu cụ thể lúc đó — giống một chiếc xe khởi hành trơn tru rồi bất ngờ chết máy giữa đường đua. Python dừng ngay lập tức và in ra một thông báo lỗi (traceback) cho biết rõ **loại lỗi** và **số dòng** đã gây ra sự cố.",
        },
        {
          kind: "figure",
          diagram: "loi-ngoai-le-dung-giua-chung",
          caption: "Hình 29.2. Lỗi ngoại lệ: xe chạy được một đoạn rồi chết máy, kèm bảng chỉ lỗi rõ ràng",
        },
        {
          kind: "example",
          title: "Tình huống: Bạn Sinh báo \"đang chạy tự nhiên đứng hình\"",
          text: "Chương trình chia đều quỹ dã ngoại cho số bạn tham gia chạy tốt qua vài dòng đầu — in được lời chào, đọc được tổng quỹ. Nhưng khi bạn Sinh vô tình nhập số 0 vào ô số lượng bạn tham gia, chương trình đột ngột dừng lại với dòng đỏ ZeroDivisionError ngay tại dòng chia. Cú pháp phép chia hoàn toàn đúng — vấn đề chỉ nảy sinh vì dữ liệu thực tế (số 0) khiến phép toán không thể thực hiện được.",
        },
        {
          kind: "code",
          caption: "Lỗi ngoại lệ phát sinh khi dữ liệu thực tế không cho phép thực hiện phép toán",
          code: 'so_ban = int(input("Số bạn tham gia: "))\nquy = 500000\nprint("Mỗi bạn góp:", quy / so_ban)\n\n# Nếu nhập 0: ZeroDivisionError: division by zero\n# Cách phòng tránh:\nif so_ban != 0:\n    print("Mỗi bạn góp:", quy / so_ban)\nelse:\n    print("Số bạn tham gia không thể bằng 0")',
        },
        {
          kind: "note",
          text: "Lỗi ngoại lệ phát sinh khi chương trình đang chạy và gặp một thao tác không thể thực hiện được với dữ liệu cụ thể lúc đó, dù cú pháp hoàn toàn đúng. Một số lỗi ngoại lệ thường gặp: ZeroDivisionError (chia cho 0), ValueError (đổi kiểu dữ liệu không hợp lệ, ví dụ int(\"abc\")), IndexError (chỉ số vượt phạm vi danh sách), NameError (dùng biến chưa được gán), TypeError (trộn lẫn kiểu dữ liệu sai cách, ví dụ cộng xâu với số). Đọc kĩ thông báo lỗi (traceback) để biết loại lỗi và số dòng gây ra là bước đầu tiên khi sửa lỗi. Nên chủ động kiểm tra trước những tình huống có thể gây lỗi, ví dụ dùng if để đảm bảo số chia khác 0.",
        },
        {
          kind: "check",
          q: "Vì sao chương trình chia quỹ của Sinh chạy được vài dòng đầu rồi mới dừng lại, thay vì dừng ngay từ đầu như lỗi cú pháp?",
          options: [
            "Vì cú pháp của chương trình hoàn toàn đúng — lỗi chỉ phát sinh khi thực hiện phép chia với dữ liệu cụ thể là số 0",
            "Vì Python luôn chạy thử một vài dòng đầu tiên trước khi kiểm tra cú pháp toàn bộ chương trình",
            "Vì bạn Sinh đã sửa cú pháp sai ở phần đầu chương trình nhưng quên sửa phần sau",
            "Vì lỗi cú pháp và lỗi ngoại lệ thực chất chỉ là một loại lỗi duy nhất",
          ],
          answer: 0,
          explain:
            "Cú pháp của chương trình không hề sai nên Python cho chạy bình thường. Vấn đề chỉ nảy sinh khi thực hiện phép chia với giá trị so_ban bằng 0 — một tình huống chỉ được phát hiện lúc chạy, dựa trên dữ liệu thực tế, không phải lỗi ngữ pháp.",
        },
        {
          kind: "check",
          q: "Lệnh int(\"abc\") khi chạy sẽ gây ra lỗi ngoại lệ nào?",
          options: ["ValueError", "SyntaxError", "IndexError", "NameError"],
          answer: 0,
          explain:
            "Xâu \"abc\" không có dạng số nên int() không thể chuyển đổi được — đây là lỗi ValueError, phát sinh khi chạy vì giá trị đưa vào không hợp lệ cho phép chuyển đổi, chứ không phải lỗi cú pháp.",
        },
        {
          kind: "check",
          q: "Với danh sách to = [\"An\", \"Bình\", \"Cường\"], lệnh print(to[5]) gây ra lỗi ngoại lệ nào?",
          options: ["IndexError", "ValueError", "TypeError", "NameError"],
          answer: 0,
          explain:
            "Danh sách to chỉ có 3 phần tử, chỉ số hợp lệ là 0, 1, 2. Chỉ số 5 vượt quá phạm vi cho phép, nên Python báo lỗi IndexError khi chạy tới dòng truy cập này.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "loi-logic",
      emoji: "🎯",
      heading: "Lỗi lôgic: chạy êm ru nhưng đến sai đích — nguy hiểm nhất",
      blocks: [
        {
          kind: "text",
          text: "**Lỗi lôgic** là loại lỗi khó phát hiện nhất: chương trình chạy hoàn toàn trơn tru từ đầu đến cuối, **không hề có bất kì thông báo lỗi màu đỏ nào**, nhưng kết quả lại sai so với ý đồ ban đầu. Giống một chiếc xe chạy êm ru suốt hành trình, đến nơi an toàn — nhưng lại là một địa điểm hoàn toàn khác với nơi cần đến. Vì không có cảnh báo nào cả, lỗi lôgic chỉ có thể phát hiện được bằng cách **tự kiểm thử**, đối chiếu kết quả chương trình với đáp án mà mình đã tự tính tay từ trước.",
        },
        {
          kind: "figure",
          diagram: "loi-logic-den-sai-dich",
          caption: "Hình 29.3. Lỗi lôgic: xe chạy êm ru, không đèn báo nào — nhưng dừng nhầm địa điểm",
        },
        {
          kind: "example",
          title: "Tình huống: Bạn Chá khăng khăng \"chạy tốt mà\"",
          text: "Chương trình tính điểm trung bình hai môn của bạn Chá chạy xong, in ra kết quả đàng hoàng, không một dòng lỗi nào — nhưng nhập điểm 8 và 6 thì lại ra 11, một con số vô lí cho điểm trung bình. Chá khẳng định \"chương trình chạy tốt, không lỗi gì\" cho đến khi cả nhóm ngồi tính tay theo đúng thứ tự phép toán mới phát hiện: dòng lệnh viết a + b / 2 thay vì (a + b) / 2 — do thứ tự ưu tiên phép toán, phép chia được thực hiện trước phép cộng, ra kết quả 8 cộng 3 bằng 11, hoàn toàn khác con số 7 mong muốn.",
        },
        {
          kind: "code",
          caption: "Thiếu dấu ngoặc gây lỗi lôgic — chương trình chạy đúng cú pháp nhưng sai kết quả",
          code: 'a = 8\nb = 6\ntb = a + b / 2\nprint(tb)          # 11.0 — sai! Không có lỗi nào được báo\n\n# Sửa lại đúng thứ tự phép toán mong muốn:\ntb = (a + b) / 2\nprint(tb)          # 7.0 — đúng',
        },
        {
          kind: "note",
          text: "Lỗi lôgic là lỗi khiến chương trình chạy được từ đầu đến cuối, không phát sinh thông báo lỗi nào, nhưng kết quả sai so với ý đồ của người viết — nguyên nhân thường là sai thứ tự phép toán, sai công thức, hoặc sai điều kiện. Vì không có dấu hiệu cảnh báo, lỗi lôgic chỉ phát hiện được qua kiểm thử: chạy thử với dữ liệu đã biết trước đáp án đúng để đối chiếu. Không báo lỗi không đồng nghĩa với chương trình đúng.",
        },
        {
          kind: "check",
          q: "Vì sao lỗi lôgic được coi là loại lỗi khó phát hiện và nguy hiểm nhất trong ba loại lỗi đã học?",
          options: [
            "Vì chương trình không đưa ra bất kì thông báo lỗi nào, người viết phải tự kiểm thử và đối chiếu kết quả mới nhận ra",
            "Vì lỗi lôgic luôn khiến chương trình dừng lại ngay từ vạch xuất phát, không chạy được dòng nào",
            "Vì lỗi lôgic chỉ xảy ra trên những máy tính có cấu hình phần cứng yếu",
            "Vì Python không có bất kì công cụ nào giúp tìm ra lỗi lôgic trong chương trình",
          ],
          answer: 0,
          explain:
            "Khác với lỗi cú pháp và lỗi ngoại lệ đều có thông báo rõ ràng, lỗi lôgic hoàn toàn im lặng — chương trình chạy xong xuôi như bình thường. Chỉ có cách chủ động kiểm thử, so sánh kết quả với đáp án đã biết trước, mới phát hiện ra được sai sót này.",
        },
        {
          kind: "check",
          q: "Với a = 8 và b = 6, biểu thức tb = a + b / 2 (thiếu dấu ngoặc) cho kết quả bao nhiêu, và đây là loại lỗi gì?",
          options: [
            "11.0 — lỗi lôgic, vì chương trình chạy đúng cú pháp nhưng sai ý đồ do thứ tự phép toán",
            "7.0 — không phải lỗi, vì Python luôn ưu tiên tính tổng trước khi chia",
            "Báo lỗi ZeroDivisionError vì phép chia không thực hiện được",
            "Báo lỗi SyntaxError vì biểu thức thiếu dấu ngoặc bắt buộc",
          ],
          answer: 0,
          explain:
            "Theo thứ tự ưu tiên phép toán, phép chia thực hiện trước phép cộng: a + b / 2 = 8 + (6 / 2) = 8 + 3 = 11.0. Chương trình chạy hoàn toàn bình thường, không báo lỗi gì — nhưng kết quả sai với ý đồ tính trung bình cộng, đây chính là lỗi lôgic.",
        },
      ],
    },
  ],

  summary: [
    "**Lỗi cú pháp (SyntaxError)**: vi phạm ngữ pháp của ngôn ngữ, phát hiện trước khi chạy — chương trình không chạy được dòng nào, giống xe bị chặn ngay vạch xuất phát.",
    "**Lỗi ngoại lệ (Exception)**: cú pháp đúng, nhưng gặp tình huống không thực hiện được lúc chạy (ZeroDivisionError, ValueError, IndexError, NameError, TypeError...) — chương trình dừng đột ngột giữa chừng, kèm thông báo rõ loại lỗi và số dòng.",
    "**Lỗi lôgic**: chương trình chạy hết, không báo lỗi gì, nhưng kết quả sai với ý đồ — nguy hiểm nhất vì hoàn toàn im lặng, chỉ phát hiện được qua kiểm thử và đối chiếu kết quả.",
    "Không báo lỗi không có nghĩa là chương trình đúng — luôn kiểm thử với dữ liệu đã biết trước đáp án để phát hiện lỗi lôgic.",
  ],
};

export default theory;
