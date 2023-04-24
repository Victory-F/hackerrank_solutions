// https://www.hackerrank.com/challenges/sherlock-and-squares/problem

function squares(a, b) {
  let count = 0;
  let i = 1;
  while (i * i <= b) {
    if (i * i >= a) {
      count++;
    }
    i++;
  }
  return count;
}
