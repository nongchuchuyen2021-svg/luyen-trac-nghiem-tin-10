import type { LessonTheory } from "@/lib/types";

// Bài 16. Ngôn ngữ lập trình bậc cao và Python
// SGK trang 82–86, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Từ bài này, em bước sang một hành trình hoàn toàn mới: **lập trình** — ra lệnh cho máy tính tự giải quyết vấn đề thay vì chỉ dùng phần mềm có sẵn. Bài học mở đầu bằng câu hỏi cốt lõi: máy tính thực sự \"hiểu\" ngôn ngữ gì, vì sao con người lại cần một ngôn ngữ khác dễ viết hơn, và tại sao trong hàng chục ngôn ngữ lập trình, **Python** lại là lựa chọn hàng đầu để bắt đầu.",
  minutes: 9,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "ngon-ngu-may-va-bac-cao",
      emoji: "⚙️",
      heading: "Ngôn ngữ máy và ngôn ngữ lập trình bậc cao",
      blocks: [
        {
          kind: "text",
          text: "Bộ xử lí (CPU) bên trong máy tính chỉ thực sự \"hiểu\" và thực hiện trực tiếp được duy nhất một loại lệnh: **ngôn ngữ máy** — các lệnh dạng dãy bit 0 và 1, gắn chặt với từng loại vi xử lí cụ thể. Con người viết trực tiếp bằng ngôn ngữ máy cực kì khó khăn và dễ nhầm lẫn, nên **ngôn ngữ lập trình bậc cao** (Python, C++, Java…) ra đời: câu lệnh gần với ngôn ngữ tự nhiên và kí hiệu toán học, không phụ thuộc vào một loại máy cụ thể nào — nhưng đổi lại, cần một **chương trình dịch** (compiler — biên dịch trọn bộ, hoặc interpreter — thông dịch từng câu lệnh) để chuyển nó sang ngôn ngữ máy trước khi CPU thực hiện được.",
        },
        {
          kind: "figure",
          diagram: "ngon-ngu-may-vs-bac-cao",
          caption: "Hình 16.1. Ngôn ngữ máy CPU hiểu trực tiếp — Ngôn ngữ bậc cao cần trình dịch/thông dịch",
        },
        {
          kind: "example",
          title: "Tình huống: Ra lệnh cho robot dọn phòng tự chế",
          text: "Chuẩn bị cho hội thi Sáng tạo Khoa học kĩ thuật, bạn Phong tự chế một robot dọn phòng nhỏ. Bộ xử lí gắn trong robot chỉ hiểu đúng một thứ: dãy bit 0 và 1. Nếu phải gõ tay hàng nghìn bit để bảo robot \"tiến 2 bước rồi rẽ trái\", Phong sẽ mất cả tuần chưa xong một lệnh. Thay vào đó, Phong viết chương trình bằng Python với các dòng lệnh gần gũi như con người nói chuyện. Trước khi robot chạy được, một phần mềm trung gian — trình thông dịch Python — sẽ tự động dịch từng dòng lệnh ấy thành đúng dãy bit mà bộ xử lí của robot hiểu và thực hiện.",
        },
        {
          kind: "note",
          text: "Ngôn ngữ máy là các lệnh dạng dãy bit mà CPU thực hiện trực tiếp, nhưng rất khó viết và đọc. Ngôn ngữ lập trình bậc cao gần ngôn ngữ tự nhiên, dễ viết và dễ đọc hơn hẳn, nhưng cần chương trình dịch (biên dịch hoặc thông dịch) chuyển sang ngôn ngữ máy trước khi CPU thực hiện được.",
        },
        {
          kind: "check",
          q: "Vì sao bạn Phong không thể ra lệnh trực tiếp cho robot bằng cách gõ tay các dãy bit 0 và 1?",
          options: [
            "Vì cách đó cực kì khó viết, dễ nhầm lẫn và mất rất nhiều thời gian dù CPU hiểu được trực tiếp",
            "Vì bộ xử lí của robot không bao giờ hiểu được ngôn ngữ máy dạng bit 0 và 1",
            "Vì ngôn ngữ máy chỉ dùng được cho máy tính để bàn, không dùng được cho robot",
            "Vì gõ dãy bit 0 và 1 là hành vi bị cấm khi lập trình cho các thiết bị điện tử",
          ],
          answer: 0,
          explain:
            "CPU hoàn toàn hiểu và thực hiện trực tiếp ngôn ngữ máy — vấn đề là con người viết tay quá khó khăn, dễ sai và tốn thời gian. Đó chính là lí do ngôn ngữ lập trình bậc cao ra đời.",
        },
        {
          kind: "check",
          q: "Chương trình viết bằng ngôn ngữ lập trình bậc cao như Python cần trải qua bước nào trước khi CPU thực hiện được?",
          options: [
            "Được một chương trình dịch (biên dịch hoặc thông dịch) chuyển đổi sang ngôn ngữ máy",
            "Được in ra giấy rồi quét lại thành ảnh để CPU đọc trực tiếp từ ảnh đó",
            "Không cần bước nào cả vì CPU tự động hiểu mọi ngôn ngữ lập trình bậc cao",
            "Được dịch sang một ngôn ngữ bậc cao khác trước khi CPU thực hiện",
          ],
          answer: 0,
          explain:
            "CPU chỉ thực hiện trực tiếp được ngôn ngữ máy. Chương trình dịch (compiler) hoặc chương trình thông dịch (interpreter) đảm nhiệm việc chuyển đổi từ ngôn ngữ bậc cao sang ngôn ngữ máy.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "python-va-moi-truong",
      emoji: "🐍",
      heading: "Python: ngôn ngữ bậc cao thông dụng",
      blocks: [
        {
          kind: "text",
          text: "**Python** là ngôn ngữ lập trình bậc cao thực hiện theo cơ chế **thông dịch**: mỗi câu lệnh được dịch và chạy ngay lập tức, không cần biên dịch trọn bộ chương trình trước. Python nổi tiếng nhờ **cú pháp ngắn gọn, gần ngôn ngữ tự nhiên**, dễ học với người mới bắt đầu, cùng một **hệ thư viện khổng lồ** phục vụ hầu như mọi lĩnh vực — từ xử lí dữ liệu, trí tuệ nhân tạo, phát triển web đến điều khiển robot.",
        },
        {
          kind: "figure",
          diagram: "moi-truong-python",
          caption: "Hình 16.2. Ba môi trường lập trình Python phổ biến và dấu nhắc tương tác",
        },
        {
          kind: "list",
          items: [
            "**IDLE**: môi trường đi kèm sẵn khi cài Python — vừa gõ lệnh tương tác, vừa soạn thảo tệp chương trình",
            "**Thonny**: giao diện đơn giản, trực quan, có khung theo dõi giá trị biến — rất hợp cho người mới học",
            "**PyCharm / Visual Studio Code**: môi trường chuyên nghiệp, nhiều tiện ích mạnh, dùng cho các dự án lớn nhiều tệp",
            "**Chế độ tương tác**: sau dấu nhắc **>>>**, gõ một lệnh và nhấn Enter là thấy kết quả ngay — tiện để thử nghiệm nhanh",
            "**Tệp chương trình**: mã nguồn Python được lưu trong tệp có phần mở rộng **.py**",
          ],
        },
        {
          kind: "example",
          title: "Tình huống: Chọn đúng môi trường cho đúng việc",
          text: "Chuẩn bị bài tập về nhà, bạn Kiều mở IDLE — có sẵn ngay sau khi cài Python — để thử nhanh vài câu lệnh tính toán ở chế độ tương tác >>>. Khi làm dự án nhóm gồm nhiều tệp chương trình phức tạp cho cuộc thi Tin học trẻ, cả nhóm chuyển sang **Visual Studio Code** vì có tính năng gợi ý code và quản lí nhiều tệp tiện lợi hơn hẳn. Còn khi hướng dẫn em họ lớp 6 làm quen lập trình lần đầu, Kiều lại chọn **Thonny** vì giao diện đơn giản, hiện rõ từng bước chạy và giá trị biến, dễ hình dung hơn cho người mới.",
        },
        {
          kind: "note",
          text: "Python là ngôn ngữ bậc cao, thực hiện theo cơ chế thông dịch. Có thể soạn và chạy Python bằng IDLE, Thonny, PyCharm, Visual Studio Code… Chế độ tương tác dùng dấu nhắc >>>; chương trình lưu trong tệp có phần mở rộng .py.",
        },
        {
          kind: "check",
          q: "Python thực hiện chương trình theo cơ chế nào?",
          options: [
            "Thông dịch — dịch và chạy ngay từng câu lệnh, không cần biên dịch trọn bộ trước",
            "Biên dịch toàn bộ chương trình thành tệp thực thi rồi mới chạy được",
            "Không cần dịch gì cả vì CPU hiểu trực tiếp cú pháp của Python",
            "Chuyển đổi toàn bộ chương trình thành hình ảnh trước khi hiển thị kết quả",
          ],
          answer: 0,
          explain:
            "Python là ngôn ngữ thông dịch: từng câu lệnh được dịch và thực hiện ngay, khác với các ngôn ngữ biên dịch như C++ phải dịch trọn bộ thành tệp chạy trước khi thực thi.",
        },
        {
          kind: "check",
          q: "Bạn Kiều muốn hướng dẫn em họ lớp 6 làm quen lập trình lần đầu, nên chọn môi trường Python nào là hợp lí nhất?",
          options: [
            "Thonny, vì giao diện đơn giản, trực quan, dễ theo dõi từng bước chạy",
            "Visual Studio Code, vì có nhiều tiện ích chuyên nghiệp phức tạp nhất",
            "PyCharm, vì đây là môi trường duy nhất chạy được ngôn ngữ Python",
            "Không cần cài môi trường nào, vì Python tự động chạy trên máy in",
          ],
          answer: 0,
          explain:
            "Thonny được thiết kế đơn giản, trực quan, phù hợp người mới bắt đầu. PyCharm và VS Code mạnh nhưng có phần phức tạp hơn, hợp cho dự án lớn và người đã quen lập trình.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "print-va-bieu-thuc",
      emoji: "🖨️",
      heading: "Câu lệnh print() và biểu thức số học",
      blocks: [
        {
          kind: "text",
          text: "Câu lệnh đầu tiên hầu như ai học Python cũng gặp là **print()** — đưa dữ liệu ra màn hình. Điều quan trọng cần phân biệt: nếu nội dung trong ngoặc được đặt trong **cặp dấu nháy** (\"...\"), Python coi đó là một **xâu kí tự** và in ra **nguyên văn**; nếu không có dấu nháy, Python hiểu đó là một **biểu thức số học** và sẽ **tính toán rồi in ra kết quả**.",
        },
        {
          kind: "figure",
          diagram: "print-va-bieu-thuc",
          caption: "Hình 16.3. Cùng con số 5 và 3, nhưng có nháy hay không nháy cho hai kết quả khác hẳn nhau",
        },
        {
          kind: "example",
          title: "Tình huống: Vì sao chương trình tính điểm của My lại in sai?",
          text: "Làm bài tập tính tổng điểm ba môn, bạn My viết: print(\"8 + 9 + 7\") và ngỡ ngàng khi màn hình chỉ hiện đúng dòng chữ 8 + 9 + 7 chứ không phải con số 24 như mong đợi. Xem lại, My nhận ra mình đã đặt biểu thức trong cặp dấu nháy — khiến Python hiểu đó là một xâu kí tự cần in nguyên văn, chứ không phải phép tính cần thực hiện. Sửa lại thành print(8 + 9 + 7) (bỏ dấu nháy), màn hình lập tức hiện đúng kết quả 24.",
        },
        {
          kind: "text",
          text: "Một điều thú vị khác: phép chia **/** trong Python luôn trả về **số thực**, kể cả khi hai số chia hết cho nhau — ví dụ print(10 / 4) cho ra 2.5, và ngay cả print(8 / 4) cũng cho ra 2.0 chứ không phải số nguyên 2. Muốn lấy phần nguyên của phép chia, Python có một phép toán riêng là **//** (chia lấy nguyên).",
        },
        {
          kind: "note",
          text: "print() đưa dữ liệu ra màn hình. Nội dung trong cặp dấu nháy là xâu kí tự, in ra nguyên văn; không có dấu nháy là biểu thức, được tính toán trước khi in. Phép chia / trong Python luôn trả về số thực; muốn lấy phần nguyên dùng phép //.",
        },
        {
          kind: "check",
          q: "Vì sao lệnh print(\"8 + 9 + 7\") của bạn My chỉ in ra đúng dòng chữ 8 + 9 + 7 mà không tính ra kết quả 24?",
          options: [
            "Vì nội dung được đặt trong cặp dấu nháy nên Python coi đó là xâu kí tự, in nguyên văn chứ không tính toán",
            "Vì Python không có khả năng cộng được từ ba số trở lên trong cùng một biểu thức",
            "Vì lệnh print() chỉ nhận được tối đa hai số hạng trong một lần gọi",
            "Vì My đã quên không cài đặt thư viện tính toán cần thiết trước khi chạy chương trình",
            ],
          answer: 0,
          explain:
            "Bất cứ nội dung nào đặt trong cặp dấu nháy đều được Python hiểu là xâu kí tự cố định, in ra y nguyên. Muốn Python tính toán, biểu thức số học phải được viết mà không có dấu nháy bao quanh.",
        },
        {
          kind: "check",
          q: "Kết quả của lệnh print(8 / 4) trong Python là gì?",
          options: ["2.0", "2", '"8/4"', "Báo lỗi vì 8 chia hết cho 4"],
          answer: 0,
          explain:
            "Phép chia / trong Python luôn trả về kiểu số thực, kể cả khi phép chia là chia hết — nên kết quả là 2.0 chứ không phải số nguyên 2. Muốn lấy phần nguyên phải dùng phép // .",
        },
      ],
    },
  ],

  summary: [
    "**Ngôn ngữ máy** là dãy bit 0/1 mà CPU hiểu trực tiếp nhưng rất khó viết. **Ngôn ngữ bậc cao** (Python, C++, Java…) gần ngôn ngữ tự nhiên, dễ viết — cần chương trình dịch (biên dịch/thông dịch) để chuyển sang ngôn ngữ máy.",
    "**Python** là ngôn ngữ bậc cao thông dịch: cú pháp ngắn gọn, thư viện phong phú, dễ học. Có thể chạy bằng **IDLE, Thonny, PyCharm, VS Code**; chế độ tương tác dùng dấu nhắc **>>>**; chương trình lưu trong tệp **.py**.",
    "**print()** đưa dữ liệu ra màn hình: nội dung trong dấu nháy là xâu kí tự (in nguyên văn); không có dấu nháy là biểu thức (được tính rồi in kết quả).",
    "Phép chia **/** trong Python luôn trả về số thực (kể cả khi chia hết); muốn lấy phần nguyên dùng phép **//**.",
  ],
};

export default theory;
