import type { LessonExtra } from "@/lib/types";

// Bài 21. Câu lệnh lặp while
const extra: LessonExtra = {
  tf: [
    {
      id: "b21-tf1",
      context:
        "Phòng Tin học có trò chơi \"đoán số bí mật\" do CLB lập trình viết: máy giữ một số, người chơi đoán đến khi đúng thì thôi. Bạn Sinh chơi thử, đoán sai bốn lần, lần thứ năm thì trúng và máy chúc mừng. Cô giáo nhân đó giảng: \"Trò này phải dùng while chứ không dùng for được — vì có ai biết trước người chơi đoán mấy lần đâu!\"",
      code: 'so_bi_mat = 7\ndoan = int(input("Đoán đi: "))\nwhile doan != so_bi_mat:\n    doan = int(input("Sai rồi, đoán lại: "))\nprint("Chúc mừng!")',
      statements: [
        {
          text: "Vòng lặp tiếp tục chừng nào người chơi còn đoán sai (doan != so_bi_mat còn đúng).",
          answer: true,
          explain: "while lặp khi điều kiện đúng — đoán sai thì điều kiện đúng, lặp tiếp.",
        },
        {
          text: "Nếu ngay lần đầu Sinh đoán trúng số 7, thân vòng lặp không thực hiện lần nào.",
          answer: true,
          explain: "Điều kiện sai từ đầu → while bỏ qua thân lặp, in luôn lời chúc mừng.",
        },
        {
          text: "Bài toán này dùng for hợp lí hơn while vì mọi vòng lặp đều thay thế được cho nhau.",
          answer: false,
          explain: "Số lần đoán không biết trước — đây là tình huống đặc trưng phải dùng while.",
        },
        {
          text: "Lệnh nhập lại doan bên trong thân lặp là yếu tố khiến điều kiện có cơ hội thay đổi và vòng lặp có thể kết thúc.",
          answer: true,
          explain: "Không cập nhật doan trong thân lặp thì điều kiện mãi đúng — lặp vô hạn.",
        },
      ],
    },
    {
      id: "b21-tf2",
      context:
        "Bạn Măng viết chương trình đếm ngược cho tiết mục văn nghệ: màn hình hiện 5, 4, 3, 2, 1 rồi hô \"Diễn!\". Nhưng khi chạy thử, con số 5 cứ nhảy ra liên tục không ngừng, Măng phải bấm Ctrl+C để dừng chương trình. Cả nhóm xúm lại soi từng dòng code tìm nguyên nhân.",
      code: 'dem = 5\nwhile dem > 0:\n    print(dem)\nprint("Diễn!")',
      statements: [
        {
          text: "Chương trình lặp vô hạn vì biến dem không hề thay đổi trong thân vòng lặp.",
          answer: true,
          explain: "dem mãi bằng 5, điều kiện dem > 0 mãi đúng — lỗi quên cập nhật biến điều khiển.",
        },
        {
          text: "Thêm lệnh dem = dem - 1 vào thân lặp (thụt lề cùng print(dem)) sẽ sửa được lỗi.",
          answer: true,
          explain: "dem giảm dần 5→4→...→0, khi dem = 0 điều kiện sai, thoát lặp và in Diễn!.",
        },
        {
          text: "Tổ hợp phím Ctrl+C mà Măng dùng có tác dụng ngắt chương trình đang chạy.",
          answer: true,
          explain: "Ctrl+C gửi tín hiệu KeyboardInterrupt — cách thoát vòng lặp vô hạn khi thử nghiệm.",
        },
        {
          text: "Sau khi sửa đúng, lệnh print(\"Diễn!\") sẽ được thực hiện 5 lần.",
          answer: false,
          explain: "print(\"Diễn!\") KHÔNG thụt lề — nằm ngoài vòng lặp, chỉ chạy một lần sau khi thoát.",
        },
      ],
    },
    {
      id: "b21-tf3",
      context:
        "Sau vụ thu hoạch được mùa, mẹ bạn Xía mang 100 triệu đồng ra ngân hàng gửi tiết kiệm với lãi suất 6% mỗi năm, lãi được nhập vào gốc để gửi tiếp. Bữa cơm tối, mẹ nói dự định chờ đủ 150 triệu sẽ rút ra sửa lại mái nhà. Xía tò mò không biết phải chờ bao nhiêu năm, nhưng ngại bấm máy tính bỏ túi từng năm một nên viết luôn một chương trình để máy tính giúp.",
      code: "tien = 100\nnam = 0\nwhile tien <= 150:\n    tien = tien * 1.06\n    nam = nam + 1\nprint(nam)",
      statements: [
        {
          text: "Đây là bài toán phù hợp với while vì không biết trước cần lặp bao nhiêu năm.",
          answer: true,
          explain: "Điều kiện dừng phụ thuộc kết quả tính toán — đặc trưng của while.",
        },
        {
          text: "Mỗi vòng lặp, số tiền được nhân thêm 1.06 tương ứng tăng 6% so với năm trước.",
          answer: true,
          explain: "tien × 1.06 = tien + 6% của tien — đúng lãi nhập gốc.",
        },
        {
          text: "Vòng lặp dừng lại ngay khi số tiền vượt quá 150 triệu.",
          answer: true,
          explain: "Khi tien > 150, điều kiện tien <= 150 sai — thoát lặp, in số năm.",
        },
        {
          text: "Nếu lãi suất là 0% (nhân 1.0 mỗi năm), chương trình vẫn dừng được bình thường.",
          answer: false,
          explain: "Tiền mãi 100, điều kiện luôn đúng — lặp vô hạn. Đây là ví dụ điều kiện không bao giờ sai.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b21-es1",
      q: "So sánh câu lệnh for và while: cấu trúc, tình huống sử dụng phù hợp của mỗi loại. Vòng lặp vô hạn là gì, nguyên nhân thường gặp và cách phòng tránh?",
      answer:
        "- for: lặp theo dãy giá trị biết trước (range, danh sách, xâu) — biến đếm tự động; hợp với bài toán biết trước số lần lặp (in bảng nhân, duyệt danh sách).\n- while: lặp theo điều kiện — kiểm tra trước mỗi vòng, còn đúng còn lặp; hợp với bài toán chưa biết số lần (nhập đến khi hợp lệ, tính đến khi đạt ngưỡng, trò chơi đoán số).\n- Vòng lặp vô hạn: vòng lặp không bao giờ kết thúc vì điều kiện không bao giờ sai. Nguyên nhân thường gặp: quên cập nhật biến điều khiển trong thân lặp; điều kiện viết sai. Phòng tránh: bảo đảm thân lặp làm thay đổi điều kiện; thử nháp vài vòng trên giấy; khi bị treo dùng Ctrl+C để ngắt.",
    },
    {
      id: "b21-es2",
      q: "Viết chương trình yêu cầu người dùng nhập điểm kiểm tra (thang 0-10); nếu nhập ngoài phạm vi thì bắt nhập lại đến khi hợp lệ, cuối cùng in ra \"Đã ghi nhận điểm: ...\". Giải thích vì sao phải dùng while cho bài này.",
      answer:
        'diem = float(input("Nhập điểm (0-10): "))\nwhile diem < 0 or diem > 10:\n    diem = float(input("Không hợp lệ! Nhập lại (0-10): "))\nprint("Đã ghi nhận điểm:", diem)\n- Dùng while vì không thể biết trước người dùng nhập sai bao nhiêu lần — có người đúng ngay lần đầu, có người sai nhiều lần; vòng lặp chỉ dừng khi dữ liệu thoả điều kiện hợp lệ. Đây là kĩ thuật kiểm tra dữ liệu vào (input validation) rất hay dùng trong chương trình thực tế.',
    },
  ],
};

export default extra;
