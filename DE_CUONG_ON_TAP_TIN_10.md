# Đề cương tự ôn Tin học 10 — bài 1, 2, 7, 8, 9, 10, 11

Đường dẫn: `/on-tap/bai-1-2-7-8-9-10-11`, có thẻ mở trên trang chủ. Đây là trang tự luyện, không giới hạn thời gian và không đổi đề khi chuyển tab.

## Nguồn và ma trận

Tuyển từ 80 TNKQ, 21 đúng–sai và 14 tự luận trong ngân hàng của đúng bảy bài. Không sửa ngân hàng gốc. Mỗi câu giữ `sourceId`, bài và mức độ trong `data/review-10.ts`. Các câu mở rộng tình huống đều ghi chú biên soạn lại trên web.

| Dạng | Nhận biết | Thông hiểu | Vận dụng | Vận dụng cao | Tổng |
|---|---:|---:|---:|---:|---:|
| TNKQ | 24 | 18 | 12 | 6 | 60 |
| Đúng–sai (4 ý/câu) | 5 | 4 | 2 | 1 | 12 |
| Tự luận | 3 | 2 | 1 | 1 | 7 |
| Tổng câu | 32 | 24 | 15 | 8 | 79 |

Tỷ lệ xấp xỉ 40–30–20–10% theo mẫu Tin 12, làm tròn để có 79 câu. Mỗi bài có đúng một câu tự luận; TNKQ theo bài lần lượt 9,9,8,9,9,8,8; đúng–sai 2,2,2,2,2,1,1.

## Cách tự luyện và chấm

Học sinh xác nhận họ tên/lớp trước khi làm. Lọc theo bài, dạng và mức độ; chọn từng câu hoặc chuyển trước/sau. Trộn phương án bằng bộ đảo an toàn đang dùng cho TX2; giữ thứ tự nếu nội dung phụ thuộc vị trí. Lưu lựa chọn theo chỉ số gốc nên việc tải lại không làm sai đáp án.

TNKQ có đáp án/giải thích sau khi kiểm tra; đúng–sai đánh giá độc lập bốn ý. Điểm khách quan toàn đề = (số TNKQ đúng + số ý đúng–sai đúng) /108 ×10. Các câu chưa kiểm tra tính 0, không thể nhận 10 điểm chỉ nhờ làm một câu. Đây là cách chấm đề cương, không phải công thức bài thi chính thức.

Tự luận nhập tối đa 2000 ký tự; sau ít nhất 20 ký tự được xem gợi ý và tự đối chiếu bốn tiêu chí. Điểm tự đánh giá tách riêng, không chấm tự động nội dung và không cộng vào điểm khách quan. Nhiều cách diễn đạt đúng có thể được chấp nhận.

Tiến độ lưu trên trình duyệt, tách theo tên/lớp/phiên bản Tin 10. Đổi người dùng phải mở đúng tên. Đây không phải tài khoản xác thực. Lưu Google Sheets bằng nút hoặc sau 20 giây ngừng thao tác khi đã hoàn thành câu hỏi. Khi lỗi mạng, tiến độ vẫn trên máy và có thể thử lại.

## Google Sheets

Dùng bảng Tin 10 và kết nối hiện có, không tạo bảng tính mới. Mã bài là `on-tap-7-bai`; cột E chỉ chứa “Ôn tập bài 1, 2, 7–11 — Tin học 10”, không ghép JSON vào tên bài.

Trong `Trang tính1`, K:O tổng hợp theo họ tên/lớp với điểm khách quan tốt nhất và số bản ghi lưu; R:V tổng hợp số học sinh và điểm theo lớp. Số bản ghi là số lần lưu tiến độ, không phải số lượt thi.

Webhook cũ lưu 9 cột A:I, chỉ xác nhận điểm khách quan. Web báo rõ chi tiết từng câu/tự luận vẫn trên máy nếu chưa được webhook xác nhận. Để lưu đầy đủ chi tiết, cập nhật Apps Script theo `HUONG_DAN_SHEETS_DE_CUONG_10.md`. Bản v2 lưu tóm tắt trong J và toàn bộ chi tiết ở ghi chú ô J; không sửa cột điểm hay tổng hợp đang có.

## Kiểm chứng nội dung tham khảo

- Tìm kiếm cụm từ, site:, dấu trừ và filetype:: https://support.google.com/websearch/answer/2466433
- Điều kiện giấy phép, ghi công và các quyền khác cần xét: https://creativecommons.org/faq/
- Bản sao ngoại tuyến và kiểm tra khả năng phục hồi khi có ransomware: https://www.cisa.gov/stopransomware/ransomware-guide

Các câu hỏi chỉ vận dụng kiến thức phổ thông; không nêu mức phạt hay kết luận pháp lí cho trường hợp cụ thể.

## Kiểm thử

`node --test scripts/review.test.cjs scripts/review-apps-script.test.cjs` kiểm tra nguồn, số lượng, ma trận, đảo phương án, validation, chấm trên máy chủ, tên bài, chi tiết và lỗi/gửi lại. `npm run test:tx2` kiểm tra hồi quy bài kiểm tra đang dùng. `npm run build` dựng toàn bộ web.
