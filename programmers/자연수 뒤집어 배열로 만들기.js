function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((n) => +n);
}

let input = [
  // TC: 1
  12345,
  // TC: 2
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
