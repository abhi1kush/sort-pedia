// Every user-visible text source must use words or defined names, never stale or undefined
// single-letter symbols (v, lt, gt, a[...], k, m, x, ...) or the retired pointer name "scan".
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { ALGORITHMS, NOTATION, RANKING_RATIONALE } from '../src/algorithms';
import { POINTER_NAMES, POINTER_HELP, POINTER_HELP_BY_ALGO, HELD_LABEL, pointerLabel } from '../src/trace';

// Banned everywhere as whole words (case-sensitive). Allowed by design: i, n (defined in NOTATION),
// lo, hi, mid, key, gap, child, and complexity notation such as O(n log n).
const BANNED = ['lt', 'gt', 'v', 'k', 'm', 'x', 'j', 'p', 'd', 'b', 'T', 'A', 'B', 'C', 'scan', 'MINRUN', 'mi', 'tmp', 'aux'];
// A symbol may appear in one algorithm's text only if that text defines it ("k = ...").
const DEFINED: Record<string, string[]> = { radix: ['k', 'b'], counting: ['k'], bucket: ['k'], comb: ['p'], timsort: ['A', 'B', 'C'] };
const COMPLEXITY = /O\([^)]*\)|Ω\([^)]*\)|Θ\([^)]*\)/g;

function offenders(text: string, allowed: string[] = []): string[] {
  // "A" as the English article (followed by a lower-case word) is fine.
  const t = text.replace(COMPLEXITY, ' ').replace(/(^|[.!?]\s+|\n\s*)A (?=[a-z])/g, '$1 ').replace(/\bC\+\+/g, ' ').replace(/\bC qsort\b/g, ' ');
  const bad = BANNED.filter((w) => !allowed.includes(w) && new RegExp(`(?<![\\w'-])${w}(?![\\w'-])`).test(t));
  if (/(?<!\w)a\[/.test(t)) bad.push('a[');
  return bad;
}

describe('user-visible text uses readable, defined names', () => {
  it('notation defines arr, n and i', () => {
    expect(NOTATION).toMatch(/arr = the array being sorted/);
    expect(NOTATION).toMatch(/n = number of elements/);
    expect(NOTATION).toMatch(/arr\[i\]/);
  });
  for (const algo of ALGORITHMS) {
    it(`${algo.id}: summary, steps, pseudocode, complexity and use-case text`, () => {
      const allowed = DEFINED[algo.id] ?? [];
      const all = [algo.summary, algo.why, algo.best, algo.avg, algo.worst, algo.space, algo.suitable, algo.bad, ...algo.uses, ...algo.steps, algo.pseudocode].join('\n');
      for (const w of allowed) expect(all, `${algo.id} uses ${w} but never defines it`).toMatch(new RegExp(`\\b${w}( =|,| and)`));
      for (const field of [algo.summary, algo.why, algo.best, algo.avg, algo.worst, algo.space, algo.suitable, algo.bad, ...algo.uses, ...algo.steps, algo.pseudocode]) {
        expect(offenders(field, allowed), `${algo.id}: "${field.slice(0, 90)}"`).toEqual([]);
      }
      // pseudocode refers to the array as arr, never as a/A
      if (!allowed.includes('A')) expect(algo.pseudocode).not.toMatch(/(?<!\w)[aA](?=[\[,)\s])/);
      else expect(algo.pseudocode).not.toMatch(/(?<!\w)a(?=[\[,)\s])/);
    });
  }
  it('quick sort steps are plain language with the current pointer names', () => {
    const quick = ALGORITHMS.find((a) => a.id === 'quick')!;
    const steps = quick.steps.join(' ');
    expect(steps).toMatch(/Pick a random element as the pivot/);
    expect(steps).toMatch(/Move i from left to right/);
    expect(steps).toMatch(/less end/); expect(steps).toMatch(/greater start/);
    expect(steps).not.toMatch(/three pointers|values < v/);
  });
  it('ranking rationale, pointer names, legend help and caption labels', () => {
    for (const t of [...RANKING_RATIONALE, ...Object.values(POINTER_HELP), ...Object.values(HELD_LABEL),
      ...Object.values(POINTER_HELP_BY_ALGO).flatMap((o) => Object.values(o)), ...POINTER_NAMES.map(pointerLabel)]) {
      expect(offenders(t), t).toEqual([]);
    }
    expect(POINTER_NAMES).toContain('i');
    expect(POINTER_NAMES).not.toContain('scan');
  });
  it('caption templates and UI string literals', () => {
    const files = ['src/trace.ts', ...readdirSync('src/components').map((f) => `src/components/${f}`)];
    for (const f of files) {
      const src = readFileSync(f, 'utf8');
      // user-facing literals: template strings and quoted strings containing a space (sentences)
      const lits = [...src.matchAll(/`([^`]*)`|'([^'\n]* [^'\n]*)'|"([^"\n]* [^"\n]*)"/g)].map((m) => (m[1] ?? m[2] ?? m[3]).replace(/\$\{[^}]*\}/g, ' '));
      // only literals that read as prose (contain a letter-word of 3+ chars), not code like '<' / p > q
      for (const l of lits.filter((x) => /[A-Za-z]{3,}/.test(x))) expect(offenders(l), `${f}: ${l}`).toEqual([]);
    }
  });
  it('README', () => {
    const md = readFileSync('README.md', 'utf8').replace(/```[\s\S]*?```/g, ' ').replace(/`[^`]*`/g, ' ');
    // README repeats the per-algorithm table, so symbols defined there (k, b, p, A/B/C) are allowed if defined.
    const readmeAllowed = ['k', 'b', 'p', 'A', 'B', 'C'];
    for (const w of ['k', 'p']) expect(md).toMatch(new RegExp(`\\b${w} = `));
    expect(offenders(md.replace(/\bC,/g, ' '), readmeAllowed)).toEqual([]);
    expect(md).not.toMatch(/\bscan\b/);
  });
});
