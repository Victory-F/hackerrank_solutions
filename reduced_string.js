// https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (arr.length > 0 && s[i] === arr[arr.length - 1]) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  return arr.length === 0 ? "Empty String" : arr.join("");
}
