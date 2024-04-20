const estudande = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    enderecos: [{
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'apto 100',
    },
    {
        logradouro: 'Rua DEF',
        numero: 456,
        complemento: 'apto 200',
    }]
}

const dadosEnvio = {
    destinatario: estudande.nome,
    ...estudande.enderecos[0]
};

console.log(dadosEnvio);

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
    
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

const guerreiro = { 
    ...fichaGuerreiro, 
    ...equipoGuerreiro 
}
    console.log(guerreiro)
