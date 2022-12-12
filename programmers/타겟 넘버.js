function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);
  return answer;

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
}

let input = [
  // TC: 1
  [[1, 1, 1, 1, 1], 3],
  // TC: 2
  [[4, 1, 2, 1], 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
