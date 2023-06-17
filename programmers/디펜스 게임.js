function solution(n, k, enemy) {
  let [left, right] = [0, enemy.length];
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    const curSlice = enemy.slice(0, mid).sort((a, b) => b - a);
    let noDie = k;

    const curEnemy = curSlice.reduce((acc, cur) => {
      if (noDie > 0) {
        noDie--;
        return acc;
      }
      return acc + cur;
    }, 0);

    if (n - curEnemy >= 0 && noDie >= 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return left - 1;
}

let input = [
  // TC: 1
  [7, 3, [4, 2, 4, 5, 3, 3, 1]],
  // TC: 2
  [2, 4, [3, 3, 3, 3]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
