function solution(n) {
  // 시간초과
  // const MOD = 1_000_000_007;
  // if (n === 0) return 0;
  // else if (n === 1) return 1;
  // else if (n === 2) return 2;
  // else return (solution(n - 1) + solution(n - 2)) % MOD;

  const MOD = 1_000_000_007;
  const dp = [0, 1, 2];
  if (n > 2) {
    for (let i = 3; i <= n; i++) {
      dp.push((dp[i - 1] + dp[i - 2]) % MOD);
    }
  }
  return dp[n];
}

let input = [
  // TC: 1
  4,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
