// https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
  let freq = {};
  for (const n of arr) {
    freq[n] = (freq[n] | 0) + 1;
  }
  
  const maxFreqValue = Math.max(...Object.values(freq));
  const maxFreq = Object.keys(freq).find((k) => freq[k] === maxFreqValue);

  return arr.filter((n) => n !== parseInt(maxFreq)).length;
}
