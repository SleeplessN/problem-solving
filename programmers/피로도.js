function solution(k, dungeons) {
  const list = getPermutations(dungeons, dungeons.length);
  let result = 0;

  for (let i = 0; i < list.length; i++) {
    let count = 0;
    let copyK = k;
    for (let j = 0; j < list[i].length; j++) {
      if (list[i][j][0] > copyK) continue;
      copyK -= list[i][j][1];
      count++;
    }
    result = Math.max(result, count);
  }
  return result;
}

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
};

let input = [
  // TC: 1
  [
    80,
    [
      [80, 20],
      [50, 40],
      [30, 10],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
