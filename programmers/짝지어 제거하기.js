// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  if (s.length === 0) return 1;
  if (s.length === 1) return 0;
  let tmp = [s[0]];

  for (let i = 1; i < s.length; i++) {
    tmp[tmp.length - 1] === s[i] ? tmp.pop() : tmp.push(s[i]);
  }
  return tmp.length === 0 ? 1 : 0;
}
