function solution(stones, k) {
  let left = 1,
    right = 200000000;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    for (const num of stones) {
      if (num - mid <= 0) count++;
      else count = 0;
      if (count >= k) break;
    }
    if (count >= k) right = mid - 1;
    else {
      left = mid + 1;
    }
  }
  return left;
}

let input = [
  // TC: 1
  [[2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3],
  // TC: 2
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
