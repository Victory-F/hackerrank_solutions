// https://www.hackerrank.com/challenges/flipping-bits/problem

function flippingBits(n) {
  const bits = n
    .toString(2)
    .replace(/./g, (bit) => (bit === "0" ? "1" : "0"))
    .padStart(32, "1");
  return parseInt(bits, 2);
}
