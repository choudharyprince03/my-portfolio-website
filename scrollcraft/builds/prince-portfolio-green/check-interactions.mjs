import { chromium } from 'playwright-core';

const BASE = 'http://127.0.0.1:4510';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function main() {
  const browser = await chromium.launch({
    executablePath: CHROME,
    headless: true,
  });

  const consoleErrors = [];
  const pageErrors = [];
  const failedRequests = [];

  const attachLogs = (page) => {
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', (err) => {
      pageErrors.push(err.message);
    });
    page.on('requestfailed', (req) => {
      const url = req.url();
      // Ignore canceled YouTube embeds if navigation happens mid-load
      if (!url.includes('youtube.com')) {
        failedRequests.push(`${req.method()} ${url}: ${req.failure()?.errorText}`);
      }
    });
  };

  try {
    // 1. Desktop flow + ScrollCraft interactions
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    attachLogs(page);

    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);

    const scReady = await page.evaluate(() => document.documentElement.classList.contains('sc-ready'));
    if (!scReady) throw new Error('html.sc-ready missing after mount');

    const overflowDesktop = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    if (overflowDesktop) throw new Error('Desktop horizontal overflow detected');

    // Check zero em dashes in visible DOM text
    const emDashCount = await page.evaluate(() => (document.body.innerText.match(/\u2014/g) || []).length);
    if (emDashCount > 0) throw new Error(`Found ${emDashCount} em dashes in visible UI text`);

    // Check all loaded images on homepage
    await page.evaluate(async () => {
      for (const img of Array.from(document.querySelectorAll('img'))) {
        img.scrollIntoView({ behavior: 'instant', block: 'center' });
        await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    await page.waitForTimeout(350);

    const brokenImgs = await page.evaluate(() =>
      Array.from(document.querySelectorAll('img'))
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.getAttribute('src'))
    );
    if (brokenImgs.length) throw new Error(`Broken images on /: ${brokenImgs.join(', ')}`);

    // Verify Hero pixel sprite switches from idle-neutral -> thinking-curious during pin scroll
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(150);
    const heroInitialSrc = await page.locator('#hero img.pixel-sprite').last().getAttribute('src');
    await page.evaluate(() => window.scrollTo({ top: Math.round(window.innerHeight * 0.58), behavior: 'instant' }));
    await page.waitForTimeout(200);
    const heroMidSrc = await page.locator('#hero img.pixel-sprite').last().getAttribute('src');
    if (heroInitialSrc === heroMidSrc || !heroInitialSrc?.includes('idle-neutral.png') || !heroMidSrc?.includes('thinking-curious.png')) {
      throw new Error(`Hero sprite did not switch on scroll: ${heroInitialSrc} -> ${heroMidSrc}`);
    }

    // Verify Journey tab switch updates active station & sprite
    await page.locator('#experience').scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await page.getByRole('tab', { name: /RegisterKaro/i }).click();
    await page.waitForTimeout(150);
    const rkSprite = await page.locator('#experience img.pixel-sprite').getAttribute('src');
    if (!rkSprite?.includes('strained-effort.png')) {
      throw new Error(`RegisterKaro sprite mismatch: ${rkSprite}`);
    }
    await page.getByRole('tab', { name: /VizionTools/i }).click();
    await page.waitForTimeout(150);
    const vtSprite = await page.locator('#experience img.pixel-sprite').getAttribute('src');
    if (!vtSprite?.includes('approve-thumbsup.png')) {
      throw new Error(`VizionTools sprite mismatch: ${vtSprite}`);
    }

    // Verify LaunchWork pan rail travels horizontally on vertical scroll
    const panMeasure = await page.evaluate(async () => {
      const work = document.getElementById('work');
      const rail = work?.querySelector('[data-sc-pan]');
      if (!work || !rail) return null;
      const top = work.getBoundingClientRect().top + window.scrollY;
      const h = work.getBoundingClientRect().height;
      window.scrollTo({ top, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 150));
      const t0 = getComputedStyle(rail).transform;
      window.scrollTo({ top: top + Math.max(0, h - window.innerHeight) * 0.75, behavior: 'instant' });
      await new Promise((r) => setTimeout(r, 150));
      const t1 = getComputedStyle(rail).transform;
      return { t0, t1, railScrollW: rail.scrollWidth, innerW: window.innerWidth };
    });
    if (!panMeasure || panMeasure.t0 === panMeasure.t1) {
      throw new Error(`LaunchWork pan rail did not translate horizontally: ${JSON.stringify(panMeasure)}`);
    }

    // Verify Craft lens toggle synchronizes with Contact hidden input & note
    await page.locator('#craft').scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);
    await page.locator('#craft').getByRole('tab', { name: 'Engineering' }).click();
    await page.waitForTimeout(120);
    const hiddenLens = await page.locator('#contact form input[name="lens"]').inputValue();
    if (hiddenLens !== 'Engineering') {
      throw new Error(`Contact form hidden lens did not sync: got "${hiddenLens}"`);
    }

    // Check /project/5 (Produce POS) and /project/1 (Nexus)
    await page.goto(`${BASE}/project/5`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    const posTitle = await page.locator('h1').textContent();
    if (!posTitle?.includes('Produce POS')) throw new Error(`/project/5 mismatch: ${posTitle}`);

    await page.goto(`${BASE}/project/1`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    const nexusTitle = await page.locator('h1').textContent();
    if (!nexusTitle?.includes('Nexus')) throw new Error(`/project/1 mismatch: ${nexusTitle}`);

    // Check /resume route
    await page.goto(`${BASE}/resume`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    const resumeHref = await page.locator('a[download]').first().getAttribute('href');
    if (!resumeHref?.includes('Resume_Prince')) throw new Error(`/resume download href invalid: ${resumeHref}`);

    // Mobile check (390x844)
    const mCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const mPage = await mCtx.newPage();
    attachLogs(mPage);
    await mPage.goto(BASE, { waitUntil: 'networkidle' });
    await mPage.waitForTimeout(300);
    const overflowMobile = await mPage.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    if (overflowMobile) throw new Error('Mobile horizontal overflow detected at 390x844');

    if (consoleErrors.length) throw new Error(`Console errors: ${consoleErrors.join(' | ')}`);
    if (pageErrors.length) throw new Error(`Page errors: ${pageErrors.join(' | ')}`);
    if (failedRequests.length) throw new Error(`Failed requests: ${failedRequests.join(' | ')}`);

    console.log(
      JSON.stringify(
        {
          ok: true,
          scReady,
          heroTransition: [heroInitialSrc, heroMidSrc],
          panMeasure,
          routesChecked: ['/', '/project/5', '/project/1', '/resume'],
          overflowDesktop,
          overflowMobile,
        },
        null,
        2
      )
    );
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error('INTERACTION CHECK FAILED:', err);
  process.exit(1);
});
