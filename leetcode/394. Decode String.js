// https://leetcode.com/problems/decode-string/submissions/

var decodeString = function (s) {
  let stack = [];
  let temp = [];
  let repeat = [];

  for (let i = 0; i < s.length; i++) {
    // 1. s의 값을 ]가 나올떄까지 stack에 넣어준다
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      // 2. 그러다 ]가 나오면 [가 나올때까지 temp에 넣어준다
      while (stack[stack.length - 1] !== "[") {
        temp.unshift(stack.pop());
      }
      // 3. 2에서 [ 뒤까지만 temp에서 넣어줬으므로 [도 마저 빼준다.
      stack.pop();
      // 4. repeat값에 [ 앞의 숫자들을 넣어준다
      while (!isNaN(stack[stack.length - 1])) {
        repeat.unshift(stack.pop());
      }
      // 5. repeat 만큼 temp에 넣었던 값을 반복하여 stack에 다시 넣어준다.
      for (let j = 0; j < repeat.join(""); j++) {
        for (let k = 0; k < temp.length; k++) {
          stack.push(temp[k]);
        }
      }
      // 6. repeat 값과 temp 값을 초기화 해준다
      repeat = [];
      temp = [];
    }
  }
  // 7. 마지막으로 stack에 있는 값을 연결시켜 문자열로 만들어 준다.
  return stack.join("");
};
