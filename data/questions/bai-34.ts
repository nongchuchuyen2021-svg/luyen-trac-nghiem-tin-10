import type { Question } from "@/lib/types";

// Bài 34. Nghề phát triển phần mềm
const questions: Question[] = [
  {
    id: "b34-01",
    q: "Phát triển phần mềm là nghề làm công việc gì?",
    options: [
      "Phân tích yêu cầu, thiết kế, lập trình, kiểm thử và bảo trì sản phẩm phần mềm",
      "Chỉ viết mã nguồn theo bản thiết kế có sẵn, không tham gia các khâu còn lại",
      "Lắp đặt, cấu hình và sửa chữa máy tính, mạng nội bộ cho các doanh nghiệp",
      "Thiết kế giao diện đồ hoạ và ấn phẩm quảng cáo cho các sản phẩm công nghệ",
    ],
    answer: 0,
    explain:
      "Làm phần mềm là cả một quy trình nhiều công đoạn, lập trình chỉ là một phần trong đó. Lắp đặt máy là công việc của kĩ thuật viên IT, còn thiết kế ấn phẩm thuộc nghề đồ hoạ.",
  },
  {
    id: "b34-02",
    q: "Các công đoạn chính của quy trình phát triển phần mềm theo thứ tự là:",
    options: [
      "Xác định yêu cầu → thiết kế → lập trình → kiểm thử → triển khai, bảo trì",
      "Thiết kế → xác định yêu cầu → lập trình → triển khai → kiểm thử, bảo trì",
      "Lập trình → xác định yêu cầu → thiết kế → kiểm thử → triển khai, bảo trì",
      "Xác định yêu cầu → lập trình → kiểm thử → thiết kế → triển khai, bảo trì",
    ],
    answer: 0,
    explain:
      "Phải hiểu người dùng cần gì trước, thiết kế giải pháp, rồi mới viết code, kiểm thử và vận hành. Thiết kế hay lập trình trước khi biết yêu cầu là làm ngược quy trình.",
  },
  {
    id: "b34-03",
    q: "Lập trình viên (developer) làm nhiệm vụ gì trong nhóm phát triển?",
    options: [
      "Viết mã nguồn để hiện thực hoá bản thiết kế thành chương trình chạy được",
      "Gặp gỡ khách hàng để thu thập và mô tả lại các yêu cầu nghiệp vụ chi tiết",
      "Thiết kế các tình huống thử nhằm phát hiện lỗi trước khi phần mềm phát hành",
      "Lập kế hoạch, phân công công việc và theo dõi tiến độ chung của cả nhóm",
    ],
    answer: 0,
    explain:
      "Developer chuyển thiết kế thành mã nguồn. Ba phương án còn lại lần lượt là việc của chuyên viên phân tích nghiệp vụ, kĩ sư kiểm thử và quản trị dự án.",
  },
  {
    id: "b34-04",
    q: "Kĩ sư kiểm thử (tester) có vai trò gì trong nhóm phát triển phần mềm?",
    options: [
      "Thiết kế tình huống thử để tìm lỗi trước khi phần mềm đến tay người dùng",
      "Viết mã nguồn cho các tính năng chính theo bản thiết kế đã được duyệt",
      "Thiết kế giao diện và trải nghiệm sử dụng cho người dùng cuối của sản phẩm",
      "Cài đặt phần mềm lên máy chủ và theo dõi hệ thống vận hành hằng ngày",
    ],
    answer: 0,
    explain:
      "Tester chủ động nghĩ ra các tình huống để 'bắt' lỗi sớm — vận dụng kiến thức kiểm thử ở Bài 30. Ba việc còn lại thuộc về developer, người thiết kế UI/UX và kĩ sư vận hành.",
  },
  {
    id: "b34-05",
    q: "Tố chất nào quan trọng nhất với người làm nghề phát triển phần mềm?",
    options: [
      "Tư duy lôgic, kiên trì giải quyết vấn đề, ham học công nghệ mới, làm việc nhóm",
      "Gõ bàn phím thật nhanh và nhớ chính xác cú pháp của nhiều ngôn ngữ lập trình",
      "Giỏi tính nhẩm các phép toán phức tạp và thuộc lòng nhiều công thức toán học",
      "Khả năng làm việc độc lập tuyệt đối, tự giải quyết mọi việc không cần trao đổi",
    ],
    answer: 0,
    explain:
      "Cú pháp có thể tra cứu, phép tính đã có máy lo; thứ máy không thay được là tư duy giải quyết vấn đề. Phần mềm lớn luôn do nhóm làm nên không thể 'độc lập tuyệt đối'.",
  },
  {
    id: "b34-06",
    q: "Sản phẩm nào sau đây là kết quả của nghề phát triển phần mềm?",
    options: [
      "Ứng dụng di động, website, trò chơi, phần mềm quản lí, hệ thống trí tuệ nhân tạo",
      "Bộ vi xử lí, bo mạch chủ, ổ cứng và các linh kiện điện tử bên trong máy tính",
      "Cáp mạng, bộ định tuyến và hệ thống mạng nội bộ đã lắp đặt cho công ty",
      "Poster, logo, video quảng cáo và các ấn phẩm truyền thông trên môi trường số",
    ],
    answer: 0,
    explain:
      "Phần mềm là sản phẩm phi vật thể chạy trên máy tính. Linh kiện là sản phẩm của ngành điện tử, hệ thống mạng của kĩ thuật mạng, ấn phẩm của thiết kế đồ hoạ.",
  },
  {
    id: "b34-07",
    q: "Ngôn ngữ Python học ở lớp 10 có liên quan thế nào đến nghề phát triển phần mềm?",
    options: [
      "Là bước khởi đầu rèn tư duy lập trình — nền tảng chung của nghề phần mềm",
      "Là ngôn ngữ duy nhất được dùng trong mọi dự án phần mềm chuyên nghiệp",
      "Chỉ phục vụ việc thi cử ở phổ thông, các công ty phần mềm không dùng đến",
      "Là ngôn ngữ chuyên dụng dành riêng cho việc thiết kế đồ hoạ và xử lí ảnh",
    ],
    answer: 0,
    explain:
      "Python được dùng rộng rãi trong web, dữ liệu và AI, nhưng không phải ngôn ngữ duy nhất — mỗi lĩnh vực có ngôn ngữ mạnh riêng. Điều quý nhất mang theo là tư duy lập trình.",
  },
  {
    id: "b34-08",
    q: "Cơ hội việc làm của nghề phát triển phần mềm ở Việt Nam hiện nay như thế nào?",
    options: [
      "Nhu cầu tuyển dụng lớn, thu nhập khá, có thể làm từ xa cho công ty nước ngoài",
      "Nhu cầu tuyển dụng rất thấp vì trí tuệ nhân tạo đã thay thế hết lập trình viên",
      "Chỉ tuyển được ở các thành phố lớn và bắt buộc phải có bằng thạc sĩ trở lên",
      "Thu nhập cao nhưng chỉ làm được đến khoảng 30 tuổi rồi buộc phải đổi nghề",
    ],
    answer: 0,
    explain:
      "Công nghệ thông tin nhiều năm liền thiếu nhân lực. AI hiện là công cụ hỗ trợ chứ chưa thay được người; làm việc từ xa giúp người ở tỉnh vẫn nhận được việc tốt.",
  },
  {
    id: "b34-09",
    q: "Muốn theo nghề phát triển phần mềm, học sinh nên chọn nhóm ngành nào?",
    options: [
      "Công nghệ thông tin, Khoa học máy tính, Kĩ thuật phần mềm, An toàn thông tin",
      "Kĩ thuật điện tử, Cơ khí chế tạo máy, Tự động hoá và điều khiển công nghiệp",
      "Thiết kế đồ hoạ, Truyền thông đa phương tiện, Mĩ thuật ứng dụng, Kiến trúc",
      "Quản trị kinh doanh, Kế toán, Tài chính ngân hàng, Marketing thương mại",
    ],
    answer: 0,
    explain:
      "Các ngành này đào tạo trực tiếp về lập trình và công nghệ phần mềm. Ngoài đại học còn có cao đẳng và các khoá đào tạo nghề thiên về thực hành.",
  },
  {
    id: "b34-10",
    q: "Vì sao nghề phát triển phần mềm đòi hỏi kĩ năng làm việc nhóm?",
    options: [
      "Phần mềm lớn do nhiều người cùng xây dựng nên phải phối hợp và dùng chung mã nguồn",
      "Vì mỗi lập trình viên chỉ thành thạo một ngôn ngữ nên cần ghép đủ nhóm ngôn ngữ",
      "Vì số người tham gia tăng bao nhiêu lần thì thời gian hoàn thành giảm bấy nhiêu lần",
      "Vì quy định của ngành bắt buộc mọi dự án phần mềm phải có tối thiểu năm thành viên",
    ],
    answer: 0,
    explain:
      "Một ứng dụng thực tế gồm hàng nghìn tệp mã nguồn nên cần phối hợp và công cụ quản lí phiên bản. Lưu ý: thêm người KHÔNG làm dự án nhanh lên tương ứng, vì còn tốn công trao đổi.",
  },
];

export default questions;
