function solution(n, t, m, p) {
  const queue = [];
  const result = [];
  let currenNum = -1;
  let turn = 0;
  while (result.length < t) {
    if (queue.length === 0) {
      currenNum++;
      currenNum
        .toString(n)
        .split("")
        .forEach((x) => queue.push(x));
    }
    const currentChar = queue.shift();
    if (turn % m === p - 1) result.push(currentChar);
    turn++;
  }
  return result.join("").toUpperCase();
}

let input = [
  // TC: 1
  [2, 4, 2, 1],
  // TC: 2
  [16, 16, 2, 1],
  // TC: 3
  [16, 16, 2, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(
    `#${i + 1} ${solution(input[i][0], input[i][1], input[i][2], input[i][3])}`
  );
}
