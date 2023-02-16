function solution(msg) {
  // prettier-ignore
  const dictionary = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const numIndex = [];
  while (msg.length) {
    let w = "";
    for (let i = 1; i <= msg.length; i++) {
      const c = msg.substring(0, i);
      if (!dictionary.includes(c)) {
        dictionary.push(c);
        break;
      }
      w = c;
    }
    numIndex.push(dictionary.indexOf(w) + 1);
    msg = msg.substr(w.length);
  }
  return numIndex;
}

let input = [
  // TC: 1
  "KAKAO",
  // TC: 2
  "TOBEORNOTTOBEORTOBEORNOT",
  // TC: 3
  "ABABABABABABABAB",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
