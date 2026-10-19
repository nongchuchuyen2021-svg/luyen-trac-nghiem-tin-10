# Lưu đầy đủ chi tiết đề cương Tin 10 vào Sheets

Website đã kết nối lưu điểm khách quan qua webhook Tin 10 đang dùng. Nếu web báo “chi tiết vẫn ở trên máy”, webhook đó chưa xác nhận lưu chi tiết.

Để lưu cả câu trả lời, tự luận và tiêu chí tự đánh giá:

1. Mở bảng điểm Tin 10 → **Tiện ích mở rộng → Apps Script**.
2. Thay nội dung bằng toàn bộ `scripts/google-apps-script-review.js`, rồi lưu.
3. **Triển khai → Quản lý bản triển khai → Chỉnh sửa → Phiên bản mới → Triển khai**. Giữ nguyên URL webhook; không tạo URL mới và không cần đổi cấu hình Vercel.

Bản này giữ A:I cho điểm; E chỉ hiện tên đề cương. J hiện tóm tắt ngắn, ghi chú J giữ đầy đủ JSON. Nếu J đã có dữ liệu khác, hệ thống báo lỗi, không ghi đè. Các phần tổng hợp K:O và R:V vẫn dùng bình thường. Ghi vào `Trang tính1` thay vì phụ thuộc tab đang mở; các lượt lưu lại cùng mã/nội dung/học sinh được chống trùng.

Đưa tệp này lên GitHub không tự cập nhật Apps Script đang triển khai. Sau khi cập nhật, `doGet` trả `version: review-details-v2` và các lần lưu mới được web xác nhận cả chi tiết. Không chia sẻ khóa Google trong mã nguồn.
