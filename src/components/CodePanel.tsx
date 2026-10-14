import { useEffect, useMemo, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-python';
import { LANGUAGES, getDefaultLanguage, isLanguageId, type LanguageId } from '../config';
import { getSnippet } from '../snippets';
import { LANG_EVENT } from './Settings';

const ENTRY: Record<LanguageId, string> = {
  java: 'Call: <Class>.sort(int[] a)',
  c: 'Call: sort_array(int *a, int n)',
  cpp: 'Call: sortArray(std::vector<int>& a)',
  go: 'Call: sortArray(a []int)',
  rust: 'Call: sort_array(&mut [i32])',
  python: 'Call: sort_array(list)',
};

export default function CodePanel({ algoId }: { algoId: string }) {
  const [lang, setLang] = useState<LanguageId>(getDefaultLanguage());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const on = (e: Event) => {
      const v = (e as CustomEvent).detail;
      if (isLanguageId(v)) setLang(v);
    };
    window.addEventListener(LANG_EVENT, on);
    return () => window.removeEventListener(LANG_EVENT, on);
  }, []);

  const meta = LANGUAGES.find((l) => l.id === lang)!;
  const code = getSnippet(algoId, meta.file) ?? '// snippet missing';
  const html = useMemo(() => Prism.highlight(code, Prism.languages[meta.prism], meta.prism), [code, meta.prism]);

  return (
    <div className="code-panel">
      <div className="code-toolbar">
        <label>
          <span>Language</span>
          <select data-testid="lang-select" value={lang} onChange={(e) => isLanguageId(e.target.value) && setLang(e.target.value)}>
            {LANGUAGES.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
          </select>
        </label>
        <button
          type="button"
          className="btn small"
          onClick={() => {
            navigator.clipboard?.writeText(code).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1200); }, () => {});
          }}
        >{copied ? 'Copied' : 'Copy'}</button>
      </div>
      <p className="muted small">{ENTRY[lang]} · compiled and tested by scripts/verify-snippets.mjs</p>
      <pre className={`language-${meta.prism}`} data-testid="code-block" data-lang={lang}>
        <code className={`language-${meta.prism}`} dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}
