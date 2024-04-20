const pessoa = {
    nome: 'Rafael',
    idade: 24,
    solteiro: true,
    hobbies: ['programar', 'jogar', 'estudar'],
}

const copiaPessoa = {...pessoa};//Primeiro modo de fazer uma cópia de um objeto sem fazer referencia ao objeto original
copiaPessoa.proficao = 'Administrador'

const copiaProfunda = JSON.parse(JSON.stringify(pessoa));//Segundo modo de fazer uma cópia de um objeto sem fazer referencia ao objeto original
copiaProfunda.proficao = 'Programador'

console.log(pessoa);
console.log(copiaPessoa);
console.log(copiaProfunda)