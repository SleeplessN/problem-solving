function solution(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

let input = [
  // TC: 1
  [
    [1, 2, 3, 4],
    [-3, -1, 0, 2],
  ],
  // TC: 2
  [
    [-1, 0, 1],
    [1, 0, -1],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
