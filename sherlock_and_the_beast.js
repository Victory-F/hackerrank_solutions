// https://www.hackerrank.com/challenges/sherlock-and-the-beast/problem

function decentNumber(n) {
    if (n < 3) {
        console.log(-1);
        return;
    }
    if (n % 3 === 0) {
        console.log("5".repeat(n));
        return;
    }
    let fives = Math.floor(n / 3) * 3;
    while (fives >= 0) {
        let threes = n - fives;
        if (threes % 5 === 0) {
            console.log("5".repeat(fives) + "3".repeat(threes));
            return;
        }
        fives -= 3;
    }
    console.log(-1);
}
