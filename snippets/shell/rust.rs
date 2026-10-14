// Shell sort with the Ciura gap sequence (extended by x2.25).

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    let mut gaps = vec![1usize, 4, 10, 23, 57, 132, 301, 701];
    while *gaps.last().unwrap() < n / 2 {
        let next = (*gaps.last().unwrap() as f64 * 2.25) as usize;
        gaps.push(next);
    }
    for &gap in gaps.iter().rev() {
        for current in gap..n {
            let key = arr[current];
            let mut hole = current;
            while hole >= gap && key < arr[hole - gap] {
                arr[hole] = arr[hole - gap];
                hole -= gap;
            }
            arr[hole] = key;
        }
    }
}
