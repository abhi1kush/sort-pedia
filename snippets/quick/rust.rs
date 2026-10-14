// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
// A tiny xorshift PRNG keeps the snippet dependency-free.

fn next_rand(state: &mut u64) -> u64 {
    *state ^= *state << 13;
    *state ^= *state >> 7;
    *state ^= *state << 17;
    *state
}

fn quick(arr: &mut [i32], rng: &mut u64) {
    let (mut lo, mut hi) = (0usize, arr.len());
    // sort arr[lo..hi)
    while hi - lo > 1 {
        let pivot_index = lo + (next_rand(rng) % (hi - lo) as u64) as usize;
        arr.swap(lo, pivot_index);
        let pivot = arr[lo];
        let (mut less_end, mut scan, mut greater_start) = (lo, lo + 1, hi);
        while scan < greater_start {
            if arr[scan] < pivot {
                arr.swap(less_end, scan);
                less_end += 1;
                scan += 1;
            } else if arr[scan] > pivot {
                greater_start -= 1;
                arr.swap(scan, greater_start);
            } else {
                scan += 1;
            }
        }
        // arr[lo..less_end) < pivot, arr[less_end..greater_start) == pivot, arr[greater_start..hi) > pivot
        if less_end - lo < hi - greater_start {
            quick(&mut arr[lo..less_end], rng);
            lo = greater_start;
        } else {
            quick(&mut arr[greater_start..hi], rng);
            hi = less_end;
        }
    }
}

pub fn sort_array(arr: &mut [i32]) {
    let mut rng = 0x2545_F491_4F6C_DD1D_u64;
    quick(arr, &mut rng);
}
