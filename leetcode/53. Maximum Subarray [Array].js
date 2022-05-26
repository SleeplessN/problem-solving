function solution(nums) {
  let maxsum = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    console.log(sum);

    maxsum = Math.max(sum, maxsum);
  }

  return maxsum;
}

let input = [
  // TC: 1
  [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  // TC: 2
  [1],

  [5, 4, -1, 7, 8],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
