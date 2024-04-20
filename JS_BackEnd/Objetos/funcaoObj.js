const estudante = {
    nome: "Rafael",
    idade: 25,
    cpf: "123.456.789-10",
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['123456789', '987654321'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false;
    }
}