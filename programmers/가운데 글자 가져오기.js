function solution(s) {
  return s.length % 2
    ? s[parseInt(s.length / 2)]
    : s[s.length / 2 - 1] + s[s.length / 2];
}

let input = [
  // TC: 1
  "abcde",
  // TC: 2
  "qwer",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
