// https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  const MOD = 1000000007n;
  horizontalCuts.push(0, h);
  verticalCuts.push(0, w);
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);
  let row = 0;
  let col = 0;
  // row
  for (let i = 0; i < verticalCuts.length - 1; i++) {
    row = Math.max(row, verticalCuts[i + 1] - verticalCuts[i]);
  }
  // column
  for (let i = 0; i < horizontalCuts.length - 1; i++) {
    col = Math.max(col, horizontalCuts[i + 1] - horizontalCuts[i]);
  }
  return (BigInt(row) * BigInt(col)) % MOD;
};
