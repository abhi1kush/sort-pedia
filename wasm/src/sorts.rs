//! All 20 sorting algorithms, written against the instrumented `Ctx`.
use crate::ctx::{p, Ctx};
use std::cmp::Ordering;

// ---------------------------------------------------------------- helpers
/// Insertion sort on arr[lo..hi) using shifts.
fn insertion_range(c: &mut Ctx, lo: usize, hi: usize) {
    for current in lo + 1..hi {
        let key = c.get(current);
        c.ptr(p::CURRENT, current);
        c.ptr(p::KEY, current);
        let mut hole = current;
        c.ptr(p::HOLE, hole);
        while hole > lo && c.held_less(key, hole - 1) {
            let v = c.get(hole - 1);
            c.set(hole, v);
            hole -= 1;
            c.ptr(p::HOLE, hole);
        }
        if hole != current {
            c.set(hole, key);
        }
        c.ptr(p::KEY, hole);
    }
    c.hide(p::CURRENT);
    c.hide(p::HOLE);
    c.hide(p::KEY);
}

fn sift_down(c: &mut Ctx, lo: usize, mut root: usize, n: usize) {
    loop {
        c.ptr(p::NODE, lo + root);
        let mut child = 2 * root + 1;
        if child >= n { break; }
        c.ptr(p::CHILD, lo + child);
        if child + 1 < n && c.less(lo + child, lo + child + 1) { child += 1; c.ptr(p::CHILD, lo + child); }
        if c.less(lo + root, lo + child) {
            c.swap(lo + root, lo + child);
            root = child;
        } else {
            break;
        }
    }
    c.hide(p::CHILD);
}

/// Heap sort on arr[lo..hi).
fn heap_range(c: &mut Ctx, lo: usize, hi: usize) {
    let n = hi - lo;
    if n < 2 { return; }
    c.ptr(p::HEAP_END, lo + n - 1);
    for start in (0..n / 2).rev() { sift_down(c, lo, start, n); }
    for end in (1..n).rev() {
        c.swap(lo, lo + end);
        c.sorted(lo + end, lo + end + 1);
        c.ptr(p::HEAP_END, lo + end - 1);
        sift_down(c, lo, 0, end);
    }
    c.hide(p::HEAP_END);
    c.hide(p::NODE);
}

/// Stable merge of arr[lo..mid) and arr[mid..hi) using a temp copy of the left run.
fn merge_runs(c: &mut Ctx, lo: usize, mid: usize, hi: usize) {
    let temp: Vec<i32> = c.arr[lo..mid].to_vec();
    let (mut left_idx, mut right_pos, mut write_pos) = (0usize, mid, lo);
    c.ptr(p::LO, lo);
    c.ptr(p::MID, mid - 1); // last index of the left half
    c.ptr(p::HI, hi - 1);
    while left_idx < temp.len() && right_pos < hi {
        c.ptr(p::WRITE_POS, write_pos);
        c.ptr(p::RIGHT_POS, right_pos);
        // compare right-run value arr[right_pos] with held left-run value temp[left_idx]
        if c.less_than_held(right_pos, temp[left_idx]) {
            let r = c.get(right_pos);
            c.set(write_pos, r);
            right_pos += 1;
        } else {
            c.set(write_pos, temp[left_idx]);
            left_idx += 1;
        }
        write_pos += 1;
    }
    c.hide(p::RIGHT_POS);
    while left_idx < temp.len() {
        c.ptr(p::WRITE_POS, write_pos);
        c.set(write_pos, temp[left_idx]);
        left_idx += 1;
        write_pos += 1;
    }
    for name in [p::WRITE_POS, p::LO, p::MID, p::HI] { c.hide(name); }
}

// ---------------------------------------------------------------- 1. Timsort (simplified: runs + binary insertion + merge stack, no galloping)
fn min_run(mut n: usize) -> usize {
    let mut r = 0;
    while n >= 32 {
        r |= n & 1;
        n >>= 1;
    }
    n + r
}

pub fn timsort(c: &mut Ctx) {
    let n = c.len();
    if n < 2 { return; }
    let minrun = min_run(n);
    let mut runs: Vec<(usize, usize)> = Vec::new();
    let mut lo = 0;
    while lo < n {
        // find natural run
        let mut hi = lo + 1;
        if hi < n {
            if c.less(hi, lo) {
                // strictly descending
                while hi + 1 < n && c.less(hi + 1, hi) { hi += 1; }
                let (mut x, mut y) = (lo, hi);
                while x < y { c.swap(x, y); x += 1; y -= 1; }
            } else {
                while hi + 1 < n && !c.less(hi + 1, hi) { hi += 1; }
            }
            hi += 1;
        }
        // extend to minrun with binary insertion
        let end = std::cmp::min(n, lo + minrun).max(hi);
        c.ptr(p::RUN_START, lo);
        for i in hi..end {
            c.ptr(p::KEY, i);
            let key = c.get(i);
            let (mut l, mut r) = (lo, i);
            while l < r {
                let m = (l + r) / 2;
                if c.held_less(key, m) { r = m; } else { l = m + 1; }
            }
            let mut j = i;
            while j > l { let v = c.get(j - 1); c.set(j, v); j -= 1; }
            if l != i { c.set(l, key); }
        }
        runs.push((lo, end - lo));
        lo = end;
        merge_collapse(c, &mut runs);
    }
    while runs.len() > 1 {
        let n = runs.len();
        merge_at(c, &mut runs, n - 2);
    }
}

fn merge_at(c: &mut Ctx, runs: &mut Vec<(usize, usize)>, i: usize) {
    let (s1, l1) = runs[i];
    let (_s2, l2) = runs[i + 1];
    merge_runs(c, s1, s1 + l1, s1 + l1 + l2);
    runs[i] = (s1, l1 + l2);
    runs.remove(i + 1);
}

fn merge_collapse(c: &mut Ctx, runs: &mut Vec<(usize, usize)>) {
    while runs.len() > 1 {
        let n = runs.len();
        let b = runs[n - 2].1;
        let cc = runs[n - 1].1;
        if (n >= 3 && runs[n - 3].1 <= b + cc) || (n >= 4 && runs[n - 4].1 <= runs[n - 3].1 + b) {
            if runs[n - 3].1 < cc { merge_at(c, runs, n - 3); } else { merge_at(c, runs, n - 2); }
        } else if b <= cc {
            merge_at(c, runs, n - 2);
        } else {
            break;
        }
    }
}

// ---------------------------------------------------------------- 2. Introsort
pub fn introsort(c: &mut Ctx) {
    let n = c.len();
    if n < 2 { return; }
    let depth = 2 * (usize::BITS - n.leading_zeros()) as usize;
    intro_rec(c, 0, n, depth);
}

fn intro_rec(c: &mut Ctx, mut lo: usize, mut hi: usize, mut depth: usize) {
    while hi - lo > 16 {
        if depth == 0 {
            heap_range(c, lo, hi);
            return;
        }
        depth -= 1;
        // median of three -> arr[hi-1] is the pivot
        let mid = lo + (hi - lo) / 2;
        if c.less(mid, lo) { c.swap(mid, lo); }
        if c.less(hi - 1, lo) { c.swap(hi - 1, lo); }
        if c.less(mid, hi - 1) { c.swap(mid, hi - 1); }
        // Lomuto partition around arr[hi-1]
        let pv = hi - 1;
        c.ptr(p::PIVOT, pv);
        let mut store_pos = lo;
        c.ptr(p::STORE_POS, store_pos);
        for i in lo..pv {
            c.ptr(p::I, i);
            if c.less(i, pv) {
                if store_pos != i { c.swap(store_pos, i); }
                store_pos += 1;
                c.ptr(p::STORE_POS, store_pos);
            }
        }
        if store_pos != pv { c.swap(store_pos, pv); }
        c.sorted(store_pos, store_pos + 1);
        c.hide(p::PIVOT); c.hide(p::I); c.hide(p::STORE_POS);
        // recurse into smaller side, loop on larger
        if store_pos - lo < hi - store_pos - 1 {
            intro_rec(c, lo, store_pos, depth);
            lo = store_pos + 1;
        } else {
            intro_rec(c, store_pos + 1, hi, depth);
            hi = store_pos;
        }
    }
    insertion_range(c, lo, hi);
}

// ---------------------------------------------------------------- 3. Quick sort (3-way, random pivot)
pub fn quick(c: &mut Ctx) {
    let n = c.len();
    if n > 1 { quick_rec(c, 0, n - 1); }
}

fn quick_rec(c: &mut Ctx, mut lo: usize, mut hi: usize) {
    if lo == hi { c.sorted(lo, lo + 1); }
    while lo < hi {
        c.ptr(p::LO, lo);
        c.ptr(p::HI, hi);
        let pivot_index = lo + c.rand(hi - lo + 1);
        if pivot_index != lo { c.swap(lo, pivot_index); }
        let pivot = c.get(lo);
        let (mut less_end, mut i, mut greater_start) = (lo, lo + 1, hi);
        // invariant: arr[less_end..i) == pivot, so arr[less_end] always holds the pivot value
        let show = |c: &mut Ctx, less_end: usize, i: usize, greater_start: usize| {
            c.ptr(p::PIVOT, less_end); c.ptr(p::LESS_END, less_end); c.ptr(p::GREATER_START, greater_start);
            if i <= greater_start { c.ptr(p::I, i); } else { c.hide(p::I); }
        };
        show(c, less_end, i, greater_start);
        while i <= greater_start {
            match c.cmp_val(c.get(i), pivot, i, less_end) {
                Ordering::Less => { c.swap(less_end, i); less_end += 1; i += 1; }
                Ordering::Greater => { c.swap(i, greater_start); greater_start -= 1; }
                Ordering::Equal => { i += 1; }
            }
            show(c, less_end, i, greater_start);
        }
        c.sorted(less_end, greater_start + 1);
        for name in [p::PIVOT, p::LESS_END, p::I, p::GREATER_START, p::LO, p::HI] { c.hide(name); }
        // arr[lo..less_end) < pivot, arr[less_end..=greater_start] == pivot, arr(greater_start..=hi] > pivot
        if less_end - lo < hi - greater_start {
            if less_end > lo { quick_rec(c, lo, less_end - 1); }
            lo = greater_start + 1;
            if lo > hi { break; }
        } else {
            if greater_start < hi { quick_rec(c, greater_start + 1, hi); }
            if less_end == 0 { break; }
            hi = less_end - 1;
        }
        if lo == hi { c.sorted(lo, lo + 1); }
    }
}

// ---------------------------------------------------------------- 4. Merge sort (top-down)
pub fn merge(c: &mut Ctx) {
    let n = c.len();
    if n == 0 { return; }
    merge_rec(c, 0, n - 1);
}

/// Top-down recursive merge sort on the inclusive range arr[lo..=hi].
fn merge_rec(c: &mut Ctx, lo: usize, hi: usize) {
    if lo >= hi {
        c.base(lo); // one element: already sorted
        return;
    }
    let mid = lo + (hi - lo) / 2;
    c.split(lo, hi);
    merge_rec(c, lo, mid);
    merge_rec(c, mid + 1, hi);
    c.merge_mark(lo, hi);
    merge_runs(c, lo, mid + 1, hi + 1);
}

// ---------------------------------------------------------------- 5. Heap sort
pub fn heap(c: &mut Ctx) {
    let n = c.len();
    heap_range(c, 0, n);
}

// ---------------------------------------------------------------- 6. Radix sort (LSD, base 256, handles negatives via offset)
pub fn radix(c: &mut Ctx) {
    let n = c.len();
    if n < 2 { return; }
    let min = *c.arr.iter().min().unwrap() as i64;
    let max = *c.arr.iter().max().unwrap() as i64;
    let range = (max - min) as u64;
    let mut keys: Vec<u64> = c.arr.iter().map(|&v| (v as i64 - min) as u64).collect();
    let mut shift = 0u32;
    while shift < 64 && (range >> shift) > 0 {
        let mut count = [0usize; 257];
        for &k in &keys { count[((k >> shift) & 255) as usize + 1] += 1; }
        for d in 0..256 { count[d + 1] += count[d]; }
        let mut out = vec![0u64; n];
        for &k in &keys {
            let d = ((k >> shift) & 255) as usize;
            out[count[d]] = k;
            count[d] += 1;
        }
        for (i, &k) in out.iter().enumerate() { c.set(i, (k as i64 + min) as i32); }
        keys = out;
        shift += 8;
    }
}

// ---------------------------------------------------------------- 7. Counting sort
pub const COUNTING_MAX_RANGE: i64 = 1_000_000;

pub fn counting(c: &mut Ctx) -> Result<(), String> {
    let n = c.len();
    if n < 2 { return Ok(()); }
    let min = *c.arr.iter().min().unwrap() as i64;
    let max = *c.arr.iter().max().unwrap() as i64;
    if max - min >= COUNTING_MAX_RANGE {
        return Err(format!("counting sort needs max - min < {} (got {})", COUNTING_MAX_RANGE, max - min));
    }
    let mut count = vec![0usize; (max - min + 1) as usize];
    for i in 0..n { count[(c.get(i) as i64 - min) as usize] += 1; }
    let mut write_pos = 0;
    for (d, &cnt) in count.iter().enumerate() {
        for _ in 0..cnt {
            c.ptr(p::WRITE_POS, write_pos);
            c.set(write_pos, (d as i64 + min) as i32);
            write_pos += 1;
        }
    }
    Ok(())
}

// ---------------------------------------------------------------- 8. Bucket sort (n buckets by value range, insertion sort per bucket)
pub fn bucket(c: &mut Ctx) {
    let n = c.len();
    if n < 2 { return; }
    let min = *c.arr.iter().min().unwrap() as i64;
    let max = *c.arr.iter().max().unwrap() as i64;
    let range = (max - min + 1) as i128;
    let nb = n;
    let mut buckets: Vec<Vec<i32>> = vec![Vec::new(); nb];
    for i in 0..n {
        let v = c.get(i);
        let bucket = (((v as i64 - min) as i128 * nb as i128) / range) as usize;
        buckets[bucket].push(v);
    }
    let mut write_pos = 0;
    for bucket in buckets {
        let start = write_pos;
        for v in bucket { c.set(write_pos, v); write_pos += 1; }
        insertion_range(c, start, write_pos);
    }
}

// ---------------------------------------------------------------- 9. Shell sort (Ciura gaps)
pub fn shell(c: &mut Ctx) {
    let n = c.len();
    let mut gaps: Vec<usize> = vec![1, 4, 10, 23, 57, 132, 301, 701];
    while *gaps.last().unwrap() < n / 2 {
        let g = (*gaps.last().unwrap() as f64 * 2.25) as usize;
        gaps.push(g);
    }
    for &gap in gaps.iter().rev() {
        if gap >= n { continue; }
        c.ptr(p::GAP, gap);
        for current in gap..n {
            let key = c.get(current);
            c.ptr(p::CURRENT, current);
            c.ptr(p::KEY, current);
            let mut hole = current;
            c.ptr(p::HOLE, hole);
            while hole >= gap && c.held_less(key, hole - gap) {
                let v = c.get(hole - gap);
                c.set(hole, v);
                hole -= gap;
                c.ptr(p::HOLE, hole);
            }
            if hole != current { c.set(hole, key); }
        }
    }
    for name in [p::GAP, p::CURRENT, p::HOLE, p::KEY] { c.hide(name); }
}

// ---------------------------------------------------------------- 10. Comb sort
pub fn comb(c: &mut Ctx) {
    let n = c.len();
    let mut gap = n;
    let mut sorted = false;
    while !sorted {
        gap = ((gap as f64) / 1.3) as usize;
        if gap <= 1 { gap = 1; sorted = true; }
        c.ptr(p::GAP, gap);
        let mut left = 0;
        while left + gap < n {
            c.ptr(p::LEFT, left);
            c.ptr(p::RIGHT, left + gap);
            if c.less(left + gap, left) { c.swap(left, left + gap); sorted = false; }
            left += 1;
        }
    }
}

// ---------------------------------------------------------------- 11. Bitonic sort (arbitrary n)
pub fn bitonic(c: &mut Ctx) {
    let n = c.len();
    bitonic_sort(c, 0, n, true);
}

fn bitonic_sort(c: &mut Ctx, lo: usize, n: usize, up: bool) {
    if n > 1 {
        let m = n / 2;
        bitonic_sort(c, lo, m, !up);
        bitonic_sort(c, lo + m, n - m, up);
        bitonic_merge(c, lo, n, up);
    }
}

fn greatest_pow2_less_than(n: usize) -> usize {
    let mut k = 1;
    while k << 1 < n { k <<= 1; }
    k
}

fn bitonic_merge(c: &mut Ctx, lo: usize, n: usize, up: bool) {
    if n > 1 {
        let m = greatest_pow2_less_than(n);
        for i in lo..lo + n - m {
            // swap if out of order for the requested direction
            let out = if up { c.less(i + m, i) } else { c.less(i, i + m) };
            if out { c.swap(i, i + m); }
        }
        bitonic_merge(c, lo, m, up);
        bitonic_merge(c, lo + m, n - m, up);
    }
}

// ---------------------------------------------------------------- 12. Insertion sort
pub fn insertion(c: &mut Ctx) {
    let n = c.len();
    insertion_range(c, 0, n);
}

// ---------------------------------------------------------------- 13. Selection sort
pub fn selection(c: &mut Ctx) {
    let n = c.len();
    for fill_pos in 0..n.saturating_sub(1) {
        let mut min_index = fill_pos;
        c.ptr(p::FILL_POS, fill_pos);
        c.ptr(p::MIN_INDEX, min_index);
        for i in fill_pos + 1..n {
            c.ptr(p::I, i);
            if c.less(i, min_index) { min_index = i; c.ptr(p::MIN_INDEX, min_index); }
        }
        if min_index != fill_pos { c.swap(fill_pos, min_index); }
        c.sorted(fill_pos, fill_pos + 1);
    }
    for name in [p::FILL_POS, p::I, p::MIN_INDEX] { c.hide(name); }
}

// ---------------------------------------------------------------- 14. Cocktail shaker sort
pub fn cocktail(c: &mut Ctx) {
    let n = c.len();
    if n < 2 { return; }
    let (mut lo, mut hi) = (0usize, n - 1);
    loop {
        let mut swapped = false;
        let mut last = lo;
        c.ptr(p::LO, lo);
        c.ptr(p::HI, hi);
        for i in lo..hi {
            c.ptr(p::I, i);
            if c.less(i + 1, i) { c.swap(i, i + 1); swapped = true; last = i; }
        }
        c.sorted(last + 1, hi + 1);
        if !swapped { break; }
        hi = last;
        swapped = false;
        let mut first = hi;
        c.ptr(p::HI, hi);
        for i in (lo..hi).rev() {
            c.ptr(p::I, i);
            if c.less(i + 1, i) { c.swap(i, i + 1); swapped = true; first = i + 1; }
        }
        c.sorted(lo, first);
        if !swapped { break; }
        lo = first;
    }
}

// ---------------------------------------------------------------- 15. Bubble sort (early exit)
pub fn bubble(c: &mut Ctx) {
    let n = c.len();
    let mut sorted_from = n;
    while sorted_from > 1 {
        let mut last = 0;
        if sorted_from < n { c.ptr(p::SORTED_FROM, sorted_from); } else { c.hide(p::SORTED_FROM); }
        for i in 1..sorted_from {
            c.ptr(p::I, i);
            if c.less(i, i - 1) { c.swap(i - 1, i); last = i; }
        }
        // everything from the last swap to the old sorted_from is in final position
        c.sorted(last, sorted_from);
        sorted_from = last;
    }
    c.hide(p::I);
    c.hide(p::SORTED_FROM);
}

// ---------------------------------------------------------------- 16. Odd-even (brick) sort
pub fn odd_even(c: &mut Ctx) {
    let n = c.len();
    let mut sorted = false;
    while !sorted {
        sorted = true;
        for start in [1usize, 0] {
            let mut i = start;
            while i + 1 < n {
                c.ptr(p::PAIR_START, i);
                if c.less(i + 1, i) { c.swap(i, i + 1); sorted = false; }
                i += 2;
            }
        }
    }
}

// ---------------------------------------------------------------- 17. Gnome sort
pub fn gnome(c: &mut Ctx) {
    let n = c.len();
    let mut i = 0;
    while i < n {
        c.ptr(p::GNOME_POS, i);
        if i == 0 || !c.less(i, i - 1) {
            i += 1;
        } else {
            c.swap(i, i - 1);
            i -= 1;
        }
    }
}

// ---------------------------------------------------------------- 18. Cycle sort (minimum writes)
pub fn cycle(c: &mut Ctx) {
    let n = c.len();
    for cycle_start in 0..n.saturating_sub(1) {
        let mut item = c.get(cycle_start);
        c.ptr(p::CYCLE_START, cycle_start);
        let mut target_pos = cycle_start;
        for i in cycle_start + 1..n {
            c.ptr(p::I, i);
            if c.less_than_held(i, item) { target_pos += 1; }
        }
        c.ptr(p::TARGET_POS, target_pos);
        if target_pos == cycle_start { c.sorted(cycle_start, cycle_start + 1); continue; }
        while c.held_eq(item, target_pos) { target_pos += 1; c.ptr(p::TARGET_POS, target_pos); }
        let old = c.get(target_pos);
        c.set(target_pos, item);
        item = old;
        while target_pos != cycle_start {
            target_pos = cycle_start;
            for i in cycle_start + 1..n {
                c.ptr(p::I, i);
                if c.less_than_held(i, item) { target_pos += 1; }
            }
            c.ptr(p::TARGET_POS, target_pos);
            while c.held_eq(item, target_pos) { target_pos += 1; c.ptr(p::TARGET_POS, target_pos); }
            if target_pos == cycle_start {
                c.set(cycle_start, item);
                break;
            }
            let old = c.get(target_pos);
            c.set(target_pos, item);
            item = old;
        }
        c.sorted(cycle_start, cycle_start + 1);
    }
    for name in [p::CYCLE_START, p::I, p::TARGET_POS] { c.hide(name); }
}

// ---------------------------------------------------------------- 19. Pancake sort
fn flip(c: &mut Ctx, k: usize) {
    let (mut i, mut j) = (0, k);
    while i < j { c.swap(i, j); i += 1; j -= 1; }
}

pub fn pancake(c: &mut Ctx) {
    let n = c.len();
    let mut size = n;
    while size > 1 {
        c.ptr(p::LAST_UNSORTED, size - 1);
        let mut max_index = 0;
        c.ptr(p::MAX_INDEX, max_index);
        for i in 1..size {
            c.ptr(p::I, i);
            if c.less(max_index, i) { max_index = i; c.ptr(p::MAX_INDEX, max_index); }
        }
        if max_index != size - 1 {
            if max_index != 0 { flip(c, max_index); }
            flip(c, size - 1);
        }
        c.sorted(size - 1, size);
        size -= 1;
    }
}

// ---------------------------------------------------------------- 20. Bogo sort (capped)
pub const BOGO_MAX_N: usize = 8;
pub const BOGO_MAX_SHUFFLES: u64 = 5_000_000;

pub fn bogo(c: &mut Ctx) -> Result<(), String> {
    let n = c.len();
    if n > BOGO_MAX_N {
        return Err(format!("bogo sort is limited to {} elements", BOGO_MAX_N));
    }
    let mut shuffles = 0u64;
    loop {
        let mut sorted = true;
        for i in 1..n {
            if c.less(i, i - 1) { sorted = false; break; }
        }
        if sorted { return Ok(()); }
        if shuffles >= BOGO_MAX_SHUFFLES {
            return Err("bogo sort gave up (shuffle cap reached)".into());
        }
        for i in (1..n).rev() {
            let j = c.rand(i + 1);
            if i != j { c.swap(i, j); }
        }
        shuffles += 1;
    }
}
