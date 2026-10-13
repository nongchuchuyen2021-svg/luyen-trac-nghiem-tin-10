import fs from 'node:fs';
import path from 'node:path';

// Script đồng bộ file trình chiếu Bài 12: Phần mềm thiết kế đồ hoạ
const srcHtml = path.resolve('public', 'bai-12-trinh-chieu.html');
const destHtml = path.resolve('bai-12-trinh-chieu.html');

if (fs.existsSync(srcHtml)) {
  fs.copyFileSync(srcHtml, destHtml);
  console.log('✅ Đã đồng bộ thành công Slide Bài 12:');
  console.log('  -> ' + srcHtml);
  console.log('  -> ' + destHtml);
} else {
  console.error('❌ Không tìm thấy file nguồn: ' + srcHtml);
  process.exit(1);
}
