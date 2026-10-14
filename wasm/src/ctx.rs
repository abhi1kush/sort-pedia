//! Instrumented array context: every sort operates through `Ctx` so that
//! comparisons, swaps and writes are counted and (optionally) recorded as a
//! trace that the UI can replay.

use std::cmp::Ordering;

/// Trace op codes. Each trace entry is three i32s: `[op, x, y]`.
pub const OP_COMPARE: i32 = 0; // x, y = indices compared (highlight only)
pub const OP_SWAP: i32 = 1; // x, y = indices swapped
pub const OP_SET: i32 = 2; // x = index, y = new value
pub const OP_POINTER: i32 = 3; // x = pointer name id (see POINTER_NAMES), y = index (or value for value pointers), -1 = hide
pub const OP_SORTED: i32 = 4; // mark a[x..y) as being in final sorted position
pub const OP_COMPARE_HELD: i32 = 5; // x = index, y = held value compared against a[x] (e.g. insertion key)

/// Pointer names used by OP_POINTER, indexed by id. Mirrored in src/trace.ts.
pub const POINTER_NAMES: [&str; 21] = [
    "i", "j", "k", "pivot", "lo", "hi", "min", "key", "gap", "mid", "right", "heap", "node", "child", "end", "lt",
    "gt", "start", "pos", "size", "max",
];
#[allow(dead_code)]
pub mod p {
    pub const I: i32 = 0; pub const J: i32 = 1; pub const K: i32 = 2; pub const PIVOT: i32 = 3; pub const LO: i32 = 4;
    pub const HI: i32 = 5; pub const MIN: i32 = 6; pub const KEY: i32 = 7; pub const GAP: i32 = 8; pub const MID: i32 = 9;
    pub const RIGHT: i32 = 10; pub const HEAP: i32 = 11; pub const NODE: i32 = 12; pub const CHILD: i32 = 13;
    pub const END: i32 = 14; pub const LT: i32 = 15; pub const GT: i32 = 16; pub const START: i32 = 17; pub const POS: i32 = 18;
    pub const SIZE: i32 = 19; pub const MAX: i32 = 20;
}

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

    /// Compare a value held outside the array (key / left-run value / item) with a[i]: returns held < a[i].
    #[inline]
    pub fn held_less(&mut self, held: i32, i: usize) -> bool {
        self.comparisons += 1;
        self.rec(OP_COMPARE_HELD, i as i32, held);
        held < self.a[i]
    }

    /// a[i] < held
    #[inline]
    pub fn less_than_held(&mut self, i: usize, held: i32) -> bool {
        self.comparisons += 1;
        self.rec(OP_COMPARE_HELD, i as i32, held);
        self.a[i] < held
    }

    #[inline]
    pub fn held_eq(&mut self, held: i32, i: usize) -> bool {
        self.comparisons += 1;
        self.rec(OP_COMPARE_HELD, i as i32, held);
        held == self.a[i]
    }

    /// Visual-only: place pointer `name` at index (or value) `v`. Not counted.
    #[inline]
    pub fn ptr(&mut self, name: i32, v: usize) {
        if self.record { self.rec(OP_POINTER, name, v as i32); }
    }

    #[inline]
    pub fn hide(&mut self, name: i32) {
        if self.record { self.rec(OP_POINTER, name, -1); }
    }

    /// Visual-only: a[lo..hi) is in its final position.
    #[inline]
    pub fn sorted(&mut self, lo: usize, hi: usize) {
        if self.record && lo < hi { self.rec(OP_SORTED, lo as i32, hi as i32); }
    }

    pub fn is_recording(&self) -> bool { self.record }

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
