const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution() {
  let count = 1;
  let block = 1;

  while (block < +input) {
    block += 6 * count;
    count++;
  }
  console.log(count);
}
solution();
