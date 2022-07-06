// https://leetcode.com/problems/shift-2d-grid/

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  let row = grid.length;
  let col = grid[0].length;
  let newGrid = new Array(row).fill(null).map(() => Array(col).fill(null));
  grid = grid.flat();
  while (k) {
    grid.unshift(grid.pop());
    k--;
  }

  let x = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      newGrid[i][j] = grid[x++];
    }
  }
  return newGrid;
};
