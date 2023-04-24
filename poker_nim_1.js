// https://www.hackerrank.com/challenges/poker-nim-1/problem

function pokerNim(k, c) {
    return c.reduce((a,v)=>a^=v) === 0 ? "Second" : "First"
}
