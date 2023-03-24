/** 초기 풀이 시간 초과  */
// function solution(weights) {
//   let result = 0;
//   const map = {};

//   for (let i = 0; i < weights.length; i++) {
//     map[weights[i]] = map[weights[i]] + 1 || 1;
//   }

//   const keys = Object.keys(map).map(Number);
//   const values = Object.values(map).map(Number);

//   // 다른 몸무게 비교
//   for (let i = 0; i < keys.length; i++) {
//     if (keys.includes(keys[i] * (3 / 2)))
//       result += values[keys.indexOf(keys[i] * (3 / 2))];
//     if (keys.includes(keys[i] * 2)) result += values[keys.indexOf(keys[i] * 2)];
//     if (keys.includes(keys[i] * (4 / 3)))
//       result += values[keys.indexOf(keys[i] * (4 / 3))];
//   }
//   // 같은 몸무게 비교
//   for (let i = 0; i < values.length; i++) {
//     if (values[i] >= 2) result += (values[i] * (values[i] - 1)) / 2;
//   }

//   return result;
// }

function solution(weights) {
  let result = 0;
  const store = {};
  const cal = [1, 3 / 2, 2, 4 / 3]; //경우의 수 (1,1), (2,3), (2,4), (3,4)

  weights
    .sort((a, b) => b - a)
    .forEach((w) => {
      let s;
      cal.forEach((i) => {
        if (((s = w * i), store[s])) {
          result += store[s];
        }
      });
      if (!store[w]) store[w] = 1;
      else store[w]++;
    });
  return result;
}

let input = [
  // TC: 1
  [100, 180, 360, 100, 270],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
