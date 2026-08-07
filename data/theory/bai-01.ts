import type { LessonTheory } from "@/lib/types";

// Bài 1. Thông tin và xử lí thông tin
// SGK trang 6–10, Chủ đề 1: Máy tính và xã hội tri thức
const theory: LessonTheory = {
  intro:
    "Bài này giúp em phân biệt **thông tin** và **dữ liệu**, hiểu quá trình xử lí thông tin bằng máy tính, nắm được các đơn vị đo lượng dữ liệu, và thấy được ưu điểm vượt trội của thiết bị số trong lưu trữ, xử lí và truyền thông tin.",
  minutes: 8,
  sections: [
    // ───────────────────────── MỤC 1 ─────────────────────────
    {
      id: "thong-tin-du-lieu",
      emoji: "💡",
      heading: "Thông tin và dữ liệu",
      blocks: [
        {
          kind: "text",
          text: "**Thông tin** là tất cả những gì mang lại cho chúng ta hiểu biết. Thông tin gắn với quá trình nhận thức — máy tính không tự nhận thức được mà chỉ là công cụ hỗ trợ con người.",
        },
        {
          kind: "text",
          text: "Trong tin học, **dữ liệu** là thông tin đã được đưa vào máy tính dưới dạng máy tính có thể nhận biết và xử lí được (âm thanh, hình ảnh, văn bản, số,… đã được số hoá). Trong máy tính, xử lí thông tin chính là **xử lí dữ liệu**.",
        },
        {
          kind: "figure",
          diagram: "qua-trinh-xu-li-thong-tin",
          caption: "Hình 1.1. Quá trình xử lí thông tin bằng máy tính",
        },
        {
          kind: "steps",
          items: [
            {
              label: "B1",
              title: "Tiếp nhận dữ liệu",
              text: "Máy tính nhận dữ liệu từ các thiết bị (máy quét, bàn phím…) hoặc từ con người nhập vào.",
            },
            {
              label: "B2",
              title: "Xử lí dữ liệu",
              text: "Biến đổi dữ liệu trong bộ nhớ để tạo ra dữ liệu mới. *Ví dụ: từ dữ liệu nhiệt độ nhiều năm, phần mềm cho biết Trái Đất đang nóng dần lên.*",
            },
            {
              label: "B3",
              title: "Đưa ra kết quả",
              text: "Kết quả được thể hiện dưới dạng văn bản, âm thanh, hình ảnh,… trên màn hình, loa, máy in — hoặc lưu lên bộ nhớ để dùng tiếp.",
            },
          ],
        },
        {
          kind: "compare",
          left: {
            title: "Thông tin",
            emoji: "🧠",
            items: [
              "Là **ý nghĩa**, mang lại hiểu biết cho con người",
              "Có tính **toàn vẹn**: thiếu dữ liệu có thể làm thông tin sai lệch hoặc không xác định được",
              "Một thông tin có thể được thể hiện bởi **nhiều loại dữ liệu khác nhau**",
            ],
          },
          right: {
            title: "Dữ liệu",
            emoji: "💾",
            items: [
              "Là các yếu tố **thể hiện, xác định** thông tin",
              "Có tính **độc lập tương đối** với thông tin: cùng một dữ liệu có thể mang nhiều thông tin khác nhau",
              "Nhiều bộ dữ liệu khác nhau có thể đưa đến **cùng một thông tin**",
            ],
          },
        },
        {
          kind: "example",
          title: "Ví dụ phân biệt thông tin và dữ liệu",
          text: "Dữ liệu \"39°C\" trong bộ dữ liệu thời tiết mang thông tin \"trời rất nóng\", nhưng cùng dữ liệu \"39°C\" trong bộ dữ liệu bệnh án lại mang thông tin \"sốt cao\". Bài ghi trong vở, tệp bài soạn Word, video ghi lại tiết giảng — đều là **dữ liệu** của cùng một bài giảng.",
        },
        {
          kind: "note",
          text: "Trong máy tính, dữ liệu là thông tin đã được đưa vào máy tính để máy tính có thể nhận biết và xử lí được. Thông tin là ý nghĩa của dữ liệu. Thông tin và dữ liệu có tính độc lập tương đối. Với vai trò là ý nghĩa, thông tin có tính toàn vẹn — dữ liệu không đầy đủ có thể làm thông tin bị sai hoặc không xác định được.",
        },
        {
          kind: "check",
          q: "Phát biểu nào sau đây mô tả đúng mối quan hệ giữa thông tin và dữ liệu?",
          options: [
            "Thông tin là ý nghĩa, dữ liệu là hình thức thể hiện thông tin đó",
            "Dữ liệu là ý nghĩa, thông tin là các con số ghi lại trong máy tính",
            "Thông tin và dữ liệu hoàn toàn đồng nhất, không có sự khác biệt",
            "Thông tin chỉ tồn tại bên trong máy tính, dữ liệu chỉ ở ngoài đời",
          ],
          answer: 0,
          explain:
            "Thông tin là ý nghĩa mà con người hiểu được; dữ liệu là dạng thể hiện (số hoá) của thông tin để máy tính lưu trữ và xử lí.",
        },
      ],
    },

    // ───────────────────────── MỤC 2 ─────────────────────────
    {
      id: "don-vi-luu-tru",
      emoji: "📏",
      heading: "Đơn vị lưu trữ dữ liệu",
      blocks: [
        {
          kind: "text",
          text: "Máy tính không truy cập bộ nhớ tới từng bit mà truy cập theo từng nhóm bit. **Byte** là một đơn vị dữ liệu dưới dạng một dãy bit có độ dài nhỏ nhất có thể truy cập được. Phần lớn các máy tính ngày nay sử dụng **byte 8 bit**, thuận tiện cho việc mã hoá kí tự.",
        },
        {
          kind: "text",
          text: "Bộ nhớ máy tính được tổ chức thành những đơn vị nhớ có độ dài bằng bội của byte (2, 4, 8 byte). Chính vì vậy, byte — đơn vị tổ chức dữ liệu — được lấy làm **đơn vị đo lượng lưu trữ dữ liệu**.",
        },
        {
          kind: "figure",
          diagram: "don-vi-luu-tru",
          caption: "Bảng 1.1. Các đơn vị lưu trữ dữ liệu (SGK)",
        },
        {
          kind: "text",
          text: "Các đơn vị đo dữ liệu hơn kém nhau **2¹⁰ = 1 024 lần**. Ví dụ: 1 KB = 1 024 B, 1 MB = 1 024 KB, 1 GB = 1 024 MB, 1 TB = 1 024 GB.",
        },
        {
          kind: "note",
          text: "**Bit** (binary digit) là đơn vị nhỏ nhất để biểu diễn thông tin, chỉ nhận một trong hai giá trị 0 hoặc 1. **1 byte = 8 bit**. Các đơn vị KB, MB, GB, TB,… hơn kém nhau 1 024 lần (2¹⁰).",
        },
        {
          kind: "check",
          q: "1 KB bằng bao nhiêu byte?",
          options: [
            "1 024 byte (tức 2¹⁰ byte)",
            "1 000 byte (tức 10³ byte)",
            "8 byte (tức 2³ byte)",
            "512 byte (tức 2⁹ byte)",
          ],
          answer: 0,
          explain:
            "Theo quy ước trong tin học, 1 KB = 2¹⁰ byte = 1 024 byte. Tương tự, các đơn vị tiếp theo (MB, GB, TB) cũng nhân 1 024.",
        },
        {
          kind: "check",
          q: "Sắp xếp các đơn vị đo dữ liệu theo thứ tự tăng dần:",
          options: [
            "B → KB → MB → GB → TB",
            "B → MB → KB → GB → TB",
            "KB → B → MB → TB → GB",
            "B → KB → GB → MB → TB",
          ],
          answer: 0,
          explain:
            "Thứ tự tăng dần: Byte → Kilobyte → Megabyte → Gigabyte → Terabyte, mỗi bậc gấp 1 024 lần bậc liền trước.",
        },
      ],
    },

    // ───────────────────────── MỤC 3 ─────────────────────────
    {
      id: "thiet-bi-so",
      emoji: "📱",
      heading: "Lưu trữ, xử lí và truyền thông bằng thiết bị số",
      blocks: [
        {
          kind: "text",
          text: "Các thiết bị làm việc với thông tin số như lưu trữ, truyền dữ liệu hay xử lí thông tin số đều được gọi là **thiết bị số**. Ví dụ: thẻ nhớ, bộ thu phát wifi, máy tính xách tay là các thiết bị số. Đồng hồ cơ, quạt điện cơ không phải thiết bị số.",
        },
        {
          kind: "cards",
          tone: "grape",
          items: [
            {
              emoji: "💾",
              title: "Về lưu trữ",
              text: "Lưu trữ lượng thông tin rất lớn trong thiết bị nhỏ gọn nhẹ với chi phí thấp. Một đĩa cứng 2 TB chứa khối lượng thông tin ngang một thư viện đại học. Tìm kiếm thông tin nhanh và dễ dàng.",
            },
            {
              emoji: "⚡",
              title: "Về xử lí",
              text: "Xử lí thông tin với tốc độ nhanh và chính xác. Một máy tính cỡ trung bình có thể thực hiện vài chục tỉ phép tính một giây. Siêu máy tính đạt tốc độ hàng trăm triệu tỉ phép tính mỗi giây. Máy tính thực hiện chính xác, không sai sót, có thể làm việc liên tục nhiều tháng, nhiều năm.",
            },
            {
              emoji: "🌐",
              title: "Về truyền thông",
              text: "Tốc độ truyền tin đã có những bước tiến dài. Ngày nay các gia đình có thể sở hữu đường cáp quang với tốc độ vài chục Mb/s, tương đương vài triệu kí tự một giây — điều khó tưởng tượng so với đầu những năm 2000.",
            },
          ],
        },
        {
          kind: "example",
          title: "So sánh thư bưu điện và thư điện tử",
          text: "Gửi thư bưu điện mất từ vài ngày đến vài tuần để tới nơi. Trong khi đó, gửi email chỉ mất vài giây và có thể gửi cho nhiều người cùng lúc mà chi phí gần như bằng không — minh hoạ rõ ưu điểm về **tốc độ truyền thông** của thiết bị số.",
        },
        {
          kind: "note",
          text: "Thiết bị số có các ưu điểm: Giúp xử lí thông tin với năng suất rất cao và ổn định. Có khả năng lưu trữ với dung lượng lớn, giá thành rẻ, tìm kiếm nhanh và dễ dàng. Có khả năng truyền tin với tốc độ rất lớn. Giúp thực hiện tự động, chính xác, chi phí thấp và tiện lợi hơn một số việc.",
        },
        {
          kind: "check",
          q: "Thiết bị nào sau đây KHÔNG phải là thiết bị số?",
          options: [
            "Quạt điện cơ không có bảng điều khiển điện tử",
            "Máy tính xách tay dùng để soạn văn bản hàng ngày",
            "Thẻ nhớ SD dùng để lưu trữ ảnh chụp bằng máy ảnh",
            "Bộ thu phát wifi cung cấp mạng Internet cho gia đình",
          ],
          answer: 0,
          explain:
            "Quạt điện cơ (không có mạch điện tử) không lưu trữ, xử lí hay truyền thông tin số nên không phải thiết bị số. Máy tính, thẻ nhớ, bộ thu phát wifi đều là thiết bị số.",
        },
        {
          kind: "check",
          q: "Ưu điểm nào sau đây là ưu điểm tuyệt đối của máy tính so với tính toán thủ công?",
          options: [
            "Thực hiện tính toán nhanh, cho kết quả chính xác và ổn định",
            "Máy tính có thể tự sáng tạo ra kiến thức mới hoàn toàn",
            "Máy tính có thể tự nhận thức và hiểu ý nghĩa của dữ liệu",
            "Máy tính có thể thay thế hoàn toàn con người trong mọi việc",
          ],
          answer: 0,
          explain:
            "SGK nêu rõ: \"thực hiện tính toán nhanh, cho kết quả chính xác và ổn định là các ưu điểm tuyệt đối của máy tính so với tính toán thủ công\". Máy tính không tự nhận thức hay sáng tạo kiến thức mới.",
        },
      ],
    },
  ],

  summary: [
    "**Thông tin** là ý nghĩa mà con người hiểu được; **dữ liệu** là dạng thể hiện thông tin để máy tính xử lí. Hai khái niệm này có tính độc lập tương đối.",
    "Quá trình xử lí thông tin gồm 3 bước: **tiếp nhận** dữ liệu → **xử lí** dữ liệu → **đưa ra kết quả**.",
    "**Bit** là đơn vị nhỏ nhất (0 hoặc 1). **1 byte = 8 bit**. Các đơn vị KB, MB, GB, TB hơn kém nhau **1 024 lần** (2¹⁰).",
    "**Thiết bị số** là thiết bị làm việc với thông tin số. Ưu điểm: lưu trữ dung lượng lớn, xử lí nhanh và chính xác, truyền thông tốc độ cao.",
  ],
};

export default theory;
