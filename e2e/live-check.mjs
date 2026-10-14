// Headless Chrome check of the deployed site (or any URL passed as argv[2]).
// Usage: node e2e/live-check.mjs [url] [screenshotDir]
import { chromium } from 'playwright-core';

const URL_BASE = process.argv[2] || 'https://abhi1kush.github.io/sort-pedia/';
const OUT = process.argv[3] || '/workspace';
const CHROME = process.env.CHROME_PATH || '/usr/bin/google-chrome';

let passed = 0, failed = 0;
function check(name, cond, extra = '') {
  if (cond) { passed++; console.log(`  PASS ${name}${extra && /measured|gained/.test(extra) ? ` (${extra})` : ""}`); }
  else { failed++; console.log(`  FAIL ${name} ${extra}`); }
}

const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
const errors = [];
async function newPage(viewport) {
  const ctx = await browser.newContext({ viewport });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });
  return page;
}
const isSortedNums = (s) => { const a = s.split(',').map((x) => Number(x.trim())); return a.every((v, i) => i === 0 || a[i - 1] <= v); };

try {
  // ---------------- desktop
  const page = await newPage({ width: 1280, height: 900 });
  console.log(`Checking ${URL_BASE}`);
  await page.goto(URL_BASE, { waitUntil: 'networkidle' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle' });

  console.log('Landing');
  check('title is Sort Pedia', (await page.locator('h1').first().innerText()) === 'Sort Pedia');
  const indexLinks = await page.locator('[data-testid=algo-index] a').count();
  check('index lists 20 algorithms', indexLinks === 20, `got ${indexLinks}`);
  const ranks = await page.locator('[data-testid=ranking] > li').count();
  check('ranking lists 20 algorithms', ranks === 20, `got ${ranks}`);
  const firstLast = await page.locator('[data-testid=ranking] h3').evaluateAll((els) => [els[0].textContent, els[els.length - 1].textContent]);
  check('ranking starts with Timsort and ends with Bogo', /Timsort/.test(firstLast[0]) && /Bogo/.test(firstLast[1]), firstLast.join(' / '));
  await page.screenshot({ path: `${OUT}/sort-pedia-landing.png`, fullPage: false });

  console.log('Index navigation + algorithm page');
  await page.locator('[data-testid=algo-index] a', { hasText: 'Merge sort' }).click();
  await page.waitForSelector('[data-testid=algo-page]');
  check('hash route is #/algo/merge', page.url().endsWith('#/algo/merge'), page.url());
  check('page heading is Merge sort', /Merge sort/.test(await page.locator('h1').innerText()));
  check('info table present', (await page.locator('[data-testid=info-table] tr').count()) === 7);
  check('growth chart present', (await page.locator('[data-testid=growth-chart] polyline').count()) >= 6);
  const code = page.locator('[data-testid=code-block]');
  check('default language is Java', (await code.getAttribute('data-lang')) === 'java' && /class MergeSort/.test(await code.innerText()));
  check('syntax highlighting applied', (await page.locator('[data-testid=code-block] .token.keyword').count()) > 3);
  const twoCols = await page.evaluate(() => { const c = document.querySelectorAll('.two-col > .card'); const a = c[0].getBoundingClientRect(), b = c[1].getBoundingClientRect(); return Math.abs(a.top - b.top) < 2 && b.left > a.right - 1; });
  check('explanation and code side by side on desktop', twoCols);

  console.log('Language switch');
  const expectByLang = { c: /void sort_array\(int \*arr, int n\)/, cpp: /void sortArray\(std::vector<int>& arr\)/, go: /func sortArray\(arr \[\]int\)/, rust: /pub fn sort_array\(arr: &mut \[i32\]\)/, python: /def sort_array\(arr\)/, java: /class MergeSort/ };
  for (const [lang, re] of Object.entries(expectByLang)) {
    await page.selectOption('[data-testid=lang-select]', lang);
    check(`switch to ${lang}`, (await code.getAttribute('data-lang')) === lang && re.test(await code.innerText()));
  }
  await page.screenshot({ path: `${OUT}/sort-pedia-algo.png`, fullPage: false });

  console.log('Default-language setting');
  await page.selectOption('[data-testid=default-lang]', 'go');
  check('setting updates the open code panel', (await code.getAttribute('data-lang')) === 'go');
  check('setting saved to localStorage', (await page.evaluate(() => localStorage.getItem('sort-pedia:default-language'))) === 'go');
  await page.goto(`${URL_BASE}#/algo/heap`, { waitUntil: 'networkidle' });
  await page.reload({ waitUntil: 'networkidle' });
  check('setting persists across reload / pages', (await page.locator('[data-testid=code-block]').getAttribute('data-lang')) === 'go' && /siftDown/.test(await page.locator('[data-testid=code-block]').innerText()));
  await page.selectOption('[data-testid=default-lang]', 'java');

  console.log('Playground');
  await page.goto(`${URL_BASE}#/algo/quick`, { waitUntil: 'networkidle' });
  await page.click('[data-testid=pg-sample]');
  await page.waitForSelector('[data-testid=pg-output]');
  const sampleOut = await page.locator('[data-testid=pg-output]').innerText();
  check('sample data sorted', isSortedNums(sampleOut) && sampleOut.split(',').length >= 10, sampleOut);
  check('comparisons reported', Number((await page.locator('[data-testid=pg-cmp]').innerText()).replace(/,/g, '')) > 0);
  check('time reported', /ms/.test(await page.locator('[data-testid=pg-time]').innerText()));

  await page.fill('[data-testid=pg-input]', '5, 3, x');
  await page.click('[data-testid=pg-run]');
  check('invalid input shows a clear error', /"x" \(item 3\) is not a whole number/.test(await page.locator('[data-testid=pg-error]').innerText()));
  await page.fill('[data-testid=pg-input]', '');
  await page.click('[data-testid=pg-run]');
  check('empty input error', /at least one number/.test(await page.locator('[data-testid=pg-error]').innerText()));
  await page.fill('[data-testid=pg-input]', '42, -7 13,0  99 13 -100');
  await page.click('[data-testid=pg-run]');
  await page.waitForSelector('[data-testid=pg-output]');
  check('user input sorted correctly', (await page.locator('[data-testid=pg-output]').innerText()).trim() === '-100, -7, 0, 13, 13, 42, 99');
  check('swaps reported', /^\d[\d,]*$/.test((await page.locator('[data-testid=pg-swaps]').innerText()).trim()));

  await page.goto(`${URL_BASE}#/algo/bogo`, { waitUntil: 'networkidle' });
  await page.fill('[data-testid=pg-input]', '9 8 7 6 5 4 3 2 1');
  await page.click('[data-testid=pg-run]');
  check('bogo size limit enforced (≤ 8)', /at most 8/.test(await page.locator('[data-testid=pg-error]').innerText()));
  await page.fill('[data-testid=pg-input]', '4 2 3 1 0');
  await page.click('[data-testid=pg-run]');
  await page.waitForSelector('[data-testid=pg-output]');
  check('bogo sorts small input', (await page.locator('[data-testid=pg-output]').innerText()).trim() === '0, 1, 2, 3, 4');

  console.log('Visualization');
  await page.goto(`${URL_BASE}#/algo/insertion`, { waitUntil: 'networkidle' });
  const vals = [30, 5, 22, 17, 9, 28, 1, 14, 25, 3, 19, 11, 27, 7, 21, 13, 2, 24, 16, 8];
  await page.fill('[data-testid=pg-input]', vals.join(' '));
  await page.click('[data-testid=pg-viz]');
  await page.waitForSelector('[data-testid=viz-bars] .bar');
  check('one bar per value', (await page.locator('[data-testid=viz-bars] .bar').count()) === vals.length);
  const h0 = await page.locator('[data-testid=viz-bars] .bar').evaluateAll((els) => els.map((e) => [Number(e.dataset.value), e.getBoundingClientRect().height]));
  const heightOrderOk = h0.every(([v, h]) => h0.every(([v2, h2]) => (v < v2 ? h < h2 : v > v2 ? h > h2 : Math.abs(h - h2) < 0.5)));
  check('bar heights match values', heightOrderOk);
  await page.waitForTimeout(1500);
  const status1 = await page.locator('[data-testid=viz-status]').innerText();
  const stepNum = (s) => Number(s.match(/Step ([\d,]+)/)[1].replace(/,/g, ''));
  check('animation advances while playing', stepNum(status1) > 0, status1);
  const setHl = await page.locator('[data-testid=viz-bars] .bar.set').count();
  check('write op highlights exactly one bar', setHl <= 1, `got ${setHl}`);
  check('highlights shown during animation', (await page.locator('[data-testid=viz-bars] .bar.cmp, [data-testid=viz-bars] .bar.swap, [data-testid=viz-bars] .bar.set').count()) > 0);
  await page.click('[data-testid=viz-play]'); // pause briefly for a stable mid-run screenshot
  await page.locator('[data-testid=viz]').scrollIntoViewIfNeeded();
  await page.locator('[data-testid=playground]').screenshot({ path: `${OUT}/sort-pedia-visual.png` });
  await page.click('[data-testid=viz-play]'); // resume
  await page.click('[data-testid=viz-play]'); // pause
  const pausedAt = stepNum(await page.locator('[data-testid=viz-status]').innerText());
  await page.waitForTimeout(500);
  check('pause stops the animation', stepNum(await page.locator('[data-testid=viz-status]').innerText()) === pausedAt);
  await page.click('[data-testid=viz-step]');
  check('step advances by one', stepNum(await page.locator('[data-testid=viz-status]').innerText()) === pausedAt + 1);
  await page.locator('[data-testid=viz-speed]').fill('1000');
  await page.click('[data-testid=viz-play]');
  await page.waitForFunction(() => /✓ sorted|mismatch|truncated/.test(document.querySelector('[data-testid=viz-status]').textContent), null, { timeout: 30000 });
  check('visualization replays to the sorted array', /✓ sorted/.test(await page.locator('[data-testid=viz-status]').innerText()));
  const finalVals = await page.locator('[data-testid=viz-bars] .bar').evaluateAll((els) => els.map((e) => Number(e.dataset.value)));
  check('final bars are sorted', JSON.stringify(finalVals) === JSON.stringify([...vals].sort((a, b) => a - b)));

  console.log('Benchmark');
  await page.goto(`${URL_BASE}#/algo/heap`, { waitUntil: 'networkidle' });
  await page.click('[data-testid=bench-run]');
  await page.waitForFunction(() => document.querySelectorAll('[data-testid=bench-table] tbody tr').length === 5 && !document.querySelector('[data-testid=bench-run]').disabled, null, { timeout: 120000 });
  const cells = await page.locator('[data-testid=bench-table] tbody td').allInnerTexts();
  check('benchmark measured 5 sizes x 5 shapes', cells.length === 30 && cells.filter((_, i) => i % 6 !== 0).every((c) => Number(c) >= 0 && c !== '…'));

  console.log('Every algorithm page sorts sample data in WASM');
  const ids = await page.locator('[data-testid=jump-select] option').evaluateAll((os) => os.map((o) => o.value).filter(Boolean));
  let allOk = true; const bad = [];
  for (const id of ids) {
    await page.goto(`${URL_BASE}#/algo/${id}`, { waitUntil: 'networkidle' });
    await page.click('[data-testid=pg-sample]');
    await page.waitForSelector('[data-testid=pg-output]');
    const out = await page.locator('[data-testid=pg-output]').innerText();
    await page.click('[data-testid=pg-viz]');
    await page.click('[data-testid=viz-end]');
    await page.waitForFunction(() => /✓ sorted|mismatch|truncated/.test(document.querySelector('[data-testid=viz-status]')?.textContent || ''), null, { timeout: 60000 });
    const st = await page.locator('[data-testid=viz-status]').innerText();
    if (!isSortedNums(out) || !/✓ sorted/.test(st)) { allOk = false; bad.push(`${id}: ${st}`); }
  }
  check(`all ${ids.length} algorithms: sample sorted + visualization replays to sorted`, allOk && ids.length === 20, bad.join('; '));


  console.log('Teaching visualization: speed, pointers, captions, step back');
  const stepOf = async (pg) => Number((await pg.locator('[data-testid=viz-step-num]').innerText()).replace(/,/g, ''));
  const startViz = async (pg, algoId, values) => {
    await pg.goto(`${URL_BASE}#/algo/${algoId}`, { waitUntil: 'networkidle' });
    await pg.fill('[data-testid=pg-input]', values.join(' '));
    await pg.click('[data-testid=pg-viz]');
    await pg.waitForSelector('[data-testid=viz-bars] .bar');
  };
  const teach = [30, 5, 22, 17, 9, 28, 1, 14, 25, 3, 19, 11, 27, 7, 21, 13, 2, 24, 16, 8];
  await startViz(page, 'insertion', teach);
  check('default speed is slow (2 steps/s)', /^2\.0 steps\/s$/.test(await page.locator('[data-testid=viz-speed-value]').innerText()));
  check('speed presets present', (await page.locator('[data-testid^=speed-]').count()) === 4);
  const rate = async (ms) => { const a = await stepOf(page); const t0 = Date.now(); await page.waitForTimeout(ms); const b = await stepOf(page); return (b - a) / ((Date.now() - t0) / 1000); };
  await page.click('[data-testid=speed-slow]');
  const slowRate = await rate(6000);
  check('Slow really is slow: ~2 steps/s measured', slowRate >= 1.3 && slowRate <= 2.7, `measured ${slowRate.toFixed(2)} steps/s`);
  await page.click('[data-testid=speed-very-slow]');
  const vslow = await rate(6000);
  check('Very slow: ~0.5 steps/s measured', vslow >= 0.15 && vslow <= 0.85, `measured ${vslow.toFixed(2)} steps/s`);
  const before = await stepOf(page);
  await page.click('[data-testid=speed-fast]');
  await page.waitForTimeout(1000);
  const fastGain = (await stepOf(page)) - before;
  check('speed change mid-run takes effect immediately (Fast ≈ 60 steps/s)', fastGain >= 25, `gained ${fastGain} steps in 1s`);
  await page.locator('[data-testid=viz-speed]').fill('0');
  check('slider minimum is 0.25 steps/s', /^0\.25 steps\/s$/.test(await page.locator('[data-testid=viz-speed-value]').innerText()));
  await page.locator('[data-testid=viz-speed]').fill('1000');
  check('slider maximum is 200 steps/s', /^200 steps\/s$/.test(await page.locator('[data-testid=viz-speed-value]').innerText()));

  // keyboard + step back on insertion
  await startViz(page, 'insertion', teach);
  await page.click('[data-testid=viz-play]'); // pause auto-play
  await page.click('[data-testid=viz-reset]');
  await page.locator('h2#play-h').click(); // move focus off the buttons
  await page.keyboard.press('ArrowRight'); await page.keyboard.press('ArrowRight'); await page.keyboard.press('ArrowRight');
  check('→ key steps forward', (await stepOf(page)) === 3);
  const snapViz = async () => JSON.stringify([await stepOf(page), await page.locator('[data-testid=viz-bars] .bar').evaluateAll((e) => e.map((x) => x.dataset.value)), await page.locator('[data-testid=viz-pointers] [data-ptr]').evaluateAll((e) => e.map((x) => x.dataset.ptr + '@' + x.parentElement.dataset.index)), await page.locator('[data-testid=viz-caption]').innerText()]);
  const s3 = await snapViz();
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowLeft');
  check('← key steps back to the identical state (bars, pointers, caption)', (await snapViz()) === s3);
  await page.click('[data-testid=viz-step]'); await page.click('[data-testid=viz-step]');
  await page.click('[data-testid=viz-back]'); await page.click('[data-testid=viz-back]');
  check('Back button restores the previous state', (await snapViz()) === s3);
  await page.locator('h2#play-h').click();
  await page.keyboard.press('Space');
  check('Space starts playback', /Pause/.test(await page.locator('[data-testid=viz-play]').innerText()));
  await page.keyboard.press('Space');
  check('Space pauses playback', /Play/.test(await page.locator('[data-testid=viz-play]').innerText()));
  const total = Number((await page.locator('[data-testid=viz-scrub]').getAttribute('max')));
  await page.locator('[data-testid=viz-scrub]').fill(String(Math.floor(total / 2)));
  check('progress scrubber seeks', (await stepOf(page)) === Math.floor(total / 2), `${await stepOf(page)} vs ${Math.floor(total / 2)}`);

  for (const [algoId, ptrs, capRe] of [
    ['quick', ['pivot', 'i', 'lessEnd', 'greaterStart'], /pivot \d+: \d+ [<>=] \d+, so it (joins the "less" block|joins the "greater" block|stays with the pivot copies)/],
    ['insertion', ['key', 'hole'], /Compare key \d+ with arr\[\d+\]=\d+|Write \d+ into arr\[/],
    ['merge', ['writePos', 'rightPos', 'mid'], /left-run value \d+ with arr\[\d+\]=\d+ \(.*right pos.*\)|Write \d+ into arr\[\d+\]/],
  ]) {
    await startViz(page, algoId, teach);
    await page.click('[data-testid=viz-play]'); // pause
    const seen = new Set(); const caps = new Set();
    for (let k = 0; k < 40; k++) {
      await page.click('[data-testid=viz-step]');
      (await page.locator('[data-testid=viz-pointers] [data-ptr]').evaluateAll((e) => e.map((x) => x.dataset.ptr))).forEach((x) => seen.add(x));
      caps.add(await page.locator('[data-testid=viz-caption]').innerText());
    }
    const missing = ptrs.filter((x) => !seen.has(x));
    check(`${algoId}: pointer markers shown (${ptrs.join(', ')})`, missing.length === 0, `missing ${missing} seen ${[...seen]}`);
    check(`${algoId}: plain-language captions shown`, [...caps].some((c) => capRe.test(c)), [...caps].slice(0, 3).join(' | '));
    const shown = await page.locator('[data-testid=viz-pointers] .ptr-name').allInnerTexts();
    check(`${algoId}: no cryptic pointer labels on screen`, !shown.some((t) => t.split(/,\s*/).some((x) => /^(lt|gt|j|k|m|a|scan)$/.test(x.trim()))), shown.join(','));
    check(`${algoId}: captions say arr[...] not a[...]`, ![...caps].some((c) => /\ba\[/.test(c)), [...caps].find((c) => /\ba\[/.test(c)));
    const legend = await page.locator('[data-testid=viz-ptr-legend] [data-legend]').evaluateAll((e) => e.map((x) => x.dataset.legend));
    check(`${algoId}: pointer legend lists ${ptrs.join(', ')}`, ptrs.every((x) => legend.includes(x)), legend.join(','));
    check(`${algoId}: legend entries have descriptions`, (await page.locator('[data-testid=viz-ptr-legend] dd').allInnerTexts()).every((t) => t.trim().length > 8));
    check(`${algoId}: counters update`, /Comparisons \d+/.test(await page.locator('[data-testid=viz-status]').innerText()));
    if (algoId === 'quick') {
      for (let k = 0; k < 60 && !/with pivot/.test(await page.locator('[data-testid=viz-caption]').innerText()); k++) await page.click('[data-testid=viz-step]');
      await page.click('[data-testid=speed-slow]');
      await page.locator('[data-testid=viz]').scrollIntoViewIfNeeded();
      await page.locator('[data-testid=playground]').screenshot({ path: `${OUT}/sort-pedia-slow-viz.png` });
      const lg = page.locator('[data-testid=viz-ptr-legend]');
      if (!(await lg.evaluate((d) => d.open))) await lg.locator('summary').click();
      check('quick: legend highlights active pointers', (await lg.locator('[data-legend].active').count()) > 0);
      await page.locator('[data-testid=playground]').screenshot({ path: `${OUT}/sort-pedia-names.png` });
    }
  }

  console.log('Quick sort text: plain-language steps, notation, pointer i');
  {
    const qp = await newPage({ width: 1280, height: 1500 });
    await startViz(qp, 'quick', teach);
    await qp.click('[data-testid=viz-play]'); // pause
    const steps = await qp.locator('ol.steps').innerText();
    check('quick steps: plain language (random pivot, i moves left to right, less/greater blocks)', /Pick a random element as the pivot/.test(steps) && /Move i from left to right/.test(steps) && /"less" block/.test(steps) && /"greater" block/.test(steps), steps.slice(0, 200));
    check('quick steps: no stale symbols (v, lt, gt, scan, "three pointers")', !/\b(v|lt|gt|scan)\b|three pointers/.test(steps), steps);
    const pseudo = await qp.locator('pre.pseudo').innerText();
    check('quick pseudocode uses i, lessEnd, greaterStart and arr', /\bi ← lo \+ 1/.test(pseudo) && /lessEnd/.test(pseudo) && /greaterStart/.test(pseudo) && !/\b(scan|lt|gt|v)\b/.test(pseudo), pseudo);
    check('notation line defines arr and n', /arr = the array being sorted/.test(await qp.locator('[data-testid=notation]').innerText()) && /n = number of elements/.test(await qp.locator('[data-testid=notation]').innerText()));
    const seenI = new Set();
    for (let k = 0; k < 30 && !/with pivot/.test(await qp.locator('[data-testid=viz-caption]').innerText()); k++) await qp.click('[data-testid=viz-step]');
    for (let k = 0; k < 6; k++) { await qp.click('[data-testid=viz-step]'); (await qp.locator('[data-testid=viz-pointers] .ptr-name').allInnerTexts()).forEach((t) => t.split(/,\s*/).forEach((x) => seenI.add(x.trim()))); }
    check('quick visualizer shows the i label (not scan)', seenI.has('i') && !seenI.has('scan'), [...seenI].join('|'));
    for (let k = 0; k < 40 && !/with pivot/.test(await qp.locator('[data-testid=viz-caption]').innerText()); k++) await qp.click('[data-testid=viz-step]');
    check('quick caption refers to i', /\(i\)|\bi move/.test(await qp.locator('[data-testid=viz-caption]').innerText()), await qp.locator('[data-testid=viz-caption]').innerText());
    const lg = qp.locator('[data-testid=viz-ptr-legend]');
    if (!(await lg.evaluate((d) => d.open))) await lg.locator('summary').click();
    check('quick legend explains i as the current index', /current index/.test(await lg.locator('[data-legend=i]').innerText()));
    const top = await qp.locator('section[aria-label="Algorithm explanation"]').boundingBox();
    const vz = await qp.locator('[data-testid=viz]').boundingBox();
    const y0 = top.y + (await qp.evaluate(() => window.scrollY)), y1 = vz.y + vz.height + (await qp.evaluate(() => window.scrollY));
    await qp.screenshot({ path: `${OUT}/sort-pedia-quick-text.png`, fullPage: true, clip: { x: 0, y: y0 - 10, width: 1280, height: y1 - y0 + 20 } });
    await qp.context().close();
  }

  console.log('Theme');
  const html = await (await fetch(URL_BASE)).text();
  check('no-flash inline theme script runs in <head> before the app', html.indexOf('theme-boot') > 0 && html.indexOf('theme-boot') < html.indexOf('</head>') && html.indexOf('theme-boot') < html.indexOf('type="module"'));
  const themeCtx = async (iso, viewport = { width: 1280, height: 900 }) => {
    const ctx = await browser.newContext({ viewport, timezoneId: 'Asia/Calcutta' });
    await ctx.clock.install({ time: new Date(iso) });
    const pg = await ctx.newPage();
    pg.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
    return pg;
  };
  const themeOf = (pg) => pg.evaluate(() => document.documentElement.dataset.theme);
  const bgOf = (pg) => pg.evaluate(() => getComputedStyle(document.body).backgroundColor);
  const day = await themeCtx('2026-10-15T10:00:00+05:30');
  await day.goto(URL_BASE, { waitUntil: 'networkidle' });
  check('Auto at 10:00 → light', (await themeOf(day)) === 'light' && (await bgOf(day)) === 'rgb(246, 247, 251)');
  await day.context().close();
  const eve = await themeCtx('2026-10-15T17:59:50+05:30');
  await eve.goto(URL_BASE, { waitUntil: 'networkidle' });
  check('Auto at 17:59:50 → light', (await themeOf(eve)) === 'light');
  await eve.clock.runFor(15000);
  check('switches to dark at 18:00 without reload', (await themeOf(eve)) === 'dark' && (await bgOf(eve)) === 'rgb(11, 17, 32)');
  await eve.context().close();

  const dark = await themeCtx('2026-10-15T21:30:00+05:30');
  await dark.goto(`${URL_BASE}#/algo/quick`, { waitUntil: 'networkidle' });
  check('Auto at 21:30 → dark', (await themeOf(dark)) === 'dark');
  check('dark code theme applied', (await dark.locator('[data-testid=code-block]').evaluate((e) => getComputedStyle(e).backgroundColor)) === 'rgb(13, 17, 23)');
  check('dark chart lines use theme colours', (await dark.locator('[data-testid=growth-chart] polyline').first().evaluate((e) => getComputedStyle(e).stroke)) === 'rgb(74, 222, 128)');
  check('theme control has an accessible label', (await dark.locator('[data-testid=theme-select]').getAttribute('aria-label')) === 'Color theme');
  await dark.fill('[data-testid=pg-input]', teach.join(' '));
  await dark.click('[data-testid=pg-viz]');
  await dark.waitForSelector('[data-testid=viz-bars] .bar');
  await dark.clock.runFor(3000);
  check('visualization runs in dark theme', (await stepOf(dark)) >= 4, `step ${await stepOf(dark)}`);
  check('dark bars use theme colours', (await dark.locator('[data-testid=viz-bars] .bar').first().evaluate((e) => getComputedStyle(e).backgroundColor)) !== 'rgb(99, 102, 241)');
  await dark.evaluate(() => window.scrollTo(0, 0));
  await dark.screenshot({ path: `${OUT}/sort-pedia-dark.png`, fullPage: false });
  await dark.selectOption('[data-testid=theme-select]', 'light');
  check('Light mode overrides the clock', (await themeOf(dark)) === 'light');
  await dark.reload({ waitUntil: 'networkidle' });
  check('theme mode persists across reload', (await themeOf(dark)) === 'light' && (await dark.evaluate(() => localStorage.getItem('sort-pedia:theme'))) === 'light');
  await dark.selectOption('[data-testid=theme-select]', 'dark');
  check('Dark mode applies immediately', (await themeOf(dark)) === 'dark');
  await dark.context().close();

  const dm = await themeCtx('2026-10-15T22:00:00+05:30', { width: 360, height: 780 });
  await dm.goto(`${URL_BASE}#/algo/quick`, { waitUntil: 'networkidle' });
  await dm.fill('[data-testid=pg-input]', teach.join(' '));
  await dm.click('[data-testid=pg-viz]');
  await dm.waitForSelector('[data-testid=viz-bars] .bar');
  await dm.clock.runFor(4000);
  const dmOverflow = await dm.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  check('dark + 360px: no horizontal overflow with the visualizer', dmOverflow <= 0, `overflow ${dmOverflow}`);
  check('dark + 360px: pointers visible', (await dm.locator('[data-testid=viz-pointers] [data-ptr]').count()) > 0);
  const overlaps = await dm.locator('[data-testid=viz-pointers] .ptr-name').evaluateAll((els) => { const r = els.map((e) => e.getBoundingClientRect()); let c = 0; for (let a = 0; a < r.length; a++) for (let b = a + 1; b < r.length; b++) if (r[a].left < r[b].right && r[b].left < r[a].right && r[a].top < r[b].bottom && r[b].top < r[a].bottom) c++; return c; });
  check('dark + 360px: pointer labels do not overlap', overlaps === 0, `${overlaps} overlaps`);
  const clipped = await dm.locator('[data-testid=viz-pointers] .ptr-name').evaluateAll((els) => els.filter((e) => { const r = e.getBoundingClientRect(), p = e.closest('.pointers').getBoundingClientRect(); return r.left < p.left - 1 || r.right > p.right + 1; }).length);
  check('dark + 360px: pointer labels not clipped at the edges', clipped === 0, `${clipped} clipped`);
  await dm.click('[data-testid=viz-play]');
  let worst = 0, worstClip = 0;
  for (let k = 0; k < 80; k++) {
    await dm.click('[data-testid=viz-step]');
    worst += await dm.locator('[data-testid=viz-pointers] .ptr-name').evaluateAll((els) => { const r = els.map((e) => e.getBoundingClientRect()); let c = 0; for (let a = 0; a < r.length; a++) for (let b = a + 1; b < r.length; b++) if (r[a].left < r[b].right && r[b].left < r[a].right && r[a].top < r[b].bottom && r[b].top < r[a].bottom) c++; return c; });
    worstClip += await dm.locator('[data-testid=viz-pointers] .ptr-name').evaluateAll((els) => els.filter((e) => { const r = e.getBoundingClientRect(), p = e.closest('.pointers').getBoundingClientRect(); return r.left < p.left - 1 || r.right > p.right + 1 || e.scrollWidth > e.clientWidth + 1; }).length);
  }
  check('dark + 360px: long pointer labels never overlap across 80 quick-sort steps', worst === 0, `${worst} overlaps`);
  check('dark + 360px: long pointer labels never clipped across 80 quick-sort steps', worstClip === 0, `${worstClip} clipped`);
  await dm.locator('[data-testid=viz]').scrollIntoViewIfNeeded();
  await dm.evaluate(() => window.scrollBy(0, -120));
  await dm.screenshot({ path: `${OUT}/sort-pedia-dark-mobile.png`, fullPage: false });
  await dm.context().close();

  // ---------------- mobile
  console.log('Mobile 360px');
  const m = await newPage({ width: 360, height: 780 });
  await m.goto(URL_BASE, { waitUntil: 'networkidle' });
  const overflowHome = await m.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  check('landing: no horizontal overflow at 360px', overflowHome <= 0, `overflow ${overflowHome}px`);
  await m.goto(`${URL_BASE}#/algo/timsort`, { waitUntil: 'networkidle' });
  const stacked = await m.evaluate(() => { const c = document.querySelectorAll('.two-col > .card'); return c[1].getBoundingClientRect().top >= c[0].getBoundingClientRect().bottom - 1; });
  check('algo page: columns stack at 360px', stacked);
  await m.click('[data-testid=pg-sample]');
  await m.waitForSelector('[data-testid=pg-output]');
  await m.click('[data-testid=pg-viz]');
  await m.waitForSelector('[data-testid=viz-bars] .bar');
  const overflowAlgo = await m.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  check('algo page: no horizontal overflow at 360px', overflowAlgo <= 0, `overflow ${overflowAlgo}px`);
  const wide = await m.evaluate(() => [...document.querySelectorAll('body *')].filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && (r.right > window.innerWidth + 1 || r.left < -1) && !e.closest('pre, .table-wrap, .output'); }).map((e) => e.tagName + '.' + e.className).slice(0, 5));
  check('no element sticks out of the viewport', wide.length === 0, wide.join(', '));
  await m.evaluate(() => window.scrollTo(0, 0));
  await m.screenshot({ path: `${OUT}/sort-pedia-mobile.png`, fullPage: false });

  check('no page/console errors', errors.length === 0, errors.join(' | '));
} catch (e) {
  failed++;
  console.log(`  FAIL exception: ${e.stack || e}`);
} finally {
  await browser.close();
}
console.log(`\nE2E checks passed: ${passed}/${passed + failed}`);
process.exit(failed ? 1 : 0);
