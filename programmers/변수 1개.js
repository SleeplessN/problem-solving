function solution(n) {
  const number = [4, 1, 2];
  let result = "";

  while (n) {
    result = number[n % 3] + result;
    n = n % 3 == 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return result;
}

let input = [
  // TC: 1
  1,
  // TC: 2
  2,
  // TC: 3
  3,
  // TC: 4
  4,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
