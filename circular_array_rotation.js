// https://www.hackerrank.com/challenges/circular-array-rotation/problem

function circularArrayRotation(a, k, queries) {
    const rotations = k % a.length;
    const rotated = a.slice(-rotations).concat(a.slice(0,-rotations));
    return queries.map(q => rotated[q]);
}
