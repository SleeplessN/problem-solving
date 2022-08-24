const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution() {
  if (+input < 100) {
    console.log(+input);
    return;
  }

  let count = 99;
  for (let i = 100; i <= +input; i++) {
    if (diffCheck(i)) count++;
  }
  console.log(count);
}
function diffCheck(num) {
  num = num.toString().split("");
  const diff = num[0] - num[1];
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] - num[i + 1] !== diff) return false;
  }
  return true;
}
solution();
