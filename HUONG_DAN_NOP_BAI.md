# Hướng dẫn cấu hình lưu kết quả vào Google Sheets

Hệ thống hỗ trợ **2 cách linh hoạt** để lưu kết quả bài làm của học sinh vào Google Sheets:
- **Cách 1: Dùng Google Apps Script Web App (Dễ nhất, chỉ mất 2 phút, không cần thẻ/Google Cloud)**
- **Cách 2: Dùng Google Cloud Service Account (Chuẩn doanh nghiệp, đồng bộ với dự án Tin 12)**

---

## CÁCH 1: DÙNG GOOGLE APPS SCRIPT WEB APP (KHUYÊN DÙNG — NHANH & TIỆN)

### Bước 1: Tạo Google Sheet và mở Apps Script
1. Vào https://sheets.google.com, tạo một bảng tính mới, đặt tên ví dụ: **"Kết quả Kiểm tra Tin 10 — THPT Na Rì"**.
2. Trên thanh menu, chọn **Tiện ích mở rộng (Extensions)** ➔ **Apps Script**.

### Bước 2: Dán mã script xử lý
1. Xóa hết mã có sẵn trong cửa sổ soạn thảo.
2. Mở file `scripts/google-apps-script.js` trong thư mục dự án, sao chép toàn bộ nội dung và dán vào.
3. Bấm biểu tượng **Lưu (Save)** (hình đĩa mềm).

### Bước 3: Triển khai Web App (Deploy)
1. Ở góc trên bên phải, bấm nút **Triển khai (Deploy)** ➔ chọn **Tùy chọn triển khai mới (New deployment)**.
2. Bấm vào biểu tượng bánh răng ⚙️ bên cạnh "Chọn loại", chọn **Ứng dụng web (Web app)**.
3. Cấu hình 3 mục:
   - **Mô tả (Description):** `Lưu kết quả Tin 10`
   - **Thực thi dưới dạng (Execute as):** `Tôi (Me - email của thầy cô)`
   - **Ai có quyền truy cập (Who has access):** `Bất kỳ ai (Anyone)` ➔ **BẮT BUỘC CHỌN MỤC NÀY** để học sinh có thể gửi bài qua mạng.
4. Bấm **Triển khai (Deploy)**. Nếu Google yêu cầu cấp quyền (Authorization), bấm *Xem lại quyền* ➔ Chọn tài khoản của thầy cô ➔ Bấm *Nâng cao (Advanced)* ➔ Chọn *Đi tới dự án (Không an toàn)* ➔ Bấm *Cho phép (Allow)*.
5. Sao chép **URL ứng dụng web (Web app URL)** (dạng `https://script.google.com/macros/s/.../exec`).

### Bước 4: Thêm biến môi trường vào Vercel
1. Vào trang quản lý dự án trên https://vercel.com ➔ **Settings** ➔ **Environment Variables**.
2. Thêm biến:
   - **Key:** `GOOGLE_SHEET_WEBAPP_URL`
   - **Value:** Dán URL đã sao chép ở Bước 3.
3. Vào tab **Deployments** trên Vercel, chọn bản deploy mới nhất ➔ bấm dấu 3 chấm ➔ chọn **Redeploy**.

---

## CÁCH 2: DÙNG GOOGLE SERVICE ACCOUNT (GIỐNG TIN 12)

Nếu thầy cô đã có Service Account từ dự án Tin 12, thầy cô có thể dùng lại ngay:

1. Mở file Google Sheet mới cho Tin 10, gõ 9 tiêu đề cột ở dòng 1:
   `Thời gian | Họ tên | Lớp | Mã bài | Tên bài | Dạng bài | Điểm | Số câu đúng | Tổng số câu`
2. Bấm nút **Chia sẻ (Share)** ở góc trên bên phải Google Sheet, dán email của Service Account (`client_email`) vào và cấp quyền **Người chỉnh sửa (Editor)**.
3. Lấy `GOOGLE_SHEET_ID` (chuỗi ký tự nằm giữa `/d/` và `/edit` trên thanh địa chỉ).
4. Cấu hình 3 biến trên Vercel (hoặc file `.env.local` khi chạy máy tính):
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY` (giữ nguyên cả `-----BEGIN PRIVATE KEY...` và các ký tự `\n`)
   - `GOOGLE_SHEET_ID`
5. Redeploy trên Vercel.

---

## CÁCH HỌC SINH LÀM BÀI VÀ NỘP ĐIỂM

1. Học sinh truy cập vào: `https://[ten-mien-vercel]/kiem-tra/thuong-xuyen-2` hoặc chọn banner trên Trang chủ.
2. Học sinh nhập **Họ và tên** (vd: *Hoàng Minh Châu*) và **Lớp** (vd: *10A1*). Hệ thống sẽ tự động ghi nhớ cho các lần kiểm tra sau.
3. Làm 15 câu trắc nghiệm (thời gian 20 phút).
4. Sau khi bấm **Nộp bài**, hệ thống tự động chấm điểm và gửi ngay một dòng kết quả vào Google Sheet của thầy cô!
