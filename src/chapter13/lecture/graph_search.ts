import { Graph, sampleGraph } from './type';

export const search = (G: Graph, s: number) => {
  const N = G.length;

  const seen = Array.from({ length: N }, () => false);
  const stack: number[] = [];

  seen[s] = true;
  stack.push(s);

  while (stack.length !== 0) {
    const tail = stack.pop();
    if (tail === undefined) break;

    for (const child of G[tail]) {
      if (seen[child]) continue;
      seen[child] = true
      stack.push(child);
    }
  }
};


search(sampleGraph, 0);
