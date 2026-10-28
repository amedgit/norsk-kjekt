#!/usr/bin/env node
/**
 * Genera las ilustraciones SVG de las conversaciones (Samtaler).
 * Mismo estilo plano que las lecciones, sin imágenes externas ni build.
 *
 * Uso: node tools/generate-dialogue-art.mjs
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets/img/dialogues');
mkdirSync(OUT, { recursive: true });

const C = {
  ink: '#12233f',
  navy: '#0e2a47',
  red: '#c8102e',
  blue: '#1f4e79',
  sky: '#dceefb',
  sky2: '#b9d9ef',
  cream: '#f7f2e9',
  sand: '#eadfc9',
  green: '#2f7d5b',
  mint: '#cfe6d8',
  amber: '#e0a43a',
  skin: '#f2c9a8',
  skin2: '#a86b4a',
  skin3: '#6f4634',
  hair: '#2b211c',
  hair2: '#7a4d2d',
  grey: '#8aa0b5',
  white: '#ffffff'
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function svg(title, stops, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" role="img" aria-labelledby="title">
  <title id="title">${esc(title)}</title>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${stops[0]}"/>
      <stop offset="1" stop-color="${stops[1]}"/>
    </linearGradient>
    <clipPath id="round"><rect width="800" height="500" rx="36"/></clipPath>
  </defs>
  <g clip-path="url(#round)">
    <rect width="800" height="500" fill="url(#bg)"/>
${content}
  </g>
</svg>
`;
}

function bubble(x, y, w, h, text, fill = C.white, ink = C.ink) {
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill}" stroke="${ink}" stroke-opacity=".12"/>
    <path d="M${x + 24} ${y + h - 2} l-9 16 l22 -14" fill="${fill}"/>
    <text x="${x + w / 2}" y="${y + h / 2 + 1}" text-anchor="middle" dominant-baseline="middle"
      font-family="ui-sans-serif, system-ui, sans-serif" font-size="${h > 44 ? 23 : 18}" font-weight="800" fill="${ink}">${esc(text)}</text>
  </g>`;
}

function person(x, y, s, opts = {}) {
  const shirt = opts.shirt || C.red;
  const pants = opts.pants || C.navy;
  const skin = opts.skin || C.skin;
  const hair = opts.hair || C.hair;
  const flip = opts.flip ? -1 : 1;
  const wave = opts.wave;
  const arm = wave
    ? `<path d="M22 -92 q30 6 38 -34" fill="none" stroke="${shirt}" stroke-width="14" stroke-linecap="round"/>
       <circle cx="62" cy="-129" r="8" fill="${skin}"/>`
    : `<path d="M22 -92 q18 22 14 42" fill="none" stroke="${shirt}" stroke-width="14" stroke-linecap="round"/>
       <circle cx="36" cy="-47" r="8" fill="${skin}"/>`;
  const headset = opts.headset
    ? `<path d="M-27 -132 a27 27 0 0 1 54 0" fill="none" stroke="${C.navy}" stroke-width="5"/>
       <rect x="-33" y="-136" width="9" height="20" rx="4" fill="${C.navy}"/>
       <path d="M24 -126 q16 18 4 34" fill="none" stroke="${C.navy}" stroke-width="4" stroke-linecap="round"/>
       <circle cx="28" cy="-90" r="4" fill="${C.navy}"/>`
    : '';
  return `<g transform="translate(${x} ${y}) scale(${s * flip} ${s})">
    <ellipse cx="0" cy="7" rx="31" ry="7" fill="${C.ink}" opacity=".12"/>
    <rect x="-23" y="-104" width="46" height="78" rx="21" fill="${shirt}"/>
    <rect x="-21" y="-34" width="16" height="42" rx="8" fill="${pants}"/>
    <rect x="5" y="-34" width="16" height="42" rx="8" fill="${pants}"/>
    <path d="M-22 -92 q-20 20 -14 42" fill="none" stroke="${shirt}" stroke-width="14" stroke-linecap="round"/>
    <circle cx="-35" cy="-47" r="8" fill="${skin}"/>
    ${arm}
    <circle cx="0" cy="-129" r="25" fill="${skin}"/>
    <path d="M-25 -132 a25 25 0 0 1 50 0 q-7 -19 -25 -19 q-18 0 -25 19" fill="${hair}"/>
    <circle cx="-8" cy="-131" r="2.3" fill="${C.ink}"/>
    <circle cx="8" cy="-131" r="2.3" fill="${C.ink}"/>
    <path d="M-7 -120 q7 6 14 0" fill="none" stroke="${C.ink}" stroke-width="2.2" stroke-linecap="round"/>
    ${headset}
  </g>`;
}

function plant(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M0 0 q-34 -26 -22 -70 q30 12 22 70" fill="${C.green}" opacity=".9"/>
    <path d="M0 0 q34 -30 18 -78 q-34 18 -18 78" fill="${C.green}"/>
    <path d="M0 0 q-8 -40 2 -82" fill="none" stroke="${C.navy}" stroke-width="3" opacity=".5"/>
    <path d="M-23 0 h46 l-7 45 h-32 z" fill="${C.amber}"/>
  </g>`;
}

function shelf(x, y, w, h, rows = 3, color = C.sand) {
  let out = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${color}"/>`;
  for (let r = 1; r < rows; r++) {
    const yy = y + (h / rows) * r;
    out += `<rect x="${x + 8}" y="${yy - 4}" width="${w - 16}" height="7" rx="3" fill="${C.navy}" opacity=".28"/>`;
  }
  return out;
}

function goods(x, y, colors) {
  return colors.map((col, i) => {
    const w = 18 + (i % 3) * 4;
    return `<rect x="${x + i * 26}" y="${y - 24 - (i % 2) * 5}" width="${w}" height="${26 + (i % 2) * 5}" rx="4" fill="${col}"/>`;
  }).join('');
}

/* ------------------------------------------------------------------ 1 */
const oppgangen = svg('Dos vecinos conversando en el portal de un edificio', ['#e9f1f8', '#f7f2e9'], `
  <rect x="0" y="0" width="800" height="500" fill="${C.cream}"/>
  <rect x="0" y="372" width="800" height="128" fill="${C.navy}" opacity=".14"/>
  <rect x="0" y="366" width="800" height="8" fill="${C.navy}" opacity=".2"/>
  <rect x="40" y="64" width="210" height="308" rx="10" fill="${C.sand}"/>
  <rect x="58" y="82" width="174" height="272" rx="6" fill="${C.navy}"/>
  <circle cx="216" cy="222" r="6" fill="${C.amber}"/>
  <rect x="550" y="64" width="210" height="308" rx="10" fill="${C.sand}"/>
  <rect x="568" y="82" width="174" height="272" rx="6" fill="${C.blue}"/>
  <circle cx="586" cy="222" r="6" fill="${C.amber}"/>
  <rect x="300" y="112" width="200" height="92" rx="8" fill="${C.white}" stroke="${C.ink}" stroke-opacity=".1"/>
  ${[0, 1, 2].map((i) => `<rect x="${314 + i * 62}" y="128" width="48" height="26" rx="4" fill="${C.grey}" opacity=".55"/>
    <rect x="${314 + i * 62}" y="162" width="48" height="26" rx="4" fill="${C.grey}" opacity=".35"/>`).join('')}
  <text x="400" y="238" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="700" fill="${C.navy}" opacity=".55">POST</text>
  <rect x="300" y="300" width="96" height="72" rx="8" fill="${C.amber}"/>
  <path d="M300 312 l48 34 l48 -34" fill="none" stroke="${C.navy}" stroke-width="4" opacity=".5"/>
  <rect x="410" y="322" width="78" height="50" rx="7" fill="${C.green}"/>
  <rect x="424" y="334" width="50" height="8" rx="4" fill="${C.mint}"/>
  <rect x="424" y="348" width="34" height="8" rx="4" fill="${C.mint}" opacity=".7"/>
  ${plant(710, 350, 1.05)}
  ${person(322, 440, 1.02, { shirt: C.red, hair: C.hair2, wave: true })}
  ${person(482, 446, 1.06, { shirt: C.blue, skin: C.skin3, hair: C.hair, wave: true, flip: true })}
  ${bubble(246, 138, 110, 46, 'Hei!')}
  ${bubble(470, 184, 144, 46, 'Hei hei!')}
  <ellipse cx="400" cy="462" rx="300" ry="20" fill="${C.navy}" opacity=".1"/>
`);

/* ------------------------------------------------------------------ 2 */
const kafeen = svg('Dos personas pidiendo café en una cafetería noruega', ['#fdf3e7', '#f0dfca'], `
  <rect x="54" y="62" width="692" height="310" rx="20" fill="${C.cream}" stroke="${C.ink}" stroke-opacity=".08"/>
  <rect x="84" y="90" width="632" height="86" rx="10" fill="${C.navy}"/>
  <text x="400" y="128" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="24" font-weight="800" fill="${C.cream}" letter-spacing="2">KAFFEBAR</text>
  <text x="400" y="154" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" fill="${C.sky}" opacity=".8">kanelboller · kaffe · te</text>
  <rect x="84" y="320" width="632" height="34" rx="8" fill="${C.sand}"/>
  <rect x="84" y="354" width="632" height="74" fill="${C.navy}" opacity=".18"/>
  <rect x="120" y="246" width="120" height="74" rx="8" fill="${C.grey}"/>
  <rect x="134" y="258" width="92" height="34" rx="5" fill="${C.navy}"/>
  <circle cx="180" cy="302" r="12" fill="${C.red}"/>
  <rect x="280" y="276" width="46" height="44" rx="6" fill="${C.white}"/>
  <path d="M326 288 q18 0 0 20" fill="none" stroke="${C.white}" stroke-width="7"/>
  <rect x="350" y="288" width="46" height="32" rx="6" fill="${C.white}"/>
  <path d="M396 296 q16 0 0 16" fill="none" stroke="${C.white}" stroke-width="7"/>
  <g>
    <ellipse cx="470" cy="312" rx="34" ry="12" fill="${C.amber}"/>
    <path d="M440 304 q30 -24 60 0 q-8 18 -30 18 q-22 0 -30 -18" fill="${C.amber}"/>
    <path d="M452 296 q18 -14 36 0" fill="none" stroke="${C.white}" stroke-width="4" opacity=".7"/>
  </g>
  <g>
    <ellipse cx="556" cy="314" rx="30" ry="11" fill="${C.amber}"/>
    <path d="M530 306 q26 -22 52 0 q-7 16 -26 16 q-19 0 -26 -16" fill="${C.amber}"/>
  </g>
  ${plant(660, 320, .9)}
  ${person(606, 444, 1.05, { shirt: C.green, skin: C.skin2, hair: C.hair, flip: true })}
  ${person(258, 446, 1.08, { shirt: C.red, hair: C.hair2 })}
  ${bubble(508, 184, 168, 48, 'En kaffe, takk')}
  ${bubble(190, 214, 130, 46, 'Hva skal du ha?')}
  <ellipse cx="400" cy="462" rx="300" ry="20" fill="${C.navy}" opacity=".1"/>
`);

/* ------------------------------------------------------------------ 3 */
const butikken = svg('Cliente y dependienta en un supermercado noruego', ['#eef6f1', '#f7f2e9'], `
  <rect x="40" y="56" width="720" height="316" rx="18" fill="${C.cream}" stroke="${C.ink}" stroke-opacity=".08"/>
  ${shelf(70, 90, 210, 250, 3)}
  ${goods(84, 168, [C.red, C.blue, C.amber, C.green, C.red])}
  ${goods(84, 248, [C.green, C.amber, C.red, C.blue])}
  ${goods(84, 328, [C.blue, C.red, C.green, C.amber])}
  ${shelf(520, 90, 210, 250, 3)}
  ${goods(534, 168, [C.amber, C.green, C.red, C.blue])}
  ${goods(534, 248, [C.red, C.blue, C.amber, C.green])}
  ${goods(534, 328, [C.green, C.red, C.blue, C.amber])}
  <rect x="310" y="250" width="180" height="116" rx="10" fill="${C.white}" stroke="${C.ink}" stroke-opacity=".1"/>
  <rect x="330" y="272" width="140" height="10" rx="5" fill="${C.sky2}"/>
  <rect x="330" y="292" width="110" height="10" rx="5" fill="${C.sky2}" opacity=".7"/>
  <rect x="330" y="312" width="126" height="10" rx="5" fill="${C.sky2}" opacity=".5"/>
  <text x="400" y="346" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="800" fill="${C.red}">TILBUD</text>
  <rect x="300" y="394" width="200" height="36" rx="8" fill="${C.navy}" opacity=".16"/>
  <rect x="342" y="392" width="56" height="48" rx="6" fill="${C.white}"/>
  <rect x="356" y="404" width="28" height="12" rx="3" fill="${C.sky2}"/>
  <rect x="356" y="420" width="28" height="12" rx="3" fill="${C.sky2}"/>
  <rect x="430" y="408" width="76" height="34" rx="6" fill="${C.green}"/>
  <path d="M430 414 h76" stroke="${C.mint}" stroke-width="5"/>
  ${person(286, 442, 1.02, { shirt: C.red, hair: C.hair2 })}
  ${person(520, 444, 1.04, { shirt: C.blue, skin: C.skin2, hair: C.hair, flip: true })}
  ${bubble(214, 116, 190, 46, 'Hvor finner jeg melk?')}
  ${bubble(468, 176, 176, 46, 'I kjøleskapet!')}
  <ellipse cx="400" cy="462" rx="310" ry="20" fill="${C.navy}" opacity=".1"/>
`);

/* ------------------------------------------------------------------ 4 */
const jobben = svg('Jefe y empleado hablando en una oficina', ['#e8eff8', '#eef7f2'], `
  <rect x="40" y="54" width="720" height="330" rx="18" fill="${C.white}" stroke="${C.ink}" stroke-opacity=".08"/>
  <rect x="70" y="78" width="270" height="170" rx="10" fill="${C.navy}"/>
  <rect x="90" y="100" width="180" height="10" rx="5" fill="${C.sky}" opacity=".85"/>
  <rect x="90" y="122" width="220" height="8" rx="4" fill="${C.sky}" opacity=".5"/>
  <rect x="90" y="140" width="160" height="8" rx="4" fill="${C.sky}" opacity=".5"/>
  <rect x="90" y="168" width="96" height="52" rx="6" fill="${C.mint}" opacity=".8"/>
  <rect x="198" y="168" width="96" height="52" rx="6" fill="${C.amber}" opacity=".7"/>
  <rect x="430" y="92" width="290" height="14" rx="7" fill="${C.sand}"/>
  <rect x="430" y="120" width="210" height="10" rx="5" fill="${C.sand}" opacity=".7"/>
  <rect x="360" y="282" width="360" height="26" rx="8" fill="${C.sand}"/>
  <rect x="392" y="306" width="26" height="92" rx="8" fill="${C.navy}" opacity=".5"/>
  <rect x="662" y="306" width="26" height="92" rx="8" fill="${C.navy}" opacity=".5"/>
  <rect x="430" y="234" width="120" height="48" rx="6" fill="${C.navy}"/>
  <rect x="444" y="246" width="92" height="26" rx="3" fill="${C.sky}"/>
  <rect x="580" y="252" width="64" height="30" rx="4" fill="${C.white}" stroke="${C.ink}" stroke-opacity=".1"/>
  <rect x="590" y="260" width="44" height="5" rx="2" fill="${C.grey}" opacity=".5"/>
  <rect x="590" y="270" width="30" height="5" rx="2" fill="${C.grey}" opacity=".5"/>
  ${plant(700, 282, .85)}
  ${person(236, 446, 1.06, { shirt: C.blue, hair: C.hair2 })}
  ${person(540, 446, 1.08, { shirt: C.red, skin: C.skin2, hair: C.hair, flip: true })}
  ${bubble(150, 128, 196, 46, 'Har du tid?')}
  ${bubble(470, 160, 190, 46, 'Tvert imot!')}
  <ellipse cx="400" cy="462" rx="310" ry="20" fill="${C.navy}" opacity=".1"/>
`);

/* ------------------------------------------------------------------ 5 */
const lege = svg('Médica examinando a un paciente en una consulta', ['#e6f4ee', '#f7f2e9'], `
  <rect x="40" y="52" width="720" height="332" rx="18" fill="${C.white}" stroke="${C.ink}" stroke-opacity=".08"/>
  <rect x="70" y="78" width="150" height="110" rx="8" fill="${C.cream}" stroke="${C.ink}" stroke-opacity=".1"/>
  <rect x="86" y="94" width="118" height="8" rx="4" fill="${C.grey}" opacity=".5"/>
  <rect x="86" y="112" width="86" height="8" rx="4" fill="${C.grey}" opacity=".4"/>
  <rect x="86" y="138" width="52" height="34" rx="5" fill="${C.red}" opacity=".8"/>
  <rect x="146" y="138" width="52" height="34" rx="5" fill="${C.sky2}" opacity=".8"/>
  <rect x="70" y="214" width="96" height="146" rx="8" fill="${C.sand}"/>
  <rect x="86" y="230" width="64" height="20" rx="4" fill="${C.white}"/>
  <rect x="86" y="258" width="64" height="20" rx="4" fill="${C.white}"/>
  <rect x="86" y="286" width="64" height="20" rx="4" fill="${C.white}"/>
  <rect x="86" y="314" width="64" height="20" rx="4" fill="${C.white}"/>
  <rect x="390" y="330" width="250" height="28" rx="8" fill="${C.sky2}"/>
  <rect x="414" y="358" width="20" height="78" rx="7" fill="${C.navy}" opacity=".5"/>
  <rect x="596" y="358" width="20" height="78" rx="7" fill="${C.navy}" opacity=".5"/>
  <rect x="436" y="250" width="160" height="24" rx="10" fill="${C.white}" stroke="${C.ink}" stroke-opacity=".12"/>
  <path d="M470 262 h92" stroke="${C.blue}" stroke-width="5" stroke-linecap="round"/>
  ${plant(700, 330, 1)}
  ${person(322, 444, 1.1, { shirt: C.green, skin: C.skin2, hair: C.hair })}
  ${person(548, 444, 1.02, { shirt: C.red, hair: C.hair2, flip: true })}
  <path d="M322 330 q-16 20 0 36 q16 -16 0 -36" fill="${C.white}" opacity=".9"/>
  ${bubble(196, 132, 184, 46, 'Pust dypt inn.')}
  ${bubble(498, 178, 170, 46, 'Gjør det vondt?')}
  <ellipse cx="400" cy="462" rx="300" ry="20" fill="${C.navy}" opacity=".1"/>
`);

/* ------------------------------------------------------------------ 6 */
const telefonen = svg('Persona cambiando una cita por teléfono', ['#f1ecf7', '#eef2f7'], `
  <rect x="40" y="54" width="720" height="330" rx="18" fill="${C.white}" stroke="${C.ink}" stroke-opacity=".08"/>
  <rect x="70" y="78" width="300" height="286" rx="12" fill="${C.navy}"/>
  <rect x="94" y="102" width="252" height="46" rx="8" fill="${C.blue}"/>
  <text x="220" y="132" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="18" font-weight="800" fill="${C.white}">TIRSDAG</text>
  ${[0, 1, 2, 3].map((r) => [0, 1, 2, 3, 4, 5].map((c) => {
    const x = 100 + c * 40;
    const y = 172 + r * 44;
    const hot = r === 1 && c === 2;
    return `<rect x="${x}" y="${y}" width="30" height="30" rx="6" fill="${hot ? C.amber : C.sky}" opacity="${hot ? 1 : .18}"/>`;
  }).join('')).join('')}
  <text x="220" y="352" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700" fill="${C.sky}" opacity=".8">klokka ti · ledig</text>
  <rect x="430" y="150" width="190" height="300" rx="26" fill="${C.ink}"/>
  <rect x="444" y="174" width="162" height="246" rx="12" fill="${C.sky}"/>
  <rect x="470" y="198" width="110" height="16" rx="8" fill="${C.white}" opacity=".9"/>
  <rect x="470" y="228" width="80" height="12" rx="6" fill="${C.white}" opacity=".7"/>
  <rect x="470" y="256" width="110" height="52" rx="8" fill="${C.mint}"/>
  <circle cx="524" cy="386" r="10" fill="${C.grey}"/>
  ${person(660, 444, 1.02, { shirt: C.red, skin: C.skin3, hair: C.hair, headset: true, flip: true })}
  ${bubble(388, 92, 190, 46, 'Halv tre?')}
  ${bubble(560, 222, 170, 46, 'Det passer!')}
  <ellipse cx="400" cy="462" rx="310" ry="20" fill="${C.navy}" opacity=".1"/>
`);

const files = { oppgangen, kafeen, butikken, jobben, lege, telefonen };

for (const [id, content] of Object.entries(files)) {
  writeFileSync(path.join(OUT, id + '.svg'), content);
  console.log('escrito', path.relative(ROOT, path.join(OUT, id + '.svg')));
}
