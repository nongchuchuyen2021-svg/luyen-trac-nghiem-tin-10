export const MIDTERM_CLASSES = ["10A1", "10A3", "10A4"] as const;
export type MidtermClass = typeof MIDTERM_CLASSES[number];
export type Paper = {
  mc: { id: string; lesson: number; level: string; q: string; code?: string; options: string[]; answer: number }[];
  tf: { id: string; lesson: number; level: string; context: string; code?: string; statements: { text: string; answer: boolean }[] }[];
  essays: { id: string; lesson: number; level: string; q: string; code?: string; answer: string; rubric: string[] }[];
};
export type PublicPaper = {
  mc: Omit<Paper["mc"][number], "answer">[];
  tf: (Omit<Paper["tf"][number], "statements"> & { statements: { text: string }[] })[];
  essays: Omit<Paper["essays"][number], "answer" | "rubric">[];
};
export type ExamAnswers = { mc: (number | null)[]; tf: (boolean | null)[][]; essays: string[] };
export type Room = {
  id: MidtermClass; opensAt: string; closesAt: string; duration: number;
  status: "draft" | "waiting" | "running" | "closed";
  codeHash: string; startedAt: number | null; endsAt: number | null;
  allowLate: boolean; roster: { id: string; name: string }[];
};
export type Attempt = {
  id: string; roomId: MidtermClass; studentId: string; name: string; tokenHash: string;
  joinedAt: number; lastSeen: number; paper: Paper | null; answers: ExamAnswers;
  revision: number; savedAt: number | null; submittedAt: number | null;
  objectiveScore: number | null; essayScores: (number | null)[]; feedback: string;
};
export type MidtermState = { version: 1; rooms: Room[]; attempts: Attempt[]; security?: { adminPasswordHash:string; adminSessionVersion:number; changedAt:number }; audit: { at: number; roomId: string; action: string }[] };
export type StudentView = {
  now: number; room: Pick<Room, "id" | "status" | "opensAt" | "closesAt" | "duration" | "endsAt">;
  attempt: { id: string; name: string; studentId: string; revision: number; savedAt: number | null; submittedAt: number | null; answers: ExamAnswers; paper: PublicPaper | null };
};
