// https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {
  if (arr.length == 1) return arr[0];
  let result = -Infinity;
  let noDelete = [];
  let oneDelete = [];

  noDelete.push(arr[0]);
  oneDelete.push(0);

  for (let i = 1; i < arr.length; i++) {
    noDelete[i] = Math.max(noDelete[i - 1] + arr[i], arr[i]);
    oneDelete[i] = Math.max(noDelete[i - 1], oneDelete[i - 1] + arr[i]);

    result = Math.max(result, noDelete[i], oneDelete[i]);
  }

  return result;
};
