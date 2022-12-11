function solution(n) {
  let result = 0;
  while (n > 0) {
    result += n % 2;
    n = Math.floor(n / 2);
  }
  return result;
}

let input = [
  // TC: 1
  5,
  // TC: 2
  6,

  5000,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
