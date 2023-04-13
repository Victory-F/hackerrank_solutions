// https://www.hackerrank.com/challenges/cut-the-sticks/problem

function cutTheSticks(arr) {
  let result = [];
  while (arr.length > 0) {
    result.push(arr.length);
    let minLength = Math.min(...arr);
    arr = arr.filter((n) => n !== minLength).map((n) => n - minLength);
  }
  return result;
}
