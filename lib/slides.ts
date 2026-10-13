// Quản lý đường dẫn slide bài giảng điện tử tương tác cho các bài học Tin học 10

const SLIDE_MAP: Record<string, string> = {
  "bai-01": "/slides/bai-01.html",
  "bai-09": "/bai-09-trinh-chieu.html",
  "bai-10": "/bai-10-trinh-chieu.html",
  "bai-11": "/bai-11-trinh-chieu.html",
};

export function getSlideUrl(lessonId: string): string | null {
  return SLIDE_MAP[lessonId] ?? null;
}
