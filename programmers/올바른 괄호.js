// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  let stack = [];
  if (s[0] === ")" || s.length % 2 === 1) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else if (s[i] === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  if (stack.length !== 0) return false;
  return true;
}

let input = [
  // TC: 1
  "()()",
  // TC: 2
  "(())()",
  ")()(",
  "(()(",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
