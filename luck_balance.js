// https://www.hackerrank.com/challenges/luck-balance/problem

function luckBalance(k, contests) {
  let luck = contests.reduce((acc, val) => acc + val[0], 0);
  const importantSorted = contests
    .filter((a) => a[1] === 1)
    .map((a) => a[0])
    .sort((a, b) => a - b);
  for (let i = 0; i < importantSorted.length - k; i++) {
    luck -= importantSorted[i] * 2;
  }
  return luck;
}
