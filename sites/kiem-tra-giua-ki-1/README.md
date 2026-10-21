# Kiểm tra giữa học kì I — Tin học 10 THPT Na Rì

Website độc lập dành cho 10A1, 10A3 và 10A4. Trang chính chuyển tới `/giua-ki-1`; trang giáo viên là `/giua-ki-1/giao-vien`.

- Chỉ dùng đề cương 60 TNKQ, 12 đúng–sai, 7 tự luận.
- Mỗi đề 16 TNKQ, 3 đúng–sai, 2 tự luận; mặc định 45 phút, thang điểm 4–3–3.
- Đúng 1/2/3/4 ý được 0,1/0,25/0,5/1 điểm; tự luận thầy chấm tối đa 1,5 điểm/câu.
- Mỗi lớp có lịch, danh sách và mã phòng riêng. Học sinh chờ thầy bắt đầu mới nhận đề.
- Bài làm và trạng thái lưu trong Cloudflare D1, mỗi bài một bản ghi. Ghi theo phiên bản và CAS trong batch nguyên tử để tránh ghi đè giữa các máy chủ.
- Đề/đáp án và điểm chỉ cấp theo quyền: học sinh không được nhận đáp án hay điểm trong các ca thi.
- Mất mạng giữ nháp trên thiết bị; chỉ phần gửi tới máy chủ trước hết giờ được chấm. Có thể tiếp tục đúng đề khi tải lại hoặc được thầy mở phiên đổi máy.
- Giáo viên xem sĩ số, cho vào muộn, gia hạn, kết thúc sớm, chấm tự luận và xuất CSV.

## Chuẩn bị thi

Đăng nhập trang giáo viên bằng mật khẩu đã cấu hình riêng. Chọn từng lớp, đặt lịch UTC+7, mã phòng, thời lượng và dán danh sách `mã | họ tên`. Lưu để mở phòng chờ. Khi đủ học sinh, bấm Bắt đầu kiểm tra. Mã phòng chung không phải xác thực danh tính cá nhân; thầy đối chiếu danh sách trong giờ thi.

Không có dữ liệu học sinh thật hoặc lịch thi thật trong mã nguồn. Mật khẩu và khóa phiên lưu dưới dạng Sites runtime secrets (`MIDTERM_ADMIN_PASSWORD`, `MIDTERM_SESSION_SECRET`), không có trong repository. Không đổi khóa phiên trong giờ thi. Giữ bí mật mật khẩu giáo viên.

## Phát triển và kiểm thử

Đây là Vinext/Cloudflare Workers, tách khỏi dự án Next.js luyện tập. Cài theo quy trình Sites; schema D1 trong `db/schema.ts`, migration trong `drizzle/`. Không sửa migration đã áp dụng. Binding D1 là `DB` trong `.openai/hosting.json`.

`node --test scripts/cloud-exam.test.cjs` kiểm tra PBKDF2, bốc đề, thang điểm, phòng chờ, mở thi, lưu/nộp/chấm/xuất và CAS bằng SQLite tương ứng D1. `node node_modules/typescript/bin/tsc --noEmit` kiểm tra kiểu dữ liệu. Dựng và xuất bản bằng Sites helpers.

Bản mô phỏng Workers cục bộ có thể không chạy trên Windows thiếu runtime VC++; việc này không đổi nền tảng hay schema lưu trực tuyến. Cần kiểm tra bản xuất bản trước khi thi thật.
