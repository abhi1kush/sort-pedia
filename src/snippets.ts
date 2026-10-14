// Code snippets live in /snippets/<algo>/<lang>.<ext> so the same files are
// shown in the UI and compiled/run by scripts/verify-snippets.mjs.
const files = import.meta.glob('../snippets/*/*', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

export function getSnippet(algoId: string, file: string): string | undefined {
  return files[`../snippets/${algoId}/${file}`];
}

export const SNIPPET_COUNT = Object.keys(files).length;
