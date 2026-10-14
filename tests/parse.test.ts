import { describe, expect, it } from 'vitest';
import { parseNumbers, generate, SHAPES, VALUE_MAX } from '../src/parse';
import { replay } from '../src/trace';

describe('parseNumbers', () => {
  it('parses comma, space, newline and mixed separators', () => {
    expect(parseNumbers('3,1,2', 10)).toEqual({ ok: true, values: [3, 1, 2] });
    expect(parseNumbers(' 3 1   2 ', 10)).toEqual({ ok: true, values: [3, 1, 2] });
    expect(parseNumbers('3, 1\n2\t-4', 10)).toEqual({ ok: true, values: [3, 1, 2, -4] });
    expect(parseNumbers('+5,,6', 10)).toEqual({ ok: true, values: [5, 6] });
  });
  it('rejects empty input', () => {
    for (const t of ['', '   ', ' , ,']) {
      const r = parseNumbers(t, 10);
      expect(r.ok).toBe(false);
    }
    expect(parseNumbers('', 10)).toMatchObject({ error: expect.stringContaining('at least one') });
  });
  it('rejects non-integers with the offending token and position', () => {
    const r = parseNumbers('1, 2.5, 3', 10);
    expect(r).toMatchObject({ ok: false, error: expect.stringContaining('"2.5" (item 2)') });
    expect(parseNumbers('1 abc', 10).ok).toBe(false);
    expect(parseNumbers('1e3', 10).ok).toBe(false);
    expect(parseNumbers('--1', 10).ok).toBe(false);
  });
  it('enforces the per-algorithm count limit', () => {
    expect(parseNumbers('1 2 3 4 5 6 7 8', 8).ok).toBe(true);
    const r = parseNumbers('1 2 3 4 5 6 7 8 9', 8);
    expect(r).toMatchObject({ ok: false, error: expect.stringContaining('at most 8') });
  });
  it('enforces the value range', () => {
    expect(parseNumbers(String(VALUE_MAX), 2).ok).toBe(true);
    expect(parseNumbers(String(VALUE_MAX + 1), 2)).toMatchObject({ ok: false, error: expect.stringContaining('out of range') });
    expect(parseNumbers('-99999999999999999999', 2).ok).toBe(false);
  });
});

describe('generate', () => {
  it('produces the requested size and shape deterministically', () => {
    for (const s of SHAPES) {
      const a = generate(s.id, 200, 3);
      expect(a).toHaveLength(200);
      expect(generate(s.id, 200, 3)).toEqual(a);
    }
    const sorted = generate('sorted', 100, 1);
    expect(sorted).toEqual([...sorted].sort((x, y) => x - y));
    const rev = generate('reversed', 100, 1);
    expect(rev).toEqual([...rev].sort((x, y) => y - x));
    expect(new Set(generate('few', 500, 1)).size).toBeLessThanOrEqual(5);
  });
});

describe('trace replay', () => {
  it('applies swap and set ops and ignores compares', () => {
    // [3,1,2]: compare(0,1), swap(0,1) -> [1,3,2], set(1,2) -> [1,2,2], set(2,3) -> [1,2,3]
    expect(replay([3, 1, 2], [0, 0, 1, 1, 0, 1, 2, 1, 2, 2, 2, 3])).toEqual([1, 2, 3]);
  });
});
