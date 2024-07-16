export const solution = (n: number, memo: Map<number, number>): number => {
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;
  const memoV = memo.get(n);
  if (memoV !== undefined) {
    return memoV;
  }
  const v = solution(n - 1, memo) + solution(n - 2, memo) + solution(n - 3, memo);
  memo.set(n,v);
  return v
};

const memo = new Map()
for (let i = 0; i < 100; i++) {
  const t = solution(i,memo);
  console.log(t);
}
