// https://www.hackerrank.com/challenges/missing-numbers/problem

function missingNumbers(arr, brr) {
  const freq = {};
  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  for (const num of brr) {
    freq[num] = (freq[num] || 0) - 1;
  }
  
  const missing = [];
  for (const [key, value] of Object.entries(freq)) {
    if (value < 0) {
      missing.push(parseInt(key));
    }
  }
  
  return missing;
}
