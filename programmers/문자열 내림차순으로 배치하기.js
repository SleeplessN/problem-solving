function solution(s) {
  return s.split("").sort().reverse().join("");
}

let input = [
  // TC: 1
  "Zbcdefg",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
