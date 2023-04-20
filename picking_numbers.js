// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
    let count = 0;
    let numCounts = new Array(100).fill(0);
    for (let i = 0; i < a.length; i++) {
        numCounts[a[i]]++; 
    }
    console.log(numCounts)
    for (let i = 0; i < numCounts.length - 1; i++) {
        count = Math.max(count, numCounts[i] + numCounts[i + 1]);
    }
    return count;
}
