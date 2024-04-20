const estudandes = require('./estudantes.json');

function buscaInfo(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));//o includes faz buscar tanto string quanto array
}

const estudandeEncontrado = buscaInfo(estudandes, 'nome', 'Juliet');
console.log(estudandeEncontrado);

const telefoneEstudande = buscaInfo(estudandes, 'telefone', '4733865848');
console.log(telefoneEstudande);