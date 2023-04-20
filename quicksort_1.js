// https://www.hackerrank.com/challenges/quicksort1/problem

function quickSort(arr) {
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return left.concat(pivot, right);
}
