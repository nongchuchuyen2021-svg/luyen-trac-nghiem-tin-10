import HomeClient from "@/components/HomeClient";
import { CURRICULUM } from "@/data/curriculum";
import { getQuestions } from "@/lib/questions";
import { getTF, getEssay } from "@/lib/extras";
import { getTheory } from "@/lib/theory";
import { getLessonGames } from "@/lib/games";
import type { LessonCounts } from "@/lib/types";

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
        games: games.length,
        hasArena: games.some((g) => g.kind === "arena"),
        hasSearch: games.some((g) => g.kind === "search"),
      };
    }
  }

  return <HomeClient counts={counts} />;
}
