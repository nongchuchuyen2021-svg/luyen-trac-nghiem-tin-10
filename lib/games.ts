import type { LessonGame } from "@/lib/types";

// Ngân hàng game gắn với từng bài — thêm 1 dòng mỗi khi soạn xong 1 bài
import bai02 from "@/data/games/bai-02";
import bai07 from "@/data/games/bai-07";

export const GAME_BANK: Record<string, LessonGame[]> = {
  "bai-02": bai02,
  "bai-07": bai07,
};

export function getLessonGames(lessonId: string): LessonGame[] {
  return GAME_BANK[lessonId] ?? [];
}
