// https://www.hackerrank.com/challenges/chocolate-feast/problem

function chocolateFeast(n, c, m) {
    let bars = Math.floor(n/c);
    let wrappers = bars;
    while(wrappers >= m){
        wrappers -= m;
        bars++;
        wrappers++;
    }
    return bars;
}
