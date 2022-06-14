function solution(nums1, nums2) {
  let result = [];
  let tmp;
  for (let i = 0; i < nums1.length; i++) {
    let numsTwo = nums2.indexOf(nums1[i]);
    tmp = -1;
    for (let j = 1; j < nums2.length - numsTwo; j++) {
      if (nums2[numsTwo] < nums2[numsTwo + j]) {
        tmp = nums2[numsTwo + j];
        break;
      }
    }
    result.push(tmp);
  }
  return result;
}

let input = [
  // TC: 1
  [
    [4, 1, 2],
    [1, 3, 4, 2],
  ],
  // TC: 2
  [
    [2, 4],
    [1, 2, 3, 4],
  ],
  [
    [1, 3, 5, 2, 4],
    [6, 5, 4, 3, 2, 1, 7],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
