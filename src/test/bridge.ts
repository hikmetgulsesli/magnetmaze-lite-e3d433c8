import type { MagnetMazeActions, MagnetMazeState, MagnetMazeStore } from '../features/magnetmaze-lite/magnetmaze-lite.store';

export interface MagnetMazeAppBridge {
  getState: () => MagnetMazeState;
  state: MagnetMazeState;
  actions: MagnetMazeActions;
}

declare global {
  interface Window {
    app?: MagnetMazeAppBridge;
  }
}

export function installMagnetMazeBridge(store: MagnetMazeStore) {
  const bridge: MagnetMazeAppBridge = {
    getState: store.getState,
    get state() {
      return store.getState();
    },
    actions: store.actions,
  };

  window.app = bridge;
  return bridge;
}
