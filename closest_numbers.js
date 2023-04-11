// https://www.hackerrank.com/challenges/closest-numbers/problem

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < minDiff) {
      minDiff = diff;
      result = [arr[i - 1], arr[i]];
    } else if (diff === minDiff) {
      result.push(arr[i - 1], arr[i]);
    }
  }
  return result;
}
