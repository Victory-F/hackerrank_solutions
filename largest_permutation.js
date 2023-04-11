// https://www.hackerrank.com/challenges/largest-permutation/problem

function largestPermutation(k, arr) {
    const n = arr.length;
    const index = {};
    for (let i = 0; i < n; i++) {
        index[arr[i]] = i;
    }

    for (let i = 0; i < n && k > 0; i++) {
        if (arr[i] === n - i) continue;
        const el = arr[i];
        arr[i] = n - i;
        arr[index[n - i]] = el;
        index[el] = index[n - i];
        index[n - i] = i;
        k--;
    }
    return arr;
}
