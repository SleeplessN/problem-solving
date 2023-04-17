function solution(expression) {
  const prior = [
    ["-", "*", "+"],
    ["-", "+", "*"],
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["+", "-", "*"],
    ["+", "*", "-"],
  ];
  const result = [];

  for (let res of prior) {
    const temp = expression.split(/(\D)/);
    for (let exp of res) {
      while (temp.includes(exp)) {
        const idx = temp.indexOf(exp);
        temp.splice(idx - 1, 3, eval(temp.slice(idx - 1, idx + 2).join("")));
      }
    }
    result.push(Math.abs(temp[0]));
  }
  return Math.max(...result);
}

let input = [
  // TC: 1
  "100-200*300-500+20",
  // TC: 2
  "50*6-3*2",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
