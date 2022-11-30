function solution(d, budget) {
  d.sort((a, b) => a - b);
  let result = 0;
  let left = budget;

  for (let i = 0; i < d.length; i++) {
    if (left < d[i]) return result;
    left -= d[i];
    result++;
  }
  return result;
}

let input = [
  // TC: 1
  [[1, 3, 2, 5, 4], 9],
  // TC: 2
  [[2, 2, 3, 3], 10],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
