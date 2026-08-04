import type { Question } from "@/lib/types";

// Bài 6. Dữ liệu âm thanh và hình ảnh
const questions: Question[] = [
  {
    id: "b6-01",
    q: "Số hoá âm thanh là quá trình gì?",
    options: [
      "Lấy mẫu tín hiệu âm thanh theo chu kì rồi biểu diễn mỗi mẫu bằng một số",
      "Ghi âm bằng băng cassette",
      "Tăng âm lượng của loa",
      "Chuyển âm thanh thành văn bản",
    ],
    answer: 0,
    explain:
      "Âm thanh liên tục được đo (lấy mẫu) đều đặn theo thời gian; mỗi mẫu lưu thành một số — thành dữ liệu số.",
  },
  {
    id: "b6-02",
    q: "Tần số lấy mẫu 44,1 kHz nghĩa là gì?",
    options: [
      "Mỗi giây lấy 44 100 mẫu âm thanh",
      "Âm thanh phát ở tần số 44,1 kHz",
      "Tệp nặng 44,1 KB",
      "Mỗi phút lấy 44 100 mẫu",
    ],
    answer: 0,
    explain: "kHz = nghìn lần/giây. 44,1 kHz (chuẩn CD) = 44 100 mẫu mỗi giây.",
  },
  {
    id: "b6-03",
    q: "Ảnh số được tạo thành từ gì?",
    options: [
      "Lưới các điểm ảnh (pixel), mỗi pixel lưu thông tin màu",
      "Các nét vẽ liên tục",
      "Sóng ánh sáng",
      "Các kí tự chữ và số",
    ],
    answer: 0,
    explain: "Ảnh bitmap là ma trận pixel; mỗi pixel mang giá trị màu của một điểm ảnh.",
  },
  {
    id: "b6-04",
    q: "Hệ màu RGB gồm ba màu cơ bản nào?",
    options: [
      "Đỏ (Red), Lục (Green), Lam (Blue)",
      "Đỏ, Vàng, Xanh dương",
      "Đen, Trắng, Xám",
      "Cam, Tím, Hồng",
    ],
    answer: 0,
    explain:
      "Màn hình pha trộn ánh sáng ba màu R, G, B với cường độ khác nhau để tạo ra mọi màu hiển thị.",
  },
  {
    id: "b6-05",
    q: "Mỗi kênh màu RGB dùng 1 byte thì một pixel biểu diễn được bao nhiêu màu?",
    options: [
      "Khoảng 16,7 triệu màu (256 × 256 × 256)",
      "256 màu",
      "65 536 màu",
      "1 000 màu",
    ],
    answer: 0,
    explain: "3 byte = 24 bit → 2²⁴ ≈ 16,7 triệu tổ hợp màu (chuẩn màu True Color).",
  },
  {
    id: "b6-06",
    q: "Độ phân giải ảnh 1920 × 1080 nghĩa là gì?",
    options: [
      "Ảnh rộng 1920 pixel, cao 1080 pixel",
      "Ảnh nặng 1920 KB",
      "Ảnh in được khổ 1920 cm",
      "Ảnh có 1080 màu",
    ],
    answer: 0,
    explain: "Độ phân giải = số pixel theo chiều ngang × chiều dọc; 1920×1080 ≈ 2,1 triệu pixel.",
  },
  {
    id: "b6-07",
    q: "Ảnh 1000 × 800 pixel, mỗi pixel 3 byte (chưa nén) chiếm khoảng bao nhiêu?",
    options: ["2,4 MB", "0,8 MB", "24 MB", "240 KB"],
    answer: 0,
    explain: "1000 × 800 × 3 = 2 400 000 byte ≈ 2,4 MB — vì vậy ảnh thường được nén (JPG, PNG).",
  },
  {
    id: "b6-08",
    q: "Định dạng nào là định dạng ảnh NÉN phổ biến?",
    options: [".jpg (JPEG)", ".txt", ".mp3", ".docx"],
    answer: 0,
    explain: "JPEG nén ảnh hiệu quả (nén mất mát); .mp3 là âm thanh nén, .txt là văn bản.",
  },
  {
    id: "b6-09",
    q: "MP3 là định dạng gì?",
    options: [
      "Âm thanh nén (giảm dung lượng bằng cách bỏ bớt phần tai người khó nghe thấy)",
      "Ảnh chụp không nén",
      "Video độ nét cao",
      "Văn bản có định dạng",
    ],
    answer: 0,
    explain:
      "MP3 nén mất mát dựa trên đặc điểm thính giác, nhỏ hơn nhiều so với âm thanh gốc (WAV) mà nghe gần như tương đương.",
  },
  {
    id: "b6-10",
    q: "Nén dữ liệu nhằm mục đích gì?",
    options: [
      "Giảm dung lượng lưu trữ và thời gian truyền qua mạng",
      "Làm dữ liệu đẹp hơn",
      "Tăng độ phân giải ảnh",
      "Chống virus",
    ],
    answer: 0,
    explain: "Nén thu nhỏ kích thước tệp — tiết kiệm bộ nhớ và băng thông khi gửi qua mạng.",
  },
  {
    id: "b6-11",
    q: "Tăng tần số lấy mẫu và độ sâu bit khi số hoá âm thanh sẽ làm:",
    options: [
      "Chất lượng âm trung thực hơn nhưng tệp nặng hơn",
      "Tệp nhẹ đi và chất lượng tăng",
      "Không thay đổi gì",
      "Âm thanh to hơn",
    ],
    answer: 0,
    explain: "Nhiều mẫu hơn, mỗi mẫu chính xác hơn → gần âm gốc hơn, nhưng số byte cần lưu tăng theo.",
  },
  {
    id: "b6-12",
    q: "Video số về bản chất là gì?",
    options: [
      "Chuỗi các khung hình (ảnh số) phát nhanh liên tiếp kèm âm thanh",
      "Một ảnh duy nhất có kích thước lớn",
      "Tệp văn bản mô tả cảnh quay",
      "Sóng điện từ",
    ],
    answer: 0,
    explain:
      "Video = nhiều ảnh/giây (ví dụ 24-60 fps) + âm thanh, nén bằng các chuẩn như MP4/H.264.",
  },
];

export default questions;
