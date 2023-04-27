// https://www.hackerrank.com/challenges/sum-vs-xor/problem

function sumXor(n) {
  let count = 0;
  while (n > 0) {
    count += n % 2 === 0 ? 1 : 0;
    n = Math.floor(n / 2);
  }
  return 2 ** count;
}
