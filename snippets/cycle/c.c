/* Cycle sort: rotate each cycle of the permutation into place, writing
 * every element at most once (minimum number of memory writes). */
void sort_array(int *arr, int n) {
    for (int cycle_start = 0; cycle_start < n - 1; cycle_start++) {
        int item = arr[cycle_start], target_pos = cycle_start;
        for (int scan = cycle_start + 1; scan < n; scan++) if (arr[scan] < item) target_pos++;
        if (target_pos == cycle_start) continue;
        while (item == arr[target_pos]) target_pos++;
        int t = arr[target_pos]; arr[target_pos] = item; item = t;
        while (target_pos != cycle_start) {
            target_pos = cycle_start;
            for (int scan = cycle_start + 1; scan < n; scan++) if (arr[scan] < item) target_pos++;
            while (item == arr[target_pos]) target_pos++;
            if (item != arr[target_pos]) { t = arr[target_pos]; arr[target_pos] = item; item = t; }
        }
    }
}
