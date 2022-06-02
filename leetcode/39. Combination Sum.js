// https://leetcode.com/problems/combination-sum/

var combinationSum = function (candidates, target) {
  let output = [];
  let temp = [];
  comb(temp, 0);
  return output;

  function comb(arr, startIdx) {
    if (getSum(arr) === target) {
      const arrCopy = arr.slice();
      return output.push(arrCopy);
    } else if (getSum(arr) >= target) {
      return;
    }

    for (let i = startIdx; i < candidates.length; i++) {
      arr.push(candidates[i]);

      if (getSum(arr) <= target) {
        comb(arr, i);
        arr.pop();
      } else {
        arr.pop();
      }
    }
  }
};

const getSum = (arr) => {
  return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b);
};
