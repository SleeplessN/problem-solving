// https://leetcode.com/problems/assign-cookies/

var findContentChildren = function (g, s) {
  let children = 0;
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);
  let cookieIndex = 0;

  for (let j = 0; j < g.length; j++) {
    if (s[cookieIndex] >= g[j]) {
      g.splice(j, 1, undefined);
      cookieIndex++;
      children++;
    }
  }

  return children;
};
