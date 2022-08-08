// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count % 2 === 1) {
      result -= i;
    } else {
      result += i;
    }
  }
  return result;
}

let input = [
  // TC: 1
  [13, 17],
  // TC: 2
  [24, 27],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
