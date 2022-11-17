function solution(elements) {
  const result = [];
  const circleElements = elements.concat(elements);

  for (let i = 0; i < elements.length; i++) {
    for (let j = 1; j <= elements.length; j++) {
      const sum = circleElements
        .slice(i, i + j)
        .reduce((pre, cur) => pre + cur, 0);
      result.push(sum);
    }
  }
  return new Set(result).size;
}

let input = [
  // TC: 1
  [7, 9, 1, 1, 4],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
