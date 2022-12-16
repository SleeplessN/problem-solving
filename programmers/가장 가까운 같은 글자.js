function solution(s) {
  const stack = [];
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.includes(s[i])) {
      result.push(-1);
      stack.push(s[i]);
    } else {
      result.push(stack.length - stack.lastIndexOf(s[i]));
      stack.push(s[i]);
    }
  }

  return result;
}

let input = [
  // TC: 1
  "banana",
  // TC: 2
  "foobar",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
