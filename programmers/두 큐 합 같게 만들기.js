function solution(queue1, queue2) {
  const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

  let sumQ1 = sum(queue1);
  const sumQ2 = sum(queue2);

  const queue = [...queue1, ...queue2];
  const target = (sumQ1 + sumQ2) / 2;
  const maxCount = queue1.length * 3;

  let q1Start = 0;
  let q1End = queue1.length;

  for (let count = 0; count < maxCount; count++) {
    if (sumQ1 === target) return count;

    if (sumQ1 < target) {
      sumQ1 += queue[q1End++];
    } else {
      sumQ1 -= queue[q1Start++];
    }
  }
  return -1;
}

let input = [
  // TC: 1
  [
    [3, 2, 7, 2],
    [4, 6, 5, 1],
  ],
  // TC: 2
  [
    [1, 2, 1, 2],
    [1, 10, 1, 2],
  ],

  [
    [1, 1],
    [1, 5],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
