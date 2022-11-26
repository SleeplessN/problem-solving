function solution(arr, divisor) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      result.push(arr[i]);
    }
  }

  return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}

let input = [
  // TC: 1
  [[5, 9, 7, 10], 5],
  // TC: 2
  [[2, 36, 1, 3], 1],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
