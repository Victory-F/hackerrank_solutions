// https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(steps, path) {
  let stepsCount = 0;
  let valleysCount = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      stepsCount++;
      if (stepsCount === 0) {
        valleysCount++;
      }
    } else {
      stepsCount--;
    }
  }

  return valleysCount;
}
