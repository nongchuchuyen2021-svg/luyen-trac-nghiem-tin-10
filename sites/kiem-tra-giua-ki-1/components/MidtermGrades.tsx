"use client";
import type { Attempt } from '@/lib/midterm-types';
import type { ObjectiveBreakdown } from '@/lib/midterm-scoring';
export type GradeSummary = Omit<Attempt,'tokenHash'|'paper'|'answers'> & { objectiveBreakdown:ObjectiveBreakdown|null };
export type GradeTab = 'objective'|'essays';
export const points=(value:number|null|undefined)=>typeof value==='number'?value.toLocaleString('vi-VN',{minimumFractionDigits:2,maximumFractionDigits:2}):'—';
export default function MidtermGrades({roomId,attempts,busy,open}:{roomId:string;attempts:GradeSummary[];busy:boolean;open:(id:string,tab:GradeTab)=>void}) {
 const submitted=attempts.filter(a=>a.submittedAt!==null),graded=submitted.filter(a=>a.essayScores.every(v=>v!==null));
 return <section className="mt-5 rounded-2xl border bg-white p-5 sm:p-6">
  <h2 className="text-xl font-bold">Chấm bài và điểm · Lớp {roomId}</h2>
  <p className="mt-3 rounded-xl bg-indigo-50 p-4 text-sm leading-6 text-indigo-950"><strong>TNKQ và đúng–sai được tự chấm ngay khi nộp bài.</strong> Thầy bấm “Xem tự chấm” để đối chiếu từng câu, rồi bấm “Chấm tự luận” để nhập điểm 2 câu còn lại.</p>
  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">{[['Đã nộp bài',submitted.length],['Đã tự chấm TN / ĐS',submitted.length],['Cần chấm tự luận',submitted.length-graded.length],['Đã đủ điểm',graded.length]].map(([label,n])=><div key={label} className="rounded-xl bg-slate-50 p-4"><p className="text-xs text-slate-600">{label}</p><p className="mt-2 text-2xl font-bold">{n}</p></div>)}</div>
  <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[880px] text-sm"><thead><tr><th>Học sinh</th><th>TNKQ /4<br/><span className="font-normal">Tự chấm</span></th><th>Đúng–sai /3<br/><span className="font-normal">Tự chấm</span></th><th>Tự chấm /7</th><th>Tự luận /3</th><th>Tổng /10</th><th>Thao tác</th></tr></thead><tbody>{attempts.map(a=>{
   const done=a.submittedAt!==null,essayDone=done&&a.essayScores.every(v=>v!==null),essay=a.essayScores.reduce<number>((n,v)=>n+(v??0),0);
   return <tr key={a.id}><td><strong>{a.name}</strong><p className="mt-1 text-xs text-slate-500">{done?'Đã nộp · Đã tự chấm':'Chưa nộp bài'}</p></td><td className="font-semibold">{points(a.objectiveBreakdown?.mc)}</td><td className="font-semibold">{points(a.objectiveBreakdown?.tf)}</td><td>{points(a.objectiveScore)}</td><td>{essayDone?points(essay):done?<span className="font-semibold text-amber-700">Cần chấm</span>:'—'}</td><td className="font-bold text-indigo-800">{essayDone&&a.objectiveScore!==null?points(Math.round((a.objectiveScore+essay)*100)/100):done?'Chờ tự luận':'—'}</td><td><div className="flex flex-wrap gap-2"><button className="mt-secondary" disabled={busy||!done} onClick={()=>open(a.id,'objective')}>Xem tự chấm</button><button className="mt-primary" disabled={busy||!done} onClick={()=>open(a.id,'essays')}>{essayDone?'Xem / sửa tự luận':'Chấm tự luận'}</button></div></td></tr>;
  })}</tbody></table></div>
  {!attempts.length&&<p className="mt-5 rounded-xl border border-dashed p-6 text-sm text-slate-500">Chưa có học sinh vào phòng. Khi học sinh nộp bài, điểm TNKQ và đúng–sai sẽ xuất hiện tại đây.</p>}
 </section>;
}
