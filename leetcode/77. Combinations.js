// https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let nums = [];
  let output = [];
  let temp = [];

  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  function combination(arr, data, s, idx, r) {
    if (s === r) {
      data = data.map((x) => x);
      output.push(data);
      return;
    }

    for (let i = idx; arr.length - i >= r - s; i++) {
      data[s] = arr[i];
      combination(arr, data, s + 1, i + 1, r);
    }
  }

  combination(nums, temp, 0, 0, k);

  return output;
};
