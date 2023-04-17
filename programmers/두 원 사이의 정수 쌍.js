function solution(r1, r2) {
  let sum = 0;
  for (i = 1; i < r2; i++) {
    sum += Math.floor(Math.sqrt(Math.pow(r2, 2) - Math.pow(r2 - i, 2)));
    if (i < r1) {
      const inner = Math.sqrt(Math.pow(r1, 2) - Math.pow(r1 - i, 2));
      sum -= Math.floor(inner) + (Number.isInteger(inner) ? -1 : 0);
    }
  }
  return (sum + r2 - r1 + 1) * 4;
}

let input = [
  // TC: 1
  [[1, 2, 3, 4, 5], 2],
  // TC: 2
  [[5, 4, 3, 2, 1], 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
