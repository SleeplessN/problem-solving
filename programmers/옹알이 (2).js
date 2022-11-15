function solution(babbling) {
  // "aya", "ye", "woo", "ma"
  let result = 0;
  const dupBabbling = ["ayaaya", "yeye", "woowoo", "mama"];

  for (let i = 0; i < babbling.length; i++) {
    let tmp = babbling[i];
    if (dupBabbling.some((b) => tmp.includes(b))) continue;

    tmp = tmp
      .replaceAll("aya", 0)
      .replaceAll("ye", 0)
      .replaceAll("woo", 0)
      .replaceAll("ma", 0)
      .replace(/[0]/g, "");

    if (!tmp) result++;
  }
  return result;
}

let input = [
  // TC: 1
  ["aya", "yee", "u", "maa"],
  // TC: 2
  ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
