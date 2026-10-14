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

func mergeRuns(a []int, lo, mid, hi int) {
	tmp := append([]int(nil), a[lo:mid]...)
	i, j, k := 0, mid, lo
	for i < len(tmp) && j < hi {
		if a[j] < tmp[i] {
			a[k] = a[j]
			j++
		} else {
			a[k] = tmp[i]
			i++
		}
		k++
	}
	copy(a[k:], tmp[i:])
}

type run struct{ start, length int }

func sortArray(a []int) {
	n := len(a)
	if n < 2 {
		return
	}
	mr := minRun(n)
	var runs []run
	mergeAt := func(i int) {
		x, y := runs[i], runs[i+1]
		mergeRuns(a, x.start, x.start+x.length, x.start+x.length+y.length)
		runs[i].length += y.length
		runs = append(runs[:i+1], runs[i+2:]...)
	}
	for lo := 0; lo < n; {
		hi := lo + 1
		if hi < n {
			if a[hi] < a[lo] { // strictly descending: reverse
				for hi+1 < n && a[hi+1] < a[hi] {
					hi++
				}
				for x, y := lo, hi; x < y; x, y = x+1, y-1 {
					a[x], a[y] = a[y], a[x]
				}
			} else {
				for hi+1 < n && a[hi+1] >= a[hi] {
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
			key, l, r := a[i], lo, i
			for l < r {
				m := (l + r) / 2
				if key < a[m] {
					r = m
				} else {
					l = m + 1
				}
			}
			copy(a[l+1:i+1], a[l:i])
			a[l] = key
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
