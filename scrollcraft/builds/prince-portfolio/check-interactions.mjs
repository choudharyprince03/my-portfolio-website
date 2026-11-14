import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(path.join(process.cwd(), 'package.json'));
const { chromium } = require('playwright-core');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const URL = process.argv[2] || 'http://localhost:4500';

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const consoleErrors = [];
const failedRequests = [];
page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
page.on('pageerror', (e) => consoleErrors.push(String(e)));
page.on('requestfailed', (r) => failedRequests.push(`${r.failure()?.errorText} ${r.url()}`));

await page.goto(URL, { waitUntil: 'domcontentloaded' });
await page.waitForSelector('html.sc-ready', { timeout: 10000 });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(550);

// 1. ScrollCraft mount & hero switcher
const initialMetrics = await page.evaluate(() => {
  const track = document.querySelector('#work-horizontal-track');
  const pinStage = document.querySelector('#work-pin-stage');
  return {
    scReady: document.documentElement.classList.contains('sc-ready'),
    docOverflowX: document.documentElement.scrollWidth - window.innerWidth,
    hasProgressBar: Boolean(document.querySelector('[data-sc-progress]')),
    hasGrain: Boolean(document.querySelector('.sc-grain')),
    hasPinSpacer: Boolean(pinStage?.closest('.pin-spacer')),
    trackScrollWidth: track?.scrollWidth || 0,
    emDashCount: (document.body.innerText.match(/—/g) || []).length,
  };
});

// Switch Portfolio Index tile inside Hero
const beforeHeroIdx = await page.locator('#hero').innerText();
await page.locator('#hero button[aria-label^="Preview"]').nth(1).click();
await page.waitForTimeout(220);
const afterHeroIdx = await page.locator('#hero').innerText();

// Test ScrollCraft spotlight + CustomCursor response
await page.mouse.move(1140, 380, { steps: 8 });
await page.waitForTimeout(250);
const pointerState = await page.evaluate(() => {
  const spotEl = document.querySelector('#hero [data-sc-spotlight]');
  return {
    spotlightMx: spotEl?.style.getPropertyValue('--sc-mx') || '',
    spotlightMy: spotEl?.style.getPropertyValue('--sc-my') || '',
  };
});

// 2. Philosophy pillar switcher
await page.locator('#philosophy [role="tab"]').nth(2).click();
await page.waitForTimeout(200);
const philoHeading = await page.locator('#philosophy h3').textContent();

// 3. Experience timeline & VizionTools toggle
await page.locator('#experience button', { hasText: 'RegisterKaro' }).first().click();
await page.waitForTimeout(220);
const rkRoleHeading = await page.locator('#experience h3').last().textContent();

// 4. Scroll through Experience spine + FeaturedWork pin & horizontal translate
await page.locator('#work').scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
const workScrollCheck = await page.evaluate(async () => {
  const pinStage = document.querySelector('#work-pin-stage');
  const spacer = pinStage?.closest('.pin-spacer');
  if (spacer) {
    const top = spacer.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, top + 360);
    await new Promise((r) => setTimeout(r, 250));
  }
  const track = document.querySelector('#work-horizontal-track');
  const bar = document.querySelector('[data-sc-progress]');
  const spine = document.querySelector('#experience-spine-progress');
  return {
    trackTransformMid: track ? getComputedStyle(track).transform : 'none',
    progressScaleX: bar ? getComputedStyle(bar).transform : 'none',
    spineDashOffset: spine ? getComputedStyle(spine).strokeDashoffset : 'none',
    overflowDuringPin: document.documentElement.scrollWidth - window.innerWidth,
  };
});

// Click Nexus card to verify Case Study Reader sync
await page.locator('#work-horizontal-track article', { hasText: 'Nexus' }).click();
await page.waitForTimeout(260);
const activeCaseHeading = await page.locator('#case-study-reader h3').textContent();

// 5. Thinking Three-Lens Synthesizer -> Contact subject sync
await page.locator('#thinking [role="tab"]', { hasText: 'Commercial' }).click();
await page.waitForTimeout(200);
const syncCheck = await page.evaluate(() => {
  const subj = document.querySelector('#contact input[name="subject"]')?.value || '';
  const action = document.querySelector('#contact form')?.getAttribute('action') || '';
  const method = document.querySelector('#contact form')?.getAttribute('method') || '';
  return { contactSubject: subj, action, method };
});

// 6. Capabilities selector click
await page.locator('#capabilities button', { hasText: 'UX & Product' }).click();
await page.waitForTimeout(200);
const capTitle = await page.locator('#capabilities .font-mono.text-xs.text-\\[\\#66E3FF\\]').first().textContent();

// 7. Image health check
const imgHealth = await page.evaluate(() =>
  [...document.querySelectorAll('img')].map((im) => ({
    alt: im.getAttribute('alt'),
    src: im.getAttribute('src'),
    complete: im.complete,
    w: im.naturalWidth,
  }))
);

// 8. Route transitions (/project/5, /project/1, /resume)
await page.goto(`${URL}/project/5`, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(350);
const posHeading = await page.locator('h1').textContent();

await page.goto(`${URL}/project/1`, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(350);
const nexusHeading = await page.locator('h1').textContent();

await page.goto(`${URL}/resume`, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(350);
const resumeIframeCount = await page.locator('iframe').count();

await browser.close();

console.log(
  JSON.stringify(
    {
      initialMetrics,
      heroSwitched: beforeHeroIdx !== afterHeroIdx,
      pointerState,
      philoHeading,
      rkRoleHeading,
      workScrollCheck,
      activeCaseHeading,
      syncCheck,
      capTitle,
      brokenImages: imgHealth.filter((i) => !i.complete || i.w === 0),
      totalImages: imgHealth.length,
      routes: { posHeading, nexusHeading, resumeIframeCount },
      consoleErrors,
      failedRequests,
    },
    null,
    2
  )
);
