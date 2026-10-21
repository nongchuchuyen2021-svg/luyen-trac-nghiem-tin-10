import type { ExamAnswers, Paper } from './midterm-types';
export const TF_POINTS = [0, 0.1, 0.25, 0.5, 1] as const;
export function scoreObjective(paper: Paper, answers: ExamAnswers) {
  const mcCorrect = paper.mc.filter((q,i)=>answers.mc[i]===q.answer).length;
  const mc = mcCorrect * 0.25;
  const tfItems = paper.tf.map((q,i)=>{
    const correct=q.statements.filter((s,j)=>answers.tf[i][j]===s.answer).length;
    return {correct,points:TF_POINTS[correct]};
  });
  const tf=Math.round(tfItems.reduce((n,q)=>n+q.points,0)*100)/100;
  return {mc,tf,total:Math.round((mc+tf)*100)/100,mcCorrect,tfItems};
}
export type ObjectiveBreakdown = ReturnType<typeof scoreObjective>;
