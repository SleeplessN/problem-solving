// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  const result = [];
  let num;
  arr.map((n) => {
    if (n !== num) result.push(n);
    num = n;
  });
  return result;
}

let input = [
  // TC: 1
  [1, 1, 3, 3, 0, 1, 1],
  // TC: 2
  [4, 4, 4, 3, 3],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
