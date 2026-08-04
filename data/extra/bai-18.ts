import type { LessonExtra } from "@/lib/types";

// Bài 18. Các lệnh vào ra đơn giản
const extra: LessonExtra = {
  tf: [
    {
      id: "b18-tf1",
      context:
        "Trong tiết thực hành đầu tiên về lệnh vào ra, bạn Sen hào hứng viết một chương trình nhỏ: hỏi tuổi người dùng rồi tính ra năm sinh để làm \"máy đoán tuổi\" cho vui. Sen gõ xong ba dòng lệnh, tự tin nhấn chạy và nhập số 16. Nhưng thay vì hiện ra năm sinh, màn hình lại đỏ lòm một dòng thông báo lỗi ngay tại dòng thứ hai. Sen nhìn đi nhìn lại mãi không hiểu — rõ ràng mình đã gõ đúng con số 16 mà máy vẫn không chịu làm phép trừ.",
      code: 'tuoi = input("Nhập tuổi của bạn: ")\nnam_sinh = 2026 - tuoi\nprint(nam_sinh)',
      statements: [
        {
          text: "Chương trình lỗi vì input() trả về xâu kí tự, không thể lấy số 2026 trừ đi một xâu.",
          answer: true,
          explain: 'Dù người dùng gõ 16, biến tuoi vẫn là xâu "16" — trừ số cho xâu gây TypeError.',
        },
        {
          text: "Sửa dòng đầu thành tuoi = int(input(\"Nhập tuổi của bạn: \")) thì chương trình chạy đúng.",
          answer: true,
          explain: "int() chuyển xâu sang số nguyên — phép trừ thực hiện được.",
        },
        {
          text: "Lỗi này thuộc loại lỗi cú pháp vì chương trình không chạy được đến cùng.",
          answer: false,
          explain: "Cú pháp hoàn toàn đúng; lỗi phát sinh KHI CHẠY (lỗi ngoại lệ), không phải lỗi cú pháp.",
        },
        {
          text: "Lời nhắc \"Nhập tuổi của bạn: \" trong input giúp người dùng biết cần gõ gì.",
          answer: true,
          explain: "Xâu trong input() hiển thị làm lời nhắc — chương trình thân thiện hơn.",
        },
      ],
    },
    {
      id: "b18-tf2",
      context:
        "Cửa hàng tạp hoá nhỏ của bà bạn Chíu bán đủ thứ từ mớ rau đến gói mì. Khách quen hay hỏi \"cái này bao nhiêu?\" nên bà muốn có mấy tấm phiếu giá in sẵn cho gọn. Chíu xung phong viết một chương trình nhập tên món hàng và giá tiền rồi in ra một dòng hoá đơn cho bà dán lên kệ. Chíu muốn dòng in ra có dạng: Rau cai = 12000 dong, tức tên và giá cách nhau bởi dấu bằng, cuối dòng có thêm chữ đơn vị tiền.",
      code: 'mon = input()\ngia = input()\nprint(mon, gia, sep=" = ", end=" dong\\n")',
      statements: [
        {
          text: "Tham số sep=\" = \" khiến các giá trị in ra được nối với nhau bằng cụm \" = \".",
          answer: true,
          explain: "sep quy định kí tự phân tách giữa các giá trị của print.",
        },
        {
          text: "Tham số end trong lệnh trên khiến dòng in kết thúc bằng chữ \" dong\" rồi mới xuống dòng.",
          answer: true,
          explain: "end thay phần kết mặc định — ở đây thêm ' dong' và kí tự xuống dòng.",
        },
        {
          text: "Với dữ liệu nhập Rau cai và 12000, chương trình in: Rau cai = 12000 dong.",
          answer: true,
          explain: "mon và gia nối bằng sep, kết thúc bằng end — đúng định dạng mong muốn.",
        },
        {
          text: "Vì gia dùng để in hoá đơn tiền nên bắt buộc phải chuyển gia thành số bằng int() thì print mới hoạt động.",
          answer: false,
          explain: "print in được cả xâu — chỉ khi cần TÍNH TOÁN (cộng tiền, nhân số lượng) mới phải chuyển kiểu.",
        },
      ],
    },
    {
      id: "b18-tf3",
      context:
        "Bạn Mỷ viết chương trình tính điểm trung bình hai môn Toán và Văn. Chạy thử, Mỷ nhập 8 và 7, hồi hộp chờ kết quả 7.5 nhưng chương trình dừng lại với dòng lỗi đỏ: TypeError: unsupported operand type(s) for /: 'str' and 'int'. Mỷ nhìn lại code và phát hiện vấn đề nằm ở kiểu dữ liệu.",
      code: "toan = input()\nvan = input()\ntb = (toan + van) / 2\nprint(tb)",
      statements: [
        {
          text: "Trước khi gây lỗi, biểu thức toan + van đã thực hiện phép ghép xâu \"8\" + \"7\" thành xâu \"87\".",
          answer: true,
          explain:
            "Hai biến đều là xâu nên dấu + là ghép nối; lỗi chỉ xảy ra ở bước tiếp theo khi đem xâu \"87\" chia cho 2.",
        },
        {
          text: "Sửa hai dòng đầu bằng cách bọc float(input()) thì chương trình in đúng 7.5.",
          answer: true,
          explain: "Chuyển sang số thực: (8.0 + 7.0) / 2 = 7.5.",
        },
        {
          text: "Nếu chỉ cần điểm là số nguyên thì dùng int(input()) cũng tính được trung bình, ví dụ (8 + 7) / 2 = 7.5.",
          answer: true,
          explain: "Phép / của Python luôn trả số thực dù toán hạng là số nguyên.",
        },
        {
          text: "Bài học rút ra: dữ liệu số nhập từ bàn phím phải được chuyển kiểu trước khi đưa vào tính toán.",
          answer: true,
          explain: "input trả xâu — chuyển int/float là thói quen bắt buộc khi xử lí số.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b18-es1",
      q: "Lệnh input() có đặc điểm gì cần đặc biệt lưu ý về kiểu dữ liệu trả về? Trình bày cách nhập một số nguyên, một số thực từ bàn phím và giải thích điều gì xảy ra nếu người dùng gõ chữ khi chương trình chờ số.",
      answer:
        '- input() LUÔN trả về xâu kí tự (str), kể cả khi người dùng gõ toàn chữ số — đây là điều hay gây lỗi nhất với người mới học.\n- Nhập số nguyên: n = int(input("Nhập n: ")); nhập số thực: x = float(input("Nhập x: ")).\n- Nếu người dùng gõ chữ (ví dụ "abc") khi chương trình gọi int(...): hàm không chuyển đổi được và phát sinh lỗi ngoại lệ ValueError lúc chạy, chương trình dừng — vì vậy chương trình chuyên nghiệp thường kiểm tra dữ liệu trước khi chuyển kiểu.',
    },
    {
      id: "b18-es2",
      q: "Viết chương trình nhập tên và số tiền tiết kiệm mỗi ngày của em (đồng), tính số tiền có được sau 30 ngày và in câu thông báo đầy đủ, ví dụ: \"Lan sẽ tiết kiệm được 150000 đồng sau một tháng\".",
      answer:
        'ten = input("Tên của bạn: ")\ntien_ngay = int(input("Mỗi ngày tiết kiệm (đồng): "))\ntong = tien_ngay * 30\nprint(ten, "sẽ tiết kiệm được", tong, "đồng sau một tháng")\nGiải thích: ten giữ nguyên dạng xâu; tien_ngay phải chuyển int để nhân với 30; print nhận nhiều giá trị, tự cách nhau bằng dấu cách. (Có thể dùng sep/end hoặc ghép xâu với str(tong) — cách nào ra đúng thông báo đều đạt.)',
    },
  ],
};

export default extra;
