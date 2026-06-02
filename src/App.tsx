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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (state.activeScreen !== 'gameplay') {
        return;
      }

      if (event.key === 'Enter' && (state.status === 'idle' || state.status === 'gameOver')) {
        event.preventDefault();
        magnetMazeStore.actions.startGame();
        return;
      }

      if (event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        magnetMazeStore.actions.togglePause();
        return;
      }

      if (state.status !== 'running') {
        return;
      }

      if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') {
        event.preventDefault();
        magnetMazeStore.actions.moveLeft();
      }

      if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') {
        event.preventDefault();
        magnetMazeStore.actions.moveRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.activeScreen, state.status]);

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
      {state.activeScreen === 'gameplay' && state.status === 'running' ? (
        <div
          aria-label="Gameplay touch controls"
          className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-md rounded-full border border-outline-variant/50 bg-background/80 p-sm shadow-lg"
        >
          <button
            type="button"
            aria-label="Move left"
            className="rounded-full bg-primary-fixed px-lg py-md font-label-caps text-on-primary-fixed shadow-sm hover:bg-primary-fixed-dim"
            onClick={magnetMazeStore.actions.moveLeft}
          >
            Left
          </button>
          <button
            type="button"
            aria-label="Move right"
            className="rounded-full bg-primary-fixed px-lg py-md font-label-caps text-on-primary-fixed shadow-sm hover:bg-primary-fixed-dim"
            onClick={magnetMazeStore.actions.moveRight}
          >
            Right
          </button>
        </div>
      ) : null}
      {state.lastError ? (
        <div role="status" className="fixed bottom-4 left-4 right-4 z-50 rounded-lg bg-error-container p-md text-on-surface shadow-lg">
          {state.lastError}
        </div>
      ) : null}
    </div>
  );
}
