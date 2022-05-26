// https://leetcode.com/problems/find-the-town-judge/submissions/

var findJudge = function (n, trust) {
  let graph = {
    edge: {},
  };
  // add vertex
  for (let i = 1; i <= n; i++) {
    graph.edge[i] = [];
  }

  // add edge
  for (let i = 0; i < trust.length; i++) {
    graph.edge[trust[i][0]].push(trust[i][1]);
  }

  let temp = [];
  for (let i = 1; i <= Object.keys(graph.edge).length; i++) {
    if (graph.edge[i].length === 0) {
      temp.push(i);
    }
  }

  let count = 0;
  if (temp === []) {
    return -1;
  } else {
    for (let i = 0; i < temp.length; i++) {
      count = 0;
      for (let j = 1; j <= Object.keys(graph.edge).length; j++) {
        if (graph.edge[j].includes(temp[i])) count++;
      }
      if (count === n - 1) return temp[i];
    }
  }
  return -1;
};
