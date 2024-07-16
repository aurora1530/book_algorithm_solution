const solution = (K: number, N: number): number => {
  let count = 0;

  for (let x = 0; x <= Math.min(K, N); x++) {
    for (let y = 0; x + y <= Math.min(K, N); y++) {
      const z = N - (x + y);
      if (z >= 0 && z <= K) count++;
    }
  }

  return count;
};
