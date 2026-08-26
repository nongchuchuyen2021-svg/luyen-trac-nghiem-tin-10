import type { LessonTheory } from "@/lib/types";

// Bài 30. Kiểm thử và gỡ lỗi chương trình
// SGK trang 151–155, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Bài trước, nhóm Vy đã học cách nhận ra ba loại \"bệnh\" của chương trình. Bài này dạy hai kĩ năng đi liền với nhau: **kiểm thử** — chủ động lái thử chương trình qua nhiều \"cung đường\" khác nhau trước khi đem dùng thật, để tự phát hiện bệnh trước khi người khác gặp phải; và **gỡ lỗi** — khi đã biết có bệnh, làm sao tìm đúng chỗ hỏng và sửa cho triệt để, không sửa ẩu kiểu \"thầy bói xem voi\".",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "kiem-thu",
      emoji: "🧪",
      heading: "Kiểm thử: một lần chạy đúng chưa đủ",
      blocks: [
        {
          kind: "text",
          text: "**Kiểm thử** là việc chạy chương trình với những **bộ dữ liệu đã biết trước đáp án đúng** (gọi là bộ dữ liệu kiểm thử — mỗi bộ gồm dữ liệu vào và kết quả mong đợi tương ứng), rồi đối chiếu kết quả thực tế với đáp án đó. Một chương trình chạy đúng với **một** bộ dữ liệu **không hề chứng minh được** chương trình đúng hoàn toàn — giống như một chiếc xe chạy êm trên một đoạn đường bằng phẳng chưa chắc đã an toàn khi gặp đường dốc hay ổ gà.",
        },
        {
          kind: "figure",
          diagram: "kiem-thu-nhieu-truong-hop",
          caption: "Hình 30.1. Chạy tốt trên một cung đường không có nghĩa là chạy tốt trên mọi cung đường",
        },
        {
          kind: "example",
          title: "Tình huống: Chạy đúng ví dụ mẫu mà vẫn... trượt",
          text: "Trong buổi thi lập trình cấp trường, bạn Vừ nộp bài xếp loại học lực đã chạy đúng với đúng ví dụ mẫu trong đề bài. Vừ yên tâm nộp bài, nhưng ban giám khảo chấm bằng mười bộ dữ liệu bí mật khác — trong đó có điểm âm, điểm trên 10, và cả trường hợp đặc biệt. Kết quả, bài của Vừ chỉ đạt 6 trên 10 bộ vì quên xử lí đúng những trường hợp đó. Bài học rút ra: chạy đúng ví dụ mẫu chỉ là điều kiện cần, không phải điều kiện đủ để khẳng định chương trình đúng.",
        },
        {
          kind: "note",
          text: "Kiểm thử là chạy chương trình với các bộ dữ liệu đã biết trước kết quả đúng để đối chiếu, phát hiện lỗi. Một bộ dữ liệu chạy đúng không chứng minh được toàn bộ chương trình đúng — cần kiểm thử với nhiều bộ dữ liệu khác nhau, càng đa dạng càng đáng tin cậy.",
        },
        {
          kind: "check",
          q: "Vì sao bài thi của bạn Vừ chạy đúng với ví dụ mẫu trong đề nhưng vẫn chỉ đạt 6 trên 10 bộ dữ liệu chấm điểm?",
          options: [
            "Vì chạy đúng với một bộ dữ liệu (ví dụ mẫu) không chứng minh được chương trình đúng với mọi bộ dữ liệu khác",
            "Vì ban giám khảo đã cố tình chấm sai để đánh trượt một số thí sinh",
            "Vì ví dụ mẫu trong đề bài vốn dĩ chứa một đáp án không chính xác",
            "Vì chương trình của Vừ mắc lỗi cú pháp nên không chạy được với bộ dữ liệu nào cả",
          ],
          answer: 0,
          explain:
            "Kiểm thử với một bộ dữ liệu chỉ cho biết chương trình đúng với đúng trường hợp đó. Muốn tin cậy hơn, phải kiểm thử với nhiều bộ dữ liệu khác nhau — đó chính xác là lí do ban giám khảo dùng tới mười bộ dữ liệu bí mật thay vì chỉ một ví dụ mẫu.",
        },
        {
          kind: "check",
          q: "Một bộ dữ liệu kiểm thử (test case) cần có những thành phần nào?",
          options: [
            "Dữ liệu vào cụ thể và kết quả ra mong đợi tương ứng với dữ liệu đó",
            "Chỉ cần dữ liệu vào, kết quả ra thế nào cũng được coi là đúng",
            "Tên người viết chương trình và thời gian chạy thử chương trình đó",
            "Số dòng mã nguồn và danh sách các biến chương trình đã sử dụng",
          ],
          answer: 0,
          explain:
            "Không biết trước đáp án đúng thì không có gì để đối chiếu với kết quả chương trình in ra — vì vậy mỗi bộ kiểm thử luôn phải có cả dữ liệu vào lẫn kết quả mong đợi tương ứng.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "diem-bien-va-du-lieu-khong-hop-le",
      emoji: "⛰️",
      heading: "Dữ liệu biên và dữ liệu không hợp lệ: nơi lỗi hay ẩn náu",
      blocks: [
        {
          kind: "text",
          text: "Lỗi thường \"trốn\" ở hai kiểu dữ liệu đặc biệt mà người viết chương trình dễ quên kiểm thử: **dữ liệu biên** (đúng tại ranh giới giữa các khoảng, ví dụ đúng 8,0 điểm — mốc chuyển từ Khá sang Giỏi) và **dữ liệu không hợp lệ** (nằm ngoài phạm vi cho phép, ví dụ điểm âm hoặc điểm trên 10). Đây chính là những \"cung đường\" gập ghềnh nhất, nơi phép so sánh nhầm >= thành > hay quên xét trường hợp ngoài phạm vi sẽ lộ ra ngay lập tức.",
        },
        {
          kind: "figure",
          diagram: "diem-bien-va-du-lieu-khong-hop-le",
          caption: "Hình 30.2. Kiểm thử đúng tại từng ranh giới xếp loại và tại các giá trị ngoài phạm vi 0–10",
        },
        {
          kind: "example",
          title: "Tình huống: Bộ kiểm thử đầy đủ cho chương trình xếp loại học lực",
          text: "Trước khi nộp bài, nhóm bạn Lử ngồi liệt kê một bộ kiểm thử đầy đủ cho chương trình xếp loại học lực (từ 8,0 trở lên: Giỏi; từ 6,5 đến dưới 8,0: Khá; từ 5,0 đến dưới 6,5: Trung bình; còn lại: Yếu). Nhóm chọn thử đúng tại các ranh giới 8,0 và 7,9, rồi 6,5 và 6,4, rồi 5,0 và 4,9 — để chắc chắn phép so sánh không bị lệch. Nhóm còn thử thêm cả những giá trị vô lí như −2 và 11, xem chương trình có phát hiện và cảnh báo dữ liệu không hợp lệ hay không. Bộ kiểm thử này khiến khả năng bỏ sót lỗi giảm đi rất nhiều so với chỉ thử vài số ở giữa mỗi khoảng.",
        },
        {
          kind: "note",
          text: "Dữ liệu biên là giá trị nằm đúng tại ranh giới giữa các khoảng điều kiện — dễ lộ lỗi nhầm lẫn giữa các phép so sánh >= và >. Dữ liệu không hợp lệ là giá trị nằm ngoài phạm vi cho phép của bài toán — dễ lộ lỗi quên kiểm tra tính hợp lệ của dữ liệu đầu vào. Một bộ kiểm thử tốt cần có đủ ba dạng: dữ liệu thông thường, dữ liệu biên, và dữ liệu không hợp lệ.",
        },
        {
          kind: "check",
          q: "Vì sao nhóm bạn Lử đặc biệt chú trọng kiểm thử tại đúng các giá trị 8,0 và 7,9 (thay vì chỉ thử một số ở giữa mỗi khoảng như 7,0)?",
          options: [
            "Vì lỗi nhầm lẫn giữa phép so sánh >= và > thường lộ ra rõ nhất đúng tại ranh giới giữa hai mức xếp loại",
            "Vì số 8,0 và 7,9 là hai con số bất kì được chọn ngẫu nhiên, không có lí do đặc biệt gì",
            "Vì Python chỉ chấp nhận kiểm thử với các số có đúng một chữ số thập phân",
            "Vì hai giá trị này chắc chắn sẽ luôn cho ra cùng một kết quả xếp loại như nhau",
          ],
          answer: 0,
          explain:
            "Nếu chương trình viết nhầm điều kiện diem > 8 thay vì diem >= 8, lỗi này sẽ không lộ ra khi thử với 7,0 hay 9,0, mà chỉ lộ đúng khi thử với 8,0 — giá trị nằm ngay tại ranh giới. Đây là lí do dữ liệu biên đặc biệt quan trọng khi kiểm thử.",
        },
        {
          kind: "check",
          q: "Việc nhóm Lử thử thêm các giá trị như −2 và 11 cho chương trình xếp loại điểm (thang 0–10) nhằm mục đích gì?",
          options: [
            "Kiểm tra xem chương trình có phát hiện và xử lí đúng những dữ liệu nằm ngoài phạm vi hợp lệ hay không",
            "Kiểm tra xem chương trình có chạy nhanh hơn khi gặp số âm hay số lớn hơn 10 hay không",
            "Kiểm tra xem Python có tự động làm tròn các giá trị đó về đúng thang điểm 0–10 hay không",
            "Đây chỉ là hai con số được chọn cho vui, không phục vụ mục đích kiểm thử nào cả",
          ],
          answer: 0,
          explain:
            "−2 và 11 đều là dữ liệu không hợp lệ vì nằm ngoài thang điểm 0–10. Thử với những giá trị này giúp phát hiện xem chương trình có bỏ sót việc kiểm tra tính hợp lệ của dữ liệu đầu vào hay không — một lỗi rất dễ mắc phải khi chỉ tập trung vào các trường hợp \"đẹp\".",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "quy-trinh-go-loi",
      emoji: "🔧",
      heading: "Gỡ lỗi có phương pháp: một quy trình khép kín",
      blocks: [
        {
          kind: "text",
          text: "**Gỡ lỗi (debug)** là quá trình tìm ra đúng vị trí và nguyên nhân của lỗi rồi sửa cho chương trình chạy đúng. Cách làm hiệu quả nhất không phải là sửa bừa vài chỗ nghi ngờ rồi cầu may, mà đi theo một quy trình có phương pháp: **khoanh vùng nghi vấn** → **in giá trị biến ra xem** (chèn tạm vài lệnh print ở chỗ nghi ngờ để theo dõi) → **tìm đúng nguyên nhân** → **sửa lại** → và quan trọng nhất, **thử lại TOÀN BỘ** các bộ kiểm thử chứ không chỉ riêng bộ vừa phát hiện lỗi — vì sửa chỗ này có thể vô tình làm hỏng chỗ khác.",
        },
        {
          kind: "figure",
          diagram: "quy-trinh-go-loi",
          caption: "Hình 30.3. Quy trình gỡ lỗi là một vòng khép kín — chưa xong ở bước 5 thì quay lại bước 1",
        },
        {
          kind: "example",
          title: "Tình huống: Tìm ra lỗi lệch một đơn vị nhờ một lệnh print đơn giản",
          text: "Chương trình tính tổng từ 1 đến n của bạn Sếnh nhập n = 5 nhưng chỉ in ra 10 thay vì 15. Sếnh khoanh vùng nghi vấn vào đúng vòng lặp for, rồi chèn tạm một lệnh print(i) vào bên trong thân lặp để xem biến đếm i thực sự chạy tới đâu. Kết quả hiện ra chỉ có 1, 2, 3, 4 — thiếu hẳn số 5! Sếnh lập tức tìm ra nguyên nhân: range(1, n) dừng trước giá trị n, đúng lỗi lệch một đơn vị (off-by-one) kinh điển. Sửa thành range(1, n + 1), Sếnh xoá lệnh print tạm đi rồi chạy lại toàn bộ các bộ kiểm thử đã chuẩn bị từ trước để chắc chắn không có gì bị ảnh hưởng.",
        },
        {
          kind: "code",
          caption: "Chèn print tạm thời để theo dõi giá trị biến khi gỡ lỗi",
          code: 'n = 5\ns = 0\nfor i in range(1, n):\n    print(i)          # lệnh gỡ lỗi tạm thời — xem i chạy tới đâu\n    s = s + i\nprint(s)              # in ra 10, thiếu mất số 5\n\n# Sửa đúng: range(1, n + 1), rồi xoá lệnh print tạm thời ở trên',
        },
        {
          kind: "text",
          text: "Ngoài việc chèn print thủ công, các môi trường lập trình còn có công cụ **debugger** chuyên dụng: cho phép đặt **điểm dừng (breakpoint)** tại một dòng cụ thể, chạy chương trình **từng bước một**, và quan sát giá trị mọi biến tại đúng thời điểm đó — mạnh mẽ hơn hẳn việc chèn print thủ công khi chương trình dài và phức tạp. Khi Python báo lỗi ngoại lệ, luôn đọc kĩ **dòng cuối cùng** của thông báo (traceback) trước — nó nêu rõ loại lỗi và số dòng gây ra sự cố.",
        },
        {
          kind: "note",
          text: "Gỡ lỗi là quá trình tìm vị trí, nguyên nhân của lỗi rồi sửa cho đúng. Quy trình hợp lí: khoanh vùng nghi vấn → xem giá trị biến (bằng print tạm thời hoặc debugger) → tìm nguyên nhân → sửa → thử lại TOÀN BỘ các bộ kiểm thử. Đọc kĩ dòng cuối của thông báo lỗi (traceback) để biết loại lỗi và vị trí gây ra. Luôn xoá các lệnh print tạm thời sau khi gỡ lỗi xong.",
        },
        {
          kind: "check",
          q: "Sau khi sửa xong lỗi lệch một đơn vị của bạn Sếnh, tại sao nên chạy lại TOÀN BỘ các bộ kiểm thử chứ không chỉ chạy lại đúng trường hợp n = 5 vừa phát hiện lỗi?",
          options: [
            "Vì việc sửa lỗi có thể vô tình làm ảnh hưởng tới những trường hợp khác vốn đang chạy đúng, cần kiểm tra lại toàn diện",
            "Vì Python yêu cầu bắt buộc phải chạy lại toàn bộ chương trình sau mỗi lần sửa mã nguồn",
            "Vì chạy lại một trường hợp duy nhất sẽ khiến chương trình báo lỗi cú pháp",
            "Vì bộ kiểm thử n = 5 không còn giá trị sử dụng sau khi lỗi đã được sửa xong",
          ],
          answer: 0,
          explain:
            "Sửa một chỗ trong mã nguồn hoàn toàn có thể vô tình gây ảnh hưởng tới những phần khác của chương trình. Chỉ kiểm tra lại đúng bộ dữ liệu vừa gây lỗi không đảm bảo các trường hợp khác vẫn chạy đúng — vì vậy nguyên tắc an toàn là luôn thử lại toàn bộ các bộ kiểm thử đã có.",
        },
        {
          kind: "check",
          q: "Kĩ thuật đơn giản và phổ biến nhất để theo dõi giá trị của một biến tại một vị trí nghi ngờ trong chương trình là gì?",
          options: [
            "Chèn tạm một lệnh print để in giá trị biến đó ra màn hình ngay tại vị trí nghi ngờ",
            "Xoá hẳn biến đó đi rồi xem chương trình có còn báo lỗi hay không",
            "Đổi tên biến đó thành một cái tên ngắn hơn để dễ theo dõi bằng mắt",
            "Viết lại toàn bộ chương trình bằng một thuật toán hoàn toàn khác",
          ],
          answer: 0,
          explain:
            "Chèn một lệnh print tạm thời ngay tại vị trí nghi ngờ để in ra giá trị hiện tại của biến là kĩ thuật gỡ lỗi đơn giản, nhanh chóng và rất hiệu quả — sau khi tìm ra và sửa xong lỗi, nhớ xoá các lệnh print tạm thời này đi.",
        },
      ],
    },
  ],

  summary: [
    "**Kiểm thử** là chạy chương trình với các bộ dữ liệu đã biết trước đáp án đúng để đối chiếu. Một bộ dữ liệu chạy đúng KHÔNG chứng minh được toàn bộ chương trình đúng.",
    "Lỗi hay ẩn ở **dữ liệu biên** (đúng tại ranh giới các khoảng điều kiện) và **dữ liệu không hợp lệ** (ngoài phạm vi cho phép) — bộ kiểm thử tốt cần có đủ cả ba dạng: thông thường, biên, và không hợp lệ.",
    "**Gỡ lỗi** đi theo quy trình: khoanh vùng nghi vấn → in giá trị biến (bằng print tạm thời hoặc debugger) → tìm nguyên nhân → sửa → **thử lại toàn bộ** các bộ kiểm thử.",
    "Khi gặp lỗi ngoại lệ, đọc kĩ **dòng cuối** của thông báo (traceback) để biết loại lỗi và số dòng gây ra. Sửa lỗi có thể vô tình sinh lỗi mới — không bao giờ chỉ kiểm tra lại đúng trường hợp vừa sai.",
  ],
};

export default theory;
