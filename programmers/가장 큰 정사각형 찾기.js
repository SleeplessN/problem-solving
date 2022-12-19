function solution(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (
        board[row][col] >= 1 &&
        !(board[row - 1] === undefined || board[row][col - 1] === undefined)
      )
        board[row][col] =
          Math.min(
            board[row - 1][col],
            board[row - 1][col - 1],
            board[row][col - 1]
          ) + 1;
    }
  }
  return Math.max(...board.map((row) => Math.max(...row))) ** 2;
}

let input = [
  // TC: 1
  [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ],
  // TC: 2
  [
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
