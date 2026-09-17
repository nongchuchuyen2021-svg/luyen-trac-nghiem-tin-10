import type { SortGame } from "@/lib/types";

// Ngân hàng game kéo-thả gắn với từng bài — thêm 1 dòng mỗi khi soạn xong 1 bài
import bai02 from "@/data/games/bai-02";

export const GAME_BANK: Record<string, SortGame> = {
  "bai-02": bai02,
};

export function getSortGame(lessonId: string): SortGame | null {
  return GAME_BANK[lessonId] ?? null;
}
