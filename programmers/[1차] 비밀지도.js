function solution(n, arr1, arr2) {
  const result = [];
  for (let i = 0; i < n; i++) {
    let temp = (arr1[i] | arr2[i]).toString(2);
    let line = [];

    for (let j = temp.length - n; j < temp.length; j++) {
      if (temp[j] === "1") line.push("#");
      else line.push(" ");
    }
    result.push(line.join(""));
  }
  return result;
}

let input = [
  // TC: 1
  [5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]],
  // TC: 2
  [6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
