import type { Question } from "@/lib/types";

// Bài 1. Thông tin và xử lí thông tin
const questions: Question[] = [
  {
    id: "b1-01",
    q: "Thông tin là gì?",
    options: [
      "Những gì đem lại hiểu biết cho con người về thế giới xung quanh và về chính bản thân mình",
      "Các con số và chữ viết được lưu trong máy tính",
      "Tất cả những gì con người nhìn thấy được",
      "Các tín hiệu điện truyền trong máy tính",
    ],
    answer: 0,
    explain:
      "Thông tin là những gì đem lại hiểu biết cho con người về thế giới xung quanh và về chính bản thân mình.",
  },
  {
    id: "b1-02",
    q: "Dữ liệu là gì?",
    options: [
      "Thông tin đã được đưa vào máy tính để máy tính có thể xử lí",
      "Mọi hiểu biết của con người",
      "Các chương trình máy tính",
      "Kết quả in ra màn hình",
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
      "Xử lí → tiếp nhận → đưa ra kết quả",
      "Lưu trữ → tiếp nhận → xử lí",
      "Đưa ra kết quả → xử lí → tiếp nhận",
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
      "Thông tin là ý nghĩa của dữ liệu; dữ liệu là hình thức thể hiện của thông tin trong máy tính",
      "Thông tin và dữ liệu là hai tên gọi của cùng một khái niệm",
      "Dữ liệu là ý nghĩa; thông tin là các con số cụ thể",
      "Thông tin chỉ tồn tại trong máy tính, dữ liệu tồn tại ngoài đời",
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
