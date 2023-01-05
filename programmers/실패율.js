function solution(N, stages) {
  const failList = [];

  for (let i = 1; i <= N; i++) {
    failPer =
      stages.filter((stage) => stage === i).length /
      stages.filter((stage) => stage >= i).length;
    failList.push([i, failPer]);
  }

  failList.sort((a, b) => b[1] - a[1]);
  return failList.map((stage) => stage[0]);
}

let input = [
  // TC: 1
  [5, [2, 1, 2, 6, 2, 4, 3, 3]],
  // TC: 2
  [4, [4, 4, 4, 4, 4]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
