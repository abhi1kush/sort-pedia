// Trace format produced by the Rust core (wasm/src/ctx.rs): a flat Int32Array of [op, x, y] triples.
export const OP_COMPARE = 0; // compare arr[x] with arr[y]
export const OP_SWAP = 1; // swap arr[x], arr[y]
export const OP_SET = 2; // arr[x] = y
export const OP_POINTER = 3; // pointer POINTER_NAMES[x] at index y (-1 hides it; "gap" holds a value)
export const OP_SORTED = 4; // arr[x..y) is in its final position
export const OP_COMPARE_HELD = 5; // compare held value y (key / left-run value / item) with arr[x]
// Recursion ops (merge sort), inclusive ranges arr[x..y]; mid = x + floor((y - x) / 2).
export const OP_SPLIT = 6; // a call on x..y (two or more elements) splits at mid
export const OP_BASE = 7; // a call on x..x: one element, already sorted
export const OP_MERGE = 8; // merge x..mid and mid+1..y

export const midOf = (lo: number, hi: number) => lo + Math.floor((hi - lo) / 2);
export type Range = [number, number];

/** Mirrors POINTER_NAMES in wasm/src/ctx.rs (camelCase ids; shown to learners as words via pointerLabel). */
export const POINTER_NAMES = [
  'lo', 'hi', 'mid', 'pivot', 'lessEnd', 'greaterStart', 'i', 'storePos', 'current', 'hole', 'key', 'gap', 'runStart',
  'fillPos', 'minIndex', 'sortedFrom', 'writePos', 'rightPos', 'heapEnd', 'node', 'child', 'left', 'right', 'pairStart',
  'gnomePos', 'cycleStart', 'targetPos', 'lastUnsorted', 'maxIndex',
] as const;

/** "lessEnd" -> "less end", "minIndex" -> "min index". */
export function pointerLabel(name: string): string {
  return name.replace(/([A-Z])/g, ' $1').toLowerCase();
}

/** One-line explanation of each pointer, with per-algorithm overrides where the meaning differs. */
export const POINTER_HELP: Record<string, string> = {
  lo: 'first index of the range being worked on',
  hi: 'last index of the range being worked on',
  mid: 'last index of the left half: the left half is lo..mid, the right half is mid + 1..hi',
  pivot: 'position of the pivot value everything is compared with',
  lessEnd: 'end of the "less than pivot" block: everything left of it is smaller than the pivot',
  greaterStart: 'start of the "greater than pivot" block: everything right of it is larger than the pivot',
  i: 'the current index: the element being examined right now',
  storePos: 'next slot for an element smaller than the pivot',
  current: 'the element being inserted into the sorted part on its left',
  hole: 'the empty slot the key moves through while larger elements shift right',
  key: 'where the value being inserted (the key) currently sits / will be placed',
  gap: 'distance between the two elements being compared',
  runStart: 'start of the run being built or extended',
  fillPos: 'the slot being filled with the next smallest value',
  minIndex: 'index of the smallest value found so far in the unsorted part',
  sortedFrom: 'first index of the sorted tail: from here to the end is final',
  writePos: 'next output slot being written',
  rightPos: 'next unused element of the right half',
  heapEnd: 'last element still inside the heap; everything after it is sorted',
  node: 'the parent being sifted down',
  child: 'the larger child the parent is compared with',
  left: 'left element of the compared pair',
  right: 'right element of the compared pair (left + gap)',
  pairStart: 'first element of the pair being compared',
  gnomePos: 'where the gnome stands: it compares this element with the one on its left',
  cycleStart: 'start of the cycle being rotated into place',
  targetPos: 'final position of the item being carried (number of smaller elements)',
  lastUnsorted: 'last slot of the unsorted part: the maximum gets flipped here',
  maxIndex: 'index of the largest value found so far in the unsorted part',
};
export const POINTER_HELP_BY_ALGO: Record<string, Record<string, string>> = {
  cocktail: { lo: 'first unsorted index (everything left of it is final)', hi: 'last unsorted index (everything right of it is final)' },
  merge: { lo: 'first index of the current recursive call\'s range', hi: 'last index of the current recursive call\'s range (the first call has lo = 0, hi = n - 1)' },
  quick: { i: 'the current index: the element being compared with the pivot right now' },
  timsort: { key: 'the element being binary-inserted into the run' },
};
export function pointerHelp(algoId: string, name: string): string {
  return POINTER_HELP_BY_ALGO[algoId]?.[name] ?? POINTER_HELP[name] ?? '';
}

export const VALUE_POINTERS = new Set(['gap']);

/** What the "held value" of OP_COMPARE_HELD is called, per algorithm. */
export const HELD_LABEL: Record<string, string> = {
  insertion: 'key', shell: 'key', timsort: 'key', introsort: 'key', bucket: 'key', merge: 'left-run value', cycle: 'item',
};

export const isRecursionOp = (op: number) => op === OP_SPLIT || op === OP_BASE || op === OP_MERGE;
export const isStepOp = (op: number) => op === OP_COMPARE || op === OP_SWAP || op === OP_SET || op === OP_COMPARE_HELD || isRecursionOp(op);

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

interface Snapshot {
  arr: number[]; ptrs: Map<string, number>; sorted: Uint8Array; cmp: number; swaps: number; writes: number; raw: number;
  /** Recursion call stack (outermost first; the last entry is the current call) and the active range. */
  stack: Range[]; range: Range | null;
}

const CHECKPOINT_EVERY = 256;

/**
 * Steps through a trace one visible operation (compare / swap / write) at a time,
 * forward or backward. Pointer and sorted-region ops are applied together with the
 * step that follows them. Backward steps restore the nearest checkpoint and replay.
 */
export class TracePlayer {
  readonly total: number;
  /** Pointer names that appear anywhere in this trace (for the legend), in a stable order. */
  readonly pointerNamesUsed: string[];
  private steps: number[] = []; // raw op index of each visible step
  private checkpoints: Snapshot[] = [];
  private cur!: Snapshot;
  step = 0;
  last: LastOp | null = null;
  caption = '';

  constructor(readonly input: number[], readonly trace: ArrayLike<number>, readonly algoId = '') {
    const used = new Set<string>();
    for (let k = 0; k < trace.length / 3; k++) {
      if (isStepOp(trace[3 * k])) this.steps.push(k);
      else if (trace[3 * k] === OP_POINTER && trace[3 * k + 2] >= 0) used.add(POINTER_NAMES[trace[3 * k + 1]]);
    }
    this.pointerNamesUsed = POINTER_NAMES.filter((nm) => used.has(nm));
    this.total = this.steps.length;
    this.cur = { arr: [...input], ptrs: new Map(), sorted: new Uint8Array(input.length), cmp: 0, swaps: 0, writes: 0, raw: 0, stack: [], range: null };
    this.checkpoints.push(this.clone(this.cur));
  }

  get array(): readonly number[] { return this.cur.arr; }
  get pointers(): ReadonlyMap<string, number> { return this.cur.ptrs; }
  get sortedMask(): Uint8Array { return this.cur.sorted; }
  get comparisons() { return this.cur.cmp; }
  get swaps() { return this.cur.swaps; }
  get writes() { return this.cur.writes; }
  get done() { return this.step >= this.total; }
  /** Range the current recursive call works on (merge sort), or null. Bars outside it are dimmed. */
  get activeRange(): Range | null { return this.cur.range; }
  /** Recursion call stack, outermost call first; the last entry is the current call. */
  get callStack(): readonly Range[] { return this.cur.stack; }
  /** Recursion depth of the current call (0 = the first call on the whole array), or -1 if none. */
  get depth(): number { return this.cur.stack.length - 1; }

  private clone(s: Snapshot): Snapshot {
    return { arr: [...s.arr], ptrs: new Map(s.ptrs), sorted: s.sorted.slice(), cmp: s.cmp, swaps: s.swaps, writes: s.writes, raw: s.raw, stack: s.stack.map((r) => [r[0], r[1]] as Range), range: s.range ? [s.range[0], s.range[1]] : null };
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
        if (isRecursionOp(op)) this.enterCall(s, op, x, y);
        this.last = { op, i: x, j: y };
      }
    }
    this.step++;
    if (this.step % CHECKPOINT_EVERY === 0 && this.checkpoints.length === this.step / CHECKPOINT_EVERY) this.checkpoints.push(this.clone(s));
    if (this.done) { s.ptrs.clear(); s.stack = []; s.range = null; this.caption = 'Done: every element is in its final sorted position.'; this.last = null; }
  }

  /** Update the call stack, active range and lo / mid / hi pointers for a split, base-case or merge step. */
  private enterCall(s: Snapshot, op: number, lo: number, hi: number) {
    const same = (r: Range) => r[0] === lo && r[1] === hi;
    if (op === OP_MERGE) {
      while (s.stack.length && !same(s.stack[s.stack.length - 1])) s.stack.pop(); // return to the call that merges
    } else {
      // a new call: return from finished calls until the top of the stack contains this range
      while (s.stack.length) {
        const top = s.stack[s.stack.length - 1];
        if (top[0] <= lo && hi <= top[1] && !same(top)) break;
        s.stack.pop();
      }
      s.stack.push([lo, hi]);
    }
    s.range = [lo, hi];
    for (const nm of ['writePos', 'rightPos']) s.ptrs.delete(nm);
    s.ptrs.set('lo', lo);
    s.ptrs.set('hi', hi);
    if (op === OP_BASE) s.ptrs.delete('mid'); else s.ptrs.set('mid', midOf(lo, hi));
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
    for (const [nm, v] of this.cur.ptrs) if (v === idx && !VALUE_POINTERS.has(nm)) names.push(pointerLabel(nm));
    return names.length ? ` (${names.join(', ')})` : '';
  }

  /** Plain-language description of a visible op, from the state just before it is applied. */
  describe(op: number, x: number, y: number): string {
    const a = this.cur.arr;
    const at = (i: number) => `arr[${i}]=${a[i]}${this.label(i)}`;
    const rel = (p: number, q: number) => (p < q ? '<' : p > q ? '>' : '=');
    const gap = this.cur.ptrs.get('gap');
    const gapNote = gap !== undefined ? ` [gap ${gap}]` : '';
    switch (op) {
      case OP_COMPARE: {
        const pv = this.cur.ptrs.get('pivot');
        if (pv !== undefined && (x === pv || y === pv) && x !== y) {
          const other = x === pv ? y : x;
          const r = rel(a[other], a[pv]);
          const verdict = this.algoId === 'quick'
            ? (r === '<' ? 'it joins the "less" block (swap to less end; less end and i move right)'
              : r === '>' ? 'it joins the "greater" block (swap to greater start; greater start moves left)'
              : 'it stays with the pivot copies (i moves right)')
            : r === '<' ? 'it goes left of the pivot' : r === '>' ? 'it goes right of the pivot' : 'it equals the pivot';
          return `Compare ${at(other)} with pivot ${a[pv]}: ${a[other]} ${r} ${a[pv]}, so ${verdict}.`;
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
        return `Write ${y} into arr[${x}]${this.label(x)} (was ${a[x]}).`;
      case OP_SPLIT: {
        const mid = midOf(x, y);
        return `Split range lo=${x}..hi=${y} at mid=${mid}: sort the left half ${x}..${mid} first, then the right half ${mid + 1}..${y}.`;
      }
      case OP_BASE:
        return `Range ${x}..${y} has one element, already sorted.`;
      case OP_MERGE: {
        const mid = midOf(x, y);
        return `Merge ${x}..${mid} and ${mid + 1}..${y} into one sorted range ${x}..${y}.`;
      }
      default:
        return '';
    }
  }
}
