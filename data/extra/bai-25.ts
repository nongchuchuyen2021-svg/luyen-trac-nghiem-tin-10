import type { LessonExtra } from "@/lib/types";

// Bài 25. Một số lệnh làm việc với xâu kí tự
const extra: LessonExtra = {
  tf: [
    {
      id: "b25-tf1",
      context:
        "Ban thư kí Đoàn trường nhận danh sách đăng kí hiến máu nhưng các bạn gõ tên lộn xộn: có bạn viết thường hết, có bạn thừa khoảng trắng hai đầu. Bạn Thảo được giao viết chương trình \"làm sạch\" từng dòng tên trước khi in danh sách chính thức.",
      code: 'ten = "   nong thi hoa  "\nten = ten.strip()\nten = ten.title()\nprint(ten)\nprint(len(ten))',
      statements: [
        {
          text: "Lệnh strip() cắt bỏ các khoảng trắng thừa ở hai đầu xâu.",
          answer: true,
          explain: "strip() chỉ dọn hai đầu, không đụng khoảng trắng giữa các từ.",
        },
        {
          text: "Lệnh title() chuyển xâu thành \"Nong Thi Hoa\" — viết hoa chữ cái đầu mỗi từ.",
          answer: true,
          explain: "title() viết hoa kí tự đầu của từng từ trong xâu.",
        },
        {
          text: "Sau hai lệnh, len(ten) in ra 12.",
          answer: true,
          explain: '"Nong Thi Hoa" gồm Nong(4) + dấu cách + Thi(3) + dấu cách + Hoa(3) = 12 kí tự (các khoảng trắng thừa hai đầu đã bị strip cắt bỏ).',
        },
        {
          text: "Các phương thức strip() và title() trả về xâu mới nên phải gán lại (ten = ten.strip()) thì biến ten mới thay đổi.",
          answer: true,
          explain: "Xâu bất biến — mọi phương thức đều trả xâu mới, không sửa xâu gốc.",
        },
      ],
    },
    {
      id: "b25-tf2",
      context:
        "Bạn Cường viết chương trình đếm số từ trong một câu để kiểm tra xem bài giới thiệu bản thân có đủ độ dài quy định không. Cường phát hiện chỉ cần hai lệnh ngắn gọn là xong, thay vì phải tự đếm dấu cách bằng vòng lặp như cách làm ban đầu.",
      code: 's = "Em rat yeu que huong Na Ri"\ntu = s.split()\nprint(tu)\nprint(len(tu))',
      statements: [
        {
          text: "Lệnh split() không tham số tách xâu thành danh sách các từ theo dấu cách.",
          answer: true,
          explain: "Mặc định split() tách theo khoảng trắng — rất tiện tách từ trong câu.",
        },
        {
          text: "Biến tu là một danh sách gồm 7 phần tử.",
          answer: true,
          explain: 'Em / rat / yeu / que / huong / Na / Ri = 7 từ.',
        },
        {
          text: "Lệnh ngược lại với split là join, ví dụ \" \".join(tu) sẽ ghép danh sách trở lại thành câu.",
          answer: true,
          explain: "join nối các phần tử danh sách bằng xâu phân tách đặt trước dấu chấm.",
        },
        {
          text: "Kết quả của split() là một xâu kí tự dài giống xâu ban đầu.",
          answer: false,
          explain: "split() trả về DANH SÁCH các xâu con, không phải một xâu.",
        },
      ],
    },
    {
      id: "b25-tf3",
      context:
        "Thư viện trường bắt đầu số hoá danh mục tài liệu, mỗi đầu sách kèm một tệp ảnh bìa và một tệp mô tả. Cô thủ thư than phiền rằng tên tệp các bạn cộng tác viên đặt rất lộn xộn, nhiều tên có dấu cách nên khi tải lên hệ thống hay báo lỗi đường dẫn. Bạn Sán nhận nhiệm vụ viết một chương trình nhỏ: lọc ra đúng các tệp ảnh và tự động sửa tên cho thống nhất bằng cách thay mọi dấu cách thành dấu gạch dưới.",
      code: 'ten = "bao cao thang 10.png"\nprint(ten.endswith(".png"))\nprint(ten.replace(" ", "_"))\nprint(ten.find("thang"))',
      statements: [
        {
          text: "Lệnh endswith(\".png\") trả về True vì tên tệp kết thúc bằng .png.",
          answer: true,
          explain: "endswith kiểm tra phần đuôi của xâu — cách lọc loại tệp rất tiện.",
        },
        {
          text: "Lệnh replace(\" \", \"_\") tạo ra xâu mới \"bao_cao_thang_10.png\".",
          answer: true,
          explain: "replace thay TẤT CẢ các dấu cách bằng dấu gạch dưới.",
        },
        {
          text: "Sau lệnh print(ten.replace(...)), biến ten đã được đổi thành \"bao_cao_thang_10.png\".",
          answer: false,
          explain:
            "replace chỉ trả về xâu mới; muốn biến ten thay đổi phải gán lại: ten = ten.replace(\" \", \"_\").",
        },
        {
          text: "Nếu tìm một xâu con không tồn tại, ví dụ ten.find(\"xyz\"), lệnh find trả về -1.",
          answer: true,
          explain: "find trả −1 khi không tìm thấy (khác index của danh sách là báo lỗi).",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b25-es1",
      q: "Trình bày tác dụng của các phương thức xâu: upper, lower, strip, split, join, replace, find, count. Với mỗi phương thức cho một ví dụ ngắn kèm kết quả.",
      answer:
        '- upper()/lower(): chuyển hoa/thường. "na ri".upper() → "NA RI".\n- strip(): cắt khoảng trắng hai đầu. "  abc  ".strip() → "abc".\n- split(dấu): tách xâu thành danh sách. "a,b,c".split(",") → ["a","b","c"]; split() không tham số tách theo dấu cách.\n- join: nối danh sách thành xâu. "-".join(["a","b"]) → "a-b".\n- replace(cũ, mới): thay thế, trả xâu mới. "toi".replace("o","ô") → "tôi".\n- find(x): trả chỉ số xuất hiện đầu tiên, −1 nếu không có. "abcd".find("c") → 2.\n- count(x): đếm số lần xuất hiện. "banana".count("a") → 3.\nLưu ý chung: mọi phương thức đều trả về giá trị mới, xâu gốc không đổi.',
    },
    {
      id: "b25-es2",
      q: "Viết chương trình nhập vào một câu, in ra: số từ trong câu, câu viết in hoa toàn bộ, và câu sau khi thay tất cả dấu cách bằng dấu gạch nối.",
      answer:
        's = input("Nhập một câu: ")\ntu = s.split()\nprint("Số từ:", len(tu))\nprint("Viết hoa:", s.upper())\nprint("Thay dấu cách:", s.replace(" ", "-"))\n\nVí dụ với câu "em yeu truong em":\nSố từ: 4\nViết hoa: EM YEU TRUONG EM\nThay dấu cách: em-yeu-truong-em\nGợi ý nâng cao: dùng s.strip() trước khi split để tránh đếm nhầm khi người dùng gõ thừa khoảng trắng.',
    },
  ],
};

export default extra;
