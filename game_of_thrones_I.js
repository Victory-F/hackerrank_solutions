// https://www.hackerrank.com/challenges/game-of-thrones/problem

function gameOfThrones(s) {
  const charCounts = {};
  let odd = 0;

  for (const char of s) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  for (const count of Object.values(charCounts)) {
    if (count % 2 !== 0) {
      odd++;
      if (odd > 1) return "NO";
    }
  }

  return "YES";
}
