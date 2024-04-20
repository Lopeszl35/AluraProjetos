const livros = require('./livros.js');
const menorValor = require('./menorValor.js');

for(let i = 0; i < livros.length; i++) {
    let menor = menorValor(livros, i);

    let livroAtual = livros[i];
    let livroMenorPreco = livros[menor];

    livros[i] = livroMenorPreco;
    livros[menor] = livroAtual;
}