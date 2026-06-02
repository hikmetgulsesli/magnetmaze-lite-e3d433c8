import type { MagnetMazeStore } from '../magnetmaze-lite/magnetmaze-lite.store';

export function actPauseGame(store: MagnetMazeStore) {
  store.actions.togglePause();
}
