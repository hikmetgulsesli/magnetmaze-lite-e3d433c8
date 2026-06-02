import { magnetMazeDefaultPreferences, magnetMazeInitialState } from '../../__fixtures__/magnetmaze-lite.fixture';
import {
  advanceRuntime,
  createRuntime,
  movePlayer,
  type MagnetMazeDifficulty,
  type MagnetMazeRuntime,
} from '../../game/game-runtime';
import { loadMagnetMazeState, saveMagnetMazeState } from './magnetmaze-lite.repo';

export type MagnetMazeScreen = 'gameplay' | 'settings';
export type MagnetMazeStatus = 'idle' | 'running' | 'paused' | 'gameOver';
export type MagnetMazeStorageStatus = 'pending' | 'ready' | 'recovered' | 'unavailable';

export interface MagnetMazeState {
  activeScreen: MagnetMazeScreen;
  status: MagnetMazeStatus;
  score: number;
  highScore: number;
  level: number;
  difficulty: MagnetMazeDifficulty;
  paused: boolean;
  gameOver: boolean;
  storageStatus: MagnetMazeStorageStatus;
  lastError: string | null;
  runtime: MagnetMazeRuntime;
}

export interface MagnetMazeActions {
  bootstrap: () => void;
  startGame: () => void;
  restart: () => void;
  togglePause: () => void;
  openSettings: () => void;
  closeSettings: () => void;
  resetToDefaults: () => void;
  saveSettings: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  tick: () => void;
}

type Listener = () => void;

function cloneInitialState(): MagnetMazeState {
  return {
    ...magnetMazeInitialState,
    runtime: {
      ...magnetMazeInitialState.runtime,
      player: { ...magnetMazeInitialState.runtime.player },
      obstacles: magnetMazeInitialState.runtime.obstacles.map((obstacle) => ({ ...obstacle })),
      shards: magnetMazeInitialState.runtime.shards.map((shard) => ({ ...shard })),
    },
  };
}

function completeRuntime(state: MagnetMazeState, runtime: MagnetMazeRuntime): MagnetMazeState {
  const score = runtime.score;
  const gameOver = runtime.lives === 0 || runtime.energy === 0;
  const paused = runtime.paused || gameOver;
  const highScore = Math.max(state.highScore, score);

  return {
    ...state,
    runtime: { ...runtime, paused },
    score,
    highScore,
    paused,
    gameOver,
    status: gameOver ? 'gameOver' : paused ? 'paused' : 'running',
  };
}

export function createMagnetMazeStore() {
  let state = cloneInitialState();
  const listeners = new Set<Listener>();

  const emit = () => {
    listeners.forEach((listener) => listener());
  };

  const setState = (nextState: MagnetMazeState) => {
    state = nextState;
    emit();
  };

  const persist = () => {
    try {
      saveMagnetMazeState({
        difficulty: state.difficulty,
        highScore: state.highScore,
        level: state.level,
      });
    } catch {
      setState({ ...state, storageStatus: 'unavailable', lastError: 'Game progress could not be saved.' });
    }
  };

  const actions: MagnetMazeActions = {
    bootstrap() {
      const loadResult = loadMagnetMazeState();
      if (!loadResult.data) {
        setState({
          ...state,
          storageStatus: loadResult.recovered ? 'recovered' : 'ready',
          lastError: loadResult.error,
        });
        return;
      }

      setState({
        ...state,
        difficulty: loadResult.data.difficulty,
        highScore: loadResult.data.highScore,
        level: loadResult.data.level,
        runtime: createRuntime(loadResult.data.level, loadResult.data.difficulty),
        storageStatus: 'ready',
        lastError: null,
      });
    },
    startGame() {
      setState({
        ...state,
        activeScreen: 'gameplay',
        status: 'running',
        paused: false,
        gameOver: false,
        score: 0,
        runtime: createRuntime(state.level, state.difficulty),
      });
    },
    restart() {
      actions.startGame();
    },
    togglePause() {
      const paused = !state.paused;
      setState({
        ...state,
        paused,
        status: paused ? 'paused' : 'running',
        runtime: { ...state.runtime, paused },
      });
    },
    openSettings() {
      setState({ ...state, activeScreen: 'settings', paused: true, status: 'paused', runtime: { ...state.runtime, paused: true } });
    },
    closeSettings() {
      setState({ ...state, activeScreen: 'gameplay' });
    },
    resetToDefaults() {
      setState({
        ...state,
        difficulty: magnetMazeDefaultPreferences.difficulty,
        level: magnetMazeDefaultPreferences.level,
        lastError: null,
      });
    },
    saveSettings() {
      persist();
      setState({ ...state, activeScreen: 'gameplay', lastError: null, storageStatus: 'ready' });
    },
    moveLeft() {
      setState({ ...state, runtime: movePlayer(state.runtime, -1) });
    },
    moveRight() {
      setState({ ...state, runtime: movePlayer(state.runtime, 1) });
    },
    tick() {
      if (state.status !== 'running') {
        return;
      }

      const nextState = completeRuntime(state, advanceRuntime(state.runtime, state.difficulty));
      setState(nextState);
      if (nextState.highScore !== state.highScore) {
        persist();
      }
    },
  };

  return {
    getState: () => state,
    actions,
    subscribe(listener: Listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export type MagnetMazeStore = ReturnType<typeof createMagnetMazeStore>;

export const magnetMazeStore = createMagnetMazeStore();
