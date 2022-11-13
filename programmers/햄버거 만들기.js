function solution(ingredient) {
  const stack = [];
  let result = 0;

  ingredient.forEach((type) => {
    stack.push(type);

    if (stack.length >= 4) {
      const find = stack.slice(-4).join("");
      if (find === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        result++;
      }
    }
  });

  return result;
}

let input = [
  // TC: 1
  [2, 1, 1, 2, 3, 1, 2, 3, 1],
  // TC: 2
  [1, 3, 2, 1, 2, 1, 3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
