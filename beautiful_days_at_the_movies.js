// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i, j, k) {
  let count = 0;
  while (i <= j) {
    const reversed = parseInt(i.toString().split("").reverse().join(""));
    const diff = i - reversed;
    if (diff % k === 0) {
      count++;
    }
    i++;
  }
  return count;
}
