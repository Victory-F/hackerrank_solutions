// https://www.hackerrank.com/challenges/grid-challenge/problem

function gridChallenge(grid) {
  const sorted = grid.map((s) =>
    s.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  );

  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - 1; j++) {
      if (sorted[j][i] > sorted[j + 1][i]) {
        return "NO";
      }
    }
  }
  return "YES";
}
