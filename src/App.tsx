import { useEffect, useMemo, useSyncExternalStore } from 'react';
import {
  GameSettingsMagnetmazeLite,
  GameplayMagnetmazeLite,
  type GameSettingsMagnetmazeLiteActionId,
  type GameplayMagnetmazeLiteActionId,
} from './screens';
import { magnetMazeStore } from './features/magnetmaze-lite/magnetmaze-lite.store';
import { installMagnetMazeBridge } from './test/bridge';

export default function App() {
  const state = useSyncExternalStore(magnetMazeStore.subscribe, magnetMazeStore.getState, magnetMazeStore.getState);

  useEffect(() => {
    installMagnetMazeBridge(magnetMazeStore);
    magnetMazeStore.actions.bootstrap();
  }, []);

  useEffect(() => {
    if (state.status !== 'running') {
      return;
    }

    const timer = window.setInterval(magnetMazeStore.actions.tick, 1200);
    return () => window.clearInterval(timer);
  }, [state.status]);

  const gameplayActions = useMemo<Partial<Record<GameplayMagnetmazeLiteActionId, () => void>>>(
    () => ({
      'restart-alt-1': magnetMazeStore.actions.restart,
      'pause-2': magnetMazeStore.actions.togglePause,
      'settings-3': magnetMazeStore.actions.openSettings,
      'start-game-4': magnetMazeStore.actions.startGame,
    }),
    [],
  );

  const settingsActions = useMemo<Partial<Record<GameSettingsMagnetmazeLiteActionId, () => void>>>(
    () => ({
      'close-settings-1': magnetMazeStore.actions.closeSettings,
      'reset-to-defaults-2': magnetMazeStore.actions.resetToDefaults,
      'return-to-game-3': magnetMazeStore.actions.closeSettings,
      'save-changes-4': magnetMazeStore.actions.saveSettings,
    }),
    [],
  );

  return (
    <div data-setfarm-root data-testid="setfarm-app-root">
      {state.activeScreen === 'settings' ? (
        <GameSettingsMagnetmazeLite actions={settingsActions} />
      ) : (
        <GameplayMagnetmazeLite actions={gameplayActions} runtime={state.runtime} />
      )}
      {state.lastError ? (
        <div role="status" className="fixed bottom-4 left-4 right-4 z-50 rounded-lg bg-error-container p-md text-on-surface shadow-lg">
          {state.lastError}
        </div>
      ) : null}
    </div>
  );
}
