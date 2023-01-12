function solution(n, k) {
  const answer = [];
  const people = Array.from({ length: n }, (_, i) => i + 1);
  let caseNum = people.reduce((a, b) => a * b, 1);

  while (answer.length < n) {
    caseNum = caseNum / people.length;
    answer.push(...people.splice(Math.floor((k - 1) / caseNum), 1));
    k = k % caseNum;
  }

  return answer;
}

/**
 * 효율성 테스트 실패 답안
function solution(n, k) {
  const array = [];
  let firstNum = 0;

  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  const standard = total / n;
  for (let i = 1; i <= n; i++) {
    if (k <= standard * i) {
      k -= standard * (i - 1);
      firstNum = i;
      break;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (i === firstNum) continue;
    array.push(i);
  }
  let result = [firstNum];

  return result.concat(getPermutations(array, n - 1, 0, k - 1)[k - 1]);
}
function getPermutations(arr, selectNumber, count, k) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    const permutations = getPermutations(rest, selectNumber - 1, count++, k);

    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
    if (count === k) return results;
  });

  return results;
}
 */

let input = [
  // TC: 1
  [3, 5],
  // TC: 2
  [4, 10],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
