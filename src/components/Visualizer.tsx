import { useEffect, useRef, useState } from 'react';
import { applyOp } from '../trace';

interface Props { input: number[]; trace: Int32Array; sorted: number[]; truncated: boolean }

export default function Visualizer({ input, trace, sorted, truncated }: Props) {
  const total = trace.length / 3;
  const arr = useRef<number[]>([...input]);
  const [pos, setPos] = useState(0); // ops applied
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(30); // ops per second
  const [hl, setHl] = useState<{ op: number; i: number; j: number } | null>(null);

  const lo = Math.min(...input, ...sorted), hi = Math.max(...input, ...sorted);
  const height = (v: number) => (hi === lo ? 60 : 6 + ((v - lo) / (hi - lo)) * 94);

  const posRef = useRef(0);
  function stepOnce(count = 1) {
    let q = posRef.current;
    let last: { op: number; i: number; j: number } | null = null;
    for (let c = 0; c < count && q < total; c++, q++) last = applyOp(arr.current, trace, q);
    posRef.current = q;
    if (last) setHl(last);
    setPos(q);
  }

  useEffect(() => {
    if (!playing || pos >= total) return;
    const interval = Math.max(16, 1000 / speed);
    const perTick = Math.max(1, Math.round((speed * interval) / 1000));
    const id = setTimeout(() => stepOnce(perTick), interval);
    return () => clearTimeout(id);
  });

  useEffect(() => { if (pos >= total) setPlaying(false); }, [pos, total]);

  function reset() {
    arr.current = [...input];
    posRef.current = 0;
    setPos(0);
    setHl(null);
    setPlaying(false);
  }

  const done = pos >= total;
  const ok = done && arr.current.every((v, i) => v === sorted[i]);
  const cls = (k: number) => {
    if (done) return 'bar done';
    if (!hl || (k !== hl.i && (hl.op === 2 || k !== hl.j))) return 'bar'; // for set ops, j is the value
    return hl.op === 0 ? 'bar cmp' : hl.op === 1 ? 'bar swap' : 'bar set';
  };
  const opName = hl ? (['compare', 'swap', 'set'][hl.op] ?? '') : '';

  return (
    <div className="viz" data-testid="viz">
      <div className="bars" style={{ ['--n' as string]: arr.current.length }} data-testid="viz-bars">
        {arr.current.map((v, k) => (
          <div key={k} className={cls(k)} style={{ height: `${height(v)}%` }} title={String(v)} data-value={v} />
        ))}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn small" onClick={() => setPlaying((p) => !p)} disabled={done} data-testid="viz-play">{playing ? 'Pause' : 'Play'}</button>
        <button type="button" className="btn small" onClick={() => { setPlaying(false); stepOnce(1); }} disabled={done} data-testid="viz-step">Step</button>
        <button type="button" className="btn small" onClick={reset} data-testid="viz-reset">Reset</button>
        <label className="speed">Speed
          <input type="range" min={1} max={2000} value={speed} onChange={(e) => setSpeed(Number(e.target.value))} data-testid="viz-speed" />
          <span>{speed} ops/s</span>
        </label>
      </div>
      <div className="viz-status small" data-testid="viz-status">
        Step {pos.toLocaleString()} / {total.toLocaleString()} {opName && !done && `· ${opName}${hl ? ` [${hl.i}${hl.op === 2 ? ` ← ${hl.j}` : `, ${hl.j}`}]` : ''}`}
        {done && (ok ? ' · ✓ sorted' : truncated ? ' · trace truncated (too many operations to record)' : ' · ✗ mismatch')}
      </div>
      <div className="viz-legend small">
        <span><i className="sw cmp" /> compare</span><span><i className="sw swap" /> swap</span><span><i className="sw set" /> write</span><span><i className="sw done" /> sorted</span>
      </div>
    </div>
  );
}
