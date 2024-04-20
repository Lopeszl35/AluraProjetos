const fs = require('fs');
const animais = require('./animais.json');

const objAnimais = JSON.parse(JSON.stringify(animais));
const novoAnimal = {
    id: 4,
    nome: 'Tatu',
    tipo: 'mamifero',
    habitat: 'savana'
}

const novaPessoa = {
    id: 4,
    nome: 'Joaquim',
    idade: 25,
    cpf: '12345678901'
}

objAnimais.pessoas.push(novaPessoa);
objAnimais.animais.push(novoAnimal);

objAnimais.animais.forEach((element) => {
    if(element.id === 4) {
        element.nome = 'Leão';
    }
});

objAnimais.pessoas.forEach((element) => {
    if(element.id === 4) {
        element.id = 3;
    }
})

// Usando filter para remover um animal específico do array
objAnimais.animais = objAnimais.animais.filter((animal) => animal.id !== 4)// Retorna um novo array

// Converte o objeto modificado para uma string JSON
const novaStringJsonAnimais = JSON.stringify(objetoAnimais, null, 2);


console.log(objAnimais);
