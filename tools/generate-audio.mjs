#!/usr/bin/env node
/**
 * Genera los audios del curso con Piper (TTS neuronal offline) y crea
 * assets/js/audio-manifest.js, que el navegador usa para reproducir ficheros
 * en vez de depender de las voces del sistema.
 *
 * Uso:
 *   PIPER_BIN=/ruta/piper PIPER_MODEL=/ruta/voz.onnx node tools/generate-audio.mjs
 *   ... --force        regenera todo
 *
 * Voz recomendada (bokmål): no_NO-talesyntese-medium
 * https://huggingface.co/rhasspy/piper-voices/tree/main/no/no_NO/talesyntese/medium
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, rmSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets/audio');
const TMP = path.join(OUT, '.tmp');
const MANIFEST = path.join(ROOT, 'assets/js/audio-manifest.js');

const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const argOf = (name, fallback) => {
  const i = args.indexOf(name);
  return i > -1 && args[i + 1] ? args[i + 1] : fallback;
};
const PIPER = argOf('--piper', process.env.PIPER_BIN || 'piper');
const MODEL = argOf('--model', process.env.PIPER_MODEL || '');

if (!MODEL || !existsSync(MODEL)) {
  console.error('Falta el modelo de voz. Pasa --model /ruta/voz.onnx (o PIPER_MODEL).');
  process.exit(1);
}

/* Misma normalización que assets/js/tts.js — si cambia una, cambia la otra. */
const norm = (s) => String(s).replace(/[«»]/g, '').replace(/\s+/g, ' ').trim();
const hash = (s) => createHash('sha1').update(norm(s), 'utf8').digest('hex').slice(0, 12);

/* ---------- cargar data.js sin navegador ---------- */
const sandbox = { window: {} };
vm.runInNewContext(readFileSync(path.join(ROOT, 'assets/js/data.js'), 'utf8'), sandbox);
const COURSE = sandbox.window.COURSE;

/* ---------- recolectar todo lo que la app puede pronunciar ---------- */
const texts = new Set();
for (const l of COURSE.lessons) {
  l.text.forEach((p) => texts.add(p.no));
  l.vocab.forEach((v) => texts.add(v.no));
  l.phrases.forEach((p) => texts.add(p.no));
  if (l.grammar && l.grammar.examples) l.grammar.examples.forEach((g) => texts.add(g.no));
  l.exercises.forEach((e) => {
    if (e.type === 'gap') texts.add(e.sentence.replace('___', e.answers[0]));
    if (e.type === 'order') texts.add(e.words.join(' '));
    if (e.type === 'mcq' && e.audio) texts.add(e.audio);
    if (e.type === 'listen') texts.add(e.audio);
    if (e.type === 'transform') {
      texts.add(e.source);
      const list = e.answers || (e.answer ? [e.answer] : []);
      list.forEach((a) => texts.add(a));
    }
    if (e.type === 'cloze') {
      let i = 0;
      const filled = String(e.text).replace(/___/g, () => {
        const a = e.answers[i++];
        return Array.isArray(a) ? a[0] : a;
      });
      texts.add(filled);
    }
    if (e.type === 'match') {
      e.pairs.forEach((p) => {
        texts.add(p.a);
        if (e.sayB) texts.add(p.b);
      });
    }
  });
}
for (const c of COURSE.colloquial) {
  texts.add(c.term);
  c.example.forEach((x) => texts.add(x.no));
}

/* Samtaler: diálogos cotidianos */
for (const d of COURSE.dialogues || []) {
  d.lines.forEach((l) => texts.add(l.no));
  d.vocab.forEach((v) => texts.add(v.no));
  d.phrases.forEach((p) => texts.add(p.no));
  d.exercises.forEach((e) => {
    if (e.type === 'gap') texts.add(e.sentence.replace('___', e.answers[0]));
    if (e.type === 'order') texts.add(e.words.join(' '));
    if (e.type === 'mcq' && e.audio) texts.add(e.audio);
    if (e.type === 'listen') texts.add(e.audio);
    if (e.type === 'transform') {
      texts.add(e.source);
      const list = e.answers || (e.answer ? [e.answer] : []);
      list.forEach((a) => texts.add(a));
    }
    if (e.type === 'cloze') {
      let i = 0;
      const filled = String(e.text).replace(/___/g, () => {
        const a = e.answers[i++];
        return Array.isArray(a) ? a[0] : a;
      });
      texts.add(filled);
    }
    if (e.type === 'match') {
      e.pairs.forEach((p) => {
        texts.add(p.a);
        if (e.sayB) texts.add(p.b);
      });
    }
  });
}

/* Meldinger: mensajes de WhatsApp (con versión hablada opcional en `say`) */
for (const c of COURSE.chats || []) {
  c.messages.forEach((m) => texts.add(m.say || m.no));
  c.glossary.forEach((g) => texts.add(g.say || g.no));
}

/* Tull & tøys: packs, tabla de palabras y tabla de verbos */
if (COURSE.fun) {
  for (const pack of COURSE.fun.packs) {
    for (const e of pack.exercises) {
      if (e.type === 'gap') texts.add(e.sentence.replace('___', e.answers[0]));
      if (e.type === 'order') texts.add(e.words.join(' '));
      if (e.type === 'mcq' && e.audio) texts.add(e.audio);
      if (e.type === 'listen') texts.add(e.audio);
      if (e.type === 'odd') texts.add(e.options[e.answer]);
      if (e.type === 'fix') texts.add(e.correct);
      if (e.type === 'transform') {
        texts.add(e.source);
        const list = e.answers || (e.answer ? [e.answer] : []);
        list.forEach((a) => texts.add(a));
      }
      if (e.type === 'cloze') {
        let i = 0;
        const filled = String(e.text).replace(/___/g, () => {
          const a = e.answers[i++];
          return Array.isArray(a) ? a[0] : a;
        });
        texts.add(filled);
      }
      if (e.type === 'match' || e.type === 'memory') {
        e.pairs.forEach((p) => {
          texts.add(p.a);
          if (e.sayB) texts.add(p.b);
        });
      }
    }
  }
}
if (COURSE.wordbank) COURSE.wordbank.forEach((w) => texts.add(w.no));
if (COURSE.verbs) COURSE.verbs.forEach((v) => texts.add(v.inf));

/* Simulacro: audios de comprensión y modelos de escritura/oral */
if (COURSE.exam) {
  for (const lv of COURSE.exam.levels) {
    lv.listening.items.forEach((it) => texts.add(it.audio));
    lv.writing.tasks.forEach((tk) => texts.add(tk.model));
    lv.speaking.tasks.forEach((tk) => texts.add(tk.model));
  }
}

const all = [...texts].map((t) => norm(t)).filter(Boolean);
const unique = [...new Set(all)];
mkdirSync(OUT, { recursive: true });
mkdirSync(TMP, { recursive: true });

/* ---------- decidir qué falta ---------- */
const jobs = [];
for (const text of unique) {
  const file = hash(text) + '.mp3';
  const dest = path.join(OUT, file);
  if (FORCE || !existsSync(dest) || statSync(dest).size < 500) {
    jobs.push({ text, file, wav: path.join(TMP, hash(text) + '.wav') });
  }
}

console.log(`Textos únicos: ${unique.length} · a generar: ${jobs.length}`);

/* ---------- sintetizar en un solo proceso Piper ---------- */
if (jobs.length) {
  const jsonl = jobs
    .map((j) => JSON.stringify({ text: j.text, output_file: j.wav }))
    .join('\n') + '\n';

  try {
    execFileSync(PIPER, ['-m', MODEL, '--json-input', '-q', '--length_scale', '1.05'], {
      input: jsonl,
      stdio: ['pipe', 'inherit', 'inherit'],
      maxBuffer: 1024 * 1024 * 8,
    });
  } catch (e) {
    console.error('Piper falló:', e.message);
    process.exit(1);
  }

  for (const j of jobs) {
    if (!existsSync(j.wav)) {
      console.warn('sin WAV:', j.text);
      continue;
    }
    execFileSync('ffmpeg', [
      '-y', '-loglevel', 'error',
      '-i', j.wav,
      '-ac', '1', '-ar', '24000',
      '-c:a', 'libmp3lame', '-b:a', '48k',
      path.join(OUT, j.file),
    ]);
    rmSync(j.wav, { force: true });
  }
}

/* ---------- manifiesto ---------- */
const manifest = {};
for (const text of unique) manifest[text] = hash(text) + '.mp3';

const body =
  '/* Generado por tools/generate-audio.mjs — no editar a mano. */\n' +
  'window.AUDIO_MANIFEST = ' + JSON.stringify(manifest, null, 0) + ';\n';
writeFileSync(MANIFEST, body);

/* ---------- limpiar MP3 que ya no usa el manifiesto ---------- */
const keep = new Set(Object.values(manifest));
let removed = 0;
for (const f of readdirSync(OUT)) {
  if (f.endsWith('.mp3') && !keep.has(f)) {
    rmSync(path.join(OUT, f), { force: true });
    removed++;
  }
}

/* ---------- resumen ---------- */
let bytes = 0;
for (const f of Object.values(manifest)) {
  const p = path.join(OUT, f);
  if (existsSync(p)) bytes += statSync(p).size;
}
try { rmSync(TMP, { recursive: true, force: true }); } catch {}

console.log(`Manifiesto: ${Object.keys(manifest).length} entradas`);
console.log(`Audio total: ${(bytes / 1024 / 1024).toFixed(2)} MB en assets/audio/`);
if (removed) console.log(`Eliminados ${removed} MP3 que ya no se usan`);
console.log(`Escrito: ${path.relative(ROOT, MANIFEST)}`);
