// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

function jumpingOnClouds(c, k) {
    let energy = 100;
    let i = 0;
    const n = c.length;
    do {
        i = (i + k) % n;
        energy -= c[i] == 1 ? 3 : 1;
    } while (i != 0);  
    return energy;
}
