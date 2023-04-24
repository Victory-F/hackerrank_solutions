// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem

function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b); 
    let minDiff = Math.abs(arr[0] - arr[1]); 
    for (let i = 1; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i] - arr[i + 1]);
        if (diff < minDiff) {
            minDiff = diff;
        }
    }
    return minDiff;
}
