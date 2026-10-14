// Shell sort with the Ciura gap sequence (extended by x2.25).

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    let mut gaps = vec![1usize, 4, 10, 23, 57, 132, 301, 701];
    while *gaps.last().unwrap() < n / 2 {
        let next = (*gaps.last().unwrap() as f64 * 2.25) as usize;
        gaps.push(next);
    }
    for &gap in gaps.iter().rev() {
        for i in gap..n {
            let key = a[i];
            let mut j = i;
            while j >= gap && key < a[j - gap] {
                a[j] = a[j - gap];
                j -= gap;
            }
            a[j] = key;
        }
    }
}
