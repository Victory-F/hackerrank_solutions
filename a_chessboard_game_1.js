// https://www.hackerrank.com/challenges/a-chessboard-game-1/problem

function chessboardGame(x, y) {
    x = x % 4;
    y = y % 4;
    return (y === 0 || y === 3 || x === 0 || x === 3) ? 'First' : 'Second';
}
