// Heap sort: build a max-heap, then repeatedly move the max to the end.

fn sift_down(arr: &mut [i32], mut node: usize, n: usize) {
    loop {
        let mut child = 2 * node + 1;
        if child >= n {
            return;
        }
        if child + 1 < n && arr[child] < arr[child + 1] {
            child += 1;
        }
        if arr[node] >= arr[child] {
            return;
        }
        arr.swap(node, child);
        node = child;
    }
}

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    for node in (0..n / 2).rev() {
        sift_down(arr, node, n);
    }
    for heap_end in (1..n).rev() {
        arr.swap(0, heap_end);
        sift_down(arr, 0, heap_end);
    }
}
