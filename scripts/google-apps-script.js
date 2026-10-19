/**
 * ============================================================================
 * MÃ GOOGLE APPS SCRIPT LƯU KẾT QUẢ BÀI KIỂM TRA TIN HỌC 10 VÀO GOOGLE SHEET
 * ============================================================================
 * Hướng dẫn sử dụng:
 * 1. Mở file Google Sheet của thầy cô.
 * 2. Vào Tiện ích mở rộng (Extensions) -> Apps Script.
 * 3. Xoá hết mã cũ và dán toàn bộ đoạn mã này vào.
 * 4. Bấm "Triển khai" (Deploy) -> "Tùy chọn triển khai mới" (New deployment).
 * 5. Chọn loại: "Ứng dụng web" (Web app).
 * 6. Cấu hình:
 *    - Mô tả: Lưu kết quả Tin 10
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me)
 *    - Ai có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone) -> RẤT QUAN TRỌNG!
 * 7. Bấm "Triển khai" (Deploy), cấp quyền và copy "URL ứng dụng web" (Web App URL).
 * 8. Dán URL đó vào biến môi trường `GOOGLE_SHEET_WEBAPP_URL` trên Vercel.
 */

function setupSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = [
    "Thời gian",
    "Họ và tên",
    "Lớp",
    "Mã bài",
    "Tên bài",
    "Dạng bài",
    "Điểm số",
    "Số câu đúng",
    "Tổng số câu"
  ];
  
  // Nếu dòng 1 chưa có tiêu đề, tự động tạo tiêu đề đẹp
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    var range = sheet.getRange(1, 1, 1, headers.length);
    range.setBackground("#4F46E5");
    range.setFontColor("#FFFFFF");
    range.setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    setupSheet();
    
    var data = JSON.parse(e.postData.contents);
    
    var thoiGian = data.thoiGian || Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");
    var hoTen = data.hoTen || "";
    var lop = data.lop || "";
    var baiId = data.baiId || "";
    var tenBai = data.tenBai || "";
    var dang = data.dang || "Thường xuyên";
    var diem = data.diem !== undefined ? data.diem : 0;
    var soCauDung = data.soCauDung !== undefined ? data.soCauDung : 0;
    var tongSoCau = data.tongSoCau !== undefined ? data.tongSoCau : 15;
    
    // Ghi dòng mới vào Google Sheet
    sheet.appendRow([
      thoiGian,
      hoTen,
      lop,
      baiId,
      tenBai,
      dang,
      diem,
      soCauDung,
      tongSoCau
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ ok: true, message: "Đã lưu kết quả thành công!" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "active", message: "Google Apps Script Webhook Tin học 10 đang hoạt động!" }))
    .setMimeType(ContentService.MimeType.JSON);
}
