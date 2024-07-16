let counter = 0;

export const solution = (k: number, currentN: number, useFlag: number) => {
  if (currentN > k) return;
  if (useFlag === 0b111) counter++;

  solution(k, currentN * 10 + 7, useFlag | 0b001);
  solution(k, currentN * 10 + 5, useFlag | 0b010);
  solution(k, currentN * 10 + 3, useFlag | 0b100);
};

