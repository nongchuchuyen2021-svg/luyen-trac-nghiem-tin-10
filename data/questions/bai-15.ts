import type { Question } from "@/lib/types";

// Bài 15. Hoàn thiện hình ảnh đồ hoạ
const questions: Question[] = [
  {
    id: "b15-01",
    q: "Phép Union (hợp) hai hình trong Inkscape cho kết quả gì?",
    options: [
      "Một hình duy nhất bao trọn toàn bộ phần của cả hai hình ban đầu",
      "Một hình chỉ gồm phần chồng lấn chung của hai hình ban đầu",
      "Hai hình vẫn giữ nguyên nhưng được gộp thành một nhóm chung",
      "Hình trên bị hình dưới cắt đi phần chồng lấn giữa hai hình",
    ],
    answer: 0,
    explain: "Union (Ctrl++) hợp nhất hai hình thành một path duy nhất bao trọn cả hai.",
  },
  {
    id: "b15-02",
    q: "Phép Difference (hiệu) có tác dụng gì?",
    options: [
      "Lấy hình dưới trừ đi phần bị hình nằm trên che phủ, tạo hiệu ứng đục lỗ",
      "Lấy hình trên trừ đi phần bị hình nằm dưới che phủ, giữ lại hình dưới",
      "Gộp hai hình thành một rồi xoá bỏ phần đường viền trùng nhau ở giữa",
      "Tách hình đang chọn thành hai nửa theo đường cắt của hình còn lại",
    ],
    answer: 0,
    explain:
      "Difference (Ctrl+-) dùng hình trên như 'khuôn cắt' đục vào hình dưới — ví dụ khoét lỗ tròn trên tấm thẻ.",
  },
  {
    id: "b15-03",
    q: "Phép Intersection (giao) giữ lại phần nào?",
    options: [
      "Chỉ giữ lại đúng phần chồng lấn chung của hai hình đã chọn",
      "Giữ lại toàn bộ hai hình và bỏ đi phần chồng lấn ở giữa chúng",
      "Giữ lại phần riêng của mỗi hình, tức phần không chồng lấn nhau",
      "Giữ lại đường viền của cả hai hình và bỏ toàn bộ màu tô bên trong",
    ],
    answer: 0,
    explain: "Intersection (Ctrl+*) giữ đúng vùng mà cả hai hình cùng chiếm.",
  },
  {
    id: "b15-04",
    q: "Các phép ghép hình (Union, Difference, Intersection...) nằm trong bảng chọn nào của Inkscape?",
    options: [
      "Bảng chọn Path — nơi chứa các phép toán hình học thực hiện trên đường",
      "Bảng chọn Object — nơi chứa các lệnh sắp lớp, nhóm và biến đổi đối tượng",
      "Bảng chọn Edit — nơi chứa các lệnh sao chép, dán, hoàn tác và chọn đối tượng",
      "Bảng chọn Filters — nơi chứa các hiệu ứng đổ bóng, làm mờ và khảm màu",
    ],
    answer: 0,
    explain: "Menu Path chứa các phép toán hình học trên đường (path operations).",
  },
  {
    id: "b15-05",
    q: "Muốn vẽ hình trăng khuyết từ hai hình tròn, ta dùng phép nào?",
    options: [
      "Difference — đặt hai hình tròn lệch nhau rồi lấy hình dưới trừ hình trên",
      "Union — đặt hai hình tròn lệch nhau rồi gộp chúng thành một hình duy nhất",
      "Intersection — đặt hai hình tròn lệch nhau rồi giữ phần chung ở giữa",
      "Exclusion — đặt hai hình tròn lệch nhau rồi bỏ đi phần chung ở giữa",
    ],
    answer: 0,
    explain: "Đặt hai hình tròn chồng lệch nhau rồi Difference — phần bị trừ tạo dáng trăng khuyết.",
  },
  {
    id: "b15-06",
    q: "Xuất bản vẽ Inkscape ra ảnh PNG dùng lệnh nào?",
    options: [
      "File → Export PNG Image, chọn vùng xuất và kích thước điểm ảnh",
      "File → Save As, rồi chọn định dạng PNG trong danh sách kiểu tệp",
      "File → Import, rồi chọn PNG để chuyển bản vẽ sang dạng điểm ảnh",
      "Edit → Make a Bitmap Copy, rồi lưu bản sao vừa tạo thành tệp mới",
    ],
    answer: 0,
    explain:
      "Export PNG xuất ảnh bitmap để chèn vào tài liệu, đăng mạng; tệp gốc vẫn nên giữ dạng SVG để sửa sau.",
  },
  {
    id: "b15-07",
    q: "Khi xuất PNG, chọn độ phân giải (DPI/kích thước pixel) cao hơn sẽ:",
    options: [
      "Ảnh nét hơn khi in khổ lớn nhưng dung lượng tệp cũng nặng hơn",
      "Ảnh nét hơn khi in khổ lớn mà dung lượng tệp vẫn giữ nguyên như cũ",
      "Ảnh hiển thị nhỏ lại trên màn hình vì các điểm ảnh bị thu gọn hơn",
      "Ảnh giữ nguyên độ nét nhưng màu sắc được tái hiện trung thực hơn",
    ],
    answer: 0,
    explain: "Nhiều pixel hơn = chi tiết hơn = dung lượng lớn hơn; chọn phù hợp mục đích (web vs in ấn).",
  },
  {
    id: "b15-08",
    q: "Vì sao nên lưu tệp SVG gốc kể cả khi đã xuất PNG?",
    options: [
      "SVG giữ nguyên từng đối tượng để sửa tiếp, còn PNG đã phẳng thành điểm ảnh",
      "SVG luôn có dung lượng nhỏ hơn PNG nên lưu cả hai vẫn tiết kiệm ổ cứng",
      "Tệp PNG chỉ mở được bằng Inkscape, còn SVG mở được bằng mọi phần mềm",
      "SVG cho màu in trung thực hơn nên phải gửi tệp SVG cho xưởng in ấn",
    ],
    answer: 0,
    explain:
      "PNG mất cấu trúc đối tượng — muốn sửa chữ, đổi màu từng phần phải quay về tệp SVG nguồn.",
  },
  {
    id: "b15-09",
    q: "Gradient (chuyển sắc) là gì?",
    options: [
      "Kiểu tô màu chuyển dần từ màu này sang màu khác, thẳng hoặc toả tròn",
      "Kiểu tô màu bằng một màu duy nhất nhưng có độ đậm nhạt thay đổi được",
      "Hiệu ứng làm nhoè các đường viền để hình trông mềm mại và tự nhiên hơn",
      "Hiệu ứng đổ bóng phía sau đối tượng để tạo cảm giác nổi khối trên nền",
    ],
    answer: 0,
    explain: "Gradient tạo dải màu mượt (thẳng hoặc toả tròn) — làm hình khối có chiều sâu hơn.",
  },
  {
    id: "b15-10",
    q: "Quy trình hợp lí để hoàn thiện một sản phẩm đồ hoạ (logo, thiệp) là:",
    options: [
      "Phác thảo ý tưởng → dựng hình → phối màu và chữ → căn chỉnh → xuất tệp",
      "Chọn bảng màu → xuất tệp thử → dựng hình theo màu → phác thảo lại ý tưởng",
      "Dựng hình ngay trên máy → phác thảo lại ra giấy → phối màu → xuất tệp",
      "Xuất tệp trống theo đúng khổ cần in → dựng hình → phối màu → căn chỉnh",
    ],
    answer: 0,
    explain: "Làm việc có quy trình giúp sản phẩm nhất quán và tiết kiệm thời gian chỉnh sửa.",
  },
];

export default questions;
