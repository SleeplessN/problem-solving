var solution = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

let input = [
  // TC: 1
  [1, 1, 2],
  // TC: 2
  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],

  [0, 1, 2, 2, 3, 4, 5, 5, 7, 7, 7, 8, 8, 9, 9, 9],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
