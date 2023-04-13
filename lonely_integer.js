// https://www.hackerrank.com/challenges/lonely-integer/problem

function lonelyinteger(a) {
  const freq = {};
  for (const n of a) {
    freq[n] = (freq[n] || 0) + 1;
  }
  for (const k in freq) {
    if (freq[k] === 1) {
      return k;
    }
  }
}
