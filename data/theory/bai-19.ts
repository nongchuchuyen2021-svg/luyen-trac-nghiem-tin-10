import type { LessonTheory } from "@/lib/types";

// Bài 19. Câu lệnh điều kiện if
// SGK trang 97–101, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Mọi chương trình thú vị đều phải biết \"tuỳ cơ ứng biến\" — làm việc này nếu đúng, làm việc khác nếu sai. Bài này theo chân bạn Thảo đi công viên giải trí, nơi mỗi cổng trò chơi đều có một quy định riêng: cổng thì chỉ hỏi một câu, cổng thì phân loại theo nhiều mức, cổng thì đòi hỏi tới hai điều kiện cùng lúc. Đó chính xác là cách câu lệnh **if** hoạt động trong Python.",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "if-don",
      emoji: "🎢",
      heading: "Câu lệnh if: rẽ nhánh khi điều kiện đúng",
      blocks: [
        {
          kind: "text",
          text: "Câu lệnh **if** kiểm tra một điều kiện — một biểu thức so sánh chỉ có thể đúng (True) hoặc sai (False). Nếu điều kiện **đúng**, khối lệnh thụt lề bên trong if được thực hiện; nếu **sai**, toàn bộ khối đó bị bỏ qua, chương trình đi thẳng xuống câu lệnh tiếp theo. Cú pháp bắt buộc có dấu **hai chấm** ở cuối dòng điều kiện, và khối lệnh bên trong phải **thụt lề** thống nhất — đây là điểm khác biệt lớn nhất của Python so với nhiều ngôn ngữ khác vốn dùng ngoặc nhọn.",
        },
        {
          kind: "figure",
          diagram: "if-don-luu-do",
          caption: "Hình 19.1. Lưu đồ if đơn: đúng thì rẽ vào, sai thì đi thẳng qua",
        },
        {
          kind: "example",
          title: "Tình huống: Cổng tàu lượn siêu tốc",
          text: "Công viên giải trí có tấm biển to trước cổng tàu lượn: \"Chỉ phục vụ khách cao từ 140cm trở lên\". Bạn Thảo tưởng tượng ngay đây chính là một câu lệnh if: nếu chiều cao đạt yêu cầu, cổng mở và bạn được vào chơi; nếu không đạt, chẳng có gì xảy ra cả — bạn chỉ đơn giản không được vào, chương trình (và cả buổi đi chơi) vẫn tiếp tục bình thường ở trò khác.",
        },
        {
          kind: "code",
          caption: "Chương trình kiểm tra điều kiện lên tàu lượn",
          code: 'chieu_cao = float(input("Chiều cao của bạn (cm): "))\nif chieu_cao >= 140:\n    print("🎢 Được lên tàu lượn!")',
        },
        {
          kind: "note",
          text: "Câu lệnh if kiểm tra một điều kiện; nếu đúng (True) thì thực hiện khối lệnh thụt lề bên trong, nếu sai (False) thì bỏ qua toàn bộ khối đó. Cú pháp: if <điều kiện>: rồi xuống dòng, khối lệnh bên trong phải thụt lề thống nhất (thường 4 dấu cách). Thiếu dấu hai chấm hoặc thụt lề sai đều gây lỗi.",
        },
        {
          kind: "check",
          q: "Với chương trình kiểm tra lên tàu lượn ở trên, nếu Thảo nhập chiều cao 138, điều gì xảy ra?",
          options: [
            "Không có gì được in ra, vì điều kiện chiều cao từ 140cm trở lên là sai",
            "Chương trình vẫn in ra dòng \"Được lên tàu lượn!\" như bình thường",
            "Chương trình báo lỗi vì 138 nhỏ hơn giá trị so sánh trong điều kiện",
            "Chương trình tự động làm tròn 138 thành 140 rồi cho qua",
          ],
          answer: 0,
          explain:
            "138 >= 140 là sai (False), nên khối lệnh in ra bên trong if bị bỏ qua hoàn toàn — chương trình kết thúc mà không in gì cả, không phải là lỗi.",
        },
        {
          kind: "check",
          q: "Trong Python, điều gì bắt buộc phải có ngay sau điều kiện của câu lệnh if?",
          options: ["Dấu hai chấm (:)", "Dấu chấm phẩy (;)", "Từ khoá then", "Cặp ngoặc nhọn { }"],
          answer: 0,
          explain:
            "Python yêu cầu dấu hai chấm ngay sau điều kiện, sau đó khối lệnh bên trong được xác định bằng cách thụt lề — không dùng then, dấu chấm phẩy hay ngoặc nhọn như một số ngôn ngữ khác.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "if-elif-else",
      emoji: "🎡",
      heading: "if-else và if-elif-else: nhiều nhánh rẽ",
      blocks: [
        {
          kind: "text",
          text: "Khi cần một phương án dự phòng cho trường hợp điều kiện sai, ta thêm nhánh **else**. Khi có nhiều hơn hai khả năng cần phân loại, ta dùng thêm các nhánh **elif** (viết tắt của \"else if\") ở giữa. Máy sẽ kiểm tra các điều kiện **lần lượt từ trên xuống**; ngay khi gặp điều kiện đầu tiên đúng, nó thực hiện đúng nhánh đó rồi **bỏ qua tất cả** các nhánh elif/else còn lại phía sau — dù chúng có đúng hay không.",
        },
        {
          kind: "figure",
          diagram: "if-elif-else-luu-do",
          caption: "Hình 19.2. Lưu đồ if-elif-else: ba mức chiều cao, ba con đường khác nhau",
        },
        {
          kind: "example",
          title: "Tình huống: Khu Đu quay Ngựa gỗ có ba mức quy định",
          text: "Bạn của Thảo, em Bống, muốn chơi Đu quay Ngựa gỗ — khu này có quy định chi tiết hơn tàu lượn: dưới 120cm thì không được chơi vì quá nguy hiểm; từ 120cm đến dưới 140cm thì được chơi nhưng bắt buộc có người lớn ngồi cùng; còn từ 140cm trở lên thì được chơi hoàn toàn tự do. Đây là đúng một bài toán ba nhánh: chỉ cần đúng MỘT trong ba trường hợp xảy ra cho mỗi bạn, không thể vừa \"không được chơi\" vừa \"chơi tự do\" cùng lúc.",
        },
        {
          kind: "code",
          caption: "Chương trình phân loại ba mức chiều cao ở khu Đu quay Ngựa gỗ",
          code: 'chieu_cao = float(input("Chiều cao (cm): "))\nif chieu_cao < 120:\n    print("🚫 Không được chơi")\nelif chieu_cao < 140:\n    print("👨‍👩‍👧 Đi cùng người lớn")\nelse:\n    print("✅ Được chơi tự do")',
        },
        {
          kind: "note",
          text: "if-else có hai nhánh loại trừ nhau: đúng thì vào if, sai thì vào else. if-elif-else xét nhiều điều kiện theo thứ tự từ trên xuống, thực hiện đúng nhánh đầu tiên có điều kiện đúng rồi bỏ qua toàn bộ phần còn lại — kể cả khi các điều kiện phía sau cũng đúng. Chỉ duy nhất một nhánh được chạy trong mỗi lần thực hiện.",
        },
        {
          kind: "check",
          q: "Em Bống cao 125cm đến chơi Đu quay Ngựa gỗ. Chương trình sẽ in ra thông báo nào?",
          options: [
            "👨‍👩‍👧 Đi cùng người lớn",
            "🚫 Không được chơi",
            "✅ Được chơi tự do",
            "Cả ba thông báo cùng lúc",
          ],
          answer: 0,
          explain:
            "125 < 120 là sai nên bỏ qua nhánh đầu; 125 < 140 là đúng nên chương trình in \"Đi cùng người lớn\" rồi dừng lại, không xét tiếp nhánh else nữa.",
        },
        {
          kind: "check",
          q: "Vì sao trong cấu trúc if-elif-else, dù cả điều kiện của elif và của else đều \"có vẻ đúng\" trên lý thuyết, chương trình vẫn chỉ in ra đúng một thông báo?",
          options: [
            "Vì máy kiểm tra từ trên xuống, gặp điều kiện đúng đầu tiên là dừng lại, các nhánh sau không được xét nữa",
            "Vì else không bao giờ đúng nếu chương trình đã có elif ở phía trước nó",
            "Vì Python chỉ cho phép tối đa một elif trong toàn bộ chương trình",
            "Vì chương trình chọn ngẫu nhiên một trong các nhánh có điều kiện đúng để in ra",
          ],
          answer: 0,
          explain:
            "Cấu trúc if-elif-else không kiểm tra hết mọi điều kiện rồi mới quyết định — nó dừng lại NGAY khi tìm thấy điều kiện đúng đầu tiên, nên luôn chỉ có đúng một nhánh được thực hiện trong một lần chạy.",
        },
        {
          kind: "check",
          q: "Nếu đổi thứ tự chương trình thành kiểm tra chiều cao từ 140cm trở lên trước, sau đó mới kiểm tra dưới 120cm, kết quả phân loại chung cuộc có thay đổi không?",
          options: [
            "Không, vì ba điều kiện này không chồng lấn nhau nên mỗi chiều cao vẫn chỉ khớp đúng một nhánh",
            "Có, vì thứ tự các nhánh elif luôn làm thay đổi mọi kết quả phân loại",
            "Có, vì Python bắt buộc phải kiểm tra điều kiện nhỏ nhất trước tiên",
            "Không xác định được nếu không chạy thử chương trình trên máy tính",
          ],
          answer: 0,
          explain:
            "Ba khoảng chiều cao (dưới 120, từ 120 đến dưới 140, từ 140 trở lên) không hề chồng lấn nhau — mỗi chiều cao chỉ rơi đúng vào một khoảng, nên đổi thứ tự viết các nhánh không làm thay đổi kết quả phân loại cuối cùng.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "and-or-not",
      emoji: "🔀",
      heading: "Kết hợp nhiều điều kiện: and, or, not",
      blocks: [
        {
          kind: "text",
          text: "Nhiều quy định thực tế không chỉ dựa vào một điều kiện. Python cho phép kết hợp nhiều điều kiện lại bằng ba toán tử lôgic: **and** (và) chỉ đúng khi **cả hai** vế cùng đúng; **or** (hoặc) đúng khi **ít nhất một** vế đúng; **not** (phủ định) đảo ngược đúng thành sai và ngược lại. Kết hợp với các phép so sánh quen thuộc (==, !=, <, >, <=, >=), ta diễn đạt được hầu hết mọi quy định phức tạp trong đời sống.",
        },
        {
          kind: "figure",
          diagram: "and-or-gates",
          caption: "Hình 19.3. and giống hai cổng phải qua hết cả hai — or giống hai cổng chỉ cần qua một",
        },
        {
          kind: "example",
          title: "Tình huống: Phao lướt nước đôi và ưu đãi vé sinh nhật",
          text: "Trò \"Phao lướt nước đôi\" đòi hỏi khách vừa đủ chiều cao an toàn, vừa nằm trong giới hạn cân nặng cho phép của phao — thiếu một trong hai điều kiện đều không được chơi, y hệt phải đi qua hai cổng kiểm tra nối tiếp nhau. Ở quầy vé, công viên còn có ưu đãi miễn phí vé cho khách có thẻ thành viên HOẶC đúng vào ngày sinh nhật của khách — chỉ cần thoả một trong hai điều kiện là được miễn phí ngay, giống như hai cổng đặt song song, mở một trong hai là qua được.",
        },
        {
          kind: "code",
          caption: "Hai quy định của công viên viết bằng and và or",
          code: 'if chieu_cao >= 120 and can_nang <= 60:\n    print("✅ Được chơi Phao lướt nước đôi")\n\nif the_thanh_vien or la_ngay_sinh_nhat:\n    print("🎉 Miễn phí vé vào cổng")',
        },
        {
          kind: "note",
          text: "and chỉ đúng khi cả hai điều kiện cùng đúng; or đúng khi ít nhất một điều kiện đúng; not đảo ngược giá trị đúng/sai của một điều kiện. Các phép so sánh ==, !=, <, >, <=, >= luôn trả về giá trị đúng hoặc sai, dùng làm điều kiện cho if. Dùng dấu ngoặc để nhóm rõ các điều kiện khi kết hợp nhiều toán tử lôgic trong cùng một biểu thức.",
        },
        {
          kind: "check",
          q: "Một bạn cao 130cm và nặng 65kg muốn chơi Phao lướt nước đôi (yêu cầu chiều cao từ 120cm trở lên VÀ cân nặng tối đa 60kg). Bạn đó có được chơi không?",
          options: [
            "Không, vì tuy đủ chiều cao nhưng cân nặng vượt quá giới hạn cho phép nên điều kiện and sai",
            "Có, vì chỉ cần một trong hai điều kiện đúng là được chơi",
            "Có, vì cân nặng không ảnh hưởng gì tới việc chơi Phao lướt nước đôi",
            "Không xác định được nếu thiếu thông tin về độ tuổi của bạn đó",
          ],
          answer: 0,
          explain:
            "and yêu cầu CẢ HAI điều kiện cùng đúng. Dù chiều cao 130 đạt yêu cầu (đúng), cân nặng 65kg vượt quá giới hạn 60kg (sai) — một vế sai khiến cả biểu thức and trở thành sai, nên bạn đó không được chơi.",
        },
        {
          kind: "check",
          q: "Một bạn không có thẻ thành viên nhưng hôm đó đúng là sinh nhật của bạn. Theo quy định miễn phí vé (có thẻ thành viên HOẶC đúng ngày sinh nhật), bạn đó có được miễn phí vé không?",
          options: [
            "Có, vì or chỉ cần một trong hai điều kiện đúng là cả biểu thức đúng",
            "Không, vì thiếu điều kiện có thẻ thành viên nên bị từ chối miễn phí",
            "Không, vì phải thoả mãn đồng thời cả hai điều kiện mới được miễn phí",
            "Chỉ được giảm giá một nửa chứ không được miễn phí hoàn toàn",
          ],
          answer: 0,
          explain:
            "or chỉ cần ít nhất một vế đúng là cả biểu thức đúng. Dù không có thẻ thành viên (sai), việc đúng ngày sinh nhật (đúng) đã đủ khiến biểu thức or trở thành đúng, nên bạn đó vẫn được miễn phí vé.",
        },
        {
          kind: "check",
          q: "Biểu thức not (chieu_cao >= 140) tương đương với điều kiện nào sau đây?",
          options: ["chieu_cao < 140", "chieu_cao > 140", "chieu_cao == 140", "chieu_cao <= 140"],
          answer: 0,
          explain:
            "not đảo ngược giá trị đúng/sai. Phủ định của \"lớn hơn hoặc bằng 140\" chính là \"nhỏ hơn 140\" — not làm mất đi cả trường hợp bằng 140 khỏi phía đúng ban đầu.",
        },
      ],
    },
  ],

  summary: [
    "Câu lệnh **if** kiểm tra điều kiện: đúng thì thực hiện khối lệnh thụt lề bên trong, sai thì bỏ qua. Cú pháp bắt buộc dấu hai chấm và thụt lề thống nhất.",
    "**if-else** có hai nhánh loại trừ nhau. **if-elif-else** xét nhiều điều kiện từ trên xuống, chỉ thực hiện đúng nhánh đầu tiên có điều kiện đúng rồi bỏ qua phần còn lại.",
    "**and** cần cả hai điều kiện cùng đúng (như hai cổng nối tiếp); **or** chỉ cần một điều kiện đúng (như hai cổng song song); **not** đảo ngược đúng/sai.",
    "Các phép so sánh ==, !=, <, >, <=, >= trả về đúng/sai, dùng làm điều kiện cho if — nhớ dùng == để so sánh, không nhầm với = là lệnh gán.",
  ],
};

export default theory;
