// https://www.hackerrank.com/challenges/maximizing-xor/problem

function maximizingXor(l, r) {
  let max = 0;
  for (let i = l; i <= r; i++) {
    for (let j = l; j <= r; j++) {
      max = Math.max(max, i ^ j);
    }
  }
  return max;
}
