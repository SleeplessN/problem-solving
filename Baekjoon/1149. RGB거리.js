const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const N = +input.shift();
  const list = input.map((arr) => arr.split(" ").map((n) => +n));

  for (let i = 1; i < N; i++) {
    list[i][0] += Math.min(list[i - 1][1], list[i - 1][2]);
    list[i][1] += Math.min(list[i - 1][0], list[i - 1][2]);
    list[i][2] += Math.min(list[i - 1][0], list[i - 1][1]);
  }
  console.log(Math.min(...list[N - 1]));
}
solution();
