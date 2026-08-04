import type { LessonExtra } from "@/lib/types";

// Bài 28. Phạm vi của biến
const extra: LessonExtra = {
  tf: [
    {
      id: "b28-tf1",
      context:
        "Bạn Páo viết chương trình tính diện tích hình tròn. Trong hàm, Páo tạo biến trung gian để lưu kết quả rồi in ra ngoài hàm. Chạy thử, máy báo dòng đỏ NameError: name 'dt' is not defined khiến Páo ngơ ngác: \"Rõ ràng em vừa tạo biến dt ở dòng trên mà?\"",
      code: 'def dien_tich(r):\n    dt = 3.14 * r * r\n    return dt\n\ndien_tich(5)\nprint(dt)',
      statements: [
        {
          text: "Biến dt là biến cục bộ của hàm dien_tich, chỉ tồn tại trong thời gian hàm chạy.",
          answer: true,
          explain: "Biến tạo trong thân hàm là cục bộ — hàm kết thúc là biến biến mất.",
        },
        {
          text: "Lệnh print(dt) ngoài hàm gây lỗi vì bên ngoài không nhìn thấy biến cục bộ dt.",
          answer: true,
          explain: "Phạm vi của dt chỉ trong hàm — bên ngoài, tên dt chưa được định nghĩa.",
        },
        {
          text: "Sửa lỗi bằng cách viết kq = dien_tich(5) rồi print(kq).",
          answer: true,
          explain: "Lấy giá trị hàm trả về qua biến ở ngoài — cách làm đúng đắn.",
        },
        {
          text: "Có thể sửa lỗi bằng cách xoá lệnh return trong hàm đi.",
          answer: false,
          explain: "Xoá return càng không lấy được kết quả — hàm sẽ trả về None.",
        },
      ],
    },
    {
      id: "b28-tf2",
      context:
        "Cô cho cả lớp một câu đố \"đánh lừa\": cùng một tên biến x xuất hiện cả trong hàm lẫn ngoài hàm. Bạn Hầu đoán chương trình in ra 99 rồi 99, bạn Sảnh đoán 99 rồi 5. Cô mỉm cười cho chạy thử và giảng về khái niệm biến cục bộ \"che\" biến toàn cục.",
      code: 'x = 5\n\ndef thu():\n    x = 99\n    print(x)\n\nthu()\nprint(x)',
      statements: [
        {
          text: "Chương trình in ra hai dòng: 99 rồi 5.",
          answer: true,
          explain: "Trong hàm là biến cục bộ x = 99; ngoài hàm biến toàn cục x vẫn giữ giá trị 5.",
        },
        {
          text: "Lệnh x = 99 trong hàm đã tạo ra một biến cục bộ MỚI, không làm thay đổi biến toàn cục x.",
          answer: true,
          explain: "Gán trong hàm mặc định tạo biến cục bộ — biến toàn cục được bảo vệ.",
        },
        {
          text: "Muốn lệnh gán trong hàm thay đổi luôn biến toàn cục x, cần khai báo global x ở đầu thân hàm.",
          answer: true,
          explain: "Từ khoá global báo cho Python biết x trong hàm chính là biến toàn cục.",
        },
        {
          text: "Vì trùng tên nên Python sẽ báo lỗi xung đột tên biến khi chạy chương trình này.",
          answer: false,
          explain: "Không lỗi gì cả — hai biến ở hai phạm vi khác nhau, hoàn toàn độc lập.",
        },
      ],
    },
    {
      id: "b28-tf3",
      context:
        "Nhóm bạn Chảo làm dự án chung, mỗi bạn viết một hàm rồi ghép lại. Ai cũng dùng biến đếm tên i trong hàm của mình. Trước khi ghép, cả nhóm lo lắng \"trùng tên hết thế này chắc loạn\", nhưng khi chạy thử thì chương trình vẫn cho kết quả đúng răm rắp.",
      code: 'def dem_chan(a):\n    d = 0\n    for i in a:\n        if i % 2 == 0:\n            d = d + 1\n    return d\n\ndef tinh_tong(a):\n    s = 0\n    for i in a:\n        s = s + i\n    return s\n\nds = [1, 2, 3, 4]\nprint(dem_chan(ds), tinh_tong(ds))',
      statements: [
        {
          text: "Biến i trong hai hàm là hai biến hoàn toàn độc lập, không ảnh hưởng lẫn nhau.",
          answer: true,
          explain: "Mỗi hàm có phạm vi cục bộ riêng — đó là lí do nhóm ghép code an toàn.",
        },
        {
          text: "Lệnh print in ra 2 10.",
          answer: true,
          explain: "Danh sách [1, 2, 3, 4] có 2 số chẵn (2 và 4); tổng bốn số là 1+2+3+4 = 10.",
        },
        {
          text: "Tham số a trong mỗi hàm cũng là biến cục bộ của hàm đó.",
          answer: true,
          explain: "Tham số sinh ra khi gọi hàm và mất đi khi hàm kết thúc.",
        },
        {
          text: "Việc ưu tiên dùng biến cục bộ và truyền dữ liệu qua tham số giúp các hàm độc lập, dễ ghép nối khi làm nhóm.",
          answer: true,
          explain: "Đây là nguyên tắc quan trọng khi nhiều người cùng phát triển một chương trình.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b28-es1",
      q: "Phân biệt biến cục bộ và biến toàn cục về nơi khai báo, phạm vi sử dụng và thời gian tồn tại. Vì sao nên hạn chế lạm dụng biến toàn cục?",
      answer:
        "- Biến cục bộ: tạo bên trong hàm (kể cả tham số); chỉ dùng được trong hàm đó; sinh ra khi gọi hàm và mất đi khi hàm kết thúc.\n- Biến toàn cục: tạo ở cấp chương trình chính, ngoài mọi hàm; các hàm có thể ĐỌC giá trị của nó; tồn tại suốt thời gian chương trình chạy. Muốn GÁN LẠI biến toàn cục trong hàm phải khai báo global.\n- Hạn chế lạm dụng biến toàn cục vì: nhiều hàm cùng sửa một biến khiến khó biết giá trị bị thay đổi ở đâu, rất khó tìm lỗi; các hàm mất tính độc lập, khó tái sử dụng và khó ghép khi làm việc nhóm. Nên truyền dữ liệu qua tham số và lấy kết quả qua return.",
    },
    {
      id: "b28-es2",
      q: "Cho đoạn chương trình sau. Hãy dự đoán kết quả in ra và giải thích cặn kẽ vì sao, sau đó sửa lại để giá trị của biến a thực sự tăng thêm 1.",
      code: "def tang(n):\n    n = n + 1\n    return n\n\na = 7\ntang(a)\nprint(a)",
      answer:
        "- Kết quả in ra: 7.\n- Giải thích: khi gọi tang(a), giá trị 7 được sao chép cho tham số n (biến cục bộ). Lệnh n = n + 1 chỉ làm n thành 8 bên trong hàm; biến a bên ngoài không hề bị ảnh hưởng. Hàm có trả về 8 nhưng giá trị đó bị bỏ đi vì không được gán cho biến nào.\n- Sửa lại: a = tang(a) — lấy giá trị hàm trả về gán ngược cho a, khi đó print(a) in ra 8.",
    },
  ],
};

export default extra;
