import type { Question } from "@/lib/types";

// Bài 8. Mạng máy tính trong cuộc sống hiện đại
const questions: Question[] = [
  {
    id: "b8-01",
    q: "Mạng máy tính là gì?",
    options: [
      "Tập hợp máy tính và thiết bị được kết nối để truyền dữ liệu, dùng chung tài nguyên",
      "Một máy tính cấu hình mạnh cho phép nhiều người cùng đăng nhập sử dụng",
      "Tập hợp các phần mềm được cài đặt và chạy đồng thời trên cùng một máy tính",
      "Hệ thống dây cáp và ổ điện được lắp đặt sẵn trong một phòng máy tính",
    ],
    answer: 0,
    explain:
      "Mạng máy tính = các thiết bị kết nối với nhau (có dây hoặc không dây) để trao đổi dữ liệu và dùng chung tài nguyên.",
  },
  {
    id: "b8-02",
    q: "LAN là viết tắt của loại mạng nào?",
    options: [
      "Mạng cục bộ — phạm vi hẹp trong một phòng, toà nhà hay khuôn viên trường",
      "Mạng diện rộng — phạm vi lớn nối nhiều tỉnh thành hoặc nhiều quốc gia",
      "Mạng riêng ảo — tạo đường truyền được mã hoá đi xuyên qua mạng công cộng",
      "Mạng đô thị — phạm vi trung bình phủ khắp một thành phố hoặc quận huyện",
    ],
    answer: 0,
    explain: "LAN (Local Area Network) là mạng cục bộ, phạm vi hẹp; WAN (Wide Area Network) là mạng diện rộng.",
  },
  {
    id: "b8-03",
    q: "Internet là gì?",
    options: [
      "Mạng của các mạng, nối hàng tỉ thiết bị toàn cầu bằng bộ giao thức TCP/IP",
      "Hệ thống các trang web được liên kết với nhau bằng siêu liên kết dạng HTML",
      "Phần mềm cho phép người dùng truy cập và xem nội dung các trang web",
      "Hệ thống mạng nội bộ của các tập đoàn lớn được nối với nhau qua cáp quang",
    ],
    answer: 0,
    explain:
      "Internet là mạng toàn cầu kết nối vô số mạng con, hoạt động dựa trên bộ giao thức chung TCP/IP.",
  },
  {
    id: "b8-04",
    q: "Thiết bị nào thường dùng để kết nối các thiết bị trong gia đình với Internet?",
    options: [
      "Bộ định tuyến — nối mạng nhà với nhà cung cấp dịch vụ và phát sóng Wi-Fi",
      "Bộ chuyển mạch — nối các máy trong cùng một mạng nội bộ bằng cáp mạng",
      "Bộ khuếch đại sóng — mở rộng vùng phủ Wi-Fi sang các phòng ở xa hơn",
      "Cạc mạng — bộ phận gắn trong máy tính giúp máy nhận và gửi gói tin",
    ],
    answer: 0,
    explain:
      "Router (bộ định tuyến) kết nối mạng gia đình với nhà cung cấp dịch vụ Internet và phát Wi-Fi cho các thiết bị.",
  },
  {
    id: "b8-05",
    q: "Điện toán đám mây (cloud computing) cho phép người dùng làm gì?",
    options: [
      "Dùng dịch vụ lưu trữ, phần mềm, máy chủ qua Internet mà không cần sở hữu hạ tầng",
      "Tăng tốc độ xử lí của máy tính cá nhân bằng cách mượn thêm CPU từ máy khác",
      "Lưu dữ liệu vào một vùng ẩn trên ổ cứng để tránh bị mã độc xâm nhập",
      "Kết nối trực tiếp hai máy tính bằng cáp để chép dữ liệu qua lại nhanh hơn",
    ],
    answer: 0,
    explain:
      "Với điện toán đám mây, tài nguyên tính toán được cung cấp như dịch vụ qua Internet (Google Drive, iCloud, Office 365...).",
  },
  {
    id: "b8-06",
    q: "Google Drive, OneDrive là ví dụ về dịch vụ đám mây loại nào?",
    options: [
      "Lưu trữ dữ liệu trực tuyến — gửi tệp lên máy chủ và truy cập từ mọi thiết bị",
      "Phần mềm dịch vụ trực tuyến — soạn thảo văn bản, bảng tính ngay trên trình duyệt",
      "Nền tảng dịch vụ trực tuyến — cung cấp môi trường để lập trình viên chạy ứng dụng",
      "Hạ tầng dịch vụ trực tuyến — cho thuê máy chủ ảo để tự cài hệ điều hành lên đó",
    ],
    answer: 0,
    explain: "Đây là các dịch vụ lưu trữ đám mây: dữ liệu để trên máy chủ của nhà cung cấp, truy cập từ mọi thiết bị.",
  },
  {
    id: "b8-07",
    q: "Ưu điểm nổi bật của việc lưu tệp trên đám mây so với lưu trên một máy tính là:",
    options: [
      "Truy cập được từ nhiều thiết bị, dễ chia sẻ, ít lo mất khi hỏng máy",
      "Tốc độ đọc ghi luôn nhanh hơn ổ cứng gắn trong máy tính cá nhân",
      "Dùng được cả khi không có kết nối Internet vì tệp đã lưu sẵn trên máy",
      "Được cấp dung lượng không giới hạn và hoàn toàn miễn phí trọn đời",
    ],
    answer: 0,
    explain:
      "Dữ liệu trên đám mây gắn với tài khoản, truy cập mọi nơi và được nhà cung cấp sao lưu; nhược điểm là cần mạng và dung lượng miễn phí có hạn.",
  },
  {
    id: "b8-08",
    q: "Mạng không dây Wi-Fi truyền dữ liệu bằng gì?",
    options: [
      "Sóng vô tuyến ở dải tần 2,4 GHz hoặc 5 GHz trong phạm vi ngắn",
      "Sóng hồng ngoại truyền thẳng giữa hai thiết bị đặt gần nhau",
      "Xung ánh sáng dẫn trong sợi cáp quang nối tới từng thiết bị",
      "Tín hiệu điện truyền qua đôi dây đồng xoắn trong cáp mạng",
    ],
    answer: 0,
    explain: "Wi-Fi dùng sóng vô tuyến để kết nối thiết bị với điểm truy cập trong phạm vi ngắn.",
  },
  {
    id: "b8-09",
    q: "IoT trong nông nghiệp thông minh có thể làm gì?",
    options: [
      "Cảm biến tự đo độ ẩm đất, gửi số liệu về hệ thống và tự bật tưới khi cần",
      "Thay thế hoàn toàn công việc của người nông dân trên đồng ruộng",
      "Giúp cây trồng sinh trưởng nhanh hơn nhiều lần so với cách trồng thường",
      "Tự động lai tạo ra các giống cây mới có năng suất cao và chịu hạn tốt",
    ],
    answer: 0,
    explain:
      "Cảm biến IoT thu thập dữ liệu (độ ẩm, nhiệt độ...) gửi về hệ thống, hệ thống tự ra quyết định tưới tiêu — ví dụ điển hình của IoT.",
  },
  {
    id: "b8-10",
    q: "Phát biểu nào về WAN là ĐÚNG?",
    options: [
      "WAN nối các mạng LAN ở xa nhau, phạm vi có thể là quốc gia hay toàn cầu",
      "WAN chỉ hoạt động trong phạm vi một toà nhà hoặc một khuôn viên nhất định",
      "WAN là cách gọi khác của mạng không dây Wi-Fi có vùng phủ sóng rộng",
      "WAN kết nối trực tiếp từng máy tính với nhau mà không cần bộ định tuyến",
    ],
    answer: 0,
    explain: "WAN (mạng diện rộng) liên kết nhiều LAN qua khoảng cách lớn; Internet là WAN lớn nhất.",
  },
  {
    id: "b8-11",
    q: "Học trực tuyến qua Zoom/Google Meet trong đại dịch là minh chứng cho vai trò nào của mạng?",
    options: [
      "Giúp xã hội duy trì việc học tập và làm việc ngay cả khi phải giãn cách",
      "Chứng tỏ lớp học trực tuyến có thể thay thế hoàn toàn trường học truyền thống",
      "Cho thấy nhu cầu dùng Internet sẽ giảm dần khi mọi việc đã lên mạng hết",
      "Chứng tỏ mạng máy tính chủ yếu phục vụ nhu cầu giải trí và liên lạc",
    ],
    answer: 0,
    explain:
      "Mạng máy tính giúp xã hội duy trì kết nối: học tập, làm việc, khám bệnh từ xa... ngay cả khi giãn cách.",
  },
  {
    id: "b8-12",
    q: "Khi chọn gói cước Internet gia đình, thông số nào cho biết tốc độ đường truyền?",
    options: [
      "Mbps — số mêgabit dữ liệu truyền được trong mỗi giây trên đường truyền",
      "GB — số gigabyte dữ liệu tối đa được phép tải về trong mỗi tháng",
      "GHz — tần số hoạt động của bộ định tuyến do nhà mạng lắp đặt tại nhà",
      "ms — độ trễ tính bằng mili giây khi gói tin đi tới máy chủ và quay về",
    ],
    answer: 0,
    explain: "Tốc độ truyền dữ liệu đo bằng bit/giây: Mbps, Gbps. Lưu ý phân biệt Mb (megabit) và MB (megabyte).",
  },
];

export default questions;
