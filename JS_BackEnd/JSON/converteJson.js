const estudande = require('./estudante.json');

//Converte do formato JSON para String
const stringEstudante = JSON.stringify(estudande);

console.log(stringEstudante);

//Converte do formato String para objeto
const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);
