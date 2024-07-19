import { Graph } from './type';

export const dfs = (G: Graph, s: number, seen: boolean[]) => {
  seen[s] = true;

  for (const child of G[s]) {
    if (seen[child]) continue;

    dfs(G, child, seen);
  }
};

export const solution = (G: Graph) => {
  const N = G.length;

  const seen: boolean[] = Array.from({ length: N }, () => false);

  let count = 0;

  for (let i = 0; i < N; i++) {
    if (seen[i]) continue;

    dfs(G, i, seen);
    count++;
  }

  return count;
};
