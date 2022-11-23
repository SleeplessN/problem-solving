function solution(numbers) {
  return [
    ...new Set(
      getCombinations(numbers, 2)
        .map((pair) => pair.reduce((pre, cur) => pre + cur, 0))
        .sort((a, b) => a - b)
    ),
  ];
}
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
};

let input = [
  // TC: 1
  [2, 1, 3, 4, 1],
  // TC: 2
  [5, 0, 2, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
