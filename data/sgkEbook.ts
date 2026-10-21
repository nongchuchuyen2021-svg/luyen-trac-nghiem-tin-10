// Bản đồ sách điện tử (SGK) theo từng bài — file HTML tĩnh đặt trong public/sgk/.
// Muốn thêm SGK cho bài mới: bỏ file .html vào public/sgk/ rồi đăng ký thêm dòng dưới đây.
export const SGK_EBOOK: Record<string, string> = {
  "bai-01": "/sgk/bai-01.html",
  "bai-02": "/sgk/bai-02.html",
  "bai-07": "/sgk/bai-07.html",
  "bai-08": "/sgk/bai-08.html",
  "bai-09": "/sgk/bai-09.html",
  "bai-10": "/sgk/bai-10.html",
  "bai-11": "/sgk/bai-11.html",
  "bai-12": "/sgk/bai-12.html",
  "bai-13": "/sgk/bai-13.html",
};

export function getSgkUrl(lessonId: string): string | null {
  return SGK_EBOOK[lessonId] ?? null;
}
