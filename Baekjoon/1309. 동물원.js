const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution() {
  const MOD = 9_901;
  const dp = [0, 3, 7];
  for (let i = 3; i <= input; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % MOD;
  }

  console.log(dp[input]);
}
solution();
