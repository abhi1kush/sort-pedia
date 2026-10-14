import { ALGORITHMS, RANKING_RATIONALE } from '../algorithms';

export default function Landing() {
  return (
    <div className="landing">
      <section className="hero">
        <h1>Sort Pedia</h1>
        <p>
          Every common sorting algorithm, ranked from best to worst, explained in plain language, with verified code in
          C, C++, Java, Go, Rust and Python, live benchmarks and step-by-step visualizations. Every sort on this site runs in
          Rust compiled to WebAssembly.
        </p>
      </section>

      <section className="card" aria-labelledby="index-h">
        <h2 id="index-h">Index</h2>
        <nav className="index" data-testid="algo-index">
          {ALGORITHMS.map((a) => (
            <a key={a.id} href={`#/algo/${a.id}`} className="chip"><b>{a.rank}</b> {a.name}</a>
          ))}
        </nav>
      </section>

      <section className="card" aria-labelledby="why-h">
        <h2 id="why-h">How the ranking works</h2>
        <ol className="rationale">{RANKING_RATIONALE.map((r) => <li key={r}>{r}</li>)}</ol>
      </section>

      <section aria-labelledby="rank-h">
        <h2 id="rank-h">Ranking: best to worst</h2>
        <ol className="ranking" data-testid="ranking">
          {ALGORITHMS.map((a) => (
            <li key={a.id} className="rank-card">
              <div className="rank-num">#{a.rank}</div>
              <div className="rank-body">
                <h3><a href={`#/algo/${a.id}`}>{a.name}</a></h3>
                <div className="badges">
                  <span className="badge">avg {a.avg}</span>
                  <span className="badge">worst {a.worst}</span>
                  <span className="badge">space {a.space}</span>
                  <span className={`badge ${a.stable ? 'yes' : 'no'}`}>{a.stable ? 'stable' : 'unstable'}</span>
                  <span className={`badge ${a.inPlace ? 'yes' : 'no'}`}>{a.inPlace ? 'in-place' : 'not in-place'}</span>
                </div>
                <p>{a.why}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
