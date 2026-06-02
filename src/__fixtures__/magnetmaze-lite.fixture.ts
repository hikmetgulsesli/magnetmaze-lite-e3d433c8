import type { MagnetMazeState } from '../features/magnetmaze-lite/magnetmaze-lite.store';

export const magnetMazeInitialState: MagnetMazeState = {
  activeScreen: 'gameplay',
  status: 'idle',
  score: 0,
  highScore: 0,
  level: 1,
  difficulty: 'normal',
  paused: false,
  gameOver: false,
  storageStatus: 'pending',
  lastError: null,
  runtime: {
    player: { lane: 1, position: 0 },
    obstacles: [
      { lane: 0, position: 4 },
      { lane: 2, position: 7 },
      { lane: 1, position: 10 },
    ],
    shards: [
      { lane: 2, position: 2 },
      { lane: 0, position: 6 },
      { lane: 1, position: 9 },
    ],
    score: 0,
    energy: 100,
    lives: 3,
    paused: false,
  },
};

export const magnetMazeDefaultPreferences = {
  difficulty: 'normal' as const,
  level: 1,
};
