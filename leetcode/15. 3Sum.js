// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  let set = new Set();
  let result = [];

  if (nums.length < 3 || !nums.length) return [];

  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      let current = nums[i] + nums[start] + nums[end];
      if (current == 0) {
        let data = `${nums[i]}${nums[start]}${nums[end]}`;
        if (!set.has(data)) {
          set.add(data);
          result.push([nums[i], nums[start], nums[end]]);
        }
      }

      if (current > 0) {
        end--;
      } else if (current < 0) {
        start++;
      } else {
        start++;
        end--;
      }
    }
  }

  return result;
};
