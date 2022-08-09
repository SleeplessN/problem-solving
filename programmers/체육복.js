function solution(n, lost, reserve) {
  let result = new Array(n).fill(1);
  // 잃어버린 사람
  for (let i = 0; i < lost.length; i++) {
    result[lost[i] - 1]--;
  }
  // 여벌의 체육복을 가진 사람
  for (let i = 0; i < reserve.length; i++) {
    result[reserve[i] - 1]++;
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i - 1] === 0 && result[i] === 2) {
      result[i - 1]++;
      result[i]--;
    } else if (result[i + 1] === 0 && result[i] === 2) {
      result[i + 1]++;
      result[i]--;
    }
  }

  return result.filter((x) => x > 0).length;
}

let input = [
  // TC: 1
  [5, [2, 4], [1, 3, 5]],
  // TC: 2
  [5, [2, 4], [3]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
