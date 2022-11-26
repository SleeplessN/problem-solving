function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);

  return arr.length === 0 ? [-1] : arr;
}

let input = [
  // TC: 1
  [4, 3, 2, 1],
  // TC: 2
  [10],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
