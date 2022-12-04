function solution(n) {
  let f1 = 0;
  let f2 = 1;
  const MOD = 1_234_567;

  for (let i = 2; i <= n; i++) {
    answer = (f1 + f2) % MOD;
    f1 = f2;
    f2 = answer;
  }

  return answer;
}

let input = [
  // TC: 1
  3,
  // TC: 2
  5,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
