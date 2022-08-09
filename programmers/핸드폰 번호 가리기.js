function solution(phone_number) {
  return (
    new Array(phone_number.length - 4).fill("*").join("") +
    phone_number.slice(phone_number.length - 4, phone_number.length)
  );
}

let input = [
  // TC: 1
  "01033334444",
  // TC: 2
  "027778888",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
