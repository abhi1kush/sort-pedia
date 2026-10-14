//! All 20 sorting algorithms, written against the instrumented `Ctx`.
use crate::ctx::Ctx;
use std::cmp::Ordering;

// ---------------------------------------------------------------- helpers
/// Insertion sort on a[lo..hi) using shifts.
fn insertion_range(c: &mut Ctx, lo: usize, hi: usize) {
    for i in lo + 1..hi {
        let key = c.get(i);
        let mut j = i;
        while j > lo && c.less_val(key, c.get(j - 1), j, j - 1) {
            let v = c.get(j - 1);
            c.set(j, v);
            j -= 1;
        }
        if j != i {
            c.set(j, key);
        }
    }
}

fn sift_down(c: &mut Ctx, lo: usize, mut root: usize, n: usize) {
    loop {
        let mut child = 2 * root + 1;
        if child >= n { break; }
        if child + 1 < n && c.less(lo + child, lo + child + 1) { child += 1; }
        if c.less(lo + root, lo + child) {
            c.swap(lo + root, lo + child);
            root = child;
        } else {
            break;
        }
    }
}

/// Heap sort on a[lo..hi).
fn heap_range(c: &mut Ctx, lo: usize, hi: usize) {
    let n = hi - lo;
    if n < 2 { return; }
    for start in (0..n / 2).rev() { sift_down(c, lo, start, n); }
    for end in (1..n).rev() {
        c.swap(lo, lo + end);
        sift_down(c, lo, 0, end);
    }
}

/// Stable merge of a[lo..mid) and a[mid..hi) using a temp copy of the left run.
fn merge_runs(c: &mut Ctx, lo: usize, mid: usize, hi: usize) {
    let tmp: Vec<i32> = c.a[lo..mid].to_vec();
    let (mut i, mut j, mut k) = (0usize, mid, lo);
    while i < tmp.len() && j < hi {
        let r = c.get(j);
        if c.less_val(r, tmp[i], j, lo + i) {
            c.set(k, r);
            j += 1;
        } else {
            c.set(k, tmp[i]);
            i += 1;
        }
        k += 1;
    }
    while i < tmp.len() {
        c.set(k, tmp[i]);
        i += 1;
        k += 1;
    }
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
        for i in hi..end {
            let key = c.get(i);
            let (mut l, mut r) = (lo, i);
            while l < r {
                let m = (l + r) / 2;
                if c.less_val(key, c.get(m), i, m) { r = m; } else { l = m + 1; }
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
        // median of three -> a[hi-1] is the pivot
        let mid = lo + (hi - lo) / 2;
        if c.less(mid, lo) { c.swap(mid, lo); }
        if c.less(hi - 1, lo) { c.swap(hi - 1, lo); }
        if c.less(mid, hi - 1) { c.swap(mid, hi - 1); }
        // Lomuto partition around a[hi-1]
        let p = hi - 1;
        let mut i = lo;
        for j in lo..p {
            if c.less(j, p) {
                if i != j { c.swap(i, j); }
                i += 1;
            }
        }
        if i != p { c.swap(i, p); }
        // recurse into smaller side, loop on larger
        if i - lo < hi - i - 1 {
            intro_rec(c, lo, i, depth);
            lo = i + 1;
        } else {
            intro_rec(c, i + 1, hi, depth);
            hi = i;
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
    while lo < hi {
        let p = lo + c.rand(hi - lo + 1);
        c.swap(lo, p);
        let v = c.get(lo);
        let (mut lt, mut i, mut gt) = (lo, lo + 1, hi);
        while i <= gt {
            match c.cmp_val(c.get(i), v, i, lt) {
                Ordering::Less => { c.swap(lt, i); lt += 1; i += 1; }
                Ordering::Greater => { c.swap(i, gt); gt -= 1; }
                Ordering::Equal => { i += 1; }
            }
        }
        // a[lo..lt) < v, a[lt..=gt] == v, a(gt..=hi] > v
        if lt - lo < hi - gt {
            if lt > lo { quick_rec(c, lo, lt - 1); }
            lo = gt + 1;
        } else {
            if gt < hi { quick_rec(c, gt + 1, hi); }
            if lt == 0 { break; }
            hi = lt - 1;
        }
    }
}

// ---------------------------------------------------------------- 4. Merge sort (top-down)
pub fn merge(c: &mut Ctx) {
    let n = c.len();
    merge_rec(c, 0, n);
}

fn merge_rec(c: &mut Ctx, lo: usize, hi: usize) {
    if hi - lo < 2 { return; }
    let mid = lo + (hi - lo) / 2;
    merge_rec(c, lo, mid);
    merge_rec(c, mid, hi);
    merge_runs(c, lo, mid, hi);
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
    let min = *c.a.iter().min().unwrap() as i64;
    let max = *c.a.iter().max().unwrap() as i64;
    let range = (max - min) as u64;
    let mut keys: Vec<u64> = c.a.iter().map(|&v| (v as i64 - min) as u64).collect();
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
    let min = *c.a.iter().min().unwrap() as i64;
    let max = *c.a.iter().max().unwrap() as i64;
    if max - min >= COUNTING_MAX_RANGE {
        return Err(format!("counting sort needs max - min < {} (got {})", COUNTING_MAX_RANGE, max - min));
    }
    let mut count = vec![0usize; (max - min + 1) as usize];
    for i in 0..n { count[(c.get(i) as i64 - min) as usize] += 1; }
    let mut k = 0;
    for (d, &cnt) in count.iter().enumerate() {
        for _ in 0..cnt {
            c.set(k, (d as i64 + min) as i32);
            k += 1;
        }
    }
    Ok(())
}

// ---------------------------------------------------------------- 8. Bucket sort (n buckets by value range, insertion sort per bucket)
pub fn bucket(c: &mut Ctx) {
    let n = c.len();
    if n < 2 { return; }
    let min = *c.a.iter().min().unwrap() as i64;
    let max = *c.a.iter().max().unwrap() as i64;
    let range = (max - min + 1) as i128;
    let nb = n;
    let mut buckets: Vec<Vec<i32>> = vec![Vec::new(); nb];
    for i in 0..n {
        let v = c.get(i);
        let b = (((v as i64 - min) as i128 * nb as i128) / range) as usize;
        buckets[b].push(v);
    }
    let mut k = 0;
    for b in buckets {
        let start = k;
        for v in b { c.set(k, v); k += 1; }
        insertion_range(c, start, k);
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
        for i in gap..n {
            let key = c.get(i);
            let mut j = i;
            while j >= gap && c.less_val(key, c.get(j - gap), j, j - gap) {
                let v = c.get(j - gap);
                c.set(j, v);
                j -= gap;
            }
            if j != i { c.set(j, key); }
        }
    }
}

// ---------------------------------------------------------------- 10. Comb sort
pub fn comb(c: &mut Ctx) {
    let n = c.len();
    let mut gap = n;
    let mut sorted = false;
    while !sorted {
        gap = ((gap as f64) / 1.3) as usize;
        if gap <= 1 { gap = 1; sorted = true; }
        let mut i = 0;
        while i + gap < n {
            if c.less(i + gap, i) { c.swap(i, i + gap); sorted = false; }
            i += 1;
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
    for i in 0..n.saturating_sub(1) {
        let mut m = i;
        for j in i + 1..n {
            if c.less(j, m) { m = j; }
        }
        if m != i { c.swap(i, m); }
    }
}

// ---------------------------------------------------------------- 14. Cocktail shaker sort
pub fn cocktail(c: &mut Ctx) {
    let n = c.len();
    if n < 2 { return; }
    let (mut lo, mut hi) = (0usize, n - 1);
    loop {
        let mut swapped = false;
        let mut last = lo;
        for i in lo..hi {
            if c.less(i + 1, i) { c.swap(i, i + 1); swapped = true; last = i; }
        }
        if !swapped { break; }
        hi = last;
        swapped = false;
        let mut first = hi;
        for i in (lo..hi).rev() {
            if c.less(i + 1, i) { c.swap(i, i + 1); swapped = true; first = i + 1; }
        }
        if !swapped { break; }
        lo = first;
    }
}

// ---------------------------------------------------------------- 15. Bubble sort (early exit)
pub fn bubble(c: &mut Ctx) {
    let n = c.len();
    let mut end = n;
    while end > 1 {
        let mut last = 0;
        for i in 1..end {
            if c.less(i, i - 1) { c.swap(i - 1, i); last = i; }
        }
        end = last;
    }
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
    for start in 0..n.saturating_sub(1) {
        let mut item = c.get(start);
        let mut pos = start;
        for i in start + 1..n {
            if c.less_val(c.get(i), item, i, start) { pos += 1; }
        }
        if pos == start { continue; }
        while c.cmp_val(item, c.get(pos), start, pos) == Ordering::Equal { pos += 1; }
        let old = c.get(pos);
        c.set(pos, item);
        item = old;
        while pos != start {
            pos = start;
            for i in start + 1..n {
                if c.less_val(c.get(i), item, i, start) { pos += 1; }
            }
            while c.cmp_val(item, c.get(pos), start, pos) == Ordering::Equal { pos += 1; }
            if pos == start {
                c.set(start, item);
                break;
            }
            let old = c.get(pos);
            c.set(pos, item);
            item = old;
        }
    }
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
        let mut mi = 0;
        for i in 1..size {
            if c.less(mi, i) { mi = i; }
        }
        if mi != size - 1 {
            if mi != 0 { flip(c, mi); }
            flip(c, size - 1);
        }
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
