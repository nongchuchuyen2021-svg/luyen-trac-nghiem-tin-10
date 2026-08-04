import type { LessonExtra } from "@/lib/types";

// Bài 17. Biến và lệnh gán
const extra: LessonExtra = {
  tf: [
    {
      id: "b17-tf1",
      context:
        "Chợ phiên xã họp vào chủ nhật hằng tuần, mẹ bạn Trà mang mật ong rừng xuống bán với giá 150 nghìn đồng một chai. Mọi lần mẹ đều nhẩm tính bằng miệng rồi ghi vào cuốn sổ nhỏ, có hôm vội quá cộng nhầm mất cả trăm nghìn. Sau khi học bài về biến và lệnh gán, Trà xin phép mẹ viết một chương trình nhỏ để tính tiền cho nhanh và chính xác. Trà đặt tên biến thật rõ ràng rồi chạy thử với trường hợp khách mua 3 chai.",
      code: "gia = 150\nso_chai = 3\ntien = gia * so_chai\nprint(tien)",
      statements: [
        {
          text: "Chương trình dùng ba biến: gia, so_chai và tien.",
          answer: true,
          explain: "Ba tên gia, so_chai, tien đều là biến được tạo bằng lệnh gán.",
        },
        {
          text: "Chạy chương trình, màn hình in ra 450.",
          answer: true,
          explain: "tien = 150 × 3 = 450.",
        },
        {
          text: "Dấu = trong dòng tien = gia * so_chai có nghĩa là so sánh xem hai vế có bằng nhau không.",
          answer: false,
          explain: "Một dấu = là LỆNH GÁN: tính vế phải rồi lưu vào biến vế trái; so sánh phải dùng ==.",
        },
        {
          text: "Tên biến so_chai hợp lệ trong Python vì gồm chữ thường và dấu gạch dưới.",
          answer: true,
          explain: "Chữ cái, chữ số, gạch dưới và không bắt đầu bằng số — đúng quy tắc đặt tên.",
        },
      ],
    },
    {
      id: "b17-tf2",
      context:
        "Bạn Páo theo dõi số bước chân đi bộ mỗi ngày bằng đồng hồ thông minh và muốn cộng dồn bằng Python. Páo viết đoạn lệnh dưới đây rồi đố bạn cùng bàn đoán giá trị cuối cùng của biến tong. Bạn cùng bàn lại khăng khăng dòng thứ ba \"vô lí vì tong không thể bằng chính nó cộng thêm\".",
      code: "tong = 0\ntong = tong + 5200\ntong = tong + 6800",
      statements: [
        {
          text: "Sau khi chạy hết đoạn lệnh, biến tong có giá trị 12000.",
          answer: true,
          explain: "0 + 5200 = 5200, rồi 5200 + 6800 = 12000.",
        },
        {
          text: "Lệnh tong = tong + 6800 là vô lí về mặt toán học nên Python báo lỗi.",
          answer: false,
          explain: "Đây không phải phương trình: máy tính lấy giá trị HIỆN TẠI của tong, cộng 6800, gán KẾT QUẢ trở lại — hợp lệ và rất thông dụng.",
        },
        {
          text: "Giá trị của một biến có thể thay đổi nhiều lần trong khi chương trình chạy.",
          answer: true,
          explain: "Đúng bản chất của biến — tong đổi giá trị ba lần trong ví dụ.",
        },
        {
          text: "Nếu bỏ dòng đầu tong = 0 thì dòng thứ hai sẽ gây lỗi vì tong chưa tồn tại.",
          answer: true,
          explain: "Vế phải cần đọc giá trị của tong — biến chưa được tạo sẽ gây NameError.",
        },
      ],
    },
    {
      id: "b17-tf3",
      context:
        "Ôn bài về phép toán, nhóm bạn Dở chơi trò \"máy tính sống\": một bạn hô biểu thức, cả nhóm bấm máy tính giấy nhẩm kết quả theo đúng quy tắc của Python. Vòng chơi hôm nay gồm các biểu thức: 17 // 5, 17 % 5, 2 ** 4 và 6 + 4 * 2. Trận đấu nảy lửa vì có bạn quên mất thứ tự ưu tiên phép toán.",
      statements: [
        {
          text: "17 // 5 cho kết quả 3.",
          answer: true,
          explain: "// là chia lấy nguyên: 17 chia 5 được 3 (dư 2).",
        },
        {
          text: "17 % 5 cho kết quả 2.",
          answer: true,
          explain: "% là chia lấy dư: 17 = 5 × 3 + 2.",
        },
        {
          text: "2 ** 4 cho kết quả 8.",
          answer: false,
          explain: "** là luỹ thừa: 2⁴ = 16, không phải 2 × 4 = 8.",
        },
        {
          text: "6 + 4 * 2 cho kết quả 14 vì phép nhân được ưu tiên thực hiện trước phép cộng.",
          answer: true,
          explain: "Nhân chia trước, cộng trừ sau: 4 × 2 = 8, rồi 6 + 8 = 14.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b17-es1",
      q: "Biến là gì? Nêu quy tắc đặt tên biến trong Python và cho 3 ví dụ tên hợp lệ, 3 ví dụ tên không hợp lệ (kèm lí do).",
      answer:
        "- Biến là tên của một vùng nhớ lưu giá trị; giá trị có thể thay đổi khi chương trình chạy nhờ lệnh gán.\n- Quy tắc: chỉ gồm chữ cái, chữ số, dấu gạch dưới; không bắt đầu bằng chữ số; không trùng từ khoá (if, for, while...); phân biệt hoa/thường; nên đặt tên gợi nghĩa.\n- Hợp lệ: diem_toan, tong, banKinh2.\n- Không hợp lệ: 2diem (bắt đầu bằng số), diem toan (chứa dấu cách), for (trùng từ khoá).",
    },
    {
      id: "b17-es2",
      q: "Viết chương trình Python: cho trước cạnh a của hình vuông (gán a = 5), tính và in ra chu vi, diện tích hình vuông đó. Giải thích từng dòng lệnh của em.",
      answer:
        "a = 5              # gán độ dài cạnh cho biến a\nchu_vi = 4 * a     # chu vi hình vuông = 4 lần cạnh\ndien_tich = a * a  # diện tích = cạnh nhân cạnh (hoặc a ** 2)\nprint(chu_vi)      # in 20\nprint(dien_tich)   # in 25\nGiải thích: dòng 1 tạo biến a giữ dữ liệu vào; dòng 2, 3 dùng lệnh gán tính giá trị biểu thức vế phải rồi lưu vào biến vế trái; hai lệnh print đưa kết quả ra màn hình.",
    },
  ],
};

export default extra;
