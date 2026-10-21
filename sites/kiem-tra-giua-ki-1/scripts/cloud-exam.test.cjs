const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),Module=require('node:module'),{DatabaseSync}=require('node:sqlite'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),sql=new DatabaseSync(':memory:');
sql.exec(fs.readFileSync(path.join(root,'drizzle/0000_watery_pride.sql'),'utf8'));
const adapter={prepare(query){return{query,args:[],bind(...args){return{...this,args}},async run(){const result=sql.prepare(this.query).run(...this.args);return{meta:{changes:Number(result.changes)},results:[]}}}},withSession(){return this},async batch(statements){sql.exec('BEGIN IMMEDIATE');try{const results=statements.map(s=>{const stmt=sql.prepare(s.query);if(/^\s*SELECT/i.test(s.query))return{results:stmt.all(...s.args),meta:{changes:0}};return{results:[],meta:{changes:Number(stmt.run(...s.args).changes)}}});sql.exec('COMMIT');return results}catch(e){sql.exec('ROLLBACK');throw e}}};
const env={DB:adapter,MIDTERM_ADMIN_PASSWORD:'cloud-test-password',MIDTERM_SESSION_SECRET:'cloud-test-secret-with-more-than-thirty-two-characters'};
const load=Module._load,resolve=Module._resolveFilename;
Module._load=function(name,...args){return name==='cloudflare:workers'?{env}:load.call(this,name,...args)};
Module._resolveFilename=function(name,...args){return resolve.call(this,name.startsWith('@/')?path.join(root,name.slice(2)):name,...args)};
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText,f);
const server=require('../lib/midterm-server.ts'),{GET,POST}=require('../app/api/giua-ki-1/route.ts'),{NextRequest}=require('next/server');
const {scoreObjective}=require('../lib/midterm-scoring.ts');
async function call(action,body={},cookie='',method='POST'){
 const req=new NextRequest('https://exam.example/api/giua-ki-1'+(method==='GET'?'?action='+action:''),{method,headers:{origin:'https://exam.example',cookie,'content-type':'application/json'},...(method==='POST'?{body:JSON.stringify({action,...body})}:{})});
 const r=await(method==='GET'?GET(req):POST(req));return{status:r.status,body:r.headers.get('content-type').includes('json')?await r.json():await r.text(),cookie:r.headers.get('set-cookie')?.split(';')[0]??''};
}
test('Cloud password derivation, safe paper and exact true false scale',async()=>{
 const hash=await server.hashCode('room-code');assert.ok(await server.checkCode('room-code',hash));assert.equal(await server.checkCode('wrong',hash),false);
 const p=server.createPaper();assert.deepEqual([p.mc.length,p.tf.length,p.essays.length],[16,3,2]);assert.equal(new Set(p.mc.map(q=>q.lesson)).size,7);assert.ok(!JSON.stringify(server.publicPaper(p)).includes('"answer":'));
 for(let i=0;i<=4;i++){const a=server.emptyAnswers();a.tf[0]=p.tf[0].statements.map((s,n)=>n<i?s.answer:!s.answer);assert.equal(server.objectiveScore(p,a),[0,.1,.25,.5,1][i])}
});
test('D1 room lifecycle, persisted answers, teacher-only start, score and export',async()=>{
 const teacher=(await call('login',{password:env.MIDTERM_ADMIN_PASSWORD})).cookie;assert.ok(teacher);
 const config={roomId:'10A1',opensAt:new Date(Date.now()-60000).toISOString(),closesAt:new Date(Date.now()+7200000).toISOString(),duration:45,code:'class-code',roster:['Học Sinh Thử','Nguyễn Văn An']};
 assert.equal((await call('configure',config,teacher)).status,200);
 assert.equal((await call('join',{roomId:'10A1',name:'A',code:config.code})).status,400);
 assert.equal((await call('join',{roomId:'10A1',name:'Học Sinh Thử',code:'wrong-code'})).status,403);
 const joined=await call('join',{roomId:'10A1',name:'  hoc   SINH thu  ',code:config.code});assert.equal(joined.status,200);assert.equal(joined.body.attempt.paper,null);assert.equal(joined.body.attempt.name,'hoc SINH thu');assert.match(joined.body.attempt.studentId,/^HS[A-F0-9]{24}$/);
 assert.equal((await call('student-logout',{},joined.cookie)).status,409);
 const resaved=await call('configure',{...config,roster:[...config.roster].reverse()},teacher);assert.equal(resaved.status,200);assert.equal(resaved.body.rooms[0].roster.find(s=>s.id===joined.body.attempt.studentId).name,'hoc SINH thu');
 assert.equal((await call('configure',{...config,roster:undefined},teacher)).status,200);
 assert.equal((await call('start',{roomId:'10A1'},joined.cookie)).status,401);assert.equal((await call('start',{roomId:'10A1'},teacher)).status,200);
 const status=await call('status',{},joined.cookie,'GET');assert.equal(status.body.attempt.paper.mc.length,16);
 const answers=server.emptyAnswers();answers.mc[0]=1;answers.essays[0]='Bài kiểm tra lưu trực tuyến.';
 assert.equal((await call('save',{revision:1,answers},joined.cookie)).status,200);assert.deepEqual((await call('status',{},joined.cookie,'GET')).body.attempt.answers,answers);
 assert.equal((await call('submit',{revision:1,answers},joined.cookie)).status,200);const submitted=await call('status',{},joined.cookie,'GET');assert.equal(submitted.body.attempt.paper,null);assert.equal(submitted.body.attempt.objectiveScore,undefined);
 const dashboard=await call('admin',{},teacher,'GET'),split=dashboard.body.attempts[0].objectiveBreakdown;assert.equal(split.mc+split.tf,submitted.body.attempt.objectiveScore??dashboard.body.attempts[0].objectiveScore);assert.equal(submitted.body.attempt.objectiveBreakdown,undefined);
 assert.equal((await call('grade',{roomId:'10A1',attemptId:status.body.attempt.id,scores:[1,1.5],feedback:'Đã chấm'},teacher)).status,200);const csv=await call('export',{},teacher,'GET');assert.equal(csv.status,200);assert.ok(csv.body.includes('TNKQ /4'));assert.ok(csv.body.includes('Đúng–sai /3'));
 const retained=await server.transaction(s=>JSON.stringify({answers:s.attempts[0].answers,score:s.attempts[0].objectiveScore,essays:s.attempts[0].essayScores}));const exited=await call('student-logout',{},joined.cookie);assert.equal(exited.status,200);assert.equal(exited.cookie,'midterm_student=');assert.equal((await call('status',{},joined.cookie,'GET')).status,401);assert.equal(await server.transaction(s=>JSON.stringify({answers:s.attempts[0].answers,score:s.attempts[0].objectiveScore,essays:s.attempts[0].essayScores})),retained);
});
test('Separate TNKQ and true-false scores use the exact 1, 2, 3 and 4 statement scale',()=>{
 const p=server.createPaper(),answers=server.emptyAnswers();answers.mc=p.mc.map(q=>q.answer);answers.tf=p.tf.map((q,i)=>q.statements.map((s,j)=>j<i+1?s.answer:!s.answer));
 const result=scoreObjective(p,answers);assert.equal(result.mc,4);assert.equal(result.mcCorrect,16);assert.equal(result.tf,0.85);assert.equal(result.total,4.85);assert.deepEqual(result.tfItems,[{correct:1,points:0.1},{correct:2,points:0.25},{correct:3,points:0.5}]);
 assert.equal(scoreObjective(p,server.emptyAnswers()).total,0);
});
test('Names-only roster accepts the teacher input and keeps internal IDs when reordered',()=>{
 const room=server.initialState().rooms[0];room.roster=server.prepareRoster(room,['  Nguyễn   Văn An  ','Trần Thị Bình']);assert.equal(room.roster[0].name,'Nguyễn Văn An');
 const reordered=server.prepareRoster(room,['Trần Thị Bình','Nguyễn Văn An','Lê Văn Cường']);assert.equal(reordered[1].id,room.roster[0].id);assert.equal(new Set(reordered.map(s=>s.id)).size,3);
 assert.throws(()=>server.prepareRoster(room,['Nguyễn Văn An','nguyen van an']));assert.throws(()=>server.prepareRoster(room,[]));
});
test('D1 compare-and-swap keeps all concurrent writes, rejects invalid arrays and elapsed exams',async()=>{
 const count=await server.transaction(s=>s.audit.length);
 const results=await Promise.allSettled(Array.from({length:8},(_,i)=>server.transaction(s=>s.audit.push({at:Date.now(),roomId:'test',action:String(i)}))));
 for(const r of results)assert.equal(r.status,'fulfilled',r.reason?.message);assert.equal(await server.transaction(s=>s.audit.length),count+8);
 assert.throws(()=>server.validateAnswers({mc:[],tf:[],essays:[]}));
 await server.transaction(s=>{const r=s.rooms.find(r=>r.id==='10A1');r.endsAt=Date.now()-1;r.status='running'});
 assert.equal(await server.transaction(s=>s.rooms.find(r=>r.id==='10A1').status),'closed');
});
test('Reset closed room deletes only its persisted attempts and permits a fresh exam',async()=>{
 const teacher=(await call('login',{password:env.MIDTERM_ADMIN_PASSWORD})).cookie;
 const config={roomId:'10A3',opensAt:new Date(Date.now()-60000).toISOString(),closesAt:new Date(Date.now()+7200000).toISOString(),duration:45,code:'other-class-code',roster:['Học Sinh Lớp Khác']};
 assert.equal((await call('reopen',{roomId:'10A4',confirmReset:true},teacher)).status,200);
 assert.equal((await call('configure',config,teacher)).status,200);
 const other=await call('join',{roomId:'10A3',name:'Học Sinh Lớp Khác',code:config.code});assert.equal(other.status,200);
 assert.equal((await call('start',{roomId:'10A3'},teacher)).status,200);
 assert.equal((await call('reopen',{roomId:'10A3',confirmReset:true},teacher)).status,409);
 const kept=await server.transaction(s=>JSON.stringify({room:s.rooms.find(r=>r.id==='10A3'),attempts:s.attempts.filter(a=>a.roomId==='10A3')}));
 const targetBefore=await server.transaction(s=>s.attempts.filter(a=>a.roomId==='10A1').map(a=>a.id));assert.ok(targetBefore.length);
 assert.equal((await call('reopen',{roomId:'10A1',confirmReset:true})).status,401);
 assert.equal((await call('reopen',{roomId:'10A1'},teacher)).status,400);
 const reset=await call('reopen',{roomId:'10A1',confirmReset:true},teacher);assert.equal(reset.status,200);
 const room=reset.body.rooms.find(r=>r.id==='10A1');assert.equal(room.status,'draft');assert.equal(room.startedAt,null);assert.equal(room.endsAt,null);assert.equal(room.opensAt,'');assert.equal(room.closesAt,'');assert.equal(reset.body.attempts.some(a=>a.roomId==='10A1'),false);
 const loaded=await call('admin',{},teacher,'GET');assert.equal(loaded.body.attempts.some(a=>a.roomId==='10A1'),false);
 for(const id of targetBefore)assert.equal(sql.prepare('SELECT COUNT(*) AS n FROM exam_documents WHERE key = ?').get('attempt:'+id).n,0);
 assert.equal(await server.transaction(s=>JSON.stringify({room:s.rooms.find(r=>r.id==='10A3'),attempts:s.attempts.filter(a=>a.roomId==='10A3')})),kept);
 assert.equal((await call('reopen',{roomId:'10A1',confirmReset:true},teacher)).status,200);
 const fresh={...config,roomId:'10A1',code:'fresh-class-code',roster:['Học Sinh Ca Mới']};assert.equal((await call('configure',fresh,teacher)).status,200);
 const joined=await call('join',{roomId:'10A1',name:'Học Sinh Ca Mới',code:fresh.code});assert.equal(joined.status,200);assert.equal(joined.body.attempt.paper,null);assert.ok(!targetBefore.includes(joined.body.attempt.id));assert.equal((await call('start',{roomId:'10A1'},teacher)).status,200);
});
test('Students join without a preloaded roster; duplicate names and late entry remain protected',async()=>{
 const teacher=(await call('login',{password:env.MIDTERM_ADMIN_PASSWORD})).cookie;
 const config={roomId:'10A4',opensAt:new Date(Date.now()-60000).toISOString(),closesAt:new Date(Date.now()+7200000).toISOString(),duration:45,code:'open-class-code'};
 const saved=await call('configure',config,teacher);assert.equal(saved.status,200);assert.deepEqual(saved.body.rooms[2].roster,[]);
 assert.equal((await call('join',{roomId:'10A4',name:'Nguyễn Văn Mới',code:'wrong'})).status,403);
 assert.equal(await server.transaction(s=>s.rooms[2].roster.length),0);
 const a=await call('join',{roomId:'10A4',name:'  Nguyễn   Văn Mới  ',code:config.code});assert.equal(a.status,200);assert.equal(a.body.attempt.name,'Nguyễn Văn Mới');assert.equal(a.body.attempt.paper,null);
 assert.equal((await call('join',{roomId:'10A4',name:'nguyen van moi',code:config.code})).status,409);
 assert.equal((await call('join',{roomId:'10A4',name:'nguyen van moi',code:config.code},a.cookie)).status,200);
 assert.equal(await server.transaction(s=>s.rooms[2].roster.length),1);
 assert.equal((await call('configure',config,teacher)).status,200);
 assert.equal((await call('start',{roomId:'10A4'},teacher)).status,200);
 assert.equal((await call('join',{roomId:'10A4',name:'Học Sinh Đến Muộn',code:config.code})).status,403);
 assert.equal(await server.transaction(s=>s.rooms[2].roster.length),1);
 assert.equal((await call('close',{roomId:'10A4'},teacher)).status,200);
 assert.equal((await call('reopen',{roomId:'10A4',confirmReset:true},teacher)).status,200);
 assert.equal(await server.transaction(s=>s.rooms[2].roster.length),0);
});

test('Reset waiting and draft rooms clears old configuration durably',async()=>{
 const teacher=(await call('login',{password:env.MIDTERM_ADMIN_PASSWORD})).cookie;
 const config={roomId:'10A4',opensAt:new Date(Date.now()-60000).toISOString(),closesAt:new Date(Date.now()+7200000).toISOString(),duration:45,code:'waiting-reset-code'};
 assert.equal((await call('configure',config,teacher)).status,200);
 const a=await call('join',{roomId:'10A4',name:'Học Sinh Test',code:config.code});assert.equal(a.status,200);
 assert.equal((await call('reopen',{roomId:'10A4'},teacher)).status,400);
 assert.equal((await call('reopen',{roomId:'10A4',confirmReset:true},teacher)).status,200);
 const state=await server.transaction(s=>({room:s.rooms[2],attempts:s.attempts.filter(a=>a.roomId==='10A4')}));
 assert.equal(state.room.status,'draft');assert.equal(state.room.codeHash,'');assert.equal(state.room.opensAt,'');assert.equal(state.room.closesAt,'');assert.deepEqual(state.room.roster,[]);assert.deepEqual(state.attempts,[]);
 assert.equal((await call('status',{},a.cookie,'GET')).status,401);
 assert.equal((await call('reopen',{roomId:'10A4',confirmReset:true},teacher)).status,200);
});

test('Teacher changes password durably, revokes old admin sessions and preserves exam records',async()=>{
 const old=(await call('login',{password:env.MIDTERM_ADMIN_PASSWORD})).cookie,newPassword='new-unit-test-password-123';
 const before=await server.transaction(s=>JSON.stringify({rooms:s.rooms,attempts:s.attempts}));
 const body={currentPassword:env.MIDTERM_ADMIN_PASSWORD,newPassword,confirmPassword:newPassword};
 assert.equal((await call('change-password',body)).status,401);
 assert.equal((await call('change-password',{...body,currentPassword:'wrong'},old)).status,403);
 assert.equal((await call('change-password',{...body,confirmPassword:'different'},old)).status,400);
 const changed=await call('change-password',body,old);assert.equal(changed.status,200);assert.ok(changed.cookie);
 assert.equal((await call('admin',{},old,'GET')).status,401);
 assert.equal((await call('login',{password:env.MIDTERM_ADMIN_PASSWORD})).status,401);
 const login=await call('login',{password:newPassword});assert.equal(login.status,200);
 const dashboard=await call('admin',{},login.cookie,'GET');assert.equal(dashboard.status,200);assert.ok(!JSON.stringify(dashboard.body).includes('adminPasswordHash'));assert.ok(!JSON.stringify(dashboard.body).includes(newPassword));
 const stored=await server.transaction(s=>s.security.adminPasswordHash);assert.notEqual(stored,newPassword);assert.ok(await server.checkCode(newPassword,stored));
 assert.equal(await server.transaction(s=>JSON.stringify({rooms:s.rooms,attempts:s.attempts})),before);
});
