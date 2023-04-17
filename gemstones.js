// https://www.hackerrank.com/challenges/gem-stones/problem

function gemstones(arr) {
    let count = 0;
    arr.sort((a,b) => a.length - b.length)
    const unique = new Set(arr[0])
    for(const char of unique){
       const length = arr.slice(1).filter(a => a.includes(char)).length;
       if(length === arr.length-1){
           count++;
       }
    }
    return count;
}
