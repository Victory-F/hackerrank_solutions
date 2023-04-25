// https://www.hackerrank.com/challenges/misere-nim-1/problem

function misereNim(s) {
    const total = s.reduce((acc, stones) => acc += stones, 0);
    if (total === s.length) {
        return total % 2 === 0 ? "First" : "Second";
    }
    return s.reduce((acc, stones) => acc ^= stones, 0) ? "First" : "Second";
}
