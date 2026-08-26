import type { LessonTheory } from "@/lib/types";

const bai32: LessonTheory = {
  intro:
    "Trước bài kiểm tra cuối chủ đề, cô giáo không dạy kiến thức mới nữa mà chiếu lên bảng một loạt đoạn chương trình \"trộn lẫn\" — có cả biến, vòng lặp, danh sách, xâu và hàm trong cùng một bài — rồi yêu cầu cả lớp đọc và đoán kết quả trước khi bấm chạy. Nhóm Vy nhận ra: học riêng từng bài thì hiểu, nhưng khi các mảnh ghép trộn vào nhau lại rất dễ đoán sai. Bài ôn tập này hệ thống lại 6 mảnh ghép đã học (bài 16-31), rèn kĩ năng đọc hiểu code từng bước, và điểm mặt những bẫy kinh điển hay xuất hiện khi nhiều kiến thức kết hợp với nhau.",
  minutes: 16,
  sections: [
    {
      id: "ban-do-tong-hop",
      emoji: "🗺️",
      heading: "1. Sáu mảnh ghép dựng nên một chương trình Python",
      blocks: [
        {
          kind: "text",
          text: "Từ bài 16 đến bài 31, lớp đã lần lượt học từng \"mảnh ghép\" riêng lẻ. Trước khi ôn tập tổng hợp, hãy cùng nhìn lại toàn cảnh: một chương trình Python hoàn chỉnh thường là sự kết hợp của sáu mảnh ghép sau đây.",
        },
        { kind: "figure", diagram: "ban-do-6-manh-ghep", caption: "Sáu mảnh ghép đã học — đề ôn tập thường trộn 2-3 mảnh trong cùng một đoạn chương trình" },
        {
          kind: "list",
          items: [
            "Biến & phép toán (bài 17): lưu dữ liệu và tính toán. Nhớ // là chia lấy phần nguyên, % là lấy số dư — hai phép hay bị nhầm lẫn nhất.",
            "Rẽ nhánh if (bài 19): chọn một trong nhiều hướng đi tuỳ điều kiện đúng hay sai.",
            "Vòng lặp for / while (bài 20-21): for khi biết trước số lần lặp, while khi lặp theo điều kiện — quên cập nhật biến trong while là lỗi lặp vô hạn kinh điển.",
            "Danh sách (bài 22-23): lưu nhiều giá trị, truy cập bằng chỉ số bắt đầu từ 0, có các lệnh append, sort, remove sẵn có.",
            "Xâu kí tự (bài 24-25): xử lí văn bản, là kiểu dữ liệu bất biến — mọi phương thức như upper(), split() đều trả về xâu MỚI chứ không sửa xâu gốc.",
            "Hàm (bài 26-28): đóng gói một công việc, đặt tên, gọi lại nhiều lần; biến khai báo bên trong hàm là biến cục bộ, chỉ hàm đó dùng được.",
          ],
        },
        {
          kind: "example",
          title: "Một đoạn chương trình trộn 3 mảnh ghép",
          text: "Xét hàm dem_lon_hon(a, moc) nhận vào một danh sách và một mốc, dùng vòng lặp for duyệt từng phần tử, câu lệnh if kiểm tra điều kiện lớn hơn mốc, biến d đếm dồn rồi return kết quả. Chỉ một hàm nhỏ mà đã kết hợp đủ bốn mảnh ghép: hàm, danh sách, vòng lặp và rẽ nhánh — đây chính là kiểu bài tổng hợp thường gặp trong đề ôn tập và đề kiểm tra.",
        },
        {
          kind: "check",
          q: "Chương trình có đoạn: def tinh(a, b): return a // b, a % b. Hai phép toán // và % trong hàm này lần lượt thuộc mảnh ghép nào và có ý nghĩa gì?",
          options: [
            "Thuộc mảnh ghép biến & phép toán; // là chia lấy phần nguyên, % là lấy số dư",
            "Thuộc mảnh ghép rẽ nhánh; // và % đều dùng để so sánh hai số",
            "Thuộc mảnh ghép vòng lặp; // quy định số lần lặp",
            "Thuộc mảnh ghép hàm; // và % chỉ dùng được bên trong def",
          ],
          answer: 0,
          explain: "// và % là hai phép toán số học đã học ở bài 17 (biến & phép toán), không liên quan đến vòng lặp hay rẽ nhánh — việc chúng nằm trong một hàm chỉ là kết hợp mảnh ghép, không đổi bản chất phép toán.",
        },
        {
          kind: "check",
          q: "Phát biểu nào sau đây tổng hợp ĐÚNG kiến thức từ nhiều bài đã học?",
          options: [
            "input() luôn trả về kiểu số, không cần chuyển đổi khi tính toán",
            "Vòng lặp for chỉ duyệt được dãy số tạo bởi range(), không duyệt được danh sách",
            "Biến khai báo bên trong một hàm là biến cục bộ, không dùng được ở ngoài hàm đó",
            "Lệnh return và lệnh print trong hàm có tác dụng hoàn toàn giống nhau",
          ],
          answer: 2,
          explain: "Đây là kiến thức phạm vi biến ở bài 28. input() thực ra luôn trả về xâu (bài 18); for duyệt được cả danh sách (bài 22); return khác hẳn print vì return đưa giá trị ra ngoài để dùng tiếp, còn print chỉ hiển thị (bài 26).",
        },
      ],
    },
    {
      id: "doc-hieu-code",
      emoji: "🔍",
      heading: "2. Kĩ năng sống còn khi ôn tập: dò biến từng bước",
      blocks: [
        {
          kind: "text",
          text: "Khi gặp một đoạn chương trình lạ và được yêu cầu đoán kết quả, đừng đoán bằng cảm giác. Cách chắc chắn nhất là dò biến từng bước (trace): lập một bảng, mỗi vòng lặp ghi lại giá trị của từng biến liên quan, rồi theo dõi chúng thay đổi thế nào qua từng bước.",
        },
        { kind: "figure", diagram: "bang-do-bien-tung-buoc", caption: "Bảng dò biến từng bước cho vòng lặp cộng dồn các số lẻ" },
        {
          kind: "steps",
          items: [
            { label: "1", title: "Liệt kê biến cần theo dõi", text: "Xác định những biến nào thay đổi giá trị trong chương trình, ví dụ i và s." },
            { label: "2", title: "Chạy từng vòng lặp một", text: "Với mỗi lần lặp, kiểm tra điều kiện if đúng hay sai, rồi cập nhật giá trị biến tương ứng vào bảng." },
            { label: "3", title: "Đọc kết quả ở dòng cuối", text: "Sau khi vòng lặp kết thúc, giá trị biến ở dòng cuối bảng chính là kết quả chương trình sẽ in ra." },
          ],
        },
        {
          kind: "example",
          title: "Dò biến cho vòng lặp while",
          text: "Với đoạn x = 10 rồi while x > 3: x = x − 4, lập bảng theo từng vòng: x bắt đầu là 10, điều kiện 10 > 3 đúng nên trừ 4 còn 6; điều kiện 6 > 3 vẫn đúng nên trừ tiếp còn 2; đến đây điều kiện 2 > 3 sai nên vòng lặp dừng lại, giá trị in ra là 2. Nếu chỉ nhẩm nhanh trong đầu, học sinh rất dễ dừng nhầm ở bước có x = 6 và trả lời sai.",
        },
        {
          kind: "note",
          text: "Với vòng lặp lồng nhau — for ngoài chạy n lần, for trong chạy m lần — tổng số lần thực hiện câu lệnh bên trong cùng là n × m, không phải n + m. Đây là lỗi đếm rất hay gặp khi ôn tập vòng lặp lồng nhau.",
        },
        {
          kind: "check",
          q: "Muốn chắc chắn đoán đúng kết quả của một đoạn chương trình có vòng lặp và rẽ nhánh phức tạp, cách làm an toàn nhất là gì?",
          options: [
            "Đọc lướt một lần rồi đoán bằng trực giác",
            "Lập bảng dò biến, ghi lại giá trị các biến qua từng vòng lặp",
            "Bỏ qua các dòng if vì chúng không ảnh hưởng đến kết quả cuối",
            "Chỉ cần đọc dòng lệnh cuối cùng của chương trình",
          ],
          answer: 1,
          explain: "Dò biến từng bước theo bảng là cách chắc chắn nhất, giúp không bỏ sót lần nào điều kiện đổi từ đúng sang sai hay ngược lại.",
        },
        {
          kind: "check",
          q: "Đoạn chương trình có hai vòng for lồng nhau: vòng ngoài chạy 4 lần, vòng trong chạy 3 lần, bên trong cùng có một lệnh print. Lệnh print được thực hiện bao nhiêu lần?",
          options: ["7 lần", "12 lần", "4 lần", "3 lần"],
          answer: 1,
          explain: "Vòng lặp lồng nhau nhân số lần với nhau: 4 × 3 = 12 lần, không phải cộng 4 + 3 = 7.",
        },
      ],
    },
    {
      id: "bay-tong-hop",
      emoji: "⚠️",
      heading: "3. Bẫy tổng hợp: khi nhiều mảnh ghép trộn lẫn",
      blocks: [
        {
          kind: "text",
          text: "Phần khó nhất của đề ôn tập không nằm ở một mảnh ghép riêng lẻ, mà ở chỗ hai mảnh ghép gặp nhau và tạo ra hiểu lầm. Dưới đây là bốn bẫy kinh điển nhất mà nhóm Vy đã từng mắc phải khi luyện đề tổng hợp.",
        },
        { kind: "figure", diagram: "bon-bay-tong-hop", caption: "Bốn bẫy kinh điển khi kết hợp danh sách, xâu kí tự, hàm và lời gọi hàm" },
        {
          kind: "cards",
          tone: "sun",
          items: [
            { emoji: "📑", title: "sort() rồi append()", text: "sort() chỉ sắp xếp tại thời điểm được gọi. Gọi append() sau đó luôn thêm phần tử vào CUỐI danh sách, không tự động sắp xếp lại." },
            { emoji: "🔤", title: "Xâu bất biến", text: "s.upper(), s.split() đều trả về một xâu hoặc danh sách MỚI. Biến xâu gốc s giữ nguyên giá trị cũ nếu không được gán lại." },
            { emoji: "📦", title: "Biến cục bộ hết hạn ngoài hàm", text: "Một biến đếm tạo ra bên trong hàm sẽ biến mất ngay khi hàm chạy xong — chương trình chính không thể gọi tên biến đó." },
            { emoji: "🚫", title: "Thiếu đối số bắt buộc", text: "Gọi một hàm mà thiếu tham số không có giá trị mặc định sẽ gây lỗi TypeError ngay lập tức, Python không tự đoán giá trị thay thế." },
          ],
        },
        {
          kind: "text",
          text: "Ba bẫy trên là về việc kết hợp sai giữa các mảnh ghép, còn bài 29-30 đã dạy cách phân biệt ba loại lỗi khi chương trình không cho kết quả như mong đợi — kiến thức này cũng thường xuất hiện lại trong đề tổng hợp dưới dạng \"đoạn chương trình sau gây ra lỗi gì?\".",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            "Lỗi cú pháp: chương trình viết sai quy tắc ngôn ngữ, Python báo lỗi ngay và không chạy được dòng nào.",
            "Lỗi ngoại lệ: cú pháp và lôgic đều đúng, nhưng dữ liệu lúc chạy không hợp lệ, ví dụ người dùng nhập chữ vào chỗ cần một con số.",
            "Lỗi lôgic: chương trình chạy trơn tru từ đầu đến cuối, không báo lỗi nào, nhưng kết quả cuối cùng lại sai vì thuật toán có chỗ chưa đúng.",
          ],
        },
        {
          kind: "check",
          q: "a = [5, 1, 4]; a.sort(); a.append(2); print(a) sẽ in ra gì?",
          options: ["[1, 2, 4, 5]", "[1, 4, 5, 2]", "[5, 1, 4, 2]", "[2, 1, 4, 5]"],
          answer: 1,
          explain: "sort() sắp a thành [1, 4, 5] trước, sau đó append(2) chỉ thêm 2 vào CUỐI danh sách chứ không sắp xếp lại — kết quả là [1, 4, 5, 2].",
        },
        {
          kind: "check",
          q: "Một chương trình yêu cầu nhập điểm rồi tính trung bình, nhưng người dùng lỡ gõ chữ \"tám\" thay vì số 8 khiến chương trình dừng đột ngột và báo lỗi. Đây là loại lỗi gì?",
          options: [
            "Lỗi cú pháp, vì câu lệnh viết sai quy tắc ngôn ngữ",
            "Lỗi ngoại lệ, vì dữ liệu nhập vào lúc chạy không hợp lệ",
            "Lỗi lôgic, vì thuật toán tính trung bình sai công thức",
            "Không phải lỗi, chương trình vẫn hoạt động bình thường",
          ],
          answer: 1,
          explain: "Câu lệnh viết đúng cú pháp và đúng lôgic, nhưng dữ liệu người dùng nhập vào (chữ thay vì số) không hợp lệ khi chuyển kiểu lúc chạy — đây là lỗi ngoại lệ.",
        },
        {
          kind: "check",
          q: "Hàm def dem(a, moc): ... có tham số moc bắt buộc. Nếu chương trình chính gọi dem(diem) mà quên truyền moc, điều gì xảy ra?",
          options: [
            "Python tự động gán moc bằng 0",
            "Chương trình chạy bình thường nhưng bỏ qua điều kiện so sánh với moc",
            "Python báo lỗi TypeError vì thiếu đối số bắt buộc",
            "Chương trình chạy nhưng kết quả luôn là danh sách rỗng",
          ],
          answer: 2,
          explain: "Tham số moc không có giá trị mặc định nên bắt buộc phải truyền khi gọi hàm. Thiếu đối số bắt buộc luôn gây lỗi TypeError ngay khi gọi hàm, Python không tự đoán giá trị thay thế.",
        },
      ],
    },
  ],
  summary: [
    "Một chương trình Python thường kết hợp 6 mảnh ghép: biến & phép toán, rẽ nhánh if, vòng lặp for/while, danh sách, xâu kí tự và hàm — đề ôn tập hay trộn 2-3 mảnh ghép trong cùng một đoạn code.",
    "Kĩ năng dò biến từng bước (lập bảng theo dõi giá trị biến qua từng vòng lặp) là cách chắc chắn nhất để đoán đúng kết quả của code phức tạp, thay vì đoán bằng cảm giác.",
    "Bốn bẫy kinh điển khi kết hợp kiến thức: sort() rồi append() không tự sắp xếp lại, xâu bất biến nên biến gốc không đổi, biến cục bộ hết hạn ngoài hàm, và thiếu đối số bắt buộc gây lỗi TypeError.",
    "Ba loại lỗi cần phân biệt: lỗi cú pháp (sai quy tắc ngôn ngữ, không chạy được), lỗi ngoại lệ (đúng cú pháp và lôgic nhưng dữ liệu lúc chạy không hợp lệ), lỗi lôgic (chạy trơn tru nhưng kết quả sai).",
  ],
};

export default bai32;
