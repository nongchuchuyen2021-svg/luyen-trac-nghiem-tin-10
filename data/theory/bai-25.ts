import type { LessonTheory } from "@/lib/types";

// Bài 25. Một số lệnh làm việc với xâu kí tự
// SGK trang 127–131, Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
const theory: LessonTheory = {
  intro:
    "Vy vừa được bầu làm thư kí lớp, phụ trách tổng hợp phiếu đăng kí hội trại — và ngay lập tức gặp một đống dữ liệu lộn xộn: bạn gõ thừa dấu cách, bạn viết hoa lung tung, có bạn muốn tách danh sách theo dấu phẩy để xử lí riêng từng tên. Bài này trang bị đúng bộ công cụ xử lí văn bản mà Vy cần — và cũng là bộ kĩ năng dùng nhiều nhất khi lập trình xử lí dữ liệu thực tế sau này, nên hãy học thật chắc.",
  minutes: 10,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "find-an-toan",
      emoji: "🔎",
      heading: "find(): tìm kiếm AN TOÀN, không lo báo lỗi",
      blocks: [
        {
          kind: "text",
          text: "Bài 23 đã học a.index(x) của danh sách — nếu x không tồn tại, chương trình dừng lại với lỗi ValueError. Với xâu, phương thức tương ứng là **find()**, nhưng an toàn hơn hẳn: s.find(xâu_con) trả về chỉ số bắt đầu của xâu con nếu tìm thấy, và trả về **-1** (chứ không báo lỗi) nếu không tìm thấy. Đây là khác biệt cực kì quan trọng cần nhớ.",
        },
        {
          kind: "figure",
          diagram: "find-vs-index",
          caption: "Hình 25.1. index() của danh sách dừng chương trình khi không thấy — find() của xâu thì không",
        },
        {
          kind: "example",
          title: "Tình huống: Kiểm tra một cái tên có trong danh sách đăng kí không",
          text: "Vy nhận được xâu đăng kí hội trại dạng \"An, Bình, Chi\" và muốn kiểm tra xem bạn Khang đã đăng kí chưa. Nếu dùng danh sách ds = [\"An\", \"Bình\", \"Chi\"] rồi gọi ds.index(\"Khang\"), chương trình sẽ dừng ngay với lỗi ValueError vì Khang không có trong danh sách. Nhưng nếu giữ nguyên dạng xâu dk = \"An, Bình, Chi\" và gọi dk.find(\"Khang\"), chương trình chỉ lặng lẽ trả về -1 rồi chạy tiếp bình thường — Vy dựa vào giá trị -1 đó để biết chắc Khang chưa đăng kí, không cần bọc thêm lệnh kiểm tra phòng lỗi nào cả.",
        },
        {
          kind: "code",
          caption: "find() trả về -1 khi không tìm thấy, không báo lỗi",
          code: 'dk = "An, Bình, Chi"\nvi_tri = dk.find("Bình")\nprint(vi_tri)          # 4 — tìm thấy, trả về chỉ số bắt đầu\n\nvi_tri = dk.find("Khang")\nprint(vi_tri)          # -1 — không tìm thấy, chương trình vẫn chạy tiếp',
        },
        {
          kind: "note",
          text: "s.find(xâu_con) trả về chỉ số xuất hiện đầu tiên của xâu_con trong s; trả về -1 nếu không tìm thấy — khác hẳn a.index(x) của danh sách sẽ gây lỗi ValueError khi x không tồn tại. Vì vậy find() thường được dùng để kiểm tra sự tồn tại một cách an toàn, ví dụ if s.find(\"...\") != -1.",
        },
        {
          kind: "check",
          q: "Với dk = \"An, Bình, Chi\", lệnh dk.find(\"Khang\") trả về giá trị gì?",
          options: ["-1", "0", "Báo lỗi ValueError giống hệt danh sách", "Xâu rỗng \"\""],
          answer: 0,
          explain:
            "find() không tìm thấy \"Khang\" trong xâu dk nên trả về -1, một giá trị số bình thường — chương trình không hề dừng lại hay báo lỗi.",
        },
        {
          kind: "check",
          q: "Vì sao Vy chọn dùng find() trên xâu thay vì index() trên danh sách để kiểm tra một cái tên có tồn tại hay không mà không cần viết thêm lệnh xử lí lỗi?",
          options: [
            "Vì find() trả về -1 một cách an toàn khi không tìm thấy, còn index() sẽ làm chương trình dừng lại vì lỗi",
            "Vì find() chạy nhanh hơn index() trên mọi loại dữ liệu",
            "Vì index() chỉ hoạt động được với danh sách toàn số, không hoạt động với tên người",
            "Vì find() và index() thực chất hoàn toàn giống nhau, chọn cái nào cũng được",
          ],
          answer: 0,
          explain:
            "Điểm khác biệt cốt lõi là cách xử lí khi không tìm thấy: find() trả về -1 (chương trình chạy tiếp), còn index() ném ra lỗi ValueError khiến chương trình dừng đột ngột nếu không được bọc thêm xử lí ngoại lệ.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "split-join",
      emoji: "🧵",
      heading: "split() và join(): tách xâu thành danh sách, rồi ghép ngược lại",
      blocks: [
        {
          kind: "text",
          text: "**split()** tách một xâu thành **danh sách** các xâu con, dựa theo một kí tự phân tách (mặc định là dấu cách nếu không truyền tham số). **join()** làm ngược lại: ghép các phần tử của một danh sách thành một xâu duy nhất, chèn xâu phân tách vào giữa mỗi phần tử — cú pháp hơi lạ một chút: xâu_phân_tách.join(danh_sách), viết ngược lại so với thói quen thường thấy.",
        },
        {
          kind: "figure",
          diagram: "split-va-join",
          caption: "Hình 25.2. split() phân rã một xâu thành danh sách — join() lắp ghép danh sách trở lại thành xâu",
        },
        {
          kind: "example",
          title: "Tình huống: Tách danh sách đăng kí để xử lí riêng từng tên",
          text: "Xâu đăng kí \"An, Bình, Chi\" gộp chung ba cái tên, khó xử lí riêng lẻ. Vy dùng dk.split(\", \") để tách thành danh sách [\"An\", \"Bình\", \"Chi\"] — giờ có thể đếm số người đăng kí bằng len(), sắp xếp bằng sort(), hay kiểm tra từng tên như đã học ở bài 22-23. Sau khi xử lí xong (ví dụ thêm một bạn mới vào danh sách), Vy dùng \", \".join(danh_sach) để ghép lại thành đúng định dạng xâu ban đầu, sẵn sàng in ra thông báo cho cả lớp.",
        },
        {
          kind: "code",
          caption: "split() tách xâu thành danh sách, join() ghép ngược lại",
          code: 'dk = "An, Bình, Chi"\nds = dk.split(", ")\nprint(ds)              # [\'An\', \'Bình\', \'Chi\']\nprint(len(ds))         # 3 — đếm số người đăng kí\n\nds.append("Khang")\ndk_moi = ", ".join(ds)\nprint(dk_moi)          # An, Bình, Chi, Khang',
        },
        {
          kind: "text",
          text: "Khi gọi split() **không truyền tham số nào**, Python mặc định tách theo khoảng trắng — rất tiện để đếm số từ trong một câu, ví dụ len(cau.split()) cho ngay số từ mà không cần viết vòng lặp đếm dấu cách thủ công.",
        },
        {
          kind: "note",
          text: "s.split(kí_tự_tách) trả về một DANH SÁCH các xâu con; nếu không truyền tham số, mặc định tách theo khoảng trắng. kí_tự_nối.join(danh_sách) ghép các phần tử của danh sách thành một xâu, chèn kí_tự_nối vào giữa mỗi phần tử. split() và join() là cặp thao tác ngược nhau: tách ra rồi ghép lại đúng như cũ (nếu dùng cùng kí tự phân tách).",
        },
        {
          kind: "check",
          q: "Lệnh \"em rat yeu truong em\".split() (không truyền tham số) trả về danh sách có bao nhiêu phần tử?",
          options: ["5", "4", "1", "20"],
          answer: 0,
          explain:
            "split() không tham số mặc định tách theo khoảng trắng. Câu \"em rat yeu truong em\" có 5 từ cách nhau bởi dấu cách, nên kết quả là danh sách 5 phần tử.",
        },
        {
          kind: "check",
          q: "Sau khi có ds = [\"An\", \"Bình\", \"Chi\"], lệnh nào ghép danh sách này thành xâu \"An-Bình-Chi\"?",
          options: [
            '"-".join(ds)',
            "ds.join(\"-\")",
            '"-".split(ds)',
            "ds.split(\"-\")",
          ],
          answer: 0,
          explain:
            "Cú pháp đúng của join là xâu_phân_tách.join(danh_sách) — xâu phân tách đứng trước dấu chấm, danh sách nằm trong ngoặc. \"-\".join(ds) chèn dấu gạch ngang giữa các phần tử, cho ra \"An-Bình-Chi\".",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "chuan-hoa-du-lieu",
      emoji: "🧹",
      heading: "strip(), replace(), upper()/lower()/title(): làm sạch dữ liệu",
      blocks: [
        {
          kind: "text",
          text: "Ba phương thức rất hay dùng để \"làm sạch\" dữ liệu gõ tay: **strip()** cắt bỏ khoảng trắng thừa, nhưng chỉ ở **hai đầu** xâu — khoảng trắng thừa ở giữa vẫn giữ nguyên. **replace(cũ, mới)** trả về một xâu **mới** đã thay thế mọi chỗ xuất hiện của xâu cũ bằng xâu mới. **upper()**, **lower()**, **title()** đổi chữ hoa/thường theo các kiểu khác nhau. Nhắc lại: xâu là kiểu bất biến, nên **mọi phương thức này đều trả về xâu mới**, không hề sửa xâu gốc — luôn phải gán lại nếu muốn giữ kết quả.",
        },
        {
          kind: "figure",
          diagram: "strip-chi-hai-dau",
          caption: "Hình 25.3. strip() chỉ dọn khoảng trắng ở hai đầu — khoảng trắng thừa ở giữa vẫn còn nguyên",
        },
        {
          kind: "example",
          title: "Tình huống: Chuẩn hoá một cái tên gõ vội, lộn xộn",
          text: "Một phiếu đăng kí có tên gõ thành \"   nguyễn  văn A  \" — thừa khoảng trắng đầu cuối, viết thường lộn xộn. Vy xử lí qua ba bước: đầu tiên ten.strip() cắt bỏ khoảng trắng thừa ở đầu và cuối (nhưng khoảng trắng thừa giữa \"nguyễn\" và \"văn\" thì strip() không đụng tới); tiếp theo ten.title() viết hoa chữ cái đầu của mỗi từ. Ở mỗi bước, Vy đều phải gán lại ten = ten.strip() rồi ten = ten.title(), vì cả hai phương thức chỉ trả về kết quả mới chứ không tự sửa biến ten.",
        },
        {
          kind: "figure",
          diagram: "chuan-hoa-du-lieu",
          caption: "Hình 25.4. Ba bước làm sạch một phiếu đăng kí — mỗi bước đều cần gán lại",
        },
        {
          kind: "code",
          caption: "Chuẩn hoá tên đăng kí qua strip() và title()",
          code: 'ten = "   nguyễn  văn A  "\nten = ten.strip()\nprint(ten)          # "nguyễn  văn A" — hết khoảng trắng 2 đầu, giữa vẫn còn\n\nten = ten.title()\nprint(ten)          # "Nguyễn  Văn A" — viết hoa đầu mỗi từ',
        },
        {
          kind: "note",
          text: "strip() cắt khoảng trắng ở hai đầu xâu, không ảnh hưởng khoảng trắng ở giữa. replace(cũ, mới) trả về xâu mới thay thế mọi chỗ xuất hiện của xâu cũ; upper()/lower() đổi toàn bộ thành hoa/thường; title() viết hoa chữ cái đầu mỗi từ. Tất cả các phương thức trên đều trả về giá trị MỚI — phải gán lại cho biến (ví dụ ten = ten.strip()) thì thay đổi mới thực sự lưu lại, vì xâu là kiểu bất biến.",
        },
        {
          kind: "check",
          q: "Với s = \"  Vy   Anh  \", sau khi gọi s.strip(), khoảng trắng THỪA ở giữa hai chữ \"Vy\" và \"Anh\" có bị ảnh hưởng không?",
          options: [
            "Không, strip() chỉ cắt khoảng trắng ở hai đầu xâu, khoảng trắng ở giữa vẫn giữ nguyên",
            "Có, strip() cắt hết mọi khoảng trắng thừa trong toàn bộ xâu, kể cả ở giữa",
            "Có, nhưng chỉ cắt bớt một nửa số khoảng trắng thừa ở giữa",
            "Không xác định được nếu không biết chính xác xâu có bao nhiêu khoảng trắng",
          ],
          answer: 0,
          explain:
            "strip() chỉ có tác dụng với khoảng trắng nằm ở đầu và cuối xâu. Khoảng trắng thừa ở giữa các từ hoàn toàn không bị ảnh hưởng — muốn dọn cả những chỗ đó phải dùng replace() hoặc kết hợp với split()/join().",
        },
        {
          kind: "check",
          q: "Sau lệnh ten.replace(\" \", \"_\") (không gán lại kết quả cho ten), biến ten gốc có thay đổi không?",
          options: [
            "Không, vì replace() chỉ trả về một xâu mới, không sửa trực tiếp biến ten gốc",
            "Có, vì replace() luôn tự động cập nhật biến gốc giống như append() của danh sách",
            "Có, nhưng chỉ khi xâu ten có độ dài lớn hơn 10 kí tự",
            "Không xác định được nếu thiếu thông tin về nội dung ban đầu của ten",
          ],
          answer: 0,
          explain:
            "Xâu là kiểu bất biến nên replace() không thể sửa trực tiếp biến gốc — nó chỉ tạo ra và trả về một xâu mới đã thay thế. Nếu không gán lại (ten = ten.replace(...)), biến ten vẫn giữ nguyên giá trị cũ, không hề thay đổi.",
        },
      ],
    },
  ],

  summary: [
    "**find()** trả về chỉ số xuất hiện đầu tiên của xâu con, hoặc **-1** nếu không tìm thấy — an toàn hơn index() của danh sách (vốn báo lỗi ValueError khi không thấy).",
    "**split()** tách xâu thành danh sách các xâu con (mặc định theo khoảng trắng). **join()** ghép danh sách trở lại thành xâu, cú pháp xâu_nối.join(danh_sách) — hai thao tác ngược chiều nhau.",
    "**strip()** chỉ cắt khoảng trắng ở HAI ĐẦU xâu, không đụng khoảng trắng ở giữa. **replace(cũ, mới)** trả về xâu mới đã thay thế. **upper()/lower()/title()** đổi hoa/thường.",
    "Mọi phương thức xử lí xâu đều trả về **giá trị mới** — luôn phải gán lại cho biến (như s = s.strip()) thì thay đổi mới thực sự được lưu, vì xâu là kiểu bất biến.",
  ],
};

export default theory;
