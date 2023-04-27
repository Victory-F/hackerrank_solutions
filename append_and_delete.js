// https://www.hackerrank.com/challenges/append-and-delete/problem

function appendAndDelete(s, t, k) {
    let count = 0
    for (let i = 0; i === count && i < s.length; i++) {
        if (s[i] === t[i]) {
            count++
        }
    }
    const tDiff = t.length - count;
    const sDiff = s.length - count;
    const sum = tDiff + sDiff;
    const num = k - sum;

    if (sum < k && t.length + s.length > k && num % 2 !== 0) {
        return "No"
    } else if (sum <= k) {
        return "Yes"
    } else {
        return "No"
    }
}
