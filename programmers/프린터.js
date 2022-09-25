function solution(priorities, location) {
  let result = 0;
  let firstEl;

  while (true) {
    firstEl = priorities.shift();

    if (firstEl < Math.max(...priorities)) {
      priorities.push(firstEl);
      if (location === 0) location = priorities.length - 1;
      else location--;
    } else {
      result++;
      if (location === 0) break;
      else location--;
    }
  }
  return result;
}

let input = [
  // TC: 1
  [[2, 1, 3, 2], 2],
  // TC: 2
  [[1, 1, 9, 1, 1, 1], 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
