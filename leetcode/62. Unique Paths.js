// https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const map = [];
  for (let i = 0; i < m; i++) {
    let mapArr = new Array(n).fill(0);
    map.push(mapArr);
  }
  map[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let cur = map[i][j];
      if (i < m - 1) map[i + 1][j] += cur;
      if (j < n - 1) map[i][j + 1] += cur;
    }
  }
  return map[m - 1][n - 1];
};
