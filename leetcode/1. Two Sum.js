// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    t = nums.indexOf(target - nums[i]);
    if (t !== -1 && t !== i) {
      return [i, t];
    }
  }
};
