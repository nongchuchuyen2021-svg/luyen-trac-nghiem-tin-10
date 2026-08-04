import type { Question } from "@/lib/types";

// Bài 2. Vai trò của thiết bị thông minh và tin học đối với xã hội
const questions: Question[] = [
  {
    id: "b2-01",
    q: "Thiết bị thông minh là gì?",
    options: [
      "Thiết bị điện tử có thể hoạt động tự chủ ở mức độ nhất định nhờ phần mềm điều khiển",
      "Mọi thiết bị chạy bằng điện",
      "Thiết bị có màn hình cảm ứng",
      "Thiết bị có giá thành cao",
    ],
    answer: 0,
    explain:
      "Thiết bị thông minh là thiết bị điện tử hoạt động tự chủ (không cần người điều khiển liên tục) nhờ được cài phần mềm xử lí thông tin, thường có khả năng kết nối.",
  },
  {
    id: "b2-02",
    q: "Thiết bị nào sau đây là thiết bị thông minh?",
    options: ["Đồng hồ thông minh (smartwatch)", "Quạt bàn cơ", "Bóng đèn sợi đốt", "Máy tính bỏ túi đơn giản"],
    answer: 0,
    explain:
      "Smartwatch có bộ xử lí, phần mềm, cảm biến và kết nối không dây — đủ đặc điểm của thiết bị thông minh.",
  },
  {
    id: "b2-03",
    q: "Cuộc cách mạng công nghiệp lần thứ tư (4.0) gắn với đặc trưng nào?",
    options: [
      "Kết nối vạn vật, trí tuệ nhân tạo, dữ liệu lớn và tự động hoá thông minh",
      "Cơ giới hoá bằng máy hơi nước",
      "Điện khí hoá sản xuất",
      "Tự động hoá bằng máy tính cá nhân",
    ],
    answer: 0,
    explain:
      "CMCN 4.0 dựa trên IoT, AI, dữ liệu lớn, điện toán đám mây... trong đó thiết bị thông minh đóng vai trò chủ chốt.",
  },
  {
    id: "b2-04",
    q: "IoT (Internet of Things) nghĩa là gì?",
    options: [
      "Mạng lưới các thiết bị được kết nối Internet để thu thập và trao đổi dữ liệu tự động",
      "Một loại máy tính cỡ lớn",
      "Phần mềm diệt virus trên Internet",
      "Dịch vụ mua bán trực tuyến",
    ],
    answer: 0,
    explain:
      "IoT — Internet vạn vật — là mạng lưới thiết bị (cảm biến, đồ gia dụng, xe cộ...) kết nối Internet, tự thu thập và trao đổi dữ liệu.",
  },
  {
    id: "b2-05",
    q: "Đóng góp nào của tin học KHÔNG đúng?",
    options: [
      "Tin học thay thế hoàn toàn con người trong mọi hoạt động",
      "Tin học giúp quản lí, điều hành xã hội hiệu quả hơn",
      "Tin học thúc đẩy phát triển kinh tế số, thương mại điện tử",
      "Tin học hỗ trợ nghiên cứu khoa học và giáo dục",
    ],
    answer: 0,
    explain:
      "Tin học là công cụ hỗ trợ đắc lực nhưng không thay thế hoàn toàn con người — con người vẫn quyết định mục tiêu và chịu trách nhiệm.",
  },
  {
    id: "b2-06",
    q: "Ứng dụng nào sau đây là thành tựu của trí tuệ nhân tạo (AI)?",
    options: [
      "Trợ lí ảo nhận dạng giọng nói như Siri, Google Assistant",
      "Bảng tính Excel cộng các số",
      "Máy in in tài liệu",
      "USB lưu trữ dữ liệu",
    ],
    answer: 0,
    explain:
      "Nhận dạng giọng nói, nhận dạng hình ảnh, dịch tự động... là các ứng dụng tiêu biểu của AI.",
  },
  {
    id: "b2-07",
    q: "Học tập trực tuyến (e-learning) là ví dụ về đóng góp của tin học trong lĩnh vực nào?",
    options: ["Giáo dục", "Y tế", "Giao thông", "Nông nghiệp"],
    answer: 0,
    explain:
      "E-learning ứng dụng tin học vào giáo dục: học từ xa, kho học liệu số, lớp học ảo...",
  },
  {
    id: "b2-08",
    q: "Đặc điểm nào giúp thiết bị thông minh ngày càng phổ biến?",
    options: [
      "Nhỏ gọn, giá hợp lí, kết nối không dây và nhiều tiện ích",
      "Chỉ dành cho chuyên gia sử dụng",
      "Không cần nguồn điện",
      "Không cần phần mềm",
    ],
    answer: 0,
    explain:
      "Nhờ công nghệ vi xử lí phát triển, thiết bị thông minh nhỏ gọn, rẻ hơn, kết nối dễ dàng nên phổ biến rộng rãi.",
  },
  {
    id: "b2-09",
    q: 'Thành tựu nào sau đây thuộc về "xã hội tri thức"?',
    options: [
      "Tri thức và thông tin trở thành nguồn lực chính tạo ra của cải",
      "Sản xuất chủ yếu dựa vào lao động cơ bắp",
      "Kinh tế chỉ dựa vào tài nguyên thiên nhiên",
      "Mọi giao dịch đều dùng tiền mặt",
    ],
    answer: 0,
    explain:
      "Trong xã hội tri thức, tri thức (mà tin học là công cụ tạo ra, lưu trữ, phân phối) là nguồn lực quan trọng nhất.",
  },
  {
    id: "b2-10",
    q: "Camera giám sát giao thông tự động phát hiện xe vượt đèn đỏ là ứng dụng kết hợp của những công nghệ nào?",
    options: [
      "Thiết bị thông minh + xử lí ảnh (AI) + kết nối mạng",
      "Máy in + bàn phím",
      "USB + loa",
      "Màn hình + chuột máy tính",
    ],
    answer: 0,
    explain:
      "Camera là thiết bị thông minh, dùng AI nhận dạng biển số/hành vi, truyền dữ liệu qua mạng về trung tâm xử lí.",
  },
  {
    id: "b2-11",
    q: "Khi sử dụng thiết bị thông minh, điều nào sau đây NÊN làm?",
    options: [
      "Cập nhật phần mềm và cài mật khẩu bảo vệ thiết bị",
      "Dùng liên tục nhiều giờ không nghỉ",
      "Chia sẻ vị trí công khai mọi lúc",
      "Cài đặt phần mềm từ nguồn không rõ ràng",
    ],
    answer: 0,
    explain:
      "Cập nhật phần mềm vá lỗi bảo mật và đặt mật khẩu là thói quen sử dụng thiết bị thông minh an toàn.",
  },
  {
    id: "b2-12",
    q: "Robot lau nhà tự tránh vật cản và tự về trạm sạc thể hiện đặc điểm nào của thiết bị thông minh?",
    options: [
      "Khả năng hoạt động tự chủ",
      "Giá thành rẻ",
      "Kích thước nhỏ",
      "Tiết kiệm điện",
    ],
    answer: 0,
    explain:
      "Tự cảm nhận môi trường (cảm biến) và tự ra quyết định (phần mềm) không cần người điều khiển liên tục = tính tự chủ.",
  },
];

export default questions;
