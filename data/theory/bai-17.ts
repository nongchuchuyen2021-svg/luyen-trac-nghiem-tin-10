import type { LessonTheory } from "@/lib/types";

// Bài 17. Biến và lệnh gán
// SGK trang 87–91, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Muốn máy tính nhớ một con số, một cái tên, một kết quả để dùng lại về sau, ta cần một chiếc \"hộp\" có nhãn để cất giữ nó — đó chính là **biến**. Bài này giúp em hiểu bản chất của biến và lệnh gán, nắm vững quy tắc đặt tên trong Python, và làm chủ các phép toán số học — nền tảng bắt buộc trước khi viết bất kì chương trình nào phức tạp hơn.",
  minutes: 9,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "bien-va-lenh-gan",
      emoji: "📦",
      heading: "Biến và lệnh gán",
      blocks: [
        {
          kind: "text",
          text: "**Biến** là tên đặt cho một vùng nhớ dùng để lưu giá trị; giá trị đó có thể thay đổi trong quá trình chương trình chạy. Để tạo biến và gán giá trị cho nó, Python dùng **lệnh gán** với kí hiệu dấu bằng (=): tên biến đặt bên trái, biểu thức cần tính đặt bên phải. Điều dễ gây nhầm lẫn nhất: dấu = trong lập trình **không phải** phép so sánh \"bằng nhau\" như trong toán học — máy sẽ tính giá trị của biểu thức bên phải trước, rồi mới lưu kết quả đó vào biến bên trái.",
        },
        {
          kind: "figure",
          diagram: "bien-va-gan",
          caption: "Hình 17.1. Biến đổi giá trị qua từng lệnh gán — không phải phương trình toán học",
        },
        {
          kind: "example",
          title: "Tình huống: Sơn quản lí quỹ lớp bằng ba lệnh gán",
          text: "Lớp 10A2 gây quỹ ủng hộ bạn khó khăn. Sơn được giao ghi sổ, quyết định viết luôn vài dòng Python để khỏi cộng nhầm: dòng đầu tạo biến quy và gán giá trị 0 (ban đầu quỹ trống); dòng thứ hai, quy = quy + 500000 sau khi cả lớp góp mỗi bạn 12,5 nghìn; dòng thứ ba, quy = quy - 200000 sau khi mua tặng phẩm. Nhìn dòng lệnh quy = quy + 500000, một bạn thắc mắc: \"quy sao lại bằng chính nó cộng thêm được?\" Sơn giải thích: đây không phải phương trình cần giải, mà là lệnh yêu cầu máy tính lấy giá trị quy đang có, cộng thêm số tiền mới, rồi cất kết quả trở lại đúng vào biến quy — giá trị cũ bị thay bởi giá trị mới, không hề mâu thuẫn gì cả.",
        },
        {
          kind: "example",
          title: "Tình huống: Tiền lì xì Tết và bản sao không dính líu tới nhau",
          text: "Mùng Một Tết, bạn Vinh được mừng tuổi và lưu ngay vào biến vi = 200000. Muốn nhớ lại đúng số tiền ban đầu để cuối kì đối chiếu xem mình đã tiêu bao nhiêu, Vinh tạo thêm một biến ban_dau rồi gán ban_dau = vi — lúc này ban_dau cũng mang giá trị 200000, y hệt vi. Vài hôm sau, Vinh tiêu 50 nghìn mua sách và cập nhật vi = vi - 50000, nên vi chỉ còn 150000. Vinh ngạc nhiên khi kiểm tra lại ban_dau: nó vẫn giữ nguyên 200000, không hề bị trừ theo! Lệnh ban_dau = vi chỉ sao chép giá trị của vi tại đúng khoảnh khắc gán, chứ không tạo ra một \"sợi dây\" luôn buộc hai biến dính chặt vào nhau mãi mãi — đổi biến này về sau, biến kia vẫn đứng yên.",
        },
        {
          kind: "note",
          text: "Biến là tên của vùng nhớ lưu giá trị, giá trị có thể thay đổi được. Lệnh gán dùng dấu = : tính biểu thức bên phải trước, rồi lưu kết quả vào biến bên trái. Một biến có thể được gán lại nhiều lần trong cùng chương trình. Khi sao chép giá trị của một biến sang biến khác (như ban_dau = vi), hai biến trở thành độc lập — đổi biến này sau đó không làm thay đổi biến kia.",
        },
        {
          kind: "check",
          q: "Sau khi thực hiện lệnh quy = quy + 500000 với quy đang có giá trị 0 từ trước, giá trị mới của quy là bao nhiêu?",
          options: ["500000", "0", "Báo lỗi vì quy không thể bằng chính nó cộng thêm", "1000000"],
          answer: 0,
          explain:
            "Máy tính lấy giá trị hiện tại của quy (là 0), cộng thêm 500000, rồi lưu kết quả 500000 trở lại vào biến quy. Đây là lệnh gán hợp lệ và rất phổ biến, không phải phương trình cần giải.",
        },
        {
          kind: "check",
          q: "Vinh gán vi = 200000, rồi ban_dau = vi, sau đó cập nhật vi = vi - 50000. Hỏi lúc này biến ban_dau có giá trị bao nhiêu?",
          options: [
            "200000, vì ban_dau đã sao chép giá trị của vi tại thời điểm gán, không đổi theo vi về sau",
            "150000, vì ban_dau luôn tự động cập nhật theo giá trị mới nhất của vi",
            "0, vì lệnh ban_dau = vi không có tác dụng gì trong Python",
            "Báo lỗi vì không thể gán giá trị của một biến cho biến khác",
          ],
          answer: 0,
          explain:
            "Lệnh ban_dau = vi chỉ sao chép giá trị của vi (là 200000) vào ban_dau tại đúng thời điểm đó. Sau đó hai biến hoàn toàn độc lập — thay đổi vi không ảnh hưởng tới giá trị đã lưu trong ban_dau.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "quy-tac-dat-ten",
      emoji: "🏷️",
      heading: "Quy tắc đặt tên biến trong Python",
      blocks: [
        {
          kind: "text",
          text: "Không phải cái tên nào cũng đặt được cho biến. Python quy định: tên biến chỉ gồm **chữ cái, chữ số và dấu gạch dưới**; **không được bắt đầu bằng chữ số**; **không được chứa dấu cách**; và **không được trùng với từ khoá** của ngôn ngữ (như if, for, class…). Một điểm quan trọng khác: Python **phân biệt chữ hoa và chữ thường**, nên diem, Diem và DIEM là ba biến hoàn toàn khác nhau.",
        },
        {
          kind: "figure",
          diagram: "quy-tac-dat-ten",
          caption: "Hình 17.2. Tên biến hợp lệ và không hợp lệ — cùng mẹo hoán đổi giá trị trong một dòng",
        },
        {
          kind: "list",
          items: [
            "Chỉ gồm **chữ cái, chữ số, dấu gạch dưới** — không kí tự đặc biệt, không dấu cách",
            "**Không bắt đầu bằng chữ số** (ví dụ 2diem là sai, phải viết diem2)",
            "**Không trùng từ khoá** của Python (if, for, while, class, print…)",
            "**Phân biệt hoa/thường**: diem và Diem là hai biến khác nhau",
            "Python cho phép **gán đồng thời** nhiều biến trong một dòng, ví dụ a, b = 3, 7",
          ],
        },
        {
          kind: "example",
          title: "Tình huống: Cả nhóm tranh cãi khi đặt tên biến cho bảng điểm",
          text: "Làm chương trình quản lí điểm cho tổ, ba bạn đề xuất ba cách đặt tên khác nhau cho biến lưu điểm môn Toán của bạn Lâm. Bạn thứ nhất gõ 2diem_lam — báo lỗi ngay vì tên bắt đầu bằng chữ số. Bạn thứ hai gõ diem toan lam — cũng báo lỗi vì có khoảng trắng ở giữa. Bạn thứ ba đề xuất diem_toan_lam — chạy trơn tru, đúng chuẩn. Cả nhóm còn phát hiện một mẹo hay: thay vì viết hai dòng riêng để đổi chỗ điểm giữa hai bạn, Python cho phép hoán đổi giá trị của hai biến chỉ trong đúng một dòng lệnh duy nhất, không cần biến trung gian nào cả.",
        },
        {
          kind: "note",
          text: "Tên biến hợp lệ trong Python: chỉ gồm chữ cái, chữ số, dấu gạch dưới; không bắt đầu bằng chữ số; không chứa dấu cách; không trùng từ khoá; phân biệt chữ hoa/thường. Python hỗ trợ gán đồng thời nhiều biến trong một dòng, kể cả hoán đổi giá trị hai biến cho nhau mà không cần biến trung gian.",
        },
        {
          kind: "check",
          q: "Tên biến nào sau đây KHÔNG hợp lệ trong Python?",
          options: ["diem toan", "diem_toan", "diemToan2", "diem_2"],
          answer: 0,
          explain:
            "Tên biến không được chứa dấu cách. diem_toan, diemToan2 và diem_2 đều đúng quy tắc: chỉ gồm chữ cái, chữ số, dấu gạch dưới và không bắt đầu bằng chữ số.",
        },
        {
          kind: "check",
          q: "Trong Python, hai biến diem và Diem có phải là cùng một biến hay không?",
          options: [
            "Không, vì Python phân biệt chữ hoa và chữ thường trong tên biến",
            "Có, vì Python coi chữ hoa và chữ thường là như nhau",
            "Tuỳ vào phiên bản Python đang sử dụng để chạy chương trình",
            "Không xác định được cho đến khi chương trình chạy xong",
          ],
          answer: 0,
          explain:
            "Python phân biệt chữ hoa/chữ thường (case-sensitive): diem, Diem và DIEM là ba biến hoàn toàn độc lập với nhau, dù chữ cái giống nhau.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "phep-toan-so-hoc",
      emoji: "🧮",
      heading: "Các phép toán số học trong Python",
      blocks: [
        {
          kind: "text",
          text: "Python cung cấp đầy đủ các phép toán số học quen thuộc — cộng, trừ, nhân, chia — cùng với ba phép toán đặc biệt rất hay dùng: phép **chia lấy phần nguyên**, phép **chia lấy phần dư**, và phép **luỹ thừa**. Một điều cần nhớ: phép chia thông thường trong Python **luôn cho ra số thực**, ngay cả khi hai số chia hết cho nhau.",
        },
        {
          kind: "figure",
          diagram: "phep-toan-python",
          caption: "Hình 17.3. Bảy phép toán số học và độ ưu tiên thực hiện trong Python",
        },
        {
          kind: "code",
          caption: "Bảy phép toán số học trong Python — chạy thử ở chế độ tương tác >>>",
          code: "5 + 3    # 8    (phép cộng)\n5 - 3    # 2    (phép trừ)\n5 * 3    # 15   (phép nhân)\n5 / 2    # 2.5  (phép chia, luôn cho kết quả số thực)\n5 // 2   # 2    (chia lấy phần nguyên)\n5 % 2    # 1    (chia lấy phần dư)\n2 ** 3   # 8    (luỹ thừa: 2 nhân với chính nó 3 lần)",
        },
        {
          kind: "example",
          title: "Tình huống: Chia bánh trại hè và huyền thoại hạt gạo trên bàn cờ",
          text: "Nhóm bạn Yên có 17 chiếc bánh cần chia đều cho 5 bạn, phần dư để dành cho quản trại. Yên tính: 17 chia lấy phần nguyên cho 5 được 3 chiếc mỗi bạn, còn 17 chia lấy phần dư cho 5 được 2 chiếc dư ra. Cả nhóm sau đó ôn lại huyền thoại cổ về người phát minh cờ vua: nhà vua hứa thưởng hạt gạo theo cấp số nhân trên từng ô bàn cờ — ô 1 đặt 1 hạt, ô 2 đặt 2 hạt, ô 3 đặt 4 hạt, cứ thế nhân đôi liên tiếp qua 64 ô. Chỉ mới đến ô thứ 7, số hạt đã vọt lên 64 hạt; đến cuối bàn cờ, tổng số hạt gạo lớn đến mức không kho nào trên Trái Đất chứa nổi — minh hoạ sống động cho việc phép luỹ thừa khiến một con số tăng nhanh khủng khiếp chỉ sau vài bước nhân đôi.",
        },
        {
          kind: "note",
          text: "Python có bảy phép toán số học cơ bản: cộng, trừ, nhân, chia, chia lấy phần nguyên, chia lấy phần dư và luỹ thừa (xem đầy đủ kí hiệu trong khối lệnh minh hoạ ở trên). Phép chia thông thường luôn trả về số thực, kể cả khi chia hết. Thứ tự ưu tiên giống toán học: luỹ thừa tính trước, rồi đến nhân/chia/chia nguyên/chia dư, cuối cùng mới đến cộng/trừ; dùng dấu ngoặc để thay đổi thứ tự khi cần.",
        },
        {
          kind: "check",
          q: "Bạn Yên có 17 chiếc bánh chia đều cho 5 bạn. Phép toán nào giúp tính số bánh dư ra sau khi chia đều?",
          options: [
            "Phép chia lấy phần dư",
            "Phép chia lấy phần nguyên",
            "Phép chia thông thường",
            "Phép luỹ thừa",
          ],
          answer: 0,
          explain:
            "Phép chia lấy phần dư cho biết chính xác phần còn thừa sau khi đã chia đều hết mức có thể — 17 chia cho 5 được 3 phần đều nhau và dư đúng 2 chiếc.",
        },
        {
          kind: "check",
          q: "Trong huyền thoại hạt gạo trên bàn cờ, số hạt gạo ở mỗi ô tăng lên theo cách nào so với ô liền trước?",
          options: [
            "Nhân đôi liên tiếp — đúng bản chất của phép luỹ thừa cơ số 2",
            "Cộng thêm đúng một hạt so với ô liền trước nó",
            "Giữ nguyên không đổi số hạt gạo trên mọi ô của bàn cờ",
            "Giảm dần một nửa số hạt gạo so với ô liền trước nó",
          ],
          answer: 0,
          explain:
            "Mỗi ô tiếp theo có số hạt gạo gấp đôi ô trước (1, 2, 4, 8, 16…) — đây chính là phép luỹ thừa cơ số 2, lí do khiến tổng số hạt tăng nhanh đến mức khó tin chỉ sau vài chục ô.",
        },
        {
          kind: "check",
          q: "Kết quả của phép chia thông thường giữa 8 và 4 trong Python (hai số chia hết cho nhau) là kiểu giá trị nào?",
          options: [
            "Số thực 2.0, vì phép chia thông thường trong Python luôn trả về số thực",
            "Số nguyên 2, vì hai số chia hết cho nhau nên kết quả phải là số nguyên",
            "Một xâu kí tự \"2\", vì phép chia luôn trả về dạng văn bản",
            "Báo lỗi, vì Python không cho phép chia hai số chia hết tuyệt đối cho nhau",
          ],
          answer: 0,
          explain:
            "Phép chia thông thường trong Python luôn trả về kiểu số thực, bất kể hai số có chia hết cho nhau hay không. Muốn lấy kết quả dạng số nguyên, phải dùng phép chia lấy phần nguyên thay vì phép chia thông thường.",
        },
      ],
    },
  ],

  summary: [
    "**Biến** là tên của vùng nhớ lưu giá trị, có thể thay đổi được. **Lệnh gán** (=) tính biểu thức bên phải trước rồi lưu kết quả vào biến bên trái — không phải phép so sánh bằng nhau như toán học.",
    "Tên biến chỉ gồm chữ cái, số, dấu gạch dưới; không bắt đầu bằng số; không chứa dấu cách; không trùng từ khoá; **phân biệt chữ hoa/thường**. Python cho phép **gán đồng thời** nhiều biến, kể cả hoán đổi giá trị mà không cần biến trung gian.",
    "Python có bảy phép toán số học: cộng, trừ, nhân, chia, chia lấy phần nguyên, chia lấy phần dư và luỹ thừa. Phép chia thông thường luôn trả về **số thực**.",
    "Thứ tự ưu tiên phép toán giống toán học: luỹ thừa trước, rồi nhân/chia, cuối cùng mới cộng/trừ — dùng ngoặc để thay đổi thứ tự khi cần.",
  ],
};

export default theory;
