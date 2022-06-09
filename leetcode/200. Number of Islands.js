// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        bfs(i, j, grid);
      }
    }
  }
  return count;
};

function bfs(i, j, grid) {
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let q = [];
  let dirX, dirY;
  q.push([i, j]);
  while (q.length) {
    let [x, y] = q.shift();
    grid[x][y] = "0";
    for (let i = 0; i < dir.length; i++) {
      dirX = x + dir[i][0];
      dirY = y + dir[i][1];
      if (
        dirX < 0 ||
        dirX >= grid.length ||
        dirY < 0 ||
        dirY >= grid[0].length ||
        grid[dirX][dirY] === "0"
      ) {
        continue;
      }
      grid[dirX][dirY] = "0";
      q.push([dirX, dirY]);
    }
  }
}
