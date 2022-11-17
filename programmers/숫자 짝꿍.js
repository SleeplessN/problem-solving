function solution(X, Y) {
  let result = "";
  const arrX = X.split("").map(Number);
  const arrY = Y.split("").map(Number);

  for (let i = 0; i < 10; i++) {
    const numCountX = arrX.filter((n) => n === i).length;
    const numCountY = arrY.filter((n) => n === i).length;

    result += String(i).repeat(Math.min(numCountX, numCountY));
  }

  if (result === "") return "-1";
  else if (+result === 0) return "0";
  else
    return result
      .split("")
      .sort((a, b) => b - a)
      .join("");
}

let input = [
  // TC: 1
  ["100", "2345"],
  // TC: 2
  ["100", "203045"],
  ["100", "123450"],
  ["12321", "42531"],
  ["5525", "1255"],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
