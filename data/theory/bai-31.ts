import type { LessonTheory } from "@/lib/types";

const bai31: LessonTheory = {
  intro:
    "Nhóm của Vy nhận đề tài cuối kì: viết một chương trình quản lí chi tiêu cho chuyến dã ngoại của lớp. Cả nhóm hào hứng mở máy gõ code ngay — rồi rối tung vì không biết bắt đầu từ đâu, biến nào là biến nào, và gõ xong thì có đúng không cũng không chắc. Bài học này hệ thống lại quy trình 4 bước giải một bài toán bằng lập trình, hai khuôn mẫu code kinh điển hay dùng nhất (đếm theo điều kiện và tìm giá trị lớn nhất), và điều làm nên một chương trình thật sự tốt chứ không chỉ là chương trình chạy được.",
  minutes: 15,
  sections: [
    {
      id: "quy-trinh",
      emoji: "🛤️",
      heading: "1. Quy trình 4 bước — đừng gõ code ngay khi vừa đọc đề",
      blocks: [
        {
          kind: "text",
          text: "Cô giáo dừng cả nhóm lại: \"Trước khi gõ một dòng code nào, hãy trả lời câu hỏi này đã — chương trình của em nhận vào cái gì, và phải trả ra cái gì?\" Đó chính là bước đầu tiên trong quy trình 4 bước giải một bài toán bằng lập trình.",
        },
        {
          kind: "steps",
          items: [
            {
              label: "Bước 1",
              title: "Xác định bài toán",
              text: "Trả lời rõ INPUT (dữ liệu đưa vào) là gì và OUTPUT (kết quả cần có) là gì. Ví dụ với đề \"tìm số lớn nhất trong ba số\": INPUT là ba số bất kì, OUTPUT là số lớn nhất trong ba số đó.",
            },
            {
              label: "Bước 2",
              title: "Thiết kế thuật toán",
              text: "Mô tả cách giải bằng lời hoặc sơ đồ khối, chưa cần viết Python vội. Ví dụ: \"giả sử số đầu tiên là lớn nhất, so sánh lần lượt với hai số còn lại, số nào lớn hơn thì cập nhật\".",
            },
            {
              label: "Bước 3",
              title: "Viết chương trình",
              text: "Chuyển thuật toán ở bước 2 thành mã Python cụ thể, dùng đúng cú pháp câu lệnh, biến, vòng lặp, hàm đã học.",
            },
            {
              label: "Bước 4",
              title: "Kiểm thử",
              text: "Chạy chương trình với nhiều bộ dữ liệu khác nhau, đối chiếu kết quả in ra với kết quả đúng mà em tự tính tay. Sai thì quay lại bước 2 hoặc bước 3 để sửa, không phải xoá đi viết lại từ đầu.",
            },
          ],
        },
        { kind: "figure", diagram: "quy-trinh-4-buoc-lap-trinh", caption: "Bốn bước giải bài toán — kiểm thử phát hiện lỗi thì quay lại sửa, không viết lại từ đầu" },
        {
          kind: "example",
          title: "Áp dụng cho \"nhập ba số, in số lớn nhất\"",
          text: "Bước 1: INPUT là ba số a, b, c; OUTPUT là số lớn nhất. Bước 2: giả sử ln bằng a, so với b thì cập nhật nếu b lớn hơn, so với c thì cập nhật nếu c lớn hơn. Bước 3: ba dòng input rồi hai câu lệnh if. Bước 4: thử với (3, 7, 5), (10, 2, 8), (4, 4, 4), (-1, -5, -2) để chắc chắn số âm và số bằng nhau cũng đúng.",
        },
        {
          kind: "note",
          text: "Sai lầm phổ biến nhất khi mới học lập trình là bỏ qua bước 1 và bước 2, gõ code ngay khi vừa đọc xong đề. Kết quả là viết được nửa chừng mới nhận ra chưa hiểu rõ đề bài cần gì, phải xoá đi viết lại nhiều lần — mất thời gian hơn hẳn so với dành một phút suy nghĩ trước.",
        },
        {
          kind: "check",
          q: "Trong quy trình 4 bước giải bài toán bằng lập trình, bước nào cần được thực hiện trước tiên?",
          options: [
            "Viết chương trình bằng Python",
            "Xác định INPUT và OUTPUT của bài toán",
            "Chạy thử và kiểm tra kết quả",
            "Sửa lỗi cú pháp trong code",
          ],
          answer: 1,
          explain: "Phải hiểu rõ chương trình nhận gì và trả ra gì trước, mới có cơ sở để thiết kế thuật toán và viết code đúng hướng.",
        },
        {
          kind: "check",
          q: "Chạy thử chương trình xong, phát hiện kết quả sai. Bước tiếp theo nên làm gì?",
          options: [
            "Xoá toàn bộ chương trình, viết lại từ bước 1",
            "Kệ luôn vì chương trình vẫn chạy không báo lỗi",
            "Quay lại xem thuật toán (bước 2) hoặc đoạn code (bước 3) có chỗ nào sai để sửa",
            "Đổi đề bài cho dễ hơn",
          ],
          answer: 2,
          explain: "Chương trình chạy không báo lỗi cú pháp không có nghĩa là kết quả đúng. Cần quay lại kiểm tra thuật toán hoặc đoạn code tương ứng để tìm và sửa chỗ sai — đây chính là vòng lặp Bước 4 → Bước 2/3 trong sơ đồ.",
        },
      ],
    },
    {
      id: "khuon-mau",
      emoji: "🧩",
      heading: "2. Hai khuôn mẫu code kinh điển ai cũng cần thuộc lòng",
      blocks: [
        {
          kind: "text",
          text: "Khi bắt tay viết chương trình quản lí chi tiêu, nhóm Vy nhận ra rất nhiều bài toán khác nhau — đếm số ngày chi vượt mức, tìm ngày chi nhiều nhất, đếm số bạn đạt điểm giỏi, tìm điểm cao nhất của lớp — đều lặp lại đúng hai khuôn mẫu xử lí danh sách. Thuộc lòng hai khuôn mẫu này, phần lớn bài toán \"duyệt danh sách\" đều giải được.",
        },
        { kind: "figure", diagram: "hai-khuon-mau-code", caption: "Khuôn mẫu đếm theo điều kiện (trái) và khuôn mẫu tìm giá trị lớn nhất (phải)" },
        {
          kind: "cards",
          tone: "mint",
          items: [
            { emoji: "🔢", title: "Duyệt và đếm theo điều kiện", text: "Đặt một biến đếm bắt đầu từ 0, duyệt qua từng phần tử; hễ phần tử thoả điều kiện thì cộng thêm 1 vào biến đếm." },
            { emoji: "📈", title: "Tìm giá trị lớn nhất", text: "Khởi tạo biến lớn nhất bằng phần tử đầu tiên của danh sách; duyệt qua các phần tử còn lại, gặp phần tử nào lớn hơn thì cập nhật biến lớn nhất bằng phần tử đó." },
          ],
        },
        {
          kind: "code",
          caption: "Đếm số ngày chi tiêu vượt mức trung bình",
          code: "dem = 0\nfor x in chi_tieu:\n    if x > tb:\n        dem = dem + 1\nprint(\"So ngay vuot muc trung binh:\", dem)",
        },
        {
          kind: "code",
          caption: "Tìm ngày chi tiêu nhiều nhất (không dùng hàm max có sẵn)",
          code: "ln = chi_tieu[0]\nfor x in chi_tieu:\n    if x > ln:\n        ln = x\nprint(\"Ngay chi nhieu nhat:\", ln)",
        },
        {
          kind: "note",
          text: "Điểm dễ nhầm nhất ở khuôn mẫu tìm giá trị lớn nhất: phải khởi tạo biến lớn nhất bằng phần tử ĐẦU TIÊN của danh sách, chứ không phải bằng 0. Nếu danh sách toàn số âm, khởi tạo bằng 0 sẽ cho ra kết quả sai — vì 0 lớn hơn mọi số âm nên chương trình sẽ luôn báo giá trị lớn nhất là 0, dù con số đó không hề có trong danh sách.",
        },
        {
          kind: "check",
          q: "Đoạn code sau đang thực hiện khuôn mẫu nào?\ndem = 0\nfor x in diem:\n    if x >= 8:\n        dem = dem + 1",
          options: [
            "Tìm giá trị lớn nhất",
            "Duyệt và đếm theo điều kiện",
            "Sắp xếp danh sách",
            "Tính tổng danh sách",
          ],
          answer: 1,
          explain: "Biến dem bắt đầu từ 0, mỗi lần gặp phần tử thoả điều kiện (điểm từ 8 trở lên) thì cộng thêm 1 — đúng khuôn mẫu đếm theo điều kiện.",
        },
        {
          kind: "check",
          q: "Muốn tìm giá trị lớn nhất trong một danh sách toàn số âm bằng khuôn mẫu thủ công, biến ln nên được khởi tạo bằng gì?",
          options: [
            "Bằng 0",
            "Bằng số nhỏ nhất có thể tưởng tượng, ví dụ -1000000",
            "Bằng phần tử đầu tiên của danh sách",
            "Không cần khởi tạo, Python tự hiểu",
          ],
          answer: 2,
          explain: "Khởi tạo bằng 0 sẽ sai vì 0 lớn hơn mọi số âm trong danh sách. Cách an toàn và đúng chuẩn khuôn mẫu là khởi tạo bằng chính phần tử đầu tiên của danh sách.",
        },
      ],
    },
    {
      id: "code-tot",
      emoji: "✨",
      heading: "3. Chương trình tốt: chạy đúng thôi chưa đủ",
      blocks: [
        {
          kind: "text",
          text: "Cuối buổi, hai bạn trong nhóm Vy đưa nhau xem code. Cả hai chương trình đều chạy ra đúng kết quả — nhưng một bạn đọc code của người kia xong phải hỏi lại: \"a, b, c, d là cái gì vậy?\". Chạy đúng chỉ là điều kiện cần; một chương trình tốt còn cần dễ đọc, dễ hiểu và luôn được kiểm thử cẩn thận.",
        },
        { kind: "figure", diagram: "code-de-doc-vs-kho-doc", caption: "Cùng chạy đúng, nhưng code khó đọc khiến người khác (kể cả chính mình sau này) rất khó hiểu lại" },
        {
          kind: "list",
          items: [
            "Đặt tên biến gợi nghĩa: dùng chieu_dai, chieu_rong thay vì a, b để chỉ cần đọc tên biến là hiểu ngay ý nghĩa.",
            "Thêm lời nhắc trong input(): input(\"Nhập số kg: \") giúp người dùng biết chính xác cần nhập gì, tránh nhập nhầm.",
            "Viết chú thích bằng dấu #: một dòng chú thích ngắn ở chỗ logic khó hiểu giúp người đọc lại (kể cả chính mình vài tháng sau) không phải đoán.",
            "Luôn kiểm thử trước khi nộp bài: chạy thử với nhiều bộ dữ liệu, kể cả trường hợp biên như danh sách rỗng hay số 0, không chỉ tin vào cảm giác \"chắc là đúng rồi\".",
          ],
        },
        {
          kind: "example",
          title: "Chương trình quản lí chi tiêu hoàn chỉnh của nhóm Vy",
          text: "Bước 1 (nhập liệu): dùng vòng lặp for chạy n lần, mỗi lần input() một khoản chi rồi append vào danh sách chi_tieu. Bước 2 (tính toán): cộng dồn bằng sum(chi_tieu) rồi chia cho n ra mức chi trung bình tb — phải hoàn tất bước này trước khi sang bước 3. Bước 3 (đếm): dùng khuôn mẫu đếm theo điều kiện ở trên để đếm số ngày chi vượt mức tb. Trước khi chia lấy trung bình, cả nhóm còn thống nhất luôn kiểm tra n > 0, để tránh chương trình bị lỗi chia cho 0 nếu ai đó lỡ nhập số ngày bằng 0.",
        },
        {
          kind: "note",
          text: "Vì sao phải tính xong tb rồi mới chạy vòng lặp đếm số ngày vượt mức? Vì vòng lặp đếm cần so sánh từng khoản chi với tb — nếu tb chưa được tính, chương trình sẽ so sánh với một giá trị chưa xác định hoặc gây lỗi. Thứ tự các bước tính toán trong chương trình quan trọng không kém thứ tự các bước trong quy trình giải bài toán.",
        },
        {
          kind: "check",
          q: "Hai chương trình A và B cùng cho ra kết quả đúng như nhau, nhưng A dùng tên biến a, b, c còn B dùng tên biến chieu_dai, chieu_rong, dien_tich kèm chú thích. Nhận xét nào đúng?",
          options: [
            "A và B chất lượng như nhau vì kết quả giống nhau",
            "A tốt hơn vì code ngắn gọn hơn",
            "B tốt hơn vì dễ đọc, dễ hiểu và dễ bảo trì hơn dù cùng cho kết quả đúng",
            "Không thể so sánh vì ngôn ngữ lập trình không quan tâm việc này",
          ],
          answer: 2,
          explain: "Chạy đúng chỉ là điều kiện cần. Tên biến gợi nghĩa và chú thích giúp người khác (hoặc chính mình sau này) đọc hiểu và sửa chương trình dễ dàng hơn nhiều — đó là một tiêu chí quan trọng của code tốt.",
        },
        {
          kind: "check",
          q: "Trong chương trình quản lí chi tiêu, vì sao nên kiểm tra n > 0 trước khi tính tb = tong / n?",
          options: [
            "Để chương trình chạy nhanh hơn",
            "Để tránh lỗi chia cho 0 khi n bằng 0",
            "Vì Python bắt buộc phải kiểm tra trước mọi phép chia",
            "Để danh sách chi_tieu không bị rỗng",
          ],
          answer: 1,
          explain: "Nếu n bằng 0, phép chia tong / n sẽ gây lỗi ZeroDivisionError khiến chương trình dừng đột ngột. Kiểm tra n > 0 trước là một bước kiểm thử phòng ngừa cần thiết.",
        },
        {
          kind: "check",
          q: "Bạn Sao viết input() không có lời nhắc: input(). Bạn Mai viết input(\"Nhập số kg: \"). Vì sao cách viết của Mai tốt hơn?",
          options: [
            "Vì code của Mai chạy nhanh hơn code của Sao",
            "Vì lời nhắc giúp người dùng biết chính xác cần nhập gì, giảm khả năng nhập sai",
            "Vì Python yêu cầu input() luôn phải có lời nhắc",
            "Không có sự khác biệt nào giữa hai cách viết",
          ],
          answer: 1,
          explain: "input() không có lời nhắc khiến người dùng đứng trước màn hình trống, không biết cần nhập gì. Thêm lời nhắc là một thói quen nhỏ nhưng làm chương trình thân thiện và ít lỗi nhập liệu hơn hẳn.",
        },
      ],
    },
  ],
  summary: [
    "Quy trình 4 bước giải bài toán bằng lập trình: xác định INPUT/OUTPUT → thiết kế thuật toán → viết chương trình → kiểm thử. Sai thì quay lại bước 2 hoặc 3 để sửa, không viết lại từ đầu.",
    "Khuôn mẫu đếm theo điều kiện: biến đếm bắt đầu từ 0, duyệt danh sách, thoả điều kiện thì cộng thêm 1.",
    "Khuôn mẫu tìm giá trị lớn nhất: khởi tạo bằng phần tử ĐẦU TIÊN của danh sách (không phải bằng 0), duyệt và cập nhật khi gặp phần tử lớn hơn.",
    "Chương trình tốt cần: tên biến gợi nghĩa, lời nhắc trong input(), chú thích bằng dấu #, và luôn được kiểm thử với nhiều bộ dữ liệu — kể cả các trường hợp biên như n = 0.",
  ],
};

export default bai31;
