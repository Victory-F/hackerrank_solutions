// https://www.hackerrank.com/challenges/insertionsort1/problem

function insertionSort1(n, arr) {
    const stored = arr[arr.length - 1];
    let i = arr.length - 2;

    while (i >= 0 && arr[i] > stored) {
        arr[i+1] = arr[i];
        console.log(arr.join(' ')); 
        i--;
    }
    arr[i+1] = stored;
    console.log(arr.join(' ')); 
}
