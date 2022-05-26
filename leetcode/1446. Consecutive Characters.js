// https://leetcode.com/problems/consecutive-characters/

var maxPower = function (s) {
  let count = 1;
  let store = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      count++;
    } else {
      if (store > count) {
        count = 1;
      } else {
        store = count;
        count = 1;
      }
    }
  }
  return store;
};
