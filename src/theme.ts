// Theme handling. Mode "auto" follows the local clock: dark from EVENING_HOUR (18:00)
// until MORNING_HOUR (06:00), light otherwise. Change MORNING_HOUR / EVENING_HOUR to move
// the boundaries; keep the inline script in index.html in sync (a Vitest test checks this).

export const MORNING_HOUR = 6; // light theme starts at 06:00 local time
export const EVENING_HOUR = 18; // dark theme starts at 18:00 local time
export const THEME_STORAGE_KEY = 'sort-pedia:theme';
export const THEME_MODES = ['auto', 'light', 'dark'] as const;
export type ThemeMode = (typeof THEME_MODES)[number];
export type Theme = 'light' | 'dark';

export const isThemeMode = (v: unknown): v is ThemeMode => typeof v === 'string' && (THEME_MODES as readonly string[]).includes(v);

/** Theme the clock implies at `date` (local time). */
export function themeForTime(date: Date): Theme {
  const h = date.getHours();
  return h >= MORNING_HOUR && h < EVENING_HOUR ? 'light' : 'dark';
}

export function resolveTheme(mode: ThemeMode, date: Date = new Date()): Theme {
  return mode === 'auto' ? themeForTime(date) : mode;
}

/** Milliseconds from `date` until the next auto-mode boundary (06:00 or 18:00 local). */
export function msUntilNextSwitch(date: Date): number {
  const next = new Date(date.getTime());
  next.setMinutes(0, 0, 0);
  const h = date.getHours();
  if (h < MORNING_HOUR) next.setHours(MORNING_HOUR);
  else if (h < EVENING_HOUR) next.setHours(EVENING_HOUR);
  else { next.setDate(next.getDate() + 1); next.setHours(MORNING_HOUR); }
  return Math.max(0, next.getTime() - date.getTime());
}

function store(): Storage | null {
  try { return typeof localStorage === 'undefined' ? null : localStorage; } catch { return null; }
}

export function getThemeMode(): ThemeMode {
  const v = store()?.getItem(THEME_STORAGE_KEY);
  return isThemeMode(v) ? v : 'auto';
}

export function setThemeMode(mode: ThemeMode): void {
  if (!isThemeMode(mode)) throw new Error(`Unknown theme mode: ${String(mode)}`);
  store()?.setItem(THEME_STORAGE_KEY, mode);
}

export function applyTheme(theme: Theme, root: HTMLElement = document.documentElement): void {
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

/**
 * Keep the document theme in sync: applies now, schedules a timer for the next clock
 * boundary (auto mode), and re-checks when the tab becomes visible again.
 * Returns a cleanup function.
 */
export function startThemeSync(getMode: () => ThemeMode = getThemeMode, now: () => Date = () => new Date()): () => void {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const sync = () => {
    clearTimeout(timer);
    const mode = getMode();
    const d = now();
    applyTheme(resolveTheme(mode, d));
    if (mode === 'auto') timer = setTimeout(sync, msUntilNextSwitch(d) + 1000);
  };
  const onVis = () => { if (document.visibilityState === 'visible') sync(); };
  document.addEventListener('visibilitychange', onVis);
  sync();
  return () => { clearTimeout(timer); document.removeEventListener('visibilitychange', onVis); };
}
