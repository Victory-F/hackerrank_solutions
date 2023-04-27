// https://www.hackerrank.com/challenges/nimble-game-1/problem

function nimbleGame(s) {
  const xorSum = s.reduce((acc, cur, i) => (cur % 2 === 1 ? acc ^ i : acc), 0)
  return xorSum === 0 ? "Second" : "First";
}
