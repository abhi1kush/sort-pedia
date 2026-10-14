// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small slices.

fn insertion(a: &mut [i32]) {
    for i in 1..a.len() {
        let key = a[i];
        let mut j = i;
        while j > 0 && key < a[j - 1] {
            a[j] = a[j - 1];
            j -= 1;
        }
        a[j] = key;
    }
}

fn sift(a: &mut [i32], mut root: usize, n: usize) {
    loop {
        let mut child = 2 * root + 1;
        if child >= n {
            return;
        }
        if child + 1 < n && a[child] < a[child + 1] {
            child += 1;
        }
        if a[root] >= a[child] {
            return;
        }
        a.swap(root, child);
        root = child;
    }
}

fn heapsort(a: &mut [i32]) {
    let n = a.len();
    for i in (0..n / 2).rev() {
        sift(a, i, n);
    }
    for end in (1..n).rev() {
        a.swap(0, end);
        sift(a, 0, end);
    }
}

fn intro(mut a: &mut [i32], mut depth: u32) {
    while a.len() > 16 {
        if depth == 0 {
            heapsort(a);
            return;
        }
        depth -= 1;
        let (mid, p) = (a.len() / 2, a.len() - 1);
        if a[mid] < a[0] { a.swap(mid, 0); }
        if a[p] < a[0] { a.swap(p, 0); }
        if a[mid] < a[p] { a.swap(mid, p); } // median now at a[p]
        let mut i = 0;
        for j in 0..p {
            if a[j] < a[p] {
                a.swap(i, j);
                i += 1;
            }
        }
        a.swap(i, p);
        let (left, right) = a.split_at_mut(i);
        let right = &mut right[1..];
        // recurse into the smaller side, loop on the larger one
        if left.len() < right.len() {
            intro(left, depth);
            a = right;
        } else {
            intro(right, depth);
            a = left;
        }
    }
    insertion(a);
}

pub fn sort_array(a: &mut [i32]) {
    let depth = 2 * (usize::BITS - a.len().leading_zeros());
    intro(a, depth);
}
