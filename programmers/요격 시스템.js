function solution(targets) {
  let result = 1;
  targets.sort((a, b) => (a[0] === b[0] ? b[0] - a[0] : a[0] - b[0]));
  let end = targets[0][1];
  for (let i = 1; i < targets.length; i++) {
    if (end > targets[i][0]) {
      if (end > targets[i][1]) end = targets[i][1];
    } else {
      result++;
      end = targets[i][1];
    }
  }
  return result;
}

let input = [
  // TC: 1
  [
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
