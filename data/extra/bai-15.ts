import type { LessonExtra } from "@/lib/types";

// Bài 15. Hoàn thiện hình ảnh đồ hoạ
const extra: LessonExtra = {
  tf: [
    {
      id: "b15-tf1",
      context:
        "Bạn Vy thiết kế logo CLB Thiên văn của trường: cần một hình trăng khuyết ôm lấy ngôi sao. Vy vẽ hai hình tròn chồng lệch lên nhau, chọn cả hai rồi áp một phép ghép hình — phần chung biến mất, để lại đúng vành trăng khuyết cong cong. Tiếp đó Vy vẽ ngôi sao đặt vào lòng trăng, tô chuyển sắc từ vàng sang cam cho ấm áp rồi xuất tệp PNG gửi cả CLB duyệt.",
      statements: [
        {
          text: "Phép ghép hình Vy dùng để tạo trăng khuyết từ hai hình tròn là Difference (hiệu).",
          answer: true,
          explain: "Hình tròn trên 'cắt' vào hình tròn dưới — phép hiệu để lại vành khuyết.",
        },
        {
          text: "Nếu Vy chọn phép Union thì hai hình tròn sẽ hợp thành một hình duy nhất thay vì bị đục khuyết.",
          answer: true,
          explain: "Union gộp toàn bộ phần của cả hai hình — không tạo được trăng khuyết.",
        },
        {
          text: "Hiệu ứng chuyển màu từ vàng sang cam trên ngôi sao gọi là gradient (chuyển sắc).",
          answer: true,
          explain: "Gradient tạo dải màu chuyển dần giữa hai hay nhiều màu.",
        },
        {
          text: "Sau khi xuất PNG, Vy nên xoá tệp SVG gốc đi cho đỡ tốn bộ nhớ vì PNG đã đủ dùng mãi mãi.",
          answer: false,
          explain:
            "Phải giữ SVG gốc: khi CLB góp ý sửa logo, chỉ tệp SVG mới còn nguyên các đối tượng để chỉnh.",
        },
      ],
    },
    {
      id: "b15-tf2",
      context:
        "CLB duyệt logo và góp ý: \"Thêm dòng chữ tên CLB uốn quanh vành trăng, và làm phiên bản in lên áo khổ lớn.\" Vy mở lại tệp SVG, bổ sung chữ theo đường tròn, rồi xuất hai bản: một bản PNG kích thước nhỏ đăng Facebook nhóm, một bản PNG độ phân giải cao để xưởng in áo. Chú xưởng in khen: \"Bản in này nét lắm, nhiều khách gửi ảnh nhỏ xíu phóng lên toàn vỡ!\"",
      statements: [
        {
          text: "Vy sửa được logo dễ dàng vì tệp SVG còn giữ nguyên từng đối tượng (trăng, sao, chữ).",
          answer: true,
          explain: "Định dạng vector gốc giữ cấu trúc đối tượng — sửa từng phần thoải mái.",
        },
        {
          text: "Khi xuất PNG để in khổ lớn, cần chọn độ phân giải (kích thước điểm ảnh) cao hơn bản đăng mạng.",
          answer: true,
          explain: "In lớn cần nhiều pixel; đăng mạng chỉ cần vừa đủ cho nhẹ.",
        },
        {
          text: "Tệp PNG xuất ra là đồ hoạ điểm ảnh, không còn là vector nữa.",
          answer: true,
          explain: "Xuất PNG là 'nướng' hình vector thành lưới pixel cố định.",
        },
        {
          text: "Khách gửi ảnh nhỏ bị vỡ khi in lớn có thể khắc phục hoàn toàn bằng cách tăng kích thước tệp PNG đó lên trong phần mềm.",
          answer: false,
          explain: "Phóng to bitmap không sinh thêm chi tiết — chỉ nguồn vector hoặc ảnh gốc phân giải cao mới in lớn được.",
        },
      ],
    },
    {
      id: "b15-tf3",
      context:
        "Đến lượt nhóm bạn Khang làm biển tên phòng học kiểu chữ lồng trong khung. Khang vẽ khung bo góc, vẽ dải ruy băng vắt chéo và muốn phần ruy băng thò ra ngoài khung bị cắt gọn theo mép khung. Bạn Tâm mách: \"Chọn cả ruy băng và một bản sao của khung rồi dùng phép Intersection — chỉ phần nằm trong khung được giữ lại thôi.\" Quả nhiên sản phẩm gọn gàng như ý.",
      statements: [
        {
          text: "Phép Intersection giữ lại đúng phần chồng lấn chung giữa hai hình.",
          answer: true,
          explain: "Giao của hai hình = phần cả hai cùng chiếm — nên ruy băng bị cắt gọn theo khung.",
        },
        {
          text: "Tâm khuyên dùng BẢN SAO của khung vì phép ghép hình sẽ 'tiêu hao' các hình tham gia.",
          answer: true,
          explain: "Các phép path operation biến đổi/hợp nhất hình gốc — nhân đôi trước để giữ lại khung.",
        },
        {
          text: "Các phép Union, Difference, Intersection nằm trong bảng chọn Path của Inkscape.",
          answer: true,
          explain: "Menu Path chứa các phép toán hình học trên đường.",
        },
        {
          text: "Ba phép ghép hình trên cho kết quả hoàn toàn giống nhau, chọn phép nào cũng được.",
          answer: false,
          explain: "Mỗi phép một kết quả khác hẳn: hợp, hiệu (đục), giao (cắt lấy phần chung).",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b15-es1",
      q: "Trình bày tác dụng của ba phép ghép hình Union, Difference, Intersection. Với mỗi phép, nêu một ví dụ hình cần vẽ mà phép đó là cách làm nhanh nhất.",
      answer:
        "- Union (hợp): gộp các hình thành một khối duy nhất. Ví dụ: ghép nhiều hình tròn thành đám mây.\n- Difference (hiệu): lấy hình dưới trừ phần bị hình trên che — dùng để đục, khoét. Ví dụ: hình trăng khuyết từ hai hình tròn; bánh donut từ hai hình tròn đồng tâm; khoét lỗ trên tấm thẻ.\n- Intersection (giao): giữ đúng phần chung của hai hình. Ví dụ: hình lá cây từ giao của hai hình tròn lệch nhau; cắt hoạ tiết gọn theo khuôn khung.\nLưu ý: các phép này biến đổi hình tham gia, nên nhân đôi (Ctrl+D) trước nếu muốn giữ hình gốc.",
    },
    {
      id: "b15-es2",
      q: "Vì sao khi hoàn thiện sản phẩm đồ hoạ nên lưu cả tệp SVG gốc lẫn tệp PNG xuất ra? Nêu quy trình các bước hoàn thiện và bàn giao một sản phẩm (ví dụ logo lớp) một cách chuyên nghiệp.",
      answer:
        "- Lưu cả hai vì: SVG là tệp nguồn giữ nguyên đối tượng để chỉnh sửa về sau, co giãn vô hạn; PNG là tệp thành phẩm dễ chèn vào tài liệu, đăng mạng, gửi in — nhưng đã 'phẳng' thành pixel, không sửa cấu trúc được.\n- Quy trình gợi ý: (1) Hoàn thiện bố cục, màu, chữ trên SVG; (2) Rà soát: căn chỉnh, chính tả, thứ tự lớp; (3) Xin góp ý và chỉnh sửa trên tệp gốc; (4) Xuất PNG theo từng mục đích (bản nhỏ cho mạng xã hội, bản phân giải cao cho in ấn); (5) Đặt tên tệp rõ ràng, bàn giao kèm cả SVG gốc và ghi chú phông chữ đã dùng; (6) Lưu trữ dự phòng (đám mây/USB).",
    },
  ],
};

export default extra;
