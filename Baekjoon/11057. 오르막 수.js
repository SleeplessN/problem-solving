const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution() {
  const dp = [new Array(10).fill(1)];

  for (let i = 1; i < input; i++) {
    dp[i] = [1];
    for (let j = 1; j < 10; j++) {
      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 10007;
    }
  }

  const result = dp[input - 1].reduce((pre, cur) => pre + cur, 0);
  console.log(result % 10007);
}
solution();
