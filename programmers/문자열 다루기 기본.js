function solution(s) {
  return s.search(/\D/g) < 0 && (s.length === 4 || s.length === 6);
}

let input = [
  // TC: 1
  "a234",
  // TC: 2
  "1234",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
