const listaPessoas = [
    {
        nome: 'Rafael',
        idade: 24,
        cidade: 'Presidente Prudente'
    },
    {
        nome: 'Maria',
        idade: 30,
        cidade: 'Santa Maria'
    },
    {
        nome: 'Joaquim',
        idade: 25,
        cidade: 'Presidente Prudente'
    }
];

function mostrarListaPessoas(listaPessoas) {
    for(let pessoa of listaPessoas) {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    }
}

function procurarPorCidade(pessoas, cidade) {
    return pessoas.filter((pessoa) => pessoa.cidade.toLowerCase() === cidade.toLowerCase());
}

const novaPessoa = {
    nome: 'Ana',
    idade: 30,
    cidade: 'Santa Maria'
}

listaPessoas.push(novaPessoa);

mostrarListaPessoas(listaPessoas);
console.log(procurarPorCidade(listaPessoas, 'Santa Maria'));