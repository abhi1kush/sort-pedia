import { useEffect, useState } from 'react';

export type Route = { page: 'home'; anchor?: string } | { page: 'algo'; id: string };

export function parseHash(hash: string): Route {
  const h = hash.replace(/^#\/?/, '');
  const m = h.match(/^algo\/([\w-]+)/);
  if (m) return { page: 'algo', id: m[1] };
  return { page: 'home' };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));
  useEffect(() => {
    const on = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}
