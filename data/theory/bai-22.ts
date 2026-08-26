import type { LessonTheory } from "@/lib/types";

// Bài 22. Kiểu dữ liệu danh sách
// SGK trang 112–116, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Đến giờ, mỗi biến trong chương trình chỉ giữ được đúng một giá trị. Nhưng nếu cần lưu điểm của cả 30 bạn trong lớp, chẳng lẽ phải đặt 30 cái tên biến khác nhau? **Danh sách (list)** giải quyết gọn gàng bài toán đó: gom nhiều giá trị vào một cái tên duy nhất, xếp theo thứ tự, mỗi vị trí có một \"chỉ số\" riêng để gọi tên. Chỉ có một điều cần cẩn thận ngay từ đầu — chỉ số đó **bắt đầu từ 0**, chứ không phải từ 1 như cách đếm thông thường.",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "danh-sach-va-chi-so",
      emoji: "📦",
      heading: "Danh sách (list): dãy giá trị đánh số từ 0",
      blocks: [
        {
          kind: "text",
          text: "**Danh sách** là một dãy các giá trị có thứ tự, viết trong cặp ngoặc vuông [ ], các phần tử cách nhau bởi dấu phẩy — ví dụ a = [5, 7, 9, 11]. Mỗi phần tử có một **chỉ số (index)** để truy cập qua cú pháp a[chỉ số]. Điều quan trọng nhất cần nhớ: chỉ số của phần tử đầu tiên là **0**, không phải 1 — đây là quy ước của hầu hết ngôn ngữ lập trình, kể cả khi nó nghe hơi ngược đời so với cách đếm hằng ngày.",
        },
        {
          kind: "figure",
          diagram: "day-hop-danh-so",
          caption: "Hình 22.1. Chỉ số bắt đầu từ 0 — lệch một đơn vị so với cách gọi \"thứ mấy\" tự nhiên",
        },
        {
          kind: "example",
          title: "Tình huống: Danh sách đồ dùng cho buổi dã ngoại của lớp",
          text: "Chuẩn bị cho buổi dã ngoại cuối năm, bạn Vy lập một danh sách đồ cần mang: do_da_ngoai = [\"Lều\", \"Bóng đá\", \"Nước\", \"Bánh mì\"]. Khi nhóm trưởng hỏi \"đồ thứ ba trong danh sách là gì?\", Vy suýt gõ nhầm do_da_ngoai[3] — nhưng dừng lại kịp: \"đồ thứ ba\" theo cách đếm tự nhiên (1, 2, 3...) lại ứng với **chỉ số 2** trong danh sách (0, 1, 2...), vì chỉ số luôn ít hơn thứ tự thông thường đúng 1 đơn vị. Gõ đúng do_da_ngoai[2], màn hình hiện ra \"Nước\" — chính xác là đồ thứ ba.",
        },
        {
          kind: "code",
          caption: "Truy cập phần tử của danh sách qua chỉ số",
          code: 'do_da_ngoai = ["Lều", "Bóng đá", "Nước", "Bánh mì"]\nprint(do_da_ngoai[0])   # Lều — phần tử đầu tiên, chỉ số 0\nprint(do_da_ngoai[2])   # Nước — đồ thứ BA, chỉ số 2\nprint(len(do_da_ngoai)) # 4 — tổng số phần tử',
        },
        {
          kind: "note",
          text: "Danh sách viết trong ngoặc vuông [ ], các phần tử cách nhau dấu phẩy. Truy cập phần tử bằng a[chỉ số], với chỉ số bắt đầu từ 0. Danh sách có n phần tử thì chỉ số hợp lệ chạy từ 0 đến n−1; phần tử cuối cùng là a[n-1], không phải a[n]. hàm len(a) trả về số phần tử (n) của danh sách.",
        },
        {
          kind: "check",
          q: "Với danh sách do_da_ngoai = [\"Lều\", \"Bóng đá\", \"Nước\", \"Bánh mì\"], muốn lấy đúng \"đồ thứ ba\" (Nước), em viết lệnh nào?",
          options: ["do_da_ngoai[2]", "do_da_ngoai[3]", "do_da_ngoai[1]", "do_da_ngoai[4]"],
          answer: 0,
          explain:
            "Chỉ số bắt đầu từ 0, nên đồ thứ nhất là chỉ số 0, đồ thứ hai là chỉ số 1, đồ thứ ba là chỉ số 2 — luôn lệch 1 đơn vị so với cách đếm \"thứ mấy\" thông thường.",
        },
        {
          kind: "check",
          q: "Danh sách do_da_ngoai ở trên có 4 phần tử. Chỉ số của phần tử CUỐI CÙNG trong danh sách này là bao nhiêu?",
          options: ["3", "4", "0", "5"],
          answer: 0,
          explain:
            "Danh sách có 4 phần tử thì chỉ số hợp lệ chạy từ 0 đến 3 (tức len−1 = 4−1 = 3). Gọi do_da_ngoai[4] sẽ vượt phạm vi và gây lỗi IndexError.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "thay-doi-danh-sach",
      emoji: "✏️",
      heading: "Thay đổi và bổ sung danh sách: append(), gán lại phần tử",
      blocks: [
        {
          kind: "text",
          text: "Danh sách trong Python có thể **thay đổi được (mutable)**: vừa sửa được giá trị của một phần tử đã có bằng lệnh gán a[chỉ số] = giá_trị_mới, vừa thêm phần tử mới vào **cuối** danh sách bằng phương thức **append()**. Đây là điểm khác biệt lớn so với xâu kí tự — xâu thì không sửa được từng kí tự sau khi đã tạo (sẽ học kĩ ở bài 24).",
        },
        {
          kind: "figure",
          diagram: "gan-lai-va-append",
          caption: "Hình 22.2. append() nối thêm ở cuối — gán qua chỉ số chỉ sửa đúng một ô đã chọn",
        },
        {
          kind: "example",
          title: "Tình huống: Cập nhật danh sách đồ dùng theo diễn biến thực tế",
          text: "Xem lại danh sách, cả nhóm nhận ra quên mất áo mưa — Vy gõ ngay do_da_ngoai.append(\"Áo mưa\") để thêm vào cuối, danh sách dài thêm một ô mà không ảnh hưởng tới các phần tử cũ. Ít phút sau, có bạn góp ý nên mang nước suối đóng chai thay vì nước lọc thường — Vy sửa đúng phần tử \"Nước\" bằng lệnh do_da_ngoai[2] = \"Nước suối\", chỉ đúng ô chỉ số 2 bị thay đổi, các đồ khác giữ nguyên vị trí.",
        },
        {
          kind: "code",
          caption: "Thêm và sửa phần tử của danh sách đồ dùng",
          code: 'do_da_ngoai.append("Áo mưa")\nprint(do_da_ngoai)\n# [\'Lều\', \'Bóng đá\', \'Nước\', \'Bánh mì\', \'Áo mưa\']\n\ndo_da_ngoai[2] = "Nước suối"\nprint(do_da_ngoai)\n# [\'Lều\', \'Bóng đá\', \'Nước suối\', \'Bánh mì\', \'Áo mưa\']',
        },
        {
          kind: "note",
          text: "a.append(x) thêm phần tử x vào cuối danh sách a, không cần biết trước vị trí. a[chỉ số] = giá_trị gán lại đúng phần tử ở vị trí đó, các phần tử khác không đổi. Danh sách là kiểu dữ liệu thay đổi được (mutable) — khác với xâu kí tự là kiểu bất biến (immutable), không sửa được từng kí tự.",
        },
        {
          kind: "check",
          q: "Sau khi Vy thực hiện do_da_ngoai.append(\"Áo mưa\"), điều gì xảy ra với danh sách?",
          options: [
            "\"Áo mưa\" được thêm vào cuối danh sách, các phần tử cũ giữ nguyên vị trí",
            "\"Áo mưa\" được chèn vào đầu danh sách, đẩy các phần tử cũ lùi lại",
            "Toàn bộ danh sách bị xoá và chỉ còn lại đúng \"Áo mưa\"",
            "Chương trình báo lỗi vì danh sách đã đủ 4 phần tử từ trước",
          ],
          answer: 0,
          explain:
            "append() luôn thêm phần tử mới vào cuối danh sách hiện có, không làm thay đổi vị trí hay giá trị của các phần tử đã tồn tại trước đó.",
        },
        {
          kind: "check",
          q: "Vì sao có thể sửa được một phần tử của danh sách bằng lệnh gán như do_da_ngoai[2] = \"Nước suối\", nhưng lại không sửa được một kí tự trong một xâu bằng cách tương tự?",
          options: [
            "Vì danh sách là kiểu dữ liệu thay đổi được (mutable), còn xâu kí tự là kiểu bất biến (immutable)",
            "Vì danh sách chỉ chứa được số, còn xâu chỉ chứa được chữ nên quy tắc khác nhau",
            "Vì lệnh gán chỉ số chỉ hoạt động với danh sách có đúng 4 phần tử trở lên",
            "Vì xâu kí tự trong Python không có chỉ số nên không truy cập được từng kí tự",
          ],
          answer: 0,
          explain:
            "Danh sách được thiết kế để có thể thay đổi nội dung sau khi tạo (mutable). Xâu kí tự trong Python là kiểu bất biến (immutable) — dù vẫn truy cập từng kí tự qua chỉ số được, nhưng không gán lại được kí tự đó.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "duyet-danh-sach",
      emoji: "🔎",
      heading: "Duyệt danh sách bằng for: lấy giá trị hay lấy vị trí?",
      blocks: [
        {
          kind: "text",
          text: "Có hai cách phổ biến để duyệt qua từng phần tử của danh sách bằng vòng lặp for. Cách thứ nhất, **for x in a**, cho x lần lượt nhận **giá trị** của từng phần tử — gọn gàng khi chỉ cần đọc nội dung. Cách thứ hai, **for i in range(len(a))**, cho i lần lượt nhận **chỉ số** của từng vị trí — cần dùng khi phải biết vị trí, ví dụ để đánh số thứ tự thân thiện hoặc để sửa phần tử.",
        },
        {
          kind: "figure",
          diagram: "duyet-gia-tri-vs-chi-so",
          caption: "Hình 22.3. Duyệt lấy giá trị khi chỉ cần đọc — duyệt lấy chỉ số khi cần biết vị trí",
        },
        {
          kind: "example",
          title: "Tình huống: In danh sách đồ dùng kèm số thứ tự dễ đọc",
          text: "Vy muốn dán tờ giấy danh sách đồ dùng lên bảng lớp, đánh số thứ tự quen thuộc bắt đầu từ 1 chứ không phải 0 để các bạn dễ đọc. Nếu chỉ dùng for x in do_da_ngoai, Vy có giá trị nhưng không có số thứ tự để in kèm. Vy chuyển sang for i in range(len(do_da_ngoai)): lúc này i chính là chỉ số (bắt đầu từ 0), Vy chỉ cần in i + 1 để đổi sang cách đánh số quen thuộc, còn do_da_ngoai[i] vẫn lấy đúng giá trị tại vị trí đó.",
        },
        {
          kind: "code",
          caption: "In danh sách kèm số thứ tự thân thiện, bắt đầu từ 1",
          code: 'for i in range(len(do_da_ngoai)):\n    print(i + 1, "-", do_da_ngoai[i])\n\n# 1 - Lều\n# 2 - Bóng đá\n# 3 - Nước suối\n# 4 - Bánh mì\n# 5 - Áo mưa',
        },
        {
          kind: "text",
          text: "Python còn có sẵn một số hàm rất tiện cho danh sách số: **sum(a)** tính tổng, **max(a)** và **min(a)** tìm giá trị lớn nhất/nhỏ nhất, và toán tử **in** kiểm tra một giá trị có nằm trong danh sách hay không (trả về True hoặc False).",
        },
        {
          kind: "note",
          text: "for x in a duyệt lấy trực tiếp giá trị từng phần tử — dùng khi chỉ cần đọc dữ liệu. for i in range(len(a)) duyệt lấy chỉ số — dùng khi cần biết hoặc thay đổi vị trí, hoặc cần đánh số thứ tự. sum(a), max(a), min(a) tính tổng/lớn nhất/nhỏ nhất của danh sách số; giá_trị in a kiểm tra một giá trị có thuộc danh sách hay không.",
        },
        {
          kind: "check",
          q: "Vy muốn in danh sách đồ dùng kèm số thứ tự quen thuộc bắt đầu từ 1 (thay vì từ 0). Vy nên dùng cách duyệt nào?",
          options: [
            "for i in range(len(do_da_ngoai)): rồi in i + 1 cùng do_da_ngoai[i]",
            "for x in do_da_ngoai: rồi in trực tiếp x mà không cần biến chỉ số nào khác",
            "Không cách nào trong hai cách trên in được số thứ tự mong muốn",
            "Chỉ cần in len(do_da_ngoai) một lần duy nhất trước toàn bộ danh sách",
          ],
          answer: 0,
          explain:
            "Duyệt theo for x in a chỉ cho giá trị, không có thông tin về vị trí. Duyệt theo for i in range(len(a)) cho chỉ số i, từ đó tính i + 1 để có số thứ tự quen thuộc bắt đầu từ 1, đồng thời vẫn lấy được giá trị qua a[i].",
        },
        {
          kind: "check",
          q: "Cho diem = [7, 8, 5, 9]. Biểu thức 9 in diem sẽ trả về giá trị gì?",
          options: ["True", "False", "9", "3"],
          answer: 0,
          explain:
            "Toán tử in kiểm tra xem một giá trị có xuất hiện trong danh sách hay không. Vì 9 là một phần tử của diem, biểu thức trả về True.",
        },
      ],
    },
  ],

  summary: [
    "**Danh sách (list)** là dãy giá trị có thứ tự trong ngoặc vuông [ ]. Truy cập bằng a[chỉ số], chỉ số bắt đầu từ **0** — lệch 1 đơn vị so với cách đếm \"thứ mấy\" tự nhiên. **len(a)** cho số phần tử; chỉ số hợp lệ chạy từ 0 đến len(a)−1.",
    "**a.append(x)** thêm phần tử vào cuối danh sách. **a[chỉ số] = giá_trị** sửa đúng một phần tử. Danh sách là kiểu dữ liệu **thay đổi được (mutable)**, khác với xâu kí tự bất biến.",
    "**for x in a** duyệt lấy giá trị — dùng khi chỉ cần đọc. **for i in range(len(a))** duyệt lấy chỉ số — dùng khi cần biết vị trí hoặc sửa phần tử.",
    "Các hàm có sẵn tiện dụng: **sum(a)**, **max(a)**, **min(a)** cho danh sách số; toán tử **in** kiểm tra một giá trị có thuộc danh sách hay không.",
  ],
};

export default theory;
