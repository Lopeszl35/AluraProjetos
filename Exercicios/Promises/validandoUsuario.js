const usuarios = [
    { nome: 'Diego', idade: 23 },
    { nome: 'Gabriel', idade: 15 },
    { nome: 'Lucas', idade: 30 },
    { nome: 'Pedro', idade: 18 },
    { nome: 'Arthur', idade: 25 },
    { nome: 'Vinicius', idade: 18 },
    { nome: 'Vitor', idade: 30 }
];

async function buscarUsuario(usuarios, nome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = usuarios.find((usuario) => usuario.nome === nome);
            if(usuario) {
                resolve(`Usuário ${nome} encontrado!\nDados do usuário:\nNome: ${usuario.nome}, Idade: ${usuario.idade}`);
            } else {
                reject(`Usário ${nome} não encontrado!`);
            }
        }, 2000);
    });
}

buscarUsuario(usuarios, 'rafael')
    .then(console.log)
    .catch(console.log);
