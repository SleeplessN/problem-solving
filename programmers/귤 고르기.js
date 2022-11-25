function solution(k, tangerine) {
  let result = 0;
  const sizes = {};

  for (let size of tangerine) {
    sizes[size] = sizes[size] + 1 || 1;
  }

  const values = Object.values(sizes).sort((a, b) => b - a);

  for (let i = 0; i < values.length; i++) {
    k -= values[i];
    result++;
    if (k <= 0) return result;
  }
}

let input = [
  // TC: 1
  [6, [1, 3, 2, 5, 4, 5, 2, 3]],
  // TC: 2
  [4, [1, 3, 2, 5, 4, 5, 2, 3]],
  [2, [1, 1, 1, 1, 2, 2, 2, 3]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
