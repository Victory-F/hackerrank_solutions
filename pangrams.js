// https://www.hackerrank.com/challenges/pangrams/problem

function pangrams(s) {
    const unique = new Set(s.toLowerCase().split(" ").join("")).size;
    return unique === 26 ? "pangram" : "not pangram"  
}
