import type { LessonTheory } from "@/lib/types";

// Bài 23. Một số lệnh làm việc với dữ liệu danh sách
// SGK trang 117–121, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Danh sách đồ dã ngoại của bạn Vy ở bài trước mới chỉ biết thêm vào cuối và sửa từng ô. Nhưng thực tế luôn phát sinh: có người xin rút, có món cần chèn đúng vị trí, cần sắp xếp lại cho gọn, cần đếm xem trùng bao nhiêu lần. Bài này trang bị đủ bộ lệnh cho những việc đó — và cũng chỉ thẳng ra ba cái bẫy kinh điển mà gần như ai học Python cũng từng dính ít nhất một lần.",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "remove-va-del",
      emoji: "🗑️",
      heading: "Xoá phần tử: remove() theo GIÁ TRỊ, del theo VỊ TRÍ",
      blocks: [
        {
          kind: "text",
          text: "Python có hai cách xoá một phần tử khỏi danh sách, và chúng hoạt động theo hai nguyên tắc hoàn toàn khác nhau. **a.remove(x)** tìm và xoá phần tử **đầu tiên có giá trị bằng x** — không cần biết nó đang ở đâu. **del a[i]** xoá phần tử đang nằm ở **chỉ số i** — không quan tâm giá trị của nó là gì. Nhầm lẫn hai lệnh này là lỗi cực kì phổ biến.",
        },
        {
          kind: "figure",
          diagram: "remove-vs-del",
          caption: "Hình 23.1. remove() đi tìm đúng giá trị cần bỏ — del chỉ thẳng vào đúng vị trí cần bỏ",
        },
        {
          kind: "example",
          title: "Tình huống: Danh sách dã ngoại có người đổi ý",
          text: "Danh sách đồ dã ngoại của Vy lúc này là [\"Lều\", \"Bóng đá\", \"Nước\", \"Bánh mì\"]. Cả nhóm quyết định bỏ bóng đá vì sân cỏ đang sửa — Vy gõ do_da_ngoai.remove(\"Bóng đá\"): Python tự đi tìm đúng phần tử mang giá trị \"Bóng đá\" ở bất kì vị trí nào rồi xoá nó, không cần Vy phải biết nó đang ở chỉ số mấy. Lúc khác, có bạn muốn bỏ hẳn món đồ đang xếp ở vị trí đầu tiên (dù chưa nhớ rõ đó là món gì) — lúc này phải dùng del do_da_ngoai[0], xoá đúng ô ở chỉ số 0 bất kể trong đó đang chứa gì.",
        },
        {
          kind: "code",
          caption: "remove() xoá theo giá trị — del xoá theo chỉ số",
          code: 'do_da_ngoai = ["Lều", "Bóng đá", "Nước", "Bánh mì"]\ndo_da_ngoai.remove("Bóng đá")\nprint(do_da_ngoai)   # [\'Lều\', \'Nước\', \'Bánh mì\']\n\ndel do_da_ngoai[0]\nprint(do_da_ngoai)   # [\'Nước\', \'Bánh mì\']',
        },
        {
          kind: "note",
          text: "a.remove(x) xoá phần tử đầu tiên có giá trị bằng x — nếu x không tồn tại trong danh sách, chương trình báo lỗi ValueError. del a[i] xoá phần tử ở chỉ số i — nếu i vượt phạm vi, chương trình báo lỗi IndexError. a.clear() xoá sạch toàn bộ phần tử, biến a vẫn tồn tại nhưng trở thành danh sách rỗng [].",
        },
        {
          kind: "check",
          q: "Với danh sách [\"Lều\", \"Bóng đá\", \"Nước\", \"Bánh mì\"], lệnh nào xoá đúng phần tử \"Bóng đá\" mà không cần biết nó đang ở chỉ số mấy?",
          options: [
            "do_da_ngoai.remove(\"Bóng đá\")",
            "del do_da_ngoai[\"Bóng đá\"]",
            "do_da_ngoai.remove(1)",
            "del do_da_ngoai(1)",
          ],
          answer: 0,
          explain:
            "remove(x) tìm và xoá phần tử theo đúng giá trị x, không cần quan tâm vị trí. del a[i] mới cần chỉ số, và chỉ số phải là số nguyên trong ngoặc vuông, không phải giá trị trong ngoặc tròn.",
        },
        {
          kind: "check",
          q: "Nếu Vy lỡ gõ do_da_ngoai.remove(0) trên danh sách toàn tên món đồ (không có phần tử nào mang giá trị số 0), điều gì xảy ra?",
          options: [
            "Chương trình báo lỗi ValueError vì không tìm thấy phần tử nào có giá trị bằng 0",
            "Chương trình tự động xoá phần tử ở chỉ số 0, giống hệt lệnh del",
            "Chương trình bỏ qua lệnh này mà không báo lỗi gì cả",
            "Chương trình xoá toàn bộ danh sách vì 0 là giá trị đặc biệt",
          ],
          answer: 0,
          explain:
            "remove(0) đi tìm phần tử có GIÁ TRỊ bằng số 0 trong danh sách. Vì danh sách toàn chứa tên món đồ (xâu kí tự), không có phần tử nào bằng số 0, nên Python báo lỗi ValueError — hoàn toàn khác với del a[0] vốn xoá theo chỉ số.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "insert-va-sort",
      emoji: "🔀",
      heading: "insert() chèn đúng chỗ — sort() sắp xếp tại chỗ (và một cái bẫy)",
      blocks: [
        {
          kind: "text",
          text: "**a.insert(i, x)** chèn giá trị x vào **trước** vị trí chỉ số i, đẩy các phần tử từ đó trở đi lùi lại một bậc — khác hẳn append() chỉ biết thêm vào cuối. **a.sort()** sắp xếp danh sách theo thứ tự tăng dần (thêm reverse=True để giảm dần). Nhưng cẩn thận: sort() sắp xếp **ngay trên danh sách gốc** và **không trả về giá trị nào cả** — viết a = a.sort() là một trong những lỗi phổ biến nhất khi mới học Python.",
        },
        {
          kind: "figure",
          diagram: "sort-tai-cho-va-bay",
          caption: "Hình 23.2. sort() sắp xếp ngay trên danh sách gốc — gán lại a = a.sort() sẽ biến a thành None",
        },
        {
          kind: "example",
          title: "Tình huống: Chèn đồ ưu tiên lên đầu, rồi một dòng lệnh xoá sạch cả danh sách",
          text: "Vy muốn \"Áo phao\" phải là món kiểm tra đầu tiên vì quan trọng nhất, nên chèn nó vào đúng vị trí đầu bằng do_da_ngoai.insert(0, \"Áo phao\") thay vì thêm vào cuối bằng append. Sau đó, muốn liệt kê đồ theo thứ tự bảng chữ cái cho dễ tìm, Vy gõ vội do_da_ngoai = do_da_ngoai.sort() — chạy xong, in thử do_da_ngoai thì chỉ thấy chữ None hiện ra, toàn bộ danh sách biến mất! Hoá ra sort() đã tự sắp xếp lại danh sách gốc rồi, nhưng bản thân lệnh sort() không trả về giá trị nào để gán tiếp — gán None đè lên khiến dữ liệu cũ mất sạch. Cách đúng là chỉ cần gọi do_da_ngoai.sort() suông, không gán lại gì cả.",
        },
        {
          kind: "code",
          caption: "insert() chèn đúng vị trí — sort() đúng cách và cái bẫy cần tránh",
          code: 'do_da_ngoai.insert(0, "Áo phao")\nprint(do_da_ngoai)\n\n# ĐÚNG: gọi sort() suông, không gán lại\ndo_da_ngoai.sort()\nprint(do_da_ngoai)\n\n# SAI: gán lại kết quả của sort()\ndo_da_ngoai = do_da_ngoai.sort()\nprint(do_da_ngoai)   # None — dữ liệu đã mất!',
        },
        {
          kind: "note",
          text: "a.insert(i, x) chèn x vào trước chỉ số i, các phần tử phía sau dịch lùi một bậc. a.sort() sắp xếp tăng dần ngay trên danh sách a (dùng a.sort(reverse=True) để giảm dần) và không trả về giá trị nào (trả về None) — tuyệt đối không gán lại a = a.sort(). Muốn có một danh sách mới đã sắp xếp mà vẫn giữ nguyên danh sách gốc, dùng hàm sorted(a) thay vì phương thức sort().",
        },
        {
          kind: "check",
          q: "Vì sao sau khi Vy gõ do_da_ngoai = do_da_ngoai.sort(), biến do_da_ngoai lại chỉ còn giá trị None?",
          options: [
            "Vì sort() không trả về danh sách nào cả (trả về None), nên phép gán lại đã ghi đè None lên do_da_ngoai",
            "Vì Python xoá sạch danh sách mỗi khi gặp lệnh sắp xếp bất kì",
            "Vì tên biến do_da_ngoai đã bị trùng với một từ khoá của Python",
            "Vì danh sách chứa xâu kí tự nên không sắp xếp bảng chữ cái được",
          ],
          answer: 0,
          explain:
            "sort() thực hiện sắp xếp ngay trên danh sách gốc và trả về None (không trả về danh sách). Khi gán do_da_ngoai = do_da_ngoai.sort(), Python lấy giá trị None đó gán đè lên do_da_ngoai, làm mất luôn danh sách đã được sắp xếp đúng ngay trước đó.",
        },
        {
          kind: "check",
          q: "Cách viết nào sắp xếp đúng danh sách do_da_ngoai theo thứ tự tăng dần mà KHÔNG làm mất dữ liệu?",
          options: [
            "do_da_ngoai.sort()",
            "do_da_ngoai = do_da_ngoai.sort()",
            "sort(do_da_ngoai) = do_da_ngoai",
            "do_da_ngoai == do_da_ngoai.sort()",
          ],
          answer: 0,
          explain:
            "Chỉ cần gọi do_da_ngoai.sort() mà không gán lại gì cả — bản thân lệnh này đã tự động sắp xếp lại danh sách gốc. Gán kết quả của sort() cho chính nó sẽ ghi đè None lên dữ liệu.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "append-extend-va-thu-tu",
      emoji: "🧩",
      heading: "append() và extend(): một phần tử hay nhiều phần tử?",
      blocks: [
        {
          kind: "text",
          text: "Muốn thêm **nhiều giá trị cùng lúc** vào cuối danh sách, nhiều bạn theo phản xạ dùng append() với một danh sách con — nhưng append() luôn thêm **nguyên vẹn đối số làm một phần tử duy nhất**, kể cả khi đối số đó là cả một danh sách. Muốn nối rời từng phần tử vào cuối, phải dùng **extend()**.",
        },
        {
          kind: "figure",
          diagram: "append-vs-extend",
          caption: "Hình 23.3. append() nhét nguyên một khối vào làm 1 phần tử — extend() tách rời rồi nối từng cái",
        },
        {
          kind: "example",
          title: "Tình huống: Thêm hai món cùng lúc — nhưng chọn nhầm lệnh",
          text: "Chuẩn bị thêm \"Đèn pin\" và \"Diêm\" cùng lúc, Vy gõ nhanh do_da_ngoai.append([\"Đèn pin\", \"Diêm\"]) — in ra kiểm tra mới ngỡ ngàng: danh sách giờ có một phần tử kì lạ là cả một danh sách con nằm lồng bên trong, chứ không phải hai món đồ tách rời như mong muốn. Sửa lại bằng do_da_ngoai.extend([\"Đèn pin\", \"Diêm\"]), lần này từng món được tách ra và nối thẳng vào cuối, đúng như ý Vy.",
        },
        {
          kind: "text",
          text: "Hai lệnh nhỏ khác cũng rất hữu ích: **a.count(x)** đếm số lần giá trị x xuất hiện trong danh sách; **a.index(x)** trả về chỉ số xuất hiện đầu tiên của x. Nhưng cẩn thận thứ tự công việc: nếu cần tìm chỉ số của một phần tử rồi sau đó mới sắp xếp lại danh sách, phải **tìm chỉ số TRƯỚC khi gọi sort()** — vì sort() xáo trộn lại toàn bộ vị trí, chỉ số tìm được trước đó sẽ không còn đúng nữa.",
        },
        {
          kind: "figure",
          diagram: "thu-tu-truoc-sau-sort",
          caption: "Hình 23.4. Tìm chỉ số của giá trị lớn nhất trước khi sort — sort xong, chỉ số cũ đã trỏ sai chỗ",
        },
        {
          kind: "code",
          caption: "count(), index() và đúng thứ tự khi kết hợp với sort()",
          code: 'a = [7, 2, 9, 4]\nprint(a.count(9))         # 1\nvi_tri = a.index(max(a)) # tìm chỉ số TRƯỚC khi sort → 2\n\na.sort()\nprint(a)                 # [2, 4, 7, 9]\nprint(vi_tri)             # vẫn là 2 — vị trí đã lưu từ trước, không tự cập nhật',
        },
        {
          kind: "note",
          text: "append(x) thêm nguyên x làm một phần tử, kể cả khi x là một danh sách (tạo ra danh sách lồng nhau). extend(x) tách rời từng phần tử của x rồi nối vào cuối danh sách gốc. a.count(x) đếm số lần x xuất hiện; a.index(x) tìm chỉ số xuất hiện đầu tiên của x. Nếu cần chỉ số của một phần tử, hãy tìm nó TRƯỚC khi gọi sort() — sau khi sắp xếp, vị trí các phần tử đã thay đổi hoàn toàn.",
        },
        {
          kind: "check",
          q: "Vy gõ do_da_ngoai.append([\"Đèn pin\", \"Diêm\"]) thay vì extend(). Kết quả danh sách sẽ như thế nào?",
          options: [
            "Có thêm đúng MỘT phần tử mới là cả danh sách con [\"Đèn pin\", \"Diêm\"] lồng bên trong",
            "Có thêm đúng HAI phần tử mới là \"Đèn pin\" và \"Diêm\" tách rời như mong muốn",
            "Chương trình báo lỗi vì append không nhận danh sách làm đối số",
            "Danh sách gốc bị xoá sạch và chỉ còn lại hai món đồ mới",
          ],
          answer: 0,
          explain:
            "append() luôn thêm nguyên đối số của nó làm MỘT phần tử duy nhất, dù đối số đó là một danh sách con — tạo ra danh sách lồng nhau. Muốn tách rời từng phần tử, phải dùng extend() thay vì append().",
        },
        {
          kind: "check",
          q: "Với a = [7, 2, 9, 4], nếu tìm vi_tri = a.index(max(a)) TRƯỚC khi gọi a.sort(), sau đó sort() xong thì vi_tri có còn trỏ đúng tới vị trí của giá trị lớn nhất (9) trong danh sách đã sắp xếp không?",
          options: [
            "Không, vì sort() đã xáo trộn lại vị trí các phần tử — vi_tri vẫn giữ giá trị cũ (2), không tự động cập nhật",
            "Có, vì Python luôn tự động cập nhật mọi biến chỉ số sau khi sắp xếp danh sách",
            "Không xác định được nếu thiếu thông tin về kiểu dữ liệu của các phần tử",
            "Có, nhưng chỉ đúng khi danh sách có ít hơn 5 phần tử",
          ],
          answer: 0,
          explain:
            "vi_tri là một biến số bình thường, được gán giá trị 2 tại thời điểm gọi index() — nó không hề \"theo dõi\" phần tử đó. Sau khi sort() sắp xếp lại toàn bộ vị trí, vi_tri vẫn giữ nguyên số 2 cũ, nhưng vị trí 2 trong danh sách mới lại chứa một giá trị khác (7, không phải 9).",
        },
      ],
    },
  ],

  summary: [
    "**remove(x)** xoá phần tử đầu tiên có GIÁ TRỊ bằng x. **del a[i]** xoá phần tử ở CHỈ SỐ i. **clear()** xoá sạch danh sách, biến vẫn tồn tại dưới dạng [].",
    "**insert(i, x)** chèn x vào trước chỉ số i. **sort()** sắp xếp tăng dần NGAY TRÊN danh sách gốc và trả về None — tuyệt đối không viết a = a.sort(); cần giữ bản gốc thì dùng sorted(a).",
    "**append(x)** luôn thêm nguyên x làm một phần tử (kể cả khi x là danh sách, tạo lồng nhau). **extend(x)** tách rời từng phần tử của x rồi nối vào cuối.",
    "**count(x)** đếm số lần xuất hiện, **index(x)** tìm chỉ số đầu tiên của x. Luôn tìm chỉ số TRƯỚC khi gọi sort(), vì sau khi sắp xếp, vị trí các phần tử đã hoàn toàn thay đổi.",
  ],
};

export default theory;
