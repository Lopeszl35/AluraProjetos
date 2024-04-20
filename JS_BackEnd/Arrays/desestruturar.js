const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listas = [alunos, medias];

function exibeNotaAluno(aluno) {
    if(listas[0].includes(aluno)) {//Verifica se o aluno existe
        const [alunos, medias] = listas;//Separa os arrays contidos em listas para outros arrays
        const indice = alunos.indexOf(aluno);//Fornece a posição do aluno
        const mediaAluno = medias[indice];
        console.log(`A média do aluno ${aluno} é ${mediaAluno}.`);
    } else {
        console.log(`${aluno} não encontrado.`);
    }
}

exibeNotaAluno('João');
exibeNotaAluno('Maria');

