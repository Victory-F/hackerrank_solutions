// https://www.hackerrank.com/challenges/flatland-space-stations/problem

function flatlandSpaceStations(n, c) {
  c.sort((a, b) => a - b);
  let longest = Math.max(c[0], n - 1 - c[c.length - 1]);
  for (let i = 0; i < c.length - 1; i++) {
    const distance = Math.floor((c[i + 1] - c[i]) / 2);
    longest = Math.max(longest, distance);
  }
  return longest;
}
