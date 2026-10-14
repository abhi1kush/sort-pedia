import init, { sort, sort_only } from '../wasm/pkg/sortcore.js';

let ready: Promise<unknown> | null = null;
export function loadWasm(): Promise<unknown> {
  if (!ready) ready = init();
  return ready;
}

export interface RunOutput {
  sorted: number[];
  trace: Int32Array | null;
  comparisons: number;
  swaps: number;
  writes: number;
  truncated: boolean;
  ms: number;
}

/** Run a Rust/WASM sort. Time is measured around the WASM call (includes copying data in/out). */
export async function runSort(id: string, values: number[], record: boolean): Promise<RunOutput> {
  await loadWasm();
  const input = Int32Array.from(values);
  const t0 = performance.now();
  const r = sort(id, input, record);
  const ms = performance.now() - t0;
  try {
    return {
      sorted: Array.from(r.sorted),
      trace: record ? r.trace : null,
      comparisons: r.comparisons,
      swaps: r.swaps,
      writes: r.writes,
      truncated: r.truncated,
      ms,
    };
  } finally {
    r.free();
  }
}

/** Benchmark-only run (no trace). Returns elapsed milliseconds. */
export async function timeSort(id: string, values: Int32Array): Promise<number> {
  await loadWasm();
  const t0 = performance.now();
  sort_only(id, values);
  return performance.now() - t0;
}
