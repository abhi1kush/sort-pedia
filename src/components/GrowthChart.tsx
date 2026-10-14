import type { Growth } from '../algorithms';

const CURVES: { id: Growth; label: string; f: (n: number) => number; color: string }[] = [
  { id: 'n', label: 'n (n + k)', f: (n) => n, color: '#16a34a' },
  { id: 'nk', label: 'n·k (k = 4)', f: (n) => 4 * n, color: '#0d9488' },
  { id: 'nlogn', label: 'n log n', f: (n) => n * Math.log2(Math.max(n, 1)), color: '#2563eb' },
  { id: 'n32', label: 'n^1.5', f: (n) => n ** 1.5, color: '#7c3aed' },
  { id: 'nlog2n', label: 'n log² n', f: (n) => n * Math.log2(Math.max(n, 1)) ** 2, color: '#c026d3' },
  { id: 'n2', label: 'n²', f: (n) => n * n, color: '#ea580c' },
  { id: 'nfact', label: 'n · n!', f: (n) => { let r = n; for (let i = 2; i <= n; i++) r *= i; return r; }, color: '#dc2626' },
];

const W = 360, H = 240, PAD = 34, NMAX = 64, YMAX = 1200;

export default function GrowthChart({ highlight }: { highlight: Growth }) {
  const x = (n: number) => PAD + ((n - 1) / (NMAX - 1)) * (W - PAD - 8);
  const y = (v: number) => H - PAD - (Math.min(v, YMAX) / YMAX) * (H - PAD - 8);
  return (
    <figure className="chart" data-testid="growth-chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Complexity growth curves">
        <line x1={PAD} y1={H - PAD} x2={W - 8} y2={H - PAD} className="axis" />
        <line x1={PAD} y1={8} x2={PAD} y2={H - PAD} className="axis" />
        <text x={W / 2} y={H - 6} className="axis-label" textAnchor="middle">n (input size, 1–{NMAX})</text>
        <text x={10} y={H / 2} className="axis-label" textAnchor="middle" transform={`rotate(-90 10 ${H / 2})`}>operations (clipped at {YMAX})</text>
        {CURVES.map((c) => {
          const pts: string[] = [];
          for (let n = 1; n <= NMAX; n++) {
            pts.push(`${x(n).toFixed(1)},${y(c.f(n)).toFixed(1)}`);
            if (c.f(n) > YMAX) break;
          }
          const on = c.id === highlight;
          return <polyline key={c.id} points={pts.join(' ')} fill="none" stroke={c.color} strokeWidth={on ? 4 : 1.5} opacity={on ? 1 : 0.45} />;
        })}
      </svg>
      <figcaption className="legend">
        {CURVES.map((c) => (
          <span key={c.id} className={c.id === highlight ? 'on' : ''}>
            <i style={{ background: c.color }} /> {c.label}{c.id === highlight ? ' ← this algorithm (average)' : ''}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
