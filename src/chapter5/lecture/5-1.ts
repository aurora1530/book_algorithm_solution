export const solution = (heights: number[]): number => {
  const dp: number[] = [0, heights[1] - heights[0]];

  for (let i = 2; i < heights.length; i++) {
    const step1Cost = Math.abs(heights[i] - heights[i - 1]) + dp[i - 1];
    const step2Cost = Math.abs(heights[i] - heights[i - 2]) + dp[i - 2];

    dp[i] = Math.min(step1Cost, step2Cost);
  }

  return dp[dp.length - 1];
};

const test = [2, 9, 4, 5, 1, 6, 10];
console.log(solution(test));
