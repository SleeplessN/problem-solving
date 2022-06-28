// https://leetcode.com/problems/arithmetic-subarrays/

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  let result = [];
  for (let i = 0; i < l.length; i++) {
    let numSlice = nums.slice(l[i], r[i] + 1);
    if (isArithmetic(numSlice)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};

function isArithmetic(arr) {
  arr.sort((a, b) => a - b);
  let diff = arr[1] - arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) return false;
  }
  return true;
}
