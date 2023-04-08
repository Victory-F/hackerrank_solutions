// https://www.hackerrank.com/challenges/countingsort2/problem

function countingSort(arr) {
        const freq = new Array(100).fill(0);
        
        for(const num of arr){
            freq[num]++;
            }
            
        const freqC = [];
        
        for(let i=0; i < freq.length; i++){
            let count = freq[i];
               while(count > 0){
                   freqC.push(i)
                   count--;
               }
            }
            return freqC;
}
