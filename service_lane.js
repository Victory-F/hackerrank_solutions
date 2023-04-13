// https://www.hackerrank.com/challenges/service-lane/problem

function serviceLane(n, width, cases) {
  const result = [];
  for (const c of cases) {
    const minLength = Math.min(...width.slice(c[0], c[1] + 1));
    result.push(minLength);
  }
  return result;
}
