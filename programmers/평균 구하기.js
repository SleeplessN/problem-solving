function solution(arr) {
  return arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
}

let input = [
  // TC: 1
  [1, 2, 3, 4],
  // TC: 2
  [5, 5],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
