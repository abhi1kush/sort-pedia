// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    if n < 2 {
        return;
    }
    let min = *arr.iter().min().unwrap() as i64;
    let range = *arr.iter().max().unwrap() as i64 - min + 1;
    let mut buckets: Vec<Vec<i32>> = vec![Vec::new(); n];
    for &v in arr.iter() {
        buckets[((v as i64 - min) * n as i64 / range) as usize].push(v);
    }
    let mut write_pos = 0;
    for mut bucket in buckets {
        for i in 1..bucket.len() {
            // insertion sort
            let key = bucket[i];
            let mut j = i;
            while j > 0 && key < bucket[j - 1] {
                bucket[j] = bucket[j - 1];
                j -= 1;
            }
            bucket[j] = key;
        }
        arr[write_pos..write_pos + bucket.len()].copy_from_slice(&bucket);
        write_pos += bucket.len();
    }
}
