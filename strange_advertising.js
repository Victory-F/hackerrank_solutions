// https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
  let shared = 5;
  let liked = 2;
  let cumulative = 2;

  while (n > 1) {
    shared = Math.floor(shared / 2) * 3;
    liked = Math.floor(shared / 2);
    cumulative += liked;
    n--;
  }
  return cumulative;
}
