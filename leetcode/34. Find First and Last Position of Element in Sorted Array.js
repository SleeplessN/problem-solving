function solution(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i);
    }
  }
  if (result.length === 0) {
    return [-1, -1];
  } else if (result.length === 1) {
    return [result[0], result[0]];
  } else {
    return [result[0], result[result.length - 1]];
  }
}

let input = [
  // TC: 1
  [[5, 7, 7, 8, 8, 10], 8],
  // TC: 2
  [[5, 7, 7, 8, 8, 10], 6],
  [[], 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
