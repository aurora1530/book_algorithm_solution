export const solution = (A: number[], B: number[], K: number): boolean => {
  const setA = new Set(A);
  const setB = new Set(B);

  for (const a of setA) {
    const can = setB.has(K - a);
    if (can) return true;
  }

  return false;
};
