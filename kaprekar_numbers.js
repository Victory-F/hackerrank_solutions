// https://www.hackerrank.com/challenges/kaprekar-numbers/problem

function kaprekarNumbers(p, q) {
  const result = [];
  for (let i = p; i <= q; i++) {
    const square = i ** 2;
    const squareStr = square.toString();
    const index = squareStr.length - i.toString().length;
    const left = parseInt(squareStr.substring(0, index)) || 0;
    const right = parseInt(squareStr.substring(index)) || 0;
    if (left + right === i) {
      result.push(i);
    }
  }
  if (result.length > 0) {
    console.log(result.join(" "));
  } else {
    console.log("INVALID RANGE");
  }
}
