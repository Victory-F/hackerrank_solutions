// https://www.hackerrank.com/challenges/fair-rations/problem

function fairRations(B) {
    const n = B.length;
    let loaves = 0;
    for (let i = 0; i < n - 1; i++) {
        if (B[i] % 2 !== 0) {
            B[i]++;
            B[i+1]++;
            loaves += 2;
        }
    }
    return B[n-1] % 2 === 0 ? loaves : "NO";
}
