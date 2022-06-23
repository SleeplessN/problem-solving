// https://leetcode.com/problems/path-with-maximum-gold/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  if (!grid || !grid.length || !grid[0].length) return 0;

  const visited = new Array(grid.length)
    .fill(0)
    .map(() => new Array(grid[0].length));

  let maxGold = 0;
  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function dfs(i, j, grid, currGold) {
    if (
      i < 0 ||
      i === grid.length ||
      j < 0 ||
      j === grid[0].length ||
      grid[i][j] === 0 ||
      visited[i][j]
    )
      return;

    visited[i][j] = true;
    currGold += grid[i][j];

    maxGold = Math.max(maxGold, currGold);

    for (let k = 0; k < dir.length; k++) {
      dfs(i + dir[k][0], j + dir[k][1], grid, currGold);
    }

    currGold -= grid[i][j];
    visited[i][j] = false;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      dfs(i, j, grid, 0);
    }
  }

  return maxGold;
};
