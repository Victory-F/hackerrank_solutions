// https://www.hackerrank.com/challenges/two-characters/problem

function alternate(s) {
  let longest = 0;
  const unique = [...new Set(s)];
  for (let i = 0; i < unique.length - 1; i++) {
    for (let j = i + 1; j < unique.length; j++) {
      const newStr = s.replaceAll(
        new RegExp(`[^${unique[i]}${unique[j]}]`, "g"),
        ""
      );
      let valid = true;
      for (let k = 0; k < newStr.length - 1; k++) {
        if (newStr[k] === newStr[k + 1]) {
          valid = false;
          break;
        }
      }
      if (valid) {
        longest = Math.max(longest, newStr.length);
      }
    }
  }
  return longest;
}
