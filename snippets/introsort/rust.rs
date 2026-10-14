// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small slices.

fn insertion(arr: &mut [i32]) {
    for i in 1..arr.len() {
        let key = arr[i];
        let mut j = i;
        while j > 0 && key < arr[j - 1] {
            arr[j] = arr[j - 1];
            j -= 1;
        }
        arr[j] = key;
    }
}

fn sift(arr: &mut [i32], mut root: usize, n: usize) {
    loop {
        let mut child = 2 * root + 1;
        if child >= n {
            return;
        }
        if child + 1 < n && arr[child] < arr[child + 1] {
            child += 1;
        }
        if arr[root] >= arr[child] {
            return;
        }
        arr.swap(root, child);
        root = child;
    }
}

fn heapsort(arr: &mut [i32]) {
    let n = arr.len();
    for i in (0..n / 2).rev() {
        sift(arr, i, n);
    }
    for end in (1..n).rev() {
        arr.swap(0, end);
        sift(arr, 0, end);
    }
}

fn intro(mut arr: &mut [i32], mut depth: u32) {
    while arr.len() > 16 {
        if depth == 0 {
            heapsort(arr);
            return;
        }
        depth -= 1;
        let (mid, pivot_pos) = (arr.len() / 2, arr.len() - 1);
        if arr[mid] < arr[0] { arr.swap(mid, 0); }
        if arr[pivot_pos] < arr[0] { arr.swap(pivot_pos, 0); }
        if arr[mid] < arr[pivot_pos] { arr.swap(mid, pivot_pos); } // median now at arr[pivot_pos]
        let mut store_pos = 0;
        for i in 0..pivot_pos {
            if arr[i] < arr[pivot_pos] {
                arr.swap(store_pos, i);
                store_pos += 1;
            }
        }
        arr.swap(store_pos, pivot_pos);
        let (left, right) = arr.split_at_mut(store_pos);
        let right = &mut right[1..];
        // recurse into the smaller side, loop on the larger one
        if left.len() < right.len() {
            intro(left, depth);
            arr = right;
        } else {
            intro(right, depth);
            arr = left;
        }
    }
    insertion(arr);
}

pub fn sort_array(arr: &mut [i32]) {
    let depth = 2 * (usize::BITS - arr.len().leading_zeros());
    intro(arr, depth);
}
