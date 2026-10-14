import { useEffect } from 'react';
import { useRoute } from './router';
import { ALGORITHMS, ALGO_BY_ID } from './algorithms';
import Landing from './components/Landing';
import AlgoPage from './components/AlgoPage';
import Settings from './components/Settings';

export default function App() {
  const route = useRoute();
  const algo = route.page === 'algo' ? ALGO_BY_ID[route.id] : undefined;

  useEffect(() => {
    document.title = algo ? `${algo.name} · Sort Pedia` : 'Sort Pedia';
    window.scrollTo(0, 0);
  }, [algo]);

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#/">Sort Pedia</a>
        <label className="jump">
          <span className="sr-only">Jump to algorithm</span>
          <select
            aria-label="Jump to algorithm"
            data-testid="jump-select"
            value={algo?.id ?? ''}
            onChange={(e) => { if (e.target.value) window.location.hash = `#/algo/${e.target.value}`; }}
          >
            <option value="">Jump to algorithm…</option>
            {ALGORITHMS.map((a) => (
              <option key={a.id} value={a.id}>{a.rank}. {a.name}</option>
            ))}
          </select>
        </label>
        <Settings />
      </header>
      <main className="container">
        {route.page === 'algo' && !algo ? (
          <div className="card"><h2>Unknown algorithm</h2><p><a href="#/">Back to the index</a></p></div>
        ) : algo ? (
          <AlgoPage key={algo.id} algo={algo} />
        ) : (
          <Landing />
        )}
      </main>
      <footer className="footer">
        All sorting runs in Rust compiled to WebAssembly. <a href="https://github.com/abhi1kush/sort-pedia">Source on GitHub</a>
      </footer>
    </>
  );
}
