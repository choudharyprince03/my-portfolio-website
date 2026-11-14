import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(path.join(process.cwd(), 'package.json'));
const { chromium } = require('playwright-core');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const RAW_DIR = path.resolve('scrollcraft/builds/prince-portfolio/raw');
const OUT_DIR = path.resolve('public/assets/hero');
const CHECK_PATH = path.resolve('scrollcraft/builds/prince-portfolio/alpha-check.png');

const jobs = [
  { inFile: 'hero-mid-plate.jpg', outFile: 'hero-mid.png', mode: 'columns' },
  { inFile: 'hero-monolith-plate.jpg', outFile: 'hero-monolith.png', mode: 'monolith' },
  { inFile: 'hero-fg-plate.jpg', outFile: 'hero-fg.png', mode: 'foreground' },
];

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage();

const results = [];

for (const job of jobs) {
  const buf = fs.readFileSync(path.join(RAW_DIR, job.inFile));
  const dataUrl = `data:image/jpeg;base64,${buf.toString('base64')}`;

  const outDataUrl = await page.evaluate(async ({ src, mode }) => {
    const img = new Image();
    img.src = src;
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; });

    const w = img.naturalWidth;
    const h = img.naturalHeight;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const imgData = ctx.getImageData(0, 0, w, h);
    const d = imgData.data;
    const total = w * h;

    // Sample average chroma key from top-left and top-center corners
    let kr = 0, kg = 0, kb = 0, kc = 0;
    for (let y = 4; y < 20; y++) {
      for (let x = 4; x < 20; x++) {
        const idx = (y * w + x) * 4;
        if (Math.min(d[idx], d[idx + 2]) - d[idx + 1] > 40) {
          kr += d[idx]; kg += d[idx + 1]; kb += d[idx + 2]; kc++;
        }
      }
    }
    if (kc > 0) { kr /= kc; kg /= kc; kb /= kc; }
    else { kr = 230; kg = 30; kb = 210; }

    // Compute magenta-ness score for each pixel
    const magScore = new Float32Array(total);
    for (let i = 0; i < total; i++) {
      const p = i * 4;
      const r = d[p], g = d[p + 1], b = d[p + 2];
      // Excess of min(r, b) over g, plus proximity to key hue ratio
      const excess = Math.min(r, b) - g;
      const diff = Math.abs(r - kr) * 0.35 + Math.abs(b - kb) * 0.35 + Math.abs(g - kg) * 0.4;
      magScore[i] = excess - diff * 0.12;
    }

    // Flood fill background from borders so internal glass highlights stay intact
    const bgMask = new Uint8Array(total); // 1 = confirmed background
    const queue = new Int32Array(total);
    let qHead = 0, qTail = 0;

    const bgThresh = mode === 'monolith' ? 22 : 24;
    const pushIfBg = (idx) => {
      if (bgMask[idx] === 0 && magScore[idx] > bgThresh) {
        bgMask[idx] = 1;
        queue[qTail++] = idx;
      }
    };

    for (let x = 0; x < w; x++) {
      pushIfBg(x);
      if (mode !== 'foreground') pushIfBg((h - 1) * w + x);
    }
    for (let y = 0; y < h; y++) {
      pushIfBg(y * w);
      pushIfBg(y * w + (w - 1));
    }

    while (qHead < qTail) {
      const idx = queue[qHead++];
      const x = idx % w;
      const y = (idx - x) / w;
      if (x > 0) pushIfBg(idx - 1);
      if (x + 1 < w) pushIfBg(idx + 1);
      if (y > 0) pushIfBg(idx - w);
      if (y + 1 < h) pushIfBg(idx + w);
    }

    // Distance feathering (2px soft edge around bgMask boundary) + interior strong chroma cleanup for monolith/columns
    const alpha = new Uint8Array(total);
    for (let i = 0; i < total; i++) {
      if (bgMask[i] === 1) {
        alpha[i] = 0;
      } else {
        // Check if pixel itself is still strongly magenta on edges
        const ms = magScore[i];
        if (ms > 36 && mode !== 'foreground') {
          alpha[i] = 0;
        } else if (ms > 10) {
          const t = (36 - ms) / 26;
          alpha[i] = Math.max(0, Math.min(255, Math.round(t * 255)));
        } else {
          alpha[i] = 255;
        }
      }
    }

    // Smooth 1px edge anti-aliasing along bgMask boundary
    const alphaSmooth = new Uint8Array(alpha);
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const i = y * w + x;
        if (alpha[i] > 0) {
          const n0 = alpha[i - 1] === 0 ? 1 : 0;
          const n1 = alpha[i + 1] === 0 ? 1 : 0;
          const n2 = alpha[i - w] === 0 ? 1 : 0;
          const n3 = alpha[i + w] === 0 ? 1 : 0;
          const zeroNeighbors = n0 + n1 + n2 + n3;
          if (zeroNeighbors > 0) {
            const avg = (alpha[i] * 2 + alpha[i - 1] + alpha[i + 1] + alpha[i - w] + alpha[i + w]) / 6;
            alphaSmooth[i] = Math.round(avg);
          }
        }
      }
    }

    // For foreground: enforce every column is 100% solid below its first opaque pixel
    if (mode === 'foreground') {
      for (let x = 0; x < w; x++) {
        let hit = false;
        for (let y = 0; y < h; y++) {
          const i = y * w + x;
          if (!hit && alphaSmooth[i] > 200) hit = true;
          if (hit) alphaSmooth[i] = 255;
        }
      }
    }

    // Magenta spill suppression (despill) + dark edge neutralisation
    for (let i = 0; i < total; i++) {
      const a = alphaSmooth[i];
      const p = i * 4;
      d[p + 3] = a;
      if (a === 0) {
        d[p] = 0; d[p + 1] = 0; d[p + 2] = 0;
        continue;
      }
      let r = d[p], g = d[p + 1], b = d[p + 2];
      const spill = Math.min(r, b) - g;
      if (spill > 2) {
        // Pull red & blue back toward neutral/cool slate (keep slight cool blue tint, kill magenta)
        const target = g + Math.max(0, spill * 0.08);
        r = Math.min(r, Math.round(target));
        b = Math.min(b, Math.round(target + 6));
      }
      // Also neutralize pure warm-pink edge reflections (r > g + 8 && b > g)
      if (r > g + 6 && b > g) {
        const lum = r * 0.25 + g * 0.55 + b * 0.20;
        r = Math.round(lum * 0.92);
        g = Math.round(lum * 0.96);
        b = Math.round(Math.min(255, lum * 1.06));
      }
      d[p] = r; d[p + 1] = g; d[p + 2] = b;
    }

    ctx.putImageData(imgData, 0, 0);
    return canvas.toDataURL('image/png');
  }, { src: dataUrl, mode: job.mode });

  const base64 = outDataUrl.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync(path.join(OUT_DIR, job.outFile), Buffer.from(base64, 'base64'));
  results.push(job.outFile);
}

// Render alpha inspection sheet over light (#F4F6FA) and dark (#0B0E14) side-by-side
await page.setViewportSize({ width: 1400, height: 960 });
const imgs = results.map((f) => {
  const b64 = fs.readFileSync(path.join(OUT_DIR, f)).toString('base64');
  return { name: f, src: `data:image/png;base64,${b64}` };
});

await page.setContent(`
  <body style="margin:0;background:#1a1d24;font-family:monospace;color:#eee;padding:24px;display:grid;grid-template-columns:1fr 1fr;gap:20px;">
    ${imgs.map((im) => `
      <div>
        <div style="margin-bottom:6px">${im.name} — on LIGHT (#F4F6FA)</div>
        <div style="background:#F4F6FA;border-radius:10px;padding:12px;height:250px;display:flex;align-items:center;justify-content:center;">
          <img src="${im.src}" style="max-height:100%;max-width:100%;object-fit:contain;" />
        </div>
      </div>
      <div>
        <div style="margin-bottom:6px">${im.name} — on DARK (#0B0E14)</div>
        <div style="background:#0B0E14;border-radius:10px;padding:12px;height:250px;display:flex;align-items:center;justify-content:center;">
          <img src="${im.src}" style="max-height:100%;max-width:100%;object-fit:contain;" />
        </div>
      </div>
    `).join('')}
  </body>
`);
await page.screenshot({ path: CHECK_PATH });
await browser.close();
console.log('Extracted & verified:', results.join(', '));
