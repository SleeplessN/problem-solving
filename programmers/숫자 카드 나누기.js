function solution(arrayA, arrayB) {
  const aGcd = getDivisors(arrayA);
  const bGcd = getDivisors(arrayB);

  return Math.max(existNumCard(arrayA, bGcd), existNumCard(arrayB, aGcd));
}

function getGCD(num1, num2) {
  while (num2 > 0) {
    let r = num1 % num2;
    num1 = num2;
    num2 = r;
  }

  return num1;
}

function getDivisors(arr) {
  return arr.reduce((pre, cur) => getGCD(pre, cur));
}

function existNumCard(arr, gcd) {
  let isTrue = true;
  let num = 0;
  for (let i = gcd; i >= 2; i--) {
    if (gcd % i !== 0) continue;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % i === 0) {
        isTrue = false;
        break;
      }
    }
    if (isTrue) {
      num = i;
      break;
    }
  }
  return num;
}

let input = [
  // TC: 1
  [
    [10, 17],
    [5, 20],
  ],
  // TC: 2
  [
    [10, 20],
    [5, 17],
  ],

  [
    [14, 35, 119],
    [18, 30, 102],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
