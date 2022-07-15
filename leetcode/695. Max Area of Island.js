// https://leetcode.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        result = Math.max(result, bfs(i, j));
      }
    }
  }

  function bfs(x, y) {
    let count = 0;
    let dir = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    let q = [[x, y]];

    while (q.length !== 0) {
      let v = q.shift();

      if (
        v[1] > grid[0].length - 1 ||
        v[0] > grid.length - 1 ||
        v[1] < 0 ||
        v[0] < 0 ||
        grid[v[0]][v[1]] === 0
      ) {
        continue;
      }

      if (grid[v[0]][v[1]] === 1) {
        grid[v[0]][v[1]] = 0;
        count++;
      }
      for (let i = 0; i < dir.length; i++) {
        q.push([v[0] + dir[i][0], v[1] + dir[i][1]]);
      }
    }
    return count;
  }
  return result;
};
