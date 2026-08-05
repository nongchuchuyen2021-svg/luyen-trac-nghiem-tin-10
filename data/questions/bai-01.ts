import type { Question } from "@/lib/types";

// Bài 1. Thông tin và xử lí thông tin
const questions: Question[] = [
  {
    id: "b1-01",
    q: "Thông tin là gì?",
    options: [
      "Những gì đem lại hiểu biết cho con người về thế giới và về chính mình",
      "Những con số và chữ viết đã được ghi lại và lưu trữ trong máy tính",
      "Tất cả những gì con người nhìn thấy và nghe được ở xung quanh",
      "Các tín hiệu điện được truyền đi giữa những bộ phận của máy tính",
    ],
    answer: 0,
    explain:
      "Thông tin là những gì đem lại hiểu biết cho con người về thế giới xung quanh và về chính bản thân mình.",
  },
  {
    id: "b1-02",
    q: "Dữ liệu là gì?",
    options: [
      "Thông tin đã được ghi lại, số hoá để máy tính có thể xử lí được",
      "Mọi hiểu biết mà con người thu nhận được về thế giới xung quanh",
      "Tập hợp các chương trình được cài đặt sẵn trong máy tính",
      "Kết quả mà máy tính đưa ra màn hình sau khi tính toán xong",
    ],
    answer: 0,
    explain:
      "Trong tin học, dữ liệu là thông tin đã được đưa vào máy tính dưới dạng máy tính xử lí được (số hoá).",
  },
  {
    id: "b1-03",
    q: "Quá trình xử lí thông tin gồm các bước cơ bản theo thứ tự nào?",
    options: [
      "Tiếp nhận → xử lí → lưu trữ, truyền → đưa ra kết quả",
      "Xử lí → tiếp nhận → đưa ra kết quả → lưu trữ, truyền",
      "Lưu trữ, truyền → tiếp nhận → xử lí → đưa ra kết quả",
      "Tiếp nhận → lưu trữ, truyền → đưa ra kết quả → xử lí",
    ],
    answer: 0,
    explain:
      "Xử lí thông tin gồm: tiếp nhận (thu nhận), xử lí, lưu trữ/truyền và đưa ra kết quả — tương ứng vào, xử lí, ra của máy tính.",
  },
  {
    id: "b1-04",
    q: "Đơn vị nhỏ nhất để biểu diễn thông tin trong máy tính là gì?",
    options: ["Bit", "Byte", "KB", "Kí tự"],
    answer: 0,
    explain:
      "Bit (binary digit) là đơn vị nhỏ nhất, chỉ nhận một trong hai giá trị 0 hoặc 1.",
  },
  {
    id: "b1-05",
    q: "1 byte bằng bao nhiêu bit?",
    options: ["8 bit", "10 bit", "16 bit", "1024 bit"],
    answer: 0,
    explain: "1 byte = 8 bit. Đây là đơn vị cơ bản để đo lượng dữ liệu.",
  },
  {
    id: "b1-06",
    q: "1 KB (kilobyte) bằng bao nhiêu byte?",
    options: ["1024 byte", "1000 byte", "8 byte", "512 byte"],
    answer: 0,
    explain:
      "Theo quy ước trong tin học, 1 KB = 2¹⁰ byte = 1024 byte (các đơn vị tiếp theo MB, GB, TB cũng nhân 1024).",
  },
  {
    id: "b1-07",
    q: "Sắp xếp các đơn vị đo dữ liệu theo thứ tự TĂNG dần:",
    options: [
      "B → KB → MB → GB → TB",
      "B → MB → KB → GB → TB",
      "KB → B → MB → TB → GB",
      "B → KB → GB → MB → TB",
    ],
    answer: 0,
    explain: "Thứ tự tăng dần: Byte → KB → MB → GB → TB, mỗi bậc gấp 1024 lần bậc trước.",
  },
  {
    id: "b1-08",
    q: "Phát biểu nào ĐÚNG khi phân biệt thông tin và dữ liệu?",
    options: [
      "Thông tin là ý nghĩa, còn dữ liệu là hình thức ghi lại thông tin đó",
      "Dữ liệu là ý nghĩa, còn thông tin là các con số cụ thể ghi trong máy",
      "Thông tin và dữ liệu là hai tên gọi khác nhau của cùng một khái niệm",
      "Thông tin chỉ có trong máy tính, còn dữ liệu chỉ có ở ngoài đời thực",
    ],
    answer: 0,
    explain:
      "Thông tin là ý nghĩa mà con người hiểu được; dữ liệu là dạng biểu diễn (số hoá) của thông tin để máy tính lưu trữ, xử lí.",
  },
  {
    id: "b1-09",
    q: "Thiết bị nào sau đây thực hiện chức năng TIẾP NHẬN thông tin cho máy tính?",
    options: ["Bàn phím", "Màn hình", "Loa", "Máy in"],
    answer: 0,
    explain:
      "Bàn phím (cùng chuột, máy quét, micro, camera...) là thiết bị vào. Màn hình, loa, máy in là thiết bị ra.",
  },
  {
    id: "b1-10",
    q: "Một thẻ nhớ 64 GB chứa được khoảng bao nhiêu tệp ảnh, nếu mỗi ảnh trung bình 4 MB?",
    options: ["Khoảng 16 000 ảnh", "Khoảng 1 600 ảnh", "Khoảng 160 000 ảnh", "Khoảng 640 ảnh"],
    answer: 0,
    explain: "64 GB = 64 × 1024 MB ≈ 65 536 MB; 65 536 ÷ 4 ≈ 16 384 ảnh, tức khoảng 16 000 ảnh.",
  },
  {
    id: "b1-11",
    q: "Xử lí thông tin trong máy tính thực chất là xử lí cái gì?",
    options: [
      "Dữ liệu ở dạng các dãy bit",
      "Chữ viết và hình ảnh nguyên bản",
      "Sóng âm thanh",
      "Tín hiệu tương tự (analog)",
    ],
    answer: 0,
    explain:
      "Mọi thông tin đưa vào máy tính đều được số hoá thành dãy bit; máy tính xử lí các dãy bit đó.",
  },
  {
    id: "b1-12",
    q: "Hoạt động nào sau đây KHÔNG phải là xử lí thông tin?",
    options: [
      "Chiếc bàn gỗ nằm im trong phòng học",
      "Học sinh làm bài kiểm tra từ đề bài của giáo viên",
      "Máy tính chấm điểm bài trắc nghiệm",
      "Trọng tài quan sát trận đấu và đưa ra quyết định",
    ],
    answer: 0,
    explain:
      "Xử lí thông tin cần có tiếp nhận thông tin và tạo ra kết quả. Vật vô tri không tiếp nhận, không xử lí thông tin.",
  },
];

export default questions;
