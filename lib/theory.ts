import type { LessonTheory } from "@/lib/types";

// Import từng bài đã soạn — thêm 1 dòng mỗi khi soạn xong 1 bài
import bai01 from "@/data/theory/bai-01";
import bai02 from "@/data/theory/bai-02";
import bai07 from "@/data/theory/bai-07";

export const THEORY_BANK: Record<string, LessonTheory> = {
  "bai-01": bai01,
  "bai-02": bai02,
  "bai-07": bai07,
};

export function getTheory(lessonId: string): LessonTheory | null {
  return THEORY_BANK[lessonId] ?? null;
}

export function hasTheory(lessonId: string): boolean {
  return lessonId in THEORY_BANK;
}
