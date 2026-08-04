import type { Question } from "@/lib/types";

// Bài 14. Làm việc với đối tượng đường và văn bản
const questions: Question[] = [
  {
    id: "b14-01",
    q: "Trong đồ hoạ vector, 'đường' (path) được tạo thành từ gì?",
    options: [
      "Các điểm neo nối với nhau bằng đoạn thẳng hoặc đoạn cong Bezier",
      "Dãy các điểm ảnh liền nhau được tô cùng một màu duy nhất",
      "Tập hợp nhiều hình chữ nhật rất nhỏ xếp sát cạnh nhau",
      "Một chuỗi toạ độ được lưu dưới dạng bảng dữ liệu số",
    ],
    answer: 0,
    explain:
      "Path gồm các điểm neo; đoạn giữa hai neo có thể là thẳng hoặc cong (điều khiển bằng tay nắm Bezier).",
  },
  {
    id: "b14-02",
    q: "Công cụ nào trong Inkscape dùng để vẽ đường thẳng/đường gấp khúc/đường cong?",
    options: [
      "Công cụ Bezier — nháy từng điểm hoặc nháy rồi kéo để tạo đoạn cong",
      "Công cụ Rectangle — kéo chuột để tạo khung hình rồi bo tròn các góc",
      "Công cụ Calligraphy — vẽ nét bút lông với độ dày thay đổi theo tốc độ",
      "Công cụ Connector — nối hai đối tượng bằng đường tự động tránh vật cản",
    ],
    answer: 0,
    explain: "Công cụ Bezier: nháy từng điểm tạo đường gấp khúc; nháy-kéo tạo đường cong.",
  },
  {
    id: "b14-03",
    q: "Muốn chỉnh sửa từng điểm neo của một đường đã vẽ, ta dùng công cụ:",
    options: [
      "Công cụ Node — kéo điểm neo, bẻ tay nắm, thêm hoặc xoá nút trên đường",
      "Công cụ Selector — chọn cả đối tượng để di chuyển, co giãn và xoay",
      "Công cụ Tweak — nắn biến dạng mềm nhiều đối tượng cùng lúc bằng cọ",
      "Công cụ Measure — đo khoảng cách và góc giữa các phần của bản vẽ",
    ],
    answer: 0,
    explain: "Công cụ Node cho phép kéo điểm neo, bẻ tay nắm, thêm/xoá nút để nắn hình.",
  },
  {
    id: "b14-04",
    q: "Để thêm chữ vào bản vẽ, ta dùng công cụ:",
    options: [
      "Công cụ Text — nháy vào trang vẽ rồi gõ nội dung cần hiển thị",
      "Công cụ Bezier — vẽ từng nét chữ bằng các đoạn thẳng nối tiếp",
      "Công cụ Ellipse — tạo khung hình bầu dục rồi điền chữ vào trong",
      "Công cụ Spray — rải bản sao của một đối tượng lên khắp trang vẽ",
    ],
    answer: 0,
    explain: "Công cụ Text tạo đối tượng văn bản; chọn phông, cỡ, kiểu trên thanh thuộc tính.",
  },
  {
    id: "b14-05",
    q: "Đối tượng văn bản trong Inkscape có thể:",
    options: [
      "Đổi phông, cỡ, màu, co giãn và xoay như mọi đối tượng đồ hoạ khác",
      "Đổi được phông và cỡ chữ nhưng luôn giữ nguyên màu đen mặc định",
      "Đổi được màu và cỡ chữ nhưng không xoay nghiêng được dòng chữ",
      "Chỉ dùng được các phông chữ có sẵn trong danh sách của Inkscape",
    ],
    answer: 0,
    explain: "Text trong vector là đối tượng đồ hoạ đầy đủ — biến đổi thoải mái mà không vỡ nét.",
  },
  {
    id: "b14-06",
    q: "Tính năng đặt chữ chạy theo một đường cong (ví dụ chữ uốn theo vòng cung) gọi là:",
    options: [
      "Text on Path — đặt dòng chữ chạy men theo hình dạng của một đường",
      "Word Wrap — tự động ngắt dòng khi chữ chạm mép khung văn bản",
      "Drop Cap — phóng to chữ cái đầu tiên của đoạn văn cho nổi bật",
      "Text to Path — chuyển dòng chữ thành các đường để nắn từng nét",
    ],
    answer: 0,
    explain: "Chọn chữ + đường rồi dùng Text → Put on Path — chữ sẽ uốn theo hình dạng đường.",
  },
  {
    id: "b14-07",
    q: "Đường cong Bezier được điều khiển hình dạng bằng gì?",
    options: [
      "Các tay nắm gắn ở điểm neo — kéo tay nắm để đổi hướng và độ cong",
      "Độ phân giải của trang vẽ — trang càng lớn thì đường càng cong mượt",
      "Tốc độ kéo chuột khi vẽ — kéo càng nhanh thì độ cong càng lớn",
      "Độ dày nét viền của đường — nét càng dày thì đoạn cong càng tròn",
    ],
    answer: 0,
    explain: "Kéo tay nắm đổi hướng và độ cong của đoạn cong hai bên điểm neo.",
  },
  {
    id: "b14-08",
    q: "Muốn biến một hình chữ nhật thành path để nắn từng nút, ta dùng lệnh:",
    options: [
      "Path → Object to Path (chuyển đối tượng thành đường có các nút)",
      "Path → Stroke to Path (chuyển nét viền thành hình khép kín riêng)",
      "Object → Ungroup (tách một nhóm thành các đối tượng rời rạc)",
      "Object → Transform (mở bảng biến đổi để xoay, nghiêng, co giãn)",
    ],
    answer: 0,
    explain:
      "Object to Path chuyển hình cơ bản thành đường gồm các nút — sau đó chỉnh tự do bằng công cụ Node.",
  },
  {
    id: "b14-09",
    q: "Điểm neo kiểu 'trơn' (smooth) khác kiểu 'góc' (corner) thế nào?",
    options: [
      "Smooth cho đường cong mượt liên tục qua nút, corner tạo được góc gãy",
      "Smooth dùng cho đoạn thẳng, còn corner chỉ dùng cho đoạn cong Bezier",
      "Smooth giữ hai tay nắm dài bằng nhau, corner cho phép dài ngắn khác nhau",
      "Smooth khiến nút bị khoá cố định, còn corner cho phép di chuyển nút đó",
    ],
    answer: 0,
    explain: "Tại nút smooth, hai tay nắm thẳng hàng nên đường cong liền mạch; nút corner cho phép gãy khúc.",
  },
  {
    id: "b14-10",
    q: "Khi vẽ bằng công cụ Bezier, kết thúc đường đang vẽ bằng cách nào?",
    options: [
      "Nhấn Enter hoặc nháy đúp; nháy vào điểm đầu để khép kín hình lại",
      "Nhấn Ctrl+S để lưu tệp, khi đó đường đang vẽ tự động được kết thúc",
      "Chuyển sang một công cụ khác, đường đang vẽ sẽ tự khép kín thành hình",
      "Nhấn phím Space để tạm dừng rồi nhấn tiếp lần nữa để chốt đường vẽ",
    ],
    answer: 0,
    explain: "Enter/nháy đúp kết thúc đường hở; nháy vào điểm đầu tạo đường khép kín (tô màu được).",
  },
];

export default questions;
