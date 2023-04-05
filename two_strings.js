// https://www.hackerrank.com/challenges/two-strings/problem

function twoStrings(s1, s2) {
    const charSet = new Set(s1);
    for(const char of charSet){
        if(s2.includes(char)){
            return "YES"
        }
    }
    return "NO"
}
