import type { Question, TFQuestion } from "./types";
import { CURRICULUM } from "@/data/curriculum";
import { QUESTION_BANK } from "./questions";
import { EXTRA_BANK } from "./extras";

// Module Kiểm tra Định kỳ Tin học 10 chuẩn GDPT 2018
// Hỗ trợ: Kiểm tra 15 phút (Đánh giá thường xuyên) & Kiểm tra 45 phút (Giữa kì / Học kì)

export type KieuKiemTra = "15-phut" | "45-phut" | "hoc-ki";

export interface CauHinhDe {
  loai: KieuKiemTra;
  tenLoai: string;
  thoiGianGiay: number;
  soCauD1: number;
  soCauD2: number;
  diemMoiCauD1: number;
  diemToiDaD1: number;
  diemToiDaD2: number;
  diemToiDa: number;
}

export const CAU_HINH_DE: Record<KieuKiemTra, CauHinhDe> = {
  "15-phut": {
    loai: "15-phut",
    tenLoai: "Kiểm tra 15 phút (Thường xuyên)",
    thoiGianGiay: 15 * 60,
    soCauD1: 12,
    soCauD2: 1,
    diemMoiCauD1: 0.5, // 12 × 0.5 = 6.0 điểm
    diemToiDaD1: 6.0,
    diemToiDaD2: 4.0,  // 1 câu D2 = 4.0 điểm (1 ý = 0.4đ, 2 ý = 1.0đ, 3 ý = 2.0đ, 4 ý = 4.0đ)
    diemToiDa: 10.0,
  },
  "45-phut": {
    loai: "45-phut",
    tenLoai: "Kiểm tra 45 phút (Giữa học kì)",
    thoiGianGiay: 45 * 60,
    soCauD1: 24,
    soCauD2: 4,
    diemMoiCauD1: 0.25, // 24 × 0.25 = 6.0 điểm
    diemToiDaD1: 6.0,
    diemToiDaD2: 4.0,  // 4 × 1.0 = 4.0 điểm
    diemToiDa: 10.0,
  },
  "hoc-ki": {
    loai: "hoc-ki",
    tenLoai: "Kiểm tra Học kì (Tổng hợp)",
    thoiGianGiay: 45 * 60,
    soCauD1: 24,
    soCauD2: 4,
    diemMoiCauD1: 0.25,
    diemToiDaD1: 6.0,
    diemToiDaD2: 4.0,
    diemToiDa: 10.0,
  },
};

export const DIEM_D2_CHUAN = [0, 0.1, 0.25, 0.5, 1.0] as const; // Áp dụng cho 45 phút

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export interface PhamViKiemTra {
  id: string;
  name: string;
  lessonIds: string[];
}

export const PHAM_VI_ON_TAP: PhamViKiemTra[] = [
  {
    id: "tx-2",
    name: "Kiểm tra Thường xuyên 2 (Bài 1, 2, 7, 8, 9)",
    lessonIds: ["bai-01", "bai-02", "bai-07", "bai-08", "bai-09"],
  },
  {
    id: "all",
    name: "Toàn bộ chương trình (34 bài)",
    lessonIds: CURRICULUM.flatMap((t) => t.lessons).filter((l) => l.available).map((l) => l.id),
  },
  {
    id: "chu-de-1",
    name: "Chủ đề 1: Máy tính & Xã hội tri thức (Bài 1 - 7)",
    lessonIds: ["bai-01", "bai-02", "bai-03", "bai-04", "bai-05", "bai-06", "bai-07"],
  },
  {
    id: "chu-de-2-3",
    name: "Chủ đề 2 & 3: Mạng, An toàn mạng & Đạo đức số (Bài 8 - 11)",
    lessonIds: ["bai-08", "bai-09", "bai-10", "bai-11"],
  },
  {
    id: "chu-de-4",
    name: "Chủ đề 4: Thiết kế đồ hoạ Inkscape (Bài 12 - 15)",
    lessonIds: ["bai-12", "bai-13", "bai-14", "bai-15"],
  },
  {
    id: "chu-de-5",
    name: "Chủ đề 5: Lập trình Python (Bài 16 - 34)",
    lessonIds: Array.from({ length: 19 }, (_, i) => `bai-${i + 16}`),
  },
];

export interface DeKiemTra {
  loai: KieuKiemTra;
  phamVi: PhamViKiemTra;
  d1: Question[];
  d2: TFQuestion[];
}

export function taoDeKiemTra(loai: KieuKiemTra = "45-phut", phamViId: string = "all"): DeKiemTra {
  const config = CAU_HINH_DE[loai];
  const phamVi = PHAM_VI_ON_TAP.find((p) => p.id === phamViId) ?? PHAM_VI_ON_TAP[0];
  const lessonIds = phamVi.lessonIds;

  // Lấy toàn bộ câu hỏi trắc nghiệm D1 trong phạm vi
  const allD1: Question[] = [];
  for (const lid of lessonIds) {
    const list = QUESTION_BANK[lid] ?? [];
    allD1.push(...list);
  }

  // Lấy toàn bộ câu hỏi Đúng/Sai D2 trong phạm vi
  const allD2: TFQuestion[] = [];
  for (const lid of lessonIds) {
    const extra = EXTRA_BANK[lid];
    if (extra?.tf) {
      allD2.push(...extra.tf);
    }
  }

  // Trộn và bốc đúng số lượng
  const shuffledD1 = shuffle(allD1);
  const shuffledD2 = shuffle(allD2);

  const selectedD1 = shuffledD1.slice(0, Math.min(config.soCauD1, shuffledD1.length));
  const selectedD2 = shuffledD2.slice(0, Math.min(config.soCauD2, shuffledD2.length));

  return {
    loai,
    phamVi,
    d1: selectedD1,
    d2: selectedD2,
  };
}
