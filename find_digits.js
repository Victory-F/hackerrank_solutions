// https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(n) {
  let count = 0;
  for (const num of n.toString()) {
    if (num !== "0" && n % parseInt(num) === 0) {
      count++;
    }
  }
  return count;
}
