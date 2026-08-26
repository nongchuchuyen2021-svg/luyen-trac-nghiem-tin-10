import type { LessonTheory } from "@/lib/types";

// Bài 27. Tham số của hàm
// SGK trang 137–141, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Hàm tinh_tien(so_luong, don_gia) ở bài trước sẽ vô dụng nếu chỉ tính được đúng một cặp số cố định. Sức mạnh thật sự của hàm nằm ở chỗ nó nhận **dữ liệu khác nhau mỗi lần gọi** thông qua tham số. Bài này làm rõ hai khái niệm hay bị lẫn lộn — tham số và đối số — và chỉ ra một cái bẫy cực kì nguy hiểm: gọi hàm sai thứ tự đối số có thể cho ra kết quả sai mà **không hề báo lỗi gì cả**.",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "tham-so-va-doi-so",
      emoji: "📐",
      heading: "Tham số và đối số: hai vai trò khác nhau",
      blocks: [
        {
          kind: "text",
          text: "**Tham số (tham số hình thức)** là những cái tên viết trong dòng định nghĩa hàm (def tên_hàm(tham_số):) — chúng giống như những **ô trống** đại diện cho dữ liệu mà hàm sẽ nhận, chưa có giá trị cụ thể nào cả. **Đối số** là **giá trị thật** được truyền vào khi **gọi hàm** — lúc này các ô trống mới thực sự được điền số liệu cụ thể.",
        },
        {
          kind: "figure",
          diagram: "tham-so-vs-doi-so",
          caption: "Hình 27.1. Tham số là ô trống chờ sẵn trong công thức — đối số là số liệu thật điền vào lúc gọi",
        },
        {
          kind: "example",
          title: "Tình huống: Cùng một công thức, dùng cho nhiều cặp số khác nhau",
          text: "Hàm tinh_tien mà Vy viết ở bài trước có hai tham số là số lượng và đơn giá — hai cái tên đại diện, chưa gắn với con số nào. Khi Vy gọi hàm với đối số cụ thể là ba và năm nghìn, hai tham số đó mới thực sự nhận giá trị ba và năm nghìn để tính toán. Lần gọi khác với đối số mười và hai nghìn, đúng hai tham số ấy lại nhận một cặp giá trị hoàn toàn khác — đây chính là lí do một hàm dùng lại được cho vô số bộ dữ liệu, không cần viết lại công thức.",
        },
        {
          kind: "code",
          caption: "Tham số trong định nghĩa — đối số khi gọi hàm",
          code: 'def tinh_tien(so_luong, don_gia):   # so_luong, don_gia là THAM SỐ\n    return so_luong * don_gia\n\nprint(tinh_tien(3, 5000))    # 3 và 5000 là ĐỐI SỐ\nprint(tinh_tien(10, 2000))   # 10 và 2000 là một cặp đối số khác',
        },
        {
          kind: "note",
          text: "Tham số (tham số hình thức) là tên biến viết trong dòng định nghĩa hàm, đại diện cho dữ liệu hàm sẽ nhận. Đối số là giá trị cụ thể truyền vào khi gọi hàm. Một hàm có thể có không, một hoặc nhiều tham số tuỳ theo nhu cầu công việc. Số lượng đối số truyền vào phải khớp với số lượng tham số, nếu không chương trình sẽ báo lỗi khi chạy.",
        },
        {
          kind: "check",
          q: "Trong định nghĩa def tinh_tien(so_luong, don_gia): ..., so_luong và don_gia được gọi là gì?",
          options: [
            "Tham số (tham số hình thức) của hàm",
            "Đối số truyền vào lúc gọi hàm",
            "Biến toàn cục dùng chung cho cả chương trình",
            "Giá trị mà hàm trả về sau khi tính xong",
          ],
          answer: 0,
          explain:
            "Tên biến xuất hiện trong dòng def, đại diện cho dữ liệu hàm sẽ nhận, được gọi là tham số (tham số hình thức). Giá trị cụ thể chỉ xuất hiện khi hàm được gọi, lúc đó mới gọi là đối số.",
        },
        {
          kind: "check",
          q: "Trong lời gọi tinh_tien(3, 5000), hai giá trị 3 và 5000 được gọi là gì?",
          options: [
            "Đối số truyền cho hàm",
            "Tham số hình thức của hàm",
            "Tên của hàm đang được gọi",
            "Biến cục bộ khai báo bên trong hàm",
          ],
          answer: 0,
          explain:
            "3 và 5000 là những giá trị cụ thể được đưa vào khi gọi hàm — đây chính là đối số, sẽ được gán lần lượt cho các tham số so_luong và don_gia theo đúng thứ tự.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "thu-tu-doi-so",
      emoji: "⚠️",
      heading: "Thứ tự đối số: đổi chỗ là đổi kết quả — mà không hề báo lỗi",
      blocks: [
        {
          kind: "text",
          text: "Đối số được gán cho tham số theo đúng **thứ tự vị trí**, không phải theo tên gợi nhớ. Đối số thứ nhất trong lời gọi luôn gán cho tham số thứ nhất trong định nghĩa, đối số thứ hai gán cho tham số thứ hai, cứ thế. Điều nguy hiểm là: nếu lỡ đảo thứ tự hai đối số cùng kiểu dữ liệu (ví dụ đều là số), Python **không hề báo lỗi** — chương trình vẫn chạy trơn tru, chỉ là kết quả tính ra hoàn toàn sai mà thôi.",
        },
        {
          kind: "figure",
          diagram: "thu-tu-doi-so-quan-trong",
          caption: "Hình 27.2. Đảo thứ tự hai đối số cùng kiểu số — chương trình chạy bình thường, kết quả thì sai bét",
        },
        {
          kind: "example",
          title: "Tình huống: Quỹ lớp bỗng dưng âm tiền",
          text: "Vy viết hàm con_lai(tong_quy, da_chi) trả về số tiền còn lại bằng cách lấy tổng quỹ trừ đi số đã chi. Gọi đúng con_lai(500000, 200000) — tổng quỹ 500 nghìn, đã chi 200 nghìn — hàm trả về đúng 300 nghìn còn dư, hợp lí. Nhưng một hôm Vy vội tay gõ nhầm thành con_lai(200000, 500000) — vô tình đưa số đã chi lên trước, tổng quỹ ra sau. Chương trình không hề báo lỗi gì cả, nhưng kết quả lại là số âm ba trăm nghìn! Vy phải tự nhận ra sự vô lí đó (quỹ không thể âm) mới lần ra được nguyên nhân: đối số bị đảo thứ tự.",
        },
        {
          kind: "code",
          caption: "Đảo thứ tự đối số cho kết quả sai mà không báo lỗi",
          code: 'def con_lai(tong_quy, da_chi):\n    return tong_quy - da_chi\n\nprint(con_lai(500000, 200000))   # 300000 — đúng thứ tự, hợp lí\nprint(con_lai(200000, 500000))   # -300000 — lỡ đảo chỗ, sai mà không báo lỗi!\n\ncon_lai(500000)                    # TypeError: thiếu 1 đối số bắt buộc',
        },
        {
          kind: "note",
          text: "Đối số được truyền cho tham số theo đúng thứ tự vị trí trong lời gọi hàm. Đảo thứ tự hai đối số cùng kiểu dữ liệu không gây lỗi cú pháp, nhưng có thể cho kết quả sai hoàn toàn về mặt ý nghĩa — luôn kiểm tra kĩ thứ tự khi gọi hàm nhiều tham số. Nếu số lượng đối số truyền vào không khớp số lượng tham số, Python báo lỗi TypeError ngay khi chạy.",
        },
        {
          kind: "check",
          q: "Vì sao khi Vy lỡ gọi con_lai(200000, 500000) thay vì con_lai(500000, 200000), chương trình lại không hề báo lỗi dù kết quả hoàn toàn sai?",
          options: [
            "Vì cả hai đối số đều là số nguyên hợp lệ về mặt cú pháp — Python chỉ gán chúng theo đúng thứ tự vị trí, không hiểu được ý nghĩa thực tế của từng con số",
            "Vì hàm con_lai đã được viết sai ngay từ phần định nghĩa nên luôn cho kết quả sai",
            "Vì Python luôn tự động phát hiện và sửa lại thứ tự đối số hợp lí trước khi tính toán",
            "Vì hai giá trị 200000 và 500000 không phải là số hợp lệ trong Python",
          ],
          answer: 0,
          explain:
            "Python chỉ quan tâm đối số nào đứng ở vị trí nào để gán cho đúng tham số tương ứng — nó không thể biết được ý nghĩa thực tế (đâu là \"tổng quỹ\", đâu là \"đã chi\") đằng sau mỗi con số, nên không có cách nào phát hiện lỗi đảo thứ tự này.",
        },
        {
          kind: "check",
          q: "Nếu hàm con_lai(tong_quy, da_chi) được gọi với chỉ một đối số duy nhất là con_lai(500000), điều gì sẽ xảy ra?",
          options: [
            "Chương trình báo lỗi TypeError vì thiếu đối số cho tham số da_chi",
            "Tham số da_chi tự động nhận giá trị 0 để chương trình vẫn chạy được",
            "Chương trình chạy bình thường và coi da_chi bằng đúng tong_quy",
            "Tham số da_chi tự động nhận giá trị None và phép trừ vẫn thực hiện được",
          ],
          answer: 0,
          explain:
            "Hàm con_lai có hai tham số bắt buộc. Gọi hàm mà chỉ truyền một đối số khiến tham số thứ hai (da_chi) không có giá trị nào để nhận, nên Python báo lỗi TypeError ngay khi chạy đến dòng gọi hàm này.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "tra-ve-nhieu-gia-tri",
      emoji: "🎁",
      heading: "Trả về nhiều giá trị và gọi hàm lồng nhau",
      blocks: [
        {
          kind: "text",
          text: "Một hàm Python có thể **trả về nhiều giá trị cùng lúc** bằng cách viết return giá_trị_1, giá_trị_2 — nơi gọi nhận kết quả bằng cách gán đồng thời cho nhiều biến, ví dụ a, b = tên_hàm(...). Ngoài ra, đối số truyền cho hàm không nhất thiết phải là một hằng số đơn giản — nó có thể là một biến, một biểu thức, hoặc thậm chí là **kết quả của một lời gọi hàm khác**, tạo thành lời gọi hàm **lồng nhau**.",
        },
        {
          kind: "figure",
          diagram: "nhieu-gia-tri-tra-ve-va-long-nhau",
          caption: "Hình 27.3. return trả nhiều giá trị cùng lúc — hàm lồng nhau luôn tính hàm bên trong trước",
        },
        {
          kind: "example",
          title: "Tình huống: Một hàm, hai kết quả cùng lúc",
          text: "Vy muốn có ngay cả tổng quỹ lẫn số tiền còn lại chỉ trong một lần gọi hàm, thay vì viết hai hàm riêng biệt. Vy viết quy_va_con_lai(tong_quy, da_chi) với lệnh return tong_quy, tong_quy - da_chi — trả về đồng thời hai giá trị. Ở nơi gọi, Vy nhận kết quả bằng t, h = quy_va_con_lai(500000, 200000): biến t nhận 500000, biến h nhận 300000, chỉ trong đúng một lần gọi hàm.",
        },
        {
          kind: "text",
          text: "Với lời gọi hàm lồng nhau như f(f(3)), Python luôn tính **hàm bên trong trước**: f(3) được tính xong, cho ra một kết quả cụ thể, rồi kết quả đó mới được đưa tiếp làm đối số cho f() ở ngoài. Đây là nguyên tắc tính từ trong ra ngoài, giống hệt cách tính một biểu thức toán học có ngoặc lồng nhau.",
        },
        {
          kind: "code",
          caption: "Trả về nhiều giá trị và gọi hàm lồng nhau",
          code: 'def quy_va_con_lai(tong_quy, da_chi):\n    return tong_quy, tong_quy - da_chi\n\nt, h = quy_va_con_lai(500000, 200000)\nprint(t, h)          # 500000 300000\n\ndef gap_doi(x):\n    return x * 2\n\nprint(gap_doi(gap_doi(3)))   # gap_doi(3) = 6 trước, rồi gap_doi(6) = 12',
        },
        {
          kind: "note",
          text: "Một hàm có thể trả về nhiều giá trị cùng lúc bằng return giá_trị_1, giá_trị_2, ...; nơi gọi nhận bằng cách gán đồng thời cho nhiều biến tương ứng. Đối số của hàm có thể là hằng số, biến, biểu thức, hoặc lời gọi một hàm khác. Với lời gọi lồng nhau, Python luôn tính xong hàm ở trong cùng trước, lấy kết quả đó làm đối số cho hàm bên ngoài.",
        },
        {
          kind: "check",
          q: "Với hàm quy_va_con_lai(tong_quy, da_chi) trả về return tong_quy, tong_quy - da_chi, lệnh t, h = quy_va_con_lai(500000, 200000) gán giá trị nào cho hai biến t và h?",
          options: [
            "t nhận 500000, h nhận 300000",
            "t nhận 300000, h nhận 500000",
            "Cả t và h đều nhận cùng giá trị 500000",
            "Chương trình báo lỗi vì không thể gán hai biến cùng lúc như vậy",
          ],
          answer: 0,
          explain:
            "return trả về đúng hai giá trị theo thứ tự tong_quy trước, rồi đến tong_quy trừ da_chi. Khi gán t, h = ..., biến đầu tiên (t) nhận giá trị đầu tiên được trả về (500000), biến thứ hai (h) nhận giá trị thứ hai (300000).",
        },
        {
          kind: "check",
          q: "Với hàm gap_doi(x) trả về gấp đôi giá trị x, lời gọi lồng nhau gap_doi(gap_doi(3)) được tính theo thứ tự nào?",
          options: [
            "Tính gap_doi(3) trước để ra 6, sau đó tính tiếp gap_doi(6) để ra kết quả cuối cùng là 12",
            "Tính gap_doi ở ngoài trước với giá trị chưa xác định, rồi mới tính gap_doi(3) ở trong",
            "Cả hai lời gọi gap_doi được thực hiện đồng thời cùng một lúc",
            "Chương trình báo lỗi vì không được phép gọi cùng một hàm hai lần lồng nhau",
          ],
          answer: 0,
          explain:
            "Python luôn tính hàm nằm ở trong cùng trước để có một kết quả cụ thể, rồi mới dùng kết quả đó làm đối số cho hàm bên ngoài. gap_doi(3) tính trước ra 6, sau đó 6 được đưa vào làm đối số cho lời gọi gap_doi ở ngoài, cho kết quả cuối cùng là 12.",
        },
      ],
    },
  ],

  summary: [
    "**Tham số (tham số hình thức)** là tên biến trong định nghĩa hàm, đại diện cho dữ liệu sẽ nhận. **Đối số** là giá trị cụ thể truyền vào lúc gọi hàm. Số đối số phải khớp số tham số, nếu không sẽ báo lỗi TypeError.",
    "Đối số được gán cho tham số theo đúng **thứ tự vị trí**. Đảo thứ tự hai đối số cùng kiểu không gây lỗi cú pháp nhưng có thể cho **kết quả sai hoàn toàn** — luôn kiểm tra kĩ thứ tự khi gọi hàm.",
    "Một hàm có thể **trả về nhiều giá trị cùng lúc** bằng return giá_trị_1, giá_trị_2; nơi gọi nhận bằng cách gán đồng thời cho nhiều biến.",
    "Đối số có thể là hằng số, biến, biểu thức, hoặc **lời gọi một hàm khác**. Với lời gọi lồng nhau, Python luôn tính hàm ở trong cùng trước.",
  ],
};

export default theory;
