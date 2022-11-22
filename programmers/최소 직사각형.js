function solution(sizes) {
  const maxWidth = Math.max(...sizes.map((card) => Math.min(...card)));
  const maxHeight = Math.max(...sizes.map((card) => Math.max(...card)));
  return maxWidth * maxHeight;
}

let input = [
  // TC: 1
  [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ],
  // TC: 2
  [
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ],

  [
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
