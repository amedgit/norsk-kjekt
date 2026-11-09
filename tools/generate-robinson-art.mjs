#!/usr/bin/env node
/**
 * Genera las 8 ilustraciones SVG del capítulo 1 de Robinson Crusoe.
 * Estilo plano, sin texto y sin imágenes externas.
 *
 * Uso: node tools/generate-robinson-art.mjs
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets/img/robinson');
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
  white: '#ffffff',
  sea: '#2f7f9d',
  seaDeep: '#1d5c74',
  brown: '#6b3f22',
  brown2: '#8a5a33',
  storm: '#1a3245',
  storm2: '#0b1c2b'
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function svg(title, stops, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" role="img" aria-labelledby="title">
  <title id="title">${esc(title)}</title>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${stops[0]}"/>
      <stop offset="1" stop-color="${stops[1]}"/>
    </linearGradient>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${C.sea}"/>
      <stop offset="1" stop-color="${C.seaDeep}"/>
    </linearGradient>
    <clipPath id="round"><rect width="600" height="400" rx="30"/></clipPath>
  </defs>
  <g clip-path="url(#round)">
    <rect width="600" height="400" fill="url(#bg)"/>
${content}
  </g>
</svg>
`;
}

function sun(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <circle r="48" fill="${C.amber}" opacity=".16"/>
    <circle r="34" fill="${C.amber}" opacity=".3"/>
    <circle r="22" fill="${C.amber}"/>
  </g>`;
}

function cloud(x, y, s, color = C.white) {
  return `<g transform="translate(${x} ${y}) scale(${s})" fill="${color}">
    <circle cx="0" cy="0" r="26"/><circle cx="28" cy="-7" r="33"/><circle cx="62" cy="3" r="22"/>
    <rect x="0" y="0" width="62" height="26" rx="13"/>
  </g>`;
}

function gull(x, y, s = 1, color = C.navy) {
  return `<path d="M${x} ${y} q10 -10 20 0 q10 -10 20 0" fill="none" stroke="${color}" stroke-width="${3 * s}" stroke-linecap="round" opacity=".65"/>`;
}

function person(x, y, s = 1, opts = {}) {
  const shirt = opts.shirt || C.red;
  const pants = opts.pants || C.navy;
  const skin = opts.skin || C.skin;
  const hair = opts.hair || C.hair;
  const flip = opts.flip ? -1 : 1;
  const arm = opts.point
    ? `<path d="M22 -92 q34 2 50 -24" fill="none" stroke="${shirt}" stroke-width="14" stroke-linecap="round"/>
       <circle cx="72" cy="-116" r="8" fill="${skin}"/>`
    : opts.wave
      ? `<path d="M22 -92 q30 6 38 -34" fill="none" stroke="${shirt}" stroke-width="14" stroke-linecap="round"/>
         <circle cx="60" cy="-126" r="8" fill="${skin}"/>`
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

function house(x, y, w, h, wall, roof, door = C.navy) {
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${wall}"/>
    <path d="M${x - 14} ${y + 2} L${x + w / 2} ${y - 52} L${x + w + 14} ${y + 2} Z" fill="${roof}"/>
    <rect x="${x + 16}" y="${y + 22}" width="28" height="28" rx="4" fill="${C.sky}"/>
    <rect x="${x + w - 44}" y="${y + 22}" width="28" height="28" rx="4" fill="${C.sky}"/>
    <rect x="${x + w / 2 - 13}" y="${y + h - 44}" width="26" height="44" rx="4" fill="${door}"/>
    <circle cx="${x + w / 2 + 6}" cy="${y + h - 21}" r="2.3" fill="${C.amber}"/>
  </g>`;
}

function tree(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <rect x="-7" y="-48" width="14" height="50" rx="6" fill="${C.brown}"/>
    <circle cx="0" cy="-76" r="38" fill="${C.green}" opacity=".9"/>
    <circle cx="-26" cy="-58" r="24" fill="${C.green}"/>
    <circle cx="27" cy="-58" r="25" fill="${C.green}"/>
  </g>`;
}

function ship(x, y, s = 1, opts = {}) {
  const tilt = opts.tilt || 0;
  const torn = opts.torn;
  const sail = torn
    ? `<path d="M2 -128 L2 -18 L62 -18 L48 -46 L58 -62 L40 -78 L52 -96 L30 -110 Z" fill="${C.cream}"/>`
    : `<path d="M2 -128 L2 -18 L68 -18 Z" fill="${C.cream}"/>`;
  const fore = `<path d="M-4 -118 L-4 -30 L-54 -30 Z" fill="${C.sand}"/>`;
  return `<g transform="translate(${x} ${y}) scale(${s}) rotate(${tilt})">
    <path d="M-95 0 L95 0 L72 38 L-72 38 Z" fill="${C.brown}"/>
    <path d="M-95 0 L95 0 L82 10 L-82 10 Z" fill="${C.brown2}"/>
    <rect x="-88" y="-14" width="176" height="14" rx="4" fill="${C.brown2}"/>
    <rect x="-6" y="-142" width="8" height="142" fill="${C.navy}"/>
    <rect x="-62" y="-122" width="5" height="96" fill="${C.navy}"/>
    ${sail}${fore}
    <path d="M-56 -122 L-56 -34 L-92 -34" fill="none" stroke="${C.navy}" stroke-width="4"/>
    <path d="M4 -142 L42 -134 L4 -124 Z" fill="${C.red}"/>
    <path d="M6 -140 Q50 -78 80 -10" fill="none" stroke="${C.navy}" stroke-width="2" opacity=".5"/>
    <path d="M-6 -140 Q-48 -78 -84 -12" fill="none" stroke="${C.navy}" stroke-width="2" opacity=".5"/>
  </g>`;
}

function waves(y, color = C.white, opacity = 0.5) {
  return `<path d="M0 ${y} q25 -12 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0"
    fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" opacity="${opacity}"/>`;
}

/* ---------------------------------------------------------------- 1 */
const family = svg('La familia de Robinson delante de su casa en York', ['#dceefb', '#f7f2e9'], `
  ${sun(520, 66, .85)}
  ${cloud(84, 78, .7)}
  <path d="M0 296 q150 -24 300 0 t300 0 v104 H0 Z" fill="${C.mint}"/>
  <path d="M0 342 q180 -28 380 0 t220 0 v58 H0 Z" fill="${C.green}" opacity=".32"/>
  ${house(392, 186, 156, 132, C.cream, C.red)}
  ${tree(66, 336, .95)}
  ${person(168, 346, .9, { shirt: C.blue, hair: C.hair2 })}
  ${person(252, 342, 1.02, { shirt: C.navy, pants: C.navy, hair: C.hair })}
  ${person(332, 344, .9, { shirt: C.amber, pants: C.green, hair: C.hair2, flip: true })}
  <g transform="translate(276 248) rotate(8)">
    <rect x="0" y="0" width="34" height="26" rx="4" fill="${C.sand}" stroke="${C.ink}" stroke-opacity=".18"/>
    <path d="M17 0 v26" stroke="${C.ink}" stroke-width="2" opacity=".25"/>
  </g>
  ${gull(470, 106, 1.05)}
`);

/* ---------------------------------------------------------------- 2 */
const dream = svg('Robinson mira los barcos desde una colina', ['#cfe8f7', '#f7f2e9'], `
  ${sun(500, 72, 1)}
  ${cloud(90, 82, .85)}
  ${cloud(360, 52, .55)}
  <rect x="0" y="214" width="600" height="186" fill="url(#sea)"/>
  ${waves(228, C.white, .28)}
  ${waves(258, C.white, .2)}
  ${ship(390, 238, .32)}
  ${ship(470, 248, .4)}
  ${ship(535, 236, .27)}
  <path d="M0 400 V296 q120 -34 250 -6 q110 24 350 -4 v114 Z" fill="${C.green}"/>
  <path d="M0 400 V332 q160 -20 290 2 t310 -4 v70 Z" fill="${C.mint}" opacity=".75"/>
  ${person(142, 340, .98, { shirt: C.blue, hair: C.hair2, wave: true })}
  ${gull(300, 134, 1)}
  ${gull(330, 154, .8)}
`);

/* ---------------------------------------------------------------- 3 */
const advice = svg('El padre de Robinson le da consejos junto a una ventana', ['#fdf5e9', '#efdfc9'], `
  <rect width="600" height="400" fill="${C.cream}"/>
  <rect x="0" y="0" width="600" height="22" fill="${C.navy}" opacity=".12"/>
  <rect x="52" y="62" width="188" height="150" rx="10" fill="${C.sky2}" stroke="${C.navy}" stroke-width="8"/>
  <rect x="138" y="62" width="10" height="150" fill="${C.navy}"/>
  <rect x="52" y="130" width="188" height="9" fill="${C.navy}"/>
  <path d="M52 172 q60 -16 120 0 t68 0 v40 H52 Z" fill="${C.sea}" opacity=".85"/>
  ${ship(190, 176, .22)}
  <circle cx="112" cy="100" r="18" fill="${C.amber}" opacity=".9"/>
  <rect x="0" y="306" width="600" height="94" fill="${C.sand}"/>
  <rect x="274" y="278" width="244" height="16" rx="6" fill="${C.brown2}"/>
  <rect x="292" y="294" width="14" height="74" rx="5" fill="${C.brown}"/>
  <rect x="486" y="294" width="14" height="74" rx="5" fill="${C.brown}"/>
  ${person(410, 352, 1, { shirt: C.navy, pants: C.navy, hair: C.hair, point: true, flip: true })}
  ${person(262, 352, .84, { shirt: C.blue, hair: C.hair2, flip: true })}
  <g transform="translate(330 264) rotate(-6)">
    <rect x="0" y="0" width="42" height="30" rx="4" fill="${C.cream}" stroke="${C.ink}" stroke-opacity=".2"/>
    <path d="M21 0 v30" stroke="${C.ink}" stroke-width="2" opacity=".22"/>
  </g>
  <rect x="236" y="248" width="12" height="30" rx="4" fill="${C.amber}"/>
  <circle cx="242" cy="242" r="8" fill="${C.amber}" opacity=".7"/>
`);

/* ---------------------------------------------------------------- 4 */
const mother = svg('La madre de Robinson llora mientras él promete quedarse', ['#fdf1e4', '#f2d9c5'], `
  <rect width="600" height="400" fill="${C.cream}"/>
  <rect x="360" y="58" width="184" height="148" rx="10" fill="${C.sky2}" stroke="${C.navy}" stroke-width="8"/>
  <rect x="446" y="58" width="10" height="148" fill="${C.navy}"/>
  <rect x="360" y="126" width="184" height="9" fill="${C.navy}"/>
  <path d="M360 168 q60 -16 120 0 t64 0 v38 H360 Z" fill="${C.sea}" opacity=".8"/>
  ${cloud(392, 94, .45)}
  <rect x="0" y="310" width="600" height="90" fill="${C.sand}"/>
  ${person(238, 352, 1, { shirt: C.green, pants: C.navy, hair: C.hair2 })}
  ${person(372, 354, .9, { shirt: C.blue, hair: C.hair, flip: true })}
  <path d="M242 240 q24 12 44 -2" fill="none" stroke="${C.white}" stroke-width="11" stroke-linecap="round"/>
  <circle cx="284" cy="238" r="7" fill="${C.skin}"/>
  <path d="M226 228 q-5 10 1 17" fill="none" stroke="${C.sky2}" stroke-width="3" stroke-linecap="round"/>
  <circle cx="228" cy="250" r="2.6" fill="${C.sky2}"/>
  <rect x="296" y="262" width="34" height="44" rx="7" fill="${C.amber}" opacity=".9"/>
  <rect x="290" y="260" width="46" height="8" rx="4" fill="${C.brown2}"/>
`);

/* ---------------------------------------------------------------- 5 */
const hull = svg('Robinson sube a un barco en el puerto de Hull', ['#d9ecf8', '#f7f2e9'], `
  ${sun(520, 64, .8)}
  ${cloud(96, 76, .65)}
  <rect x="0" y="206" width="600" height="194" fill="url(#sea)"/>
  ${waves(222, C.white, .28)}
  <rect x="0" y="278" width="292" height="122" fill="${C.sand}"/>
  <rect x="0" y="270" width="292" height="14" fill="${C.brown2}"/>
  <rect x="38" y="286" width="16" height="86" rx="5" fill="${C.brown}"/>
  <rect x="142" y="286" width="16" height="86" rx="5" fill="${C.brown}"/>
  <rect x="246" y="286" width="16" height="86" rx="5" fill="${C.brown}"/>
  <rect x="36" y="318" width="226" height="10" rx="4" fill="${C.brown2}"/>
  ${house(18, 150, 110, 96, C.cream, C.red)}
  ${house(132, 176, 88, 74, C.sand, C.amber)}
  ${ship(430, 300, .9)}
  ${person(154, 330, .92, { shirt: C.blue, hair: C.hair2 })}
  ${person(272, 330, .92, { shirt: C.amber, hair: C.hair, wave: true, flip: true })}
  <rect x="116" y="294" width="30" height="38" rx="5" fill="${C.brown2}"/>
  <path d="M116 302 q15 -8 30 0" fill="none" stroke="${C.ink}" stroke-width="3" opacity=".25"/>
  ${gull(350, 100, .9)}
`);

/* ---------------------------------------------------------------- 6 */
const calm = svg('El barco navega con el mar en calma y el cielo azul', ['#b9dff4', '#eaf6fb'], `
  ${sun(504, 72, 1.05)}
  ${cloud(82, 70, .9)}
  ${cloud(330, 54, .55)}
  <rect x="0" y="218" width="600" height="182" fill="url(#sea)"/>
  ${waves(232, C.white, .34)}
  ${waves(264, C.white, .24)}
  ${waves(298, C.white, .18)}
  ${ship(300, 312, 1.05)}
  ${person(374, 246, .38, { shirt: C.blue, hair: C.hair2, wave: true })}
  ${gull(150, 120, 1)}
  ${gull(190, 142, .8)}
  ${gull(430, 118, .9)}
`);

/* ---------------------------------------------------------------- 7 */
const storm = svg('Una tormenta sacude el barco entre olas enormes', ['#355166', '#0b1c2b'], `
  <circle cx="84" cy="74" r="58" fill="${C.storm}" opacity=".8"/>
  <circle cx="150" cy="62" r="68" fill="${C.storm}" opacity=".9"/>
  <circle cx="235" cy="76" r="54" fill="${C.storm}" opacity=".85"/>
  <circle cx="500" cy="62" r="70" fill="${C.storm}" opacity=".9"/>
  <circle cx="566" cy="86" r="52" fill="${C.storm}" opacity=".8"/>
  <path d="M118 84 L84 154 L120 150 L92 222 L158 138 L120 144 L150 84 Z" fill="${C.amber}" opacity=".95"/>
  <g stroke="${C.sky}" stroke-width="2" opacity=".28">
    ${Array.from({ length: 18 }, (_, i) => `<path d="M${24 + i * 32} ${96 + (i % 3) * 18} l-8 30"/>`).join('')}
  </g>
  <path d="M0 294 q40 -54 86 -4 q38 -50 84 0 q46 -56 94 -2 q42 -46 88 0 q44 -54 92 -4 q36 -44 76 0 q40 -46 80 0 v116 H0 Z" fill="${C.seaDeep}"/>
  <path d="M0 322 q40 -40 86 -2 q38 -38 84 0 q46 -42 94 -2 q42 -36 88 0 q44 -42 92 -2 q36 -34 76 0 q40 -36 80 0 v84 H0 Z" fill="${C.sea}" opacity=".9"/>
  <path d="M0 358 q50 -30 100 0 t100 0 t100 0 t100 0 t100 0 t100 0 v42 H0 Z" fill="${C.storm2}" opacity=".55"/>
  ${ship(330, 326, 1.08, { tilt: -13, torn: true })}
  ${gull(430, 190, .8, C.sky)}
`);

/* ---------------------------------------------------------------- 8 */
const london = svg('Robinson llega a Londres con las piernas temblorosas', ['#f7d9b7', '#dceefb'], `
  ${sun(108, 78, .85)}
  ${cloud(300, 70, .6)}
  <rect x="0" y="228" width="600" height="172" fill="url(#sea)"/>
  ${waves(244, C.white, .3)}
  <g fill="${C.navy}" opacity=".55">
    <rect x="250" y="190" width="34" height="46"/>
    <rect x="292" y="174" width="26" height="62"/>
    <rect x="326" y="184" width="40" height="52"/>
    <path d="M370 190 q22 -38 44 0 v46 h-44 Z"/>
    <rect x="368" y="226" width="48" height="12"/>
    <rect x="424" y="182" width="30" height="54"/>
    <rect x="462" y="196" width="44" height="40"/>
  </g>
  <rect x="0" y="236" width="600" height="164" fill="${C.sand}"/>
  <rect x="0" y="228" width="600" height="12" fill="${C.brown2}" opacity=".55"/>
  ${ship(112, 300, .84)}
  <g transform="translate(396 346)">
    <ellipse cx="0" cy="8" rx="32" ry="7" fill="${C.ink}" opacity=".12"/>
    <rect x="-23" y="-104" width="46" height="78" rx="21" fill="${C.blue}"/>
    <path d="M-21 -34 q-8 34 2 42 q12 -8 14 -42" fill="${C.navy}"/>
    <path d="M5 -34 q8 34 -2 42 q-12 -8 -14 -42" fill="${C.navy}"/>
    <path d="M-22 -92 q-20 20 -14 42" fill="none" stroke="${C.blue}" stroke-width="14" stroke-linecap="round"/>
    <circle cx="-35" cy="-47" r="8" fill="${C.skin}"/>
    <path d="M22 -92 q18 22 14 42" fill="none" stroke="${C.blue}" stroke-width="14" stroke-linecap="round"/>
    <circle cx="36" cy="-47" r="8" fill="${C.skin}"/>
    <circle cx="0" cy="-129" r="25" fill="${C.skin}"/>
    <path d="M-25 -132 a25 25 0 0 1 50 0 q-7 -19 -25 -19 q-18 0 -25 19" fill="${C.hair2}"/>
    <circle cx="-8" cy="-131" r="2.3" fill="${C.ink}"/>
    <circle cx="8" cy="-131" r="2.3" fill="${C.ink}"/>
    <path d="M-7 -120 q7 6 14 0" fill="none" stroke="${C.ink}" stroke-width="2.2" stroke-linecap="round"/>
  </g>
  <path d="M366 330 q-10 8 -2 14 M428 330 q10 8 2 14" fill="none" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" opacity=".35"/>
  <rect x="448" y="300" width="30" height="40" rx="5" fill="${C.brown2}"/>
  <path d="M448 308 q15 -8 30 0" fill="none" stroke="${C.ink}" stroke-width="3" opacity=".25"/>
  ${gull(320, 120, .9)}
`);

const files = [
  ['01-familie.svg', family],
  ['02-drommen.svg', dream],
  ['03-radet.svg', advice],
  ['04-moren.svg', mother],
  ['05-hull.svg', hull],
  ['06-rolig-sjo.svg', calm],
  ['07-stormen.svg', storm],
  ['08-london.svg', london]
];

for (const [name, content] of files) {
  writeFileSync(path.join(OUT, name), content);
  console.log(path.join('assets/img/robinson', name));
}
