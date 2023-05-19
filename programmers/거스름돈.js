function solution(n, money) {
  const dp = [1, ...Array(n + 1).fill(0)];

  for (let m of money) {
    for (let i = m; i <= n; i++) {
      dp[i] += dp[i - m] % 1000000007;
    }
  }
  return dp[n];
}

let input = [
  // TC: 1
  [5, [1, 2, 5]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
