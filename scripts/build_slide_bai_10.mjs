import fs from 'node:fs';
import path from 'node:path';

// Script đồng bộ file trình chiếu Bài 10: Thực hành khai thác tài nguyên trên Internet
const srcHtml = path.resolve('public', 'bai-10-trinh-chieu.html');
const destHtml = path.resolve('bai-10-trinh-chieu.html');

if (fs.existsSync(srcHtml)) {
  fs.copyFileSync(srcHtml, destHtml);
  console.log('✅ Đã đồng bộ thành công Slide Bài 10:');
  console.log('  -> ' + srcHtml);
  console.log('  -> ' + destHtml);
} else {
  console.error('❌ Không tìm thấy file nguồn: ' + srcHtml);
  process.exit(1);
}
