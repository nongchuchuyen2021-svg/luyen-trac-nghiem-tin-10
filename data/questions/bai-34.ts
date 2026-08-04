import type { Question } from "@/lib/types";

// Bài 34. Nghề phát triển phần mềm
const questions: Question[] = [
  {
    id: "b34-01",
    q: "Phát triển phần mềm là nghề làm công việc gì?",
    options: [
      "Phân tích yêu cầu, thiết kế, lập trình, kiểm thử và bảo trì các sản phẩm phần mềm",
      "Chỉ gõ code cả ngày không cần suy nghĩ",
      "Bán máy tính",
      "Sửa màn hình bị vỡ",
    ],
    answer: 0,
    explain:
      "Làm phần mềm là cả một quy trình nhiều công đoạn, lập trình chỉ là một phần trong đó.",
  },
  {
    id: "b34-02",
    q: "Các công đoạn chính của quy trình phát triển phần mềm theo thứ tự là:",
    options: [
      "Xác định yêu cầu → thiết kế → lập trình → kiểm thử → triển khai, bảo trì",
      "Lập trình → thiết kế → yêu cầu",
      "Kiểm thử → lập trình → thiết kế",
      "Bảo trì → triển khai → lập trình",
    ],
    answer: 0,
    explain: "Hiểu người dùng cần gì trước, thiết kế giải pháp, rồi mới viết code, kiểm thử và vận hành.",
  },
  {
    id: "b34-03",
    q: "Lập trình viên (developer) làm nhiệm vụ gì trong nhóm phát triển?",
    options: [
      "Viết code hiện thực hoá bản thiết kế thành chương trình chạy được",
      "Chỉ vẽ giao diện",
      "Chỉ viết tài liệu hướng dẫn",
      "Chỉ họp với khách hàng",
    ],
    answer: 0,
    explain: "Developer chuyển thiết kế thành mã nguồn bằng các ngôn ngữ như Python, Java, C++...",
  },
  {
    id: "b34-04",
    q: "Kĩ sư kiểm thử (tester) có vai trò gì?",
    options: [
      "Tìm lỗi của phần mềm trước khi đến tay người dùng",
      "Làm phần mềm chạy chậm đi",
      "Quảng cáo sản phẩm",
      "Lắp ráp máy tính",
    ],
    answer: 0,
    explain:
      "Tester thiết kế các tình huống thử để 'bắt' lỗi sớm — kiến thức kiểm thử em đã học ở Bài 30.",
  },
  {
    id: "b34-05",
    q: "Tố chất phù hợp với nghề phát triển phần mềm là:",
    options: [
      "Tư duy lôgic, kiên trì giải quyết vấn đề, ham học công nghệ mới, làm việc nhóm",
      "Chỉ cần đánh máy nhanh",
      "Thuộc lòng nhiều mật khẩu",
      "Có giọng hát hay",
    ],
    answer: 0,
    explain:
      "Công nghệ đổi liên tục nên khả năng tự học và tư duy giải quyết vấn đề quan trọng hơn kĩ năng gõ phím.",
  },
  {
    id: "b34-06",
    q: "Sản phẩm nào là kết quả của nghề phát triển phần mềm?",
    options: [
      "Ứng dụng di động, website, game, phần mềm quản lí, hệ thống AI",
      "Bàn ghế học sinh",
      "Sách giáo khoa in giấy",
      "Đồng phục nhà trường",
    ],
    answer: 0,
    explain: "Mọi ứng dụng em dùng hằng ngày (Zalo, game, web học tập...) đều do các nhóm phát triển làm ra.",
  },
  {
    id: "b34-07",
    q: "Ngôn ngữ Python em học ở lớp 10 liên quan gì đến nghề này?",
    options: [
      "Là bước khởi đầu rèn tư duy lập trình — nền tảng của nghề phát triển phần mềm",
      "Không liên quan gì",
      "Chỉ dùng để thi, đi làm không ai dùng Python",
      "Python chỉ dành cho hoạ sĩ",
    ],
    answer: 0,
    explain:
      "Python đang được dùng rộng rãi trong web, AI, dữ liệu — kiến thức lớp 10 là viên gạch đầu tiên.",
  },
  {
    id: "b34-08",
    q: "Cơ hội việc làm của nghề phát triển phần mềm ở Việt Nam hiện nay:",
    options: [
      "Nhu cầu tuyển dụng lớn, thu nhập khá, có thể làm cho công ty nước ngoài từ xa",
      "Gần như không có việc",
      "Chỉ tuyển người trên 40 tuổi",
      "Chỉ làm được ở nước ngoài",
    ],
    answer: 0,
    explain:
      "CNTT nhiều năm liền thuộc nhóm ngành thiếu nhân lực; làm việc từ xa xuyên biên giới ngày càng phổ biến.",
  },
  {
    id: "b34-09",
    q: "Muốn theo nghề phát triển phần mềm, học sinh nên chọn ngành học nào?",
    options: [
      "Công nghệ thông tin, Khoa học máy tính, Kĩ thuật phần mềm",
      "Chăn nuôi",
      "Khảo cổ học",
      "Luật quốc tế",
    ],
    answer: 0,
    explain: "Ngoài đại học còn có cao đẳng, các khoá đào tạo nghề lập trình thực hành.",
  },
  {
    id: "b34-10",
    q: "Vì sao nghề phần mềm yêu cầu kĩ năng LÀM VIỆC NHÓM?",
    options: [
      "Phần mềm lớn do nhiều người cùng xây dựng, phải phối hợp, chia việc, dùng chung mã nguồn",
      "Vì làm một mình bị cấm",
      "Vì máy tính chỉ chạy khi có 2 người trở lên",
      "Không cần làm việc nhóm",
    ],
    answer: 0,
    explain:
      "Một ứng dụng thực tế gồm hàng nghìn tệp code — teamwork và công cụ quản lí phiên bản là bắt buộc.",
  },
];

export default questions;
