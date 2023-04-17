// https://www.hackerrank.com/challenges/separate-the-numbers/problem

function separateNumbers(s) {
  const n = s.length;
  for (let len = 1; len <= Math.floor(n / 2); len++) {
    let num = BigInt(s.slice(0, len));
    let j = len;
    while (j < n) {
      let expected = String(num + BigInt(1));
      let sub = s.slice(j, j + expected.length);
      if (sub !== expected) {
        break;
      }
      num++;
      j += expected.length;
    }
    if (j === n) {
      return console.log("YES " + s.slice(0, len));
    }
  }
  return console.log("NO");
}
