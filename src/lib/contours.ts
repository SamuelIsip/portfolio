/*
 * Contour lines of a made-up terrain, computed at build time with marching squares
 * so the page ships plain SVG paths and no script. The terrain loosely follows the
 * Sierra de Altomira: a long ridge running across the frame with a few knolls.
 */

export const FRAME = { width: 1600, height: 1000 };
const CELL = 25;
const LEVELS = 16;
/** Every INDEX-th line is drawn stronger, as on survey maps. */
const INDEX = 4;

type Point = [number, number];

function height(x: number, y: number): number {
  const u = x / FRAME.width;
  const v = y / FRAME.height;
  const bump = (cx: number, cy: number, rx: number, ry: number, h: number) =>
    h * Math.exp(-(((u - cx) / rx) ** 2) - ((v - cy) / ry) ** 2);
  // Ridge whose crest drifts down to the right and rises and falls along its length.
  const crest = 0.6 + 0.16 * (u - 0.5) + 0.05 * Math.sin(u * 7.3);
  const ridge = Math.exp(-(((v - crest) / 0.17) ** 2)) * (0.6 + 0.4 * Math.sin(u * 5.1 + 0.4));
  // Unrelated frequencies keep the wobble from looking periodic.
  const wobble =
    0.07 * Math.sin(u * 13.7 + v * 4.1) + 0.05 * Math.sin(v * 11.3 - u * 7.9 + 1.7) + 0.03 * Math.sin(u * 29.3 + v * 17.1);
  return ridge + bump(0.83, 0.88, 0.13, 0.17, 0.75) + bump(0.18, 0.95, 0.11, 0.13, 0.5) + bump(0.5, 0.25, 0.1, 0.12, 0.3) + wobble;
}

/** Segments where `level` crosses each grid cell, keyed by the grid edge each end lies on. */
function trace(grid: number[][], level: number) {
  const points = new Map<string, Point>();
  const links = new Map<string, string[]>();
  const link = (a: string, b: string) => {
    links.set(a, [...(links.get(a) ?? []), b]);
    links.set(b, [...(links.get(b) ?? []), a]);
  };
  // Where the level crosses the grid edge between two nodes, or null if it doesn't.
  const cross = (key: string, x0: number, y0: number, x1: number, y1: number) => {
    const h0 = grid[y0][x0];
    const h1 = grid[y1][x1];
    if (h0 > level === h1 > level) return null;
    if (!points.has(key)) {
      const t = (level - h0) / (h1 - h0);
      points.set(key, [(x0 + t * (x1 - x0)) * CELL, (y0 + t * (y1 - y0)) * CELL]);
    }
    return key;
  };

  for (let j = 0; j < grid.length - 1; j++) {
    for (let i = 0; i < grid[0].length - 1; i++) {
      const top = cross(`h${i},${j}`, i, j, i + 1, j);
      const right = cross(`v${i + 1},${j}`, i + 1, j, i + 1, j + 1);
      const bottom = cross(`h${i},${j + 1}`, i, j + 1, i + 1, j + 1);
      const left = cross(`v${i},${j}`, i, j, i, j + 1);
      const hits = [top, right, bottom, left].filter((k): k is string => k !== null);
      if (hits.length === 2) link(hits[0], hits[1]);
      else if (hits.length === 4) {
        // Saddle: the cell centre decides which pair of opposite corners stays connected.
        const centre = (grid[j][i] + grid[j][i + 1] + grid[j + 1][i] + grid[j + 1][i + 1]) / 4;
        if (grid[j][i] > level === centre > level) {
          link(top!, right!);
          link(bottom!, left!);
        } else {
          link(left!, top!);
          link(right!, bottom!);
        }
      }
    }
  }
  return { points, links };
}

/** Chains the loose segments into polylines: open ones first (they end at the frame), then loops. */
function join({ points, links }: ReturnType<typeof trace>): Point[][] {
  const seen = new Set<string>();
  const walk = (start: string) => {
    const line = [start];
    seen.add(start);
    let current = start;
    for (;;) {
      const next = links.get(current)!.find((k) => !seen.has(k));
      if (!next) break;
      seen.add(next);
      line.push(next);
      current = next;
    }
    return line;
  };
  const lines: string[][] = [];
  for (const [key, neighbours] of links) if (neighbours.length === 1 && !seen.has(key)) lines.push(walk(key));
  for (const key of links.keys()) {
    if (seen.has(key)) continue;
    const loop = walk(key);
    lines.push([...loop, loop[0]]);
  }
  return lines.map((keys) => keys.map((k) => points.get(k)!));
}

const fmt = (n: number) => Math.round(n).toString();

/** Drops points that sit within `tolerance` px of the line through their neighbours (Ramer–Douglas–Peucker). */
function simplify(line: Point[], tolerance = 2.5): Point[] {
  if (line.length < 3) return line;
  const [ax, ay] = line[0];
  const [bx, by] = line[line.length - 1];
  const length = Math.hypot(bx - ax, by - ay);
  let worst = 0;
  let at = 0;
  for (let k = 1; k < line.length - 1; k++) {
    const [px, py] = line[k];
    const d = length === 0 ? Math.hypot(px - ax, py - ay) : Math.abs((bx - ax) * (ay - py) - (ax - px) * (by - ay)) / length;
    if (d > worst) [worst, at] = [d, k];
  }
  if (worst <= tolerance) return [line[0], line[line.length - 1]];
  return [...simplify(line.slice(0, at + 1), tolerance).slice(0, -1), ...simplify(line.slice(at), tolerance)];
}

/** Smooths a polyline by drawing quadratic curves through the midpoints of its segments. */
function toPath(line: Point[]): string {
  if (line.length < 3) return `M${line.map((p) => p.map(fmt).join(' ')).join('L')}`;
  const mid = (a: Point, b: Point) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2].map(fmt).join(' ');
  let d = `M${line[0].map(fmt).join(' ')}`;
  for (let k = 1; k < line.length - 1; k++) d += `Q${line[k].map(fmt).join(' ')} ${mid(line[k], line[k + 1])}`;
  return `${d}L${line[line.length - 1].map(fmt).join(' ')}`;
}

let cache: { regular: string; index: string } | undefined;

/** Two path strings: the regular contours and the stronger index contours. */
export function contours() {
  if (cache) return cache;
  const grid = Array.from({ length: FRAME.height / CELL + 1 }, (_, j) =>
    Array.from({ length: FRAME.width / CELL + 1 }, (_, i) => height(i * CELL, j * CELL)),
  );
  const flat = grid.flat();
  const lo = Math.min(...flat);
  const hi = Math.max(...flat);
  const regular: string[] = [];
  const index: string[] = [];
  for (let n = 1; n < LEVELS; n++) {
    const paths = join(trace(grid, lo + ((hi - lo) * n) / LEVELS))
      .filter((line) => line.length > 3)
      .map((line) => toPath(simplify(line)));
    (n % INDEX === 0 ? index : regular).push(...paths);
  }
  cache = { regular: regular.join(''), index: index.join('') };
  return cache;
}
