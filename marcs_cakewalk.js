// https://www.hackerrank.com/challenges/marcs-cakewalk/problem

function marcsCakewalk(calorie) {
  calorie.sort((a, b) => b - a);
  return calorie.reduce((acc, val, i) => 2 ** i * val + acc, 0);
}
