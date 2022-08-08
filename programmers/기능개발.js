// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  let result = [];
  let time = [];
  let count = 0;
  let max = 0;

  for (let i = 0; i < progresses.length; i++) {
    let tmp = Math.ceil((100 - progresses[i]) / speeds[i]);
    time.push(tmp);
  }

  for (let i = 0; i < time.length; i++) {
    if (max < time[i]) {
      max = time[i];
      if (count !== 0) {
        result.push(count);
      }
      count = 1;
    } else {
      count++;
    }
  }
  result.push(count);

  return result;
}

let input = [
  // TC: 1
  [
    [93, 30, 55],
    [1, 30, 5],
  ],
  // TC: 2
  [
    [95, 90, 99, 99, 80, 99],
    [1, 1, 1, 1, 1, 1],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
