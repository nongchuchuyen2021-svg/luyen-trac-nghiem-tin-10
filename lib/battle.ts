import type { Question } from "./types";
import { QUESTION_BANK } from "./questions";
import { CURRICULUM } from "@/data/curriculum";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export interface BattleQuestion {
  id: string;
  question: string;
  code?: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0..3
  explanation: string;
}

export interface BattleTopic {
  id: string;
  name: string;
  chapter: string;
}

export const BATTLE_TOPICS: BattleTopic[] = [
  { id: "all", name: "🏆 Đại Chiến Toàn Diện (Ngẫu nhiên toàn bộ 34 bài Tin 10)", chapter: "Toàn bộ SGK Tin học 10" },
  { id: "chu-de-2", name: "🛡️ An Ninh Mạng & Internet (Bài 8, 9, 10)", chapter: "Chủ đề 2: Mạng & Internet" },
  { id: "chu-de-4", name: "🎨 Đồ Họa Vector & Inkscape (Bài 12 - 15)", chapter: "Chủ đề 4: Ứng dụng tin học" },
  { id: "chu-de-5", name: "🐍 Đại Chiến Lập Trình Python (Bài 16 - 34)", chapter: "Chủ đề 5: Lập trình Python" },
  ...CURRICULUM.flatMap((topic) =>
    topic.lessons.map((lesson) => ({
      id: lesson.id,
      name: lesson.title,
      chapter: topic.name,
    }))
  ),
];

function shuffleIndices(): number[] {
  const arr = [0, 1, 2, 3];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function convertQuestionToBattle(q: Question): BattleQuestion {
  const order = shuffleIndices();
  return {
    id: q.id,
    question: q.q,
    code: q.code,
    options: order.map((i) => q.options[i]) as [string, string, string, string],
    correctAnswer: order.indexOf(q.answer),
    explanation: q.explain,
  };
}

export function getBattleQuestions(topicId: string, count = 10): BattleQuestion[] {
  let list: Question[] = [];

  if (topicId === "all") {
    list = Object.values(QUESTION_BANK).flat();
  } else if (topicId === "chu-de-2") {
    list = [...(QUESTION_BANK["bai-08"] ?? []), ...(QUESTION_BANK["bai-09"] ?? []), ...(QUESTION_BANK["bai-10"] ?? [])];
  } else if (topicId === "chu-de-4") {
    list = ["bai-12", "bai-13", "bai-14", "bai-15"].flatMap((id) => QUESTION_BANK[id] ?? []);
  } else if (topicId === "chu-de-5") {
    list = Array.from({ length: 19 }, (_, i) => `bai-${i + 16}`).flatMap((id) => QUESTION_BANK[id] ?? []);
  } else {
    list = QUESTION_BANK[topicId] ?? [];
  }

  if (list.length === 0) {
    list = Object.values(QUESTION_BANK).flat();
  }

  const shuffled = shuffle(list);
  return shuffled.slice(0, Math.min(count, shuffled.length)).map(convertQuestionToBattle);
}
