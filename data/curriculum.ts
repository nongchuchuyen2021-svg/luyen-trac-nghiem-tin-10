import type { Topic } from "@/lib/types";

// Cấu trúc SGK Tin học 10 — Kết nối tri thức với cuộc sống.
// available: true = đã có câu hỏi trong data/questions/, false = sẽ bổ sung sau.
// Muốn thêm câu hỏi cho một bài: tạo file data/questions/<id>.ts rồi
// đăng ký trong lib/questions.ts và đổi available thành true ở đây.

export const CURRICULUM: Topic[] = [
  {
    id: "chu-de-1",
    name: "Chủ đề 1. Máy tính và xã hội tri thức",
    emoji: "💻",
    lessons: [
      { id: "bai-01", title: "Bài 1. Thông tin và xử lí thông tin", available: true },
      {
        id: "bai-02",
        title: "Bài 2. Vai trò của thiết bị thông minh và tin học đối với xã hội",
        available: true,
      },
      { id: "bai-03", title: "Bài 3. Một số kiểu dữ liệu và dữ liệu văn bản", available: true },
      { id: "bai-04", title: "Bài 4. Hệ nhị phân và dữ liệu số nguyên", available: true },
      { id: "bai-05", title: "Bài 5. Dữ liệu lôgic", available: true },
      { id: "bai-06", title: "Bài 6. Dữ liệu âm thanh và hình ảnh", available: true },
      {
        id: "bai-07",
        title: "Bài 7. Thực hành sử dụng thiết bị số thông dụng",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-2",
    name: "Chủ đề 2. Mạng máy tính và Internet",
    emoji: "🌐",
    lessons: [
      {
        id: "bai-08",
        title: "Bài 8. Mạng máy tính trong cuộc sống hiện đại",
        available: true,
      },
      { id: "bai-09", title: "Bài 9. An toàn trên không gian mạng", available: true },
      {
        id: "bai-10",
        title: "Bài 10. Thực hành khai thác tài nguyên trên Internet",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-3",
    name: "Chủ đề 3. Đạo đức, pháp luật và văn hoá trong môi trường số",
    emoji: "⚖️",
    lessons: [
      {
        id: "bai-11",
        title: "Bài 11. Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền",
        available: true,
      },
    ],
  },
  {
    id: "chu-de-4",
    name: "Chủ đề 4. Ứng dụng tin học",
    emoji: "🎨",
    lessons: [
      { id: "bai-12", title: "Bài 12. Phần mềm thiết kế đồ hoạ", available: true },
      { id: "bai-13", title: "Bài 13. Bổ sung các đối tượng đồ hoạ", available: true },
      {
        id: "bai-14",
        title: "Bài 14. Làm việc với đối tượng đường và văn bản",
        available: true,
      },
      { id: "bai-15", title: "Bài 15. Hoàn thiện hình ảnh đồ hoạ", available: true },
    ],
  },
  {
    id: "chu-de-5",
    name: "Chủ đề 5. Giải quyết vấn đề với sự trợ giúp của máy tính",
    emoji: "🐍",
    lessons: [
      {
        id: "bai-16",
        title: "Bài 16. Ngôn ngữ lập trình bậc cao và Python",
        available: true,
      },
      { id: "bai-17", title: "Bài 17. Biến và lệnh gán", available: true },
      { id: "bai-18", title: "Bài 18. Các lệnh vào ra đơn giản", available: true },
      { id: "bai-19", title: "Bài 19. Câu lệnh điều kiện if", available: true },
      { id: "bai-20", title: "Bài 20. Câu lệnh lặp for", available: true },
      { id: "bai-21", title: "Bài 21. Câu lệnh lặp while", available: true },
      { id: "bai-22", title: "Bài 22. Kiểu dữ liệu danh sách", available: true },
      {
        id: "bai-23",
        title: "Bài 23. Một số lệnh làm việc với dữ liệu danh sách",
        available: true,
      },
      { id: "bai-24", title: "Bài 24. Xâu kí tự", available: true },
      {
        id: "bai-25",
        title: "Bài 25. Một số lệnh làm việc với xâu kí tự",
        available: true,
      },
      { id: "bai-26", title: "Bài 26. Hàm trong Python", available: true },
      { id: "bai-27", title: "Bài 27. Tham số của hàm", available: true },
      { id: "bai-28", title: "Bài 28. Phạm vi của biến", available: true },
      { id: "bai-29", title: "Bài 29. Nhận biết lỗi chương trình", available: true },
      {
        id: "bai-30",
        title: "Bài 30. Kiểm thử và gỡ lỗi chương trình",
        available: true,
      },
      {
        id: "bai-31",
        title: "Bài 31. Thực hành viết chương trình đơn giản",
        available: true,
      },
      { id: "bai-32", title: "Bài 32. Ôn tập lập trình Python", available: true },
    ],
  },
  {
    id: "chu-de-6",
    name: "Chủ đề 6. Hướng nghiệp với tin học",
    emoji: "🧭",
    lessons: [
      { id: "bai-33", title: "Bài 33. Nghề thiết kế đồ hoạ máy tính", available: true },
      { id: "bai-34", title: "Bài 34. Nghề phát triển phần mềm", available: true },
    ],
  },
];

export function findLesson(lessonId: string) {
  for (const topic of CURRICULUM) {
    const lesson = topic.lessons.find((l) => l.id === lessonId);
    if (lesson) return { topic, lesson };
  }
  return null;
}
