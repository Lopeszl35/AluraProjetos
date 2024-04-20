const objetoTeste = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 25,
    telefones: ['123456789']
};

objetoTeste.telefones = [...objetoTeste.telefones, '987654321'];

console.log(objetoTeste.telefones);