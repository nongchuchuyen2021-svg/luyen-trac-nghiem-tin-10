# Phòng kiểm tra giữa học kì I — Tin học 10 (Bản Cloudflare D1 duy nhất)

> **Website chính thức:** https://tin10-nari-giua-ki-1.my-team-3380.chatgpt.site
> - Học sinh vào phòng: `/giua-ki-1`
> - Bàn điều khiển giáo viên: `/giua-ki-1/giao-vien`
> - Mã nguồn duy nhất: `sites/kiem-tra-giua-ki-1/`

---

## 📌 Kiến trúc hệ thống

Toàn bộ hệ thống kiểm tra giữa kì đã được **gộp về 1 bản duy nhất** chạy trên Cloudflare (Vinext + Cloudflare Workers + D1 Database):
1. **Lưu trữ bền vững:** Toàn bộ lịch thi, phòng chờ, danh sách học sinh, bài làm và điểm số được lưu trên Cloudflare D1 (SQL). Sử dụng cơ chế ghi nguyên tử và so khớp phiên bản (CAS - Compare And Swap) chống ghi đè đồng thời.
2. **Bảo mật:** Mật khẩu giáo viên băm bằng thuật toán `PBKDF2` (Web Crypto API). Hỗ trợ đổi mật khẩu trực tiếp trên giao diện quản lí; khi đổi mật khẩu sẽ tự động vô hiệu hóa các phiên quản trị cũ.
3. **Đăng nhập học sinh:** Học sinh vào phòng bằng **Họ và tên** (hỗ trợ so khớp không phân biệt hoa thường, dấu tiếng Việt) cùng **Mã vào phòng** do thầy cấp.
4. **Không phụ thuộc ổ đĩa máy chủ:** Đã loại bỏ hoàn toàn việc lưu trữ file JSON cục bộ hay đĩa tạm, hoạt động hoàn hảo trên môi trường Cloud/Serverless.

---

## 🚀 Lệnh điều khiển từ dự án chính

Tại thư mục gốc của dự án (`luyen-trac-nghiem-tin-10`), thầy có thể dùng các lệnh sau:

- **Chạy kiểm thử phòng thi:**
  ```bash
  npm run test:midterm
  ```
  *(Chạy test suite kiểm tra toàn diện PBKDF2, bốc đề, thang điểm, phòng chờ, CAS, đổi mật khẩu và xuất CSV)*

- **Chạy môi trường phát triển cục bộ:**
  ```bash
  npm run dev:midterm
  ```

- **Hoặc thao tác trực tiếp bên trong thư mục:**
  ```bash
  cd sites/kiem-tra-giua-ki-1
  npm run dev
  ```

---

## 👨‍🏫 Hướng dẫn tổ chức kiểm tra cho Thầy

### 1. Đăng nhập và Chuẩn bị phòng thi
1. Truy cập `/giua-ki-1/giao-vien`.
2. Đăng nhập bằng mật khẩu quản lí giáo viên (cấu hình trong bí mật môi trường `MIDTERM_ADMIN_PASSWORD`).
3. Chọn lớp cần tổ chức: **10A1**, **10A3**, hoặc **10A4**.
4. Vào thẻ **1. Chuẩn bị phòng**:
   - Đặt thời gian bắt đầu cho vào phòng và đóng khung giờ (giờ Việt Nam UTC+7).
   - Đặt thời lượng làm bài (mặc định 45 phút).
   - Nhập mã vào phòng (hoặc bấm *Tạo mã ngẫu nhiên*).
   - Không cần nhập trước danh sách. Học sinh tự nhập họ tên khi vào bằng mã phòng; tên tự xuất hiện trong bảng theo dõi.
   - Bấm **Lưu và mở phòng chờ**.

### 2. Quản lí ca thi (Theo dõi phòng)
- Học sinh truy cập `/giua-ki-1`, chọn lớp, nhập đúng họ tên và mã phòng để vào phòng chờ.
- Thầy theo dõi danh sách học sinh đã vào phòng, kiểm tra sĩ số.
- Khi học sinh đã vào đủ, thầy bấm **Bắt đầu kiểm tra** và xác nhận. Toàn bộ học sinh sẽ đồng loạt nhận đề và tính giờ làm bài.
- **Hỗ trợ trong giờ thi:**
  - *Cho phép vào muộn:* Nếu có học sinh đến trễ sau khi đã bấm bắt đầu.
  - *Mở lại phiên:* Nếu học sinh bị sự cố máy tính, mất kết nối cần đổi máy khác.
  - *Gia hạn thời gian:* Gia hạn thêm từng đợt 5 phút khi có sự cố chung.
  - *Kết thúc sớm:* Chủ động thu bài toàn bộ lớp.

### Xóa dữ liệu cũ và đặt lại ca kiểm tra
- Trong thẻ **1. Chuẩn bị phòng**, bấm **Xóa dữ liệu cũ & Đặt lại phòng**. Dùng được khi phòng đang chuẩn bị, phòng chờ hoặc đã kết thúc; nếu đang kiểm tra, cần kết thúc ca trước.
- Hộp xác nhận cho phép tải bảng điểm CSV trước khi xóa. Bấm **Xóa bài cũ & Đặt lại phòng** để xóa bài làm và điểm cũ của riêng lớp đang chọn. Các lớp khác được giữ nguyên.
- Phòng trở về **Chưa đặt lịch**, xóa lịch, mã phòng và danh sách ca cũ. Sửa thông tin rồi bấm **Lưu và mở phòng chờ** để chuẩn bị ca mới.

### 3. Chấm bài và Xuất kết quả
- **Tự động chấm khách quan:** Ngay khi học sinh bấm nộp bài (hoặc khi hết giờ hệ thống tự chốt), phần trắc nghiệm nhiều lựa chọn (TNKQ) và trắc nghiệm đúng–sai được máy chủ tự chấm điểm ngay lập tức.
- **Chấm tự luận:** Thầy vào thẻ **3. Chấm bài & điểm**, bấm **Chấm tự luận** để đọc bài làm của 2 câu tự luận, nhập điểm (tối đa 1,5 điểm/câu) và ghi nhận xét.
- **Xuất bảng điểm:** Bấm **Tải bảng điểm CSV ↓** để tải file Excel/CSV đầy đủ: họ tên, lớp, thời điểm nộp, điểm TNKQ /4, điểm Đúng–sai /3, điểm Khách quan /7, điểm từng câu tự luận /1.5, tổng điểm /10 và nội dung bài làm tự luận.

---

## 📝 Quy chuẩn đề thi & thang điểm

- **Nguồn đề:** Bốc ngẫu nhiên từ ngân hàng câu hỏi đề cương ôn tập (60 TNKQ + 12 đúng–sai + 7 tự luận).
- **Cấu trúc mỗi đề thi:**
  - **16 câu TNKQ** (4,0 điểm): 6 nhận biết, 5 thông hiểu, 3 vận dụng, 2 vận dụng cao. Đảo ngẫu nhiên thứ tự phương án.
  - **3 câu Đúng–sai** (3,0 điểm): Mỗi câu có 4 ý; thang điểm chuẩn Bộ GD&ĐT: đúng 1 ý = 0,1 đ; đúng 2 ý = 0,25 đ; đúng 3 ý = 0,5 đ; đúng cả 4 ý = 1,0 đ.
  - **2 câu Tự luận** (3,0 điểm): 1 câu nhận biết/thông hiểu và 1 câu vận dụng/vận dụng cao. Mỗi câu tối đa 1,5 điểm do giáo viên chấm.
- **Bảo mật đề thi:** Học sinh không nhận đáp án, lời giải hay tiêu chí chấm trong suốt ca thi.
