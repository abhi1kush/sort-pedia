// Gnome sort: step forward while in order, otherwise swap and step back.
class GnomeSort {
    public static void sort(int[] arr) {
        int gnomePos = 0;
        while (gnomePos < arr.length) {
            if (gnomePos == 0 || arr[gnomePos] >= arr[gnomePos - 1]) gnomePos++;
            else { int t = arr[gnomePos]; arr[gnomePos] = arr[gnomePos - 1]; arr[gnomePos - 1] = t; gnomePos--; }
        }
    }
}
