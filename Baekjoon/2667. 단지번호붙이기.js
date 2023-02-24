const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const N = +input.shift();
  const arr = input.map((item) => item.split("").map(Number));

  function bfs(x, y) {
    const queue = [[x, y]];
    const visited = {};
    visited[[x, y]] = true;
    visitedCoords[[x, y]] = true;
    const dx = [0, 0, 1, -1];
    const dy = [-1, 1, 0, 0];
    let count = 1;

    while (queue.length) {
      for (let i = 0; i < queue.length; i++) {
        const x = queue.shift();
        for (let j = 0; j < dx.length; j++) {
          const nx = x[0] + dx[j];
          const ny = x[1] + dy[j];
          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < arr.length &&
            ny < arr.length &&
            arr[nx][ny] === 1 &&
            !visited[[nx, ny]]
          ) {
            visited[[nx, ny]] = true;
            visitedCoords[[nx, ny]] = true;
            count++;
            queue.push([nx, ny]);
          }
        }
      }
    }
    return count;
  }

  const visitedCoords = {};
  const result = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 1 && !visitedCoords[[i, j]]) result.push(bfs(i, j));
    }
  }

  console.log(result.length);
  result.sort((a, b) => a - b);
  result.forEach((comp) => console.log(comp));
}
solution();
