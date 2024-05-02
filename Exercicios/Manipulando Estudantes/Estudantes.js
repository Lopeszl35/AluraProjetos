const estudantes = [
    {
        nome: 'João',
        idade: 24,
        notas: [10, 10, 10, 5.5, 10]
    },
    {
        nome: 'Maria',
        idade: 30,
        notas: [10, 6, 8, 5.5, 10]
    },
    {
        nome: 'Joaquim',
        idade: 25,
        notas: [10, 10, 8, 5.5, 10]  
    },
    {
        nome: 'Ana',
        idade: 23,
        notas: [10, 6, 8, 5.5, 10]
    }
]

function mediaNotas(estudante) {
    const soma = estudante.notas.reduce((acumulador, valor) => acumulador += valor, 0);
    return soma / estudante.notas.length;
}

function adicionarMediaAoEstudante(estudante) {
    const estudanteMedia = {...estudante, media: mediaNotas(estudante)};
    return estudanteMedia;
}

function ordenarPelaNota(estudantes) {
    return estudantes.sort((a, b) => b.media - a.media);
}

function filtrarAlunosNota7(estudantes) {
    const notas7 = estudantes.filter((estudante) => estudante.media >= 7);
    return ordenarPelaNota(notas7);
}

const estudantesComMedia = estudantes.map(adicionarMediaAoEstudante);
const alunosFiltrados = filtrarAlunosNota7(estudantesComMedia);

console.log('Alunos com nota maior que 7:');
alunosFiltrados.forEach(aluno => {
    console.log(`
    Nome: ${aluno.nome}
    Média: ${aluno.media}`)
});
