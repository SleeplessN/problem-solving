function solution(cards) {
  const result = [];
  cards.forEach((_, i) => {
    let idx = i;
    let count = 0;
    while (true) {
      if (cards[idx]) {
        const temp = cards[idx];
        cards[idx] = 0;
        idx = temp - 1;
        count++;
      } else {
        result.push(count);
        break;
      }
    }
  });
  const sortAnswer = result.filter((v) => v != 0).sort((a, b) => b - a);

  return sortAnswer.length > 1 ? sortAnswer[0] * sortAnswer[1] : 0;
}

let input = [
  // TC: 1
  [8, 6, 3, 7, 2, 5, 1, 4],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
