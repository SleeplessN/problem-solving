function solution(number, k) {
  const stack = [];
  for (let num of number) {
    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop(num);
      k--;
    }
    stack.push(num);
  }
  return stack.join("").slice(0, number.length - k);
}

let input = [
  // TC: 1
  ["1924", 2],
  // TC: 2
  ["1231234", 3],
  // TC: 3
  ["4177252841", 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
