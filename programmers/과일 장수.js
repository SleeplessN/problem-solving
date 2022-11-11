function solution(k, m, score) {
  const fruits = score.sort((a, b) => b - a);

  const fruitBox = [];

  for (let i = 0; i < fruits.length; i += m) {
    if (i + m <= fruits.length) fruitBox.push(fruits.slice(i, i + m));
  }

  return fruitBox
    .map((box) => Math.min(...box) * m)
    .reduce((pre, cur) => pre + cur, 0);
}

let input = [
  // TC: 1
  [3, 4, [1, 2, 3, 1, 2, 3, 1]],
  // TC: 2
  [4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
