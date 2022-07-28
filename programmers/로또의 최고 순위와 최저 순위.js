// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let zeroCount = 0;
  let winCount = 0;
  lottos.forEach((x) => {
    if (x === 0) {
      zeroCount++;
    } else if (win_nums.includes(x)) {
      winCount++;
    }
  });
  let maxRank = Math.min(7 - (winCount + zeroCount), 6);
  let minRank = Math.min(7 - winCount, 6);
  return [maxRank, minRank];
}

let input = [
  // TC: 1
  [
    [44, 1, 0, 0, 31, 25],
    [31, 10, 45, 1, 6, 19],
  ],
  // TC: 2
  [
    [0, 0, 0, 0, 0, 0],
    [38, 19, 20, 40, 15, 25],
  ],

  [
    [45, 4, 35, 20, 3, 9],
    [20, 9, 3, 45, 4, 35],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
