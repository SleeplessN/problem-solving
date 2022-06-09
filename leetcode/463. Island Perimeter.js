// https://leetcode.com/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        if (i - 1 >= 0) {
          if (grid[i - 1][j] !== 1) {
            perimeter++;
          }
        } else perimeter++;
        if (i + 1 < grid.length) {
          if (grid[i + 1][j] !== 1) {
            perimeter++;
          }
        } else perimeter++;
        if (j - 1 >= 0) {
          if (grid[i][j - 1] !== 1) {
            perimeter++;
          }
        } else perimeter++;
        if (j + 1 < grid[i].length) {
          if (grid[i][j + 1] !== 1) {
            perimeter++;
          }
        } else perimeter++;
      }
    }
  }

  return perimeter;
};
