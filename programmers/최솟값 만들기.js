function solution(A, B) {
  let result = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    result += A[i] * B[i];
  }
  return result;
}

let input = [
  // TC: 1
  [
    [1, 4, 2],
    [5, 4, 4],
  ],
  // TC: 2
  [
    [1, 2],
    [3, 4],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
