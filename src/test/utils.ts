import { describe, expect, it } from 'vitest';
import { createMagnetMazeStore } from '../features/magnetmaze-lite/magnetmaze-lite.store';

function createThrowingStorage(): Storage {
  return {
    length: 0,
    clear: () => undefined,
    getItem: () => null,
    key: () => null,
    removeItem: () => undefined,
    setItem: () => {
      throw new Error('storage unavailable');
    },
  };
}

describe('MagnetMaze store persistence', () => {
  it('keeps the storage error state when saving settings fails', () => {
    const originalLocalStorage = globalThis.localStorage;
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      value: createThrowingStorage(),
    });

    try {
      const store = createMagnetMazeStore();

      store.actions.saveSettings();

      expect(store.getState()).toMatchObject({
        activeScreen: 'gameplay',
        storageStatus: 'unavailable',
        lastError: 'Game progress could not be saved.',
      });
    } finally {
      Object.defineProperty(globalThis, 'localStorage', {
        configurable: true,
        value: originalLocalStorage,
      });
    }
  });
});

describe('MagnetMaze store gameplay controls', () => {
  it('only toggles pause during an active or paused game', () => {
    const store = createMagnetMazeStore();

    store.actions.togglePause();
    expect(store.getState()).toMatchObject({
      status: 'idle',
      paused: false,
      gameOver: false,
    });

    store.actions.startGame();
    store.actions.togglePause();
    expect(store.getState()).toMatchObject({
      status: 'paused',
      paused: true,
      gameOver: false,
    });

    store.actions.togglePause();
    expect(store.getState()).toMatchObject({
      status: 'running',
      paused: false,
      gameOver: false,
    });

    for (let tick = 0; tick < 17; tick += 1) {
      store.actions.tick();
    }

    expect(store.getState()).toMatchObject({
      status: 'gameOver',
      paused: true,
      gameOver: true,
    });

    store.actions.togglePause();
    expect(store.getState()).toMatchObject({
      status: 'gameOver',
      paused: true,
      gameOver: true,
    });
  });
});
