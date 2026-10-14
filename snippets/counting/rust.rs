// Counting sort for integers in a known (small) range [min, max].

pub fn sort_array(arr: &mut [i32]) {
    if arr.len() < 2 {
        return;
    }
    let min = *arr.iter().min().unwrap() as i64;
    let max = *arr.iter().max().unwrap() as i64;
    let mut count = vec![0usize; (max - min + 1) as usize];
    for &v in arr.iter() {
        count[(v as i64 - min) as usize] += 1;
    }
    let mut write_pos = 0;
    for (v, &c) in count.iter().enumerate() {
        for _ in 0..c {
            arr[write_pos] = (v as i64 + min) as i32;
            write_pos += 1;
        }
    }
}
