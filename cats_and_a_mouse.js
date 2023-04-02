// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
  const catA = Math.abs(z - x);
  const catB = Math.abs(z - y);

  return catA < catB
    ? "Cat A"
    : catA > catB
    ? "Cat B"
    : "Mouse C";
}
