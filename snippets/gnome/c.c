/* Gnome sort: step forward while in order, otherwise swap and step back. */
void sort_array(int *a, int n) {
    int i = 0;
    while (i < n) {
        if (i == 0 || a[i] >= a[i - 1]) i++;
        else { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; i--; }
    }
}
