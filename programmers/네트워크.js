function solution(n, computers) {
  let result = 0;

  const visited = Array.from({ length: n }, () => false);

  function dfs(index) {
    visited[index] = true;

    for (let i = 0; i < computers.length; i++) {
      if (computers[index][i] && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i);
      result++;
    }
  }

  return result;
}

let input = [
  // TC: 1
  [
    3,
    [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ],
  ],
  // TC: 2
  [
    3,
    [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
