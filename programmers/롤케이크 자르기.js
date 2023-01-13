/* 초기 시간 초과 코드
function solution(topping) {
  let result = 0;
  const me = {};
  const bro = {};
  for (let el of topping) {
    me[el] = me[el] + 1 || 1;
  }

  for (let i = 0; i < topping.length; i++) {
    if (me[topping[i]] === 1) delete me[topping[i]];
    else me[topping[i]]--;
    bro[topping[i]] = bro[topping[i]] + 1 || 1;

    if (Object.keys(me).length === Object.keys(bro).length) result++;
  }
  return result;
}
*/
function solution(topping) {
  const left = {};
  const right = topping.reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});

  let me = 0;
  let bro = new Set(topping).size;
  let result = 0;

  for (let i = 0; i < topping.length - 1; i++) {
    const curTopping = topping[i];
    if (!left[curTopping]) {
      me++;
    }
    left[curTopping] = (left[curTopping] ?? 0) + 1;
    right[curTopping]--;

    if (!right[curTopping]) {
      bro--;
    }

    if (me === bro) {
      result++;
    }
  }

  return result;
}

let input = [
  // TC: 1
  [1, 2, 1, 3, 1, 4, 1, 2],
  // TC: 2
  [1, 2, 3, 1, 4],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
