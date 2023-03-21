function solution(x, y, n) {
  if (x >= y) return 0;

  const dp = Array(y + 1).fill(Infinity);
  dp[x] = 0;

  for (let i = x + 1; i <= y; i++) {
    if (x <= i - n) dp[i] = Math.min(dp[i], dp[i - n] + 1);
    if (i % 2 === 0 && x <= i / 2) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0 && x <= i / 3) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return dp[y] === Infinity ? -1 : dp[y];
}

let input = [
  // TC: 1
  [10, 40, 5],
  // TC: 2
  [10, 40, 30],
  // TC: 3
  [2, 5, 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
