function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

let input = [
  // TC: 1
  3,
  // TC: 2
  4,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
