function solution(N, road, K) {
  let result = 0;
  const graph = Array.from({ length: N + 1 }, () => Array());
  const dist = Array(N + 1).fill(Infinity);
  const queue = [];

  for (let i = 0; i < road.length; i++) {
    const start = road[i][0];
    const target = road[i][1];
    const cost = road[i][2];

    graph[start].push([target, cost]);
    graph[target].push([start, cost]);
  }

  queue.push([1, 0]);
  dist[1] = 0;

  while (queue.length) {
    const [current, _] = queue.shift();

    for (let i = 0; i < graph[current].length; i++) {
      const next = graph[current][i][0];
      const nextCost = graph[current][i][1];

      if (dist[next] > dist[current] + nextCost) {
        dist[next] = dist[current] + nextCost;
        queue.push([next, nextCost]);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    result += dist[i] <= K ? 1 : 0;
  }

  return result;
}

let input = [
  // TC: 1
  [
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3,
  ],
  // TC: 2
  [
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4,
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
