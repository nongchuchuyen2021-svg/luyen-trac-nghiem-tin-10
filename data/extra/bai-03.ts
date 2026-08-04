import type { LessonExtra } from "@/lib/types";

// Bài 3. Một số kiểu dữ liệu và dữ liệu văn bản
const extra: LessonExtra = {
  tf: [
    {
      id: "b3-tf1",
      context:
        "Lớp 10A2 làm sổ theo dõi đọc sách của thư viện trường. Mỗi dòng ghi: tên bạn đọc (ví dụ \"Nông Thị Hoa\"), số trang đã đọc (ví dụ 152), điểm đánh giá cuốn sách (ví dụ 4.5 sao) và cột \"đã trả sách chưa\" chỉ đánh dấu Có hoặc Không. Bạn Hoa thắc mắc: \"Nếu nhập vào máy tính thì các cột này thuộc kiểu dữ liệu gì nhỉ?\"",
      statements: [
        {
          text: "Tên bạn đọc thuộc kiểu dữ liệu văn bản (xâu kí tự).",
          answer: true,
          explain: "Họ tên là dãy kí tự — kiểu văn bản (str).",
        },
        {
          text: "Số trang đã đọc (152) nên lưu kiểu số nguyên, còn điểm đánh giá (4.5) nên lưu kiểu số thực.",
          answer: true,
          explain: "152 không có phần thập phân → số nguyên; 4.5 có phần thập phân → số thực.",
        },
        {
          text: "Cột \"đã trả sách chưa\" với hai trạng thái Có/Không phù hợp với kiểu dữ liệu lôgic.",
          answer: true,
          explain: "Hai giá trị đối lập Có/Không tương ứng True/False của kiểu lôgic.",
        },
        {
          text: "Có thể lưu số trang 152 dưới dạng xâu \"152\" mà vẫn cộng trừ trực tiếp để tính tổng số trang bình thường.",
          answer: false,
          explain:
            "Xâu \"152\" là dãy kí tự — muốn tính toán phải chuyển sang kiểu số; cộng xâu chỉ là ghép nối.",
        },
      ],
    },
    {
      id: "b3-tf2",
      context:
        "Bạn Sơn mở một tệp văn bản cũ của anh trai soạn từ hơn chục năm trước, thấy toàn kí tự lạ: \"Tr­êng THPT\" thay vì \"Trường THPT\". Anh trai giải thích ngày xưa dùng bảng mã TCVN3 với phông chữ riêng, giờ máy dùng bảng mã khác nên hiển thị sai. Anh khuyên: \"Giờ cứ Unicode mà dùng, gõ tiếng Việt ở đâu cũng đọc được.\"",
      statements: [
        {
          text: "Hiện tượng kí tự lạ xảy ra do văn bản được mã hoá bằng bảng mã này nhưng hiển thị bằng bảng mã khác.",
          answer: true,
          explain: "Cùng dãy số nhưng tra ở hai bảng mã khác nhau sẽ ra kí tự khác nhau — gây lỗi phông.",
        },
        {
          text: "Bảng mã ASCII đủ chỗ để mã hoá tất cả chữ tiếng Việt có dấu.",
          answer: false,
          explain: "ASCII chỉ có 128-256 mã, không đủ cho các kí tự có dấu của tiếng Việt.",
        },
        {
          text: "Unicode khắc phục được lỗi phông vì gán mã thống nhất toàn cầu cho kí tự của hầu hết ngôn ngữ.",
          answer: true,
          explain: "Mỗi kí tự một mã duy nhất — mọi máy đều hiểu giống nhau.",
        },
        {
          text: "UTF-8 là một bảng mã hoàn toàn tách biệt, không liên quan gì đến Unicode.",
          answer: false,
          explain: "UTF-8 là CÁCH MÃ HOÁ các kí tự Unicode thành dãy byte (1-4 byte/kí tự).",
        },
      ],
    },
    {
      id: "b3-tf3",
      context:
        "Trong giờ thực hành, cô yêu cầu ước lượng dung lượng: bạn Dũng gõ một đoạn văn tiếng Việt khoảng 500 kí tự (kể cả dấu cách) lưu thành tệp thuần văn bản mã UTF-8. Bạn Dũng đoán tệp sẽ nặng đúng 500 byte vì \"mỗi kí tự 1 byte\". Bạn Hà lắc đầu: \"Chữ có dấu của mình đâu có được tính như chữ tiếng Anh!\"",
      statements: [
        {
          text: "Trong UTF-8, các kí tự Latinh không dấu (a-z, 0-9, dấu cách) chiếm 1 byte mỗi kí tự.",
          answer: true,
          explain: "UTF-8 tương thích ASCII: kí tự cơ bản chỉ tốn 1 byte.",
        },
        {
          text: "Các kí tự tiếng Việt có dấu như \"ộ\", \"ữ\" trong UTF-8 thường chiếm nhiều hơn 1 byte.",
          answer: true,
          explain: "Chữ có dấu nằm ngoài vùng ASCII, cần 2-3 byte trong UTF-8.",
        },
        {
          text: "Vì vậy tệp của Dũng sẽ nặng hơn 500 byte, và bạn Hà nói đúng.",
          answer: true,
          explain: "Có kí tự tốn 2-3 byte nên tổng vượt 500 byte.",
        },
        {
          text: "Nếu đổi toàn bộ đoạn văn thành CHỮ HOA thì dung lượng tệp sẽ giảm đi một nửa.",
          answer: false,
          explain: "Chữ hoa hay thường đều là kí tự được mã hoá tương đương — không thay đổi đáng kể dung lượng.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b3-es1",
      q: "Vì sao cần có bảng mã Unicode thay cho ASCII? Nêu lợi ích của việc cả thế giới thống nhất dùng Unicode khi trao đổi văn bản qua mạng.",
      answer:
        "- ASCII chỉ có 128 (mở rộng 256) mã — đủ cho tiếng Anh nhưng không đủ cho hàng trăm ngôn ngữ khác (tiếng Việt có dấu, chữ Hán, chữ Ả Rập...). Trước Unicode, mỗi nước tự đặt bảng mã riêng gây lỗi phông, văn bản nước này mở ở nước khác thành kí tự lạ.\n- Unicode gán mã duy nhất cho kí tự của hầu hết ngôn ngữ nên: văn bản hiển thị đúng trên mọi máy, mọi phần mềm; trao đổi email, web toàn cầu không lỗi phông; một phần mềm phục vụ được nhiều ngôn ngữ; tiếng Việt bình đẳng với mọi ngôn ngữ trên môi trường số.",
    },
    {
      id: "b3-es2",
      q: "Kể tên các kiểu dữ liệu cơ bản trong máy tính. Với bảng điểm cá nhân của em (họ tên, điểm trung bình, xếp loại, đạt danh hiệu học sinh giỏi hay không), hãy chỉ ra kiểu dữ liệu phù hợp cho từng cột và giải thích.",
      answer:
        "- Các kiểu cơ bản: số nguyên, số thực, văn bản (xâu kí tự), lôgic.\n- Áp dụng: Họ tên → văn bản (dãy kí tự); Điểm trung bình → số thực (có phần thập phân như 8.5); Xếp loại (\"Giỏi\", \"Khá\") → văn bản; Đạt danh hiệu HSG hay không → lôgic (True/False).\n- Giải thích: chọn đúng kiểu giúp máy lưu trữ hiệu quả và áp dụng đúng phép xử lí (điểm thì tính trung bình được, tên thì ghép nối, so sánh thứ tự từ điển...).",
    },
  ],
};

export default extra;
