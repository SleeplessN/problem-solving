const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

function solution() {
  const day = +input[0];
  const night = +input[1];
  const totalHeigth = +input[2];
  console.log(Math.ceil((totalHeigth - night) / (day - night)));
}
solution();
