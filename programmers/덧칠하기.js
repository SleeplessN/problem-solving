function solution(n, m, section) {
  let result = 0;
  let part = 0;

  section.forEach((n) => {
    if (n > part) {
      part = n + m - 1;
      result++;
    }
  });

  return result;
}

let input = [
  // TC: 1
  [8, 4, [2, 3, 6]],
  // TC: 2
  [5, 4, [1, 3]],
  // TC: 3
  [4, 1, [1, 2, 3, 4]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
