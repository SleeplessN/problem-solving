function solution(n, costs) {
  let result = 0;
  costs.sort((a, b) => a[2] - b[2]);
  const vis = new Array(n).fill(false);
  const bridge = new Array(costs.length).fill(false);
  vis[costs[0][0]] = true;
  vis[costs[0][1]] = true;
  result += costs[0][2];
  let count = 1;
  while (count < n - 1) {
    for (let i = 0; i < costs.length; i += 1) {
      const [start, end, cost] = costs[i];
      if (bridge[i]) continue;
      if ((!vis[start] && vis[end]) || (vis[start] && !vis[end])) {
        count += 1;
        vis[start] = 1;
        vis[end] = 1;
        bridge[i] = true;
        result += cost;
        break;
      }
    }
  }
  return result;
}

let input = [
  // TC: 1
  [
    4,
    [
      [0, 1, 1],
      [0, 2, 2],
      [1, 2, 5],
      [1, 3, 1],
      [2, 3, 8],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
