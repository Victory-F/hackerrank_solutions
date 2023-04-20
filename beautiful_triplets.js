// https://www.hackerrank.com/challenges/beautiful-triplets/problem

function beautifulTriplets(d, arr) {
    let count = 0;
    const set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        const a = arr[i];
        if (set.has(a + d) && set.has(a + 2*d)) {
            count++;
        }
    }
    return count;
}
