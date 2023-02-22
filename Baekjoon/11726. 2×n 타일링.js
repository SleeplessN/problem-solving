const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution() {
  const MOD = 10_007;
  const dp = new Array(+input + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= +input; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % MOD;
  }
  console.log(dp[+input]);
}
solution();
