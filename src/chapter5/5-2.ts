export const solution = (array: number[], W: number): boolean => {
  /**
   * [i][j]: 最初のi個を使って、総和をjにできるかどうかのboolean
   */
  const dp: boolean[][] = Array.from({ length: array.length + 1 }, () =>
    Array.from({ length: W + 1 }, () => false)
  );

  dp[0][0] = true;

  for (let i = 0; i < array.length; i++) {
    for (let w = 1; w <= W; w++) {
      if (i === 0) {
        if (array[i] === w) {
          dp[i][w] = true;
        }
      }
      // array[i]を使う場合
      const rest = w - array[i];
      if (rest === 0) {
        dp[i][w] = true;
      }
      if (rest > 0) {
        dp[i][w] ||= dp[i - 1][rest];
      }

      // array[i]を使わない場合
      dp[i][w] ||= dp[i - w][w];
    }
  }

  return dp[array.length][W];
};
