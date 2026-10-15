import { describe, it, expect } from 'vitest';
import { TracePlayer, OP_SPLIT, OP_BASE, OP_MERGE, OP_SET } from '../src/trace';

// Recursion skeleton exactly as the Rust core emits it for n = 4 (writes only where values change).
const input = [4, 3, 2, 1];
const trace = [
  OP_SPLIT, 0, 3,
  OP_SPLIT, 0, 1, OP_BASE, 0, 0, OP_BASE, 1, 1, OP_MERGE, 0, 1, OP_SET, 0, 3, OP_SET, 1, 4,
  OP_SPLIT, 2, 3, OP_BASE, 2, 2, OP_BASE, 3, 3, OP_MERGE, 2, 3, OP_SET, 2, 1, OP_SET, 3, 2,
  OP_MERGE, 0, 3, OP_SET, 0, 1, OP_SET, 1, 2, OP_SET, 2, 3, OP_SET, 3, 4,
];

describe('merge sort top-down recursion in the player', () => {
  it('first step splits the whole array with lo = 0, mid, hi = n - 1', () => {
    const p = new TracePlayer(input, trace, 'merge');
    p.forward();
    expect(p.caption).toBe('Split range lo=0..hi=3 at mid=1: sort the left half 0..1 first, then the right half 2..3.');
    expect([p.pointers.get('lo'), p.pointers.get('mid'), p.pointers.get('hi')]).toEqual([0, 1, 3]);
    expect(p.depth).toBe(0);
    expect(p.activeRange).toEqual([0, 3]);
    expect(p.callStack).toEqual([[0, 3]]);
  });
  it('goes deeper into the left half, then shows base cases and the merge', () => {
    const p = new TracePlayer(input, trace, 'merge');
    p.seek(2);
    expect(p.caption).toBe('Split range lo=0..hi=1 at mid=0: sort the left half 0..0 first, then the right half 1..1.');
    expect(p.depth).toBe(1);
    expect(p.activeRange).toEqual([0, 1]);
    p.forward();
    expect(p.caption).toBe('Range 0..0 has one element, already sorted.');
    expect(p.depth).toBe(2);
    expect(p.callStack).toEqual([[0, 3], [0, 1], [0, 0]]);
    expect(p.pointers.has('mid')).toBe(false);
    p.forward();
    expect(p.caption).toBe('Range 1..1 has one element, already sorted.');
    expect(p.callStack).toEqual([[0, 3], [0, 1], [1, 1]]);
    p.forward();
    expect(p.caption).toBe('Merge 0..0 and 1..1 into one sorted range 0..1.');
    expect(p.depth).toBe(1);
    expect(p.callStack).toEqual([[0, 3], [0, 1]]);
  });
  it('then the right half, and finally the top-level merge at depth 0', () => {
    const p = new TracePlayer(input, trace, 'merge');
    p.seek(8);
    expect(p.caption).toBe('Split range lo=2..hi=3 at mid=2: sort the left half 2..2 first, then the right half 3..3.');
    expect(p.callStack).toEqual([[0, 3], [2, 3]]);
    p.seek(14);
    expect(p.caption).toBe('Merge 0..1 and 2..3 into one sorted range 0..3.');
    expect(p.depth).toBe(0);
    expect(p.activeRange).toEqual([0, 3]);
    p.seek(p.total);
    expect(p.array).toEqual([1, 2, 3, 4]);
    expect(p.callStack).toEqual([]);
    expect(p.activeRange).toBeNull();
  });
  it('step back restores the call stack and active range', () => {
    const p = new TracePlayer(input, trace, 'merge');
    p.seek(4);
    const snap = JSON.stringify([p.callStack, p.activeRange, [...p.pointers]]);
    p.forward(); p.forward(); p.back(); p.back();
    expect(JSON.stringify([p.callStack, p.activeRange, [...p.pointers]])).toBe(snap);
  });
});
