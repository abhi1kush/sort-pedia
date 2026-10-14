//! sortcore: instrumented sorting algorithms for Sort Pedia, exposed to JS via wasm-bindgen.
pub mod ctx;
pub mod sorts;

use ctx::Ctx;
use wasm_bindgen::prelude::*;

/// Every algorithm id, ranked best (first) to worst (last).
pub const ALGORITHMS: [&str; 20] = [
    "timsort", "introsort", "quick", "merge", "heap", "radix", "counting", "bucket", "shell", "comb",
    "bitonic", "insertion", "selection", "cocktail", "bubble", "odd-even", "gnome", "cycle", "pancake", "bogo",
];

/// Run algorithm `id` on `ctx`. Errors for unknown ids or inputs outside an algorithm's limits.
pub fn run_on(id: &str, c: &mut Ctx) -> Result<(), String> {
    match id {
        "timsort" => sorts::timsort(c),
        "introsort" => sorts::introsort(c),
        "quick" => sorts::quick(c),
        "merge" => sorts::merge(c),
        "heap" => sorts::heap(c),
        "radix" => sorts::radix(c),
        "counting" => sorts::counting(c)?,
        "bucket" => sorts::bucket(c),
        "shell" => sorts::shell(c),
        "comb" => sorts::comb(c),
        "bitonic" => sorts::bitonic(c),
        "insertion" => sorts::insertion(c),
        "selection" => sorts::selection(c),
        "cocktail" => sorts::cocktail(c),
        "bubble" => sorts::bubble(c),
        "odd-even" => sorts::odd_even(c),
        "gnome" => sorts::gnome(c),
        "cycle" => sorts::cycle(c),
        "pancake" => sorts::pancake(c),
        "bogo" => sorts::bogo(c)?,
        _ => return Err(format!("unknown algorithm '{}'", id)),
    }
    let n = c.len();
    c.sorted(0, n);
    Ok(())
}

#[wasm_bindgen]
pub struct SortResult {
    sorted: Vec<i32>,
    trace: Vec<i32>,
    comparisons: f64,
    swaps: f64,
    writes: f64,
    truncated: bool,
}

#[wasm_bindgen]
impl SortResult {
    #[wasm_bindgen(getter)]
    pub fn sorted(&self) -> Vec<i32> { self.sorted.clone() }
    /// Flat trace `[op, x, y, op, x, y, ...]`; op 0 = compare(i,j), 1 = swap(i,j), 2 = set(i,value).
    #[wasm_bindgen(getter)]
    pub fn trace(&self) -> Vec<i32> { self.trace.clone() }
    #[wasm_bindgen(getter)]
    pub fn comparisons(&self) -> f64 { self.comparisons }
    #[wasm_bindgen(getter)]
    pub fn swaps(&self) -> f64 { self.swaps }
    #[wasm_bindgen(getter)]
    pub fn writes(&self) -> f64 { self.writes }
    #[wasm_bindgen(getter)]
    pub fn truncated(&self) -> bool { self.truncated }
}

/// Sort `data` with algorithm `id`. When `record` is true, an operation trace is returned too.
#[wasm_bindgen]
pub fn sort(id: &str, data: Vec<i32>, record: bool) -> Result<SortResult, JsError> {
    let mut c = Ctx::new(data, record);
    run_on(id, &mut c).map_err(|e| JsError::new(&e))?;
    Ok(SortResult {
        sorted: c.a,
        trace: c.trace,
        comparisons: c.comparisons as f64,
        swaps: c.swaps as f64,
        writes: c.writes as f64,
        truncated: c.truncated,
    })
}

/// Benchmark helper: sorts in place without tracing and returns the comparison count.
#[wasm_bindgen]
pub fn sort_only(id: &str, data: Vec<i32>) -> Result<f64, JsError> {
    let mut c = Ctx::new(data, false);
    run_on(id, &mut c).map_err(|e| JsError::new(&e))?;
    Ok(c.comparisons as f64)
}

#[wasm_bindgen]
pub fn pointer_names() -> Vec<String> { ctx::POINTER_NAMES.iter().map(|s| s.to_string()).collect() }

#[wasm_bindgen]
pub fn algorithm_ids() -> Vec<String> { ALGORITHMS.iter().map(|s| s.to_string()).collect() }
