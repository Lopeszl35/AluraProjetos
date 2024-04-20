const livros = require('./listaLivros.js');

function menorValor(arrProdutos, posicaoInicial) {
    let menorValor = posicaoInicial;
    
    for(let i = posicaoicial; i < arrProdutos.length; i++) {
        if(arrProdutos[i].preco < arrProdutos[menorValor].preco) {
            menorValor = i;
        }
    }
    return menorValor;
}

module.exports = menorValor;

