function solution(n) {
  let result = 0;
  let queen = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    queen[0] = i;
    dfs(1);
  }

  function dfs(row) {
    if (n === row) {
      result += 1;
    }
    for (let col = 0; col < n; col++) {
      queen[row] = col;
      let checker = true;
      for (let i = 0; i < row; i++) {
        if (queen[row] === queen[i]) {
          checker = false;
          break;
        }
        if (Math.abs(queen[row] - queen[i]) === Math.abs(i - row)) {
          checker = false;
          break;
        }
      }
      if (checker) dfs(row + 1);
    }
  }

  return result;
}

let input = [
  // TC: 1
  4,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
