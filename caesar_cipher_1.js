// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

function caesarCipher(s, k) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    let cipher = "";
    for (const char of s) {
        if (upper.includes(char)) {
            const index = (upper.indexOf(char) + k) % 26;
            cipher += upper[index];
        } else if (lower.includes(char)) {
            const index = (lower.indexOf(char) + k) % 26;
            cipher += lower[index];
        } else {
            cipher += char;
        }
    }
    return cipher;
}
