export const solution = (n: number): number => {
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;
  return solution(n - 1) + solution(n - 2) + solution(n - 3);
};

for (let i = 0; i < 100; i++) {
  const t = solution(i);
  console.log(t);
}
