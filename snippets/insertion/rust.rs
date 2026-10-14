// Insertion sort: grow a sorted prefix one element at a time.

pub fn sort_array(arr: &mut [i32]) {
    for current in 1..arr.len() {
        let key = arr[current];
        let mut hole = current;
        while hole > 0 && key < arr[hole - 1] {
            arr[hole] = arr[hole - 1];
            hole -= 1;
        }
        arr[hole] = key;
    }
}
