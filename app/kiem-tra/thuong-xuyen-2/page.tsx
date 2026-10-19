import type { Metadata } from "next";
import KiemTraTx2Client from "@/components/KiemTraTx2Client";

export const metadata: Metadata = {
  title: "Đề Kiểm Tra Thường Xuyên 2 (Bài 1, 2, 7, 8, 9) — Tin học 10",
  description:
    "Đề kiểm tra thường xuyên số 2 Tin học 10: 15 câu trắc nghiệm (Bài 1, 2, 7, 8, 9), mỗi bài 1 câu nhận biết, 1 câu thông hiểu, 1 câu vận dụng; thời gian 16 phút, chấm điểm tự động và lưu kết quả vào Google Sheets.",
};

export default function KiemTraTx2Page() {
  return <KiemTraTx2Client />;
}
