function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

let input = [
  // TC: 1
  ["Jane", "Kim"],
  // TC: 2
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
