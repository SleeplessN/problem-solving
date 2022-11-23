function solution(s) {
  let result = 0;
  const sArr = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (isCorrectBracket(sArr)) result++;
    sArr.push(sArr.shift());
  }
  return result;
}

function isCorrectBracket(bracket) {
  const stack = [];
  const openBracket = {
    "(": 0,
    "{": 1,
    "[": 2,
  };
  const closeBracket = {
    ")": 0,
    "}": 1,
    "]": 2,
  };

  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === "(" || bracket[i] === "[" || bracket[i] === "{") {
      stack.push(bracket[i]);
    } else {
      if (closeBracket[bracket[i]] === openBracket[stack[stack.length - 1]])
        stack.pop();
      else return false;
    }
  }
  return stack.length === 0 ? true : false;
}

let input = [
  // TC: 1
  "[](){}",
  // TC: 2
  "}]()[{",
  // TC: 3
  "[)(]",
  // TC: 4
  "}}}",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
