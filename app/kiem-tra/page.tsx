import type { Metadata } from "next";
import KiemTraClient from "@/components/KiemTraClient";

export const metadata: Metadata = {
  title: "Phòng Kiểm Tra Định Kỳ — Tin học 10 · THPT Na Rì",
  description:
    "Phòng kiểm tra trực tuyến định kỳ Tin học 10: 15 phút, 45 phút giữa kì, học kì. Bấm giờ thật, trộn đề ngẫu nhiên, chấm điểm tự động chuẩn GDPT 2018.",
};

export default function KiemTraPage() {
  return <KiemTraClient />;
}
