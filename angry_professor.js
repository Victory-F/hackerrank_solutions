// https://www.hackerrank.com/challenges/angry-professor/problem

function angryProfessor(k, a) {
   return a.filter(a => a <= 0).length >= k ? "NO" : "YES"
}
