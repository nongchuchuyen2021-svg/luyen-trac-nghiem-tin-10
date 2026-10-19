import fs from 'node:fs';
import path from 'node:path';

const srcPath = path.resolve('..', 'luyen-trac-nghiem-tin-12', 'app', 'dau-truong', 'DauTruongClient.tsx');
const destDir = path.resolve('app', 'dau-truong');
const destPath = path.join(destDir, 'DauTruongClient.tsx');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let content = fs.readFileSync(srcPath, 'utf8');

// Replace Tin 12 references
content = content.replace("import { BAI_04_BATTLE_QUESTIONS } from \"@/data/games/bai-04\";", "// Battle questions for Tin 10");
content = content.replace("const extra = hostTopic === \"bai-04\" ? BAI_04_BATTLE_QUESTIONS : [];", "const extra: BattleQuestion[] = [];");
content = content.replaceAll("Tin học 12", "Tin học 10");
content = content.replaceAll("Tin 12", "Tin 10");

fs.writeFileSync(destPath, content, 'utf8');
console.log('Successfully created DauTruongClient.tsx for Tin 10');
