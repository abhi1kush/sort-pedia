use proptest::prelude::*;
use sortcore::ctx::{replay, Ctx};
use sortcore::{run_on, ALGORITHMS};

fn check(id: &str, input: &[i32]) {
    let mut expected = input.to_vec();
    expected.sort();
    let mut c = Ctx::new(input.to_vec(), true);
    run_on(id, &mut c).unwrap_or_else(|e| panic!("{id} failed on {input:?}: {e}"));
    assert_eq!(c.a, expected, "{id} wrong result for {input:?}");
    assert!(!c.truncated, "{id} trace truncated for {input:?}");
    assert_eq!(replay(input, &c.trace), expected, "{id} trace replay mismatch for {input:?}");
}

fn max_n(id: &str) -> usize { if id == "bogo" { 7 } else { 300 } }

#[test]
fn edge_cases_all_algorithms() {
    let cases: Vec<Vec<i32>> = vec![
        vec![], vec![1], vec![2, 1], vec![1, 2], vec![3, 3, 3], vec![5, -1, 5, -1, 0],
        vec![i32::MAX, i32::MIN, 0, -1, 1], vec![i32::MIN, i32::MIN + 1], vec![7, 6, 5, 4, 3, 2, 1],
    ];
    for id in ALGORITHMS {
        for case in &cases {
            if case.len() <= max_n(id) {
                // counting sort rejects huge ranges by design; check it errors cleanly instead
                if id == "counting" && !case.is_empty() && (*case.iter().max().unwrap() as i64 - *case.iter().min().unwrap() as i64) >= 1_000_000 {
                    let mut c = Ctx::new(case.clone(), false);
                    assert!(run_on(id, &mut c).is_err());
                    continue;
                }
                check(id, case);
            }
        }
    }
}

#[test]
fn shapes_all_algorithms() {
    for id in ALGORITHMS {
        let n = if id == "bogo" { 6 } else { 257 };
        let sorted: Vec<i32> = (0..n as i32).collect();
        let reversed: Vec<i32> = sorted.iter().rev().cloned().collect();
        let mut nearly = sorted.clone();
        if n > 4 { nearly.swap(1, n - 2); }
        let few: Vec<i32> = (0..n as i32).map(|i| (i * 7919) % 4).collect();
        let organ: Vec<i32> = (0..n as i32).map(|i| if i < n as i32 / 2 { i } else { n as i32 - i }).collect();
        for case in [sorted, reversed, nearly, few, organ] { check(id, &case); }
    }
}

#[test]
fn bogo_rejects_large_input() {
    let mut c = Ctx::new((0..9).rev().collect(), false);
    assert!(run_on("bogo", &mut c).is_err());
}

#[test]
fn unknown_algorithm_errors() {
    let mut c = Ctx::new(vec![1], false);
    assert!(run_on("nope", &mut c).is_err());
}

#[test]
fn large_random_fast_algorithms() {
    let mut x: u64 = 12345;
    let data: Vec<i32> = (0..100_000).map(|_| { x ^= x << 13; x ^= x >> 7; x ^= x << 17; (x % 999_999) as i32 - 500_000 }).collect();
    for id in ["timsort", "introsort", "quick", "merge", "heap", "radix", "counting", "bucket", "shell", "bitonic"] {
        let mut c = Ctx::new(data.clone(), false);
        run_on(id, &mut c).unwrap();
        let mut e = data.clone();
        e.sort();
        assert_eq!(c.a, e, "{id}");
    }
}

proptest! {
    #![proptest_config(ProptestConfig::with_cases(200))]

    #[test]
    fn prop_random_values(v in proptest::collection::vec(any::<i32>(), 0..200)) {
        for id in ALGORITHMS {
            if id == "counting" || id == "bogo" { continue; }
            check(id, &v);
        }
    }

    #[test]
    fn prop_duplicates_small_range(v in proptest::collection::vec(-20i32..20, 0..200)) {
        for id in ALGORITHMS {
            if id == "bogo" { continue; }
            check(id, &v);
        }
    }

    #[test]
    fn prop_bogo_small(v in proptest::collection::vec(-5i32..5, 0..7)) {
        check("bogo", &v);
    }
}
