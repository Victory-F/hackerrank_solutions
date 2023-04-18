// https://www.hackerrank.com/challenges/anagram/problem

function anagram(s) {
    const n = s.length;
    if (n % 2 !== 0) {
        return -1;
    }
    const mid = n / 2;
    const freq = {};
    let count = 0;
    for (let i = 0; i < n; i++) {
        const char = s[i];
        if (i < mid) {
            freq[char] = (freq[char] || 0) + 1;
        } else {
            freq[char] = (freq[char] || 0) - 1;
            if (freq[char] < 0) {
                count++;
            }
        }
    }
    return count;
}
