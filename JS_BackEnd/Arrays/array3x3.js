const matrix = [];
let cont = 1;

for(let i = 0; i < 3; i++) {
    matrix[i] = [];
    for(let j = 0; j < 3; j++) {
        matrix[i][j] = cont;
        cont++;
    }
}

console.log(matrix);