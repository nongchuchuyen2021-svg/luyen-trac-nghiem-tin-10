import type { LessonTheory } from "@/lib/types";

// Bài 18. Các lệnh vào ra đơn giản
// SGK trang 92–96, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Một chương trình chỉ thật sự hữu ích khi biết **lắng nghe** người dùng và **trả lời** lại kết quả. Bài này theo chân bạn Hạ dựng một gian hàng trà sữa mini gây quỹ lớp — từ lệnh input() tưởng đơn giản nhưng ẩn một cái bẫy kinh điển, đến cách chuyển đổi kiểu dữ liệu, và cách dùng print() để in ra một tấm hoá đơn tử tế cho khách.",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "input-co-ban",
      emoji: "⌨️",
      heading: "Lệnh input(): nhận dữ liệu từ bàn phím",
      blocks: [
        {
          kind: "text",
          text: "Lệnh **input()** tạm dừng chương trình, chờ người dùng gõ nội dung từ bàn phím và nhấn Enter, rồi trả nội dung đó về cho chương trình. Có thể đặt một lời nhắc ngay trong ngoặc, ví dụ input(\"Nhập tên: \"), để người dùng biết cần gõ gì. Điều quan trọng nhất — và cũng là điều dễ gây lỗi nhất — là **input() luôn trả về một xâu kí tự**, dù người dùng gõ toàn chữ số đi nữa.",
        },
        {
          kind: "figure",
          diagram: "input-luon-la-xau",
          caption: "Hình 18.1. Gõ số nhưng nhận về xâu — và cái giá phải trả khi quên điều đó",
        },
        {
          kind: "example",
          title: "Tình huống: Gian hàng trà sữa mini của Hạ gặp sự cố đầu tiên",
          text: "Ngày hội chợ trường, Hạ mở một gian hàng trà sữa mini gây quỹ cho lớp. Hạ viết vài dòng chào khách: hỏi tên rồi in lời chào — chạy trơn tru. Hào hứng, Hạ viết tiếp phần tính tiền: hỏi đơn giá một ly, hỏi số lượng khách mua, rồi tính tổng bằng cách nhân hai giá trị vừa nhập với nhau (xem đúng dòng lệnh trong khối mã bên dưới). Nhấn chạy, màn hình đỏ lòm một dòng báo lỗi. Hạ gõ đúng số mà, sao lại lỗi? Hoá ra cả hai giá trị Hạ vừa nhập đều là xâu kí tự chứ không phải con số thật sự — và Python không hề định nghĩa phép nhân giữa hai xâu với nhau.",
        },
        {
          kind: "code",
          caption: "Đoạn lệnh gây lỗi của Hạ — chạy thử trong Thonny hoặc IDLE",
          code: 'gia = input("Đơn giá 1 ly (đồng): ")\nso_luong = input("Số lượng: ")\ntong = gia * so_luong\nprint(tong)\n\n# Khi chạy và nhập 15000 rồi 3:\n# TypeError: can\'t multiply sequence by non-int of type \'str\'',
        },
        {
          kind: "note",
          text: "input() luôn trả về kiểu xâu kí tự (str), bất kể người dùng gõ chữ hay số. Muốn dùng dữ liệu đó để tính toán số học, bắt buộc phải chuyển sang kiểu số trước — nếu không, các phép toán như nhân, chia sẽ báo lỗi ngay khi chương trình chạy.",
        },
        {
          kind: "check",
          q: "Khi Hạ nhân trực tiếp hai giá trị lấy từ input() mà chưa chuyển kiểu, chương trình báo lỗi gì?",
          options: [
            "TypeError, vì Python không định nghĩa phép nhân giữa hai xâu kí tự với nhau",
            "ValueError, vì hai xâu đó chứa toàn chữ số nên không hợp lệ",
            "SyntaxError, vì Hạ viết sai cú pháp của câu lệnh",
            "Không lỗi gì cả, chương trình vẫn tính đúng ra kết quả như hai con số",
          ],
          answer: 0,
          explain:
            "Cả gia và so_luong đều là xâu kí tự do input() trả về. Python không có phép nhân giữa hai xâu với nhau (chỉ có phép nhân giữa một xâu và một số nguyên để lặp lại xâu đó), nên chương trình dừng lại với lỗi TypeError ngay khi chạy tới dòng tính tổng.",
        },
        {
          kind: "check",
          q: "Dù người dùng gõ đúng con số 15000 vào ô đơn giá, biến gia trong chương trình của Hạ thực chất thuộc kiểu dữ liệu nào?",
          options: ["Xâu kí tự (str)", "Số nguyên (int)", "Số thực (float)", "Lôgic (bool)"],
          answer: 0,
          explain:
            "input() luôn trả về kiểu str bất kể nội dung gõ vào là gì. Muốn có kiểu số nguyên hay số thực, phải chủ động chuyển đổi bằng int() hoặc float().",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "chuyen-doi-kieu-du-lieu",
      emoji: "🔧",
      heading: "Chuyển đổi kiểu dữ liệu: int(), float(), str()",
      blocks: [
        {
          kind: "text",
          text: "Để giải quyết đúng cái bẫy ở trên, Python cung cấp sẵn những \"cỗ máy chuyển đổi\": **int()** chuyển xâu số nguyên thành kiểu số nguyên thật sự, **float()** chuyển xâu số thập phân thành kiểu số thực, và **str()** làm ngược lại — biến một con số thành xâu kí tự (hữu ích khi cần ghép số vào một câu chữ). Bọc trực tiếp input() bên trong int() hoặc float() là cách viết gọn và quen thuộc nhất.",
        },
        {
          kind: "figure",
          diagram: "chuyen-doi-kieu",
          caption: "Hình 18.2. int() và float() chuyển xâu thành số — nhưng bó tay với xâu không phải chữ số",
        },
        {
          kind: "example",
          title: "Tình huống: Hạ sửa lỗi — rồi gặp vị khách tinh nghịch",
          text: "Hạ sửa lại hai dòng nhập liệu bằng cách bọc thêm int() quanh input(), chạy lại và tổng tiền hiện ra chính xác 45000. Vài phút sau, một cậu bé tò mò đứng xem, được Hạ cho gõ thử số lượng lại nghịch ngợm gõ chữ \"ba\" thay vì con số 3. Chương trình lập tức dừng lại với một dòng lỗi khác hẳn lần trước. Hạ giải thích cho cậu bé: int() chỉ biết chuyển đổi những xâu thật sự là chữ số — gặp chữ cái, nó chào thua ngay lập tức.",
        },
        {
          kind: "code",
          caption: "Phiên bản đã sửa — và điều xảy ra khi khách gõ chữ thay vì số",
          code: 'gia = int(input("Đơn giá 1 ly (đồng): "))\nso_luong = int(input("Số lượng: "))\ntong = gia * so_luong\nprint(tong)          # 45000 — đúng!\n\n# Nếu ô Số lượng gõ: ba\n# ValueError: invalid literal for int() with base 10: \'ba\'',
        },
        {
          kind: "note",
          text: "int() chuyển xâu số nguyên hợp lệ thành kiểu số nguyên; float() chuyển xâu số thập phân hợp lệ thành kiểu số thực; str() làm ngược lại, biến số thành xâu. Khi xâu đưa vào int() hoặc float() không phải là chữ số hợp lệ, chương trình sẽ dừng lại với lỗi phát sinh khi chạy, không phải lỗi cú pháp.",
        },
        {
          kind: "check",
          q: "Sau khi Hạ đã sửa chương trình đúng chuẩn, một vị khách nghịch gõ chữ \"ba\" vào ô số lượng thay vì con số. Điều gì xảy ra?",
          options: [
            "Chương trình dừng lại và báo lỗi vì int() không chuyển được xâu \"ba\" thành số",
            "Chương trình tự hiểu \"ba\" nghĩa là số 3 rồi tính tổng tiền bình thường",
            "Chương trình bỏ qua giá trị sai và coi số lượng bằng 0",
            "Chương trình chạy hoàn toàn bình thường và in ra tổng tiền là 0 đồng",
          ],
          answer: 0,
          explain:
            "int() chỉ chuyển đổi được các xâu biểu diễn đúng chữ số. Gặp một xâu chứa chữ cái như \"ba\", nó không có cách nào suy luận ra con số tương ứng nên chương trình dừng lại với lỗi ngay khi chạy tới dòng đó.",
        },
        {
          kind: "check",
          q: "Nếu Hạ muốn cho khách nhập thêm phần trăm giảm giá có thể lẻ (ví dụ 10.5%), Hạ nên dùng hàm chuyển đổi kiểu nào cho hợp lí nhất?",
          options: ["float()", "int()", "str()", "print()"],
          answer: 0,
          explain:
            "float() chuyển xâu thành số thực, lưu được cả phần thập phân như 10.5 — trong khi int() chỉ giữ được số nguyên và sẽ làm mất phần lẻ đó.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "print-nang-cao",
      emoji: "🖨️",
      heading: "print() nâng cao: nhiều giá trị, sep và end",
      blocks: [
        {
          kind: "text",
          text: "print() không chỉ in được một giá trị: có thể liệt kê **nhiều giá trị cách nhau bởi dấu phẩy**, và mặc định chúng sẽ hiện ra cách nhau một dấu cách. Muốn đổi kí tự ngăn cách đó, dùng tham số **sep**; muốn đổi kí tự kết thúc dòng (mặc định là xuống dòng), dùng tham số **end** — rất hữu ích khi cần nhiều lệnh print nối liền trên cùng một dòng.",
        },
        {
          kind: "figure",
          diagram: "print-nang-cao",
          caption: "Hình 18.3. Cùng là print(), nhưng sep và end tạo ra ba kiểu trình bày khác hẳn nhau",
        },
        {
          kind: "code",
          caption: "Ba cách dùng print() nâng cao mà Hạ áp dụng để in hoá đơn",
          code: 'print(ten, "mua", so_luong, "ly")\n# Hạ mua 3 ly   (mặc định cách nhau một dấu cách)\n\nprint(mon1, mon2, mon3, sep=", ")\n# Trà sữa, Trân châu, Thạch   (đổi kí tự ngăn cách)\n\nprint("Tổng: ", end="")\nprint(tong, "đồng")\n# Tổng: 45000 đồng   (hai lệnh print nối liền một dòng)',
        },
        {
          kind: "example",
          title: "Tình huống: Tấm hoá đơn hoàn chỉnh cuối buổi hội chợ",
          text: "Cuối buổi, Hạ ghép toàn bộ những gì học được thành một chương trình in hoá đơn tử tế cho từng khách: tên khách và số ly được in cùng một dòng nhờ print() nhận nhiều giá trị; danh sách các món gọi thêm được in cách nhau bởi dấu phẩy nhờ tham số sep; và dòng \"Tổng: \" cùng số tiền được nối liền không xuống dòng nhờ tham số end. Khách nào cũng khen tấm hoá đơn nhìn chuyên nghiệp hệt như một cửa hàng thật.",
        },
        {
          kind: "figure",
          diagram: "hoa-don-tra-sua",
          caption: "Hình 18.4. Thành phẩm cuối cùng: hoá đơn trà sữa in ra từ chương trình của Hạ",
        },
        {
          kind: "note",
          text: "print() nhận nhiều giá trị cách nhau bởi dấu phẩy, mặc định hiển thị cách nhau một dấu cách. Tham số sep đổi kí tự ngăn cách giữa các giá trị. Tham số end đổi kí tự kết thúc dòng in (mặc định là xuống dòng) — đặt end thành xâu rỗng để lệnh print tiếp theo nối liền cùng dòng.",
        },
        {
          kind: "check",
          q: "Lệnh print(ten, \"mua\", so_luong, \"ly\") khi KHÔNG truyền tham số sep sẽ tự động ngăn cách các giá trị bằng gì?",
          options: [
            "Một dấu cách (khoảng trắng)",
            "Một dấu phẩy",
            "Không có gì, các giá trị dính liền nhau",
            "Một dấu chấm phẩy",
          ],
          answer: 0,
          explain:
            "Giá trị mặc định của tham số sep trong print() là một dấu cách. Muốn đổi thành kí tự khác, phải truyền rõ sep=\"...\" khi gọi lệnh.",
        },
        {
          kind: "check",
          q: "Muốn hai lệnh print liên tiếp in kết quả trên CÙNG một dòng thay vì tự động xuống dòng, Hạ cần truyền tham số nào cho lệnh print phía trước?",
          options: [
            "end, ví dụ đặt bằng một xâu rỗng",
            "sep, ví dụ đặt bằng một xâu rỗng",
            "input, để nhận thêm dữ liệu trước khi in",
            "str, để chuyển giá trị in ra thành xâu",
          ],
          answer: 0,
          explain:
            "Tham số end quy định kí tự kết thúc của lệnh print, mặc định là kí tự xuống dòng. Đặt end thành xâu rỗng khiến lệnh print tiếp theo được nối ngay vào cuối dòng hiện tại thay vì bắt đầu một dòng mới.",
        },
        {
          kind: "check",
          q: "Trong hoá đơn cuối cùng của Hạ, danh sách các món gọi thêm được in cách nhau bởi dấu phẩy nhờ tham số nào của print()?",
          options: ["sep", "end", "int", "input"],
          answer: 0,
          explain:
            "sep quy định kí tự chèn giữa các giá trị được liệt kê trong cùng một lệnh print — đặt sep thành dấu phẩy và khoảng trắng cho ra đúng danh sách món ngăn cách như hoá đơn thật.",
        },
      ],
    },
  ],

  summary: [
    "**input()** luôn trả về kiểu xâu kí tự (str), dù người dùng gõ toàn chữ số — muốn tính toán phải chuyển kiểu trước, nếu không các phép toán số học sẽ báo lỗi khi chạy.",
    "**int()** và **float()** chuyển xâu thành số nguyên/số thực; **str()** làm ngược lại. Xâu không phải chữ số hợp lệ đưa vào int()/float() sẽ gây lỗi phát sinh lúc chạy chương trình.",
    "**print()** in được nhiều giá trị cách nhau bởi dấu phẩy trong lệnh, mặc định hiển thị cách nhau một dấu cách.",
    "Tham số **sep** đổi kí tự ngăn cách giữa các giá trị; tham số **end** đổi kí tự kết thúc dòng (mặc định xuống dòng) — dùng để nối nhiều lệnh print trên cùng một dòng.",
  ],
};

export default theory;
