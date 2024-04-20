const pessoa = {
    nome: 'Rafael',
    idade: 24,
    solteiro: true,
    hobbies: ['programar', 'jogar', 'estudar']
};

function mostrarInfoPessoa(Objpessoa) {
    console.log(`Meu nome é ${Objpessoa.nome} e tenho ${Objpessoa.idade} anos, estou ${Objpessoa.solteiro ? 'solteiro' : 'casado'}, gosto de ${Objpessoa.hobbies.join(', ')}`);
}

mostrarInfoPessoa(pessoa)