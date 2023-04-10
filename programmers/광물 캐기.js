function solution(picks, minerals) {
  let result = 0;
  const len = Math.ceil(minerals.length / 5);
  const maxLen = picks.reduce((a, b) => a + b);
  const arr = [];

  if (maxLen === 0) return 0;

  minerals = minerals.splice(0, maxLen * 5);

  for (let a = 0; a < len; a++) {
    let obj = { d: 0, i: 0, s: 0 };
    minerals.splice(0, 5).map((v) => obj[v[0]]++);
    arr.push([
      obj.d + obj.i + obj.s,
      obj.d * 5 + obj.i + obj.s,
      obj.d * 25 + obj.i * 5 + obj.s,
    ]);
  }

  arr
    .sort((a, b) => b[2] - a[2])
    .map((v) => {
      if (picks[0] > 0) return picks[0]--, (result += v[0]);
      if (picks[1] > 0) return picks[1]--, (result += v[1]);
      if (picks[2] > 0) return picks[2]--, (result += v[2]);
    });

  return result;
}

let input = [
  // TC: 1
  [
    [1, 3, 2],
    [
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "diamond",
      "iron",
      "stone",
    ],
  ],
  // TC: 2
  [
    [0, 1, 1],
    [
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "iron",
      "iron",
      "iron",
      "diamond",
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
