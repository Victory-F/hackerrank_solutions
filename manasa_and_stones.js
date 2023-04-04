// https://www.hackerrank.com/challenges/manasa-and-stones/problem

function stones(n, a, b) {
  const possibles = new Set();
  for (let i = 0; i < n; i++) {
    possibles.add(a * i + b * (n - i - 1));
  }
  return [...possibles].sort((x, y) => x - y);
}
