const estudantes = require('./estudantes.json');

function filtraPorPropriedade(lista, propridade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propridade);//hasOwnProperty verifica se a propriedade existe
    })
}

const listaEnderecosIncompletos = filtraPorPropriedade(estudantes, 'cep');

console.log(listaEnderecosIncompletos);