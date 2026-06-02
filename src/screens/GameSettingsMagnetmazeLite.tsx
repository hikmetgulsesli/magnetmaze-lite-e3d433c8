// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - MagnetMaze Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { AudioWaveform, Gauge, Keyboard, Music, Volume1, Volume2, X, Zap } from "lucide-react";


export type GameSettingsMagnetmazeLiteActionId = "close-settings-1" | "reset-to-defaults-2" | "return-to-game-3" | "save-changes-4";

export interface GameSettingsMagnetmazeLiteProps {
  actions?: Partial<Record<GameSettingsMagnetmazeLiteActionId, () => void>>;

}

export function GameSettingsMagnetmazeLite({ actions }: GameSettingsMagnetmazeLiteProps) {
  return (
    <>
      {/* Gameplay Background Simulation (Blurred) */}
      <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-container to-background"></div>
      <div className="absolute inset-0 grid-bg"></div>
      {/* Simulated gameplay elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-fixed-dim/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl"></div>
      </div>
      {/* Modal Backdrop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[20px] z-40 flex items-center justify-center p-margin-mobile md:p-margin-desktop">
      {/* Settings Container */}
      <div className="bg-surface-container/30 border border-outline-variant/30 rounded-xl shadow-2xl shadow-surface-tint/10 w-full max-w-2xl flex flex-col relative overflow-hidden transform transition-colors duration-200 scale-100">
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary-fixed"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary-fixed"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary-fixed"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary-fixed"></div>
      {/* Header */}
      <div className="px-lg pt-lg pb-md border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-highest/20">
      <h1 className="font-headline-lg text-headline-lg md:font-display-arcade md:text-display-arcade text-primary-fixed neon-text-primary tracking-tight">SYSTEM CALIBRATION</h1>
      <button aria-label="Close Settings" className="text-outline hover:text-primary-fixed transition-colors" type="button" data-action-id="close-settings-1" onClick={actions?.["close-settings-1"]}>
      <X className="text-[24px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Scrollable Content */}
      <div className="p-lg overflow-y-auto max-h-[614px] space-y-xl custom-scrollbar">
      {/* Performance / Game Speed */}
      <section className="space-y-md">
      <div className="flex items-center gap-sm">
      <Gauge className="text-primary-fixed" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Performance Settings</h2>
      </div>
      <div className="bg-surface-container-low/50 border border-outline-variant/20 rounded-lg p-md space-y-md relative group hover:border-outline-variant/50 transition-colors">
      <div className="flex justify-between items-center">
      <span className="font-body-lg text-body-lg text-on-surface">Simulation Speed</span>
      <span className="font-label-caps text-label-caps text-primary-fixed bg-primary-fixed/10 px-2 py-1 rounded">100%</span>
      </div>
      <input className="w-full h-2 rounded-full outline-none" max="125" min="75" type="range" defaultValue="100" />
      <div className="flex justify-between font-label-caps text-label-caps text-outline text-[10px]">
      <span>75%</span>
      <span>100%</span>
      <span>125%</span>
      </div>
      </div>
      <div className="bg-surface-container-low/50 border border-outline-variant/20 rounded-lg p-md space-y-md relative group hover:border-outline-variant/50 transition-colors">
      <div className="flex justify-between items-center">
      <span className="font-body-lg text-body-lg text-on-surface">Difficulty Protocol</span>
      <span className="font-label-caps text-label-caps text-secondary-container bg-secondary-container/10 px-2 py-1 rounded">Arcade</span>
      </div>
      <input className="w-full h-2 rounded-full outline-none" max="4" min="1" type="range" defaultValue="3" />
      <div className="flex justify-between font-label-caps text-label-caps text-outline text-[10px]">
      <span>Casual</span>
      <span>Normal</span>
      <span className="text-secondary-container">Arcade</span>
      <span>Hardcore</span>
      </div>
      </div>
      </section>
      {/* Audio Settings */}
      <section className="space-y-md">
      <div className="flex items-center gap-sm">
      <AudioWaveform className="text-primary-fixed" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Audio Systems</h2>
      </div>
      <div className="bg-surface-container-low/50 border border-outline-variant/20 rounded-lg p-md space-y-lg">
      {/* Master Volume */}
      <div className="space-y-sm">
      <div className="flex justify-between items-center">
      <span className="font-body-lg text-body-lg text-on-surface">Master Output</span>
      <span className="font-label-caps text-label-caps text-primary-fixed">80%</span>
      </div>
      <div className="flex items-center gap-sm">
      <Volume1 className="text-outline text-[16px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-2 rounded-full outline-none" max="100" min="0" type="range" defaultValue="80" />
      <Volume2 className="text-outline text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Toggles */}
      <div className="flex justify-between items-center py-2 border-t border-outline-variant/10">
      <span className="font-body-lg text-body-lg text-on-surface flex items-center gap-2">
      <Music className="text-outline text-[18px]" aria-hidden={true} focusable="false" />
                                      Background Synth
                                  </span>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input defaultChecked={true} className="toggle-checkbox absolute block w-5 h-5 rounded-sm bg-white border-4 appearance-none cursor-pointer z-10 right-0 border-primary-fixed" id="music-toggle" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-sm bg-primary-fixed-dim cursor-pointer box-shadow-inner" htmlFor="music-toggle"></label>
      </div>
      </div>
      <div className="flex justify-between items-center py-2 border-t border-outline-variant/10">
      <span className="font-body-lg text-body-lg text-on-surface flex items-center gap-2">
      <Zap className="text-outline text-[18px]" aria-hidden={true} focusable="false" />
                                      Kinetic SFX
                                  </span>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input defaultChecked={true} className="toggle-checkbox absolute block w-5 h-5 rounded-sm bg-white border-4 appearance-none cursor-pointer z-10 right-0 border-primary-fixed" id="sfx-toggle" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-sm bg-primary-fixed-dim cursor-pointer box-shadow-inner" htmlFor="sfx-toggle"></label>
      </div>
      </div>
      </div>
      </section>
      {/* Input Help */}
      <section className="space-y-md">
      <div className="flex items-center gap-sm">
      <Keyboard className="text-primary-fixed" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Input Matrix</h2>
      </div>
      <div className="grid grid-cols-2 gap-sm">
      <div className="bg-surface-container-low/50 border border-outline-variant/20 rounded-lg p-sm flex items-center gap-md">
      <div className="flex gap-1">
      <kbd className="bg-surface-bright border border-outline-variant rounded px-2 py-1 font-label-caps text-label-caps text-on-surface">W</kbd>
      <kbd className="bg-surface-bright border border-outline-variant rounded px-2 py-1 font-label-caps text-label-caps text-on-surface">A</kbd>
      <kbd className="bg-surface-bright border border-outline-variant rounded px-2 py-1 font-label-caps text-label-caps text-on-surface">S</kbd>
      <kbd className="bg-surface-bright border border-outline-variant rounded px-2 py-1 font-label-caps text-label-caps text-on-surface">D</kbd>
      </div>
      <span className="font-body-sm text-body-sm text-outline">Navigate Core</span>
      </div>
      <div className="bg-surface-container-low/50 border border-outline-variant/20 rounded-lg p-sm flex items-center gap-md">
      <kbd className="bg-surface-bright border border-outline-variant rounded px-4 py-1 font-label-caps text-label-caps text-primary-fixed border-primary-fixed/30">SPACE</kbd>
      <span className="font-body-sm text-body-sm text-outline">Invert Polarity</span>
      </div>
      <div className="bg-surface-container-low/50 border border-outline-variant/20 rounded-lg p-sm flex items-center gap-md col-span-2">
      <kbd className="bg-surface-bright border border-outline-variant rounded px-2 py-1 font-label-caps text-label-caps text-on-surface">P</kbd>
      <span className="font-body-sm text-body-sm text-outline">Suspend Simulation</span>
      </div>
      </div>
      </section>
      </div>
      {/* Footer Actions */}
      <div className="px-lg py-md border-t border-outline-variant/20 bg-surface-container-highest/40 flex flex-col sm:flex-row justify-between items-center gap-md">
      <button className="font-label-caps text-label-caps text-outline hover:text-on-surface transition-colors order-3 sm:order-1 underline decoration-outline-variant underline-offset-4" type="button" data-action-id="reset-to-defaults-2" onClick={actions?.["reset-to-defaults-2"]}>RESET TO DEFAULTS</button>
      <div className="flex gap-md order-1 sm:order-2 w-full sm:w-auto">
      <button className="flex-1 sm:flex-none border-2 border-outline-variant text-on-surface font-label-caps text-label-caps px-lg py-sm rounded hover:border-primary-fixed hover:text-primary-fixed transition-colors" type="button" data-action-id="return-to-game-3" onClick={actions?.["return-to-game-3"]}>
                              RETURN TO GAME
                          </button>
      <button className="flex-1 sm:flex-none bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps px-lg py-sm rounded neon-glow-primary hover:bg-primary-fixed-dim hover:scale-[1.02] active:scale-95 transition-colors" type="button" data-action-id="save-changes-4" onClick={actions?.["save-changes-4"]}>
                              SAVE CHANGES
                          </button>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
