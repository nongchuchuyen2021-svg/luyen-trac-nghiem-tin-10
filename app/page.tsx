import HomeClient from "@/components/HomeClient";
import { CURRICULUM } from "@/data/curriculum";
import { getQuestions } from "@/lib/questions";
import { getTF, getEssay } from "@/lib/extras";
import { getTheory } from "@/lib/theory";
import { getLessonGames } from "@/lib/games";
import { getSlideUrl } from "@/lib/slides";
import type { LessonCounts } from "@/lib/types";

function computeGameBadge(games: ReturnType<typeof getLessonGames>): string {
  if (games.length === 0) return "";
  const hasNetwork = games.some((g) => g.kind === "network");
  const hasArena = games.some((g) => g.kind === "arena");
  const hasSearch = games.some((g) => g.kind === "search");
  const hasCourt = games.some((g) => g.kind === "court");
  const hasTimeline = games.some((g) => g.kind === "timeline");
  const hasSort = games.some((g) => g.kind === "sort");
  const hasSort3 = games.some((g) => g.kind === "sort3");

  if (hasNetwork) return `🌐 Kỹ sư Mạng & Cloud${games.length > 1 ? ` (+${games.length - 1} game)` : ""}`;
  if (hasArena) return `⚔️ Đấu trường An ninh mạng${games.length > 1 ? ` (+${games.length - 1} game)` : ""}`;
  if (hasSearch) return `🔍 Thợ săn Tìm kiếm${games.length > 1 ? ` (+${games.length - 1} game)` : ""}`;
  if (hasCourt) return `⚖️ Tòa án Công lý Số${games.length > 1 ? ` (+${games.length - 1} game)` : ""}`;
  if (hasTimeline && hasSort) return `🎮 2 game: Phân loại & Dòng thời gian`;
  if (hasTimeline) return `⏳ Dòng thời gian Lịch sử`;
  if (hasSort3) return `🧩 Phân loại 3 nhóm`;
  if (hasSort) return `🎮 ${games.length} mini game Phân loại`;
  return `🎮 ${games.length} trò chơi`;
}

export default function HomePage() {
  const counts: Record<string, LessonCounts> = {};
  for (const topic of CURRICULUM) {
    for (const lesson of topic.lessons) {
      if (!lesson.available) continue;
      const games = getLessonGames(lesson.id);
      counts[lesson.id] = {
        mcq: getQuestions(lesson.id).length,
        tf: getTF(lesson.id).length,
        essay: getEssay(lesson.id).length,
        theory: getTheory(lesson.id) !== null,
        hasSlide: getSlideUrl(lesson.id) !== null,
        games: games.length,
        hasArena: games.some((g) => g.kind === "arena"),
        hasSearch: games.some((g) => g.kind === "search"),
        hasCourt: games.some((g) => g.kind === "court"),
        hasNetwork: games.some((g) => g.kind === "network"),
        hasTimeline: games.some((g) => g.kind === "timeline"),
        hasSort: games.some((g) => g.kind === "sort"),
        hasSort3: games.some((g) => g.kind === "sort3"),
        gameBadge: computeGameBadge(games),
      };
    }
  }

  return <HomeClient counts={counts} />;
}
