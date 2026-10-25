#!/usr/bin/env node
/* Comprueba que todo el contenido en español de data.js tiene traducción inglesa
   en content-en.js. El noruego no se traduce y se detecta automáticamente.

   Uso: node tools/check-i18n.mjs
   Sale con código 1 si falta alguna traducción. */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(readFileSync(join(root, 'assets/js/data.js'), 'utf8'), context);
vm.runInContext(readFileSync(join(root, 'assets/js/content-en.js'), 'utf8'), context);

const C = context.window.COURSE;
const EN = context.window.EN_STRINGS || {};

const items = [];
const add = (path, s) => { if (typeof s === 'string' && s.trim()) items.push({ path, s }); };

for (const l of C.lessons) {
  add(`lesson:${l.id}.imageAlt`, l.imageAlt);
  add(`lesson:${l.id}.subtitle`, l.subtitle);
  l.goals.forEach((x, i) => add(`lesson:${l.id}.goals[${i}]`, x));
  l.text.forEach((p, i) => add(`lesson:${l.id}.text[${i}].es`, p.es));
  l.vocab.forEach((v, i) => {
    add(`lesson:${l.id}.vocab[${i}].es`, v.es);
    add(`lesson:${l.id}.vocab[${i}].note`, v.note);
  });
  l.phrases.forEach((p, i) => add(`lesson:${l.id}.phrases[${i}].es`, p.es));
  add(`lesson:${l.id}.tip`, l.tip);
  if (l.grammar) {
    add(`lesson:${l.id}.grammar.title`, l.grammar.title);
    l.grammar.points.forEach((x, i) => add(`lesson:${l.id}.grammar.points[${i}]`, x));
    l.grammar.examples.forEach((x, i) => add(`lesson:${l.id}.grammar.examples[${i}].es`, x.es));
  }
  l.exercises.forEach((e, i) => {
    const p = `lesson:${l.id}.ex[${i}]`;
    add(p + '.prompt', e.prompt);
    e.options?.forEach((o, j) => add(p + `.options[${j}]`, o));
    e.pairs?.forEach((q, j) => add(p + `.pairs[${j}].b`, q.b));
    add(p + '.explain', e.explain);
    add(p + '.es', e.es);
    add(p + '.hint', e.hint);
  });
}

C.colloquial.forEach((c, i) => {
  const p = `col[${i}]`;
  add(p + '.literal', c.literal);
  add(p + '.meaning', c.meaning);
  add(p + '.tip', c.tip);
  c.example.forEach((e, j) => add(p + `.example[${j}].es`, e.es));
});

add('fun.intro', C.fun.intro);
C.fun.packs.forEach((p) => {
  const pp = `pack:${p.id}`;
  add(pp + '.title', p.title);
  add(pp + '.subtitle', p.subtitle);
  add(pp + '.intro', p.intro);
  p.exercises.forEach((e, j) => {
    const q = `${pp}.ex[${j}]`;
    add(q + '.prompt', e.prompt);
    e.options?.forEach((o, k) => add(q + `.options[${k}]`, o));
    e.pairs?.forEach((q2, k) => add(q + `.pairs[${k}].b`, q2.b));
    add(q + '.explain', e.explain);
    add(q + '.es', e.es);
    add(q + '.hint', e.hint);
  });
});

C.wordbank.forEach((w, i) => {
  add(`wb[${i}].es`, w.es);
  add(`wb[${i}].note`, w.note);
});
C.verbs.forEach((v, i) => add(`verb[${i}].es`, v.es));

/* Cadenas noruegas: nunca deben traducirse. Si una opción es exactamente una
   de estas, se deja intacta (p. ej. «kaffe», «flink», «Jeg heter Alex»). */
const NO = new Set();
const addNo = (s) => { if (typeof s === 'string' && s.trim()) NO.add(s); };
const addExerciseNo = (e) => {
  ['sentence', 'text', 'source', 'correct', 'audio'].forEach((k) => addNo(e[k]));
  ['answers', 'bank', 'words'].forEach((k) => (e[k] || []).forEach(addNo));
  e.pairs?.forEach((p) => addNo(p.a));
};
for (const l of C.lessons) {
  addNo(l.title);
  l.text.forEach((p) => addNo(p.no));
  l.vocab.forEach((v) => addNo(v.no));
  l.phrases.forEach((p) => addNo(p.no));
  l.grammar?.examples.forEach((e) => addNo(e.no));
  l.exercises.forEach(addExerciseNo);
}
for (const c of C.colloquial) {
  addNo(c.term);
  c.example.forEach((e) => { addNo(e.no); addNo(e.who); });
}
for (const p of C.fun.packs) {
  addNo(p.level);
  p.exercises.forEach(addExerciseNo);
}
for (const w of C.wordbank) addNo(w.no);
for (const v of C.verbs) {
  addNo(v.inf);
  addNo(v.present);
  addNo(v.past);
  addNo(v.perfect);
}

const byString = new Map();
for (const it of items) {
  if (!byString.has(it.s)) byString.set(it.s, []);
  byString.get(it.s).push(it.path);
}

const translatable = [];
for (const [s, paths] of byString) {
  const onlyOptions = paths.every((p) => p.includes('.options['));
  if (onlyOptions && NO.has(s)) continue;
  translatable.push(s);
}

const missing = translatable.filter((s) => !(s in EN));
const unused = Object.keys(EN).filter((s) => !byString.has(s));
const empty = Object.entries(EN).filter(([, v]) => !String(v || '').trim());
const identical = translatable.filter((s) => EN[s] === s && !NO.has(s));

console.log('Cadenas únicas traducibles :', translatable.length);
console.log('Traducciones en content-en  :', Object.keys(EN).length);
console.log('Sin traducir                :', missing.length);
if (unused.length) console.log('Traducciones sin uso        :', unused.length);
if (empty.length) console.log('Traducciones vacías         :', empty.length);
if (identical.length) {
  console.log('Idénticas (revisar)         :', identical.length);
  identical.slice(0, 10).forEach((s) => console.log('  ·', JSON.stringify(s)));
}

if (missing.length) {
  console.error('\nFaltan traducciones. Añádelas a assets/js/content-en.js:');
  missing.slice(0, 30).forEach((s) => console.error('  ' + JSON.stringify(s) + '  // ' + byString.get(s).slice(0, 2).join(' | ')));
  if (missing.length > 30) console.error(`  … y ${missing.length - 30} más`);
  process.exit(1);
}

if (empty.length) {
  console.error('\nHay traducciones vacías en assets/js/content-en.js.');
  process.exit(1);
}

console.log('\nOK: todo el contenido tiene traducción inglesa.');
