import { useEffect, useState } from 'react';
import { getThemeMode, isThemeMode, setThemeMode, startThemeSync, type ThemeMode } from '../theme';

export default function ThemeControl() {
  const [mode, setMode] = useState<ThemeMode>(getThemeMode());
  useEffect(() => startThemeSync(() => mode), [mode]);
  return (
    <label className="settings">
      <span>Theme</span>
      <select
        aria-label="Color theme"
        data-testid="theme-select"
        value={mode}
        onChange={(e) => {
          const v = e.target.value;
          if (!isThemeMode(v)) return;
          setThemeMode(v);
          setMode(v);
        }}
      >
        <option value="auto">Auto (light 06–18, dark 18–06)</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
