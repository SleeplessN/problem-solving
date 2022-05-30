// https://leetcode.com/problems/subsets/

var subsets = function (nums) {
  let output = [];
  let temp = [];

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

  for (i = 0; i <= nums.length; i++) {
    combination(nums, temp, 0, 0, i);
  }

  return output;
};
