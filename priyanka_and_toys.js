// https://www.hackerrank.com/challenges/priyanka-and-toys/problem

function toys(w) {
  w.sort((a, b) => a - b);
  let min = w[0];
  let containers = 1;

  for (const num of w) {
    if (num > min + 4) {
      containers++;
      min = num;
    }
  }
  return containers;
}
