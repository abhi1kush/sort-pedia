package main

// Simplified Timsort: natural runs extended to minRun with binary
// insertion sort, merged via a stack that keeps run lengths balanced.

func minRun(n int) int {
	r := 0
	for n >= 32 {
		r |= n & 1
		n >>= 1
	}
	return n + r
}

func mergeRuns(arr []int, lo, mid, hi int) {
	temp := append([]int(nil), arr[lo:mid]...)
	i, j, k := 0, mid, lo
	for i < len(temp) && j < hi {
		if arr[j] < temp[i] {
			arr[k] = arr[j]
			j++
		} else {
			arr[k] = temp[i]
			i++
		}
		k++
	}
	copy(arr[k:], temp[i:])
}

type run struct{ start, length int }

func sortArray(arr []int) {
	n := len(arr)
	if n < 2 {
		return
	}
	mr := minRun(n)
	var runs []run
	mergeAt := func(i int) {
		x, y := runs[i], runs[i+1]
		mergeRuns(arr, x.start, x.start+x.length, x.start+x.length+y.length)
		runs[i].length += y.length
		runs = append(runs[:i+1], runs[i+2:]...)
	}
	for lo := 0; lo < n; {
		hi := lo + 1
		if hi < n {
			if arr[hi] < arr[lo] { // strictly descending: reverse
				for hi+1 < n && arr[hi+1] < arr[hi] {
					hi++
				}
				for x, y := lo, hi; x < y; x, y = x+1, y-1 {
					arr[x], arr[y] = arr[y], arr[x]
				}
			} else {
				for hi+1 < n && arr[hi+1] >= arr[hi] {
					hi++
				}
			}
			hi++
		}
		end := lo + mr
		if end > n {
			end = n
		}
		if end < hi {
			end = hi
		}
		for i := hi; i < end; i++ { // binary insertion sort
			key, l, r := arr[i], lo, i
			for l < r {
				m := (l + r) / 2
				if key < arr[m] {
					r = m
				} else {
					l = m + 1
				}
			}
			copy(arr[l+1:i+1], arr[l:i])
			arr[l] = key
		}
		runs = append(runs, run{lo, end - lo})
		lo = end
		for len(runs) > 1 {
			m := len(runs)
			b, c := runs[m-2].length, runs[m-1].length
			if (m >= 3 && runs[m-3].length <= b+c) || (m >= 4 && runs[m-4].length <= runs[m-3].length+b) {
				if runs[m-3].length < c {
					mergeAt(m - 3)
				} else {
					mergeAt(m - 2)
				}
			} else if b <= c {
				mergeAt(m - 2)
			} else {
				break
			}
		}
	}
	for len(runs) > 1 {
		mergeAt(len(runs) - 2)
	}
}
