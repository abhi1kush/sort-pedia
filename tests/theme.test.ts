import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import {
  EVENING_HOUR, MORNING_HOUR, THEME_STORAGE_KEY, applyTheme, getThemeMode, msUntilNextSwitch, resolveTheme,
  setThemeMode, startThemeSync, themeForTime,
} from '../src/theme';

const at = (h: number, m: number, d = 15) => new Date(2026, 9, d, h, m, 0, 0); // local time

describe('clock boundaries (auto mode)', () => {
  it.each([
    ['05:59', at(5, 59), 'dark'],
    ['06:00', at(6, 0), 'light'],
    ['17:59', at(17, 59), 'light'],
    ['18:00', at(18, 0), 'dark'],
    ['23:59', at(23, 59), 'dark'],
    ['00:00', at(0, 0), 'dark'],
    ['12:00', at(12, 0), 'light'],
  ])('%s -> %s', (_label, date, expected) => {
    expect(themeForTime(date)).toBe(expected);
    expect(resolveTheme('auto', date)).toBe(expected);
  });
  it('documents the boundaries as config constants', () => {
    expect(MORNING_HOUR).toBe(6);
    expect(EVENING_HOUR).toBe(18);
  });
  it('explicit modes ignore the clock', () => {
    expect(resolveTheme('light', at(23, 0))).toBe('light');
    expect(resolveTheme('dark', at(12, 0))).toBe('dark');
  });
});

describe('scheduling the next switch', () => {
  it('computes the time to the next boundary', () => {
    expect(msUntilNextSwitch(at(5, 59))).toBe(60_000);
    expect(msUntilNextSwitch(at(6, 0))).toBe(12 * 3600_000);
    expect(msUntilNextSwitch(at(17, 59))).toBe(60_000);
    expect(msUntilNextSwitch(at(18, 0))).toBe(12 * 3600_000);
    expect(msUntilNextSwitch(at(23, 59))).toBe((6 * 60 + 1) * 60_000);
  });

  beforeEach(() => { vi.useFakeTimers(); localStorage.clear(); });
  afterEach(() => vi.useRealTimers());

  it('switches theme at 18:00 and 06:00 without a reload', () => {
    vi.setSystemTime(at(17, 59));
    const stop = startThemeSync(() => 'auto');
    expect(document.documentElement.dataset.theme).toBe('light');
    vi.advanceTimersByTime(61_000 + 1000);
    expect(document.documentElement.dataset.theme).toBe('dark');
    vi.advanceTimersByTime(12 * 3600_000);
    expect(document.documentElement.dataset.theme).toBe('light');
    stop();
  });

  it('re-checks on visibilitychange (e.g. after the tab slept past a boundary)', () => {
    vi.setSystemTime(at(17, 0));
    const stop = startThemeSync(() => 'auto');
    expect(document.documentElement.dataset.theme).toBe('light');
    stop(); // simulate a missed timer: no timers left
    const stop2 = startThemeSync(() => 'auto');
    vi.setSystemTime(at(19, 0)); // clock jumps without timers firing
    vi.clearAllTimers();
    document.dispatchEvent(new Event('visibilitychange'));
    expect(document.documentElement.dataset.theme).toBe('dark');
    stop2();
  });

  it('does not schedule timers for explicit modes', () => {
    vi.setSystemTime(at(17, 59));
    const stop = startThemeSync(() => 'light');
    expect(vi.getTimerCount()).toBe(0);
    vi.advanceTimersByTime(3600_000);
    expect(document.documentElement.dataset.theme).toBe('light');
    stop();
  });
});

describe('persistence', () => {
  beforeEach(() => localStorage.clear());
  it('defaults to auto and persists the chosen mode', () => {
    expect(getThemeMode()).toBe('auto');
    setThemeMode('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    expect(getThemeMode()).toBe('dark');
    localStorage.setItem(THEME_STORAGE_KEY, 'purple');
    expect(getThemeMode()).toBe('auto');
    expect(() => setThemeMode('purple' as never)).toThrow();
  });
  it('applyTheme sets data-theme and color-scheme', () => {
    applyTheme('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(document.documentElement.style.colorScheme).toBe('dark');
  });
});

describe('inline no-flash script in index.html', () => {
  const html = readFileSync('index.html', 'utf8');
  const script = html.match(/<script id="theme-boot">([\s\S]*?)<\/script>/)![1];
  const run = () => new Function(script)();
  beforeEach(() => { vi.useFakeTimers(); localStorage.clear(); document.documentElement.removeAttribute('data-theme'); });
  afterEach(() => vi.useRealTimers());

  it('runs before the app bundle in <head>', () => {
    expect(html.indexOf('theme-boot')).toBeLessThan(html.indexOf('/src/main.tsx'));
    expect(html.indexOf('theme-boot')).toBeLessThan(html.indexOf('</head>'));
  });
  it('uses the same boundaries as src/theme.ts', () => {
    expect(script).toContain(`MORNING_HOUR = ${MORNING_HOUR}`);
    expect(script).toContain(`EVENING_HOUR = ${EVENING_HOUR}`);
    expect(script).toContain(THEME_STORAGE_KEY);
  });
  it.each([[at(5, 59), 'dark'], [at(6, 0), 'light'], [at(17, 59), 'light'], [at(18, 0), 'dark'], [at(23, 59), 'dark']])('auto at %s -> %s', (d, t) => {
    vi.setSystemTime(d);
    run();
    expect(document.documentElement.dataset.theme).toBe(t);
  });
  it('honours a saved explicit mode', () => {
    vi.setSystemTime(at(12, 0));
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');
    run();
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
});
