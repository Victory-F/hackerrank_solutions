https://www.hackerrank.com/challenges/flipping-the-matrix/problem

function flippingMatrix(matrix) {
  const halfLength = matrix.length / 2;
  const lastIndex = matrix.length - 1;
  let sum = 0;
  for (let i = 0; i < halfLength; i++) {
    const revI = lastIndex - i;
    for (let j = 0; j < halfLength; j++) {
      const revJ = lastIndex - j;
      const max = Math.max(
        matrix[i][j],
        matrix[revI][j],
        matrix[i][revJ],
        matrix[revI][revJ]
      );
      sum += max;
    }
  }
  return sum;
}
