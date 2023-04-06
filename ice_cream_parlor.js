// https://www.hackerrank.com/challenges/icecream-parlor/problem

function icecreamParlor(m, arr) {
  const types = new Map();
  for (let i = 0; i < arr.length; i++) {
    const spent = m - arr[i];
    if (types.has(spent)) {
      return [types.get(spent) + 1, i + 1];
    }
    types.set(arr[i], i);
  }
}
