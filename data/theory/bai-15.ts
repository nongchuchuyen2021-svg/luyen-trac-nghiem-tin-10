import type { LessonTheory } from "@/lib/types";

// Bài 15. Hoàn thiện hình ảnh đồ hoạ
// SGK trang 77–81, Chủ đề 4: Ứng dụng tin học
const theory: LessonTheory = {
  intro:
    "Đây là chặng cuối của hành trình đồ hoạ vector: học cách **ghép nhiều hình đơn giản thành một hình phức tạp** chỉ bằng vài cú nhấp, tô **màu chuyển sắc (gradient)** cho sản phẩm có chiều sâu, và **xuất bản vẽ ra đúng định dạng, đúng độ phân giải** cho từng mục đích sử dụng — biến một bản vẽ trên Canvas thành sản phẩm hoàn chỉnh, sẵn sàng đăng mạng hay gửi đi in ấn.",
  minutes: 9,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "phep-ghep-hinh",
      emoji: "🧩",
      heading: "Ba phép ghép hình: Union, Difference, Intersection",
      blocks: [
        {
          kind: "text",
          text: "Rất nhiều hình phức tạp thực ra được tạo từ vài hình đơn giản chồng lên nhau rồi ghép lại bằng **phép toán hình học trên đường (Path operations)** — nằm gọn trong menu **Path** của Inkscape. Ba phép quan trọng nhất: **Union (hợp)** gộp tất cả các hình đã chọn thành một khối duy nhất; **Difference (hiệu)** dùng hình nằm trên như một 'khuôn cắt' để đục vào hình nằm dưới; **Intersection (giao)** chỉ giữ lại đúng phần mà tất cả các hình cùng chồng lấn.",
        },
        {
          kind: "figure",
          diagram: "phep-ghep-hinh",
          caption: "Hình 15.1. Union gộp lại — Difference đục khuyết — Intersection giữ phần chung",
        },
        {
          kind: "example",
          title: "Tình huống: Ba biểu tượng, ba phép ghép hình",
          text: "Nhóm truyền thông trường thiết kế ba biểu tượng cùng lúc. Bạn Trang cần một **đám mây** cho banner dự báo hoạt động ngoài trời: vẽ 5 hình tròn kích cỡ khác nhau chồng đè lên nhau rồi chọn **Union** — toàn bộ đường viền chồng lấn biến mất, chỉ còn một khối mây liền mạch. Bạn Kiên thiết kế logo CLB Tin học kiểu **quả táo cắn dở**: vẽ một hình tròn to màu xanh lá làm thân táo, thêm một hình tròn nhỏ đặt lệch bên phải làm 'vết cắn', chọn cả hai rồi **Difference** — hình tròn nhỏ biến thành đúng một miếng khuyết tự nhiên. Bạn Lam làm **avatar tròn** cho thành viên CLB: đặt một vòng tròn khung đè lên ảnh đại diện hình vuông, nhân đôi vòng tròn để giữ lại bản gốc, chọn ảnh và một bản vòng tròn rồi **Intersection** — chỉ phần ảnh nằm gọn trong vòng tròn được giữ lại, phần thừa bên ngoài biến mất.",
        },
        {
          kind: "note",
          text: "Union (Ctrl++) gộp các hình thành một khối. Difference (Ctrl+-) lấy hình dưới trừ đi phần bị hình trên che, tạo hiệu ứng đục/khoét. Intersection (phím tắt trong menu Path) chỉ giữ phần chồng lấn chung. Cả ba phép đều nằm trong menu Path và đều 'tiêu hao' các hình tham gia — nên nhân đôi (Ctrl+D) hình cần giữ lại trước khi áp dụng.",
        },
        {
          kind: "check",
          q: "Bạn Kiên muốn tạo logo 'quả táo cắn dở' từ một hình tròn to (thân táo) và một hình tròn nhỏ đặt lệch (vết cắn). Kiên nên dùng phép ghép hình nào?",
          options: [
            "Difference — lấy hình tròn to trừ đi phần bị hình tròn nhỏ che phủ",
            "Union — gộp hai hình tròn thành một khối tròn to hơn duy nhất",
            "Intersection — chỉ giữ lại phần chồng lấn giữa hai hình tròn",
            "Group — nhóm hai hình tròn lại để di chuyển đồng bộ",
          ],
          answer: 0,
          explain:
            "Difference dùng hình trên (vòng tròn nhỏ) làm khuôn để đục vào hình dưới (thân táo), tạo ra đúng một vết khuyết tự nhiên như vết cắn.",
        },
        {
          kind: "check",
          q: "Trước khi áp dụng phép Intersection để cắt ảnh vuông thành avatar tròn, vì sao bạn Lam cần nhân đôi (Ctrl+D) hình vòng tròn khung trước?",
          options: [
            "Vì các phép ghép hình làm biến mất/tiêu hao các hình tham gia, cần giữ lại một bản gốc để dùng tiếp",
            "Vì Inkscape bắt buộc phải có ít nhất ba hình mới thực hiện được phép Intersection",
            "Vì nhân đôi giúp hình vòng tròn tự động đổi màu khác với hình gốc",
            "Vì nếu không nhân đôi thì phần mềm sẽ báo lỗi và không thực hiện được lệnh",
          ],
          answer: 0,
          explain:
            "Union, Difference, Intersection đều hợp nhất hoặc làm biến đổi các hình tham gia thành một path mới — muốn dùng lại hình vòng tròn khung cho việc khác thì phải nhân đôi nó trước khi áp phép ghép hình.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "xuat-ban-ve",
      emoji: "📤",
      heading: "Xuất bản vẽ ra ảnh: PNG, độ phân giải và tệp SVG gốc",
      blocks: [
        {
          kind: "text",
          text: "Bản vẽ SVG dùng để chỉnh sửa, nhưng để đăng lên mạng xã hội hay gửi đi in ấn, ta cần **xuất (Export)** nó ra một tệp ảnh — thường là **PNG**, qua lệnh **File → Export PNG Image**. Khi xuất, cần chọn **vùng xuất** (toàn trang, vùng đã chọn hay toàn bộ bản vẽ) và **độ phân giải** (kích thước điểm ảnh/DPI): độ phân giải càng cao, ảnh càng nét khi in khổ lớn, nhưng dung lượng tệp cũng càng nặng — nên chọn mức phù hợp với từng mục đích, không phải lúc nào cũng chọn mức cao nhất.",
        },
        {
          kind: "figure",
          diagram: "xuat-ban-ve",
          caption: "Hình 15.2. Giữ tệp .svg gốc để sửa — xuất PNG với độ phân giải phù hợp từng mục đích",
        },
        {
          kind: "example",
          title: "Tình huống: Banner khổ lớn vỡ hạt vì dùng nhầm ảnh tải từ Zalo",
          text: "Chuẩn bị ngày hội trường, nhóm truyền thông cần in một banner logo trường khổ 3×1,5 mét. Ai đó lỡ lấy luôn tấm logo đã tải về từ nhóm Zalo của trường (vốn bị nén nhỏ khi gửi qua ứng dụng chat) để gửi cho xưởng in — kết quả là banner in ra vỡ hạt lởm chởm, nhìn xa như bị nhoè. May mắn, bạn phụ trách thiết kế vẫn còn giữ **tệp .svg gốc** trên máy: chỉ cần mở lại và **xuất PNG mới với độ phân giải cao** đúng khổ 3×1,5 mét, banner in ra sắc nét như ý.",
        },
        {
          kind: "note",
          text: "File → Export PNG Image xuất bản vẽ vector thành ảnh điểm ảnh để dùng ngoài Inkscape. Độ phân giải cao hơn cho ảnh nét hơn khi in khổ lớn nhưng dung lượng tệp cũng nặng hơn. Luôn giữ lại tệp .svg gốc: PNG đã 'phẳng' thành lưới điểm ảnh cố định, muốn sửa lại nội dung, màu sắc hay chữ thì bắt buộc phải quay về tệp SVG nguồn.",
        },
        {
          kind: "check",
          q: "Vì sao banner in ra bị vỡ hạt khi nhóm truyền thông lỡ dùng ảnh logo tải về từ Zalo để gửi xưởng in?",
          options: [
            "Vì ảnh trên Zalo đã bị nén thành tệp bitmap độ phân giải thấp, phóng to khổ lớn sẽ lộ điểm ảnh",
            "Vì Zalo chỉ hỗ trợ gửi ảnh định dạng SVG, không hỗ trợ định dạng PNG",
            "Vì xưởng in chỉ nhận được tệp nếu gửi trực tiếp từ phần mềm Inkscape",
            "Vì ảnh tải từ Zalo luôn tự động bị đổi màu so với ảnh gốc ban đầu",
          ],
          answer: 0,
          explain:
            "Ứng dụng chat thường nén ảnh xuống độ phân giải thấp để gửi nhanh, nhẹ. Ảnh bitmap có độ phân giải thấp khi phóng to khổ in lớn sẽ lộ rõ từng điểm ảnh (vỡ hạt) — khắc phục bằng cách xuất lại PNG độ phân giải cao từ tệp SVG gốc.",
        },
        {
          kind: "check",
          q: "Vì sao vẫn cần giữ lại tệp .svg gốc dù đã xuất được tệp PNG ưng ý để đăng mạng?",
          options: [
            "Vì SVG còn giữ nguyên từng đối tượng để sửa tiếp, còn PNG đã phẳng thành điểm ảnh cố định",
            "Vì tệp PNG chỉ xem được trong vài giờ rồi tự động bị xoá khỏi máy tính",
            "Vì tệp SVG luôn có dung lượng nhẹ hơn PNG nên không tốn bộ nhớ lưu trữ",
            "Vì các mạng xã hội hiện nay đều từ chối không cho đăng ảnh định dạng PNG",
          ],
          answer: 0,
          explain:
            "PNG là ảnh điểm ảnh đã 'nướng' phẳng — không còn tách được từng đối tượng, chữ hay màu riêng lẻ. Chỉ tệp SVG gốc mới cho phép quay lại chỉnh sửa khi cần thay đổi nội dung sau này.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "gradient-quy-trinh",
      emoji: "🌈",
      heading: "Gradient (chuyển sắc) và quy trình hoàn thiện sản phẩm",
      blocks: [
        {
          kind: "text",
          text: "**Gradient (chuyển sắc)** là kiểu tô màu chuyển dần từ màu này sang màu khác thay vì một màu phẳng duy nhất, giúp hình khối trông có chiều sâu và sống động hơn hẳn. Hai kiểu phổ biến: **Linear (tuyến tính)** — màu chuyển theo một đường thẳng, hợp làm nền trời hoặc banner; và **Radial (toả tròn)** — màu toả đều từ tâm ra ngoài, hợp làm mặt trời, quả cầu hay nguồn sáng.",
        },
        {
          kind: "figure",
          diagram: "gradient-chuyen-sac",
          caption: "Hình 15.3. Gradient tuyến tính cho nền phẳng — Gradient toả tròn cho khối cầu, ánh sáng",
        },
        {
          kind: "steps",
          items: [
            {
              label: "B1",
              title: "Phác thảo ý tưởng",
              text: "Hình dung bố cục tổng thể trước khi mở phần mềm — vẽ nháp ra giấy nếu cần.",
            },
            {
              label: "B2",
              title: "Dựng hình",
              text: "Vẽ các đối tượng bằng công cụ hình cơ bản, Bezier, ghép hình (Union/Difference/Intersection).",
            },
            {
              label: "B3",
              title: "Phối màu và chữ",
              text: "Tô fill/stroke, áp gradient cho các khối cần chiều sâu, thêm văn bản bằng công cụ Text.",
            },
            {
              label: "B4",
              title: "Căn chỉnh",
              text: "Dùng Align & Distribute, kiểm tra lại thứ tự lớp (Z-order) cho hợp lí.",
            },
            {
              label: "B5",
              title: "Xuất tệp",
              text: "Lưu lại .svg gốc, sau đó Export PNG với độ phân giải phù hợp mục đích sử dụng.",
            },
          ],
        },
        {
          kind: "example",
          title: "Tình huống: Hoàn thiện thiệp mừng năm học mới từ đầu đến cuối",
          text: "Được giao thiết kế thiệp mừng năm học mới cho lớp, bạn Yến làm theo đúng quy trình: (1) phác thảo trên giấy một bầu trời có mặt trời và dòng chữ chúc mừng; (2) dựng hình bằng Ellipse cho mặt trời, Bezier cho vài đám mây; (3) tô nền bằng gradient Linear xanh dương nhạt sang trắng, tô mặt trời bằng gradient Radial vàng rực ở tâm mờ dần ra ngoài, gõ dòng chữ chúc mừng bằng Text; (4) mở Align & Distribute canh đúng dòng chữ vào giữa thiệp, kiểm tra lại chữ phải nằm trên cùng để đọc được; (5) lưu tệp thiệp.svg, rồi xuất thêm một bản PNG độ phân giải vừa phải để gửi cả lớp xem trước trên nhóm chat.",
        },
        {
          kind: "note",
          text: "Gradient Linear tạo dải màu chuyển theo đường thẳng; Radial tạo dải màu toả từ tâm ra ngoài — cả hai đều làm qua hộp thoại Fill & Stroke. Quy trình hoàn thiện một sản phẩm đồ hoạ hợp lí: Phác thảo ý tưởng → Dựng hình → Phối màu và chữ → Căn chỉnh → Xuất tệp. Luôn giữ tệp .svg gốc bên cạnh các bản PNG đã xuất.",
        },
        {
          kind: "check",
          q: "Bạn Yến muốn tô mặt trời sao cho có ánh sáng rực rỡ ở tâm và mờ dần ra viền ngoài. Nên chọn kiểu gradient nào?",
          options: [
            "Radial (toả tròn) — màu toả đều từ tâm ra ngoài",
            "Linear (tuyến tính) — màu chuyển theo một đường thẳng",
            "Chỉ cần một màu vàng phẳng duy nhất, không cần gradient",
            "Opacity giảm dần mà không cần đổi màu sắc gì cả",
          ],
          answer: 0,
          explain:
            "Radial gradient toả màu từ tâm ra viền theo mọi hướng — đúng hiệu ứng ánh sáng rực rỡ ở giữa mờ dần ra ngoài của mặt trời. Linear chỉ chuyển màu theo một đường thẳng, không tạo được hiệu ứng toả tròn.",
        },
        {
          kind: "check",
          q: "Theo quy trình hoàn thiện sản phẩm đồ hoạ hợp lí, bước nào nên thực hiện SAU CÙNG?",
          options: [
            "Xuất tệp (Export)",
            "Phác thảo ý tưởng",
            "Dựng hình",
            "Phối màu và chữ",
          ],
          answer: 0,
          explain:
            "Trình tự hợp lí: Phác thảo ý tưởng → Dựng hình → Phối màu và chữ → Căn chỉnh → Xuất tệp. Xuất tệp là bước cuối cùng, thực hiện sau khi đã hoàn thiện và kiểm tra lại toàn bộ sản phẩm.",
        },
      ],
    },
  ],

  summary: [
    "**Union** (Ctrl++) gộp các hình thành một khối; **Difference** (Ctrl+-) đục hình trên vào hình dưới; **Intersection** giữ phần chồng lấn chung. Cả ba nằm trong menu **Path** và tiêu hao hình gốc — nhân đôi trước nếu cần giữ lại.",
    "**File → Export PNG Image** xuất bản vẽ ra ảnh điểm ảnh; độ phân giải càng cao càng nét khi in khổ lớn nhưng tệp càng nặng — chọn theo đúng mục đích sử dụng.",
    "Luôn giữ tệp **.svg gốc**: PNG đã phẳng thành pixel, không sửa lại từng đối tượng được — chỉ SVG mới chỉnh sửa tiếp được về sau.",
    "**Gradient** Linear (tuyến tính) và Radial (toả tròn) tạo chiều sâu cho hình. Quy trình hoàn thiện sản phẩm: **Phác thảo → Dựng hình → Phối màu và chữ → Căn chỉnh → Xuất tệp**.",
  ],
};

export default theory;
