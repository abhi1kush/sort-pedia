package main

// Bitonic sort generalised to any n.

func pow2Below(n int) int {
	k := 1
	for k<<1 < n {
		k <<= 1
	}
	return k
}

func bitonicMerge(a []int, lo, n int, up bool) {
	if n <= 1 {
		return
	}
	m := pow2Below(n)
	for i := lo; i < lo+n-m; i++ {
		if (up && a[i] > a[i+m]) || (!up && a[i] < a[i+m]) {
			a[i], a[i+m] = a[i+m], a[i]
		}
	}
	bitonicMerge(a, lo, m, up)
	bitonicMerge(a, lo+m, n-m, up)
}

func bitonic(a []int, lo, n int, up bool) {
	if n <= 1 {
		return
	}
	m := n / 2
	bitonic(a, lo, m, !up)
	bitonic(a, lo+m, n-m, up)
	bitonicMerge(a, lo, n, up)
}

func sortArray(a []int) { bitonic(a, 0, len(a), true) }
