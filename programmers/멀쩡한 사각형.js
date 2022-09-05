// https://school.programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
  function gcd(a, b) {
    const remainder = a % b;
    if (remainder === 0) return b;
    return gcd(b, remainder);
  }
  return w * h - (w + h - gcd(w, h));
}

let input = [
  // TC: 1
  [8, 12],
  // TC: 2
  [9, 5],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
