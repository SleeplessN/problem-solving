// https://leetcode.com/problems/find-the-difference-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let result = [];
  let tmp = [];
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];
  // nums 1
  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i])) tmp.push(nums1[i]);
  }
  result.push(tmp);
  tmp = [];
  // nums 2
  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i])) tmp.push(nums2[i]);
  }
  result.push(tmp);
  return result;
};
