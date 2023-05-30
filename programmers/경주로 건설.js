function solution(board) {
  const N = board.length;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const q = [
    [0, 0, 0, 0],
    [0, 0, 1, 0],
  ];

  const dp = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(dirs.length).fill(Infinity))
  );

  const isInBoard = (x, y) =>
    x >= 0 && x < N && y >= 0 && y < N && board[x][y] !== 1;

  while (q.length) {
    const [x, y, pDirI, cost] = q.shift();

    dirs.forEach(([dx, dy], nDirI) => {
      const [nx, ny] = [x + dx, y + dy];
      if (!isInBoard(nx, ny)) return;

      const newCost = cost + (pDirI === nDirI ? 100 : 600);

      if (newCost < dp[nx][ny][nDirI]) {
        dp[nx][ny][nDirI] = newCost;
        q.push([nx, ny, nDirI, newCost]);
      }
    });
  }

  return Math.min(...dp[N - 1][N - 1]);
}

let input = [
  // TC: 1
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  // TC: 2
  [
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
  ],
  // TC: 3
  [
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 0],
  ],
  // TC: 4
  [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
