function solution(n, works) {
  if (works.reduce((a, b) => a + b) <= n) return 0;
  let sortedWorks = works.sort((a, b) => a - b);

  while (n) {
    const max = sortedWorks[works.length - 1];

    for (let i = works.length - 1; i >= 0; i--) {
      if (sortedWorks[i] >= max) {
        sortedWorks[i]--;
        n--;
      }
      if (!n) break;
    }
  }

  return sortedWorks.reduce((a, b) => a + Math.pow(b, 2), 0);
}

let input = [
  // TC: 1
  [4, [4, 3, 3]],
  // TC: 2
  [1, [2, 1, 2]],
  // TC: 3
  [3, [1, 1]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
