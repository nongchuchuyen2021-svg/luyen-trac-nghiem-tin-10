import type { LessonExtra } from "@/lib/types";

// Bài 12. Phần mềm thiết kế đồ hoạ
const extra: LessonExtra = {
  tf: [
    {
      id: "b12-tf1",
      context:
        "Đoàn trường phát động cuộc thi thiết kế logo cho CLB Sách. Bạn Quang chụp một bức ảnh giá sách rồi định lấy làm logo luôn, nhưng khi thử in lên áo đồng phục và phóng to lên băng rôn thì ảnh vỡ lởm chởm. Bạn Thương thì vẽ logo bằng Inkscape: một cuốn sách mở cách điệu thành cánh chim. Tệp của Thương in từ huy hiệu nhỏ xíu đến tấm phông sân khấu đều nét căng.",
      statements: [
        {
          text: "Ảnh chụp của Quang là đồ hoạ điểm ảnh (bitmap) nên phóng to quá mức sẽ vỡ hạt.",
          answer: true,
          explain: "Ảnh chụp gồm lưới pixel cố định — phóng to là kéo giãn các ô màu, gây răng cưa.",
        },
        {
          text: "Logo của Thương vẽ bằng Inkscape là đồ hoạ vector, được mô tả bằng công thức toán học nên co giãn không vỡ.",
          answer: true,
          explain: "Vector lưu điểm, đường, màu dạng toán học — máy vẽ lại ở mọi kích thước.",
        },
        {
          text: "Trường hợp thiết kế logo, lựa chọn đồ hoạ vector của Thương là phù hợp hơn.",
          answer: true,
          explain: "Logo cần in đủ mọi cỡ — đúng thế mạnh của vector.",
        },
        {
          text: "Vì vector ưu việt hơn nên ảnh chụp kỉ niệm của lớp cũng nên chuyển hết sang định dạng vector.",
          answer: false,
          explain:
            "Ảnh chụp bản chất là bitmap với hàng triệu điểm màu tự nhiên — vector không phù hợp để tái hiện ảnh chụp.",
        },
      ],
    },
    {
      id: "b12-tf2",
      context:
        "Trong phòng Tin học, cô giới thiệu hai phần mềm miễn phí: GIMP và Inkscape. Cô chiếu hai bài tập: một là xoá phông và chỉnh màu bức ảnh chân dung chụp bằng điện thoại; hai là vẽ sơ đồ khu trải nghiệm của trường với các khối nhà, mũi tên chỉ đường có thể in khổ A0. Cô hỏi: \"Bài nào dùng phần mềm nào cho đúng việc?\"",
      statements: [
        {
          text: "Bài chỉnh sửa ảnh chân dung nên dùng GIMP vì đây là phần mềm xử lí ảnh bitmap.",
          answer: true,
          explain: "GIMP chuyên chỉnh sửa ảnh điểm ảnh: xoá phông, chỉnh màu, ghép ảnh.",
        },
        {
          text: "Bài vẽ sơ đồ in khổ A0 nên dùng Inkscape vì hình vẽ vector phóng to không giảm chất lượng.",
          answer: true,
          explain: "Sơ đồ gồm khối hình, chữ, mũi tên — thế mạnh của phần mềm vector.",
        },
        {
          text: "GIMP và Inkscape đều phải mua bản quyền giá cao mới dùng được đầy đủ tính năng.",
          answer: false,
          explain: "Cả hai đều là phần mềm nguồn mở, miễn phí hoàn toàn.",
        },
        {
          text: "Tệp làm việc của Inkscape lưu ở định dạng SVG.",
          answer: true,
          explain: "SVG là định dạng vector chuẩn mà Inkscape dùng làm định dạng gốc.",
        },
      ],
    },
    {
      id: "b12-tf3",
      context:
        "Bạn Nhung tập vẽ thiệp chúc mừng 20/11 trên Inkscape. Mở phần mềm lên, Nhung thấy trang vẽ trắng ở giữa, cột công cụ dọc bên trái có các biểu tượng vẽ hình chữ nhật, elip, ngôi sao, chữ T để gõ văn bản; dưới đáy là dải bảng màu. Nhung vẽ thử một bông hoa: cánh hoa màu hồng có viền đậm màu đỏ, rồi băn khoăn không biết chỉnh hai màu này ở đâu.",
      statements: [
        {
          text: "Vùng trắng ở giữa màn hình là trang vẽ (canvas) — nơi tạo các đối tượng đồ hoạ.",
          answer: true,
          explain: "Canvas là khu vực làm việc chính của phần mềm đồ hoạ.",
        },
        {
          text: "Màu hồng của cánh hoa là màu tô (fill), còn viền đỏ đậm là màu nét (stroke).",
          answer: true,
          explain: "Fill là màu bên trong, stroke là màu và độ dày đường viền — hai thuộc tính tách biệt.",
        },
        {
          text: "Muốn gõ chữ \"Chúc mừng 20/11\" lên thiệp, Nhung dùng công cụ có biểu tượng chữ T.",
          answer: true,
          explain: "Công cụ Text (T) tạo đối tượng văn bản trên trang vẽ.",
        },
        {
          text: "Trong Inkscape, mỗi đối tượng chỉ được phép có đúng một màu duy nhất cho cả tô lẫn viền.",
          answer: false,
          explain: "Fill và stroke chỉnh độc lập — hoa hồng viền đỏ của Nhung là ví dụ ngay trong bài.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b12-es1",
      q: "So sánh đồ hoạ điểm ảnh (bitmap) và đồ hoạ vector về: cách biểu diễn, chất lượng khi phóng to, dung lượng, và trường hợp sử dụng phù hợp của mỗi loại.",
      answer:
        "- Biểu diễn: bitmap = lưới điểm ảnh, mỗi pixel một giá trị màu; vector = mô tả toán học (toạ độ điểm, đường, màu tô/viền).\n- Phóng to: bitmap vỡ hạt khi vượt kích thước gốc; vector luôn sắc nét vì được vẽ lại.\n- Dung lượng: bitmap phụ thuộc số pixel (ảnh lớn rất nặng); vector thường nhẹ với hình đơn giản nhưng không phù hợp cảnh phức tạp như ảnh chụp.\n- Sử dụng: bitmap cho ảnh chụp, tranh màu phức tạp; vector cho logo, biểu tượng, sơ đồ, chữ nghệ thuật, bản vẽ kĩ thuật — những thứ cần co giãn nhiều cỡ.",
    },
    {
      id: "b12-es2",
      q: "Kể tên hai phần mềm thiết kế đồ hoạ miễn phí đã học và cho biết mỗi phần mềm phù hợp với loại công việc nào. Nêu một sản phẩm cụ thể em muốn tự thiết kế cho lớp và chọn phần mềm phù hợp, giải thích lí do.",
      answer:
        "- GIMP: xử lí ảnh bitmap — chỉnh màu, cắt ghép, xoá phông, phục chế ảnh.\n- Inkscape: vẽ đồ hoạ vector — logo, poster chữ + hình khối, sơ đồ, biểu tượng.\n- Ví dụ (gợi ý): thiết kế logo và huy hiệu cho lớp → chọn Inkscape vì logo cần in nhiều kích cỡ (áo lớp, phông trại, avatar nhóm) mà vẫn nét; nếu muốn làm ảnh kỉ yếu ghép nhiều ảnh chụp và chỉnh màu → chọn GIMP vì thao tác trên ảnh bitmap.\n(Chọn phần mềm khớp với tính chất sản phẩm và giải thích hợp lí là đạt.)",
    },
  ],
};

export default extra;
