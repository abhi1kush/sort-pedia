// Trace format produced by the Rust core: flat Int32Array of [op, x, y] triples.
export const OP_COMPARE = 0; // compare indices x, y
export const OP_SWAP = 1; // swap indices x, y
export const OP_SET = 2; // a[x] = y

/** Apply op number k of the trace to arr in place; returns the decoded op. */
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
