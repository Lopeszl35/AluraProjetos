const pessoa = {
    nome: 'Rafael',
    notas: [10, 6, 8, 5.5, 10],
    calcularMediaNotas: function() {
        let media = 0;
        const soma = this.notas.reduce((acumulador, valor) => acumulador += valor, 0);
        return media = soma / this.notas.length;
    },
    classificarDesempenho: function() {
        const media = this.calcularMediaNotas();
        if(media >= 9) {
            return console.log('Desempenho Excelente');
        }
        else if(media >= 7.6 && media <= 8.9) {
            return console.log('Bom desempenho');
        }
        else if(media >= 6 && media <= 7.5) {
            return console.log('Desempenho regular');
        }
        else {
            return console.log('Desempenho insuficiente');
        }
    }
}
const mediaPessoa = pessoa.calcularMediaNotas();
console.log(mediaPessoa);
pessoa.classificarDesempenho();