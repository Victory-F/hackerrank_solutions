// https://www.hackerrank.com/challenges/minimum-distances/problem

function minimumDistances(a) {
    const indices = {};
    let diff = a.length;
    let hasRepeating = false;
    for(let i = 0; i < a.length; i++){
        const num = a[i];
        if(indices[num] !== undefined){
            hasRepeating = true;
            let newDiff = i - indices[num];
            if(diff > newDiff){
                diff = newDiff;
            }
        }
        indices[num] = i;
    }
    return hasRepeating ? diff : -1;
}
