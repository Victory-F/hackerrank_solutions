// https://www.hackerrank.com/challenges/funny-string/problem

function funnyString(s) {
    const n = s.length;
    let i = 0;
    while (i < n-1) {
        const pair1 = Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1));
        const pair2 = Math.abs(s.charCodeAt(n-2-i) - s.charCodeAt(n-1-i))
        if(pair1 !== pair2){
            return "Not Funny"
        }
        i++;
    }
    return "Funny"
}
