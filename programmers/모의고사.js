function solution(answers) {
  const score = [];
  const result = [];
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  score.push(answers.filter((a, i) => a === a1[i % a1.length]).length);
  score.push(answers.filter((a, i) => a === a2[i % a2.length]).length);
  score.push(answers.filter((a, i) => a === a3[i % a3.length]).length);

  for (let i = 0; i < score.length; i++) {
    const max = Math.max(...score);
    if (score[i] === max) {
      result.push(i + 1);
    }
  }

  return result;
}

let input = [
  // TC: 1
  [1, 2, 3, 4, 5],
  // TC: 2
  [1, 3, 2, 4, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
