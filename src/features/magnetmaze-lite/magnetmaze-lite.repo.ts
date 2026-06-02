import type { MagnetMazeDifficulty } from '../../game/game-runtime';

export interface MagnetMazePersistedState {
  difficulty: MagnetMazeDifficulty;
  highScore: number;
  level: number;
}

export interface MagnetMazeLoadResult {
  data: MagnetMazePersistedState | null;
  recovered: boolean;
  error: string | null;
}

const storageKey = 'magnetmaze-lite:v1';

function isDifficulty(value: unknown): value is MagnetMazeDifficulty {
  return value === 'easy' || value === 'normal' || value === 'hard';
}

function normalizePersisted(value: unknown): MagnetMazePersistedState | null {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const candidate = value as Partial<MagnetMazePersistedState>;
  if (!isDifficulty(candidate.difficulty)) {
    return null;
  }

  return {
    difficulty: candidate.difficulty,
    highScore: Number.isFinite(candidate.highScore) ? Math.max(0, Number(candidate.highScore)) : 0,
    level: Number.isFinite(candidate.level) ? Math.max(1, Number(candidate.level)) : 1,
  };
}

export function loadMagnetMazeState(storage: Storage | undefined = globalThis.localStorage): MagnetMazeLoadResult {
  if (!storage) {
    return { data: null, recovered: false, error: null };
  }

  try {
    const raw = storage.getItem(storageKey);
    if (!raw) {
      return { data: null, recovered: false, error: null };
    }

    const data = normalizePersisted(JSON.parse(raw));
    if (!data) {
      storage.removeItem(storageKey);
      return { data: null, recovered: true, error: 'Saved game settings were reset because they were invalid.' };
    }

    return { data, recovered: false, error: null };
  } catch {
    storage.removeItem(storageKey);
    return { data: null, recovered: true, error: 'Saved game settings were reset because they could not be read.' };
  }
}

export function saveMagnetMazeState(
  state: MagnetMazePersistedState,
  storage: Storage | undefined = globalThis.localStorage,
) {
  if (!storage) {
    return;
  }

  storage.setItem(storageKey, JSON.stringify(state));
}
