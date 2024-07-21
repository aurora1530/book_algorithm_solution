const INF = Number.POSITIVE_INFINITY;

type Edge = {
  to: number;
  weight: number;
};

type Graph = Edge[][];

const minCheck = (a: number, b: number): [number, boolean] => {
  const aIsMin = Math.min(a, b) === a;
  return [aIsMin ? a : b, aIsMin];
};

const bellmanFord = (G: Graph, s: number): number[] | undefined => {
  let existNegativeCircle = false;

  const dist = Array.from({ length: G.length }, () => INF);
  dist[s] = 0;

  for (let iterator = 0; iterator < G.length; iterator++) {
    let doesUpdate = false;

    for (let v = 0; v < G.length; v++) {
      if (dist[v] === INF) continue;

      for (const edge of G[v]) {
        [dist[edge.to], doesUpdate] = minCheck(dist[edge.to], dist[v] + edge.weight);
      }
    }

    if (!doesUpdate) break;

    if (iterator === G.length - 1 && doesUpdate) existNegativeCircle = true;
  }

  return existNegativeCircle ? undefined : dist;
};
