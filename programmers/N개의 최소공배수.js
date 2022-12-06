function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}

function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}

let input = [
  // TC: 1
  [2, 6, 8, 14],
  // TC: 2
  [1, 2, 3],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
