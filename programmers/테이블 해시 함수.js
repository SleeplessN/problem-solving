function solution(data, col, row_begin, row_end) {
  let result = 0;

  const sortData = data.sort((a, b) => {
    if (a[col - 1] > b[col - 1]) return 1;
    else if (a[col - 1] === b[col - 1]) return b[0] - a[0];
    else return -1;
  });
  for (let i = row_begin; i <= row_end; i++) {
    result ^= sortData[i - 1]
      .map((a) => a % i)
      .reduce((acc, cur) => acc + cur, 0);
  }
  return result;
}

let input = [
  // TC: 1
  [
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3,
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(
    `#${i + 1} ${solution(input[i][0], input[i][1], input[i][2], input[i][3])}`
  );
}
