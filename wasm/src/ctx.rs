//! Instrumented array context: every sort operates through `Ctx` so that
//! comparisons, swaps and writes are counted and (optionally) recorded as a
//! trace that the UI can replay.

use std::cmp::Ordering;

/// Trace op codes. Each trace entry is three i32s: `[op, x, y]`.
pub const OP_COMPARE: i32 = 0; // x, y = indices compared (highlight only)
pub const OP_SWAP: i32 = 1; // x, y = indices swapped
pub const OP_SET: i32 = 2; // x = index, y = new value

/// Maximum number of recorded operations (each op = 3 i32s).
pub const MAX_TRACE_OPS: usize = 1_000_000;

pub struct Ctx {
    pub a: Vec<i32>,
    pub comparisons: u64,
    pub swaps: u64,
    pub writes: u64,
    record: bool,
    pub trace: Vec<i32>,
    pub truncated: bool,
    rng: u64,
}

impl Ctx {
    pub fn new(a: Vec<i32>, record: bool) -> Self {
        Ctx { a, comparisons: 0, swaps: 0, writes: 0, record, trace: Vec::new(), truncated: false, rng: 0x9E37_79B9_7F4A_7C15 }
    }

    #[inline]
    fn rec(&mut self, op: i32, x: i32, y: i32) {
        if self.record {
            if self.trace.len() / 3 >= MAX_TRACE_OPS {
                self.truncated = true;
                self.record = false;
                return;
            }
            self.trace.extend_from_slice(&[op, x, y]);
        }
    }

    #[inline]
    pub fn len(&self) -> usize { self.a.len() }

    /// Read without counting (reads are free; comparisons are what we count).
    #[inline]
    pub fn get(&self, i: usize) -> i32 { self.a[i] }

    /// a[i] < a[j]
    #[inline]
    pub fn less(&mut self, i: usize, j: usize) -> bool {
        self.comparisons += 1;
        self.rec(OP_COMPARE, i as i32, j as i32);
        self.a[i] < self.a[j]
    }

    /// Compare two values (e.g. one held in a temporary); hi/hj are indices to highlight.
    #[inline]
    pub fn cmp_val(&mut self, x: i32, y: i32, hi: usize, hj: usize) -> Ordering {
        self.comparisons += 1;
        self.rec(OP_COMPARE, hi as i32, hj as i32);
        x.cmp(&y)
    }

    #[inline]
    pub fn less_val(&mut self, x: i32, y: i32, hi: usize, hj: usize) -> bool {
        self.cmp_val(x, y, hi, hj) == Ordering::Less
    }

    #[inline]
    pub fn swap(&mut self, i: usize, j: usize) {
        self.swaps += 1;
        self.rec(OP_SWAP, i as i32, j as i32);
        self.a.swap(i, j);
    }

    #[inline]
    pub fn set(&mut self, i: usize, v: i32) {
        self.writes += 1;
        self.rec(OP_SET, i as i32, v);
        self.a[i] = v;
    }

    /// xorshift64* PRNG (deterministic, used for random pivots / bogo shuffles).
    pub fn rand(&mut self, bound: usize) -> usize {
        let mut x = self.rng;
        x ^= x >> 12;
        x ^= x << 25;
        x ^= x >> 27;
        self.rng = x;
        (x.wrapping_mul(0x2545_F491_4F6C_DD1D) >> 33) as usize % bound
    }
}

/// Replay a trace on `initial`, returning the final array (used by tests and mirrored in the UI).
pub fn replay(initial: &[i32], trace: &[i32]) -> Vec<i32> {
    let mut a = initial.to_vec();
    for op in trace.chunks_exact(3) {
        match op[0] {
            OP_SWAP => a.swap(op[1] as usize, op[2] as usize),
            OP_SET => a[op[1] as usize] = op[2],
            _ => {}
        }
    }
    a
}
