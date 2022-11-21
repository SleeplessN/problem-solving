function solution(x, n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}

let input = [
  // TC: 1
  [2, 5],
  // TC: 2
  [4, 3],
  [-4, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
