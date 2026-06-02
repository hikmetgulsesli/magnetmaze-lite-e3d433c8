import type { MagnetMazeStore } from '../magnetmaze-lite/magnetmaze-lite.store';

export function actStartGame(store: MagnetMazeStore) {
  store.actions.startGame();
}
