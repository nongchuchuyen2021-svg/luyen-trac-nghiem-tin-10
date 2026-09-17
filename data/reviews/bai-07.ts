import type { LessonReview } from "@/lib/types";

const review: LessonReview = {
  summary:
    "Bài này giúp em biết trợ thủ số cá nhân (PDA) là gì, làm quen với các nút bấm, màn hình chính, ứng dụng và cách quản lí tệp trên điện thoại thông minh, máy tính bảng.",
  keyPoints: [
    "PDA (Trợ thủ số cá nhân) là thiết bị số cá nhân, nhỏ gọn, tích hợp nhiều chức năng và có khả năng kết nối mạng — gồm điện thoại thông minh, máy tính bảng, đồng hồ thông minh, máy đọc sách.",
    "Màn hình chính điện thoại gồm 4 vùng: thanh trạng thái, biểu tượng ứng dụng, thanh truy cập nhanh, thanh điều hướng (nút Quay lại và Tổng quan).",
    "Điện thoại có sẵn nhiều ứng dụng thiết yếu (gọi điện, nhắn tin, danh bạ, chụp ảnh, trình duyệt…) và có thể cài thêm ứng dụng khác từ chợ phần mềm (App Store/Google Play).",
    "Hệ thống tệp trên điện thoại có cấu trúc phân cấp giống máy tính: thư mục gốc → thư mục con → tệp.",
    "Chạm và giữ lâu vào một tệp/thư mục để hiện các nút thao tác: Di chuyển, Sao chép, Chia sẻ, Xoá.",
  ],
  commonMistakes: [
    {
      mistake: "Nhầm rằng bất kì thiết bị nào thông minh, kết nối mạng được đều là PDA.",
      fix: "Tên gọi PDA (Personal Digital Assistant) nhấn mạnh tính CÁ NHÂN — thiết bị nhỏ gọn, mang theo người (điện thoại, máy tính bảng, đồng hồ, máy đọc sách). Một chiếc Smart TV tuy thông minh, kết nối mạng nhưng đặt cố định trong nhà thì không được xem là PDA.",
    },
    {
      mistake: "Nghĩ rằng Zoom, Google Meet, OneDrive là ứng dụng có sẵn trên máy ngay từ đầu.",
      fix: "Đây đều là ứng dụng phải CÀI THÊM từ chợ phần mềm (App Store/Google Play), không có sẵn khi mua máy mới.",
    },
    {
      mistake: "Chạm nhẹ một lần vào tệp rồi mong đợi hiện các nút Di chuyển/Sao chép/Chia sẻ/Xoá.",
      fix: "Phải chạm và GIỮ LÂU một chút (long-press) thì các nút thao tác mới hiện ra — chạm nhẹ một lần chỉ để mở tệp.",
    },
  ],
  tips: [
    "Mẹo nhớ 4 vùng màn hình chính theo thứ tự từ trên xuống: Trạng thái → Biểu tượng app → Truy cập nhanh → Điều hướng.",
    "Mẹo phân biệt 'có sẵn' và 'cần cài thêm': tự hỏi ứng dụng đó có NGAY khi vừa mua máy mới hay phải vào chợ phần mềm tải về.",
  ],
  flashcards: [
    {
      front: "PDA là viết tắt của gì?",
      back: "Personal Digital Assistant — Trợ thủ số cá nhân.",
    },
    {
      front: "Kể tên 4 loại PDA phổ biến?",
      back: "Điện thoại thông minh, máy tính bảng, đồng hồ thông minh, máy đọc sách.",
    },
    {
      front: "4 vùng trên màn hình chính điện thoại là gì?",
      back: "Thanh trạng thái, biểu tượng ứng dụng, thanh truy cập nhanh, thanh điều hướng.",
    },
    {
      front: "2 nút quan trọng trên thanh điều hướng Android?",
      back: "Nút Quay lại (Back) và nút Tổng quan (Overview).",
    },
    {
      front: "Kể 2-3 ứng dụng cần cài thêm để học trực tuyến?",
      back: "Zoom, Microsoft Teams, Google Meet.",
    },
    {
      front: "Ảnh vừa chụp bằng camera thường được lưu ở đâu?",
      back: "Bộ nhớ trong → DCIM → Camera.",
    },
    {
      front: "Làm sao để hiện nút Di chuyển/Sao chép/Xoá của 1 tệp?",
      back: "Chạm và giữ lâu một chút vào tệp đó.",
    },
    {
      front: "Điện thoại thông minh khác điện thoại thường ở điểm gì?",
      back: "Có thể cài phần mềm ứng dụng, truy cập Internet, hiển thị dữ liệu đa phương tiện.",
    },
  ],
  checklist: [
    "Tôi phân biệt được PDA với các thiết bị số khác.",
    "Tôi nhận biết đúng 4 vùng trên màn hình chính điện thoại và chức năng của thanh điều hướng.",
    "Tôi phân biệt được ứng dụng có sẵn và ứng dụng cần cài thêm từ chợ phần mềm.",
    "Tôi thao tác được cơ bản với ứng dụng quản lí tệp trên điện thoại (mở, chọn, di chuyển, sao chép, xoá).",
  ],
  diagram: "man-hinh-dien-thoai-thong-minh",
};

export default review;
