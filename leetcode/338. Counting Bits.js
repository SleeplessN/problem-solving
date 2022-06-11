// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let count;
  let answer = [];
  for (let i = 0; i <= n; i++) {
    let bin = i.toString(2);
    count = 0;
    for (let j = 0; j < bin.length; j++) {
      if (bin[j] == 1) count++;
    }
    answer.push(count);
  }
  return answer;
};
