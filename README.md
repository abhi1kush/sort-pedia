# Sort Pedia

**Live site:** https://abhi1kush.github.io/sort-pedia/

Every common sorting algorithm, ranked best to worst, explained in plain language, with verified code in six
languages, live WebAssembly benchmarks and step-by-step visualizations. **All sorting runs in Rust compiled to
WebAssembly** (`wasm/`, built with `wasm-pack`); the UI is React + Vite + TypeScript.

## Features

- **Landing page** with all 20 algorithms ranked best to worst, the ranking rationale, and an index that jumps to any
  algorithm (hash router: `#/algo/<id>`, plus a "Jump to algorithm" menu in the header).
- **Per-algorithm page** in two columns (stacked on mobile):
  - left: plain-language steps and pseudocode;
  - right: working code in **C, C++, Java, Golang, Rust and Python** with a language dropdown and Prism syntax
    highlighting. The default language is **Java**; change it with the *Default code language* setting in the header
    (saved in `localStorage`) or the `DEFAULT_LANGUAGE` constant in `src/config.ts`.
- **At a glance**: best/average/worst time, space, stable, in-place, when it is most suitable, when it performs badly,
  practical uses and why it has its rank.
- **Charts**: complexity growth curves (n = number of elements; n, n·k with k = digits per key, n log n, n^1.5, n log² n, n², n·n!) with this algorithm's curve
  highlighted, and an on-demand **benchmark measured in your browser**: the WASM sort timed across 5 sizes and 5 input
  shapes (random, sorted, reversed, nearly sorted, few unique).
- **Playground**: *Sort sample data*, your own comma/space-separated numbers (validated, with clear errors and
  per-algorithm size limits, e.g. bogo ≤ 8), *Run (no GUI)* showing the sorted output, time, comparisons, swaps and
  writes, and *Run with visualization*: bars whose heights match the values, animated from a WASM-recorded trace of
  compare / swap / write operations, with play/pause/step/reset and a speed slider.
- **Teaching visualization**: a logarithmic speed slider from 0.25 to 200 steps/s with *Very slow / Slow / Normal /
  Fast* presets (default *Slow*, 2 steps/s; changes apply mid-run), step back / step forward (replayed from the
  trace), a progress scrubber, keyboard shortcuts (Space play/pause, ← back, → forward), **pointer markers** under
  the bars with readable names (quick: pivot/less end/i/greater start/lo/hi; insertion: key/current/hole;
  selection: fill pos/min index/i; bubble: i/sorted from; merge: write pos/right pos/lo/mid/hi; heap: heap end/node/child;
  shell: gap/current/hole/key; plus introsort, cycle, pancake, comb, cocktail, gnome and more) and a
  "What the pointers mean" legend for the current algorithm; the array is called `arr` everywhere (snippets, pseudocode, captions),
  elements already in their final position shown in a distinct colour, a plain-language caption for every step
  (e.g. *Compare arr[17]=27 (i) with pivot 30: 27 < 30, so it joins the "less" block (swap to less end; less end and i move right).*), and step / comparison / swap /
  write counters. Merge sort shows its top-down recursion: a split step per call (lo / mid / hi on the bars, everything outside the active range dimmed), base-case steps, merge steps, the recursion depth and a call-stack strip above the bars. Pointers and sorted regions are recorded by the Rust core as extra trace ops (`OP_POINTER`,
  `OP_SORTED`, `OP_COMPARE_HELD`, see `wasm/src/ctx.rs`).
- **Light and dark themes** via CSS variables (page, cards, syntax highlighting, charts, bars, forms, tooltips), checked
  for WCAG AA contrast by a Vitest test. The header *Theme* control offers **Auto** (default), Light and Dark, saved in
  `localStorage`. Auto follows the local clock: **dark from 18:00 to 06:00**, light otherwise. The boundaries are the
  `MORNING_HOUR` (6) and `EVENING_HOUR` (18) constants in `src/theme.ts` (mirrored in the inline script in
  `index.html`, which applies the theme before first paint so there is no flash). The theme switches at the boundary
  without a reload (a timer for the next switch, plus a re-check on `visibilitychange`).
- Responsive down to 360px wide with no horizontal overflow.

## Ranking (best → worst)

How the ranking works:

1. Practical performance first: speed on real hardware for typical inputs (cache behaviour, constant factors,
   adaptivity to presorted data).
2. Then average and worst-case complexity: O(n log n) beats O(n²); guaranteed worst cases beat ones that can degrade.
3. Stability and generality break ties.
4. Non-comparison sorts (radix, counting, bucket) can be the fastest on integer keys but only work on bounded keys, so
   they sit below the general-purpose sorts.
5. Novelty / teaching-only algorithms (pancake, bogo) come last.

| # | Algorithm | Best | Average | Worst | Space | Stable | In-place | Why this rank |
|---|---|---|---|---|---|---|---|---|
| 1 | Timsort (hybrid) | O(n) | O(n log n) | O(n log n) | O(n) | yes | no | Default sort in Python, Java (objects), Android, V8: stable, O(n log n) worst case and O(n) on already-sorted or run-structured data. |
| 2 | Introsort | O(n log n) | O(n log n) | O(n log n) | O(log n) | no | yes | Quicksort speed with a guaranteed O(n log n) worst case and O(log n) space; the basis of C++ std::sort and .NET Array.Sort. Unstable, so ranked just below Timsort. |
| 3 | Quick sort (3-way) | O(n) | O(n log n) | O(n²) | O(log n) | no | yes | Usually the fastest pure comparison sort in practice thanks to cache-friendly in-place partitioning; the 3-way variant handles duplicates in linear time. Worst case is still O(n²) (very unlikely with random pivots). |
| 4 | Merge sort | O(n log n) | O(n log n) | O(n log n) | O(n) | yes | no | Stable with a guaranteed O(n log n) worst case and very predictable; needs O(n) extra memory and does not adapt to presorted input (Timsort fixes that). |
| 5 | Heap sort | O(n log n) | O(n log n) | O(n log n) | O(1) | no | yes | Guaranteed O(n log n) with O(1) extra space, but poor cache locality makes it 2-3x slower than quicksort in practice, and it is unstable. |
| 6 | Radix sort (LSD) | O(n·k) | O(n·k) | O(n·k) | O(n + b) | yes | no | Linear time O(n·k) (n = number of elements, k = number of byte digits per key) for fixed-width integer keys and often the fastest option for large integer arrays, but only works for keys that decompose into digits. |
| 7 | Counting sort | O(n + k) | O(n + k) | O(n + k) | O(k) | yes | no | O(n + k) (n = number of elements, k = max - min + 1, the size of the value range) and extremely fast when k is small, but memory grows with the range so it is useless for wide keys (this site limits max - min to under 1,000,000). |
| 8 | Bucket sort | O(n + k) | O(n + k) | O(n²) | O(n + k) | yes | no | Expected O(n + k) (n = number of elements, k = number of buckets, here k = n) for uniformly distributed data, but skewed data piles into a few buckets and degrades to O(n²) (insertion sort inside a bucket). |
| 9 | Shell sort | O(n log n) | ≈ O(n^1.3) (gap dependent) | O(n^1.5) or worse | O(1) | no | yes | Simple, in place, no recursion and surprisingly fast for medium-sized arrays (roughly O(n^1.3) in practice, n = number of elements), but no proven O(n log n) bound and unstable. |
| 10 | Comb sort | O(n log n) | Ω(n² / 2^p), p = number of gap shrinks; ≈ n log n in practice | O(n²) | O(1) | no | yes | Much faster than bubble sort (close to O(n log n) on random data) with tiny code, but O(n²) worst case and unstable. |
| 11 | Bitonic sort | O(n log² n) | O(n log² n) | O(n log² n) | O(log n) recursion | no | yes | Data-independent compare pattern is ideal for GPUs, SIMD and hardware, but O(n log² n) comparisons make it slower than O(n log n) sorts on a CPU. |
| 12 | Insertion sort | O(n) | O(n²) | O(n²) | O(1) | yes | yes | The best O(n²) sort: stable, in place, adaptive (O(n) on nearly sorted data) and the fastest choice for tiny arrays, which is why hybrids use it. |
| 13 | Selection sort | O(n²) | O(n²) | O(n²) | O(1) | no | yes | Always about n²/2 comparisons (n = number of elements) (not adaptive) and unstable, but makes at most n - 1 swaps, which helps when writes are expensive. |
| 14 | Cocktail shaker sort | O(n) | O(n²) | O(n²) | O(1) | yes | yes | Slightly better than bubble sort (turtles move left fast) and stable/adaptive, but still O(n²) with lots of swaps. |
| 15 | Bubble sort | O(n) | O(n²) | O(n²) | O(1) | yes | yes | Stable and adaptive with an early exit, but the most swaps of any common algorithm and poor practical speed. |
| 16 | Odd-even sort | O(n) | O(n²) | O(n²) | O(1) | yes | yes | Each phase is fully parallel (n/2 independent compare-swaps, n = number of elements), which suits SIMD/processor arrays, but sequentially it is as slow as bubble sort. |
| 17 | Gnome sort | O(n) | O(n²) | O(n²) | O(1) | yes | yes | Conceptually insertion sort done with swaps: stable and adaptive but does about 3x the work of insertion sort. |
| 18 | Cycle sort | O(n²) | O(n²) | O(n²) | O(1) | no | yes | Theoretically optimal number of memory writes (each element written at most once), but always Θ(n²) comparisons and unstable. |
| 19 | Pancake sort | O(n²) | O(n²) | O(n²) | O(1) | no | yes | A puzzle-inspired sort: O(n) flips (n = number of elements) but each flip costs O(n) element moves, so O(n²) overall with heavy data movement. |
| 20 | Bogo sort | O(n) | O(n · n!) | Unbounded | O(1) | no | yes | Expected O(n·n!) time (n = number of elements) and unbounded worst case: the canonical example of the worst possible sorting algorithm. Capped at 8 elements here. |

## Project layout

```
wasm/                 Rust crate `sortcore` (instrumented sorts + wasm-bindgen API)
  src/ctx.rs          counting/tracing array context, trace replay
  src/sorts.rs        the 20 algorithms
  tests/sorts.rs      edge-case, shape and proptest property tests + trace replay checks
snippets/<algo>/      c.c cpp.cpp java.java go.go rust.rs python.py (shown in the UI and verified by script)
scripts/verify-snippets.mjs  compiles + runs all 120 snippets against test arrays
src/                  React app (config.ts, parse.ts, algorithms.ts, components/)
tests/                Vitest unit tests (parsing, config, catalogue, theme clock/scheduling, contrast, speed mapping, trace player)
e2e/live-check.mjs    headless Chrome check of the live site
```

## Development

Requirements: Node 18+, Rust (stable) with the `wasm32-unknown-unknown` target, and `wasm-pack`.

```bash
npm install
npm run dev               # builds the WASM package, then starts Vite
npm test                  # Vitest
npm run test:rust         # cargo tests (cd wasm && cargo test)
npm run verify:snippets   # needs gcc, g++, javac/java, go, rustc, python3
npm run build             # wasm-pack + tsc + vite build → dist/
npm run e2e               # headless Chrome check of the live site (CHROME_PATH to override Chrome)
node e2e/live-check.mjs http://localhost:4173/sort-pedia/ /tmp   # against `npm run preview`
```

## Deploy

The site is served by GitHub Pages from the `gh-pages` branch (root). The Vite base path is `/sort-pedia/`.

```bash
npm run deploy            # builds, then publishes dist/ to the gh-pages branch with the gh-pages package
# one-time Pages setup:
gh api -X POST repos/abhi1kush/sort-pedia/pages -f 'source[branch]=gh-pages' -f 'source[path]=/'
```

No GitHub Actions workflow is used.

## Limits

- Inputs are 32-bit integers within ±1,000,000,000.
- Plain runs: up to 100,000 numbers for O(n log n)/linear sorts, 20,000 for O(n²) sorts, 8 for bogo sort.
- Visualization: up to 120 numbers (7 for bogo); traces are capped at 1,000,000 operations.
- Counting sort requires max − min < 1,000,000.
- Timsort is a faithful simplified Timsort (runs, a minimum run length, binary insertion, balanced merge stack) without galloping mode.
- Benchmark times include copying the array into and out of WASM, and depend on your device and browser.
