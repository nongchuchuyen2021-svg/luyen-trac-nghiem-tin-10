import type { Question } from "@/lib/types";

// Bài 8. Mạng máy tính trong cuộc sống hiện đại
const questions: Question[] = [
  {
    id: "b8-01",
    q: "Mạng máy tính là gì?",
    options: [
      "Tập hợp các máy tính và thiết bị được kết nối để truyền dữ liệu và chia sẻ tài nguyên",
      "Một máy tính có cấu hình mạnh",
      "Tập hợp các phần mềm trên một máy tính",
      "Hệ thống dây điện trong phòng máy",
    ],
    answer: 0,
    explain:
      "Mạng máy tính = các thiết bị kết nối với nhau (có dây hoặc không dây) để trao đổi dữ liệu và dùng chung tài nguyên.",
  },
  {
    id: "b8-02",
    q: "LAN là viết tắt của loại mạng nào?",
    options: [
      "Mạng cục bộ — phạm vi nhỏ như phòng, toà nhà, trường học",
      "Mạng diện rộng — phạm vi quốc gia, toàn cầu",
      "Mạng di động 4G",
      "Mạng riêng ảo",
    ],
    answer: 0,
    explain: "LAN (Local Area Network) là mạng cục bộ, phạm vi hẹp; WAN (Wide Area Network) là mạng diện rộng.",
  },
  {
    id: "b8-03",
    q: "Internet là gì?",
    options: [
      "Mạng của các mạng, kết nối hàng tỉ thiết bị trên toàn cầu bằng bộ giao thức TCP/IP",
      "Một phần mềm duyệt web",
      "Mạng LAN của các công ty lớn",
      "Tên một công ty cung cấp dịch vụ mạng",
    ],
    answer: 0,
    explain:
      "Internet là mạng toàn cầu kết nối vô số mạng con, hoạt động dựa trên bộ giao thức chung TCP/IP.",
  },
  {
    id: "b8-04",
    q: "Thiết bị nào thường dùng để kết nối các thiết bị trong gia đình với Internet?",
    options: ["Bộ định tuyến (router)", "Máy in", "Ổ cứng di động", "Webcam"],
    answer: 0,
    explain:
      "Router (bộ định tuyến) kết nối mạng gia đình với nhà cung cấp dịch vụ Internet và phát Wi-Fi cho các thiết bị.",
  },
  {
    id: "b8-05",
    q: "Điện toán đám mây (cloud computing) cho phép người dùng làm gì?",
    options: [
      "Sử dụng dịch vụ lưu trữ, phần mềm, máy chủ... qua Internet mà không cần sở hữu hạ tầng",
      "Chỉ lưu ảnh trên máy tính cá nhân",
      "Kết nối hai máy tính bằng cáp trực tiếp",
      "Tăng tốc độ CPU của máy tính",
    ],
    answer: 0,
    explain:
      "Với điện toán đám mây, tài nguyên tính toán được cung cấp như dịch vụ qua Internet (Google Drive, iCloud, Office 365...).",
  },
  {
    id: "b8-06",
    q: "Google Drive, OneDrive là ví dụ về dịch vụ đám mây loại nào?",
    options: ["Lưu trữ dữ liệu trực tuyến", "Thiết kế đồ hoạ", "Diệt virus", "Quản lí mạng LAN"],
    answer: 0,
    explain: "Đây là các dịch vụ lưu trữ đám mây: dữ liệu để trên máy chủ của nhà cung cấp, truy cập từ mọi thiết bị.",
  },
  {
    id: "b8-07",
    q: "Ưu điểm nổi bật của việc lưu tệp trên đám mây so với lưu trên một máy tính là:",
    options: [
      "Truy cập được từ nhiều thiết bị, dễ chia sẻ, ít lo mất dữ liệu khi hỏng máy",
      "Không bao giờ cần Internet",
      "Luôn nhanh hơn ổ cứng máy tính",
      "Hoàn toàn miễn phí với dung lượng vô hạn",
    ],
    answer: 0,
    explain:
      "Dữ liệu trên đám mây gắn với tài khoản, truy cập mọi nơi và được nhà cung cấp sao lưu; nhược điểm là cần mạng và dung lượng miễn phí có hạn.",
  },
  {
    id: "b8-08",
    q: "Mạng không dây Wi-Fi truyền dữ liệu bằng gì?",
    options: ["Sóng vô tuyến", "Cáp quang", "Cáp xoắn đôi", "Tia laser"],
    answer: 0,
    explain: "Wi-Fi dùng sóng vô tuyến để kết nối thiết bị với điểm truy cập trong phạm vi ngắn.",
  },
  {
    id: "b8-09",
    q: "IoT trong nông nghiệp thông minh có thể làm gì?",
    options: [
      "Cảm biến tự đo độ ẩm đất và tự động tưới khi cần",
      "Thay đất trồng bằng nhựa",
      "Làm cây lớn nhanh gấp 100 lần",
      "Loại bỏ hoàn toàn nhu cầu chăm sóc",
    ],
    answer: 0,
    explain:
      "Cảm biến IoT thu thập dữ liệu (độ ẩm, nhiệt độ...) gửi về hệ thống, hệ thống tự ra quyết định tưới tiêu — ví dụ điển hình của IoT.",
  },
  {
    id: "b8-10",
    q: "Phát biểu nào về WAN là ĐÚNG?",
    options: [
      "WAN kết nối các mạng LAN ở khoảng cách xa, phạm vi có thể là quốc gia hoặc toàn cầu",
      "WAN chỉ hoạt động trong một toà nhà",
      "WAN không cần thiết bị định tuyến",
      "WAN là tên khác của Wi-Fi",
    ],
    answer: 0,
    explain: "WAN (mạng diện rộng) liên kết nhiều LAN qua khoảng cách lớn; Internet là WAN lớn nhất.",
  },
  {
    id: "b8-11",
    q: "Học trực tuyến qua Zoom/Google Meet trong đại dịch là minh chứng cho vai trò nào của mạng?",
    options: [
      "Duy trì hoạt động học tập, làm việc từ xa của xã hội",
      "Thay thế hoàn toàn trường học truyền thống",
      "Giảm nhu cầu sử dụng Internet",
      "Chứng minh mạng chỉ dành cho giải trí",
    ],
    answer: 0,
    explain:
      "Mạng máy tính giúp xã hội duy trì kết nối: học tập, làm việc, khám bệnh từ xa... ngay cả khi giãn cách.",
  },
  {
    id: "b8-12",
    q: "Khi chọn gói cước Internet gia đình, thông số nào cho biết tốc độ đường truyền?",
    options: ["Mbps (megabit trên giây)", "GB (gigabyte dung lượng ổ cứng)", "GHz (tần số CPU)", "MP (megapixel)"],
    answer: 0,
    explain: "Tốc độ truyền dữ liệu đo bằng bit/giây: Mbps, Gbps. Lưu ý phân biệt Mb (megabit) và MB (megabyte).",
  },
];

export default questions;
