/** 초기 풀이 시간 초과  */
// function solution(numbers) {
//   const result = [];
//   let tempNum, point, check;

//   for (let i = 0; i < numbers.length; i++) {
//     check = false;
//     if (numbers[i] === numbers[i - 1]) {
//       check = true;
//     } else tempNum = 0;
//     point = 1;

//     while (!check) {
//       tempNum = numbers[i + point];
//       if (tempNum > numbers[i]) break;
//       if (i + point > numbers.length) {
//         tempNum = -1;
//         break;
//       }
//       point++;
//     }
//     result.push(tempNum);
//   }
//   return result;
// }
function solution(numbers) {
  const result = Array(numbers.length).fill(-1);
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      result[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return result;
}

let input = [
  // TC: 1
  [2, 3, 3, 5],
  // TC: 2
  [9, 1, 5, 3, 6, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
