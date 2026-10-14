import { ALGORITHMS, type Algo } from '../algorithms';
import CodePanel from './CodePanel';
import GrowthChart from './GrowthChart';
import Benchmark from './Benchmark';
import Playground from './Playground';

export default function AlgoPage({ algo }: { algo: Algo }) {
  const prev = ALGORITHMS[algo.rank - 2];
  const next = ALGORITHMS[algo.rank];
  return (
    <article className="algo" data-testid="algo-page">
      <nav className="crumbs">
        <a href="#/">← Index</a>
        <span className="spacer" />
        {prev && <a href={`#/algo/${prev.id}`}>‹ {prev.name}</a>}
        {next && <a href={`#/algo/${next.id}`}>{next.name} ›</a>}
      </nav>
      <h1>
        <span className="rank-pill">#{algo.rank}</span> {algo.name}
      </h1>
      <p className="lead">{algo.summary}</p>

      <div className="two-col">
        <section className="card" aria-label="Algorithm explanation">
          <h2>How it works</h2>
          <ol className="steps">{algo.steps.map((s) => <li key={s}>{s}</li>)}</ol>
          <h3>Pseudocode</h3>
          <pre className="pseudo">{algo.pseudocode}</pre>
        </section>
        <section className="card" aria-label="Code">
          <h2>Code</h2>
          <CodePanel algoId={algo.id} />
        </section>
      </div>

      <section className="card" aria-labelledby="info-h">
        <h2 id="info-h">At a glance</h2>
        <div className="table-wrap">
          <table className="info" data-testid="info-table">
            <tbody>
              <tr><th>Time (best)</th><td>{algo.best}</td></tr>
              <tr><th>Time (average)</th><td>{algo.avg}</td></tr>
              <tr><th>Time (worst)</th><td>{algo.worst}</td></tr>
              <tr><th>Space</th><td>{algo.space}</td></tr>
              <tr><th>Stable</th><td>{algo.stable ? 'Yes' : 'No'}</td></tr>
              <tr><th>In-place</th><td>{algo.inPlace ? 'Yes' : 'No'}</td></tr>
              <tr><th>Family</th><td>{algo.family}</td></tr>
            </tbody>
          </table>
        </div>
        <div className="facts">
          <div><h3>Most suitable when</h3><p>{algo.suitable}</p></div>
          <div><h3>Performs badly when</h3><p>{algo.bad}</p></div>
          <div><h3>Practical uses</h3><ul>{algo.uses.map((u) => <li key={u}>{u}</li>)}</ul></div>
          <div><h3>Why rank #{algo.rank}</h3><p>{algo.why}</p></div>
        </div>
      </section>

      <div className="two-col">
        <section className="card"><h2>Complexity growth</h2><GrowthChart highlight={algo.growth} /></section>
        <section className="card"><h2>Measured benchmark (WASM)</h2><Benchmark algo={algo} /></section>
      </div>

      <section className="card" aria-labelledby="play-h">
        <h2 id="play-h">Playground</h2>
        <Playground algo={algo} />
      </section>
    </article>
  );
}
