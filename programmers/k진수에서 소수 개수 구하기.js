function solution(n, k) {
  const convertNum = n.toString(k);
  let num = "";
  const numList = [];

  for (let i = 0; i < convertNum.length; i++) {
    if (convertNum[i] !== "0") {
      num += convertNum[i];
    } else {
      numList.push(+num);
      num = "";
    }
  }
  numList.push(+num);

  return numList.filter((num) => isPrimeNum(num)).length;
}

function isPrimeNum(num) {
  if (num < 2) return false;
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let input = [
  // TC: 1
  [437674, 3],
  // TC: 2
  [110011, 10],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
