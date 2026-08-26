import type { LessonTheory } from "@/lib/types";

// Bài 26. Hàm trong Python
// SGK trang 132–136, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Vy đang tổng hợp quỹ dã ngoại thì nhận ra một điều khó chịu: đoạn lệnh tính tiền (số lượng nhân đơn giá) cứ phải gõ đi gõ lại ở chục chỗ khác nhau trong chương trình — sửa công thức một lần là phải mò sửa lại hết. **Hàm** chính là lời giải cho vấn đề này: viết công thức đúng một lần, đặt tên, rồi gọi lại bao nhiêu lần tuỳ thích. Đây là một trong những khái niệm quan trọng nhất của lập trình, nên bài này sẽ đi thật kĩ từng bước.",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "dinh-nghia-va-goi-ham",
      emoji: "📜",
      heading: "Hàm: định nghĩa một lần, gọi lại nhiều lần",
      blocks: [
        {
          kind: "text",
          text: "**Hàm** là một khối lệnh được đặt tên, thực hiện một công việc xác định và có thể **gọi lại nhiều lần**. Trong Python, hàm được tạo bằng từ khoá **def**, theo cú pháp def tên_hàm(tham_số):, tiếp theo là khối lệnh thụt lề. Điều quan trọng cần phân biệt rõ: **định nghĩa hàm** (khối def) chỉ giống như viết ra một tấm công thức treo sẵn — chưa hề tính toán gì cả; chỉ khi **gọi hàm** (viết tên hàm kèm cặp ngoặc) thì thân hàm mới thực sự được thực thi.",
        },
        {
          kind: "figure",
          diagram: "dinh-nghia-vs-goi-ham",
          caption: "Hình 26.1. def chỉ treo sẵn công thức — gọi tên hàm mới thực sự \"nấu\" theo công thức đó",
        },
        {
          kind: "example",
          title: "Tình huống: Gõ đi gõ lại một đoạn tính tiền",
          text: "Vy nhận thấy đoạn lệnh so_luong * don_gia xuất hiện ở năm chỗ khác nhau trong chương trình tổng hợp quỹ dã ngoại — mỗi lần đổi công thức (ví dụ thêm phí vận chuyển) lại phải sửa cả năm chỗ, rất dễ sót. Vy đóng gói đoạn tính đó thành một hàm tinh_tien(so_luong, don_gia), rồi thay tất cả năm chỗ kia bằng lệnh gọi tinh_tien(...). Giờ muốn đổi công thức, Vy chỉ cần sửa đúng một chỗ duy nhất — bên trong định nghĩa hàm — toàn bộ các lệnh gọi sẽ tự động áp dụng công thức mới.",
        },
        {
          kind: "code",
          caption: "Định nghĩa hàm một lần, gọi lại ở nhiều chỗ khác nhau",
          code: 'def tinh_tien(so_luong, don_gia):\n    return so_luong * don_gia\n\nprint(tinh_tien(3, 5000))    # 15000\nprint(tinh_tien(10, 2000))   # 20000\nprint(tinh_tien(7, 15000))   # 105000',
        },
        {
          kind: "note",
          text: "Hàm là khối lệnh có tên, định nghĩa bằng def tên_hàm(tham_số):. Định nghĩa hàm chỉ \"đăng kí\" tên và các bước làm — thân hàm chưa hề chạy. Chỉ khi gọi hàm (viết tên_hàm(đối_số)) thì thân hàm mới thực sự được thực thi. Python có sẵn nhiều hàm chuẩn như print(), len(), int(); ngoài ra người lập trình tự định nghĩa thêm các hàm riêng bằng def.",
        },
        {
          kind: "check",
          q: "Nếu Vy chỉ viết phần định nghĩa def tinh_tien(so_luong, don_gia): return so_luong * don_gia mà không gọi hàm này ở đâu cả, điều gì xảy ra khi chạy chương trình?",
          options: [
            "Không có phép tính nào được thực hiện, vì định nghĩa hàm chỉ đăng kí công thức chứ chưa chạy nó",
            "Python tự động gọi hàm này một lần với giá trị mặc định ngay khi chương trình chạy",
            "Chương trình báo lỗi vì định nghĩa hàm mà không gọi là không hợp lệ",
            "Thân hàm chạy lặp lại liên tục cho đến khi chương trình kết thúc",
          ],
          answer: 0,
          explain:
            "def chỉ tạo ra (định nghĩa) hàm, giống như viết sẵn một công thức — nó không tự động thực thi bất cứ điều gì. Thân hàm chỉ chạy khi có một lệnh gọi hàm rõ ràng ở đâu đó trong chương trình.",
        },
        {
          kind: "check",
          q: "Trong ba hàm print(), len(), int() và ba hàm tinh_tien(), chao_hoi(), ve_hinh(), nhóm nào là hàm CÓ SẴN của Python?",
          options: [
            "print(), len(), int() — vì đây là các hàm chuẩn đã được xây dựng sẵn trong Python",
            "tinh_tien(), chao_hoi(), ve_hinh() — vì tên hàm bằng tiếng Việt luôn là hàm có sẵn",
            "Cả sáu hàm trên đều là hàm có sẵn, không cần định nghĩa trước khi dùng",
            "Không hàm nào trong Python là có sẵn, mọi hàm đều phải tự định nghĩa bằng def",
          ],
          answer: 0,
          explain:
            "print(), len(), int() là các hàm chuẩn (built-in) có sẵn trong Python, dùng được ngay không cần định nghĩa. Các hàm như tinh_tien(), chao_hoi(), ve_hinh() là hàm do người lập trình tự viết bằng def, phải định nghĩa trước khi gọi.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "return-va-print",
      emoji: "↩️",
      heading: "return và print: trả giá trị hay chỉ hiển thị?",
      blocks: [
        {
          kind: "text",
          text: "Đây là điểm dễ nhầm lẫn nhất khi mới học hàm. **print(x)** chỉ đơn thuần **hiển thị** giá trị x lên màn hình cho người xem — giá trị đó sau khi hiện ra thì \"bay mất\", không lấy lại được để tính toán tiếp. **return x** thì khác hẳn: nó **trả giá trị x về đúng nơi đã gọi hàm**, để có thể gán vào biến hay đưa tiếp vào một biểu thức khác. Một hàm không có lệnh return (hoặc return không kèm giá trị) sẽ mặc định trả về **None** — nghĩa là \"không có gì\".",
        },
        {
          kind: "figure",
          diagram: "return-vs-print",
          caption: "Hình 26.2. print() dừng lại ở màn hình — return bay thẳng về nơi gọi để dùng tiếp",
        },
        {
          kind: "example",
          title: "Tình huống: Hai cách viết hàm, chỉ một cách dùng được tiếp",
          text: "Vy và bạn cùng nhóm tranh luận về cách viết hàm nhân đôi một số. Bạn Vy viết cach1 dùng lệnh in để hiện kết quả nhân đôi ra màn hình ngay. Bạn kia viết cach2 dùng lệnh return để trả kết quả nhân đôi về (xem đúng cú pháp hai hàm trong khối lệnh bên dưới). Cả hai hàm khi gọi riêng lẻ đều \"nhìn có vẻ chạy đúng\" vì số vẫn hiện ra. Nhưng khi cô giáo yêu cầu lấy kết quả nhân đôi rồi cộng thêm 10, chỉ cach2 làm được: kq = cach2(5) rồi print(kq + 10) cho ra 20. Còn nếu gọi kq = cach1(5), biến kq chỉ nhận được None (vì cach1 không hề có return), và phép tính kq + 10 sẽ báo lỗi ngay lập tức.",
        },
        {
          kind: "code",
          caption: "So sánh return và print khi cần dùng tiếp kết quả",
          code: 'def cach1(x):\n    print(x * 2)      # chỉ hiển thị, không trả giá trị\n\ndef cach2(x):\n    return x * 2      # trả giá trị về nơi gọi\n\nkq = cach2(5)\nprint(kq + 10)        # 20 — dùng tiếp được kết quả\n\nkq2 = cach1(5)\nprint(kq2)            # None — cach1 không có return',
        },
        {
          kind: "note",
          text: "print(x) chỉ hiển thị giá trị lên màn hình, không thể lấy lại để tính tiếp. return x trả giá trị về nơi gọi hàm, có thể gán vào biến hoặc dùng trong biểu thức khác. Một hàm không có return (hoặc chỉ viết return suông không kèm giá trị) sẽ trả về None theo mặc định.",
        },
        {
          kind: "check",
          q: "Vì sao khi gán kq = cach1(5) với cach1 chỉ dùng print(x * 2) mà không có return, biến kq lại nhận giá trị None?",
          options: [
            "Vì hàm không có lệnh return nào, nên Python tự động cho hàm trả về None theo mặc định",
            "Vì print() luôn trả về giá trị None bất kể có return hay không trong hàm",
            "Vì biến kq đã bị đặt sai kiểu dữ liệu trước khi gọi hàm",
            "Vì số 5 truyền vào không hợp lệ với hàm cach1",
          ],
          answer: 0,
          explain:
            "print(x * 2) chỉ hiển thị kết quả lên màn hình chứ không hề có lệnh return nào để đưa giá trị về nơi gọi. Khi một hàm thiếu return, Python mặc định coi như hàm đó trả về None — đó là lí do kq nhận được None thay vì con số mong đợi.",
        },
        {
          kind: "check",
          q: "Muốn viết một hàm để dùng kết quả của nó cho một phép tính khác ngay sau đó (ví dụ cộng thêm 10), nên dùng return hay print bên trong hàm?",
          options: [
            "return, vì giá trị được trả về nơi gọi và có thể tiếp tục sử dụng trong biểu thức khác",
            "print, vì giá trị hiển thị ra màn hình sẽ tự động được máy tính nhớ lại để dùng tiếp",
            "Dùng cách nào cũng được vì print và return luôn cho kết quả giống hệt nhau",
            "Phải dùng cả hai lệnh cùng lúc thì kết quả mới sử dụng tiếp được",
          ],
          answer: 0,
          explain:
            "Chỉ return mới đưa giá trị trở về nơi gọi hàm, cho phép gán vào biến hoặc đưa vào biểu thức tính toán tiếp theo. print() chỉ hiện giá trị cho người xem, giá trị đó không được lưu lại ở bất cứ đâu để dùng lần nữa.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "return-ket-thuc-ham",
      emoji: "🛑",
      heading: "return kết thúc hàm ngay lập tức",
      blocks: [
        {
          kind: "text",
          text: "Ngay khi chương trình chạy tới lệnh **return**, hàm **kết thúc ngay lập tức** và trả giá trị về nơi gọi — bất kì lệnh nào viết sau return, nếu vẫn còn nằm trong cùng thân hàm, sẽ **không bao giờ được thực hiện**. Đây là điều cần nhớ khi muốn chèn thêm lệnh in kiểm tra (debug) hay xử lí gì đó trước khi hàm kết thúc.",
        },
        {
          kind: "figure",
          diagram: "return-ket-thuc-ham",
          caption: "Hình 26.3. Vừa gặp return là hàm dừng ngay — lệnh phía sau thành \"code chết\"",
        },
        {
          kind: "example",
          title: "Tình huống: Dòng chữ \"Tính xong\" không bao giờ xuất hiện",
          text: "Viết hàm tính bình phương, Vy muốn thêm một dòng in \"Tính xong\" để biết hàm đã chạy xong, nhưng lại đặt nhầm nó ngay sau lệnh return. Chạy thử print(binh_phuong(5)), màn hình chỉ hiện đúng số 25 — dòng \"Tính xong\" không bao giờ xuất hiện, dù không hề có lỗi nào được báo. Vy nhận ra: return x * x đã kết thúc hàm ngay khi chạy tới, nên lệnh print(\"Tính xong\") phía sau vĩnh viễn không có cơ hội chạy. Muốn thấy được dòng thông báo đó, phải đặt nó lên TRƯỚC lệnh return.",
        },
        {
          kind: "code",
          caption: "Lệnh sau return không bao giờ được thực hiện",
          code: 'def binh_phuong(x):\n    return x * x\n    print("Tính xong")   # không bao giờ chạy tới đây\n\nprint(binh_phuong(5))    # chỉ in ra 25\n\n# Muốn in được "Tính xong", phải đặt TRƯỚC return:\ndef binh_phuong_2(x):\n    print("Tính xong")\n    return x * x',
        },
        {
          kind: "note",
          text: "return kết thúc việc thực hiện hàm ngay lập tức và trả giá trị về nơi gọi. Mọi lệnh viết sau return trong cùng thân hàm sẽ không bao giờ được thực hiện — đây là lỗi lôgic thường gặp khi sắp xếp sai thứ tự các lệnh trong hàm. Một hàm có thể có nhiều lệnh return ở các nhánh if khác nhau; hàm dừng lại ngay tại return đầu tiên được chạy tới.",
        },
        {
          kind: "check",
          q: "Vì sao dòng print(\"Tính xong\") đặt ngay sau return x * x trong hàm binh_phuong không bao giờ được in ra?",
          options: [
            "Vì return kết thúc hàm ngay lập tức, nên mọi lệnh phía sau nó trong cùng thân hàm không còn cơ hội chạy",
            "Vì Python coi đây là lỗi cú pháp nên tự động xoá dòng lệnh đó khi chạy",
            "Vì hàm binh_phuong chỉ được phép có tối đa một lệnh in duy nhất",
            "Vì lệnh print chỉ hoạt động được khi đặt trước mọi lệnh return trong toàn bộ chương trình",
          ],
          answer: 0,
          explain:
            "Ngay khi thực hiện đến return, hàm lập tức kết thúc và trả giá trị về nơi gọi — không có cơ chế nào cho phép chạy tiếp các lệnh còn lại phía sau trong cùng thân hàm, dù không hề có lỗi cú pháp nào ở đây.",
        },
        {
          kind: "check",
          q: "Muốn hàm binh_phuong vừa in ra dòng \"Tính xong\" vừa trả về đúng kết quả bình phương, Vy nên sắp xếp lại thứ tự các lệnh như thế nào?",
          options: [
            "Đặt print(\"Tính xong\") lên TRƯỚC lệnh return x * x",
            "Giữ nguyên thứ tự cũ vì thứ tự lệnh trong hàm không ảnh hưởng gì tới kết quả",
            "Xoá hẳn lệnh return đi thì print mới có cơ hội chạy được",
            "Viết cả hai lệnh trên cùng một dòng, cách nhau bởi dấu phẩy",
          ],
          answer: 0,
          explain:
            "Chỉ những lệnh đứng TRƯỚC return mới chắc chắn được thực hiện, vì return sẽ kết thúc hàm ngay khi chạy tới. Đặt print(\"Tính xong\") lên trước return x * x sẽ đảm bảo dòng thông báo được in ra trước khi hàm kết thúc và trả kết quả.",
        },
      ],
    },
  ],

  summary: [
    "**Hàm** là khối lệnh có tên, định nghĩa bằng **def tên_hàm(tham_số):**. Định nghĩa hàm chỉ đăng kí công thức, chưa chạy gì cả — chỉ khi **gọi hàm** (tên_hàm(đối_số)) thân hàm mới thực sự thực thi.",
    "**print(x)** chỉ hiển thị lên màn hình, không dùng lại được. **return x** trả giá trị về nơi gọi, gán được vào biến hoặc dùng tiếp trong biểu thức. Hàm không có return sẽ trả về **None**.",
    "**return kết thúc hàm ngay lập tức** — mọi lệnh viết sau return trong cùng thân hàm sẽ không bao giờ được thực hiện.",
    "Chia chương trình thành các hàm giúp: tránh lặp code, sửa một chỗ áp dụng mọi nơi, dễ đọc, dễ tìm lỗi, và thuận lợi khi chia việc làm nhóm.",
  ],
};

export default theory;
