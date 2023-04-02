// https://www.hackerrank.com/challenges/lisa-workbook/problem

function workbook(n, k, arr) {
  let pages = 1;
  let specialsCount = 0;
  for (let i = 0; i < n; i++) {
    const problems = arr[i];
    for (let j = 1; j <= problems; j++) {
      if (j === pages) {
        specialsCount++;
      }
      if (j % k === 0 || j === problems) {
        pages++;
      }
    }
  }
  return specialsCount;
}
