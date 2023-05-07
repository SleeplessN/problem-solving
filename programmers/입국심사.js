function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1;
  let right = n * times[times.length - 1];
  let result = right;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    times.forEach((value) => {
      count += Math.floor(mid / value);
      if (count >= n) {
        result = Math.min(mid, result);
        return;
      }
    });
    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

let input = [
  // TC: 1
  [6, [7, 10]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
