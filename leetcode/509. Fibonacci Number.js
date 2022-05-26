// https://leetcode.com/problems/fibonacci-number/

var fib = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    past = 0;
    current = 1;
    future = current + past;
    for (i = 2; i < n; i++) {
      past = current;
      current = future;
      future = current + past;
    }
    return future;
  }
};
