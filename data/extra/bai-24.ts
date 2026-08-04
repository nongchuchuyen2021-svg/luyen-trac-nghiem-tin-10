import type { LessonExtra } from "@/lib/types";

// Bài 24. Xâu kí tự
const extra: LessonExtra = {
  tf: [
    {
      id: "b24-tf1",
      context:
        "Trong giờ thực hành, cô cho cả lớp tạo \"thẻ học sinh điện tử\" đơn giản. Bạn Dín gõ tên trường vào một biến xâu rồi thử nghịch các lệnh với nó: đếm độ dài, lấy kí tự đầu, lấy kí tự cuối. Dín ngạc nhiên khi thấy khoảng trắng cũng được tính là một kí tự.",
      code: 's = "Na Ri"\nprint(len(s))\nprint(s[0])\nprint(s[len(s) - 1])',
      statements: [
        {
          text: "Lệnh len(s) in ra 5 vì dấu cách giữa hai từ cũng được tính là một kí tự.",
          answer: true,
          explain: "N-a-(cách)-R-i = 5 kí tự.",
        },
        {
          text: "Lệnh s[0] in ra kí tự \"N\".",
          answer: true,
          explain: "Chỉ số xâu bắt đầu từ 0 giống danh sách.",
        },
        {
          text: "Lệnh s[len(s) - 1] in ra kí tự \"i\" — kí tự cuối cùng của xâu.",
          answer: true,
          explain: "len(s) − 1 = 4 là chỉ số của kí tự cuối.",
        },
        {
          text: "Nếu viết s[5] thì Python in ra một xâu rỗng vì đã hết kí tự.",
          answer: false,
          explain: "Vượt phạm vi chỉ số gây lỗi IndexError, không trả về xâu rỗng.",
        },
      ],
    },
    {
      id: "b24-tf2",
      context:
        "Bạn Phong viết chương trình tạo mật khẩu vui cho nhóm: ghép tên nhóm với năm học rồi lặp lại vài lần cho \"dài cho oách\". Phong cũng thử sửa một kí tự trong xâu thì máy báo lỗi khiến cả nhóm ngạc nhiên — hoá ra xâu không \"dễ tính\" như danh sách.",
      code: 'ten = "TIN10"\nnam = "2026"\nmk = ten + nam\nprint(mk)\nprint("-" * 10)',
      statements: [
        {
          text: "Biến mk có giá trị \"TIN102026\" vì phép + với xâu là ghép nối.",
          answer: true,
          explain: "Cộng hai xâu nối liền chúng, không có dấu cách chen vào.",
        },
        {
          text: "Lệnh print(\"-\" * 10) in ra một dòng gồm 10 dấu gạch ngang.",
          answer: true,
          explain: "Phép nhân xâu với số nguyên lặp lại xâu đó.",
        },
        {
          text: "Lệnh ten[0] = \"B\" sẽ đổi kí tự đầu của biến ten thành \"B\".",
          answer: false,
          explain:
            "Xâu là kiểu KHÔNG thay đổi được (immutable) — gán lại từng kí tự gây TypeError. Muốn 'sửa' phải tạo xâu mới: ten = \"B\" + ten[1:].",
        },
        {
          text: "Biểu thức \"10\" in mk có giá trị True.",
          answer: true,
          explain: "Toán tử in kiểm tra xâu con: \"10\" xuất hiện trong \"TIN102026\".",
        },
      ],
    },
    {
      id: "b24-tf3",
      context:
        "Cô ra bài kiểm tra nhanh: đếm xem trong họ tên đầy đủ của mình có bao nhiêu chữ cái \"a\" (không phân biệt hoa thường). Bạn Miên viết đoạn chương trình duyệt từng kí tự của xâu như duyệt danh sách, vừa gõ vừa lẩm nhẩm \"n-ô-n-g...\".",
      code: 's = "Nong Van An"\ndem = 0\nfor ch in s:\n    if ch == "a" or ch == "A":\n        dem = dem + 1\nprint(dem)',
      statements: [
        {
          text: "Vòng lặp for ch in s duyệt qua từng kí tự của xâu s.",
          answer: true,
          explain: "Xâu duyệt được bằng for giống danh sách — mỗi vòng ch là một kí tự.",
        },
        {
          text: "Với s = \"Nong Van An\", chương trình in ra 2.",
          answer: true,
          explain: 'Duyệt cả xâu chỉ gặp chữ "a" trong "Van" và chữ "A" trong "An" — tổng cộng 2 kí tự.',
        },
        {
          text: "Điều kiện ch == \"a\" or ch == \"A\" giúp đếm cả chữ thường lẫn chữ hoa.",
          answer: true,
          explain: "Python phân biệt hoa/thường nên phải xét cả hai trường hợp.",
        },
        {
          text: "Có thể viết gọn điều kiện trên bằng cách so sánh ch.lower() == \"a\".",
          answer: true,
          explain: "lower() chuyển kí tự về chữ thường rồi so sánh một lần — ngắn gọn hơn.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b24-es1",
      q: "Xâu kí tự trong Python là gì? Nêu các thao tác cơ bản với xâu (truy cập kí tự, lấy độ dài, ghép nối, lặp, kiểm tra xâu con, duyệt). Vì sao nói xâu là kiểu dữ liệu không thay đổi được?",
      answer:
        '- Xâu (str): dãy kí tự đặt trong cặp nháy đơn hoặc nháy kép, có thứ tự, truy cập theo chỉ số từ 0.\n- Thao tác: s[i] lấy kí tự thứ i; len(s) độ dài; s1 + s2 ghép nối; s * n lặp; "abc" in s kiểm tra xâu con; for ch in s duyệt từng kí tự; s[a:b] lấy lát cắt.\n- Không thay đổi được (immutable): không thể gán s[0] = "X" (gây TypeError). Mọi thao tác "sửa" thực chất tạo ra một xâu MỚI, ví dụ s = "X" + s[1:] hoặc s = s.replace("a", "b"). Đây là điểm khác biệt quan trọng so với danh sách.',
    },
    {
      id: "b24-es2",
      q: "Viết chương trình nhập vào một xâu, đếm và in ra số kí tự là chữ số có trong xâu đó. (Gợi ý: có thể so sánh kí tự với các chữ số hoặc dùng phương thức isdigit().)",
      answer:
        's = input("Nhập xâu: ")\ndem = 0\nfor ch in s:\n    if ch.isdigit():\n        dem = dem + 1\nprint("Số kí tự là chữ số:", dem)\n\nCách khác không dùng isdigit:\nfor ch in s:\n    if ch >= "0" and ch <= "9":\n        dem = dem + 1\nGiải thích: duyệt từng kí tự, kiểm tra có phải chữ số không rồi cộng vào biến đếm — mẫu "duyệt và đếm theo điều kiện" áp dụng cho xâu.',
    },
  ],
};

export default extra;
