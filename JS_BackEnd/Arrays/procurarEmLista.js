const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listas = [alunos, medias];

function exibeNotaAluno(aluno) {
    if(listas[0].includes(aluno)) {//Verifica se o aluno existe
        const indice = listas[0].indexOf(aluno);//Fornece a posição do aluno
        const mediaAluno = listas[1][indice];
        console.log(`A média do aluno ${aluno} é ${mediaAluno}.`);
    } else {
        console.log(`${aluno} não encontrado.`);
    }
}

exibeNotaAluno('João');
exibeNotaAluno('Maria');