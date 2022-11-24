function solution(brown, yellow) {
  let total = brown + yellow;
  let possibleArr = [];

  for (let i = 1; i < Math.floor(total / 2); i++) {
    if (total % i === 0 && total / i >= i) {
      possibleArr.push([total / i, i]);
    }
  }

  return findAnswerWithBrown(possibleArr, brown);

  function findAnswerWithBrown(arr, brown) {
    for (let i = 0; i < arr.length; i++) {
      let currentTotal = (arr[i][0] + arr[i][1]) * 2 - 4;
      if (currentTotal === brown) {
        return arr[i];
      }
    }
  }
}

let input = [
  // TC: 1
  [10, 2],
  // TC: 2
  [8, 1],
  [24, 24],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
