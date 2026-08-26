import type { LessonTheory } from "@/lib/types";

// Bài 28. Phạm vi của biến
// SGK trang 142–145, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Vy giờ làm việc nhóm với các bạn để hoàn thiện chương trình quản lí quỹ dã ngoại — mỗi người viết một vài hàm riêng. Câu hỏi đặt ra: biến tạo trong một hàm có \"nhìn thấy\" được từ hàm khác không? Nếu hai bạn cùng đặt tên biến trùng nhau thì có sao không? Bài này trả lời bằng một hình ảnh rất dễ nhớ: mỗi hàm giống như một **căn phòng riêng** — biến tạo trong phòng nào chỉ tồn tại trong phòng đó.",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "bien-cuc-bo",
      emoji: "🚪",
      heading: "Biến cục bộ: sinh ra và mất đi cùng \"phòng riêng\" của hàm",
      blocks: [
        {
          kind: "text",
          text: "Một biến được tạo ra **bên trong** một hàm (kể cả tham số của hàm) gọi là **biến cục bộ**. Hãy tưởng tượng mỗi lần hàm được gọi là mở ra một **căn phòng riêng**: biến cục bộ chỉ \"sống\" trong căn phòng đó, và khi hàm kết thúc, căn phòng đóng lại — biến cục bộ biến mất hoàn toàn, không thể truy cập từ bên ngoài được nữa.",
        },
        {
          kind: "figure",
          diagram: "bien-cuc-bo-phong-rieng",
          caption: "Hình 28.1. Biến cục bộ chỉ tồn tại trong \"phòng riêng\" của hàm — ra khỏi phòng là biến mất",
        },
        {
          kind: "example",
          title: "Tình huống: Biến \"biến mất\" một cách khó hiểu",
          text: "Vy viết hàm tính diện tích hình tròn, tạo một biến trung gian bên trong hàm để lưu kết quả trước khi trả về. Sau khi gọi hàm, Vy thử in biến đó ra ngoài để kiểm tra nhanh — nhưng chương trình báo lỗi đỏ NameError, dù rõ ràng Vy vừa \"tạo\" biến đó trong hàm. Hoá ra biến trung gian ấy chỉ tồn tại trong \"căn phòng riêng\" của hàm; ngay khi hàm chạy xong, căn phòng đóng lại và biến bị xoá sạch — cái tên đó chưa từng tồn tại ở bên ngoài hàm.",
        },
        {
          kind: "code",
          caption: "Biến cục bộ không truy cập được từ bên ngoài hàm",
          code: 'def dien_tich(r):\n    dt = 3.14 * r * r   # dt là biến cục bộ, sinh ra trong "phòng" của hàm\n    return dt\n\ndien_tich(5)\nprint(dt)              # NameError: dt chỉ tồn tại bên trong hàm\n\n# Cách đúng: lấy kết quả qua return\nkq = dien_tich(5)\nprint(kq)              # 78.5',
        },
        {
          kind: "note",
          text: "Biến cục bộ là biến được tạo bên trong một hàm, kể cả các tham số của hàm. Biến cục bộ chỉ tồn tại từ lúc hàm được gọi đến khi hàm kết thúc — không thể truy cập từ bên ngoài hàm đó. Muốn dùng kết quả tính được bên trong hàm ở nơi khác, phải dùng return để đưa giá trị ra ngoài, rồi gán vào một biến ở đó.",
        },
        {
          kind: "check",
          q: "Vì sao lệnh print(dt) đặt ngay sau lời gọi dien_tich(5) lại báo lỗi NameError, dù dt vừa được tạo ra trong hàm?",
          options: [
            "Vì dt là biến cục bộ, chỉ tồn tại bên trong hàm dien_tich và đã bị huỷ ngay khi hàm kết thúc",
            "Vì tên biến dt là một từ khoá đặc biệt của Python, không được phép dùng làm tên biến",
            "Vì hàm dien_tich chưa được định nghĩa đúng cú pháp nên biến dt không sinh ra được",
            "Vì lệnh print chỉ hoạt động được với các biến toàn cục, không hoạt động với số thực",
          ],
          answer: 0,
          explain:
            "dt được tạo bên trong thân hàm nên là biến cục bộ — nó chỉ \"sống\" trong phạm vi căn phòng riêng của hàm dien_tich. Ngay khi hàm chạy xong, biến này bị huỷ, nên bên ngoài hàm, cái tên dt hoàn toàn chưa được định nghĩa.",
        },
        {
          kind: "check",
          q: "Muốn sử dụng được kết quả tính diện tích bên ngoài hàm dien_tich, Vy nên làm gì?",
          options: [
            "Dùng return để trả kết quả về, rồi gán vào một biến ở nơi gọi hàm, ví dụ kq = dien_tich(5)",
            "In biến dt ngay bên trong hàm là đủ, không cần làm gì thêm ở bên ngoài",
            "Đặt tên biến dt bằng chữ in hoa để nó tự động trở thành biến toàn cục",
            "Gọi lại hàm dien_tich thêm một lần nữa ngay trước lệnh print(dt)",
          ],
          answer: 0,
          explain:
            "Cách duy nhất để đưa một giá trị tính được bên trong hàm ra sử dụng ở nơi khác là dùng return, rồi gán kết quả đó cho một biến tại nơi gọi hàm — biến cục bộ dt vẫn sẽ bị huỷ như bình thường, nhưng giá trị của nó đã được \"mang ra ngoài\" trước khi điều đó xảy ra.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "bien-toan-cuc-va-global",
      emoji: "🌍",
      heading: "Biến toàn cục và cái bẫy \"gán trong hàm tạo biến MỚI\"",
      blocks: [
        {
          kind: "text",
          text: "Một biến khai báo **bên ngoài mọi hàm**, ở cấp chương trình chính, gọi là **biến toàn cục** — giống như đồ vật đặt ở **khu vực chung**, mọi hàm đều nhìn thấy và đọc được. Nhưng có một cái bẫy rất dễ mắc: nếu bên trong một hàm viết lệnh **gán** cho một biến trùng tên với biến toàn cục, Python sẽ hiểu đó là tạo ra một **biến cục bộ hoàn toàn mới**, \"che\" mất biến toàn cục — chứ không hề sửa đổi biến toàn cục gốc. Muốn thực sự thay đổi biến toàn cục từ bên trong hàm, phải khai báo **global tên_biến** trước khi gán.",
        },
        {
          kind: "figure",
          diagram: "bay-che-bien-toan-cuc",
          caption: "Hình 28.2. Thiếu global: gán trong hàm chỉ tạo biến cục bộ riêng — biến toàn cục vẫn y nguyên",
        },
        {
          kind: "example",
          title: "Tình huống: Quỹ lớp không chịu giảm dù đã \"trừ tiền\"",
          text: "Biến toàn cục quy = 500000 lưu tổng quỹ lớp. Vy viết một hàm để trừ bớt tiền mỗi khi chi tiêu, bên trong chỉ đơn giản viết quy = quy - 100000. Gọi hàm xong, Vy in biến quy ra kiểm tra thì thấy vẫn là 500000 — chẳng hề giảm chút nào! Hoá ra dòng lệnh quy = quy - 100000 bên trong hàm đã tạo ra một biến quy cục bộ hoàn toàn mới (chỉ tồn tại trong phòng riêng của hàm), không hề đụng chạm gì tới biến quy toàn cục ở ngoài. Sửa lại bằng cách thêm dòng global quy ngay đầu hàm, lúc này lệnh gán mới thực sự làm thay đổi biến toàn cục.",
        },
        {
          kind: "code",
          caption: "Thiếu global thì chỉ tạo biến cục bộ mới — có global mới sửa được biến toàn cục",
          code: 'quy = 500000\n\ndef chi_tieu_sai(so_tien):\n    quy = quy - so_tien   # tạo biến CỤC BỘ mới, không sửa quy toàn cục\n\ndef chi_tieu_dung(so_tien):\n    global quy             # khai báo rõ: quy này là biến toàn cục\n    quy = quy - so_tien   # giờ mới thực sự sửa quy toàn cục\n\nchi_tieu_dung(100000)\nprint(quy)              # 400000 — đã thay đổi đúng như mong đợi',
        },
        {
          kind: "note",
          text: "Biến toàn cục khai báo ở cấp chương trình chính, ngoài mọi hàm — các hàm đọc được giá trị của nó một cách bình thường. Nhưng nếu bên trong hàm có lệnh gán cho biến trùng tên, Python tự động tạo ra một biến cục bộ mới, không sửa đổi biến toàn cục. Muốn gán lại giá trị của biến toàn cục từ bên trong hàm, phải khai báo global tên_biến ở đầu thân hàm trước khi gán.",
        },
        {
          kind: "check",
          q: "Vì sao sau khi gọi hàm chi_tieu_sai(100000) (không có global), biến quy toàn cục vẫn giữ nguyên giá trị 500000?",
          options: [
            "Vì lệnh quy = quy - so_tien bên trong hàm đã tạo ra một biến quy cục bộ mới, hoàn toàn tách biệt với biến quy toàn cục",
            "Vì hàm chi_tieu_sai chưa từng được gọi nên chưa có phép tính nào xảy ra",
            "Vì Python không cho phép trừ một số ra khỏi biến toàn cục trong bất kì trường hợp nào",
            "Vì tham số so_tien đã bị truyền sai giá trị khi gọi hàm",
          ],
          answer: 0,
          explain:
            "Khi thấy lệnh gán cho quy bên trong thân hàm mà không có khai báo global, Python mặc định coi đó là một biến cục bộ mới — nó chỉ tồn tại trong phạm vi hàm và hoàn toàn không liên quan tới biến quy toàn cục ở ngoài, nên biến toàn cục không hề bị thay đổi.",
        },
        {
          kind: "check",
          q: "Muốn một lệnh gán bên trong hàm thực sự làm thay đổi giá trị của biến toàn cục, cần thêm khai báo nào ở đầu thân hàm?",
          options: ["global tên_biến", "local tên_biến", "public tên_biến", "static tên_biến"],
          answer: 0,
          explain:
            "Từ khoá global báo cho Python biết: biến được gán trong hàm chính là biến toàn cục đã có, không phải tạo biến cục bộ mới. Python không có các từ khoá local, public hay static như một số ngôn ngữ lập trình khác.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "doc-lap-giua-cac-ham",
      emoji: "🧱",
      heading: "Mỗi hàm là một \"phòng\" độc lập — an toàn khi làm việc nhóm",
      blocks: [
        {
          kind: "text",
          text: "Vì mỗi hàm có \"phòng riêng\" của mình, **hai hàm khác nhau hoàn toàn có thể dùng chung một tên biến cục bộ** (ví dụ cùng dùng i làm biến đếm trong vòng lặp for) mà không hề xảy ra xung đột — chúng là hai biến độc lập, sống trong hai căn phòng khác nhau. Đây chính là lí do nhiều người có thể cùng viết hàm cho một dự án chung mà không cần lo trùng tên biến với nhau.",
        },
        {
          kind: "figure",
          diagram: "doc-lap-giua-cac-ham",
          caption: "Hình 28.3. Biến cục bộ trong hai hàm khác nhau là hai \"căn phòng\" tách biệt, dù trùng tên",
        },
        {
          kind: "example",
          title: "Tình huống: Cả nhóm lo lắng trùng tên biến, hoá ra thừa lo",
          text: "Làm việc nhóm, Vy viết hàm đếm số ngày trời nắng dùng biến i để duyệt danh sách, còn bạn khác viết hàm tính tổng số tiền quỹ mỗi ngày cũng dùng đúng biến i để duyệt. Trước khi ghép code lại, cả nhóm lo lắng \"trùng tên biến thế này chắc sẽ loạn hết\". Nhưng khi chạy thử, chương trình vẫn cho kết quả đúng hoàn toàn — biến i trong hàm của Vy và biến i trong hàm của bạn kia là hai biến cục bộ hoàn toàn tách biệt, mỗi hàm chỉ nhìn thấy đúng biến i trong phòng riêng của chính nó.",
        },
        {
          kind: "code",
          caption: "Hai hàm khác nhau dùng chung tên biến cục bộ vẫn an toàn tuyệt đối",
          code: 'def dem_chan(a):\n    d = 0\n    for i in a:\n        if i % 2 == 0:\n            d = d + 1\n    return d\n\ndef tinh_tong(a):\n    s = 0\n    for i in a:\n        s = s + i\n    return s\n\nds = [1, 2, 3, 4]\nprint(dem_chan(ds), tinh_tong(ds))   # 2 10 — hai biến i không hề "đụng" nhau',
        },
        {
          kind: "text",
          text: "Một hệ quả quan trọng khác của tính cục bộ: khi truyền một biến làm đối số cho hàm, hàm chỉ nhận được **một bản sao giá trị** vào tham số (biến cục bộ) của nó. Thay đổi giá trị của tham số bên trong hàm **không hề ảnh hưởng** tới biến gốc ở nơi gọi hàm.",
        },
        {
          kind: "code",
          caption: "Thay đổi tham số bên trong hàm không làm biến gốc bên ngoài thay đổi",
          code: 'def tang(n):\n    n = n + 1   # chỉ đổi bản sao cục bộ n, không đụng tới biến gốc\n    return n\n\na = 7\ntang(a)\nprint(a)        # vẫn là 7 — biến a bên ngoài không hề thay đổi\n\na = tang(a)     # muốn a thực sự tăng, phải gán lại kết quả trả về\nprint(a)        # 8',
        },
        {
          kind: "note",
          text: "Biến cục bộ ở các hàm khác nhau hoàn toàn độc lập, kể cả khi trùng tên — nhờ vậy nhiều người có thể cùng viết hàm cho một chương trình mà không sợ xung đột tên biến. Khi truyền biến làm đối số, hàm chỉ nhận một bản sao giá trị vào tham số cục bộ của nó; thay đổi tham số bên trong hàm không làm biến gốc ở nơi gọi thay đổi theo — muốn biến gốc thay đổi, phải gán lại giá trị hàm trả về cho biến đó.",
        },
        {
          kind: "check",
          q: "Hai hàm dem_chan(a) và tinh_tong(a) đều dùng biến i làm biến đếm trong vòng lặp for. Điều gì xảy ra khi ghép cả hai hàm vào cùng một chương trình?",
          options: [
            "Không có xung đột gì cả, vì biến i trong mỗi hàm là biến cục bộ độc lập, chỉ tồn tại trong phòng riêng của hàm đó",
            "Chương trình báo lỗi trùng tên biến ngay khi định nghĩa hàm thứ hai",
            "Hai hàm sẽ dùng chung đúng một giá trị i, gây ra kết quả sai",
            "Python tự động đổi tên biến i ở hàm được định nghĩa sau thành một tên khác",
          ],
          answer: 0,
          explain:
            "Biến i trong dem_chan và biến i trong tinh_tong là hai biến cục bộ hoàn toàn tách biệt, mỗi hàm có phạm vi riêng của mình — trùng tên hoàn toàn không gây ra bất kì xung đột nào.",
        },
        {
          kind: "check",
          q: "Với hàm tang(n): n = n + 1; return n, sau khi thực hiện a = 7 rồi tang(a) (không gán lại kết quả), giá trị của a lúc này là bao nhiêu?",
          options: [
            "7, vì hàm chỉ thay đổi bản sao cục bộ n, không làm thay đổi biến a ở bên ngoài",
            "8, vì hàm đã cộng thêm 1 trực tiếp vào biến a truyền vào",
            "None, vì lời gọi tang(a) không được gán cho biến nào",
            "Chương trình báo lỗi vì hàm có return mà không được sử dụng kết quả",
          ],
          answer: 0,
          explain:
            "Khi gọi tang(a), giá trị của a được sao chép vào tham số cục bộ n. Lệnh n = n + 1 chỉ thay đổi bản sao n bên trong hàm; biến a ở bên ngoài hoàn toàn không bị ảnh hưởng. Muốn a thực sự tăng thêm 1, phải viết a = tang(a) để gán lại giá trị hàm trả về.",
        },
      ],
    },
  ],

  summary: [
    "**Biến cục bộ** được tạo bên trong hàm (kể cả tham số), chỉ tồn tại từ lúc gọi hàm đến khi hàm kết thúc — không truy cập được từ bên ngoài, dùng ngoài hàm sẽ gây lỗi NameError.",
    "**Biến toàn cục** khai báo ngoài mọi hàm, các hàm đọc được bình thường. Nhưng gán cho biến trùng tên BÊN TRONG hàm sẽ tạo ra một biến cục bộ MỚI, không sửa biến toàn cục — muốn sửa thật sự phải khai báo **global tên_biến**.",
    "Biến cục bộ ở các hàm khác nhau **hoàn toàn độc lập**, kể cả khi trùng tên — an toàn khi nhiều người cùng viết hàm cho một chương trình.",
    "Truyền biến làm đối số chỉ đưa một **bản sao giá trị** vào tham số cục bộ — thay đổi tham số bên trong hàm không làm biến gốc bên ngoài thay đổi theo.",
  ],
};

export default theory;
