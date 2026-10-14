// Heap sort: build a max-heap, then repeatedly move the max to the end.

fn sift_down(a: &mut [i32], mut root: usize, n: usize) {
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

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    for i in (0..n / 2).rev() {
        sift_down(a, i, n);
    }
    for end in (1..n).rev() {
        a.swap(0, end);
        sift_down(a, 0, end);
    }
}
