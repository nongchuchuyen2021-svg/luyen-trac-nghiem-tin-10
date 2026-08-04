# Luyện trắc nghiệm Tin học 10 — THPT Na Rì

Web luyện trắc nghiệm Tin học 10 theo SGK **Kết nối tri thức với cuộc sống**
của **Trường THPT Na Rì, tỉnh Thái Nguyên**, dành cho học sinh tự ôn tập:
chọn bài → làm câu hỏi → chấm ngay từng câu kèm giải thích → xem tổng kết và
ôn lại câu sai. Xây bằng Next.js 14 + Tailwind, **không cần database, không
cần đăng nhập** — tiến độ lưu trong `localStorage` của trình duyệt học sinh.

Ngân hàng hiện có **đủ 34/34 bài** phủ cả 6 chủ đề của SGK, mỗi bài gồm **3
dạng câu hỏi**:

| Dạng | Số lượng mỗi bài | Tổng |
|---|---|---|
| Trắc nghiệm 4 phương án | 10-12 câu | ~400 câu |
| Đúng/Sai 4 mệnh đề (dạng D2 thi tốt nghiệp) | 3 câu (12 ý) | 102 câu — 408 ý |
| Tự luận có gợi ý đáp án | 2 câu | 68 câu |

## Chạy ở máy local

```bash
npm install
npm run dev
```

Mở http://localhost:3001.

## Triển khai lên Vercel (miễn phí)

1. Đẩy code lên GitHub repo.
2. Vào https://vercel.com → New Project → chọn repo → Deploy.
3. Xong. Không cần cấu hình biến môi trường gì cả (web tĩnh hoàn toàn).

## Tính năng

Vào một bài, học sinh chọn một trong ba phần luyện:

**🎯 Trắc nghiệm** — câu hỏi và thứ tự phương án **trộn ngẫu nhiên mỗi lượt**;
chấm ngay từng câu kèm giải thích; kết thúc hiện điểm %, danh sách câu sai để
ôn lại và nút làm lại với đề trộn mới.

**⚖️ Đúng/Sai** — mỗi câu là một tình huống thực tế (lời dẫn 3-5 dòng) kèm 4 ý
a/b/c/d, học sinh đánh giá đúng/sai từng ý. **Chấm điểm theo quy chế thi tốt
nghiệp THPT**: đúng 1 ý được 0,1đ · 2 ý 0,25đ · 3 ý 0,5đ · cả 4 ý 1đ. Sau khi
chấm hiện đáp án và giải thích cho từng ý.

**✍️ Tự luận** — có ô nháp để học sinh tự viết câu trả lời trước, sau đó bấm
xem gợi ý đáp án để tự đối chiếu (nội dung nháp không bị lưu lại).

Ngoài ra: tiến độ mỗi bài (điểm cao nhất, số lần làm) lưu trên máy học sinh,
đạt ≥80% nhận sao ⭐ trên trang chủ; hỗ trợ câu hỏi kèm đoạn code Python ở cả
ba dạng.

## Thêm / sửa câu hỏi

### 1. Trắc nghiệm 4 phương án — `data/questions/bai-XX.ts`

```ts
{
  id: "b1-01",                    // mã câu, duy nhất trong bài
  q: "Nội dung câu hỏi?",
  code: "print(5 + 3)",           // (tuỳ chọn) đoạn code hiển thị kèm
  options: ["Đáp án đúng", "Sai 1", "Sai 2", "Sai 3"],
  answer: 0,                      // chỉ số đáp án đúng trong options (0-3)
  explain: "Giải thích ngắn.",
},
```

Lưu ý: `answer` là vị trí trong mảng `options` như khai báo — khi luyện, web tự
trộn thứ tự phương án nên cứ đặt đáp án đúng ở đâu cũng được (các file hiện tại
đặt ở vị trí 0 cho dễ soát).

### 2. Đúng/Sai và Tự luận — `data/extra/bai-XX.ts`

```ts
const extra: LessonExtra = {
  tf: [
    {
      id: "b1-tf1",
      context: "Lời dẫn tình huống 3-5 dòng, có ngữ cảnh sinh động…",
      code: "…",                  // (tuỳ chọn) đoạn code kèm theo
      statements: [               // ĐÚNG 4 ý, mỗi ý độc lập
        { text: "Mệnh đề a…", answer: true,  explain: "Vì sao đúng." },
        { text: "Mệnh đề b…", answer: false, explain: "Vì sao sai." },
        // … đủ 4 ý a, b, c, d
      ],
    },
  ],
  essay: [
    { id: "b1-es1", q: "Đề bài tự luận…", answer: "Gợi ý đáp án, xuống dòng bằng \\n" },
  ],
};
```

Kinh nghiệm ra đề Đúng/Sai: nên có **2 ý đúng, 2 ý sai** cho cân đối; ít nhất
một ý đánh vào hiểu lầm phổ biến của học sinh; các ý phải **độc lập** (sai ý
này không kéo theo ý khác).

### 3. Thêm bài mới (ví dụ Bài 5)

1. Tạo `data/questions/bai-05.ts` (trắc nghiệm) và `data/extra/bai-05.ts`
   (đúng/sai + tự luận).
2. Đăng ký trong `lib/questions.ts` (`QUESTION_BANK`) và `lib/extras.ts`
   (`EXTRA_BANK`).
3. Trong `data/curriculum.ts`: đổi `available: false` → `true` cho bài đó.

## Cấu trúc thư mục

```
app/
  page.tsx                  Trang chủ
  luyen/[baiId]/page.tsx    Trang một bài (nạp cả 3 dạng câu hỏi)
components/
  HomeClient.tsx            Danh sách chủ đề/bài + tiến độ
  LessonClient.tsx          Menu chọn dạng luyện của một bài
  QuizClient.tsx            Dạng trắc nghiệm: trộn đề, chấm, tổng kết
  TrueFalseQuiz.tsx         Dạng đúng/sai: 4 ý, chấm theo quy chế thi
  EssayViewer.tsx           Dạng tự luận: ô nháp + hiện gợi ý đáp án
lib/
  types.ts                  Kiểu dữ liệu Question, TFQuestion, EssayQuestion…
  questions.ts              Đăng ký ngân hàng trắc nghiệm
  extras.ts                 Đăng ký ngân hàng đúng/sai + tự luận
  progress.ts               Lưu/đọc tiến độ từ localStorage
data/
  curriculum.ts             Cấu trúc chủ đề/bài theo SGK KNTT
  questions/bai-XX.ts       Trắc nghiệm từng bài (34 bài)
  extra/bai-XX.ts           Đúng/sai + tự luận từng bài (34 bài)
```

## Lưu ý khi phát triển

Không chạy `npm run build` trong lúc `npm run dev` đang chạy — hai lệnh dùng
chung thư mục `.next` nên sẽ gây lỗi 500 `Cannot find module`. Nếu gặp: dừng
server, xoá `.next`, chạy lại.

## Hướng phát triển tiếp

- Bổ sung thêm câu hỏi cho từng bài (hiện 10-12 câu trắc nghiệm, 3 câu đúng/sai,
  2 câu tự luận mỗi bài).
- Chế độ "thi thử" trộn câu từ nhiều bài, bấm giờ, cấu trúc như đề kiểm tra
  (phần I trắc nghiệm + phần II đúng/sai + phần III tự luận theo CV 7991).
- Bảng xếp hạng lớp (cần Supabase — tham khảo dự án bảng ghim cùng thư mục).
- Thêm dạng câu đúng/sai 4 ý theo cấu trúc đề thi tốt nghiệp THPT từ 2025.
