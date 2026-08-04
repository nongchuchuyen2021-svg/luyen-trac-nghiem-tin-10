import type { LessonExtra } from "@/lib/types";

// Bài 13. Bổ sung các đối tượng đồ hoạ
const extra: LessonExtra = {
  tf: [
    {
      id: "b13-tf1",
      context:
        "Bạn Sim thiết kế phông nền Trung thu cho chi đoàn bằng Inkscape: vẽ một hình tròn vàng làm mặt trăng, một hình chữ nhật xanh thẫm làm bầu trời và một ngôi sao trắng nhỏ. Nhưng khi vẽ xong bầu trời thì mặt trăng biến đâu mất! Loay hoay một hồi, Sim mới phát hiện mặt trăng bị hình chữ nhật vẽ sau che khuất, bèn chọn hình chữ nhật rồi dùng lệnh đẩy nó xuống dưới cùng.",
      statements: [
        {
          text: "Mặt trăng \"biến mất\" vì đối tượng vẽ sau nằm ở lớp trên, che các đối tượng vẽ trước.",
          answer: true,
          explain: "Đối tượng mới mặc định nằm trên cùng theo thứ tự xếp lớp (z-order).",
        },
        {
          text: "Lệnh Sim dùng để đưa hình chữ nhật xuống dưới cùng thuộc nhóm lệnh Raise/Lower (thay đổi thứ tự trên dưới).",
          answer: true,
          explain: "Lower to Bottom đưa đối tượng xuống đáy — mặt trăng hiện ra lại.",
        },
        {
          text: "Muốn vẽ mặt trăng tròn tuyệt đối, khi kéo công cụ Ellipse cần giữ phím Ctrl.",
          answer: true,
          explain: "Ctrl khoá tỉ lệ 1:1, elip thành hình tròn chuẩn.",
        },
        {
          text: "Vì thứ tự đã cố định khi vẽ nên nếu vẽ nhầm thứ tự thì phải xoá đi vẽ lại từ đầu.",
          answer: false,
          explain: "Thứ tự trên dưới thay đổi được bất cứ lúc nào bằng các lệnh Raise/Lower — không cần vẽ lại.",
        },
      ],
    },
    {
      id: "b13-tf2",
      context:
        "Tiếp tục tấm phông Trung thu, Sim cần rất nhiều ngôi sao giống nhau rải khắp bầu trời. Sim vẽ một ngôi sao ưng ý rồi nhấn Ctrl+D liên tiếp, kéo từng bản sao ra các vị trí khác nhau, con to con nhỏ. Cuối cùng, Sim quét chọn cả cụm trăng-sao-bầu trời rồi nhấn Ctrl+G để khoá chúng thành một khối trước khi ghép thêm dòng chữ \"Vui Tết Trung thu\".",
      statements: [
        {
          text: "Ctrl+D nhân đôi đối tượng đang chọn — cách nhanh để tạo nhiều ngôi sao giống nhau.",
          answer: true,
          explain: "Duplicate tạo bản sao ngay tại chỗ, chỉ việc kéo ra vị trí mới.",
        },
        {
          text: "Có thể co giãn từng bản sao để tạo các ngôi sao to nhỏ khác nhau từ cùng một hình gốc.",
          answer: true,
          explain: "Mỗi bản sao là đối tượng độc lập, biến đổi kích thước tuỳ ý.",
        },
        {
          text: "Ctrl+G nhóm nhiều đối tượng thành một khối để di chuyển, co giãn đồng bộ.",
          answer: true,
          explain: "Group giúp thao tác cả cụm như một đối tượng duy nhất.",
        },
        {
          text: "Sau khi đã nhóm bằng Ctrl+G thì không còn cách nào tách các đối tượng ra để chỉnh riêng nữa.",
          answer: false,
          explain: "Ctrl+Shift+G (Ungroup) tách nhóm trở lại các đối tượng rời bất cứ lúc nào.",
        },
      ],
    },
    {
      id: "b13-tf3",
      context:
        "Nhóm bạn Liên thiết kế bảng nội quy lớp học đẹp mắt: tiêu đề trên cùng, dưới là 5 khung chữ nhật bo góc chứa 5 điều nội quy. Vẽ xong, các khung nằm lệch lạc cái cao cái thấp, khoảng cách không đều. Liên định căn từng cái bằng mắt thì bạn Múi ngăn lại: \"Dùng hộp thoại Align & Distribute ấy, chọn cả 5 khung rồi bấm căn trái và chia đều khoảng cách dọc — một giây là thẳng tắp!\"",
      statements: [
        {
          text: "Chức năng Align (căn chỉnh) giúp các đối tượng thẳng hàng theo mép trái, phải, giữa...",
          answer: true,
          explain: "Align căn các đối tượng theo một chuẩn chung chính xác tuyệt đối.",
        },
        {
          text: "Chức năng Distribute (phân bố) giúp chia đều khoảng cách giữa các đối tượng.",
          answer: true,
          explain: "Distribute dàn các đối tượng với khoảng cách bằng nhau — hết cảnh cái thưa cái mau.",
        },
        {
          text: "Căn chỉnh bằng công cụ chính xác hơn và nhanh hơn căn bằng mắt.",
          answer: true,
          explain: "Máy tính căn theo toạ độ tuyệt đối — mắt thường không thể chuẩn bằng.",
        },
        {
          text: "Muốn dùng Align & Distribute, mỗi lần chỉ được chọn đúng một đối tượng.",
          answer: false,
          explain: "Ngược lại — phải chọn NHIỀU đối tượng thì việc căn hàng, chia khoảng cách mới có ý nghĩa.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b13-es1",
      q: "Trình bày các thao tác cơ bản với đối tượng đồ hoạ trong Inkscape: nhân đôi, nhóm/tách nhóm, thay đổi thứ tự trên dưới, căn chỉnh. Mỗi thao tác nêu rõ phím tắt hoặc vị trí lệnh và một tình huống sử dụng.",
      answer:
        "- Nhân đôi: Ctrl+D — tạo nhanh nhiều bản sao (dãy ngôi sao trang trí).\n- Nhóm: Ctrl+G / Tách nhóm: Ctrl+Shift+G — gộp logo gồm nhiều mảnh để di chuyển cả cụm, tách ra khi cần sửa từng phần.\n- Thứ tự trên dưới: các lệnh Raise/Lower (Object menu, phím Page Up/Page Down, Home/End) — đưa nền xuống dưới, chữ lên trên.\n- Căn chỉnh: hộp thoại Align & Distribute (Shift+Ctrl+A) — căn các khung nội dung thẳng hàng, chia đều khoảng cách.",
    },
    {
      id: "b13-es2",
      q: "Em được giao thiết kế tấm thiệp chúc mừng ngày Nhà giáo Việt Nam 20/11 gồm: nền màu, hoa trang trí, dòng chữ chúc mừng. Hãy mô tả các bước thực hiện trên Inkscape theo thứ tự hợp lí, có vận dụng xếp lớp và nhóm đối tượng.",
      answer:
        "Gợi ý các bước: (1) Vẽ hình chữ nhật to làm nền thiệp, tô màu/chuyển sắc nhẹ nhàng — nằm dưới cùng; (2) Vẽ một bông hoa từ các elip cánh hoa + hình tròn nhuỵ, chỉnh fill/stroke, nhóm lại (Ctrl+G) thành một đối tượng hoa; (3) Ctrl+D nhân đôi hoa thành nhiều bông, co giãn to nhỏ, xoay và rải ở các góc thiệp; (4) Dùng công cụ Text gõ \"Chúc mừng ngày Nhà giáo Việt Nam 20/11\", chọn phông chữ trang trọng, chỉnh cỡ và màu nổi trên nền, đặt ở lớp trên cùng; (5) Dùng Align căn chữ vào giữa thiệp; (6) Kiểm tra thứ tự lớp: nền dưới cùng → hoa → chữ trên cùng; (7) Lưu tệp SVG gốc và xuất PNG để in/gửi.",
    },
  ],
};

export default extra;
