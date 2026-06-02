// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - MagnetMaze Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { Bolt, Heart, Pause, RadioTower, RotateCcw, Settings } from "lucide-react";


export type GameplayMagnetmazeLiteActionId = "restart-alt-1" | "pause-2" | "settings-3" | "start-game-4";

export interface GameplayMagnetmazeLiteProps {
  actions?: Partial<Record<GameplayMagnetmazeLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean; status?: "idle" | "running" | "paused" | "gameOver" };

}

export function GameplayMagnetmazeLite({ actions, runtime }: GameplayMagnetmazeLiteProps) {
  const [polarity, setPolarity] = useState<"attract" | "repel">("repel");
  const score = runtime?.score ?? 0;
  const energy = runtime?.energy ?? 100;
  const lives = Math.max(0, Math.min(3, runtime?.lives ?? 3));
  const status = runtime?.status ?? (runtime?.paused ? "paused" : "idle");
  const showStartOverlay = status === "idle" || status === "gameOver";
  const playerLane = Math.max(0, Math.min(2, runtime?.player?.lane ?? 1));
  const playerProgress = Math.max(0, Math.min(12, runtime?.player?.position ?? 0));
  const playerLeft = `${20 + playerLane * 30}%`;
  const playerTop = `${82 - playerProgress * 5}%`;
  const obstaclePositions = runtime?.obstacles ?? [];
  const shardPositions = runtime?.shards ?? [];

  const laneLeft = (lane = 1) => `${20 + Math.max(0, Math.min(2, lane)) * 30}%`;
  const trackTop = (position = 0) => `${82 - Math.max(0, Math.min(12, position)) * 5}%`;

  return (
    <>
      {/* The Void & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-container to-background z-0"></div>
      <div className="absolute inset-0 grid-bg z-0"></div>
      <div className="absolute inset-0 scanline z-50 pointer-events-none opacity-30"></div>
      {/* TopAppBar HUD */}
      <header className="bg-transparent flex justify-between items-start gap-sm px-margin-mobile md:px-margin-desktop pt-sm w-full z-50 fixed top-0 flat no shadows">
      <div className="flex min-w-0 items-center gap-sm md:gap-md">
      <h1 className="font-display-arcade-mobile text-display-arcade-mobile text-primary-fixed drop-shadow-[0_0_10px_rgba(0,220,229,0.8)] hidden md:block">MAGNETMAZE</h1>
      <h1 className="font-display-arcade-mobile text-headline-lg text-primary-fixed drop-shadow-[0_0_10px_rgba(0,220,229,0.8)] md:hidden">MM</h1>
      <div className="flex min-w-0 gap-xs md:gap-sm md:ml-lg bg-surface-container/20 backdrop-blur-xl border border-outline-variant/30 rounded-lg p-xs md:p-sm">
      <div className="flex flex-col items-center px-xs md:px-sm">
      <span className="font-label-caps text-label-caps text-outline">LVL</span>
      <span className="font-headline-md text-headline-md text-primary-fixed">01</span>
      </div>
      <div className="w-px bg-outline-variant/50"></div>
      <div className="flex min-w-0 flex-col items-center px-xs md:px-sm">
      <span className="font-label-caps text-label-caps text-outline">SCORE</span>
      <span className="max-w-16 truncate font-headline-md text-headline-md text-primary-fixed md:max-w-none">{score}</span>
      </div>
      </div>
      </div>
      <div className="flex min-w-0 flex-col items-end gap-xs md:flex-row md:items-center md:gap-lg">
      <div className="flex gap-[2px] md:gap-xs">
      {Array.from({ length: 3 }, (_, index) => (
      <Heart key={index} style={{fontVariationSettings: "'FILL' 1"}} className={index < lives ? "h-5 w-5 text-secondary-container drop-shadow-[0_0_5px_rgba(255,36,228,0.8)] md:h-6 md:w-6" : "h-5 w-5 text-outline-variant/40 drop-shadow-[0_0_5px_rgba(255,36,228,0.8)] md:h-6 md:w-6"} aria-hidden={true} focusable="false" />
      ))}
      </div>
      <div className="flex items-center gap-xs bg-surface-container/20 backdrop-blur-xl border border-outline-variant/30 rounded-full px-sm py-xs md:px-md">
      <Bolt  style={{fontVariationSettings: "'FILL' 1"}} className="h-5 w-5 text-tertiary-fixed drop-shadow-[0_0_5px_rgba(183,247,0,0.8)] md:h-6 md:w-6" aria-hidden={true} focusable="false" />
      <span className="font-headline-md text-headline-md text-tertiary-fixed">{energy}</span>
      <span className="hidden font-headline-md text-headline-md text-tertiary-fixed sm:inline">/100</span>
      </div>
      <div className="flex gap-xs md:gap-sm">
      <button className="p-xs text-outline-variant hover:text-primary-fixed hover:drop-shadow-[0_0_8px_rgba(0,220,229,0.6)] transition-colors" type="button" aria-label="Restart Alt" data-action-id="restart-alt-1" onClick={actions?.["restart-alt-1"]}>
      <RotateCcw aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-outline-variant hover:text-primary-fixed hover:drop-shadow-[0_0_8px_rgba(0,220,229,0.6)] transition-colors" type="button" aria-label="Pause" data-action-id="pause-2" onClick={actions?.["pause-2"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-outline-variant hover:text-primary-fixed hover:drop-shadow-[0_0_8px_rgba(0,220,229,0.6)] transition-colors" type="button" aria-label="Settings" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* Playfield Center */}
      <main className="absolute inset-0 flex items-center justify-center z-10 pt-xl">
      {/* Aspect Ratio Container for Maze */}
      <div className="relative w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] md:w-[716px] md:h-[716px] bg-surface-container/20 backdrop-blur-md border border-outline-variant/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,220,229,0.1)]">
      {/* Maze Structure (Simplified Abstraction) */}
      <div className="absolute inset-0 p-lg">
      {/* Outer Walls */}
      <div className="absolute top-md left-md right-md h-2 bg-surface-tint/50 neon-glow-cyan rounded-full"></div>
      <div className="absolute bottom-md left-md right-md h-2 bg-surface-tint/50 neon-glow-cyan rounded-full"></div>
      <div className="absolute top-md bottom-md left-md w-2 bg-surface-tint/50 neon-glow-cyan rounded-full"></div>
      <div className="absolute top-md bottom-md right-md w-2 bg-surface-tint/50 neon-glow-cyan rounded-full"></div>
      {/* Inner Walls */}
      <div className="absolute top-1/4 left-1/4 right-1/2 h-2 bg-surface-tint/30 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 bottom-1/4 w-2 bg-surface-tint/30 rounded-full"></div>
      {/* Moving Hazard */}
      <div className="absolute top-1/3 right-1/4 w-2 h-1/4 bg-error-container neon-glow-magenta rounded-full animate-pulse"></div>
      {obstaclePositions.map((obstacle, index) => (
      <div key={`obstacle-${index}`} className="absolute w-2 h-12 bg-error-container neon-glow-magenta rounded-full animate-pulse" style={{ left: laneLeft(obstacle.lane), top: trackTop(obstacle.position) }}></div>
      ))}
      {/* Collectible Core */}
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-tertiary-fixed rounded-full drop-shadow-[0_0_15px_rgba(183,247,0,0.8)] animate-bounce flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      {shardPositions.map((shard, index) => (
      <div key={`shard-${index}`} className="absolute w-6 h-6 bg-tertiary-fixed rounded-full drop-shadow-[0_0_15px_rgba(183,247,0,0.8)] animate-bounce flex items-center justify-center" style={{ left: laneLeft(shard.lane), top: trackTop(shard.position) }}>
      <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      ))}
      {/* Exit Portal */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 border-4 border-dashed border-white rounded-full animate-spin flex items-center justify-center drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
      <div className="w-6 h-6 bg-white/50 rounded-full blur-sm"></div>
      </div>
      {/* Player Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-surface-tint rounded-full animate-glow-pulse-cyan flex items-center justify-center z-20 transition-colors duration-300" style={{ left: playerLeft, top: playerTop }}>
      <div className="w-4 h-4 bg-white rounded-full blur-[2px]"></div>
      </div>
      </div>
      {/* Start Game Overlay */}
      {showStartOverlay ? (
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-30">
                      <button className="bg-primary-container text-on-primary-container font-headline-lg text-headline-lg px-xl py-md rounded-full neon-glow-cyan hover:scale-105 transition-transform" type="button" data-action-id="start-game-4" onClick={actions?.["start-game-4"]}>{status === "gameOver" ? "RESTART GAME" : "START GAME"}</button>
                  </div>
      ) : null}
      </div>
      </main>
      {/* Bottom Controls (Polarity Toggle) */}
      <div className="absolute bottom-lg left-1/2 z-50 flex w-[min(12rem,calc(100vw-2rem))] -translate-x-1/2 flex-col items-center gap-sm">
      <span className="font-label-caps text-label-caps text-outline tracking-widest">POLARITY</span>
      {/* Toggle Container */}
      <button className="relative h-12 w-full bg-surface-container-highest rounded-full border border-outline-variant/50 p-1 flex cursor-pointer shadow-inner overflow-hidden" type="button" aria-label={`Toggle polarity, currently ${polarity}`} aria-pressed={polarity === "repel"} onClick={() => setPolarity((current) => current === "repel" ? "attract" : "repel")}>
      {/* Background Indicator (Active State) */}
      <div className={polarity === "repel" ? "absolute inset-y-0 right-0 w-1/2 bg-secondary-container/20 rounded-r-full pointer-events-none transition-colors duration-300" : "absolute inset-y-0 left-0 w-1/2 bg-secondary-container/20 rounded-l-full pointer-events-none transition-colors duration-300"}></div>
      {/* Labels */}
      <div className={polarity === "attract" ? "flex-1 flex items-center justify-center z-10 font-label-caps text-label-caps text-white font-bold drop-shadow-[0_0_5px_rgba(255,36,228,0.8)]" : "flex-1 flex items-center justify-center z-10 font-label-caps text-label-caps text-outline"}>ATTRACT</div>
      <div className={polarity === "repel" ? "flex-1 flex items-center justify-center z-10 font-label-caps text-label-caps text-white font-bold drop-shadow-[0_0_5px_rgba(255,36,228,0.8)]" : "flex-1 flex items-center justify-center z-10 font-label-caps text-label-caps text-outline"}>REPEL</div>
      {/* Thumb / Puck */}
      <div className={polarity === "repel" ? "absolute top-1 right-1 w-[calc(50%-4px)] h-10 bg-secondary-container rounded-full animate-glow-pulse-magenta border border-white/30 z-20 transition-colors duration-300 flex items-center justify-center" : "absolute top-1 left-1 w-[calc(50%-4px)] h-10 bg-secondary-container rounded-full animate-glow-pulse-magenta border border-white/30 z-20 transition-colors duration-300 flex items-center justify-center"}>
      <RadioTower  style={{fontVariationSettings: "'FILL' 1"}} className="text-white text-sm" aria-hidden={true} focusable="false" />
      </div>
      </button>
      </div>
    </>
  );
}
