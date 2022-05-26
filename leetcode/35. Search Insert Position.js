function solution(nums, target) {
  let count = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      --count;
      if (count === 0) {
        return nums.length;
      }
    } else if (nums[i] >= target) {
      return i;
    }
  }
}

let input = [
  // TC: 1
  [[1, 3, 5, 6], 5],
  // TC: 2
  [[1, 3, 5, 6], 2],
  [[1, 3, 5, 6], 7],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
