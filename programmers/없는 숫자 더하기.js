// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  const allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return allNum.filter((x) => !numbers.includes(x)).reduce((a, b) => a + b);
}

let input = [
  // TC: 1
  [1, 2, 3, 4, 6, 7, 8, 0],
  // TC: 2
  [5, 8, 4, 0, 6, 7, 9],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
