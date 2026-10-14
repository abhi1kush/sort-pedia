// Headless Chrome check of the deployed site (or any URL passed as argv[2]).
// Usage: node e2e/live-check.mjs [url] [screenshotDir]
import { chromium } from 'playwright-core';

const URL_BASE = process.argv[2] || 'https://abhi1kush.github.io/sort-pedia/';
const OUT = process.argv[3] || '/workspace';
const CHROME = process.env.CHROME_PATH || '/usr/bin/google-chrome';

let passed = 0, failed = 0;
function check(name, cond, extra = '') {
  if (cond) { passed++; console.log(`  PASS ${name}`); }
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
  const expectByLang = { c: /void sort_array\(int \*a, int n\)/, cpp: /void sortArray\(std::vector<int>& a\)/, go: /func sortArray\(a \[\]int\)/, rust: /pub fn sort_array\(a: &mut \[i32\]\)/, python: /def sort_array\(a\)/, java: /class MergeSort/ };
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
  await page.locator('[data-testid=viz-speed]').fill('2000');
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
    await page.locator('[data-testid=viz-speed]').fill('2000');
    await page.waitForFunction(() => /✓ sorted|mismatch|truncated/.test(document.querySelector('[data-testid=viz-status]')?.textContent || ''), null, { timeout: 60000 });
    const st = await page.locator('[data-testid=viz-status]').innerText();
    if (!isSortedNums(out) || !/✓ sorted/.test(st)) { allOk = false; bad.push(`${id}: ${st}`); }
  }
  check(`all ${ids.length} algorithms: sample sorted + visualization replays to sorted`, allOk && ids.length === 20, bad.join('; '));

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
