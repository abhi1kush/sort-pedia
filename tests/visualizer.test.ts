import { describe, expect, it } from 'vitest';
import { DEFAULT_SPS, MAX_SPS, MIN_SPS, PRESETS, SLIDER_MAX, formatSps, sliderToSps, spsToSlider, tickPlan } from '../src/speed';
import { OP_COMPARE, OP_COMPARE_HELD, OP_POINTER, OP_SET, OP_SORTED, OP_SWAP, POINTER_NAMES, TracePlayer } from '../src/trace';

describe('speed mapping', () => {
  it('maps the slider ends to 0.25 and 200 steps/s, logarithmically', () => {
    expect(sliderToSps(0)).toBe(MIN_SPS);
    expect(sliderToSps(SLIDER_MAX)).toBe(MAX_SPS);
    expect(MIN_SPS).toBe(0.25);
    expect(MAX_SPS).toBe(200);
    // midpoint of a log scale is the geometric mean (sqrt(0.25 * 200) ≈ 7.07)
    expect(sliderToSps(SLIDER_MAX / 2)).toBeCloseTo(Math.sqrt(MIN_SPS * MAX_SPS), 1);
    expect(sliderToSps(-50)).toBe(MIN_SPS);
    expect(sliderToSps(5000)).toBe(MAX_SPS);
  });
  it('is monotonic and round-trips through the slider', () => {
    let prev = 0;
    for (let p = 0; p <= SLIDER_MAX; p += 10) { const v = sliderToSps(p); expect(v).toBeGreaterThanOrEqual(prev); prev = v; }
    for (const pr of PRESETS) expect(sliderToSps(spsToSlider(pr.sps))).toBeCloseTo(pr.sps, 1);
  });
  it('has presets Very slow / Slow / Normal / Fast and a slow learning default', () => {
    expect(PRESETS.map((p) => p.label)).toEqual(['Very slow', 'Slow', 'Normal', 'Fast']);
    expect(DEFAULT_SPS).toBe(2);
  });
  it('plans timer ticks: one step per tick when slow, batched when fast', () => {
    expect(tickPlan(0.25)).toEqual({ delayMs: 4000, stepsPerTick: 1 });
    expect(tickPlan(2)).toEqual({ delayMs: 500, stepsPerTick: 1 });
    const fast = tickPlan(200);
    expect(fast.stepsPerTick).toBeGreaterThan(1);
    expect(fast.stepsPerTick / (fast.delayMs / 1000)).toBeCloseTo(200, 5);
    expect(formatSps(0.25)).toBe('0.25 steps/s');
    expect(formatSps(2)).toBe('2.0 steps/s');
  });
});

// Hand-built trace of an insertion sort of [3, 1, 2] with pointer ops.
const P = (name: string) => POINTER_NAMES.indexOf(name as never);
const input = [3, 1, 2];
const trace = [
  OP_POINTER, P('key'), 1, OP_POINTER, P('j'), 1,
  OP_COMPARE_HELD, 0, 1, // key 1 vs a[0]=3
  OP_SET, 1, 3, // shift 3 right
  OP_POINTER, P('j'), 0,
  OP_SET, 0, 1, // place key
  OP_POINTER, P('key'), 2, OP_POINTER, P('j'), 2,
  OP_COMPARE_HELD, 1, 2, // key 2 vs a[1]=3
  OP_SET, 2, 3,
  OP_POINTER, P('j'), 1,
  OP_COMPARE_HELD, 0, 2, // key 2 vs a[0]=1
  OP_SET, 1, 2,
  OP_COMPARE, 0, 1,
  OP_SWAP, 1, 2, OP_SWAP, 1, 2, // swap there and back (net no-op)
  OP_SORTED, 0, 3,
];

describe('TracePlayer step forward / back', () => {
  it('counts only visible steps and replays to the sorted array', () => {
    const p = new TracePlayer(input, trace, 'insertion');
    expect(p.total).toBe(10);
    p.seek(p.total);
    expect(p.array).toEqual([1, 2, 3]);
    expect(p.done).toBe(true);
    expect([...p.sortedMask]).toEqual([1, 1, 1]);
    expect(p.comparisons).toBe(4);
    expect(p.swaps).toBe(2);
    expect(p.writes).toBe(4);
  });
  it('applies pointers with their step and writes captions from the op', () => {
    const p = new TracePlayer(input, trace, 'insertion');
    p.forward();
    expect(p.pointers.get('key')).toBe(1);
    expect(p.pointers.get('j')).toBe(1);
    expect(p.caption).toBe('Compare key 1 with a[0]=3: 1 < 3, so 3 must shift right.');
    p.forward();
    expect(p.caption).toBe('Write 3 into a[1] (key, j) (was 1).');
    expect(p.array).toEqual([3, 3, 2]);
  });
  it('step back restores the exact previous state, including pointers and counters', () => {
    const p = new TracePlayer(input, trace, 'insertion');
    const states: string[] = [];
    const snap = () => JSON.stringify([p.step, p.array, [...p.pointers], [...p.sortedMask], p.comparisons, p.swaps, p.writes]);
    states.push(snap());
    while (p.forward()) states.push(snap());
    for (let s = p.total - 1; s >= 0; s--) { p.back(); expect(snap()).toBe(states[s]); }
    expect(p.back()).toBe(false);
  });
  it('seek works across checkpoints on long traces', () => {
    // 2000 compare+swap pairs on [1, 2]: swapping back and forth
    const t: number[] = [];
    for (let k = 0; k < 2000; k++) t.push(OP_COMPARE, 0, 1, OP_SWAP, 0, 1);
    const p = new TracePlayer([1, 2], t);
    expect(p.total).toBe(4000);
    p.seek(1001); // odd number of swaps applied? steps 1..1001 -> 500 swaps + 1 compare
    expect(p.array).toEqual([1, 2]);
    p.seek(1002);
    expect(p.array).toEqual([2, 1]);
    p.seek(3);
    expect(p.swaps).toBe(1);
    p.seek(4000);
    expect(p.array).toEqual([1, 2]);
    p.back();
    expect(p.array).toEqual([2, 1]);
  });
  it('describes pivot comparisons for quick sort', () => {
    const p = new TracePlayer([5, 7, 3], [OP_POINTER, P('pivot'), 0, OP_POINTER, P('i'), 1, OP_COMPARE, 1, 0, OP_COMPARE, 2, 0], 'quick');
    p.forward();
    expect(p.caption).toBe('Compare a[1]=7 (i) with pivot 5: 7 > 5, so it goes right of the pivot.');
  });
});
