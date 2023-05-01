// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

function sherlockAndAnagrams(s) {
  let count = 0;
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const sub = s.substring(i, j).split('').sort().join('');
      if (freq[sub]) {
        count += freq[sub];
        freq[sub]++;
      } else {
        freq[sub] = 1;
      }
    }
  }
  return count;
}
