// https://www.hackerrank.com/challenges/cavity-map/problem

function cavityMap(grid) {
    const n = grid.length;
    for(let i = 1; i < n-1; i++){
        for(let j = 1; j < n-1; j++){
            const current = grid[i][j];
            const maxCell = Math.max(grid[i-1][j], grid[i][j-1], grid[i][j+1],grid[i+1][j])
            
            if(current > maxCell){
                grid[i] = [...grid[i]];
                grid[i][j] = "X";
                grid[i] = grid[i].join("");
            }
        }
    }
    return grid;
}
