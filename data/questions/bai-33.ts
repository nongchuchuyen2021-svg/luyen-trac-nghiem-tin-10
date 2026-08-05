import type { Question } from "@/lib/types";

// Bài 33. Nghề thiết kế đồ hoạ máy tính
const questions: Question[] = [
  {
    id: "b33-01",
    q: "Người làm nghề thiết kế đồ hoạ máy tính chủ yếu làm công việc gì?",
    options: [
      "Sáng tạo hình ảnh truyền thông: logo, poster, bao bì",
      "Lắp ráp, sửa chữa và bảo trì phần cứng máy tính",
      "Viết mã lệnh để xây dựng phần mềm ứng dụng",
      "Quản trị hệ thống mạng và máy chủ của công ty",
    ],
    answer: 0,
    explain:
      "Nhà thiết kế đồ hoạ dùng công cụ số để truyền tải thông điệp bằng hình ảnh. Ba việc còn lại thuộc về kĩ thuật viên phần cứng, lập trình viên và quản trị mạng.",
  },
  {
    id: "b33-02",
    q: "Nhóm phần mềm nào là công cụ chính của nhà thiết kế đồ hoạ?",
    options: [
      "Photoshop, Illustrator, GIMP, Inkscape, Figma",
      "Word, PowerPoint, Excel và bộ Microsoft Office",
      "Visual Studio Code, PyCharm, Scratch, Python IDLE",
      "Zalo, Messenger, Zoom và các ứng dụng liên lạc",
    ],
    answer: 0,
    explain:
      "Đồ nghề của nhà thiết kế là phần mềm xử lí ảnh bitmap, vẽ vector và thiết kế giao diện. Bộ Office dùng cho công việc văn phòng, nhóm thứ ba là môi trường lập trình, nhóm thứ tư chỉ để liên lạc.",
  },
  {
    id: "b33-03",
    q: "Tố chất nào QUAN TRỌNG với người theo nghề thiết kế đồ hoạ?",
    options: [
      "Óc thẩm mĩ, sáng tạo và thành thạo công cụ số",
      "Trí nhớ tốt để thuộc lòng mọi phím tắt phần mềm",
      "Khả năng vẽ tay đẹp, không cần dùng máy tính",
      "Giỏi tính toán và lập trình thuật toán phức tạp",
    ],
    answer: 0,
    explain:
      "Nghề cần con mắt thẩm mĩ, tư duy sáng tạo và kĩ năng dùng phần mềm. Phím tắt dùng nhiều sẽ tự nhớ; vẽ tay đẹp là lợi thế nhưng vẫn phải làm trên máy; còn thuật toán là việc của lập trình viên.",
  },
  {
    id: "b33-04",
    q: "Sản phẩm nào KHÔNG phải của thiết kế đồ hoạ?",
    options: [
      "Bảng lương nhân viên hàng tháng",
      "Bộ nhận diện thương hiệu công ty",
      "Giao diện ứng dụng trên di động",
      "Poster quảng cáo phim chiếu rạp",
    ],
    answer: 0,
    explain: "Bảng lương là nghiệp vụ kế toán; ba sản phẩm còn lại đều là thiết kế thị giác.",
  },
  {
    id: "b33-05",
    q: "Nhà thiết kế đồ hoạ có thể làm việc ở đâu?",
    options: [
      "Công ty quảng cáo, studio, toà soạn hoặc làm tự do",
      "Trung tâm dữ liệu, nơi vận hành máy chủ và mạng",
      "Xưởng lắp ráp linh kiện và sửa chữa máy tính",
      "Phòng thí nghiệm kiểm định thiết bị điện tử",
    ],
    answer: 0,
    explain:
      "Nhu cầu thiết kế có ở hầu hết các ngành, làm tự do (freelance) từ xa cũng rất phổ biến. Ba nơi còn lại là chỗ làm của quản trị mạng, kĩ thuật viên phần cứng và kĩ sư điện tử.",
  },
  {
    id: "b33-06",
    q: "Thiết kế giao diện người dùng cho web/app thường gọi là mảng:",
    options: ["UI/UX", "CPU/GPU", "LAN/WAN", "RGB/CMYK"],
    answer: 0,
    explain: "UI (giao diện) và UX (trải nghiệm người dùng) — mảng 'hot' của thiết kế số hiện nay.",
  },
  {
    id: "b33-07",
    q: "Kiến thức Tin học phổ thông nào hỗ trợ trực tiếp nghề thiết kế đồ hoạ?",
    options: [
      "Phân biệt ảnh vector với ảnh bitmap, dùng Inkscape",
      "Cấu trúc lặp while và for trong ngôn ngữ Python",
      "Bảng chân trị của các phép lôgic AND, OR, NOT",
      "Cách đổi số giữa hệ nhị phân và hệ thập phân",
    ],
    answer: 0,
    explain:
      "Chủ đề Ứng dụng tin học lớp 10 (đồ hoạ vector, Inkscape) là bước làm quen đầu tiên với nghề. Ba nội dung còn lại thuộc mảng lập trình và biểu diễn dữ liệu, hữu ích chung nhưng không hỗ trợ trực tiếp việc thiết kế.",
  },
  {
    id: "b33-08",
    q: "Muốn theo nghề thiết kế đồ hoạ, học sinh có thể học ngành nào?",
    options: [
      "Thiết kế đồ hoạ, Mĩ thuật ứng dụng, Truyền thông",
      "Khoa học máy tính, Kĩ thuật phần mềm, An toàn mạng",
      "Kĩ thuật điện tử, Cơ điện tử, Tự động hoá",
      "Quản trị kinh doanh, Marketing, Thương mại điện tử",
    ],
    answer: 0,
    explain:
      "Nhóm ngành đầu đào tạo cả nền tảng mĩ thuật lẫn công cụ thiết kế số. Ba nhóm còn lại thiên về lập trình, kĩ thuật và kinh doanh — có liên quan tới sản phẩm số nhưng không dạy nghề thiết kế.",
  },
  {
    id: "b33-09",
    q: "Xu hướng nào mở rộng cơ hội cho nghề thiết kế đồ hoạ hiện nay?",
    options: [
      "Thương mại điện tử, mạng xã hội, game và công cụ AI",
      "Người dùng chuyển dần sang đọc văn bản thuần tuý",
      "Phần mềm thiết kế dần chuyển sang thu phí rất cao",
      "Máy tính cá nhân ngày càng đắt và khó mua hơn",
    ],
    answer: 0,
    explain:
      "Nội dung số bùng nổ khiến nhu cầu hình ảnh tăng mạnh, AI trở thành trợ thủ tăng năng suất. Thực tế người dùng ngày càng chuộng hình ảnh, đã có nhiều phần mềm miễn phí như GIMP, Inkscape, và giá máy tính thì giảm dần.",
  },
  {
    id: "b33-10",
    q: "Một buổi thuyết trình sản phẩm thiết kế cho khách hàng đòi hỏi thêm kĩ năng gì?",
    options: [
      "Giao tiếp, trình bày ý tưởng và tiếp thu phản hồi",
      "Gõ phím thật nhanh để ghi lại lời khách hàng",
      "Thuộc lòng bảng giá của mọi phần mềm thiết kế",
      "Biết sửa máy chiếu và cài đặt phần mềm trình chiếu",
    ],
    answer: 0,
    explain:
      "Thiết kế là nghề làm việc với con người: hiểu yêu cầu, thuyết phục và chỉnh sửa theo góp ý. Ghi chép, bảng giá hay thiết bị trình chiếu chỉ là việc phụ trợ, không quyết định thành công của buổi thuyết trình.",
  },
];

export default questions;
