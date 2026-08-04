import type { Question } from "@/lib/types";

// Bài 6. Dữ liệu âm thanh và hình ảnh
const questions: Question[] = [
  {
    id: "b6-01",
    q: "Số hoá âm thanh là quá trình gì?",
    options: [
      "Lấy mẫu tín hiệu âm thanh theo chu kì rồi biểu diễn mỗi mẫu bằng một số",
      "Ghi lại dao động của âm thanh lên băng từ để phát lại được nhiều lần",
      "Nhận dạng lời nói trong đoạn ghi âm rồi chuyển thành văn bản chữ viết",
      "Khuếch đại tín hiệu âm thanh cho đủ mạnh trước khi đưa ra loa phát",
    ],
    answer: 0,
    explain:
      "Âm thanh liên tục được đo (lấy mẫu) đều đặn theo thời gian; mỗi mẫu lưu thành một số — thành dữ liệu số.",
  },
  {
    id: "b6-02",
    q: "Tần số lấy mẫu 44,1 kHz nghĩa là gì?",
    options: [
      "Mỗi giây tín hiệu âm thanh được đo và ghi lại thành 44 100 mẫu",
      "Mỗi phút tín hiệu âm thanh được đo và ghi lại thành 44 100 mẫu",
      "Âm thanh trong tệp được phát ra ở tần số dao động 44,1 nghìn Hz",
      "Mỗi giây âm thanh trong tệp chiếm dung lượng khoảng 44,1 kilôbyte",
    ],
    answer: 0,
    explain: "kHz = nghìn lần/giây. 44,1 kHz (chuẩn CD) = 44 100 mẫu mỗi giây.",
  },
  {
    id: "b6-03",
    q: "Ảnh số được tạo thành từ gì?",
    options: [
      "Lưới các điểm ảnh, mỗi điểm ảnh lưu giá trị màu của riêng nó",
      "Các nét vẽ liên tục được mô tả bằng công thức toán học chính xác",
      "Các vùng màu khép kín được lưu kèm toạ độ đường viền bao quanh",
      "Chuỗi kí tự mã hoá mô tả nội dung và bố cục của bức ảnh đó",
    ],
    answer: 0,
    explain: "Ảnh bitmap là ma trận pixel; mỗi pixel mang giá trị màu của một điểm ảnh.",
  },
  {
    id: "b6-04",
    q: "Hệ màu RGB gồm ba màu cơ bản nào?",
    options: [
      "Đỏ (Red), Lục (Green) và Lam (Blue) — ba màu ánh sáng cơ bản",
      "Lục lam (Cyan), Hồng sẫm (Magenta) và Vàng (Yellow) — ba màu mực in",
      "Đỏ (Red), Vàng (Yellow) và Lam (Blue) — ba màu cơ bản của hội hoạ",
      "Đen (Black), Trắng (White) và Xám (Gray) — ba mức sáng của ảnh số",
    ],
    answer: 0,
    explain:
      "Màn hình pha trộn ánh sáng ba màu R, G, B với cường độ khác nhau để tạo ra mọi màu hiển thị.",
  },
  {
    id: "b6-05",
    q: "Mỗi kênh màu RGB dùng 1 byte thì một pixel biểu diễn được bao nhiêu màu?",
    options: [
      "Khoảng 16,7 triệu màu, tính bằng 256 × 256 × 256 tổ hợp ba kênh",
      "Đúng 256 màu, vì mỗi kênh màu chỉ nhận được 256 giá trị khác nhau",
      "Đúng 768 màu, tính bằng 256 + 256 + 256 giá trị của cả ba kênh màu",
      "Khoảng 65 536 màu, tính bằng 256 × 256 tổ hợp của hai kênh chính",
    ],
    answer: 0,
    explain: "3 byte = 24 bit → 2²⁴ ≈ 16,7 triệu tổ hợp màu (chuẩn màu True Color).",
  },
  {
    id: "b6-06",
    q: "Độ phân giải ảnh 1920 × 1080 nghĩa là gì?",
    options: [
      "Ảnh rộng 1920 điểm ảnh và cao 1080 điểm ảnh theo hai chiều",
      "Ảnh có tổng cộng 1920 điểm ảnh và hiển thị được 1080 màu khác nhau",
      "Ảnh có dung lượng 1920 kilôbyte khi in ra khổ giấy rộng 1080 milimét",
      "Ảnh in ra được khổ rộng 1920 milimét và cao 1080 milimét là tối đa",
    ],
    answer: 0,
    explain: "Độ phân giải = số pixel theo chiều ngang × chiều dọc; 1920×1080 ≈ 2,1 triệu pixel.",
  },
  {
    id: "b6-07",
    q: "Ảnh 1000 × 800 pixel, mỗi pixel 3 byte (chưa nén) chiếm khoảng bao nhiêu?",
    options: [
      "Khoảng 2,4 MB, tính bằng 1000 × 800 × 3 byte rồi đổi đơn vị",
      "Khoảng 0,8 MB, tính bằng 1000 × 800 byte rồi đổi sang mêgabyte",
      "Khoảng 24 MB, tính bằng 1000 × 800 × 3 rồi nhân thêm 10 lần",
      "Khoảng 240 KB, tính bằng 1000 × 800 × 3 rồi chia cho 10 000",
    ],
    answer: 0,
    explain: "1000 × 800 × 3 = 2 400 000 byte ≈ 2,4 MB — vì vậy ảnh thường được nén (JPG, PNG).",
  },
  {
    id: "b6-08",
    q: "Định dạng nào là định dạng ảnh NÉN phổ biến?",
    options: [
      "Định dạng .jpg — nén ảnh mất mát, dùng phổ biến cho ảnh chụp",
      "Định dạng .mp3 — nén dữ liệu mất mát, dùng phổ biến cho âm thanh",
      "Định dạng .zip — nén không mất mát, dùng để gộp nhiều tệp bất kì",
      "Định dạng .svg — mô tả hình bằng toán học, phóng to không bị vỡ",
    ],
    answer: 0,
    explain: "JPEG nén ảnh hiệu quả (nén mất mát); .mp3 là âm thanh nén, .txt là văn bản.",
  },
  {
    id: "b6-09",
    q: "MP3 là định dạng gì?",
    options: [
      "Âm thanh nén, giảm dung lượng bằng cách bỏ phần tai người khó nghe thấy",
      "Âm thanh không nén, lưu đầy đủ mọi mẫu thu được nên chất lượng tối đa",
      "Video nén độ nét cao, lưu cả hình ảnh lẫn âm thanh trong cùng một tệp",
      "Văn bản có định dạng, lưu kèm phông chữ, cỡ chữ và cách trình bày trang",
    ],
    answer: 0,
    explain:
      "MP3 nén mất mát dựa trên đặc điểm thính giác, nhỏ hơn nhiều so với âm thanh gốc (WAV) mà nghe gần như tương đương.",
  },
  {
    id: "b6-10",
    q: "Nén dữ liệu nhằm mục đích gì?",
    options: [
      "Giảm dung lượng lưu trữ và rút ngắn thời gian truyền tệp qua mạng",
      "Tăng độ phân giải của ảnh để in ra khổ lớn mà vẫn giữ được độ nét",
      "Mã hoá nội dung tệp để người không có mật khẩu thì không mở được",
      "Sửa các lỗi hỏng dữ liệu phát sinh trong quá trình sao chép tệp",
    ],
    answer: 0,
    explain: "Nén thu nhỏ kích thước tệp — tiết kiệm bộ nhớ và băng thông khi gửi qua mạng.",
  },
  {
    id: "b6-11",
    q: "Tăng tần số lấy mẫu và độ sâu bit khi số hoá âm thanh sẽ làm:",
    options: [
      "Chất lượng âm thanh trung thực hơn nhưng dung lượng tệp cũng nặng hơn",
      "Chất lượng âm thanh trung thực hơn mà dung lượng tệp vẫn nhẹ đi rõ rệt",
      "Âm thanh phát ra to hơn nhưng độ trung thực so với âm gốc không đổi",
      "Chất lượng và dung lượng đều không đổi, chỉ thời gian xử lí lâu hơn",
    ],
    answer: 0,
    explain: "Nhiều mẫu hơn, mỗi mẫu chính xác hơn → gần âm gốc hơn, nhưng số byte cần lưu tăng theo.",
  },
  {
    id: "b6-12",
    q: "Video số về bản chất là gì?",
    options: [
      "Chuỗi nhiều khung hình phát nhanh liên tiếp kèm theo dữ liệu âm thanh",
      "Một ảnh số kích thước rất lớn được cuộn dần theo trục thời gian",
      "Tệp mô tả cảnh quay bằng lệnh để máy tự dựng lại hình khi phát",
      "Sóng điện từ được ghi lại liên tục rồi phát ra trên màn hình hiển thị",
    ],
    answer: 0,
    explain:
      "Video = nhiều ảnh/giây (ví dụ 24-60 fps) + âm thanh, nén bằng các chuẩn như MP4/H.264.",
  },
];

export default questions;
