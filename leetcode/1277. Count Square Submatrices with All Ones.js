// https://leetcode.com/problems/count-square-submatrices-with-all-ones/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  let max = Math.min(matrix.length, matrix[0].length);
  let count = 0;
  // 크기 1
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) count++;
    }
  }

  for (let k = 1; k < max; k++) {
    let dir = direction(k);

    for (let i = 0; i < matrix.length - k; i++) {
      for (let j = 0; j < matrix[i].length - k; j++) {
        if (matrix[i][j] == 0) continue;
        let isSqu = true;
        for (let x = 0; x < dir.length; x++) {
          if (matrix[i + dir[x][0]][j + dir[x][1]] === 0) {
            isSqu = false;
            break;
          }
        }
        if (isSqu) count++;
      }
    }
  }

  return count;
};
function direction(num) {
  let dir = [];
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      dir.push([i, j]);
    }
  }
  dir.shift();
  return dir;
}
