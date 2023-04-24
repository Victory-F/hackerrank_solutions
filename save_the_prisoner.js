// https://www.hackerrank.com/challenges/save-the-prisoner/problem

function saveThePrisoner(n, m, s) {
    const seat = (m + s - 1) % n;
    return seat === 0 ? n : seat;
}
