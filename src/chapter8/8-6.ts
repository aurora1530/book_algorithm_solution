export const solution = (A: number[], B: number[]) => {
  const aValuesToCount: Map<number, number> = new Map();

  for (let i = 0; i < A.length; i++) {
    const currentCount = aValuesToCount.get(A[i]) ?? 0;
    aValuesToCount.set(A[i], currentCount + 1);
  }

  let count = 0;
  for (let i = 0; i < B.length; i++) {
    const currentCount = aValuesToCount.get(B[i]);
    if (currentCount === undefined || currentCount <= 0) continue;

    aValuesToCount.set(B[i], currentCount - 1);
    count++;
  }

  return count;
};
