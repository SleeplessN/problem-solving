// https://leetcode.com/problems/longest-consecutive-sequence/submissions/

var longestConsecutive = function (nums) {
  let count = 1;
  let maxCount = 0;
  nums.sort((a, b) => a - b);
  // 중복된 숫자 제거
  nums = [...new Set(nums)];
  // 연속된 숫자 체크
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i] + 1) {
      count++;
    } else {
      count = 1;
    }
    if (maxCount < count) {
      maxCount = count;
    }
  }
  return maxCount;
};
