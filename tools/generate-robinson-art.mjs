#!/usr/bin/env node
/**
 * Genera las 8 ilustraciones SVG del capítulo 1 de Robinson Crusoe.
 * Estilo «aventura oscura»: noche, niebla, siluetas, velas y tormenta.
 * Sin texto dentro de las imágenes y sin recursos externos.
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
  night: '#061018',
  deep: '#0a1822',
  storm: '#102a36',
  teal: '#1b4652',
  fog: '#8ba6ad',
  bone: '#d9cdb5',
  paper: '#c4b08a',
  ember: '#d98a3d',
  gold: '#e0b45a',
  blood: '#8f1f2b',
  white: '#f2ead8',
  ink: '#050b10',
  skin: '#b78a68',
  skin2: '#8a5a3e'
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
      <stop offset="0" stop-color="#0c202b"/>
      <stop offset="1" stop-color="#030a0f"/>
    </linearGradient>
    <radialGradient id="moonGlow">
      <stop offset="0" stop-color="#f2ead8" stop-opacity=".55"/>
      <stop offset=".35" stop-color="#c9d8d9" stop-opacity=".18"/>
      <stop offset="1" stop-color="#c9d8d9" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="warm">
      <stop offset="0" stop-color="#e0a45a" stop-opacity=".55"/>
      <stop offset=".5" stop-color="#d98a3d" stop-opacity=".16"/>
      <stop offset="1" stop-color="#d98a3d" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig" cx=".5" cy=".45" r=".76">
      <stop offset=".48" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity=".62"/>
    </radialGradient>
    <pattern id="grain" width="7" height="7" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1.4" r=".65" fill="#ffffff" opacity=".055"/>
      <circle cx="4.6" cy="4.2" r=".5" fill="#000000" opacity=".1"/>
      <circle cx="2.4" cy="5.6" r=".4" fill="#ffffff" opacity=".04"/>
    </pattern>
    <clipPath id="round"><rect width="600" height="400" rx="30"/></clipPath>
  </defs>
  <g clip-path="url(#round)">
    <rect width="600" height="400" fill="url(#bg)"/>
${content}
    <rect width="600" height="400" fill="url(#grain)" opacity=".8"/>
    <rect width="600" height="400" fill="url(#vig)"/>
    <rect x="1.5" y="1.5" width="597" height="397" rx="29" fill="none" stroke="${C.paper}" stroke-opacity=".28" stroke-width="2"/>
  </g>
</svg>
`;
}

function stars(points) {
  return points.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.bone}" opacity=".55"/>`).join('');
}

function moon(x, y, r) {
  return `<circle cx="${x}" cy="${y}" r="${r * 3.2}" fill="url(#moonGlow)"/>
    <circle cx="${x}" cy="${y}" r="${r}" fill="#d9d2bd"/>
    <circle cx="${x - r * .3}" cy="${y - r * .2}" r="${r * .16}" fill="#a9ada5" opacity=".35"/>
    <circle cx="${x + r * .28}" cy="${y + r * .3}" r="${r * .11}" fill="#a9ada5" opacity=".3"/>
    <circle cx="${x + r * .05}" cy="${y - r * .42}" r="${r * .08}" fill="#a9ada5" opacity=".3"/>`;
}

function fogBand(y, h, opacity = .08) {
  return `<path d="M0 ${y} q80 -18 160 0 t160 0 t160 0 t160 0 v${h} H0 Z" fill="${C.fog}" opacity="${opacity}"/>`;
}

function cloud(x, y, s, color = '#0b1c27', opacity = .9) {
  return `<g transform="translate(${x} ${y}) scale(${s})" fill="${color}" opacity="${opacity}">
    <circle cx="0" cy="0" r="30"/><circle cx="34" cy="-8" r="38"/><circle cx="74" cy="4" r="26"/>
    <rect x="0" y="0" width="74" height="30" rx="15"/>
  </g>`;
}

function gull(x, y, s = 1, color = C.fog) {
  return `<path d="M${x} ${y} q10 -9 20 0 q10 -9 20 0" fill="none" stroke="${color}" stroke-width="${2.6 * s}" stroke-linecap="round" opacity=".55"/>`;
}

function lantern(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <circle r="46" fill="url(#warm)"/>
    <path d="M-4 -12 h8" stroke="${C.ink}" stroke-width="2"/>
    <rect x="-6" y="-10" width="12" height="18" rx="3" fill="${C.ember}"/>
    <rect x="-7" y="-11" width="14" height="3" rx="1.5" fill="${C.ink}"/>
    <circle cx="0" cy="-1" r="3" fill="${C.white}" opacity=".85"/>
  </g>`;
}

function figure(x, y, s = 1, opts = {}) {
  const fill = opts.fill || C.ink;
  const rim = opts.rim || C.fog;
  const flip = opts.flip ? -1 : 1;
  const dress = opts.dress;
  const body = dress
    ? `<path d="M-18 -100 q-18 52 -34 100 h104 q-16 -48 -34 -100 q-9 -8 -18 -8 q-9 0 -18 8 Z" fill="${fill}"/>`
    : `<path d="M-21 -102 q-12 40 -7 70 h56 q5 -30 -7 -70 q-8 -10 -21 -10 q-13 0 -21 10 Z" fill="${fill}"/>`;
  const legs = dress ? '' : `<path d="M-17 -34 l-3 35 h13 l3 -35 Z" fill="${fill}"/>
    <path d="M5 -34 l3 35 h13 l-3 -35 Z" fill="${fill}"/>`;
  const hat = opts.hat
    ? `<path d="M-36 -145 q36 -20 72 0 l-7 8 q-29 -9 -58 0 Z" fill="${fill}"/>`
    : '';
  const arm = opts.point
    ? `<path d="M22 -92 q36 0 54 -22" fill="none" stroke="${fill}" stroke-width="15" stroke-linecap="round"/>`
    : opts.wave
      ? `<path d="M22 -92 q30 4 40 -34" fill="none" stroke="${fill}" stroke-width="15" stroke-linecap="round"/>`
      : `<path d="M22 -92 q18 22 13 42" fill="none" stroke="${fill}" stroke-width="15" stroke-linecap="round"/>`;
  return `<g transform="translate(${x} ${y}) scale(${s * flip} ${s})">
    <ellipse cx="0" cy="4" rx="46" ry="9" fill="${C.fog}" opacity=".055"/>
    <ellipse cx="0" cy="6" rx="34" ry="7" fill="#000" opacity=".4"/>
    ${body}${legs}
    <path d="M-22 -92 q-20 20 -14 42" fill="none" stroke="${fill}" stroke-width="15" stroke-linecap="round"/>
    ${arm}
    <circle cx="0" cy="-130" r="25" fill="${fill}"/>
    ${hat}
    <path d="M-24 -130 A24 24 0 0 1 -10 -150" fill="none" stroke="${rim}" stroke-width="2.2" opacity=".55"/>
    <path d="M18 -140 A24 24 0 0 1 23 -120" fill="none" stroke="${rim}" stroke-width="1.8" opacity=".32"/>
    <path d="M-21 -98 q-10 34 -7 64" fill="none" stroke="${rim}" stroke-width="2" opacity=".28"/>
    <path d="M18 -98 q9 30 7 60" fill="none" stroke="${rim}" stroke-width="1.8" opacity=".22"/>
  </g>`;
}

function house(x, y, w, h, opts = {}) {
  const wall = opts.wall || '#0c1820';
  const roof = opts.roof || '#060d13';
  const lit = opts.lit !== false;
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${wall}"/>
    <path d="M${x - 14} ${y + 2} L${x + w / 2} ${y - 54} L${x + w + 14} ${y + 2} Z" fill="${roof}"/>
    <rect x="${x + 18}" y="${y + 24}" width="26" height="28" rx="3" fill="${lit ? C.ember : '#0a1218'}" opacity="${lit ? .9 : 1}"/>
    <rect x="${x + w - 44}" y="${y + 24}" width="26" height="28" rx="3" fill="${lit ? C.ember : '#0a1218'}" opacity="${lit ? .55 : 1}"/>
    <rect x="${x + w / 2 - 13}" y="${y + h - 45}" width="26" height="45" rx="3" fill="#03080c"/>
    <circle cx="${x + w / 2 + 6}" cy="${y + h - 22}" r="2" fill="${C.gold}" opacity=".8"/>
    ${opts.chimney ? `<rect x="${x + w - 36}" y="${y - 22}" width="16" height="38" fill="${roof}"/>
      <path d="M${x + w - 34} ${y - 26} q-8 -20 4 -32 q14 -14 4 -30" fill="none" stroke="${C.fog}" stroke-width="3" opacity=".16"/>` : ''}
  </g>`;
}

function ship(x, y, s = 1, opts = {}) {
  const tilt = opts.tilt || 0;
  const torn = opts.torn;
  const sail = torn
    ? `<path d="M2 -130 L2 -20 L64 -20 L48 -48 L58 -64 L40 -80 L52 -98 L28 -112 Z" fill="${C.bone}" opacity=".9"/>`
    : `<path d="M2 -130 L2 -20 L68 -20 Z" fill="${C.bone}" opacity=".92"/>`;
  return `<g transform="translate(${x} ${y}) scale(${s}) rotate(${tilt})">
    <path d="M-98 0 L98 0 L74 40 L-74 40 Z" fill="#050a0e"/>
    <path d="M-98 0 L98 0 L84 10 L-84 10 Z" fill="#172c34"/>
    <rect x="-90" y="-14" width="180" height="14" rx="4" fill="#101f26"/>
    <rect x="-6" y="-144" width="8" height="144" fill="#050a0e"/>
    <rect x="-62" y="-124" width="5" height="98" fill="#050a0e"/>
    ${sail}
    <path d="M-56 -124 L-56 -36 L-92 -36" fill="none" stroke="#050a0e" stroke-width="4"/>
    <path d="M4 -144 L44 -136 L4 -126 Z" fill="${C.blood}"/>
    <path d="M6 -142 Q50 -80 82 -10" fill="none" stroke="${C.fog}" stroke-width="1.6" opacity=".28"/>
    <path d="M-6 -142 Q-48 -80 -86 -12" fill="none" stroke="${C.fog}" stroke-width="1.6" opacity=".28"/>
    ${opts.lantern ? lantern(0, -18, .55) : ''}
  </g>`;
}

/* ---------------------------------------------------------------- 1 */
const family = svg('La familia de Robinson delante de su casa en York, de noche', ['#040b12', '#1a2f39'], `
  ${stars([[70, 46, 1.4], [120, 82, 1], [190, 38, 1.6], [260, 72, 1.1], [330, 34, 1.3], [380, 88, .9], [540, 120, 1.2], [570, 44, 1]])}
  ${moon(500, 74, 26)}
  ${cloud(92, 66, .72, '#08141d', .9)}
  ${cloud(350, 46, .5, '#08141d', .7)}
  <path d="M0 300 q160 -30 310 -4 t290 -2 v106 H0 Z" fill="#0f211c"/>
  <path d="M0 344 q190 -24 380 2 t220 -6 v60 H0 Z" fill="#071410"/>
  ${fogBand(292, 76, .07)}
  ${house(392, 184, 158, 136, { chimney: true })}
  <path d="M52 342 q-4 -64 12 -112 q5 -18 14 -30" fill="none" stroke="#050a0e" stroke-width="9" stroke-linecap="round"/>
  <path d="M72 250 q-26 -18 -38 -46 M74 272 q-30 -6 -48 -22 M78 228 q18 -14 24 -36 M82 300 q24 -8 36 -26" fill="none" stroke="#050a0e" stroke-width="5" stroke-linecap="round"/>
  ${gull(330, 110, .8, '#78939b')}
  ${gull(360, 126, .65, '#78939b')}
  ${figure(166, 348, .9, { fill: '#061018', rim: '#8fb0b8' })}
  ${figure(250, 344, 1.02, { fill: '#050b10', rim: '#a8bcc0', hat: true })}
  ${figure(336, 348, .92, { fill: '#081319', rim: '#8fb0b8', dress: true, flip: true })}
  ${lantern(286, 246, .7)}
  <circle cx="286" cy="246" r="56" fill="url(#warm)" opacity=".22"/>
  ${fogBand(320, 80, .06)}
`);

/* ---------------------------------------------------------------- 2 */
const dream = svg('Robinson mira los barcos desde un acantilado bajo la luna', ['#030a10', '#102a36'], `
  ${stars([[60, 50, 1.2], [150, 96, .9], [230, 40, 1.5], [310, 78, 1], [410, 42, 1.3], [520, 100, .8], [566, 58, 1.2]])}
  ${moon(448, 100, 46)}
  <rect x="0" y="220" width="600" height="180" fill="url(#sea)"/>
  <path d="M448 150 q-10 60 0 120" stroke="${C.bone}" stroke-width="7" opacity=".12"/>
  <path d="M430 176 q20 8 40 0 M424 204 q26 10 54 0 M418 232 q34 12 68 0" fill="none" stroke="${C.bone}" stroke-width="3" opacity=".12"/>
  ${ship(350, 248, .36, { lantern: true })}
  ${ship(438, 258, .28, { lantern: true })}
  ${ship(520, 244, .23, { lantern: true })}
  ${fogBand(238, 50, .07)}
  <path d="M0 400 V278 q90 -34 190 -10 q80 20 150 6 v126 Z" fill="#050c0b"/>
  <path d="M0 400 V320 q120 -26 230 0 t210 -4 v84 Z" fill="#030807"/>
  ${figure(142, 336, 1, { fill: '#020608', rim: '#a8bcc0', wave: true })}
  ${gull(300, 148, .8, '#78939b')}
  ${gull(330, 166, .6, '#78939b')}
  ${fogBand(300, 100, .05)}
`);

/* ---------------------------------------------------------------- 3 */
const advice = svg('El padre de Robinson le da consejos a la luz de una vela', ['#0b0907', '#241a12'], `
  <rect width="600" height="400" fill="#100c09"/>
  <rect x="0" y="0" width="600" height="20" fill="#050403" opacity=".7"/>
  <rect x="48" y="58" width="190" height="152" rx="8" fill="#07131a" stroke="#050a0e" stroke-width="8"/>
  <rect x="136" y="58" width="9" height="152" fill="#050a0e"/>
  <rect x="48" y="126" width="190" height="9" fill="#050a0e"/>
  <path d="M48 168 q58 -16 118 0 t72 0 v42 H48 Z" fill="#0a2029" opacity=".9"/>
  <path d="M118 74 L96 128 L118 124 L104 170 L146 112 L122 118 L142 74 Z" fill="${C.gold}" opacity=".7"/>
  <g stroke="${C.fog}" stroke-width="2" opacity=".18">${Array.from({ length: 10 }, (_, i) => `<path d="M${56 + i * 18} 70 l-4 34"/>`).join('')}</g>
  <rect x="0" y="306" width="600" height="94" fill="#140f0a"/>
  <ellipse cx="352" cy="310" rx="150" ry="44" fill="url(#warm)" opacity=".26"/>
  <rect x="272" y="278" width="250" height="16" rx="5" fill="#1b120c"/>
  <rect x="290" y="294" width="13" height="74" rx="4" fill="#0a0705"/>
  <rect x="490" y="294" width="13" height="74" rx="4" fill="#0a0705"/>
  ${figure(410, 352, 1, { fill: '#03070a', rim: '#d0a86a', hat: true, point: true, flip: true })}
  ${figure(260, 352, .84, { fill: '#050a0e', rim: '#8fb0b8', flip: true })}
  <g transform="translate(326 266) rotate(-6)">
    <rect x="0" y="0" width="44" height="30" rx="3" fill="#c4b08a" opacity=".75"/>
    <path d="M22 0 v30" stroke="#050a0e" stroke-width="2" opacity=".45"/>
  </g>
  ${lantern(352, 250, .5)}
  <circle cx="352" cy="250" r="94" fill="url(#warm)" opacity=".28"/>
  <path d="M440 300 q-10 -90 10 -150 q14 50 40 60 q-6 60 18 90 Z" fill="#000" opacity=".28"/>
`);

/* ---------------------------------------------------------------- 4 */
const mother = svg('La madre de Robinson llora junto a la ventana mientras él promete quedarse', ['#0b0807', '#261814'], `
  <rect width="600" height="400" fill="#110c09"/>
  <rect x="356" y="54" width="188" height="152" rx="8" fill="#07131a" stroke="#050a0e" stroke-width="8"/>
  <rect x="446" y="54" width="9" height="152" fill="#050a0e"/>
  <rect x="356" y="124" width="188" height="9" fill="#050a0e"/>
  <path d="M356 166 q56 -16 114 0 t74 0 v40 H356 Z" fill="#0a2029" opacity=".9"/>
  <g stroke="${C.fog}" stroke-width="2" opacity=".22">${Array.from({ length: 11 }, (_, i) => `<path d="M${364 + i * 16} 62 l-5 40"/>`).join('')}</g>
  ${moon(512, 84, 14)}
  <rect x="0" y="310" width="600" height="90" fill="#140f0a"/>
  <ellipse cx="312" cy="314" rx="140" ry="42" fill="url(#warm)" opacity=".24"/>
  ${figure(236, 352, 1, { fill: '#04090c', rim: '#b08a62', dress: true })}
  ${figure(372, 354, .9, { fill: '#050a0e', rim: '#8fb0b8', flip: true })}
  <path d="M248 242 q18 9 30 -2" fill="none" stroke="${C.bone}" stroke-width="8" stroke-linecap="round" opacity=".9"/>
  <circle cx="280" cy="238" r="6" fill="${C.skin}"/>
  <path d="M230 230 q-4 9 2 15" fill="none" stroke="${C.fog}" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>
  <circle cx="232" cy="250" r="2.4" fill="${C.fog}" opacity=".8"/>
  <rect x="300" y="276" width="24" height="34" rx="4" fill="#1b120c"/>
  ${lantern(312, 252, .5)}
  <circle cx="312" cy="252" r="86" fill="url(#warm)" opacity=".26"/>
`);

/* ---------------------------------------------------------------- 5 */
const hull = svg('Robinson sube a un barco en el puerto de Hull entre la niebla', ['#040b12', '#17313c'], `
  ${moon(505, 66, 20)}
  ${cloud(120, 72, .8, '#08141d', .85)}
  <rect x="0" y="208" width="600" height="192" fill="url(#sea)"/>
  <path d="M0 250 q60 -8 120 0 t120 0 t120 0 t120 0 t120 0" fill="none" stroke="${C.fog}" stroke-width="3" opacity=".14"/>
  <path d="M0 286 q70 -10 140 0 t140 0 t140 0 t180 0" fill="none" stroke="${C.fog}" stroke-width="2" opacity=".1"/>
  <g fill="#050b10">
    <rect x="6" y="152" width="72" height="58"/>
    <rect x="88" y="136" width="54" height="74"/>
    <rect x="150" y="166" width="86" height="44"/>
    <path d="M244 154 q24 -30 48 0 v56 h-48 Z"/>
    <rect x="300" y="160" width="42" height="50"/>
  </g>
  <g fill="${C.ember}" opacity=".55">
    <rect x="22" y="174" width="5" height="7"/><rect x="104" y="158" width="5" height="7"/>
    <rect x="166" y="180" width="5" height="7"/><rect x="260" y="176" width="5" height="7"/>
  </g>
  <rect x="0" y="270" width="300" height="130" fill="#0a0c0c"/>
  <rect x="0" y="262" width="300" height="12" fill="#1a1712"/>
  <rect x="36" y="276" width="15" height="94" rx="4" fill="#080a0a"/>
  <rect x="136" y="276" width="15" height="94" rx="4" fill="#080a0a"/>
  <rect x="242" y="276" width="15" height="94" rx="4" fill="#080a0a"/>
  <rect x="34" y="310" width="230" height="9" rx="3" fill="#15130f"/>
  ${ship(438, 300, .95, { lantern: true })}
  ${figure(160, 330, .92, { fill: '#03070a', rim: '#8fb0b8' })}
  ${figure(270, 330, .92, { fill: '#03070a', rim: '#d0a86a', wave: true, flip: true })}
  ${lantern(300, 300, .55)}
  <rect x="116" y="294" width="28" height="38" rx="5" fill="#1a120c"/>
  ${fogBand(300, 100, .08)}
  ${fogBand(340, 60, .06)}
`);

/* ---------------------------------------------------------------- 6 */
const calm = svg('El barco espera en un mar en calma bajo una luna enorme', ['#07131b', '#24464f'], `
  ${stars([[40, 44, 1.1], [120, 88, .8], [210, 52, 1.4], [300, 96, .9], [400, 40, 1.2], [560, 72, .7]])}
  ${moon(300, 156, 58)}
  <rect x="0" y="212" width="600" height="188" fill="url(#sea)"/>
  <path d="M300 214 q-18 78 0 154" stroke="${C.bone}" stroke-width="16" opacity=".08"/>
  <path d="M300 212 q-10 64 0 130" stroke="${C.bone}" stroke-width="4" opacity=".13"/>
  ${ship(305, 312, 1.05, { lantern: true })}
  ${figure(378, 250, .4, { fill: '#020608', rim: '#b8c8ca', wave: true })}
  <path d="M0 280 q60 -10 120 0 t120 0 t120 0 t120 0 t120 0" fill="none" stroke="${C.fog}" stroke-width="2" opacity=".13"/>
  <path d="M0 330 q80 -12 160 0 t160 0 t160 0 t120 0" fill="none" stroke="${C.fog}" stroke-width="2" opacity=".09"/>
  ${fogBand(260, 60, .05)}
`);

/* ---------------------------------------------------------------- 7 */
const storm = svg('Una tormenta brutal sacude el barco entre olas enormes', ['#010406', '#0c202a'], `
  ${cloud(70, 56, 1.1, '#050d13', .95)}
  ${cloud(220, 34, 1.35, '#040a0f', .95)}
  ${cloud(410, 58, 1.2, '#050d13', .95)}
  ${cloud(540, 28, .95, '#040a0f', .9)}
  <path d="M118 66 L82 150 L122 146 L92 236 L166 128 L124 136 L158 66 Z" fill="${C.gold}" opacity=".92"/>
  <path d="M118 66 L82 150 L122 146 L92 236 L166 128 L124 136 L158 66 Z" fill="url(#warm)" opacity=".35"/>
  <g stroke="${C.fog}" stroke-width="2" opacity=".18">
    ${Array.from({ length: 22 }, (_, i) => `<path d="M${12 + i * 28} ${82 + (i % 4) * 14} l-10 34"/>`).join('')}
  </g>
  <path d="M0 288 q44 -58 92 -6 q40 -54 88 0 q48 -60 98 -4 q44 -50 94 0 q46 -58 96 -6 q38 -46 78 0 q42 -48 84 0 v122 H0 Z" fill="#071820"/>
  <path d="M0 324 q44 -44 92 -4 q40 -42 88 0 q48 -46 98 -4 q44 -40 94 0 q46 -46 96 -4 q38 -38 78 0 q42 -40 84 0 v82 H0 Z" fill="#0a2630" opacity=".95"/>
  <path d="M0 360 q54 -34 108 0 t108 0 t108 0 t108 0 t108 0 t108 0 v40 H0 Z" fill="#02080c" opacity=".85"/>
  ${ship(330, 324, 1.1, { tilt: -14, torn: true })}
  ${figure(344, 286, .42, { fill: '#010405', rim: '#a8bcc0' })}
  ${gull(430, 190, .8, '#587078')}
`);

/* ---------------------------------------------------------------- 8 */
const london = svg('Robinson llega a Londres entre la niebla con las piernas temblorosas', ['#0a1118', '#33464a'], `
  ${moon(112, 78, 24)}
  ${cloud(280, 62, .8, '#0b1a21', .7)}
  <rect x="0" y="226" width="600" height="174" fill="url(#sea)"/>
  <path d="M0 252 q70 -8 140 0 t140 0 t140 0 t180 0" fill="none" stroke="${C.fog}" stroke-width="2" opacity=".12"/>
  <g fill="#050b10">
    <rect x="248" y="190" width="36" height="46"/>
    <rect x="294" y="174" width="26" height="62"/>
    <rect x="328" y="184" width="42" height="52"/>
    <path d="M372 190 q24 -40 48 0 v46 h-48 Z"/>
    <rect x="370" y="226" width="52" height="12"/>
    <rect x="428" y="182" width="30" height="54"/>
    <rect x="468" y="196" width="46" height="40"/>
  </g>
  <g fill="${C.ember}" opacity=".4">
    <rect x="260" y="202" width="4" height="6"/><rect x="302" y="188" width="4" height="6"/><rect x="382" y="204" width="4" height="6"/>
  </g>
  <rect x="0" y="234" width="600" height="166" fill="#0a0c0b"/>
  <rect x="0" y="226" width="600" height="12" fill="#191610"/>
  ${ship(112, 300, .86, { lantern: true })}
  ${figure(396, 346, .92, { fill: '#03070a', rim: '#8fb0b8' })}
  <path d="M366 330 q-10 8 -2 14 M428 330 q10 8 2 14" fill="none" stroke="${C.fog}" stroke-width="2.6" stroke-linecap="round" opacity=".45"/>
  <rect x="450" y="300" width="30" height="40" rx="5" fill="#1a120c"/>
  ${gull(324, 124, .8, '#78939b')}
  ${fogBand(292, 90, .08)}
  ${fogBand(330, 70, .05)}
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
  writeFileSync(path.join(OUT, name), content.replace(/[ \t]+$/gm, ''));
  console.log(path.join('assets/img/robinson', name));
}
