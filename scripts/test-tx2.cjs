const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

// Nạp trực tiếp mã TypeScript của dự án, không cần thêm thư viện kiểm thử.
const root = path.resolve(__dirname, "..");
const cache = new Map();
function load(file) {
  const filename = path.resolve(root, file);
  if (cache.has(filename)) return cache.get(filename).exports;
  const module = { exports: {} };
  cache.set(filename, module);
  const source = fs.readFileSync(filename, "utf8");
  const js = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const localRequire = (id) => {
    if (id.startsWith("@/")) return load(id.slice(2) + ".ts");
    if (id.startsWith(".")) return load(path.resolve(path.dirname(filename), id) + ".ts");
    throw new Error(`Unexpected dependency: ${id}`);
  };
  new Function("require", "module", "exports", js)(localRequire, module, module.exports);
  return module.exports;
}

const { QUESTION_BANK } = load("lib/questions.ts");
const { TX2_LESSON_IDS, TX2_DIFFICULTIES, taoDeNgauNhienTx2, DE_KIEM_TRA_TX2 } =
  load("data/de-kiem-tra/thuong-xuyen-2.ts");
const { tronPhuongAn, phuThuocThuTu } = load("lib/tron-phuong-an.ts");
const bank = TX2_LESSON_IDS.flatMap((id) => QUESTION_BANK[id]);
const original = JSON.stringify(bank);
assert.equal(bank.length, 58);
assert.equal(DE_KIEM_TRA_TX2.thoiGianPhut * 60, 960);
assert.equal(new Set(bank.map((q) => q.id)).size, 58);
for (const lesson of TX2_LESSON_IDS) {
  for (const level of TX2_DIFFICULTIES) {
    assert.ok(QUESTION_BANK[lesson].filter((q) => q.difficulty === level).length >= 2,
      `${lesson}/${level} needs multiple choices`);
  }
}
for (const q of bank) {
  assert.ok(TX2_DIFFICULTIES.includes(q.difficulty), q.id);
  assert.equal(q.options.length, 4, q.id);
  assert.equal(new Set(q.options).size, 4, q.id);
  assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3, q.id);
  assert.equal(phuThuocThuTu(q), false, `Review dependent options: ${q.id}`);
}

// Qua nhiều đề vẫn luôn đủ 5 bài × 3 mức độ, không trùng câu trong một đề.
const signatures = new Set();
for (let i = 0; i < 1000; i++) {
  const exam = taoDeNgauNhienTx2();
  assert.equal(exam.length, 15);
  assert.equal(new Set(exam.map((q) => q.id)).size, 15);
  assert.ok(exam.every((q) => bank.includes(q)));
  for (const lesson of TX2_LESSON_IDS) {
    for (const level of TX2_DIFFICULTIES) {
      assert.equal(exam.filter((q) => QUESTION_BANK[lesson].includes(q) && q.difficulty === level).length, 1);
    }
  }
  signatures.add(exam.map((q) => q.id).sort().join(","));
}
assert.ok(signatures.size > 1, "Must vary selected questions, not just their order");

// Kiểm tra toàn bộ 24 cách đảo của từng câu: nội dung đúng không đổi.
for (const q of bank) {
  const permutations = new Set();
  for (let a = 0; a < 4; a++) for (let b = 0; b < 3; b++) for (let c = 0; c < 2; c++) {
    const randomValues = [(a + 0.5) / 4, (b + 0.5) / 3, (c + 0.5) / 2];
    const result = tronPhuongAn(q, () => randomValues.shift());
    assert.equal(result.shuffledOptions[result.correctIndex], q.options[q.answer], q.id);
    assert.deepEqual([...result.shuffledOptions].sort(), [...q.options].sort(), q.id);
    permutations.add(JSON.stringify(result.shuffledOptions));
  }
  assert.equal(permutations.size, 24, q.id);
}

// Câu phụ thuộc nhãn/vị trí và câu được đánh dấu thủ công phải giữ nguyên.
for (const option of ["Cả A và B", "A, C và D", "Phương án A", "đáp án b",
  "Tất cả các phương án trên", "Cả bốn ý trên", "Các đáp án dưới",
  "Hai phương án đầu tiên", "Phương án thứ hai"]) {
  const q = { ...bank[0], options: ["Một", "Hai", "Ba", option], answer: 3 };
  const result = tronPhuongAn(q, () => { throw new Error("Must not shuffle"); });
  assert.deepEqual(result.shuffledOptions, q.options, option);
  assert.equal(result.correctIndex, 3, option);
}
assert.deepEqual(tronPhuongAn({ ...bank[0], shuffleOptions: false }).shuffledOptions, bank[0].options);
assert.equal(phuThuocThuTu({ ...bank[0], q: "Vì sao phương án A đúng?" }), true);

// Thiếu nhóm mức độ phải báo lỗi, không âm thầm bốc thiếu hoặc đổi ma trận.
const lesson = TX2_LESSON_IDS[0];
const saved = QUESTION_BANK[lesson];
try {
  QUESTION_BANK[lesson] = saved.filter((q) => q.difficulty !== "van-dung");
  assert.throws(taoDeNgauNhienTx2, /thiếu câu mức/);
  QUESTION_BANK[lesson] = [{ ...saved[0], difficulty: undefined }, ...saved.slice(1)];
  assert.throws(taoDeNgauNhienTx2, /chưa phân loại/);
} finally {
  QUESTION_BANK[lesson] = saved;
}
assert.equal(JSON.stringify(bank), original, "Selection/shuffling must not mutate bank");
console.log("PASS: 58 classified questions; 1,000 exams; 24 option permutations per question; dependent-option guards; missing-level guards; 16-minute duration.");
