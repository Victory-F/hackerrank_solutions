// https://www.hackerrank.com/challenges/runningtime/problem

function runningTime(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
      count++;
    }
    arr[j + 1] = current;
  }
  return count;
}
