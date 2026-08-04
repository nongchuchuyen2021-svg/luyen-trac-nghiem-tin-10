import type { LessonExtra } from "@/lib/types";

// Bài 32. Ôn tập lập trình Python
const extra: LessonExtra = {
  tf: [
    {
      id: "b32-tf1",
      context:
        "Ôn tập cuối chủ đề, cô chiếu một chương trình \"tổng hợp\" gồm cả biến, vòng lặp, danh sách và hàm rồi yêu cầu cả lớp đọc hiểu, dự đoán kết quả trước khi chạy thử. Bạn Vàng xung phong lên bảng phân tích từng dòng cho cả lớp cùng theo dõi.",
      code: 'def dem_lon_hon(a, moc):\n    d = 0\n    for x in a:\n        if x > moc:\n            d = d + 1\n    return d\n\nds = [4, 9, 12, 7, 15]\nprint(dem_lon_hon(ds, 8))\nprint(sum(ds), max(ds))',
      statements: [
        {
          text: "Lệnh print(dem_lon_hon(ds, 8)) in ra 3.",
          answer: true,
          explain: "Các số lớn hơn 8: 9, 12, 15 → 3 số.",
        },
        {
          text: "Lệnh print(sum(ds), max(ds)) in ra 47 15.",
          answer: true,
          explain: "4+9+12+7+15 = 47; số lớn nhất là 15.",
        },
        {
          text: "Biến d trong hàm là biến cục bộ, sau khi hàm chạy xong thì không dùng được ở ngoài.",
          answer: true,
          explain: "d chỉ tồn tại trong phạm vi hàm dem_lon_hon.",
        },
        {
          text: "Nếu gọi dem_lon_hon(ds) mà thiếu đối số moc thì Python vẫn chạy và tự lấy moc = 0.",
          answer: false,
          explain: "Thiếu đối số bắt buộc gây lỗi TypeError — Python không tự gán giá trị mặc định.",
        },
      ],
    },
    {
      id: "b32-tf2",
      context:
        "Trong đề ôn tập có câu hỏi so sánh hai đoạn chương trình cùng in dãy số chẵn từ 2 đến 10: một đoạn dùng for, một đoạn dùng while. Bạn Sinh khẳng định hai đoạn cho kết quả giống hệt nhau, còn bạn Páo thì nghi ngờ đoạn while có lỗi.",
      code: '# Đoạn 1\nfor i in range(2, 11, 2):\n    print(i)\n\n# Đoạn 2\ni = 2\nwhile i <= 10:\n    print(i)\n    i = i + 2',
      statements: [
        {
          text: "Cả hai đoạn đều in ra dãy 2, 4, 6, 8, 10.",
          answer: true,
          explain: "range(2, 11, 2) và while với bước +2 cho cùng kết quả.",
        },
        {
          text: "Trong đoạn 2, nếu quên dòng i = i + 2 thì chương trình sẽ lặp vô hạn.",
          answer: true,
          explain: "Điều kiện i <= 10 mãi đúng vì i không đổi — lỗi kinh điển của while.",
        },
        {
          text: "Với bài toán biết trước số lần lặp như thế này, dùng for gọn gàng và an toàn hơn.",
          answer: true,
          explain: "for tự quản lí biến đếm, không lo quên cập nhật.",
        },
        {
          text: "range(2, 11, 2) sẽ in cả số 11 vì đó là giá trị cuối được ghi trong lệnh.",
          answer: false,
          explain: "range luôn dừng TRƯỚC giá trị cuối; hơn nữa dãy bước 2 từ 2 cũng không rơi vào 11.",
        },
      ],
    },
    {
      id: "b32-tf3",
      context:
        "Tiết cuối của chủ đề lập trình, cô ra một bài tập tổng hợp: viết chương trình xử lí thông tin học sinh gồm họ tên và bảng điểm, yêu cầu vận dụng càng nhiều kiến thức đã học càng tốt. Bạn Mỷ nộp bài sớm nhất lớp với đoạn chương trình dưới đây, trong đó kết hợp cả hàm tự định nghĩa, các phương thức của xâu kí tự và các hàm có sẵn làm việc với danh sách. Cô cho cả lớp cùng đọc và dự đoán kết quả từng dòng.",
      code: 'def viet_hoa(s):\n    return s.upper()\n\nhoten = "nong van an"\nprint(viet_hoa(hoten))\nprint(len(hoten.split()))\ndiem = [7, 8, 9]\nprint(sum(diem) / len(diem))',
      statements: [
        {
          text: "Lệnh đầu tiên in ra NONG VAN AN.",
          answer: true,
          explain: "Hàm viet_hoa trả về xâu đã chuyển thành chữ hoa bằng upper().",
        },
        {
          text: "Lệnh print(len(hoten.split())) in ra 3 — số từ trong họ tên.",
          answer: true,
          explain: "split() tách thành ['nong','van','an'] gồm 3 phần tử.",
        },
        {
          text: "Lệnh cuối in ra 8.0 — điểm trung bình của ba bài.",
          answer: true,
          explain: "(7+8+9)/3 = 8.0; phép / luôn cho kết quả số thực.",
        },
        {
          text: "Sau khi gọi viet_hoa(hoten), biến hoten đã bị đổi thành chữ hoa vĩnh viễn.",
          answer: false,
          explain: "Xâu bất biến: upper() trả xâu MỚI, hoten vẫn là \"nong van an\" nếu không gán lại.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b32-es1",
      q: "Hệ thống hoá kiến thức: nêu vai trò của biến, câu lệnh điều kiện, vòng lặp, danh sách và hàm trong một chương trình. Với mỗi thành phần cho một ví dụ ngắn.",
      answer:
        '- Biến: lưu và thay đổi dữ liệu trong quá trình chạy. VD: diem = 8.\n- Câu lệnh điều kiện: rẽ nhánh, quyết định làm gì tuỳ tình huống. VD: if diem >= 5: print("Đạt").\n- Vòng lặp: thực hiện lặp lại công việc, tránh viết đi viết lại. VD: for i in range(10): print(i) — for khi biết trước số lần, while khi lặp theo điều kiện.\n- Danh sách: lưu nhiều giá trị trong một biến, truy cập theo chỉ số, duyệt bằng vòng lặp. VD: ds = [7, 8, 9]; sum(ds).\n- Hàm: đóng gói một công việc, đặt tên, gọi lại nhiều nơi, nhận tham số và trả kết quả. VD: def tinh_tb(a, b): return (a+b)/2.\nCác thành phần này phối hợp với nhau tạo nên chương trình giải quyết bài toán thực tế.',
    },
    {
      id: "b32-es2",
      q: "Viết chương trình hoàn chỉnh: nhập danh sách điểm của n học sinh, dùng HÀM để tính điểm trung bình và HÀM để đếm số học sinh đạt từ 5 trở lên; chương trình chính in ra hai kết quả này và thông báo lớp có đạt tỉ lệ trên 50% học sinh đạt hay không.",
      answer:
        'def tinh_tb(a):\n    return sum(a) / len(a)\n\ndef dem_dat(a):\n    d = 0\n    for x in a:\n        if x >= 5:\n            d = d + 1\n    return d\n\n# Chương trình chính\nn = int(input("Số học sinh: "))\ndiem = []\nfor i in range(n):\n    diem.append(float(input()))\n\ntb = tinh_tb(diem)\nso_dat = dem_dat(diem)\nprint("Điểm trung bình lớp:", tb)\nprint("Số HS đạt:", so_dat)\nif so_dat / n > 0.5:\n    print("Lớp đạt tỉ lệ trên 50%")\nelse:\n    print("Lớp chưa đạt tỉ lệ trên 50%")\n\nƯu điểm của cách viết này: mỗi hàm làm một việc rõ ràng, chương trình chính ngắn gọn dễ đọc, và có thể dùng lại hai hàm cho lớp khác.',
    },
  ],
};

export default extra;
