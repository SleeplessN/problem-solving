function solution(s, n) {
  return s
    .split("")
    .map((el) => {
      if (el == " ") return el;
      const tmp = el.charCodeAt();
      return el.toLowerCase().charCodeAt() + n > 122
        ? String.fromCharCode(tmp + n - 26)
        : String.fromCharCode(tmp + n);
    })
    .join("");
}

let input = [
  // TC: 1
  ["AB", 1],
  // TC: 2
  ["z", 1],
  ["a B z", 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
