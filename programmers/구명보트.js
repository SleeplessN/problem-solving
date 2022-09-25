function solution(people, limit) {
  let result = 0;
  people.sort((a, b) => b - a);
  for (let i = 0, j = people.length - 1; i <= j; i++, result++) {
    if (people[i] + people[j] <= limit) j--;
  }
  return result;
}

let input = [
  // TC: 1
  [[70, 50, 80, 50], 100],
  // TC: 2
  [[70, 80, 50], 100],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
