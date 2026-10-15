import { useEffect, useMemo, useRef, useState } from 'react';
import { OP_COMPARE, OP_COMPARE_HELD, OP_SET, OP_SWAP, TracePlayer, VALUE_POINTERS, pointerHelp, pointerLabel } from '../trace';
import { DEFAULT_SPS, PRESETS, SLIDER_MAX, formatSps, sliderToSps, spsToSlider, tickPlan } from '../speed';

interface Props { algoId: string; input: number[]; trace: Int32Array; sorted: number[]; truncated: boolean }

export default function Visualizer({ algoId, input, trace, sorted, truncated }: Props) {
  const player = useMemo(() => new TracePlayer(input, trace, algoId), [input, trace, algoId]);
  const [, setVersion] = useState(0);
  const rerender = () => setVersion((v) => v + 1);
  const [playing, setPlaying] = useState(true); // auto-play at the slow learning speed
  const [sps, setSps] = useState(DEFAULT_SPS);
  const rootRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth || 600));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => { player.seek(0); rerender(); }, [player]);

  // animation timer: rescheduled whenever speed / play state / step changes, so speed changes apply immediately
  useEffect(() => {
    if (!playing) return;
    if (player.done) { setPlaying(false); return; }
    const { delayMs, stepsPerTick } = tickPlan(sps);
    const id = window.setTimeout(() => {
      for (let s = 0; s < stepsPerTick && player.forward(); s++);
      rerender();
    }, delayMs);
    return () => window.clearTimeout(id);
  });

  const fwd = () => { setPlaying(false); player.forward(); rerender(); };
  const back = () => { setPlaying(false); player.back(); rerender(); };
  const togglePlay = () => {
    if (player.done) { player.seek(0); setPlaying(true); } else setPlaying((p) => !p);
    rerender();
  };

  // keyboard: space = play/pause, ← = step back, → = step forward
  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (!rootRef.current || e.altKey || e.ctrlKey || e.metaKey) return;
      if (t && (t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.tagName === 'INPUT' || t.isContentEditable)) return;
      if (e.key === ' ' || e.code === 'Space') {
        if (t?.tagName === 'BUTTON') return; // let the focused button handle space natively
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'ArrowRight') { e.preventDefault(); fwd(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); back(); }
    };
    window.addEventListener('keydown', on);
    return () => window.removeEventListener('keydown', on);
  });

  const arr = player.array;
  const n = arr.length;
  const lo = Math.min(...input, ...sorted), hi = Math.max(...input, ...sorted);
  const height = (v: number) => (hi === lo ? 60 : 6 + ((v - lo) / (hi - lo)) * 94);
  const last = player.last;
  const done = player.done;
  const ok = done && arr.every((v, i) => v === sorted[i]);
  const mask = player.sortedMask;

  const range = player.activeRange;
  const stack = player.callStack;
  const cls = (k: number) => {
    if (done) return 'bar done';
    let c = mask[k] ? 'bar sorted' : 'bar';
    if (range && (k < range[0] || k > range[1])) c += ' dim';
    if (last) {
      const hit = k === last.i || ((last.op === OP_COMPARE || last.op === OP_SWAP) && k === last.j);
      if (hit) c += last.op === OP_COMPARE || last.op === OP_COMPARE_HELD ? ' cmp' : last.op === OP_SWAP ? ' swap' : last.op === OP_SET ? ' set' : '';
    }
    return c;
  };

  // pointer labels grouped by index
  const byIndex = new Map<number, string[]>();
  const valuePtrs: string[] = [];
  for (const [name, v] of player.pointers) {
    if (VALUE_POINTERS.has(name)) { valuePtrs.push(`${pointerLabel(name)} = ${v}`); continue; }
    if (v < 0 || v >= n) continue;
    byIndex.set(v, [...(byIndex.get(v) ?? []), name]);
  }
  const showValues = n <= 32;
  // lay pointer labels out in rows so neighbouring labels never overlap
  const pxPerBar = Math.max(1, (width - 8) / Math.max(1, n));
  const placed: { idx: number; text: string; names: string[]; row: number; center: number }[] = [];
  const rowEnd: number[] = [];
  for (const [idx, names] of [...byIndex.entries()].sort((a, b) => a[0] - b[0])) {
    const text = names.map(pointerLabel).join(', ');
    const half = (text.length * 7 + 8) / 2; // approx label half-width in px (11px monospace)
    const inner = Math.max(2 * half, width - 10);
    const center = Math.min(Math.max((idx + 0.5) * pxPerBar, half), inner - half); // keep labels inside the box
    let row = rowEnd.findIndex((end) => end + 3 < center - half);
    if (row === -1) { row = rowEnd.length; rowEnd.push(0); }
    rowEnd[row] = center + half;
    placed.push({ idx, text, names, row, center });
  }
  const rows = Math.max(1, rowEnd.length);

  return (
    <div className="viz" data-testid="viz" ref={rootRef}>
      {stack.length > 0 && (
        <div className="callstack small" data-testid="viz-callstack" aria-label="Recursion call stack">
          <span className="callstack-depth" data-testid="viz-depth">depth {player.depth}</span>
          {stack.map((r, q) => (
            <span key={q} className="call-wrap">
              {q > 0 && <span className="call-sep" aria-hidden="true">›</span>}
              <span className={q === stack.length - 1 ? 'call current' : 'call'} data-range={`${r[0]}..${r[1]}`}>{r[0]}..{r[1]}</span>
            </span>
          ))}
        </div>
      )}
      <div className="bars" data-testid="viz-bars">
        {arr.map((v, k) => (
          <div key={k} className={cls(k)} style={{ height: `${height(v)}%` }} data-value={v} data-tip={`arr[${k}] = ${v}`}>
            {showValues && <span className="bar-val">{v}</span>}
          </div>
        ))}
      </div>
      <div className="pointers" data-testid="viz-pointers" aria-label="Pointers" style={{ height: `${0.9 + rows * 1.35}rem` }}>
        {placed.map(({ idx, names, row, center }) => (
          <div key={idx} className="ptr" style={{ left: `${center + 4}px`, top: `${row * 1.35}rem` }} data-index={idx}>
            <span className="ptr-arrow" aria-hidden="true">▲</span>
            <span className="ptr-name">
              {names.map((nm, q) => <span key={nm} className={`ptr-${nm}`} data-ptr={nm}>{q ? ', ' : ''}{pointerLabel(nm)}</span>)}
            </span>
          </div>
        ))}
      </div>
      {valuePtrs.length > 0 && <div className="small muted" data-testid="viz-value-ptrs">{valuePtrs.join(' · ')}</div>}

      <p className="viz-caption" data-testid="viz-caption" aria-live="polite">{player.caption || '\u00a0'}</p>

      <div className="viz-counters small" data-testid="viz-status">
        <span>Step <b data-testid="viz-step-num">{player.step.toLocaleString()}</b> / {player.total.toLocaleString()}</span>
        <span>Comparisons <b>{player.comparisons.toLocaleString()}</b></span>
        <span>Swaps <b>{player.swaps.toLocaleString()}</b></span>
        <span>Writes <b>{player.writes.toLocaleString()}</b></span>
        {done && <span>{ok ? '✓ sorted' : truncated ? 'trace truncated (too many operations to record)' : '✗ mismatch'}</span>}
      </div>
      <label className="scrub">
        <span className="sr-only">Progress</span>
        <input type="range" min={0} max={player.total} value={player.step} aria-label="Progress (step)" data-testid="viz-scrub"
          onChange={(e) => { setPlaying(false); player.seek(Number(e.target.value)); rerender(); }} />
      </label>

      <div className="viz-controls">
        <button type="button" className="btn small" onClick={() => { setPlaying(false); player.seek(0); rerender(); }} data-testid="viz-reset" aria-label="Reset to start">⏮ Reset</button>
        <button type="button" className="btn small" onClick={back} disabled={player.step === 0} data-testid="viz-back" aria-label="Step back">◀ Back</button>
        <button type="button" className="btn small primary" onClick={togglePlay} data-testid="viz-play">{playing ? '❚❚ Pause' : done ? '↻ Replay' : '▶ Play'}</button>
        <button type="button" className="btn small" onClick={fwd} disabled={done} data-testid="viz-step" aria-label="Step forward">Step ▶</button>
        <button type="button" className="btn small" onClick={() => { setPlaying(false); player.seek(player.total); rerender(); }} disabled={done} data-testid="viz-end" aria-label="Jump to end">End ⏭</button>
      </div>
      <div className="speed-row">
        <div className="presets" role="group" aria-label="Speed presets">
          {PRESETS.map((p) => (
            <button key={p.label} type="button" className={`btn small ${Math.abs(sps - p.sps) < 1e-9 ? 'active' : ''}`} aria-pressed={Math.abs(sps - p.sps) < 1e-9}
              onClick={() => setSps(p.sps)} data-testid={`speed-${p.label.toLowerCase().replace(' ', '-')}`}>{p.label}</button>
          ))}
        </div>
        <label className="speed">
          <span>Speed</span>
          <input type="range" min={0} max={SLIDER_MAX} value={spsToSlider(sps)} onChange={(e) => setSps(sliderToSps(Number(e.target.value)))}
            data-testid="viz-speed" aria-label="Animation speed (steps per second)" aria-valuetext={formatSps(sps)} />
          <output data-testid="viz-speed-value">{formatSps(sps)}</output>
        </label>
      </div>
      {player.pointerNamesUsed.length > 0 && (
        <details className="ptr-legend small" open data-testid="viz-ptr-legend">
          <summary>What the pointers mean</summary>
          <dl>
            {player.pointerNamesUsed.map((nm) => (
              <div key={nm} className={player.pointers.has(nm) ? 'active' : ''} data-legend={nm}>
                <dt className={`ptr-${nm}`}>{pointerLabel(nm)}</dt>
                <dd>{pointerHelp(algoId, nm)}</dd>
              </div>
            ))}
          </dl>
        </details>
      )}
      <div className="viz-legend small">
        <span><i className="sw cmp" /> compare</span><span><i className="sw swap" /> swap</span><span><i className="sw set" /> write</span>
        <span><i className="sw sorted" /> final position</span><span className="muted">Keys: Space play/pause · ← back · → forward</span>
      </div>
    </div>
  );
}
