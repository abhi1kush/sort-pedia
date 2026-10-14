package main

// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.

func sortArray(a []int) {
	n := len(a)
	if n < 2 {
		return
	}
	min, max := a[0], a[0]
	for _, v := range a {
		if v < min {
			min = v
		}
		if v > max {
			max = v
		}
	}
	rng := max - min + 1
	buckets := make([][]int, n)
	for _, v := range a {
		b := (v - min) * n / rng
		buckets[b] = append(buckets[b], v)
	}
	k := 0
	for _, b := range buckets {
		for i := 1; i < len(b); i++ { // insertion sort
			key, j := b[i], i
			for j > 0 && key < b[j-1] {
				b[j] = b[j-1]
				j--
			}
			b[j] = key
		}
		k += copy(a[k:], b)
	}
}
