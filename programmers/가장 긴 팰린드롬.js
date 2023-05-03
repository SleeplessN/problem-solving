function solution(s) {
  for (let i = s.length; i >= 1; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      const isPalin = isPalindrome(s.slice(j, i + j));
      if (isPalin) return i;
    }
  }
  return 1;
}
const isPalindrome = (s) => {
  const half = Math.floor(s.length / 2);

  for (let i = 0; i < half; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }

  return true;
};

let input = [
  // TC: 1
  "abcdcba",
  // TC: 2
  "abacde",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
