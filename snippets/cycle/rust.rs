// Cycle sort: rotate each permutation cycle into place (minimum writes).

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    for cycle_start in 0..n.saturating_sub(1) {
        let mut item = arr[cycle_start];
        let mut target_pos = cycle_start + arr[cycle_start + 1..].iter().filter(|&&x| x < item).count();
        if target_pos == cycle_start {
            continue;
        }
        while item == arr[target_pos] {
            target_pos += 1;
        }
        std::mem::swap(&mut item, &mut arr[target_pos]);
        while target_pos != cycle_start {
            target_pos = cycle_start + arr[cycle_start + 1..].iter().filter(|&&x| x < item).count();
            while item == arr[target_pos] {
                target_pos += 1;
            }
            if item != arr[target_pos] {
                std::mem::swap(&mut item, &mut arr[target_pos]);
            }
        }
    }
}
