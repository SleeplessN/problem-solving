function solution(number) {
  const list = getCombinations(number, 3);

  return list.filter(
    (member) => member.reduce((pre, cur) => pre + cur, 0) === 0
  ).length;
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
  [-2, 3, 0, 2, -5],
  // TC: 2
  [-3, -2, -1, 0, 1, 2, 3],
  [-1, 1, -1, 1],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
