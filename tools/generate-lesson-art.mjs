#!/usr/bin/env node
/**
 * Genera las ilustraciones SVG de las lecciones.
 * Son deliberadamente planas y locales: no hay imágenes externas ni build.
 *
 * Uso: node tools/generate-lesson-art.mjs
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets/img/lessons');
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
      font-family="ui-sans-serif, system-ui, sans-serif" font-size="${h > 44 ? 24 : 19}" font-weight="800" fill="${ink}">${esc(text)}</text>
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

function cloud(x, y, s, color = C.white) {
  return `<g transform="translate(${x} ${y}) scale(${s})" fill="${color}">
    <circle cx="0" cy="0" r="30"/><circle cx="34" cy="-8" r="38"/><circle cx="74" cy="4" r="26"/>
    <rect x="0" y="0" width="74" height="30" rx="15"/>
  </g>`;
}

function house(x, y, w, h, wall, roof, door = C.navy) {
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${wall}"/>
    <path d="M${x - 14} ${y + 2} L${x + w / 2} ${y - 54} L${x + w + 14} ${y + 2} Z" fill="${roof}"/>
    <rect x="${x + 17}" y="${y + 24}" width="30" height="30" rx="4" fill="${C.sky}"/>
    <rect x="${x + w - 47}" y="${y + 24}" width="30" height="30" rx="4" fill="${C.sky}"/>
    <rect x="${x + w / 2 - 14}" y="${y + h - 46}" width="28" height="46" rx="4" fill="${door}"/>
    <circle cx="${x + w / 2 + 7}" cy="${y + h - 22}" r="2.4" fill="${C.amber}"/>
  </g>`;
}

/* ------------------------------------------------------------------ 1 */
const hei = svg('Dos personas saludándose delante de casas noruegas', ['#e7f3fb', '#f7f2e9'], `
  <circle cx="680" cy="88" r="44" fill="${C.amber}" opacity=".9"/>
  <circle cx="680" cy="88" r="62" fill="${C.amber}" opacity=".16"/>
  <path d="M0 360 q140 -90 290 -18 q150 72 280 4 q130 -68 230 -2 v156 H0 Z" fill="${C.mint}"/>
  <path d="M0 402 q180 -70 370 0 q190 70 430 -6 v104 H0 Z" fill="${C.green}" opacity=".55"/>
  ${house(80, 236, 150, 136, C.red, C.navy)}
  ${house(265, 214, 170, 158, C.amber, C.cream)}
  ${house(470, 246, 146, 126, C.blue, C.red)}
  <g opacity=".8">
    <path d="M600 155 q18 -16 36 0 q18 -16 36 0" fill="none" stroke="${C.navy}" stroke-width="4" stroke-linecap="round"/>
    <path d="M645 190 q14 -12 28 0 q14 -12 28 0" fill="none" stroke="${C.navy}" stroke-width="3" stroke-linecap="round"/>
  </g>
  ${person(248, 402, 1.05, { shirt: C.red, hair: C.hair2, wave: true })}
  ${person(570, 410, 1.12, { shirt: C.blue, skin: C.skin3, hair: C.hair, wave: true, flip: true })}
  ${bubble(180, 138, 122, 48, 'Hei!')}
  ${bubble(576, 168, 154, 48, 'Hei hei!')}
  <ellipse cx="410" cy="452" rx="330" ry="24" fill="${C.navy}" opacity=".08"/>
`);

/* ------------------------------------------------------------------ 2 */
const kafe = svg('Cafetería noruega con café y rollo de canela', ['#fdf3e7', '#f0dfca'], `
  <rect x="54" y="80" width="692" height="330" rx="24" fill="${C.cream}" stroke="${C.ink}" stroke-opacity=".08"/>
  <rect x="84" y="108" width="632" height="120" rx="14" fill="${C.navy}"/>
  <g>
    ${Array.from({ length: 9 }, (_, i) => `<rect x="${84 + i * 70}" y="108" width="35" height="58" fill="${i % 2 ? C.cream : C.red}"/>`).join('')}
  </g>
  <text x="400" y="199" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="36" font-weight="800" fill="${C.white}" letter-spacing="6">KAFFE</text>
  <rect x="112" y="258" width="256" height="112" rx="12" fill="${C.sky}" stroke="${C.navy}" stroke-width="8"/>
  <path d="M112 314 h256 M240 258 v112" stroke="${C.navy}" stroke-width="6" opacity=".3"/>
  <rect x="402" y="282" width="284" height="18" rx="9" fill="${C.sand}" stroke="${C.ink}" stroke-opacity=".1"/>
  <rect x="430" y="226" width="74" height="56" rx="8" fill="${C.navy}"/>
  <rect x="445" y="240" width="44" height="26" rx="4" fill="${C.blue}"/>
  <circle cx="467" cy="234" r="9" fill="${C.amber}"/>
  <rect x="528" y="236" width="58" height="46" rx="8" fill="${C.red}"/>
  <path d="M546 250 q10 10 0 20 q-10 10 0 20" fill="none" stroke="${C.white}" stroke-width="3" opacity=".55"/>
  <g transform="translate(640 250)">
    <ellipse cx="0" cy="30" rx="40" ry="10" fill="${C.ink}" opacity=".1"/>
    <ellipse cx="0" cy="4" rx="33" ry="10" fill="${C.cream}" stroke="${C.ink}" stroke-opacity=".15"/>
    <path d="M-23 0 q0 38 23 38 q23 0 23 -38" fill="${C.white}" stroke="${C.ink}" stroke-opacity=".15"/>
    <path d="M0 -12 q-10 12 0 22 q10 -10 0 -22" fill="${C.amber}"/>
  </g>
  ${person(170, 444, 1.08, { shirt: C.amber, hair: C.hair2 })}
  ${person(300, 444, 1.03, { shirt: C.red, skin: C.skin3, hair: C.hair, flip: true })}
  ${bubble(452, 92, 160, 46, 'Kaffe?', C.white)}
  ${plant(704, 386, .9)}
  <path d="M0 452 h800" stroke="${C.navy}" stroke-width="2" opacity=".1"/>
`);

/* ------------------------------------------------------------------ 3 */
const butikk = svg('Tienda noruega con estanterías, cesta y caja', ['#eef6f1', '#f7f2e9'], `
  <rect x="46" y="66" width="708" height="338" rx="22" fill="${C.white}" opacity=".7"/>
  <rect x="76" y="96" width="280" height="18" rx="9" fill="${C.green}"/>
  <rect x="76" y="184" width="280" height="18" rx="9" fill="${C.green}"/>
  <rect x="76" y="272" width="280" height="18" rx="9" fill="${C.green}"/>
  ${[0, 1, 2, 3, 4].map(i => `<rect x="${94 + i * 50}" y="${124 - (i % 2) * 8}" width="32" height="${52 + (i % 2) * 8}" rx="6" fill="${[C.red, C.amber, C.blue, C.green, C.red][i]}"/>`).join('')}
  ${[0, 1, 2, 3, 4].map(i => `<rect x="${94 + i * 50}" y="${212 - (i % 2) * 10}" width="32" height="${52 + (i % 2) * 10}" rx="6" fill="${[C.blue, C.green, C.red, C.amber, C.blue][i]}"/>`).join('')}
  ${[0, 1, 2, 3, 4].map(i => `<circle cx="${110 + i * 50}" cy="${292}" r="16" fill="${[C.amber, C.red, C.green, C.blue, C.amber][i]}"/>`).join('')}
  <rect x="390" y="116" width="320" height="252" rx="16" fill="${C.cream}" opacity=".65"/>
  <rect x="424" y="184" width="252" height="18" rx="9" fill="${C.sand}"/>
  <rect x="424" y="244" width="252" height="18" rx="9" fill="${C.sand}"/>
  <rect x="424" y="304" width="252" height="18" rx="9" fill="${C.sand}"/>
  ${[0, 1, 2, 3].map(i => `<rect x="${444 + i * 58}" y="${132}" width="38" height="52" rx="7" fill="${[C.red, C.green, C.blue, C.amber][i]}"/>`).join('')}
  ${[0, 1, 2, 3].map(i => `<rect x="${444 + i * 58}" y="${196}" width="38" height="48" rx="7" fill="${[C.blue, C.amber, C.red, C.green][i]}"/>`).join('')}
  <rect x="110" y="360" width="580" height="54" rx="12" fill="${C.navy}"/>
  <rect x="460" y="330" width="84" height="54" rx="8" fill="${C.ink}"/>
  <rect x="472" y="340" width="60" height="18" rx="3" fill="${C.mint}"/>
  <circle cx="610" cy="362" r="24" fill="${C.amber}" stroke="${C.cream}" stroke-width="6"/>
  <text x="610" y="369" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="18" font-weight="800" fill="${C.navy}">kr</text>
  ${person(228, 450, 1.08, { shirt: C.red, hair: C.hair, wave: false })}
  <g transform="translate(300 360)">
    <path d="M0 0 h48 l-10 48 h-30 z" fill="${C.amber}"/>
    <path d="M8 0 q4 -30 24 -30 q20 0 16 30" fill="none" stroke="${C.navy}" stroke-width="4"/>
    <rect x="8" y="8" width="30" height="10" rx="4" fill="${C.white}" opacity=".7"/>
  </g>
  ${person(560, 450, 1.05, { shirt: C.blue, skin: C.skin2, hair: C.hair2, flip: true })}
  ${bubble(84, 30, 156, 44, 'Butikk', C.white)}
`);

/* ------------------------------------------------------------------ 4 */
const buss = svg('Autobús urbano en una parada bajo la lluvia', ['#dbeaf5', '#eef3f7'], `
  <g opacity=".75">
    <rect x="34" y="150" width="90" height="180" rx="6" fill="${C.blue}"/>
    <rect x="136" y="108" width="72" height="222" rx="6" fill="${C.navy}"/>
    <rect x="632" y="126" width="120" height="204" rx="6" fill="${C.blue}"/>
    <rect x="670" y="94" width="48" height="32" rx="4" fill="${C.navy}"/>
    ${[0, 1, 2, 3].map(i => `<rect x="${46 + (i % 2) * 40}" y="${170 + Math.floor(i / 2) * 48}" width="24" height="26" fill="${C.amber}" opacity=".8"/>`).join('')}
    ${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${148 + (i % 2) * 30}" y="${128 + Math.floor(i / 2) * 48}" width="18" height="24" fill="${C.sky}" opacity=".8"/>`).join('')}
  </g>
  <rect x="0" y="330" width="800" height="170" fill="${C.grey}" opacity=".2"/>
  <path d="M0 362 h800" stroke="${C.white}" stroke-width="4" stroke-dasharray="28 24" opacity=".7"/>
  <g>
    <rect x="170" y="218" width="460" height="150" rx="26" fill="${C.red}"/>
    <rect x="190" y="236" width="420" height="62" rx="10" fill="${C.sky}"/>
    <path d="M410 236 v62 M562 236 v62" stroke="${C.red}" stroke-width="8"/>
    <rect x="190" y="316" width="420" height="24" rx="8" fill="${C.cream}" opacity=".85"/>
    <text x="322" y="334" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="800" fill="${C.navy}">31</text>
    <text x="456" y="334" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="700" fill="${C.navy}">SENTRUM</text>
    <circle cx="240" cy="372" r="28" fill="${C.ink}"/><circle cx="240" cy="372" r="13" fill="${C.grey}"/>
    <circle cx="560" cy="372" r="28" fill="${C.ink}"/><circle cx="560" cy="372" r="13" fill="${C.grey}"/>
    <rect x="630" y="246" width="42" height="24" rx="6" fill="${C.amber}"/>
    <circle cx="694" cy="300" r="10" fill="${C.amber}"/>
  </g>
  <g>
    <rect x="70" y="236" width="8" height="130" fill="${C.navy}"/>
    <rect x="48" y="214" width="52" height="44" rx="8" fill="${C.blue}"/>
    <circle cx="74" cy="236" r="13" fill="${C.white}"/>
    <path d="M70 230 h8 M74 226 v20" stroke="${C.blue}" stroke-width="3"/>
  </g>
  ${person(112, 420, 1.02, { shirt: C.amber, hair: C.hair2 })}
  <g transform="translate(118 350)">
    <path d="M0 0 q34 -40 68 0 q-34 -10 -34 34 q0 -44 -34 -34" fill="${C.blue}"/>
    <path d="M34 34 v56" stroke="${C.navy}" stroke-width="4"/>
  </g>
  <g opacity=".45" stroke="${C.white}" stroke-width="4" stroke-linecap="round">
    <path d="M110 120 l-16 34 M180 96 l-16 34 M250 130 l-16 34 M700 88 l-16 34 M748 130 l-16 34"/>
  </g>
`);

/* ------------------------------------------------------------------ 5 */
const vaer = svg('Paisaje noruego con sol, lluvia, nieve y una persona con impermeable', ['#e2f1fb', '#f7f2e9'], `
  <circle cx="646" cy="104" r="52" fill="${C.amber}"/>
  <circle cx="646" cy="104" r="74" fill="${C.amber}" opacity=".15"/>
  ${cloud(500, 92, .95, C.white)}
  <path d="M500 142 h170" stroke="${C.blue}" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 16" opacity=".65"/>
  <g fill="${C.white}" opacity=".92">
    <circle cx="540" cy="180" r="3"/><circle cx="570" cy="198" r="3"/><circle cx="606" cy="172" r="3"/>
    <circle cx="636" cy="202" r="3"/><circle cx="670" cy="178" r="3"/><circle cx="700" cy="208" r="3"/>
  </g>
  <path d="M0 330 L120 190 L230 310 L330 170 L460 330 Z" fill="${C.blue}" opacity=".85"/>
  <path d="M330 330 L470 210 L590 330 Z" fill="${C.green}" opacity=".72"/>
  <path d="M120 190 l28 46 l-18 -4 l-14 22 l-14 -22 l-18 4 Z" fill="${C.white}" opacity=".9"/>
  <path d="M330 170 l26 44 l-16 -4 l-12 20 l-13 -20 l-16 4 Z" fill="${C.white}" opacity=".9"/>
  <path d="M0 346 q200 -50 400 0 q200 50 400 0 v154 H0 Z" fill="${C.mint}"/>
  <path d="M0 392 q200 -40 400 0 q200 40 400 0 v108 H0 Z" fill="${C.green}" opacity=".55"/>
  <path d="M0 430 q220 -32 430 0 q180 26 370 -6 v76 H0 Z" fill="${C.sky2}" opacity=".75"/>
  <g transform="translate(382 286)">
    <path d="M-48 26 q0 -56 48 -56 q48 0 48 56 z" fill="${C.amber}"/>
    <rect x="-16" y="26" width="32" height="54" rx="8" fill="${C.amber}"/>
    <path d="M-48 26 q48 -22 96 0" fill="none" stroke="${C.white}" stroke-width="4" opacity=".7"/>
    <path d="M48 10 q30 -24 54 6 q-26 -6 -30 22" fill="${C.blue}"/>
    <path d="M78 18 v72" stroke="${C.navy}" stroke-width="4"/>
  </g>
  ${person(382, 430, .86, { shirt: C.amber, hair: C.hair2 })}
  <g stroke="${C.white}" stroke-width="3" stroke-linecap="round" opacity=".9">
    <path d="M170 116 q26 -14 52 0 M200 138 q22 -12 44 0"/>
    <path d="M70 190 q22 -12 44 0 M96 210 q18 -10 36 0"/>
  </g>
  <text x="76" y="96" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="800" fill="${C.navy}" opacity=".55">VÆR</text>
`);

/* ------------------------------------------------------------------ 6 */
const jobb = svg('Entrevista de trabajo en una oficina luminosa', ['#e9f0f8', '#f7f2e9'], `
  <rect x="58" y="64" width="684" height="344" rx="22" fill="${C.white}" opacity=".72"/>
  <rect x="92" y="96" width="300" height="190" rx="10" fill="${C.sky}" stroke="${C.navy}" stroke-width="8"/>
  <path d="M92 240 L180 150 L250 220 L314 140 L392 240 Z" fill="${C.blue}" opacity=".7"/>
  <path d="M92 240 h300" stroke="${C.navy}" stroke-width="8"/>
  <rect x="148" y="118" width="46" height="60" rx="3" fill="${C.navy}" opacity=".65"/>
  <rect x="218" y="144" width="36" height="34" rx="3" fill="${C.navy}" opacity=".5"/>
  <circle cx="664" cy="138" r="36" fill="${C.amber}" opacity=".8"/>
  <rect x="92" y="318" width="610" height="18" rx="9" fill="${C.sand}"/>
  <rect x="116" y="336" width="26" height="46" fill="${C.navy}" opacity=".35"/>
  <rect x="640" y="336" width="26" height="46" fill="${C.navy}" opacity=".35"/>
  <g transform="translate(430 300)">
    <rect x="-40" y="-18" width="80" height="54" rx="6" fill="${C.navy}"/>
    <rect x="-32" y="-10" width="64" height="34" rx="3" fill="${C.blue}"/>
    <rect x="-54" y="36" width="108" height="6" rx="3" fill="${C.ink}"/>
  </g>
  <rect x="552" y="290" width="110" height="14" rx="4" fill="${C.white}"/>
  <rect x="560" y="304" width="94" height="10" rx="3" fill="${C.red}" opacity=".55"/>
  ${person(250, 400, 1.02, { shirt: C.blue, hair: C.hair2 })}
  ${person(560, 408, 1.06, { shirt: C.red, skin: C.skin3, hair: C.hair, flip: true })}
  ${bubble(320, 84, 274, 46, 'Fortell om deg selv')}
  ${plant(700, 414, .82)}
  <text x="470" y="262" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="800" fill="${C.navy}" opacity=".5">CV</text>
`);

/* ------------------------------------------------------------------ 7 */
const lege = svg('Consulta médica con médica, paciente y medicinas', ['#e6f4ee', '#f7f2e9'], `
  <rect x="50" y="70" width="700" height="340" rx="22" fill="${C.white}" opacity=".72"/>
  <rect x="84" y="100" width="240" height="150" rx="10" fill="${C.sky}" stroke="${C.navy}" stroke-width="7"/>
  <path d="M84 210 q60 -50 120 -8 q60 42 120 -18 v66 H84 Z" fill="${C.green}" opacity=".55"/>
  <rect x="580" y="100" width="120" height="150" rx="10" fill="${C.mint}" stroke="${C.green}" stroke-width="5"/>
  <path d="M640 120 v110 M585 175 h110" stroke="${C.green}" stroke-width="22" opacity=".8"/>
  <rect x="100" y="310" width="280" height="34" rx="17" fill="${C.blue}"/>
  <rect x="120" y="344" width="12" height="48" fill="${C.navy}" opacity=".4"/>
  <rect x="350" y="344" width="12" height="48" fill="${C.navy}" opacity=".4"/>
  <rect x="418" y="286" width="140" height="14" rx="4" fill="${C.white}"/>
  <rect x="430" y="300" width="116" height="8" rx="3" fill="${C.red}" opacity=".55"/>
  <rect x="430" y="314" width="90" height="8" rx="3" fill="${C.blue}" opacity=".4"/>
  <g transform="translate(610 300)">
    <rect x="0" y="0" width="38" height="64" rx="8" fill="${C.white}" stroke="${C.ink}" stroke-opacity=".15"/>
    <rect x="8" y="-10" width="22" height="14" rx="4" fill="${C.blue}"/>
    <path d="M10 22 h18 M10 34 h18" stroke="${C.red}" stroke-width="3" opacity=".6"/>
  </g>
  ${person(220, 408, 1.04, { shirt: C.white, pants: C.blue, hair: C.hair2 })}
  <g transform="translate(220 292)">
    <path d="M-28 0 q0 30 28 30 q28 0 28 -30" fill="none" stroke="${C.ink}" stroke-width="4"/>
    <circle cx="0" cy="36" r="7" fill="${C.ink}"/>
    <path d="M-8 36 h16" stroke="${C.ink}" stroke-width="4"/>
  </g>
  ${person(520, 412, 1.02, { shirt: C.red, skin: C.skin2, hair: C.hair, flip: true })}
  ${plant(720, 420, .8)}
  <text x="92" y="86" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="800" fill="${C.green}" opacity=".65">LEGE</text>
`);

/* ------------------------------------------------------------------ 8 */
const bolig = svg('Casa noruega con llaves y cajas de mudanza', ['#f7efe1', '#e8f0e9'], `
  <circle cx="690" cy="92" r="46" fill="${C.amber}" opacity=".85"/>
  <path d="M0 356 q160 -54 330 0 q180 58 470 -12 v156 H0 Z" fill="${C.mint}"/>
  <path d="M0 414 q190 -40 390 0 q210 42 410 -4 v90 H0 Z" fill="${C.green}" opacity=".52"/>
  ${house(110, 212, 250, 196, C.red, C.navy)}
  <rect x="268" y="288" width="74" height="28" rx="4" fill="${C.white}"/>
  <text x="305" y="308" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="800" fill="${C.red}">TIL LEIE</text>
  <g transform="translate(510 268) rotate(-12)">
    <circle cx="0" cy="0" r="42" fill="none" stroke="${C.amber}" stroke-width="13"/>
    <circle cx="0" cy="0" r="42" fill="none" stroke="${C.white}" stroke-width="4" opacity=".3"/>
    <rect x="34" y="-7" width="96" height="14" rx="7" fill="${C.amber}"/>
    <path d="M124 0 h18 M124 0 v18 M124 0 v-18" stroke="${C.amber}" stroke-width="10" stroke-linecap="round"/>
  </g>
  <g transform="translate(486 372)">
    <rect x="0" y="0" width="104" height="76" rx="6" fill="${C.sand}" stroke="${C.ink}" stroke-opacity=".12"/>
    <path d="M0 20 h104" stroke="${C.ink}" stroke-width="2" opacity=".12"/>
    <path d="M52 0 v76" stroke="${C.ink}" stroke-width="2" opacity=".12"/>
    <path d="M0 0 l104 76 M104 0 L0 76" stroke="${C.ink}" stroke-width="2" opacity=".08"/>
  </g>
  ${person(612, 438, 1.04, { shirt: C.blue, hair: C.hair2 })}
  ${person(708, 442, .98, { shirt: C.amber, skin: C.skin3, hair: C.hair, flip: true })}
  ${bubble(82, 72, 196, 44, 'Bolig')}
  ${plant(72, 424, .86)}
`);

/* ------------------------------------------------------------------ 9 */
const nyheter = svg('Periódico, móvil con alerta y café sobre una mesa', ['#eaf1f8', '#f7f2e9'], `
  <rect x="0" y="330" width="800" height="170" fill="${C.sand}" opacity=".55"/>
  <rect x="0" y="360" width="800" height="140" fill="${C.cream}"/>
  <path d="M0 386 h800" stroke="${C.ink}" stroke-width="2" opacity=".08"/>
  <g transform="translate(92 122) rotate(-3)">
    <rect width="390" height="270" rx="6" fill="${C.white}" stroke="${C.ink}" stroke-opacity=".1"/>
    <rect x="24" y="24" width="342" height="16" rx="3" fill="${C.navy}"/>
    <rect x="24" y="52" width="214" height="12" rx="3" fill="${C.ink}" opacity=".55"/>
    <rect x="24" y="80" width="150" height="90" rx="4" fill="${C.blue}" opacity=".75"/>
    <path d="M24 170 l62 -62 l48 42 l40 -28 l38 48 Z" fill="${C.green}" opacity=".8"/>
    <rect x="190" y="82" width="176" height="7" rx="3" fill="${C.ink}" opacity=".2"/>
    <rect x="190" y="98" width="166" height="7" rx="3" fill="${C.ink}" opacity=".2"/>
    <rect x="190" y="114" width="176" height="7" rx="3" fill="${C.ink}" opacity=".2"/>
    <rect x="190" y="130" width="120" height="7" rx="3" fill="${C.ink}" opacity=".2"/>
    <rect x="24" y="190" width="342" height="7" rx="3" fill="${C.ink}" opacity=".18"/>
    <rect x="24" y="206" width="342" height="7" rx="3" fill="${C.ink}" opacity=".18"/>
    <rect x="24" y="222" width="250" height="7" rx="3" fill="${C.ink}" opacity=".18"/>
    <rect x="24" y="240" width="120" height="10" rx="3" fill="${C.red}" opacity=".7"/>
  </g>
  <g transform="translate(522 130) rotate(7)">
    <rect x="0" y="0" width="150" height="260" rx="20" fill="${C.ink}"/>
    <rect x="10" y="20" width="130" height="204" rx="10" fill="${C.white}"/>
    <rect x="22" y="36" width="106" height="14" rx="3" fill="${C.red}"/>
    <rect x="22" y="62" width="78" height="8" rx="3" fill="${C.ink}" opacity=".3"/>
    <rect x="22" y="80" width="106" height="54" rx="6" fill="${C.sky}"/>
    <rect x="22" y="146" width="106" height="7" rx="3" fill="${C.ink}" opacity=".18"/>
    <rect x="22" y="160" width="84" height="7" rx="3" fill="${C.ink}" opacity=".18"/>
    <rect x="22" y="174" width="96" height="7" rx="3" fill="${C.ink}" opacity=".18"/>
    <circle cx="75" cy="220" r="5" fill="${C.ink}" opacity=".35"/>
  </g>
  <g transform="translate(666 352)">
    <ellipse cx="0" cy="26" rx="48" ry="10" fill="${C.ink}" opacity=".1"/>
    <ellipse cx="0" cy="4" rx="40" ry="11" fill="${C.white}" stroke="${C.ink}" stroke-opacity=".12"/>
    <path d="M-28 0 q0 44 28 44 q28 0 28 -44" fill="${C.white}" stroke="${C.ink}" stroke-opacity=".12"/>
    <path d="M-28 6 q-18 2 -18 16 q0 14 22 12" fill="none" stroke="${C.white}" stroke-width="8"/>
    <path d="M-10 -10 q-8 12 0 22 M10 -10 q8 12 0 22" stroke="${C.grey}" stroke-width="4" fill="none" opacity=".55"/>
  </g>
  <text x="80" y="78" font-family="ui-sans-serif, system-ui, sans-serif" font-size="18" font-weight="800" fill="${C.blue}" opacity=".55">NYHETER</text>
`);

/* ------------------------------------------------------------------ 10 */
const miljo = svg('Fiordo noruego con turbinas eólicas, reciclaje y coche eléctrico', ['#dff0f4', '#eef6e8'], `
  <circle cx="662" cy="94" r="42" fill="${C.amber}" opacity=".9"/>
  <path d="M0 318 L126 164 L242 300 L360 182 L510 318 Z" fill="${C.blue}" opacity=".82"/>
  <path d="M470 318 L590 206 L700 318 Z" fill="${C.green}" opacity=".62"/>
  <path d="M126 164 l28 52 l-18 -4 l-14 24 l-15 -24 l-19 4 Z" fill="${C.white}" opacity=".9"/>
  <path d="M360 182 l22 44 l-15 -4 l-12 20 l-13 -20 l-15 4 Z" fill="${C.white}" opacity=".9"/>
  <path d="M0 326 q200 -36 400 0 q200 36 400 0 v174 H0 Z" fill="${C.mint}"/>
  <path d="M0 388 q220 -36 430 0 q190 30 370 -8 v120 H0 Z" fill="${C.sky2}" opacity=".65"/>
  <g stroke="${C.navy}" stroke-width="5" stroke-linecap="round" fill="none" opacity=".75">
    <path d="M118 252 v104"/><path d="M118 252 l-42 -28"/><path d="M118 252 l48 -26"/><path d="M118 252 l3 54"/>
    <path d="M228 276 v82"/><path d="M228 276 l-34 -22"/><path d="M228 276 l38 -20"/><path d="M228 276 l2 44"/>
  </g>
  <g transform="translate(334 356)">
    <rect x="0" y="0" width="124" height="44" rx="14" fill="${C.red}"/>
    <path d="M22 0 q8 -24 40 -24 q32 0 40 24" fill="${C.red}"/>
    <rect x="28" y="-16" width="28" height="18" rx="4" fill="${C.sky}"/>
    <rect x="66" y="-16" width="28" height="18" rx="4" fill="${C.sky}"/>
    <circle cx="30" cy="46" r="14" fill="${C.ink}"/><circle cx="30" cy="46" r="5" fill="${C.grey}"/>
    <circle cx="94" cy="46" r="14" fill="${C.ink}"/><circle cx="94" cy="46" r="5" fill="${C.grey}"/>
    <path d="M114 18 h18" stroke="${C.amber}" stroke-width="4" stroke-linecap="round"/>
  </g>
  <g transform="translate(520 368)">
    <rect x="0" y="0" width="54" height="66" rx="8" fill="${C.green}"/>
    <rect x="58" y="0" width="54" height="66" rx="8" fill="${C.blue}"/>
    <rect x="116" y="0" width="54" height="66" rx="8" fill="${C.amber}"/>
    <path d="M18 18 q9 -14 18 0 q-9 20 -18 0" fill="none" stroke="${C.white}" stroke-width="3"/>
    <path d="M76 18 h18 M76 30 h18 M76 42 h12" stroke="${C.white}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="143" cy="26" r="10" fill="none" stroke="${C.white}" stroke-width="3"/>
  </g>
  ${plant(700, 442, .8)}
  <g fill="${C.green}" opacity=".8">
    <path d="M640 300 q-18 -18 -34 -8 q8 22 34 8"/>
    <path d="M650 306 q6 -24 24 -26 q0 26 -24 26"/>
  </g>
  <text x="78" y="78" font-family="ui-sans-serif, system-ui, sans-serif" font-size="18" font-weight="800" fill="${C.green}" opacity=".6">MILJØ</text>
`);

/* ------------------------------------------------------------------ 11 */
const arbeid = svg('Equipo trabajando en una oficina híbrida', ['#e8eff8', '#eef7f2'], `
  <rect x="44" y="58" width="712" height="356" rx="22" fill="${C.white}" opacity=".72"/>
  <rect x="78" y="90" width="236" height="160" rx="10" fill="${C.sky}" stroke="${C.navy}" stroke-width="7"/>
  <path d="M78 216 L146 150 L205 204 L258 142 L314 216 Z" fill="${C.blue}" opacity=".65"/>
  <circle cx="286" cy="116" r="18" fill="${C.amber}" opacity=".8"/>
  <rect x="356" y="90" width="210" height="110" rx="8" fill="${C.navy}"/>
  <rect x="370" y="104" width="80" height="58" rx="4" fill="${C.blue}"/>
  <rect x="458" y="104" width="94" height="58" rx="4" fill="${C.green}" opacity=".8"/>
  <path d="M370 162 l34 -30 l26 20 l22 -18 l18 28" fill="none" stroke="${C.white}" stroke-width="3" opacity=".55"/>
  <rect x="370" y="174" width="182" height="5" rx="2" fill="${C.white}" opacity=".3"/>
  <rect x="590" y="92" width="120" height="108" rx="10" fill="${C.cream}" stroke="${C.ink}" stroke-opacity=".08"/>
  <path d="M606 178 l26 -40 l20 24 l16 -28 l24 44 Z" fill="${C.amber}" opacity=".8"/>
  <rect x="600" y="160" width="100" height="26" fill="${C.white}" opacity=".5"/>
  <rect x="80" y="318" width="612" height="18" rx="9" fill="${C.sand}"/>
  <rect x="104" y="336" width="22" height="46" fill="${C.navy}" opacity=".35"/>
  <rect x="646" y="336" width="22" height="46" fill="${C.navy}" opacity=".35"/>
  <g transform="translate(278 286)">
    <rect x="-30" y="-10" width="88" height="54" rx="6" fill="${C.navy}"/>
    <rect x="-22" y="-2" width="72" height="34" rx="3" fill="${C.blue}"/>
    <rect x="-44" y="44" width="118" height="6" rx="3" fill="${C.ink}"/>
  </g>
  ${person(166, 404, 1.02, { shirt: C.green, hair: C.hair2 })}
  ${person(436, 410, 1.06, { shirt: C.red, skin: C.skin3, hair: C.hair, flip: true })}
  ${person(596, 414, .98, { shirt: C.blue, skin: C.skin2, hair: C.hair2 })}
  ${bubble(430, 214, 168, 44, 'Bra jobba!', C.mint)}
  ${plant(698, 420, .78)}
  <text x="84" y="78" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="800" fill="${C.blue}" opacity=".55">ARBEIDSLIV</text>
`);

const files = {
  hei,
  kafe,
  butikk,
  buss,
  vaer,
  jobbintervju: jobb,
  hoslegen: lege,
  bolig,
  nyheter,
  miljo,
  arbeidsliv: arbeid
};

for (const [id, content] of Object.entries(files)) {
  writeFileSync(path.join(OUT, id + '.svg'), content);
  console.log('escrito', path.relative(ROOT, path.join(OUT, id + '.svg')));
}
