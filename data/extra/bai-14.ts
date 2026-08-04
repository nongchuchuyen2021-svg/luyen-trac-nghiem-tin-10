import type { LessonExtra } from "@/lib/types";

// Bài 14. Làm việc với đối tượng đường và văn bản
const extra: LessonExtra = {
  tf: [
    {
      id: "b14-tf1",
      context:
        "Bạn Chảo muốn vẽ hình ngọn núi quê mình cho bìa tập san của lớp. Các công cụ hình cơ bản (chữ nhật, elip, sao) đều không ra dáng núi. Cô hướng dẫn dùng công cụ Bezier: nháy từng điểm tạo chân núi, đỉnh núi thành đường gấp khúc, khép kín lại rồi tô màu xanh thẫm. Sau đó chuyển sang công cụ Node, kéo cong vài đoạn để sườn núi mềm mại tự nhiên hơn.",
      statements: [
        {
          text: "Công cụ Bezier phù hợp để vẽ các hình tự do như dáng núi mà hình cơ bản không đáp ứng được.",
          answer: true,
          explain: "Bezier vẽ đường thẳng, gấp khúc, cong tuỳ ý — tự do hơn các hình mẫu có sẵn.",
        },
        {
          text: "Muốn tô được màu xanh bên trong hình ngọn núi, đường vẽ phải được khép kín.",
          answer: true,
          explain: "Đường khép kín mới xác định được miền trong để tô màu (fill).",
        },
        {
          text: "Công cụ Node dùng để kéo chỉnh từng điểm neo và độ cong của các đoạn đã vẽ.",
          answer: true,
          explain: "Node là công cụ 'nắn hình' — chỉnh vị trí nút và tay nắm cong.",
        },
        {
          text: "Sau khi kết thúc lệnh vẽ, hình dạng của đường là cố định vĩnh viễn, không sửa được nữa.",
          answer: false,
          explain: "Đồ hoạ vector luôn chỉnh sửa lại được — chính Chảo đã nắn sườn núi sau khi vẽ.",
        },
      ],
    },
    {
      id: "b14-tf2",
      context:
        "Trang bìa tập san cần dòng tên \"MẦM XANH\" thật nổi bật. Bạn Hạnh gõ chữ bằng công cụ Text, chọn phông đậm, phóng to gấp năm lần mà chữ vẫn nét căng. Chưa hết, Hạnh còn vẽ một đường cong hình cầu vồng rồi dùng lệnh đặt dòng chữ phụ \"Tập san chào mừng 26/3\" chạy uốn theo đường cong ấy, nhìn sinh động hẳn lên.",
      statements: [
        {
          text: "Chữ trong Inkscape là đối tượng vector nên phóng to bao nhiêu cũng không vỡ nét.",
          answer: true,
          explain: "Phông chữ được vẽ lại từ mô tả toán học ở mọi kích thước.",
        },
        {
          text: "Tính năng Hạnh dùng cho dòng chữ phụ là Text on Path (chữ chạy theo đường).",
          answer: true,
          explain: "Put on Path đặt văn bản men theo hình dạng của một đường đã chọn.",
        },
        {
          text: "Muốn dùng Text on Path, cần có hai đối tượng: một văn bản và một đường dẫn.",
          answer: true,
          explain: "Chọn cả chữ và đường rồi mới áp lệnh — chữ sẽ uốn theo đường đó.",
        },
        {
          text: "Sau khi áp Text on Path, nội dung chữ bị khoá hẳn, gõ sửa lỗi chính tả là không thể.",
          answer: false,
          explain: "Văn bản vẫn là văn bản — sửa nội dung, phông, cỡ bình thường, chữ tự chạy lại theo đường.",
        },
      ],
    },
    {
      id: "b14-tf3",
      context:
        "Bạn Đức vẽ trái tim cho tấm thiệp bằng cách vẽ hình vuông rồi dùng lệnh Object to Path để chuyển thành đường. Lúc này bốn góc vuông hiện ra bốn điểm neo. Đức dùng công cụ Node kéo nút dưới xuống nhọn thành đáy tim, hai nút hai bên bo cong thành hai thuỳ. Bạn cùng bàn trầm trồ: \"Hoá ra hình phức tạp cũng bắt đầu từ hình đơn giản!\"",
      statements: [
        {
          text: "Lệnh Object to Path chuyển hình cơ bản (hình vuông) thành đường gồm các điểm neo chỉnh sửa được.",
          answer: true,
          explain: "Sau chuyển đổi, hình trở thành path — nắn từng nút bằng công cụ Node.",
        },
        {
          text: "Trước khi chuyển thành path, các nút của hình vuông cũng đã kéo tự do từng điểm được như path.",
          answer: false,
          explain: "Hình cơ bản chỉ chỉnh bằng tham số (rộng, cao, bo góc) — phải chuyển sang path mới nắn từng nút tự do.",
        },
        {
          text: "Điểm neo kiểu trơn (smooth) cho đường cong mượt đi qua, còn kiểu góc (corner) tạo chỗ gãy nhọn.",
          answer: true,
          explain: "Đáy tim nhọn cần nút corner; hai thuỳ tròn cần nút smooth — đúng như Đức làm.",
        },
        {
          text: "Cách làm của Đức thể hiện tư duy dựng hình phức tạp từ hình đơn giản rồi tinh chỉnh dần.",
          answer: true,
          explain: "Đây là phương pháp làm việc chuẩn của thiết kế vector.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b14-es1",
      q: "Đường (path) trong đồ hoạ vector được cấu tạo như thế nào? Phân biệt điểm neo trơn và điểm neo góc; nêu cách vẽ đường gấp khúc và đường cong bằng công cụ Bezier.",
      answer:
        "- Path gồm các điểm neo (anchor) nối với nhau bằng đoạn thẳng hoặc đoạn cong; độ cong điều khiển bằng tay nắm (handle) gắn ở điểm neo. Đường có thể hở hoặc khép kín (khép kín thì tô màu được).\n- Nút trơn (smooth): hai tay nắm thẳng hàng, đường cong đi qua mượt mà. Nút góc (corner): hai bên gãy khúc độc lập, tạo đỉnh nhọn.\n- Công cụ Bezier: nháy từng điểm → đường gấp khúc; nháy rồi kéo rê → tạo đoạn cong; nhấn Enter hoặc nháy đúp để kết thúc; nháy về điểm đầu để khép kín hình.",
    },
    {
      id: "b14-es2",
      q: "Trình bày các khả năng làm việc với văn bản trong phần mềm đồ hoạ vector. Thiết kế bìa tập san của lớp cần dòng tiêu đề lớn và một khẩu hiệu uốn cong — em sẽ thực hiện những thao tác nào?",
      answer:
        "- Khả năng: tạo văn bản bằng công cụ Text; chọn phông, cỡ, kiểu (đậm, nghiêng), màu tô/viền; co giãn, xoay như đối tượng đồ hoạ mà không vỡ nét; đặt chữ chạy theo đường (Text on Path); chuyển chữ thành path để biến đổi nghệ thuật từng nét.\n- Thực hiện: (1) Dùng Text gõ tiêu đề, chọn phông đậm, cỡ lớn, đổ màu nổi bật, căn giữa trang; (2) Vẽ một đường cong bằng Bezier ở vị trí khẩu hiệu; (3) Gõ dòng khẩu hiệu, chọn cả chữ và đường cong, áp lệnh Text → Put on Path; (4) Chỉnh cỡ chữ, màu và vị trí đường cong đến khi cân đối; có thể ẩn màu nét của đường dẫn để chỉ còn dòng chữ uốn lượn.",
    },
  ],
};

export default extra;
