import { useState } from 'react';
import type { Algo } from '../algorithms';
import { SHAPES, generate, type Shape } from '../parse';
import { timeSort, loadWasm } from '../wasm';

type Row = { n: number } & Partial<Record<Shape, number>>;
const COLORS: Record<Shape, string> = { random: 'var(--s-random)', sorted: 'var(--s-sorted)', reversed: 'var(--s-reversed)', nearly: 'var(--s-nearly)', few: 'var(--s-few)' };

async function measure(id: string, data: number[]): Promise<number> {
  // repeat fast runs and keep the best time to reduce timer noise
  let best = Infinity, total = 0, reps = 0;
  while (reps < 5 && (reps === 0 || total < 30)) {
    const ms = await timeSort(id, Int32Array.from(data));
    best = Math.min(best, ms);
    total += ms;
    reps++;
  }
  return best;
}

export default function Benchmark({ algo }: { algo: Algo }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [status, setStatus] = useState<'idle' | 'running' | 'done' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  async function run() {
    setStatus('running');
    setRows([]);
    try {
      await loadWasm();
      const out: Row[] = [];
      for (const n of algo.benchSizes) {
        const row: Row = { n };
        for (const s of SHAPES) {
          setMsg(`n = ${n.toLocaleString()}, ${s.label.toLowerCase()}…`);
          await new Promise((r) => setTimeout(r, 0));
          row[s.id] = await measure(algo.id, generate(s.id, n, n + 7));
        }
        out.push(row);
        setRows([...out]);
      }
      setStatus('done');
      setMsg('');
    } catch (e) {
      setStatus('error');
      setMsg(String(e instanceof Error ? e.message : e));
    }
  }

  const W = 360, H = 220, P = 40;
  const maxMs = Math.max(0.01, ...rows.flatMap((r) => SHAPES.map((s) => r[s.id] ?? 0)));
  const maxN = algo.benchSizes[algo.benchSizes.length - 1];
  const x = (n: number) => P + (n / maxN) * (W - P - 10);
  const y = (ms: number) => H - P - (ms / maxMs) * (H - P - 10);

  return (
    <div className="bench" data-testid="benchmark">
      <p className="muted small">
        Sizes {algo.benchSizes.map((n) => n.toLocaleString()).join(', ')} × 5 input shapes, timed with performance.now() around the
        WASM call in your browser (best of up to 5 runs).
      </p>
      <button type="button" className="btn" onClick={run} disabled={status === 'running'} data-testid="bench-run">
        {status === 'running' ? 'Running…' : rows.length ? 'Run again' : 'Run benchmark'}
      </button>
      {msg && <p className={status === 'error' ? 'error' : 'muted small'}>{msg}</p>}
      {rows.length > 0 && (
        <>
          <figure className="chart">
            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Benchmark chart">
              {[0.25, 0.5, 0.75, 1].map((f) => <line key={f} className="grid" x1={P} x2={W - 10} y1={y(maxMs * f)} y2={y(maxMs * f)} />)}
              <line x1={P} y1={H - P} x2={W - 10} y2={H - P} className="axis" />
              <line x1={P} y1={10} x2={P} y2={H - P} className="axis" />
              <text x={W / 2} y={H - 8} className="axis-label" textAnchor="middle">n</text>
              <text x={4} y={14} className="axis-label">{maxMs.toFixed(2)} ms</text>
              {SHAPES.map((s) => (
                <polyline key={s.id} fill="none" style={{ stroke: COLORS[s.id] }} strokeWidth={2}
                  points={rows.filter((r) => r[s.id] !== undefined).map((r) => `${x(r.n).toFixed(1)},${y(r[s.id]!).toFixed(1)}`).join(' ')} />
              ))}
              {SHAPES.flatMap((s) => rows.filter((r) => r[s.id] !== undefined).map((r) => (
                <circle key={`${s.id}-${r.n}`} cx={x(r.n)} cy={y(r[s.id]!)} r={3} style={{ fill: COLORS[s.id] }}>
                  <title>{`${s.label}, n = ${r.n.toLocaleString()}: ${r[s.id]!.toFixed(3)} ms`}</title>
                </circle>
              )))}
            </svg>
            <figcaption className="legend">
              {SHAPES.map((s) => <span key={s.id}><i style={{ background: COLORS[s.id] }} /> {s.label}</span>)}
            </figcaption>
          </figure>
          <div className="table-wrap">
            <table className="bench-table" data-testid="bench-table">
              <thead><tr><th>n</th>{SHAPES.map((s) => <th key={s.id}>{s.label}</th>)}</tr></thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.n}><td>{r.n.toLocaleString()}</td>{SHAPES.map((s) => <td key={s.id}>{r[s.id]?.toFixed(3) ?? '…'}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="muted small">Times in milliseconds.</p>
        </>
      )}
    </div>
  );
}
