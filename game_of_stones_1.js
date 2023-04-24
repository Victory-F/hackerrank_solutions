// https://www.hackerrank.com/challenges/game-of-stones-1/problem

function gameOfStones(n) {
  if (n % 7 === 0 || n % 7 === 1) {
    return "Second";
  }
  else if (n % 7 === 2 || n % 7 === 5) {
    return "First";
  }
  else {
    return "First";
  }
}
