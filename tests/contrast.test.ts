// WCAG AA contrast checks for both themes, computed from the CSS variables in src/styles.css.
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const css = readFileSync('src/styles.css', 'utf8');
function vars(selectorStart: string): Record<string, string> {
  const i = css.indexOf(selectorStart);
  const block = css.slice(css.indexOf('{', i) + 1, css.indexOf('}', i));
  return Object.fromEntries([...block.matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})/g)].map((m) => [m[1], m[2]]));
}
const lum = (hex: string) => {
  const c = [1, 3, 5].map((k) => parseInt(hex.slice(k, k + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a: string, b: string) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

const TEXT: [string, string][] = [
  ['text', 'bg'], ['text', 'card'], ['muted', 'card'], ['muted', 'bg'], ['accent', 'card'], ['accent', 'bg'], ['on-accent', 'accent'],
  ['chip-text', 'accent-2'], ['bad', 'card'], ['ok', 'card'], ['text', 'input-bg'], ['text', 'soft'], ['topbar-text', 'topbar'],
  ['badge-text', 'badge'], ['badge-text', 'badge-yes'], ['badge-text', 'badge-no'], ['tip-text', 'tip-bg'], ['ptr', 'card'], ['bad', 'soft'],
  ['code-text', 'code-bg'], ['tok-comment', 'code-bg'], ['tok-keyword', 'code-bg'], ['tok-function', 'code-bg'], ['tok-number', 'code-bg'],
  ['tok-string', 'code-bg'], ['tok-operator', 'code-bg'], ['tok-class', 'code-bg'], ['tok-macro', 'code-bg'], ['text', 'viz-bg'],
];
// non-text graphics (chart lines, bars, axes) need 3:1 against their background (WCAG 1.4.11)
const GRAPHICS: [string, string][] = [
  ...['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 's-random', 's-sorted', 's-reversed', 's-nearly', 's-few', 'axis'].map((k) => [k, 'card'] as [string, string]),
  ...['bar', 'bar-cmp', 'bar-swap', 'bar-set', 'bar-sorted', 'bar-done'].map((k) => [k, 'viz-bg'] as [string, string]),
];

for (const [theme, sel] of [['light', ":root, [data-theme='light']"], ['dark', "[data-theme='dark']"]] as const) {
  describe(`${theme} theme contrast`, () => {
    const v = vars(sel);
    it.each(TEXT)('text %s on %s ≥ 4.5:1', (fg, bg) => {
      expect(v[fg], fg).toBeDefined(); expect(v[bg], bg).toBeDefined();
      expect(ratio(v[fg], v[bg])).toBeGreaterThanOrEqual(4.5);
    });
    it.each(GRAPHICS)('graphic %s on %s ≥ 3:1', (fg, bg) => {
      expect(ratio(v[fg], v[bg])).toBeGreaterThanOrEqual(3);
    });
  });
}
