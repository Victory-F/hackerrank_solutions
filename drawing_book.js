// https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n, p) {
    const front = Math.floor(p / 2);
    const back =  Math.floor(n % 2 == 0 ? (n - p + 1) / 2 : (n - p) / 2);
    return Math.min(front, back);
}
