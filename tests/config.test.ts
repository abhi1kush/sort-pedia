import { beforeEach, describe, expect, it } from 'vitest';
import { DEFAULT_LANGUAGE, LANGUAGES, STORAGE_KEY, getDefaultLanguage, setDefaultLanguage, resetDefaultLanguage, isLanguageId } from '../src/config';
import { ALGORITHMS } from '../src/algorithms';
import { readdirSync, existsSync } from 'node:fs';

describe('config', () => {
  beforeEach(() => localStorage.clear());

  it('defaults to Java via the config constant', () => {
    expect(DEFAULT_LANGUAGE).toBe('java');
    expect(getDefaultLanguage()).toBe('java');
  });
  it('persists the chosen default in localStorage', () => {
    setDefaultLanguage('python');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('python');
    expect(getDefaultLanguage()).toBe('python');
    resetDefaultLanguage();
    expect(getDefaultLanguage()).toBe('java');
  });
  it('ignores invalid stored values and rejects invalid languages', () => {
    localStorage.setItem(STORAGE_KEY, 'cobol');
    expect(getDefaultLanguage()).toBe('java');
    expect(() => setDefaultLanguage('cobol' as never)).toThrow();
    expect(isLanguageId('go')).toBe(true);
    expect(isLanguageId(42)).toBe(false);
  });
  it('offers exactly C, C++, Java, Golang, Rust and Python', () => {
    expect(LANGUAGES.map((l) => l.label).sort()).toEqual(['C', 'C++', 'Golang', 'Java', 'Python', 'Rust']);
  });
});

describe('algorithm catalogue', () => {
  it('has 20 algorithms ranked 1..20 with unique ids', () => {
    expect(ALGORITHMS).toHaveLength(20);
    expect(ALGORITHMS.map((a) => a.rank)).toEqual(Array.from({ length: 20 }, (_, i) => i + 1));
    expect(new Set(ALGORITHMS.map((a) => a.id)).size).toBe(20);
    expect(ALGORITHMS[ALGORITHMS.length - 1].id).toBe('bogo');
    expect(ALGORITHMS.find((a) => a.id === 'bogo')!.maxInput).toBeLessThanOrEqual(8);
  });
  it('has a snippet file for every algorithm and language', () => {
    const dirs = readdirSync('snippets');
    expect(dirs.sort()).toEqual(ALGORITHMS.map((a) => a.id).sort());
    for (const a of ALGORITHMS) for (const l of LANGUAGES) expect(existsSync(`snippets/${a.id}/${l.file}`), `${a.id}/${l.file}`).toBe(true);
  });
  it('matches the Rust algorithm list', async () => {
    const src = (await import('node:fs')).readFileSync('wasm/src/lib.rs', 'utf8');
    const m = src.match(/ALGORITHMS: \[&str; 20\] = \[([\s\S]*?)\];/)!;
    const ids = [...m[1].matchAll(/"([\w-]+)"/g)].map((x) => x[1]);
    expect(ids).toEqual(ALGORITHMS.map((a) => a.id));
  });
});
