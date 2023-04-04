function solution(k, ranges) {
  const area = [0];
  while (k !== 1) {
    if (k % 2) {
      area.push((k + k * 3 + 1) / 2 + area.at(-1));
      k = k * 3 + 1;
    } else {
      area.push((k + k / 2) / 2 + area.at(-1));
      k /= 2;
    }
  }
  return ranges.map(([s, e]) => {
    if (area.length - 1 + e < s) return -1;

    return area.at(e - 1) - area[s];
  });
}

let input = [
  // TC: 1
  [
    5,
    [
      [0, 0],
      [0, -1],
      [2, -3],
      [3, -3],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
