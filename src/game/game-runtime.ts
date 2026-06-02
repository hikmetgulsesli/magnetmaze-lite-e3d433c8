export type MagnetMazeDifficulty = 'easy' | 'normal' | 'hard';

export interface MagnetMazeRuntime {
  player: { lane: number; position: number };
  obstacles: Array<{ lane: number; position: number }>;
  shards: Array<{ lane: number; position: number }>;
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
}

const difficultyEnergyCost: Record<MagnetMazeDifficulty, number> = {
  easy: 4,
  normal: 6,
  hard: 8,
};

export function createRuntime(level: number, difficulty: MagnetMazeDifficulty): MagnetMazeRuntime {
  const spacing = difficulty === 'easy' ? 5 : difficulty === 'hard' ? 3 : 4;
  return {
    player: { lane: 1, position: 0 },
    obstacles: Array.from({ length: 3 }, (_, index) => ({
      lane: (index + level) % 3,
      position: spacing + index * spacing,
    })),
    shards: Array.from({ length: 3 }, (_, index) => ({
      lane: (2 + index + level) % 3,
      position: 2 + index * spacing,
    })),
    score: 0,
    energy: 100,
    lives: 3,
    paused: false,
  };
}

export function advanceRuntime(runtime: MagnetMazeRuntime, difficulty: MagnetMazeDifficulty): MagnetMazeRuntime {
  if (runtime.paused || runtime.lives <= 0 || runtime.energy <= 0) {
    return runtime;
  }

  const nextPosition = runtime.player.position + 1;
  const hitObstacle = runtime.obstacles.some(
    (obstacle) => obstacle.lane === runtime.player.lane && obstacle.position === nextPosition,
  );
  const collectedShard = runtime.shards.some(
    (shard) => shard.lane === runtime.player.lane && shard.position === nextPosition,
  );
  const lives = Math.max(0, runtime.lives - (hitObstacle ? 1 : 0));
  const energy = Math.max(0, runtime.energy - difficultyEnergyCost[difficulty]);
  const score = runtime.score + 10 + (collectedShard ? 40 : 0);

  return {
    ...runtime,
    player: { ...runtime.player, position: nextPosition },
    shards: runtime.shards.filter(
      (shard) => !(shard.lane === runtime.player.lane && shard.position === nextPosition),
    ),
    score,
    energy,
    lives,
    paused: lives === 0 || energy === 0 ? true : runtime.paused,
  };
}

export function movePlayer(runtime: MagnetMazeRuntime, laneDelta: number): MagnetMazeRuntime {
  return {
    ...runtime,
    player: {
      ...runtime.player,
      lane: Math.min(2, Math.max(0, runtime.player.lane + laneDelta)),
    },
  };
}
