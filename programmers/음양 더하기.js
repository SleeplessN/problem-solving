// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (!signs[i]) {
      result -= absolutes[i];
    } else {
      result += absolutes[i];
    }
  }
  return result;
}

let input = [
  // TC: 1
  [
    [4, 7, 12],
    [true, false, true],
  ],
  // TC: 2
  [
    [1, 2, 3],
    [false, false, true],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
