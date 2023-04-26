// https://www.hackerrank.com/challenges/weighted-uniform-string/problem

function weightedUniformStrings(s, queries) {
  const codes = s.split("").map((char) => char.charCodeAt(0) - 96);
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      codes[i] += codes[i - 1];
    }
  }
  return queries.map((q) => (codes.includes(q) ? "Yes" : "No"));
}
