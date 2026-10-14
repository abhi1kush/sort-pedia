// App configuration. DEFAULT_LANGUAGE is the build-time default for the code
// panel; users can override it with the settings control (saved in localStorage).

export const LANGUAGES = [
  { id: 'java', label: 'Java', file: 'java.java', prism: 'java' },
  { id: 'c', label: 'C', file: 'c.c', prism: 'c' },
  { id: 'cpp', label: 'C++', file: 'cpp.cpp', prism: 'cpp' },
  { id: 'go', label: 'Golang', file: 'go.go', prism: 'go' },
  { id: 'rust', label: 'Rust', file: 'rust.rs', prism: 'rust' },
  { id: 'python', label: 'Python', file: 'python.py', prism: 'python' },
] as const;

export type LanguageId = (typeof LANGUAGES)[number]['id'];

/** Config constant: default language when the user has not chosen one. */
export const DEFAULT_LANGUAGE: LanguageId = 'java';

export const STORAGE_KEY = 'sort-pedia:default-language';

export function isLanguageId(v: unknown): v is LanguageId {
  return typeof v === 'string' && LANGUAGES.some((l) => l.id === v);
}

function storage(): Storage | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}

/** The user's saved default language, falling back to DEFAULT_LANGUAGE. */
export function getDefaultLanguage(): LanguageId {
  const saved = storage()?.getItem(STORAGE_KEY);
  return isLanguageId(saved) ? saved : DEFAULT_LANGUAGE;
}

export function setDefaultLanguage(lang: LanguageId): void {
  if (!isLanguageId(lang)) throw new Error(`Unknown language: ${String(lang)}`);
  storage()?.setItem(STORAGE_KEY, lang);
}

export function resetDefaultLanguage(): void {
  storage()?.removeItem(STORAGE_KEY);
}
