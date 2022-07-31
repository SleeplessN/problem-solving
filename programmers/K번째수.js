// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    let tmp = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b)[commands[i][2] - 1];
    result.push(tmp);
  }
  return result;
}
