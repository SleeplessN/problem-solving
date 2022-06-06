// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  function permutation(arr, s, r) {
    if (s == r) {
      arr = arr.map((x) => x);
      result.push(arr);
      return;
    }

    for (let i = s; i < arr.length; i++) {
      [arr[s], arr[i]] = [arr[i], arr[s]];
      permutation(arr, s + 1, r);
      [arr[s], arr[i]] = [arr[i], arr[s]];
    }
  }
  permutation(nums, 0, nums.length);
  return result;
};
