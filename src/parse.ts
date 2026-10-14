// Parsing and validation of user-entered numbers for the playground.

export const VALUE_MIN = -1_000_000_000;
export const VALUE_MAX = 1_000_000_000;

export type ParseResult = { ok: true; values: number[] } | { ok: false; error: string };

/**
 * Parse comma / whitespace separated integers.
 * Rules: at least one number, at most `maxCount`, integers only, each within [VALUE_MIN, VALUE_MAX].
 */
export function parseNumbers(text: string, maxCount: number): ParseResult {
  const trimmed = text.trim();
  if (trimmed === '') return { ok: false, error: 'Please enter at least one number.' };
  const tokens = trimmed.split(/[\s,]+/).filter((t) => t !== '');
  if (tokens.length === 0) return { ok: false, error: 'Please enter at least one number.' };
  if (tokens.length > maxCount) {
    return { ok: false, error: `Too many numbers: ${tokens.length}. This algorithm accepts at most ${maxCount}.` };
  }
  const values: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (!/^[+-]?\d+$/.test(t)) {
      return { ok: false, error: `"${t}" (item ${i + 1}) is not a whole number. Use integers separated by commas or spaces.` };
    }
    const v = Number(t);
    if (!Number.isSafeInteger(v) || v < VALUE_MIN || v > VALUE_MAX) {
      return { ok: false, error: `"${t}" (item ${i + 1}) is out of range. Values must be between ${VALUE_MIN} and ${VALUE_MAX}.` };
    }
    values.push(v);
  }
  return { ok: true, values };
}

/** Deterministic PRNG (mulberry32) so sample data and benchmarks are reproducible. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Shape = 'random' | 'sorted' | 'reversed' | 'nearly' | 'few';
export const SHAPES: { id: Shape; label: string }[] = [
  { id: 'random', label: 'Random' },
  { id: 'sorted', label: 'Sorted' },
  { id: 'reversed', label: 'Reversed' },
  { id: 'nearly', label: 'Nearly sorted' },
  { id: 'few', label: 'Few unique' },
];

/** Generate n integers of the given shape, values in [1, maxValue]. */
export function generate(shape: Shape, n: number, seed = 1, maxValue = Math.max(n * 4, 100)): number[] {
  const rnd = mulberry32(seed);
  const rand = () => 1 + Math.floor(rnd() * maxValue);
  switch (shape) {
    case 'random':
      return Array.from({ length: n }, rand);
    case 'sorted':
      return Array.from({ length: n }, rand).sort((a, b) => a - b);
    case 'reversed':
      return Array.from({ length: n }, rand).sort((a, b) => b - a);
    case 'nearly': {
      const a = Array.from({ length: n }, rand).sort((x, y) => x - y);
      const swaps = Math.max(1, Math.floor(n / 20));
      for (let s = 0; s < swaps && n > 1; s++) {
        const i = Math.floor(rnd() * n), j = Math.floor(rnd() * n);
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    case 'few': {
      const k = Math.min(5, Math.max(1, n));
      const vals = Array.from({ length: k }, (_, i) => Math.round(((i + 1) * maxValue) / k));
      return Array.from({ length: n }, () => vals[Math.floor(rnd() * k)]);
    }
  }
}
