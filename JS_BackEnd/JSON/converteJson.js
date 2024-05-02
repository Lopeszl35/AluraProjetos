import estudantes from './Estudantes.json';

//Converte do formato JSON para String
const stringEstudante = JSON.stringify(estudantes);

console.log(stringEstudante);

//Converte do formato String para objeto
const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);
