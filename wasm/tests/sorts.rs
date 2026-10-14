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

// ---------------------------------------------------------------- pointer / sorted-region trace fields
use sortcore::ctx::{OP_COMPARE, OP_COMPARE_HELD, OP_POINTER, OP_SET, OP_SORTED, OP_SWAP, POINTER_NAMES};

/// Replays the trace step by step, validating every op, and checks that each
/// OP_SORTED region already holds its final values when it is marked.
fn check_trace_fields(id: &str, input: &[i32]) -> std::collections::HashSet<&'static str> {
    let mut expected = input.to_vec();
    expected.sort();
    let mut c = Ctx::new(input.to_vec(), true);
    run_on(id, &mut c).unwrap();
    let n = input.len() as i32;
    let mut a = input.to_vec();
    let mut names = std::collections::HashSet::new();
    for op in c.trace.chunks_exact(3) {
        let (o, x, y) = (op[0], op[1], op[2]);
        match o {
            OP_COMPARE => assert!(x >= 0 && x < n && y >= 0 && y < n, "{id}: bad compare {op:?}"),
            OP_SWAP => { assert!(x < n && y < n); a.swap(x as usize, y as usize); }
            OP_SET => { assert!(x >= 0 && x < n); a[x as usize] = y; }
            OP_COMPARE_HELD => assert!(x >= 0 && x < n, "{id}: bad held compare {op:?}"),
            OP_POINTER => {
                assert!(x >= 0 && (x as usize) < POINTER_NAMES.len(), "{id}: bad pointer id {op:?}");
                let is_value = POINTER_NAMES[x as usize] == "gap"; // value pointer, not an index
                assert!(y >= -1 && (is_value || y < n.max(1)), "{id}: pointer {} out of range: {y}", POINTER_NAMES[x as usize]);
                if y >= 0 { names.insert(POINTER_NAMES[x as usize]); }
            }
            OP_SORTED => {
                assert!(0 <= x && x < y && y <= n, "{id}: bad sorted range {op:?}");
                assert_eq!(&a[x as usize..y as usize], &expected[x as usize..y as usize], "{id}: region {x}..{y} marked sorted too early on {input:?}");
            }
            _ => panic!("{id}: unknown op {o}"),
        }
    }
    assert_eq!(a, expected, "{id}: replay with pointer fields did not sort {input:?}");
    names
}

#[test]
fn trace_pointer_fields_valid_for_all_algorithms() {
    let mut x: u64 = 99;
    for id in ALGORITHMS {
        let n = if id == "bogo" { 6 } else { 60 };
        for trial in 0..20 {
            let v: Vec<i32> = (0..n).map(|_| { x ^= x << 13; x ^= x >> 7; x ^= x << 17; (x % if trial % 2 == 0 { 1000 } else { 5 }) as i32 - 2 }).collect();
            check_trace_fields(id, &v);
        }
        check_trace_fields(id, &[]);
        check_trace_fields(id, &[1]);
    }
}

#[test]
fn main_algorithms_emit_named_pointers() {
    let input: Vec<i32> = vec![5, 3, 8, 1, 9, 2, 7, 4, 6, 0, 11, 10, 15, 13, 12, 14, 3, 8];
    let want: &[(&str, &[&str])] = &[
        ("quick", &["pivot", "i", "lt", "gt", "lo", "hi"]),
        ("insertion", &["key", "j", "i"]),
        ("selection", &["i", "min", "j"]),
        ("bubble", &["j", "end"]),
        ("merge", &["k", "right", "lo", "mid", "hi"]),
        ("heap", &["heap", "node", "child"]),
        ("shell", &["gap", "i", "j", "key"]),
        ("introsort", &["pivot", "i", "j"]),
        ("cycle", &["start", "pos"]),
        ("pancake", &["size", "max"]),
    ];
    for (id, names) in want {
        let got = check_trace_fields(id, &input);
        for nm in *names { assert!(got.contains(nm), "{id} should show pointer '{nm}', got {got:?}"); }
    }
}

proptest! {
    #![proptest_config(ProptestConfig::with_cases(100))]
    #[test]
    fn prop_trace_fields(v in proptest::collection::vec(-30i32..30, 0..80)) {
        for id in ALGORITHMS {
            if id == "bogo" { continue; }
            check_trace_fields(id, &v);
        }
    }
}
