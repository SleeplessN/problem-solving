function solution(k, score) {
  const result = [];

  for (let i = 0; i < score.length; i++) {
    result.push(
      Math.min(
        ...score
          .slice(0, i + 1)
          .sort((a, b) => b - a)
          .slice(0, k)
      )
    );
  }
  return result;
}

let input = [
  // TC: 1
  [3, [10, 100, 20, 150, 1, 100, 200]],
  // TC: 2
  [4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
