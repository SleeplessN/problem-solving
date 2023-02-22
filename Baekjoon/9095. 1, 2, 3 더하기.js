const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const count = +input.shift();
  const list = input.map((n) => +n);
  const maxNum = Math.max(...list);
  const result = [];

  const dp = new Array(maxNum + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i <= maxNum; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }

  for (let i = 0; i < list.length; i++) {
    console.log(dp[list[i]]);
  }
}
solution();
