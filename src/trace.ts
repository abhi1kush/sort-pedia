// Trace format produced by the Rust core (wasm/src/ctx.rs): a flat Int32Array of [op, x, y] triples.
export const OP_COMPARE = 0; // compare a[x] with a[y]
export const OP_SWAP = 1; // swap a[x], a[y]
export const OP_SET = 2; // a[x] = y
export const OP_POINTER = 3; // pointer POINTER_NAMES[x] at index y (-1 hides it; "gap" holds a value)
export const OP_SORTED = 4; // a[x..y) is in its final position
export const OP_COMPARE_HELD = 5; // compare held value y (key / left-run value / item) with a[x]

/** Mirrors POINTER_NAMES in wasm/src/ctx.rs. */
export const POINTER_NAMES = [
  'i', 'j', 'k', 'pivot', 'lo', 'hi', 'min', 'key', 'gap', 'mid', 'right', 'heap', 'node', 'child', 'end', 'lt',
  'gt', 'start', 'pos', 'size', 'max',
] as const;
export const VALUE_POINTERS = new Set(['gap']);

/** What the "held value" of OP_COMPARE_HELD is called, per algorithm. */
export const HELD_LABEL: Record<string, string> = {
  insertion: 'key', shell: 'key', timsort: 'key', introsort: 'key', bucket: 'key', merge: 'left-run value', cycle: 'item',
};

export const isStepOp = (op: number) => op === OP_COMPARE || op === OP_SWAP || op === OP_SET || op === OP_COMPARE_HELD;

/** Apply op number k of the trace to arr in place (array effects only); returns the decoded op. */
export function applyOp(arr: number[], trace: ArrayLike<number>, k: number): { op: number; i: number; j: number } {
  const op = trace[3 * k], i = trace[3 * k + 1], j = trace[3 * k + 2];
  if (op === OP_SWAP) {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  } else if (op === OP_SET) {
    arr[i] = j;
  }
  return { op, i, j };
}

export function replay(input: number[], trace: ArrayLike<number>): number[] {
  const a = [...input];
  for (let k = 0; k < trace.length / 3; k++) applyOp(a, trace, k);
  return a;
}

export interface LastOp { op: number; i: number; j: number }

interface Snapshot { arr: number[]; ptrs: Map<string, number>; sorted: Uint8Array; cmp: number; swaps: number; writes: number; raw: number }

const CHECKPOINT_EVERY = 256;

/**
 * Steps through a trace one visible operation (compare / swap / write) at a time,
 * forward or backward. Pointer and sorted-region ops are applied together with the
 * step that follows them. Backward steps restore the nearest checkpoint and replay.
 */
export class TracePlayer {
  readonly total: number;
  private steps: number[] = []; // raw op index of each visible step
  private checkpoints: Snapshot[] = [];
  private cur!: Snapshot;
  step = 0;
  last: LastOp | null = null;
  caption = '';

  constructor(readonly input: number[], readonly trace: ArrayLike<number>, readonly algoId = '') {
    for (let k = 0; k < trace.length / 3; k++) if (isStepOp(trace[3 * k])) this.steps.push(k);
    this.total = this.steps.length;
    this.cur = { arr: [...input], ptrs: new Map(), sorted: new Uint8Array(input.length), cmp: 0, swaps: 0, writes: 0, raw: 0 };
    this.checkpoints.push(this.clone(this.cur));
  }

  get array(): readonly number[] { return this.cur.arr; }
  get pointers(): ReadonlyMap<string, number> { return this.cur.ptrs; }
  get sortedMask(): Uint8Array { return this.cur.sorted; }
  get comparisons() { return this.cur.cmp; }
  get swaps() { return this.cur.swaps; }
  get writes() { return this.cur.writes; }
  get done() { return this.step >= this.total; }

  private clone(s: Snapshot): Snapshot {
    return { arr: [...s.arr], ptrs: new Map(s.ptrs), sorted: s.sorted.slice(), cmp: s.cmp, swaps: s.swaps, writes: s.writes, raw: s.raw };
  }

  /** Apply raw ops up to and including the next visible step (and trailing meta ops if it is the last step). */
  private advance(withCaption: boolean) {
    const s = this.cur, t = this.trace;
    const target = this.step + 1 < this.total ? this.steps[this.step] : t.length / 3 - 1;
    const stepRaw = this.steps[this.step];
    for (; s.raw <= target; s.raw++) {
      const k = s.raw, op = t[3 * k], x = t[3 * k + 1], y = t[3 * k + 2];
      if (op === OP_POINTER) {
        const name = POINTER_NAMES[x];
        if (y < 0) s.ptrs.delete(name); else s.ptrs.set(name, y);
      } else if (op === OP_SORTED) {
        s.sorted.fill(1, x, y);
      } else if (k === stepRaw) {
        if (withCaption) this.caption = this.describe(op, x, y);
        if (op === OP_COMPARE || op === OP_COMPARE_HELD) s.cmp++;
        else if (op === OP_SWAP) s.swaps++;
        else if (op === OP_SET) s.writes++;
        applyOp(s.arr, t, k);
        this.last = { op, i: x, j: y };
      }
    }
    this.step++;
    if (this.step % CHECKPOINT_EVERY === 0 && this.checkpoints.length === this.step / CHECKPOINT_EVERY) this.checkpoints.push(this.clone(s));
    if (this.done) { s.ptrs.clear(); this.caption = 'Done: every element is in its final sorted position.'; this.last = null; }
  }

  forward(): boolean {
    if (this.done) return false;
    this.advance(true);
    return true;
  }

  back(): boolean {
    if (this.step === 0) return false;
    this.seek(this.step - 1);
    return true;
  }

  /** Jump to the state after `n` visible steps. */
  seek(n: number) {
    n = Math.max(0, Math.min(this.total, Math.floor(n)));
    if (n < this.step || n === 0) {
      const cp = Math.min(Math.floor(n / CHECKPOINT_EVERY), this.checkpoints.length - 1);
      this.cur = this.clone(this.checkpoints[cp]);
      this.step = cp * CHECKPOINT_EVERY;
      this.last = null;
      this.caption = n === 0 ? 'Ready. Press Play or Step forward to begin.' : '';
    }
    while (this.step < n) this.advance(this.step === n - 1);
  }

  private label(idx: number): string {
    const names: string[] = [];
    for (const [nm, v] of this.cur.ptrs) if (v === idx && !VALUE_POINTERS.has(nm)) names.push(nm);
    return names.length ? ` (${names.join(', ')})` : '';
  }

  /** Plain-language description of a visible op, from the state just before it is applied. */
  describe(op: number, x: number, y: number): string {
    const a = this.cur.arr;
    const at = (i: number) => `a[${i}]=${a[i]}${this.label(i)}`;
    const rel = (p: number, q: number) => (p < q ? '<' : p > q ? '>' : '=');
    const gap = this.cur.ptrs.get('gap');
    const gapNote = gap !== undefined ? ` [gap ${gap}]` : '';
    switch (op) {
      case OP_COMPARE: {
        const pv = this.cur.ptrs.get('pivot');
        if (pv !== undefined && (x === pv || y === pv) && x !== y) {
          const other = x === pv ? y : x;
          const r = rel(a[other], a[pv]);
          const verdict = r === '<' ? 'goes left of the pivot' : r === '>' ? 'goes right of the pivot' : 'equals the pivot';
          return `Compare ${at(other)} with pivot ${a[pv]}: ${a[other]} ${r} ${a[pv]}, so it ${verdict}.`;
        }
        return `Compare ${at(x)} with ${at(y)}: ${a[x]} ${rel(a[x], a[y])} ${a[y]}.${gapNote}`;
      }
      case OP_COMPARE_HELD: {
        const held = HELD_LABEL[this.algoId] ?? 'held value';
        const r = rel(y, a[x]);
        const hint = this.algoId === 'merge'
          ? (a[x] < y ? `take the right value ${a[x]}` : `take the left value ${y}`)
          : (r === '<' ? `${a[x]} must shift right` : `stop here`);
        return `Compare ${held} ${y} with ${at(x)}: ${y} ${r} ${a[x]}, so ${hint}.${gapNote}`;
      }
      case OP_SWAP:
        return `Swap ${at(x)} and ${at(y)}.`;
      case OP_SET:
        return `Write ${y} into a[${x}]${this.label(x)} (was ${a[x]}).`;
      default:
        return '';
    }
  }
}
