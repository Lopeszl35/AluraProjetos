const estudande = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    enderecos: [{
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'apto 100',
    }]
}

estudande.enderecos.push({
    logradouro: 'Rua DEF',
    numero: 456,
    complemento: 'apto 200',
})

//console.log(estudande.endereco);
//console.log(estudande.endereco[1]);

//Retorna somente os endereços que contenha o complemento
const listaEnderecoComplemento = estudande.enderecos.filter((endereco) => endereco.complemento); 

console.log(listaEnderecoComplemento);

