// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const select = nums.length / 2;
  let numsSet = new Set(nums);
  if (numsSet.size <= select) {
    return numsSet.size;
  } else {
    return select;
  }
}

let input = [
  // TC: 1
  [3, 1, 2, 3],
  // TC: 2
  [3, 3, 3, 2, 2, 4],

  [3, 3, 3, 2, 2, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
