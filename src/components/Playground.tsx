import { useState } from 'react';
import type { Algo } from '../algorithms';
import { generate, parseNumbers } from '../parse';
import { runSort, type RunOutput } from '../wasm';
import Visualizer from './Visualizer';

const fmt = (n: number) => n.toLocaleString();

export default function Playground({ algo }: { algo: Algo }) {
  const sampleSize = Math.min(algo.id === 'bogo' ? 6 : 24, algo.maxViz);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState<(RunOutput & { input: number[] }) | null>(null);
  const [viz, setViz] = useState<{ input: number[]; trace: Int32Array; sorted: number[]; truncated: boolean; key: number } | null>(null);
  const [busy, setBusy] = useState(false);

  async function runPlain(values: number[]) {
    setBusy(true);
    setError('');
    try {
      const r = await runSort(algo.id, values, false);
      setResult({ ...r, input: values });
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setResult(null);
    } finally {
      setBusy(false);
    }
  }

  function parsed(limit: number): number[] | null {
    const p = parseNumbers(text, limit);
    if (!p.ok) {
      setError(p.error);
      return null;
    }
    return p.values;
  }

  async function sample() {
    const values = generate('random', sampleSize, Date.now() % 100000, 99);
    setText(values.join(', '));
    setViz(null);
    await runPlain(values);
  }

  async function runViz() {
    const values = parsed(algo.maxViz);
    if (!values) return;
    setBusy(true);
    setError('');
    try {
      const r = await runSort(algo.id, values, true);
      setResult({ ...r, input: values });
      setViz({ input: values, trace: r.trace!, sorted: r.sorted, truncated: r.truncated, key: Date.now() });
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="playground" data-testid="playground">
      <p className="muted small">
        Enter whole numbers separated by commas or spaces (values between -1,000,000,000 and 1,000,000,000).
        Limits for {algo.name}: up to {fmt(algo.maxInput)} numbers for a plain run, up to {algo.maxViz} for the visualization.
        {algo.id === 'counting' && ' Counting sort also needs max - min < 1,000,000.'}
      </p>
      <label className="sr-only" htmlFor="pg-input">Numbers to sort</label>
      <textarea
        id="pg-input"
        data-testid="pg-input"
        rows={3}
        value={text}
        placeholder="e.g. 5, 3, 9, -2, 7 1 4"
        onChange={(e) => setText(e.target.value)}
        aria-invalid={!!error}
        aria-describedby="pg-error"
      />
      <div className="btn-row">
        <button type="button" className="btn" onClick={sample} disabled={busy} data-testid="pg-sample">Sort sample data</button>
        <button type="button" className="btn" onClick={() => { const v = parsed(algo.maxInput); if (v) { setViz(null); runPlain(v); } }} disabled={busy} data-testid="pg-run">Run (no GUI)</button>
        <button type="button" className="btn primary" onClick={runViz} disabled={busy} data-testid="pg-viz">Run with visualization</button>
      </div>
      <p id="pg-error" className="error" role="alert" data-testid="pg-error">{error}</p>
      {result && !error && (
        <div className="result" data-testid="pg-result">
          <div className="stats">
            <span><b>Time</b> <span data-testid="pg-time">{result.ms < 0.1 ? result.ms.toFixed(3) : result.ms.toFixed(2)} ms</span></span>
            <span><b>Comparisons</b> <span data-testid="pg-cmp">{fmt(result.comparisons)}</span></span>
            <span><b>Swaps</b> <span data-testid="pg-swaps">{fmt(result.swaps)}</span></span>
            <span><b>Writes</b> {fmt(result.writes)}</span>
            <span><b>n</b> {fmt(result.input.length)}</span>
          </div>
          <div className="out-label">Sorted output</div>
          <output className="output" data-testid="pg-output">
            {result.sorted.length > 2000 ? `${result.sorted.slice(0, 2000).join(', ')}, … (${fmt(result.sorted.length - 2000)} more)` : result.sorted.join(', ')}
          </output>
          <p className="muted small">Swaps = element exchanges; writes = single-element stores (used by merge, insertion, shell, counting, radix, bucket, cycle and Timsort).</p>
        </div>
      )}
      {viz && <Visualizer key={viz.key} input={viz.input} trace={viz.trace} sorted={viz.sorted} truncated={viz.truncated} />}
    </div>
  );
}
