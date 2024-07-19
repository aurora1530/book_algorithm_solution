import { Graph } from './type';

export const dfs = (G: Graph, s: number, seen: boolean[]) => {
  const queue: number[] = [];

  seen[s] = true;
  queue.push(s);

  while (queue.length !== 0) {
    const head = queue.shift();
    if (head === undefined) break;

    for (const child of G[head]) {
      if (seen[child]) continue;

      seen[child] = true;
      queue.push(child);
    }
  }
};

export const solution = (G: Graph, s: number, t: number) => {
  const N = G.length;

  const seen: boolean[] = Array.from({ length: N }, () => false);

  dfs(G, s, seen);

  return seen[t];
};
