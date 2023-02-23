const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

function solution() {
  const [N, K] = input.map(Number);
  const dp = [];
  const MOD = 1_000_000_000;

  for (let i = 1; i <= K; i++) {
    dp[i] = new Array(N + 1).fill(i === 1 ? 1 : 0);
    dp[i][0] = 1;
  }

  for (let i = 2; i <= K; i++) {
    for (let j = 1; j <= N; j++) {
      dp[i][j] =
        dp[i - 1].slice(0, j + 1).reduce((acc, cur) => acc + cur, 0) % MOD;
    }
  }

  console.log(dp[K][N]);
}
solution();
