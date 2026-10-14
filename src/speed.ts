// Logarithmic speed slider: position 0..SLIDER_MAX maps to MIN_SPS..MAX_SPS steps per second.
export const MIN_SPS = 0.25;
export const MAX_SPS = 200;
export const SLIDER_MAX = 1000;
export const DEFAULT_SPS = 2; // slow enough to follow the pointers
export const PRESETS = [
  { label: 'Very slow', sps: 0.5 },
  { label: 'Slow', sps: 2 },
  { label: 'Normal', sps: 10 },
  { label: 'Fast', sps: 60 },
] as const;

const RATIO = Math.log(MAX_SPS / MIN_SPS);

export function sliderToSps(pos: number): number {
  const t = Math.min(1, Math.max(0, pos / SLIDER_MAX));
  const v = MIN_SPS * Math.exp(t * RATIO);
  return Math.round(v * 100) / 100;
}

export function spsToSlider(sps: number): number {
  const v = Math.min(MAX_SPS, Math.max(MIN_SPS, sps));
  return Math.round((Math.log(v / MIN_SPS) / RATIO) * SLIDER_MAX);
}

/** Timer plan for a speed: wait `delayMs`, then apply `stepsPerTick` steps (batched above ~60 steps/s). */
export function tickPlan(sps: number): { delayMs: number; stepsPerTick: number } {
  const ideal = 1000 / sps;
  if (ideal >= 16) return { delayMs: ideal, stepsPerTick: 1 };
  const stepsPerTick = Math.ceil(16 / ideal);
  return { delayMs: stepsPerTick * ideal, stepsPerTick };
}

export function formatSps(sps: number): string {
  return sps < 1 ? `${sps.toFixed(2)} steps/s` : sps < 10 ? `${sps.toFixed(1)} steps/s` : `${Math.round(sps)} steps/s`;
}
