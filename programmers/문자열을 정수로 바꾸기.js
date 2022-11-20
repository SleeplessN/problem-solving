function solution(s) {
  return +s;
}

let input = [
  // TC: 1
  "1234",
  // TC: 2
  "-1234",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
