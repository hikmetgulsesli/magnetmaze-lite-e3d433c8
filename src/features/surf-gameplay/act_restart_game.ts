import type { MagnetMazeStore } from '../magnetmaze-lite/magnetmaze-lite.store';

export function actRestartGame(store: MagnetMazeStore) {
  store.actions.restart();
}
