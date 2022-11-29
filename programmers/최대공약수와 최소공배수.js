function solution(n, m) {
  const gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m));
  const lcm = (n, m) => (n * m) / gcd(n, m);

  return [gcd(n, m), lcm(n, m)];
}

let input = [
  // TC: 1
  [3, 12],
  // TC: 2
  [2, 5],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
