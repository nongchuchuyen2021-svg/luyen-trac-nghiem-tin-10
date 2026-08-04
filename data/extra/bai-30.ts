import type { LessonExtra } from "@/lib/types";

// Bài 30. Kiểm thử và gỡ lỗi chương trình
const extra: LessonExtra = {
  tf: [
    {
      id: "b30-tf1",
      context:
        "Nhóm bạn Lử viết chương trình xếp loại học lực từ điểm trung bình: từ 8,0 trở lên là Giỏi; từ 6,5 đến dưới 8,0 là Khá; từ 5,0 đến dưới 6,5 là Trung bình; còn lại Yếu. Trước khi nộp, cả nhóm ngồi liệt kê các bộ dữ liệu để thử: 9,0 rồi 8,0 rồi 7,9 rồi 6,5 rồi 5,0 rồi 4,9 và cả những giá trị vô lí như −2 hoặc 11.",
      statements: [
        {
          text: "Việc thử với các giá trị 8,0 và 7,9 nhằm kiểm tra chương trình xử lí đúng tại ranh giới giữa hai mức xếp loại.",
          answer: true,
          explain: "Lỗi hay nằm ở biên: nhầm >= với > khiến điểm 8,0 bị xếp nhầm xuống Khá.",
        },
        {
          text: "Thử với giá trị −2 và 11 giúp kiểm tra chương trình có xử lí dữ liệu không hợp lệ hay không.",
          answer: true,
          explain: "Dữ liệu ngoài phạm vi là trường hợp thường bị bỏ quên khi viết chương trình.",
        },
        {
          text: "Một bộ dữ liệu kiểm thử cần có cả dữ liệu vào lẫn kết quả mong đợi để đối chiếu.",
          answer: true,
          explain: "Không biết trước đáp án đúng thì không thể kết luận chương trình đúng hay sai.",
        },
        {
          text: "Nếu chương trình chạy đúng với một giá trị bất kì (ví dụ 7,0) thì có thể khẳng định chương trình hoàn toàn chính xác.",
          answer: false,
          explain:
            "Một trường hợp đúng không chứng minh được toàn bộ — phải thử nhiều bộ, đặc biệt là các giá trị biên.",
        },
      ],
    },
    {
      id: "b30-tf2",
      context:
        "Bạn Sếnh viết chương trình tính tổng các số từ 1 đến n. Nhập n = 5, Sếnh chờ kết quả 15 nhưng máy in ra 10. Sếnh chèn thêm một lệnh print vào trong vòng lặp để \"theo dõi\" xem biến chạy đến đâu, và lập tức phát hiện vòng lặp dừng sớm hơn dự kiến một bước.",
      code: "n = 5\ns = 0\nfor i in range(1, n):\n    s = s + i\nprint(s)",
      statements: [
        {
          text: "Chương trình in ra 10 vì range(1, n) chỉ chạy từ 1 đến 4, thiếu mất số 5.",
          answer: true,
          explain: "1+2+3+4 = 10; range dừng TRƯỚC giá trị cuối.",
        },
        {
          text: "Đây là lỗi \"lệch một đơn vị\" (off-by-one) rất phổ biến khi dùng vòng lặp.",
          answer: true,
          explain: "Nhầm lẫn ở biên của range là lỗi kinh điển của người mới học.",
        },
        {
          text: "Sửa thành range(1, n + 1) thì chương trình cho kết quả đúng là 15.",
          answer: true,
          explain: "range(1, 6) chạy 1..5 → tổng 15.",
        },
        {
          text: "Việc chèn lệnh print vào trong vòng lặp để xem giá trị biến là một kĩ thuật gỡ lỗi đơn giản và hiệu quả.",
          answer: true,
          explain: "In giá trị trung gian giúp thấy chương trình chạy sai ở đâu — nhớ xoá sau khi sửa xong.",
        },
      ],
    },
    {
      id: "b30-tf3",
      context:
        "Trong buổi thi lập trình cấp trường, ban giám khảo chấm bài bằng cách chạy chương trình của thí sinh với 10 bộ dữ liệu bí mật, gồm cả trường hợp đơn giản lẫn trường hợp đặc biệt (danh sách rỗng, số rất lớn, số âm). Bạn Vừ tuy code chạy đúng với ví dụ mẫu đề bài nhưng chỉ đạt 6/10 bộ, vì quên xử lí danh sách rỗng.",
      statements: [
        {
          text: "Cách chấm bằng nhiều bộ dữ liệu bí mật chính là hình thức kiểm thử chương trình.",
          answer: true,
          explain: "Chạy với nhiều bộ dữ liệu để đánh giá tính đúng đắn — đúng bản chất kiểm thử.",
        },
        {
          text: "Trường hợp danh sách rỗng, số rất lớn, số âm được gọi là các trường hợp đặc biệt/biên cần kiểm thử.",
          answer: true,
          explain: "Chương trình thường 'vỡ trận' ở các trường hợp đặc biệt này.",
        },
        {
          text: "Chạy đúng với ví dụ mẫu trong đề là đủ để chắc chắn chương trình không còn lỗi.",
          answer: false,
          explain: "Chính bạn Vừ là minh chứng ngược lại — đúng ví dụ mẫu mà vẫn sai 4 bộ dữ liệu khác.",
        },
        {
          text: "Sau khi sửa lỗi, nên chạy lại TOÀN BỘ các bộ kiểm thử chứ không chỉ bộ vừa sai.",
          answer: true,
          explain: "Sửa chỗ này có thể làm hỏng chỗ khác — kiểm thử lại toàn bộ là nguyên tắc bắt buộc.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "b30-es1",
      q: "Kiểm thử chương trình là gì? Vì sao phải kiểm thử với nhiều bộ dữ liệu, đặc biệt là dữ liệu biên và dữ liệu không hợp lệ? Nêu các bộ dữ liệu em sẽ dùng để kiểm thử chương trình giải phương trình bậc nhất ax + b = 0.",
      answer:
        "- Kiểm thử: chạy chương trình với các bộ dữ liệu đã biết trước kết quả đúng, đối chiếu kết quả thực tế với kết quả mong đợi để phát hiện lỗi.\n- Phải thử nhiều bộ vì một trường hợp đúng không chứng minh chương trình đúng; lỗi thường ẩn ở các giá trị biên (ranh giới các khoảng) và dữ liệu bất thường (0, âm, rỗng, rất lớn, sai kiểu).\n- Bộ dữ liệu cho ax + b = 0: (1) a = 2, b = −6 → x = 3 (trường hợp thường); (2) a = 0, b = 5 → vô nghiệm; (3) a = 0, b = 0 → vô số nghiệm; (4) a = −3, b = 9 → x = 3 (a âm); (5) a = 0.5, b = 1 → x = −2 (số thực). Hai trường hợp a = 0 là biên quan trọng nhất — chương trình quên xét sẽ gây lỗi chia cho 0.",
    },
    {
      id: "b30-es2",
      q: "Trình bày các cách gỡ lỗi (debug) một chương trình Python. Mô tả quy trình em sẽ làm khi chương trình chạy được nhưng cho kết quả sai.",
      answer:
        "- Các cách gỡ lỗi: (1) Đọc kĩ thông báo lỗi (traceback) — biết loại lỗi và dòng gây lỗi; (2) Chèn lệnh print in giá trị các biến ở những vị trí nghi ngờ để theo dõi; (3) Chạy thử từng phần nhỏ của chương trình; (4) Dùng công cụ debugger của môi trường lập trình: đặt điểm dừng (breakpoint), chạy từng dòng, quan sát biến; (5) Tính tay trên giấy vài vòng lặp để so với máy.\n- Quy trình khi kết quả sai: xác định rõ kết quả đúng phải là gì → khoanh vùng đoạn code nghi ngờ → in giá trị biến trung gian để tìm chỗ giá trị bắt đầu lệch → xác định nguyên nhân (sai công thức, sai biên vòng lặp, sai kiểu dữ liệu...) → sửa → CHẠY LẠI TOÀN BỘ các bộ kiểm thử để chắc chắn không phát sinh lỗi mới.",
    },
  ],
};

export default extra;
