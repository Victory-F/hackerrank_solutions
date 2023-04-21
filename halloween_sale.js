// https://www.hackerrank.com/challenges/halloween-sale/problem

function howManyGames(p, d, m, s) {
    let count = 0;
    while(s >= p){
        s -= p;
        p = Math.max(p - d, m);
        count++;
    }
    return count;
}
