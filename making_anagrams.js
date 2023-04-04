// https://www.hackerrank.com/challenges/making-anagrams/problem

function makingAnagrams(s1, s2) {
    
  const freq = new Map();
  let deletions = 0;

  for (const char of s1) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  for (const char of s2) {
    freq.set(char, (freq.get(char) || 0) - 1);
  }

  for (const count of freq.values()) {
    deletions += Math.abs(count);
  }

  return deletions;
}
