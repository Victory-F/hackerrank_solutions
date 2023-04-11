// https://www.hackerrank.com/challenges/beautiful-pairs/problem

function beautifulPairs(A, B) {
  const freqA = Array(1001).fill(0);
  const freqB = Array(1001).fill(0);

  A.forEach(a => freqA[a]++);
  B.forEach(b => freqB[b]++);

  let count = 0;
  for (let i = 0; i < 1001; i++) {
    count += Math.min(freqA[i], freqB[i]);
  }

  if (count === A.length) {
    count--;
  } else {
    count++;
  }

  return count;
}
