import type { Question } from "@/lib/types";

// Bài 33. Nghề thiết kế đồ hoạ máy tính
const questions: Question[] = [
  {
    id: "b33-01",
    q: "Người làm nghề thiết kế đồ hoạ máy tính chủ yếu làm công việc gì?",
    options: [
      "Sáng tạo sản phẩm truyền thông thị giác: logo, poster, bao bì, giao diện, minh hoạ...",
      "Sửa chữa phần cứng máy tính",
      "Lắp đặt mạng Internet",
      "Bán linh kiện điện tử",
    ],
    answer: 0,
    explain:
      "Nhà thiết kế đồ hoạ dùng công cụ số để truyền tải thông điệp bằng hình ảnh.",
  },
  {
    id: "b33-02",
    q: "Nhóm phần mềm nào là công cụ chính của nhà thiết kế đồ hoạ?",
    options: [
      "Photoshop, Illustrator, GIMP, Inkscape, Figma",
      "Excel, Access",
      "Zalo, Messenger",
      "Windows Defender",
    ],
    answer: 0,
    explain: "Phần mềm xử lí ảnh bitmap, vẽ vector và thiết kế giao diện là đồ nghề hằng ngày.",
  },
  {
    id: "b33-03",
    q: "Tố chất nào QUAN TRỌNG với người theo nghề thiết kế đồ hoạ?",
    options: [
      "Óc thẩm mĩ, sáng tạo, kết hợp kĩ năng sử dụng công cụ số",
      "Chiều cao trên 1m70",
      "Chạy nhanh",
      "Thuộc nhiều thơ",
    ],
    answer: 0,
    explain: "Nghề đòi hỏi con mắt thẩm mĩ + tư duy sáng tạo + thành thạo phần mềm.",
  },
  {
    id: "b33-04",
    q: "Sản phẩm nào KHÔNG phải của thiết kế đồ hoạ?",
    options: [
      "Bảng lương nhân viên hàng tháng",
      "Bộ nhận diện thương hiệu",
      "Giao diện ứng dụng di động",
      "Poster phim",
    ],
    answer: 0,
    explain: "Bảng lương là nghiệp vụ kế toán; ba sản phẩm còn lại đều là thiết kế thị giác.",
  },
  {
    id: "b33-05",
    q: "Nhà thiết kế đồ hoạ có thể làm việc ở đâu?",
    options: [
      "Công ty quảng cáo, xưởng game, toà soạn, studio, hoặc làm tự do (freelance)",
      "Chỉ ở nhà máy sản xuất",
      "Chỉ trong bệnh viện",
      "Chỉ ở cơ quan nhà nước",
    ],
    answer: 0,
    explain: "Nhu cầu thiết kế có ở hầu hết ngành; làm freelance từ xa cũng rất phổ biến.",
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
      "Phân biệt đồ hoạ vector/bitmap, sử dụng Inkscape/GIMP (chủ đề 4)",
      "Cấu trúc câu lệnh while",
      "Bảng chân trị của phép AND",
      "Cách đổi số nhị phân",
    ],
    answer: 0,
    explain: "Chủ đề Ứng dụng tin học lớp 10 chính là bước làm quen đầu tiên với nghề này.",
  },
  {
    id: "b33-08",
    q: "Muốn theo nghề thiết kế đồ hoạ, học sinh có thể học ngành nào?",
    options: [
      "Thiết kế đồ hoạ, Mĩ thuật ứng dụng, Truyền thông đa phương tiện",
      "Thú y",
      "Địa chất",
      "Hàng hải",
    ],
    answer: 0,
    explain: "Các ngành này đào tạo cả nền tảng mĩ thuật lẫn công cụ thiết kế số.",
  },
  {
    id: "b33-09",
    q: "Xu hướng nào mở rộng cơ hội cho nghề thiết kế đồ hoạ hiện nay?",
    options: [
      "Thương mại điện tử, mạng xã hội, game, và công cụ AI hỗ trợ sáng tạo",
      "Sự biến mất của Internet",
      "Người dùng không thích hình ảnh nữa",
      "Máy tính ngày càng đắt",
    ],
    answer: 0,
    explain:
      "Nội dung số bùng nổ khiến nhu cầu hình ảnh tăng mạnh; AI trở thành trợ thủ tăng năng suất.",
  },
  {
    id: "b33-10",
    q: "Một buổi thuyết trình sản phẩm thiết kế cho khách hàng đòi hỏi thêm kĩ năng gì?",
    options: [
      "Giao tiếp, trình bày ý tưởng và tiếp nhận phản hồi",
      "Không cần kĩ năng gì thêm",
      "Kĩ năng sửa ống nước",
      "Trí nhớ thuộc lòng số điện thoại",
    ],
    answer: 0,
    explain:
      "Thiết kế là nghề làm việc với con người: hiểu yêu cầu, thuyết phục và chỉnh sửa theo góp ý.",
  },
];

export default questions;
