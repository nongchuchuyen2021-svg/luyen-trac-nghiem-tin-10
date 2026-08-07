import type { LessonTheory } from "@/lib/types";

// Import từng bài đã soạn — thêm 1 dòng mỗi khi soạn xong 1 bài
import bai01 from "@/data/theory/bai-01";

export const THEORY_BANK: Record<string, LessonTheory> = {
  "bai-01": bai01,
};

export function getTheory(lessonId: string): LessonTheory | null {
  return THEORY_BANK[lessonId] ?? null;
}

export function hasTheory(lessonId: string): boolean {
  return lessonId in THEORY_BANK;
}
