package main

// Bitonic sort generalised to any n.

func pow2Below(n int) int {
	k := 1
	for k<<1 < n {
		k <<= 1
	}
	return k
}

func bitonicMerge(arr []int, lo, n int, up bool) {
	if n <= 1 {
		return
	}
	distance := pow2Below(n)
	for left := lo; left < lo+n-distance; left++ {
		if (up && arr[left] > arr[left+distance]) || (!up && arr[left] < arr[left+distance]) {
			arr[left], arr[left+distance] = arr[left+distance], arr[left]
		}
	}
	bitonicMerge(arr, lo, distance, up)
	bitonicMerge(arr, lo+distance, n-distance, up)
}

func bitonic(arr []int, lo, n int, up bool) {
	if n <= 1 {
		return
	}
	half := n / 2
	bitonic(arr, lo, half, !up)
	bitonic(arr, lo+half, n-half, up)
	bitonicMerge(arr, lo, n, up)
}

func sortArray(arr []int) { bitonic(arr, 0, len(arr), true) }
