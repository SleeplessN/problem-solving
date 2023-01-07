function solution(str1, str2) {
  const arr1 = [];
  const arr2 = [];
  const regEx = /^[a-zA-Z]+$/;

  for (let i = 0; i < str1.length - 1; i++) {
    const subStr = str1.toLowerCase().substring(i, i + 2);
    if (regEx.test(subStr)) {
      arr1.push(subStr);
    }
  }

  for (let j = 0; j < str2.length - 1; j++) {
    const subStr = str2.toLowerCase().substring(j, j + 2);
    if (regEx.test(subStr)) {
      arr2.push(subStr);
    }
  }

  // 2. 합집합, 교집합 구하기
  const union = []; // 중복포함, 합집합 배열
  const intersect = []; // 중복포함, 교집합 배열

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      intersect.push(arr1.splice(arr1.indexOf(arr2[i]), 1)); //***교집합
    }
    union.push(arr2[i]); //***합집합
  }

  for (let i = 0; i < arr1.length; i++) {
    // ***합집합에 arr1 차집합 넣어주기
    union.push(arr1[i]);
  }

  // 3. 유사도 구하기, 예외처리
  return union.length === 0
    ? 65536
    : Math.floor((intersect.length / union.length) * 65536);
}

let input = [
  // TC: 1
  ["FRANCE", "french"],
  // TC: 2
  ["handshake", "shake hands"],
  // TC: 3
  ["aa1+aa2", "AAAA12"],
  // TC: 4
  ["E=M*C^2", "e=m*c^2"],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
