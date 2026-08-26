import type { LessonTheory } from "@/lib/types";

// Import từng bài đã soạn — thêm 1 dòng mỗi khi soạn xong 1 bài
import bai01 from "@/data/theory/bai-01";
import bai02 from "@/data/theory/bai-02";
import bai07 from "@/data/theory/bai-07";
import bai08 from "@/data/theory/bai-08";
import bai09 from "@/data/theory/bai-09";
import bai10 from "@/data/theory/bai-10";
import bai11 from "@/data/theory/bai-11";
import bai12 from "@/data/theory/bai-12";
import bai13 from "@/data/theory/bai-13";
import bai14 from "@/data/theory/bai-14";
import bai15 from "@/data/theory/bai-15";
import bai16 from "@/data/theory/bai-16";
import bai17 from "@/data/theory/bai-17";
import bai18 from "@/data/theory/bai-18";
import bai19 from "@/data/theory/bai-19";
import bai20 from "@/data/theory/bai-20";
import bai21 from "@/data/theory/bai-21";
import bai22 from "@/data/theory/bai-22";
import bai23 from "@/data/theory/bai-23";
import bai24 from "@/data/theory/bai-24";
import bai25 from "@/data/theory/bai-25";
import bai26 from "@/data/theory/bai-26";
import bai27 from "@/data/theory/bai-27";
import bai28 from "@/data/theory/bai-28";
import bai29 from "@/data/theory/bai-29";
import bai30 from "@/data/theory/bai-30";
import bai31 from "@/data/theory/bai-31";
import bai32 from "@/data/theory/bai-32";
import bai33 from "@/data/theory/bai-33";

export const THEORY_BANK: Record<string, LessonTheory> = {
  "bai-01": bai01,
  "bai-02": bai02,
  "bai-07": bai07,
  "bai-08": bai08,
  "bai-09": bai09,
  "bai-10": bai10,
  "bai-11": bai11,
  "bai-12": bai12,
  "bai-13": bai13,
  "bai-14": bai14,
  "bai-15": bai15,
  "bai-16": bai16,
  "bai-17": bai17,
  "bai-18": bai18,
  "bai-19": bai19,
  "bai-20": bai20,
  "bai-21": bai21,
  "bai-22": bai22,
  "bai-23": bai23,
  "bai-24": bai24,
  "bai-25": bai25,
  "bai-26": bai26,
  "bai-27": bai27,
  "bai-28": bai28,
  "bai-29": bai29,
  "bai-30": bai30,
  "bai-31": bai31,
  "bai-32": bai32,
  "bai-33": bai33,
};

export function getTheory(lessonId: string): LessonTheory | null {
  return THEORY_BANK[lessonId] ?? null;
}

export function hasTheory(lessonId: string): boolean {
  return lessonId in THEORY_BANK;
}
