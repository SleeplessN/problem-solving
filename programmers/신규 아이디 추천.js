// https://school.programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

function solution(id) {
  let recomId = id
    // 1단계
    .toLowerCase()
    // 2단계
    .replace(/[^A-Za-z0-9-_.]/g, "")
    // 3단계
    .replace(/[.]{2,}/g, ".")
    // 4단계
    .replace(/^[.]/g, "")
    .replace(/[.]$/g, "")
    // 6단계
    .slice(0, 15)
    .replace(/[.]$/g, "");
  // 5단계
  if (recomId.length === 0) recomId += "a";
  // 7단계
  while (recomId.length < 3) {
    recomId += recomId[recomId.length - 1];
  }
  return recomId;
}
