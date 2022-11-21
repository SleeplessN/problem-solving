function solution(a, b) {
  let result = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    result += i;
  }
  return result;
}

let input = [
  // TC: 1
  [3, 5],
  // TC: 2
  [3, 3],
  [5, 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
