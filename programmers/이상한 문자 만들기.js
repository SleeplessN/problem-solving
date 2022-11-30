function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      const wordArr = word.split("");
      for (let i = 0; i < wordArr.length; i++) {
        if (i % 2 === 0) wordArr[i] = wordArr[i].toUpperCase();
        else wordArr[i] = wordArr[i].toLowerCase();
      }
      return wordArr.join("");
    })
    .join(" ");
}

let input = [
  // TC: 1
  "try hello world",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
