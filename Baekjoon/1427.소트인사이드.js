const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution() {
  function sort(number) {
    let answer = "";
    answer = Number(
      number
        .toString()
        .split("")
        .sort((a, b) => b - a)
        .join("")
    );

    return answer;
  }

  console.log(sort(input));
}
solution();
