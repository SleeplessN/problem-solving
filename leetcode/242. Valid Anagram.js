function solution(s, t) {
  const sArr = s.split("").sort();
  const tArr = t.split("").sort();

  return sArr.join("") === tArr.join("");
}

let input = [
  // TC: 1
  ["anagram", "nagaram"],
  // TC: 2
  ["rat", "car"],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
