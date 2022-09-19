function solution(s) {
  return s
    .split(" ")
    .map((str) =>
      typeof str[0] === "string"
        ? str[0].toUpperCase() + str.slice(1).toLowerCase()
        : str.toLowerCase()
    )
    .join(" ");
}

let input = [
  // TC: 1
  "3people unFollowed me",
  // TC: 2
  "for the last week",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
