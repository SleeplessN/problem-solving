function solution(n, s) {
  if (n > s) return [-1];
  const mid = Math.floor(s / n);
  const result = new Array(n).fill(mid);

  for (let i = 0; i < s % n; i++) {
    result[result.length - 1 - i]++;
  }

  return result;
}

let input = [
  // TC: 1
  [2, 9],
  // TC: 2
  [2, 1],
  // TC: 3
  [2, 8],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
