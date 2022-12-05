function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0 && i % 2 == 1) result++;
  }
  return result;
}

let input = [
  // TC: 1
  15,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
