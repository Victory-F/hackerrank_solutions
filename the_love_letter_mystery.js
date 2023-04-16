// https://www.hackerrank.com/challenges/the-love-letter-mystery/problem

function theLoveLetterMystery(s) {
  let count = 0;
  const n = s.length;
  for (let i = 0; i < n / 2; i++) {
    const j = n - i - 1;
    if (s[i] !== s[j]) {
      count += Math.abs(s.charCodeAt(i) - s.charCodeAt(j));
    }
  }
  return count;
}
