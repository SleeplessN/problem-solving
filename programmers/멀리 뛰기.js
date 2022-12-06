function solution(n) {
  if (n < 2) return 1;
  const count = [0, 1, 2, ...Array(n - 2).fill(0)];
  count.forEach((_, i) => {
    if (i > 2) count[i] = (count[i - 2] + count[i - 1]) % 1234567;
  });
  return count[n];
}

let input = [
  // TC: 1
  4,
  // TC: 2
  3,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
