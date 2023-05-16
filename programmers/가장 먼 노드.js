function solution(n, edge) {
  const connect = new Array(n).fill().map((_) => []);
  for (const e of edge) {
    connect[e[0] - 1].push(e[1] - 1);
    connect[e[1] - 1].push(e[0] - 1);
  }

  const visited = [1];
  const queue = [0];
  while (queue.length) {
    const cur = queue.shift();

    for (const next of connect[cur]) {
      if (!visited[next]) {
        visited[next] = visited[cur] + 1;
        queue.push(next);
      }
    }
  }

  const max = Math.max(...visited);

  return visited.filter((el) => el === max).length;
}

let input = [
  // TC: 1
  [
    6,
    [
      [3, 6],
      [4, 3],
      [3, 2],
      [1, 3],
      [1, 2],
      [2, 4],
      [5, 2],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
