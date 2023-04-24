// https://www.hackerrank.com/challenges/save-the-prisoner/problem

function saveThePrisoner(n, m, s) {
    let last = (m + s - 1) % n;
    return last === 0 ? n : last;
}
