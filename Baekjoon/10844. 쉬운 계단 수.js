const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution() {
  const MOD = 1_000_000_000;
  const dp = [];
  dp[0] = [];
  dp[1] = new Array(10).fill(1);
  dp[1][0] = 0;
  for (let i = 1; i < +input; i++) {
    dp[i + 1] = new Array(10).fill(0);
    dp[i + 1][1] += dp[i][0] % MOD;
    for (var j = 1; j < dp[i].length - 1; j++) {
      dp[i + 1][j - 1] += dp[i][j] % MOD;
      dp[i + 1][j + 1] += dp[i][j] % MOD;
    }
    dp[i + 1][8] += dp[i][9] % MOD;
  }

  console.log(dp[+input].reduce((a, b) => a + b, 0) % MOD);
}
solution();
