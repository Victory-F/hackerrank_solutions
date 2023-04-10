// https://www.hackerrank.com/challenges/insertionsort2/problem

function insertionSort2(n, arr) {
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
    console.log(arr.join(" "));
  }
}
