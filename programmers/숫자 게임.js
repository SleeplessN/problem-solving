function solution(A, B) {
  let result = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (const a of A) {
    const max = B[B.length - 1];
    if (a < max) {
      result++;
      B.pop();
    }
  }

  return result;
}

let input = [
  // TC: 1
  [
    [5, 1, 3, 7],
    [2, 2, 6, 8],
  ],
  // TC: 2
  [
    [2, 2, 2, 2],
    [1, 1, 1, 1],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
