export const solution = (
  input: {
    a: number;
    b: number;
    c: number;
  }[]
): number => {
  const dp = Array.from({ length: input.length }, () =>
    Array.from({ length: 3 }, () => 0)
  );

  dp[0][0] = input[0].a;
  dp[0][1] = input[0].b;
  dp[0][2] = input[0].c;

  for (let i = 1; i < input.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0] + input[i].b, dp[i - 1][0] + input[i].c);
    dp[i][1] = Math.max(dp[i - 1][1] + input[i].a, dp[i - 1][0] + input[i].c);
    dp[i][2] = Math.max(dp[i - 1][2] + input[i].a, dp[i - 1][0] + input[i].b);
  }

  const tail = dp[dp.length - 1];
  return Math.max(tail[0], tail[1], tail[2]);
};
