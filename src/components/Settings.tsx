import { useState } from 'react';
import { LANGUAGES, getDefaultLanguage, setDefaultLanguage, isLanguageId } from '../config';

export const LANG_EVENT = 'sort-pedia:default-language';

export default function Settings() {
  const [lang, setLang] = useState(getDefaultLanguage());
  return (
    <label className="settings">
      <span>Default code language</span>
      <select
        data-testid="default-lang"
        value={lang}
        onChange={(e) => {
          const v = e.target.value;
          if (!isLanguageId(v)) return;
          setDefaultLanguage(v);
          setLang(v);
          window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: v }));
        }}
      >
        {LANGUAGES.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
      </select>
    </label>
  );
}
