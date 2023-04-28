// https://www.hackerrank.com/challenges/big-sorting/problem

function bigSorting(unsorted) {
  return unsorted.sort((a, b) => String(BigInt(a) - BigInt(b)));
}
