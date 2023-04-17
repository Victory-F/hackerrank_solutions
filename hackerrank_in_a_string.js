// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem

function hackerrankInString(s) {
    let index = 0;
    const word = "hackerrank";
    for (const char of s) {
        if (char === word[index]) {
            index++;
            if (index === word.length) {
                return "YES";
            }
        }
    }
    return "NO";
}
