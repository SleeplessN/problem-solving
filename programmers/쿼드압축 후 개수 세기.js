function solution(arr) {
  const result = [0, 0];

  function compress(arr1, len) {
    const test = arr1.join(",");
    if (test.match(/0/g) == null) {
      result[1]++;
      return;
    }
    if (test.match(/1/g) == null) {
      result[0]++;
      return;
    }
    const test1 = arr1.slice(0, len / 2).map((el) => el.slice(0, len / 2));
    const test2 = arr1.slice(0, len / 2).map((el) => el.slice(len / 2, len));
    const test3 = arr1.slice(len / 2, len).map((el) => el.slice(0, len / 2));
    const test4 = arr1.slice(len / 2, len).map((el) => el.slice(len / 2, len));
    compress(test1, len / 2);
    compress(test2, len / 2);
    compress(test3, len / 2);
    compress(test4, len / 2);
  }
  compress(arr, arr.length);
  return result;
}

let input = [
  // TC: 1
  [
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  // TC: 2
  [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
