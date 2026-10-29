#!/usr/bin/env node
/**
 * Genera los iconos PNG de la PWA (192, 512, maskable 512 y apple-touch 180)
 * a partir de un SVG con la bandera de Noruega, renderizado con Chromium.
 *
 * Uso: node tools/generate-icons.mjs
 */

import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets/img/icons');
mkdirSync(OUT, { recursive: true });

const BLUE = '#00205B';
const RED = '#BA0C2F';

/* Bandera noruega simplificada: cruz blanca con cruz roja encima. */
function flagSvg({ rounded, pad }) {
  const inner = 512 - pad * 2;
  const rx = rounded ? 96 : 0;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="${BLUE}"/>
  <g transform="translate(${pad} ${pad})">
    <rect width="${inner}" height="${inner}" rx="${rx}" fill="${BLUE}"/>
    <g transform="scale(${inner / 512})">
      <rect x="176" width="160" height="512" fill="#fff"/>
      <rect y="176" width="512" height="160" fill="#fff"/>
      <rect x="208" width="96" height="512" fill="${RED}"/>
      <rect y="208" width="512" height="96" fill="${RED}"/>
    </g>
  </g>
</svg>`;
}

const browser = await puppeteer.launch({
  executablePath: process.env.CHROMIUM || '/usr/bin/chromium',
  headless: true,
  args: ['--no-sandbox', '--disable-gpu'],
});

async function render(svg, file, size) {
  const page = await browser.newPage();
  await page.setViewport({ width: 512, height: 512, deviceScaleFactor: 1 });
  await page.setContent('<!doctype html><html><body style="margin:0">' + svg + '</body></html>');
  await page.screenshot({ path: path.join(OUT, file), clip: { x: 0, y: 0, width: 512, height: 512 } });
  await page.close();
  if (size !== 512) {
    // Chromium no reescala al capturar: generamos a 512 y redimensionamos con una segunda pasada.
    const p2 = await browser.newPage();
    await p2.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
    await p2.setContent('<!doctype html><html><body style="margin:0"><img src="file://' + path.join(OUT, file) + '" width="' + size + '" height="' + size + '"></body></html>');
    await p2.screenshot({ path: path.join(OUT, file), clip: { x: 0, y: 0, width: size, height: size } });
    await p2.close();
  }
  console.log('escrito', path.relative(ROOT, path.join(OUT, file)));
}

await render(flagSvg({ rounded: true, pad: 0 }), 'icon-512.png', 512);
await render(flagSvg({ rounded: true, pad: 0 }), 'icon-192.png', 192);
await render(flagSvg({ rounded: false, pad: 80 }), 'icon-maskable-512.png', 512);
await render(flagSvg({ rounded: true, pad: 0 }), 'apple-touch-icon.png', 180);

await browser.close();
