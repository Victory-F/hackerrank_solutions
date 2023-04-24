// https://www.hackerrank.com/challenges/taum-and-bday/problem

function taumBday(b, w, bc, wc, z) {
    const minCostB = BigInt(Math.min(Number(bc), Number(wc) + Number(z)));
    const minCostW = BigInt(Math.min(Number(wc), Number(bc) + Number(z)));
    return BigInt(b) * minCostB + BigInt(w) * minCostW;
}
