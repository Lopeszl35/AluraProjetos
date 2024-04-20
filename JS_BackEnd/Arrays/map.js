const notas = [10, 6, 8, 5.5, 10];

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas);

const arrayNums = [1, 2, 3, 4];

const arrayMultiplicado = arrayNums.map((num) => num * 10);

console.log(arrayMultiplicado);