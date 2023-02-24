const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const n = input.shift();
  const cards = input.shift().split(" ").map(Number);
  const dp = [0, ...cards];

  for (let i = 2; i < dp.length; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + dp[j]);
    }
  }
  console.log(dp[n]);
}
solution();
