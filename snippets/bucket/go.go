package main

// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.

func sortArray(arr []int) {
	n := len(arr)
	if n < 2 {
		return
	}
	min, max := arr[0], arr[0]
	for _, v := range arr {
		if v < min {
			min = v
		}
		if v > max {
			max = v
		}
	}
	rng := max - min + 1
	buckets := make([][]int, n)
	for _, v := range arr {
		bucket := (v - min) * n / rng
		buckets[bucket] = append(buckets[bucket], v)
	}
	writePos := 0
	for _, bucket := range buckets {
		for i := 1; i < len(bucket); i++ { // insertion sort
			key, j := bucket[i], i
			for j > 0 && key < bucket[j-1] {
				bucket[j] = bucket[j-1]
				j--
			}
			bucket[j] = key
		}
		writePos += copy(arr[writePos:], bucket)
	}
}
