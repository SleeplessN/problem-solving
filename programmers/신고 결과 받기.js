function solution(id_list, report, k) {
  const mailRes = {};
  const reportRes = {};
  const banList = [];

  for (let id in id_list) {
    mailRes[id] = 0;
  }

  report = [...new Set(report)].map((str) => str.split(" "));
  report.forEach((rep) => (reportRes[rep[1]] = reportRes[rep[1]] + 1 || 1));

  for (let i = 0; i < Object.values(reportRes).length; i++) {
    if (Object.values(reportRes)[i] >= k)
      banList.push(Object.keys(reportRes)[i]);
  }
  for (let i = 0; i < report.length; i++) {
    if (banList.includes(report[i][1]))
      mailRes[id_list.indexOf(report[i][0])] =
        mailRes[id_list.indexOf(report[i][0])] + 1;
  }
  return Object.values(mailRes);
}

let input = [
  // TC: 1
  [
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2,
  ],
  // TC: 2
  [["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
